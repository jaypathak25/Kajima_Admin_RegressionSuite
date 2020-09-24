package kajima.venueadmin.pom_pages;

import static org.testng.Assert.assertTrue;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import com.github.javafaker.Faker;

import kajima.venueadmin.base.TestBase;

public class Enquiry_Page extends TestBase {
	
	public String name1;
	public String surname1;
	public String webname;
	
	
	Faker faker = new Faker();
	Login_Page login_page = new Login_Page();
	Calender_Page calender_page = new Calender_Page();
	
	
	
	
	@FindBy(xpath="//a[contains(@class,'main') and contains(@href,'enquir')]")
	WebElement enquiry_Tab;
	
	@FindBy(xpath="//div[@id='content']//div/h3[contains(text(),'Enquir')]")
	WebElement enquiryTab_Title;
	
	@FindBy(xpath="//div[@id='content']//label/input[@type='text']")
	WebElement enquirySearch_txtBox;
	
	@FindBy(xpath="//select[@name='enquiries_table_length']")
	WebElement noOfEnteries_dd;
	
	@FindBy(xpath="//table[@id='enquiries_table']/tbody/tr")
	List<WebElement> enquiryRows;
	
	@FindBy(xpath="//table[@id='enquiries_table']/tbody/tr/td[text()='James Taylor']")
	WebElement enquiry_Name;
	
	@FindBy(xpath="//table[@id='enquiries_table']/tbody/tr/td[text()='Jin Park']/following-sibling::td[5]")
	WebElement enquiry_Status;
	
	@FindBy(xpath="//a[text()='New Enquiry']")
	WebElement newEnquiry_Btn;
	
	@FindBy(xpath="//a[text()='Show Closed Enquiries']")
	WebElement showClosedEnquiry_Btn;
	
	@FindBy(xpath="//a[text()='Show Open Enquiries']")
	WebElement showOpenEnquiry_Btn;
	
	@FindBy(xpath="//table[@id='enquiries_table']/tbody/tr/td[text()='Jin Park']/following-sibling::td/a[text()='Edit']")
	WebElement Edit_Btn;
	
	@FindBy(xpath="//select[@name='enquiry[client_id]']")
	WebElement selectClient_dd;
	
	@FindBy(id="enquiry_first_name")
	WebElement newEnquirFirstName_Txt;
	
	@FindBy(id="enquiry_last_name")
	WebElement newEnquirLastName_Txt;
	
	@FindBy(id="enquiry_email")
	WebElement newEnquiryEmail_Txt;
	
	@FindBy(xpath="//select[@id='space0_id']")
	WebElement space_dd;
	
	@FindBy(id="availability_check_enquiry")
	WebElement checkAvail_btn;
	
	@FindBy(id="availability_check_booking")
	WebElement checkAvailBooking_btn;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement save_btn;
	
	@FindBy(xpath="//a[@class='submit_button buttonBourbon' and text()='Save']")
	WebElement saveReminder_btn;
	
	@FindBy(xpath="//a[text()='Cannot Accomodate']")
	WebElement cannotAccomodate_Btn;
	
	@FindBy(xpath="//a[text()='Close Enquiry']")
	WebElement closeEnquiry_btn;
	
	@FindBy(xpath="//a[text()='Reopen']")
	WebElement reopen_Btn;
	
	@FindBy(xpath="//a[text()='Create a Reminder']")
	WebElement CreateReminder_btn;
	
	@FindBy(xpath="//a[text()='Cancel']")
	WebElement cancel_btn;
	
	@FindBy(id="convert-booking")
	WebElement convertToBooking_btn;
	
	@FindBy(id="enquiry_notes")
	WebElement enquiryNote_Txt;
	
	@FindBy(id="enquiry_message")
	WebElement enquiryWebSiteMsg_Txt;
	
	@FindBy(id="enquiry_activity_date")
	WebElement enquiryWebSitedate_Txt;
	
	@FindBy(xpath="//Select[@id='enquiry_start_date_4i']")
	WebElement enquiryWebSiteStartTime_dd;
	
	@FindBy(xpath="//Select[@id='enquiry_end_date_4i']")
	WebElement enquiryWebSiteEndTime_dd;
	
	@FindBy(id="booking_agree")
	WebElement enquiryWebSiteAgree_ChkBox;
	
	@FindBy(xpath="//input[@id='enquiry_marketing_option_ids_' and @value='1']")
	WebElement enquiryWebSitemarketing_ChckBox;
	
	@FindBy(xpath="//input[@type='submit']")
	WebElement enquiryWebSiteSubmit_Btn;
	
	
	
	@FindBy(xpath="//div[@id='flash_notice' and @class='alert-box success hide-on-print']")
	WebElement success_Msg;
	
	@FindBy(id="enquiry_tel_land")
	WebElement telephone_Txt;
	
	@FindBy(id="enquiry_tel_mobile")
	WebElement mobile_Txt;
	
