import os
import smtplib
from email.message import EmailMessage
from dotenv import load_dotenv

load_dotenv()

SMTP_SERVER = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", 587))
SMTP_USERNAME = os.environ.get("SMTP_USERNAME", "")
SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
NOTIFICATION_EMAIL = os.environ.get("NOTIFICATION_EMAIL", "")

def send_lead_notification(lead_data: dict):
    """
    Sends an HTML email notification when a new lead is submitted.
    """
    if not SMTP_USERNAME or not SMTP_PASSWORD or not NOTIFICATION_EMAIL:
        print("Warning: SMTP credentials or Notification Email not set. Skipping email alert.")
        return

    msg = EmailMessage()
    msg["Subject"] = f"New Contact Lead: {lead_data.get('fullName', 'Unknown')}"
    msg["From"] = SMTP_USERNAME
    msg["To"] = NOTIFICATION_EMAIL

    html_content = f"""
    <html>
        <body style="font-family: Arial, sans-serif; color: #333;">
            <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #0b1c30; border-bottom: 2px solid #0052cc; padding-bottom: 10px;">
                    New Lead from Cresenix Solutions
                </h2>
                <p><strong>Name:</strong> {lead_data.get('fullName', 'N/A')}</p>
                <p><strong>Company:</strong> {lead_data.get('company') or 'N/A'}</p>
                <p><strong>Email:</strong> <a href="mailto:{lead_data.get('email')}">{lead_data.get('email', 'N/A')}</a></p>
                <p><strong>Phone:</strong> {lead_data.get('phone') or 'N/A'}</p>
                <p><strong>Service Requested:</strong> {lead_data.get('service', 'N/A')}</p>
                <br>
                <h3 style="color: #0b1c30;">Message Details:</h3>
                <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
                    <p style="white-space: pre-wrap; margin: 0;">{lead_data.get('message', 'N/A')}</p>
                </div>
            </div>
        </body>
    </html>
    """
    
    msg.set_content("You have received a new lead. Please view this email in an HTML compatible client.")
    msg.add_alternative(html_content, subtype='html')

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(SMTP_USERNAME, SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        print(f"Lead notification email successfully sent to {NOTIFICATION_EMAIL}")
    except Exception as e:
        print(f"Error sending email: {e}")
