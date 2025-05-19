import Courses from "@/data/courses.json";
import Image from "next/image";
import Link from "next/link";
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import SingleCourseTwo from "@/components/Course/Two";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination]);

export default function TrendingCourse() {

	const sliderOptions = {
		slidesPerView: 6,
		spaceBetween: 30,
		centeredSlides: false,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			1240: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			740: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
		},
	};


	return (
		<div className="rts-section-gapBottom rts-feature-course-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="title-between-area align-items-end">
							<div className="title-area-left-style">
								<div className="pre-title">
									<Image src="/images/banner/bulb.png" alt="icon" width="22" height="22" />
									<span>Courses</span>
								</div>
								<h2 className="title mb--5">Explore Featured Courses</h2>
								<p className="disc">
									You'll find something to spark your curiosity and enhance
								</p>
							</div>
							<Link href="/course" className="rts-btn btn-primary with-arrow">View All Course <i className="fa-light fa-arrow-right"></i></Link>
						</div>
					</div>
				</div>
				<div className="row mt--50">
					<div className="col-lg-12">
						<div className="float-right">
							<Swiper {...sliderOptions} className="swiper swiper-float-right-course">
								{
									Courses.map((course, index) => {
										return (
											<SwiperSlide key={index}>
												<SingleCourseTwo
													Slug={course.slug}
													Img={course.img}
													Category={course.category}
													lessonCount={course.lessonCount}
													studentCount={course.studentCount}
													Title={course.title}
													Author={course.authorName}
													ratingCount={course.ratingCount}
													prevPrice={course.prevPrice}
													Price={course.price}
													imgWidth={course.imgWidth}
													imgHeight={course.imgHeight}
												/>
											</SwiperSlide>
										)
									}).slice(0, 5)
								}
								<div className="left-align-arrow-btn">
									<div className="swiper-button-next"><i className="fa-solid fa-chevron-right"></i></div>
									<div className="swiper-button-prev"><i className="fa-solid fa-chevron-left"></i></div>
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
