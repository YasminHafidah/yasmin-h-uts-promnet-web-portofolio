function RecentWork() {
    const daftarGambar = [
        "images/foto4.jpg",
        "images/foto2.jpg",
        "images/foto3.jpg"
    ]
    return(
        <div id="recentWork">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e78181" fill-opacity="0.6" d="M0,256L26.7,245.3C53.3,235,107,213,160,213.3C213.3,213,267,235,320,208C373.3,181,427,107,480,112C533.3,117,587,203,640,240C693.3,277,747,267,800,240C853.3,213,907,171,960,149.3C1013.3,128,1067,128,1120,122.7C1173.3,117,1227,107,1280,112C1333.3,117,1387,139,1413,149.3L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
            <div className="py-8 work">
                <div className="container">
                <h1>Recent Work</h1>
                    <div className="row mt-5">
                    {
                        daftarGambar.map(function (images){
                            return(
                            <div className="col-4 mr-4 gambarku">
                                        <img className="img-fluid" 
                                        src={images} alt="pengalaman"
                                        />
                            </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    );    
}
export default RecentWork