$(document).ready(function() {
    // Function to handle the mobile menu toggle
    function handleMobileMenuToggle() {
      const navbarToggler = $('.navbar-toggler');
      const navbarMenu = $('#navbarMenu');
  
      navbarToggler.on('click', function() {
        navbarMenu.toggleClass('collapse');
      });
  
      // Handle click event on navbar links to close the menu when a link is clicked
      $('.navbar-nav .nav-link').on('click', function() {
        navbarMenu.addClass('collapse');
      });
    }
  
    // Function to handle the collapsible sections in mobile view
    function handleMobileCollapsibleSections() {
      // Handle click event on section titles in mobile view
      $('.section-title').on('click', function() {
        const section = $(this).closest('.section');
  
        // Toggle the selected section content and hide others
        section.toggleClass('selected');
        section.siblings().removeClass('selected');
        $('.section-content').removeClass('show');
        section.find('.section-content').addClass('show');
      });
    }
  
    // Call the functions to handle mobile menu toggle and collapsible sections
    handleMobileMenuToggle();
    handleMobileCollapsibleSections();
  });
  

  
  