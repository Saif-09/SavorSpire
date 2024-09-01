import Hero from "@/components/Homepage/Hero";
import NewLaunches from "@/components/Homepage/NewLaunches";

export default async function Home() {
   
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-isabelline">
            <Hero />
            <NewLaunches/>
            
        </main>
    );
}
