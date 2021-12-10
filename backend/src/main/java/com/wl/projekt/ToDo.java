package com.wl.projekt;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="todos")
public class ToDo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "naslov")
	private String naslov;
	
	@Column(name = "opis")
	private String opis;
	
	@Column(name = "nujnost")
	private int nujnost;
	
	public ToDo() {
		
	}
	
	public ToDo(String naslov, String opis, int nujnost) {
		super();
		this.naslov = naslov;
		this.opis = opis;
		this.nujnost = nujnost;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNaslov() {
		return naslov;
	}

	public void setNaslov(String naslov) {
		this.naslov = naslov;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public int getNujnost() {
		return nujnost;
	}

	public void setNujnost(int nujnost) {
		this.nujnost = nujnost;
	}
	
	
	
	
}
