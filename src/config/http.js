
class Http extends XMLHttpRequest{
  constructor(timeout=10000) {
    super();
    this.timeout = timeout;
    this.xhr = new XMLHttpRequest();
  }
  ajax(methods, url, async=true) {
    return new Promise((resolve, reject) => {
      this.xhr.open(methods, url, async);
      this.xhr.send(null);
      this.xhr.onreadystatechange = () => {
        if( this.xhr.readyState==4 ) {
          if( this.xhr.status==200 || this.xhr.status==304) {
            resolve(JSON.parse(this.xhr.responseText))
          }else {
            this.onerror()
            reject({
              status: this.xhr.status,
              result: this.xhr.statusText
            })
          }
        } 
      }
    })
  }
  get(url) {
    return this.ajax('get', url)
  }
  post(url) {
    return this.ajax('post', url)
  }
  onerror() {
    console.log('报错了')
  }
}

const axios = new Http();
axios.get(`http://118.25.95.147:3004/reader/banner`).then(res=>{
  console.log(res)
}).catch(err=>{
  console.log(err)
})