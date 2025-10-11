// Access form and message elements
    const form = document.getElementById("userForm");
    const messageBox = document.getElementById("messageBox");

    // Form submit event
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form reload

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const country = document.getElementById("country").value;

      if (!name || !email || !country) {
        messageBox.textContent = "⚠️ Please fill all fields!";
        messageBox.className = "message error";
        return;
      }

      // Validate email format (basic check)
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        messageBox.textContent = "⚠️ Enter a valid email!";
        messageBox.className = "message error";
        return;
      }

      // Display success message
      messageBox.textContent = `✅ Thank you ${name}! We received your details from ${country}.`;
      messageBox.className = "message success";

      // Clear form
      form.reset();
    });