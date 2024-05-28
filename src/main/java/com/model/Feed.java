package com.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="feedback")
public class Feed {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private int id;
	@Column(length=10)
	 private String name;
	@Column(length=10)
	private String city;
	@Column(length=40)
	private String feedback;
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
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	public Feed(int id, String name, String city, String feedback) {
		super();
		this.id = id;
		this.name = name;
		this.city = city;
		this.feedback = feedback;
	}
	public Feed() {
		super();
	}
	@Override
	public String toString() {
		return "Feed [id=" + id + ", name=" + name + ", city=" + city + ", feedback=" + feedback + "]";
	}
	
	


}




