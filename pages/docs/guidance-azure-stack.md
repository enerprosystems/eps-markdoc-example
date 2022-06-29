---
title: Guidance for Azure API
---

# {% $markdoc.frontmatter.title %}


## Requirement
Quickly provide Sarthak with a starting point for architecting the backend for the online payment portal.

## Deliverable
December 10 2021 8:53am

Hi Sarthak,


This took considerably longer than anticipated.  Azure is a beast.  There is so much to evaluate. 


Of all the interfaces I have evaluated, my first choice would still be to use .NET Core to vend JSON:API from Azure.

Below is link to a Microsoft tutorial for creating a [JSON:API](https://jsonapi.org)  interface to the Azure DB.  It appears to cover the technical steps that would be necessary.  The API is created C#.  Have a look and see if you would be comfortable implementing something like this.  If the concepts seem foreign, I can help to build this interface.

- [Tutorial: Create a web API with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-6.0&tabs=visual-studio)

The draw to this interface is that the JSON:API Specification is robust, well tested, and suited for our purposes now and moving forward.  There is a sensible place to put business logic when the need arises and there is little magic;  therefore we have more control over issues that might arise.  Adhering to the JSON:API spec for our payloads saves the work of having to create a serializer for the incoming and outgoing payload on the client(s).  I have colleagues who have used this interface and recommend it.  Most of the coding is straightforward boilerplate. 

Side note:  Here is an tool that generate a lot of the boilerplate code.  It is aimed at Azure Serverless Functions and uses the OPENAPI Spec.  https://www.youtube.com/watch?v=mBCRxaKMeWM

I mentioned I had skimmed some other documentation and had found what appeared to be a code free approach, however upon closer review, my first impression were wrong. Those documents detailed importing existing APIs. 

After a good deal more research I have found a potentially workable code free option using  Azure Logic Apps.  Is this what you are using for collecting Meter data?  I noticed Logic Apps support the ftp triggers and subsequent storage of data in SQL.  Logic Apps will support a serverless, code free, secure REST interface to Azure SQL.  I have a few video links below, the basic stack looks like this:

{% callout title="Web App" %}
{% /callout %}

{% callout title="Azure: API Management Interface" %}
- This service is used to securely vend the Logic App API
{% /callout %}

{% callout title="Azure: Logic App" %}
- An HTTP Trigger
  - This will listen for a request at an URL and respond after processing the request through the Logic App
  - https://www.youtube.com/watch?v=oIwDgJPmVCg

- Collection of Actions
  - A visual environment for connection various actions  
  - This may involve using Azure Functions to create some custom actions.

- SQL Connector
  - Connects Logic Actions to Azure SQL
{% /callout %}

{% callout title="Azure SQL" %}
{% /callout %}


Here are some overview videos to help grasp the stack:

- [Azure Logic Apps and the HTTP connector](https://www.youtube.com/watch?v=g4q71nbu4Zg)
- [Azure Logic Apps & Azure API Management - MS Build 2020b](https://www.youtube.com/watch?v=th3_T71o6Ak)
- [Securing Azure Logic apps HTTP endpoints - Ambesh Singh](https://www.youtube.com/watch?v=o2WPpux_3Xo)
- [Azure Logic App - HTTP Trigger - SQL Connector](https://www.youtube.com/watch?v=GvKX-xHk5YQ)


I think it makes sense to try out the Azure Logic Apps approach and see how we fare.  It looks fairly quick to spin up and I am happy to give it a shot with you.  Review these options and let me know what you think.



Thanks,
Wayne
