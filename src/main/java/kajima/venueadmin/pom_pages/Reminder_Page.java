package kajima.venueadmin.pom_pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Reminder_Page extends TestBase {
	
	@FindBy(xpath = "//a[contains(@href,'reminders')]")
	WebElement reminder_tab;
	
	@FindBy(xpath="//h3[text()='Reminders']")
	WebElement reminderTab_title;
	
	@FindBy(xpath="//a[contains(@href,'reminders') and text()='Action']")
	WebElement action_Link;
	
	@FindBy(xpath="//a[contains(@href,'reminders') and text()='Cancel']")
	WebElement cancel_Link;
	
	@FindBy(xpath="//input[@id='reminder_remind_at']")
	WebElement remindDate_Field;
	
	@FindBy(xpath="//label[text()='Mark as actioned']")
	WebElement actioned_chkBox;
	
	@FindBy(xpath="//input[@id='reminder_action']")
	WebElement action_txtField;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement save_Btn;
	
	
	//table[@id='reminders_table']/tbody/tr[3]/td[7]
	
	
//================================Initialise web elements created in this class========================================
	
	public Reminder_Page() {
	PageFactory.initElements(driver,this);
	}
	
//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

	
	public void verify_clickReminderTab() {
		reminder_tab.click();
		String title = reminderTab_title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Reminders"));
		softAssert.assertAll();
	}
	
//==================================================================================================================//	
	
	public void verify_EditReminder() {
		String date= "17/05/2020";
		List<WebElement> rows = driver.findElements(By.xpath("//table[@id='reminders_table']/tbody/tr/td[7]/a"));
		int rownum = rows.size();
		System.out.println("NUMBER OF reminders with pending actions on screen are : " + rownum);
		action_Link.click();
		remindDate_Field.clear();
		remindDate_Field.sendKeys(date);
		save_Btn.click();
		String title = reminderTab_title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Reminders"));
		softAssert.assertAll();
	}
	
//==================================================================================================================//	
	
	public void verify_actionReminder() {
		action_Link.click();
		actioned_chkBox.click();
		action_txtField.sendKeys("Automated action");
		save_Btn.click();
		String title = reminderTab_title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Reminders"));
		softAssert.assertAll();	
	}
	
//==================================================================================================================//	
	
	public void verify_cancelReminder() throws InterruptedException {
		List<WebElement> rows = driver.findElements(By.xpath("//table[@id='reminders_table']/tbody/tr/td[8]/a"));
		int rownum = rows.size();
		System.out.println("NUMBER OF reminders on screen are : " + rownum);
		String str1 = "//table[@id='reminders_table']/tbody/tr[";
		String str2 = "]/td[8]/a";
		for (int i=rownum;i>=1;i--) {
			String actualxpath= str1+i+str2;
			WebElement cancelLink = driver.findElement(By.xpath(actualxpath));
			cancelLink.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			cancelLink.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			String title = reminderTab_title.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Reminders"));
			softAssert.assertAll();
			break;	
		}
	}
	
//==================================================================================================================//	
	

}
