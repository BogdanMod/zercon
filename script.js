const forms = document.querySelectorAll("form[data-toast]");
const toast = document.querySelector("[data-toast-message]");

const showToast = () => {
  if (!toast) {
    return;
  }
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
};

forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    showToast();
  });
});

