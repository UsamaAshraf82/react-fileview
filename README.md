# React File View

React Component for File View

## Inspiration

Most File Viewer for React is out of date like [react-file-viewer](https://www.npmjs.com/package/react-file-viewer) is last updated on Nov 14, 2019

## Supported File Types

- Images : png, jpeg, gif, bmp, and others images type
- Video : mp4, mkv, webm, mov,avi
- Audio : mp3, wav, ac3, aac
- PDF

## Usage

There is one main React component, FileView, that takes the following props:

`filePath` link of file you want to view

`fileType` Extension for the File you want to view

    import FileView from 'file-view-react'

    function App() {
      return (
        <div className='App'>
          <FileView
            filePath='https://source.unsplash.com/uWFFw7leQNI'
            fileType='jpeg'
          />
        </div>
      )
    }

    export default App`
