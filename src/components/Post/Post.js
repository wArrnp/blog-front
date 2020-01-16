import React from 'react';
import * as S from './Styles';
import PostReplyInput from '../PostReplyInput/PostReplyInput';
import PostReplyItem from '../PostReplyItem/PostReplyItem';


function Post({ postId, date, title, description, category, reply }) {
    const replyItems = reply.map(replyData => <PostReplyItem postId={postId} {...replyData} key={replyData.replyId}/>)
    return (
        <S.PostWrapper>
            <S.PostTitle>
                {title}
            </S.PostTitle>
            <S.PostDateAndCategoryWrapper>
                <S.PostDateAndCategory>
                    {date}
                </S.PostDateAndCategory>
                <S.PostDateAndCategory>
                    {category}
                </S.PostDateAndCategory>
            </S.PostDateAndCategoryWrapper>
            <div>
                {description}
            </div>
            <S.PostReplyWrapper>
                {replyItems}
            </S.PostReplyWrapper>
            <PostReplyInput postId={postId}/>
        </S.PostWrapper>
    )
}

export default Post;