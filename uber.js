class Uber 
{
    constructor(dis,bsprice,rs,carname) {
        this.distance = dis;
        this.basefare = bsprice;
        this.costperkm = rs;
    }
    totalcal()
    {
        return (this.basefare + this.distance * this.costperkm);
    }
}
let Uberfare = new Uber(20, 50, 5, "Swift dezire");
console.log("Total fare: "+ Uberfare.totalcal());