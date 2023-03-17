import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={240}
    height={240}
    viewBox="0 0 240 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-5" y="-137" rx="0" ry="0" width="238" height="217" /> 
    <rect x="-3" y="100" rx="0" ry="0" width="100" height="17" />
    <rect x="-3" y="130" rx="0" ry="0" width="100" height="17" /> 
    <rect x="-3" y="160" rx="0" ry="0" width="100" height="17" /> 

  </ContentLoader>
)

export default MyLoader