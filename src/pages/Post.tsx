import { useParams } from 'react-router-dom';

import useBlogData from '../hooks/useBlogData';

const Post = () => {

    const params = useParams();
    const { postId } = params;
    const postIdNumber = Number(postId);
    const { getBlogPost } = useBlogData();
    const postData = getBlogPost(postIdNumber);

    return postData ? (
        <div className="space__page | space__page--post">
            <div className="space__page__page-content">
                <div className="space__page--post__header">
                    <div className="space__page--post__header__image"></div>
                    <div className="space__page--post__header__title">
                        {postData.title}
                    </div>
                    <div className="space__page--post__header__author-date">
                        <span>{`published by ${postData.author} `}</span>
                        <span>|</span>
                        <span>{` ${postData.date}`}</span>
                    </div>
                </div>
                <div className="space__page--post__content">
                    {postData.postText}
                </div>
            </div>
        </div>
    ) : null;
}

export default Post;