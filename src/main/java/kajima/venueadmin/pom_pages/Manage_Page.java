package kajima.venueadmin.pom_pages;

import static org.testng.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import com.google.common.base.Function;

import kajima.venueadmin.base.TestBase;

public class Manage_Page extends TestBase {
	
	Clients_Page client_page = new Clients_Page();
	
	@FindBy(xpath = "//a[contains(@class,'main') and contains(text(),'Manage')]")
	WebElement manage_tab;
	
	@FindBy(xpath="//a[@href='#venue_management']")
	WebElement defaultManage_tab;
	
	@FindBy(xpath="//a[text()='New Booking Checklist']")
	WebElement newBookChkList_btn;
	
	@FindBy(id="checklist_name")
	WebElement newBookChkListName_txt;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement blueSave_btn;
	
	@FindBy(xpath="//a[contains(@href,'checklists') and contains(text(),'Edit')]")
	WebElement editChecklistsItem_link;
	
	@FindBy(xpath="//a[contains(@data-confirm,'Warning') and contains(@href,'checklists') and contains(text(),'Edit')]")
	WebElement editChecklists_link;
	
	@FindBy(xpath="//a[contains(@href,'checklists') and text()='Delete']")
	WebElement deleteChecklists_link;
	
	@FindBy(xpath="//a[text()='New Checklist Item']")
	WebElement newChkListItem_btn;
	
	@FindBy(xpath="//a[contains(@href,'checklist_items') and contains(text(),'Edit')]")
	WebElement editChecklistItem_link;
	
	@FindBy(xpath="//a[contains(@href,'checklist_items') and text()='Delete']")
	WebElement deleteChecklistItem_link;
	
	@FindBy(id="checklist_item_name")
	WebElement chkListItemName_txt;
	
	@FindBy(xpath="//a[text()='New Booking Category']")
	WebElement newBookingCat_btn;
	
	@FindBy(id="booking_type_name")
	WebElement bookingTypeName_txt;
	
	@FindBy(xpath="//a[contains(@href,'booking_types') and contains(text(),'Edit')]")
	WebElement editBookingType_link;
	
	
	@FindBy(xpath="//a[contains(@href,'booking_types') and text()='Delete']")
	WebElement deleteBookingType_link;
	
	@FindBy(xpath="//a[text()='Add Holiday']")
	WebElement addHoliday_btn;
	
	@FindBy(id="holiday_start_date")
	WebElement holidayStartDate_txt;
	
	@FindBy(id="holiday_end_date")
	WebElement holidayEndDate_txt;
	
	@FindBy(id="holiday_description")
	WebElement holidayDesc_txt;
	
	@FindBy(xpath = "//div[@id='holiday-list']//tbody/tr/td[contains(.,'AutomationHolidays')]//following-sibling::td/a[text()='Edit']")
	WebElement editHolidays_link;
	
	@FindBy(xpath="//a[contains(@href,'holidays') and contains(text(),'Edit')]")
	WebElement editHolidaysGen_link;
	
	@FindBy(xpath="//a[contains(@href,'holidays') and text()='Delete']")
	WebElement deleteHolidaysGen_link;
	
	@FindBy(xpath = "//div[@id='holiday-list']//tbody/tr/td[contains(.,'AutomationHolidaysUpdated')]//following-sibling::td/a[text()='Delete']")
	WebElement deleteHolidays_link;
	
	@FindBy(xpath="//a[text()='Add Closure']")
	WebElement addClosure_btn;
	
	@FindBy(id="closure_start_date")
	WebElement closureStartDate_txt;
	
	@FindBy(id="closure_end_date")
	WebElement closureEndDate_txt;
	
	@FindBy(id="closure_reason")
	WebElement closureReason_txt;
	
	@FindBy(xpath="//a[contains(@href,'closures') and contains(text(),'Edit')]")
	WebElement editClosureGen_link;
	
	@FindBy(xpath="//a[contains(@href,'closures') and text()='Delete']")
	WebElement deleteClosureGen_link;
	
	@FindBy(xpath="//div[@id='closure-list']//tbody/tr/td[contains(.,'AutomationClosure')]//following-sibling::td/a[text()='Edit']")
	WebElement editClosure_link;
	
	@FindBy(xpath="//div[@id='closure-list']//tbody/tr/td[contains(.,'AutomationClosureUpdated')]//following-sibling::td/a[text()='Delete']")
	WebElement deleteClosure_link;
	
	@FindBy(xpath="//a[text()='Add Client Flag']")
	WebElement addClientFag_btn;
	
	@FindBy(id="client_flag_reason")
	WebElement clientFlagReason_txt;
	
