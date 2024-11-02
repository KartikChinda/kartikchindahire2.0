import nextjsLogo from "@/public/nextjsblack.png";
import typescriptLogo from "@/public/typescript.png";
import clerkLogo from "@/public/clerk.jpeg";
import tailwindLogo from "@/public/tailwindlogo.jpg";
import appleLogo from "@/public/apple-touch-icon.png";
import streamLogo from "@/public/stream.png";
import javascriptLogo from "@/public/javascript.png";
import Pixel from "@/public/pixel.png";
import Sketch from "@/public/sketch.png";
import ColorMyApp from "@/public/color.png";

const projects = [
    {
        id: 1, 
        name: "PixelPlex",
        description: "A fully functioning video conferencing app, PixelPlex revolutionizes your virtual interactions with seamless, high-quality video conferencing, crystal-clear communication and collaboration, intuitive features and a user-friendly interface. Schedule meetings, record meetings, and do so much more on PixelPlex, and experience the future of virtual engagement.",
        image: Pixel,
        website: "https://pixel-plex.vercel.app/",
        github: "https://github.com/KartikChinda/pixelPlex",
        skills : [
            { link: "https://nextjs.org", imageURL: nextjsLogo, name: "Next.js" },
            { link: "https://www.typescriptlang.org", imageURL: typescriptLogo , name: "Typescript"},
            { link: "https://clerk.dev", imageURL: clerkLogo, name: "Clerk" },
            { link: "https://tailwindcss.com", imageURL: tailwindLogo, name: "Tailwind CSS" },
            { link: "https://ui.shadcn.com/", imageURL: appleLogo, name: "Shad-cn UI" },
            { link: "https://getstream.io", imageURL: streamLogo, name: "Stream" }
        ],

    },
    {
        id: 2,
        name: "SketchTogether",
        description: "SketchTogether could be the game you play with a friend to pass the time, or the ultimate collaborative sketching experience. Unleash your creativity and bond with friends as you co-create on a shared sketchboard. The rules are simple, so come on, unleash your inner talent and transform doodling into an engaging and fun experience. Dive into the joy of artistic collaboration, and have fun.",
        website: "https://sketch-together.vercel.app/",
        github: "https://github.com/KartikChinda/sketchTogether",
        image: Sketch,
        skills : [
            { link: "https://nextjs.org", imageURL: nextjsLogo, name: "Next.js" },
            { link: "https://www.typescriptlang.org", imageURL: typescriptLogo, name: "Typescript" },
            { link: "https://tailwindcss.com", imageURL: tailwindLogo, name: "Tailwind CSS" },
          ]
    },
    {
        id: 3,
        name: "ColorMyApp",
        description: "Still searching for a color palettes for your next project? Look no further, for your search ends here. Choose from a stunning range of palettes uploaded by people all over the world, preview them on a sample site before deciding the final palette for your work. Not only this, if you have a gorgeous color palette, share it with the rest of the world to see.",
        website: "https://colormyapp.vercel.app/",
        github: "https://github.com/KartikChinda/colormyapp",
        image: ColorMyApp,
        skills : [
            { link: "https://nextjs.org", imageURL: nextjsLogo, name: "Next.js" },
            { link: "https://www.javascript.com/", imageURL: javascriptLogo, name: "Javascript" },
            { link: "https://tailwindcss.com", imageURL: tailwindLogo, name: "Tailwind CSS" },
          ]
    }
]

export default projects;