package com.hoaxify.ws.user;

import com.hoaxify.ws.error.ApiError;
import com.hoaxify.ws.shared.GenericResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/1.0")
public class UserController {

    @Autowired
    private UserService userService;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @PostMapping("/users")
    @ResponseStatus(HttpStatus.CREATED)
    public GenericResponse createUser(@Valid @RequestBody User user) throws Exception {
        Optional<User> existUser = this.getUsername(user.getUsername());

        if (existUser.isPresent()) {
            throw new Exception(existUser.get().getUsername() + " isimli kullanıcı zaten var lütfen farklı bir kullanıcı adı girin!");
        }
        this.userService.createUser(user);
        return new GenericResponse("User Başarı ile Eklendi");
    }

    @GetMapping("/users")
    public Optional<User> getUsername(@RequestParam(value = "username") String username) {
        return this.userService.getUsername(username);
    }


    @PostMapping("/login")
    public GenericResponse login(@RequestBody User user) throws Exception {
        Optional<User> optionalUser = this.userService.getUsername(user.getUsername());
        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            if (encoder.matches(user.getPassword(), existingUser.getPassword())) {
                return new GenericResponse("Login işlemi başarılı");
            } else {
                throw new Exception("Hatalı işlem kullanıcı adı yada şifre yanlış");
            }
        } else {
            throw new Exception("Kullanıcı bulunamadı");
        }
    }


}
