// plop se define como un micro-generator framework
const ComponentType = {
  ATOMS: "atoms",
  MOLECULES: "molecules",
  ORGANISMS: "organisms"
};

const ComponentFolder = {
  [ComponentType.ATOMS]: "atoms",
  [ComponentType.MOLECULES]: "molecules"
};

const StoryPath = {
  [ComponentType.ATOMS]: "Atoms",
  [ComponentType.MOLECULES]: "Molecules"
};

export default (plop) => {
  plop.setGenerator("component", {
    description: "Create new UI component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Enter the component name"
      }, 
      {
        type: "list",
        choices: Object.values(ComponentType),
        name: "ComponentType",
        message: "⚡️ Enter the type of the component ⚡️"
      }
    ],
    actions: [
      {
        type: "addMany",
        destination: "src/ui/{{ComponentFolder ComponentType}}/{{name}}",
        base: "plop-templates/component",
        templateFiles: "plop-templates/component/*.hbs"
      }
    ]
  });
  plop.setHelper("ComponentFolder", (componentType) => ComponentFolder[componentType]);

  plop.setHelper(
        'storyPath',
        componentType => StoryPath[componentType]
      )
};
