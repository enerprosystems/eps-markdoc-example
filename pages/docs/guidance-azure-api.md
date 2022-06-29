---
Stage:
Start Date: 
Release Date: Unreleased
RFC PR: 
---


# Minimal PoP Prototype API
#### February 8th, 2022, 1:25pm


## Summary

This is an initial draft to serve as a starting point for discussion about the schema and API necessary to support the POP front end.  Due to time constraints this draft has been rushed, but is can be the foundation for an implemenation guide.

## Motivation

To get a scope on the amount of work and time required to build an API to support the Proof Of Procedure for online billing and payment.  To provide a resonable guide for implementation.

## Design Overview

This document will review the following aspects of the backend API design:
- an high level overview of the steps involved
- the APIs responsibile for each step
- a SQL Database Schema that could support the functionality
- reasonable endpoints for access and their logic
- drawback, alternatives, and unsresolved quesitons will be address during discussion.


### High Level Overview ###
This table provides an overview of the steps required to for the POP, noting the API providers for the various steps.  Enerpro's own backend is used for three calls in this POP; it could be reduced to two.

There are three API providers:
- Auth0
- Stripe
- Enerpro
	- Utilize Microsoft cloud systems to minimize backend code
		- API Management Interface
		- Logic Apps
		- Azure SQL

{% table %}
* Step {% align="left" %}
* API
* Type
* Result
* Description {% align="left" %}
---
* Invite
* auth0
* Email
* Customer Account {% align="center" %}
* Auth0 will deliver initial email to validated address inviting customers to the online billing portal.  This can be batched, and unregistered customers can receive repeat invites.
---
* Login
* auth0
* POST
* Security Token {% align="center" %}
* Auth0 manages user authentication and provides a token we use to authenitcate an encrypted session using Enerpro's Microsoft API Managment Gateway
---
* Ensure Security
* auth0
* GET
* UserId {% align="center" %}
* This step will ensure each customer can only access their own data.
---
* View Account Status
* enerpro
* GET
* Customer Data {% align="center" %}
* `/customer/{id}`

  This data will be used to show the customer a summary of their account status.  A draft the Customer Table is included  in the database schema below.
---
* View Invoices
* enerpro
* GET
* Invoice Data
* `/customer/{id}/invoices`

  This data will allow the customer to review a summary of their outstanding invoices.  The can choose to see more details or immediately process a payment.
---
* View Invoice
* 
* 
* 
* A simple show hide for convenient reviewing of invoice details.  If desired a customer can view the details of a particular invoice before paying
---
* Pay Invoice
* stripe
* POST
* Secure Payment
* `/charge/{chargeDetails}`/

  When a user clicks pay, the web app contacts Stripe and processes a payment, Enerpro never sees or records the customer's financial data.  That data can be stored at Stripe for one-click future payments, or preauthorized debits.
---
* Confirm Payment
* enerpro
* POST
* Record Payment
* `/invoice/{id}/{transactionDetails}`

  In realtime we record payment, mark invoice as paid, and create a reciept for the customer.
---
* Display Receipt
* 
*
*
* The online invoice is maked as paid and a receipt is offered to the customer.
---
{% /table %}


### SQL Schema ###

This is a reasonable schema to begin.  It could be flattened futher, but I think the POP should be as close to production as possible.  The behaviour of each API endpoint and how it may affect the the data in these tables is described in the next section.


![POP Schema Draft](/assets/images/POP-SchemaDraft.png)


#### Customer Table ####

Basic Customer information and relationships for traversing connected data.
>These attributes were chosen to support the sampleInvoice#9.pdf, more attributes can be added as required.

