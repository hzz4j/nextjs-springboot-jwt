package io.gitee.controller;

import io.gitee.bo.UserLogin;
import io.gitee.bo.UserSignUp;
import io.gitee.service.JWTService;
import io.gitee.service.UserService;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

/**
 * @author <a href="mailto:1193094618@qq.com">pkmer</a>
 * <br>
 * <a href = "https://gitee.com/developeros/videos-online">Code Repository</a>
 * At 2024/12/16
 */
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Setter(onMethod_ = @Autowired)
    UserService userService;

    @Setter(onMethod_ = @Autowired)
    JWTService jwtService;

    @PostMapping("/signup")
    public Object signUp(@RequestBody UserSignUp userSignUp){

        userService.register(userSignUp);
        return "success";
    }

    @PostMapping("/login")
    public Object login(@RequestBody UserLogin user){
        Optional<String> username = userService.login(user);
        if(username.isPresent()){
            String token = jwtService.getToken(username.get());
            System.out.println(token);
            return Map.of("token",token);
        }
        return "error";
    }
}
