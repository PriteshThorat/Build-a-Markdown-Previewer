import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { change } from '../store/markedTextSlice';
import '../index.css'

const Editor = () => {
  const markedData = useSelector(state => state.marked.markedText);

  const [data, setData] = useState(markedData);

  const dispatch = useDispatch();

  useEffect(() => {
    setData(markedData);
  }, [markedData]);

  const handler = (e) => {
    setData(e.target.value);
    dispatch(change(e.target.value));
  }

  return (
    <div className='editor-container'>
      <h1>Editor</h1>
      <textarea
        className='editor'
        spellCheck={false}
        onChange={handler}
        value={data}
        id="editor" >
      </textarea>
    </div>
  );
};

export default Editor;