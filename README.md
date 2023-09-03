# Onboarding App Server

This project contains the simple server for the Onboarding App demo project

API Base URL: [https://onboardingapp-4818eafb5176.herokuapp.com/](https://onboardingapp-4818eafb5176.herokuapp.com/)

Postman API Link: [API Collection](https://api.postman.com/collections/2769431-52e96178-a2e2-43e4-99bc-1bc852a39f2c?access_key=PMAT-01H9D3T7PWRRRYGR9ZQY60VF35)

### Description

The API was written in NodeJS + Express, and hosted on the Heroku platform.

- The login endpoint simply checks if the Json encoded POST Request body contains includes the correct Username and Password, and returns `success: true` or `success: false` endpoints.

- The tasks endpoint returns the contents of the "tasks.json" file, with the added `success: true` and `success: false` attributes.
