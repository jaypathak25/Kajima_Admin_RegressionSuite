package kajima.venueadmin.pom_pages;


import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import com.github.javafaker.Faker;

import kajima.venueadmin.base.TestBase;

public class Users_Page extends TestBase {
	public String mailaddBAU;
	public String mailaddNHS;
	
	Login_Page login_page = new Login_Page();
	
	
	
	@FindBy(xpath = "//a[@class='main' and text() = 'Users']")
	WebElement users_tab;
	
	@FindBy(xpath="//*[contains(text(),'User Management')]")
	WebElement userTab_Title;
	
	@FindBy(xpath="//*[@class='tabs']/dd/a[contains(@href,'#')]")
	List<WebElement> usersSubTabs;
	
	@FindBy(xpath="//input[contains(@aria-controls,'customer_logins_table') and @type='text']")
	WebElement search_txt;
	
	@FindBy(xpath="//table[@id='customer_logins_table']/tbody/tr/td/a[text()='Edit']")
	WebElement editUser;
	
	@FindBy(id="user_email")
	WebElement userEmail_txt;
	
	@FindBy(name="commit")
	WebElement updateUsers_Btn;
	
	@FindBy(xpath="//div[@id='flash_notice']")
	WebElement success_Msg;
	
	@FindBy(xpath="//a[text()='New Master Venue Admins']")
	WebElement newMVA_Btn;
	
	@FindBy(id="user_first_name")
	WebElement userFN_Txt;
	
	@FindBy(id="user_last_name")
	WebElement userLN_Txt;
	
	@FindBy(xpath="//span[contains(@class,'custom checkbox')]")
	WebElement venue_ChkBox;
	
	@FindBy(id="user_password")
	WebElement userPswd_Txt;
	
	@FindBy(id="user_password_confirmation")
	WebElement userPswdConfirmation_Txt;
	
	@FindBy(id="//nav[@id='nav-main']//ul[@class='nav-bar left']/li/a")
	List<WebElement> mva_subtabs;
	
	@FindBy(id="user_email")
	WebElement userEmail_Txt;
	
	@FindBy(xpath="//input[@id='user_email']")
	WebElement enterEmail_txt;
	
	@FindBy(xpath="//input[@id='user_password']")
	WebElement enterPswd_txt;
	
	@FindBy(xpath="//input[@name='commit']")
	WebElement enterLogin_Btn;
	
	
//================================Initialise web elements created in this class========================================
	
