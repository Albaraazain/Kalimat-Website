// components/ContentAreaPP.js
import React from 'react';
import TermsAndConditionTextENG from './ContentAreaTCP_Components/ContentAreaTCP_ENG';
import TermsAndConditionTextARB from './ContentAreaTCP_Components/ContentAreaTCP_ARB';

const ContentAreaPP = ({ language }) => {
  return (
    <div>
      {language === "English" ? <TermsAndConditionTextENG /> : <TermsAndConditionTextARB />}
    </div>
  );
};

export default ContentAreaPP;
