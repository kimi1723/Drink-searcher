const input = document.querySelector('input');
const liElements = document.querySelectorAll('li');

const searchEngine = () => {
  liElements.forEach((element) => {
    if (
      element.textContent.toLowerCase().indexOf(input.value.toLowerCase()) ===
      -1
    ) {
      element.style.display = 'none';
    } else {
      element.style.display = 'block';
    }
  });
};

input.addEventListener('keyup', searchEngine);
