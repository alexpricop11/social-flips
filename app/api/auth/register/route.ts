import {NextResponse} from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/lib/prisma";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

export async function POST(req: Request) {
    try {
        const {username, email, password} = await req.json();
        if (!username || !email || !password) {
            return NextResponse.json({error: "Missing fields"}, {status: 400});
        }
        if (!email.includes("@")) {
            return NextResponse.json({error: "Email invalid"}, {status: 400})
        }
        if (password.length < 6) {
            return NextResponse.json({error: "Parola trebuie să aibă minim 8 caractere"}, {status: 400});

        }
        const existingUser = await prisma.user.findUnique({where: {email}});
        if (existingUser) {
            return NextResponse.json({error: "Email deja folosit"}, {status: 400});
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPass
            }
        });
        const token = jwt.sign({
                userId: user.id, email: user.email
            },
            JWT_SECRET,
            {expiresIn: "7d"}
        );
        return NextResponse.json({message: "Înregistrare cu succes", token});
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "Eroare server"}, {status: 500});
    }
}