	@FindBy(xpath="//a[@id='enquiry_details_toogle_button']")
	WebElement enquiryToggle_Link;
	
	@FindBy(id="enquiry_start_time")
	WebElement enquiryStartTime_Txt;
	
	@FindBy(id="enquiry_end_time")
	WebElement enquiryEndTime_Txt;
	
	@FindBy(xpath="//label[text()='Referrer']/parent::div/div/a")
	WebElement enquiryNotes;
	
	@FindBy(xpath="//label[text()='Referrer']/parent::div/div/ul/li[contains(.,'Google')]")
	WebElement enquiryNotes_Opn;
	
	@FindBy(xpath="//select[contains(@name,'enquiry[enquiry_spaces_attributes]')]")
	WebElement space1_dd;
	
	@FindBy(xpath="//select[@id='space0_vat_rate_select']/parent::div/div/a")
	WebElement VAT_dd;
	
	@FindBy(xpath="//select[@id='space0_vat_rate_select']/parent::div/div/ul/li[contains(.,'5% Reduced Rate')]")
	WebElement VAT_Opn;
	
	@FindBy(xpath="//select[@id='space0_vat_rate_select']/parent::div/div/ul/li[contains(.,'20% Standard Rate')]")
	WebElement VAT_Opn2;
	
	@FindBy(xpath="//select[@id='space0_rate_select']/parent::div/div/a")
	WebElement bookingRate_dd;
	
	@FindBy(xpath="//select[@id='space0_rate_select']/parent::div/div/ul/li[contains(.,'Concession')]")
	WebElement bookingRate_Opn;
	
	@FindBy(xpath="//select[@id='space0_rate_select']/parent::div/div/ul/li[contains(.,'Fixed cost')]")
	WebElement bookingRate_fixedOpn;
	
	@FindBy(xpath="//select[@id='space0_rate_select']/parent::div/div/ul/li[contains(.,'Standard')]")
	WebElement bookingRate_standardOpn;
	
	@FindBy(xpath="//select[@id='recurrence_option']/parent::div/div/a")
	WebElement recurring_dd;
	
	@FindBy(xpath="//select[@id='recurrence_option']/parent::div/div/ul/li[contains(.,'Daily')]")
	WebElement recurring_Opn;
	
	@FindBy(xpath="//select[@id='reccurence_daily_recurrence_frequency']/parent::div/div/a")
	WebElement dailyFrequency_dd;
	
	@FindBy(xpath="//select[@id='reccurence_daily_recurrence_frequency']/parent::div/div/ul/li[contains(.,'2')]")
	WebElement dailyFrequency_Opn;
	
	@FindBy(xpath="//select[@id='recurrence_daily_recurrence_instances']/parent::div/div/a")
	WebElement dailyFrequencyInstances_dd;
	
	@FindBy(xpath="//select[@id='recurrence_daily_recurrence_instances']/parent::div/div/ul/li[contains(.,'2')]")
	WebElement dailyFrequencyInstances_Opn;
	
	@FindBy(xpath="//a[@class='edit_item']")
	WebElement editPencil_Icon;
	
	@FindBy(xpath="//a[@class='save_item']")
	WebElement saveEditGreenRight_Icon;
	
	@FindBy(xpath="//select[@id='enquiry_state_event']/parent::div/div/a")
	WebElement changeEnquiryState_dd;
	
	@FindBy(xpath="//select[@id='enquiry_state_event']/parent::div/div/ul/li[contains(.,'opened')]")
	WebElement changeEnquiryState_Opened;
	
	@FindBy(xpath="//select[@id='enquiry_state_event']/parent::div/div/ul/li[contains(.,'quote sent')]")
	WebElement changeEnquiryState_quoteSent;
	
	@FindBy(xpath="//select[@id='enquiry_state_event']/parent::div/div/ul/li[contains(.,'viewing booked')]")
	WebElement changeEnquiryState_viewingBooked;
	
	@FindBy(xpath="//select[@id='enquiry_state_event']/parent::div/div/ul/li[contains(.,'follow up required')]")
	WebElement changeEnquiryState_followUpReq;
	
	@FindBy(xpath="//select[@id='enquiry_state_event']/parent::div/div/ul/li[contains(.,'cannot accommodate')]")
	WebElement changeEnquiryState_cannotAcco;
	
	@FindBy(id="booking_purchase_order")
	WebElement purchaseOrder_Txt;
	
	@FindBy(xpath="//Select[@id='booking_booking_type_id']")
	WebElement catagory_dd;
	
	@FindBy(xpath="//select[@id='booking_checklist_id']")
	WebElement checklist_dd;
	
	@FindBy(xpath="//a[text()='Save Booking']")
	WebElement saveBooking_btn;
	
	@FindBy(id="reminder_remind_at")
	WebElement reminderAt_Txt;
	
