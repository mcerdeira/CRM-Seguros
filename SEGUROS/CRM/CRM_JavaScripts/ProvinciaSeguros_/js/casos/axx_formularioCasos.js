var ROL_ASEGURADO = '282270000';
var ROL_PRODUCTOR = '282270001';
var ROL_BENEFICIARIO = '282270002';
var ROL_ABOGADO = '282270003';
var ROL_TALLERISTA = '282270004';
var ROL_GESTIONADOR = '282270005';
var ROL_TERCERO = '282270006';
var ROL_EMPLEADOBPBA = '282270007';

function inicializarFormCasos(executionContext)
{
	llenarCampoCliente(executionContext);
	mostrarCampoCertificado(executionContext);
	mostrarCamposDependientesRol(executionContext);
	mostrarCamposDependientesEnNombreDeQuien(executionContext);
	mostrarCampoPolizas(executionContext);
	bloquearCampos(executionContext);
	var formContext = executionContext.getFormContext();
	// formContext.getControl("axx_ramo").addPreSearch(changeRamos);
	formContext.getControl("axx_equipo").setDisabled(true);
	if (formContext.getAttribute("axx_mensaje").getValue() == null) formContext.getControl("axx_mensaje").setDisabled(true);
	// En producción pidieron no ver el tema de los mensajes hasta no capacitar a los usuarios en el tema.
	if (document.location.host == "pseguros.crm2.dynamics.com") formContext.ui.tabs.get('general').sections.get("general_section_6").setVisible(false);
} /*------------------------------------------------------------------------------------------*/

function bloquearCampos(executionContext)
{
	var formContext = executionContext.getFormContext();
	if (formContext.getAttribute('ticketnumber').getValue())
	{
		//        formContext.getControl('axx_ennombredequien').setDisabled(true);
		//         formContext.getControl('axx_nid').setDisabled(true);
		//         formContext.getControl('axx_nrodecertificado').setDisabled(true);
		//         formContext.getControl('axx_nrodepoliza').setDisabled(true);
		//         formContext.getControl('axx_nrodesiniestro').setDisabled(true);
		//         formContext.getControl('axx_ramo').setDisabled(true);
		//        
		//        formContext.getControl('axx_quieneselasegurado').setDisabled(true);
		//        formContext.getControl('axx_quiensecontacta').setDisabled(true);
		//        formContext.getControl('axx_rol').setDisabled(true);
		//        formContext.getControl('caseorigincode').setDisabled(true);
		//        formContext.getControl('casetypecode').setDisabled(true);
		//        formContext.getControl('axx_aseguradoid').setDisabled(true);
		//        formContext.getControl('axx_beneficiarioid').setDisabled(true);
		//        formContext.getControl('axx_talleristaid').setDisabled(true);
		//        formContext.getControl('axx_gestionadorid').setDisabled(true);
		//        formContext.getControl('axx_terceroid').setDisabled(true);
		//        formContext.getControl('axx_empleadobpbaid').setDisabled(true);
	}
} /*------------------------------------------------------------------------------------------*/

function changeRamos(executionContext)
{
	var formContext = executionContext.getFormContext();
	if (formContext.getAttribute('axx_ramo').getValue())
	{
		formContext.getAttribute('axx_ramo').getValue()[0].name;
		formContext.getControl("axx_nrodepoliza").setDisabled(false);
	}
	else formContext.getControl("axx_nrodepoliza").setDisabled(true);
} /*------------------------------------------------------------------------------------------*/

