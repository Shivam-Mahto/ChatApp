package com.chat.controllers;

import com.chat.entities.Message;
import com.chat.entities.Room;
import com.chat.repositories.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/rooms")
@CrossOrigin("*")
public class RoomController {

    private RoomRepository roomRepository;

    public RoomController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // Create Room
    @PostMapping("")
    public ResponseEntity<?> createRoom(@RequestBody String roomId) {

        if (roomRepository.findByRoomId(roomId) != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Room already exists");
        }

        Room room = new Room();
        room.setRoomId(roomId);
        Room savedRoom = roomRepository.save(room);
        return ResponseEntity.status(HttpStatus.CREATED).body(room);
    }

    // Get Room
    @GetMapping("/{roomId}")
    public ResponseEntity<?> joinRoom(@PathVariable String roomId) {

        Room room = roomRepository.findByRoomId(roomId);

        if (room == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Room not found!!");
        }
        return ResponseEntity.status(HttpStatus.OK).body(room);
    }

    // Get messages of a room
    @GetMapping("/{roomId}/messages")
    public ResponseEntity<List<Message>> getMessages(@PathVariable String roomId) {

        Room room = roomRepository.findByRoomId(roomId);
        if(room == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

        List<Message> messages = room.getMessages();
        return ResponseEntity.status(HttpStatus.OK).body(messages);
    }
}
