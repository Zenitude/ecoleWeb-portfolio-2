import { ProjectProps } from "../../utils/types/ProjectProps";

export default function Project({srcImg, title, description, codeLink, viewLink }: ProjectProps) {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <article className="card p-0">
          <img src={srcImg} alt={title} className="card-img-top"/>
          <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{description}</p>
              <div className="links">
                  <a href={codeLink} className="btn btn-outline-dark m-2">Code source</a>
                  <a href={viewLink} className="btn btn-outline-dark m-2">Voir le projet</a>
              </div>
          </div>
      </article>
    </div>
  )
}
