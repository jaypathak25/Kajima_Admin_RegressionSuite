package kajima.venueadmin.stepDefinition;

import java.awt.AWTException;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Bookings_Page;
import kajima.venueadmin.pom_pages.Login_Page;
import kajima.venueadmin.pom_pages.Reminder_Page;

public class Bookings_SD extends TestBase {
	
	Reminder_Page reminder_page;
	Login_Page login_page;
	Bookings_Page bookings_page;
	
	
	public Bookings_SD() {
		reminder_page = new Reminder_Page();
		login_page = new Login_Page();
		bookings_page = new Bookings_Page();
	}
	
	
//=============================================Before Steps====================================================
	
	@Then("^enter credentials and Login$")
	public void enter_credentials_and_Login() {
		login_page.loginAsMasterAdmin();
	}

	@When("^user navigates to the homepage$")
	public void user_navigates_to_the_homepage(){
		login_page.verifyLogin();
	}

	@Then("^User clicks the Bookings tab$")
	public void user_clicks_the_Bookings_tab() {
		bookings_page.verify_clickBookingsTab();
	}
	
//===========Scenario: Search and filter - verify booking results with different search/filter Criteria, summary view and exports==================

	@Then("^User changes the number of enteries and verify results$")
	public void user_changes_the_number_of_enteries_and_verify_results() throws InterruptedException {
		bookings_page.verify_noOfEnteries();

	}

	@Then("^User enters room name OR clients name in the search bar and verify the result$")
	public void user_enters_room_name_OR_clients_name_in_the_search_bar_and_verify_the_result() throws InterruptedException  {
		bookings_page.verify_searchBar();
	}

	@Then("^User verify booking results by selecting different STATUS options$")
	public void user_verify_booking_results_by_selecting_different_STATUS_options() throws InterruptedException {
		bookings_page.verify_bookingStatusOpn();
	}

	@Then("^User verify booking results by selecting different PAYMENT STATUS options$")
	public void user_verify_booking_results_by_selecting_different_PAYMENT_STATUS_options() throws InterruptedException {
		bookings_page.verify_paymentStatusOpn();
	}

	@Then("^User verify booking results by selecting different date range$")
	public void user_verify_booking_results_by_selecting_different_date_range() throws InterruptedException {
		bookings_page.verify_searchBookingByDateRange();
	}

	@Then("^User verify the summary option and view the booking$")
	public void user_verify_the_summary_option_and_view_the_booking() throws InterruptedException  {
		bookings_page.verify_summaryOpnAndView();
	}

	@Then("^User select Export excel button and verify that excel generated successfully$")
	public void user_select_Export_excel_button_and_verify_that_excel_generated_successfully() throws InterruptedException {
		bookings_page.verify_excelExport();
	}
	
//==========================Scenario: Edit bookings - Filter booking by payment status and Edit====================================

	@Then("^User filter the booking by FULLY PAID payment status and edit the booking$")
	public void user_filter_the_booking_by_FULLY_PAID_payment_status_and_edit_the_booking() throws InterruptedException, AWTException {
	//	bookings_page.edit_fullyPaidBooking();
	}

	@Then("^User filter the booking by BILLED payment status and edit the booking$")
	public void user_filter_the_booking_by_BILLED_payment_status_and_edit_the_booking() {

	}

	@Then("^User filter the booking by UNBILLED payment status and edit the booking$")
	public void user_filter_the_booking_by_UNBILLED_payment_status_and_edit_the_booking() {

	}
	
//=======================Scenario: Cancel single WP fully paid bookings - verify refund option and refund generated==============================

	@Then("^User cancel the single WP fully paid booking and verify the refund and check refund in the clients tab$")
	public void user_cancel_the_single_WP_fully_paid_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab() {

	}

	@Then("^user verify that the refund raised allocated to the relevant CN for the booking$")
	public void user_verify_that_the_refund_raised_allocated_to_the_relevant_CN_for_the_booking() {

	}
	
//=======================Scenario: Cancel single manual fully paid bookings - verify refund option and refund generated=================

