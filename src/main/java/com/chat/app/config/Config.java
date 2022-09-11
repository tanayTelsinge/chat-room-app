package com.chat.app.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class Config implements WebSocketMessageBrokerConfigurer {
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        //WebSocketMessageBrokerConfigurer.super.registerStompEndpoints(registry);
        //To connect with server
        registry.addEndpoint("/server1").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        //WebSocketMessageBrokerConfigurer.super.configureMessageBroker(registry);
        //to subscribe to receive message /topic/return-to
        registry.enableSimpleBroker("/topic");

        //to send message --> /app/message
        registry.setApplicationDestinationPrefixes("/app");
    }
}
