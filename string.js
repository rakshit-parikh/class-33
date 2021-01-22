class String{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:250
        }
        this.pointB=pointB
        this.string=Constraint.create(options)
        World.add(world,this.string)
    }
    attach(body){
        this.string.bodyA=body
    }
    fly(){
        this.string.bodyA=null
    }
    display(){
        if(this.string.bodyA){
            var pointA=this.string.bodyA.position
            var pointB=this.pointB
            push();
            stroke("brown")
            strokeWeight(3)
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop()
        }
    }
}