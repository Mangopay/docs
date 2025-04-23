var scriptDownloadLink = document.createElement("script");
function downloadFile(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Attach the function to all download links:
const downloadLinks = document.querySelectorAll(".download-link"); // Select all links with the class 'download-link'

downloadLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const url = link.dataset.url; // Retrieve the URL from the data-url attribute
    const filename = link.dataset.filename; // Retrieve the filename from the data-filename attribute
    downloadFile(url, filename);
  });
});
document.head.appendChild(scriptDownloadLink);
