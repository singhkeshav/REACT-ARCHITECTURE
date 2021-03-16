
const cacheName = 'keshavCache1';
this.addEventListener('install',(event)=>{
    event.waitUntil([
        caches.open(cacheName).then((cache)=>{
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/js/vendors~main.chunk.js',
                '/favicon.ico',
                '/static/js/1.chunk.js',
                '/static/js/2.chunk.js',
                '/static/js/3.chunk.js',
                'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=5',
                "/index.html",
                "/"
            ])
        })
    ])
})


//For Cache...

this.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request).then((resp)=>{
            if(resp)
            return resp;
        })
    )
})