import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function MenuItems(props) {
	const isLoggedIn = useSelector((state) => state.user.admin);
	
	return (
		<div className="main-nav-one">
			<nav>
				<ul>
					<li className="has-dropdown" style={{position: 'static'}}>
						<Link className="nav-link" href="#">Home</Link>

						<ul className="megamenu-hub">
							<li>
								<ul className="">
									<li>
										<Link href="/">Main Home</Link>
									</li>
									<li>
										<Link href="/home-2">Online Course </Link>
										<span className="popular">Popular</span>
									</li>
									<li>
										<Link href="/home-3">Course Hub</Link>
										<span>Hot</span>
									</li>
									<li className="upcoming-menu">
										<Link href="/home-4">Distance Learning</Link>
										<span>Upcoming</span>
									</li>
									<li className="upcoming-menu">
										<Link href="/home-5">Single Instructor</Link>
										<span>Upcoming</span>
									</li>
								</ul>
								<ul className="">
									<li className="upcoming-menu">
										<Link href="/home-6">Language Academy</Link>
										<span>Upcoming</span>
									</li>
									<li className="upcoming-menu">
										<Link href="/home-7">Gym Instructor</Link>
										<span>Upcoming</span>
									</li>
									<li className="upcoming-menu">
										<Link href="/home-8">Kitchen Coach</Link>
										<span>Upcoming</span>
									</li>
									<li className="upcoming-menu">
										<Link href="/home-9">Course Portal</Link>
										<span>Upcoming</span>
									</li>
									<li className="upcoming-menu">
										<Link href="/home-10">Business Coach</Link>
										<span>Upcoming</span>
									</li>
								</ul>
								<div className="absolute-image-shape shape-image">
									<Image className=" shape one" src="/images/nav/02.png" data-speed="0.04" data-revert="true" alt="nav" width={47} height={42} />
									<Image className=" shape two" src="/images/nav/03.png" data-speed="0.04" alt="nav" width={166} height={166} />
								</div>
								<div className="nav-mega-image">
									<Link href="/course/cloud-computing-masterclass">
										<Image src="/images/nav/01.jpg" alt="nav" width={495} height={229} />
									</Link>
								</div>
							</li>
						</ul>
					</li>

					<li className="has-dropdown">
						<Link className="nav-link" href="#">Pages</Link>
						<ul className="submenu">
							<li><Link href="/about">About Us</Link></li>
							<li><Link href="/about/two">About Two</Link></li>
							<li><Link href="/contact">Contact</Link></li>
							<li className="sub-dropdown">
								<Link href="#">Zoom</Link>
								<ul className="submenu third-lvl base">
									<li><Link className="mobile-menu-link" href="/meeting">Zoom Meeting</Link></li>
									<li><Link className="mobile-menu-link" href="/meeting/details">Zoom Details</Link></li>
								</ul>
							</li>
							<li className="sub-dropdown">
								<Link href="#">Event</Link>
								<ul className="submenu third-lvl base">
									<li><Link className="mobile-menu-link" href="/event">Event</Link></li>
									<li><Link className="mobile-menu-link" href="/event/two">Event Two</Link></li>
									<li><Link className="mobile-menu-link" href="/event/details">Event Details</Link></li>
								</ul>
							</li>
						</ul>
					</li>

					<li className="has-dropdown" style={{position: 'static'}}>
						<Link className="nav-link" href="#">Courses</Link>
						<ul className="megamenu-hub min-mega shape-move">
							<li>
								<ul className="">
									<li className="parent"><a href="#">Courses</a></li>
									<li><Link className="mobile-menu-link" href="/course">Courses</Link></li>
									<li><Link className="mobile-menu-link" href="/course/two">Course Two</Link></li>
									<li><Link className="mobile-menu-link" href="/course/three">Course Three</Link></li>
									<li><Link className="mobile-menu-link" href="/course/four">Course Four</Link></li>
								</ul>
								<ul className="">
									<li className="parent"><a href="#">Courses Details</a></li>
									<li><Link className="mobile-menu-link" href="/course/details/two">Course Details v2</Link></li>
									<li><Link className="mobile-menu-link" href="/course/details/three">Course Details v3</Link></li>
									<li><Link className="mobile-menu-link" href="/course/details/four">Course Details v4</Link></li>
									<li><Link className="mobile-menu-link" href="/course/details/five">Course Details v5</Link></li>
								</ul>
								<ul className="">
									<li className="parent"><a href="#">Others</a></li>
									<li><Link href="/instructor/registration">Become an Instructor</Link></li>
									<li><Link href="/instructor/1">Instructor Profile</Link></li>
									<li><Link href="/instructor">Instructor</Link></li>
									<li><Link href="/pricing">Membership Plan</Link></li>
								</ul>
								<div className="thumbnav-area">
									{/* single thumbnav */}
									<Link href="/course/create" className="single-thumbnav">
										<div className="icon">
											<Image src="/images/nav/04.png" alt="nav" width={28} height={28} />
										</div>
										<span>Create Course</span>
									</Link>
									{/* single thumbnav end */}
									{/* single thumbnav */}
									{
										isLoggedIn && isLoggedIn.role === "instructor" &&
										<Link href="/lesson/details" className="single-thumbnav mash">
											<div className="icon">
												<Image src="/images/nav/05.png" alt="nav" width={28} height={28} />
											</div>
											<span>Lesson Details</span>
										</Link>
									}
									{/* single thumbnav end */}
									{/* single thumbnav */}
									<Link href="/instructor" className="single-thumbnav">
										<div className="icon">
											<Image src="/images/nav/06.png" alt="nav" width={28} height={28} />
										</div>
										<span>Instructor</span>
									</Link>
									{/* single thumbnav end */}
								</div>
							</li>
						</ul>
					</li>

					{
						isLoggedIn &&
						<li className="has-dropdown">
							<Link className="nav-link" href="#">Dashboard</Link>
							<ul className="submenu">
								<li><Link href="/dashboard">Dashboard</Link></li>
								<li><Link href="/dashboard/profile">My Profile</Link></li>
								<li><Link href="/dashboard/enrolled">Enrolled Course</Link></li>
								<li><Link href="/dashboard/wishlist">Wishlist</Link></li>
								<li><Link href="/dashboard/reviews">Reviews</Link></li>
								<li><Link href="/dashboard/quiz">Quiz Attempts</Link></li>
								<li><Link href="/dashboard/order">Order History</Link></li>
								<li><Link href="/dashboard/question">Question Answer</Link></li>
								<li><Link href="/dashboard/calender">Calender</Link></li>
								<li><Link href="/dashboard/course">My Course</Link></li>
								<li><Link href="/dashboard/announcements">Announcement</Link></li>
								<li><Link href="/dashboard/assignments">Assignments</Link></li>
								<li><Link href="/dashboard/certificate">Certificate</Link></li>
							</ul>
						</li>
					}

					<li className="has-dropdown">
						<Link className="nav-link" href="#">Blog</Link>
						<ul className="submenu">
							<li><Link href="/blog">Blog</Link></li>
							<li><Link href="/blog/grid">Blog Grid</Link></li>
							<li><Link href="/blog/list">Blog List</Link></li>
							<li><Link href="/blog/sidebar/right">Blog Right Sidebar</Link></li>
							<li><Link href="/blog/sidebar/left">Blog Left Sidebar</Link></li>
							<li><Link href="/blog/details">Blog Details</Link></li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	)
}
