const editUserModal = document.querySelector('#new-user-modal');
const editUserForm = document.querySelector('#new-user-form');
const updateButton = document.querySelector('#update-button');
const cancelButton = document.querySelector('#cancel-button');

// O botão de criar abre o modal
updateButton.addEventListener('click', () => {
  editUserModal.showModal();
});

// E o botão de cancelar fecha o modal
cancelButton.addEventListener('click', () => {
  editUserModal.close();
});

// Recebe os valores do formulário
editUserForm.addEventListener('submit', () => {
  const { elements } = editUserForm;

  let txtSex;
  switch (+elements['sex'].value) {
    case 1:
      txtSex = 'Feminino';
      break;

    case 2:
      txtSex = 'Masculino';
      break;

    case 3:
      txtSex = 'Outro';
      break;

    default:
      throw new Error("Invalid 'sex' value");
  }

  console.log(elements['name'].value);
  console.log(elements['age'].value);
  console.log(txtSex);
});