	public Users_Page() {
	PageFactory.initElements(driver, this);
	}


//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//
	public void verify_clickUsersTab() throws InterruptedException {
		Thread.sleep(3000);
		users_tab.click();
		String title = userTab_Title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("User Management"));
		softAssert.assertAll();
	}
	
		public void verify_UserSubTabs() throws InterruptedException {
		int noOfSubTabs = usersSubTabs.size();
		System.out.println("Number of users subtabs are: " + noOfSubTabs);
		Assert.assertTrue(noOfSubTabs==8);
		for(int i=1; i<=noOfSubTabs; i++) {
			driver.findElement(By.xpath("//*[@class='tabs']/dd["+i+"]/a[contains(@href,'#')]")).click();
			Thread.sleep(2000);
			String usersSubtabsTxt = driver.findElement(By.xpath("//*[@class='tabs']/dd["+i+"]/a[contains(@href,'#')]")).getText();
			System.out.println("You are on " + usersSubtabsTxt + "Subtab");	
			Assert.assertFalse(usersSubtabsTxt.contains("unlinked"));
		}	
	}
		
		public void verify_BAUUserSubTabs() throws InterruptedException {
		int noOfSubTabs = usersSubTabs.size();
		System.out.println("Number of users subtabs are: " + noOfSubTabs);
		Assert.assertTrue(noOfSubTabs==6);
		for(int i=1; i<=noOfSubTabs; i++) {
			driver.findElement(By.xpath("//*[@class='tabs']/dd["+i+"]/a[contains(@href,'#')]")).click();
			Thread.sleep(2000);
			String usersSubtabsTxt = driver.findElement(By.xpath("//*[@class='tabs']/dd["+i+"]/a[contains(@href,'#')]")).getText();
			System.out.println("You are on " + usersSubtabsTxt + "Subtab");	
			Assert.assertFalse(usersSubtabsTxt.contains("unlinked"));
		}	
	}
		
		public void verify_BAUupdateEmailClientUser() throws InterruptedException {
			driver.findElement(By.xpath("//*[@class='tabs']/dd[6]/a[contains(@href,'#')]")).click();
			search_txt.clear();
			search_txt.sendKeys("auto");
			Thread.sleep(4000);
			editUser.click();
			userEmail_txt.clear();
			userEmail_txt.sendKeys("auto@example.com");
			updateUsers_Btn.click();
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("Successfully updated user."));
			softAssert.assertAll();
		}
		
		public void verify_NHSupdateEmailClientUser() throws InterruptedException {
			driver.findElement(By.xpath("//*[@class='tabs']/dd[8]/a[contains(@href,'#')]")).click();
			search_txt.clear();
			search_txt.sendKeys("auto");
			Thread.sleep(4000);
			editUser.click();
			userEmail_txt.clear();
			userEmail_txt.sendKeys("auto@example.com");
			updateUsers_Btn.click();
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("Successfully updated user."));
			softAssert.assertAll();
		}
	
		public void verify_BAUcreateNewMVA() throws InterruptedException {
			driver.findElement(By.xpath("//*[@class='tabs']/dd[1]/a[contains(@href,'#')]")).click();
			newMVA_Btn.click();
			Faker fake = new Faker();
			String fname = fake.name().firstName();
			String lname = fake.name().lastName();
			userFN_Txt.sendKeys(fname);
			userLN_Txt.sendKeys(lname);
			userEmail_Txt.clear();
			mailaddBAU = fname +"@automation.com"; 
			System.out.println("mail address is " + mailaddBAU);
			userEmail_Txt.sendKeys(fname +"@automation.com");
			venue_ChkBox.click();
			userPswd_Txt.sendKeys("login@123");
			userPswdConfirmation_Txt.sendKeys("login@123");
			updateUsers_Btn.click();
			Thread.sleep(3000);	
			driver.findElement(By.xpath("//div[@class='small button buttonBourbon dropdown fr']")).click();
			driver.findElement(By.xpath("//a[text()='Logout']")).click();
		}
		
		public void verify_NHScreateNewMVA() throws InterruptedException {
			driver.findElement(By.xpath("//*[@class='tabs']/dd[3]/a[contains(@href,'#')]")).click();
			newMVA_Btn.click();
			Faker fake = new Faker();
			String fname = fake.name().firstName();
			String lname = fake.name().lastName();
			userFN_Txt.sendKeys(fname);
			userLN_Txt.sendKeys(lname);
			userEmail_Txt.clear();
			mailaddNHS = fname +"@automation.com"; 
			System.out.println("mail address is " + mailaddNHS);
			userEmail_Txt.sendKeys(fname +"@automation.com");
			venue_ChkBox.click();
			userPswd_Txt.sendKeys("login@123");
			userPswdConfirmation_Txt.sendKeys("login@123");
			updateUsers_Btn.click();
			Thread.sleep(3000);	
			driver.findElement(By.xpath("//div[@class='small button buttonBourbon dropdown fr']")).click();
			driver.findElement(By.xpath("//a[text()='Logout']")).click();
		}
		
		public void verifyLoginNewMVA_BAU() throws InterruptedException, AWTException {

			String parent =  driver.getWindowHandle();
			System.out.println("Parent ID " + parent);
			Thread.sleep(2000);
			for(int i=1;i<=1;i++) {
				Robot rob = new Robot();
				rob.keyPress(KeyEvent.VK_CONTROL);
				rob.keyPress(KeyEvent.VK_T);
				rob.keyRelease(KeyEvent.VK_CONTROL);
				rob.keyRelease(KeyEvent.VK_T);
				ArrayList<String> noOfTabs = new ArrayList<String>(driver.getWindowHandles());	
				driver.switchTo().window((String) noOfTabs.get(i));
			}
			driver.get("https://admin.bp-preproduction.schoolbookings.co.uk/users/sign_in");
			enterEmail_txt.sendKeys("mailaddBAU");
			enterPswd_txt.sendKeys("login@123");
			enterLogin_Btn.click();
			
			Thread.sleep(4000);
			driver.navigate().refresh();
			Thread.sleep(2000);
			int noOfMVATabs = mva_subtabs.size();
			System.out.println("Number of MVA subtabs are: " + noOfMVATabs);
	//		Assert.assertTrue(noOfMVATabs==9);
			for(int i=1; i<=noOfMVATabs; i++) {
				driver.findElement(By.xpath("//ul[@class='nav-bar left']/li["+i+"]/a")).click();
				Thread.sleep(2000);
				String MVASubtabsTxt = driver.findElement(By.xpath("//ul[@class='nav-bar left']/li["+i+"]/a")).getText();
				System.out.println("You are on " + MVASubtabsTxt + "Subtab");	
				
				Thread.sleep(3000);
				driver.close();
			}		
		}
		
		public void verifyLoginNewMVA_NHS() throws InterruptedException, AWTException {

			String parent =  driver.getWindowHandle();
			System.out.println("Parent ID " + parent);
			Thread.sleep(2000);
			for(int i=1;i<=1;i++) {
				Robot rob = new Robot();
				rob.keyPress(KeyEvent.VK_CONTROL);
				rob.keyPress(KeyEvent.VK_T);
				rob.keyRelease(KeyEvent.VK_CONTROL);
				rob.keyRelease(KeyEvent.VK_T);
				ArrayList<String> noOfTabs = new ArrayList<String>(driver.getWindowHandles());	
				driver.switchTo().window((String) noOfTabs.get(i));
			}
			driver.get("https://admin.preproduction.ospace.co.uk/users/sign_in");
			System.out.println("CHECK" + mailaddNHS );
			enterEmail_txt.sendKeys(mailaddNHS);
			enterPswd_txt.sendKeys("login@123");
			enterLogin_Btn.click();
			
			Thread.sleep(4000);
			driver.navigate().refresh();
			Thread.sleep(2000);
			int noOfMVATabs = mva_subtabs.size();
			System.out.println("Number of MVA subtabs are: " + noOfMVATabs);
			Assert.assertTrue(noOfMVATabs==9);
			for(int i=1; i<=noOfMVATabs; i++) {
				driver.findElement(By.xpath("//ul[@class='nav-bar left']/li["+i+"]/a")).click();
				Thread.sleep(2000);
				String MVASubtabsTxt = driver.findElement(By.xpath("//ul[@class='nav-bar left']/li["+i+"]/a")).getText();
				System.out.println("You are on " + MVASubtabsTxt + "Subtab");	
				
				Thread.sleep(3000);
				driver.close();
			}		
		}
		
		public void verify_NHS_unLinkedUserTab() throws InterruptedException, AWTException {
		//	System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\chromedriver.exe");
		//	driver = new ChromeDriver();
		//	driver.manage().window().maximize();
		//	driver.manage().deleteAllCookies();
			driver.findElement(By.xpath("//div[@class='small button buttonBourbon dropdown fr']")).click();
			driver.findElement(By.xpath("//a[text()='Logout']")).click();
			String parent =  driver.getWindowHandle();
			System.out.println("Parent ID " + parent);
			Thread.sleep(2000);
			for(int i=1;i<=1;i++) {
				Robot rob = new Robot();
				rob.keyPress(KeyEvent.VK_CONTROL);
				rob.keyPress(KeyEvent.VK_T);
				rob.keyRelease(KeyEvent.VK_CONTROL);
				rob.keyRelease(KeyEvent.VK_T);
				ArrayList<String> noOfTabs = new ArrayList<String>(driver.getWindowHandles());	
				driver.switchTo().window((String) noOfTabs.get(i));
			}
			driver.get("https://admin.preproduction.ospace.co.uk/users/sign_in");
			login_page.login_user_name.sendKeys(prop.getProperty("Master_username"));
			login_page.login_user_password.sendKeys(prop.getProperty("Master_password"));
			login_page.login_btn.click();
			verify_clickUsersTab();
			verify_UserSubTabs();
		}
		
		public void verify_BAU_unLinkedUserTab() throws InterruptedException, AWTException {
		//	System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\chromedriver.exe");
		//	driver = new ChromeDriver();
		//	driver.manage().window().maximize();
		//	driver.manage().deleteAllCookies();
			driver.findElement(By.xpath("//div[@class='small button buttonBourbon dropdown fr']")).click();
			driver.findElement(By.xpath("//a[text()='Logout']")).click();
			String parent =  driver.getWindowHandle();
			System.out.println("Parent ID " + parent);
			Thread.sleep(2000);
			for(int i=1;i<=1;i++) {
				Robot rob = new Robot();
				rob.keyPress(KeyEvent.VK_CONTROL);
				rob.keyPress(KeyEvent.VK_T);
				rob.keyRelease(KeyEvent.VK_CONTROL);
				rob.keyRelease(KeyEvent.VK_T);
				ArrayList<String> noOfTabs = new ArrayList<String>(driver.getWindowHandles());	
				driver.switchTo().window((String) noOfTabs.get(i));
			}
			driver.get("https://admin.bp-preproduction.schoolbookings.co.uk/users/sign_in");
			login_page.login_user_name.sendKeys(prop.getProperty("BAU_masterusername"));
			login_page.login_user_password.sendKeys(prop.getProperty("BAU_masterpassword"));
			login_page.login_btn.click();
			verify_clickUsersTab();
			verify_UserSubTabs();
		}
	
	
}
