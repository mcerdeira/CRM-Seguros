function nombre(executionContext)
{
    var formContext = executionContext.getFormContext();
    var names = formContext.getAttribute("axx_name").getValue();
    var id = formContext.getAttribute("axx_id").getValue();
    var fecha = formContext.getAttribute("createdon").getValue();
    
    if (names == null){
            
        formContext.getAttribute('axx_name').setValue(createdon);
        }
}