// Copyright (c) 2024, AgriTheory and contributors
// For license information, please see license.txt

frappe.ui.form.on("Traccar Integration", {
	refresh: function (frm) {
		frm.page.clear_custom_buttons();
		if (frm.doc.traccar_server_url) {
			frm.add_custom_button(__("Login to Traccar"), function () {
				window.open(frm.doc.traccar_server_url, "_blank");
			});
		}
	},
});