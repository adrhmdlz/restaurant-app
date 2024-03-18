const notifications = document.querySelector('.notification-wrapper');

const toastDetails = {
  timer: 5000,
  success: {
    icon: 'fa-check-circle',
  },
  danger: {
    icon: 'fa-times-circle',
  },
  warning: {
    icon: 'fa-exclamation-triangle',
  },
};

const removeToast = (toast) => {
  toast.classList.add('hide');
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};

const createToast = (id, message) => {
  const { icon } = toastDetails[id];
  const toast = document.createElement('div');
  toast.className = `toast ${id}`;
  toast.innerHTML = `
    <div class="column">
      <i class="fas ${icon}"></i>
      <span>${message}</span>
    </div>
    <button class="toast-close">
      <i class="fas fa-times"></i>
    </button>
  `;
  notifications.appendChild(toast);
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);

  const notificationCloseIcon = document.querySelectorAll('.toast-close');
  notificationCloseIcon.forEach((button) => {
    button.addEventListener('click', () => {
      removeToast(toast);
    });
  });
};

export { removeToast, createToast };
