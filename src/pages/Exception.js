import { useLocation } from "react-router";


export default function Exception(props) {
  const location = useLocation(); 
  return (
    <>
      <h1>Exception in {location.pathname}</h1>
      <h3>{props.message ?? "Empty"}</h3>
    </>
  )
}
