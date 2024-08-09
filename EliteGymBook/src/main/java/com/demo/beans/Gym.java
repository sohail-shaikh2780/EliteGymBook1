package com.demo.beans;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "gyms")
public class Gym {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String gymName;
    private String location;
    private Boolean mostSearched;
    private String advertisement;
    private Boolean eatablesAvailable;
    private Boolean proteinAvailable;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private GymOwner gymOwner;

    @OneToMany(mappedBy = "gym")
    private Set<Membership> memberships;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getGymName() {
		return gymName;
	}

	public void setGymName(String gymName) {
		this.gymName = gymName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Boolean getMostSearched() {
		return mostSearched;
	}

	public void setMostSearched(Boolean mostSearched) {
		this.mostSearched = mostSearched;
	}

	public String getAdvertisement() {
		return advertisement;
	}

	public void setAdvertisement(String advertisement) {
		this.advertisement = advertisement;
	}

	public Boolean getEatablesAvailable() {
		return eatablesAvailable;
	}

	public void setEatablesAvailable(Boolean eatablesAvailable) {
		this.eatablesAvailable = eatablesAvailable;
	}

	public Boolean getProteinAvailable() {
		return proteinAvailable;
	}

	public void setProteinAvailable(Boolean proteinAvailable) {
		this.proteinAvailable = proteinAvailable;
	}

	public GymOwner getGymOwner() {
		return gymOwner;
	}

	public void setGymOwner(GymOwner gymOwner) {
		this.gymOwner = gymOwner;
	}

	public Set<Membership> getMemberships() {
		return memberships;
	}

	public void setMemberships(Set<Membership> memberships) {
		this.memberships = memberships;
	}

    
}
