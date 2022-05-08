sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
  //  "logaligroup/sapui5/model/Model",
  //  "sap/ui/model/resource/ResourceModel"
] , 
/**
 * 
 * @param {typeof sap.ui.core.Controller} Controller
 * @param {typeof sap.m.MessageToast} MessageToast
 * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
 */
function(Controller, MessageToast, Model, ResourceModel){
    "use strict";
    return Controller.extend("logaligroup.sapui5.controller.App", {
        
        onInit: function(){
            //set data model on the view
            //this.getView().setModel(Model.createRecipient());

            //set i18n model on the view
            //var i18nModel = new ResourceModel({ bundleName : "logaligroup.sapui5.i18n.i18n"})
            //this.getView().setModel(i18nModel, "i18n");
        },
        onShowHello: function(){
            // read text from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            //read property from data model
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        }

    });
     
    });
