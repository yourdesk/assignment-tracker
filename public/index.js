const _ALPHABET = 'abcdefghijklmnopqrstuv1234567890-_' ;
const _ID_LENGTH = 6 ;

let create_assignment_button = document.getElementById('create-assignments') ;
let assignments = [] ;

function rand_int( min, max ) 
{
    return Math.floor( Math.random() * ( max - min + 1 ) + min ) ;
}

function choice( array )
{
    array[ rand_int( 0, array.length ) ] ;
}

function rand_string( string, choices ) 
{
    let result = "" ;
    for ( let i = 0 ; i < choices ; i++ )
    {
        result += choice( string ) ;
    }

    return result ;
}

const generate_id = () => rand_string( _ALPHABET, _ID_LENGTH ) ;

