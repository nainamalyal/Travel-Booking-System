package com.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="signup")
public class SignUp {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
	@Column(length = 15)
	private long id;
	@Column(length=25)
	private String name;
	@Column(length=25)
	private String email;
	@Column(length=25)
	private String username;
	@Column(length=15)
	private String password;
	@Column(length=12) 
	private String mobileNo;
	public SignUp(long id, String name, String email, String username, String password, String mobileNo) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.username = username;
		this.password = password;
		this.mobileNo = mobileNo;
	}
	public SignUp() {
		super();
	}
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
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
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	@Override
	public String toString() {
		return "SignUp [signupId=" + id + ", name=" + name + ", email=" + email + ", username=" + username
				+ ", password=" + password + ", mobileNo=" + mobileNo + "]";
	}
	
	
}
