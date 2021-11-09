package com.revature.project2.model;


import java.sql.Date;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "buses")
@Data
public class Bus {
		@Id
		@GeneratedValue(strategy = GenerationType.AUTO)
		private int id;
		private String busNo;
		private String fromCity;
		private String destinationCity;
		private Date date;
		private Time time;
		private int fare;
		private int userId;
	
		
		
		
		
	}