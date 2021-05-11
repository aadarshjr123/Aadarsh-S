import "react-multi-carousel/lib/styles.css";
import '../styles/col.css';
import '../styles/Home.css';
import { SocialIcon } from 'react-social-icons';



export default function social() {

return(
    <>
    <SocialIcon url="https://dribbble.com/aadarshjr123" bgColor="#333" className="Social"/>
    <div style={{ margin: "15px" }} />
    <SocialIcon url="mailto: aadarshsasikumar@gmail.com" bgColor="#333" className="Social"/>
    <div style={{ margin: "15px" }} />
    <SocialIcon url="https://github.com/aadarshjr123" bgColor="#333" className="Social"/>
    <div style={{ margin: "15px" }} />
    <SocialIcon url="https://www.instagram.com/i_am_aadarshjr/" bgColor="#333" className="Social"/>
    <div style={{ margin: "15px" }} />
    <SocialIcon url="https://in.linkedin.com/in/aadarshss" bgColor="#333" className="Social"/>
    </>
)
}
