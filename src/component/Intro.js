import MyButton from "../MyButton";

function Intro() {
    return(
        <div id="home">
            <div className="section text-light intro">
                <div className="container text-center">
                    <img className="avatar img-thumbnail"
                    src="images/Me.png" alt="Foto Profil Yasmin"/>
                    <h1>Yasmin Hafidah Alqanit</h1>
                    <p>Mahasiswa Pendidikan Ilmu Komputer UPI 2022</p>
                    <a target="_blank" href="https://www.facebook.com/yasmin.hafidah" className="social-media">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a target="blank" href="https://www.instagram.com/yasmin_hafidah" className="social-media">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a target="blank" href="https://github.com/YasminHafidah" className="social-media">
                        <i class="bi bi-github"></i>
                    </a>
                    <a target="blank" href="https://www.linkedin.com/in/a-yasmin-hafidah-alqanit-a7091329a" className="social-media">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <div className="row">
                        <div className="col">
                        <MyButton 
                            text = "Hire Me"
                            warna = "light"
                            link = "mailto:yasminhafidah40@gmail.com"
                        />
                        </div>
                    </div>
                </div>           
            </div>
        </div>
    );    
}
export default Intro