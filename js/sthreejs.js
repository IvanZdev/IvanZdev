var THREE = require('three');

// Threejs
let scene,camera, renderer, cloudParticles = [], flash, rain, rainGeo, rainCount = 10000;
function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth  / window.innerHeight, 1, 1000);
    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;
    ambient = new THREE.AmbientLight(0xA7A4A4);
    scene.add(ambient);
    directionalLight = new THREE.DirectionalLight(0xffeedd);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);
    flash = new THREE.PointLight(0x062d89, 30, 500 ,1.7);
    flash.position.set(200,300,100);
    scene.add(flash);
    renderer = new THREE.WebGLRenderer();
    scene.fog = new THREE.FogExp2(0xF5F5F5, 0.002);
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.domElement.id = 'rend';
    rainGeo = new THREE.Geometry();
    for(let i=0;i<rainCount;i++) {
        rainDrop = new THREE.Vector3(
            Math.random() * 400 -200,
            Math.random() * 500 - 250,
            Math.random() * 400 - 200
        );
        rainDrop.velocity = {};
        rainDrop.velocity = 0;
        rainGeo.vertices.push(rainDrop);
    }
    rainMaterial = new THREE.PointsMaterial({
        color: 0x333333,
        size: 0.060,
        transparent: true
    });
    rain = new THREE.Points(rainGeo,rainMaterial);
    scene.add(rain);
    let loader = new THREE.TextureLoader();
    loader.load("images/smoke.png", function(texture){
        cloudGeo = new THREE.PlaneBufferGeometry(500,500);
        cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true
        });
        for(let p=0; p<25; p++) {
            let cloud = new THREE.Mesh(cloudGeo,cloudMaterial);
            cloud.position.set(
                Math.random()*800 -400,
                500,
                Math.random()*500 - 450
            );
            cloud.rotation.x = 1.16;
            cloud.rotation.y = -0.12;
            cloud.rotation.z = Math.random()*360;
            cloud.material.opacity = 0.3;
            cloudParticles.push(cloud);
            scene.add(cloud);
        }
        animate();
    });
}
function animate() {
    cloudParticles.forEach(p => {
        p.rotation.z -=0.001;
    });
    rainGeo.vertices.forEach(p => {
        p.velocity -= 0.001 ;
        p.y += p.velocity;
        if (p.y < -200) {
            p.y = 200;
            p.velocity = 0.001;
        }
    });
    rainGeo.verticesNeedUpdate = true;
    rain.rotation.y +=0.002;
    if(Math.random() > 0.93 || flash.power > 100) {
        if(flash.power < 100)
            flash.position.set(
                Math.random()*400,
                500 + Math.random() *400,
                100
            );
        flash.power = 10 + Math.random() * 200;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
init();





//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzdGhyZWVqcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVEhSRUUgPSByZXF1aXJlKCd0aHJlZScpO1xyXG5cclxuLy8gVGhyZWVqc1xyXG5sZXQgc2NlbmUsY2FtZXJhLCByZW5kZXJlciwgY2xvdWRQYXJ0aWNsZXMgPSBbXSwgZmxhc2gsIHJhaW4sIHJhaW5HZW8sIHJhaW5Db3VudCA9IDEwMDAwO1xyXG5mdW5jdGlvbiBpbml0KCkge1xyXG4gICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg2MCwgd2luZG93LmlubmVyV2lkdGggIC8gd2luZG93LmlubmVySGVpZ2h0LCAxLCAxMDAwKTtcclxuICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMTtcclxuICAgIGNhbWVyYS5yb3RhdGlvbi54ID0gMS4xNjtcclxuICAgIGNhbWVyYS5yb3RhdGlvbi55ID0gLTAuMTI7XHJcbiAgICBjYW1lcmEucm90YXRpb24ueiA9IDAuMjc7XHJcbiAgICBhbWJpZW50ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweEE3QTRBNCk7XHJcbiAgICBzY2VuZS5hZGQoYW1iaWVudCk7XHJcbiAgICBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmVlZGQpO1xyXG4gICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMCwwLDEpO1xyXG4gICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xyXG4gICAgZmxhc2ggPSBuZXcgVEhSRUUuUG9pbnRMaWdodCgweDA2MmQ4OSwgMzAsIDUwMCAsMS43KTtcclxuICAgIGZsYXNoLnBvc2l0aW9uLnNldCgyMDAsMzAwLDEwMCk7XHJcbiAgICBzY2VuZS5hZGQoZmxhc2gpO1xyXG4gICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xyXG4gICAgc2NlbmUuZm9nID0gbmV3IFRIUkVFLkZvZ0V4cDIoMHhGNUY1RjUsIDAuMDAyKTtcclxuICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3Ioc2NlbmUuZm9nLmNvbG9yKTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG4gICAgcmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9ICdyZW5kJztcclxuICAgIHJhaW5HZW8gPSBuZXcgVEhSRUUuR2VvbWV0cnkoKTtcclxuICAgIGZvcihsZXQgaT0wO2k8cmFpbkNvdW50O2krKykge1xyXG4gICAgICAgIHJhaW5Ecm9wID0gbmV3IFRIUkVFLlZlY3RvcjMoXHJcbiAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiA0MDAgLTIwMCxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDUwMCAtIDI1MCxcclxuICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDQwMCAtIDIwMFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmFpbkRyb3AudmVsb2NpdHkgPSB7fTtcclxuICAgICAgICByYWluRHJvcC52ZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgcmFpbkdlby52ZXJ0aWNlcy5wdXNoKHJhaW5Ecm9wKTtcclxuICAgIH1cclxuICAgIHJhaW5NYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgY29sb3I6IDB4MzMzMzMzLFxyXG4gICAgICAgIHNpemU6IDAuMDYwLFxyXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJhaW4gPSBuZXcgVEhSRUUuUG9pbnRzKHJhaW5HZW8scmFpbk1hdGVyaWFsKTtcclxuICAgIHNjZW5lLmFkZChyYWluKTtcclxuICAgIGxldCBsb2FkZXIgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpO1xyXG4gICAgbG9hZGVyLmxvYWQoXCJpbWFnZXMvc21va2UucG5nXCIsIGZ1bmN0aW9uKHRleHR1cmUpe1xyXG4gICAgICAgIGNsb3VkR2VvID0gbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoNTAwLDUwMCk7XHJcbiAgICAgICAgY2xvdWRNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoTGFtYmVydE1hdGVyaWFsKHtcclxuICAgICAgICAgICAgbWFwOiB0ZXh0dXJlLFxyXG4gICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvcihsZXQgcD0wOyBwPDI1OyBwKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsb3VkID0gbmV3IFRIUkVFLk1lc2goY2xvdWRHZW8sY2xvdWRNYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIGNsb3VkLnBvc2l0aW9uLnNldChcclxuICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkqODAwIC00MDAsXHJcbiAgICAgICAgICAgICAgICA1MDAsXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpKjUwMCAtIDQ1MFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjbG91ZC5yb3RhdGlvbi54ID0gMS4xNjtcclxuICAgICAgICAgICAgY2xvdWQucm90YXRpb24ueSA9IC0wLjEyO1xyXG4gICAgICAgICAgICBjbG91ZC5yb3RhdGlvbi56ID0gTWF0aC5yYW5kb20oKSozNjA7XHJcbiAgICAgICAgICAgIGNsb3VkLm1hdGVyaWFsLm9wYWNpdHkgPSAwLjM7XHJcbiAgICAgICAgICAgIGNsb3VkUGFydGljbGVzLnB1c2goY2xvdWQpO1xyXG4gICAgICAgICAgICBzY2VuZS5hZGQoY2xvdWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhbmltYXRlKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBhbmltYXRlKCkge1xyXG4gICAgY2xvdWRQYXJ0aWNsZXMuZm9yRWFjaChwID0+IHtcclxuICAgICAgICBwLnJvdGF0aW9uLnogLT0wLjAwMTtcclxuICAgIH0pO1xyXG4gICAgcmFpbkdlby52ZXJ0aWNlcy5mb3JFYWNoKHAgPT4ge1xyXG4gICAgICAgIHAudmVsb2NpdHkgLT0gMC4wMDEgO1xyXG4gICAgICAgIHAueSArPSBwLnZlbG9jaXR5O1xyXG4gICAgICAgIGlmIChwLnkgPCAtMjAwKSB7XHJcbiAgICAgICAgICAgIHAueSA9IDIwMDtcclxuICAgICAgICAgICAgcC52ZWxvY2l0eSA9IDAuMDAxO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmFpbkdlby52ZXJ0aWNlc05lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgcmFpbi5yb3RhdGlvbi55ICs9MC4wMDI7XHJcbiAgICBpZihNYXRoLnJhbmRvbSgpID4gMC45MyB8fCBmbGFzaC5wb3dlciA+IDEwMCkge1xyXG4gICAgICAgIGlmKGZsYXNoLnBvd2VyIDwgMTAwKVxyXG4gICAgICAgICAgICBmbGFzaC5wb3NpdGlvbi5zZXQoXHJcbiAgICAgICAgICAgICAgICBNYXRoLnJhbmRvbSgpKjQwMCxcclxuICAgICAgICAgICAgICAgIDUwMCArIE1hdGgucmFuZG9tKCkgKjQwMCxcclxuICAgICAgICAgICAgICAgIDEwMFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGZsYXNoLnBvd2VyID0gMTAgKyBNYXRoLnJhbmRvbSgpICogMjAwO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG59XHJcbmluaXQoKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJmaWxlIjoic3RocmVlanMuanMifQ==