	@Then("^User cancel the single manual fully paid booking and verify the refund and check refund in the clients tab$")
	public void user_cancel_the_single_manual_fully_paid_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab() {

	}

	@Then("^user verify that refund raised allocated to the relevant CN for the booking$")
	public void user_verify_that_refund_raised_allocated_to_the_relevant_CN_for_the_booking() {

	}
	
//=========================Scenario: Cancel multiple WP fully paid bookings - verify refund option and refund generated===============

	@Then("^User cancel the multiple WP fully paid booking and verify the refund and check refund in the clients tab$")
	public void user_cancel_the_multiple_WP_fully_paid_booking_and_verify_the_refund_and_check_refund_in_the_clients_tab(){

	}

	@Then("^user verify that the refund raised aloocated to relevant CN for the booking$")
	public void user_verify_that_the_refund_raised_allocated_to_relevant_CN_for_the_booking()  {

	}

//==========================Scenario: Cancel unbilled and billed bookings - verify refund option is not displayed===============

	@Then("^User cancel the unbilled booking and verify that the refund is not displayed$")
	public void user_cancel_the_unbilled_booking_and_verify_that_the_refund_is_not_displayed() throws InterruptedException  {
		bookings_page.cancel_billed_WP_Single_Booking();
	}

	@Then("^User cancel the billed booking and verify that the refund is not displayed$")
	public void user_cancel_the_billed_booking_and_verify_that_the_refund_is_not_displayed() throws InterruptedException {
		bookings_page.cancel_unBilled_WP_Single_Booking();
	}
	
//========================Scenario: Cancel fully paid bookings - verify refund option when cancel booking from Calender,Clients tab.================

	@Then("^User cancel the fully paid booking from the calender tab and verify that the refund is displayed as expected$")
	public void user_cancel_the_fully_paid_booking_from_the_calender_tab_and_verify_that_the_refund_is_displayed_as_expected() {

	}

	@Then("^User cancel the fully paid booking from the Clients tab and verify that the refund is displayed as expected$")
	public void user_cancel_the_fully_paid_booking_from_the_Clients_tab_and_verify_that_the_refund_is_displayed_as_expected() {

	}
	
//=======================Scenario: Cancel fully paid bookings for NON BILLABLE client - verify refund option is not displayed========================

	@Then("^User cancel the fully paid booking for non billable client to verify that the refund option is NOT displayed$")
	public void user_cancel_the_fully_paid_booking_for_non_billable_client_to_verify_that_the_refund_option_is_NOT_displayed() {

	}
	
//========================Scenario: Enable-Disable refund feature from master admin and verify the disabled refund option from MVAs==================================

	@Then("^User disable the refund feature from the master admin and ensure no refund option displays when master admin cancels booking$")
	public void user_disable_the_refund_feature_from_the_master_admin_and_ensure_no_refund_option_displays_when_master_admin_cancels_booking() {
		bookings_page.verifyRefundFunc();
	}
	
//=======================Scenario: Cancel tentative booking and verify the result===================================================================

	@Then("^User cancel the booking with Tentative status and verify that no generate CN and Refund option displays$")
	public void user_cancel_the_booking_with_Tentative_status_and_verify_that_no_generate_CN_and_Refund_option_displays() {
		bookings_page.cancel_tentative_Booking();
	}

	
//========================Scenario: Raise a booking via new booking button===========================================================================
	
	@Then("^User selects a new Booking button and raise a single with clinical rooms and ensure that venue admin not restricted by CCG rules$")
	public void user_selects_a_new_Booking_button_and_raise_a_single_with_clinical_rooms_and_ensure_that_venue_admin_not_restricted_by_CCG_rules() {

	}

	@Then("^User selects a new Booking button and raise a single with Non clinical rooms and ensure that venue admin not restricted by CCG rules$")
	public void user_selects_a_new_Booking_button_and_raise_a_single_with_Non_clinical_rooms_and_ensure_that_venue_admin_not_restricted_by_CCG_rules()  {

	}

	@Then("^User selects a new Booking button and raise daily recurring booking$")
	public void user_selects_a_new_Booking_button_and_raise_daily_recurring_booking() {

	}

}
