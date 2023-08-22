const downloadLinks = document.querySelectorAll("[data-download]");
 downloadLinks.forEach((button) => {
     const id = button.dataset.download; 
    const img = document.querySelector(`[data-imgid="${id}"]`); //data-imgid="imgid-${Date.now()}"
     console.log(img); 
     button.addEventListener("click", () => { 
        const a = document.createElement("a"); 
        a.href = img.src;
         a.download = ''; 
         a.style.display = 'none'; 
         document.body.appendChild(a); 
         a.click();
          document.body.removeChild(a);
         });
         }); 
         const upload = document.querySelector("#uploadid"); 
         upload.addEventListener("change", () => {
             let filereader = new FileReader();
              filereader.readAsDataURL(upload.files[0]);
               filereader.addEventListener("load", () => {
                 //const opens = filereader.result;
                  let displayImg = setImg(opens,id,id); 
                  let divFor = document.createElement("div");
                   divFor.className = "item"; 
                   divFor.innerHTML = displayImg; 
                   let container = document.querySelector(".container");
                    container.appendChild(divFor);
                     // Save the image data to local storage
                      localStorage.setItem("uploadedImageData", opens);
                     });
                     }); 
        function setImg(opens,id,id) {
             return `<img src="${opens}" class="img-class" 
             data-download="imgid-${id} alt="Img">
              <div class="download-del"> <button class="btn" 
              type="button" data-download="imgid-${id}">
              Download</button> </div> <i class="delete-i fa fa-trash" aria-hidden="true"></i>`; 
            } // Retrieve and display the uploaded image data from local storage 
            window.addEventListener("DOMContentLoaded", () => { 
                const savedImageData = localStorage.getItem("uploadedImageData"); 
                if (savedImageData) { 
                    let displayImg = setImg(savedImageData); 
                    let divFor = document.createElement("div"); 
                    divFor.className = "itemimg"; 
                    divFor.innerHTML = displayImg; 
                    let container = document.querySelector(".container");
                     container.appendChild(divFor); 
                    } 
                });