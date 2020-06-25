package kajima.venueadmin.pom_pages;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Reminder_Page extends TestBase {
	
	@FindBy(xpath = "//a[contains(@href,'reminders')]")
	WebElement reminder_tab;
	
	@FindBy(xpath = "//a[contains(@href,'clients')]")
	WebElement Client_tab;
	
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
	
	public void createDataForReminder() throws InterruptedException {
		Client_tab.click();
		driver.findElement(By.xpath("//a[text()='View']")).click();
		try {
			driver.findElement(By.xpath("//a[text()='Create a Reminder']")).click();
			driver.findElement(By.xpath("//input[@id='reminder_remind_at']")).sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
			driver.findElement(By.xpath("//input[@id='reminder_notes']")).sendKeys("AUTONOTES");
			driver.findElement(By.xpath("//a[text()='Save']")).click();
		}catch(NoSuchElementException e) {
			System.out.println("Reminder is already available");	
		}	
	}
	
//==================================================================================================================//	
	
	public void verify_EditReminder() throws InterruptedException {
		List<WebElement> rows = driver.findElements(By.xpath("//table[@id='reminders_table']/tbody/tr/td[7]/a"));
		int rownum = rows.size();
		System.out.println("NUMBER OF reminders with pending actions on screen are : " + rownum);
		try {
		Thread.sleep(2000);
		action_Link.click();
		Thread.sleep(2000);
		remindDate_Field.clear();
		remindDate_Field.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
		save_Btn.click();
		String title = reminderTab_title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Reminders"));
		softAssert.assertAll();
		}catch(NoSuchElementException e) {
			createDataForReminder();
			Thread.sleep(5000);
			verify_clickReminderTab();
			action_Link.click();
			remindDate_Field.clear();
			remindDate_Field.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
			save_Btn.click();
			String title = reminderTab_title.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Reminders"));
			softAssert.assertAll();
		}
	}
	
//==================================================================================================================//	
	
	public void verify_actionReminder() throws InterruptedException {
		try {
		Thread.sleep(2000);
		action_Link.click();
		Thread.sleep(2000);
		actioned_chkBox.click();
		action_txtField.sendKeys("Automated action");
		save_Btn.click();
		String title = reminderTab_title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Reminders"));
		softAssert.assertAll();	
		}catch(NoSuchElementException e) {
			createDataForReminder();
			Thread.sleep(5000);
			verify_clickReminderTab();
			action_Link.click();
			actioned_chkBox.click();
			action_txtField.sendKeys("Automated action");
			save_Btn.click();
			String title = reminderTab_title.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Reminders"));
			softAssert.assertAll();	
			
		}
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
