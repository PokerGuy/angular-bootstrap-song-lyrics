# Song Lyrics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.  
(Make sure you have the AngularCLI installed, if not run `npm i -g @angular/cli`)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## So what's the point?

This is a quick demo that uses Angular 7 + Bootstrap to call a web service. 
It utilizes a free API doing a simple get request based on artist and track. 
I wish that I could provide a typeahead that would do a quick search based on the input for the artist and track to cut down on spelling or fat fingering, but the API only supports a get /artist/track. 
There is a service calling a service, so every time a request is made, it is stored in a history. When the API is called, the search button is disabled. Results are displayed if available.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
