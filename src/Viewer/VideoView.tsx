import * as React from 'react'
interface Props {
  link: string
}
const VideoView: React.FC<Props> = ({ link }) => {
  return <video className=" view view-video" src={link} controls />
}

export default VideoView