	@FindBy(id="reminder_notes")
	WebElement reminderNotes_Txt;
	
	@FindBy(xpath="//table[@id='enquiries_table']/tbody/tr/td[7]")
	WebElement status_Col;
	
	@FindBy(xpath="//div[@class='alert-box hide-on-print']")
	WebElement reminderMsg;
	
	@FindBy(xpath="//a[text()='Show Closed Enquiries']")
	WebElement showClosedEnq_Btn;
	
	@FindBy(xpath="//a[text()='Edit']")
	WebElement edit_Link;
	
	@FindBy(xpath="//tbody/tr[contains(@class,'green')]/td/input[@type='checkbox']")
	List<WebElement> green;
	
	@FindBy(xpath="//tbody/tr[contains(@class,'red')]/td/input[@type='checkbox']")
	List<WebElement> red;
	
	@FindBy(id="enquiry_organisation_name")
	WebElement enqOrganisation_Txt;
	
	
	
//================================Initialise web elements created in this class========================================
	
	public Enquiry_Page() {
	PageFactory.initElements(driver,this);
	}
	
//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

	
	public void verify_clickEnquiryTab() {
		enquiry_Tab.click();
		String title = enquiryTab_Title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Current Enquiries"));
		softAssert.assertAll();
	}
	
	public void searchEnquiry() throws InterruptedException {
		enquirySearch_txtBox.sendKeys("auto");
		int noOfenquiries = enquiryRows.size();
		System.out.println("Number of enquiries after search on current enquiries screen are  " + noOfenquiries);
		Thread.sleep(1000);	
		showClosedEnquiry_Btn.click();
		int noOfenquiries2 = enquiryRows.size();
		System.out.println("Number of enquiries after search on closed enquiries screen are  " + noOfenquiries2);
		Thread.sleep(1000);		
	}
	
	
	public void verify_noOfEnquiries() throws InterruptedException {
		enquiry_Tab.click();
		Thread.sleep(2000);
		Select slct1 = new Select(noOfEnteries_dd);
		List<WebElement> opn = slct1.getOptions();
		for(int i=0;i<=(opn.size()-1);i++) {
		slct1.selectByIndex(i);
		Thread.sleep(1000);
		int noOfenquiries = enquiryRows.size();
		System.out.println("Number of enquiries after selecting option " + i +" from the dropdown are " + noOfenquiries);
		Thread.sleep(1000);	
		}
		showClosedEnquiry_Btn.click();
		Thread.sleep(2000);
		Select slct2 = new Select(noOfEnteries_dd);
		List<WebElement> opn2 = slct2.getOptions();
		for(int j=0;j<=(opn2.size()-1);j++) {

		slct2.selectByIndex(j);
		Thread.sleep(1000);
		
		int noOfenquiries2 = enquiryRows.size();
		System.out.println("Number of enquiries after selecting option " + j +" from the dropdown on closed enquiries screen are " + noOfenquiries2);
		Thread.sleep(1000);	
		}
		
		showOpenEnquiry_Btn.click();
		String title = enquiryTab_Title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Current Enquiries"));
		softAssert.assertAll();
	}
	
		
		public void verify_createNewEnquiry() {
			newEnquiry_Btn.click();
			Select slct =  new Select(selectClient_dd);
			try {
			slct.selectByVisibleText("auto Auto (auto)");
			}catch(Exception e){
				slct.selectByIndex(1);
			}
			Select slct1 =  new Select(space_dd);
			try {
				slct1.selectByIndex(3);
			}catch(Exception e) {
				slct1.selectByIndex(2);
			}
			
			name1= faker.name().firstName();
			surname1 =  faker.name().lastName();
			newEnquirFirstName_Txt.clear();
			newEnquirFirstName_Txt.sendKeys(name1);
			newEnquirLastName_Txt.clear();
			newEnquirLastName_Txt.sendKeys(surname1);
			enqOrganisation_Txt.sendKeys(name1 + " Org");
			
			enquiryStartTime_Txt.clear();
			enquiryStartTime_Txt.sendKeys("12:00");
	//		enquiryStartTime_Txt.sendKeys(LocalTime.now().format(DateTimeFormatter.ofPattern("HH:MM")));
			
			enquiryEndTime_Txt.clear();
			enquiryEndTime_Txt.sendKeys("13:00");
			
			checkAvail_btn.click();
			enquiryNote_Txt.clear();
			enquiryNote_Txt.sendKeys("NewAutomatedEnquiry");
			
	//		WebElement element1=driver.findElement(By.xpath("//tbody/tr[contains(@class,'green')]/td/input[@type='checkbox']"));
	//		if(element1.isDisplayed()) {
	//			System.out.println("This space is available at the selected Date/Time");
	//			save_btn.click();
				
//				String msg = success_Msg.getText();
//				Assert.assertTrue(msg.contains("Enquiry was successfully created."));
//				enquiry_Tab.click();
//				enquirySearch_txtBox.sendKeys(name1);
//				int noOfenquiries = enquiryRows.size();
//				if(noOfenquiries!=0) {
//					Assert.assertTrue(true);
//				}		
//		}else {
			//	System.out.println("This space is NOT available at the selected Date/Time");
				save_btn.click();
				String msg = success_Msg.getText();
				Assert.assertTrue(msg.contains("Enquiry was successfully created."));
				enquiry_Tab.click();
				enquirySearch_txtBox.sendKeys(name1);
				int noOfenquiries = enquiryRows.size();
				if(noOfenquiries!=0) {
					Assert.assertTrue(true);
	//			}		
			}	
		}
		
