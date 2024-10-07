// script.js  
function updateLineNumbers() {  
    const editor = document.getElementById('editor');  
    const lineNumbers = document.getElementById('lineNumbers');  
    lineNumbers.innerHTML = ''; // Clear existing line numbers  
  
    const lines = editor.value.split('\n');  
    lines.forEach((line, index) => {  
        const lineNumberElement = document.createElement('div');  
        lineNumberElement.className = 'line-number';  
        lineNumberElement.textContent = index + 1; // Line numbers start at 1  
        lineNumbers.appendChild(lineNumberElement);  
    });  
  
    // Adjust the height of the line numbers container to match the textarea  
    const lineHeight = parseFloat(getComputedStyle(editor).lineHeight);  
    lineNumbers.style.height = `${lines.length * lineHeight}px`;  
}  
  
// Initialize line numbers when the page loads  
document.addEventListener('DOMContentLoaded', updateLineNumbers);  
  
// Update line numbers whenever the textarea content changes  
document.getElementById('editor').addEventListener('input', updateLineNumbers);  
function save()
{
    var text = document.getElementById("editor").value
    console.log(text)
    const downloadLink = document.createElement('a');
            const blob = new Blob([text], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.download = 'myText.txt';
            // 模拟点击该链接
            downloadLink.click();
            // 释放 URL 对象资源
            URL.revokeObjectURL(url);
}