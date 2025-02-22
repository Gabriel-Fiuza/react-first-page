import Resume from "../resume/Resume";
import Title from "../title/Ttile";
import poster from "../../assets/onepiece-banner.jpeg";
import "./styles.css"

export default function Card(){
  return(
    <>
      <div className="content">
        <img src={poster} alt="onepiece-poster" />
        <div className="description">
          <Title/>
          <Resume/>
          <button>Compre agora!</button>
        </div>
      </div>
    </>
  )
}