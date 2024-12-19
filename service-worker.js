importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.0/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://v2.jokeapi.dev/joke/Any'),
        new workbox.strategies.NetworkFirst()
    );
}