import React, { useState } from 'react';

const PromotionComponent = () => {
  const [showPixel, setShowPixel] = useState(false);

  const handleLinkClick = () => {
    setShowPixel(true); // Show the tracking pixel once the link is clicked
  };

  return (
    <>
      <p className="animate-pulse">
        ※{' '}
        <a
          href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3741428&pid=891428905"
          rel="nofollow"
          target="_blank"
          onClick={handleLinkClick}
        >
          <span>LYPプレミアム</span>（旧：Yahoo!プレミアム）にこちらから登録で、最大3ヶ月無料＆合計5,000円相当が貰えます（期間限定）
        </a>
      </p>
    </>
  );
};

export default PromotionComponent;