	@FindBy(xpath = "//div[@id='client-flag-list']//tbody/tr/td[contains(.,'AutoFlag')]//following-sibling::td/a[text()='Delete']")
	WebElement deleteClientFlag_link;
	
	@FindBy(xpath="//a[text()='New Booking Slot']")
	WebElement newBookingSlot_btn;
	
	@FindBy(id="booking_slot_start_time")
	WebElement bookingSlotStartTime_txt;
	
	@FindBy(id="booking_slot_end_time")
	WebElement bookingSlotEndTime_txt;
	
	@FindBy(id="booking_slot_name")
	WebElement bookingSlotName_txt;
	
	@FindBy(xpath="//span[@class='custom checkbox']")
	WebElement daysOfWeek_chckBox;
	
	@FindBy(xpath="//table[@id='client-booking-slots']//tbody/tr/td[contains(.,'AutomationSlot')]//following-sibling::td/a[text()='Edit']")
	WebElement editBookingSlots_link;
	
	@FindBy(xpath="//table[@id='client-booking-slots']//tbody/tr/td[contains(.,'AutomationSlotUpdated')]//following-sibling::td/a[text()='Delete']")
	WebElement deleteBookingSlots_link;
	
	@FindBy(id="default_weekday_time")
	WebElement defaultWeekDayTime_txt;
	
	@FindBy(id="default_weekend_time")
	WebElement defaultWeekEndTime_txt;
	
	@FindBy(id="default_holiday_time")
	WebElement defaultHoliDayTime_txt;
	
	@FindBy(xpath="//input[@value='Update']")
	WebElement update_btn;
	
	@FindBy(xpath="//div[contains(@id,'flash') and contains(@class,'alert-box')]")
	WebElement success_msg;
	
	
	
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
		
		public void verify_newBookingChkList() {
			newBookChkList_btn.click();
			newBookChkListName_txt.sendKeys("NewAutoCheckList");
			blueSave_btn.click();
			String title = success_msg.getText();
		//	System.out.println(title);
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Booking checklist was successfully created."));
			softAssert.assertAll();	
		}
		
		public void verify_editChkListItem() throws InterruptedException {
			editChecklistsItem_link.click();
			newChkListItem_btn.click();
			chkListItemName_txt.sendKeys("NewAutoCheckListItem");
			blueSave_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Checklist item was successfully created."));
			softAssert.assertAll();	
			
			editChecklistItem_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			editChecklistItem_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
			chkListItemName_txt.clear();
			chkListItemName_txt.sendKeys("NewAutoCheckListItemUpdated");
			blueSave_btn.click();
			String title1 = success_msg.getText();
			SoftAssert softAssert1 = new SoftAssert();
			softAssert1.assertTrue(title1.contains("Checklist item was successfully updated."));
			softAssert1.assertAll();
			
			deleteChecklistItem_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteChecklistItem_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
			String title2 = success_msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(title2.contains("Checklist item was successfully deleted."));
			softAssert2.assertAll();
			driver.findElement(By.xpath("//a[contains(.,'Back to Venue')]")).click();
			 
		}
		
		public void verify_editBookingChkList() throws InterruptedException {
			editChecklists_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			editChecklists_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
			newBookChkListName_txt.clear();
			newBookChkListName_txt.sendKeys("NewAutoCheckListUpdated");
			blueSave_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Booking checklist was successfully updated."));
			softAssert.assertAll();	
		}
		
		public void verify_deleteBookingChkList() throws InterruptedException {
			deleteChecklists_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteChecklists_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
		}
		
		
		public void verify_newBookingCatagory() {
			newBookingCat_btn.click();
			bookingTypeName_txt.sendKeys("NewAutoCatagory");
			blueSave_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Booking category was successfully created."));
			softAssert.assertAll();	
		}
		
		public void verify_editBookingCatagory() throws InterruptedException {
			editBookingType_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			editBookingType_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
			bookingTypeName_txt.clear();
			bookingTypeName_txt.sendKeys("NewAutoCatagoryUpdated");
			blueSave_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Booking category was successfully updated."));
			softAssert.assertAll();	
		}
		
		public void verify_deleteBookingCatagory() throws InterruptedException {
			deleteBookingType_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteBookingType_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
		}
		
