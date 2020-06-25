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

}
