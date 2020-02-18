const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.host = functions.https.onRequest((req, res) => {
  var userAgent = req.headers['user-agent'];
  if (userAgent.startsWith('facebookexternalhit/1.1') ||
    userAgent === 'Facebot' ||
    userAgent.startsWith('Twitterbot')){

    //getOpenGraph() parses the path, and gets some data from the firebase database to construct open graph data.
    // eg: <meta property="og:description" content="My super cool webpage." /> <meta property="og:title"...

    res.status(200).send(getOpenGraph(req.path));
  }
  else{
    //optional - turn on caching: res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.status(200).send(fs.readFileSync('./hosting/index.html').toString());
  }
});