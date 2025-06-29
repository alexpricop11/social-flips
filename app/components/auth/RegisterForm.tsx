"use client";

import {useState} from "react";
import PasswordInput from "@/app/components/auth/PasswordInput";
import InputField from "@/app/components/auth/InputField";
import {useRouter} from "next/navigation";

export default function RegisterForm() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, email, password}),
        });
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem("token", data.token);
            router.push("/");
        } else {
            alert(data.error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-black p-8 rounded-xl shadow-md w-full max-w-sm flex flex-col gap-4"
        >
            <h1 className="text-2xl font-bold text-center mb-4 text-white">
                Înregistrează-te
            </h1>

            <InputField
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <InputField
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <PasswordInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
            >
                Înregistrează-te
            </button>
        </form>
    );
}
