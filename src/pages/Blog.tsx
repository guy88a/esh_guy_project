import BlogList from '../components/BlogList';
import useBlogData from '../hooks/useBlogData';

const Blog = () => {

    const { blogData } = useBlogData();

    return (
        <div className="space__page | space__page--blog">
            <div className="space__page__page-content">
                <div className="space__page__page-content__title">
                    {'Space Blogs'}
                </div>

                <BlogList blogData={blogData} />
            </div>
        </div>
    )
}

export default Blog;