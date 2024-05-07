package com.thns.user;

import com.thns.utils.ConvertObject;
import com.thns.utils.Mapper;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service("userService")
@RequiredArgsConstructor
public class UserServiceImp implements UserService {
    @Autowired
    public Mapper mapper;

    @Autowired
//    @Qualifier("userJpaDao")
    private UserDao userDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAllUser() {
        return userDao.findAll();
    }

    @Override
    public Optional<User> getUserById(Long userId) {
        return userDao.findById(userId);
    }

    @Override
    @Transactional
    public UserDto addUser(UserDto userDto) {
        User user = new User();
        BeanUtils.copyProperties(userDto, user);
        if (userDto.getId() != null && userDao.existsById(userDto.getId())) {
            return null;
        } else {
            User savedUser = userDao.save(ConvertObject.toInsert(user));
            UserDto savedUserDTO = new UserDto();
            BeanUtils.copyProperties(savedUser, savedUserDTO);
            return savedUserDTO;
        }
    }

    @Override
    @Transactional
    public UserDto updateUser(UserDto userDto) {
        Optional<User> userOptional = userDao.findById(userDto.getId());
        if (userOptional.isPresent()) {
            User user = userOptional.get();

            user.setFirstName(userDto.getFirstName());
            user.setLastName(userDto.getLastName());
            user.setEmail(userDto.getEmail());
            user.setPassword(userDto.getPassword());
            user.setType(userDto.getType());

            return mapper.map(userDao.save(ConvertObject.toUpdate(user)), UserDto.class) ;
        } else {
            return null;
        }
    }

    @Override
    @Transactional
    public boolean deleteUser(Long userId) {
        try {
            Optional<User> userOptional = userDao.findById(userId);
            if (userOptional.isPresent()) {
                userDao.deleteById(userId);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            throw new RuntimeException("Unable to delete user: " + e.getMessage());
        }
    }

    @Override
    @Transactional
    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {

        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();

        // check if the current password is correct
        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        // check if the two new passwords are the same
        if (!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Password are not the same");
        }

        // update the password
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));

        // save the new password
        userDao.save(user);
    }

}
