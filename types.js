export function Bike_Info(model, supplier, ID) {
  this.model = model;
  this.supplier = supplier;
  this.ID = ID;
}

export function Checkout(dateout, datein, entity, late, overnight) {
  this.dateout = dateout;
  this.datein = datein;
  this.entity = entity;
  this.late = late;
  this.overnight = overnight;
}

export function Bike(info, checkouts, checkedIn) {
  this.info = info;
  this.checkouts = checkouts;
  this.checkedIn = checkedIn;
}

export function Contact(name, ID, email, phoneNumber, gaurdianEmail, gaurdianPhoneNumber) {
  this.ID = ID;
  this.name = name;
  this.email = email;
  this.phoneNumber = phoneNumber;
  this.gaurdianEmail = gaurdianEmail;
  this.gaurdianPhoneNumber = gaurdianPhoneNumber;
}

export function User(contactInfo, checkouts, fines, credit) {
  this.contactInfo = contactInfo;
  this.checkouts = checkouts;
  this.fines = fines;
  this.credit = credit;
}
