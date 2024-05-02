'use strict';

const openTab = tabId => {
    let tabContents = document.getElementsByClassName('content-item');
    // Hide all tab contents
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    let tabs = document.getElementsByClassName('btn-tab');
    // Remove 'active-tab' class from all tabs
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }

    // Show the selected tab content and mark it as active
    document.getElementById(tabId).style.display = 'block';
    document.querySelector('[onclick="openTab(\'' + tabId + '\')"]').classList.add('active');
}