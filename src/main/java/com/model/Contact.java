package com.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="contactinfo")
public class Contact {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(length=20)
	private String name;
	@Column(length=20)
	private String email;
	@Column(length=50)
	private String message;
	@Column(length=10)
	private double phno;
	public Contact(int id, String name, String email, String message, double phno) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.message = message;
		this.phno = phno;
	}
	public Contact() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public double getPhno() {
		return phno;
	}
	public void setPhno(double phno) {
		this.phno = phno;
	}
	@Override
	public String toString() {
		return "Contact [id=" + id + ", name=" + name + ", email=" + email + ", message=" + message + ", phno=" + phno
				+ "]";
	}

		
}
