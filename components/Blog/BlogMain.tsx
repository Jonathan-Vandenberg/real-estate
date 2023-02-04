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
    <div className="container mx-auto max-w-[100rem]">
      <div className="md:px-5">
        <BlogHeader data={data} />
      </div>
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
