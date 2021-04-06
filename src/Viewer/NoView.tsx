import * as React from 'react'
interface Props {
  link: string
}
const NoView: React.FC<Props> = () => {
  return <div className="view view-none">No Preview Available</div>
}

export default NoView
