<template>
  <div>
    <div class="container shadow-lg p-3 mb-5 bg-white rounded">
        <h1 class="title">טופס 161</h1>
        <span>
            על מנת להשלים את תהליך העזיבה יש למלא טופס 161, את הטופס ניתן להוריד בלינק למטה:
            <br>
            <span>
                קישור לטופס 161:
                <a href='https://www.gov.il/BlobFolder/service/itc-161/he/itc161New.pdf' target="_blank">טופס 161 </a>
            </span>
        </span>
        <b-form @submit.prevent="onSubmit">
        <b-form-group
            id="input-group-tofes"
            label-cols-sm="3"
            label="טופס:"
            label-for="tofes"
        >
        <b-form-file
            v-model="tofes"
            :state="Boolean(tofes)"
            placeholder="Choose a file or drop it here..."
            drop-placeholder="Drop file here..."
        ></b-form-file> 
        <b-form-invalid-feedback>
          נא להעלות קובץ של טופס 161 חתום
        </b-form-invalid-feedback>
      </b-form-group>
        </b-form>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      form: {
        tofes: null,
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
  }
}

</script>

<style>
.title{
    margin:auto;
    vertical-align:middle;
}
.container{
        text-align:center;

}
</style>