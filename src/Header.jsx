import { useState } from 'react'
import CartDetails from './Cinama/CardDetails'
import logo from './assets/logo.svg'
import ring from './assets/ring.svg'
import cart from './assets/shopping-cart.svg'
import sun from './assets/star.svg'

const Header = () => {
  const [showCart, setShowCart] = useState(false)

  function handleCartShow() {
    setShowCart(true)
    // if (state.cartData.length > 0) {
    //   setShowCart(true)
    // } else {
    //   setShowCart(false)
    // }
  }
  return (
    <>
      <header>
        {showCart && <CartDetails onClose={() => setShowCart(false)} />}

        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={sun} width="24" height="24" alt="" />
              </a>
            </li>
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
                onClick={handleCartShow}
              >
                <img src={cart} width="24" height="24" alt="" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
