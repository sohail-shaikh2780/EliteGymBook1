package com.demo.beans;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Membership {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long membershipId;
    private String membershipType;
    private Double membershipPrice;
    private String duration;

    @OneToMany(mappedBy = "membership")
    private Set<User> users;

	public Membership() {
		super();
	}

	public Membership(Long membershipId, String membershipType, Double membershipPrice, String duration,
			Set<User> users) {
		super();
		this.membershipId = membershipId;
		this.membershipType = membershipType;
		this.membershipPrice = membershipPrice;
		this.duration = duration;
		this.users = users;
	}

	public Long getMembershipId() {
		return membershipId;
	}

	public void setMembershipId(Long membershipId) {
		this.membershipId = membershipId;
	}

	public String getMembershipType() {
		return membershipType;
	}

	public void setMembershipType(String membershipType) {
		this.membershipType = membershipType;
	}

	public Double getMembershipPrice() {
		return membershipPrice;
	}

	public void setMembershipPrice(Double membershipPrice) {
		this.membershipPrice = membershipPrice;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	@Override
	public String toString() {
		return "Membership [membershipId=" + membershipId + ", membershipType=" + membershipType + ", membershipPrice="
				+ membershipPrice + ", duration=" + duration + ", users=" + users + "]";
	}
    
    

}
