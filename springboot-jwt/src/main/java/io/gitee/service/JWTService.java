package io.gitee.service;

import io.gitee.config.JWTProps;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.Base64;
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
//        byte[] decode = Decoders.BASE64.decode(jwtSecret);
//        return Keys.hmacShaKeyFor(decode);
        // 使用HS256算法生成密钥（此时的这个密钥就是token）
        return Keys.hmacShaKeyFor(rawKey);
//        return new SecretKeySpec(rawKey, "HmacSHA256");
    }

    public static void main(String[] args) {
        JWTProps jwtProps = new JWTProps();
        jwtProps.setSecret("9cZjXN9uHH0erCgOAdZCsXIAJbeh7Q43eLa/c1a69rU=");
        String token = new JWTService(jwtProps).getToken("Pkmer");
        System.out.println(token);
    }

}