		public void verify_createNewEnquiryforDev916() throws InterruptedException {
			newEnquiry_Btn.click();
			Select slct =  new Select(selectClient_dd);
			try {
			slct.selectByVisibleText("auto Auto (auto)");
			}catch(Exception e){
				slct.selectByIndex(1);
			}

			
			name1= faker.name().firstName();
			surname1 =  faker.name().lastName();
			newEnquirFirstName_Txt.clear();
			newEnquirFirstName_Txt.sendKeys(name1);
			newEnquirLastName_Txt.clear();
			newEnquirLastName_Txt.sendKeys(surname1);
			enqOrganisation_Txt.sendKeys(name1 + " Org");
			
			Select slct1 =  new Select(space_dd);
			try {
				slct1.selectByVisibleText("AWP A (6-7 aside/one third)");
			}catch(Exception e) {
				slct1.selectByIndex(3);
			}
			
			bookingRate_dd.click();
			Thread.sleep(2000);
			bookingRate_fixedOpn.click();
			
			VAT_dd.click();
			Thread.sleep(2000);
			VAT_Opn.click();
			
			driver.findElement(By.id("btnAddEnquirySpace")).click();
			Select slct2 =  new Select(space_dd);
			try {
				slct2.selectByIndex(6);
			}catch(Exception e) {
				slct2.selectByIndex(7);
			}
			
			bookingRate_dd.click();
			Thread.sleep(2000);
			bookingRate_standardOpn.click();
			
			VAT_dd.click();
			Thread.sleep(2000);
			VAT_Opn2.click();
			

			
			enquiryStartTime_Txt.clear();
			enquiryStartTime_Txt.sendKeys("15:00");
	//		enquiryStartTime_Txt.sendKeys(LocalTime.now().format(DateTimeFormatter.ofPattern("HH:MM")));
			
			enquiryEndTime_Txt.clear();
			enquiryEndTime_Txt.sendKeys("16:00");
			
			checkAvail_btn.click();
			enquiryNote_Txt.clear();
			enquiryNote_Txt.sendKeys("NewAutomatedEnquiry");
			
			if(red.size()==0) {
				System.out.println("This space is available at the selected Date/Time");
				save_btn.click();
				
     			String msg = success_Msg.getText();
				Assert.assertTrue(msg.contains("Enquiry was successfully created."));
				driver.findElement(By.id("enquiry_details_toogle_button")).click();
				
				List<WebElement> listOfBookingsRate = driver.findElements(By.xpath("//label[contains(.,'Booking rate:')]//parent::div//div/a[@class='current']"));
				int noOfrows  = listOfBookingsRate.size();
				System.out.println("Number of options " + noOfrows );
				
				for (int i=0;i<noOfrows;i++) {
					
					String ddopn = driver.findElement(By.xpath("//select[@class='space-rate-select' and @data-id='"+i+"']//following-sibling::div/a[@class='current']")).getText();
					System.out.println("First option "+ ddopn);
				}
				
			//	enquiry_Tab.click();
			//	enquirySearch_txtBox.sendKeys(name1);
			//	int noOfenquiries = enquiryRows.size();
			//	if(noOfenquiries!=0) {
			//		Assert.assertTrue(true);
				}		
		else {
				System.out.println("One of the space is NOT available at the selected Date/Time");	
		}
			

}
	
