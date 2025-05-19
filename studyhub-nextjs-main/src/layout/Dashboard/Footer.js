import Image from "next/image";
import Link from "next/link";

export default function DashboardFooter() {
	
	return (
		<div className="footer-dashboard">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="footer-dashboard-inner">
							<p>Copyright © 2024 All Rights Reserved by <a href="#">Studyhub</a></p>
							<Link href="/">
								<Image src="/images/logo/logo-4.svg" width={126} height={25} alt="logo" />
							</Link>
							<div className="social-area-dashboard-footer">
								<ul>
									<li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
									<li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
									<li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
									<li><a href="#"><i className="fa-brands fa-pinterest"></i></a></li>
									<li><a href="#"><i className="fa-brands fa-youtube"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
