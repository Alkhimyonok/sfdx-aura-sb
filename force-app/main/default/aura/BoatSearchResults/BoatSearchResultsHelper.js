({
    onSearch: function (component, event) {
        var action = component.get("c.getBoats");
        action.setParams({"boatTypeId":component.get("v.boatTypeId")});
        action.setCallback(this, function (response) {
            component.set("v.boats", response.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})
