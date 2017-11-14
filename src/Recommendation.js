import React from 'react';
import OptionsBox from './OptionsBox';

function Recommendation(props = "El Pooch of La Mancha") {
  return (
    <article className="recommendation-article">
      <div className="bookcontainer large-3 small-6 columns">
        <img src="http://books.google.com/books/content?id=fdjqz0TPL2wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" alt="book cover" />
      </div>
      <div className="bookdetails large-9 small-4 columns">
        <h3>{props.title}</h3>
        <p><span className="author">{props.author}</span></p>
        <span className="rating">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-half-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </span>
      </div>
      <div className="row">
        <div className="large-12 small-6 columns">
          <p className="reviewText">Description coming soon. Fearful inexpedient fearful will joy philosophy. Battle war transvaluation eternal-return society madness eternal-return chaos right free morality merciful.</p>
          <OptionsBox />
        </div>
      </div>
    </article>

  );
}

export default Recommendation;
