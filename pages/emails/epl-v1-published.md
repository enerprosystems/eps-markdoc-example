[< Timeline](/docs/project-timeline#may-2022)

## Enerpro Payment Links Demo Overview
#### May 11, 2022, 6:24am

Good Morning,


This is a live web app that utilizes Stripe for credit card transactions and the Azure SQL cloud to record those transaction details along with and their target account numbers.  This app is secured to modern web standards and after your potential desired improvements it is ready to use in production.

The app is responsive and adjusts itself to run on Desktop, Tablet, and Phones.  I have also included the ability to add the web app to the home screen on iOS devices.  Android and Windows smartphones can be targeted was well, with the same codebase.  I know tablet and mobile apps are not a current target, it only took me 2 2.5 3.5 5 hours to produce this demo of iOS viability (robusting the network failure management extended the task).  Hopefully you enjoy seeing your logo as an iOS app icon, and see value in running fullscreen on mobiles.  There is a difference in technical representation between a well written web app tuned to mobile use vs a website.  The latter is a necessity, the former is nice if you can get it at a low cost — which is possible with engineering forethought.

Simplicity has been a priority.  This app only presents the user with one task at a time.  There is a single large green button on screen at any time.  There is a sense of a single place, maintained by transforming the entry card rather than loading new pages.  This is most helpful on mobile devices where limited screen space can obfuscate a simple process. 

Realtime notifications and validations help to keep the user on course.  There are three types of notifications:

Failures (red):
- The web app has to be visited online so these failure notifications are primarily to deal with Stripe or Azure being offline, or a customer loosing connectivity mid payment.
- You can simulate these by turning off your WiFi at various use points in the app, then turning it back on again.  (Airplane mode makes this easy to test on iOS). 
- The app notifies the user immediately when connectivity is lost, and again when it is restored.

Alerts (blue):
- These are just to alerts to help the user.  Somehow people miss the validation messages and can keep pressing buttons, this helps break that cycle
- NOTE: We properly manage disabling a button when a longer transaction is in progress.  The “Submit” button on the payment page is not active after sending a request to Stripe.  It only becomes active again if the customer’s card is declined.

Success (green)
- Network restoration and uccessful payment notifications -- recorded in the UI as well.


Aside from notification the UI uses inline validation of form fields to reduce user error.

- Account Numbers
  - I was directed to use Sample Invoice #9 for a data template.   That invoice had 9 digit account numbers.  The Account field is only valid with a 9 digit positive integer.  This can easily be adjusted as required.

- Payment Amounts
  - Amounts have to be a positive number above 5.  This can easily be adjusted as required.  For clarity this field will add .00 to an Integer so 123 will become 123.00 when exiting the field.



The user is forced to validate their Account Number and Payment amount before proceeding to the payment step.  After use the customer will be emailed a payment receipt if they have provided an email address.  The demo has a link to a Stripe invoice that confirms the transaction was successful.

I have added a "Make Another Payment" button to reset the process and ease testing.  We can replace that with something more useful to the customer in production.


Here are the links.  These are currently pointing at a subdomain of iofusion.com but we can transfer this to a domain of your choosing.

NOTE:  The Azure cloud being used is a my own developer level account which occasionally has one second or so of lag.  This is 100% not due to any app code.  It is due Azure’s resource conservation at my developer account level.  After a period of inactivity, the Azure Function app sleeps; the first time a payment transaction is conducted after a long period the Azure Function takes a second to wake up.  This is easy to confirm by running another payment transaction in a reasonable amount of time.  It does not affect the app’s functionality aside from the delay.  When it is warmed up it is lightening fast, it is even fast on those cold starts.


Valid Test Card:
4242 4242 4242 4242
Any expiry date in the future will work.
Any CVC will work.

Insufficient Funds Test Card:
4000 0000 0000 9995
Any expiry date in the future will work.
Any CVC will work.



A link without any URL parameters

- https://enerpro.iofusion.com

- The customer is asked provide the prerequisite information



A link with valid complete URL parameters for Geoff

- https://enerpro.iofusion.com?account=12345678&amount=112.75&email=gmulligan@enerprosystems.com

- Click here to quickly pay your Enerpro bill online

- One click to a simple request for credit card details.



A link with valid complete URL parameters for Steven

- https://enerpro.iofusion.com?account=87654321&amount=112.75&email=sroka@enerprosystems.com

- Click here to quickly pay your Enerpro bill online

- One click to a simple request for credit card details.



Some links with invalid URL parameters

- https://enerpro.iofusion.com?account=123&amount=abc
  - If our valid URL parameter names are used but the values are not valid, we include a message to the customer noting that the links have been changed since Enerpro created them.

- https://enerpro.iofusion.com?sfjal=234&lkasjf=-999
  -If the URL parameter names do not match Enerpro’s own we ignore them.


Adding the web app to your iPhone’s Home Screen is easy.  This will give a fair simulation of an app install.  It allows the web app to use the entire phone screen.  There is more polish needed but I think it is worth a look to get an understanding how the portal could be run in the same way.  I would use your own personalized complete links above to load the the web app on your phone’s web browser, or you can just use the domain directly but you will need to enter the account details.  Went the site has loaded, click the “Share" Icon and choose “Add to Home Screen”.  Your web browser will minimize and you will see an appropriate Enerpro icon on the Home Screen.  Moving forward you can just tap that icon to enter the payment portal.

The same portal dashboard UI we reviewed can run well in that environment.  The zooming tile behaviours you saw are perfectly suited for tablets and mobile device use.  This Home Screen web app usability is already built into our technology stack.  If Enerpro sees value in wrapping their portal into an App Store App, we will be most of the way there with our stack.

Have a look and let me know if you like it, and if you have any feedback for improvements that could be made.  It could use a graphic designer make those minor adjustments the tighten the presentation.


Thanks,
Wayne
