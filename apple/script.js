// Sandvik Website JavaScript
// 简洁的交互效果

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initScrollEffects();
    initHoverEffects();
    initAccessibility();
});

// 导航栏滚动效果
function initNavigation() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
}

// 滚动触发的动画效果
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll('.link-item, .news-item, .event-item');
    
    animateElements.forEach(function(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 悬停效果增强
function initHoverEffects() {
    // 按钮悬停效果
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 4px 12px rgba(0, 102, 179, 0.2)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // 链接悬停效果
    const links = document.querySelectorAll('.link-arrow');
    links.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('::after');
            this.style.color = 'var(--hover-blue)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.color = 'var(--primary-blue)';
        });
    });
    
    // 新闻项悬停效果
    const newsItems = document.querySelectorAll('.news-item');
    newsItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(0, 102, 179, 0.05)';
            this.style.borderColor = 'var(--primary-blue)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.borderColor = 'var(--border-color)';
        });
    });
    
    // 事件项悬停效果
    const eventItems = document.querySelectorAll('.event-item');
    eventItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(0, 102, 179, 0.05)';
            this.style.borderColor = 'var(--primary-blue)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.borderColor = 'var(--border-color)';
        });
    });
}

// 无障碍功能
function initAccessibility() {
    // 键盘导航
    const focusableElements = document.querySelectorAll('a, button, input, select, textarea');
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // 为链接和按钮添加焦点样式
    focusableElements.forEach(function(element) {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-blue)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 加载更多功能
function initLoadMore() {
    const loadMoreButtons = document.querySelectorAll('.load-more');
    loadMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            this.textContent = '加载中...';
            this.disabled = true;
            
            // 模拟加载延迟
            setTimeout(() => {
                this.textContent = '加载更多';
                this.disabled = false;
                // 这里可以添加加载更多内容的逻辑
            }, 1500);
        });
    });
}

// 表单处理
function initForms() {
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 简单的表单验证
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(function(input) {
                if (!input.value.trim()) {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = 'var(--border-color)';
                }
            });
            
            if (isValid) {
                // 模拟表单提交
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                
                submitButton.textContent = '提交中...';
                submitButton.disabled = true;
                
                setTimeout(() => {
                    submitButton.textContent = '提交成功！';
                    setTimeout(() => {
                        submitButton.textContent = originalText;
                        submitButton.disabled = false;
                        form.reset();
                    }, 2000);
                }, 1500);
            }
        });
    });
}

// 响应式菜单
function initMobileMenu() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton && navLinks) {
        mobileMenuButton.addEventListener('click', function() {
            navLinks.classList.toggle('mobile-open');
            mobileMenuButton.classList.toggle('active');
        });
    }
}

// 图片懒加载
function initLazyLoad() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(function(img) {
            imageObserver.observe(img);
        });
    }
}

// 初始化所有功能
window.addEventListener('load', function() {
    initSmoothScroll();
    initLoadMore();
    initForms();
    initMobileMenu();
    initLazyLoad();
});

// 性能优化：减少滚动事件的触发频率
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

// 控制台信息
console.log('%c 山特维克集团 ', 'background: #0066B3; color: white; font-size: 16px; padding: 8px 16px; border-radius: 4px;');
console.log('%c 全球高科技工程集团 ', 'color: #0066B3; font-size: 14px;');