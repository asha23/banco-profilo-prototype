/* Created by Ash Whiting */

$(document).ready(function() {
    // Slideshow
    var slideshow = $('#slideshow');

    slideshow.cycle({ 
        fx:     'fade', 
        speedIn:  1000, 
        timeout: 5000,
        pager:  '#news-item-pager-buttons',
        sync: false
    });
    
    // create a new set of scroll animations.
    // This is based on Superscrollerama 
    
   var controller = $.superscrollorama({
        triggerAtCenter: true,
        playoutAnimations: true
    });
    
    controller.addTween(
        '.scroll-button',
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.sb-cont'), .5, {css:{opacity: 1}, immediateRender:true}, {css:{opacity: 0}})
        ]),
        0 // scroll duration of tween
    );

    controller.addTween(
        '.animation-slides1',
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.left-1'), .5, {css:{left: -200}, immediateRender:true, ease:Quad.easeInOut}, {css:{left: 0}}),
            TweenMax.fromTo($('.right-1'), .5, {css:{right: -200}, immediateRender:true, ease:Quad.easeInOut}, {css:{right: 0}}),
            TweenMax.fromTo($('.left-1'), .5, {css:{opacity: 0}, immediateRender:true}, {css:{opacity: 1}}),
            TweenMax.fromTo($('.right-1'), .5, {css:{opacity: 0}, immediateRender:true}, {css:{opacity: 1}})
        ]),
        0 // scroll duration of tween
    );
    
    controller.addTween(
        '.animation-slides2',
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.left-2'), .5, {css:{left: -200}, immediateRender:true, ease:Quad.easeInOut}, {css:{left: 0}}),
            TweenMax.fromTo($('.right-2'), .5, {css:{right: -200}, immediateRender:true, ease:Quad.easeInOut}, {css:{right: 0}}),
            TweenMax.fromTo($('.left-2'), .5, {css:{opacity: 0}, immediateRender:true}, {css:{opacity: 1}}),
            TweenMax.fromTo($('.right-2'), .5, {css:{opacity: 0}, immediateRender:true}, {css:{opacity: 1}})
        ]),
        0 // scroll duration of tween
    );
    
    controller.addTween(
        '.animation-slides3',
        (new TimelineLite())
        .append([
            TweenMax.fromTo($('.left-3'), .5, {css:{left: -200}, immediateRender:true, ease:Quad.easeInOut}, {css:{left: 0}}),
            TweenMax.fromTo($('.right-3'), .5, {css:{right: -200}, immediateRender:true, ease:Quad.easeInOut}, {css:{right: 0}}),
            TweenMax.fromTo($('.left-3'), .5, {css:{opacity: 0}, immediateRender:true}, {css:{opacity: 1}}),
            TweenMax.fromTo($('.right-3'), .5, {css:{opacity: 0}, immediateRender:true}, {css:{opacity: 1}})
        ]),
        0 // scroll duration of tween
    );
   
});