function changeAsegurado(executionContext)
{
	var formContext = executionContext.getFormContext();
    var asegurado = formContext.getAttribute("axx_aseguradoid").getValue()
	if (asegurado)
	{
		formContext.getControl("axx_nid").setDisabled(false);
		formContext.getControl("axx_nrodesiniestro").setDisabled(false);
		var rolSeleccionado = formContext.getAttribute("axx_rol").getValue();
		if (rolSeleccionado == ROL_ABOGADO)
		{
			formContext.getAttribute('axx_quiensecontacta').setValue(formContext.getAttribute("axx_abogadoid").getValue());
		}
		else if (rolSeleccionado == ROL_TALLERISTA)
		{
			formContext.getAttribute("axx_quiensecontacta").setValue(formContext.getAttribute("axx_talleristaid").getValue());
		}
		else if (rolSeleccionado == ROL_GESTIONADOR)
		{
			formContext.getAttribute("axx_quiensecontacta").setValue(formContext.getAttribute("axx_gestionadorid").getValue());
		}
		else if (rolSeleccionado == ROL_TERCERO)
		{
			formContext.getAttribute("axx_quiensecontacta").setValue(formContext.getAttribute("axx_terceroid").getValue());
		}
		else if (rolSeleccionado != ROL_PRODUCTOR)
		{
			formContext.getAttribute('axx_quiensecontacta').setValue(formContext.getAttribute("axx_aseguradoid").getValue());
			formContext.getAttribute('axx_ennombredequien').setValue(formContext.getAttribute("axx_aseguradoid").getValue());
		}
	}
    //LIMPIO LOS CAMPOS DEL DETALLE DE LA POLIZA SI ESTA EN NULL
    else if (asegurado == null)
    {
        formContext.getAttribute("axx_ramo").setValue(null);
        formContext.getAttribute("axx_nrodepoliza").setValue(null);
        formContext.getAttribute("axx_productorasociado").setValue(null);
        formContext.getAttribute("axx_nrodecertificado").setValue(null);
        formContext.getAttribute("axx_nrodesiniestro").setValue(null);
        formContext.getAttribute("axx_nid").setValue(null);       
    }
	else
	{
		formContext.getControl("axx_nid").setDisabled(true);
		formContext.getControl("axx_nrodesiniestro").setDisabled(true);
	}   
} /*------------------------------------------------------------------------------------------*/

function changeEmpleadoBPBA(executionContext)
{
	var formContext = executionContext.getFormContext();
	if (formContext.getAttribute("axx_aseguradoid").getValue())
	{
		formContext.getControl("axx_nid").setDisabled(false);
		formContext.getControl("axx_nrodesiniestro").setDisabled(false);
	}
	else
	{
		formContext.getControl("axx_nid").setDisabled(true);
		formContext.getControl("axx_nrodesiniestro").setDisabled(true);
	}
} /*------------------------------------------------------------------------------------------*/

function changeMensaje(executionContext)
{
	var formContext = executionContext.getFormContext();
	if (formContext.getAttribute("axx_mensaje").getValue() != null && formContext.getAttribute("axx_mensaje").getValue()[0].id)
	{
		var mensajeId = formContext.getAttribute("axx_mensaje").getValue()[0].id;
		MakeRequest("axx_mensajepormotivos?$select=axx_descripcion,&$filter=axx_mensajepormotivoid%20eq%20" + mensajeId,

		function (result)
		{
			var descripcion = result.value[0].axx_descripcion;
			if (descripcion) formContext.getAttribute("axx_texto").setValue(descripcion);
		});
	}
	else formContext.getAttribute("axx_texto").setValue("");
} /*------------------------------------------------------------------------------------------*/

function changeMotivo(executionContext)
{
	var formContext = executionContext.getFormContext();
	if (!formContext.getAttribute("axx_motivoid").getValue())
	{
		formContext.getAttribute("axx_equipo").setValue(null);
		formContext.getAttribute("axx_mensaje").setValue(null);
		formContext.getAttribute("axx_texto").setValue(null);
		formContext.getControl('axx_mensaje').setDisabled(true);
	}
	else
	{
		var motivoId = formContext.getAttribute("axx_motivoid").getValue()[0].id.replace('{', "").replace('}', "");
		MakeRequest("axx_mensajepormotivos?$filter=_axx_motivo_value%20eq%20" + motivoId,

		function (result)
		{
			if (result.value[0]) formContext.getControl('axx_mensaje').setDisabled(false);
			else formContext.getControl('axx_mensaje').setDisabled(true);
		});
	}
} /*------------------------------------------------------------------------------------------*/

