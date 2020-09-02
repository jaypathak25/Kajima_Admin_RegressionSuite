package kajima.venueadmin.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Login_Page;
import kajima.venueadmin.pom_pages.Users_Page;

public class Users_SD extends TestBase{
	
	Login_Page login_page;
	Users_Page users_page;
	
	
	public Users_SD() {
	
		login_page = new Login_Page();
		users_page = new Users_Page();
	}
	
	
//=============================================Before Steps======================================================================
	
	@Then("^enter valid credential$")
	public void enter_valid_credential() {
		login_page.loginAsMasterAdmin();
	}

	@When("^go to dashboard$")
	public void go_to_dashboard(){
		login_page.verifyLogin();
	}
	
	@Then("^User clicks the users tab$")
	public void user_clicks_the_users_tab() throws Throwable {
		users_page.verify_clickUsersTab();

	}
	
	
//=========================Scenario: Navigate to different users subtabs, create new venue admin , log in and verify all the tabs e============================================================
	

	@Then("^User clicks on all the subtabs and verify the the title$")
	public void user_clicks_on_all_the_subtabs_and_verify_the_the_title() throws Throwable {
		users_page.verify_UserSubTabs();
	}

	@Then("^User creates a new venue admin , log in and navigate to differenet tabs$")
	public void user_creates_a_new_venue_admin_log_in_and_navigate_to_differenet_tabs() throws Throwable {
		users_page.verify_createNewMVA();
		users_page.verifyLoginNewMVA_BAU();

	}
	
//====================================Scenario: NHS- verify that unlinked tab is not visible for master admins ==============================

	@Then("^NHS user verifies that Unlinked users tab is not visible for master admins$")
	public void NHS_user_verifies_that_Unlinked_users_tab_is_not_visible_for_master_admins() throws Throwable {
		//users_page.verify_NHS_unLinkedUserTab();
	}
	
	
//====================================Scenario: BAU- verify that unlinked tab is not visible for master admins ==============================

		@Then("^BAU user verifies that Unlinked users tab is not visible for master admins$")
		public void BAU_user_verifies_that_Unlinked_users_tab_is_not_visible_for_master_admins() throws Throwable {
			//users_page.verify_BAU_unLinkedUserTab();
		}
	
//===================Scenario: verify User updates the email address for the client user=================================================

	@Then("^User update the email address for the client user and verify client user can login with the new email$")
	public void user_update_the_email_address_for_the_client_user_and_verify_client_user_can_login_with_the_new_email() throws Throwable {
		users_page.verify_updateEmailClientUser();
	}
	
//========================================================================================================================================


}
