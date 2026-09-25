// Make inline code blocks click-to-copy
document.querySelectorAll('.md-content code').forEach(code => {
  // Ignore large code blocks that already have a copy button
  if (code.parentNode.tagName === 'PRE') return;

  code.style.cursor = 'pointer';
  code.title = 'Click to copy';
  
  code.addEventListener('click', () => {
    navigator.clipboard.writeText(code.innerText);
    
    // Quick green flash to show it worked!
    const originalBg = code.style.backgroundColor;
    const originalColor = code.style.color;
    
    code.style.backgroundColor = '#4ade80'; // Green
    code.style.color = '#ffffff'; // White text
    
    setTimeout(() => { 
        code.style.backgroundColor = originalBg; 
        code.style.color = originalColor;
    }, 400);
  });
});