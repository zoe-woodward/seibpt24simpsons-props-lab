import './ProfileCard.css'


export default function ProfileCard({ pic, name, description, email }) {
    return (
        <div id="single-article-1" className="single-article">
             <div id="card-front-1" className="front-card tb-card">
                <img src={pic} className="profile-image" alt={`${name}'s profile`} />
                <div className="single-content">
                    <div className="card-middle">
                        <h1>{name}</h1>
                        <p className="team-p1">{description}</p>
                    </div>
                    <div className="card-bottom">
                        <div className="card-email">{email}</div>
                        <div className="card-icon profile-trigger">
                            <i className="fa fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



