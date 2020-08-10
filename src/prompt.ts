import inquirer from 'inquirer'

export const prompt = async () => {
  const result = await inquirer.prompt([{type: 'input', name: 'initial', message: 'How are you today?'}]);
  console.log(result)
};
