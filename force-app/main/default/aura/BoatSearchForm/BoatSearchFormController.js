({
    doInit: function (component, event, helper) {
        helper.LoadBoatTypes(component, event);
        var isEnabled = $A.get("e.force:createRecord");
        if (isEnabled) {
            component.set("v.isNewButtonAvailable", true);
        }
    },

    onboatTypechange: function (component, event, helper) {
        component.set("v.selectedBoatType", component.find("boatTypes").get("v.value"));
    },

    createBoat: function (component, event, helper) {
        var boatTypeId = component.get("v.selectedBoatType");
        var createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": { 'BoatType__c': boatTypeId }
        });
        createRecordEvent.fire();
    },
    onFormSubmit: function (component, event, helper) {
        var boatTypeId = component.get("v.selectedBoatType");
        var data = {
            "boatTypeId": boatTypeId
        };
        var formSubmit = component.getEvent("formsubmit");
        formSubmit.setParams({
            "formData": data
        });
        formSubmit.fire();
    },
})