| name | type | description
|---|---| :---|
| id | string | |
| dateEntered | date | Customer joined online billing
| accountNumber | string | |
| firstName | string | |
| lastName | string | |
| suite| string |Full address will come from Building Table |
| email | string|  |
| phone | string | |
| isPreAuthorized | boolean | Is this account setup for pre-authorized payment|
| preAuthDate | date | |
| preAuthAmount | number | |
| lastPaidDate | date | |
| lastPaidAmount | number | 
| accountBalance | number | |
| accountStatus | string | |
| building > | toOne | relationship to Building (this could be flattend for the POP) |
| invoices >> | toMany | relationship to Invoices |
| transactions >> | toMany | relationship to Transactions |

Potential Endpoints using this table:<br>
>*None of these alter data*

`/customer/{id}`

>- Http GET
>- Returns the information in the customer table for the row matching the supplied {customerID}.  Includes building information and invoice ids via its relationships. 
>- The customer can only acess the {customerId} secure in their Auth0 profile
>- This would support the View Account Status step in the Overview table

`/customer/{id}/invoices`

>- Http GET
>- Returns the information in the customers invoices relationship  restricted by {customerID}
>- The customer can only acess the {customerId} hidden and secured in Auth0
>- This options endpiont could support the View Invoice(s) step in the Overview table

#### Building Table ####

Basic Building information and relationships for traversing connected data.  In the collection of sample invoices there were many billing charge types.  It make senses to centralize these in the Building Table rather than repeat for each customer in a Building.  This table will also provide an easy way to review the customers, invoices, charges, etc, associated with a particular building.  
>These attributes were chosen to support the sampleInvoice#9.pdf, more attributes can be added as required.

| name | type | description
|---|---| :---|
| id | string | |
| address | string | This can be deconstructed if desired |
| customers>> | toMany | relationship to Customer  |
| invoices>> | toMany | relationship to Invoice  |
| *lat* | *string* | *latitude for weather -future option* |
| *lon* | *string* | *lontitude for weather -future option* |
| *chargeTypes>>* | *toMany* | *relationship to the ChargeType table assuming there will be a growing list of charge types -can be addressed in the future*

Potential Endpoints using this table:
- None at this time, but it makes sense to record for creating future views based on buildings in the future.  For instance an admin could select a building and view a status report of its invoices.

#### Invoice Table ####

Basic Invoice information and relationships for traversing connected data.  This table would be created from a collation of MeterCharges for a particular customer for a particular period.  More attributes are likely needed.  
>These attributes were chosen to support the sampleInvoice#9.pdf, more attributes can be added as required.  Taxes and late fees were not on the sample invoice but that is worth following up.


| name | type | description
|---|---| :---|
| id | string | |
| number | number | Invoice Number |
| date | date | Invoice Date|
| dueDate | date | Invoice Due Date|
| startDate | date | Start of this billing cycle |
| endDate | date | End of this billing cycle |
| preAuthDate | date | Invoice Pre Authorization Payment Date|
| charge | number | Total charge on the invoice |
| currency | string | Currency Code for charge |
| isPaid | boolean | Paid Status |
| isOverdue | boolean | Due Status |
| building> | toOne | relationship to Building |
| customer> | toOne | relationship to Customer|
| charges >> | toMany | relationship to MeterCharges |
| transaction> | toOne | relationship to Transaction|

Potential Endpoints using this table:

`/invoice/{id}`
>- Http GET
>- Deliver the Stripe transaction result to mark an invoice as paid and record the transaction data.

`/invoice/{id}/paid/{transactionDetails}`
>- Http POST
>- Deliver the Stripe transaction result to mark an invoice as paid and record the transaction data.

#### MeterCharge Table ####

A collation of the meterData for a given customer for a given time. 
>These attributes were chosen to support the sampleInvoice#9.pdf, more attributes can be added as required.

