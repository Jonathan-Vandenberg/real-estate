import { BlogPost, ImageBlog } from "../../types";
import BlogHeader from "./BlogHeader";
import BlogPostMarkup from "./Markup";

interface IFormProps {
  blogPost: BlogPost | undefined | null;
  imageBlog: ImageBlog[];
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogMain({
  blogPost,
  imageBlog,
  handleEdit,
  handleAdd,
}: IFormProps) {
  return (
    <div className="container mx-auto max-w-[100rem]">
      <div className="md:px-5">
        <BlogHeader blogPost={blogPost} imageBlog={imageBlog} />
      </div>
      <div className="px-5 mx-auto">
        <BlogPostMarkup
          blogPost={blogPost}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
}
