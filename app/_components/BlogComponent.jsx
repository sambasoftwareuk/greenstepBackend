import { Header1 } from "../_atoms/Headers";
import BlogCard from "../_molecules/blogCard";
import { SambaLinks } from "../_atoms/SambaLinks";

const BlogComponent = ({
  blogData,
  showTitle = true,
  title = "Blog",
  maxItems = null,
  showViewAllButton = false,
  className = "",
}) => {
  // maxItems varsa sadece o kadar blog göster
  const displayBlogs = maxItems ? blogData.slice(0, maxItems) : blogData;

  return (
    <div className={`w-full flex flex-col items-center mt-8 ${className}`}>
      {showTitle && <Header1 className="m-8">{title}</Header1>}

      {/* Blog kartları */}
      <div className="flex flex-wrap gap-6 justify-center mb-4 px-1 sm:px-2 md:px-2 lg:px-8 xl:px-16">
        {displayBlogs.map((post, index) => (
          <BlogCard
            key={index}
            slug={post.slug}
            imageLink={post.imageLink}
            imageAlt={post.imageAlt}
            date={post.date}
            title={post.title}
            excerpt={post.excerpt}
            aspectRatio={post.aspectRatio}
          />
        ))}
      </div>

      {showViewAllButton && (
        <div className="text-center m-6">
          <SambaLinks
            href="/blog"
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary900 transition-colors duration-200 font-medium"
          >
            Bloglarin Tümünü Gör
          </SambaLinks>
        </div>
      )}
    </div>
  );
};

export default BlogComponent;
