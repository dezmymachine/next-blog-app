/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"res.cloudinary.com",
                port:"",
                pathname:"/dnemeq7mr/image/upload/**"
            }
        ]
    }
};

export default nextConfig;

//https://res.cloudinary.com/dnemeq7mr/image/upload/v1719617642/cr9naeex1o3jg6c8rdtv.jpg
