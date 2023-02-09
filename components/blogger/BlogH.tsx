import { BlogPost, ImageBlog } from "../../types";

interface IHeroProps {
  blogPost: BlogPost | undefined | null;
  imageBlog: ImageBlog[];
}

const BlogHeader = ({ blogPost, imageBlog }: IHeroProps) => {
  const styles = blogPost?.mainImage ? "pb-2 block" : "h-60 w-60";
  return (
    <div className="bg-off-white md:pt-4">
      <div className="container px-5 lg:px-0 mx-auto">
        {blogPost?.title && (
          <h1 className="logoFont text-3xl pt-6 text-gray-700 font-semibold md:text-5xl">
            {blogPost?.title}
          </h1>
        )}
        {blogPost?.subtitle1 && (
          <h2 className="py-2 text-2xl">{blogPost?.subtitle1}</h2>
        )}
        <div className="flex flex-col items-start justify-center md:flex-row md:justify-between pt-3">
          <div>
            <div className="flex items-center justify-start space-x-3 pb-3">
              <div className="flex items-start flex-col justify-start">
                {blogPost?.authorName && (
                  <>
                    <p className="text-dark-gray text-md">
                      By {blogPost?.authorName}
                    </p>
                  </>
                )}
                {blogPost?.publishedDate && (
                  <p className="text-xs text-gray">
                    Published {blogPost?.publishedDate}
                  </p>
                )}
              </div>
            </div>
          </div>
          {blogPost?.editedBy && (
            <div className="flex items-center justify-start space-x-1">
              <p className="text-sm text-gray-500">Edited by</p>
              <p className="text-sm">{blogPost?.editedBy}</p>
            </div>
          )}
        </div>
        <div className="pb-2 block">
          <div className="flex items-center justify-center">
            <div className={styles}>
              {blogPost?.imageBlog &&
                blogPost?.imageBlog.map((image) => (
                  <div key={image && image.url}>
                    {image?.url && (
                      <img
                        src={image.url}
                        alt="Highway Properties Hero Image"
                        className="rounded-lg"
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
          {blogPost?.photoCredit && (
            <p className="text-xs pb-2">
              Image Credit: {blogPost?.photoCredit}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
