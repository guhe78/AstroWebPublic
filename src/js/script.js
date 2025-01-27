import Swup from 'swup';
import SwupA11yPlugin from '@swup/a11y-plugin';
import SwupHeadPlugin from '@swup/head-plugin';
import SwupScrollPlugin from '@swup/scroll-plugin';

// Swup
const swup = new Swup({
   plugins: [
      new SwupA11yPlugin(),
      new SwupHeadPlugin(),
      new SwupScrollPlugin(),
   ],
});
