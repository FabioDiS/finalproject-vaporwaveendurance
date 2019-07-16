var Map = Map || {};

Map.initialize = function (height, width, shw) {
    this.PathArray = [];
    this.PLANE_HEIGHT = height;
    this.PLANE_WIDTH = width;
    this.PLANE_S_H_W = shw;
    this.x = 100;
    this.z = 100;
    this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
};

Map.generate = function () {
    var parameters = {
        map: new THREE.TextureLoader().load( 'textures/terrain.png' ),
        wireframe: false
    };

    var parameters2 = {
        map: new THREE.TextureLoader().load('textures/yellow-square-th.png')
    };

    this.material = new THREE.MeshBasicMaterial (  parameters );
    this.geometry = new THREE.PlaneGeometry ( this.PLANE_WIDTH, this.PLANE_HEIGHT, this.PLANE_S_H_W, this.PLANE_S_H_W);
    this.baseMesh = new THREE.Mesh ( this.geometry, this.material );
    this.baseMesh.meshType = "Map";
    this.baseMesh.position.set( 0, 0, 0 );
    this.baseMesh.scale.set( 1, 1, 1 );
    this.baseMesh.rotation.x = - 90 * Math.PI / 180;
    this.baseMesh.matrixAutoUpdate = false;
    this.baseMesh.updateMatrix();
    scene.add(this.baseMesh);

    this.materialPath = new THREE.MeshBasicMaterial ( parameters2 );
    this.geometryPath = new THREE.PlaneGeometry ( this.PLANE_WIDTH/this.PLANE_S_H_W, this.PLANE_HEIGHT/this.PLANE_S_H_W, 5, 5 );

    //1
    for (var i = 1; i <= 22 ; i ++){
        this.x += this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //2
    for (var i = 1; i <= 15; i++){
        this.z += -this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //3
    for (var i = 1; i <= 8	; i ++){
        this.x += -this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //4
    for (var i = 1; i <= 30; i++){
        this.z += this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //5
    for (var i = 1; i <= 30	; i ++){
        this.x += -this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //6
    for (var i = 1; i <= 6	; i ++){
        this.z += this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //7
    for (var i = 1; i <= 6	; i ++){
        this.x += this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //8
    for (var i = 1; i <= 33; i++){
        this.z += -this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //9
    for (var i = 1; i <= 12	; i ++){
        this.x += -this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = Math.PI * 1.5;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //10
    for (var i = 1; i <= 6; i++){
        this.z += this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //11
    for (var i = 1; i <= 18	; i ++){
        this.x += this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }

    //12
    for (var i = 1; i <= 19; i++){
        this.z += -this.PLANE_WIDTH/this.PLANE_S_H_W;
        this.PathArray.push(new THREE.Vector3(this.x, 0, this.z));
        this.planeMesh = new THREE.Mesh ( this.geometryPath, this.materialPath );
        this.planeMesh.meshType = "Map";
        this.planeMesh.position.set( this.x, 20, this.z );
        this.planeMesh.scale.set( 1, 1, 1 );
        this.planeMesh.rotation.x = - 90 * Math.PI / 180;
        this.planeMesh.matrixAutoUpdate = false;
        this.planeMesh.updateMatrix();
        scene.add(this.planeMesh);
    }
};