		public void verify_EditNewEnquiry() throws InterruptedException {
			System.out.println("The value of name : " + name1);
			edit_Link.click();
			String email = name1+"_updated"+"@autotest.com";
			
			newEnquiryEmail_Txt.clear();
			newEnquiryEmail_Txt.sendKeys(email);
			telephone_Txt.clear();
			telephone_Txt.sendKeys("01908765432");
			mobile_Txt.clear();
			mobile_Txt.sendKeys("0777766661");
			
			enquiryToggle_Link.click();
			Select slctSpace = new Select(space1_dd);
			slctSpace.selectByIndex(3);
			
			VAT_dd.click();
			Thread.sleep(2000);
			VAT_Opn.click();
			
			bookingRate_dd.click();
			Thread.sleep(2000);
			bookingRate_Opn.click();
			
	//		var time = new Date();
	//		console.log(time.getHours() + ":" + time.getMinutes();
			
			enquiryStartTime_Txt.clear();
			enquiryStartTime_Txt.sendKeys("14:00");
	//		enquiryStartTime_Txt.sendKeys(LocalTime.now().format(DateTimeFormatter.ofPattern("HH:MM")));
			
			enquiryEndTime_Txt.clear();
			enquiryEndTime_Txt.sendKeys("15:00");
		//	enquiryEndTime_Txt.sendKeys(LocalTime.now().format(DateTimeFormatter.ofPattern("HH:MM")));
			
			recurring_dd.click();
			Thread.sleep(2000);
			
			recurring_Opn.click();
			
			dailyFrequency_dd.click();
			Thread.sleep(2000);
			dailyFrequency_Opn.click();
			
			dailyFrequencyInstances_dd.click();
			Thread.sleep(2000);
			dailyFrequencyInstances_Opn.click();
			
			checkAvail_btn.click();
			
			Thread.sleep(2000);
			editPencil_Icon.click();
			Thread.sleep(2000);
			saveEditGreenRight_Icon.click();
			
			enquiryNotes.click();
			enquiryNotes_Opn.click();
			
			enquiryNote_Txt.clear();
			enquiryNote_Txt.sendKeys("EditAutomatedEnquiry");
			
			save_btn.click();
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry was successfully updated."));	
		}
	
