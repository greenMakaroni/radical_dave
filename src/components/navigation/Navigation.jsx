import MobileNav from "./MobileNav"
import Nav from "./Nav"

// window dimensions hook
import useWindowDimensions from '../../useWindowDimensions';

export default function Navigation() {

    const {width, height} = useWindowDimensions();

  return (
    <>
        { width < 650 ? <MobileNav /> : <Nav /> }
    </>
  )
}
