import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as data from '../Data/data.json';
import '../styles/col.css';
import foreign from '../assets/foreign.png';
import github from '../assets/github.png';
// import internsot from "../assets/internspot.png"


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
            // const {title,html} = results;
            console.log(results);
            return (
              <div
                className="colDiv"
              >
                <div
                  className="colDiv1"
                >
                  <h1
                    className="first-col"
                  >
                    {results.title}
                  </h1>
                  <h1
                    className="second-col"
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
                    <a href={results.external}>
                    <img
                      src={foreign}
                      alt="Picture of the author"
                      width={20}
                      height={20}
                      quality
                      loading="lazy"
                    />
                    </a>
                    <div style={{ margin: "15px" }} />
                    <a href={results.github}>
                    <img
                      src={github}
                      alt="Picture of the author"
                      width={20}
                      height={20}
                      quality
                      loading="lazy"
                    />
                    </a>
                  </div>
                  <h6 className="tech">{results.tech}</h6>
                  </div>
                  {/* </img> */}
                </div>
              
            );

          })
        }
</Carousel>
</div>
)
}
