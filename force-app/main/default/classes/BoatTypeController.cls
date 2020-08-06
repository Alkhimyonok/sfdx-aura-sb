public with sharing class BoatTypeController {
    @AuraEnabled
    public static List<BoatType__c> getBoatType(){
        return [select Id,Name from BoatType__c];
    }
}