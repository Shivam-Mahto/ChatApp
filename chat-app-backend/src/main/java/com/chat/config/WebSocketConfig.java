package com.chat.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/chat").setAllowedOrigins("*").withSockJS();
        // SockJS is a JavaScript library and protocol that provides a WebSocket-like API, but with fallback options.
        // It tells Spring to enable SockJS fallback support on that endpoint
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {

        // Enables a simple in-memory message broker and defines the prefix for outbound messages.
        // Clients can subscribe to destinations starting with /topic (e.g. /topic/roomId)
        // Example: server --> /topic/roomId --> client(s)
        registry.enableSimpleBroker("/topic");

        // Defines the prefix for messages sent from clients to application (server-side) @MessageMapping methods.
        // Example: client --> /app/roomId --> @MessageMapping("/roomId") method
        registry.setApplicationDestinationPrefixes("/app");
    }
}
