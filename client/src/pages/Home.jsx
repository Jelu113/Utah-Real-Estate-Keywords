import Section from '../components/Section'
import backgroundImage from "../assets/photo-1469248620856-e8c981d98aff.webp"

const Home = () => {
    return (
        <>
        <div >
            <div className ="sectionContainer" style={{ backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition:"center",
            backgroundAttachment:"fixed",
            backgroundRepeat:"no-repeat" }}>
            
            <Section />
            </div>
            </div>
        </>
    )
}

export default Home;