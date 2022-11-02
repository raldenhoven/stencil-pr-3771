# stencil-pr-3771

## Installation
* `cd my-library`
* `yarn install`
* `yarn build`
* `cd ../my-example`
* `yarn install`
* `yarn test`

## Bug: Testing

The following console error should be shown:
`Error: Could not parse CSS stylesheet`

## Bug: Browser

run `yarn dev` in the `my-example` directory and go to the created server.
When you inspect the html you will see this html attribute
`<style data-styles="">{visibility:hidden}.hydrated{visibility:inherit}</style>`
Containing the css without a selector.

## Cause
Calling defineCustomElements multiple times injects css without a selector.
