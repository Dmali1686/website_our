from fastapi import FastAPI, Depends, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from typing import Optional
from database import SessionLocal, ContactSubmission
from email_service import send_lead_notification

app = FastAPI(title="Contact API")

# Configure CORS so Vite frontend can access it
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict this to the frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Pydantic schema for incoming request
class ContactCreate(BaseModel):
    fullName: str
    company: Optional[str] = None
    email: EmailStr
    phone: Optional[str] = None
    service: str
    message: str

@app.post("/api/contact")
def submit_contact(contact: ContactCreate, background_tasks: BackgroundTasks, db: Session = Depends(get_db)):
    db_contact = ContactSubmission(
        full_name=contact.fullName,
        company=contact.company,
        email=contact.email,
        phone=contact.phone,
        service=contact.service,
        message=contact.message
    )
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    
    # Send email notification in the background
    lead_dict = contact.model_dump()
    background_tasks.add_task(send_lead_notification, lead_dict)

    return {"status": "success", "message": "Contact form submitted successfully", "id": db_contact.id}
