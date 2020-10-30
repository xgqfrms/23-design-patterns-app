"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-10-01
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 * @best_solutions
 *
 */

const log = console.log;

// const [state, setState] = useState(initialState);

// setState(newState);

// setState(prevState => newState)

function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}

// class components 中 setState 方法, 会自动合并更新后的对象
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key1: 1,
      key2: 2,
      key3: 3,
    };
    // this.updateKey = this,this.updateKey.bind(this);
  }
  // updateKey(key, value) {
  //   this.setState({
  //     [key]: value,
  //   });
  // }
  updateKey = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  render() {
    const {
      key1,
      key2,
      key3,
    } = this.state;
    return (
      <div>
        <button className="app-btn" onClick={() => this.updateKey(`key1`, key1 + 1)}>
          {key1}
        </button>
        <button className="app-btn" onClick={() => this.updateKey(`key2`, key2 + 1)}>
          {key2}
        </button>
        <button className="app-btn" onClick={() => this.updateKey(`key3`, key3 + 1)}>
          {key3}
        </button>
      </div>
    );
  }
}


// 多个属性的对象,手动 merge 合并
setState(prevState => {
  // return Object.assign({}, prevState, updatedValues);
  // return Object.assign(prevState, updatedValues);
  return {
    ...prevState,
    ...updatedValues,
  };
});
// useReducer 更适合这种场景 ✅


// lazy 初始化

const [state, setState] = useState(() => {
  // 初始值仅仅使用一次, 使用函数, 仅在初始渲染时执行
  const initialState = someExpensiveComputation(props);
  return initialState;
});