		public void verify_ChangeStatusToOpen() throws InterruptedException{
			edit_Link.click();
			Thread.sleep(2000);
			changeEnquiryState_dd.click();
			changeEnquiryState_Opened.click();
			save_btn.click();
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry was successfully updated."));	
			enquiry_Tab.click();
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Opened"));
	}
  }
		
		public void verify_ChangeStatusToQuoteSent() throws InterruptedException{
			edit_Link.click();
			Thread.sleep(2000);
			changeEnquiryState_dd.click();
			changeEnquiryState_quoteSent.click();
			save_btn.click();
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry was successfully updated."));	
			enquiry_Tab.click();
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Quote sent"));
	}
  }
		
		public void verify_ChangeStatusToFollowUp() throws InterruptedException{
			edit_Link.click();
			Thread.sleep(2000);
			changeEnquiryState_dd.click();
			changeEnquiryState_followUpReq.click();
			reminderAt_Txt.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
	
			reminderNotes_Txt.sendKeys("Automation Reminder");
			saveReminder_btn.click();
			String remindMsg = reminderMsg.getText();
			Assert.assertTrue(remindMsg.contains("You have a reminder set for this enquiry for"));
			Thread.sleep(2000);
			
			save_btn.click();
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry was successfully updated."));	
			enquiry_Tab.click();
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Follow up required"));
	}
  }
		
		public void verify_ChangeStatusCannotAccomodate() throws InterruptedException{
			edit_Link.click();
			Thread.sleep(2000);
			changeEnquiryState_dd.click();
			changeEnquiryState_cannotAcco.click();
			
			save_btn.click();
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry was successfully updated."));	
			enquiry_Tab.click();
			showClosedEnq_Btn.click();
			
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Cannot accommodate"));
	}
  }
		
		public void verify_ChangeStatusviewingBooked() throws InterruptedException{
			edit_Link.click();
			Thread.sleep(2000);
			changeEnquiryState_dd.click();
			changeEnquiryState_viewingBooked.click();
			
			save_btn.click();
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry was successfully updated."));	
			enquiry_Tab.click();
			
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Viewing booked"));
	}
  }
		
		public void verify_cancelEnquiryButton() {
			edit_Link.click();
			cancel_btn.click();
			String title = enquiryTab_Title.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Current Enquiries"));
			softAssert.assertAll();
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
				String status = status_Col.getText();
				Assert.assertTrue(status.contains("New"));
		}
			
		}
		
		public void verify_CreateReminderButton() throws InterruptedException {
			edit_Link.click();
			CreateReminder_btn.click();
			reminderAt_Txt.sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
			reminderNotes_Txt.sendKeys("Automation Reminder");
			saveReminder_btn.click();
			String remindMsg = reminderMsg.getText();
			Assert.assertTrue(remindMsg.contains("You have a reminder set for this enquiry for"));
			Thread.sleep(2000);
			
			save_btn.click();
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry was successfully updated."));	
			enquiry_Tab.click();
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Follow up required"));
			
		}
	}
		
		public void verify_CannotAccomodateButton() throws InterruptedException {
			edit_Link.click();
			Thread.sleep(2000);
			cannotAccomodate_Btn.click();
			
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry successfully set to 'cannot accommodate'!"));	
			enquiry_Tab.click();
			showClosedEnq_Btn.click();
			
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Cannot accommodate"));
			}
		}
		
		public void verify_ReopenButton() throws InterruptedException {
			edit_Link.click();
			Thread.sleep(2000);
			reopen_Btn.click();
			
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry was successfully updated."));	
			enquiry_Tab.click();
			
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Opened"));
			}
		}
		
		public void verify_closeEnquiryButton() throws InterruptedException {
			edit_Link.click();
			Thread.sleep(2000);
			closeEnquiry_btn.click();
			
			Thread.sleep(2000);
			String msg = success_Msg.getText();
			Assert.assertTrue(msg.contains("Enquiry successfully closed."));	
			enquiry_Tab.click();
			showClosedEnq_Btn.click();
			
			enquirySearch_txtBox.sendKeys(name1);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("Closed"));
			}
		}
		
		public void verify_convertToBooking() throws InterruptedException {
			newEnquiry_Btn.click();
			Select slct =  new Select(selectClient_dd);
			try {
			slct.selectByVisibleText("auto Auto (auto)");
			}catch(Exception e){
				slct.selectByIndex(1);
			}
			Select slct1 =  new Select(space_dd);
			try {
				slct1.selectByIndex(7);
			}catch(Exception e) {
				slct1.selectByIndex(2);
			}
			
			
			name1= faker.name().firstName();
			surname1 =  faker.name().lastName();
			
			newEnquirFirstName_Txt.clear();
			newEnquirFirstName_Txt.sendKeys(name1);
			newEnquirLastName_Txt.clear();
			newEnquirLastName_Txt.sendKeys(surname1);
			
			enqOrganisation_Txt.sendKeys(name1 + " Org");
			
			checkAvail_btn.click();
			
			try {
			if(green.size()!=0) {
				System.out.println("This space is available at the selected Date/Time");
				
				enquiryNotes.click();
				enquiryNotes_Opn.click();
				
				enquiryNote_Txt.clear();
				enquiryNote_Txt.sendKeys("New Enquiry for booking");
				
				save_btn.click();
				
				String msg = success_Msg.getText();
				Assert.assertTrue(msg.contains("Enquiry was successfully created."));
				convertToBooking_btn.click();
				Thread.sleep(2000);
				purchaseOrder_Txt.sendKeys("AUTPO");
				Select cat =  new Select(catagory_dd);
				cat.selectByVisibleText("New Bookings");
				Select checkList =  new Select(checklist_dd);
				checkList.selectByVisibleText("Regular Bookings Checklist:");
				checkAvailBooking_btn.click();
				saveBooking_btn.click();
				
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
				Thread.sleep(5000);
				try {
					driver.switchTo().alert().accept();
					driver.findElement(By.xpath("//a[@id='btn-save-booking-with-provisional' and text()='Yes']")).click();
					save_btn.click();
				}catch(Exception e) {
				}
				try {
				driver.findElement(By.xpath("//div[@class='booking status-provisional payment-unbilled']//h2[contains(.,'auto')]")).click();
				}catch(Exception e){
					driver.findElement(By.xpath("//div[@class='booking status-provisional payment-free']//h2[contains(.,'auto')]")).click();
				}
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Confirm']")).click();
				Thread.sleep(5000);
				driver.findElement(By.xpath("//a[@class='green buttonBourbon' and text()='Yes']")).click();
				String msg1 = success_Msg.getText();
				SoftAssert softAssert = new SoftAssert();
				softAssert.assertTrue(msg1.contains("Confirmation email sent to client."));
				softAssert.assertAll();
				try {
				calender_page.unbilledBookingOnCalScrn.click();
				}catch(Exception e) {
					driver.findElement(By.xpath("//div[@class='booking status-confirmed payment-free']")).click();
				}
				calender_page.booking_page.redCancel_btn.click();
				calender_page.booking_page.canEmail_chkBox.click();
				calender_page.booking_page.canReason_txt.sendKeys("Cancel billed booking from calender");
				Thread.sleep(2000);
				calender_page.booking_page.canBooking_btn.click();
				
				}
			}catch(Exception e) {
				System.out.println("venue is not available on this date/time");
			}		
		}	
		
		public void verify_EnqFromvanOrcAL_RoomPage() throws InterruptedException, AWTException {
			
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
				driver.get(prop.getProperty("BAU_VanORCal_websiteURL"));
				Thread.sleep(2000);
				driver.findElement(By.xpath("//section[@id='home-content']//div[@class='facility-panels']//a")).click();
				driver.findElement(By.xpath("//a[text()='Full Details & Booking']")).click();
				driver.findElement(By.xpath("//a[text()='ENQUIRE NOW']")).click();
				Thread.sleep(2000);
				
				String webname = faker.name().firstName();
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_first_name']")).sendKeys(webname);
			
				String websurname = faker.name().lastName();
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_last_name']")).sendKeys(websurname);
			
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_email']")).sendKeys(webname+"@webtest.com");
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_organisation_name']")).sendKeys(webname+" Org");
			
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_tel_land']")).sendKeys("0190876543");
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_tel_mobile']")).sendKeys("07459123456");
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/textarea[@id='enquiry_message']")).sendKeys("Msg from websiteRoomPage");	
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_activity_date']")).sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_activity_date']")).sendKeys(Keys.TAB);
				Select startTime =  new Select(driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/select[@id='enquiry_start_date_4i']")));
				startTime.selectByVisibleText("14");
			
				Select EndTime =  new Select(driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/select[@id='enquiry_end_date_4i']")));
				EndTime.selectByVisibleText("15");
				
				Thread.sleep(1000);
				driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='booking_agree']")).click();
				Thread.sleep(1000);
				
				try {
			    driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_marketing_option_ids_' and @value = '1']")).click();
				}catch(Exception e) {}
			    Thread.sleep(1000);
			    driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@type='submit']")).click();
			    Thread.sleep(1000);
				Assert.assertTrue(driver.findElement(By.xpath("//div[@id='thankyou']")).isDisplayed());	
				Thread.sleep(1000);
				driver.close();
				Thread.sleep(1000);
				driver.switchTo().window(parent);
				Thread.sleep(1000);
				enquiry_Tab.click();
				Thread.sleep(2000);
				enquirySearch_txtBox.sendKeys(webname);
				Thread.sleep(2000);
				int noOfenquiries = enquiryRows.size();
				if(noOfenquiries!=0) {
					Assert.assertTrue(true);
					
				String status = status_Col.getText();
				Assert.assertTrue(status.contains("New"));
				}
		}
		
		
		public void verify_EnqFromvanOrcAL_ContactPage() throws InterruptedException, AWTException {
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
			driver.get(prop.getProperty("BAU_VanORCal_websiteURL"));
			Thread.sleep(2000);
			driver.findElement(By.xpath("//a[@title='Contact']")).click();
			Thread.sleep(2000);
			
			String webname = faker.name().firstName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_first_name']")).sendKeys(webname);
		
			String websurname = faker.name().lastName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_last_name']")).sendKeys(websurname);
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_email']")).sendKeys(webname+"@webtest.com");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_organisation_name']")).sendKeys(webname+" Org");
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_land']")).sendKeys("0190876543");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_mobile']")).sendKeys("07459123456");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/textarea[@id='enquiry_message']")).sendKeys("Msg from websiteRoomPage");	
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='booking_agree']")).click();
			Thread.sleep(1000);
			try {
		    driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_marketing_option_ids_' and @value = '1']")).click();
			}catch(Exception e) {}
		    Thread.sleep(1000);
		    driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@type='submit']")).click();
		    Thread.sleep(1000);
			Assert.assertTrue(driver.findElement(By.xpath("//div[@id='thankyou']")).isDisplayed());	
			Thread.sleep(1000);
			driver.close();
			Thread.sleep(1000);
			driver.switchTo().window(parent);
			Thread.sleep(1000);
			enquiry_Tab.click();
			Thread.sleep(2000);
			enquirySearch_txtBox.sendKeys(webname);
			Thread.sleep(2000);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("New"));
			}
		}
		
		public void verify_Classic_OrangeHomePage() throws InterruptedException, AWTException {
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
			driver.get(prop.getProperty("BAU_Classic_websiteURL"));
			Thread.sleep(2000);
			driver.findElement(By.xpath("//a[@data-reveal-id='general_enquiry_form']")).click();
			Thread.sleep(2000);
			
			String webname = faker.name().firstName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_first_name']")).sendKeys(webname);
		
			String websurname = faker.name().lastName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_last_name']")).sendKeys(websurname);
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_email']")).sendKeys(webname+"@webtest.com");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_organisation_name']")).sendKeys(webname+" Org");
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_land']")).sendKeys("0190876543");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_mobile']")).sendKeys("07459123456");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/textarea[@id='enquiry_message']")).sendKeys("Msg from websiteRoomPage");	
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='booking_agree']")).click();
			Thread.sleep(1000);
		    driver.findElement(By.xpath("//input[@type='submit']")).click();
		    Thread.sleep(1000);
			Assert.assertTrue(driver.findElement(By.xpath("//div[@id='thankyou']")).isDisplayed());	
			Thread.sleep(1000);
			driver.close();
			Thread.sleep(1000);
			driver.switchTo().window(parent);
			Thread.sleep(1000);
			enquiry_Tab.click();
			enquirySearch_txtBox.sendKeys(webname);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("New"));
			}	
		}
		
		public void verify_Classic_OrangeCatPage() throws InterruptedException, AWTException {
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
			driver.get(prop.getProperty("BAU_Classic_websiteURL"));
			Thread.sleep(2000);
			driver.findElement(By.xpath("//ul[@id='categories']/li/a[@href='sports-facilities']")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//a[@data-reveal-id='general_enquiry_form']")).click();
			Thread.sleep(2000);
			
			String webname = faker.name().firstName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_first_name']")).sendKeys(webname);
		
			String websurname = faker.name().lastName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_last_name']")).sendKeys(websurname);
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_email']")).sendKeys(webname+"@webtest.com");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_organisation_name']")).sendKeys(webname+" Org");
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_land']")).sendKeys("0190876543");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_mobile']")).sendKeys("07459123456");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/textarea[@id='enquiry_message']")).sendKeys("Msg from websiteRoomPage");	
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='booking_agree']")).click();
			Thread.sleep(1000);
		    driver.findElement(By.xpath("//input[@type='submit']")).click();
		    Thread.sleep(1000);
			Assert.assertTrue(driver.findElement(By.xpath("//div[@id='thankyou']")).isDisplayed());	
			Thread.sleep(1000);
			driver.close();
			Thread.sleep(1000);
			driver.switchTo().window(parent);
			Thread.sleep(1000);
			enquiry_Tab.click();
			enquirySearch_txtBox.sendKeys(webname);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("New"));
			}
		}
		
		public void verify_Classic_OrangeRoomPage() throws InterruptedException, AWTException {
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
			driver.get(prop.getProperty("BAU_Classic_websiteURL"));
			Thread.sleep(2000);
			driver.findElement(By.xpath("//ul[@id='categories']/li/a[@href='sports-facilities']")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//div[@id='main']//a[@class='thumb-block']/div/h2")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//a[@data-reveal-id='general_enquiry_form']")).click();
			Thread.sleep(2000);
			
			String webname = faker.name().firstName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_first_name']")).sendKeys(webname);
		
			String websurname = faker.name().lastName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_last_name']")).sendKeys(websurname);
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_email']")).sendKeys(webname+"@webtest.com");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_organisation_name']")).sendKeys(webname+" Org");
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_land']")).sendKeys("0190876543");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_mobile']")).sendKeys("07459123456");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/textarea[@id='enquiry_message']")).sendKeys("Msg from websiteRoomPage");	
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='booking_agree']")).click();
			Thread.sleep(1000);
		    driver.findElement(By.xpath("//input[@type='submit']")).click();
		    Thread.sleep(1000);
			Assert.assertTrue(driver.findElement(By.xpath("//div[@id='thankyou']")).isDisplayed());	
			Thread.sleep(1000);
			driver.close();
			Thread.sleep(1000);
			driver.switchTo().window(parent);
			Thread.sleep(1000);
			enquiry_Tab.click();
			enquirySearch_txtBox.sendKeys(webname);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("New"));
			}
		}
		
		public void verify_Classic_blueRoomPage() throws InterruptedException, AWTException {
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
			driver.get(prop.getProperty("BAU_Classic_websiteURL"));
			Thread.sleep(2000);
			driver.findElement(By.xpath("//ul[@id='categories']/li/a[@href='sports-facilities']")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//div[@id='main']//a[@class='thumb-block']/div/h2")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//a[@class='cta-button' and @data-reveal-id='enquiry_form']")).click();
			Thread.sleep(2000);
			
			String webname = faker.name().firstName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_first_name']")).sendKeys(webname);
		
			String websurname = faker.name().lastName();
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_last_name']")).sendKeys(websurname);
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_email']")).sendKeys(webname+"@webtest.com");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_organisation_name']")).sendKeys(webname+" Org");
		
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_land']")).sendKeys("0190876543");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='enquiry_tel_mobile']")).sendKeys("07459123456");
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/textarea[@id='enquiry_message']")).sendKeys("Msg from websiteRoomPage");	
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_activity_date']")).sendKeys(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/input[@id='enquiry_activity_date']")).sendKeys(Keys.TAB);
			Select startTime =  new Select(driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/select[@id='enquiry_start_date_4i']")));
			startTime.selectByVisibleText("14");
		
			Select EndTime =  new Select(driver.findElement(By.xpath("//form[@id='new_enquiry']/div/div/select[@id='enquiry_end_date_4i']")));
			EndTime.selectByVisibleText("15");
			
			Thread.sleep(1000);
			driver.findElement(By.xpath("//form[@id='new_enquiry']/div/input[@id='booking_agree']")).click();
			Thread.sleep(1000);
		    driver.findElement(By.xpath("//input[@type='submit']")).click();
		    Thread.sleep(1000);
			Assert.assertTrue(driver.findElement(By.xpath("//div[@id='thankyou']")).isDisplayed());	
			Thread.sleep(1000);
			driver.close();
			Thread.sleep(1000);
			driver.switchTo().window(parent);
			Thread.sleep(1000);
			enquiry_Tab.click();
			enquirySearch_txtBox.sendKeys(webname);
			int noOfenquiries = enquiryRows.size();
			if(noOfenquiries!=0) {
				Assert.assertTrue(true);
				
			String status = status_Col.getText();
			Assert.assertTrue(status.contains("New"));
			}
		}
	}
