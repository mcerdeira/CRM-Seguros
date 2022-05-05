function name(executionContext)
{
    var formContext = executionContext.getFormContext();
    var cobInt = formContext.getAttribute("axx_cobintsol").getValue();
    var name = formContext.getAttribute("axx_name").getValue();
    
    if (cobInt != null){
    
    
        var cobIntName = cobInt[0].name;
        
        formContext.getAttribute("axx_name").setValue(cobIntName);
        }
}