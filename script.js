const domElements = {
    mobileHeader: document.querySelector('.mobile-header-open'),
    mobileBody: document.querySelector('.mobile-header-body'),
    reveal: document.querySelectorAll('.reveal'),
    mobileProducts: document.querySelector('.mobile-products-open'),
    mobileUse: document.querySelector('.mobile-use-open'),
    mobileCompany: document.querySelector('.mobile-company-open'),
    mobileEnd: document.querySelector('.mobile-header-end'),
    mobileItem: document.querySelectorAll('.mobile-header-item'),
    mobileTop: document.querySelectorAll('.mobile-top-con'),
    back: document.querySelectorAll('.back'),
    close: document.querySelector('.close'),
    mobileItemOpen: document.querySelectorAll('.mobile-item-open'),
    mobileToggle: document.querySelector('.mobile-toggle'),
    mainLink: document.querySelectorAll('.main-link'),
    productsD: document.querySelector('.products-dropdown'),
    useCasesD: document.querySelector('.use-cases-dropdown'),
    companyD: document.querySelector('.company-dropdown'),
    dropdown: document.querySelectorAll('.dropdown'),
    docBtn: document.querySelectorAll('.dev-link'),
    auth: document.querySelector('.auth-endpoint'),
    ga: document.querySelector('.ga-endpoint'),
    gt: document.querySelector('.gt-endpoint')
}

domElements.mobileToggle.addEventListener('click', () => {
    domElements.mobileHeader.classList.add('show');
});

domElements.close.addEventListener('click', () => {
    domElements.mobileHeader.classList.remove('show');
});


domElements.mainLink.forEach(item => {
    item.addEventListener('mouseover', () => {
        if(item.closest('.products-con')) {
            domElements.productsD.classList.add('show');
        }

        else if(item.closest('.use-cases')) {
            domElements.useCasesD.classList.add('show');
        }

        else if(item.closest('.company-con')) {
            domElements.companyD.classList.add('show');
        }
    })
});


domElements.dropdown.forEach(item => {
    item.addEventListener('mouseleave', () => {
        if(item.closest('.products-con')) {
            domElements.productsD.classList.remove('show');
        }

        else if(item.closest('.use-cases')) {
            domElements.useCasesD.classList.remove('show');
        }

        else if(item.closest('.company-con')) {
            domElements.companyD.classList.remove('show');
        }
    })
});


domElements.reveal.forEach(item => {
    item.addEventListener('click', () => {
        domElements.mobileEnd.classList.add('hide');
        domElements.mobileItem.forEach(item => {
            item.classList.add('hide');
        })
        domElements.mobileTop.forEach(item => {
            item.classList.add('hide');
        })

        if (item.closest('.mobile-products')) {
            domElements.mobileProducts.classList.add('show');
        }

        else if (item.closest('.mobile-use-cases')) {
            domElements.mobileUse.classList.add('show');
        }

        else if (item.closest('.mobile-company')) {
            domElements.mobileCompany.classList.add('show');
        }
    })
});

domElements.back.forEach(item => {
    item.addEventListener('click', () => {
        domElements.mobileEnd.classList.remove('hide');
        domElements.mobileItem.forEach(item => {
            item.classList.remove('hide');
        })
        domElements.mobileTop.forEach(item => {
            item.classList.remove('hide');
        });

        if(item.closest('.mobile-use-open')) {
            domElements.mobileUse.classList.remove('show');
        }

        else if (item.closest('.mobile-products-open')) {
            domElements.mobileProducts.classList.remove('show');
        }

        else if (item.closest('.mobile-company-open')) {
            domElements.mobileCompany.classList.remove('show');
        }
    })
});

domElements.docBtn.forEach(item => {
    item.addEventListener('click', () => {
        if(item.closest('.auth-btn')) {
            item.classList.add('active');
            domElements.gt.classList.remove('show');
            domElements.ga.classList.remove('show');
            domElements.auth.classList.add('show');
        }

        else if(item.closest('.ga-btn')) {
            item.classList.add('active');
            domElements.auth.classList.remove('show');
            domElements.gt.classList.remove('show');
            domElements.ga.classList.add('show');
        }

        else if (item.closest('.gt-btn')) {
            item.classList.add('active');
            domElements.ga.classList.remove('show');
            domElements.auth.classList.remove('show');
            domElements.gt.classList.add('show');
        }
    })
})