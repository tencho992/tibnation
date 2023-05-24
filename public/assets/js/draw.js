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
      "public/assets/imgdraw/ka.png",
      "public/assets/imgdraw/kha.png",
      "public/assets/imgdraw/ga.png",
      "public/assets/imgdraw/cha.png",
      "public/assets/imgdraw/chha.png",
      "public/assets/imgdraw/ja.png",
      "public/assets/imgdraw/nya.png",
      "public/assets/imgdraw/ta.png",
      "public/assets/imgdraw/taa.png",
      "public/assets/imgdraw/da.png",
      "public/assets/imgdraw/na.png",
      "public/assets/imgdraw/pa.png",
      "public/assets/imgdraw/paa.png",
      "public/assets/imgdraw/ba.png",
      "public/assets/imgdraw/ma.png",
      "public/assets/imgdraw/tsa.png",
      "public/assets/imgdraw/tssa.png",
      "public/assets/imgdraw/dza.png",
      "public/assets/imgdraw/wa.png",
      "public/assets/imgdraw/zha.png",
      "public/assets/imgdraw/za.png",
      "public/assets/imgdraw/aa.png",
      "public/assets/imgdraw/ya.png",
      "public/assets/imgdraw/ra.png",
      "public/assets/imgdraw/la.png",
      "public/assets/imgdraw/sha.png",
      "public/assets/imgdraw/sa.png",
      "public/assets/imgdraw/ha.png",
      "public/assets/imgdraw/a.png",
      
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
  