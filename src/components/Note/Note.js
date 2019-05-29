import React from 'react';

export default class Note extends React.Component {


  render() {
    return (
      <div>
        <h3>Note Name</h3>
        <p>Date modified blahblah </p>
        <button>Delete Note</button>
        <br/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque sollicitudin orci nec pretium. Nam pretium lacinia dui. Maecenas eu enim nulla. Etiam in nunc eu leo blandit aliquam a a nulla. Ut ac risus at lacus euismod iaculis ac quis massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
        <p>Suspendisse tempus massa sed ornare porta. Proin et quam vulputate justo maximus semper. Phasellus erat dui, porttitor at pulvinar imperdiet, euismod vitae orci.</p>
      </div>
    )
  }

}
