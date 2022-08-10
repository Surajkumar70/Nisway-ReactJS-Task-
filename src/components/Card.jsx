import React from 'react'
import './Card.css'

function Navbar(props) {
    const p = props.data.excerpt.rendered.replace("[", "").replace("]", "")
    return (
        <>
            {console.log(props)}
            {console.log(props.data.title.rendered)}
            {console.log(props.data.date)}
            {console.log(props.data.parsely.meta.author)}
            {console.log(props.data.parsely.meta.publisher.name)}
            {console.log(props.data.excerpt.rendered)}
            {console.log(props.data.jetpack_featured_media_url)}


            <div className="card">
                <h4 className='title' dangerouslySetInnerHTML={{ __html: props.data.title.rendered }} />
                <img className="card-logo" src={props.data.jetpack_featured_media_url} alt="No Image" />
                <div className="container">
                    <p className="Date" >{props.data.date}</p>
                    <p className="Author" >Author - {props.data.parsely.meta.author[0].name}</p>
                    <p className="Media" >Featured Media - {props.data.parsely.meta.publisher.name}</p>
                    <br></br>
                    <p className="headline" dangerouslySetInnerHTML={{ __html: p }}></p>
                    <div>
                        <a href="https://techcrunch.com/2022/08/09/in-africa-kenyan-startups-have-so-far-recorded-highest-funding-growth-this-year/">
                            <button className="btn">Read more <i class='fa fa-mail-forward'></i>
                            </button>
                        </a>
                    </div>

                    <div className="footer">
                        <a href="https://github.com/Surajkumar70" style={{ color: "black" }}>
                            <i className="fa fa-github"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/suraj-kumar-488648216/" style={{ color: "black" }}>
                            <i className="fa fa-linkedin"></i>
                        </a>

                        <a href="https://twitter.com/surajkumar014" style={{ color: "black" }}>
                            <i className="fa fa-twitter"></i>
                        </a>

                        <a href="https://stackoverflow.com/users/16833747/surajkumar" style={{ color: "black" }}>
                            <i className="fa fa-stack-overflow "></i>
                        </a>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar;



