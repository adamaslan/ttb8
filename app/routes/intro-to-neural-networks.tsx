import { Link } from "@remix-run/react";
import NeuralNetworks from "../../public/nn.png";


export default function ArticleNN() {
  return (
    <div>
      <div className="mx-3 lg:mx-36">
        <h1 className="tracking-light text-center text-2xl font-extrabold text-blue-500 sm:text-4xl lg:text-5xl">
          Introduction to Neural Networks
        </h1>
        <img
          className="mx-auto my-auto h-1/2 w-1/2"
          src={NeuralNetworks}
          alt="Neural Networks"
        />
        <div>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            Neural networks form the foundation of modern machine learning systems—powering innovations in vision, speech, recommendation engines, and beyond. Inspired by the architecture of the human brain, these models consist of layers of interconnected nodes that learn patterns in data and make increasingly accurate predictions through iterative training. Learn more from the Databricks article
            <a href="https://www.databricks.com/glossary/neural-network" className="text-blue-500"> here</a>.
          </p>
          <br />
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif font-bold">
            Key Insights from the Databricks Article
          </p>
          <ul className="list-disc pl-5 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            <li>Neural networks use artificial neurons arranged in structured layers to process information.</li>
            <li>They learn by adjusting weights using backpropagation and optimization techniques like gradient descent.</li>
            <li>Common architectures include feedforward, convolutional, and recurrent neural networks.</li>
          </ul>
          <br />
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif font-bold">
            Exploring Neural Networks Further
          </p>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            A neural network includes an input layer, one or more hidden layers, and an output layer. Each layer applies activation functions like ReLU or sigmoid to learn and transform data.
          </p>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            During training, neural networks minimize prediction errors through iterative weight updates based on loss calculations. Their flexibility allows for powerful pattern recognition across a range of domains—from image classification to language translation.
          </p>
          <br />
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif font-bold">
            Practical Applications in the Databricks Ecosystem
          </p>
          <ul className="list-disc pl-5 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            <li>Train neural networks using PyTorch or TensorFlow in Databricks notebooks.</li>
            <li>Deploy deep learning models at scale using MLflow for tracking and automation.</li>
            <li>Support a variety of real-world use cases like anomaly detection, computer vision, and natural language understanding.</li>
          </ul>
          <br />
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif font-bold">
            Why Neural Networks Matter
          </p>
          <ul className="list-disc pl-5 text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            <li><span className="font-semibold">Scalable Learning:</span> Neural networks adapt to large datasets and complex problems.</li>
            <li><span className="font-semibold">Generalization Power:</span> With enough data, they can model virtually any function.</li>
            <li><span className="font-semibold">Automation Ready:</span> Neural networks reduce the need for manual feature engineering.</li>
          </ul>
          <p className="text-left text-lg tracking-tight sm:text-xl lg:text-2xl font-serif">
            Neural networks are more than a research tool—they’re production-grade intelligence engines, fueling today’s AI-powered applications.
          </p>
          <br />
          <p className="text-center text-lg font-extrabold tracking-tight text-yellow-500 sm:text-2xl lg:text-4xl">
            Go back
            <Link
              to="/"
              className="text-center text-6xl font-extrabold tracking-tight text-blue-500 sm:text-xl lg:text-4xl"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
