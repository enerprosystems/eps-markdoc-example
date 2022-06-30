# Project Timeline

A reverse chronological history of project work that aims to clarify the rationale for the branch projects and changes in direction that have and will continue to occur as we work to build software solutions.  Value as SRED claim evidence and developer orientation.  More details about each project are available in the Project Path sections.

First time here?  Start from the bottom to follow the flow of the development progress.

{% callout %}
This has been quickly produced from our email history.  I have not spent time toward detail, but moving forward these entries/posts can be more complete and contain components to improve skimability and highlight SREDness.
{% /callout %}



## Summary

This work began in December 2021 as an exploratory frontend prototype of a customer portal.  Developer attention was directed as necessary to address the changes along the way.

## June 2022
### Enerpro Corporate Website
The Development work is all but complete and the site has been published for review:
[http://eps.outlinegraphics.com](http://eps.outlinegraphics.com)

### Development Documentation Site
This website.



## May 2022

### PoP Portal Presentation
Demonstration of portal work to date.  Single page menu free user interface meeting (exceeding) front end behaviour goals set for original prototype.  The proof of procedure demonstrated interaction with all layers of the stack necessary for production.  The following technologies were used:

- Web Application
- Auth0
- Stripe
- Azure API Management
- Azure Function App
- Azure SQL


### Enerpro Payment Links

Published Enerpro Payment Links to: 
[http://enerpro.iofusion.com](http://enerpro.iofusion.com)
This is a live web app that utilizes Stripe for credit card transactions and the Azure SQL cloud to record those transaction details along with and their target account numbers.  This app is secured to modern web standards and after your potential desired improvements it is ready to use in production.

[Email: Enerpro Payment Links Demo Overview](/emails/epl-v1-published)

### Corporate Website
After May 2nd demonstration of PoP focus shifted to external work the team updating the corporate website.

## April 2022
Development work continues and a rough a potential development path is outline in a status update: 
[Email: April 4th Status Update](/emails/22-04-04-status-update)

Discussions begin with Wayne regarding potential development of Enerpro's backend.

### Proof of Procedure
Development work continues on Portal PoP.

## March 2022
Stripe Payment Links was selected from the available 3rd party options.  SPLs would involve an export of invoice data from MS Access, a utility to automate the production of SPLs, and an import of the SPLs back into MS Access.  To avoid this monthly chore Enerpro Payment Links was pitched.  This solution uses data already available in MS Access and eliminates the need to create Payment Links.  The workload was estimated to be equivalent Stripe Payment Links.

### Enerpro Payment Links
Raw prototype created proving viability.  The following technologies were used to develop and program the solution:
- Web Application
- Stripe
- Azure API Management
- Azure Function App
- Azure SQL

### Proof or Procedure
Development work continues on Portal PoP.


## February 2022

Sarthak the backend developer is leaving Enerpro at the end of February.  After a Teams meeting, this email
[Email: Status update for payment prototype](/emails/sarthak-leaving)
summarized options for moving forward and the following were selected.

### Proof of Procedure Prototype
This involves a limited fullstack proof.  From Azure SQL to user interface, interacting with all layers and SaaS providers.  The value of this option was to utilize Sarthak's operational knowledge and to try to get an estimate on the timeline to production for the portal  The front-end completeness would take a backseat to performing the critical full stack bill retrieval and payment transaction.  Development work on the front end prototype shifts towards the PoP.

### POP API Guidance
Provide requested guidance to Enerpro's internal developer on the API to support the PoP Prototype. [Minimal API for PoP Prototype](/docs/guidance-azure-api)

### 3rd Payment Options
As a fallback it makes sense to understand the third party payment options that might address Enerpro's upcoming online payment requirements.  This deliverable includes guidance documentation and live demos of Stripe's quick Payment Links and more Invoices.  [3rd Party Payment Options](/docs/third-party-payment)


## January 2022

### Corporate Website

External work the team updating the corporate website.



## December 2021

### Portal Prototype

Develop frontend prototype to explore and document requirements for Enerpro's customer portal.  Use the articulated requirements refine the prototype for production and to document the backend requirements.

### Azure Stack Guidance

Provide requested guidance to Enerpro's internal developer on the Azure cloud technologies that could be used to architect and develop the backend necessary to support the Portal.


