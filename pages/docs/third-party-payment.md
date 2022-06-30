
# Third Party Payment Options

## Summary

Documentation of some of the available third party online payment otions.  Of these options Stripe Payment Links were the initial favourite.  Stripe Invoiving and Billing charged an additional percentage and that removed them form the running.  


## Motivation

To ensure online payments are available in the event or a roadblock during development, it made sense to investigate some the available options.


## Deliverable

Here is an overview of some of the various types of third party payment option.  I focused on Stripe cause they are great, but also because the information about their services is readily available, ready to demo, and their API documentation is outstanding.  The other providers may offer similar services, but it is hard to tell.  My take is that Stripe documentation them as the leader, and matching that presentation is a huge undertaking.

### Paymentus
[https://www.paymentus.com/solutions/](https://www.paymentus.com/solutions/)

[https://www.paymentus.com/one-time-payment/](https://www.paymentus.com/one-time-payment)

#### General Overview
Unfortunately the Paymentus site does not provide much detail about there services or their API. If you visit the links above you will see what I mean. This service can be tested on your own BC Hydro accounts. I think it will be worth it to do a small transaction to get a feel for the differences in customer experience. Paymentus seems to offer more services that we have seen in use at BC Hydro, but their site is opaque and requires personal engagement with them to learn more.

#### Cost of use
I could not find a rate on their website. When I processed a payment at BC Hydro I was charged a 1.75% processing fee. I imagine that BC Hydro has a high transaction volume, so it is worth checking what rates would be available to Enerpro.

#### Creation Process
Unknown, but I imagine it would just be an account setup for the configuraiotn that is in use at BCHydro.

#### Reconcilliation Process
I would expect that Paymentus has an endpoint that Enerpro can call to collect the daily processing data. (An endpoint is a remote computing device that communicates back and forth with a network to which it is connected.) Payment us may also offer Webhooks; using a webhook, Enerpro would create an endpoint that receives updates from Paymentus when a transaction is processed.

#### Demo
Login to your own BC Hydro account.



### Stripe Payment Links
[https://stripe.com/en-ca/payments/payment-links](https://stripe.com/en-ca/payments/payment-links)

#### General Overview
This is a lightweight option from Stripe. A payment link takes you directly to a Stripe hosted checkoute page. The customer adds their payment information (which they can choose to store for future “one-click” payments from Enerpro) and clicks the paybutton. The payment is process without a page load and a confirmation message is shown. This avoids the need for customers to enter an invoice number or an amount, and it programatically ties a payment to an invoice number.

#### Cost of use
Payment processing fees:
- 2.9% + 0.30
This can be passed on the customer as a payment processing fee. Stripe provides discounts once monthly sales pass $80K

#### Creation Process
Links are created individually. I created the demo links manually using Stripe’s customer portal. In production, links would be create at scale programatically. This would require an export from access of invoice numbers and total costs for each invoice. That export would be processed and a third attribute would be added with a payment link string similar to this "http://stripe.com/laskfjiweo". That data would be imported back into Access before the invoices were produced and emailed out.

A button with the payment link can be added direclty to the PDF invoice during is creation and to the email body itself. Embedding it in the PDF is pretty neat. Makes the invoice an actionable item and the link can’t get lost or mixed up. In the demo I send next I will include both options.

#### Reconcilliation Process
There are a few options for reconcilliation. Stripes own customer portal provides a reporting dashboard with filters and export options. There is an endpoint that can be querried, and webhooks can be used for automatic notification.

#### Demo
[Email: Email links as text in an email](/emails/payment-links)

[Email: Email link embded in Invoice](/assets/pdfs/SampleInvoiceWithButton.pdf)



### Stripe Invoicing
[https://stripe.com/en-ca/invoicing](https://stripe.com/en-ca/invoicing)

#### General Overview
This is a service layered on top of Stripe Payments. The invoice service is a reasonably complete system. There are customers, invoices belonging to customers, payments belonging to both, and archives are kept. There are automated processes for reminder emails for customers when an invoice is due and/or when it is past due. There is a dashboard for managing voids, refunds, etc. There are nice analytics for tracking the status of the invoices and funds across their lifespan. Once invoices are generated, Stripe manages the emailing of them (from and enerprosystems.com email address) and Stripes hosts the invoice with an optional “Powered by Stripe” footer.

#### Cost of use
Payment processing fees:
- 0.4% per invoice
- 0.5% per invoice for “Plus” version which includes all features.
- 2.9% + 0.30 payment processing still applies This can be passed on the customer as a payment processing fee.

Stripe provides discounts once monthly sales pass $80K

#### Creation Process
Invoices are created individually. The demos I will send later today were created manually using Stripe’s customer portal. I did not exhaust the data or formatting options, but I did make an effort to include critical content. In production, invoices would be created at scale programatically. This would require an export from Access; a subset of the data that Geoff shared earlier today would suffice. That export would be processed into Stripe. Stripe would deliver the invoices from an Enerpro address.

#### Reconcilliation Process
Stripe Invoices manages reconciliation of invoice payments. They automate reminders and past due notices and provide analytics of the ongoing process. I would imagine that if the Invoices service was chosen reconcilliation would be automatic, until Enepro’s Access processes required the data for the next step.

#### Demo

[Email: PDF of an mail with a Stripe Invocie](/assets/pdfs/StripeInvoiceDemo.pdf)




### Stripe Billing
[https://stripe.com/en-ca/billing](https://stripe.com/en-ca/billing)

#### General Overview
This is a service that is layerd on top of Stripe Invoices. The big feature of this layer is the ability to automate recurrning billing. They do support metered billing which was initailly intriguing; once a customer is setup in the Billing service, you only have to supply consumtion data, the rest is automated. The API is nice and worth learning from before Enerpro transitions from Access. The issue that I ran into was that Stripe does not expect the per_unit amount to change. It is unclear if Billings coudl support the fluxuations in utility costs. I have a feeling that they consider a per_unit cost a contract with the customer and that changing that per_unit cost will involve an authorization from the customer. I opened a ticket and I am awaiting a response.

As with Payment Links, and Invoices, Billing can be use programatically.



### Moneris
[https://www.moneris.com](https://www.moneris.com)

#### General Overview
This was recommended to me by a colleague at a major Canadian retailer. Their volume is very high and they were able to negotiate the lowest fees with Moneris.  Worth evaluating the savings they may offer when volume is high.
