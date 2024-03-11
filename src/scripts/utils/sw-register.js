import { Workbox } from 'workbox-window';
import { createToast } from './notification-handler';

/* eslint-disable no-console */
const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    createToast('warning', 'Service Worker not supported in the browser');
    return;
  }

  const wb = new Workbox('./sw.bundle.js');

  try {
    await wb.register();
  } catch (error) {
    createToast('danger', `Failed to register service worker, ${error.message}`);
  }
};

export default swRegister;
