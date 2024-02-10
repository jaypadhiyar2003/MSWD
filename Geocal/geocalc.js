const { raw } = require("express");

function cubeVol(side){
    return side** 3;
}
function cubeSurfaceArea(side){
    return 6 * side** 2;
}
function cuboidVol(length,width,height){
    return length*width*height;
}
function cuboidSurfaceArea(length,width,height){
    return 2*(length*width + length*height + width*height);
}
function sphereVol(radius){
    return (4/3)*3.14*radius**3;
}
function spherSurfaceArea(radius){
    return 4*3.14*radius**2;
}
function cylinderSurfaceArea(radius,height){
    return 2 * 3.14 * radius * (radius + height);
}
function cylinderVol(raduis, height){
    return 3.14 * raduis ** 2 * height;
}
function coneSurfaceArea(radius,slantheight){
    const baseArea = 3.14*radius ** 2;
    const lateralArea = 3.14 * radius *slantheight;
    return baseArea + lateralArea;
}
function conVol(radius,height){
    return (1/3) * 3.14 *radius**2 * height;
}
function pyramidVol(baseArea,height){
    return (1/3)*baseArea*height;
}
function pyramidSurfaceArea(basePerimeter,slantheight){
    const baseArea = (1/2)* basePerimeter * slantheight;
    const lateralArea = baseArea*slantheight /2;
    return baseArea+lateralArea;
}

function ellipsoidVolume(raduis1, raduis2,raduis3){
    return (4/3) * 3.14 * raduis1 * raduis2 * raduis3;
}

function ellipsoidSurfaceArea(raduis1,raduis2,raduis3){
    const p = 3.14;
    const a = raduis1;
    const b = raduis2;
    const c = raduis3;
    const term1 = Math.pow(b * c,2);
    const term2 = Math.pow(a * c,2);
    const term3 = Math.pow(a * b,2);
    const sqrterm = Math.sqrt(term1 + term2+ term3);
    return 4 * p *((term1+term2+term3)/sqrterm);
}

module.exports = {
    cubeVol,
    cubeSurfaceArea,
    cuboidVol,
    cuboidSurfaceArea,
    sphereVol,
    spherSurfaceArea,
    cylinderVol,
    cylinderSurfaceArea,
    conVol,
    coneSurfaceArea,
    pyramidVol,
    pyramidSurfaceArea,
    ellipsoidVolume,
    ellipsoidSurfaceArea
};