function MakeRequest(query, successCallback)
{
	var req = new XMLHttpRequest();
	req.open("GET", 'https://' + window.location.hostname + "/api/data/v8.2/" + query, true);
	req.setRequestHeader("OData-MaxVersion", "4.0");
	req.setRequestHeader("OData-Version", "4.0");
	req.setRequestHeader("Accept", "application/json");
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
	req.onreadystatechange = function ()
	{
		if (this.readyState === 4)
		{
			req.onreadystatechange = null;
			if (this.status === 200)
			{
				var result = JSON.parse(this.response);
				successCallback(result);
			}
			else
			{
				alert("Error Call");
			}
		}
	};
	req.send();
} /*------------------------------------------------------------------------------------------*/

function mostrarCampoCertificado(executionContext)
{
	var formContext = executionContext.getFormContext();
	if (formContext.getAttribute("axx_nrodepoliza").getValue() == null)
	{
		// formContext.getControl("axx_nrodecertificado").setVisible(false);
		formContext.getControl("axx_nrodecertificado").setDisabled(true);
	}
	else
	{
		// formContext.getControl("axx_nrodecertificado").setVisible(true);
		formContext.getControl("axx_nrodecertificado").setDisabled(false);
	}
} /*------------------------------------------------------------------------------------------*/

function mostrarCampoPolizas(executionContext)
{
	var formContext = executionContext.getFormContext();
	if ((formContext.getAttribute("axx_aseguradoid").getValue() == null || formContext.getAttribute("axx_ramo").getValue() == null) && (formContext.getAttribute("axx_empleadobpbaid").getValue() == null || formContext.getAttribute("axx_ramo").getValue() == null))
	{
		formContext.getControl("axx_nrodepoliza").setDisabled(true);
	}
	else
	{
		formContext.getControl("axx_nrodepoliza").setDisabled(false);
		var rolSeleccionado = formContext.getAttribute("axx_rol").getValue();
		// if (formContext.getAttribute("axx_empleadobpbaid").getValue()) formContext.getAttribute('axx_ennombredequien').setValue(formContext.getAttribute("axx_aseguradoid").getValue());
		//if ((formContext.getAttribute("axx_aseguradoid").getValue()) && rolSeleccionado != ROL_EMPLEADOBPBA)
		//formContext.getAttribute('axx_ennombredequien').setValue(formContext.getAttribute("axx_aseguradoid").getValue());

	} /*------------------------------------------------------------------------------------------*/
}
function bloquearCampoEquipo(executionContext)
	{
		var formContext = executionContext.getFormContext();
		if (formContext.getAttribute("axx_motivoid").getValue() == null)
		{
			formContext.getControl("axx_equipo").setDisabled(true);
		}
		else
		{
			formContext.getControl("axx_equipo").setDisabled(false);
		}
	} /*------------------------------------------------------------------------------------------*/

function mostrarCamposDependientesRol(executionContext)
	{
		var formContext = executionContext.getFormContext();
		// Guardo en una variable local el rol seleccionado, para reducir las invocaciones a formContext cada vez que necesito ese valor.
		// Defino constantes para que sea más legible el código.
		var rolSeleccionado = formContext.getAttribute("axx_rol").getValue();
		if (formContext.ui.getFormType() == 1)
		{
			if (formContext.getAttribute("axx_quiensecontacta"))
			{
				formContext.getAttribute("axx_quiensecontacta").setValue(null);
			}
		}
		mostrarCamposSegunRol(rolSeleccionado, executionContext);
		seteoRequeridosSegunRol(rolSeleccionado, executionContext);
	} /*------------------------------------------------------------------------------------------*/

