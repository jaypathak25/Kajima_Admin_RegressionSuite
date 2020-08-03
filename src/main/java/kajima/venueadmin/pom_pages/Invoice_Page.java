package kajima.venueadmin.pom_pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.Point;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import org.testng.asserts.SoftAssert;

import kajima.venueadmin.base.TestBase;

public class Invoice_Page extends TestBase{
	
	String masterString;
	
	Clients_Page client_page =  new Clients_Page();
	
	
	@FindBy(xpath = "//a[contains(text(),'Invoices')]")
	WebElement invoices_tab;
	
	@FindBy(xpath = "//a[contains(text(),'Draft Invoices')]")
	WebElement DraftInvoices_subTab;
	
	@FindBy(xpath = "//a[contains(text(),'Invoices Awaiting Payment')]")
	WebElement awaitPayInvoices_subTab;
	
	@FindBy(xpath = "//a[contains(text(),'Paid Invoices')]")
	WebElement paidInvoices_subTab;
	
	@FindBy(xpath = "//a[contains(text(),'Void Invoices')]")
	WebElement voidInvoices_subTab;
	
	@FindBy(xpath = "//a[contains(text(),'Credit Notes')]")
	WebElement creditNotes_subTab;
	
	@FindBy(xpath = "//a[contains(text(),'Void Credit Notes')]")
	WebElement voidcreditNotes_subTab;
	
	@FindBy(xpath = "/html/body/div[3]/div/div/div/div[2]/div[1]/h3")
	WebElement invoiceSubTab_title;
	
	@FindBy(xpath = "//table[@id='billed_statements_table']/tbody/tr")
	List <WebElement> listOfInvoicesAP;
	
	@FindBy(xpath = "//table[@id='draft_statements_table']/tbody/tr")
	List <WebElement> listOfDraftInvoices;
	 
	@FindBy(xpath="//input[@id='search_statement']")
	WebElement invoiceSearch_field;
	
	@FindBy(xpath="//table[@id='billed_statements_table']/tbody/tr/td[text()='Billed']/preceding-sibling::td[6]")
	WebElement invoiceNumEle;
	
	@FindBy(xpath="//tbody/tr/td[text()='Billed']/following-sibling::td/a[text()='View']")
	WebElement invoiceView_Link;
	
	@FindBy(xpath="//a[text()='Void']")
	WebElement invoiceVoid_Btn;
	
	@FindBy(xpath="//input[@id='statement_void_reason']")
	WebElement voidReason_field;
	
	@FindBy(xpath="//input[@id='send_email']")
	WebElement informCust_chkBox;
	
	@FindBy(xpath="//a[text()='Save']")
	WebElement save_Btn;
	
	@FindBy(xpath="//a[text()='Delete']")
	WebElement delete_Link;
	
	@FindBy(xpath = "//div[@class='alert-box success hide-on-print']")
	WebElement success_Msg;
	
	@FindBy(xpath="//a[text()='Generate Invoices']")
	WebElement genInvoice_Btn;
	
	@FindBy(xpath="//input[@id='from_date']")
	WebElement fromDate_field;
	
	@FindBy(xpath="//input[@id='to_date']")
	WebElement toDate_field;
	
	@FindBy(xpath="//a[text()='Generate']")
	WebElement generate_Btn;
	
	@FindBy(xpath = "//a[text()='View']")
	WebElement view_Link;
	
	@FindBy(xpath = "//a[text()='Mark as Sent']")
	WebElement markAsSent_Btn;
	
	@FindBy(xpath="//span[@class='custom checkbox draft_toggle']")
	WebElement draftInvoiceSrn_chkBox;
	
	@FindBy(xpath="//input[@id='email_selected_invoices']")
	WebElement emailSelctdInvoice_Btn;
	
	@FindBy(xpath = "//a[contains(.,'Email All Invoices')]")
	WebElement emailallInvoice_Btn;
	
	@FindBy(xpath = "//a[text()='Venues']")
	WebElement venue_dd;
	
	@FindBy(xpath = "//a[text()='Blaydon Primary Care Centre']")
	WebElement venue_name;
	

//================================Initialise web elements created in this class========================================
	
