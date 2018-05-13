package beachgaze.configuration;

import beachgaze.service.MyPasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 * Created by Zoe on 28/3/18.
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // define the username and password that could access the website here if you lock the website
        auth
                .inMemoryAuthentication()
                .passwordEncoder(new MyPasswordEncoder())
                .withUser("beachgaze").password("OMGuardians").roles("admin");

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // decide if you want to lock the website or not
        http
                .authorizeRequests()
                .anyRequest()
                .authenticated()
                .and()
                .httpBasic();
         /*
        http
                .authorizeRequests()
                .antMatchers("/").permitAll()
                .antMatchers("/**").permitAll()
                .and()
                .csrf().disable();
                */
    }

}
