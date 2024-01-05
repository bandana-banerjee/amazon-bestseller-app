const Book=(props)=>{
  const { img, title, author,number}=props;
  
  return <article className='book'>
<img src={img} alt={title}/>
<h2>{title.toLocaleUpperCase()}</h2>

<h4 >{author.toLocaleUpperCase()}</h4>
<span className="number">#{number + 1}</span>

  </article>
}

export default Book;