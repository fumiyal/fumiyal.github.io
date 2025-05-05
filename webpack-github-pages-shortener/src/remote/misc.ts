// @ts-nocheck

console.log("main.js loaded.");

var postId = +document.location.href.match(/post\/(\d+)/)?.[1];

// if (postId > 323 && postId < 333) {
// if (postId >= 322 && postId <= 333) {
// if ((postId >= 322 && postId <= 333) || postId === 313) {
// if ((postId >= 322 && postId <= 343) || postId === 313) {
// if ((postId >= 322 && postId <= 363) || postId === 313) {
// if ((postId >= 322 && postId <= 399) || postId === 313) { // :updated:24/8/17
// if ((postId >= 322 && postId <= 460) || postId === 313) { // :updated:24/8/17
// if ((postId >= 322 && postId <= 500) || postId === 313) { // :updated:24/8/17
if ((postId >= 322 && postId <= 700) || postId === 313) { // :updated:24/8/17
  Array.from(document.querySelector("article").querySelectorAll("p"))
    .filter((a) =>
      a.textContent.match(
        // /※\s?.*(紹介|招待|友達|クーポン|コード|割引|キャンペーン|こちら|リンク|円|プロモーション|promo.?code|discount)/
        /※\s?.*(紹介|招待|友達|クーポン|コード|割引|キャンペーン|こちら|リンク|円|プロモーション|promo.?code|discount|vpn|nordvpn)/i
      )
    )
    .map((a) => a.classList.add("animate-pulse"));
}

// if (document.location.href.match(/\/contact$/)) {
//   document.querySelector('button[type="submit"]').remove();
// }

// document.querySelectorAll("a").forEach(link => {
//   link.addEventListener("click", (event) => {
//     navigator.sendBeacon("/_/activity/void", JSON.stringify({
//       event: "click",
//       href: link.href,
//       text: link.textContent,
//     }));
//   });
// });

// var hasPromotion = document.querySelector('article').textContent.match(/※ /);

// if (!hasPromotion) {
//   document.querySelector('article > p:nth-child(1)').outerHTML = document.querySelector('article > p:nth-child(1)').outerHTML + `<p>※ Amazon Primeに<a href="https://www.amazon.co.jp/cer/c/949dad92">こちらの紹介リンク</a>から登録すると、1000円分のポイントが貰えます。</p>`;
// }

// try {
//   var hasPromotion = document.querySelector("article").textContent.match(/※ /);
//   if (!hasPromotion) {
//     document.querySelector("article > p").outerHTML =
//       document.querySelector("article > p").outerHTML +
//       `<p>※ Amazon Primeに<a href="https://www.amazon.co.jp/cer/c/949dad92">こちらの紹介リンク</a>から登録すると、1000円分のポイントが貰えます。</p>`;
//   }
// } catch (e) {
//   console.error(e);
// }


var waitUntil = (condition, timeout, timeoutCallback, iterationCallback) => {
  return new Promise((resolve, reject) => {
    let elapsedTime = 0;
    let iterationCount = 0;
    let interval = setInterval(() => {
      if (condition()) {
        clearInterval(interval);
        resolve();
      } else {
        elapsedTime += 100;
        iterationCount++;
        // if (typeof timeoutCallback === 'function') {
        if (typeof iterationCallback === 'function') {
          iterationCallback();
        }
        if (typeof timeout === 'number' && elapsedTime >= timeout) {
          clearInterval(interval);
          if (typeof timeoutCallback === 'function') {
            timeoutCallback();
          }
          // resolve();
          resolve("Timeout reached.");
        }
      }
    }, 100);
  });
};