function mostrarCamposSegunRol(rolSeleccionado, executionContext)
	{
		// Guardo los campos en variables locales por una cuestión de performance (MS recomienda no acceder al  formContext cada vez que se usan).
		var formContext = executionContext.getFormContext();
		var enNombreDeControl = formContext.getControl("axx_ennombredequien");
		var quienEsAseguradoControl = formContext.getControl("axx_quieneselasegurado");
		var nombreProductorControl = formContext.getControl("axx_nrodeproductor");
		var quienSeContacta = formContext.getControl("axx_quiensecontacta");
		var nroProductor = formContext.getControl("axx_nrodeproductor");
		var nroProductorQuickView = formContext.ui.quickForms.getByName("axx_nroDeProductor");
		var asegurado = formContext.getControl("axx_aseguradoid")
		var beneficiario = formContext.getControl("axx_beneficiarioid");
		var abogado = formContext.getControl("axx_abogadoid")
		var tallerista = formContext.getControl("axx_talleristaid");
		var gestionador = formContext.getControl("axx_gestionadorid");
		var tercero = formContext.getControl("axx_terceroid");
		var empleadoBpba = formContext.getControl("axx_empleadobpbaid");
		// Oculto los capos obsoletos (que ya no se usan por el campo que pidieron ahora, historia de usuario 562).
		quienEsAseguradoControl.setVisible(false);
		// Defino las reglas negocio de ocultamiento de cada campo.
		var mostrarAsegurado = (rolSeleccionado == ROL_ASEGURADO) || (rolSeleccionado == ROL_PRODUCTOR) || (rolSeleccionado == ROL_BENEFICIARIO) || (rolSeleccionado == ROL_ABOGADO) || (rolSeleccionado == ROL_TALLERISTA) || (rolSeleccionado == ROL_GESTIONADOR) || (rolSeleccionado == ROL_TERCERO);
		var mostrarBeneficiario = (rolSeleccionado == ROL_BENEFICIARIO);
		var mostrarTallerista = (rolSeleccionado == ROL_TALLERISTA);
		var mostrarGestionador = (rolSeleccionado == ROL_GESTIONADOR);
		var mostrarTercero = (rolSeleccionado == ROL_TERCERO);
		var mostrarEmpleadoBPBA = (rolSeleccionado == ROL_EMPLEADOBPBA);
		var mostrarAbogado = (rolSeleccionado == ROL_ABOGADO);
		var mostrarQuienSeContacta = (rolSeleccionado == ROL_PRODUCTOR);
		var mostrarEnNombreDe = (rolSeleccionado == ROL_ABOGADO) || (rolSeleccionado == ROL_TALLERISTA) || (rolSeleccionado == ROL_EMPLEADOBPBA);
		var mostrarNombreProductorControl = (rolSeleccionado == ROL_PRODUCTOR);
		var mostrarNumeroProductorControl = (rolSeleccionado == ROL_PRODUCTOR);
		var mostrarProductorQuickView = (rolSeleccionado == ROL_PRODUCTOR);
		// Oculto los campos según el valor de las reglas de negocio.
		enNombreDeControl.setVisible(mostrarEnNombreDe);
		quienSeContacta.setVisible(mostrarQuienSeContacta);
		asegurado.setVisible(mostrarAsegurado);
		beneficiario.setVisible(mostrarBeneficiario);
		abogado.setVisible(mostrarAbogado);
		tallerista.setVisible(mostrarTallerista);
		gestionador.setVisible(mostrarGestionador);
		tercero.setVisible(mostrarTercero);
		empleadoBpba.setVisible(mostrarEmpleadoBPBA);
		nombreProductorControl.setVisible(mostrarNombreProductorControl);
		nroProductor.setVisible(mostrarNumeroProductorControl);
		nroProductorQuickView.setVisible(mostrarProductorQuickView);
	} /*------------------------------------------------------------------------------------------*/

