({
    onFormSubmit : function(component, event, helper) {
        var data = event.getParam("formData");
        var boatSearchResultsCmp = component.find("boatSearchResultsCmp");
        boatSearchResultsCmp.search(data.boatTypeId);
    }
})
