import $ from 'jquery';
import Quill from 'quill';
import PerfectScrollbar from 'perfect-scrollbar';

export default function () {
    // 'use strict'

    // // UI INTERACTION
    $('.mail-group-body .media').on('click', function (e) {

    //   // removing previous selected item
    //   $('.mail-group .selected').removeClass('selected');

    //   $(this).addClass('selected');
    //   $(this).removeClass('unread');

    //   $('.mail-content-header').removeClass('d-none');
    //   $('.mail-content-body').removeClass('d-none');

      // if (window.matchMedia('(max-width: 1199px)').matches) {
      //   $('body').addClass('app-mail mail-content-show');
      //   $('#mailSidebar').removeClass('d-none');
      //   $('.hamburger').addClass('d-none');
      // }

      // if (window.matchMedia('(max-width: 768px)').matches) {
      //   $('#mailSidebar').removeClass('d-md-none');
      //   $('#mainMenuOpen').removeClass('d-md-flex');
      // }
    })



    // $('#mailComposeBtn').on('click', function () {
    //   $('#mailCompose').addClass('show');
    // })

    // $('#mailComposeClose').on('click', function (e) {
    //   e.preventDefault()

    //   if ($('#mailCompose').hasClass('minimize') || $('#mailCompose').hasClass('shrink')) {
    //     $('#mailCompose').addClass('d-none');

    //     setTimeout(function () {
    //       $('#mailCompose').attr('class', 'mail-compose');
    //     }, 500);

    //   } else {
    //     $('#mailCompose').removeClass('show');
    //   }
    // })

    // $('#mailComposeShrink').on('click', function (e) {
    //   e.preventDefault()
    //   $('#mailCompose').toggleClass('shrink')
    //   $('#mailCompose').removeClass('minimize')
    // })

    // $('#mailComposeMinimize').on('click', function (e) {
    //   e.preventDefault()
    //   $('#mailCompose').toggleClass('minimize')
    // })

    // $('#mailSidebar').on('click', function (e) {
    //   e.preventDefault();

    //   if ($('body').hasClass('mail-content-show')) {
    //     $('body').removeClass('mail-content-show');
    //     $('body').removeClass('mail-sidebar-show');
    //   } else if ($('body').hasClass('mail-sidebar-show')) {
    //     $('body').addClass('show-aside');
    //   } else{
    //     $('body').addClass('mail-sidebar-show');

    //     $('#mailSidebar').addClass('d-none');
    //     $('#mainMenuOpen').removeClass('d-none');

    //   } 

    //   if (window.matchMedia('(min-width: 768px)').matches) {
    //     $('#mainMenuOpen').addClass('d-none');
    //     $('#mailSidebar').removeClass('d-none');
    //   }
    // })


    // $('.aside-menu-link').on('click', function(e){
    //   e.preventDefault();

    //   if (window.matchMedia('(max-width: 991px)').matches) {
    //   $('#mainMenuOpen').addClass('d-none');
    //   $('#mailSidebar').removeClass('d-none');
    //   }
    // });

    // if (window.matchMedia('(max-width: 991px)').matches) {
    //   $('#mainMenuOpen').addClass('d-none');
    //   $('#mailSidebar').removeClass('d-none');

    //   // $('body').addClass('filemgr-sidebar-show');
    // }


    // $(document).on('click touchstart', function (e) {
    //   e.stopPropagation();
    //   // var el = $(e.target);
    //   // if( el.is('.sidebar-toggler') || el.parents('.sidebar-toggler:eq(0)').length > 0 ) {
    //   //   return;
    //   // }
    //   // closing of sidebar menu when clicking outside of it
    //   if(!$(e.target).closest('.burger-menu').length) {
    //     var sb = $(e.target).closest('.mail-sidebar').length;
    //     if(!sb) {
    //       $('body').removeClass('mail-sidebar-show');

    //       $('#mailMenu').removeClass('d-none');
    //       $('#mainMenuOpen').addClass('d-none');
    //     }
    //   }
    // });

    // $(document).on('click touchstart', function(e){
    //   e.stopPropagation();
    //   // closing of sidebar menu when clicking outside of it
    //   if(!$(e.target).closest('.burger-menu').length) {
    //     var sb = $(e.target).closest('.filemgr-sidebar').length;
    //     if(!sb) {
    //       $('body').removeClass('filemgr-sidebar-show');
  
    //       $('#mailMenu').removeClass('d-none');
    //       $('#mainMenuOpen').addClass('d-none');
    //     }
    //   }
    // });

    // closing mail content in lg breakpoint only
    // $('#mailContentClose').on('click', function (e) {
    //   e.preventDefault()
    //   $('body').removeClass('mail-content-show');
    // })
    // // set one mail item as selected in xl breakpoint by default
    // // for demo purpose only
    // if (window.matchMedia('(min-width: 1200px)').matches) {
    //   $('.mail-group-body .media:nth-of-type(2)').addClass('selected');

    //   $('.mail-content-header').removeClass('d-none');
    //   $('.mail-content-body').removeClass('d-none');
    // }

  }