function seteoRequeridosSegunRol(rolSeleccionado, executionContext)
	{
		// Seteo los campos requeridos
		var formContext = executionContext.getFormContext();
		var asegurado = formContext.getAttribute("axx_aseguradoid");
		var nroProductor = formContext.getAttribute("axx_nrodeproductor");
		var beneficiario = formContext.getAttribute("axx_beneficiarioid");
		var abogado = formContext.getAttribute("axx_abogadoid");
		var tallerista = formContext.getAttribute("axx_talleristaid");
		var gestionador = formContext.getAttribute("axx_gestionadorid");
		var tercero = formContext.getAttribute("axx_terceroid");
		var empleadoBpba = formContext.getAttribute("axx_empleadobpbaid");
		var quienSeContacta = formContext.getAttribute("axx_quiensecontacta");
		var enNombreDeQuien = formContext.getAttribute("axx_ennombredequien");
		var quienEsElAsegurado = formContext.getAttribute("axx_quieneselasegurado");
		// Defino las reglas negocio de obligatoriedad de cada campo.
		var aseguradoRequerido = (rolSeleccionado == ROL_ASEGURADO) || (rolSeleccionado == ROL_PRODUCTOR) || (rolSeleccionado == ROL_BENEFICIARIO) || (rolSeleccionado == ROL_ABOGADO) || (rolSeleccionado == ROL_TALLERISTA) || (rolSeleccionado == ROL_GESTIONADOR) || (rolSeleccionado == ROL_TERCERO) ? "required" : "none";
		var beneficiarioRequerido = (rolSeleccionado == ROL_BENEFICIARIO) ? "required" : "none";
		var abogadoRequerido = (rolSeleccionado == ROL_ABOGADO) ? "required" : "none";
		var talleristaRequerido = (rolSeleccionado == ROL_TALLERISTA) ? "required" : "none";
		var gestionadorRequerido = (rolSeleccionado == ROL_GESTIONADOR) ? "required" : "none";
		var terceroRequerido = (rolSeleccionado == ROL_TERCERO) ? "required" : "none";
		var empleadoBpbaRequerido = (rolSeleccionado == ROL_EMPLEADOBPBA) ? "required" : "none";
		var nroProductorRequerido = (rolSeleccionado == ROL_PRODUCTOR) ? "required" : "none";
		// Seteo  campos requeridos según reglas de negocio definidas previamente.
		asegurado.setRequiredLevel(aseguradoRequerido);
		nroProductor.setRequiredLevel(nroProductorRequerido);
		beneficiario.setRequiredLevel(beneficiarioRequerido);
		abogado.setRequiredLevel(abogadoRequerido);
		tallerista.setRequiredLevel(talleristaRequerido);
		gestionador.setRequiredLevel(gestionadorRequerido);
		tercero.setRequiredLevel(terceroRequerido);
		empleadoBpba.setRequiredLevel(empleadoBpbaRequerido);
		quienSeContacta.setRequiredLevel("none");+
		enNombreDeQuien.setRequiredLevel("none");
		quienEsElAsegurado.setRequiredLevel("none");
	} /*------------------------------------------------------------------------------------------*/

function llenarCampoCliente(executionContext)
	{
		var formContext = executionContext.getFormContext();
		// Productor o Gestionador o Empleado BPBA
		if (formContext.getAttribute("axx_rol").getValue() == ROL_EMPLEADOBPBA)
		{
			formContext.getAttribute("axx_aseguradoid").setValue(formContext.getAttribute("axx_ennombredequien").getValue());
			formContext.getAttribute("axx_aseguradoid").fireOnChange();
            formContext.getAttribute("axx_quieneselasegurado").setValue(formContext.getAttribute("axx_aseguradoid").getValue());

		}
		formContext.getAttribute("customerid").setValue(formContext.getAttribute("axx_aseguradoid").getValue());
		formContext.getAttribute("customerid").fireOnChange();
		formContext.getAttribute("axx_quieneselasegurado").setValue(formContext.getAttribute("axx_aseguradoid").getValue());
		//   formContext.getAttribute("axx_ennombredequien").setValue(formContext.getAttribute("axx_aseguradoid").getValue());
		//formContext.getAttribute("axx_quiensecontacta").setValue(formContext.getAttribute("axx_aseguradoid").getValue());
	} /*------------------------------------------------------------------------------------------*/

