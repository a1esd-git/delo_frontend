import ProjectsItem from "./ProjectsItem"

type ProjectsProps = {
    img: string
    name: string
    description: string
}


function Projects(){

    const projects: ProjectsProps[] = [
        {img: "../../public/project_img.png", name: "Арена", description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."},
        {img: "../../public/project_img.png", name: "Арена", description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."},
        {img: "../../public/project_img.png", name: "Арена", description: "Мы сделали самую красивую арену в Европе. Это открытие стало для нас прорывной точкой для разивтия на следующие десятилетия. Мы очень рады данному еву."}
    ]

    return (
        <>
        <h3 className="project_title">НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h3>
        
        {projects.map((project) => (
            <ProjectsItem
                img={project.img}
                name={project.name}
                description={project.description}
            />
            ))
        }
        </>
    )
        
}

export default Projects