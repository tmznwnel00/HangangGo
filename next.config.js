/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: "/:path*",
            destination: `http://27.119.34.53:8080/:path*`
          },
        ];
      },
}

module.exports = nextConfig
