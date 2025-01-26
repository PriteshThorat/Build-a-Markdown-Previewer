import { Editor, Previewer } from "./components/index"

function App() {

  return (
    <div className="outer-contaier">
      <a 
      href="https://github.com/PriteshThorat/Build-a-Markdown-Previewer.git" target="_blank" 
      rel="noopener noreferrer">
        View Source Code
      </a>
      <Editor />
      <Previewer />
    </div>
  )
}

export default App