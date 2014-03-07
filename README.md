# w3

A static web server that is easy to install and easy to run.

It also comes with pushState support so any non asset request will
return index.html.

[![Build Status](https://secure.travis-ci.org/twilson63/w3.png)](http://travis-ci.org/twilson63/w3)

## Install

``` sh
npm install w3 -g
``` 

## Usage

```
w3
```
or

```
w3 [port]
```

## options

Specify target root directory

--directory [dir]

```
w3 --directory www
```

Enable pushstate

--pushstate

```
w3 --pushstate
```

## Better logging

```
Thu Mar 06 2014 19:51:08 GMT-0500 (EST) - REQUESTED.../index.html
request: 22ms
-------------------------------------------------
Thu Mar 06 2014 19:51:08 GMT-0500 (EST) - REQUESTED.../css/bootstrap.css
request: 10ms
-------------------------------------------------
Thu Mar 06 2014 19:51:08 GMT-0500 (EST) - REQUESTED.../bundle.js
request: 25ms
-------------------------------------------------
Thu Mar 06 2014 19:51:17 GMT-0500 (EST) - REQUESTED.../index.html
request: 2ms
-------------------------------------------------
Thu Mar 06 2014 19:51:17 GMT-0500 (EST) - REQUESTED.../css/bootstrap.css
request: 2ms
-------------------------------------------------
Thu Mar 06 2014 19:51:17 GMT-0500 (EST) - REQUESTED.../bundle.js
request: 10ms
```


## Requirements

NodeJs

## Thanks


@mikeal for filed
 
@nodejs community

## Contributions

Send Pull Requests

## LICENSE

MIT

## Contributors

* Tom Wilson (@twilson63)
* @nicogranelli
