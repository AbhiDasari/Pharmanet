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
	//add hierarchyKey
	let newCompanyObject={
		companyId: CompanyKey,
		companyname: companyName,
		companylocation: Location,
		organisationRole: organisationRole,
	
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
		drugManufacturer: ,
		drugManufacturingDate: mfgDate,
		drugExpiryDate: expDate,
		drugOwner:,
		drugShipment:,
		
	
	};
	// writing the new objects to the ledger
	let drugBuffer =Buffer.from(JSON.stringify(newDrugObject));
	await ctx.stub.putState(drugKey,drugBuffer);
	return newCompanyObject;
}

//Transfer Drug
async createPO (buyerCRN, sellerCRN, drugName, quantity){
}

async createShipment (buyerCRN, drugName, listOfAssets, transporterCRN ){
}

async updateShipment( buyerCRN, drugName, transporterCRN){
}

async retailDrug (drugName, serialNo, retailerCRN, customerAadhar){
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
