import "../css/requests.css"

function Requests(){
    return(
        <section className="requests">
            <div className="container">
                <div className="requests_content">
                    <div className="requests_text">
                        <h2 className="requests_title">САМЫЕ УМНЫЕ ПРОЕКТЫ</h2>
                        <h3 className="requests_description">РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!</h3>
                    </div>
                    <button type="button" className="btn">
                        <a href="http://" target="_blank" rel="noopener noreferrer" className="btn-link">ВАШ ЗАПРОС</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Requests