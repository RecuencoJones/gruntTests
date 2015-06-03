# gruntTests

My way to learning grunt task automation

This project contains a simple AngularJS application which is the target of concatenation and minification amongst others.

# Installing

Just run `npm install`

This will download grunt dependencies that are necessary for building and running.

# Building

Just run `grunt build`

This will first clean the workspace, then concat and uglify AngularJS application, then download dependencies, copy necessary files and clean temporal files.

# Running

Just run `grunt run`

This will re-build and start an http-server instance on [localhost:9000](localhost:9000)
