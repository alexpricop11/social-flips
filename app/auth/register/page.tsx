"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import RegisterForm from "@/app/components/auth/RegisterForm";

export default function RegisterPage() {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/");
        }
    }, []);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-950">
            <RegisterForm/>
        </div>
    );
}
