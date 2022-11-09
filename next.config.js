/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: { dirs: ['src'] },
    compiler: {
        styledComponents: true,
    },
    swcMinify: true,
    env: {
        X_API_KEY: '',
    },
}

module.exports = nextConfig