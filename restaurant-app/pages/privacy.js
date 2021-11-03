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
        <p className="description">            
</p>

        <p className="description">This privacy policy ("policy") will help you understand how [name] ("us", "we", "our") uses and protects the data you provide to us when you visit and use [website] ("website", "service").
We reserve the right to change this policy at any given time, of which you will be promptly updated. If you want to make sure that you are up to date with the latest changes, we advise you to frequently visit this page.
</p>

<p className="heeder"> What User Data We Collect</p>

<p className="description">When you visit the website, we may collect the following data:</p>

<p className="list">	<li>Your IP address.</li>
<li>Your contact information and email address.</li>
<li>Other information such as interests and preferences.</li>
<li>Data profile regarding your online behavior on our website.</li>
</p>

<p className="heeder"> Why We Collect Your Data</p>
<p className="description">We are collecting your data for several reasons:</p>

<p className="list">	<li>To better understand your needs.</li>
<li>To improve our services and products</li>
<li>To send you promotional emails containing the information we think you will find interesting.</li>
<li>To contact you to fill out surveys and participate in other types of market research.</li>
<li>To customize our website according to your online behavior and personal preferences.</li>
</p>

<p className="heeder">Safeguarding and Securing the Data</p>
<p className="description">[name] is committed to securing your data and keeping it confidential. [name] has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online.</p>

<p className="heeder">Our Cookie Policy</p>
<p className="description"> Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (analyze web traffic, web pages you spend the most time on, and websites you visit).
The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems.
Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you.
If you want to disable cookies, you can do it by accessing the settings of your internet browser. (Provide links for cookie settings for major internet browsers).
</p>
<p className="heeder">Links to Other Websites</p>
<p className="description">Our website contains links that lead to other websites. If you click on these links [name] is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.
</p>

<p className="heeder">Restricting the Collection of your Personal Data</p>
<p className="description">At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following:
When you are filling the forms on the website, make sure to check if there is a box which you can leave unchecked, if you don't want to disclose your personal information.
If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you.
[name] will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.

</p>



      </main>

      <footer>

      </footer>

      <style jsx>{`
        .container {
          min-height: 20vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .heeder {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: left;
          padding: 0 10rem;
          font-weight: bold;
        }

        .list {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: left;
          list-style-type: circle;
          padding: 0 10rem;
        }


        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: left;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
          padding: 0 10rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
          text-align: left;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }


        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

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
