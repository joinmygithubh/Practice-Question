(async () => {
    const chalk = await import('chalk');
  
    // Log the message "Hello, Node.js!" in bold blue
    console.log(chalk.default.blue.bold('Hello, Node.js!'));
  
    // Display the warning message "Caution: Low Disk Space" in yellow
    console.log(chalk.default.yellow('Caution: Low Disk Space'));
  
    // Show the success message "Installation Complete!" in green
    console.log(chalk.default.green('Installation Complete!'));
  })();
  