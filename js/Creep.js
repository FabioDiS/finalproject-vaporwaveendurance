var Creep = Creep || {};

Creep.initialize = function () {
    this.pathLength = Map.PathArray.length - 1;
    this.runThroughHealth = 1;
    this.runThroughSpeed = 1;
    this.runThroughScore = 1;
    this.runThroughCash = 1;
    this.x = Map.PathArray[this.pathLength].x;
    this.z = Map.PathArray[this.pathLength].z;
    this.creeps = [];
    this.healthBars = [];
    this.currentWave = 0;
    this.wave = [
        {"maxhealth": 75, "health": 75, "amount": 10, "speed": 35, "score": 100, "cash": 15, "spawnwait": 1000, "nextwave": 2000, "difficulty": 'Easy'},
        {"maxhealth": 400, "health": 400, "amount": 6, "speed": 25, "score": 200, "cash": 25, "spawnwait": 800, "nextwave": 4000, "difficulty": 'Normal'},
        {"maxhealth": 120, "health": 120, "amount": 25, "speed": 50, "score": 75, "cash": 10, "spawnwait": 200, "nextwave": 6000, "difficulty": 'Hard'},
        {"maxhealth": 1000, "health": 1000, "amount": 1, "speed": 30, "score": 2500, "cash": 50, "spawnwait": 400, "nextwave": 8000, "difficulty": 'Super'}
    ];
    this.waveCounter = 1;
};

Creep.runLevel = function() {
    if (gameOn === true) {
        if (this.currentWave < ( this.wave.length )) {
            if (this.wave[this.currentWave].amount > 0){
                Creep.create((this.wave[this.currentWave].health * this.runThroughHealth), (this.wave[this.currentWave].speed * this.runThroughSpeed), (this.wave[this.currentWave].score * this.runThroughScore), (this.wave[this.currentWave].cash * this.runThroughCash), this.wave[this.currentWave].difficulty, (this.wave[this.currentWave].health * this.runThroughHealth));
                this.wave[this.currentWave].amount -= 1;
                setTimeout("Creep.runLevel()", (this.wave[this.currentWave].spawnwait / speedModifier));
            }
            else {
                setTimeout("Creep.runLevel()", (this.wave[this.currentWave].nextwave / speedModifier));
                this.currentWave += 1;
                this.waveCounter += 1;
            }
        }
        else {
            this.runThroughHealth = this.runThroughHealth * 1.48;
            if (this.runThroughSpeed * 1.27 < 18.13) {
                this.runThroughSpeed = this.runThroughSpeed * 1.27;
            }
            this.runThroughScore = this.runThroughScore * 1.3;
            this.runThroughCash = this.runThroughCash * 1.17;
            this.currentWave = 0;
            this.wave = [
                {"maxhealth": 75, "health": 75, "amount": 10, "speed": 35, "score": 100, "cash": 15, "spawnwait": 1000, "nextwave": 2000, "difficulty": 'Easy'},
                {"maxhealth": 400, "health": 400, "amount": 6, "speed": 25, "score": 200, "cash": 25, "spawnwait": 800, "nextwave": 4000, "difficulty": 'Normal'},
                {"maxhealth": 120, "health": 120, "amount": 25, "speed": 50, "score": 75, "cash": 10, "spawnwait": 200, "nextwave": 6000, "difficulty": 'Hard'},
                {"maxhealth": 1000, "health": 1000, "amount": 1, "speed": 30, "score": 2500, "cash": 500, "spawnwait": 400, "nextwave": 8000, "difficulty": 'Super'}
            ];
            setTimeout("Creep.runLevel()", (this.wave[this.currentWave].nextwave / speedModifier));
        }
    }
};

Creep.create = function ( health, speed, score, cash, difficulty, maxhealth) {
    function defineUrl() {
        switch (difficulty) {
            case 'Easy':
                return 'textures/ghost1.png';
            case 'Normal':
                return 'textures/ghost2.png';
            case 'Hard':
                return 'textures/ghost3.png';
            case 'Super':
                return 'textures/ghost4.png';
            default:
                console.log('Difficulty ' + difficulty + ' not defined');
                return null;
        }
    }

    let parameters = new THREE.TextureLoader().load(defineUrl());
    parameters.wrapS = THREE.RepeatWrapping;
    parameters.wrapT = THREE.RepeatWrapping;
    parameters.repeat.set(1, 1);

    let data = {
        radius: 15,
        widthSegments: 32,
        heightSegments: 10,
        phiStart: 1,
        phiLength: 6.3,
        thetaStart: 3,
        thetaLength: 2.5
    };

    this.geometry = new THREE.SphereBufferGeometry(data.radius, data.widthSegments, data.heightSegments, data.phiStart, data.phiLength, data.thetaStart, data.thetaLength);
    this.material = new THREE.MeshBasicMaterial({map: parameters, side: THREE.DoubleSide});
    this.mesh = new THREE.Mesh (this.geometry, this.material );
    this.mesh.position.set( this.x, 300, this.z );
    this.mesh.scale.set( 14, 14, 14 );
    this.mesh.meshType = "Creep";
    this.mesh.rotation.x = Math.PI;
    this.mesh.overdraw = true;
    this.mesh.waypoint = this.pathLength;
    this.mesh.health = Math.floor(health);
    this.mesh.maxhealth = Math.floor(maxhealth);
    this.mesh.startingHealth = Math.floor(health);
    this.mesh.speed = Math.floor(speed);
    this.mesh.score = Math.floor(score);
    this.mesh.cash = Math.floor(cash);

    // Sets move direction to prevent creep from moving backward if it passes the waypoint
    this.mesh.MOVE_N = false;
    this.mesh.MOVE_S = false;
    this.mesh.MOVE_E = false;
    this.mesh.MOVE_W = false;

    this.mesh.updateMatrix();
    this.creeps.push ( this.mesh );

    this.healthBar = new THREE.Mesh(new THREE.BoxGeometry(25,5,5), new THREE.MeshBasicMaterial({color:0xff0000}));
    this.healthBar.name = 'HealthBar';
    this.healthBar.position.y -= 25;
    this.healthBar.rotation.y = theta - 29.8;

    this.healthBars.push (this.healthBar);

    this.mesh.add(this.healthBar);
    scene.add( this.mesh );
};

