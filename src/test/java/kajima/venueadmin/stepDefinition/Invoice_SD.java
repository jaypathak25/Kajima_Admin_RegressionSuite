package kajima.venueadmin.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Invoice_Page;
import kajima.venueadmin.pom_pages.Login_Page;
import kajima.venueadmin.pom_pages.Reminder_Page;

public class Invoice_SD extends TestBase {
	
	Invoice_Page invoice_page;
	Login_Page login_page;
	

	//***************************Before steps*****************************************************************************
		
		public Invoice_SD() {
			invoice_page = new Invoice_Page();
			login_page = new Login_Page();	
		}
	
	@Then("^enter required credential to Login$")
	public void enter_required_credential_to_Login(){
		login_page.loginAsMasterAdmin();
	}
	
	@When("^User navigate to homepage$")
	public void user_navigate_to_homepage(){
		login_page.verifyLogin();
		invoice_page.selectVenue();
	}
	
	@Then("^User clicks the Invoice tab$")
	public void user_clicks_the_Invoice_tab(){
		invoice_page.clickInvoicetab();	
	}

//==========================================Scenario: Verify Invoice sub-tabs===============================================
	
	@Then("^User clicks all the sub-tabs one by one and verify the screen title$")
	public void user_clicks_all_the_sub_tabs_one_by_one_and_verify_the_screen_title() throws InterruptedException {
		invoice_page.check_invoiceSubTabs();
	}
	
	
//===========================Scenario: verify view invoice with awaiting payment status and void the invoice=================

	@Then("^User navigate to Invoice awaiting payment subtab, view the Invoice, void it and verify the result$")
	public void user_navigate_to_Invoice_awaiting_payment_subtab_view_the_Invoice_void_it_and_verify_the_result() throws InterruptedException {
		invoice_page.view_invoiceAPVoid();
	}
	
//=====================================Scenario: verify Generate an invoice and email the select one==========================

	@Then("^User do the invoice run and email the selected invoice from the draft tab and verify the result$")
	public void user_do_the_invoice_run_and_email_the_selected_invoice_from_the_draft_tab_and_verify_the_result() throws InterruptedException {
		invoice_page.verify_emailSelectedInvoice();
	}
	
//=========================================Scenario: verify Generate an invoice and mark as sent===============================

	@Then("^User do the invoice run, view the generated invoice, mark as sent and verify the result$")
	public void user_do_the_invoice_run_view_the_generated_invoice_mark_as_sent_and_verify_the_result() throws InterruptedException {
		invoice_page.verify_InvoiceMarkAsSent();
	}
	
//==========================================Scenario: verify delete an invoice from the draft invoice tab=====================

	@Then("^User navigate to draft invoice, delete the invoice and verify the result$")
	public void user_navigate_to_draft_invoice_delete_the_invoice_and_verify_the_result() throws InterruptedException {
		invoice_page.delete_draftInvoice();
	}
	
//====================================Scenario: verify email all the invoices by clicking email all invoices button===========

	@Then("^User navigate to draft invoice, click Email all invoices and verify the result$")
	public void user_navigate_to_draft_invoice_click_Email_all_invoices_and_verify_the_result() throws InterruptedException{
		//invoice_page.verify_emailAllInvoice();
	}

}
