package kajima.venueadmin.pom_pages;

import static org.testng.Assert.assertTrue;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Bookings_Page extends TestBase {
	
	@FindBy(xpath = "//a[contains(@class,'main') and contains(text(),'Bookings')]")
	WebElement bookings_tab;
	
	@FindBy(xpath="//h3[contains(.,'Bookings')]")
	WebElement bookingTab_title;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement save_Btn;
	
	@FindBy(xpath="//select[@id='rows_per_page']")
	WebElement noOfEnteries_dd;
	
	@FindBy(xpath="//select[@id='view_type']")
	WebElement viewType_dd;
	
	@FindBy(xpath="//select[@id='status']")
	WebElement status_dd;
	
	@FindBy(xpath="//select[@id='payment_status']")
	WebElement payStatus_dd;
	
	@FindBy(xpath="//input[@id='b_start_date']")
	WebElement startDate_Field;

	@FindBy(xpath="//input[@id='b_end_date']")
	WebElement endDate_Field;
	
	@FindBy(xpath="//input[@value='Go']")
	WebElement go_Btn;
	
	@FindBy(xpath="//input[@id='search']")
	WebElement search_Bar;
	
	@FindBy(xpath="//a[text()='New Booking']")
	WebElement newBookings_Btn;
	
	@FindBy(xpath="//a/span[text()='Excel Export']")
	WebElement excelExport_Btn;
	
	@FindBy(xpath="//a[@class='edit_booking_item']")
	List<WebElement> editBookings_Link;
	
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr")
	List<WebElement> bookingRows;
	
	@FindBy(xpath = "//a[text()='Venues']")
	WebElement venue_dd;
	
	@FindBy(xpath = "//a[text()='Soho Health Centre']")
	WebElement venue_name;
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr/td[11]")
	WebElement bookingStatus_Txt;
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr/td/input[@class ='item_checkbox']")
	WebElement slctBooking_chkBox;
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr/td/a[contains(@href,'bookings') and contains(text(),'#')]")
	WebElement bookingRef_link;
	
	
	
	@FindBy(xpath="//table[@id='bookings_table']/tbody/tr/td[12]")
	WebElement paymentStatus_Txt;
	
	@FindBy(xpath="//a[text()='View']")
	WebElement bookingSummaryView_Link;
	
	@FindBy(xpath = "//h4[contains(.,'Booking #')]")
	WebElement bookingID_Txt;
	
	@FindBy(xpath="//a[text()='Back']")
	WebElement back_Btn;
	
	@FindBy(xpath="//div[@class='custom dropdown']//preceding-sibling::select[@id='booking_item_space_id']")
	WebElement space_dd;
	
	@FindBy(xpath="//table[@id='bookings_table']//a[contains(@href,'bookings')]")
	List<WebElement> bookingID_Link;
	
	@FindBy(xpath = "//input[@id='send_cancel_email']/parent::div//span[contains(@class,'custom checkbox')]")
	WebElement canEmail_chkBox;
	
	@FindBy(xpath = "//input[@id='raise_credit_note' ]/parent::label//span[contains(@class,'custom checkbox')]")
	WebElement raiseCN_chkBox;
	
	@FindBy(xpath = "//input[@id='send_credit_note_email']/parent::label//span[contains(@class,'custom checkbox')]")
	WebElement raiseCNEmail_chkBox;
	
	@FindBy(xpath = "//input[@id='refund_payment']/parent::label//span[contains(@class,'custom checkbox')]")
	WebElement refundPay_chkBox;
	
	@FindBy(xpath = "//input[@id='send_refund_email']/parent::label//span[contains(@class,'custom checkbox')]")
	WebElement refundEmail_chkBox;
	
	@FindBy(xpath="//a[@id='cancel_selected_items_booking']")
	WebElement cancelSelctd_Btn;
	
	@FindBy(xpath="//input[@id='credit_note_reason']")
	WebElement canReason_txt;
	
	@FindBy(xpath="//input[@value='Cancel these Bookings']")
	WebElement canBooking_btn;
	
	@FindBy(xpath="//a[text()='Cancel']//parent::td//preceding-sibling::td/a[contains(text(),'Billed')]")
	WebElement canForbilledBooking_link;
	
	@FindBy(xpath="//a[text()='Cancel']//parent::td//preceding-sibling::td[contains(text(),'Unbilled')]")
	WebElement canForUnbilledBooking_link;
	
	@FindBy(xpath="//a[text()='Cancel']")
	WebElement canBookings_link;
	
	@FindBy(id = "user_email")
	WebElement login_user_name;
	
	@FindBy(id = "user_password")
	WebElement login_user_password;
	
	@FindBy(name = "commit")
	WebElement login_btn;
	
	@FindBy(xpath="//a[@class='main' and text()='Organisations']")
	WebElement masterOrgTab;
	
	

	
//================================Initialise web elements created in this class========================================
	
	public Bookings_Page() {
	PageFactory.initElements(driver,this);
	}
	

//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

	public void verify_clickBookingsTab() {
		bookings_tab.click();
		String title = bookingTab_title.getText();
		SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(title.contains("Bookings"));
		softAssert.assertAll();
	}
	
	public void selectVenue() {
		venue_dd.click();
		venue_name.click();	
	}
	
	public void verify_noOfEnteries() throws InterruptedException {
		selectVenue();
		bookings_tab.click();
		Select slct1 = new Select(noOfEnteries_dd);
		List<WebElement> opn = slct1.getOptions();
		for(int i=1;i<=(opn.size()-1);i++) {

		slct1.selectByIndex(i);
		Thread.sleep(1000);
		
		int noOfbookings = bookingRows.size();
		System.out.println("Number of booking after selecting option " + i +" from the dropdown are " + noOfbookings);
		Thread.sleep(1000);	
		}
	}
	
	public void verify_searchBar() throws InterruptedException {
		bookings_tab.click();
		
		//search by room name
		Select slct1 = new Select(noOfEnteries_dd);
		slct1.selectByIndex(3);
		Thread.sleep(1000);
		int noOfbookings = bookingRows.size();
		System.out.println("No of bookings with no filter are " + noOfbookings);
		search_Bar.sendKeys(driver.findElement(By.xpath("//table[@id='bookings_table']/tbody/tr/td[6]")).getText());
		search_Bar.sendKeys(Keys.ENTER);
		Thread.sleep(1000);
		int noOfbookings1 = bookingRows.size();
		System.out.println("No of bookings after searhing by room name " + noOfbookings1);
		Assert.assertNotEquals(noOfbookings, noOfbookings1);
	
		//search by client name
		search_Bar.clear();
		search_Bar.sendKeys(Keys.ENTER);
		Thread.sleep(500);
		Select slct2 = new Select(noOfEnteries_dd);
		slct2.selectByIndex(3);
		Thread.sleep(1000);
		int noOfbookings2 = bookingRows.size();
		System.out.println("No of bookings with no filter are " + noOfbookings2);
		search_Bar.sendKeys("catherine");
		search_Bar.sendKeys(Keys.ENTER);
		Thread.sleep(1000);
		int noOfbookings3 = bookingRows.size();
		System.out.println("No of bookings after searhing by client's name are " + noOfbookings3);
		Assert.assertNotEquals(noOfbookings2, noOfbookings3);
	}
	
	public void verify_searchBookingByDateRange() throws InterruptedException {
		bookings_tab.click();
		Select slct1 = new Select(noOfEnteries_dd);
		slct1.selectByIndex(3);
		Thread.sleep(1000);
		int noOfbookings = bookingRows.size();
		System.out.println("No of bookings with no filter are " + noOfbookings);
		startDate_Field.clear();
		startDate_Field.sendKeys("01/05/2020");
		endDate_Field.clear();
		endDate_Field.sendKeys("02/05/2020");
		go_Btn.click();
		int noOfbookings1 = bookingRows.size();
		System.out.println("No of bookings after searhing by date range are " + noOfbookings1);
		Assert.assertNotEquals(noOfbookings, noOfbookings1);
	}
	
	public void verify_bookingStatusOpn() throws InterruptedException {
		bookings_tab.click();
		Select slct = new Select(noOfEnteries_dd);
		slct.selectByIndex(3);
		Select slct1 = new Select(status_dd);
		List<WebElement> opn = slct1.getOptions();
		for(int i=1;i<=(opn.size()-1);) {

		slct1.selectByIndex(i);
		Thread.sleep(1000);
		if(bookingRows.size()==0) {
			i++;
		}else {
		String bookingStatus = bookingStatus_Txt.getText();
		int noOfbookings = bookingRows.size();
		System.out.println("Number of bookings after selecting " + bookingStatus + " booking status are " + noOfbookings);
		Thread.sleep(1000);	
			i++;
		   }
		}
	}
	
	public void verify_paymentStatusOpn() throws InterruptedException {
		bookings_tab.click();
		Select slct = new Select(noOfEnteries_dd);
		slct.selectByIndex(3);
		Select slct1 = new Select(payStatus_dd);
		List<WebElement> opn = slct1.getOptions();
		for(int i=1;i<=(opn.size()-1);) {

		slct1.selectByIndex(i);
		if(bookingRows.size()==0) {
			i++;
		}else {
			
		String paymentStatus = paymentStatus_Txt.getText();
		
		int noOfbookings = bookingRows.size();
		System.out.println("Number of bookings after selecting " + paymentStatus +" payment status are " + noOfbookings);
		Thread.sleep(1000);		
		i++;
		Thread.sleep(1000);
			}
		}
	}
	
	public void verify_summaryOpnAndView() throws InterruptedException {
		bookings_tab.click();
		Select slct = new Select(viewType_dd);
		slct.selectByVisibleText("Summary");
		search_Bar.sendKeys("AUTOTESTING");
		
		System.out.println("No of rows after searching by client name on BOOKING SUMMARY screen are " + bookingRows.size());
		
		bookingSummaryView_Link.click();
		Thread.sleep(500);
		
		System.out.println("You are on booking details page of booking with ID " + bookingID_Txt.getText() );
		back_Btn.click();
	}
	
	public void verify_excelExport() throws InterruptedException {
		bookings_tab.click();
		excelExport_Btn.click();
		
		Select slct = new Select(viewType_dd);
		slct.selectByVisibleText("Summary");
		search_Bar.sendKeys("AUTOTESTING");
				
	
		
		bookingSummaryView_Link.click();
		Thread.sleep(500);
		
		System.out.println("You are on booking details page of booking with ID " + bookingID_Txt.getText() );
		back_Btn.click();
	}
	
	public void edit_fullyPaidBooking() throws InterruptedException, AWTException {
		selectVenue();
		bookings_tab.click();
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Billed");
		Thread.sleep(1000);
		System.out.println();
		if(bookingRows.size()!=0) {
			for(int i=1;i<=bookingID_Link.size();i++) {
				bookingID_Link.get(i).click();
				
				String roomNameBeforeEdit = driver.findElement(By.xpath("//table[@id='booking_items_list']/tbody/tr["+i+"]/td[2]")).getText();
				System.out.println("A" + roomNameBeforeEdit);
				driver.findElement(By.xpath("//table[@id='booking_items_list']/tbody/tr["+i+"]/td[10]")).click();
		//		editBookings_Link.get(i).click();
			
				Thread.sleep(1000);
				driver.switchTo().alert().accept();
				Thread.sleep(5000);
				
				driver.findElement(By.xpath("//a[@class='selector' and @href='#']")).click();
				driver.findElement(By.xpath("//li[text()='Group room GR05']")).click();
		//		new WebDriverWait(driver, 15).until(ExpectedConditions.elementToBeClickable(space_dd));
			//	space_dd.click();

			//	Select select = new Select(space_dd);
			//	select.selectByValue("8242");
			
			//	Select slct =  new Select(space_dd);
			//	slct.selectByVisibleText("Group room GR05");
				save_Btn.click();
				Thread.sleep(5000);
				if(driver.findElement(By.xpath("//div[@id='error_messages']")).isDisplayed()) {
					driver.findElement(By.xpath("//a[text()='Close']")).click();
				}else {
				String roomNameafterEdit = driver.findElement(By.xpath("//table[@id='booking_items_list']/tbody/tr["+i+"]/td[2]")).getText();
				System.out.println("B" + roomNameafterEdit);
				Assert.assertNotEquals(roomNameBeforeEdit, roomNameafterEdit);
				}
			}	
		}else {
			System.out.println("No booking available to edit this status");
		}
		
	}
	
	public void cancel_fullyPaid_WP_Single_Booking() {
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Fully Paid");
		if(bookingRows.size()!=0) {
			slctBooking_chkBox.click();
			cancelSelctd_Btn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			refundPay_chkBox.click();
			refundEmail_chkBox.click();
			cancelSelctd_Btn.click();
			canBooking_btn.click();
		}
			else {
				System.out.println("No booking available to cancel with Fully paid status");
			}
	}
	
	public void cancel_billed_WP_Single_Booking() {
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Billed");
		if(bookingRows.size()!=0) {
			bookingRef_link.click();
			canForbilledBooking_link.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			canBooking_btn.click();
		}
			else {
				System.out.println("No booking available to cancel with Billed status");
			}
	}
	
	public void cancel_unBilled_WP_Single_Booking() {
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Unbilled");
		if(bookingRows.size()!=0) {
			bookingRef_link.click();
			canForUnbilledBooking_link.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			canBooking_btn.click();
		}
			else {
				System.out.println("No booking available to cancel with Billed status");
			}
	}
	
	public void cancel_tentative_Booking() {
		Select slct1 = new Select(status_dd);
		slct1.selectByVisibleText("Tentative");
		if(bookingRows.size()!=0) {
			bookingRef_link.click();
			canBookings_link.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			canBooking_btn.click();
		}
			else {
				System.out.println("No booking available to cancel with Tentative status");
			}
	}
	

		public void switchToOrgdmin() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://admin.preproduction.ospace.co.uk/users/sign_in");
		login_user_name.sendKeys("nhsmva@example.com");
		login_user_password.sendKeys("nhsmva456#");
		login_btn.click();
		verify_clickBookingsTab();
		
		}
		
		
		public void verify_refundOpnNotDisplays() {
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Fully Paid");
		if(bookingRows.size()!=0) {
			slctBooking_chkBox.click();
			cancelSelctd_Btn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			Assert.assertFalse(refundPay_chkBox.isDisplayed()); 
			Assert.assertFalse(refundEmail_chkBox.isDisplayed());
		}
			else {
				System.out.println("No booking available to cancel with Fully paid status");
			}
	}
		
		public void verify_refundOpnDisplays() {
		Select slct1 = new Select(payStatus_dd);
		slct1.selectByVisibleText("Fully Paid");
		if(bookingRows.size()!=0) {
			slctBooking_chkBox.click();
			cancelSelctd_Btn.click();
			canEmail_chkBox.click();
			canReason_txt.sendKeys("AUTOMATECAN");
			raiseCN_chkBox.click();
			raiseCNEmail_chkBox.click();
			Assert.assertTrue(refundPay_chkBox.isDisplayed());
			Assert.assertTrue(refundEmail_chkBox.isDisplayed());
		}
			else {
				System.out.println("No booking available to cancel with Fully paid status");
			}
	}
	
	public void Disable_refundOpn() {
	//	driver.close();
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://admin.preproduction.ospace.co.uk/users/sign_in");
		login_user_name.sendKeys("mastertest@example.com");
		login_user_password.sendKeys("master456#");
		login_btn.click();
		masterOrgTab.click();
		driver.findElement(By.xpath("//td[contains(text(),'NHSPS')]//following-sibling::td/a[text()='Edit']")).click();
		driver.findElement(By.xpath("//a[text()='Features']")).click();
		driver.findElement(By.xpath("//input[@value='refunds']//parent::td//span[@class='custom checkbox checked']")).click();
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		driver.close();
	}
	
	public void enable_refundOpn() {
		driver.close();
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://admin.preproduction.ospace.co.uk/users/sign_in");
		login_user_name.sendKeys("mastertest@example.com");
		login_user_password.sendKeys("master456#");
		login_btn.click();
		masterOrgTab.click();
		driver.findElement(By.xpath("//td[contains(text(),'NHSPS')]//following-sibling::td/a[text()='Edit']")).click();
		driver.findElement(By.xpath("//a[text()='Features']")).click();
		driver.findElement(By.xpath("//input[@value='refunds']//parent::td//span[@class='custom checkbox']")).click();
		driver.findElement(By.xpath("//input[@value='Save']")).click();
		driver.close();
	}
	
	public void verifyRefundFunc() {
		Disable_refundOpn();
		switchToOrgdmin();
		verify_refundOpnNotDisplays();
		enable_refundOpn();
		switchToOrgdmin();
		verify_refundOpnDisplays();
		
	}
	
	
}


