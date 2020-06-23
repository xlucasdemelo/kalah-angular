# Kalah Angular

This is the Frontend solution for the project https://github.com/xlucasdemelo/Kalah

## Technology Stack:
* Angular 7

## Getting Started

### Prerequisites

This application uses npm for dependency management, it is mandatory to install it.

```
npm: https://nodejs.org/en/
```

### Running with npm

[NOTE] The backend must be running in order to use the application, run it following the steps at https://github.com/xlucasdemelo/Kalah

1.Clone the project

```
git clone https://github.com/xlucasdemelo/kalah-angular
```

3.Install packages:
```
npm install
```

3.Start the application:

```
ng serve --open
```

The application will run at http://localhost:4200

### Running With Docker

1.Build Docker image

```
docker build -t kalah-angular . 
```

4.Run Docker image changing the DB env variables

```
docker run -it -d --name kalah-angular -p 4200:80  kalah-angular
```

The application will run at http://localhost:4200
