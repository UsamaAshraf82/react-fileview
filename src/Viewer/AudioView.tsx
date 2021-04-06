import * as React from 'react'
interface Props {
  link: string
}
const AudioView: React.FC<Props> = ({ link }: Props) => {
  return <audio className="view view-audio" src={link} controls />
}

export default AudioView
