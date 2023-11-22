document.addEventListener("DOMContentLoaded", function() {
    const text = "Hey, My Name is Mike";
    const typingElement = document.getElementById('typing');
    typingElement.style.fontFamily = "'Courier New', monospace";
    const typingContainer = document.createElement('span'); // Create a container
    typingContainer.classList.add('typing-container'); 
    typingElement.appendChild(typingContainer); // Append the container to the typing element
    const cursor = document.createElement('span');
    cursor.textContent = '_';
    cursor.classList.add('cursor');
    typingElement.appendChild(cursor); // Append cursor

    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            typingContainer.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Adjust speed here
        } else {
            // Start the blinking cursor effect once typing is done
            cursor.style.animation = 'blink 1s step-end infinite';
        }
    }

    // Initially, the cursor is solid until typing starts
    cursor.style.opacity = '1';
    typeWriter();
});
