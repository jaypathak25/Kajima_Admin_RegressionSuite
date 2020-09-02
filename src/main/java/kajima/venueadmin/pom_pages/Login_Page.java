package kajima.venueadmin.pom_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import kajima.venueadmin.base.TestBase;

public class Login_Page extends TestBase {
	
	@FindBy(id = "user_email")
	WebElement login_user_name;
	
	@FindBy(id = "user_password")
	WebElement login_user_password;
	
	@FindBy(name = "commit")
	WebElement login_btn;
	
	@FindBy(id = "flash_notice")
	WebElement login_msg;
	
	
	
	//Initialise web elements created in this class
	
	public Login_Page() {
	PageFactory.initElements(driver,this);
	  // PageFactory.initElements(driver, Login_Page.class);	
	}
	
	//Created methods for all the actions performed on "Home" page
	
	public void loginAsMasterAdmin() {
		login_user_name.sendKeys(prop.getProperty("BAU_username"));
		login_user_password.sendKeys(prop.getProperty("BAU_password"));
		login_btn.click();	
	}

	public void verifyLogin() {
		String msg  = login_msg.getText();
		if(login_msg.isDisplayed()) {
			System.out.println(msg);
		}else {
			System.out.println("Login is failed ");
			}
	}
}
