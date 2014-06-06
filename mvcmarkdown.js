
Model = function(){
  this.converter = new Showdown.converter()
}

Model.prototype = ({
  html: function(string){
    return this.converter.makeHtml(string)
  }
})

View = function(){
  this.outputArea = $('.output-area')
}
View.prototype = ({
  placeHtml: function(html){
    this.outputArea.empty()
    this.outputArea.append(html) 
  }
})

var converter = new Showdown.converter();

window.onload = function (){
  var model = new Model()
  var view = new View() 
  var controller = new Controller(view,model)
  controller.bindEventListener()
}

Controller = function(view,model){
  this.view = view
  this.model = model
}

Controller.prototype = ({
  bindEventListener: function(){
    $('body').keyup(this.translateToMarkdown.bind(this))
  },
  translateToMarkdown: function(){
    var html = this.model.html($('.input-area').val())
    this.view.placeHtml(html)
  }
})
