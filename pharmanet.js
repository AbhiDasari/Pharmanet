'use strict';

const{Contract}=require('fabric-contract-api');

class pharmanet extends contract{
constructor(){

super('org.property-registration-network.pharmanet');

}
async instantiate(ctx){
	console.log('Phramanet Contract has been instantiated');
	}
async registerCompany (companyCRN, companyName, Location, organisationRole){
}
