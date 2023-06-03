import { useState, useEffect } from 'react';
import blogItems from '../data/blogItems';

const useBlogData = () => {

    const [ blogData, setBlogData ] = useState<{
            itemId: string,
            title: string,
            author: string,
            date: string,
            text: string,
            postText: string
        }[]>([{itemId: 'string', title: 'string', author: 'string', date: 'string', text: 'string', postText: 'string'}]);

    useEffect(() => {
        setBlogData([...blogItems]);
    }, []);

    function getBlogPost(index: number) {
        if(index > 0 && index <= blogItems.length) {
            return blogData[index - 1];
        }
        return {itemId: '-1', title: '-1', author: '-1', date: '-1', text: '-1', postText: '-1'}
    }

    return {
        blogData,
        getBlogPost
    }

};

export default useBlogData;