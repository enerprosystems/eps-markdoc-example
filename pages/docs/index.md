---
title: Overview
---

# {% $markdoc.frontmatter.title %}


This site documents the ongoing research and development work toward Enerpro's upcoming customer portal.  It provides a central location to retain information about the research, development, installation, tracking, and management of the custom Enerpro's custom software.

It will serve as a repository for SRED documentation and can be tuned for that goal based on feedback from a SRED consultant.  Along the way, as branch projects are required to meet Enerpro's goals in a fluid environment, this site will provide the rationale behind those decision.

This is the place to understand the Customer Portal IT that has happened, is happening, and will happen.

## Documentation Tooling 

Stripe, well regarded for their attention to documentation from day one, has just open-sourced the documentation engine powering [their public docs](http://stripe.com/docs) 
This is a full-featured declarative boilerplate for a creating a documentation website using Markdoc and Next.js.  Until a better option presents itself, I will use these tools to document progress for SRED and future developers.


{% callout %}
The initial release of [markdoc.io](http://markdoc.io) is raw and does not include Stripe's own look and feel, but it provides the core machinery they use.  The release is about 7 weeks old, but the community response is strong and free third party components are already starting to land.
{% /callout %}

## Styling

Minimal markdown to start. My focus is on rapid production of content.  Build documentation components as required, style with tailwind, utilize the default components where possible.  Setup for desktop use only at the moment.

