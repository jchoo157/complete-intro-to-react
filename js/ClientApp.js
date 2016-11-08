var div = React.DOM.div
var h1 = React.DOM.h1

// Composite component
var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyCompositeComponent = React.createClass({
  render () {
    return (
      div(null,
        h1(null, "Hello folks!")
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null, 
    MyTitleFactory({title: 'Props are great!', color: 'rebeccapurple'}),
    React.createElement(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    MyTitleFactory({title: 'Hello there!', color: 'red'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))