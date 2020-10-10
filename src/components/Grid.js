import React from 'react';

class TableCategory {
  constructor(category) {
    this.category = category;
    this.sortOrder = null;
  }
}

const CATEGORIES = [
  new TableCategory('name'),
  new TableCategory('age'),
  new TableCategory('weight')
];

class TableItem {
  constructor() {
    [...arguments].forEach((arg, index) => {
      const { category } = CATEGORIES[index];
      this[category] = arg;
    })
  }
}

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

  sortData(category) {
    this.setState({
      data: [...this.data].sort((a, b) => {
        if (a[category] < b[category]) return - 1;
        if (a[category] > b[category]) return 1;
        return 0;
      })
    })
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
              {CATEGORIES.map(({ category }, index) => (
                <th key={index}>
                  {category}
                  <span
                    role='img'
                    aria-label='Expand'
                    onClick={() => this.sortData(category)}
                  >
                    &#128317;
                  </span>
                </th>
              ))}
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

export default Grid;
