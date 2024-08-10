import css from './ReviewsInfo.module.css';
import icons from '../../assets/icons/symbol.svg';

export const ReviewsInfo = ({ reviews }) => {
  console.log(reviews);

  return (
    <div>
      <ul className={css.reviewsList}>
        {Array.isArray(reviews) &&
          reviews.map((item, index) => (
            <li key={index}>
              <div className={css.reviewsAvatar}>
                <p className={css.reviewsAvatarText}>
                  {item.reviewer_name.charAt(0).toUpperCase()}
                </p>
                <div>
                  <h3 className={css.reviewsAvatarName}>
                    {item.reviewer_name}
                  </h3>
                  <p className={css.reviewsRating}>
                    {item.reviewer_rating}{' '}
                    <svg className={css.reviewsIcons}>
                      <use href={`${icons}#icon-Rating`} />
                    </svg>
                  </p>
                </div>
              </div>
              <p className={css.reviewsInfo}>{item.comment}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
