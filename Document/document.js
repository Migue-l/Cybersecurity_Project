const fileInput = document.getElementById('fileInput');
const form = document.getElementById('uploadForm');
const errorDiv = document.getElementById('error');
const previewSection = document.getElementById('preview');
const imageContainer = document.getElementById('imageContainer');

// Max size in bytes (5 MB)
const MAX_SIZE = 2 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  errorDiv.textContent = '';
  imageContainer.innerHTML = '';
  previewSection.style.display = 'none';

  const file = fileInput.files[0];

  if (!file) {
    errorDiv.textContent = 'Please select a file to upload.';
    return;
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    errorDiv.textContent = 'Only image files (JPG, PNG, GIF, WEBP) are allowed.';
    return;
  }

  if (file.size > MAX_SIZE) {
    errorDiv.textContent = 'File is too large. Max size is 2 MB.';
    return;
  }

  const reader = new FileReader();
  reader.onload = function (event) {
    const img = document.createElement('img');
    img.src = event.target.result;
    imageContainer.appendChild(img);
    previewSection.style.display = 'block';
  };

  reader.readAsDataURL(file);
});
