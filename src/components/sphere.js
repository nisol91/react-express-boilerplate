import React, { Component } from "react";
import * as THREE from "three";

// const scene = new THREE.Scene();
// var geometry = new THREE.SphereGeometry(5, 32, 32);
// var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
// var sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

var animate = function() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();

export default class Sphere extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  render() {
    //==handling css classes==
    // let className_1 = "boxPortfolio";
    // if (this.state.slide) {
    //   className_1 += " ";
    // }
    return (
      <div className="boxHome">
        <h1 className="home2 tracking-in-expand">sono una sfera</h1>
      </div>
    );
  }
}
