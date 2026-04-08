


function Blogcard(props) {
    return (
        <div>
            <div className="card">
                <img src={props.imaggge} alt="product" />
                <h2> {props.title}</h2>
                <h2> {props.price} </h2>
                <button> {props.button} </button>
            </div>
            
        </div>



        
    )
}

export default  Blogcard;