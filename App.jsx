import { HiOutlineCloudUpload } from "react-icons/hi";
import { RiGameFill } from "react-icons/ri";
import { VscHeartFilled } from "react-icons/vsc";

import Card from "./components/Card/index"

export default function App() {
  return (
    <>
      <Card>
        <Card.Icon><HiOutlineCloudUpload /></Card.Icon>
        <Card.Title>This is the Title of the Card</Card.Title>
        <Card.Content>And these are the contents of the card.</Card.Content>
      </Card>

      <Card>
        <Card.Icon><RiGameFill /></Card.Icon>
        <Card.Title>Game of the Century</Card.Title>
        <Card.Content>Pacman has been awarded the title of the Game of the Century because it's such an awesome game!</Card.Content>
      </Card>

      <Card>
        <Card.Icon><VscHeartFilled /></Card.Icon>
        <Card.Title>Heart from VSC?</Card.Title>
        <Card.Content>I have no idea why this exists but it's a heart from the VS Code icon pack. It's cute.</Card.Content>
      </Card>
    </>
  )
}
