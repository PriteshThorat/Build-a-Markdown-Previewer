import { useSelector } from "react-redux";
import parse from "html-react-parser";
import { marked } from "marked";
import '../index.css';
import './Marked.css';

const Previewer = () => {
  const markdown = useSelector(state => state.marked.markedText);
  
  marked.setOptions({
    gfm: true,  
    breaks: true,  
  });

  return (
    <>
      <h1>Previewer</h1>
      <div 
      id="preview"
      className="previewr-container">
        {parse(marked(markdown))}
      </div>
    </>
  );
};

export default Previewer;