package com.hoaxify.ws.shared;

import com.hoaxify.ws.user.User;
import com.hoaxify.ws.user.UserService;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Data
@AllArgsConstructor
public class GenericResponse {

    private  String message;


}