		public Invoice_Page() {
		PageFactory.initElements(driver,this);
		}
		
//==================================================================================================================//	
//=======================================//Test Methods//===========================================================//
		
		
		public void selectVenue() {
			venue_dd.click();
			venue_name.click();	
		}
	
//==================================================================================================================//	
		
		public void clickInvoicetab(){
			invoices_tab.click();
			String title = invoiceSubTab_title.getText();
			System.out.println("you are on " + title);
			System.out.println("Title of the screen is " + title);
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(title.contains("Draft Invoices"));
			softAssert.assertAll();
		}
		
//==================================================================================================================//	
		
		public void check_invoiceSubTabs() throws InterruptedException {
			List<WebElement> subtabs = driver.findElements(By.xpath("//html/body/div[3]/div/div/div/div[4]/div/dl/dd"));
			int subtabsnum = subtabs.size();
			System.out.println("NUMBER OF SUBTABS : " + subtabsnum);
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertEquals(subtabsnum, 6);
			softAssert.assertAll();
			String beforexpath = "/html/body/div[3]/div/div/div/div[4]/div/dl/dd[";
			String afterxpath = "]/a";
			for(int i =2;i<=subtabsnum;i++) {
				String actualxpath= beforexpath+i+afterxpath;
				WebElement ele = driver.findElement(By.xpath(actualxpath));
				Thread.sleep(1000);
				ele.click();
				Thread.sleep(2000);
				System.out.println("Title of the screen is " + invoiceSubTab_title.getText());
			  }
		}	
		
//==================================================================================================================//	
		
		public void view_invoiceAPVoid() throws InterruptedException {
			awaitPayInvoices_subTab.click();
			
			Select slct =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
			slct.selectByIndex(2);
			Thread.sleep(1000);
			int noOfInvoicesAP = listOfInvoicesAP.size();
			System.out.println("NUMBER OF INVOICES AWAITING PAYMENTS ARE : " + noOfInvoicesAP);
			if(noOfInvoicesAP==0) {
				System.out.println("No Invoice in AP status available to perform this action");
				
			}else {
				String InvoiceNum = invoiceNumEle.getText();
			//	invoiceSearch_field.sendKeys(InvoiceNum);
				invoiceView_Link.click();
				invoiceVoid_Btn.click();
				voidReason_field.sendKeys("Automated void");
				informCust_chkBox.click();
				save_Btn.click();
				String msg = success_Msg.getText();
				SoftAssert softAssert = new SoftAssert();
				softAssert.assertTrue(msg.contains("Invoice voided."));
				softAssert.assertAll();
				Thread.sleep(1000);
				invoices_tab.click();
				voidInvoices_subTab.click();
				
				Select slct1 =  new Select(driver.findElement(By.xpath("//select[@id='rows_per_page']")));
				slct1.selectByIndex(2);
				Thread.sleep(1000);
				
				List<WebElement> voidedInvoices = driver.findElements(By.xpath("//table[@id='void_statements_table']/tbody/tr"));
				int noOfVoidedInvoices = voidedInvoices.size();
				System.out.println("Number of Invoices voided are " + noOfVoidedInvoices);
				
				String str1 = "//table[@id='void_statements_table']/tbody/tr[";
				String str2 = "]/td[1]";
				for(int i =1;i<=noOfVoidedInvoices;i++) {
					String str3= str1+i+str2;
					WebElement voidedInvoicesNum = driver.findElement(By.xpath(str3));
					if(voidedInvoicesNum.getText().equals(InvoiceNum)) {
						System.out.println("Invoice number " + voidedInvoicesNum.getText() + " which was awaiting payment has been voided successfully and displays in the table at row number " + i);
						break;	
					}	else {
						System.out.println("Invoice which was awaiting payment NOT voided successfully ");
					}		
			    }		
			}
		}
		
//==================================================================================================================//	
		
