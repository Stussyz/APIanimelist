/** @type {import('next').NextConfig} */
const nextConfig = {
    // config placehold.co 
    images:{
        remotePatterns: [
            {
                hostname:"cdn.myanimelist.net"
            }
        ]
    }

};

export default nextConfig;
