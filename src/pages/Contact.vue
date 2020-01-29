<template>
  <layout>
    <div class="j-page-container">
      <div class="contact-page">
        <div>
          <h1>Hello There 👋</h1>
          <section style="margin-top:60px;">
            <h5 style="color:black;">Intrested in working together?</h5>
            <h5 style="color:black;">Fill the form below to get in touch</h5>
          </section>
          <section>
            <form name="contact" data-netlify="true" action="POST">
              <input type="hidden" name="form-name" value="contact" />
              <div class="input-container">
                <label>Name:</label>
                <input type="text" name="name" />
              </div>
              <div class="input-container">
                <label>Your Email:</label>
                <input type="email" name="email" />
              </div>
              <div class="input-container">
                <label>Message:</label>
                <textarea type="text" name="message" />
              </div>
              <div class="input-container">
                <button class="j-button j-float-right">
                  Send 
                </button>
              </div>
            </form>
          </section>
        </div>
        <div >
          <section class="box">
            <h4>Are you looking for other options?</h4>
            <p>If you don't want to use the website's contact form, don't hesitate to contact me from any other source, it's quite normal.</p>
            <section class="j-text-center" style="font-size:2em;color:#b5b5b5;">
              <a href="https://www.twitter.com/justaashir" ><i class="fab fa-twitter"></i></a>
        <a href="https://www.github.com/justaashir" ><i class="fab fa-github"></i></a>
         <a href="https://www.dev.to/justaashir" ><i class="fab fa-dev"></i></a>
            </section>
          </section>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  div {
    flex: 1;
  }
}

// Form
form {
  .input-container {
    label {
      display: block;
      font-weight: 600;
      margin-bottom: 5px;
      font-size: 1.1em;
    }
    padding: 0.4em;
    input, textarea {
      padding: 1em;
      border-radius: 4px;
      border: 2px dashed #257942;
      width: 100%;
      display: block;
      margin-top: 10px;
    }
  }
}
.box{
  background-color:#fafafa;
  border-radius:4px;
  border-top:10px solid #257942;
  padding:30px;
  margin:50px 0px 0px 0px;
  section{
    a{
      font-size:1em;
      margin-right:30px;
      color:#b5b5b5;
      &:hover{
        color:black;
      }
    }
  }
}
@media (min-width: 620px) {
  .contact-page{
    flex-direction: row;
    div{
      flex:1;
    }
  }
  .box{
    margin-left:50px;

  }
}

</style>