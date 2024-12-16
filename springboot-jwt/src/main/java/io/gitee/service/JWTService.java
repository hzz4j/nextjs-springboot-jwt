package io.gitee.service;

import io.gitee.config.JWTProps;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.Map;

/**
 * @author <a href="mailto:1193094618@qq.com">pkmer</a>
 * <br>
 * <a href = "https://gitee.com/developeros/videos-online">Code Repository</a>
 * At 2024/12/14
 */
@Service
public class JWTService {
    private final String jwtSecret;
    public JWTService(JWTProps props){
        jwtSecret = props.getSecret();
    }

    public String getToken(String username) {
        Map<String, ?> claims = Map.of(
                "loginDate", LocalDate.now().toString(),
                "usename", username);
        return Jwts.builder()
                .header()
                .type("JWT").and()
                .claims(claims)
                .signWith(getSecretKey())
                .compact();

    }

    private SecretKey getSecretKey() {
        // jwt.io也要模仿这个行为，直接使用原始字符串或者对进行base64操作
        // 直接使用原始字符串密钥
        byte[] rawKey = jwtSecret.getBytes(StandardCharsets.UTF_8);
        return Keys.hmacShaKeyFor(rawKey);
    }
}
