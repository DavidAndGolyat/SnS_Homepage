<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <a class="footer-brand" href="https://www.davidandgolyat.com" target="_sub">Sling & Stone</a>

            <ul class="pull-center">
                <li>   
                    &copy; {{year}}, Designed by
                    <a href="https:///www.invisionapp.com" target="_sub">Invision.</a> Coded by
                    <a href="https://www.davidandgolyat.com" target="_sub">Sling & Stone</a>
                </li>
            </ul>
            <ul class="social-buttons pull-right">
                <li>Follow us</li>
                <li>
                    <a href="https://www.facebook.com/davidandgolyatph" target="_sub"
                        class="btn btn-icon btn-neutral btn-link">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/company/david-&-golyat/" target="_sub"
                        class="btn btn-icon btn-neutral btn-link">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
    },
    data(){
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>
<style>
</style>
