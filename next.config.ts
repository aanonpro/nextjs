import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    remotePatterns:[
      new URL('https://hldak.mmtcdn.com/**'),
      new URL('https://s.abcnews.com/**')
    ]
  }
};

export default nextConfig;
