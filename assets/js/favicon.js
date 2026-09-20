(() => {
  const favicon = document.getElementById("site-favicon");

  if (!favicon || !window.matchMedia) {
    return;
  }

  const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const updateFavicon = () => {
    favicon.href = colorScheme.matches
      ? "/assets/brand/favicon/favicon-dark-32.png"
      : "/assets/brand/favicon/favicon-32.png";
  };

  updateFavicon();

  if (colorScheme.addEventListener) {
    colorScheme.addEventListener("change", updateFavicon);
  }
})();
