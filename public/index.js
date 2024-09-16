const _ALPHABET = 'abcdefghijklmnopqrstuv1234567890-_' ;
const _ID_LENGTH = 6 ;
const _UNFILLED_FIELD = 0xdeadbeef ;

let assignments_container = document.getElementById( 'assignments' ) ;
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

const is_null = ( x ) => x !== undefined && x !== null

function create_element( element, classes, id ) 
{
    let result = document.createElement( element ) ;

    if ( ! is_null( classes ) )
        result.className = classes;

    if ( ! is_null( id ) )
        result.id = id ;

    return result ;
}

function create_div( classes, id ) 
{
    return create_element( 'div', classes, id ) ;
}

function create_span( classes, id )
{
    return create_element( 'span', classes, id ) ;
}

function create_assignment()
{
    let e_assn_due = create_span( 'assn-due' ) ;
    let e_assn_name = create_span( 'assn-name' ) ;
    let e_assn_class = create_span( 'assn-class' ) ;
    let e_card = create_div( 'card' ) ;
    e_card.appendChild( e_assn_due ) ;
    e_card.appendChild( e_assn_name ) ;
    e_card.appendChild( e_assn_class ) ;
    

    let e_assn_link = create_element( 'a', 'assn-link' ) ;
    let e_break = create_element( 'br' ) ;
    let e_notes = create_span() ;
    let e_dropdown_subc = create_div() ;
    let e_dropdown = create_div( 'dropdown' ) ;
    e_dropdown_subc.appendChild( e_assn_link ) ; 
    e_dropdown_subc.appendChild( e_break ) ;
    e_dropdown_subc.appendChild( e_notes ) ;
    e_dropdown.appendChild( e_dropdown_subc ) ;

    let e_assn = create_div( 'assignment', generate_id() ) ;
    e_assn.appendChild( e_card ) ;
    e_assn.appendChild( e_dropdown ) ;

    return e_assn ;
}

