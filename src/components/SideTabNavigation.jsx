import React, { useEffect,useState } from "react";

function SideTabNavigation (){
    

    return ( 
            <div>
  
<div class="frontend-kit-example_side-navigation">
  <nav
    class="m-side-navigation -contrast"
    aria-label="Side Navigation"
    aria-hidden="false"
  >
    <div class="m-side-navigation__header">
      <div class="m-side-navigation__header__label -size-l highlight">
        App name
      </div>
      <button
        type="button"
        class="
          a-button a-button--integrated
          -without-label
          m-side-navigation__header__trigger
          -open
        "
        aria-haspopup="false"
        aria-label="Open Side Navigation"
        tabindex="0"
      >
        <i
          class="a-icon a-button__icon boschicon-bosch-ic-list-view-mobile"
          title="Lorem Ipsum"
        ></i>
      </button>
      <button
        type="button"
        class="
          a-button a-button--integrated
          -without-label
          m-side-navigation__header__trigger
          -close
        "
        aria-haspopup="false"
        aria-label="Close Side Navigation"
        tabindex="-1"
      >
        <i
          class="a-icon a-button__icon boschicon-bosch-ic-close"
          title="Lorem Ipsum"
        ></i>
      </button>
    </div>
    <ul class="m-side-navigation__menuItems" role="menubar">
      <li class="m-side-navigation__menuItem" role="none">
        <a href="#" role="menuitem" class="m-side-navigation__link">
          <i class="a-icon boschicon-bosch-ic-login" title="Login"></i>
          <span class="m-side-navigation__label">Login</span>
        </a>
      </li>
      <li class="m-side-navigation__menuItem" role="none">
        <a href="#" role="menuitem" class="m-side-navigation__link">
          <i class="a-icon boschicon-bosch-ic-chat" title="Contact"></i>
          <span class="m-side-navigation__label">Contact</span>
        </a>
      </li>
      <li class="m-side-navigation__menuItem" role="none">
        <button type="button" class="m-side-navigation__group">
          <i class="a-icon boschicon-bosch-ic-battery-0" title="Group"></i>
          <span class="m-side-navigation__label">Group</span>
          <i class="a-icon arrow boschicon-bosch-ic-down" title="down"></i>
        </button>
        <ul class="m-side-navigation__menuSubitems" role="menu">
          <li class="m-side-navigation__menuSubitem" role="none">
            <a
              href="#"
              role="menuitem"
              class="m-side-navigation__link"
              tabindex="-1"
            >
              <span class="m-side-navigation__label">label 1</span>
            </a>
          </li>
          <li class="m-side-navigation__menuSubitem -disabled" role="none">
            <a
              href="#"
              role="menuitem"
              class="m-side-navigation__link"
              aria-disabled="true"
              tabindex="-1"
            >
              <span class="m-side-navigation__label">label 2</span>
            </a>
          </li>
          <li class="m-side-navigation__menuSubitem" role="none">
            <a
              href="#"
              role="menuitem"
              class="m-side-navigation__link"
              tabindex="-1"
            >
              <span class="m-side-navigation__label">label 3</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="m-side-navigation__menuItem -disabled" role="none">
        <button type="button" class="m-side-navigation__group" tabindex="-1">
          <i
            class="a-icon boschicon-bosch-ic-bicycle-e"
            title="Group 2 with some extended labels"
          ></i>
          <span class="m-side-navigation__label">
            Group 2 with some extended labels
          </span>
          <i class="a-icon arrow boschicon-bosch-ic-down" title="down"></i>
        </button>
        <ul class="m-side-navigation__menuSubitems" role="menu">
          <li class="m-side-navigation__menuSubitem" role="none">
            <a
              href="#"
              role="menuitem"
              class="m-side-navigation__link"
              tabindex="-1"
            >
              <span class="m-side-navigation__label">label 1</span>
            </a>
          </li>
          <li class="m-side-navigation__menuSubitem" role="none">
            <a
              href="#"
              role="menuitem"
              class="m-side-navigation__link"
              tabindex="-1"
            >
              <span class="m-side-navigation__label">label 2</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="m-side-navigation__menuItem" role="none">
        <button type="button" class="m-side-navigation__group">
          <i
            class="a-icon boschicon-bosch-ic-agility"
            title="Group 3 with some extended labels"
          ></i>
          <span class="m-side-navigation__label">
            Group 3 with some extended labels
          </span>
          <i class="a-icon arrow boschicon-bosch-ic-down" title="down"></i>
        </button>
        <ul class="m-side-navigation__menuSubitems" role="menu">
          <li class="m-side-navigation__menuSubitem" role="none">
            <a
              href="#"
              role="menuitem"
              class="m-side-navigation__link"
              tabindex="-1"
            >
              <span class="m-side-navigation__label">label 1</span>
            </a>
          </li>
          <li class="m-side-navigation__menuSubitem" role="none">
            <a
              href="#"
              role="menuitem"
              class="m-side-navigation__link"
              tabindex="-1"
            >
              <span class="m-side-navigation__label">label 2</span>
            </a>
          </li>
        </ul>
      </li>
      <li class="m-side-navigation__menuItem" role="none">
        <a href="#" role="menuitem" class="m-side-navigation__link">
          <i class="a-icon boschicon-bosch-ic-atom" title="atom"></i>
          <span class="m-side-navigation__label">atom</span>
        </a>
      </li>
      <li class="m-side-navigation__menuItem -disabled" role="none">
        <a
          href="#"
          role="menuitem"
          class="m-side-navigation__link"
          tabindex="-1"
        >
          <i class="a-icon boschicon-bosch-ic-fax" title="fax"></i>
          <span class="m-side-navigation__label">fax</span>
        </a>
      </li>
    </ul>
  </nav>
  <div
    
  >
    {/* <button
      type="button"
      class="a-button a-button--primary -without-icon"
      data-frok-action="show"
    >
      <div class="a-button__label">click me</div>
    </button> */}
  </div>
</div>
            </div>
    )
}
export  default SideTabNavigation;