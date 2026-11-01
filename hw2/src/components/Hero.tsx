import NumbersList from "./NumbersList"
import "../css/hero.css"

function Hero(){
    return(
        <div className="hero">
            <div className="container">
                <div className="hero-content">
                    {/* Заголовки */}
                    <h1 className="hero_title">
                        РЕАЛИЗУЕМ КРУПНЕЙШИЕ <br/> ПРОЕКТЫ В МИРЕ
                    </h1>
                    <p className="hero_subtitle">
                        стадионы, газопроводы, мосты, дамбы
                    </p>
                    
                    {/* Карточки с цифрами */}
                    <NumbersList/>

                </div>
            </div>
        </div>  
    )
}

export default Hero