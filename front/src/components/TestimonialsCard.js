import React from "react"
import brandon from '../assets/img/brandon.jfif';
import omphile from '../assets/img/omphile.jfif';


const TestimonialsCards = () =>{
    return (
    <div class = "testimonials">
    <figure class="snip1157">
    <blockquote>Calvin: You know sometimes when I'm talking, my words can't keep up with my thoughts... I wonder why we think faster than we speak. Hobbes: Probably so we can think twice.
        <div class="arrow"></div>
    </blockquote>
    <img src={brandon} alt="sq-sample3" />
    <div class="author">
        <h5>Brandon September<br></br><span> Tech Mentor</span></h5>
    </div>
    </figure>
    <figure class="snip1157 hover">
    <blockquote>Thank you. before I begin, I'd like everyone to notice that my report is in a professional, clear plastic binder...When a report looks this good, you know it'll get an A. That's a tip kids. Write it down.
        <div class="arrow"></div>
    </blockquote>
    <img src= {omphile} alt="sq-sample27" />
    <div class="author">
        <h5>Omphile Rentswele<br></br><span> Tech Mentor</span></h5>
    </div>
    </figure>
    <figure class="snip1157">
    <blockquote>My behaviour is addictive functioning in a disease process of toxic co-dependency. I need holistic healing and wellness before I'll accept any responsibility for my actions.
        <div class="arrow"></div>
    </blockquote>
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" alt="sq-sample17" />
    <div class="author">
        <h5>Loyd Tinarwo<span> Research Supervisor</span></h5>
    </div>
    </figure>
   
    </div>
    );
};
export default TestimonialsCards;
