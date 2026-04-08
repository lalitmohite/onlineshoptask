import Blogcard from "./Blogcard"
import Blogdata from "../Blogdata.json"


function Blog() {

    return (
        <div>
            {Blogdata.map((product, index) => (
                <Blogcard 
                key={index}
                imaggge={product.imagesss}
                title={product.title}
                price={product.price}
                button={product.button}
                /> 
            ))}
        </div>
    )
}

export default Blog;