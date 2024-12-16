package io.gitee;

import io.gitee.config.JWTProps;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author <a href="mailto:1193094618@qq.com">pkmer</a>
 * <br>
 * <a href = "https://gitee.com/developeros/videos-online">Code Repository</a>
 * At 2024/12/14
 */
@SpringBootApplication
@RestController
@EnableJpaRepositories
public class Application {

    @Setter(onMethod_ = @Autowired)
    private JWTProps jwtProps;

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Application.class);
        app.run(args);
    }

    @GetMapping("/helloworld")
    public String hello() {
        return jwtProps.getSecret();
    }
}
