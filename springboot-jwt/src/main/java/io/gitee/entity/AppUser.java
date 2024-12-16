package io.gitee.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @author <a href="mailto:1193094618@qq.com">pkmer</a>
 * <br>
 * <a href = "https://gitee.com/developeros/videos-online">Code Repository</a>
 * At 2024/12/16
 */
@Data
@Accessors(chain = true)
@Table(name = "app_user")
public class AppUser {
    @Id
    private Integer id;
    private String name;
    private String email;
    private String password;
}
