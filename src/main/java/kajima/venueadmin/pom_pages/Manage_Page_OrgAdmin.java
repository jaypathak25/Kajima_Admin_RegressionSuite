package kajima.venueadmin.pom_pages;

import static org.testng.Assert.assertNotEquals;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Manage_Page_OrgAdmin extends TestBase {
	
	@FindBy(xpath="//a[text()='Manage']")
	WebElement orgManage_tab;
	
	@FindBy(xpath="//html/body[@id='top']/div[@id='content']//h2")
	WebElement verifyManageTab;
	
	@FindBy(xpath="//div/dl[@class='tabs organisation-tabs']//dd/a")
	List<WebElement> manage_subTabs;
	
	@FindBy(xpath="//ul[@id='edit-venue-management-tabs']/li//legend")
	WebElement subTabPage_verify;
	
	@FindBy(xpath="//input[@id='organisation_rules_booking_amendment_restriction_value_days']")
	WebElement amendBookBeforeDate;
	
	@FindBy(xpath="//input[@id='organisation_rules_minimum_cancellation_notice_period_value_days']")
	WebElement dayNoticeForCancellation;
	
	@FindBy(xpath="//input[@id='organisation_rules_reminder_period_value_days']")
	WebElement reminderEventStartDate;
	
	@FindBy(xpath="//input[@id='organisation_rules_ccg_comissioned_service_booking_period_value_months']")
	WebElement bookingCCGcommMonthsAhead;
	
	@FindBy(xpath="//input[@id='organisation_rules_non_ccg_comissioned_service_booking_period_value_months']")
	WebElement bookingNonCCGcommMonthsAhead;
	
	@FindBy(xpath="//a[text()='New Category']")
	WebElement newSpaceCat_btn;
	
	@FindBy(xpath="//input[@id='category_name']")
	WebElement catName_txt;
	
	@FindBy(xpath="//textarea[@id='category_description']")
	WebElement catDescription;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement blueSave_btn;
	
	@FindBy(xpath="//button[@class='buttonBourbon submit_button right' and text()='Save']")
	WebElement Save_btn;
	
	@FindBy(xpath="//li[@id='venue_managementTab']//table/tbody/tr/td[text()='NewAutoSpaceCatagory']//following-sibling::td/a[text()='Edit']")
	WebElement editSpaceCat_link;
	
	@FindBy(xpath="//li[@id='venue_managementTab']//table/tbody/tr/td[text()='NewUpdatedAutoSpaceCatagory']//following-sibling::td/a[text()='Delete']")
	WebElement deleteSpaceCat_link;
	
	@FindBy(xpath="//li[@id='venue_managementTab']//table/tbody/tr/td[1]")
	List<WebElement> spaceCatRows;
	
	@FindBy(xpath="//a[text()='New Ccg Region']")
	WebElement newCCGRegion_btn;
	
	@FindBy(xpath="//input[@id='ccg_region_name']")
	WebElement newCCGRegionName_txt;
	
	@FindBy(xpath="//input[@id='ccg_region_reference']")
	WebElement newCCGRegionRef_txt;
	
	@FindBy(xpath="//input[@id='ccg_region_notes']")
	WebElement newCCGRegionNotes_txt;
	
	@FindBy(xpath="//input[@id='ccg_region_contract_end_date']")
	WebElement newCCGRegionDate_txt;
	
	@FindBy(xpath="//li[@id='ccg-regionsTab']//table/tbody/tr/td[text()='NewAutoCCGRegion']//following-sibling::td/a[text()='Edit']")
	WebElement editCCGRegion_link;
	
	@FindBy(xpath="//li[@id='ccg-regionsTab']//table/tbody/tr/td[text()='NewUpdatedAutoCCGRegion']//following-sibling::td/a[text()='Delete']")
	WebElement deleteCCGRegion_link;
	
	@FindBy(xpath="//li[@id='ccg-regionsTab']//table/tbody/tr/td[1]")
	List<WebElement> CCGRegionRows;
	
	@FindBy(xpath="//a[text()='New Service']")
	WebElement newServices_btn;
	
	@FindBy(xpath="//input[@id='service_name']")
	WebElement newServiceName_txt;
	
	@FindBy(xpath="//textarea[@id='service_description']")
	WebElement servDescription;
	
	@FindBy(xpath="//li[@id='servicesTab']//table/tbody/tr/td[text()='NewAutoService']//following-sibling::td/a[text()='Edit']")
	WebElement editService_link;
	
	
//================================Initialise web elements created in this class========xpath="//div/dl[@class='tabs organisation-tabs']//dd/a================================
	
		public Manage_Page_OrgAdmin() {
		PageFactory.initElements(driver,this);
		}
		

//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

		public void verify_clickOrgManageTab() {
			orgManage_tab.click();
			String title = verifyManageTab.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Editing the Nhs"));
			softAssert.assertAll();
		}
		
		public void verify_clickManageSubTabs() throws InterruptedException {
			int noOfTabs = manage_subTabs.size();
			System.out.println("Number of subtabs are :" + noOfTabs);
			Assert.assertTrue(noOfTabs==9);
			
			for(int i=1; i<=noOfTabs;i++) {
				driver.findElement(By.xpath("//div/dl[@class='tabs organisation-tabs']//dd["+i+"]/a")).click();
				String str = driver.findElement(By.xpath("//div/dl[@class='tabs organisation-tabs']//dd["+i+"]/a")).getText();
				System.out.println("name of the sub tab is : " + str);
				Thread.sleep(3000);
			//	Assert.assertTrue(subTabPage_verify.isDisplayed());
			}
		}
		
		public void verify_updateBookingRules() throws InterruptedException {
			driver.findElement(By.xpath("//a[text()='Booking Rules']")).click();
			String str1 = amendBookBeforeDate.getAttribute("value");
			String str2 = dayNoticeForCancellation.getAttribute("value");
			String str3 = reminderEventStartDate.getAttribute("value");
			String str4 = bookingCCGcommMonthsAhead.getAttribute("value");
			String str5 = bookingNonCCGcommMonthsAhead.getAttribute("value");
			System.out.println("Before update " + str1);
			System.out.println("Before update " + str2);
			System.out.println("Before update " + str3);
			System.out.println("Before update " + str4);
			System.out.println("Before update " + str5);
			amendBookBeforeDate.clear();
			amendBookBeforeDate.sendKeys("3");
			dayNoticeForCancellation.clear();
			dayNoticeForCancellation.sendKeys("3");
			reminderEventStartDate.clear();
			reminderEventStartDate.sendKeys("4");
			bookingCCGcommMonthsAhead.clear();
			bookingCCGcommMonthsAhead.sendKeys("22");
			bookingNonCCGcommMonthsAhead.clear();
			bookingNonCCGcommMonthsAhead.sendKeys("16");
			driver.findElement(By.xpath("//input[@name='commit' and @value='Save']")).click();
			
			String msg= driver.findElement(By.xpath("//div[@id='flash_success']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("Organisation updated"));
			softAssert.assertAll();
			
			Thread.sleep(3000);
			
			String str6 = amendBookBeforeDate.getAttribute("value");
			String str7 = dayNoticeForCancellation.getAttribute("value");
			String str8 = reminderEventStartDate.getAttribute("value");
			String str9 = bookingCCGcommMonthsAhead.getAttribute("value");
			String str10 = bookingNonCCGcommMonthsAhead.getAttribute("value");
			System.out.println("after update " + str6);
			System.out.println("after update " + str7);
			System.out.println("after update " + str8);
			System.out.println("after update " + str9);
			System.out.println("after update " + str10);
			
			Assert.assertTrue(str1!=str6);
			Assert.assertTrue(str2!=str7);
			Assert.assertTrue(str3!=str8);
			Assert.assertTrue(str4!=str9);
			Assert.assertTrue(str5!=str10);
			
			amendBookBeforeDate.clear();
			amendBookBeforeDate.sendKeys(str1);
			dayNoticeForCancellation.clear();
			dayNoticeForCancellation.sendKeys(str2);
			reminderEventStartDate.clear();
			reminderEventStartDate.sendKeys(str3);
			bookingCCGcommMonthsAhead.clear();
			bookingCCGcommMonthsAhead.sendKeys(str4);
			bookingNonCCGcommMonthsAhead.clear();
			bookingNonCCGcommMonthsAhead.sendKeys(str5);
			driver.findElement(By.xpath("//input[@name='commit' and @value='Save']")).click();
			
			String msg1= driver.findElement(By.xpath("//div[@id='flash_success']")).getText();
			SoftAssert softAssert1 = new SoftAssert();
			softAssert1.assertTrue(msg1.contains("Organisation updated"));
			softAssert1.assertAll();
			
			Thread.sleep(3000);
			
			String str11 = amendBookBeforeDate.getAttribute("value");
			String str12 = dayNoticeForCancellation.getAttribute("value");
			String str13 = reminderEventStartDate.getAttribute("value");
			String str14 = bookingCCGcommMonthsAhead.getAttribute("value");
			String str15 = bookingNonCCGcommMonthsAhead.getAttribute("value");
			System.out.println("after final update " + str11);
			System.out.println("after final update " + str12);
			System.out.println("after final update " + str13);
			System.out.println("after final update " + str14);
			System.out.println("after final update " + str15);
			
			 Assert.assertEquals(str1, str11);
			 Assert.assertEquals(str2, str12);
			 Assert.assertEquals(str3, str13);
			 Assert.assertEquals(str4, str14);
			 Assert.assertEquals(str5, str15);
			
		}
		
		public void verify_addNewSpaceCat() throws InterruptedException {
			driver.findElement(By.xpath("//a[text()='Venue Management']")).click();
			newSpaceCat_btn.click();
			Thread.sleep(2000);
			catName_txt.sendKeys("NewAutoSpaceCatagory");
			catDescription.sendKeys("for testing");
			Thread.sleep(2000);
			blueSave_btn.click();
			String title = driver.findElement(By.xpath("//div[@id='flash_notice']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Category was successfully created"));
			softAssert.assertAll();	
	}
		public void verify_editNewSpaceCat() throws InterruptedException {
			editSpaceCat_link.click();
			catName_txt.clear();
			catName_txt.sendKeys("NewUpdatedAutoSpaceCatagory");
			catDescription.clear();
			catDescription.sendKeys("for updated testing");
			Thread.sleep(2000);
			blueSave_btn.click();
			String title = driver.findElement(By.xpath("//div[@id='flash_notice']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Category was successfully updated"));
			softAssert.assertAll();	
			
		}
		
		public void verify_deleteNewSpaceCat() throws InterruptedException {
			deleteSpaceCat_link.click();
			Thread.sleep(3000);
			
			int noOfSpaceCat = spaceCatRows.size();
			for(int i=1;i<=noOfSpaceCat;i++) {
				String str = driver.findElement(By.xpath("//li[@id='venue_managementTab']//table/tbody/tr["+i+"]/td[1]")).getText();
				System.out.println(str);
				
				Assert.assertNotEquals(str,"NewUpdatedAutoSpaceCatagory");
			}
				System.out.println("Deleted space catagory successfully");			
		}
		
		
		public void verify_addNewCCGRegion() throws InterruptedException {
			driver.findElement(By.xpath("//a[text()='Ccg Regions']")).click();
			newCCGRegion_btn.click();
			Thread.sleep(2000);
			newCCGRegionName_txt.sendKeys("NewAutoCCGRegion");
			newCCGRegionRef_txt.sendKeys("Auto Ref");
			newCCGRegionNotes_txt.sendKeys("Auto notes");
			newCCGRegionDate_txt.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
			newCCGRegionDate_txt.sendKeys(Keys.TAB);
			Thread.sleep(2000);
			Save_btn.click();
			String title = driver.findElement(By.xpath("//div[@id='flash_notice']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Ccg Region successfully created"));
			softAssert.assertAll();	
	}
		public void verify_editNewCCGRegion() throws InterruptedException {
			editCCGRegion_link.click();
			newCCGRegionName_txt.clear();
			newCCGRegionName_txt.sendKeys("NewUpdatedAutoCCGRegion");
			newCCGRegionRef_txt.clear();
			newCCGRegionRef_txt.sendKeys("Updated Auto Ref");
			newCCGRegionNotes_txt.clear();
			newCCGRegionNotes_txt.sendKeys("Updated Auto notes");
			Thread.sleep(2000);
			Save_btn.click();
			String title = driver.findElement(By.xpath("//div[@id='flash_notice']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Ccg Region successfully updated"));
			softAssert.assertAll();	
			
		}
		
		public void verify_deleteNewCCGRegion() throws InterruptedException {
			deleteCCGRegion_link.click();
			Thread.sleep(3000);
			driver.switchTo().alert().dismiss();
			Thread.sleep(2000);
			deleteCCGRegion_link.click();
			driver.switchTo().alert().accept();
			Thread.sleep(2000);
			String title = driver.findElement(By.xpath("//div[@id='flash_notice']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Ccg Region was successfully deleted"));
			softAssert.assertAll();	
			 
			
			int noOfCCGRegions = CCGRegionRows.size();
			for(int i=1;i<=noOfCCGRegions;i++) {
				String str = driver.findElement(By.xpath("//li[@id='ccg-regionsTab']//table/tbody/tr["+i+"]/td[1]")).getText();
				System.out.println(str);
				
				Assert.assertNotEquals(str, "NewUpdatedAutoCCGRegion");
			}
				System.out.println("Deleted CCG Region successfully");			
		}
		
		public void verify_addNewService() throws InterruptedException {
			driver.findElement(By.xpath("//a[text()='Services']")).click();
			newServices_btn.click();
			Thread.sleep(2000);
			newServiceName_txt.sendKeys("NewAutoService");
			servDescription.sendKeys("Auto Description");
			driver.findElement(By.xpath("//span[@class='custom radio']")).click();
			Thread.sleep(2000);
			Save_btn.click();
			String title = driver.findElement(By.xpath("//div[@id='flash_notice']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Service successfully created"));
			softAssert.assertAll();	
	}
		public void verify_editNewService() throws InterruptedException {
			editService_link.click();
			newServiceName_txt.clear();
			newServiceName_txt.sendKeys("NewUpdatedAutoService");
			servDescription.clear();
			servDescription.sendKeys("Updated Auto Description");
			driver.findElement(By.xpath("//span[@class='custom radio']")).click();
			Thread.sleep(2000);
			Save_btn.click();
			String title = driver.findElement(By.xpath("//div[@id='flash_notice']")).getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Service successfully created"));
			softAssert.assertAll();	
			
		}
	
}