| name | type | description
|---|---| :---|
| id | string | |
| type | string | |
| meterNumber | string | Meter id|
| startDate | date | Start of billing cycle |
| endDate | date | End of billing cycle|
| startReading | number | Meter Read at start of billing cycle |
| endReading | number | Meter Read at end of billing cycle |
| accumulatedReading | number | Accumulated useage in billing period|
| itemCost | number | This is needs additional research*|
| charge | number | Dollar value of the charge for this MeterCharge |
| building> | toOne | Relationship to the Building |
| customer> | toOne | Relationship to the Customer |
| invoice> | toOne | Relationship to the Invoice |
| meterData>> | toMany | Relationship to meter data in this MeterCharge  |

Potential Endpoints using this table:
- None at this time, but it makes sense to record for creating future views.

#### MeterData Table ####

Details Currently Unknown.  I understand this is collected daily and woud be collated to generate the MeterCharges for each customer each billing period.

| name | type | description
|---|---| :---|
| id | string | |

#### PaymentTransaction Table ####

Record the Stripe transaction id and potentially more attributes based on whether Stripes tranaction data policy matches Enerpro's needs.  This is small amount of data to record in any case so we can err on the side of caution and just store the complete transaction response.

| name | type | description
|---|---| :---|
| id | string | |
| stripeId | string | |
| isPaid | boolean | |
| date | date | Payment Date|
| amount | number | Payment Amount |
| invoice > | toOne | Relationship to the Invoice |
| customer > | toOne | Relationship to the Customer |

Potential Endpoints using this table:
- None at this time, but it makes sense to record for creating future views.

### Endpoint Behaviours ###
There are 3 primary endpoints required for the POP:
- `/customer/{id}`
- `/invoice/{id}`
- `/invoice/{id}/paid/{transactionDetails}`

and 2 secondary but not critical endpoints:
- `/customer/{id}/invoices`
	- this would be preferred and replace `/invoice/{id}`
- `/customer/{id}/receipts`

This section takes a look at the logic required for each endpoint.
#### /customer/{id} ####

- receives an authenticated request from the API Management Gateway listening via an httpTrigger
- logic app uses the secure token to check with auth0 endpoint that the customer is accessing his own data
	- Yes = continue with process
	- No = reject the request with and error message
- query the Customer Table for the customer record
- return the customer record
>The payload of this call could include any unpaid invoices by following the invoices relationship.  Typically I would make the second API call for this so the cusotmer endpoint can be used by other purposes that may not need the invoice data.  Just noting this as an option for triage.

> `{ sample json response payload }`

#### /invoice/{id} ####

- receives an authenticated request from the API Management Gateway listening via an httpTrigger
- logic app uses the secure token to check with auth0 endpoint that the customer is accessing his own data
	- Yes = continue with process
	- No = reject the request with and error message
- query the Invoice Table for the invoice record
- confirm the customerId matches the invoice.customer 
- return the invoice record
>The payload of this will include metercharges.

> `{ sample json response payload }`

#### /invoice/{id}/paid/{transactionDetails} ####

- receives an authenticated request from the API Management Gateway listening via an httpTrigger
- logic app uses the secure token to check with auth0 endpoint that the customer is accessing his own data
	- Yes = continue with process
	- No = reject the request with and error message
- query this invoice table to ensure the invoice exists and is not already paid
- create a row in the Transaction Table and note the resulting transactionID
	- record the invoice number
	- save the transactionDetails
- update the invoice:
	- use the transactionId and update the invoice.transaction relationship
	- isPaid = true
- update the customer:
	- use the transactionId and update the customer.transaction relationship

- respond with 200 OK so the UI can update invoice as paid.
> Depending on desired useage with can create a Reciept Table and move the invoice content there when it is paid.  This will keep the invoice table smaller, but indexed tables in the cloud can manage a lot of data.  This extra step can be address in the future.

> `{ sample json response payload }`







## Drawbacks

> Why should we *not* do this? 
  

## Alternatives

> What other designs have been considered? What is the impact of not doing this?

> This section could also include prior art, that is, how others in the same domain have solved this problem.

## Unresolved questions ##

> Meter Charge Rate Fluxuation

> Taxes

> Late Charges

> PreAuthorized Payment scdedules and formula'
