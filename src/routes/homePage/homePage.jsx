import "./homePage.scss"
import SearchBar from "../../components/searchBar/searchBar"


function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                <h1 className="title">Find Real Esate & Get Your Dream Place </h1>      
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                     perferendis fuga officia autem consequatur perspiciatis? Quibusdam, 
                     ex. Aliquam, nisi laboriosam! Sequi 
                    doloremque culpa corporis. Ad laborum quis ipsum eligendi omnis.</p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experince</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>200+</h1> 
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                    </div>
                    
              
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )

}
export default HomePage