const Form = {
  inputItemFirstName: document.querySelector("form .input-item-firstName"),
  inputItemLastName: document.querySelector("form .input-item-lastName"),
  inputItemEmail: document.querySelector("form .input-item-email"),
  inputItemPassword: document.querySelector("form .input-item-password"),
  firstNameSmall: document.querySelector("#firstNameSmall"),
  lastNameSmall: document.querySelector("#lastNameSmall"),
  emailSmall: document.querySelector("#emailSmall"),
  passwordSmall: document.querySelector("#passwordSmall"),

  // Pegar os campos
  name: document.querySelector("input#name"),
  lastName: document.querySelector("input#lastName"),
  email: document.querySelector("input#email"),
  password: document.querySelector("input#password"),

  // Retornar os valores dos campos
  getValues() {
    return {
      name: Form.name.value,
      lastName: Form.lastName.value,
      email: Form.email.value,
      password: Form.password.value,
    };
  },

  // Validar os campos
  validateFields() {
    const { name, lastName, email, password } = Form.getValues();

    if (name.length === 0) {
      Form.inputItemFirstName.classList.add("active");
      Form.firstNameSmall.innerHTML = "First Name cannot empty";
      Form.name.classList.add("active");
    } else {
      Form.firstNameSmall.innerHTML = "";
      Form.inputItemFirstName.classList.remove("active");
      Form.name.classList.remove("active");
    }

    if (lastName.length === 0) {
      Form.inputItemLastName.classList.add("active");
      Form.lastNameSmall.innerHTML = "Last Name cannot empty";
      Form.lastName.classList.add("active");
    } else {
      Form.lastNameSmall.innerHTML = "";
      Form.inputItemLastName.classList.remove("active");
      Form.lastName.classList.remove("active");
    }

    if (email.length === 0) {
      Form.inputItemEmail.classList.add("active");
      Form.emailSmall.innerHTML = "Looks like this is not an email";
      Form.email.classList.add("active");
    } else {
      Form.emailSmall.innerHTML = "";
      Form.inputItemEmail.classList.remove("active");
      Form.email.classList.remove("active");
    }

    if (password.length === 0) {
      Form.inputItemPassword.classList.add("active");
      Form.passwordSmall.innerHTML = "Password cannot empty";
      Form.password.classList.add("active");
    } else {
      Form.passwordSmall.innerHTML = "";
      Form.inputItemPassword.classList.remove("active");
      Form.password.classList.remove("active");
    }
  },

  handleSubmit(event) {
    event.preventDefault();

    try {
      Form.validateFields();
    } catch (error) {
      console.log(error);
    }
  },
};
