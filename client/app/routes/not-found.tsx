export default function NotFound() {
  return (
    <div className="container">
      <div className="text-center space-y-6 text-white bg-primary rounded-2xl py-24 px-4">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl">The requested page could not be found.</p>
        <a href="/" className=" underline text-xl">
          Go back to home page
        </a>
      </div>
    </div>
  );
}
