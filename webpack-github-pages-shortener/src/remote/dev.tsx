import { h, render } from "preact";
import { useState } from "preact/hooks";

// Function to dynamically create the promotion component
(async () => {
  // const hasPromotion = document.querySelector("article").textContent.match(/※\s?/);

  // if (!hasPromotion) {
    // Create the div where the component will be rendered
    const promoContainer = document.createElement("div");

    // The Preact component
    const LYPremiumPromo = () => {
      const [showTrackingPixel, setShowTrackingPixel] = useState(false);

      const handleClick = () => {
        setShowTrackingPixel(true);
      };

      return (
        <p className="animate-pulse">
          ※{" "}
          <a
            href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3741428&pid=891428905"
            rel="nofollow"
            target="_blank"
            onClick={handleClick}
          >
            {showTrackingPixel && (
              <img
                src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3741428&pid=891428905"
                height="1"
                width="1"
                border="0"
                alt=""
              />
            )}
            LYPプレミアム＠＠
          </a>{" "}
          （旧：Yahoo!プレミアム）にこちらから登録で、最大3ヶ月無料＆合計5,000円相当が貰えます（期間限定）
        </p>
      );
    };

    // Render the Preact component inside the created div
    render(<LYPremiumPromo />, promoContainer);

    // Insert the created div after the first <p> inside the article
    const firstParagraph = document.querySelector("article > p");
    firstParagraph.insertAdjacentElement("afterend", promoContainer);
  // }
})();
