package io.gitee.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * @author <a href="mailto:1193094618@qq.com">pkmer</a>
 * <br>
 * <a href = "https://gitee.com/developeros/videos-online">Code Repository</a>
 * At 2024/12/14
 */
@Getter
@Setter
@ConfigurationProperties(prefix = "jwt")
@Component
public class JWTProps {
    /**
     * jwt secret
     */
    private String secret;
    private long expiration;
}
