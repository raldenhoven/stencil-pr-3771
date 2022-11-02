import {render, screen} from '@testing-library/react'
import App from './App';
import {defineCustomElements} from "my-library/loader";

describe("App", () => {
   let framgent: DocumentFragment;

   beforeEach(() => {
      defineCustomElements(window);
      const result = render(<App/>)
      framgent = result.asFragment();
   })

   it('works', () => {
      expect(framgent).toMatchSnapshot();
   });

   it('injects broken css', () => {
      expect(framgent).toMatchSnapshot();
   });
});