		public void delete_draftInvoice() throws InterruptedException {
			int noOfDraftinvoices1 = listOfDraftInvoices.size();
			System.out.println("NUMBER OF DRAFT INVOICES ARE : " + noOfDraftinvoices1);
			if(noOfDraftinvoices1==0) {
				System.out.println("No Draft Invoices is available to perform this action");		
			}else {
			delete_Link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			delete_Link.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("Invoice was successfully deleted."));
			softAssert.assertAll();
			
			int noOfDraftinvoices2 = listOfDraftInvoices.size();
			System.out.println("NUMBER OF DRAFT INVOICES ARE : " + noOfDraftinvoices2);
			
			if(noOfDraftinvoices2==(noOfDraftinvoices1-1)) {
				System.out.println("Draft invoice is successfully deleted");
			}else {
				System.out.println("Draft invoice is NOT deleted");
				}
			}
	   }
		
		
//==================================================================================================================//	
		
		
		public void verify_InvoiceMarkAsSent() throws InterruptedException {	
			int noOfDraftinvoices1 = listOfDraftInvoices.size();
			System.out.println("NUMBER OF DRAFT INVOICES ARE : " + noOfDraftinvoices1);
	
			if(noOfDraftinvoices1==0) {
				System.out.println("No Draft Invoices is available to perform this action");		
			}else {
			genInvoice_Btn.click();
			fromDate_field.clear();
			fromDate_field.sendKeys("10/06/2020");
			toDate_field.clear();
			Thread.sleep(1000);
			
			toDate_field.sendKeys("10/06/2020");
			toDate_field.sendKeys(Keys.TAB);
			Thread.sleep(1000);
			generate_Btn.click();
			
		//	int noOfDraftinvoices1 = listOfDraftInvoices.size();
			System.out.println("NUMBER OF DRAFT INVOICES ARE : " + noOfDraftinvoices1);
			
			view_Link.click();
			Thread.sleep(2000);
			markAsSent_Btn.click();
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("Invoice billed."));
			softAssert.assertAll();
			
			String invoiceID = driver.findElement(By.xpath("//h5[contains(text(),'Invoice')]")).getText();

			System.out.println("Invoice Marked as sent is " + invoiceID);	
			
			String invoiceNumID = invoiceID.substring(8,19);
			invoices_tab.click();
			awaitPayInvoices_subTab.click();
			Thread.sleep(1000);
			driver.findElement(By.xpath("//input[@name='search']")).sendKeys(invoiceNumID);
			
			Thread.sleep(2000);
			int noOfInvoicesAP = listOfInvoicesAP.size();
					
			String str1 = "//table[@id='billed_statements_table']/tbody/tr[";
			String str2 = "]/td[2]";
			for(int i =1;i<=noOfInvoicesAP;i++) {
				String str3= str1+i+str2;
				WebElement InvoicesAPNum = driver.findElement(By.xpath(str3)); 
				String IDs= InvoicesAPNum.getText();
				
				if(invoiceID.contains(IDs)) {
					System.out.println(IDs + " is marked as sent successfully and displays in the invoice awaiting payments table");
						break;	
					}else {
						System.out.println("Invoice is NOT marked as sent Successfully ");
					}
			   }
			}
		}
		
