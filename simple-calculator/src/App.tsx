import { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  // state for the display for the buttons
  const [display, setDisplay] = useState({
    current: '0',
    total: '0',
    // use initial to remove zero
    isInitial: true,
    preOp: '',
  });
  const handleNumberClick = (value: string): void => {
    let newValue: string = value;
    if (!display.isInitial) {
      newValue = display.current + value;
    }

    setDisplay({
      current: newValue,
      total: display.total,
      isInitial: false,
      preOp: display.preOp,
    });
  };
  const handleOperatorClick = (operator: string) => {
    const total: number = doCalculation();

    setDisplay({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: operator,
    });
  };
  // for the display
  const renderDisplay = (): string => {
    return display.current;
  };
  const doCalculation = (): number => {
    let total = parseInt(display.total);
    switch (display.preOp) {
      case '+':
        total += parseInt(display.current);
        break;
      case '-':
        total -= parseInt(display.current);
        break;
      case '*':
        total *= parseInt(display.current);
        break;
      case '/':
        total /= parseInt(display.current);
        break;
      default:
        total = parseInt(display.current);
    }
    return total;
  };

  const handleClear = () => {
    setDisplay({
      current: '0',
      total: '0',
      // use initial to remove zero
      isInitial: true,
      preOp: '',
    });
  };
  return (
    <>
      <div className='app-container'>
        <div className='calculator'>
          <div className='display'>{renderDisplay()}</div>
          <CalcButton className='' value='7' onClick={handleNumberClick} />
          <CalcButton className='' value='8' onClick={handleNumberClick} />
          <CalcButton className='' value='9' onClick={handleNumberClick} />
          <CalcButton
            className='operator'
            value='/'
            onClick={handleOperatorClick}
          />

          <CalcButton className='' value='4' onClick={handleNumberClick} />
          <CalcButton className='' value='5' onClick={handleNumberClick} />
          <CalcButton className='' value='6' onClick={handleNumberClick} />
          <CalcButton
            className='operator'
            value='*'
            onClick={handleOperatorClick}
          />

          <CalcButton className='' value='1' onClick={handleNumberClick} />
          <CalcButton className='' value='2' onClick={handleNumberClick} />
          <CalcButton className='' value='3' onClick={handleNumberClick} />
          <CalcButton
            className='operator'
            value='-'
            onClick={handleOperatorClick}
          />

          <CalcButton className='' value='C' onClick={handleClear} />
          <CalcButton className='' value='0' onClick={handleNumberClick} />
          <CalcButton className='' value='=' onClick={handleOperatorClick} />
          <CalcButton
            className='operator'
            value='+'
            onClick={handleOperatorClick}
          />
        </div>
      </div>
    </>
  );
};

interface CalcButtonProps {
  value: string;
  className: string;
  onClick: any;
}

// reusable component
const CalcButton: React.FC<CalcButtonProps> = ({
  value,
  className,
  onClick,
}) => {
  return (
    <button className={className} onClick={() => onClick(value)}>
      {value}
    </button>
  );
};

export default App;
