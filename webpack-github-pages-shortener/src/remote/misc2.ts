

(async () => {

  interface CreateOnClickLinkOptions {
    targetUrl: string; // The URL to open when the span is clicked
    trackingUrl: string; // The URL for the tracking pixel
    spanText: string; // The text to display inside the span
  }

  function createOnClickLink({ targetUrl, trackingUrl, spanText }: CreateOnClickLinkOptions): HTMLSpanElement {
    // Create the <span> element
    const span = document.createElement("span");

    // Set the text content of the span
    span.textContent = spanText;

    // Style to make it look clickable
    span.style.cursor = "pointer";
    span.style.color = "blue";

    // Add the click event handler
    span.onclick = function () {
      // Create tracking pixel
      const trackingPixel = document.createElement("img");
      trackingPixel.src = trackingUrl;
      trackingPixel.width = 1;
      trackingPixel.height = 1;
      trackingPixel.style.display = "none";

      // @ts-ignore
      // Append the tracking pixel to the span
      this.appendChild(trackingPixel);

      // Wait briefly before opening the target URL
      setTimeout(() => {
        window.open(targetUrl, "_blank");
      }, 100);
    };

    return span; // Return the created span element
  }

  // if url matches https://yuipcoders.com/post/478, continue otherwise exit
  if (!document.location.href.match(/https:\/\/yuipcoders.com\/post\/478/)) {
    return;
  }

  const spanElement = createOnClickLink({
    targetUrl: "//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3741428&pid=891428905",
    trackingUrl: "//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3741428&pid=891428905",
    spanText: "LYPプレミアム"
  });
  
  const promoElement = document.createElement("p");
  
  // class="animate-pulse"
  promoElement.classList.add("animate-pulse");
  
  // // Use innerHTML to construct the full content
  // promoElement.innerHTML = `
  //   ※ <span>${spanElement.outerHTML}</span>（旧：Yahoo!プレミアム）にこちらから登録で、最大3ヶ月無料＋合計5,000円相当が貰えます（期間限定）
  // `;
  
  // Use innerHTML to construct the full content
  promoElement.innerHTML = `
    ※ <span>${spanElement.outerHTML}</span>（旧：Yahoo!プレミアム）にこちらから登録で、最大3ヶ月無料＋合計5,000円相当が貰えます（期間限定）
  `;
  
  // Insert the promoElement after the first <p> element inside <article>
  document.querySelector("article > p")?.insertAdjacentElement("afterend", promoElement);
  document.querySelector("article > p")?.insertAdjacentElement("afterend", spanElement);

})();

