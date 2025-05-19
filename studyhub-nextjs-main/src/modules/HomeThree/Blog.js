import SingleBlogList from "@/components/Blog/List";
import Blogs from "@/data/blogs.json";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {

	return (
		<div className="rts-latest-blog-area-three rts-section-gap bg-lighte-1">
			<div className="container rts-section-gapBottom">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-between-area align-items-end">
							<div className="title-area-left-style">
								<div className="pre-title">
									<Image src="/images/banner/bulb.png" alt="icon" width="44" height="44" />
									<span>News & Article</span>
								</div>
								<h2 className="title">Read Our Latest News</h2>
								<p className="post-title">Our mission is to provide you with valuable insights</p>
							</div>
							<Link href="/blog" className="rts-btn btn-primary with-arrow">View All News <i className="fa-light fa-arrow-right"></i></Link>
						</div>
					</div>
				</div>
				<div className="row mt--20 g-5">
					{
						Blogs.map((blog, index) => {
							return (
								<div key={index} className="col-xl-6 col-lg-12 col-md-12 col-12">
									<SingleBlogList
										Slug={blog.slug}
										Img={blog.image}
										detailsImg={blog.detailsImg}
										Category={blog.category}
										Tag={blog.tag}
										Author={blog.author}
										Title={blog.title}
										publishedDate={blog.publishedDate}
										btnText={blog.btnText}
									/>
								</div>
							);
						}).slice(0, 2)
					}
				</div>
			</div>
		</div>
	)
}
