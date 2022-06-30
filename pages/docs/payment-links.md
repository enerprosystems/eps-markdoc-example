# Enerpro Payment Links

Custom software developed for Enerpro to accept online payments with the optional ability to produce individual links on each invoice from data already available when invoice are generated.


## Motivation
Stripe Payment Links would involve an export of invoice data from MS Access, a utility to automate the production of SPLs, and an import of the SPLs back into MS Access. To avoid coding and monthly chore, Enerpro Payment Links was pitched. This solution uses data already available in MS Access and eliminates the need to create Payment Links. The workload was estimated to be equivalent Stripe Payment Links.


## Deliverable
A responsive web application that facilitates online payments via Stripe and records the payment transaction in Azure SQL.  The application accepts URL parameters of account number and amount; when these are present they are autofilled for the customer.

https://enerpro.iofusion.com?account=ACCOUNT-NUMBER&amount=AMOUNT&email=EMAIL

Added basic support to install as web app on iOS to help give an idea future possibilities with this technology stack.

### Demo Online

[Email: Enerpro Payment Links Demo Overview](/emails/epl-v1-published)

[Email: Add EPL to iOS Home Screen](/emails/ios-add-epl)


## Technology Stack
The following technologies were used to develop and program the solution:
- Web Application
- Stripe API
- Azure API Management
- Azure Function App
- Azure SQL Database


## Code Overview
This will be a high level overview of the code developed for the application.  This will help future developer and speed future maintenance.  It makes sense to wait for SRED direction, rather than write this twice.  I would expect something along the lines of
[Minimal PoP Prototype API](/docs/guidance-azure-api)


## APIs
#### Stripe
Add details on API usage.

#### Enerpro Azure Backend
Add details on API usage.


## Installation
Enerpro Payment Links utilizes to primary software components, an Azure Cloud application and a WebApp.

#### Azure Installation
Document the during the next installation.
APIM, Function App, SQL database

#### WebApp Installation
A Standard FTP deployment to be documented on the next installation.


## Maintenance
The Azure Function App should be kept up-to-date with the Stripe API.

The Web Application should be kept up to date with the Long Term Support (LTS) releases of it core framework components.


## Code Repository
Links to the Github projects that store the source code.
