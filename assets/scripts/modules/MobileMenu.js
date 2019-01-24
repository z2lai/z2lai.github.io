import $ from 'jquery';

// Javascript organisation: Need to separate each action into it's own container
class MobileMenu {
    constructor () {    
        // 1) Selecting elements from DOM
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }

    events () {     
        // 2) Adding event handlers to elements
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        // 3) Defining functionality of event handlers
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        console.log(this.menuContent);
    }
}

export default MobileMenu;