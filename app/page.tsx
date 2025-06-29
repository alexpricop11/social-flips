"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/auth/register");
        }
    }, []);

    return (
        <main className="p-5 text-center">
            <h1 className="text-2xl">Bine ai venit pe Pagina principală!</h1>
        </main>
    );
}
