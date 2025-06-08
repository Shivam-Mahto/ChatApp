package com.chat.controllers;

import com.chat.entities.Message;
import com.chat.entities.Room;
import com.chat.payload.MessageRequest;
import com.chat.repositories.RoomRepository;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class ChatController {

    private RoomRepository roomRepository;

    public ChatController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // for Sending and receiving messages

    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message sendMessage(@DestinationVariable String roomId, @RequestBody MessageRequest request) {

        Room room = roomRepository.findByRoomId(roomId);
        Message message = new Message(request.getSender(), request.getContent());

        if(room == null) {
            throw new RuntimeException("Room does not exist");
        }

        room.getMessages().add(message);
        roomRepository.save(room);
        return message;
    }
}
