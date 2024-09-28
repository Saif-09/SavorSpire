import BannerImage from "@/components/Homepage/BannerImage";
import ExoticRange from "@/components/Homepage/ExoticRange";
import HealthyProducts from "@/components/Homepage/HealthyProducts";
import Hero from "@/components/Homepage/Hero";
import NewLaunches from "@/components/Homepage/NewLaunches";
import bannerImg from '@/../public/assets/SpicesBanner.jpg';
import bannerImg1 from '@/../public/assets/SpiceBanner2.jpg';


export default async function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-isabelline">
            <Hero />
            <NewLaunches />
            <BannerImage src={bannerImg} />
            <HealthyProducts />
            <BannerImage src={bannerImg1} />
            <ExoticRange />

        </main>
    );
}
