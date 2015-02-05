
// Module /chat/
// Provides chat slider capability
//
var chat = (function( $ ) {
    // Module scope variables
    var
    // Set constants
        configMap = {
            extended_height: 434,
            extended_title: 'Click to retract',
            retracted_height: 16,
            retracted_title: 'Click to expand',
            template_html: '<div class = "chat-slider"></div>'
        },
    // Declare all other module scope variables
        $chatSlider,
        toggleSlider, onClickSlider, initModule;

    // DOM method /toggleSlider/
    // alternates slider height
    //
    toggleSlider = function() {
        var
            slider_height = $chatSlider.height();

        // extend slider if fully retracted
        if ( slider_height === configMap.retracted_height ) {
            $chatSlider.animate({ height : configMap.extended_height }).attr( 'title', configMap.extended_title );
            return true;
        }
        // retract slider if fully extended
        else if ( slider_height === configMap.extended_height ) {
            $chatSlider.animate({ height : configMap.retracted_height }).attr( 'title', configMap.retracted_title)
        }
        // do not take action if slider is in transit
        return false;
    };

    // Event Handler /onClickSlider/
    // receives click event and calls toggleSlider
    //
    onClickSlider = function ( event ) {
        toggleSlider();
        return false;
    };

    // Public method /initModule/
    // sets initial state and provides feature
    //
    initModule = function ( $container ) {
        // render HTML
        $container.html( configMap.template_html );

        $chatSlider = $container.find( '.chat-slider' );
        // initialize slider height and title
        // bind the user click event to the event handler
        //
        $chatSlider.attr( 'title', configMap.retracted_title ).click( onClickSlider );

        return true
    };

    return { initModule : initModule };



} ( jQuery ));
// Start chat once DOM is ready
jQuery(document).ready(
    function() { chat.initModule( jQuery('#chat' ) ); }
);

