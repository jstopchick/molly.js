define(["three","cpkAtoms"],function(e,t){var n=function(e){this.sphereGeom=new THREE.SphereGeometry(4,32,16),this.sphereGeom.dynamic=!0,this.elementColor=t[e.element],this.material=new THREE.MeshLambertMaterial({color:this.elementColor}),THREE.Mesh.apply(this,[this.sphereGeom,this.material]),this.position.set(e.x,e.y,e.z),this.component_atom_id=e.component_atom_id};return n.prototype=Object.create(THREE.Mesh.prototype),n.prototype.constructor=n,n});