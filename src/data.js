import HeroImage from "/assets/hero-img.webp";
import AboutImage from "/assets/about-img.jpg";

const Image = {
  HeroImage,
  AboutImage,
};

export default Image;
import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/php.png";
import Tools10 from "/assets/tools/Laravel.png";
import Tools11 from "/assets/tools/canva.png";
import Tools12 from "/assets/tools/figma.png";
import Tools13 from "/assets/tools/flutter.png";
import Tools14 from "/assets/tools/blender.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "PHP",
    ket: "Language",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Laravel",
    ket: "framework PHP",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Canva",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
    dad: "1200",
  },
  {
    id: 13,
    gambar:Tools13,
    nama: "Flutter",
    ket: "Framework Mobile",
    dad: "1200",
  },
  {
    id: 14,
    gambar:Tools14,
    nama: "Blender",
    ket: "3D Modeling",
    dad: "1300",
  }
];
import Sertifikat1 from "/assets/sertifikat/sertifikat1.jpg";
import Sertifikat2 from "/assets/sertifikat/sertifikat2.jpg";
import alibabaGenAiConcepts from '/assets/sertifikat/sertif-alibaba-gen-ai-concepts.jpg';
import alibabaBasicServices from '/assets/sertifikat/sertif-alibaba-basic-services.jpg';
import alibabaBigData from '/assets/sertifikat/sertif-alibaba-big-data.jpg';
import alibabaDiveGenAi from '/assets/sertifikat/sertif-alibaba-dive-gen-ai.jpg';
import alibabaAiMlCareer from '/assets/sertifikat/sertif-alibaba-ai-ml-career.jpg';


export const listSertifikat = [
  {
    id: 1,
    gambar: Sertifikat1, // Gambar yg udah di-impor
    nama: "Juara 3 Story Code",
    penyelenggara: "Horizon University",
    tahun: "2024",
    link: "" // Ganti '#' dengan link sertifikat/bukti kalo ada
  },
  {
    id: 2,
    gambar: Sertifikat2, // Gambar yg udah di-impor
    nama: "Peserta UI/UX Competition",
    penyelenggara: "Technoday 2025",
    tahun: "2025",
    link: ""
  },
  {
      id: 3,
      gambar: alibabaGenAiConcepts,
      nama: "Getting to Know Generative AI and its Concepts",
      penyelenggara: "Alibaba Cloud",
      tahun: "2025",
      link: ""  
    },
    {
      id: 4,
      gambar: alibabaBasicServices,
      nama: "Getting to Know Basic Services of Alibaba Cloud",
      penyelenggara: "Alibaba Cloud",
      tahun: "2025",
      link: ""  
    },
    {
      id: 5,
      gambar: alibabaBigData,
      nama: "Introduction to Alibaba Cloud Big Data",
      penyelenggara: "Alibaba Cloud",
      tahun: "2025",
      link: ""  
    },
    {
      id: 6,
      gambar: alibabaDiveGenAi,
      nama: "Dive Into Generative AI",
      penyelenggara: "Alibaba Cloud",
      tahun: "2025",
      link: ""  
    },
    {
      id: 7,
      gambar: alibabaAiMlCareer,
      nama: "Career Advancement in AI and Machine Learning",
      penyelenggara: "Alibaba Cloud",
      tahun: "2025",
      link: ""  
    },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Sekolah",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "AOS", "Swiper", "Lightbox Gallery"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
  },
];
