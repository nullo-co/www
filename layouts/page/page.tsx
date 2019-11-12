import Head from 'next/head'
import React, { Fragment } from 'react'

import pkg from '../../package.json'

if ('document' in global) {
  const info = [
    `Version: ${pkg.version}`,
    `Find the code here: https://github.com/${pkg.repository}`,
    `Have a great day! 🎉`
  ]

  for (const message of info) {
    console.log(message)
  }
}

export function App({ children }: any) {
  return (
    <Fragment>
      <Head>
        <title>
          {pkg.name} — {pkg.description}
        </title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="theme-color" content="colors.primary.default" />
        <meta name="description" content={pkg.description} />
        <meta name="keywords" content="pkg.keywords.join(',')" />

        <meta name="twitter:title" content={`${pkg.name} — ${pkg.description}`} />
        <meta name="twitter:description" content={pkg.description} />
        <meta name="twitter:image" content="https://nullo.co/static/cover.png" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:title" content={`${pkg.name} — ${pkg.description}`} />
        <meta property="og:description" content={pkg.description} />
        <meta property="og:image" content="https://nullo.co/static/cover.png" />
        <meta property="og:url" content="https://nullo.co" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/static/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/static/icon.png" />
      </Head>

      <div>
        <main>{children}</main>
      </div>

      <style jsx={true}>{`
        div {
          display: flex;
          justify-content: space-between;
        }
        main {
          width: calc(100% - 250px);
        }
      `}</style>

      <style jsx={true} global={true}>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'SF UI Display', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif';
          font-display: Swap;
          font-style: Normal;
          font-weight: Normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          font-feature-settings: 'liga';
        }

        img {
          max-width: 100%;
          width: 100%;
        }

        a {
          text-decoration: none;
        }

        fieldset {
          border: 0;
          width: 100%;
        }
      `}</style>
    </Fragment>
  )
}
