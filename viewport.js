class Viewport {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d"); 
        
        this.zoom = 1;
        this.offset = new Point(0,0);

        this.drag = {
            start: new Point(0, 0), 
            end: new Point(0, 0), 
            offset: new Point(0, 0), 
            active: false
        };

        this.#addEventListener();
    }

    getMouse(evt) {
        return new Point(
            evt.offsetX * this.zoom, 
            evt.offsetY * this.zoom
        );
    }

    #addEventListener() {
        this.canvas.addEventListener("mousewheel", this.#handleMouseWheel.bind(this));
    }

    #handleMouseWheel(evt) {
       const dir = Math.sign(evt.deltaY);
       const step = 0.1;
       this.zoom += dir;
       this.zoom = Math.max(1, Math.min(5, this.zoom));
       console.log(evt.deltaY);
    }
}