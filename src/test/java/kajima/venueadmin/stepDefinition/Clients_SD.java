package kajima.venueadmin.stepDefinition;


import org.testng.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Clients_Page;
import kajima.venueadmin.pom_pages.Login_Page;

public class Clients_SD extends TestBase {
	
	Clients_Page client_page;
	Login_Page login_page;

//***************************Before steps*****************************************************************************
	
	
	public Clients_SD() {
		client_page = new Clients_Page();
		login_page= new Login_Page();
	}
	
	@Then("^enter required credentials and Login$")
	public void enter_required_credentials_and_Login(){
		login_page.loginAsMasterAdmin();
	}
	
	@When("^User have gone to the homepage$")
	public void user_have_gone_to_the_homepage(){
		login_page.verifyLogin();
	}

	@Then("^User clicks the client tab and search for a client$")
	public void user_clicks_the_client_tab_and_search_for_a_client() throws InterruptedException{
		client_page.clicktab();
		client_page.search_client();
		client_page.click_view();	
	}
	

	
//**************************Scenario: Create New user - Primary User*****************************************************
	
	@Then("^User selects New client user button$")
	public void user_selects_New_client_user_button(){
		client_page.click_newClientBtn();
		client_page.verify_newClientPopUp();
	}

	@Then("^user enters all the mandatory fields and selects 'Primary' from user type dropdown and save$")
	public void user_enters_all_the_mandatory_fields_and_selects_Primary_from_user_type_dropdown_and_save(){
		client_page.enter_mandatoryfields();
		client_page.create_primaryUser();
	}

	@Then("^user verify the new user created successfully$")
	public void user_verify_the_new_user_created_successfully() {
		client_page.verify_newUserCreated();
	}
	
//**************************Scenario: Create New user - bill payer***************************************

	@Then("^User selects the New client user button$")
	public void user_selects_the_New_client_user_button(){
		client_page.click_newClientBtn();
	}
	
	@Then("^user enters all the mandatory fields and selects 'bill payer' from user type dropdown and save$")
	public void user_enters_all_the_mandatory_fields_and_selects_bill_payer_from_user_type_dropdown_and_save(){
		client_page.enter_mandatoryfields();
		client_page.create_billPayerUser();
	}

	@Then("^user verify the new user created$")
	public void user_verify_the_new_user_created() {
		client_page.verify_newUserCreated();
	}
	
//*********************************Scenario: Create New user - Client level booker*************************
	
	@Then("^User selects New client users button$")
	public void user_selects_the_New_client_users_button(){
		client_page.click_newClientBtn();
	}
	
	@Then("^user enters mandatory fields,selects 'Booker' from user type dropdown,select All services radio button and save$")
	public void user_enters_all_the_mandatory_fields_and_selects_Booker_from_user_type_dropdown(){
		client_page.enter_mandatoryfields();
		client_page.create_clientBooker();
	}
	
	@Then("^verify the new user created successfully$")
	public void verify_the_new_user_created_successfully() {
		client_page.verify_newUserCreated();
	}

	
//**************************************Scenario: Create New user - service level booker*******************
	@Then("^User selects New client user option button$")
	public void user_selects_New_client_users_option_button(){
		client_page.click_newClientBtn();
	}
	
	@Then("^user enters mandatory fields, select'booker'from the dropdown, select services radio button, select req services and save$")
	public void user_enters_all_the_mandatory_fields_and_selects_Booker_from_the_dropdown(){
		client_page.enter_mandatoryfields();
		client_page.create_servBooker();
	}
	
	@Then("^verify new user created successfully$")
	public void verify_new_user_created_successfully() {
		client_page.verify_newUserCreated();
	}
	
//*******************************Scenario: Edit a client User -  From Bill payer to Booker****************

	@Then("^User selects 'Edit Users' link for the Bill payer$")
	public void user_selects_Edit_Users_link_for_the_Bill_payer(){
		client_page.click_editUser();
	}

	@Then("^user Selects the booker option from the drop down, select ALL services radio button and save$")
	public void user_Selects_the_booker_option_from_the_drop_down_select_All_services_radiuo_button_and_save() {
		client_page.edit_OpnfromDD();
	}
	
	@Then("^verify the user edited successfully$")
	public void verify_the_user_edited_successfully() {
		client_page.verify_newUserupdated();
	}
	
//*****************************Scenario: Unlink a client User **********************************************

