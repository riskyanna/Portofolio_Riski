const Footer = () => {
    return (
       <div className="footer mt-32 py-4 flex md:flex-row flex-col justify-between items-center gap-4 md:gap-0 bg-zinc-900 text-white">
        <h1 className="text-2xl font-bold">Portofolio</h1>
        <div className="flex gap-7">
            <a href="">Beranda</a>
            <a href="">Tentang</a>
            <a href="">Proyek</a>
        </div>
        <div className="flex gap-6">
            <a href="#"><i className="ri-github-fill ri-2x"></i></a>
            <a href="#"><i className="ri-instagram-fill ri-2x"></i></a>
            <a href="#"><i className="ri-facebook-fill ri-2x"></i></a>
            <a href="#"><i className="ri-youtube-fill ri-2x"></i></a>
        </div>
       </div>
    );
};

export default Footer;