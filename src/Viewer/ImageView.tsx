import * as React from 'react'
interface Props {
  link: string
}
const ImageView: React.FC<Props> = ({ link }) => {
  return <img src={link} alt="view" className="view view-img" />
}

export default ImageView
