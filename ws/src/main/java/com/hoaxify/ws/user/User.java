package com.hoaxify.ws.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private int id;

    @Column(name = "username")
    @NotNull(message  = "{NotNull.message}")
    //@Size(min = 4, max = 20)
    //@UniqueUsername
    private String username;

    @Column(name = "display_name")
    @NotNull
    private String displayName;

    @NotNull
    @Column(name = "password",unique = true)
    @Pattern(regexp="^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$",message = "Şifre en az bir küçük harf, büyük harf ve sayı içermelidir!")
    private String password;

}
