public with sharing class BoatSearchResults {
    @AuraEnabled
    public static List<Boat__c> getBoats(string boatTypeId){
        if(boatTypeId=='All Types'||boatTypeId==''||boatTypeId==null){
            return [SELECT Id,Name FROM Boat__c];
        } else {
            return [SELECT Id,Name FROM Boat__c WHERE BoatType__c=:boatTypeId];
        }
    }
}
