import Testimonial from "./components/Testimonial/index"
import img2 from "./assets/img2.jpg"

export default function App() {
  return (
    <>
      <Testimonial>
        <Testimonial.Image>
          <img src={img2} />
        </Testimonial.Image>
      </Testimonial>
    </>
  )
}
