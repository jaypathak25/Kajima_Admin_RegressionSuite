package kajima.venueadmin.stepDefinition;

import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import kajima.venueadmin.base.TestBase;
import kajima.venueadmin.pom_pages.Clients_Page;
import kajima.venueadmin.pom_pages.Login_Page;


public class CommonSteps_SD extends TestBase  {
	
	Login_Page login_page;
	Clients_Page client_page;
	
	public CommonSteps_SD() {
		login_page =  new Login_Page();
		client_page = new Clients_Page();
	}
	
	
	//*********************Before test method*********************************************
	@BeforeTest
	@Given("^User opens browser and enters the admin URL$")
	public void User_opens_browser_and_enters_the_admin_URL(){
		TestBase.intialisation();	
	}
	


	//***********************************After test method************************************************//
	@AfterTest
	@Then("^user quit the browser$")
	public void user_quit_the_browser() {
		driver.quit(); 

	}

}
