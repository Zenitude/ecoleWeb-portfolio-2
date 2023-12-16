import { ServiceProps } from "../../utils/types/ServiceProps";

export default function Service({srcImg, title, description, link}: ServiceProps) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
        <article className="text-dark d-flex flex-column">
            <img src={srcImg} alt={title} className="mx-auto"/>
            <div className="description d-flex flex-column">
                <h3 className="text-center">{title}</h3>
                <p>{description}</p>
                <a href={link} className="btn btn-secondary text-light mx-auto">Voir mes projets</a>
            </div>
        </article>
    </div>
  )
}
