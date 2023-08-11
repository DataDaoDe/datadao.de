// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/svelte'

import Quote from './lib/components/theme/Quote.svelte'



test('shows quote when it is rendered in the document', () => {
  render(Quote, { index: 0})
  const quote = screen.getByText(/The only true wisdom is knowing you know nothing/i)
  expect(quote).toBeInTheDocument()
})