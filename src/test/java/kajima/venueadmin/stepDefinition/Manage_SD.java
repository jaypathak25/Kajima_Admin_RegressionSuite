package kajima.venueadmin.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Bookings_Page;
import kajima.venueadmin.pom_pages.Login_Page;
import kajima.venueadmin.pom_pages.Manage_Page;
import kajima.venueadmin.pom_pages.Reminder_Page;

public class Manage_SD extends TestBase {
	
	
	Login_Page login_page;
	Manage_Page manage_page;
	
	
	public Manage_SD() {
	
		login_page = new Login_Page();
		manage_page = new Manage_Page();
	}
	
	
//=============================================Before Steps====================================================
	
	@Then("^enter login credentials$")
	public void enter_Login_credentials() {
		login_page.loginAsMasterAdmin();
	}

	@When("^navigates to homepage$")
	public void navigates_to_homepage(){
		login_page.verifyLogin();
	}

	@Then("^User clicks the manage tab$")
	public void user_clicks_the_manage_tab() {
		manage_page.verify_clickManageTab();
	}
	
//=======================================Test steps ================================================================
//==============Scenario: Manage tab -  Venue management - verify Booking Checklists – add, edit items (edit, re-order and delete), edit, delete===================
	
	@Then("^User added the new booking checklist and verify$")
	public void user_added_the_new_booking_checklist_and_verify(){
		manage_page.verify_newBookingChkList();
	}

	@Then("^User Edit Items by editing, reordering and deleting$")
	public void user_Edit_Items_by_editing_reordering_and_deleting() throws InterruptedException {
		manage_page.verify_editChkListItem();
	}

	@Then("^user edited the new booking checklist added$")
	public void user_edited_the_new_booking_checklist_added() throws InterruptedException  {
		manage_page.verify_editBookingChkList();
	}

	@Then("^User deleted the new booking checklist added above$")
	public void user_deleted_the_new_booking_checklist_added_above() throws InterruptedException  {
		manage_page.verify_deleteBookingChkList();
	}
	
//===================Scenario: Manage tab -  Venue management - verify Booking Categories - add, edit, delete============================

	@Then("^User added the new booking Categories and verify$")
	public void user_added_the_new_booking_Categories_and_verify() throws InterruptedException {
		manage_page.verify_newBookingCatagory();
	}

	@Then("^User Edited the new booking Categories and verify$")
	public void user_Edited_the_new_booking_Categories_and_verify() throws InterruptedException  {
		manage_page.verify_editBookingCatagory();
	}

	@Then("^User Deleted the new booking Categories and verify$")
	public void user_Deleted_the_new_booking_Categories_and_verify() throws InterruptedException  {
		manage_page.verify_deleteBookingCatagory();
	}
	
//======================Scenario: Manage tab -  Venue management - verify Bookable spaces – Add and edit and delete.===============

	@Then("^Adding a new bookable space – assign to new category$")
	public void adding_a_new_bookable_space_assign_to_new_category() {
		manage_page.verify_addingNewBookableSpace();
	}

	@Then("^Edit and Deleting a bookable space$")
	public void deleting_a_bookable_space() throws InterruptedException  {
		manage_page.verify_editNewBookableSpace();
		manage_page.verify_deleteNewBookableSpace();
	}
	
//=============Scenario: Manage tab -  Venue management - verify Holidays - add, edit, delete==============================================

	@Then("^User added the new Holiday  and verify$")
	public void user_added_the_new_Holiday_and_verify() throws InterruptedException  {
		manage_page.verify_addNewHolidays();
	}

	@Then("^User Edited the Holiday and verify$")
	public void user_Edited_the_Holiday_and_verify() throws InterruptedException {
		manage_page.verify_editHolidays();
	}

	@Then("^User Deleted the Holiday and verify$")
	public void user_Deleted_the_Holiday_and_verify() throws InterruptedException  {
		manage_page.verify_deleteHolidays();
	}
	
//======================Scenario: Manage tab -  Venue management - verify Closures - add, edit, delete========================================

	@Then("^User added the new Closures  and verify$")
	public void user_added_the_new_Closures_and_verify() throws InterruptedException {
		manage_page.verify_addNewClosures();
	}

	@Then("^User Edited the Closures and verify$")
	public void user_Edited_the_Closures_and_verify() throws InterruptedException  {
		manage_page.verify_editClosures();
	}

	@Then("^User Deleted the Closures and verify$")
	public void user_Deleted_the_Closures_and_verify() throws InterruptedException  {
		manage_page.verify_deleteClosures();
	}
	
//==============================Scenario: Manage tab -  Venue management - verify Client Booking slots - add, edit, delete======================================

	@Then("^User added the new booking slot  and verify$")
	public void user_added_the_new_booking_slot_and_verify()  {
		manage_page.verify_addNewBookingSlot();
	}

	@Then("^User Edited the booking slot and verify$")
	public void user_Edited_the_booking_slot_and_verify() throws InterruptedException  {
		manage_page.verify_editBookingSlot();
	}

	@Then("^User Deleted the booking slot and verify$")
	public void user_Deleted_the_booking_slot_and_verify() throws InterruptedException  {
		manage_page.verify_deleteBookingSlot();
	}
	
//======================Scenario: Manage tab -  Venue management - verify My default calendar - edit and update================================================

