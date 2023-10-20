import React, { useState } from 'react';
import "./App.css"


function App() {



   const [code, setCode] = useState('');
   const [isLocked, setIsLocked] = useState(false);

   const copyCode = () => {
      navigator.clipboard.writeText(code);
   };

   const saveCode = () => {
      console.log('Code saved:', code);
   };

   const toggleLock = () => {
      setIsLocked(!isLocked);
   };
   const handleIndent = () => {
      const lines = code.split('\n');
      const updatedLines = lines.map((line) => '\t' + line);
      setCode(updatedLines.join('\n'));
   };

   const handleUnindent = () => {
      const lines = code.split('\n');
      const updatedLines = lines.map((line) => {
         if (line.startsWith('\t')) {
            return line.slice(1);
         } else {
            return line;
         }
      });
      setCode(updatedLines.join('\n'));
   };

   return (
    <div className=' h-[100vh] flex flex-col justify-center items-center'>
       <div className=' '>
            <h1 className='text-grayWhite font-custom text-4xl'>Basic Code editor</h1>
            <div className='w-[100%] border border-grayWhite'></div>
         </div>
        <div className=' h-[100vh] flex flex-col justify-center items-center'>
        
         <div className='lg:w-[400px] md:w-[100%]  flex flex-col justify-center items-center '>
            <textarea
               className="editor border lg:h-[200px] md:h-[200px] sm:h-[200px]  text-lg 
           rounded-xl p-2 lg:w-[100%] md:w-[100%] sm:w-[100%] lg:flex md:grid md:grid-cols-2 md:grid-rows-2 justify-center 
           items-center font-custom text-grayWhite border-grayWhite bg-releaseBlack "

               id="editor"
               value={code}
               onChange={(e) => setCode(e.target.value)}
               readOnly={isLocked}
            />
            <div className="buttons  grid grid-cols-3  w-[100%] gap-4 justify-center  mt-6 relative">
               <button className="button border rounded-2xl
            p-3 lg:w-[100px] md:w-[100px] sm:w-[100px] font-custom text-grayWhite border-grayWhite
            lg:hover:scale-[1.2] hover:bg-grayWhite hover:text-releaseBlack"
             onClick={copyCode}>Copy</button>
               <button className="button border rounded-2xl
            p-3lg:w-[100px] md:w-[100px] sm:w-[100px] font-custom text-grayWhite border-grayWhite
            lg:hover:scale-[1.2] md:hover:scale-[1.2] sm:hover:scale-[1.1] hover:bg-grayWhite hover:text-releaseBlack" onClick={saveCode}>Save</button>
               <button className="button border rounded-2xl
            p-3 lg:w-[100px] md:w-[100px] sm:w-[100px] font-custom text-grayWhite border-grayWhite
            lg:hover:scale-[1.2] md:hover:scale-[1.2] sm:hover:scale-[1.1] hover:bg-grayWhite hover:text-releaseBlack" onClick={toggleLock}>{isLocked ? 'Unlock' : 'Lock'}</button>
               <button className="button border rounded-2xl
            p-3lg:w-[100px] md:w-[100px] sm:w-[100px] font-custom text-grayWhite border-grayWhite
            lg:hover:scale-[1.2] md:hover:scale-[1.2] sm:hover:scale-[1.1] hover:bg-grayWhite hover:text-releaseBlack" onClick={handleIndent}>Indent</button>
               <button className="button border rounded-2xl
            p-3 lg:w-[100px] md:w-[100px] sm:w-[100px] font-custom text-grayWhite border-grayWhite
            lg:hover:scale-[1.2] md:hover:scale-[1.2] sm:hover:scale-[1.1]] hover:bg-grayWhite hover:text-releaseBlack" onClick={handleUnindent}>Unindent</button>
            </div>

         </div>
      </div>
    </div>
   );
};


export default App;