	@Then("^User selects 'Unlink Users' link for the booker$")
	public void user_selects_Unlink_Users_link_for_the_booker(){
		client_page.click_unLinkUser();
	}

	@Then("^user Selects cancel from the pop up message$")
	public void user_Selects_cancel_from_the_pop_up_message(){
		client_page.click_Cancel();
	}

	@Then("^re-selects 'unlink users' link$")
	public void re_selects_unlink_users() {
		client_page.click_unLinkUser();
	}

	@Then("^selects the OK button on the pop up message$")
	public void selects_the_OK_button_on_the_pop_up_message() {
		client_page.click_Ok();
	}

	@Then("^user verifies that the user is removed the list$")
	public void user_verifies_that_the_user_is_removed_the_list() {
		client_page.verify_userUnlink();
	}
	
//========================================following scenarios are applicable only for Org admin============================
	
//===============Scenario: Adding service to the client - Verify error message when adding combination of same service, SI & CCG region========

	@Then("^User selects Edit Client button the screen$")
	public void user_selects_Edit_Client_button_the_screen() {
		client_page.click_editClientBtn();
	}

	@Then("^user selects Add services button$")
	public void user_selects_Add_services_button() {
		client_page.click_addServBtn();
	}

	@Then("^User select service from the dropdown , enter Service identifier, CCG region$")
	public void user_select_service_from_the_dropdown_enter_Service_identifier_CCG_region() {
		client_page.add_newServices();
	}

	@Then("^User click add service button again and entered the same service, Service identifier and CCG region$")
	public void user_click_add_service_button_again_and_entered_selects_the_same_service_Service_identifier_and_CCG_region() {
		client_page.click_addServBtn();
		client_page.add_newServices();
	}

	@Then("^User click Update client button and verify the error message$")
	public void user_click_Update_client_button_and_verify_the_error_message() {
		client_page.click_updateClientBtn();
		client_page.verify_dupServErr();
	}

//========================Scenario: Adding service to the client - Verify adding same service with different combination of SI & CCG region==============
	
	@Then("^User selects Edit Client button$")
	public void user_selects_Edit_Client_button() {
		client_page.click_editClientBtn();
	}

	@Then("^user select Add services button$")
	public void user_select_Add_services_button() {
		client_page.click_addServBtn();
	}

	@Then("^User select service from the dropdown , enter SI, CCG region$")
	public void user_select_service_from_the_dropdown_enter_SI_CCG_region() {
		client_page.add_newServices();
	//	client_page.add_diffServices();
	}

	@Then("^User click add service button again and entered the same services with different SI and CCG region$")
	public void user_click_add_service_button_again_and_entered_selects_the_same_services_with_different_SI_and_CCG_region()  {
		client_page.click_addServBtn();
	    client_page.add_diffServices();
	}

	@Then("^User click Update client button and verify successful message$")
	public void user_click_Update_client_button_and_verify_successful_message() {
		client_page.click_updateClientBtn();
		client_page.verify_updateClient();
	}
	
//==================Scenario: Verify Registered card section - Remove card and verify the list==================================

	@Then("^User verifies that Registered card section is appearing on clients screen$")
	public void user_verifies_that_Registered_card_section_is_appearing_on_clients_screen() {
		client_page.verify_regiCardSection();
	}

	@Then("^User clicks the Remove link,remove the card and verify$")
	public void user_clicks_the_Remove_link_remove_the_card_and_verify()  {
		client_page.click_removeCardLnk();

	}

//========================Scenario: Edit client and tick/Untick service====================================================
	
	@Then("^click Edit client button, make service active/Inactive and save$")
	public void click_Edit_client_button_make_service_activeInactive_and_save(){
		client_page.verify_ActiveStatus();
	}

	
//==========================Scenario: Edit client and delete service=========================================================

	@Then("^click Edit client button, delete the unused service and click update client or click cancel button if no delete link is present$")
	public void click_Edit_client_button_on_screen(){
		client_page.verify_deleteService();
	}
	
//=================================Scenario: View Payments from the client tab ==============================================

	@Then("^Verify the account activity tab and view Payments by clicking the description, add notes and click save or close$")
	public void verify_the_account_activity_tab_and_view_Payments_by_clicking_the_description() throws InterruptedException{
		client_page.verify_clickPayLink();
	}
	
//===============================Scenario: View Invoices from the client tab================================================

	@Then("^Verify the account activity tab and view Invoice by clicking the description,click Payments link and click view client again$")
	public void verify_the_account_activity_tab_and_view_Invoice_by_clicking_the_description() throws InterruptedException {
		client_page.verify_InvoiceLink();
	}		
	
//=============================Scenario: View Credit Notes from the client tab =============================================

