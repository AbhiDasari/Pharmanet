'use strict';

const{Contract}=require('fabric-contract-api');

class pharmanet extends contract{
constructor(){

super('org.pharma-network.pharmanet');

}

async instantiate(ctx){
	console.log('Phramanet Contract has been instantiated');
	}
	
//Entity Registration
async registerCompany (companyCRN, companyName, Location, organisationRole){
	const companyKey=ctx.stub.createCompositeKey('org.pharma-network.pharmanet.company',[companyCRN,companyName]);
	let hierarchyKeyAssign;
	if(organisationRole=='Manufacturer')
	{
		hierarchyKeyAssign=1;
	}
	else if(organisationRole=='Distributor')
	{
		hierarchyKeyAssign=2;
	}
	else if( organisationRole=='Retailer')
	{
		hierarchyKeyAssign=3;
	}
	
	let newCompanyObject={
		companyId: CompanyKey,
		companyname: companyName,
		companylocation: Location,
		organisationRole: organisationRole,
		hierarchyKey=hierarchyKeyAssign,
	
	};
	// writing the new objects to the ledger
	let companyBuffer =Buffer.from(JSON.stringify(newCompanyObject));
	await ctx.stub.putState(companyKey,companyBuffer);
	return newCompanyObject;
}

//Drug Registration
async addDrug (drugName, serialNo, mfgDate, expDate, companyCRN){
	const drugKey=ctx.stub.createCompositeKey('org.pharma-network.pharmanet.drug',[drugName,serialNo]);
	//add DrugManufacturer,DrugOwner, Drugshipment
	
	let newDrugObject={
		productID: DrugKey,
		drugName: drugName,
		drugManufacturer: // key of the caller,
		drugManufacturingDate: mfgDate,
		drugExpiryDate: expDate,
		drugOwner:,//key of the owner
		drugShipment:,
		
	
	};
	// writing the new objects to the ledger
	let drugBuffer =Buffer.from(JSON.stringify(newDrugObject));
	await ctx.stub.putState(drugKey,drugBuffer);
	return newCompanyObject;
}

//Transfer Drug
async createPO (buyerCRN, sellerCRN, drugName, quantity){
	const poKey=ctx.stub.createCompositeKey('org.pharma-network.pharmanet.po',[buyerCRN,drugName]);
	let newPoObject={
		drugName=drugName,
		quantity:quantity,
		buyer=//buyerkey,
		seller=//sellerkey,
}
	let poBuffer =Buffer.from(JSON.stringify(newPoObject));
	await ctx.stub.putState(poKey,poBuffer);
	return newPoObject;
}

async createShipment (buyerCRN, drugName, listOfAssets, transporterCRN ){
	const poKey=ctx.stub.createCompositeKey('org.pharma-network.pharmanet.po',[buyerCRN,drugName]);
	//validate lengths
	//validate the ids                 
	const shipmentKey=ctx.stub.createCompositeKey('org.pharma-network.pharmanet.shipment',[buyerCRN,drugName]);
	let statusAssign='in-transit';
	let newShipmentObject={
		creator: //creatorkey,
		assets: listOfAssets,
		transporter: //transporterKey,
		shipmentStatus: statusAssign,
	}
	
}

async updateShipment( buyerCRN, drugName, transporterCRN){
}

async retailDrug (drugName, serialNo, retailerCRN, customerAadhar){
	const drugKey=ctx.stub.createCompositeKey('org.pharma-network.pharmanet.drug',[drugName,serialNo]);
	//change the ownership to aadhar of the buyer
}

//View Lifecycle
async viewHistory (drugName, serialNo){
}

async viewDrugCurrentState (drugName, serialNo){
	const drugKey=ctx.stub.createCompositeKey('org.pharma-network.pharmanet.drug',[drugName,serialNo]);
	let drugBuffer = await ctx.stub.getState(drugKey).catch(err=>console.log(err));
	return JSON.parse(drugBuffer.toString());
}

}
