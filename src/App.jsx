import Nav from './components/Nav'
import Hero from './components/Hero'
import Service from './components/Service/Service'
import BuildFor from './components/BuildFor/BuildFor'
import Users from './components/Users/Users'

const App = () => {
  return (
    <div>
      <div className=''>
        {/* this is for nav abr section */}
        <Nav />
        {/* this is for hero section */}
        <Hero />
        {/* this is for service section */}
        <Service />
        {/* this is for build for everyone section */}
        <BuildFor />
        {/* this is for user section */}
        <Users />
      </div>
    </div>
  )
}

export default App