	@Then("^Verify the account activity tab and view Credit notes by clicking the description,click refund and click view client again$")
	public void verify_the_account_activity_tab_and_view_Credit_notes_by_clicking_the_description() throws InterruptedException {
		client_page.verify_CreditNoteLink();
	}
	
//=================Scenario: View Refund from the client tab ==============================================================

	@Then("^Verify the account activity tab and view Refund by clicking the description and click close the pop up$")
	public void verify_the_account_activity_tab_and_view_Refund_by_clicking_the_description() throws InterruptedException {
		client_page.verify_refundLink();
	}
	
//++++++++++++++++++Following tests are only for Venue admins +++++++++++++++++++++++++++++++++
//================================Scenario: View bookings from the Clients tab and edit the booking========================================
	
	@Then("^User go to Clients bookings section and select the bookings to view the details and edit the booking$")
	public void User_go_to_Clients_bookings_section_and_select_the_bookings_to_view_the_details_and_edit() throws InterruptedException {
		client_page.view_bookingsEdit();
	}

//================================Scenario: Verify that user can Archive and then Restore the client===================
	
	@Then("^User select Archive client link and archive the client successfully$")
	public void User_select_Archive_client_link_and_archive_the_client_successfully() throws InterruptedException {
		client_page.verify_archiveClient();	
	}
	
	@Then("^user navigate to show archieved clients screen and Restore the client successfully$")
	public void user_navigate_to_show_archieved_clients_screen_and_Restore_the_client_successfully() throws InterruptedException {
		client_page.verify_restoreClient();
	}
	
//================================Scenario: Verify that user can upload the document and can add a reminder============
	
	@Then("^User selects new document and save successfully$")
	public void User_selects_new_document_and_save_successfully(){
		client_page.verify_uploadDoc();		
	}
		
	@Then("^user add the reminder and verify$")
	public void user_add_the_reminder_and_verify(){
		client_page.verify_addReminderToDoc();
	}
	
//================================Scenario: Verify that user can add a reminder to a client account============
	
	@Then("^User selects Create a reminder option and successfully added a reminder to a client screen$")
	public void User_selects_Create_a_reminder_option_and_successfully_added_a_reminder_to_a_client_screen() throws InterruptedException{
		client_page.verify_addReminderToClient();		
	}
	
	
//================================Scenario: Verify that user can edit a client account========================
	
	@Then("^User selects edit client option, update name, last name, Notes etc and save successfully$")
	public void User_selects_edit_client_option_update_name_last_name_Notes_etc_and_save_successfully() throws InterruptedException{
		client_page.verify_editClientDetails();	
	}
		
//================================Scenario: Verify that user can add a manual payment from the Clients screen==========
	
	@Then("^User adds a Manual payment and verify the result$")
	public void User_adds_a_Manual_payment_and_verify_the_result() throws InterruptedException {
		client_page.verify_addNewPayment();	
	}
	
//================================Scenario: Verify that user can raise a credit notes from the Clients screen==========
	
	@Then("^User raises a Credit notes and verify the result$")
	public void User_raises_a_Credit_notes_and_verify_the_result() throws InterruptedException{
		client_page.verify_raiseCN();		
	}
	
//================================Scenario: Verify that user can add a new refund from the Clients screen==============
	
	@Then("^User adds a new refund and verify the result$")
	public void User_adds_a_new_refund_and_verify_the_result() throws InterruptedException{
		client_page.verify_createRefund();
	}
	
//================================Scenario: Create New BAU user - client User==============
	
	@Then("^User selects New client user button, enter mandatory fields, create user and verify$")
	public void User_selects_New_client_user_button_enter_mandatory_fields_create_user_and_verify() throws InterruptedException{
		client_page.verify_createNewUserBAU();
	}
	
//================================Scenario: Edit a BAU User - update details==============
		
	@Then("^User selects 'Edit Users' link , update the details and verify the edited user$")
	public void User_selects_Edit_Users_link_update_the_details_and_verify_the_edited_user() throws InterruptedException{
		client_page.verify_editNewUserBAU();
	}
		
//================================Scenario: Unlink a client User==============
		
	@Then("^User unlink the user and verify the details$")
	public void User_unlink_the_user_and_verify_the_details() throws InterruptedException{
		client_page.verify_unLinkNUserBAU();
	}
		
}
