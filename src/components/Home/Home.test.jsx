import {render} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

test('displays Not found when courses are empty', async () => {
  const { queryByText } = render(<Home courses={null} isLoading={false} />);
  
  const notFoundText = queryByText(/NotFound/i);

  expect(notFoundText).toBeVisible();
});