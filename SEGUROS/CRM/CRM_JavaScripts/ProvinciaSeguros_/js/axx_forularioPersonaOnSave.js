/*--------------------------------------------------------------------------------------------------------*/

// En base al tipo de persona (jurídica o física) muestra un formulario u otro.

function setearCampoTipoPersona(executionContext) {

    var formContext = executionContext.getFormContext();
    var valueFisica = 282270000;
    var valueJuridica = 282270001;
    //var razonsocial = formContext.getAttribute("axx_razonsocial").getValue();

    var formName = formContext.ui.formSelector.getCurrentItem().getLabel();


    formName == "Persona Física" ? formContext.getAttribute("axx_tipopersona").setValue(valueFisica) :  formContext.getAttribute("axx_tipopersona").setValue(valueJuridica)

    formContext.data.entity.attributes.get("axx_tipopersona").getSelectedOption().value;
    
//   formContext.getAttribute(razonsocial).setValue("name")
// formContext.getAttribute("axx_tipopersona").setValue()



}