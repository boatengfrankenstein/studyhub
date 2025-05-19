import Image from "next/image";

export default function SingleTestimonialThree( props ) {
	const { testimonialClass, Img, Avatar, Author, Position, Content, imgWidth, imgHeight, QuoteIcon  } = props;

	return (
		<div className={testimonialClass || 'single-testimonials-3'}>
			<div className="row align-items-center">
				<div className="col-lg-4 ">
					<div className="testimonials-wrapper-left">
						<Image src={Img || "/images/students-feedback/05.jpg"} alt="feedback" width={imgWidth || 400} height={imgHeight || 420} />
					</div>
				</div>
				<div className="col-lg-8 pl--60 pl_md--20 pl_sm--15 mt_sm--20 mt_md--20">
					<div className="inner-testimonials">
						<div className="quote">
							<Image src={QuoteIcon || "/images/students-feedback/10.png"} alt="feedback" width="92" height="73" />
						</div>
						<p className="disc">
							{Content || "I can't recommend The Gourmet Haven enough. It's a place for special occasions, date nights, or whenever you're in the mood for a culinary adventure. The combination of exceptional."}
						</p>
						<div className="author-area">
							<Image src={Avatar || "/images/students-feedback/11.png"} alt="quote" width="60" height="60" />
							<div className="information">
								<h5 className="title">{Author || 'David John'}</h5>
								<span>{Position || 'Artist and Instructor'}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
