class menu extends Phaser.Scene{
    constructor(){
        super('menu');
    }
    preload(){

        this.load.image('titleTable', 'assets/titleTable.png');
        this.load.image('title', 'assets/Title.png');
        this.load.image('start', 'assets/start.png');
    }
    create(){
        this.titleScreen = this.add.image(0, 0, 'titleTable');
            this.titleScreen.setOrigin(0, 0);
            this.titleScreen.displayWidth = this.sys.game.config.width;
            this.titleScreen.displayHeight = this.sys.game.config.height;

            // this.playText = this.add.text(this.sys.game.config.width / 2, this.sys.game.config.height - 150, 'START', { font: 'bold 50px Arial', fill: '#ffffff' });
            // this.playText.setOrigin(0.5, 0.5);
        this.playText = this.add.image(990, 2000, 'start').setScale(.8);//875
        let title = this.add.image(920 , -200, 'title');//150
    
    
        const slideDownTitle = this.tweens.add({
            targets: title,
            y : 150,
            duration: 800,
            ease: 'Cosine.easeInOut'
        });
    
        slideDownTitle.play();


        const wiggleTween = this.tweens.add({
            targets: title,
            x: `+=${20}`,
            duration: 3000,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'
          });
        
        wiggleTween.play();

        const slideDownStart = this.tweens.add({
            targets: this.playText,
            y : 875,
            duration: 2000,
            ease: 'Sine.easeInOut'
        });
    
        slideDownStart.play();


        this.playText.setInteractive();
            
        this.playText.on('pointerdown', function() {
            this.titleScreen.destroy();
            this.playText.destroy();
            title.destroy();
            this.time.delayedCall(1500, () => this.scene.start('info'));
        }, this);

        this.playText.on('pointerover', function () {
            this.playText.setScale(1); 
        }, this);
    
        this.playText.on('pointerout', function () {
            this.playText.setScale(.8); 
        }, this);
    }
}

class info extends Phaser.Scene{
    constructor(){
        super('info');
    }
    preload(){
        this.load.image('cover', 'assets/introscene3.png');
        this.load.audio('paperPickup', "assets/paperPickup.mp3");
    }
    create(){
        let cover = this.add.image(960 , 540, 'cover');
        this.add.text(10, 5, "Click anywhere to continue.").setFontSize(20);
        cover.setAlpha(0);
        this.sound.play('paperPickup');

        const fadeIn = this.tweens.add({
            targets: cover,
            alpha: 1,
            duration: 1000, // Duration of the fade in effect (in milliseconds)
            ease: 'Linear'
          });

        

        let rect1 = this.add.rectangle(640, 210, 0, 10, 0xffffff);
        let rect2 = this.add.rectangle(640, 510, 0, 10, 0xffffff);
        let rect3 = this.add.rectangle(880, 930, 0, 10, 0xffffff);

        const self = this;

        const showLines1 = this.tweens.add({
            targets: rect1,
            width: 130,
            duration: 2000,
            ease: 'Linear',
            onComplete: function () {
                const showLines2 = self.tweens.add({
                    targets: rect2,
                    width: 635,
                    duration: 2500,
                    ease: 'Linear',
                    delay: 3000,
                    onComplete: function() {
                        const showLines3 = self.tweens.add({
                            targets: rect3,
                            width: 165,
                            duration: 1000,
                            ease: 'Linear',
                            delay: 5000
                        });
                    }
                });
            },
            callbackScope: this
        });

        this.input.on('pointerdown', () => {            
            const fadeOut = this.tweens.add({
                targets: cover,
                alpha: 0,
                delay: 500, 
                duration: 1000, 
                ease: 'Linear',
            });
            rect1.destroy();
            rect2.destroy();
            rect3.destroy();
            this.time.delayedCall(1500, () => fadeOut.play);
            this.time.delayedCall(1500, () => this.scene.start('menu'));
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
    backgroundColor: '#0000000', 
    scene: [menu, info],
    title: "Cinematics",
});