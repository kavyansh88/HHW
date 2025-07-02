document.getElementById("downloadBtn").addEventListener("click", function () {
  const pptUrl = "PPT HHW SST.pptx"; // Make sure this file exists in the same folder
  const a = document.createElement("a");
  a.href = pptUrl;
  a.download = "PPT HHW SST.pptx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
