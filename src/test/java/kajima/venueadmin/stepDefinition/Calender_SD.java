package kajima.venueadmin.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.pom_pages.Calender_Page;
import kajima.venueadmin.pom_pages.Login_Page;


public class Calender_SD {
	
	
	Login_Page login_page;
	Calender_Page calender_page;
	
	
	public Calender_SD() {
	
		login_page = new Login_Page();
		calender_page = new Calender_Page();
	}
	
	
//=============================================Before Steps======================================================================
	
	@Then("^Enter credentials$")
	public void Enter_credentials() {
		login_page.loginAsMasterAdmin();
	}

	@When("^User navigate to dasboard homepage$")
	public void User_navigate_to_dasboard_homepage(){
		login_page.verifyLogin();
	}

	@Then("^User clicks the Calender tab$")
	public void user_clicks_the_Calender_tab() throws Throwable {
		calender_page.verify_clickCalendarTab();

	}
	
	
	
	
//================Edit a single occurrence of booking from calender -  Billed and Unbilled============================================================================
	
	@Then("^User creates a single occurance of booking, and edit unbilled status of booking from the Calender$")
	public void user_creates_a_single_occurance_of_booking_and_edit_unbilled_status_of_booking_from_the_Calender() throws Throwable {
		calender_page.createNewBooking_Cal();
		calender_page.editunbilledBooking_Cal();
	}

	@Then("^Billed the booking created in the previous step and edit billed status of booking from the Calender$")
	public void Billed_the_booking_created_in_the_previous_step_and_edit_billed_status_of_booking_from_the_Calender() throws Throwable {
		calender_page.genInvoice_cal();
		calender_page.editbilledBooking_Cal();
	//	calender_page.verify_cancelBilledBooking();
	}


	
//==========================Scenario: Cancel a single from calender - Billed & Unbilled===============================================================================
	
	@Then("^User Cancelling a unbilled single booking from the Calender$")
	public void user_Cancelling_a_unbilled_single_booking_from_the_Calender() throws Throwable {
		calender_page.createNewBookingForCancel_Cal();
		calender_page.verify_cancelUnBilledBooking();

	}
	
	@Then("^User Cancelling a billed single booking from the Calender$")
	public void user_Cancelling_a_billed_single_booking_from_the_Calender() throws Throwable {
		calender_page.createNewBookingForCancel_Cal();
		calender_page.genInvoice_cal();
		calender_page.verify_cancelBilledBooking();
	}
	
//==================================Scenario: Verify viewing bookable space info=======================================================================================

	@Then("^User clicks the bookable space to check the information$")
	public void user_clicks_the_bookable_space_to_check_the_information() throws Throwable {
		calender_page.verify_bookableSpaceInfo();
	}
	
//=====================================Scenario: verify date filter on calender to view the results====================================================================

	@Then("^User selects different dates by clicking previous/forward arrows to view the bookings$")
	public void user_selects_different_dates_by_clicking_previous_forward_arrows_to_view_the_bookings() throws Throwable {
		calender_page.verify_dateNavigation();
	}

	@Then("^User enter the date manually and verify the result$")
	public void user_enter_the_date_manually_and_verify_the_result() throws Throwable {
	//	calender_page.verify_enterDate();
		calender_page.verify_selectDateFrmDatePicker();
	}

//====================================Scenario: verify different calender filter to view the results===================================================================

	@Then("^User selects different catagories from the drop down to view the bookings for the relevant bookable spaces$")
	public void user_selects_different_catagories_from_the_drop_down_to_view_the_bookings_for_the_relevant_bookable_spaces() throws Throwable {
		calender_page.verify_selectcatagory();
	}

	@Then("^User selects view booked room only check box to see only rooms where we have bookings$")
	public void user_selects_view_booked_room_only_check_box_to_see_only_rooms_where_we_have_bookings() throws Throwable {
		calender_page.verify_viewBookedRooms();
	}
//===========================Scenario: Create provisional bookings , confirm it and ensure that admins are not restricted by service types and CCG rules================
//====================This scenario is only applicable for NHS clients =================================
	
	@Then("^admin_create_a_new_booking_from_the_calender_and_ensure_that_it_is_not_restricted_by_service_type_and_CCG_rules_and_finally_confirms_it$")
	public void admin_create_a_new_booking_from_the_calender_and_ensure_that_it_is_not_restricted_by_service_type_and_ccg_rules_and_finally_confirms_it() throws InterruptedException {
		calender_page.verify_CreateBookingRestrictions_NHSONLY();
	}
	
	//=========================================================================================================================
	
}
