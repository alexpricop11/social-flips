/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
    allowedDevOrigins: [
        "http://localhost:3000",
        "http://172.18.0.1:3000",
    ],
};

module.exports = nextConfig;
