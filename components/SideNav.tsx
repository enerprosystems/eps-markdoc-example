import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

const items = [
  {
    title: 'Customer Portal',
    links: [
      {href: '/docs', children: 'Overview', links:[] },
    ],
  },
  {
    title: 'Project Path',
    links: [
      {href: '/docs/project-timeline', children: 'Timline', status:"", links:[] },
      {href: '/docs/frontend-prototype', children: 'Frontend Prototype', status:"", links:[] },
      {  
        children: 'Backend Guidance',
        links: [
          { href: '/docs/guidance-azure-stack', title: 'Azure Stack' },
          { href: '/docs/guidance-azure-api', title: 'POP API' },
        ]
      },
      {href: '/docs/third-party-payment', children: '3rd Payment Options', links:[]},
      {
        children: 'Enerpro Payment Links',
        links:[
          { href: '/docs/payment-links', title: 'Online Payment' },
          { href: '/docs/payment-links-2', title: 'Feature Updates' },
        ]
      },
      {href: '/docs/portal-pop', children: 'PoP Prototype', links:[]},
    ],
  },
  {
    title: 'Current Focus',
    links: [
      {href: '/docs/focus-epl', children: 'Enerpro Payment Links', links:[]},
      {href: '/docs/focus-docs', children: 'Documentation Site', links:[]},
      {href: '/docs/focus-requests', children: 'Outstanding Requests', links:[]},
    ],
  },
  {
    title: 'Next Steps',
    links: [
      {href: '/docs/next-frontend', children: 'Front End', links:[]},
      {href: '/docs/next-backend', children: 'Back End', links:[]},
      {href: '/docs/next-dev-ops', children: 'Dev Ops', links:[]},
    ],
  },
  {
    title: 'Development Logs',
    links: [
      {href: '/docs/log-2022-06', children: 'June 2022', links:[]},
      {href: '/docs/log-2022-early', children: 'Early 2022', links:[]},
    ],
  },
  {
    title: 'Production',
    links: [
      {href: '/docs/production-auth0', children: 'Auth0', links:[]},
      {href: '/docs/production-azure', children: 'Azure', links:[]},
      {href: '/docs/production-hosted', children: 'Hosted Apps', links:[]},
      {href: '/docs/production-stripe', children: 'Stripe', links:[]},
    ],
  },
];

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav">
      {items.map((item) => (
        <div key={item.title}>
          <span className="block">{item.title}</span>
          <ul className="flex flex-col mb-6">
            {item.links.map((link) => {
              if(typeof link.href ==='string') {
                const active = router.pathname === link.href;
                return (
                  <li key={link.href} className="{active ? 'active' : ''} pl-4 pb-1">
                    <Link {...link}>
                      <a href={link.href}>{link.status} {link.children}</a>
                    </Link>
                  </li>
                );
              }  else {
                return (
                  <li key={link.href+'z'} className="pl-4">
                    {link.status} {link.children}
                      <ul className="flex flex-col mb-2">
                         {link.links.map((link) => {
                            return (
                              <li key={link.href} className="{active ? 'active' : ''} pl-4 text-sm">
                                <Link {...link}>
                                  <a href={link.href}>{link.status} {link.title}</a>
                                </Link>
                              </li>
                            );
                          })}
                      </ul>
                  </li>

                );
              }
            })}
          </ul>
        </div>
      ))}
      <style jsx>
        {`
          nav {
            position: sticky;
            top: var(--top-nav-height);
            height: calc(100vh - var(--top-nav-height));
            flex: 0 0 auto;
            overflow-y: auto;
            padding: 2.5rem 2rem 2rem;
            border-right: 1px solid var(--border-color);
          }
          span {
            font-size: larger;
            font-weight: 500;
            padding: 0.5rem 0 0.5rem;
          }
          ul {
            padding: 0;
          }
          li {
            list-style: none;
            margin: 0;
          }
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
        `}
      </style>
    </nav>
  );
}
