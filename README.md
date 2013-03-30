# Responsive+Flight+AppCache

This project template sets up a responsive webapp that uses Twitter's
[Flight](http://twitter.github.com/flight) and 
[Bootstrap](http://twitter.github.com/bootstrap).

If you're looking to take Flight out for a test run, this template will allow you to 
get up-and-running in seconds. It's especially useful for AppCache applications that 
work on multiple devices, which is where this particular stack should shine. 
It's also good for plain ole web apps.

These libraries are not bundled, but will be downloaded and converted into an AMD 
format when you first create a project. 
[RequireJS](http://requirejs.org) is used to manage client-side library dependencies.

## Usage

This project uses [volo](https://github.com/volojs/volo) to do the template
setup and for generating the builds and AppCache. It is easy to install and use.
Just be sure to have [Node](http://nodejs.org/) installed first. Then use npm,
which is installed as part of Node, to install volo:

To install volo:

    > npm install -g volo

Then:

    > volo create myproject volojs/create-responsive-flight-template
    > cd myproject
    > ../volo appcache

Now you will have a responsive project template set up in the `myproject`
directory.

You can do development using the `myproject/www` directory in your
browser.

The built, AppCache-enabled project will be in `myproject/www-built`.

### What Happened

volo grabbed this project template from GitHub, then:

* Fetched Twitter Bootstrap code from GitHub
* Fetched Twitter Flight code from GitHub (and its es5-shim dependency)
* Fetched jQuery

It generated the responsive CSS files from Bootstrap's LESS files, and then
converted the Bootstrap JS code to work as AMD modules.

The project uses [RequireJS](http://requirejs.org) so that you can create
modular code that is easy to debug. When `volo appcache` is run, it builds all
the JS into one file and removes the use of RequireJS. Additionally, it
optimizes the CSS files by combining them into one file. Then it generates the
AppCache application manifest.

### Running the development server

There is a built-in development server included to allow you to get up-and-running
extremely quickly. Any LESS stylesheets will be compiled on-the-fly and reflected
immediately in a browser with a live-reload plugin.

To start the server, run this in your project folder:

    > volo serve

## Deploy to GitHub Pages

[GitHub Pages](http://help.github.com/pages/) is a great, free way to host your
web application. This template comes with an easy way to deploy to GitHub Pages.

First, be sure to build the source files by either running `volo build` or
`volo appcache`. This will generate the `www-built` build directory. That build
directory's contents will be used for the deployment to GitHub Pages:

    > volo appcache
    > volo ghdeploy
    Log in to GitHub to complete action (your password is not saved.
    It is sent over SSL to GitHub and converted to an OAuth token)
    GitHub user name: YOUR_GITHUB_USER_NAME
    GitHub password: YOUR_GITHUB_PW
    Contacting GitHub...
    Save OAuth token for later use [y]? n
    YOUR_GITHUB_USER_NAME, name of github repo [example]:
    Initialized empty Git repository in ~/example/www-ghpages/.git/
    [gh-pages (root-commit) 2e834ee] Create branch.
     1 files changed, 1 insertions(+), 0 deletions(-)
     create mode 100644 index.html
    To git@github.com:YOUR_GITHUB_USER_NAME/example.git
     * [new branch]      gh-pages -> gh-pages
    [gh-pages 320707a] Deploy
     10 files changed, 5045 insertions(+), 1 deletions(-)
     create mode 100644 css/app.css
     create mode 100644 img/glyphicons-halflings-white.png
     create mode 100644 img/glyphicons-halflings.png
     create mode 100644 img/icon-128.png
     create mode 100644 img/icon-16.png
     create mode 100644 img/icon-48.png
     rewrite index.html (100%)
     create mode 100644 js/app.js
     create mode 100644 manifest.appcache
     create mode 100644 manifest.webapp
    To git@github.com:YOUR_GITHUB_USER_NAME/example.git
       2e834ee..320707a  gh-pages -> gh-pages
    GitHub Pages is set up. Check http://YOUR_GITHUB_USER_NAME.github.com/example/ in about 10-15 minutes.

After the first ghdeploy, once the www-ghpages directory has been set up, the
`volo ghdeploy` command will just push any new built code without prompting
you for any questions.

If you want a custom commit message for the deployment, pass it via m=:

    > volo ghdeploy m="This is a custom commit message"

## Deploy to a custom sub-domain

Once you have GitHub Pages deployment working, you can set it up to be served
from a subdomain that you own. For instance, if you owned the 'example.com'
domain name, you could set up `webapp.example.com` to be served from the
deployed GitHub Pages repo:

    > echo "webapp.example.com" > www/CNAME
    > volo appcache
    > volo ghdeploy

Then, go to your domain name registrar and set up an example.com "CNAME" entry
for webapp.example.com to point to your YOUR_GITHUB_USER_NAME.github.com:

    Hostname: webapp
    Record Type: CNAME
    Target Host: YOUR_GITHUB_USER_NAME.github.com

More info in the
[GitHub Pages Help for Custom Domains](http://help.github.com/pages/#custom_domains).

## Suggested Workflow

Do development in the `www` directory. Do modifications and shift+reload in the
browser to see changes. If you need some script dependencies, you can fetch them
with `volo add`. To get the modular versions of Underscore and
Backbone, run these commands in the `myproject` directory:

    > volo add amdjs/underscore
    > volo add amdjs/backbone

Again, running the development server is as easy as:

    > volo serve

## Project Layout

This web project has the following setup:

* www/ - the web assets for the project
    * index.html - the entry point into the app.
    * js/ - the directory to hold scripts.
        * app.js - the top-level app script used by index.html. It loads all
        other scripts.
        * app/ - create this directory to store your app-specific scripts. Any
        third party scripts should go in the js/ directory, as siblings to
        app.js.
        * lib/ - where to store 3rd party JavaScript libraries. By default,
        `volo add` when run from the project base will install those scripts
        into this directory.
* tools/ - the build tools to optimize the project. Also contains the LESS
files used by Twitter Bootstrap to create its CSS.

By default, the package comes with the .css files already generated from
Bootstrap's .less files. If you edit the tools/less files again, you can
regenerate the CSS files by running the following command from this directory:

    > volo less

To optimize the project for deployment, run:

    > volo build

This will create an optimized version of the project in a **www-built**
directory.

The js/app.js file will be optimized to include all of its
dependencies.

If you want an AppCache manifest created and the index.html modified to
reference the manifest, run:

    > volo appcache

This will run the build command, then generate a `manifest.appcache` manifest
for the built files and modify the built `index.html` to reference it.

## Links

* [HTML5 Rocks - Working Off the Grid](http://www.html5rocks.com/en/mobile/workingoffthegrid.html)
* [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
* [Twitter Flight](http://twitter.github.com/flight/)
* [AppCache](https://developer.mozilla.org/en/Using_Application_Cache)
* [Online detection](https://developer.mozilla.org/en/DOM/window.navigator.onLine)
* [RequireJS API](http://requirejs.org/docs/api.html)
* [RequireJS optimizer](http://requirejs.org/docs/optimization.html)
* [volo](https://github.com/volojs/volo)


## Next Steps

* Convert AppCache and network status representation into Flight-compatible UI components.

## Feedback

To leave feedback, open an issue in the
[Issues section](https://github.com/notatestuser/create-responsive-flight-template/issues).
