import { Link } from "react-router";

import analytics from "/analytics1.jpeg"


export default function Article2() {


  return (



    <div className=" mx-3 lg:mx-36">
      <img
        className="h-1/2 w-1/2 mx-auto my-auto "
        src={analytics}
        alt="computer and graphs"
      />
      <br />
      <div className=" ">
        <h1 className="tracking-light  text-center text-2xl font-extrabold text-blue-500 sm:text-4xl lg:text-5xl">
        The Easy Way to Verify Domain Ownership with Google</h1>
        <br />
        <p className="text-left text-xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl ">

          Oh domains! The web of developer sadness they can indeed weave. Luckily, whether your building your website with just HTML or in React with Nextjs, there is an easy solution for you.
        </p><p className="text-left text-xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl ">

          If you have already found the Google's Publisher Center <a href="https://publishercenter.google.com/">  Google's Publisher Center </a>, then you are half of the way there. Next, comes the challenging part, Domain Verification.
      </p>        <p className="text-left text-xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl ">

        So what is the easy solution already? HTML Tags. Yes, just put the verification tags in your{"<Head>"} section on the main page of your site.  <br />  <br />
          This can be a bit tricky with something like Nextjs as their is no index.html. Instead, its just the index.js {"<Head>"}section that u must import like so:
            import Head from "next/head";
            Hope this helps!
          For more info check <a href="https://support.google.com/webmasters/answer/9008080#domain_name_verification&zippy=%2Cdomain-name-provider%2Chtml-file-upload"> Google's docs </a>
        </p>



        <p className="text-center text-xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl text-yellow-500">
          Go back <Link to="/" className=" text-center text-6xl font-extrabold tracking-tight sm:text-xl lg:text-4xl text-blue-500">
          Home
        </Link>
        </p>




      </div>
    </div>

  );
}