import BlogListItem from './BlogListItem';


const BlogList = (props: BlogListProps) => {
    return (
        <div className="blog-list-wrapper">
            <div className="space__page--blog__blog-list">
                {
                    props.blogData.map((blogItem, index) => {
                        return <BlogListItem
                        key={`blogItem_${index}`}
                        itemId={blogItem.itemId}
                        title={blogItem.title}
                        author={blogItem.author}
                        date={blogItem.date}
                        text={blogItem.text}
                        delay={100 * index} />
                    })
                }
            </div>
        </div>
    )
}

type BlogListProps = {
    blogData: {
                itemId: string,
                title: string,
                author: string,
                date: string,
                text: string,
                postText: string,
              }[],
}

export default BlogList;