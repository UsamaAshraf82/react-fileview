import * as React from 'react'

import ImageView from './Viewer/ImageView'
import NoView from './Viewer/NoView'
import PDFView from './Viewer/PDFView'
import './styles.scss'
import AudioView from './Viewer/AudioView'
import VideoView from './Viewer/VideoView'

interface Props {
  filePath: string
  fileType: string
}

const FileView: React.FC<Props> = ({ filePath: link, fileType: ext }) => {
  switch (ext) {
    case 'apng':
    case 'avif':
    case 'bmp':
    case 'gif':
    case 'ico':
    case 'jpg':
    case 'jpeg':
    case 'jpe':
    case 'jif':
    case 'jfif':
    case 'png':
    case 'svg':
    case 'tif':
    case 'tiff':
    case 'webp':
    case 'xbm':
      return <ImageView link={link} />
    case 'pdf':
      return <PDFView link={link} />
    case 'mp4':
    case 'mkv':
    case 'webm':
    case 'mov':
    case 'avi':
      return <VideoView link={link} />
    case 'mp1':
    case 'mp2':
    case 'mp3':
    case 'ogg':
    case 'ogv':
    case 'ogm':
    case 'oga':
    case 'spx':
    case 'ogx':
    case 'opus':
    case 'flac':
    case 'wav':
    case 'amr':
    case 'aif':
    case 'ape':
    case 'ac3':
    case 'xm':
    case 'aac':
    case 'it':
    case 'f4a':
    case 'f4b':
    case 'm4b':
    case 'm4a':
    case 'm4p':
      return <AudioView link={link} />
    default:
      return <NoView link={link} />
  }
}

export default FileView