(async () => {

  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await sleep(1000);

  // // waituntil for the article to load
  // await waitUntil(
  //   () => document.querySelector("article") !== null,
  //   10000,
  //   // () => console.error("Article not found."),
  //   // () => console.log("Waiting for article to load...")
  // );

  // only on host: howtojp.com
  if (document.location.href.match(/howtojp\.com/)) {
    await waitUntil(
      () => document.readyState === "complete",
      10000,
      // () => console.error("Article not found."),
      // () => console.log("Waiting for article to load...")
    );
  }

  // console.log("hi...");

  // var hasPromotion = document.querySelector("article").textContent.match(/※\s?/);
  var hasPromotion = document.querySelector("article").textContent.match(/※\s?/);
  // if (!hasPromotion) {
  //   document.querySelector("article > p").outerHTML =
  //     document.querySelector("article > p").outerHTML +
  //     `<p class="animate-pulse">
  //       ※ <a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3741428&pid=891428905" rel="nofollow" target="_blank">
  //       <img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3741428&pid=891428905" height="1" width="1" border="0">
  //       LYPプレミアム</a>（旧：Yahoo!プレミアム）にこちらから登録で、最大3ヶ月無料＆合計5,000円相当が貰えます（期間限定）
  //     </p>`;
  // }
  // if (!hasPromotion) {
  //   document.querySelector("article > :last-child").outerHTML =
  //     document.querySelector("article > :last-child").outerHTML +
  //     `<p class="animate-pulse">
  //       ※ <a href="//ck.jp.ap.valuecommerce.com/servlet/referral?sid=3741428&pid=891428905" rel="nofollow" target="_blank">
  //       <img src="//ad.jp.ap.valuecommerce.com/servlet/gifbanner?sid=3741428&pid=891428905" height="1" width="1" border="0">
  //       LYPプレミアム</a>（旧：Yahoo!プレミアム）にこちらから登録で、最大3ヶ月無料＆合計5,000円相当が貰えます（期間限定）
  //     </p>`;
  // }

  // ※ Audible（オーディブル）に[こちらの紹介リンク](https://www.amazon.co.jp/hz/audible/mlp/membership/plus/monthly?actionCode=AMAPPMTHDIR31902172500BQ&tag=amazon-product-items-22)から登録すると、2ヶ月 月額99円＋更にAmazonギフトカード500円が貰えます ※15日まで！

  if (!hasPromotion) {
    document.querySelector("article > p").outerHTML =
      document.querySelector("article > p").outerHTML +
      `<p class="animate-pulse">
        ※ Audible（オーディブル）に<a href="https://www.amazon.co.jp/hz/audible/mlp/membership/plus/monthly?actionCode=AMAPPMTHDIR31902172500BQ&tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、2ヶ月 月額99円＋更にAmazonギフトカード500円が貰えます ※15日まで！
      </p>`;
  }
  if (!hasPromotion) {
    document.querySelector("article > :last-child").outerHTML =
      document.querySelector("article > :last-child").outerHTML +
      `<p class="animate-pulse">
        ※ Audible（オーディブル）に<a href="https://www.amazon.co.jp/hz/audible/mlp/membership/plus/monthly?actionCode=AMAPPMTHDIR31902172500BQ&tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、2ヶ月 月額99円＋更にAmazonギフトカード500円が貰えます ※15日まで！
      </p>`;
  }      
})();

(async () => {

  // // waituntil for the article to load
  // await waitUntil(
  //   // () => document.querySelector("article") !== null,
  //   // () => document.querySelector("article a") !== null,
  //   // check if not empty array
  //   () => document.querySelectorAll("article a").length > 0,
  //   10000,
  //   // () => console.error("Article not found."),
  //   // () => console.log("Waiting for article to load...")
  // );

  // only on host: howtojp.com
  if (document.location.href.match(/howtojp\.com/)) {
    await waitUntil(
      () => document.readyState === "complete",
      10000,
      // () => console.error("Article not found."),
      // () => console.log("Waiting for article to load...")
    );
  }

  // // wait until document is fully loaded
  // await waitUntil(
  //   () => document.readyState === "complete",
  //   10000,
  //   // () => console.error("Article not found."),
  //   // () => console.log("Waiting for article to load...")
  // );


  // debugger;
  // console.log("Eeeehey...");
  
  // const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  // await sleep(1000);
  // // debugger;

  // for all amazon.co.jp/... links in the article, add the tag when the tag is missing
  document.querySelectorAll("article a").forEach(link => {
    if (link.href.match(/https:\/\/(www\.)?amazon\.co\.jp/)) {
      const url = new URL(link.href);
      if (!url.searchParams.get("tag")) {
        url.searchParams.set("tag", "amazon-product-items-22");
        link.href = url.href
      }
    }
  });

})();


