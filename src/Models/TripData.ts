export interface TripData{
    custName : string;
    custNum : number;
    custId : string;
    journeyFrom : string;
    journeyTo : string;
    journeyDate : Date | null;
    vehicleNum : string;
    driverName : string;
    driverNum : number;
    openingReading : number;
    endReading : number;
    totalReading : number;
    paymentType : string;
    tollFee : number;
    kmDriven : number;
    driverBeta : number;
    advance : number;
    parkingFee : number;
    costPerKm : number;
    totalPay : number;
    netPay : number;
}