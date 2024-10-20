'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "3e8deb514b42cd27d9fb452376fcccc3",
".git/config": "8885e6853feae310b40a9449f068fc03",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "75bfeed2cb817ee9b7ef846304175c94",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e2b9dd66dced823625a1d76c52f9046f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8fb502a4abce5ce8ff2a88e58a62e29e",
".git/logs/refs/heads/main": "702a917fe567227c5da77c947592d91f",
".git/logs/refs/remotes/origin/main": "8febcf02cf25272f755911f882596790",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/7c7ccfa97e0b491d3577b2250c28b28886c876": "4e56f8fe7c8728c71b1132119b4b3fcc",
".git/objects/0e/265134951ef69be9616348ad06abd559ccf330": "599485f112b1715e935333bd15a9b916",
".git/objects/0f/d3b169ef27a0e2a1d7aacb90da4e183dd1cb28": "35312023af646ad9fa533698ffaaf2b3",
".git/objects/18/64eb66a985ee8f084116160d4dad00c69d407a": "f9d68dfae1dbab587fe86d65b415351c",
".git/objects/19/bad8e1ba82e5403d3bd9faca4e7bd0c472a508": "eba46c722dda6efb10a3af7a1fbfd105",
".git/objects/1a/56fdefc1fb08d5a535c1fdd5159a4e10cd810c": "07fad21f0aafd5a0b25653fc0dccef92",
".git/objects/1c/7cab56a3bda0b1f0168b408354a366efd93f54": "bcac7f73adf37eb6e091459619ce7292",
".git/objects/1c/7e5c90564f55cc613c7b4b1fef3732c67ba87e": "dce2c3033d2fca0f7e6706cf82cb5b2a",
".git/objects/1d/74f362d8183c470af53bb3d22872c102ad5d00": "6c46cdf61200b0fd4df5a69b73ffd4e8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/614e9bc711a59c249d65d488f5b811ef0a8458": "5cacc7734dd81fd060302b29b677411b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2d/4ba3c969eae2f86a764bed82e507f670109024": "1cadc7864ba9a10324d5a0bd06d95424",
".git/objects/2e/0b0616b0fcd3bcccb6250c2b91f35bc3c9aa87": "7e87fb470f087c7016528feea3ed5e78",
".git/objects/32/034287537f4e221dc164f96dbcdb5ab7c4ec8f": "7c499b4be7cc6ca9658264dcaab44700",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/e80f057f4ca8d88c417f24a9487be815a92445": "89c4644c6807be5a7ef6c0db76f1e7f2",
".git/objects/39/bdd98de214074cabed7f867b4c69c193573704": "ebab8659a5452ef27e7da83b15724455",
".git/objects/3a/50bcf246953eac45889af16d2b3677deda2eba": "8088ab04e577ee09b6b83d07fe7586ee",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/cdbb66ba5a773bb660ed5681be70737228c951": "760f6fd239b7a15a227501eb73fbb0ae",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/46d4a56dce4de2122671ccf2015d56da8daf3a": "0832dcd628289378ec3803acbb6a081c",
".git/objects/40/b3821ff6f939cf942b457e774ab6d588d9205d": "38f520829be585fa7b33aa7f7d07313c",
".git/objects/43/4ef21a9995f6a2baa9d8ec0be2665cd7f5bc56": "4be0d48be4f1623c239027117651125e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/50/e6443669b366d087d79f2b2af3b0775923015b": "9bc1283c8d3bb3a81d1f897af57e38b2",
".git/objects/52/f3fc76e61439b974fdda751acd73ddfc53351e": "07e8a7ff9f8385dea77bae96a7282c6c",
".git/objects/5a/8b409ae85cdffbf1c72c00b83e734df8d1d2c4": "5eb9f83589034c7ead8dc7c524b3af99",
".git/objects/61/3000d8b250ade3f3c05106702f5f917b8fbee3": "34ea668cbb8b9c47541fc3197bb44281",
".git/objects/64/b3b8c3407be5229bcd6c516dfe6278fcd9cac4": "6e18a1c15717c76b85f7ef89274f17ab",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/2482d89ce953dffc447baaeecc5d92c71afdb0": "102759e9f16219121fc2e45c73447ab9",
".git/objects/6c/6aa0ec76e558180cc038216074b7818c32deb2": "33d9e10a2375b09fb590e90cb31191d4",
".git/objects/76/2853af0726ff007557791c5ac759ea521f5d69": "a13d12549104b03f7649ce0be2493c33",
".git/objects/78/4631b2404d4cbe93d2bc5128df81a423492bad": "5b679d7e1e1324589fd21d801d09996a",
".git/objects/7b/1161d10f673ae4c60e7e455827066d0470ef61": "54cdf5afc31a792cc956fbe67309caa2",
".git/objects/7b/2847fb8e1ac133098290e2052623fa18447480": "1ca4a9788d4a43dc3cfbbd5b667531c1",
".git/objects/7d/274ff53bcfa53cdb1c67056f5a7ea1cfc21f8f": "492dde7d7b5da8824fda1f50db129198",
".git/objects/7d/6219847c315c27e594a806e82a0d4395b0d2e5": "8a2c237e3b4336bd0edc873662c286f7",
".git/objects/82/b977c85b1ef347245ddde1e80f9f476810d9dd": "5cefa8acc5aa4db4d043ce015ac03c1e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/401622b6da2b0bf66db647f3f605a699d0b6d1": "15d36d609253144b18e2274e16861f93",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3dd832b9f279dcd707f97deba5a55ca0458de3": "992818e69993c74ac1653113f9b5ad32",
".git/objects/8f/de4ed0c063e67ec3ccda2e07c1fb9ca0bab1e0": "e90237f7b075442f57c7cd243e448a3c",
".git/objects/90/1e37dc36580af63776947a090aff0d9d200026": "8573664cf8729954e7196acaeb140468",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/f2d5c4801a35dac449163e3d142f3dedac50a4": "cfc3c4ab44711699d1d5dceb99dce4c3",
".git/objects/9d/0723a41a113ad6581533e23e4019119635f49e": "1dbea7c8a4e52342026a833952082c57",
".git/objects/9e/00716bd8a92abb4b6622768107162f1ce6f264": "2c777b846f088582b2f8514f3a6f37dc",
".git/objects/a0/2bf63ff7ffe763c109238eca97c61b2fa7e6e8": "bb9f37ce96187aa1826c7eed847eed19",
".git/objects/a0/7b79b94862dc5e54805aaf04435bea7e5a494d": "b799f4388cb30e0fdb76442ecfe118e2",
".git/objects/a9/c74cc21207180e26afcb1df3135550842f9352": "bc95cd0af0cecc638fcb8450e9a1f424",
".git/objects/b1/4bbb6f40aed4663c9529d67947fe11e5072bbd": "5c3446f8e1aa9196ed1153d2f3ecb51f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/34e903787b88a4f06c626a7ce473012527263c": "0f47f4b05b129f9fe7c6ec8c5dadd4d5",
".git/objects/b2/4e1d85b3297f0b5d6ad0b12199947392596bd2": "31e0ea37fe96b2f43d7fbf28117d5aa5",
".git/objects/b5/c86f5af8473dd754c1c45c0b432039ebe5372c": "c1bee953bc7def3bdfe4fec520eac6f1",
".git/objects/b6/7b6b9d08a3be9bfe59a48749f585b3a553285f": "460ec8c2dd818ec4f04176bb19c88034",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/837a4ec10aae0e634ccafea34375bd2a0f5c75": "94ae46c8288a3e8ae6b70e06785755fd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/9f1018c1c0fd2cf42515cb56fbe9e762864994": "ed2bb4797fe3e7d5e5256e3be5b13105",
".git/objects/ba/e24b8efe625ff7d401451292b5693c6a05609b": "a84cf761fb783c1984322033dcebbb74",
".git/objects/bb/425ae202edabbfb585872c6f23f190bb6c40c2": "fa07f013c530098675efee9afe478fde",
".git/objects/c0/37165281bec6cf200259bc63744cedf7ad4a99": "ad2a61519dd25a52c14c0033215a171e",
".git/objects/c3/441fe959bdeb98bad245d89f5938224e6c6e08": "a1ca07d7efa7ace46fae4cca4b51a1d0",
".git/objects/c6/535d36f691c65af0af07e419620c296b3477dc": "603ffcf7bf4ded79c1b701843061b547",
".git/objects/cc/e51fb138c657f2a14b5b924339716788dca3e3": "839ce1f48305a5eaca53b759a118634d",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d3/9940b1c2a9e2faa3e9762ff4d50362017187c2": "ec97d6e0369bf24d1de0711559ad8cc8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/1b1b2680e6ffcf70c65b97cfd38116c6f411a6": "d1e4e2fa8bf28f446ca4fee30e52f877",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e2/d130963914cece41c8eebd22e2b87742fb023d": "9e3c3916f57e8aee8f6ee8669e359da0",
".git/objects/e3/7f01b24b228606a2289249cf7dfa6d0507ba1b": "399055d3b318af85fa0e5de15079fba5",
".git/objects/e4/7ad989fe66ecc030986a42ef1ae0d0a45678e7": "5c597060ff16c19887ac5d0618928740",
".git/objects/e6/22071d60584fe10a763afe28f1cef7ca58162f": "152bd09b2854e661734f3734bf7747f2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/3aa14af835e59e51363a6d6bf201c899b8e4e5": "7b9681234395f26315616b063282271c",
".git/objects/ed/223f42d822bcf5e83530afddac9c7cff029cb0": "520cae2b15d9544a1f8a1eca7209163e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/2c464b4372bfde16dc2a7ff5601cb532cfb2f0": "0fb3dd24988366b527df0989d0d00dde",
".git/objects/f4/b21296fe7dd1de006f5b3f764b0f4dbdbf9b65": "94526f226f1fb463d0732cb21885fd95",
".git/ORIG_HEAD": "edc83576263b29116938d96930d120af",
".git/refs/heads/main": "4dfa6796e71f36f4bae928bf31751c84",
".git/refs/remotes/origin/main": "4dfa6796e71f36f4bae928bf31751c84",
"assets/AssetManifest.bin": "8e4cb4a4f55e930f8e9295a7ea6a120d",
"assets/AssetManifest.bin.json": "cf77c1c4d5c6cbac741908dd3f731c18",
"assets/AssetManifest.json": "336832c61fb7a6d5906c427fc20c55c4",
"assets/assets/image/backgroundImage.jpg": "993bec45d8be303325ea09ac682f3fe8",
"assets/assets/image/logoApp.png": "f713fc663e4b81f122686158f068d388",
"assets/assets/image/user.png": "d48a8973a98231204ed9be58c6095785",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8896bb14d4b72e72329e5417f7c58196",
"assets/NOTICES": "d89a0b744cbd3a8e91afc1baf112b648",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"cors.json": "6b990e0f8ebd7f32b86dcb21ca38a114",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "15abb19da606d6967c1a4816209b1170",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd529cf749bc83f6f0dbe8ae2c786506",
"/": "dd529cf749bc83f6f0dbe8ae2c786506",
"main.dart.js": "dbdbffe4dc494090a84cd04b28cd7344",
"manifest.json": "814f37936504b2d7390fa7516e46d0f1",
"version.json": "d60929fc9a3cadd05307f68bb156058b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
