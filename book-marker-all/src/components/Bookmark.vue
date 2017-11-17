<template>
  <div>  
    <div class="container">
      <div class="header clearfix">
        <nav>

        </nav>
        <h3>Bookmarker</h3>
      </div>

      <div class="jumbotron">
        <h2>Bookmark Your Favorite Sites</h2>
        <form id="myForm">
          <div class="form-group">
            <label>Site Name</label>
            <input type="text" class="form-control" id="siteName" placeholder="Website Name" v-model="bookmark.bookmarkname">
          </div>
          <div class="form-group">
            <label>Site URL</label>
            <input type="text" class="form-control" id="siteUrl" placeholder="Website URL" v-model="bookmark.bkurl">
          </div>
          <button type="submit" class="btn btn-primary" @click.prevent="addbookmark">Submit</button>
        </form>
      </div>
      {{ fetchData() }}
      <div class="row marketing">
        <div class="col-lg-12">
          <div v-for="i in listBookmark" :key="i.bookmarkname">
            {{ i.bookmarkname }} <a class="btn btn-default" target="_blank" v-bind:href="'https://' + i.bkurl">Visit</a>
          <button class="btn btn-danger" @click.prevent="delData(i)">Delete</button>
          </div>
          
        </div>
      </div>

      <footer class="footer">
        <p>&copy; 2016 Bookmarker, Inc.</p>
      </footer>

    </div> 
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '@/firebaseConfig'

export default {
  data() {
    return {
      bookmark: {
        bookmarkname: '',
        bkurl: '',
        keyid: '',
        userid: ''
      },
      listBookmark: []
    }
  },
methods: 
{
  addbookmark()
  {
    if(this.bookmark.bookmarkname == '' || this.bookmark.bkurl == '')
    {
      alert('Please fill in the blank');
    }
    else {
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if(!this.bookmark.bkurl.match(regex))
    {
      alert('URL is not correct');
    }
    else {
       var user = firebase.auth().currentUser;

      if (user) {
        this.bookmark.userid = user.id;
      }
       this.$http.post('listBookmark.json', this.bookmark).then(response => { 
                    console.log(response);
                }, error => {
                    console.log(error);
                });
        this.clearData();
  }
    }
  },
  fetchData()
  {
    var user = firebase.auth().currentUser;
      if (user) {
        this.bookmark.userid = user.id;
      }
                this.$http.get('listBookmark.json').then(response => {
                    return response.json(); 
                }).then(data => { 
                    const resultArray = [];
                    for (let key in data) {
                        let x = data[key];
                        x.keyid = key;
                        if (x.userid === this.bookmark.userid) {
                            resultArray.push(x);
                        }
                    }
                    this.listBookmark = resultArray; 
                });
},
delData()
{
  console.log(bookmark.keyid);
      this.$http.delete('listBookmark/' + bookmark.keyid + '.json').then(response => { 
                    console.log(response);
                }, error => { 
                    console.log(error);
                });
},
clearData()
{
  this.bookmark.bookmarkname="",
  this.bookmark.bkurl=""
}
}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
