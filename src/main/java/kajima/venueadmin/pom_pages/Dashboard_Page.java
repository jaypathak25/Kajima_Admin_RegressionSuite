package kajima.venueadmin.pom_pages;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Dashboard_Page extends TestBase {
	
	SoftAssert softAssert = new SoftAssert();
	
	@FindBy(xpath="//div[@id='recent_activity']/p/a[text()='booking']")
	List<WebElement> bookings_link;
	
	@FindBy(xpath="//div[@id='recent_activity']/p/a[text()='Enquiry']")
	List<WebElement> enquiry_link;
	
	@FindBy(xpath="//a[text()='Back']")
	WebElement back_Btn;
	
	@FindBy(xpath="//a[text()='Cancel']")
	WebElement cancel_Btn;
	
	@FindBy(xpath="//div[@id='dashboard']//h5[contains(text(),'business')]")
	WebElement businessSection_Title;
	
	@FindBy(xpath="//div[@id='content']//h4")
	WebElement booking_title;
	
	@FindBy(xpath="//div[@id='content']//h3")
	WebElement enquiry_title;
	
	@FindBy(xpath="//div[@id='statements_due']//tbody/tr/td")
	List<WebElement> invoices_Link;
	
	@FindBy(xpath="//div[@id='statement_container']/div/div[2]/div[2]/h5[1]")
	WebElement invoice_Num;
	
	@FindBy(xpath="//a[text()='Send Reminder']")
	WebElement reminder_Btn;
	
	@FindBy(xpath="//div[@class='alert-box hide-on-print']")
	WebElement reminder_Msg;
	
	@FindBy(xpath="//div[@class='alert-box success hide-on-print']")
	WebElement reminderDashboard_Msg;
	
	@FindBy(xpath="//a[text()='Add Note']")
	WebElement addNote_Btn;
	
	@FindBy(xpath ="//select[@id='invoice_note_method']")
	WebElement contactBy_dd;
	
	@FindBy(id="invoice_note_note")
	WebElement invioceNote_TxtBox;
	
	@FindBy(name="commit")
	WebElement submit_Btn;
	
	@FindBy(xpath="//div[@id='flash_notice']")
	WebElement success_Msg;
	
	@FindBy(xpath="//table[@class='invoice_notes']/tbody/tr/td[text()='Automation notes']")
	WebElement confirm_Notes;
	
	@FindBy(xpath="//a[text()='Send Reminder']")
	WebElement sendReminder_Link;
	
	
	
	
//================================Initialise web elements created in this class========================================
	
	public Dashboard_Page() {
	PageFactory.initElements(driver, this);
	}


//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//

	public void verify_clickBookingsLinks() throws InterruptedException {
		try {
		int noOfBookingsLinks = bookings_link.size();
		System.out.println("No of bookings links available on screen are " + noOfBookingsLinks);
		if(noOfBookingsLinks!=0) {
			for(int i=1;i<=(noOfBookingsLinks-(noOfBookingsLinks-1));i++) {
				driver.findElement(By.xpath("//div[@id='recent_activity']/p/a[contains(@href,'bookings')]")).click();
				Thread.sleep(1000);
				String title=booking_title.getText();
				System.out.println("you are on page with booking details = " +  title);
				Thread.sleep(2000);
				back_Btn.click();
				Thread.sleep(2000);
				Assert.assertTrue(businessSection_Title.isDisplayed());
				}
			}else
			{
				System.out.println("No booking is available to view");
		    }
		}catch(Exception e) {
			System.out.println("This test is not applicable for current environment");
		}
	}
	
	
	public void verify_clickEnquiryLinks() throws InterruptedException {
		try {
		int noOfEnquiryLinks = enquiry_link.size();
		System.out.println("No of enquiry links available on screen are " + noOfEnquiryLinks);
		if(noOfEnquiryLinks!=0) {
			for(int i=1;i<=(noOfEnquiryLinks-(noOfEnquiryLinks-1));i++) {
				driver.findElement(By.xpath("//div[@id='recent_activity']/p/a[contains(@href,'enquir')]")).click();
				Thread.sleep(1000);
				String title=enquiry_title.getText();
				System.out.println("you are on page with title = " +  title);
				Thread.sleep(2000);
				cancel_Btn.click();
				Thread.sleep(2000);
				Assert.assertTrue(enquiry_title.isDisplayed());
				String title1=enquiry_title.getText();
				System.out.println("you are on page with title = " +  title1);
				softAssert.assertTrue(title1.contains("Current Enquiries"));
			//	Assert.assertTrue(title1.contains("Current Enquiries"));
				}
			}else
			{
				System.out.println("No enquiry is available to view");
		    }
		}catch(Exception e) {
			System.out.println("This test is not applicable for current environment");
		}
		}
	
	public void verify_clickInvoiceLink_sendReminder() throws InterruptedException {
		int i;
		int noOfInvoices = invoices_Link.size();
		System.out.println("No of invoices available on screen are " + noOfInvoices);
		if(noOfInvoices!=0) {
			for(i=1;i<=(noOfInvoices-(noOfInvoices-1));i++) {
				Thread.sleep(3000);
					try {
						String str1 = driver.findElement(By.xpath("//div[@id='statements_due']//tbody/tr[1]/td[1]")).getText();
						System.out.println(str1);
						driver.findElement(By.xpath("//div[@id='statements_due']//tbody/tr[1]/td[1]/a")).click();
						//System.out.println("whattt");
					}catch(Exception e) {
						driver.findElement(By.xpath("//div[@id='statements_due']//tbody/tr[2]/td[1]/a")).click();
						//System.out.println("whattt----------2");
					}	
				Thread.sleep(4000);
				String invoiceID=invoice_Num.getText();
				System.out.println("you are on details page of invoice " +  invoiceID);
				Thread.sleep(1000);
				reminder_Btn.click();
				Thread.sleep(2000);
				String reminderTxt=	reminder_Msg.getText();
				softAssert.assertTrue(reminderTxt.contains(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"))));
			//	Assert.assertTrue(reminderTxt.contains(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"))));
			
			}
		}else
			{
				System.out.println("No invoices are available to view");
		    }
}
	
	public void verify_sendReminderFromLink() throws InterruptedException {
		int i;
		int noOfInvoices = invoices_Link.size();
		System.out.println("No of invoices available on screen are " + noOfInvoices);
		if(noOfInvoices!=0) {
			for(i=1;i<=(noOfInvoices-(noOfInvoices-1));i++) {
				Thread.sleep(3000);
					try {
						sendReminder_Link.click();
				
					}catch(Exception e) {
						sendReminder_Link.click();		
					}	
				Thread.sleep(4000);
				String reminderTxt=	reminderDashboard_Msg.getText();
				softAssert.assertTrue(reminderTxt.contains("Reminder sent."));
				//Assert.assertTrue(reminderTxt.contains("Reminder sent."));
			//	Assert.assertTrue(reminderTxt.contains(LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy"))));	
			}
		}else
			{
				System.out.println("No reminder link is available");
		    }
}

	public void verify_AddingNotes() {
		addNote_Btn.click();
		Select slct1 =  new Select(contactBy_dd);
		slct1.selectByVisibleText("Telephone");
		invioceNote_TxtBox.sendKeys("Automation notes");
		submit_Btn.click();
		
		
		String msg = success_Msg.getText();
	//	SoftAssert softAssert = new SoftAssert();
		softAssert.assertTrue(msg.contains("Successfully created Invoice Note"));
		softAssert.assertAll();
		
		String AutoNotes = confirm_Notes.getText();
		Assert.assertEquals(AutoNotes, "Automation notes");	
		
	}
	
}
		
		
