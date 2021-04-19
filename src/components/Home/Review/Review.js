import React from 'react';

const BlogPost = (props) => {
    const {userName, review } = props.review;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
            <img style={{height: '200px'}} src={`data:image/png;base64,${props.review.image.img}`}/>
                <div>
                    <h6 className="text-primary">{userName}</h6>
                    {/* <p className="m-0">{date}</p> */}
                </div>
            </div>
            <div className="card-body">
                {/* <h5>{title}</h5> */}
                <p className="card-text text-secondary mt-4">{review}</p>
            </div>
            
       </div>
    );
};

export default BlogPost;