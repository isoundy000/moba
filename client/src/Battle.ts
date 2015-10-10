class Battle extends egret.DisplayObjectContainer {
    public static myName: string;
    public static myX: number;
    public static myY: number;
    
    private roomList: RoomList;
    
    private net: Net;
    
    private playerGroup: PlayerGroup;
    
    private battleStatusText: egret.TextField;
    
	public constructor() {
        super();

        /*
        this.initPlayers();
        
        this.net = new Net(this);
        this.addChild(this.net);
        Battle.myName = this.net.connect();
        this.initBattleStatusText();
        */
                
        this.roomList = new RoomList();
        this.addChild(this.roomList);
	}
	
	private initBattleStatusText():void {
        this.battleStatusText = new egret.TextField();
        this.battleStatusText.x = 200;
        this.battleStatusText.y = 50;
        this.battleStatusText.text = "waiting";
        this.addChild(this.battleStatusText);
	}
	
	private initPlayers():void {
        this.playerGroup = new PlayerGroup();
        this.playerGroup.refixPosition();
        this.addChild(this.playerGroup);
	}
	
	private onPlayerAttacked(event) {
        var shoot: Shoot = new Shoot();
        shoot.action({ x: 200,y: 400 },{x:event.stageX, y:event.stageY}, 0xff0000);
        event.target.stage.addChild(shoot);
	}
	
	public setBattleStatus(status:string):void {
        this.battleStatusText.text = status;
	}
	
	public getPlayerGroup():PlayerGroup {
        return this.playerGroup;
	}
}