(async () => {

  // only for host: howtojp.com
  if (!document.location.href.match(/howtojp\.com/)) {
    return;
  }

  // wait until document is fully loaded
  await waitUntil(
    () => document.readyState === "complete",
    10000,
    // () => console.error("Article not found."),
    // () => console.log("Waiting for article to load...")
  );

  // <div class="inserted_ads_container animate-pulse">※ Amazonプライムに<a href="https://www.amazon.co.jp/cer/c/56465a7c?tag=amazon-product-items-22" target="_blank" rel="noopener noreferrer nofollow">こちらの紹介リンク</a>から登録すると、1000円分のポイントが貰えます。</div>
  // to 
  // <div class="inserted_ads_container animate-pulse">※ Amazonプライムに<a href="https://www.amazon.co.jp/cer/c/56465a7c?tag=amazon-product-items-22" target="_blank" rel="noopener noreferrer nofollow">こちらの紹介リンク</a>から登録すると、1000円分のポイントが貰えます。<br />※ Audible（オーディブル）に<a href="https://www.amazon.co.jp/hz/audible/mlp/membership/plus/monthly?actionCode=AMAPPMTHDIR31902172500BQ&tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、2ヶ月 月額99円＋更にAmazonギフトカード500円が貰えます ※15日まで！</div>

  const targetAdsContainer = document.querySelector(".inserted_ads_container");

  if (targetAdsContainer) {
    targetAdsContainer.innerHTML += `<br />※ Audible（オーディブル）に<a href="https://www.amazon.co.jp/hz/audible/mlp/membership/plus/monthly?actionCode=AMAPPMTHDIR31902172500BQ&tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、2ヶ月 月額99円＋更にAmazonギフトカード500円が貰えます ※15日まで！`;

    // sub_filter '949dad92)から登録すると、1000円分のポイントが貰えます。' '949dad92)から登録すると、1000円分のポイントが貰えます。<br />※ Kindle Unlimitedに[こちらの紹介リンク](https://www.amazon.co.jp/kindle-dbs/hz/signup?tag=amazon-product-items-22)から登録すると、無料で登録できます。<br />※ Amazonビジネスに[こちらの紹介リンク](https://business.amazon.co.jp/?tag=amazon-product-items-22)から登録すると、無料で利用できます。<br />※ Audible（オーディブル）に[こちらの紹介リンク](https://www.amazon.co.jp/hz/audible/mlp/membership/plus/monthly?actionCode=AMAPPMTHDIR31902172500BQ&tag=amazon-product-items-22)から登録すると、2ヶ月 月額99円＋更にAmazonギフトカード500円が貰えます ※15日まで！';

    // targetAdsContainer.innerHTML += `<br />※ Kindle Unlimitedに<a href="https://www.amazon.co.jp/kindle-dbs/hz/signup?tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、無料で登録できます。`;
    // targetAdsContainer.innerHTML += `<br />※ Amazonビジネスに<a href="https://business.amazon.co.jp/?tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、無料で利用できます。`;
  }

  // second ads container if exists
  const targetAdsContainer2 = document.querySelectorAll(".inserted_ads_container")?.[1];

  if (targetAdsContainer2) {
    // targetAdsContainer2.innerHTML += `<br />※ Kindle Unlimitedに<a href="https://www.amazon.co.jp/kindle-dbs/hz/signup?tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、無料で登録できます。`;
    // targetAdsContainer2.innerHTML += `<br />※ Amazonビジネスに<a href="https://business.amazon.co.jp/?tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、無料で利用できます。`;
    targetAdsContainer2.innerHTML += `<br />※ Audible（オーディブル）に<a href="https://www.amazon.co.jp/hz/audible/mlp/membership/plus/monthly?actionCode=AMAPPMTHDIR31902172500BQ&tag=amazon-product-items-22" rel="nofollow" target="_blank">こちらの紹介リンク</a>から登録すると、2ヶ月 月額99円＋更にAmazonギフトカード500円が貰えます ※15日まで！`;
  }

})();


(async () => {

  // only for host: yuipcoders.com
  if (!document.location.href.match(/yuipcoders\.com/)) {
    return;
  }

  // for all external links in the article, and target="_blank" and rel="noopener noreferrer"
  document.querySelectorAll("article a").forEach(link => {
    if (!link.href.match(/yuipcoders\.com/)) {
      link.target = "_blank";
      // add rel="noopener noreferrer" if it doesn't exist
      if (!link.rel.match(/noopener/)) {
        link.rel += " noopener";
      }
      if (!link.rel.match(/noreferrer/)) {
        link.rel += " noreferrer";
      }
    }
  });

})();

