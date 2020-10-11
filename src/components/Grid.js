import React from 'react';

const CATEGORIES = [
  'name',
  'age',
  'weight'
];

class TableCategory {
  constructor(category) {
    this.category = category;
    this.lastSortOrder = null;
  }
}

class TableItem {
  constructor() {
    [...arguments].forEach((arg, index) => {
      const category = CATEGORIES[index];
      this[category] = arg;
    })
  }
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.categories = CATEGORIES.map(category => (
      new TableCategory(category)
    ));
    this.data = [
      new TableItem('jack', 20, 70),
      new TableItem('lee', 30, 88),
      new TableItem('chuck', 17, 75),
      new TableItem('ralph', 41, 69),
      new TableItem('mark', 25, 80)
    ];

    this.state = {
      categories: this.categories,
      data: this.data
    };
  }

  sortData(category, lastSortOrder) {
    this.setState({
      categories: this.state.categories.map(item => {
        if (item.category === category) {
          return {
            category: category,
            lastSortOrder: lastSortOrder === 'desc' ? 'asc' : 'desc'
          }
        }
        return item;
      }),
      data: [...this.data].sort((a, b) => {
        if (a[category] < b[category]) return lastSortOrder === 'desc' ? -1 : 1;
        if (a[category] > b[category]) return lastSortOrder === 'desc' ? 1 : -1;
        return 0;
      })
    });
  }

  render() {
    const { categories, data } = this.state;

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
              {categories.map(({ category, lastSortOrder }, index) => (
                <th key={index}>
                  {category}
                  <span
                    role='img'
                    aria-label='Expand'
                    onClick={() => this.sortData(category, lastSortOrder)}
                  >
                    {lastSortOrder === 'desc'
                      ? String.fromCodePoint(0x1F53D)
                      : String.fromCodePoint(0x1F53C)
                    }
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
