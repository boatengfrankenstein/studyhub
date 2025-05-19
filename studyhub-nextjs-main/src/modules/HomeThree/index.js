import Banner from "./Banner";
import Blog from "./Blog";
import Brand from "./Brand";
import Category from "./Category";
import JoinTeam from "./JoinTeam";
import Testimonial from "./Testimonial";
import TrendingCourse from "./TrendingCourse";

import Counter from "@/components/Counter";
import ScrollTop from "@/components/ScrollTop";
import CountDown from "../AboutTwo/CountDown";
import Course from "./Course";

export default function HomeTwoModule() {
	return (
		<main>
			<Banner />
			<Brand />
			<TrendingCourse />
			<Category />
			<Course />
			<CountDown />
			<JoinTeam />
			<Counter />
			<Testimonial />
			<Blog />
			<ScrollTop />
		</main>
	)
}
