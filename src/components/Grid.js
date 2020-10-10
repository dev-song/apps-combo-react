import React from 'react';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.data = [
      new TableItem('jack', 20, 70),
      new TableItem('lee', 30, 88),
      new TableItem('chuck', 17, 75),
      new TableItem('ralph', 41, 69),
      new TableItem('mark', 25, 80)
    ];

    this.state = {
      data: this.data
    };
  }

  render() {
    const { data } = this.state;

    return (
      <div className='Grid' >
        <input
          className='Grid-filter'
          type='text'
          placeholder='Please enter keywords'
        />
        <table className='Grid-table'>
          <thead>
            <tr>
              <th>name</th>
              <th>age</th>
              <th>weight</th>
            </tr>
          </thead>
          <tbody>
            {data.map(({ name, age, weight }, index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class TableItem {
  constructor(name, age, weight) {
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}

export default Grid;
