const fileToImageData = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        resolve(reader.result);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      } else {
        reject(new Error('No file provided'));
      }
    });
  };