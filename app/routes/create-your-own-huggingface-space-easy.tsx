import { Link } from "react-router";
import huggingface1 from "/huggingface1.png";
import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "The Easy Way to Publish on Hugging Face Spaces" },
    {
      name: "description",
      content:
        "Hugging Face Spaces offer a simple way to host not just ML demo apps directly on your profile or your organization’s profile, but any Python code with frameworks like Gradio, Streamlit, Docker, or static HTML.",
    },
    { name: "keywords", content: "Hugging Face, Spaces, Gradio, Streamlit, Python, Deployment" },
    { name: "author", content: "Adam Aslan" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "robots", content: "index, follow" },
  ];
};

export default function Article5() {
  return (
    <div>
      <div className="mx-3 lg:mx-36">
        <h1 className="tracking-light text-center text-2xl font-extrabold text-blue-500 sm:text-4xl lg:text-5xl">
          The Easy Way to Host Your Python Project on Hugging Face Spaces
        </h1>
        <br />
        <img
          className="mx-auto my-auto h-1/2 w-1/2"
          src={huggingface1}
          alt="Hugging Face Spaces Overview"
        />
        <div>
          <p className="text-left font-serif text-lg font-bold tracking-tight sm:text-2xl lg:text-3xl">
            Hugging Face Spaces offer a simple way to host not just ML demo apps directly on your profile or your organization’s profile, but really any Python code you want.
          </p>
          <br />
          <p className="text-left font-serif text-lg font-bold tracking-tight sm:text-2xl lg:text-3xl">
            This is especially helpful for apps that use{' '}
            <a href="https://www.gradio.app/" className="text-blue-500">
              Gradio
            </a>, Streamlit, Docker, or static HTML, allowing you to create a decent looking UI fast.
          </p>
          <br /><br />
          <p className="text-left font-serif text-lg font-bold tracking-tight sm:text-2xl lg:text-3xl">
            In addition to quick deployment, Hugging Face Spaces provides automatic GPU allocation, collaborative editing, and customizable templates so you can focus on building your application rather than managing infrastructure.
          </p>
          <br /><br />
          <p className="text-left font-serif text-lg font-bold tracking-tight sm:text-2xl lg:text-3xl">
            Checkout{' '}
            <a href="https://huggingface.co/spaces/" className="text-blue-500">
              Hugging Face Spaces
            </a>
            <br /><br /> Here's their{' '}
            <a href="https://www.huggingface.co/" className="text-blue-500">
              docs for spaces
            </a>
          </p>
          <br />
          <p className="text-center text-lg font-extrabold tracking-tight text-yellow-500 sm:text-2xl lg:text-4xl">
            Go back{' '}
            <Link
              to="/"
              className="text-center text-6xl font-extrabold tracking-tight text-blue-500 sm:text-xl lg:text-4xl"
            >
              Home
            </Link>
          </p>
          <br /><br />
        </div>
      </div>
    </div>
  );
}
