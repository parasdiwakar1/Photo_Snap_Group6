
const Details=({title,content,author,role})=>{
    return(
        <div className="card">
            <h3 className="stars"></h3>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <div className="blockquote-footer">
                    {author} <cite title="Source Title">{role}</cite>
                </div>
            </div>
            
        </div>
        
       
    );
};
export default Details;