import Landing from "@/components/Landing";

export default function Home() {
  return (
    <>
      {/* Resplandor dorado y grano de fondo */}
      <div className="bg-aura" aria-hidden="true" />
      <div className="bg-grain" aria-hidden="true" />
      <Landing />
    </>
  );
}