	@Then("^User verifies default calender time , edit the times and update$")
	public void user_verifies_default_calender_time_edit_the_times_and_update() throws InterruptedException {
		manage_page.verify_updatedefaultCalenderTime();
	}
	
//==========================Scenario: Manage tab -  Venue management - verify Add a client flag, assign to a client and then delete the flag====================

	@Then("^User added a new cleint flag, assign to client and verify that this is visible on client account for admin$")
	public void user_added_a_new_cleint_flag_assign_to_client_and_verify_that_this_is_visible_on_client_account_for_admin() throws InterruptedException {
		manage_page.verify_addClientFlag();
	}

	@Then("^User deleted the flag and verify that it is not visible to client account for admin anymore$")
	public void user_deleted_the_flag_and_verify_that_it_is_not_visible_to_client_account_for_admin_anymore() throws InterruptedException {
		manage_page.verify_deleteClientFlag();
	}
	
//=======================Scenario: Manage tab -  Venue management - Edit website==================================================

	@Then("^User selects Edit website , navigate to all the subtabs and verify$")
	public void user_selects_Edit_website_navigate_to_all_the_subtabs_and_verify() throws InterruptedException {
		manage_page.verify_websiteSubtabs();
	}
	
//=======================Scenario: Manage tab -  Venue management - BAU Edit website==================================================

	@Then("^BAUUser selects Edit website , navigate to all the subtabs and verify$")
	public void BAUuser_selects_Edit_website_navigate_to_all_the_subtabs_and_verify() throws InterruptedException {
		manage_page.verify_BAUwebsiteSubtabs();
	}

	
//=============================Scenario: Manage tab -  Venue management - Edit Venue==========================================================

	@Then("^User selects Edit venue , navigate to all the subtabs and verify$")
	public void user_selects_Edit_venue_navigate_to_all_the_subtabs_and_verify() throws InterruptedException {
		manage_page.verify_venueSubtabs();
	}

	@Then("^User navigate to basic info subtab,updating info and check this saves correctly$")
	public void user_navigate_to_basic_info_subtab_updating_info_and_check_this_saves_correctly()  {
		manage_page.verify_editVenueBasicDetails();
	}

	@Then("^User navigate to Billing subtab – check that invoice/credit note prefixes can be updated, check this saves correctly and is applied to invoices – change back to original info$")
	public void user_navigate_to_Billing_subtab_check_that_invoice_credit_note_prefixes_can_be_updated_check_this_saves_correctly_and_is_applied_to_invoices_change_back_to_original_info() throws InterruptedException {
		manage_page.verify_updateInvoiceNCNPrefix();
		manage_page.verify_revertInvoiceNCNPrefix();
	}
	
	
//=============================Scenario: Manage tab -  Venue management - BAU Edit Venue==========================================================

	@Then("^BAU User selects Edit venue , navigate to all the subtabs and verify$")
	public void BAU_user_selects_Edit_venue_navigate_to_all_the_subtabs_and_verify() throws InterruptedException {
		manage_page.verify_BAUvenueSubtabs();
	}

	@Then("^BAU User navigate to basic info subtab,updating info and check this saves correctly$")
	public void BAU_user_navigate_to_basic_info_subtab_updating_info_and_check_this_saves_correctly()  {
		manage_page.verify_editBAUVenueBasicDetails();
	}

	@Then("^BAU User navigate to Billing subtab – check that invoice/credit note prefixes can be updated, check this saves correctly and is applied to invoices – change back to original info$")
	public void BAU_user_navigate_to_Billing_subtab_check_that_invoice_credit_note_prefixes_can_be_updated_check_this_saves_correctly_and_is_applied_to_invoices_change_back_to_original_info() throws InterruptedException {
		manage_page.verify_updateBAUInvoiceNCNPrefix();
		manage_page.verify_revertBAUInvoiceNCNPrefix();
	}
	
//====================================ONLY APPLICABLE FOR BAU======================================
//====================Scenario: BAU Manage tab -  Venue management - verify calender Categories – add, edit (name, description, limit client bookings to slots), delete=================
	
	@Then("^User added the new calender Category  and verify$")
	public void user_added_the_new_calender_Category_and_verify() {

	}

	@Then("^User Edited the calender Categories like name, description, limit client bookings to slots and verify$")
	public void user_Edited_the_calender_Categories_like_name_description_limit_client_bookings_to_slots_and_verify() {

	}

	@Then("^User Deleted the calender Category and verify$")
	public void user_Deleted_the_calender_Category_and_verify() {

	}
	
//====================================================================================================================================

//==============Below 1 scenario related to space catagory related scenario is only applicable for NHS - Org admin================================
//============================Scenario: Manage tab -  Venue management - verify Space Categories – should not have the option to add/edit or delete – Org admin only for NHS==============

	@Then("^User verify the space catagory to ensure that this section is read only section and user is not allowed to add, edit or delete space catagory$")
	public void user_verify_the_space_catagory_to_ensure_that_this_section_is_read_only_section_and_user_is_not_allowed_to_add_edit_or_delete_space_catagory() throws Throwable {

	}

	@Then("^user login to Org admin and able to add , edit or delete space catagory$")
	public void user_login_to_Org_admin_and_able_to_add_edit_or_delete_space_catagory()  {

	}

}
