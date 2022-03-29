import './style.scss'
const Div = (props)=>{

    return(
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">
                    <ul>
                        <li>El. paštas: {props.email}</li>
                        <li>Spalva: {props.color}</li>
                    </ul>
                </p>
            </div>
        </div>
    )

}

export default Div;