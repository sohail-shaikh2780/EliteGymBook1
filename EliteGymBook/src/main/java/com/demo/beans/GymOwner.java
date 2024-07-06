package com.demo.beans;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class GymOwner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ownerId;
    private String name;
    private String email;
    private String phoneNumber;
    private String gymName;
    private String gymLocation;

    @OneToMany(mappedBy = "gymOwner")
    private Set<Gym> gyms;

	public GymOwner() {
		super();
	}

	public GymOwner(Long ownerId, String name, String email, String phoneNumber, String gymName, String gymLocation,
			Set<Gym> gyms) {
		super();
		this.ownerId = ownerId;
		this.name = name;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.gymName = gymName;
		this.gymLocation = gymLocation;
		this.gyms = gyms;
	}

	public Long getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(Long ownerId) {
		this.ownerId = ownerId;
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

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getGymName() {
		return gymName;
	}

	public void setGymName(String gymName) {
		this.gymName = gymName;
	}

	public String getGymLocation() {
		return gymLocation;
	}

	public void setGymLocation(String gymLocation) {
		this.gymLocation = gymLocation;
	}

	public Set<Gym> getGyms() {
		return gyms;
	}

	public void setGyms(Set<Gym> gyms) {
		this.gyms = gyms;
	}

	@Override
	public String toString() {
		return "GymOwner [ownerId=" + ownerId + ", name=" + name + ", email=" + email + ", phoneNumber=" + phoneNumber
				+ ", gymName=" + gymName + ", gymLocation=" + gymLocation + ", gyms=" + gyms + "]";
	}

	
    
}
