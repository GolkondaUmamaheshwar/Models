sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel"
	
	
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel,ODataModel) {
		"use strict";
		
		return Controller.extend("ux.projectintial.controller.View1", {
		  onInit: function () {

				this.liveData();

			},
		      liveData: function () {

				//Odata model - server side
				var oDataModel = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/");
				this.getView().byId("table").setModel(oDataModel);
				

				//JSON Model - client side
				var jDataModel = new sap.ui.model.json.JSONModel("/sap/opu/odata/sap/EPM_REF_APPS_PO_APV_SRV/PurchaseOrders");
				this.getView().byId("table").setModel(jDataModel, "DataModel");
			}
		});
	});
