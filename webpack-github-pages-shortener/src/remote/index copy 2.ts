
(() => {

  // redirect to host fumiya.online
  // e.g. https://fumiyaI.github.io/go/Signal/m -> https://fumiya.online/go/Signal/m
  
  const url = new URL(window.location.href);
  const host = url.host;
  const pathname = url.pathname;
  const search = url.search;
  const hash = url.hash;
  const newUrl = `https://fumiya.online${pathname}${search}${hash}`;
  
  // redirect to newUrl
  window.location.replace(newUrl);

})();
