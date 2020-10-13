import React from 'react';

import './Grid.css';

const CATEGORIES = [
  'name',
  'age',
  'weight'
];
const ASCENDING = 'asc';
const DESCENDING = 'desc';

class Grid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: CATEGORIES.map(category => (
        new TableCategory(category)
      )),
      data: [
        new TableItem('jack', 20, 70),
        new TableItem('lee', 30, 88),
        new TableItem('chuck', 17, 75),
        new TableItem('ralph', 41, 69),
        new TableItem('mark', 25, 80)
      ]
    };
  }

  sortData() {
    const { categories, data } = this.state;

    categories.forEach(({ category, sortOrder, selected }) => {
      if (selected) {
        this.setState({
          data: [...data].sort((a, b) => {
            if (a[category] < b[category]) {
              return sortOrder === DESCENDING ? 1 : -1;
            }
            if (a[category] > b[category]) {
              return sortOrder === DESCENDING ? -1 : 1;
            }
            return 0;
          })
        });
      }
    })
  }

  filterData(keyword) {
    this.setState({
      data: [...this.state.data].map(item => {
        for (const property in item) {
          if (`${item[property]}`.includes(keyword)) {
            return {
              ...item,
              visible: true
            };
          }
        }
        return {
          ...item,
          visible: false
        };
      })
    })
  }

  handleSort(category) {
    this.setState({
      categories: this.state.categories.map(item => {
        if (item.category === category) {
          return {
            category,
            sortOrder: item.sortOrder === DESCENDING
              ? ASCENDING
              : DESCENDING,
            selected: true
          };
        }
        return {
          ...item,
          selected: false
        };
      })
    });

    setTimeout(() => {
      this.sortData();
    }, 0);
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
              {categories.map(({ category, sortOrder }, index) => (
                <th
                  key={index}
                  className='table-head__column'
                >
                  {category}
                  <span
                    role='img'
                    className='table-head__asc-desc-button'
                    aria-label='Expand'
                    onClick={() => this.handleSort(category)}
                  >
                    {sortOrder === DESCENDING
                      ? '▼'
                      : '▲'
                    }
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='data-table__table-body'>
            {data.map(({ name, age, weight, visible }, index) => (
              <tr
                key={index}
                className={`table-body__row${visible ? '' : ' hidden'}`}
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

class TableCategory {
  constructor(category) {
    this.category = category;
    this.sortOrder = null;
    this.selected = false;
  }
}

class TableItem {
  constructor() {
    [...arguments].forEach((arg, index) => {
      const category = CATEGORIES[index];
      this[category] = arg;
      this.visible = true;
    })
  }
}

export default Grid;
