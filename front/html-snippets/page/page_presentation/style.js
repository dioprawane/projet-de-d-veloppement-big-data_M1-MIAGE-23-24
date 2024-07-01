export default class Style{
    content(){ return `
    
    <style>

    :host {
        width: 100%;
    }

    .centerBox {
        justify-content: center;
        width: 100%;
        overflow: hidden;
        height: 200px;

    }

   
    .image {
        object-fit: cover;
        object-position: 0% 50%;
        width: 100%;
        height: 300px;
    }
    </style>
    `
    }
}
