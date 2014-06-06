


var converter = new Showdown.converter();

window.onload = function (){
  var translater = new Translater()
  translater.bindEventListener()
}

Translater = function(){
}

Translater.prototype = ({
  bindEventListener: function(){
    $('body').keyup(this.translateToMarkdown.bind(this))
  },
  translateToMarkdown: function(){
    var inHtml = converter.makeHtml($('.input-area').val())
    $('.output-area').empty()
    $('.output-area').append(inHtml)  

  }
})
