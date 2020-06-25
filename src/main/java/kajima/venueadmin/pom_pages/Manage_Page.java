package kajima.venueadmin.pom_pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Manage_Page extends TestBase {
	
	@FindBy(xpath = "//a[contains(@class,'main') and contains(text(),'Manage')]")
	WebElement manage_tab;
	
	@FindBy(xpath="//a[@href='#venue_management']")
	WebElement defaultManage_tab;
	
	
//================================Initialise web elements created in this class========================================
	
		public Manage_Page() {
		PageFactory.initElements(driver,this);
		}
		

//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

		public void verify_clickManageTab() {
			manage_tab.click();
			String title = defaultManage_tab.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Venue Management"));
			softAssert.assertAll();
		}

}
