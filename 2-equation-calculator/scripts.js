function calculateAcceleration(){
    var intialvelocity = parseInt(document.forms[0].elements['velocityi'].value);
    var finalvelocity = document.forms[0].elements['velocityf'].value;
    var time = document.forms[0].elements['time'].value;
    var acceleration = (finalvelocity - intialvelocity)/time ;
    if(isNaN(acceleration)){
        document.getElementById('acceleration').innerHTML = 'Need More Values';

    }else{
    document.getElementById('acceleration').innerHTML = "The Acceleration is " + acceleration + " (m/s²)";
    }
}

function calculateForce(){
    var mass = document.forms[1].elements['mass'].value;
    var acceleration = document.forms[1].elements['acceleration'].value;
    var force = mass * acceleration ;
    document.getElementById('force').innerHTML = "The Force is " + force + " (N)";
    
}

function calculateKineticEnergy(){
    var mass = document.forms[2].elements['mass'].value;
    var velocity = document.forms[2].elements['velocity'].value;
    var kineticEnergy = .5 * mass * velocity * velocity ;
    document.getElementById('kineticenergy').innerHTML = "The Kinetic Energy is " + kineticEnergy + " (J)";
    
}

