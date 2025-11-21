import { useState } from 'react';
import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data";
import ModelChibi from './components/ModelChibi';
import { useInView } from 'react-intersection-observer';
import LogoKampus from '/assets/logo_college.png';


// --- 1. KOMPONEN ANIMASI REUSABLE ---
// Ini bikin kita gak perlu nulis useInView berulang-ulang di setiap section
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

function App() {
  const [showCvMenu, setShowCvMenu] = useState(false);
  // --- 2. DATA SOSIAL MEDIA (Refactor) ---
  // Gampang kalau mau nambah sosmed, tinggal tambah object di sini
  const socialLinks = [
    { id: 1, name: 'LinkedIn', icon: 'ri-linkedin-box-fill', color: 'text-blue-500', link: 'https://linkedin.com/in/username-lo' },
    { id: 2, name: 'GitHub', icon: 'ri-github-fill', color: 'text-white', link: 'https://github.com/username-lo' },
    { id: 3, name: 'Facebook', icon: 'ri-facebook-box-fill', color: 'text-blue-600', link: 'https://facebook.com/username-lo' },
    { id: 4, name: 'Instagram', icon: 'ri-instagram-fill', color: 'text-pink-500', link: 'https://instagram.com/username-lo' },
    { id: 5, name: 'Whatsapp', icon: 'ri-whatsapp-fill', color: 'text-green-600', link: 'https://whatsapp.com/channel/username-lo' },
  ];

  // Hook khusus untuk Polaroid (Karena rotasinya unik, tetap dipisah)
  const { ref: polaroidRef, inView: polaroidInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      {/* Hero Section */}
      {/* Tambahkan 'FadeIn' agar text muncul perlahan */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1 min-h-[90vh]" id="beranda">
        <FadeIn>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800/50 backdrop-blur-sm w-fit p-4 rounded-2xl border border-zinc-700">
            <q className="text-zinc-300">Code Adalah Jalan Ninjaku.😁</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Hi, Saya Riski Ramadhan
          </h1>
          <p className="text-base/loose mb-8 opacity-60 md:w-4/5">
            Riski Ramadhan di sini! Mahasiswa semester 5 Informatika di
            Horizon University Indonesia, asli Subang. Saya seorang full-stack
            enthusiast dengan fokus pada pengembangan front-end dan back-end.
          </p>
          <div className="flex items-center sm:gap-4 gap-3 flex-wrap">
           <a 
              href="https://drive.google.com/uc?export=download&id=1_oDgrXEPUoUvgq1eAqw8YPFtP9l-Hndp" 
              className="bg-violet-700 px-6 py-3 rounded-xl hover:bg-violet-600 transition-colors flex items-center gap-2 font-medium text-white shadow-lg shadow-violet-700/20"
            >
              Download CV <i className="ri-download-cloud-2-line"></i>
            </a>
            <a href="#proyek" className="bg-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center gap-2">
              Lihat Proyek <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </FadeIn>
        
        {/* Model 3D */}
        <div className="w-full max-w-[500px] h-[500px] mx-auto md:ml-auto md:mr-0 z-0 relative">
            {/* Efek glow di belakang model */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-600/20 blur-[100px] rounded-full -z-10"></div>
            <ModelChibi />
        </div>
      </div>

      {/* --- Bagian Tentang (Collage Edition) --- */}
<div className="tentang mt-32 py-10" id="tentang">
  <FadeIn>
    <h2 className="text-3xl font-bold text-center mb-16">Tentang Saya</h2>
  </FadeIn>

  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* --- KOLOM KIRI: GALERI FOTO TUMPUK (COLLAGE) --- */}
    <div className="relative w-full max-w-md mx-auto h-[400px] flex items-center justify-center group">
      
      {/* Foto 1 (Belakang - Miring Kiri) */}
      <div className="absolute top-4 left-4 w-64 h-80 z-10 transform rotate-[-6deg] transition-all duration-500 group-hover:rotate-[-12deg] group-hover:scale-105">
        <div className="w-full h-full bg-white p-2 pb-8 rounded-lg shadow-xl">
           {/* Ganti src ini dengan foto kamu yang lain */}
          <img 
            src={DataImage.Riski2}
            alt="Foto Riski 1" 
            className="w-full h-full object-cover rounded bg-zinc-200"
          />
        </div>
      </div>

      {/* Foto 2 (Depan - Miring Kanan) */}
      <div className="absolute top-10 right-8 w-60 h-72 z-20 transform rotate-[6deg] transition-all duration-500 group-hover:rotate-[12deg] group-hover:translate-x-4">
        <div className="w-full h-full bg-white p-2 pb-8 rounded-lg shadow-2xl border border-zinc-200">
           {/* Ini foto utama (DataImage.AboutImage) */}
          <img 
            src={DataImage.AboutImage} 
            alt="Foto Riski 2" 
            className="w-full h-full object-cover rounded bg-zinc-200"
          />
        </div>
      </div>

      {/* LOGO KAMPUS (Floating Badge) */}
      <div className="absolute -bottom-4 -left-2 z-30 animate-bounce-slow">
        <div className="bg-white/90 backdrop-blur-sm border border-white p-3 rounded-2xl shadow-lg flex items-center gap-3 w-fit transform transition-transform hover:scale-110">
          <img 
            src={LogoKampus} 
            alt="Horizon University" 
            className="w-12 h-12 object-contain" 
          />
          <div className="pr-2">
            <h4 className="text-xs font-bold text-red-900">Horizon</h4>
            <p className="text-[10px] font-semibold text-zinc-500">University</p>
          </div>
        </div>
      </div>

      {/* Elemen Dekorasi (Dots) */}
      <div className="absolute top-0 right-0 -z-10 opacity-50">
         <div className="w-24 h-24 bg-violet-500/20 rounded-full blur-2xl"></div>
      </div>

    </div>

    {/* --- KOLOM KANAN: TEKS (Sama seperti sebelumnya tapi dirapikan) --- */}
    <FadeIn delay={200}>
      <div className="md:pl-10">
        <h3 className="text-2xl font-bold mb-4">
          Code & Kreativitas <br />
          <span className="text-violet-500">Tanpa Batas.</span>
        </h3>
        
        <p className="opacity-70 mb-8 leading-relaxed text-lg">
          Perkenalkan, saya <span className="text-violet-400 font-semibold">Riski Ramadhan</span>. 
          Saat ini saya sedang menempuh pendidikan semester 5 di 
          <span className="font-bold text-zinc-200"> Horizon University Indonesia</span> (Karawang).
          <br /><br />
          Perjalanan saya dari Subang hingga ke dunia IT didasari oleh satu hal: 
          <i>rasa penasaran bagaimana sebuah sistem bekerja.</i> Saya memadukan logika Backend 
          (Laravel) dengan keindahan Frontend (React) untuk menciptakan solusi web yang utuh.
        </p>

        {/* Stats Box */}
        <div className="flex items-center gap-8 border-t border-zinc-800 pt-8">
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">4+</h3>
            <p className="text-sm text-zinc-500">Tahun Coding</p>
          </div>
          <div className="w-px h-12 bg-zinc-800"></div> {/* Garis Pemisah */}
          <div>
            <h3 className="text-4xl font-bold text-white mb-1">8+</h3>
            <p className="text-sm text-zinc-500">Proyek Tuntas</p>
          </div>
           <div className="w-px h-12 bg-zinc-800"></div> 
          <div>
             <h3 className="text-4xl font-bold text-white mb-1">3.8</h3>
             <p className="text-sm text-zinc-500">IPK Saat Ini</p>
          </div>
        </div>
      </div>
    </FadeIn>

  </div>
</div>

      {/* --- Bagian Keahlian --- */}
      <div className="keahlian mt-32 py-10" id="keahlian">
        <FadeIn>
            <h2 className="text-3xl font-bold text-center mb-12">Keahlian Saya</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: 'ri-braces-line', title: 'Front-End Dev', desc: 'React.js, Tailwind CSS, interaksi modern.' },
            { icon: 'ri-database-2-line', title: 'Back-End Dev', desc: 'Laravel, PHP, MySQL, RESTful API.' },
            { icon: 'ri-pencil-ruler-2-line', title: 'UI/UX Design', desc: 'Figma prototyping, User Flow, Wireframing.' }
          ].map((item, index) => (
            <FadeIn delay={index * 100} key={index}>
                <div className="bg-zinc-800/40 border border-zinc-700/50 p-8 rounded-2xl hover:bg-zinc-800 hover:border-violet-500/50 transition-all duration-300 group">
                    <i className={`${item.icon} ri-3x text-zinc-500 group-hover:text-violet-500 mb-6 block transition-colors`}></i>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="opacity-60 text-sm leading-relaxed">
                    {item.desc}
                    </p>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>

    {/* --- Bagian Tools (UPGRADED: Magic Glowing Cards) --- */}
      <div className="tools mt-32 py-10 relative" id="tools">
        {/* Background decoration (biar gak sepi) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-violet-500/10 blur-[120px] rounded-full -z-10"></div>

        <FadeIn>
          <div className="text-center mb-14">
            <h1 className="text-4xl/snug font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Alat & Teknologi
            </h1>
            <p className="xl:w-2/5 md:w-2/3 w-full mx-auto text-base/loose opacity-50">
                Eksplorasi teknologi yang saya gunakan untuk membangun aplikasi yang cepat, scalable, dan modern.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listTools.map((tool, index) => (
            <FadeIn key={tool.id} delay={index * 50}>
              {/* CARD WRAPPER */}
              <div className="group relative w-full h-full">
                
                {/* 1. Efek Glow di belakang kartu (Muncul pas hover) */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500 group-hover:duration-200"></div>
                
                {/* 2. Konten Kartu Utama */}
                <div className="relative h-full bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 group-hover:scale-[0.98] group-hover:bg-zinc-900/90">
                  
                  {/* Icon Circle */}
                  <div className="w-16 h-16 mb-6 relative flex items-center justify-center rounded-full bg-zinc-800/50 border border-zinc-700 group-hover:border-violet-500/50 transition-colors duration-300">
                    {/* Glow kecil di dalem icon */}
                    <div className="absolute inset-0 bg-violet-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <img 
                      src={tool.gambar} 
                      alt={tool.nama} 
                      className="w-9 h-9 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-110 relative z-10" 
                      loading="lazy" 
                    />
                  </div>

                  {/* Text Content */}
                  <h4 className="text-lg font-bold mb-2 text-zinc-100 group-hover:text-white transition-colors">
                    {tool.nama}
                  </h4>
                  <p className="text-sm opacity-50 leading-relaxed group-hover:opacity-80 transition-opacity">
                    {tool.ket}
                  </p>

                  {/* Hiasan kecil di pojok (biar makin techy) */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-violet-500 transition-colors duration-300"></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
      {/* --- Akhir Bagian Tools --- */}

     {/* --- Bagian Sertifikat --- */}
       <div className="lomba mt-32 py-10" id="lomba">
         <FadeIn>
            <h1 className="text-center text-4xl font-bold mb-2">Pencapaian</h1>
            <p className="text-base/loose text-center opacity-50 mb-14">Sertifikasi dan penghargaan kompetisi.</p>
         </FadeIn>
         <div className="flex overflow-x-auto gap-6 pb-8 px-4 lomba-box snap-x">
           {listSertifikat.map((Sertifikat) => (
             <div 
               key={Sertifikat.id} 
               className="snap-center p-6 border border-zinc-700 bg-zinc-900/50 rounded-3xl hover:border-violet-500/50 transition-all duration-300 w-[350px] flex-shrink-0 group"
             >
               <div className="overflow-hidden rounded-xl mb-4 border border-zinc-800">
                 <img 
                   src={Sertifikat.gambar} 
                   alt={Sertifikat.nama} 
                   loading="lazy"
                   className="w-full h-48 object-cover bg-zinc-800 group-hover:scale-110 transition-transform duration-500"
                 />
               </div>
               <div>
                 <h1 className="text-xl font-bold my-3 line-clamp-1" title={Sertifikat.nama}>{Sertifikat.nama}</h1>
                 <p className="text-sm mb-4 opacity-60">
                   {Sertifikat.penyelenggara} • <span className="text-violet-400">{Sertifikat.tahun}</span>
                 </p>
                 {Sertifikat.link !== "#" && (
                   <a href={Sertifikat.link} target="_blank" rel="noopener noreferrer" 
                      className="w-full inline-flex justify-center items-center gap-2 bg-zinc-800 py-3 rounded-lg text-sm font-semibold hover:bg-violet-700 hover:text-white transition-all">
                     Lihat Kredensial <i className="ri-external-link-line"></i>
                   </a>
                 )}
               </div>
             </div>
           ))}
         </div>
       </div>

       {/* --- Bagian Proyek --- */}
       <div className="proyek mt-32 py-10" id="proyek">
         <FadeIn>
             <h1 className="text-center text-4xl font-bold mb-2">Proyek Unggulan</h1>
             <p className="text-base/loose text-center opacity-50 mb-14">Karya yang telah saya bangun dengan sepenuh hati.</p>
         </FadeIn>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
           {listProyek.map((proyek, index) => (
             <FadeIn key={proyek.id} delay={index * 100}>
                <div className="h-full p-6 border border-zinc-700/50 bg-zinc-900/30 rounded-3xl hover:bg-zinc-800 transition-all duration-300 flex flex-col">
                    <div className="rounded-xl overflow-hidden mb-6 border border-zinc-800 relative group">
                         {/* Overlay saat hover */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-bold border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">Lihat Detail</span>
                        </div>
                        <img src={proyek.gambar} alt={proyek.nama} className="w-full h-52 object-cover" loading="lazy"/>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{proyek.nama}</h1>
                    <p className="text-sm opacity-60 mb-4 flex-grow leading-relaxed">{proyek.desk}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {proyek.tools.map((tool, idx) => (
                        <span className="text-xs py-1 px-3 border border-zinc-600 bg-zinc-800/50 text-zinc-300 rounded-full" key={idx}>
                            {tool}
                        </span>
                        ))}
                    </div>
                    <a href="#" className="mt-auto w-full bg-zinc-100 text-zinc-900 py-3 rounded-xl font-bold text-center hover:bg-violet-500 hover:text-white transition-colors">
                        Kunjungi Website
                    </a>
                </div>
             </FadeIn>
           ))}
         </div>
       </div>

     {/* --- Bagian Kontak (Clean & Refactored) --- */}
      <div className="kontak mt-32 sm:p-10 p-4 mb-20" id="kontak">
        <FadeIn>
            <h1 className="text-4xl mb-2 font-bold text-center">Hubungi Saya</h1>
            <p className="text-base/loose text-center mb-10 opacity-50">
            Mari berkolaborasi atau sekadar menyapa!
            </p>
        </FadeIn>

        {/* Looping Social Media (Jauh lebih rapi) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 max-w-5xl mx-auto">
          {socialLinks.map((social) => (
            <FadeIn key={social.id} delay={social.id * 50}>
                <a 
                href={social.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-3 p-4 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-violet-500 transition-all duration-300 group h-full"
                >
                <i className={`${social.icon} text-2xl ${social.color} group-hover:scale-110 transition-transform`}></i>
                <span className="font-semibold text-zinc-300 group-hover:text-white">{social.name}</span>
                </a>
            </FadeIn>
          ))}
        </div>

        {/* Form Input (Lebih Modern) */}
        <FadeIn>
            <form action="https://formsubmit.co/riskycas23@gmail.com" method="POST" className="bg-zinc-900/50 border border-zinc-700 p-8 sm:p-12 max-w-2xl mx-auto rounded-3xl shadow-2xl" autoComplete="off">
            <div className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm text-zinc-400">Nama Lengkap</label>
                    <input type="text" name="nama" placeholder="John Doe" 
                        className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all" required />
                    </div>
                    <div className="flex flex-col gap-2">
                    <label className="font-semibold text-sm text-zinc-400">Email</label>
                    <input type="email" name="email" placeholder="email@example.com" 
                        className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all" required />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold text-sm text-zinc-400">Pesan</label>
                <textarea name="pesan" id="pesan" cols="45" rows="5" placeholder="Tulis pesanmu di sini..." 
                    className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-none" required></textarea>
                </div>
                <div className="text-center pt-4">
                <button type="submit" className="bg-violet-600 text-white font-bold py-4 px-8 rounded-xl w-full sm:w-auto hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/30 transition-all transform hover:-translate-y-1">
                    Kirim Pesan <i className="ri-send-plane-fill ml-2"></i>
                </button>
                </div>
            </div>
            </form>
        </FadeIn>
      </div>
      
      {/* Footer Simple */}
      <footer className="text-center py-8 border-t border-zinc-800 text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Riski Ramadhan. Dibuat dengan React & Tailwind.</p>
      </footer>

    </>
  );
}

export default App;