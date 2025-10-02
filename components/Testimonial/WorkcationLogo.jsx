import { LuTreePalm } from "react-icons/lu";

export default function WorkcationLogo() {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <LuTreePalm style={{ color: "#2E59F3", height: "30px", width: "30px", marginRight: "5px" }} />
      <span style={{color: "#1F2937", fontSize: "25px", fontWeight: "700"}}>Work</span>
      <span style={{color: "#2E59F3", fontSize: "25px", fontWeight: "700"}}>cation</span>
    </div>
  )
}
