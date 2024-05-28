package com.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="busbooklist")
@Data
public class BusBook {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Srno;
	@Column(length=20)
	private String dateTime;
	@Column(length=20)
    private String travelFrom;
	@Column(length=20)
	private String travelTo;
	@Column(length=10)
    private String preferredSeat;
	@Column(length=20)
    private String name;
	@Column(length=5)
    private int age;
	@Column(length=10)
    private String mobileNumber;
	@Column(length=30)
    private String paymentMethod;
	public BusBook(int srno, String dateTime, String travelFrom, String travelTo, String preferredSeat, String name,
			int age, String mobileNumber, String paymentMethod) {
		super();
		Srno = srno;
		this.dateTime = dateTime;
		this.travelFrom = travelFrom;
		this.travelTo = travelTo;
		this.preferredSeat = preferredSeat;
		this.name = name;
		this.age = age;
		this.mobileNumber = mobileNumber;
		this.paymentMethod = paymentMethod;
	}
	public BusBook() {
		super();
	}
	public int getSrno() {
		return Srno;
	}
	public void setSrno(int srno) {
		Srno = srno;
	}
	public String getDateTime() {
		return dateTime;
	}
	public void setDateTime(String dateTime) {
		this.dateTime = dateTime;
	}
	public String getTravelFrom() {
		return travelFrom;
	}
	public void setTravelFrom(String travelFrom) {
		this.travelFrom = travelFrom;
	}
	public String getTravelTo() {
		return travelTo;
	}
	public void setTravelTo(String travelTo) {
		this.travelTo = travelTo;
	}
	public String getPreferredSeat() {
		return preferredSeat;
	}
	public void setPreferredSeat(String preferredSeat) {
		this.preferredSeat = preferredSeat;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPaymentMethod() {
		return paymentMethod;
	}
	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}
	@Override
	public String toString() {
		return "BusBook [Srno=" + Srno + ", dateTime=" + dateTime + ", travelFrom=" + travelFrom + ", travelTo="
				+ travelTo + ", preferredSeat=" + preferredSeat + ", name=" + name + ", age=" + age + ", mobileNumber="
				+ mobileNumber + ", paymentMethod=" + paymentMethod + "]";
	}
	
	 
}
