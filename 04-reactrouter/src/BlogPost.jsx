import { useNavigate, useParams } from "react-router-dom";
import { blogdata } from "./api/blogdata";

const BlogPost = () => {
  const navigate = useNavigate()
  const params = useParams();
  const slug = params.slug;
  const blogpost = blogdata.find((post) => post.slug === slug);
  console.log(params);

  const returnToBlog = () => {
    navigate('/blog' , { replace: true })

    // replace true hace que las rutas nuevas que accedimos sean invisible y reemplzadas por la que pusimos en navigate
    // navigate(-1) // volver hacia atras
  }
  return (
    <>
      <h1> {blogpost.title} </h1>
      <button onClick={returnToBlog}>VOLVER AL BLOG</button>
      <p> {blogpost.content} </p>
      <p> {blogpost.author}</p>
    </>
  );
};

export { BlogPost };
