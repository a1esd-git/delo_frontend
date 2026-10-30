// import ''

type ProjectsItemProps = {
    img: string
    name: string
    description: string
}

function ProjectsItem({img, name, description}: ProjectsItemProps){
    return(
        <div className="projects_item">
            <img src={img} alt="" className="project_item_img"/>
            <span className="project_item_line"></span>
            <p className="project_item_title">{name}</p>
            <p className="project_item_description">{description}</p>
        </div>
    )
}

export default ProjectsItem