import { ServiceProps } from "../../utils/types/ServiceProps";

export default function Service({srcImg, title, description, link}: ServiceProps) {
  return (
    <div>
        <article className="text-dark">
            <img src={srcImg} alt={title} />
            <div className="description">
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} className="bg-secondary text-light">Voir mes projets</a>
            </div>
        </article>
    </div>
  )
}
