import React from 'react';
import ProfileInfo from "./ProfileInfo";
import ImageList from "./ImageList";

const app = () => {
   return (
      <div className="ui container">
         <ProfileInfo />
         <ImageList />
      </div>
   );
}

export default app;