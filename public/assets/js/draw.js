document.addEventListener('DOMContentLoaded', function() {
    const canvasContainer = document.querySelector('.canvas-container');
    const tracingCanvas = document.querySelector('.tracing-canvas');
    const context = tracingCanvas.getContext('2d');
    const clearButton = document.querySelector('#clear-button');
    const nextButton = document.querySelector('#next-button');
    let isTracing = false;
  
    // Adjust the canvas size to match the container dimensions
    const containerWidth = canvasContainer.clientWidth;
    const containerHeight = canvasContainer.clientHeight;
    tracingCanvas.width = containerWidth;
    tracingCanvas.height = containerHeight;
  
    // Set the brush stroke size
    const brushSize = 5; // Adjust the brush size as desired
    context.lineWidth = brushSize;
  
    // Array of image paths for the next button
    const imagePaths = [
      "assets/img/draw/ka.png",
      "assets/img/draw/kha.png",
      "assets/img/draw/ga.png",
      "assets/img/draw/cha.png",
      "assets/img/draw/chha.png",
      "assets/img/draw/ja.png",
      "assets/img/draw/nya.png",
      "assets/img/draw/ta.png",
      "assets/img/draw/taa.png",
      "assets/img/draw/da.png",
      "assets/img/draw/na.png",
      "assets/img/draw/pa.png",
      "assets/img/draw/paa.png",
      "assets/img/draw/ba.png",
      "assets/img/draw/ma.png",
      "assets/img/draw/tsa.png",
      "assets/img/draw/tssa.png",
      "assets/img/draw/dza.png",
      "assets/img/draw/wa.png",
      "assets/img/draw/zha.png",
      "assets/img/draw/za.png",
      "assets/img/draw/aa.png",
      "assets/img/draw/ya.png",
      "assets/img/draw/ra.png",
      "assets/img/draw/la.png",
      "assets/img/draw/sha.png",
      "assets/img/draw/sa.png",
      "assets/img/draw/ha.png",
      "assets/img/draw/a.png",
      
    ];
  
    let currentImageIndex = 0;
  
    canvasContainer.addEventListener('mousedown', startTracing);
    canvasContainer.addEventListener('mousemove', traceCharacter);
    canvasContainer.addEventListener('mouseup', stopTracing);
    canvasContainer.addEventListener('mouseleave', stopTracing);
    clearButton.addEventListener('click', clearCanvas);
    nextButton.addEventListener('click', loadNextCharacter);
  
    function startTracing(event) {
      isTracing = true;
      const rect = tracingCanvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      context.beginPath();
      context.moveTo(x, y);
    }
  
    function traceCharacter(event) {
      if (isTracing) {
        const rect = tracingCanvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        context.lineTo(x, y);
        context.stroke();
      }
    }
  
    function stopTracing() {
      isTracing = false;
    }
  
    function clearCanvas() {
      context.clearRect(0, 0, tracingCanvas.width, tracingCanvas.height);
    }
  
    function loadNextCharacter() {
      currentImageIndex++;
      if (currentImageIndex >= imagePaths.length) {
        currentImageIndex = 0;
      }
      const imagePath = imagePaths[currentImageIndex];
      // Update the character image source
      const characterImage = document.querySelector('.character-image');
      characterImage.src = imagePath;
      // Clear the canvas
      clearCanvas();
    }
  });
  