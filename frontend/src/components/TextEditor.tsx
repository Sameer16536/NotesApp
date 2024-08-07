import Quill from "quill"
import "quill/dist/quill.snow.css"
import '../components/css/editor.css'
import { useCallback, useEffect, useRef } from "react"

function TextEditor() {
    const wrapperRef = useCallback((wrapper:HTMLDivElement) => {
        if(wrapper ==null) return
        wrapper.innerHTML =''
        
            const editor = document.createElement('div');
            wrapper.append(editor);
            new Quill(editor, {
                theme: 'snow'
            });

         
        
    }, []);

  return (
    
    <div id="container" ref={wrapperRef}></div>
  )
}

export default TextEditor