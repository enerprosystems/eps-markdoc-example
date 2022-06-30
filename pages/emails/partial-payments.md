[< Next Step: Frontent](/docs/next-frontend)

## Enerpro Customer Portal: Partial Payments
#### May 11, 2022, 9:14am



Hello,


During an early Teams meeting with Sarthak he chose the initial target of fixed payment prices based on invoice totals to help simplify the backend work. In the attached email below I raise the question of partial payments to Sarthak and explore some of the logic around it.  I was directed toward fixed payments on the subsequent Teams meeting.

During our last meeting the need for partial payments was raised.  In the background I have come up with a simple solution for that functionality that can be implemented in a minimal fashion.  This will support adding payments to a customer's account through an external system.  I can watch an Azure mounted Access table, or provide a simple UI to record an external payment within the interim portal.  (The Enerpro Payment Links system could be used for initial testing recognition of external payments in the customer portal).

This effort serves two purposes: how quickly can we iterate the existing portal to add and change features; and it takes us a step closer to a viable portal.  I understand this work will follow the next Corporate Website presentation.

Just wanted to clarify that I was directed to develop a fixed payment system, that there is an easy conversion to an account balance system, and that we can implement in a live environment to give you both a clear picture of development pace now that we have architected and built a secured full stack implementation.


Thanks,
Wayne




Begin forwarded message:

From: Wayne <wayne@outlinegraphics.com>
Subject: Online Payments Quick Followup
Date: September 8, 2021 at 2:06:41 PM PDT
To: Sarthak Kharia <skharia@enerprosystems.com>, Geoff Mulligan <gmulligan@enerprosystems.com>

Hi Sarthak,


I understand that our call was just a quick superficial overview, but one more critical minimal Use Case just occurred to me and I want to share it.  It could still be supported within the scope of the two API calls we discussed, but it might make sense to adjust them.

If a customer has two unpaid billing periods (August and September), they may choose to make a partial payment to address just one of the billing periods (August).  The paymentForAccount() method would need to accept a dollar value and have the logic to apply it toward the most overdue period.  A subsequent call to currentBillForAccount() would only show the September period.

If it speeds development I can implement the partial payment logic in the front end and we can transition it into the API when it makes sense.  We can use that pattern for any business logic that the backend may not be ready to support.

Depending on the payload of the billing details for multiple periods, it might make sense to have currentBillForAccount include a summary of due periods with links to retrieve the details for each billing period from something like billDetailsForKey(someIdentifier).  If future support for viewing past bills in the Portal is desired, pastBillsForAccount() could supply a similar payload and rely on the same billDetailsForKey().

We should also think about emailing an invoice for payments that are processed.  That is a farily simple step and would not require anything additional from the backed.  Stripe provides generic invoices (with the Enerpro Logo), or we could create a custom template and use a service like Mailgun.  Not sure if you already have something like that in place for overdue notifications.

As the Use Case is developed, I am sure we will find other needs along the way, just wanted to share this with you now.  Happy to have another call when it suits you.


Thanks,
Wayne


PS. 
I stuck with the same email address group as the previous message, please let me know if I should be including Steven or if Geoff would prefer not to deal with this minutiae
