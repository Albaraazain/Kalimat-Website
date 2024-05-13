// components/ContentAreaPP.js
import React from 'react';
import PolicyContentEn from './PolicyPageContentENG';
import PolicyContentAr from './PolicyPageContentARB';

const ContentAreaPP = ({ language }) => {
  return (
    <div>
      {language === "English" ? <PolicyContentEn /> : <PolicyContentAr />}
    </div>
  );
};

export default ContentAreaPP;
