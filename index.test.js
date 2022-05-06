const divide = require( './index' )
test( 'divides x/y to equal 2', () =>
{
  expect( divide( 6, 3 ) ).toBe( 2 );
} )