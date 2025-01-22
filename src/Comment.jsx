import React, { useState } from 'react';

const Comment = () => {
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
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Comment and Review Section</h2>

            <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-gray-600 font-medium mb-1">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                        value={commentData.name}
                        onChange={(e) => setCommentData({ ...commentData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                <div>
                    <label htmlFor="comment" className="block text-gray-600 font-medium mb-1">Your Comment</label>
                    <textarea
                        id="comment"
                        placeholder="Enter Your Comment"
                        value={commentData.comment}
                        onChange={(e) => setCommentData({ ...commentData, comment: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>

            <div className="mt-8 space-y-6">
                {comments.length > 0 && comments.map((comment, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-700">{comment.name}</h4>
                        </div>
                        <p className="text-gray-600 mb-4">{comment.text}</p>
                        <div className="flex items-center space-x-4">
                            <button
                                onClick={() => incrementLike(index)}
                                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                            >
                                Like
                            </button>
                            <span className="text-gray-600">{comment.like}</span>
                            <button
                                onClick={() => decrementLike(index)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                            >
                                Dislike
                            </button>
                            <span className="text-gray-600">{comment.dislike}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comment;
