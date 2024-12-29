import { getBlogPosts } from "@/data/blog";
import BlogList from "@/components/BlogList";
import BlurFade from "@/components/magicui/blur-fade";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY} className="sticky top-0 z-10 pt-5 bg-white dark:bg-black">
        <h1 className="font-semibold text-3xl mb-1 tracking-tighter">Blogs</h1>
        <h3 className="font-medium text-md tracking-tighter">My thoughts on 💡 Technology, life 🧘‍♂️, and more....🌍</h3>
      </BlurFade>
      <BlogList posts={posts} />
    </section>
  );
}
