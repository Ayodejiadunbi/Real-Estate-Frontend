import "./profilePage.scss"
import List from "../../components/list/List"
import Chat from "../../components/chat/chat"


function ProfilePage(){
    return(
        <div className="profilePage">
            <div className="detail"> 
                <div className="wrapper">
                    <div className="title">
                        <h1> User Infomation</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avater: 
                            <img src="https://media.gettyimages.com/id/1289461335/photo/portrait-of-a-handsome-black-man.jpg?s=612x612&w=gi&k=20&c=tLXHz94Tj89nEyeEm4qZuEJdR24qLDO_Xpq-SSQzGuw="  alt="" />
                            </span>
                            <span>Username:<b> John Doe</b></span>
                            <span> Email: <b>goe@yahoo.com</b></span>
                    </div>
                    <div className="title">
                        <h1> My List</h1>
                        <button>Create New Post</button>
                    </div>
                    <List/>
                    <div className="title">
                        <h1> Saved List</h1>
                        
                    </div>
                    <List/>
                </div>
               
            </div>
            <div className="chatConatiner">
                <div className="wrapper">
                    <Chat/>
                    
                </div>     
            </div>
        </div>
    )
}

export default  ProfilePage