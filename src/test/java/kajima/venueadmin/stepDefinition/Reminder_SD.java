package kajima.venueadmin.stepDefinition;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Clients_Page;
import kajima.venueadmin.pom_pages.Login_Page;
import kajima.venueadmin.pom_pages.Reminder_Page;

public class Reminder_SD extends TestBase{

	Reminder_Page reminder_page;
	Login_Page login_page;
	

	//***************************Before steps*****************************************************************************
		
		
		public Reminder_SD() {
			reminder_page = new Reminder_Page();
			login_page = new Login_Page();
		}
		
		@Then("^enter required credential and Login$")
		public void enter_required_credential_and_Login(){
			login_page.loginAsMasterAdmin();
		}
		
		@When("^User have gone to homepage$")
		public void user_have_gone_to_homepage(){
			login_page.verifyLogin();
		}
		
		@Then("^User clicks the reminder tab and search for a reminder$")
		public void user_clicks_the_reminder_tab_and_search_for_a_reminder() {
			reminder_page.verify_clickReminderTab();	
		}
		
//================================Scenario: View - Reminder and edit a reminder=====================================

		@Then("^User selects the action link and update the date, save and verify the change$")
		public void user_selects_the_action_link_and_update_the_date_save_and_verify_the_change() {
			reminder_page.verify_EditReminder();
		}
		
//================================Scenario: View - Reminder and action a reminder=====================================

		@Then("^User selects the action link, select check box, enter action statement and save and verify the change$")
		public void user_selects_the_action_link_select_check_box_enter_action_statement_and_save_and_verify_the_change() {
			reminder_page.verify_actionReminder();
		}
		
//================================Scenario: View- Reminder and cancel it=====================================

		@Then("^User selects the cancel link and verify the result$")
		public void user_selects_the_cancel_link_and_verify_the_result() throws InterruptedException {
			reminder_page.verify_cancelReminder();
		}
}
