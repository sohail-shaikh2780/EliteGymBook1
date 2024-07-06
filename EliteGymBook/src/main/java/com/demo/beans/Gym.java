package com.demo.beans;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Gym {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gymId;
    private String gymName;
    private String gymLocation;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private GymOwner gymOwner;

    @OneToMany(mappedBy = "gym")
    private Set<Booking> bookings;

	public Gym() {
		super();
	}

	public Gym(Long gymId, String gymName, String gymLocation, GymOwner gymOwner, Set<Booking> bookings) {
		super();
		this.gymId = gymId;
		this.gymName = gymName;
		this.gymLocation = gymLocation;
		this.gymOwner = gymOwner;
		this.bookings = bookings;
	}

	public Long getGymId() {
		return gymId;
	}

	public void setGymId(Long gymId) {
		this.gymId = gymId;
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

	public GymOwner getGymOwner() {
		return gymOwner;
	}

	public void setGymOwner(GymOwner gymOwner) {
		this.gymOwner = gymOwner;
	}

	public Set<Booking> getBookings() {
		return bookings;
	}

	public void setBookings(Set<Booking> bookings) {
		this.bookings = bookings;
	}

	@Override
	public String toString() {
		return "Gym [gymId=" + gymId + ", gymName=" + gymName + ", gymLocation=" + gymLocation + ", gymOwner="
				+ gymOwner + ", bookings=" + bookings + "]";
	}

    

}
