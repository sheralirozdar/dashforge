import $ from 'jquery'
import PerfectScrollbar from 'perfect-scrollbar'

export default function(){

  'use strict'

  
  // $('#mailSidebar').on('click', function(e){

  //   e.preventDefault()

  //   if (window.matchMedia('(max-width: 1199px)').matches) {
  //     $('body').removeClass('app-mail mail-content-show');
  //     $('#mailSidebar').addClass('d-none');
  //     $('.hamburger').removeClass('d-none');
  //   }

  // });
  
  // window.$('[data-toggle="tooltip"]').tooltip()

  // const asideBody = new PerfectScrollbar('.aside-body', {
  //   suppressScrollX: true
  // });

  // $('.aside-menu-link').on('click', function(e){
  //   e.preventDefault();

  //   $('#mainMenuOpen').addClass('d-none');
  //   $('#mailSidebar').removeClass('d-none');
  // });

  // if($('.aside-backdrop').length === 0) {
  //   $('body').append('<div class="aside-backdrop"></div>');
  // }

  // var mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)');

  // function doMinimize(e) {
  //   if (e.matches) {
  //     $('.aside').addClass('minimize');
  //   } else {
  //     $('.aside').removeClass('minimize');
  //   }

  //   // asideBody.update()
  // }

  // mql.addListener(doMinimize);
  // doMinimize(mql);

  // $('.aside-menu-link').on('click', function(e){

  //   e.preventDefault()

  //   if(window.matchMedia('(min-width: 992px)').matches) {
  //     $(this).closest('.aside').toggleClass('minimize');
  //   } else {
  //     $('body').toggleClass('show-aside');
  //   }

  //   // asideBody.update()
  // });

  // $('.nav-item-apps').on('click', function(e){
    
  //   if(window.matchMedia('(min-width: 992px)').matches) {
  //     $('aside').addClass('minimize');
  //   }else {
  //     $('body').toggleClass('show-aside');
  //   }
  //   // asideBody.update()
  // })

  // $('.nav-aside .with-sub').on('click', '.nav-link', function(e){
  //   e.preventDefault();

  //   $(this).parent().siblings().removeClass('show');
  //   $(this).parent().toggleClass('show');

  //   // asideBody.update()
  // })

  // $('body').on('mouseenter', '.minimize .sidebar-footer', function(e){
  //   $(this).parent().addClass('maximize');
  // })

  // $('body').on('mouseleave', '.minimize .sidebar-footer', function(e){
  //   $(this).parent().removeClass('maximize');

  //   // asideBody.update()
  // })

  // $('body').on('mouseenter', '.minimize .aside-body', function(e){
  //   $(this).parent().addClass('maximize');
  // })

  // $('body').on('mouseleave', '.minimize .aside-body', function(e){
  //   $(this).parent().removeClass('maximize');

  //   // asideBody.update()
  // })

  // $('body').on('click', '.aside-backdrop', function(e){
  //   $('body').removeClass('show-aside');
  // })
}
