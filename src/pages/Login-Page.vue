<template>
  <div class="container shadow-lg p-3 mb-5 bg-white rounded">
    <h1 class="title">התחברות</h1>
    <b-form @submit.prevent="onLogin">
      <b-form-group
        id="input-group-email"
        label-cols-sm="3"
        label="אימייל:"
        label-for="Email"
      >
        <b-form-input
          id="Email"
          v-model="$v.form.email.$model"
          type="text"
          :state="validateState('email')"
        ></b-form-input>
        <b-form-invalid-feedback>
          נא להכניס אימייל
        </b-form-invalid-feedback>
      </b-form-group>

      <b-form-group
        id="input-group-Password"
        label-cols-sm="3"
        label="סיסמא:"
        label-for="Password"
      >
        <b-form-input
          id="Password"
          type="password"
          v-model="$v.form.password.$model"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback>
          נא להכניס סיסמא
        </b-form-invalid-feedback>
      </b-form-group>

      <b-button 
        type="submit"
        variant="primary"
        style="width:100px;display:block;"
        class="mx-auto w-100"
        :disabled= "clickButton"
        >התחברות</b-button
      >

      <div class="mt-2">
        עדיין לא רשום?
        <router-link to="register">הרשם כאן</router-link>
      </div>
    </b-form>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >
      התחברות נכשלה {{ form.submitError }}
    </b-alert>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { users } from '../DB';

export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        submitError: undefined,
      },
      clickButton: false,
    };
  },
  validations: {
    form: {
      email: {
        required,
      },
      password: {
        required,
      },
    },
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
        let email = this.form.email;
        let password = this.form.password;
        let isFound = false;
        users.forEach(element => {
          if(element.email == email && element.password == password){
            this.$root.toast(
              "successful",
              "User successfully logged in",
              "success"
            );
            isFound = true;
            this.$root.store.login(email, element.fname, element.lname);
            this.$router.push("/");
          }
        });
        if(!isFound){
          console.log("he")
            this.$root.toast(
              "Invalid credentials",
              "Email or password are incorrect",
              "danger"
            );
        }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      this.Login();
    },
  },
};
</script>

<style lang="scss">
.container {
  max-width: 450px;
  margin-top: 10px;
}
</style>
