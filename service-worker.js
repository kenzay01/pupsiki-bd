/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "5ab75d284680e1108c0c6347faaee8fc"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.f8a68bbd.css",
    "revision": "1356c659632af5b29212487b7ca9452b"
  },
  {
    "url": "assets/img/relational_scheme.45f8bfdd.png",
    "revision": "45f8bfdd6793223804ff8bf9533d3a8b"
  },
  {
    "url": "assets/img/requestDelete.923b614e.png",
    "revision": "923b614e816f3a238ce2cd888f775909"
  },
  {
    "url": "assets/img/requestGetAll.f12da12f.png",
    "revision": "f12da12f6b6f58ac0d9ba105df647b25"
  },
  {
    "url": "assets/img/requestGetById.b53e20cb.png",
    "revision": "b53e20cb5dddb5e71f466145e47e2543"
  },
  {
    "url": "assets/img/requestPatch.4cf77fae.png",
    "revision": "4cf77fae289e243c0ad2dccc37e734e0"
  },
  {
    "url": "assets/img/requestPost.013b010b.png",
    "revision": "013b010be74a9f23fd8c19044d205ff1"
  },
  {
    "url": "assets/img/responseDelete.dabb9366.png",
    "revision": "dabb9366de1719a5b746821f68f40d34"
  },
  {
    "url": "assets/img/responseDelete2.0954d2af.png",
    "revision": "0954d2af46604f2309cccad6317c3eaf"
  },
  {
    "url": "assets/img/responseGetAll.2fe32c71.png",
    "revision": "2fe32c71d169413d3984dfa6834a47f9"
  },
  {
    "url": "assets/img/responseGetById.8aeeca05.png",
    "revision": "8aeeca058864c5e2478ff41ae1985de5"
  },
  {
    "url": "assets/img/responsePatch.06026011.png",
    "revision": "06026011457e40b170e775776c99dca6"
  },
  {
    "url": "assets/img/responsePatch2.065f1f07.png",
    "revision": "065f1f071c4208c294bcdcd321892bc6"
  },
  {
    "url": "assets/img/responsePost.26067f5b.png",
    "revision": "26067f5b1e852511ff34cf6e2fb10785"
  },
  {
    "url": "assets/img/responsePost2.91c5da58.png",
    "revision": "91c5da5822ee50c8d74af8d076239955"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.e12f83d5.png",
    "revision": "e12f83d5e99fe92419fe18c456d021a2"
  },
  {
    "url": "assets/js/10.4c52f180.js",
    "revision": "56ed230d7c50f513a9b34e7d5dcb2854"
  },
  {
    "url": "assets/js/11.4a8644d3.js",
    "revision": "8ed8d60f0735b7e95cd45c51fde629c0"
  },
  {
    "url": "assets/js/12.6012b735.js",
    "revision": "a8fb6d2f40b84a9d20ac21224301b957"
  },
  {
    "url": "assets/js/13.27e34d29.js",
    "revision": "16361b4dcac23ee4b60cbc9328ef13d1"
  },
  {
    "url": "assets/js/14.f0f3b3d9.js",
    "revision": "8d2f292ff9419bbd9b1d0f051eac01ff"
  },
  {
    "url": "assets/js/15.b72c12b7.js",
    "revision": "3a9b571025fcfa25db483ebb87ac6850"
  },
  {
    "url": "assets/js/16.4d1b7455.js",
    "revision": "0810394808c52e50565293c6eebdeaeb"
  },
  {
    "url": "assets/js/17.ca6dcba5.js",
    "revision": "e6771732c97b29f8abfe3ee48f555a61"
  },
  {
    "url": "assets/js/18.be22c16b.js",
    "revision": "b75e671a1993375c4f5c05f355e712b5"
  },
  {
    "url": "assets/js/19.cf9b6dda.js",
    "revision": "1a8e08c5948b68d82ac12aad62eeea1e"
  },
  {
    "url": "assets/js/2.a568e9ed.js",
    "revision": "cd5c0489689d700a995bafd8e0794e6d"
  },
  {
    "url": "assets/js/20.94854000.js",
    "revision": "575ae120b7445a0827c78ab5d29dc92a"
  },
  {
    "url": "assets/js/21.42606fb0.js",
    "revision": "9f14b562400039932ad710a356194150"
  },
  {
    "url": "assets/js/22.310c3806.js",
    "revision": "b2223235cef3cfaa98d402b80333ea6e"
  },
  {
    "url": "assets/js/23.748ad9da.js",
    "revision": "d120f07f044f7b7f9bdb2cb32a004daf"
  },
  {
    "url": "assets/js/24.5f9c07df.js",
    "revision": "83008551853b1f5e40eebe03008629db"
  },
  {
    "url": "assets/js/26.9c7fce7a.js",
    "revision": "4c209d8d6ab931ab305fae2d8e658562"
  },
  {
    "url": "assets/js/3.5b35ebee.js",
    "revision": "896d84f5676b9978dbad49542bff9395"
  },
  {
    "url": "assets/js/4.e7a8482c.js",
    "revision": "2e0496997919a01605961ade3e060446"
  },
  {
    "url": "assets/js/5.33f529b9.js",
    "revision": "97911f8df53a58d68dea4601c03a01ed"
  },
  {
    "url": "assets/js/6.6a39f0be.js",
    "revision": "47a30ba359e4ac45b8aaf1da8fe81704"
  },
  {
    "url": "assets/js/7.ca309c55.js",
    "revision": "d5801ea755d2bdc12b65db133499ee8f"
  },
  {
    "url": "assets/js/8.c1075a48.js",
    "revision": "443b3e0ad0b51bfe7d09251218b5cad2"
  },
  {
    "url": "assets/js/9.b233984f.js",
    "revision": "2eee7d2a5e208411207ac6f5d0eca2a9"
  },
  {
    "url": "assets/js/app.8aff94e6.js",
    "revision": "b37037e1411d5ccce00c7372b4f9887f"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a30c1f12faa4853c6c4bf1cd6f39341c"
  },
  {
    "url": "design/index.html",
    "revision": "6134b0aaec65110db4b2c274668c5a34"
  },
  {
    "url": "index.html",
    "revision": "366d2fcb1f714bb70454ac9939ec1c21"
  },
  {
    "url": "intro/index.html",
    "revision": "ec4505490811b9f38ad39ed916f50191"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "fea07e8248a8c168148748ffac4029e1"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "83ee05a557f41e330516df17d453fc17"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "462d79f3ae7903cd324c24aa7838e19c"
  },
  {
    "url": "software/index.html",
    "revision": "b94892529700ff954ae35dcf2a5a196a"
  },
  {
    "url": "test/index.html",
    "revision": "082e417517edeeafda24b0cd63d43518"
  },
  {
    "url": "use cases/index.html",
    "revision": "12a9a399aed9d3020bf6069cb8350c25"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
