import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as data from '../Data/data.json';
import '../styles/col.css';
import email from '../assets/email.png';
import github from '../assets/github.png';


let Details = data.default.data.featured.edges;

// console.log(Details);


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Demo() {

return(
    <div style={{
        // borderStyle: 'dashed',
        
        }}>
<Carousel responsive={responsive}>
{
          Details.map((results,index) => {
            const {title,html} = results;
            console.log('hai');
            return (
              <div
                className="colDiv"
              >
                <div
                  className="colDiv1"
                >
                  <h1
                    className="first"
                  >
                    {results.title}
                  </h1>
                  <h1
                    className="second"
                  >
                   {results.html}
                  </h1>
                  <div style={{ margin: "15px" }} />
                  <div style={{ margin: "15px" }} />
                  <div style={{ margin: "15px" }} />
                  <div
                    className="colDiv2"
                  >
                    <div style={{ margin: "15px" }} />
                    <img
                      src={email}
                      alt="Picture of the author"
                      width={30}
                      height={30}
                      quality
                      loading="lazy"
                    />
                    <div style={{ margin: "15px" }} />
                    <img
                      src={github}
                      alt="Picture of the author"
                      width={30}
                      height={30}
                      quality
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );

          })
        }
</Carousel>
</div>
)
}
