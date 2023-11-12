import "../style/ServiceItem.css"
function ServiceItem(props) {
    return(
        <div className="col-6 mt-3">
            <div class="card py-3">
                <div class="card-body">
                    <h5 class="card-title">{props.judul}</h5>
                    <p class="card-text">{props.deskripsi}</p>
                </div>
            </div>
        </div>
    );    
}
export default ServiceItem