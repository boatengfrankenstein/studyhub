import Image from "next/image";
import Link from "next/link";

export default function SingleCategoryThree( props ) {
	const { categoryClass, Slug, Img, Title, categoryCount, imgWidth, imgHeight  } = props;

	return (
		<div className="category-single-list">
			<Link href={`/course/:id?cat=${Slug || 'development'}`} className={categoryClass || 'single-category-2'}>
				<Image src={Img || '/images/category/05.png'} alt="brand" width={imgWidth || 60} height={imgHeight || 64} />
			</Link>
                        
			<div className="information">
				<Link href={`/course/:id?cat=${Slug || 'development'}`}>
					<h6 className="title">{Title || 'Music & Dance'}</h6>
				</Link>
				<span>{categoryCount || '130'}+ Courses</span>
			</div>
		</div>
	)
}
