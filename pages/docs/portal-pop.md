
# Proof of Procedure Prototype

A full stack proof of procedure involving all layers of the technology stack and interact will all third party SasS providers.  The prototype goal shifted from a feature complete front end only prototype to a limited full stack to adapt to changes in Enerpro's team.

This was paired with [Backend Guidance for the POP API](/docs/guidance/azure-api)


## Motivation
The exit of Enerpro's backend developer shifted some of the focus toward a minimal implementation of an API to support the function of the portal.  This was motivated to make the most of Sarthak's experience before his departure.  [Backend Guidance for the POP API](/docs/guidance/azure-api) was supplied as requested, but it became apparent that the API would not be attempted before Sarthak's departure.

The work on Enerpro Payment Links involved enough of the Azure Cloud components that it made sense to contine with the PoP, rather than fallback to a front end only prototype.  Due to the lack of production backend, a strategy was created to build the sparsest API possible to support the PoP.  This sparse API would be suitable for production use.



## Deliverable
A state-of-the-art secure web application that faciliates:
- user authentication
- viewing due and past bills
- online payments via Stripe
- recording of the payment transaction in Azure SQL.

The application supports multiple due invoices with ability to pay one or more at a time.  Paid invoices are available for the customer to review.  Graphs to help customer visualize useage were on a wish list.  A live visualiation example was provided.  All functionality is delivered through a single page menu free user interface based on open web standards.

A secure Azure stack vending a bare bones backend API to support the features of the web application.  A minimal API can support production useage.  The narrow scope of the API makes sense until Enerpro's backend matures.

### Progress Demo Screenshots
![Image](/assets/images/pop-2-thumb.jpg)
[More Screenshots](/docs/portal-pop-screenshots)


## Technology Stack
The following technologies were used to develoep and program the solution:
- Web Appplication
- Auth 0
- Stripe API
- Azure API Management
- Azure Function App
- Azure SQL


## Code Overview
This will be a high level overview of the code developed for the applicaton.  This will help future developer and speed future maintenance.  It makse sense to wait for SRED direction, rather than write this twice.  Woudl expect something along the lines of
[Minimal PoP Prototype API](/docs/guidance-azure-api)


## APIs
#### Auth0

#### Stripe

#### Enerpro Azure Backend


## Installation
Enerpro Portal utilizes to primary software components, an Azure Cloud applicaiton and a WebApp.

#### Azure Insatllation
Document the during the next installation.
APIM, Function App, SQL database

#### WebApp Installation
A Standared FTP deployment to be documentd on the next installation.


## Manintenance
The Auth0 tooling shoudl be kept up-to-date with the Auth0 API.

The Azure Function App should be kept up-to-date with the Stripe API.

The Web Applicaiton should be kept up to date with the Long Term Support (LTS) releases of it core framework components.


## Code Repository
Liks to the Github projects that store the source code.
