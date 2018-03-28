package beachgaze.service;

import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Created by Zoe on 28/3/18.
 */
public class MyPasswordEncoder implements PasswordEncoder {
    @Override
    public String encode(CharSequence rawPassword) {
        return rawPassword.toString();
    }

    @Override
    public boolean matches(CharSequence rawPassword, String encodedPassword) {
        return encodedPassword.equals(rawPassword.toString());
    }
}
