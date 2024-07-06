package com.demo.beans;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

@Entity
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long bookingId;
    private String className;
    private Date bookingDate;
    private String bookingTime;
    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "gym_id")
    private Gym gym;

    @OneToMany(mappedBy = "booking")
    private Set<Payment> payments;

	public Booking() {
		super();
	}

	public Booking(Long bookingId, String className, Date bookingDate, String bookingTime, String status, User user,
			Gym gym, Set<Payment> payments) {
		super();
		this.bookingId = bookingId;
		this.className = className;
		this.bookingDate = bookingDate;
		this.bookingTime = bookingTime;
		this.status = status;
		this.user = user;
		this.gym = gym;
		this.payments = payments;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public Date getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}

	public String getBookingTime() {
		return bookingTime;
	}

	public void setBookingTime(String bookingTime) {
		this.bookingTime = bookingTime;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Gym getGym() {
		return gym;
	}

	public void setGym(Gym gym) {
		this.gym = gym;
	}

	public Set<Payment> getPayments() {
		return payments;
	}

	public void setPayments(Set<Payment> payments) {
		this.payments = payments;
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", className=" + className + ", bookingDate=" + bookingDate
				+ ", bookingTime=" + bookingTime + ", status=" + status + ", user=" + user + ", gym=" + gym
				+ ", payments=" + payments + "]";
	}
    
    
}
