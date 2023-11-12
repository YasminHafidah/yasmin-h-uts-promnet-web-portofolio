function contact (){
    return(
        <div className="contact">
            <div className="container">
                <div className="row text-center">
                    <div className="col text-light">
                        <h1>Contact Me</h1>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-8">
                        <form >
                            <label>Name</label>
                            <input type="text" name="name" />
                            <label>Email</label>
                            <input type="email" name="email" />
                            <label>Message</label>
                            <textarea name="message" />
                            <button type="submit" class="btn btn-danger">Send</button>                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
export default contact

