package kajima.venueadmin.stepDefinition;

import java.awt.AWTException;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Dashboard_Page;
import kajima.venueadmin.pom_pages.Enquiry_Page;
import kajima.venueadmin.pom_pages.Login_Page;

public class Enquiry_SD extends TestBase {
	
	Login_Page login_page;
	Enquiry_Page enquiry_page;
	
	
	
	public Enquiry_SD() {
	
		login_page = new Login_Page();
		enquiry_page =  new Enquiry_Page();
		
		
	}
	
	
//=============================================Before Steps======================================================================
	
	@Then("^enter credentials$")
	public void enter_credentials() {
		login_page.loginAsMasterAdmin();
	}

	@When("^User clicks the enquiry tab$")
	public void User_clicks_the_enquiry_tab(){
		enquiry_page.verify_clickEnquiryTab();
	}
	
//=============================Scenario: Scenario: verify Toggle at the top of the page=====================================

	@Then("^User search different enquiries by entering criteria in the search box$")
	public void user_search_different_enquiries_by_entering_criteria_in_the_search_box() throws InterruptedException  {
		enquiry_page.searchEnquiry();

	}

	@Then("^user selects different number of enteries and check the result$")
	public void user_selects_different_number_of_enteries_and_check_the_result() throws InterruptedException  {
		enquiry_page.verify_noOfEnquiries();
	}
	

//==============================Scenario: verify creating new enquiry as an admin and edit different fields and save==================

	@Then("^User clicks the new enquiry button and create a new enquiry$")
	public void user_clicks_the_new_enquiry_button_and_create_a_new_enquiry()  {
		enquiry_page.verify_createNewEnquiry();

	}

	@Then("^User clicks the Edit link for the newly created enquiry and amend all the editable fields and save it$")
	public void user_clicks_the_Edit_link_for_the_newly_created_enquiry_and_amend_all_the_editable_fields_and_save_it() throws InterruptedException  {
		enquiry_page.verify_EditNewEnquiry();
	}
	
//=========================Scenario: verify creating new enquiry,change the status to Open and edit different fields and save==========

	@Then("^User creates a new enquiry as an admin$")
	public void user_creates_a_new_enquiry_as_an_admin()  {
		enquiry_page.verify_createNewEnquiry();
	}

	@Then("^User change the status to open and edit all the editable fields and save it$")
	public void user_change_the_status_to_open_and_edit_all_the_editable_fields_and_save_it() throws InterruptedException  {
		enquiry_page.verify_ChangeStatusToOpen();
		enquiry_page.verify_EditNewEnquiry();
	}
	
//==========================Scenario: verify change enquiry states and check the states in the current enquiry screen and show closed enquiries screen========

	@Then("^User Creates a new enquiry and click edit to change enquiry state to opened$")
	public void user_Creates_a_new_enquiry_and_click_edit_to_change_enquiry_state_to_opened() throws InterruptedException  {
		enquiry_page.verify_createNewEnquiry();
		enquiry_page.verify_ChangeStatusToOpen();
	}
	
	@Then("^User click edit to change enquiry state to viewing booked$")
	public void user_click_edit_to_change_enquiry_state_to_viewing_booked() throws InterruptedException  {
		enquiry_page.verify_ChangeStatusviewingBooked();
	}

	@Then("^User click edit to change enquiry state to follow up required$")
	public void user_click_edit_to_change_enquiry_state_to_follow_up_required() throws InterruptedException  {
		enquiry_page.verify_ChangeStatusToFollowUp();
	}
	
	@Then("^User click edit to change enquiry state to Quote sent$")
	public void user_click_edit_to_change_enquiry_state_to_Quote_sent() throws InterruptedException  {
		enquiry_page.verify_ChangeStatusToQuoteSent();
	}
	
	@Then("^User click edit to change enquiry state to cannot accomodate$")
	public void user_click_edit_to_change_enquiry_state_to_cannot_accomodate() throws InterruptedException  {
		enquiry_page.verify_ChangeStatusCannotAccomodate();
	}
	
//======================Scenario: verify button at the bottom of the enquiry details page==========================================

	@Then("^User clicks Cancel button and verify the outcome$")
	public void user_clicks_Cancel_button_and_verify_the_outcome()  {
		enquiry_page.verify_createNewEnquiry();
		enquiry_page.verify_cancelEnquiryButton();
	}

	@Then("^User clicks Create a reminder button and verify the outcome$")
	public void user_clicks_Create_a_reminder_button_and_verify_the_outcome() throws InterruptedException  {
		enquiry_page.verify_CreateReminderButton();
	}
	
	@Then("^User clicks Cannot accommodate button and verify the outcome$")
	public void user_clicks_Cannot_accommodate_button_and_verify_the_outcome() throws InterruptedException  {
		enquiry_page.verify_CannotAccomodateButton();
	}

	@Then("^User clicks Reopen button and verify the outcome$")
	public void user_clicks_Reopen_button_and_verify_the_outcome() throws InterruptedException  {
		enquiry_page.verify_ReopenButton();
	}
	
	@Then("^User clicks close enquiry button and verify the outcome$")
	public void user_clicks_close_enquiry_button_and_verify_the_outcome() throws InterruptedException  {
		enquiry_page.verify_closeEnquiryButton();
	}
	
//=======================Scenario: verify convert enquiry into booking=====================================================================

	@Then("^User navigates to new enquiry details page, selects check availability and click convert into booking$")
	public void user_navigates_to_new_enquiry_details_page_selects_check_availability_and_click_convert_into_booking() throws InterruptedException  {
		enquiry_page.verify_convertToBooking();
	}
	

//========================Scenario: verify submit the enquiry from the website and cross check as the admin in enquiry tab==================

	@Then("^User submit enquiry For Vancouver or Calgary submit from Room page and verify in admin portal$")
	public void user_submit_enquiry_For_Vancouver_or_Calgary_submit_from_Room_page_and_verify_in_admin_portal() throws InterruptedException, AWTException  {
		enquiry_page.verify_EnqFromvanOrcAL_RoomPage();
		
		
	}

	@Then("^User submit enquiry For Vancouver or Calgary submit from Contact page and verify in admin portal$")
	public void user_submit_enquiry_For_Vancouver_or_Calgary_submit_from_Contact_page_and_verify_in_admin_portal() throws InterruptedException, AWTException  {
		enquiry_page.verify_EnqFromvanOrcAL_ContactPage();
		
	}
	
	//========================Scenario: verify submit the enquiry from the classic website and cross check as the admin in enquiry tab==================

	@Then("^User submit enquiry For Classic using Orange Enquire Now button on Home page$")
	public void user_submit_enquiry_For_Classic_using_Orange_Enquire_Now_button_on_Home_page() throws InterruptedException, AWTException  {
		enquiry_page.verify_Classic_OrangeHomePage();
	}

	@Then("^User submit enquiry For Classic using Orange Enquire Now button on Category page$")
	public void user_submit_enquiry_For_Classic_using_Orange_Enquire_Now_button_on_Category_page()  {

	}

	@Then("^User submit enquiry For Classic using Orange Enquire Now button on Room page$")
	public void user_submit_enquiry_For_Classic_using_Orange_Enquire_Now_button_on_Room_page()  {

	}

	@Then("^User submit enquiry For Classic using Blue Enquire/Book now button on Room page$")
	public void user_submit_enquiry_For_Classic_using_Blue_Enquire_Book_now_button_on_Room_page() {

	}

	

}
