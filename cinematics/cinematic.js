class menu extends Phaser.Scene{
    constructor(){
        super('menu');
    }
    create(){
        this.add.text(50,50, "Cinematic Demo").setFontSize(50);
        this.add.text(50,100, "Click anywhere to play. In our next Demo.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            //this.time.delayedCall(1000, () => this.scene.start('level1'));//needs to go back
        });
    }
}

const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    backgroundColor: '#1cb2f5', 
    scene: [menu],
    title: "Cinematics",
});