import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Brand() {
	const brandOptions = {
		slidesPerView: 4,
		spaceBetween: 30,
		centeredSlides: false,
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
			},
			767: {
				slidesPerView: 3,
			},
			0: {
				slidesPerView: 2,
			},
		},
	};

	return (
		<div className="rts-brand-style-two ptb--80 ptb_md--60 ptb_sm--50">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<h6 className="title">We collaborate with 300+ leading universities and companies</h6>
					</div>
				</div>
				<div className="row mt--30">
					<div className="col-lg-12">
						<div className="brand-area-main-wrapper-2">
							<div className="swiper-brand-wrapper-2">
								<Swiper {...brandOptions}>
									<SwiperSlide key="1">
										<div className="brand-area">
											<Image src="/images/brand/01.svg" alt="brand" width="82" height="24" />
										</div>
									</SwiperSlide>
									<SwiperSlide key="2">
										<div className="brand-area">
											<Image src="/images/brand/02.svg" alt="brand" width="77" height="24" />
										</div>
									</SwiperSlide>
									<SwiperSlide key="3">
										<div className="brand-area">
											<Image src="/images/brand/03.svg" alt="brand" width="111" height="26" />
										</div>
									</SwiperSlide>
									<SwiperSlide key="4">
										<div className="brand-area">
											<Image src="/images/brand/04.svg" alt="brand" width="57" height="24" />
										</div>
									</SwiperSlide>
									<SwiperSlide key="5">
										<div className="brand-area">
											<Image src="/images/brand/05.svg" alt="brand" width="57" height="22" />
										</div>
									</SwiperSlide>
									<SwiperSlide key="6">
										<div className="brand-area">
											<Image src="/images/brand/06.svg" alt="brand" width="79" height="24" />
										</div>
									</SwiperSlide>
									<SwiperSlide key="7">
										<div className="brand-area">
											<Image src="/images/brand/07.svg" alt="brand" width="87" height="21" />
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