Creep.update = function() {
    for (let i in this.creeps){
        if (this.creeps[i].position.x != Map.PathArray[this.creeps[i].waypoint].x){
            if (this.creeps[i].position.x > Map.PathArray[this.creeps[i].waypoint].x && this.creeps[i].MOVE_E == false){
                this.creeps[i].rotation.y = Math.PI * 1.65;
                this.creeps[i].position.x -= this.creeps[i].speed * speedModifier;
                this.creeps[i].MOVE_W = true;
            }
            else if (this.creeps[i].position.x < Map.PathArray[this.creeps[i].waypoint].x && this.creeps[i].MOVE_W == false){
                this.creeps[i].rotation.y = Math.PI * 2.65;
                this.creeps[i].position.x += this.creeps[i].speed * speedModifier;
                this.creeps[i].MOVE_E = true;
            }
            else{
                this.creeps[i].position.x = Map.PathArray[this.creeps[i].waypoint].x;
                this.creeps[i].position.z = Map.PathArray[this.creeps[i].waypoint].z;
                this.creeps[i].waypoint--;
                this.creeps[i].MOVE_N = false;
                this.creeps[i].MOVE_S = false;
                this.creeps[i].MOVE_E = false;
                this.creeps[i].MOVE_W = false;
                if (this.creeps[i].waypoint < 0) {
                    scene.remove(this.creeps[i]);
                    this.creeps.splice(i, 1);
                    this.healthBars.splice(i, 1);
                    Score.setHealth();
                }
            }
        }
        else if (this.creeps[i].position.z != Map.PathArray[this.creeps[i].waypoint].z){
            if (this.creeps[i].position.z > Map.PathArray[this.creeps[i].waypoint].z && this.creeps[i].MOVE_N == false){
                this.creeps[i].rotation.y = Math.PI * 0.15;
                this.creeps[i].position.z -= this.creeps[i].speed * speedModifier;
                this.creeps[i].MOVE_S = true;
            }
            else if (this.creeps[i].position.z < Map.PathArray[this.creeps[i].waypoint].z && this.creeps[i].MOVE_S == false){
                this.creeps[i].rotation.y = Math.PI * 1.15;
                this.creeps[i].position.z += this.creeps[i].speed * speedModifier;
                this.creeps[i].MOVE_N = true;
            }
            else{
                this.creeps[i].position.x = Map.PathArray[this.creeps[i].waypoint].x;
                this.creeps[i].position.z = Map.PathArray[this.creeps[i].waypoint].z;
                this.creeps[i].waypoint--;
                this.creeps[i].MOVE_N = false;
                this.creeps[i].MOVE_S = false;
                this.creeps[i].MOVE_E = false;
                this.creeps[i].MOVE_W = false;
                if (this.creeps[i].waypoint < 0) {
                    scene.remove(this.creeps[i]);
                    this.creeps.splice(i, 1);
                    this.healthBars.splice(i, 1);
                    Score.setHealth();
                }
            }
        }
        else{
            this.creeps[i].position.x = Map.PathArray[this.creeps[i].waypoint].x;
            this.creeps[i].position.z = Map.PathArray[this.creeps[i].waypoint].z;
            this.creeps[i].waypoint--;
            this.creeps[i].MOVE_N = false;
            this.creeps[i].MOVE_S = false;
            this.creeps[i].MOVE_E = false;
            this.creeps[i].MOVE_W = false;
            if (this.creeps[i].waypoint < 0) {
                scene.remove(this.creeps[i]);
                this.creeps.splice(i, 1);
                this.healthBars.splice(i, 1);
                Score.setHealth();
            }
        }
        if (this.creeps[i].health <= 0){
            Creep.isDead(i);
        }
    }
};

Creep.isHit = function(i,damage){
    this.creeps[i].health -= damage;
    this.healthBars[i].scale.x = this.creeps[i].health/this.creeps[i].maxhealth;
};

Creep.isDead = function ( i ) {
    Score.setScore(this.creeps[i].score, this.creeps[i].cash);
    scene.remove(this.creeps[i]);
    this.creeps.splice(i, 1);
    this.healthBars.splice(i, 1);
};

Creep.getWave = function() {
    return this.waveCounter;
};