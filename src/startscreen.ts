class StartScreen {
    private startGameCallback: Function;   
    private startGameImg: any;

    constructor(startGameCallback: Function) {
        this.startGameCallback = startGameCallback;
        this.startGameImg = createSprite(width / 2, height / 2, 100, 100);
        this.startGameImg.addImage(startGameImg);
        startGameImg.resize(600,700);
    }
    
    public update(gameState: GameState) {
        // Starts the game when space-key is pressed
        if(gameState === 'Start'){
            if (keyIsDown(32)) {
                this.startGameCallback();
            }
        }
    }

    public draw() {
        drawSprite(this.startGameImg);  
    }
}  