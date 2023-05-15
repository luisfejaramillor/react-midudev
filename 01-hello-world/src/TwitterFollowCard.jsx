import { useState } from "react";

export const TwitterFollowCard = ({
  formatUserName,
  userName,
  name,
  initialIsFollowing,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Following" : "Follow";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const imageSrc = `https://unavatar.io/${userName}`;

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imageSrc}
          alt="Midudev avatar"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-info-userName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>

          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Unfollow</span>
        </button>
      </aside>
    </article>
  );
};
