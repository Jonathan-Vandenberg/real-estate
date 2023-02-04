import { BlogPost } from "../../types";
import BlogHeader from "./BlogHeader";
import BlogPostMarkup from "./Markup";

interface IFormProps {
  data: BlogPost | undefined | null;
  handleAdd: () => void;
  handleEdit: () => void;
}

export default function BlogMain({ data, handleEdit, handleAdd }: IFormProps) {
  return (
    <div className="container mx-auto">
      <BlogHeader data={data} />
      <div className="px-5 mx-auto">
        <BlogPostMarkup
          data={data}
          handleEdit={handleEdit}
          handleAdd={handleAdd}
        />
      </div>
    </div>
  );
}
