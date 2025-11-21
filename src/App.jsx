import { useState } from 'react';
import DataImage from "./data";
import { listTools, listProyek, listSertifikat } from "./data";
import ModelChibi from './components/ModelChibi';
import { useInView } from 'react-intersection-observer';
import LogoKampus from '/assets/logo_college.png'; 

// =========================================
// 1. KOMPONEN CREATIVE CV (FIXED PRINT VERSION)
// =========================================
const CreativeCV = ({ onBack }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 animate-fade-in-up">
      
      {/* Tombol Navigasi Atas */}
      <div className="flex gap-4 mb-8 print:hidden">
        <button 
            onClick={onBack}
            className="bg-zinc-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-zinc-700 transition-all font-bold flex items-center gap-2"
        >
            <i className="ri-arrow-left-line"></i> Kembali
        </button>
        <button 
            onClick={handlePrint}
            className="bg-violet-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-violet-800 transition-all font-bold flex items-center gap-2"
        >
            <i className="ri-printer-line"></i> Save as PDF
        </button>
      </div>

      {/* --- KANVAS A4 --- */}
      {/* PERBAIKAN: Tambah 'print:flex-row' biar kolomnya ga numpuk ke bawah pas diprint */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl flex flex-col md:flex-row print:flex-row print:w-full print:h-auto overflow-hidden">
        
        {/* SIDEBAR (KIRI) */}
        {/* PERBAIKAN: Tambah '!bg-slate-900 !print:bg-slate-900' biar warnanya maksa muncul */}
        <div className="bg-slate-900 text-white w-full md:w-[35%] print:w-[35%] p-8 flex flex-col gap-8 print:bg-slate-900 print-color-adjust">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full border-4 border-violet-500 overflow-hidden mb-4 bg-white">
              <img src={DataImage.AboutImage} alt="Profile" className="w-full h-full object-cover"/>
            </div>
            <h2 className="text-xl font-bold text-center">RISKI RAMADHAN</h2>
            <p className="text-violet-400 text-sm font-medium">Full Stack Developer</p>
          </div>

          <div className="space-y-3 text-sm">
            <h3 className="text-lg font-bold border-b border-gray-600 pb-1 mb-2">KONTAK</h3>
            <div className="flex items-start gap-3"><i className="ri-map-pin-line text-violet-400 mt-1"></i><p>Kab. Karawang, Jawa Barat</p></div>
            <div className="flex items-center gap-3"><i className="ri-phone-line text-violet-400"></i><p>+62 895 3968 36264</p></div>
            <div className="flex items-center gap-3"><i className="ri-mail-line text-violet-400"></i><p>riskycas23@gmail.com</p></div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold border-b border-gray-600 pb-1 mb-2">PENDIDIKAN</h3>
            <div>
              <h4 className="font-bold text-violet-400">S1 Teknik Informatika</h4>
              <p className="text-sm">Horizon University Indonesia</p>
              <p className="text-xs opacity-70">Jan 2023 - Sekarang</p>
              <p className="text-sm mt-1">IPK: <span className="font-bold text-white">3.89</span></p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold border-b border-gray-600 pb-1 mb-4">SKILL</h3>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'React.js', 'Flutter', 'PHP', 'JavaScript', 'Dart', 'MySQL', 'HTML5', 'Figma', 'Git'].map((skill) => (
                <span key={skill} className="bg-slate-700 text-xs px-3 py-1 rounded-full border border-slate-600 print:border-slate-500 print:bg-slate-800">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        {/* MAIN CONTENT (KANAN) */}
        {/* PERBAIKAN: Tambah 'print:w-[65%] print:text-black' biar teksnya hitam pekat di kertas */}
        <div className="w-full md:w-[65%] print:w-[65%] p-8 md:p-12 text-slate-800 print:text-black bg-white">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-900 print:text-black mb-2">PROFILE</h1>
            <p className="text-slate-600 print:text-black leading-relaxed text-sm text-justify">
              Mahasiswa Informatika Semester 5 dengan keahlian Full Stack (PHP, Laravel, React, Flutter). 
              Berpengalaman membangun sistem administrasi sekolah dan aplikasi rental. Memiliki sertifikasi 
              Alibaba Cloud dan prestasi di kompetisi coding.
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 print:text-black border-b-2 border-slate-200 pb-2 mb-4 flex items-center gap-2">
              <i className="ri-briefcase-4-line text-violet-600 print:text-violet-800"></i> PENGALAMAN
            </h2>
            {/* Job 1 */}
            <div className="mb-6 relative border-l-2 border-slate-200 pl-4 ml-1">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-violet-600 rounded-full print:bg-violet-800"></div>
              <h3 className="text-xl font-bold text-slate-800 print:text-black">Full Stack Developer</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-violet-700 print:text-violet-900 font-semibold">PAUD AN NURIYADH</p>
                <span className="text-xs bg-slate-100 print:bg-slate-200 px-2 py-1 rounded text-slate-500 print:text-black">Feb 2024 - Feb 2025</span>
              </div>
              <ul className="list-disc pl-4 text-sm text-slate-600 print:text-black space-y-1">
                <li>Membangun "Sistem Pendaftaran Siswa" berbasis Web.</li>
                <li>Merancang UI/UX responsif menggunakan <strong>Figma</strong>.</li>
                <li>Mengembangkan Back-End aman menggunakan <strong>PHP Native</strong> & <strong>MySQL</strong>.</li>
              </ul>
            </div>
             {/* Job 2 */}
             <div className="relative border-l-2 border-slate-200 pl-4 ml-1">
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-violet-600 rounded-full print:bg-violet-800"></div>
              <h3 className="text-xl font-bold text-slate-800 print:text-black">Full Stack Projects</h3>
              <div className="flex justify-between items-center mb-2">
                <p className="text-violet-700 print:text-violet-900 font-semibold">Horizon University</p>
                <span className="text-xs bg-slate-100 print:bg-slate-200 px-2 py-1 rounded text-slate-500 print:text-black">Jan 2023 - Sekarang</span>
              </div>
              <ul className="list-disc pl-4 text-sm text-slate-600 print:text-black space-y-1">
                <li><strong>Aplikasi Rental Barang:</strong> Sistem inventaris berbasis Laravel.</li>
                <li>Meraih predikat <em>Best Grade</em> pada Project Based Course.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* CSS KHUSUS PRINT AGAR WARNA & LAYOUT BENAR */}
      <style>{`
        @media print {
            @page { margin: 0; size: A4; }
            body { 
                background: white; 
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            /* Sembunyikan elemen yang tidak perlu */
            .print\\:hidden { display: none !important; }
            
            /* Paksa background sidebar agar gelap */
            .print\\:bg-slate-900 { background-color: #0f172a !important; }
            
            /* Paksa teks konten agar hitam */
            .print\\:text-black { color: #000000 !important; }
            
            /* Pastikan layout tetap 2 kolom (Kiri 35%, Kanan 65%) */
            .print\\:flex-row { flex-direction: row !important; }
            .print\\:w-\\[35\\%\\] { width: 35% !important; }
            .print\\:w-\\[65\\%\\] { width: 65% !important; }
        }
      `}</style>
    </div>
  );
};

