<?php

function Cool_scripts () {

    wp_enqueue_script( $handle:string, $src:string, $deps:array, $ver:string|boolean|null, $in_footer:boolean )
    add_action( 'wp_enqueue_scripts', 'cool_scripts');
}

