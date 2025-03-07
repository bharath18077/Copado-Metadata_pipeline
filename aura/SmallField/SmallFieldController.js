({
    handleChange: function(component, event, helper) {
        var inputValue = event.getSource().get("v.value");
        component.set("v.fieldValue", inputValue);
    }
})