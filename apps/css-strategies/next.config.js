//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  compiler: {
    // For other options, see https://styled-components.com/docs/tooling#babel-plugin
    styledComponents: true,
  },

  experimental: {
    serverActions: true,
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  stylexPlugin({
    aliases: {
      '@/*': [path.join(__dirname, '*')],
    },
    rootDir: __dirname,
  })
];

module.exports = composePlugins(...plugins)(nextConfig);
