for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i + " TenFour" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i+ " Ten" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i+ " Four" );
  }
  else
  {
    console.log(i);
  }
