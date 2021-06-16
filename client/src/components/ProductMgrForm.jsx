const ProductForm = props =>{
    const{inputs,handleInputChange, handleSubmit, title, submitValue, errors} = props;

    return (
        <form onSubmit={handleSubmit} className="col-6 mx-auto">
            <h2 className="text-center">{title}</h2>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                type="text" 
                name="title" 
                className="form-control"
                onChange={handleInputChange}
                value={inputs.title}
                />
                <span className="text-danger">
                    {errors.title ? errors.title.message : ""}
                </span>
            </div>

            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input 
                type="number" 
                name="price" 
                className="form-control"
                onChange={handleInputChange}
                value={inputs.price}
                />
                <span className="text-danger">
                {errors.price ? errors.price.message : ""}

                </span>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description of Product</label>
                <input 
                type="text" 
                name="description" 
                className="form-control"
                onChange={handleInputChange}
                value={inputs.description}
                />
                <span className="text-danger">
                    {errors.description ? errors.description.message : ""}
                </span>
            </div>

            <input type="submit" value={submitValue} className="submit btn btn-primary"/>
        </form>
    )

}

export default ProductForm;