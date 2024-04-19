package com.thns.service.service;

import com.thns.dao.UserDao;
import com.thns.domain.User;
import com.thns.dto.UserDto;
import com.thns.service.utils.Mapper;
import com.thns.service.utils.ConvertObject;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service("userService")
public class UserServiceImp implements UserService {
    @Autowired
    public Mapper mapper;

    @Autowired
//    @Qualifier("userJpaDao")
    private UserDao userDao;
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
            user.setUserName(userDto.getUserName());
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

}
