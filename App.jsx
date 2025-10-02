import Test from "./components/Testimonial/index"
import img2 from "./assets/img2.jpg"

export default function App() {
  return (
    <>
      <Test>
        <Test.Image>
          <img src={img2} />
        </Test.Image>

        <Test.Quote>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.
        </Test.Quote>

        <Test.Author
          name="May Andersons"
          role="Workcation, CTO"
        />
      </Test>
    </>
  )
}
