<template>
<div>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item active :to="{ name: 'main' }">דף הבית</b-nav-item>
          <b-nav-item :to="{ name: 'employeePage'}">התראות</b-nav-item>
          <b-nav-item :to="{ name: 'AboutPage'}">עלינו</b-nav-item>
          <b-nav-item :to="{ name: 'ContactPage'}">צור קשר</b-nav-item>
        </b-navbar-nav>
  
        <!-- Right aligned nav items -->
        <b-navbar-nav class="mr-auto">
          <div class='notificationBell_div'>
            <b-nav-item-dropdown id='notification_dropdown' right no-caret>
            <template slot="button-content">
              <notification-bell :size='30' iconColor='#8bd1dc' style="margin: auto;" :count='notification_counter'/>
            </template>
              <Notification v-for='notification in notifications' :key="notification.text" :body='notification.text' :time='notification.time' :user_id='notification.user_id'/>
            </b-nav-item-dropdown>
          </div>
          <b-nav-item-dropdown left v-if="!$root.store.email" text="שלום אורח">
            <div>
              <b-dropdown-item :to="{ name: 'login' }">התחברות</b-dropdown-item>
              <b-dropdown-item :to="{ name: 'register' }">הרשמה</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>

          <!-- <b-nav-item-dropdown right v-if="$root.store.email" text="User"> -->
          <b-nav-item right v-if="$root.store.email" :to="{ name: 'ProfilePage' }">
           <b> {{ $root.store.firstName }} {{ $root.store.lastName }} </b>
          </b-nav-item>
          <b-nav-item-dropdown left v-if="$root.store.email">
            <b-dropdown-item :to="{ name: 'ProfilePage' }">עמוד בית</b-dropdown-item>
            <b-dropdown-item v-on:click='Logout'>התנתקות</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
  <router-view v-on:notification="newRequest"/>
</div>
</template>

<script>
import Notification from './components/Notification'
import NotificationBell from 'vue-notification-bell'


export default {
 name: "App",
  mounted(){
    // console.log("session: "+this.$root.store.email)
  },
  components: {
    NotificationBell,  // Registering Component
    Notification
  },    
  data: () => ({
      notification_counter: 0,
      toggleNotificationWindow: false,
      notifications: []
    }),
  methods:{
    async Logout() {
          this.$root.store.logout();
          this.$root.toast("Logout", "User logged out successfully", "success");
          this.$router.push("/").catch(() => {
            this.$forceUpdate();
          });
      },
      notification_window: function (){
        this.toggleNotificationWindow = !this.toggleNotificationWindow
      },
    newRequest (request) {
      this.notification_counter++;
      this.notifications.splice(0, 0, request)
    }
  }
}
</script>

<style lang="scss">
  @import "@/scss/form-style.scss";

.notif{
  float: left;
}


</style>