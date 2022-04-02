import ResultBox from './ResultBox';
import { cleanup, getByTestId, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Commponent ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox amount={100} from="USD" to="PLN" />);
  });

  it('should run action callback with property value from PLN to USD', () => {
    
    const testCases = [
      { amount: '35', from: 'PLN', to: 'USD', result: 'PLN 35.00 = $10.00'},
      { amount: '70', from: 'PLN', to: 'USD', result: 'PLN 70.00 = $20.00' },
      { amount: '350', from: 'PLN', to: 'USD', result: 'PLN 350.00 = $100.00' },
      { amount: '23', from: 'PLN', to: 'USD', result: 'PLN 23.00 = $6.57' },
    ];

    for(const testObj of testCases){
      render(<ResultBox amount={parseInt(testObj.amount)} from={testObj.from} to={testObj.to}/>);

      const output = screen.getByTestId('result-box');
      expect(output).toHaveTextContent(testObj.result);

      cleanup();
    }
  });

  it('should run action callback with property value from USD to PlN', () => {
    
    const testCases = [
      { amount: '10', from: 'USD', to: 'PLN', result: '$10.00 = PLN 35.00'},
      { amount: '70', from: 'USD', to: 'PLN', result: '$70.00 = PLN 245.00' },
      { amount: '350', from: 'USD', to: 'PLN', result: '$350.00 = PLN 1,225.00' },
      { amount: '23', from: 'USD', to: 'PLN', result: '$23.00 = PLN 80.50' },
    ];

    for(const testObj of testCases){
      render(<ResultBox amount={parseInt(testObj.amount)} from={testObj.from} to={testObj.to}/>);

      const output = screen.getByTestId('result-box');
      expect(output).toHaveTextContent(testObj.result);

      cleanup();
    }
  });

  it('should run action callback with property value from USD to USD or PLN to PLN', () => {
    
    const testCases = [
      { amount: '10', from: 'USD', to: 'USD', result: '$10.00 = $10.00'},
      { amount: '70', from: 'USD', to: 'USD', result: '$70.00 = $70.00' },
      { amount: '100', from: 'PLN', to: 'PLN', result: 'PLN 100.00 = PLN 100.00' },
      { amount: '20', from: 'PLN', to: 'PLN', result: 'PLN 20.00 = PLN 20.00' },
    ];

    for(const testObj of testCases){
      render(<ResultBox amount={parseInt(testObj.amount)} from={testObj.from} to={testObj.to}/>);

      const output = screen.getByTestId('result-box');
      expect(output).toHaveTextContent(testObj.result);

      cleanup();
    }
  });

  it('should run action callback with property value is less than 0', () => {
    
    const testCases = [
      { amount: '-10', from: 'USD', to: 'USD', result: 'Wrong value'},
      { amount: '-70', from: 'USD', to: 'PLN', result: 'Wrong value' },
      { amount: '-100', from: 'PLN', to: 'USD', result: 'Wrong value' },
      { amount: '-20', from: 'PLN', to: 'PLN', result: 'Wrong value' },
    ];

    for(const testObj of testCases){
      render(<ResultBox amount={parseInt(testObj.amount)} from={testObj.from} to={testObj.to}/>);

      const output = screen.getByTestId('result-box');
      expect(output).toHaveTextContent(testObj.result);

      cleanup();
    }
  });


})