import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Project from "../../components/Project/Project";
import Service from "../../components/Service/Service";
import { man } from "../../assets";
import './Home.css';
import projects from "../../utils/datas/projects";
import services from "../../utils/datas/services";

export default function Home() {
  return (
    <div className="container-fluid">
        <Header />
        <main>
            <section id="home" className="container-fluid text-light text-center bg-dark">
              <div className="container p-5 d-flex flex-column justify-content-center align-items-center">
                <img src={man} alt="profil" className="mb-3 mt-auto"/>
                <h1>Salut, moi c'est John.</h1>
                <p>Je suis développeur Front-End, spécialisé dans les différents frameworks JavaScript.</p>
                <a href="#about" className="btn btn-secondary">En savoir plus</a>
                <p className="mt-auto">Lorem ipsum dolor sit amet.</p>
              </div>
            </section>

            <section id="portfolio" className="container-fluid">
              <h2 className="text-uppercase mt-5 text-center">Portfolio</h2>
              <div className="row container p-0 pb-5 p-lg-5 mx-auto g-4 justify-content-center">
                {
                  projects.map((project, index) => (
                    <Project 
                      key={`${index}-${project.title}`} 
                      srcImg={project.srcImg} 
                      title={project.title} 
                      description={project.description} 
                      codeLink={project.code}
                      viewLink={project.view}
                    />
                  ))
                }
              </div>
            </section>

            <section id="about" className="text-light bg-dark p-5 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-uppercase text-center">À propos</h2>
              <div className="row row-cols-1 row-cols-md-2 container">
                <p className="p-0 p-lg-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas nostrum non at veritatis deleniti! Quisquam libero voluptates optio quas minima, dignissimos temporibus nam. Harum id, aliquam facere dolorem assumenda corporis!.</p>
                <p className="p-0 p-lg-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque ex cumque fugiat perspiciatis nam ipsa necessitatibus quasi ullam delectus consequuntur ipsum ab, neque autem provident hic, corrupti unde impedit!</p>
              </div>
              <a href="#contact" className="btn btn-outline-light text-light">Contactez-moi</a>
            </section>

            <section id="services" className="d-flex flex-column justify-content-center alig-items-center">
              <h2 className="text-uppercase text-center my-5">Mes services</h2>
              <div className="row container mx-auto p-5 g-5">
                {
                  services.map((service, index) => (
                    <Service 
                      key={`${index}-${service.title}`}
                      srcImg={service.srcImg}
                      title={service.title}
                      description={service.description}
                      link={service.link}
                    />
                  ))
                }
              </div>
            </section>

            <section id="contact" className="py-5 bg-dark">
              <h2 className="text-light text-center">Rentrons en Contact !</h2>
              <form className="text-light container">
                <div className="row row-cols-1 row-cols-md-2">
                  <div className="my-3">
                    <label htmlFor="firstname" className="mb-2">Prénom *</label>
                    <input type="text" id="firstname" name="firstname" required className="text-dark form-control"/>
                  </div>
                  <div className="my-3">
                    <label htmlFor="lastname" className="mb-2">Nom *</label>
                    <input type="text" id="lastname" name="lastname" required className="text-dark form-control"/>
                  </div>
                </div>
                <div className="my-3">
                  <label htmlFor="email" className="mb-2">Email *</label>
                  <input type="email" name="email" id="email" required className="text-dark form-control" />
                </div>
                <div className="my-3">
                  <label htmlFor="message" className="mb-2">Message *</label>
                  <textarea name="message" id="message" rows={10} className="text-dark form-control"></textarea>
                </div>
                <button className="btn btn-success">Envoyez</button>

              </form>
            </section>
        </main>
        <Footer />
    </div>
  )
}
