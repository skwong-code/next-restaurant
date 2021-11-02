import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Privacy Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        Generic Privacy Policy Template 
        </h1>
        <p className="description"></p>

This privacy policy ("policy") will help you understand how [name] ("us", "we", "our") uses and protects the data you provide to us when you visit and use [website] ("website", "service").
We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.

      </main>

      <footer>

      </footer>

      

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
