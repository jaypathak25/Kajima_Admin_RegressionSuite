package kajima.venueadmin.pom_pages;

import static org.testng.Assert.assertTrue;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
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
	
	@FindBy(xpath="//div[@id='flash_notice' and contains(@class,'alert-box')]")
	WebElement success_msg;
	
	@FindBy(xpath="//a[text()='New Space']")
	WebElement newSpace_btn;
	
	@FindBy(xpath="//input[@id='space_name']")
	WebElement spaceName_txt;
	
	@FindBy(xpath="//div[@id='category-list']//div//label//span")
	WebElement newSpaceCatagory_chkBox;
	
	@FindBy(xpath="//a[contains(@href,'newautospace') and text()='Edit']")
	WebElement editNewSpace_msg;
	
	@FindBy(xpath="//a[contains(@href,'newautospaceupdated') and text()='Delete']")
	WebElement deleteNewSpace_msg;
	
	@FindBy(xpath="//a[text()='Edit Website']")
	WebElement editWebSite_btn;
	
	@FindBy(xpath="//a[text()='Edit Venue']")
	WebElement editVenue_btn;
	
	@FindBy(xpath="//dl[@class='tabs']//dd/a")
	List<WebElement> websiteNVenueSubTabs;
	
	@FindBy(xpath="//input[@id='venue_name']")
	WebElement venueName_txt;
	
	@FindBy(xpath="//div[@id='venue-name']//a")
	WebElement venueNameTitle_txt;
	
	@FindBy(xpath="//input[@id='venue_statement_number_prefix']")
	WebElement invoiceNumPrefix_txt;
	
	@FindBy(xpath="//input[@id='venue_credit_note_number_prefix']")
	WebElement CNNumPrefix_txt;
	
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
		
		
		public void verify_newBookingCatagory() throws InterruptedException {
			newBookingCat_btn.click();
			bookingTypeName_txt.sendKeys("NewAutoCatagory");
			Thread.sleep(2000);
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
		
		public void verify_addNewHolidays() throws InterruptedException {
			addHoliday_btn.click();
			holidayDesc_txt.sendKeys("AutomationHolidays");
			holidayStartDate_txt.sendKeys("25/07/2020");
			holidayEndDate_txt.sendKeys("26/07/2020");
			holidayEndDate_txt.sendKeys(Keys.TAB);
			Thread.sleep(2000);
			blueSave_btn.click();
			String descTxt = driver.findElement(By.xpath("//div[@id='holiday-list']//tbody/tr/td[contains(.,'AutomationHolidays')]")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(descTxt.contains("AutomationHolidays"));
			softAssert.assertAll();	
		}
		
		public void verify_editHolidays() throws InterruptedException {
			Thread.sleep(2000);
			Actions action = new Actions(driver);
			action.moveToElement(editHolidays_link).click().perform();
		//	editHolidays_link.click();
			Thread.sleep(2000);
			holidayDesc_txt.clear();
			holidayDesc_txt.sendKeys("AutomationHolidaysUpdated");
			Thread.sleep(2000);
			blueSave_btn.click();
			String updatedDescTxt = driver.findElement(By.xpath("//div[@id='holiday-list']//tbody/tr/td[contains(.,'AutomationHolidaysUpdated')]")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(updatedDescTxt.contains("AutomationHolidaysUpdated"));
			softAssert.assertAll();	
		}
		
		public void verify_deleteHolidays() throws InterruptedException {
			Thread.sleep(2000);
			deleteHolidays_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteHolidays_link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
		}
		
		public void verify_addNewClosures() throws InterruptedException {
			addClosure_btn.click();
			closureReason_txt.sendKeys("AutomationClosure");
			closureStartDate_txt.sendKeys("25/07/2020");
			closureEndDate_txt.sendKeys("26/07/2020");
			closureEndDate_txt.sendKeys(Keys.TAB);
			Thread.sleep(2000);
			blueSave_btn.click();
			String descTxt = driver.findElement(By.xpath("//div[@id='closure-list']//tbody/tr/td[contains(.,'AutomationClosure')]")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(descTxt.contains("AutomationClosure"));
			softAssert.assertAll();	
		}
		
		public void verify_editClosures() throws InterruptedException {
			Thread.sleep(2000);
			Actions action = new Actions(driver);
			action.moveToElement(editClosure_link).click().perform();
		//	editClosure_link.click();
			Thread.sleep(3000);
			closureReason_txt.clear();
			closureReason_txt.sendKeys("AutomationClosureUpdated");
			Thread.sleep(5000);
			blueSave_btn.click();
			String updatedDescTxt = driver.findElement(By.xpath("//div[@id='closure-list']//tbody/tr/td[contains(.,'AutomationClosureUpdated')]")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(updatedDescTxt.contains("AutomationClosureUpdated"));
			softAssert.assertAll();	
		}
		
		public void verify_deleteClosures() throws InterruptedException {
			Thread.sleep(3000);
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
			Thread.sleep(1000);
			Actions action = new Actions(driver);
			action.moveToElement(addClientFag_btn).click().perform();
		//	addClientFag_btn.click();
			clientFlagReason_txt.sendKeys("AutoFlag");
			Thread.sleep(1000);
			blueSave_btn.click();
			Thread.sleep(4000);
			client_page.clicktab();
			client_page.search_box.sendKeys("auto");
			client_page.view_link.click();
			client_page.editClient_btn.click();
			 JavascriptExecutor js = (JavascriptExecutor) driver;
			 js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
			 Thread.sleep(5000);
			driver.findElement(By.xpath("//select[@id='client_client_flag_id']//following-sibling::div//a[@class='selector']")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//li[contains(.,'AutoFlag')]")).click();
			client_page.updateClient_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Client was successfully updated."));
			softAssert.assertAll();	
			Assert.assertTrue(driver.findElement(By.xpath("//img[contains(@src,'flag_red') and @alt='Flag red']")).isDisplayed());
		}
		
		public void verify_deleteClientFlag() throws InterruptedException {
			Thread.sleep(3000);
			client_page.editClient_btn.click();
			 JavascriptExecutor js = (JavascriptExecutor) driver;
			 js.executeScript("window.scrollTo(0, document.body.scrollHeight)");
			 Thread.sleep(5000);
			driver.findElement(By.xpath("//select[@id='client_client_flag_id']//following-sibling::div//a[@class='selector']")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//select[@id='client_client_flag_id']//following-sibling::div//ul//li")).click();
			Thread.sleep(1000);
			client_page.updateClient_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Client was successfully updated."));
			softAssert.assertAll();	
		//	assertTrue(!isElementPresent(driver.findElement(By.xpath("//img[contains(@src,'flag_red') and @alt='Flag red']"))));
		//	Assert.assertFalse(driver.findElement(By.xpath("//img[contains(@src,'flag_red') and @alt='Flag red']")).isEnabled());
			
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
		
		private boolean isElementPresent(WebElement findElement) {
			// TODO Auto-generated method stub
			return false;
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
		
		
		
		public void verify_addingNewBookableSpace() {
			newSpace_btn.click();
			spaceName_txt.sendKeys("NewAutoSpace");
			newSpaceCatagory_chkBox.click();
			blueSave_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Successfully created space."));
			softAssert.assertAll();	
		}
		
		public void verify_editNewBookableSpace() throws InterruptedException {
			editNewSpace_msg.click();
			Thread.sleep(1000);
			spaceName_txt.clear();
			spaceName_txt.sendKeys("NewAutoSpaceUpdated");
			blueSave_btn.click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Successfully updated space."));
			softAssert.assertAll();	
		}
		
		public void verify_deleteNewBookableSpace() throws InterruptedException {
			deleteNewSpace_msg.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(1000);
			deleteNewSpace_msg.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			Thread.sleep(1000);
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Successfully destroyed space."));
			softAssert.assertAll();		
		}
		
		public void verify_websiteSubtabs() throws InterruptedException {
			editWebSite_btn.click();
			int noOfSubTabs  = websiteNVenueSubTabs.size();
			System.out.println("Number of website subtabs are " + noOfSubTabs);
			for(int i=1;i<=noOfSubTabs;i++) {
				Thread.sleep(1000);
				driver.findElement(By.xpath("//dl[@class='tabs']//dd["+i+"]/a")).click();
				String subTabName =  driver.findElement(By.xpath("//dl[@class='tabs']//dd["+i+"]/a")).getText();
				System.out.println("Website Sub tab name is : "+ subTabName);
				Assert.assertTrue(noOfSubTabs==9);
			}
		}
		
		public void verify_BAUwebsiteSubtabs() throws InterruptedException {
			editWebSite_btn.click();
			int noOfBAUSubTabs  = websiteNVenueSubTabs.size();
			System.out.println("Number of website subtabs are " + noOfBAUSubTabs);
			for(int i=1;i<=noOfBAUSubTabs;i++) {
				Thread.sleep(1000);
				driver.findElement(By.xpath("//dl[@class='tabs']//dd["+i+"]/a")).click();
				String subTabName =  driver.findElement(By.xpath("//dl[@class='tabs']//dd["+i+"]/a")).getText();
				System.out.println("Website Sub tab name is : "+ subTabName);
				Assert.assertTrue(noOfBAUSubTabs==4);
			}
		}
		
		public void verify_venueSubtabs() throws InterruptedException {
			editVenue_btn.click();
			int noOfVenueSubTabs  = websiteNVenueSubTabs.size();
			System.out.println("Number of Venue subtabs are " + noOfVenueSubTabs);
			for(int i=1;i<=noOfVenueSubTabs;i++) {
				Thread.sleep(1000);
				driver.findElement(By.xpath("//dl[@class='tabs']//dd["+i+"]/a")).click();
				String subTabName =  driver.findElement(By.xpath("//dl[@class='tabs']//dd["+i+"]/a")).getText();
				System.out.println("Venue Sub tab name is : "+ subTabName);
				Assert.assertTrue(noOfVenueSubTabs==7);
			}
		}
		
		public void verify_editVenueBasicDetails() {
			String venuetitlebefore = venueNameTitle_txt.getText();
			System.out.println("Venue name title after update "+ venuetitlebefore);
			
			driver.findElement(By.xpath("//a[text()='Basic Information']")).click();
			venueName_txt.clear();
			venueName_txt.sendKeys("Chorley Health Centre Updated");
			driver.findElement(By.xpath("//input[@value='Save']")).click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Successfully updated venue."));
			softAssert.assertAll();	
			
			String venuetitleafter = venueNameTitle_txt.getText();
			System.out.println("Venue name title after update "+ venuetitleafter);
			
			Assert.assertFalse(venuetitleafter.equalsIgnoreCase(venuetitlebefore));
			
			String venuetitlebefore2 = venueNameTitle_txt.getText();
			System.out.println("Venue name title after update "+ venuetitlebefore2);
			
			
			driver.findElement(By.xpath("//a[text()='Basic Information']")).click();
			venueName_txt.clear();
			venueName_txt.sendKeys("Chorley Health Centre");
			driver.findElement(By.xpath("//input[@value='Save']")).click();
			String title2 = success_msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(title2.contains("Successfully updated venue."));
			softAssert2.assertAll();	
			
			String venuetitleafter2 = venueNameTitle_txt.getText();
			System.out.println("Venue name title after update "+ venuetitleafter2);
			
			Assert.assertFalse(venuetitleafter2.equalsIgnoreCase(venuetitlebefore2));
		}
		
		public void verify_updateInvoiceNCNPrefix() throws InterruptedException {
			driver.findElement(By.xpath("//a[text()='Billing']")).click();
			invoiceNumPrefix_txt.clear();
			invoiceNumPrefix_txt.sendKeys("AUTOICHO");
			CNNumPrefix_txt.clear();
			CNNumPrefix_txt.sendKeys("AUTOCCHO");
			driver.findElement(By.xpath("//input[@value='Save']")).click();
			String title2 = success_msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(title2.contains("Successfully updated venue."));
			softAssert2.assertAll();
			Thread.sleep(3000);
			client_page.clicktab();
			client_page.search_box.clear();
			client_page.search_box.sendKeys("auto");
			client_page.view_link.click();
			String invoiceTxt = driver.findElement(By.xpath("//a[contains(@title,'Includes bookings')]")).getText();
			System.out.println("after first update invoice name "+ invoiceTxt);
			String CNtxt = driver.findElement(By.xpath("//a[contains(text(),'Credit Note ')]")).getText();
			System.out.println("after first update CN name "+ CNtxt);
			Assert.assertTrue(invoiceTxt.contains("AUTO"));
			Assert.assertTrue(CNtxt.contains("AUTO"));
			
		}
		
		public void verify_revertInvoiceNCNPrefix() throws InterruptedException {
			verify_clickManageTab();
			editVenue_btn.click();
			driver.findElement(By.xpath("//a[text()='Billing']")).click();
			invoiceNumPrefix_txt.clear();
			invoiceNumPrefix_txt.sendKeys("ICHO");
			CNNumPrefix_txt.clear();
			CNNumPrefix_txt.sendKeys("CCHO");
			driver.findElement(By.xpath("//input[@value='Save']")).click();
			String title2 = success_msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(title2.contains("Successfully updated venue."));
			softAssert2.assertAll();
			Thread.sleep(3000);
			client_page.clicktab();
			client_page.search_box.clear();
			client_page.search_box.sendKeys("auto");
			client_page.view_link.click();
			String invoiceTxt = driver.findElement(By.xpath("//a[contains(@title,'Includes bookings')]")).getText();
			System.out.println("after second update invoice name "+ invoiceTxt);
			String CNtxt = driver.findElement(By.xpath("//a[contains(text(),'Credit Note ')]")).getText();
			System.out.println("after second update CNtxt name "+ CNtxt);
			Assert.assertFalse(invoiceTxt.contains("AUTO"));
			Assert.assertFalse(CNtxt.contains("AUTO"));
			
		}
		
		public void verify_editBAUVenueBasicDetails() {
			String venuetitlebefore = venueNameTitle_txt.getText();
			System.out.println("Venue name title after update "+ venuetitlebefore);
			
			driver.findElement(By.xpath("//a[text()='Basic Information']")).click();
			venueName_txt.clear();
			venueName_txt.sendKeys("X - SLS @ King David High School Updated");
			driver.findElement(By.xpath("//input[@value='Save']")).click();
			String title = success_msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Successfully updated venue."));
			softAssert.assertAll();	
			
			String venuetitleafter = venueNameTitle_txt.getText();
			System.out.println("Venue name title after update "+ venuetitleafter);
			
			Assert.assertFalse(venuetitleafter.equalsIgnoreCase(venuetitlebefore));
			
			String venuetitlebefore2 = venueNameTitle_txt.getText();
			System.out.println("Venue name title after update "+ venuetitlebefore2);
			
			
			driver.findElement(By.xpath("//a[text()='Basic Information']")).click();
			venueName_txt.clear();
			venueName_txt.sendKeys("X - SLS @ King David High School");
			driver.findElement(By.xpath("//input[@value='Save']")).click();
			String title2 = success_msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(title2.contains("Successfully updated venue."));
			softAssert2.assertAll();	
			
			String venuetitleafter2 = venueNameTitle_txt.getText();
			System.out.println("Venue name title after update "+ venuetitleafter2);
			
			Assert.assertFalse(venuetitleafter2.equalsIgnoreCase(venuetitlebefore2));
		}
		
		public void verify_updateBAUInvoiceNCNPrefix() throws InterruptedException {
			driver.findElement(By.xpath("//a[text()='Billing']")).click();
			invoiceNumPrefix_txt.clear();
			invoiceNumPrefix_txt.sendKeys("AUTOSLS_KDC");
			CNNumPrefix_txt.clear();
			CNNumPrefix_txt.sendKeys("AUTOSLS_CN_KDC");
			driver.findElement(By.xpath("//input[@value='Save']")).click();
			String title2 = success_msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(title2.contains("Successfully updated venue."));
			softAssert2.assertAll();
			Thread.sleep(3000);
			client_page.clicktab();
			client_page.search_box.clear();
			client_page.search_box.sendKeys("auto");
			client_page.view_link.click();
			String invoiceTxt = driver.findElement(By.xpath("//a[contains(@title,'Includes bookings')]")).getText();
			System.out.println("after first update invoice name "+ invoiceTxt);
			String CNtxt = driver.findElement(By.xpath("//a[contains(text(),'Credit Note ')]")).getText();
			System.out.println("after first update CN name "+ CNtxt);
			Assert.assertTrue(invoiceTxt.contains("AUTO"));
			Assert.assertTrue(CNtxt.contains("AUTO"));
			
		}
		
		public void verify_revertBAUInvoiceNCNPrefix() throws InterruptedException {
			verify_clickManageTab();
			editVenue_btn.click();
			driver.findElement(By.xpath("//a[text()='Billing']")).click();
			invoiceNumPrefix_txt.clear();
			invoiceNumPrefix_txt.sendKeys("SLS_KDC");
			CNNumPrefix_txt.clear();
			CNNumPrefix_txt.sendKeys("SLS_CN_KDC");
			driver.findElement(By.xpath("//input[@value='Save']")).click();
			String title2 = success_msg.getText();
			SoftAssert softAssert2 = new SoftAssert();
			softAssert2.assertTrue(title2.contains("Successfully updated venue."));
			softAssert2.assertAll();
			Thread.sleep(3000);
			client_page.clicktab();
			client_page.search_box.clear();
			client_page.search_box.sendKeys("auto");
			client_page.view_link.click();
			String invoiceTxt = driver.findElement(By.xpath("//a[contains(@title,'Includes bookings')]")).getText();
			System.out.println("after second update invoice name "+ invoiceTxt);
			String CNtxt = driver.findElement(By.xpath("//a[contains(text(),'Credit Note ')]")).getText();
			System.out.println("after second update CNtxt name "+ CNtxt);
			Assert.assertFalse(invoiceTxt.contains("AUTO"));
			Assert.assertFalse(CNtxt.contains("AUTO"));
			
		}
}


