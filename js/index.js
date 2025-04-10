let options = {
            animate: true,
            patternWidth: 90,
            patternHeight: 90,
            grainOpacity: 0.18,
            grainDensity: .75,
            grainWidth: .9,
            grainHeight: .5
};
    
grained('#hero', options);


class Dots {
    constructor(options){
        this.parentSelector = options.parentSelector;
        this.count = options.count;
        
        this.dotClassName = options.dotClassName;
        this.activeClassName = options.activeClassName;
        this.activeDotPos = options.activeDotPos;
        
        this.callback = options.callback;

        this.dotsParent = document.querySelector(this.parentSelector);
        this.dotsArray = [];
    }

    deactivateAll = () => {
        this.dotsArray.forEach(dot => {
            dot.classList.remove(this.activeClassName);
        })
    }

    activate = (dot) => {
        this.deactivateAll();
        dot.classList.add(this.activeClassName);
    }

    initDots = () => {
        for (let i = 0; i < this.count; i++) {
            const dot = document.createElement('li');
            
            if (i !== this.activeDotPos) {
                dot.classList.add(this.dotClassName);
            } else {
                dot.classList.add(this.dotClassName, this.activeClassName);
            }

            
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                
                this.activate(dot);
                this.callback(i);
            });
            this.dotsArray.push(dot);
            this.dotsParent.appendChild(dot);
        }    
    }
}


const activeSteps ={
    0: () => console.log('step 1'),
    1: () => console.log('step 2'),
    2: () => console.log('step 3'),
    3: () => console.log('step 4'),
    4: () => console.log('step 5')
}


const dots = new Dots ({
    parentSelector: '.dots__list',
    count: 5,
    dotClassName: 'dots__item',
    activeClassName: 'dots__item-active',
    activeDotPos: 2,
    callback: (activeDotIndex) => {
        activeSteps[activeDotIndex]()
    }
});

dots.initDots();

console.log(dots)


const burgerMenu = document.querySelector('.header__navigation');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    burgerBtn.children[0].classList.toggle('burger-btn-active');
    burgerMenu.classList.toggle('header__navigation-active');
    document.body.classList.toggle('lock');
})