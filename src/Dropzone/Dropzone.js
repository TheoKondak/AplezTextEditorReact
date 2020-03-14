
import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import './Dropzone.css';

const Dropzone = () => {


  // https://jsfiddle.net/0GiS0/nDVYd/
  window.onload = function() {

    //Check File API support
    if (window.File && window.FileList && window.FileReader) {
        var filesInput = document.getElementById("files");

        filesInput.addEventListener("change", function(event) {

            var files = event.target.files; //FileList object
            var output = document.getElementById("result");

            for (var i = 0; i < files.length; i++) {
                var file = files[i];

                //Only plain text
                if (!file.type.match('plain')) continue;

                var picReader = new FileReader();

                picReader.addEventListener("load", function(event) {

                    var textFile = event.target;

                    var div = document.createElement("div");

                    div.innerText = textFile.result;

                    output.insertBefore(div, null);

                });

                //Read the text file
                picReader.readAsText(file);
            }

        });
    }
    else {
        console.log("Your browser does not support File API");
    }
}
     
      return (
        <div class='container'>
        <label for="files">Select a file: </label>
        <input id="files" type="file" />
        <output id="result" />
        </div>
      )
}

export default Dropzone;