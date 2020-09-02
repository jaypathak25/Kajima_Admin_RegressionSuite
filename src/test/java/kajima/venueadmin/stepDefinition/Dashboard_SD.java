package kajima.venueadmin.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.pom_pages.Dashboard_Page;
import kajima.venueadmin.pom_pages.Login_Page;

public class Dashboard_SD {
	
	Login_Page login_page;
	Dashboard_Page dashboard_page;
	
	
	public Dashboard_SD() {
	
		login_page = new Login_Page();
		dashboard_page = new Dashboard_Page();
	}
	
	
//=============================================Before Steps======================================================================
	
	@Then("^enter username and pswd$")
	public void enter_username_and_pswd() {
		login_page.loginAsMasterAdmin();
	}

	@When("^User lands on the dashboard$")
	public void User_lands_on_the_dashboard(){
		login_page.verifyLogin();
	}
	
//=============================Scenario: verify clicking hyperlinks to view bookings & hirers=====================================

	@Then("^User clicks the hyperink to view bookings and hirers$")
	public void user_clicks_the_hyperink_to_view_bookings_and_hirers() throws InterruptedException {
		dashboard_page.verify_clickBookingsLinks();
		dashboard_page.verify_clickEnquiryLinks();
	}
	
//==================================Scenario: verify Viewing an invoice, sending a reminder and adding a note======================================

	@Then("^User clicks the send reminder hyperlink from the invoice table and send the reminder$")
	public void User_clicks_the_send_reminder_hyperlink_from_the_invoice_table_and_send_the_reminder() throws InterruptedException {
		dashboard_page.verify_sendReminderFromLink();
	}
	
	
	@Then("^User clicks the hyperlink to view invoice and sends a reminder$")
	public void user_clicks_the_hyperlink_to_view_invoice_and_sends_a_reminder() throws InterruptedException {
		dashboard_page.verify_clickInvoiceLink_sendReminder();
	}
	
	@Then("^User clicks the hyperlink to view invoice and add a note$")
	public void user_clicks_the_hyperlink_to_view_invoice_and_add_a_note() {
		dashboard_page.verify_AddingNotes();
	}
	

}
