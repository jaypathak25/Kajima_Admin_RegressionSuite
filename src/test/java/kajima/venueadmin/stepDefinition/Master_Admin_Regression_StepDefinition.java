package kajima.venueadmin.stepDefinition;

import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import kajima.master_admin_regression_base.TestBase;
//import kajima.master_admin_regression_pom.pages.Home_page;
//import kajima.master_admin_regression_pom.pages.LogIn_Page;
//import kajima.master_admin_regression_pom.pages.Organisation_page;
//import kajima.master_admin_regression_pom.pages.Venues_Page;


public class Master_Admin_Regression_StepDefinition // extends TestBase {
{
//	LogIn_Page login_pg;
//	Home_page hm_pg;
//	Venues_Page_Masteradmin venue_pg;
	
//	Organisation_page orgn_pg;
	
	
	
	@Given("^User opens browser and enters Admin Pre Prod URL$")
	public void user_opens_browser_and_enters_Admin_Pre_Prod_URL() {
	//	TestBase.intialisation();
	//	login_pg = new LogIn_Page();
	//	hm_pg =  new Home_page();	
	//	venue_pg = new Venues_Page_Masteradmin();	
	//	orgn_pg = new Organisation_page();
		
	}

	@When("^home page dispayed$")
	public void home_page_dispayed() {
	//	login_pg.loginAsMasterAdmin();
	//	hm_pg.validateVenueName();
	}

//*********************************Create a new Venue and add this to my organisation**************************

	@Then("^User hovers a mouse on Venues Tab$")
	public void user_hovers_a_mouse_on_on_Venues_Tab()  {
	//    venue_pg.selectVenueTab();
	}

	@Then("^User selects See All Venues link$")
	public void user_selects_See_All_Venues_link()  {
	//	venue_pg.selectSeeAllVenueLink();
	}

	@Then("^User selects New Venue button$")
	public void user_selects_New_Venue_button()  {
	//	venue_pg.selectNewVenueBtn();
	}

	@Then("^User enters mandatory details$")
	public void User_enters_mandatory_details()  {
	//	venue_pg.enterDetails();
	}

	@Then("^User clicks save button$")
	public void user_clicks_save_button() {
	//	venue_pg.clkSave();
	}
	
	@Then("^validate the successful message$")
	public void validate_the_successful_message() {
	//	venue_pg.valnMessage();
	}

	@Then("^User navigate to See All Venue screen$")
	public void user_navigate_to_See_All_Venue_screen() {
	//	venue_pg.navBackToSeeAllVenue();
	}

	@Then("^Search the newly created Venue and verify$")
	public void search_the_newly_created_Venue() {
	//	venue_pg.verifyNewVenueCreated();
	}
	
//******************Update the green banner for venue admins and verify Dashboard screen****************************
	
	@Then("^User clicks a mouse on Venues Tab$")
	public void user_clicks_a_mouse_on_Venues_Tab() {
	//	 venue_pg.selectVenueTab();
	}

	@Then("^User selects See All Venues option$")
	public void user_selects_See_All_Venues_option() {
	//	venue_pg.selectSeeAllVenueLink();
	}

	@Then("^User selects Edit global settings Link$")
	public void user_selects_Edit_global_settings_Link(){
	//		venue_pg.editGlobalSettingsLink();
    }

    @Then("^User updates the content and save successfully$")
	public void user_updates_the_content_and_save_successfully(){
    //	venue_pg.entrMsgInTextArea();
    //	venue_pg.clkSave();	
    }

    @Then("^User verify the new content and successful message displays$")
	public void User_verify_the_new_content_and_successful_message_displays(){
    	//venue_pg.verifySuccMsg();

	}
    
//*********************Access the organisation tab and edit****************************************
    
    @Then("^User clicks on organisation Tab$")
    public void user_clicks_on_organisation_Tab() {
    //	orgn_pg.clkOrgTab();

    }

    @Then("^User selects the edit option for required organisation$")
    public void user_selects_the_edit_option_for_required_organisation() {
    //	orgn_pg.getAllOrgName();

    }

    @Then("^user selects all the tabs available on edit organisation screen$")
    public void user_selects_all_the_tabs_available_on_edit_organisation_screen() throws Throwable {
   //	orgn_pg.clkAllTabs();

    }

    @Then("^User clicks Back button$")
    public void user_clicks_Back_button() throws Throwable {

    }

    @Then("^User returns to edit organisation screen, Update details$")
    public void user_returns_to_edit_organisation_screen_Update_details() throws Throwable {

    }

    @Then("^Click save$")
    public void click_save() throws Throwable {

    }

}
