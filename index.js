document.addEventListener("DOMContentLoaded", () => {
    const previewCards = document.querySelectorAll(".element-preview");
    const overlay = document.getElementById("fullscreenOverlay");
    const closeBtn = overlay.querySelector(".close-btn");
    const fullscreenTitle = document.getElementById("fullscreenTitle");
    const fullscreenContent = document.getElementById("fullscreenContent");
    const downloadBtn1 = document.getElementById("downloadBtn1");
    const downloadBtn2 = document.getElementById("downloadBtn2");
    const downloadBtn3 = document.getElementById("downloadBtn3");
  
    previewCards.forEach(card => {
      card.addEventListener("click", () => {
        fullscreenTitle.textContent = card.dataset.title;
        fullscreenContent.textContent = card.dataset.content;
  
        // Set dynamic download links
        downloadBtn1.href = card.dataset.download1;
        downloadBtn2.href = card.dataset.download2;
        downloadBtn3.href = card.dataset.download3;
  
        overlay.style.display = "flex";
      });
    });
  
    // Close overlay
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      overlay.style.display = "none";
    });
  
    // Click outside fullscreen card closes overlay
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.style.display = "none";
    });
  });
  
