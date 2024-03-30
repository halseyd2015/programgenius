// Create a class named ProgramGenius
class ProgramGenius {
    constructor() {
        this.projects = [];
    }

    // Method: add a project to the ProgramGenius
    addProject(project) {
        this.projects.push(project);
        console.log(`Added project "${project}" to the ProgramGenius.`);
    }

    // Method: remove a project from the ProgramGenius
    removeProject(project) {
        const index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
            console.log(`Removed project "${project}" from the ProgramGenius.`);
        } else {
            console.log(`Project "${project}" is not found in the ProgramGenius.`);
        }
    }

    // Method: list all projects in the ProgramGenius
    listProjects() {
        console.log("Projects in the ProgramGenius:");
        this.projects.forEach(project => {
            console.log(project);
        });
    }
}

// Create an instance of ProgramGenius named myProgramGenius
const myProgramGenius = new ProgramGenius();

// Add projects to the ProgramGenius
myProgramGenius.addProject("Web Application");
myProgramGenius.addProject("Mobile App");
myProgramGenius.addProject("Data Analysis Tool");

// List all projects in the ProgramGenius
myProgramGenius.listProjects();

// Remove a project from the ProgramGenius
myProgramGenius.removeProject("Mobile App");

// List all projects in the ProgramGenius after removal
myProgramGenius.listProjects();