		public void verify_addNewHolidays() {
			addHoliday_btn.click();
			holidayDesc_txt.sendKeys("AutomationHolidays");
			holidayStartDate_txt.sendKeys("25/07/2020");
			holidayEndDate_txt.sendKeys("26/07/2020");
			blueSave_btn.click();
			String descTxt = driver.findElement(By.xpath("//div[@id='holiday-list']//tbody/tr/td[contains(.,'AutomationHolidays')]")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(descTxt.contains("AutomationHolidays"));
			softAssert.assertAll();	
		}
		
		public void verify_editHolidays() throws InterruptedException {
			editHolidays_link.click();
			holidayDesc_txt.clear();
			holidayDesc_txt.sendKeys("AutomationHolidaysUpdated");
			blueSave_btn.click();
			String updatedDescTxt = driver.findElement(By.xpath("//div[@id='holiday-list']//tbody/tr/td[contains(.,'AutomationHolidaysUpdated')]")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(updatedDescTxt.contains("AutomationHolidaysUpdated"));
			softAssert.assertAll();	
		}
		
		public void verify_deleteHolidays() throws InterruptedException {
			deleteHolidays_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteHolidays_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
		}
		
		public void verify_addNewClosures() {
			addClosure_btn.click();
			closureReason_txt.sendKeys("AutomationClosure");
			closureStartDate_txt.sendKeys("25/07/2020");
			closureEndDate_txt.sendKeys("26/07/2020");
			blueSave_btn.click();
			String descTxt = driver.findElement(By.xpath("//div[@id='closure-list']//tbody/tr/td[contains(.,'AutomationClosure')]")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(descTxt.contains("AutomationClosure"));
			softAssert.assertAll();	
		}
		
		public void verify_editClosures() throws InterruptedException {
			editClosure_link.click();
			closureReason_txt.clear();
			closureReason_txt.sendKeys("AutomationClosureUpdated");
			blueSave_btn.click();
			String updatedDescTxt = driver.findElement(By.xpath("//div[@id='closure-list']//tbody/tr/td[contains(.,'AutomationClosureUpdated')]")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(updatedDescTxt.contains("AutomationClosureUpdated"));
			softAssert.assertAll();	
		}
		
		public void verify_deleteClosures() throws InterruptedException {
			deleteClosure_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteClosure_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
		}
		
		public void verify_updatedefaultCalenderTime() {
			defaultWeekDayTime_txt.clear();
			defaultWeekDayTime_txt.sendKeys("11:00");
			defaultWeekEndTime_txt.clear();
			defaultWeekEndTime_txt.sendKeys("11:00");
			defaultHoliDayTime_txt.clear();
			defaultHoliDayTime_txt.sendKeys("11:00");
			update_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Default calendar times successfully updated"));
			softAssert.assertAll();	
		}
		
		public void verify_addClientFlag() throws InterruptedException {
			addClientFag_btn.click();
			clientFlagReason_txt.sendKeys("AutoFlag");
			blueSave_btn.click();
			
			client_page.clicktab();
			client_page.search_box.sendKeys("auto");
			client_page.view_link.click();
			client_page.editClient_btn.click();
			driver.findElement(By.xpath("//a[@class='selector']")).click();
			driver.findElement(By.xpath("//li[contains(.,'AutoFlag')]")).click();
			client_page.updateClient_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Client was successfully updated."));
			softAssert.assertAll();	
			Assert.assertTrue(driver.findElement(By.xpath("//img[contains(@src,'flag_red') and @alt='Flag red']")).isDisplayed());
		}
		
		public void verify_deleteClientFlag() throws InterruptedException {
			client_page.editClient_btn.click();
			driver.findElement(By.xpath("//a[@class='selector']")).click();
			driver.findElement(By.xpath("//li[@class='selected']")).click();
			client_page.updateClient_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Client was successfully updated."));
			softAssert.assertAll();	
			Assert.assertFalse(driver.findElement(By.xpath("//img[contains(@src,'flag_red') and @alt='Flag red']")).isDisplayed());
			
			manage_tab.click();
			deleteClientFlag_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteClientFlag_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
		}
		
		public void verify_addNewBookingSlot() {
			newBookingSlot_btn.click();
			bookingSlotName_txt.sendKeys("AutomationSlot");
			bookingSlotStartTime_txt.sendKeys("10:00");
			bookingSlotEndTime_txt.sendKeys("11:00");
			daysOfWeek_chckBox.click();
			blueSave_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Booking booking_slot was successfully created."));
			softAssert.assertAll();	
		}
		
		public void verify_editBookingSlot() throws InterruptedException {
			editBookingSlots_link.click();
			bookingSlotName_txt.clear();
			bookingSlotName_txt.sendKeys("AutomationSlotUpdated");
			blueSave_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Booking booking_slot was successfully updated."));
			softAssert.assertAll();	
		}
		
		public void verify_deleteBookingSlot() throws InterruptedException {
			deleteBookingSlots_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteBookingSlots_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
		}

		
}


