[< Timeline](/docs/project-timeline#february-2022)

## Status update for payment prototype
#### February 3, 2022, 10:02am

Hello Geoff and Steven,


I spoke with Sarthak yesterday and understand that he will be unavailable after the 25th.  To help us focus on the best use of that limited time it would help to understand the driving goal for this project and the deadline for its release.  Is there a specific contract requirement beyond “online payment”?  Is there a specific date for the functionality to be live?  Is there a market benefit to a utility grade customer portal?

Answers to those questions will help to decide between these options for moving forward: maintain the existing goal of a customer portal to support viewing and paying bills online; minimize that goal down to an online payment; abandon the portal and use a third party solution.  A reasonable approach might be to use the third party solution as a fallback, and develop the portal in a series of stages so that we can triage non essential items if it becomes necessary.

To ensure that the required backend can mature after Sarthak’s departure it will be necessary to segment the backend services required by the portal into an area where I can have access to them.  I am not sure if there are legal gotchas to providing that access; if there are we can generate anonomized test data.  Enerpro should ensure that someone is up to speed on the tools used to get the metered data into Azure, and the portal’s backend.  If necessary I can be a temporary shepherd of that knowledge until Sarthak’s replacement is ready.  We would have to set aside time for Sarthak to get me up to speed on those elements.

On our call yesterday Sarthak and I discussed changing the initial focus of the prototype to the backend in order to create a live proof of procedure (POP) for online payments.  That will validate the system and I can continue to mature the backend as the front end gains functionality.

One of the important goals of the prototype was to throughly document the specific use cases.  To rush the POP we are skipping that step for now and will use common sense to generate the required use and test cases.  As those cases appear we will request feedback on their priorities.

The first POP will provide the following functionality:
Invite a new customer to the portal
Authenticate the customer
Authenticate with the backend
Retrieve and display customer info from the backend
Retrieve and display outstanding bills from the backend
Process online payment for those fixed amount(s)
Update paid status and transaction id to the backend
Provide payment receipt to customer


Initially the POP will not be styled.  Its focus will be on the operational procedure.  Once those goals are met we can group enhancements into a series of phases.

Please let me know if you think this is a reasonable course of action.  If you agree, I would immediately begin working on the backend API requirements for Sarthak so that he can begin development.  Once I have delivered those specs (early next week), I will organize a meeting for the review of the corporate website.  Sarthak and I are set to meet again next Wednesday; I am pushing to authenticate with the backend and retrieve data before the end of next week.


Thanks,
Wayne
