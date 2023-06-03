import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const BlogListItem = (props: BlotListItemProps) => {

    const [ animationClass, setAnimationClass ] = useState<string>('');
    
    useEffect(() => {
        addAnimationClass();
    }, [addAnimationClass]);

    function addAnimationClass() {
        window.setTimeout(() =>{
            setAnimationClass('item-slide');
        }, props.delay);
    }

    return (
        <NavLink to={`/blog/${props.itemId}`} className={`space__page--blog__blog-list__blog-item ${animationClass}`}>
            <div className="space__page--blog__blog-list__blog-item__title">
                { props.title }
            </div>
            <div className="space__page--blog__blog-list__blog-item__author">
                by <b>{ props.author }</b>
            </div>
            <div className="space__page--blog__blog-list__blog-item__date">
                { props.date }
            </div>
            <div className="space__page--blog__blog-list__blog-item__text">
                { props.text }
            </div>
        </NavLink>
    )
}

type BlotListItemProps = {
    itemId: string,
    title: string,
    author: string,
    date: string,
    text: string,
    delay: number,
}

export default BlogListItem;