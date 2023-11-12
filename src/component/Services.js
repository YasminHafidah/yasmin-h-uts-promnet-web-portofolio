import ServiceItem from "./ServiceItem"
function Service() {
    return(
        <div id="services">
            <div className="section intro py-5">
                <div className="container">
                    <div className="row">
                    <h1>Services</h1>
                    <ServiceItem
                    judul="Pengembangan Aplikasi Web"
                    deskripsi="Pembuatan situs web pribadi atau portofolio online untuk kebutuhan klien."
                    />
                    <ServiceItem
                    judul="Analisis Data"
                    deskripsi="Membantu dalam pemrosesan dan analisis data untuk proyek atau penelitian."
                    />
                    <ServiceItem
                    judul="Tutor"
                    deskripsi="Menawarkan layanan mentor atau tutor dalam bahasa pemrograman tertentu."
                    />
                    <ServiceItem
                    judul="Konsultasi Teknologi"
                    deskripsi="Menawarkan konsultasi dalam bidang teknologi terkait pemilihan teknologi yang tepat dalam pembelajaran."
                    />
                    </div>
                </div>
            </div>
        </div>
    );    
}
export default Service