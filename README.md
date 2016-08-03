# Qrious Frontend

## Coding rules

### AngularJs
[Angular styleguide](https://github.com/johnpapa/angular-styleguide)

### ESLint

## Requirements

* Node (v5.x)
* NPM
* Gulp (`npm install -g gulp`)
* Bower (`npm install -g bower`)
* Ruby

## Setup

~~~ shell
git clone git@github.com:artecher/scaffold.git
cd scaffold
npm install
bower install
gem install sass
~~~


## Run with Multiple local backend servers

~~~ shell
gulp --hybrid
~~~

Then go to [localhost:8000](http://localhost:8000). You will have live-reloading in any open browser at this url and also full synchronization between them when it comes to scrolling, clicking, etc...


## Testing

### Unit testing

~~~ shell
# Run all tests once
gulp unit

# Run all tests once and then only changed files
gulp unit:watch
~~~
