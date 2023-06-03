type BlotListItemProps = {
    id: string,
    title: string,
    author: string,
    date: string,
    text: string,
}

const BlogListItem = (props: BlotListItemProps) => {
    return (
        <div className="space__page--blog__blog-list__blog-item">
            <div className="space__page--blog__blog-list__blog-item__title">
                { props.title }
            </div>
            <div className="space__page--blog__blog-list__blog-item__author">
                by { props.author }
            </div>
            <div className="space__page--blog__blog-list__blog-item__date">
                { props.date }
            </div>
            <div className="space__page--blog__blog-list__blog-item__text">
                { props.text }
            </div>
        </div>
    )
}

export default BlogListItem;