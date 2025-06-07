package com.chat.repositories;

import com.chat.entities.Room;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoomRepository extends MongoRepository<Room, String> {

    // Get room using roomId

    Room findByRoomId(String roomId);

}
