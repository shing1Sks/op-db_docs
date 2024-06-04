import HomeSec from "@/components/HomeSec";

export const metadata = {
  title: "OP-DB documentation",
  description: "General guide and reference for Op-DB npm package to get started with using op-db.",
};



export default function Home() {
  return (
    <main>
      <div className="bg-white dark:bg-slate-700 text-center">
        <HomeSec/>
      </div>
    </main>
  );
}
