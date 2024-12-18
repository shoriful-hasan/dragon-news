import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const {
      title,
      thumbnail_url,
      details,
      author,
      rating,
      total_view,
      others_info,
      _id
    } = news;
  
    return (
      <div className="card bg-base-100 shadow-xl w-full mx-auto my-6">
        {/* Thumbnail */}
        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="object-cover h-52 w-full"
          />
        </figure>
  
        {/* Card Content */}
        <div className="card-body">
          {/* Author */}
          <div className="flex items-center mb-3">
            <img
              src={author.img}
              alt="Author"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <h4 className="text-sm font-semibold">Author::{author.name}</h4>
              <p className="text-xs text-gray-500">{author.published_date}</p>
            </div>
          </div>
  
          {/* Title */}
          <h2 className="card-title text-lg font-bold mb-2">{title}</h2>
  
          {/* Details */}
          <p className="text-sm text-gray-600">
            {details.length > 100 ? details.slice(0, 100) + "..." : details}
          </p>
  
          {/* Rating & Views */}
          <div className="flex justify-between items-center mt-3">
            <span className="text-yellow-500 font-medium">
              ⭐ {rating.number} ({rating.badge})
            </span>
            <span className="text-gray-600 text-sm">👁️ {total_view} Views</span>
          </div>
  
          {/* Trending Tag */}
          {others_info.is_trending && (
            <div className="badge badge-error mt-4 text-white">Trending</div>
          )}
  
          {/* Read More Button */}
          <div className="card-actions justify-end mt-4">
            
            <Link className="btn btn-sm btn-primary" to={`/news/${news._id}`}>Read More</Link>
          </div>
        </div>
      </div>
    );
  };
export default NewsCard;