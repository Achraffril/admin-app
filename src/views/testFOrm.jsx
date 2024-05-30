import React, { useState } from 'react';

const Form = ({ onFileUpload }) => {
  const [dragging, setDragging] = useState(false);
  const [file,setFile] = useState();

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    setFile(e.dataTransfer.files[0]);
    onFileUpload(file);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className='rounded-2xl p-4'
      style={{ border: dragging ? '2px dashed #555' : '2px dashed #ccc', background: dragging ? 'gainsboro' : ''}}
    >
      <div className="text-center flex justify-center flex-column align-items-center">
        <div className="flex text-sm leading-6 text-gray-600">
            <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md bg-white text-gray-700 font-bold border px-2 hover:text-green-600"
            >
            <input id="file-upload" name="icon" type="file" className="sr-only" onChange={(e) => setFile(e.target.files[0])} />

            <span>Télécharger un file</span>
            </label>
            <p className="pl-1">ou glisser et déposer</p>
            
        </div>
        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
        </div>
    </div>


  );
};

export default Form;
