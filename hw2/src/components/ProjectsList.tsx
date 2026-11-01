import ProjectsItem from "./ProjectsItem"
import "../css/projects.css"

type ProjectsProps = {
    img: string
    name: string
    description: string
}


function ProjectsList(){

    const projects: ProjectsProps[] = [
        {img: "../../public/project_img.png", name: "Арена", description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."},
        {img: "../../public/project_img.png", name: "Арена", description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."},
        {img: "../../public/project_img.png", name: "Арена", description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."}
    ]

    return (
        <section className="projects">
            <div className="container">
                <div className="projects-content">
                    <h3 className="project_title">
                        НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ
                    </h3>
                    <div className="projects-cards">
                    {projects.map((project) => (
                        <ProjectsItem
                            img={project.img}
                            name={project.name}
                            description={project.description}
                        />
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    )
        
}

export default ProjectsList