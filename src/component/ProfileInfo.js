import React, { useState } from "react";
import profpic from "../assets/gambar.png";
import ProfileStats from "./ProfileStats";

const ProfileInfo = () => {
  const [isFollowed, setIsFollowed] = useState(false);
  return (
    <div className="ui two column grid" style={{ paddingTop: 100 }}>
      <div className="column">
        <img
          className="ui centered image"
          src={profpic}
          alt="profpic"
          style={{
            height: 200,
            width: 200,
            objectFit: "cover",
            borderRadius: "100%",
          }}
        />
      </div>

      <div className="column">
        <div
          className="row"
          style={{ display: "flex", alignContent: "center" }}
        >
          <h1 style={{ marginRight: 20 }}>Ali Rafli</h1>
          <button
            className={"ui button "+ (!isFollowed && "primary")}
            onClick={() => setIsFollowed(!isFollowed)}
          >
            {isFollowed ? "Followed" : "Follow"}
          </button>
        </div>

        <div className="row" style={{ display: "flex" }}>
          <ProfileStats count="500" desc="post" />
          <ProfileStats count="1000" desc="Followers" />
          <ProfileStats count="1000" desc="Following" />
        </div>

        <div className="row">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
