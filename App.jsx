import Banner from "./components/Banner/index"

export default function App() {
  return (
    <>
      <Banner type="congratulate">
        <Banner.TitleBar>
          Congratulations!
        </Banner.TitleBar>
      </Banner>

      <Banner type="error">
        <Banner.TitleBar>
          Error occurred!
        </Banner.TitleBar>

        <Banner.Content>
          Looks like you made an oopsies...
        </Banner.Content>
      </Banner>

      <Banner type="attention">
        <Banner.TitleBar>
          This needs your atatention!
        </Banner.TitleBar>

        <Banner.Content>
          Something major has been affected, please check.
        </Banner.Content>
      </Banner>

      <Banner type="update">
        <Banner.TitleBar>
          Updates Required
        </Banner.TitleBar>
      </Banner>
    </>
  )
}
