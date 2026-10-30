import Numbers from "./Numbers"

function Hero(){
    return(
        <div className="hero">
            {/* Заголовки */}
            <h1 className="hero_title">
                РЕАЛИЗУЕМ КРУПНЕЙШИЕ <br/> ПРОЕКТЫ В МИРЕ
            </h1>
            <p className="hero_subtitle">
                стадионы, газопроводы, мосты, дамбы
            </p>
            
            {/* Карточки с цифрами */}
            <Numbers/>
        </div>
    )
}

export default Hero