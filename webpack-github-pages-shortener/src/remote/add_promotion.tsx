
// import React from 'react';
// import ReactDOM from 'react-dom';
// import PromotionComponent from './PromotionComponent';

// const insertPromotion = () => {
//   const article = document.querySelector('article');
//   if (article) {
//     const firstParagraph = article.querySelector('p');
//     if (firstParagraph) {
//       const div = document.createElement('div');
//       ReactDOM.render(<PromotionComponent />, div);
//       firstParagraph.insertAdjacentElement('afterend', div);
//     }
//   }
// };

// insertPromotion(); // Call this function to insert the component

// 
// 
// 

// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// // import MyComponent from './MyComponent';
// import { useState } from 'react';

// const LYPremiumPromo = () => {
//   const [showTrackingPixel, setShowTrackingPixel] = useState(false);

//   const handleClick = () => {
//     setShowTrackingPixel(true);
//   };

//   return (
//     <p className="animate-pulse">
//       ※{" "}
//       <a
//         href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3741428&pid=891428905"
//         rel="nofollow"
//         target="_blank"
//         onClick={handleClick}
//       >
//         {showTrackingPixel && (
//           <img
//             src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3741428&pid=891428905"
//             height="1"
//             width="1"
//             // border="0"
//             alt=""
//           />
//         )}
//         LYPプレミアム＠＠
//       </a>{" "}
//       （旧：Yahoo!プレミアム）にこちらから登録で、最大3ヶ月無料＆合計5,000円相当が貰えます（期間限定）
//     </p>
//   );
// };

// // const htmlString = ReactDOMServer.renderToString(<>
// //   Hello, World!
// // </>);
// const htmlString = ReactDOMServer.renderToString(<LYPremiumPromo />);

// // Save the string to a file, or send it to the client via an API, etc.
// console.log(htmlString);

// // document.querySelector("article > p")?.insertAdjacentHTML('afterend', htmlString);

// 
// 
// 

import React from 'react';
import ReactDOM from 'react-dom';
import PromotionComponent from './PromotionComponent';

const insertPromotion = () => {
  const article = document.querySelector('article');
  if (article) {
    const firstParagraph = article.querySelector('p');
    if (firstParagraph) {
      const div = document.createElement('div');
      ReactDOM.render(<PromotionComponent />, div);
      firstParagraph.insertAdjacentElement('afterend', div);
    }
  }
};

insertPromotion(); // Call this function to insert the component
