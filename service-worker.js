const CACHE_NAME = "elprisen-static-v2";

const ASSETS = [
    "./",
    "./index.html",
    "./manifest.json",
    "./assets/css/reset.css",
    "./assets/css/site.css",
    "./assets/img/100.png",
    "./assets/img/1024.png",
    "./assets/img/114.png",
    "./assets/img/120.png",
    "./assets/img/128.png",
    "./assets/img/144.png",
    "./assets/img/152.png",
    "./assets/img/16.png",
    "./assets/img/167.png",
    "./assets/img/180.png",
    "./assets/img/192.png",
    "./assets/img/20.png",
    "./assets/img/256.png",
    "./assets/img/29.png",
    "./assets/img/32.png",
    "./assets/img/40.png",
    "./assets/img/50.png",
    "./assets/img/512.png",
    "./assets/img/57.png",
    "./assets/img/58.png",
    "./assets/img/60.png",
    "./assets/img/64.png",
    "./assets/img/72.png",
    "./assets/img/76.png",
    "./assets/img/80.png",
    "./assets/img/87.png",
    "./assets/img/android-launchericon-144-144.png",
    "./assets/img/android-launchericon-192-192.png",
    "./assets/img/android-launchericon-48-48.png",
    "./assets/img/android-launchericon-512-512.png",
    "./assets/img/android-launchericon-72-72.png",
    "./assets/img/android-launchericon-96-96.png",
    "./assets/img/circleoversigt.svg",
    "./assets/img/favicon.icon",
    "./assets/img/LargeTile.scale-100.png",
    "./assets/img/LargeTile.scale-125.png",
    "./assets/img/LargeTile.scale-150.png",
    "./assets/img/LargeTile.scale-200.png",
    "./assets/img/LargeTile.scale-400.png",
    "./assets/img/ligeNuBillede.svg",
    "./assets/img/navIcon.svg",
    "./assets/img/settings.svg",
    "./assets/img/SmallTile.scale-100.png",
    "./assets/img/SmallTile.scale-125.png",
    "./assets/img/SmallTile.scale-150.png",
    "./assets/img/SmallTile.scale-200.png",
    "./assets/img/SmallTile.scale-400.png",
    "./assets/img/SplashScreen.scale-100.png",
    "./assets/img/SplashScreen.scale-125.png",
    "./assets/img/SplashScreen.scale-150.png",
    "./assets/img/SplashScreen.scale-200.png",
    "./assets/img/SplashScreen.scale-400.png",
    "./assets/img/Square150x150Logo.scale-100.png",
    "./assets/img/Square150x150Logo.scale-125.png",
    "./assets/img/Square150x150Logo.scale-150.png",
    "./assets/img/Square150x150Logo.scale-200.png",
    "./assets/img/Square150x150Logo.scale-400.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    "./assets/img/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-16.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-20.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-24.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-256.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-30.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-32.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-36.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-40.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-44.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-48.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-60.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-64.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-72.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-80.png",
    "./assets/img/Square44x44Logo.altform-unplated_targetsize-96.png",
    "./assets/img/Square44x44Logo.scale-100.png",
    "./assets/img/Square44x44Logo.scale-125.png",
    "./assets/img/Square44x44Logo.scale-150.png",
    "./assets/img/Square44x44Logo.scale-200.png",
    "./assets/img/Square44x44Logo.scale-400.png",
    "./assets/img/Square44x44Logo.targetsize-16.png",
    "./assets/img/Square44x44Logo.targetsize-20.png",
    "./assets/img/Square44x44Logo.targetsize-24.png",
    "./assets/img/Square44x44Logo.targetsize-256.png",
    "./assets/img/Square44x44Logo.targetsize-30.png",
    "./assets/img/Square44x44Logo.targetsize-32.png",
    "./assets/img/Square44x44Logo.targetsize-36.png",
    "./assets/img/Square44x44Logo.targetsize-40.png",
    "./assets/img/Square44x44Logo.targetsize-44.png",
    "./assets/img/Square44x44Logo.targetsize-48.png",
    "./assets/img/Square44x44Logo.targetsize-60.png",
    "./assets/img/Square44x44Logo.targetsize-64.png",
    "./assets/img/Square44x44Logo.targetsize-72.png",
    "./assets/img/Square44x44Logo.targetsize-80.png",
    "./assets/img/Square44x44Logo.targetsize-96.png",
    "./assets/img/StoreLogo.scale-100.png",
    "./assets/img/StoreLogo.scale-125.png",
    "./assets/img/StoreLogo.scale-150.png",
    "./assets/img/StoreLogo.scale-200.png",
    "./assets/img/StoreLogo.scale-400.png",
    "./assets/img/Wide310x150Logo.scale-100.png",
    "./assets/img/Wide310x150Logo.scale-125.png",
    "./assets/img/Wide310x150Logo.scale-150.png",
    "./assets/img/Wide310x150Logo.scale-200.png",
    "./assets/img/Wide310x150Logo.scale-400.png",
    "./assets/js/controllers/dataConversion.js",
    "./assets/js/controllers/navController.js",
    "./assets/js/model/fetchPrices.js",
    "./assets/js/site.js",
    "./assets/js/view/components/desktopDivs.js",
    "./assets/js/view/components/dyn.js",
    "./assets/js/view/components/footer.js",
    "./assets/js/view/components/historik.js",
    "./assets/js/view/components/ligeNu.js",
    "./assets/js/view/components/navigation.js",
    "./assets/js/view/components/oversigt.js",
    "./assets/js/view/components/settings.js",
    "./assets/js/view/components/settingsButton.js",
    "./assets/js/view/hourlyPrices.js",
    "./assets/js/view/pages/historikPage.js",
    "./assets/js/view/pages/ligeNuPage.js",
    "./assets/js/view/pages/oversigtPage.js",
    "./assets/js/view/pages/settingsPage.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key =>
                        key.startsWith("elprisen-static-") &&
                        key !== CACHE_NAME
                    )
                    .map(key => caches.delete(key))
            );
        })
    );
});

self.addEventListener("fetch", event => {
    const url = new URL(event.request.url);

    if (
        event.request.method !== "GET" ||
        url.origin !== self.location.origin
    ) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then(async response => {
                if (response.ok) {
                    const cache = await caches.open(CACHE_NAME);
                    await cache.put(event.request, response.clone());
                }

                return response;
            })
            .catch(async () => {
                const cached = await caches.match(event.request);

                return cached || Response.error();
            })
    );
});