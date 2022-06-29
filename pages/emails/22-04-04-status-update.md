[< Timeline](/docs/project-timeline#april-2022)

## Status Update
#### April 4, 2022, 11:29am

Hi Geoff,


A check in is overdue.  I am sorry about not organizing it myself two weeks ago.  The ease in our April deadline and the attention required by my family law conundrum had me a days away from scheduling a meeting for the past two weeks.  I do appreciate the space you provided me, and that it is time to produce results.

My own plan for our next meeting involves two demos:

- The Enerpro Payment Links (EPL) negates the use of Stripe’s payment links.  It saves us from having to import data elements into Access, instead we can use pre-existing data to create payment links.  To reconcile payments it made sense to record transactions in Azure SQL.  To achieve that, I setup my own secure Azure stack.  The Enerpro Payment Link software securely processes payments and records those transactions in an Azure SQL table.  This was technically complete before the April deadline was extended.

- The Enerpro Portal was intended to be a static front end demo that did not integrate with the Azure cloud.  Since an Azure stack was required for the EPL, I already had my own viable Azure stack available to use.  Rather than create a mock backend, it made sense to pull the invoice data from the Azure stack, and record payments to the Azure stack.  As such the demo of the portal will show pulling customer data from an Azure table that mirrors the "Sample Data Set for an Invoice.xlsx” you provided on 02.11.2022.10:10am.  It records successful Stripe payment transactions in a similar Azure table.  This all happens in realtime.

I mention those meeting plans to help you optimize our meeting schedule.


I am available for your Wednesday morning and afternoon window, as well as the Thursday and Friday morning windows.  We could review the Enerpro Payment Links software during that meeting, but the Enerpro Portal will need more time to polish.  Work to date has focused on the function rather than the form.  I can be ready to demo the portal next Monday. I am free until 3pm that day and all day the following Wednesday and Thursday.

The Azure stack is unique and immense.  But the core concepts are ubiquitous.  The considerable additional time that I spent acclimating my Amazon and Google cloud knowledge to Azure's character was a personal investment toward my belief that I have a lot to offer Enerpro.  Attaching the Azure cloud to the work I was doing was the right choice for Enerpro.

To help prepare for our meeting I want to share my current take on the best development path:

Enerpro Payment Links
- A fallback system that provides a basic online payment portal
- Payment processing code will be reused in the next layer
- Status: Developed awaiting review and potential deployment

Enerpro Portal (v1)
- Layered on top of Enerpro Payment Links
- A front end to support online viewing and payment of bills
- Reused in next layer
- Relies on Invoice table export from Access to Azure SQL
- Status: POC Developed, UI polish underway, demo pending

Enerpro Azure Backend
- A testable Azure infrastructure that mirrors input and output of Access
- Documentation of business logic
- Focus on modernizing business logic
- Tuned to support Enerpro Portal
- Status: TBD

Enerpro Portal (v2)
- Transition from Access produced tables to Enerpro Azure Backend
- Shut down Access
- Status: TBD


Please let me know what meeting time you prefer.


Thanks,
Wayne

