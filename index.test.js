const subtract = require( './index' )
test( 'subtracts 2-1 to equal 1', () =>
{
  expect( subtract( 1, 2 ) ).toBe( 1 );
} );