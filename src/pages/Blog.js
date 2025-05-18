import React, { useState } from 'react';

function Blog() {
  const [likes, setLikes] = useState(24);
  const [liked, setLiked] = useState(false); // Tracks if the user already clicked like

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  const handleShare = () => {
    alert('Link copied to clipboard!');
    // Optional real clipboard functionality:
    // navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="container myBlog my-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {/* Card 1 */}
        <div className="col">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">How to Start with HTML &amp; CSS ?</h5>
              <p className="card-text">
                A beginner's guide to building beautiful websites using HTML and CSS...{' '}
                <a
                  href="https://www.codecademy.com/catalog/language/html-css"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  Read more
                </a>
              </p>
              <div className="mt-auto">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group" role="group">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary border-0"
                      onClick={handleLike}
                      disabled={liked}
                    >
                      👌 {likes}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">Posted on May 10, 2025</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
