import Body from "../components/Body";
import Padawans from '../components/Padawans'

export default function LandingPage({user}) {
  return (
    <Body sidebar user={user}>
        <Padawans />
    </Body>
  )
}
