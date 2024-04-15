import { Link } from "react-router-dom";
import { blogdata } from "../api/blogdata";

const BlogPage = () => {
  return (
    <>
      <h1> BlogPage </h1>
      {blogdata.map((post, index) => (
        <BlogLink post={post} key={index} />
      ))}
    </>
  );
};
const BlogLink = ({ post }) => {
  return <Link to={`/blog/${post.slug}`}> {post.title}</Link>;
};

export { BlogPage };
