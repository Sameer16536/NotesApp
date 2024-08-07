import Quill from "quill"
import "quill/dist/quill.snow.css"
import '../components/css/editor.css'
import { io, Socket } from "socket.io-client"
import { useCallback, useEffect, useRef } from "react"

function TextEditor() {
  useEffect(()=>{
    const socket =io("http://localhost:3000")

    return()=>{
      socket.disconnect()
    }
  })
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