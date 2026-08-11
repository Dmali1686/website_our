import os
from dotenv import load_dotenv
from sqlalchemy import create_engine, Column, Integer, String, Text, DateTime
from sqlalchemy.orm import declarative_base, sessionmaker
from datetime import datetime

load_dotenv()

DATABASE_URL = os.environ.get("DATABASE_URL", "sqlite:///./contacts.db")

# If it's postgres, we don't need check_same_thread
if DATABASE_URL.startswith("sqlite"):
    engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
else:
    engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class ContactSubmission(Base):
    __tablename__ = "contacts"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, index=True)
    company = Column(String, nullable=True)
    email = Column(String, index=True)
    phone = Column(String, nullable=True)
    service = Column(String, index=True)
    message = Column(Text)
    submitted_at = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(bind=engine)