// =========================================
// 2. KOMPONEN UTAMA (APP)
// =========================================

// Komponen FadeIn
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div ref={ref} className={`transition-all duration-1000 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

function App() {
  // STATE UNTUK PINDAH HALAMAN (HOME vs CV)
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'cv'
  const [showCvMenu, setShowCvMenu] = useState(false);

  // Data Social Media
  const socialLinks = [
    { id: 1, name: 'LinkedIn', icon: 'ri-linkedin-box-fill', color: 'text-blue-500', link: 'https://linkedin.com/in/username-lo' },
    { id: 2, name: 'GitHub', icon: 'ri-github-fill', color: 'text-white', link: 'https://github.com/username-lo' },
    { id: 3, name: 'Facebook', icon: 'ri-facebook-box-fill', color: 'text-blue-600', link: 'https://facebook.com/username-lo' },
    { id: 4, name: 'Instagram', icon: 'ri-instagram-fill', color: 'text-pink-500', link: 'https://instagram.com/username-lo' },
    { id: 5, name: 'Whatsapp', icon: 'ri-whatsapp-fill', color: 'text-green-600', link: 'https://whatsapp.com/channel/username-lo' },
  ];

  // LOGIKA PINDAH HALAMAN: Jika page 'cv', tampilkan komponen CreativeCV
  if (currentPage === 'cv') {
    return <CreativeCV onBack={() => setCurrentPage('home')} />;
  }

  return (
    <>
      {/* --- HALAMAN UTAMA (PORTFOLIO) --- */}
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
          
          <div className="flex items-center sm:gap-4 gap-3 flex-wrap relative">
            
            {/* --- DROPDOWN DOWNLOAD CV --- */}
            <div className="relative z-50">
              <button 
                onClick={() => setShowCvMenu(!showCvMenu)}
                className="bg-violet-700 px-6 py-3 rounded-xl hover:bg-violet-600 transition-all flex items-center gap-2 font-medium text-white shadow-lg shadow-violet-700/20"
              >
                Download CV 
                <i className={showCvMenu ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
              </button>

              {showCvMenu && (
                <div className="absolute top-full mt-2 left-0 w-64 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden flex flex-col animate-fade-in-up">
                  {/* PILIHAN 1: ATS */}
                  <a 
                    href="https://drive.google.com/uc?export=download&id=17YgRycLJfL7UmRs02W40l9ZriW96u2r-" 
                    className="px-4 py-4 hover:bg-zinc-800 flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors border-b border-zinc-800"
                  >
                    <div className="bg-violet-500/20 p-2 rounded-lg text-violet-400"><i className="ri-file-text-line text-lg"></i></div>
                    <div><span className="font-bold block text-white">Versi ATS</span><span className="text-[10px] opacity-60">PDF Standar (Google Drive)</span></div>
                  </a>

                  {/* PILIHAN 2: CREATIVE (Pindah Halaman via State) */}
                  <button 
                    onClick={() => setCurrentPage('cv')} 
                    className="px-4 py-4 hover:bg-zinc-800 flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors w-full text-left"
                  >
                     <div className="bg-pink-500/20 p-2 rounded-lg text-pink-400"><i className="ri-brush-line text-lg"></i></div>
                    <div><span className="font-bold block text-white">Versi Kreatif</span><span className="text-[10px] opacity-60">Lihat & Print Desain</span></div>
                  </button>
                </div>
              )}
            </div>

            <a href="#proyek" className="bg-zinc-800 px-6 py-3 rounded-xl hover:bg-zinc-700 transition-colors border border-zinc-700 flex items-center gap-2">
              Lihat Proyek <i className="ri-arrow-down-line"></i>
            </a>
          </div>
        </FadeIn>
        
        <div className="w-full max-w-[500px] h-[500px] mx-auto md:ml-auto md:mr-0 z-0 relative">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-600/20 blur-[100px] rounded-full -z-10"></div>
           <ModelChibi />
        </div>
      </div>

      {/* --- Section Lainnya (Tetap Sama) --- */}
      <div className="tentang mt-32 py-10" id="tentang">
        <FadeIn><h2 className="text-3xl font-bold text-center mb-16">Tentang Saya</h2></FadeIn>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full max-w-md mx-auto h-[400px] flex items-center justify-center group">
            <div className="absolute top-4 left-4 w-64 h-80 z-10 transform rotate-[-6deg] transition-all duration-500 group-hover:rotate-[-12deg] group-hover:scale-105">
              <div className="w-full h-full bg-white p-2 pb-8 rounded-lg shadow-xl">
                <img src={DataImage.Riski2 || "https://via.placeholder.com/300"} alt="Foto Riski 1" className="w-full h-full object-cover rounded bg-zinc-200"/>
              </div>
            </div>
            <div className="absolute top-10 right-8 w-60 h-72 z-20 transform rotate-[6deg] transition-all duration-500 group-hover:rotate-[12deg] group-hover:translate-x-4">
              <div className="w-full h-full bg-white p-2 pb-8 rounded-lg shadow-2xl border border-zinc-200">
                <img src={DataImage.AboutImage} alt="Foto Riski 2" className="w-full h-full object-cover rounded bg-zinc-200"/>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-2 z-30 animate-bounce-slow">
              <div className="bg-white/90 backdrop-blur-sm border border-white p-3 rounded-2xl shadow-lg flex items-center gap-3 w-fit transform transition-transform hover:scale-110">
                <img src={LogoKampus} alt="Horizon University" className="w-12 h-12 object-contain" />
                <div className="pr-2"><h4 className="text-xs font-bold text-red-900">Horizon</h4><p className="text-[10px] font-semibold text-zinc-500">University</p></div>
              </div>
            </div>
             <div className="absolute top-0 right-0 -z-10 opacity-50"><div className="w-24 h-24 bg-violet-500/20 rounded-full blur-2xl"></div></div>
          </div>
          <FadeIn delay={200}>
            <div className="md:pl-10">
              <h3 className="text-2xl font-bold mb-4">Code & Kreativitas <br /><span className="text-violet-500">Tanpa Batas.</span></h3>
              <p className="opacity-70 mb-8 leading-relaxed text-lg">
                Perkenalkan, saya <span className="text-violet-400 font-semibold">Riski Ramadhan</span>. Saat ini saya sedang menempuh pendidikan semester 5 di <span className="font-bold text-zinc-200"> Horizon University Indonesia</span> (Karawang).
                <br /><br />
                Perjalanan saya dari Subang hingga ke dunia IT didasari oleh satu hal: <i>rasa penasaran bagaimana sebuah sistem bekerja.</i>
              </p>
              <div className="flex items-center gap-8 border-t border-zinc-800 pt-8">
                <div><h3 className="text-4xl font-bold text-white mb-1">4+</h3><p className="text-sm text-zinc-500">Tahun Coding</p></div>
                <div className="w-px h-12 bg-zinc-800"></div>
                <div><h3 className="text-4xl font-bold text-white mb-1">8+</h3><p className="text-sm text-zinc-500">Proyek Tuntas</p></div>
                 <div className="w-px h-12 bg-zinc-800"></div> 
                <div><h3 className="text-4xl font-bold text-white mb-1">3.8</h3><p className="text-sm text-zinc-500">IPK Saat Ini</p></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Keahlian & Tools & Proyek & Kontak (Versi Ringkas untuk Kode Lengkap) */}
      <div className="keahlian mt-32 py-10" id="keahlian">
        <FadeIn><h2 className="text-3xl font-bold text-center mb-12">Keahlian Saya</h2></FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{ icon: 'ri-braces-line', title: 'Front-End Dev', desc: 'React.js, Tailwind CSS.' }, { icon: 'ri-database-2-line', title: 'Back-End Dev', desc: 'Laravel, PHP, MySQL.' }, { icon: 'ri-pencil-ruler-2-line', title: 'UI/UX Design', desc: 'Figma prototyping.' }].map((item, index) => (
            <FadeIn delay={index * 100} key={index}>
                <div className="bg-zinc-800/40 border border-zinc-700/50 p-8 rounded-2xl hover:bg-zinc-800 hover:border-violet-500/50 transition-all duration-300 group">
                    <i className={`${item.icon} ri-3x text-zinc-500 group-hover:text-violet-500 mb-6 block transition-colors`}></i>
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="opacity-60 text-sm leading-relaxed">{item.desc}</p>
                </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <div className="tools mt-32 py-10 relative" id="tools">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-violet-500/10 blur-[120px] rounded-full -z-10"></div>
        <FadeIn><div className="text-center mb-14"><h1 className="text-4xl/snug font-bold mb-4 bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">Alat & Teknologi</h1></div></FadeIn>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listTools.map((tool, index) => (
            <FadeIn key={tool.id} delay={index * 50}>
              <div className="group relative w-full h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500 group-hover:duration-200"></div>
                <div className="relative h-full bg-zinc-900 border border-zinc-800 p-6 rounded-xl flex flex-col items-center text-center transition-all duration-300 group-hover:scale-[0.98] group-hover:bg-zinc-900/90">
                  <div className="w-16 h-16 mb-6 relative flex items-center justify-center rounded-full bg-zinc-800/50 border border-zinc-700 group-hover:border-violet-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 bg-violet-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img src={tool.gambar} alt={tool.nama} className="w-9 h-9 object-contain grayscale group-hover:grayscale-0 relative z-10" loading="lazy" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-zinc-100 group-hover:text-white transition-colors">{tool.nama}</h4>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

       <div className="lomba mt-32 py-10" id="lomba">
         <FadeIn><h1 className="text-center text-4xl font-bold mb-2">Pencapaian</h1></FadeIn>
         <div className="flex overflow-x-auto gap-6 pb-8 px-4 lomba-box snap-x custom-scrollbar">
           {listSertifikat.map((Sertifikat) => (
             <div key={Sertifikat.id} className="snap-center p-6 border border-zinc-700 bg-zinc-900/50 rounded-3xl hover:border-violet-500/50 transition-all duration-300 w-[350px] flex-shrink-0 group">
               <div className="overflow-hidden rounded-xl mb-4 border border-zinc-800">
                 <img src={Sertifikat.gambar} alt={Sertifikat.nama} loading="lazy" className="w-full h-48 object-cover bg-zinc-800 group-hover:scale-110 transition-transform duration-500"/>
               </div>
               <div>
                 <h1 className="text-xl font-bold my-3 line-clamp-1">{Sertifikat.nama}</h1>
                 <p className="text-sm mb-4 opacity-60">{Sertifikat.penyelenggara} • <span className="text-violet-400">{Sertifikat.tahun}</span></p>
               </div>
             </div>
           ))}
         </div>
       </div>

       <div className="proyek mt-32 py-10" id="proyek">
         <FadeIn><h1 className="text-center text-4xl font-bold mb-2">Proyek Unggulan</h1></FadeIn>
         <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
           {listProyek.map((proyek, index) => (
             <FadeIn key={proyek.id} delay={index * 100}>
                <div className="h-full p-6 border border-zinc-700/50 bg-zinc-900/30 rounded-3xl hover:bg-zinc-800 transition-all duration-300 flex flex-col">
                    <div className="rounded-xl overflow-hidden mb-6 border border-zinc-800 relative group">
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-bold border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">Lihat Detail</span>
                        </div>
                        <img src={proyek.gambar} alt={proyek.nama} className="w-full h-52 object-cover" loading="lazy"/>
                    </div>
                    <h1 className="text-2xl font-bold mb-2">{proyek.nama}</h1>
                    <a href="#" className="mt-auto w-full bg-zinc-100 text-zinc-900 py-3 rounded-xl font-bold text-center hover:bg-violet-500 hover:text-white transition-colors">Kunjungi Website</a>
                </div>
             </FadeIn>
           ))}
         </div>
       </div>

      <div className="kontak mt-32 sm:p-10 p-4 mb-20" id="kontak">
        <FadeIn><h1 className="text-4xl mb-2 font-bold text-center">Hubungi Saya</h1></FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 max-w-5xl mx-auto">
          {socialLinks.map((social) => (
            <FadeIn key={social.id} delay={social.id * 50}>
                <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:bg-zinc-800 hover:border-violet-500 transition-all duration-300 group h-full">
                <i className={`${social.icon} text-2xl ${social.color} group-hover:scale-110 transition-transform`}></i>
                <span className="font-semibold text-zinc-300 group-hover:text-white">{social.name}</span>
                </a>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
            <form action="https://formsubmit.co/riskycas23@gmail.com" method="POST" className="bg-zinc-900/50 border border-zinc-700 p-8 sm:p-12 max-w-2xl mx-auto rounded-3xl shadow-2xl" autoComplete="off">
            <div className="flex flex-col gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2"><label className="font-semibold text-sm text-zinc-400">Nama Lengkap</label><input type="text" name="nama" placeholder="John Doe" className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" required /></div>
                    <div className="flex flex-col gap-2"><label className="font-semibold text-sm text-zinc-400">Email</label><input type="email" name="email" placeholder="email@example.com" className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500" required /></div>
                </div>
                <div className="flex flex-col gap-2"><label htmlFor="pesan" className="font-semibold text-sm text-zinc-400">Pesan</label><textarea name="pesan" id="pesan" cols="45" rows="5" placeholder="Tulis pesanmu di sini..." className="bg-zinc-800 border border-zinc-700 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none" required></textarea></div>
                <div className="text-center pt-4"><button type="submit" className="bg-violet-600 text-white font-bold py-4 px-8 rounded-xl w-full sm:w-auto hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/30 transition-all transform hover:-translate-y-1">Kirim Pesan <i className="ri-send-plane-fill ml-2"></i></button></div>
            </div>
            </form>
        </FadeIn>
      </div>
      <footer className="text-center py-8 border-t border-zinc-800 text-zinc-500 text-sm"><p>&copy; {new Date().getFullYear()} Riski Ramadhan. Dibuat dengan React & Tailwind.</p></footer>
    </>
  );
}

export default App;