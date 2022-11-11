import { findClient } from './socket';

const findClientBtn = document.getElementById(
  'find-client-btn',
) as HTMLButtonElement;

findClientBtn.addEventListener('click', async () => {
  const client = findClient({
    // country: 'US',
  });

  // handle connections and else stuff
});
