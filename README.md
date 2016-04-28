# Qrious Frontend

## Coding rules

### AngularJs
[Angular styleguide](https://github.com/johnpapa/angular-styleguide)

### ESLint

## Requirements

* Node (v4.2)
* NPM
* Gulp (`npm install -g gulp`)
* Bower (`npm install -g bower`)
* Ruby

## Setup

~~~ shell
git clone git@bitbucket.org:tdigital-ondemand/qrious-portal-frontend.git
cd qrious-portal-frontend
npm install
bower install
gem install sass
~~~

## Deploy to Nexus: 
~~~
gulp upload —-version=1.0.0
~~~

## Run with Mock Server

~~~ shell
gulp --local
~~~

Then go to [localhost:8000](http://localhost:8000). You will have live-reloading in any open browser at this url and also full synchronization between them when it comes to scrolling, clicking, etc...

âš  Live-reloading might not work when you create a new file. This is due to some limitations of [gaze](https://github.com/shama/gaze) on some platforms. In thise case, just kill and relaunch `gulp`.

## Run with Backend

~~~
gulp
~~~

Then go to [localhost:8000](http://localhost:8000). It connects to the backend running in localhost. You will have live-reloading in any open browser at this url and also full synchronization between them when it comes to scrolling, clicking, etc...

## Testing

### Unit testing

~~~ shell
# Run all tests once
gulp unit

# Run all tests once and then only changed files
gulp unit:watch
~~~

### End to end testing

~~~ shell
# Run all e2e tests once
gulp e2etests:run --local --baseUrl=http://localhost:8000
~~~