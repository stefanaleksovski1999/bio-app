import "./Homepage.css";

const Homepage = () => {
    return ( 
        <div className="homepage-content">
            <section className='homepage-about'>
                <div className="bio">
                    <h2>Nikola Bochvarov</h2>
                    <p>Nikola Bochvarov was born in Skopje. Graduated double bass at the Faculty of Music Arts in Skopje, while acquired his jazz education at "Franz Schubert Konservatorium" in Vienna.
                         The broad experience and extensive work in the past twenty years have made him one of the most sought-after and outstanding bass players in Macedonia.
                          In addition to his performing skills in many instrumental ensembles (Groovy Loons, OffGround Ensemble, Bramha Trio...),
                           vocal-instrumental pop/rock ensembles (Kaliopi, Vlado Janevski, Karolina Gocheva, Mizar...), we also recognize Nikola as a composer and/or band leader
                            (Atom, Kalap, Antiart, Musaiq, Blablabla). 
                            Bochvarov's new album "Glasna Tishina"( Loud Silence)  is the best description of his creativity, expertise,
                         competence as well as a witness to his many years of experience and is one of his greatest artistic achievements.</p>
                    <div>
                    <div className="yt-videos">
                        <iframe style={{"margin-right": "50px"}} width="380" height="290" src="https://www.youtube.com/embed/t2K1oiEbWYg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <iframe  width="380" height="290" src="https://www.youtube.com/embed/m7vdkA1JBOA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    </div>
                        
                    </div>
                </div>


                <div>
                    <img alt="Not loading" style={{"margin-right": "70px"}} src='slika-cipko.jpg' width="500px"/>
                </div>
            </section>


        </div>
     );
}
 
export default Homepage;