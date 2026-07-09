import Navbar from "../../components/layout/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-screen items-center justify-center bg-slate-950">
        <h1 className="text-5xl font-bold text-white">
          Landing Page
        </h1>
      </main>
    </>
  );
}

export default LandingPage;