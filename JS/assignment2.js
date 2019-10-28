for ( var i = 1; i <= 100; i++ )
{
  if ( i%4 === 0 && i%10 === 0 )
  {
    console.log( i + " TenFour" );
  }
  else if ( i%4 === 0 ) 
  {
    console.log(i+ " Four" );
  }
  else if ( i%10 === 0 ) 
  {
    console.log(i+ " Ten" );
  }
  else
  {
    console.log(i);
  }
}
