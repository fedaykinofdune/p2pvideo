'use strict';

var config = {
  networkName: 'testnet',
  network: {
    // key: 'lwjd5qra8257b9', //p2pvideo API key for public PeerJS server
    //   This is for running local peerJs with params: ./peerjs  -p 10009  -k 'sdfjhwefh'
    //key: 'sdfjhwefh',
    //host: 'localhost',
    //port: 10009,
    //path: '/',
     //
    key: 'g23ihfh82h35rf',
    host:'162.242.219.26',
    port:10009,
    path: '/',
    maxPeers: 15,
    debug: 3
  },
  limits: {
    totalp2pvideoers: 10,
    mPlusN: 15
  },
  chat: {
    requiredp2pvideoers: 2,
    totalp2pvideoers: 3,
    spendUnconfirmed: 1,
    verbose: 1,
  },
  blockchain: {
    host: 'test.insight.is',
    port: 3001
  },
  socket: {
    host: 'test.insight.is',
    port: 3001
  },
  verbose: 1,
  themes: ['default']
};

var log = function () {
  if (config.verbose) console.log(arguments);
}

