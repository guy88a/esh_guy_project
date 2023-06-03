import blogItems from '../data/blogItems';
import BlogList from '../components/BlogList';

const Blog = () => {
    return (
        <div className="space__page | space__page--blog">
            <div className="space__page__page-content">
                <div className="space__page__page-content__title">
                    {'Space Blogs'}
                </div>

                <BlogList />
            </div>
        </div>
    )
}

export default Blog;