//==================================================================================================================//	
		
		public void verify_mailTrap() throws InterruptedException {
			System.setProperty("webdriver.chrome.driver", "C:\\Users\\User\\Desktop\\Automation\\Jarfiles\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().deleteAllCookies();
			driver.get("https://mailtrap.io/signin");
			driver.findElement(By.id("user_email")).sendKeys("Roderick_bull@hotmail.com");
			driver.findElement(By.id("user_password")).sendKeys("Billben1");
			driver.findElement(By.name("commit")).click();
			Thread.sleep(2000);
			driver.findElement(By.xpath("//a[@title='Demo inbox']")).click();
			driver.findElement(By.xpath("//input[@name='quick_filter']")).sendKeys("invoice IBLA");
			Thread.sleep(1000);
			driver.findElement(By.xpath("//span[contains(text(),'minute')]"));
			Thread.sleep(1000);
			String msgTime= driver.findElement(By.xpath("//ul[@class='messages_list']/li[1]//span[contains(text(),'minute')]")).getText();
			System.out.println("Invoice sent via email " + msgTime);
			driver.findElement(By.xpath("//ul[@class='messages_list']/li[1]")).click();
			String msgTitle = driver.findElement(By.xpath("//ul[@class='messages_list']/li[1]//span[contains(@class,'subject')]")).getText();
			System.out.println(msgTitle);
			masterString = msgTitle.substring(8,19);
			System.out.println("Invoice sent by email is " + masterString);
			driver.manage().window().setPosition(new Point(-2000, 0));
			//driver.close();
		}
		
//==================================================================================================================//	
		
		public void verify_emailSelectedInvoice() throws InterruptedException{	
			int noOfDraftinvoices1 = listOfDraftInvoices.size();
			System.out.println("NUMBER OF DRAFT INVOICES ARE : " + noOfDraftinvoices1);
	
			if(noOfDraftinvoices1==0) {
				System.out.println("No Draft Invoices is available to perform this action");		
			}else {
			draftInvoiceSrn_chkBox.click();
			emailSelctdInvoice_Btn.click();
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("1 Invoices sent."));
			softAssert.assertAll();
			
			Thread.sleep(10000);
			verify_mailTrap();
			
			invoices_tab.click();
			Thread.sleep(1000);
			awaitPayInvoices_subTab.click();
			Thread.sleep(3000);
			
			invoiceSearch_field.sendKeys(masterString);
			Thread.sleep(2000);
			
			
			int noOfInvoicesAP = listOfInvoicesAP.size();
			//	System.out.println("Number of Invoices awaiting payments are " + noOfInvoicesAP);
						
				String str1 = "//table[@id='billed_statements_table']/tbody/tr[";
				String str2 = "]/td[2]";
				for(int i =1;i<=noOfInvoicesAP;i++) {
					String str3= str1+i+str2;
					WebElement InvoicesAPNum = driver.findElement(By.xpath(str3)); 
					Thread.sleep(1000);
					String IDs= InvoicesAPNum.getText();
					
					if(masterString.contains(IDs)) {
						System.out.println(IDs + " is sent successfully by email and displays in the invoice awaiting payments table");
							break;	
						}else {
							System.out.println("Invoice is NOT sent Successfully by email ");
						}
				   }
			 }
		}
		
//==================================================================================================================//	
		
		public void verify_emailAllInvoice() throws InterruptedException{	
			
			int noOfDraftinvoices1 = listOfDraftInvoices.size();
			System.out.println("NUMBER OF DRAFT INVOICES ARE : " + noOfDraftinvoices1);
	
			if(noOfDraftinvoices1==0) {
				System.out.println("No Draft Invoices is available to perform this action");		
			}else {
			System.out.println("NUMBER OF DRAFT INVOICES BEFORE EMAIL ALL ARE : " + noOfDraftinvoices1);
			
			emailallInvoice_Btn.click();
			Thread.sleep(1000);
			driver.switchTo().alert().dismiss();
			emailallInvoice_Btn.click();
			Thread.sleep(1000);
			driver.switchTo().alert().accept();
			
			String msg = success_Msg.getText();
			SoftAssert softAssert = new SoftAssert();
			softAssert.assertTrue(msg.contains("All invoices billed and emails will be sent to clients."));
		//	softAssert.assertAll();
			
			
			Thread.sleep(9000);
			
			int noOfDraftinvoices2 = listOfDraftInvoices.size();
			System.out.println("NUMBER OF DRAFT INVOICES AFTER EMAIL ALL ARE : " + noOfDraftinvoices2);
			
			if(noOfDraftinvoices2==(noOfDraftinvoices1-noOfDraftinvoices1)) {
				System.out.println("All the Draft invoices are successfully sent by email");
			}else {
				System.out.println("Draft invoices are NOT sent by email");
			}
			
			Thread.sleep(10000);
			verify_mailTrap();
			
			invoices_tab.click();
			Thread.sleep(1000);
			awaitPayInvoices_subTab.click();
			Thread.sleep(3000);
			
			invoiceSearch_field.sendKeys(masterString);
			Thread.sleep(2000);
			 }
	   }
}
		
		
		