function mostrarCamposDependientesEnNombreDeQuien(executionContext)
	{
		var formContext = executionContext.getFormContext();
		if (formContext.getAttribute("axx_ennombredequien").getValue() == null)
		{
			// formContext.getControl("axx_nid").setVisible(false);
			formContext.getControl("axx_nid").setDisabled(true);
			// formContext.getControl("axx_nrodesiniestro").setVisible(false);
			formContext.getControl("axx_nrodesiniestro").setDisabled(true);
			// formContext.getControl("axx_nrodepoliza").setVisible(false);
			formContext.getControl("axx_nrodepoliza").setDisabled(true);
		}
		else
		{
			// formContext.getControl("axx_nid").setVisible(true);
			formContext.getControl("axx_nid").setDisabled(false);
			// formContext.getControl("axx_nrodesiniestro").setVisible(true);
			formContext.getControl("axx_nrodesiniestro").setDisabled(false);
			// formContext.getControl("axx_nrodepoliza").setVisible(true);
			formContext.getControl("axx_nrodepoliza").setDisabled(false);
		}
	} /*------------------------------------------------------------------------------------------*/

function llenarCampoEnNombreDe_QuienSeContacta(executionContext)
	{
		var formContext = executionContext.getFormContext();
		// Asegurado
		if (formContext.getAttribute("axx_rol").getValue() == 282270000)
		{
			formContext.getAttribute("axx_ennombredequien").setValue(formContext.getAttribute("axx_aseguradoid").getValue());
			formContext.getAttribute("axx_ennombredequien").fireOnChange();
		}
	} /*------------------------------------------------------------------------------------------*/

function llenarCampoQuienEsElAsegurado_EnNombreDeQuien(executionContext)
	{
		var formContext = executionContext.getFormContext();
		// Productor o Gestionador o Empleado BPBA
		if (formContext.getAttribute("axx_rol").getValue() == ROL_PRODUCTOR || ROL_GESTIONADOR || ROL_EMPLEADOBPBA)
		{
			formContext.getAttribute("axx_aseguradoid").setValue(formContext.getAttribute("axx_ennombredequien").getValue());
			formContext.getAttribute("axx_aseguradoid").fireOnChange();
		}
	} /*------------------------------------------------------------------------------------------*/

function llenarCampoQuienEsElAsegurado_QuienSecontacta(executionContext)
	{
		var formContext = executionContext.getFormContext();
		// Asegurado
		if (formContext.getAttribute("axx_rol").getValue() == 282270000)
		{
			formContext.getAttribute("axx_quieneselasegurado").setValue(formContext.getAttribute("axx_quiensecontacta").getValue());
			formContext.getAttribute("axx_quieneselasegurado").fireOnChange();
		}
	} /*------------------------------------------------------------------------------------------*/

function llenarCampoQuienSeContacta(executionContext)
	{
		var formContext = executionContext.getFormContext();
		var rolSeleccionado = formContext.getAttribute("axx_rol").getValue();
		if (rolSeleccionado == ROL_ABOGADO)
		{
			formContext.getAttribute("axx_quiensecontacta").setValue(formContext.getAttribute("axx_abogadoid").getValue());
			//formContext.getAttribute("axx_quieneselasegurado").fireOnChange();
		}
		else if (rolSeleccionado == ROL_TALLERISTA)
		{
			formContext.getAttribute("axx_quiensecontacta").setValue(formContext.getAttribute("axx_talleristaid").getValue());
		}
		else if (rolSeleccionado == ROL_GESTIONADOR)
		{
			formContext.getAttribute("axx_quiensecontacta").setValue(formContext.getAttribute("axx_gestionadorid").getValue());
		}
		else if (rolSeleccionado == ROL_TERCERO)
		{
			formContext.getAttribute("axx_quiensecontacta").setValue(formContext.getAttribute("axx_terceroid").getValue());
		}
	} /*------------------------------------------------------------------------------------------*/

//Ocultar opcion de campo canal Iot
function ocultarCanal(executionContext)
{
var formContext = executionContext.getFormContext();
formContext.getControl("caseorigincode").removeOption(282270001);
formContext.getControl("caseorigincode").removeOption(700610000);

}	