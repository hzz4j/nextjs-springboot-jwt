package io.gitee.service;

import io.gitee.bo.UserLogin;
import io.gitee.bo.UserSignUp;
import io.gitee.entity.AppUser;
import io.gitee.repository.AppUserCrud;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author <a href="mailto:1193094618@qq.com">pkmer</a>
 * <br>
 * <a href = "https://gitee.com/developeros/videos-online">Code Repository</a>
 * At 2024/12/16
 */
@Service
public class UserService {

    @Setter(onMethod_ = @Autowired)
    private AppUserCrud appUserCrud;
//    public UserService(AppUserCrud appUserCrud){
//        this.appUserCrud = appUserCrud;
//    }
    public void register(UserSignUp user){
        AppUser appUser = new AppUser()
                .setName(user.getUsername())
                .setEmail(user.getEmail())
                .setPassword(user.getPassword());
        appUserCrud.save(appUser);
    }

    public Optional<String> login(UserLogin user){
        Example<AppUser> example = Example.of(
                new AppUser().setEmail(user.getEmail()));

        Optional<AppUser> appUser = appUserCrud.findOne(example);
        if(appUser.isPresent()){
            if(appUser.get().getPassword().equals(user.getPassword())){
                return Optional.of(appUser.get().getName());
            }
        }
        return Optional.empty();
    }
}
