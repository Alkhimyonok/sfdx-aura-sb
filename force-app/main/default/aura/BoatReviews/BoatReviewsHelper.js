({
    onInit : function(component, event, helper) {
        var action=component.get("c.getAll");
        var boatId = component.get("v.boat").Id;
        action.setParams({
            "boatId": boatId
        });
        action.setCallback(this,function(response) {
            var state= response.getState();
            if(state==='SUCCESS'){
                component.set("v.boatReviews",response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
       
    },
})
