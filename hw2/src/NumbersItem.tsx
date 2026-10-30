// import './Numbers.css'

type NumbersItemProps = {
    num: number
    subtitle: string
    description: string
}

function NumbersItem({num, subtitle, description}: NumbersItemProps){
    return(
        <>
        <h2 className="numbers_title">
            {num}
        </h2>
        <p className="numbers_subtitle">
            {subtitle}
        </p>
        <p className="numbers_description">
            {description}
        </p>
        </>
    )
}

export default NumbersItem