import useShapeMove from "@/hooks/useShapeMove";
import Image from "next/image";
import { useRef } from 'react';

export default function Banner() {
	const shapeMoveRef = useRef(null);
  	useShapeMove(shapeMoveRef);

	return (
		<div className="banner-two-flow-1920">
			<div className="rts-banner-area-3 shape-move banner-review banner-three-bg rts-section-gap bg_image" ref={shapeMoveRef}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="banner-three-wrapper">
								<div className="title-area-center-style">
									<div className="pre-title">
										<Image src="/images/banner/bulb.png" alt="icon" width="22" height="22" />
										<span>Gateway to Lifelong Learning</span>
									</div>
									<h1 className="title">Find the Perfect Course for <br />
										<span>Your Carrier Goals</span>
										<Image src="/images/banner/shape/04.png" alt="shape" width="243" height="14" />
									</h1>
									<form action="#">
										<div className="category-search-input">
											<div className="select-banner-search-left">
												<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
													<path fillRule="evenodd" clipRule="evenodd" d="M0 0H3V3H0V0ZM6 0H9V3H6V0ZM3 6.00001H0V9.00001H3V6.00001ZM6 6.00001H9V9.00001H6V6.00001ZM3 12H0V15H3V12ZM6 12H9V15H6V12Z" fill="#553CDF" />
													<path d="M15 0H12V3H15V0Z" fill="#553CDF" />
													<path d="M15 6H12V9H15V6Z" fill="#553CDF" />
													<path d="M15 12H12V15H15V12Z" fill="#553CDF" />
												</svg>
												<select className="nice-select" name="price">
													<option>All Category</option>
													<option value="asc">Design</option>
													<option value="desc">Development</option>
													<option value="pop">Popularity</option>
													<option value="low">Price</option>
													<option value="high">Stars</option>
												</select>
											</div>
											<input type="email" placeholder="Find Your Course" required />
											<button>Search</button>
										</div>
									</form>
									<div className="banner-tags-wrapper">
										<div className="single-tags-banner">
											<p>UI/UX Design</p>
										</div>
										
										<div className="single-tags-banner">
											<p>Web Design</p>
										</div>
										
										<div className="single-tags-banner">
											<p>Marketing</p>
										</div>

										<div className="single-tags-banner">
											<p>Digital Marketing</p>
										</div>
										
										<div className="single-tags-banner">
											<p>Finance</p>
										</div>
										
										<div className="single-tags-banner">
											<p>Dancing</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="banner-three-images shape-image">
					<div className="shape left-top" data-speed="0.04">
						<Image src="/images/banner/10.png" alt="banner" width="242" height="242" />
					</div>
					<div className="shape left-bottom" data-speed="0.04" data-revert="true">
						<Image src="/images/banner/11.png" alt="banner" width="192" height="220" />
					</div>
					<div className="shape right-center">
						<Image src="/images/banner/09.png" alt="banner" width="274" height="367" />
					</div>
				</div>
				<div className="shape-area shape-image">
					<Image className="shape one" src="/images/banner/shape/01.png" width="46" height="46" data-speed="0.04" data-revert="true" alt="shape" />
					<Image className="shape two" src="/images/banner/shape/02.png" width="67" height="47" data-speed="0.04" alt="shape" />
					<Image className="shape three" src="/images/banner/shape/03.png" width="50" height="54" data-speed="0.04" alt="shape" />
					<Image className="shape four" src="/images/banner/shape/03.svg" width="49" height="74" data-speed="0.04" data-revert="true" alt="shape" />
					<Image className="shape five" src="/images/banner/shape/04.svg" width="36" height="35" data-speed="0.04" alt="shape" />
					<Image className="shape six" src="/images/banner/shape/05.svg" width="220" height="220" data-speed="0.04" data-revert="true" alt="shape" />
				</div>
				<div className="review-thumb">
					<div className="review-single">
						<Image src="/images/banner/07.png" width="36" height="34" alt="banner" />
						<div className="info-right">
							<h6 className="title">4.5</h6>
							<span>(2.4k Review)</span>
						</div>
					</div>
					
					<div className="review-single two">
						<Image src="/images/banner/08.png" alt="banner" width="34" height="25" />
						<div className="info-right">
							<h6 className="title">100+</h6>
							<span>Online Course</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
