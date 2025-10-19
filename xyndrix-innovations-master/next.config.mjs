/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'via.placeholder.com',    // For placeholder images
      'i.imgur.com',            // For imgur hosted images
      'images.unsplash.com',    // For unsplash images
      'res.cloudinary.com',     // For cloudinary images
      'karupafoundation.com',   // For Karupa Foundation logo
      'kahedu.edu.in',          // For KAHE logo
      'www.kahedu.edu.in',      // For KAHE logo with www
      'img.kompass.com',        // For KAHE logo from Kompass
      'www.suryacoconut.shop',  // For Surya Coconut logo
      'csemeta.vercel.app',     // For CSEMeta logo
      'suryacoconut.shop',      // Alternative domain for Surya Coconut
      'vercel.app',             // For vercel hosted images
      // Add more domains as needed for your image hosting
    ],
  },
};

export default nextConfig;
