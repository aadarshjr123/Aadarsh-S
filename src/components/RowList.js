import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import * as data from '../Data/data.json';
import '../styles/row.css';
import foreign from '../assets/foreign.png';
import github from '../assets/github.png';

let Details = data.default.data.projects.edges;


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 480 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1
  }
};

export default function RowList() {

return(
    <div className="rowDiv2">
<Carousel responsive={responsive}>
{
          Details.map((results,index) => {
            const {title,html} = results;
            console.log('hai');
            return (
          <div
            style={{
            //   borderStyle:  "dashed",
            }}
          >
            <div
              className="rowDiv"
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
              <div
                className="rowDiv1"
              >
                {results.external === "" ? <div></div>:
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
                  }
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
            </div>
            
          </div>
        );

          })
        }
</Carousel>

</div>
)
}
