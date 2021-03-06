import CommentsCounter from './CommentsCounter.svelte';
import { render } from '@testing-library/svelte';

describe('CommentsCounter Component', () => {
  it('should render', () => {
    const { getByText } = render(CommentsCounter, {
      comments: [
        {
          status: 'active',
          identities: null,
        },
      ],
    });

    expect(getByText('1')).toBeInTheDocument();
  });
});
