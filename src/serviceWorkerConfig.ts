const serviceWorkerConfig = {
    onUpdate: (registration: ServiceWorkerRegistration) => {
        console.log("registration onUpdate callback...", registration);
        if (window.confirm("Do you want to update?")) {
            registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
            window.location.reload();
        }
    },
    onSuccess: (registration: ServiceWorkerRegistration) => {
        console.log("registration onSuccess callback...", registration);
    },
}

export default serviceWorkerConfig;