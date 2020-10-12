import React from 'react';

import './Grid.css';

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
    const { categories, data } = this.state;

    this.setState({
      categories: categories.map(item => {
        if (item.category === category) {
          return {
            category: category,
            lastSortOrder: lastSortOrder === 'desc' ? 'asc' : 'desc'
          }
        }
        return item;
      }),
      data: [...data].sort((a, b) => {
        if (a[category] < b[category]) return lastSortOrder === 'desc' ? -1 : 1;
        if (a[category] > b[category]) return lastSortOrder === 'desc' ? 1 : -1;
        return 0;
      })
    });
  }

  filterData(keyword) {
    this.setState({
      data: [...this.data].filter(item => {
        for (const property in item) {
          if (`${item[property]}`.includes(keyword)) return true;
        }
        return false;
      })
    })
  }

  render() {
    const { categories, data } = this.state;

    return (
      <div className='Grid' >
        <input
          className='Grid__keyword-input'
          type='text'
          placeholder='Please enter keywords'
          onKeyUp={e => { this.filterData(e.target.value) }}
        />
        <table className='Grid__data-table'>
          <thead className='data-table__table-head'>
            <tr className='table-head__row'>
              {categories.map(({ category, lastSortOrder }, index) => (
                <th
                  key={index}
                  className='table-head__column'
                >
                  {category}
                  <span
                    role='img'
                    className='table-head__asc-desc-button'
                    aria-label='Expand'
                    onClick={() => this.sortData(category, lastSortOrder)}
                  >
                    {lastSortOrder === 'desc'
                      ? '▲'
                      : '▼'
                    }
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='data-table__table-body'>
            {data.map(({ name, age, weight }, index) => (
              <tr
                key={index}
                className='table-body__row'
              >
                <td className='table-body__column column-name'>{name}</td>
                <td className='table-body__column'>{age}</td>
                <td className='table-body__column'>{weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Grid;
