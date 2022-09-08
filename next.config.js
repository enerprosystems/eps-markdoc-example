const withMarkdoc = require('@markdoc/next.js');

module.exports =
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  withMarkdoc(/* config: https://markdoc.io/docs/nextjs#options */)({
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdoc'],
  });
