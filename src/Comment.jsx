import React, { useState } from 'react';
import './Comment.css'; // Assuming you'll add the CSS styles in a separate file

function Comment() {
    const [commentData, setCommentData] = useState({
        comment: '',
        name: '',
    });

    const [comments, setComments] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (commentData.comment && commentData.name) {
            setComments([
                ...comments,
                { text: commentData.comment, name: commentData.name, like: 0, dislike: 0 }
            ]);
            setCommentData({ comment: '', name: '' });
        }
    };

    const incrementLike = (index) => {
        const newComments = [...comments];
        newComments[index].like++;
        setComments(newComments);
    };

    const decrementLike = (index) => {
        const newComments = [...comments];
        newComments[index].dislike++;
        setComments(newComments);
    };

    return (
        <div className="comment-container">
            <h2 className="title">Comment and Review Section</h2>

            <form onSubmit={handleFormSubmit} className="comment-form">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                    type="text"
                    className="input-field"
                    id="name"
                    placeholder="Enter Your Name"
                    value={commentData.name}
                    onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                />

                <label htmlFor="comment" className="form-label">Your Comment</label>
                <textarea
                    id="comment"
                    className="textarea-field"
                    placeholder="Enter Your Comment"
                    value={commentData.comment}
                    onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                ></textarea>

                <button type="submit" className="submit-btn">Submit</button>
            </form>

            <div className="comments-list">
                {comments.length > 0 && comments.map((comment, index) => (
                    <div className="comment" key={index}>
                        <div className="comment-header">
                            <h4>{comment.name}</h4>
                        </div>
                        <p className="comment-text">{comment.text}</p>
                        <div className="reaction-buttons">
                            <button className="like-btn" onClick={() => incrementLike(index)}>Like</button>
                            <span>{comment.like}</span>
                            <button className="dislike-btn" onClick={() => decrementLike(index)}>Dislike</button>
                            <span>{comment.dislike}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Comment;
