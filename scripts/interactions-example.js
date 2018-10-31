(function(){
    this.enterEntity = function(entityID) {
        print(\"enterEntity(\"+entityID.id+\")\");
        Entities.editEntity(entityID, {
            color: { red: 255, green: 64, blue: 64 },
        });
    };
    this.leaveEntity = function(entityID) {
        print(\"leaveEntity(\"+entityID.id+\")\");
        Entities.editEntity(entityID, { 
            color: { red: 255, green: 190, blue: 20}
        });
    };
});