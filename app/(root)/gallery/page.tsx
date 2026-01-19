import HeroHeader from "@/components/ui/Hero";
import Gallery from "@/components/sections/Gallery";

const GalleryPage = () => {
    return (
        <>
            <HeroHeader 
                title={'Gallery'} 
                desc={"Explore moments from our international conferences and events"} 
                image={"/images/sample.png"} 
                alt={"Proxima Gallery"} 
            />
            <Gallery />
        </>
    )
}

export default GalleryPage;