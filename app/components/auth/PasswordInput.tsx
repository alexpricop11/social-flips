"use client"

import React, {useState} from "react";

interface PasswordInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({value, onChange}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="relative">
            <input
                type={showPassword ? "text" : "password"}
                placeholder="Parolă"
                value={value}
                onChange={onChange}
                required
                className="border border-gray-300 rounded-md p-3 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
                {showPassword ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M10 3C5.5 3 2 8 2 8s3.5 5 8 5 8-5 8-5-3.5-5-8-5zm0 8a3 3 0 110-6 3 3 0 010 6z"/>
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L6.414 5l1.793 1.793a5 5 0 016.827 6.827L15 13.586l1.293 1.293a1 1 0 01-1.414 1.414L4.293 5.707a1 1 0 010-1.414zM10 5a5 5 0 00-3.584 8.584l1.415-1.415A3 3 0 0110 7a3 3 0 012.999 2.999l1.415-1.415A5 5 0 0010 5z"
                            clipRule="evenodd"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
}