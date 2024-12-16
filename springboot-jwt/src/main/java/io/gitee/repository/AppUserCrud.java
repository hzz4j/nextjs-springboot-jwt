package io.gitee.repository;

import io.gitee.entity.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author <a href="mailto:1193094618@qq.com">pkmer</a>
 * <br>
 * <a href = "https://gitee.com/developeros/videos-online">Code Repository</a>
 * At 2024/12/16
 */
@Repository
public interface AppUserCrud extends JpaRepository<AppUser, Integer> {
}
