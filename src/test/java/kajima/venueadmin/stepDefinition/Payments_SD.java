package kajima.venueadmin.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Invoice_Page;
import kajima.venueadmin.pom_pages.Login_Page;
import kajima.venueadmin.pom_pages.Payments_Page;

public class Payments_SD extends TestBase {
	
	Invoice_Page invoice_page;
	Login_Page login_page;
	Payments_Page payments_page;
	
	
//***************************Before steps*****************************************************************************
		
		
		public Payments_SD() {
			invoice_page = new Invoice_Page();
			login_page = new Login_Page();
			payments_page =  new Payments_Page();
			
		}
	
	@Then("^user entered required credential and Login$")
	public void user_entered_required_credential_and_Login(){
		login_page.loginAsMasterAdmin();
	}
	
	@When("^User have gone to homepage and verify$")
	public void user_navigate_to_homepage_and_verify(){
		login_page.verifyLogin();
	}
	
	
	@Then("^User clicks the Payments tab$")
	public void user_clicks_the_Payments_tab(){
		payments_page.clickPaymentsTab();	
	}
	
//================================Scenario: Verify different payment types=================================================
	
	
	@Then("^User select different payment types from the dropdown to filter out the payments and verify the result$")
	public void user_select_different_payment_types_from_the_dropdown_to_filter_out_the_payments_and_verify_the_result() throws Throwable {
		payments_page.verify_paymentTypeFilter();
	}
	
//==================================Scenario: Verify viewing individual payment details-GC/WP/manual/cash with different statuses and to ensure no refresh option displays=================

	@Then("^User clicks views for different payment types and status and verify the result$")
	public void User_clicks_views_for_different_payment_types_and_status_and_verify_the_result() throws Throwable {
		payments_page.verify_viewPayment();
	}
	
//==================================Scenario: Verify result on screen by using different filters================================

	@Then("^User verify result by selecting different allocation options$")
	public void user_verify_result_by_selecting_different_allocation_options() throws Throwable {
		payments_page.verify_resultByAllocationOpn();
	}
	
	@Then("^User verify result by selecting different reconciliation options$")
	public void user_verify_result_by_selecting_different_reconciliation_options() throws Throwable {
		payments_page.verify_resultByReconciliationOpn();
	}
	
	@Then("^User verify result by selecting different status options$")
	public void user_verify_result_by_selecting_different_status_options() throws Throwable {
		payments_page.verify_resultBystatusOpn();
	}

	@Then("^User verify result by selecting different date range$")
	public void user_verify_result_by_selecting_different_date_range() throws Throwable {
		payments_page.verify_resultByDateRange();
	}
	
//=====================================Scenario: Verify refund subtab and view individual refund details=======================

	@Then("^User navigate to refund tab and view individual refunds$")
	public void user_navigate_to_refund_tab_and_view_individual_refunds() throws Throwable {
		payments_page.verify_viewRefundnFilter();
	}
	
//===========================================Scenario: Verify refund search bar ================================================

	@Then("^User enter search criteria in search bar and verify refund results$")
	public void user_enter_search_criteria_in_search_bar_and_verify_refund_results() throws Throwable {
		payments_page.verify_refundSearchBar();
	}

}
