import dynamic from 'next/dynamic'
const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/map'),
  { ssr: false }
)


const About = () => {
  return (
    <DynamicComponentWithNoSSR/>
  )
}

export default About
