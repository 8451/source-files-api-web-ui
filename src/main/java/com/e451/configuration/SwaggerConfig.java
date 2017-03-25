package com.e451.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseMessageBuilder;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.ResponseMessage;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

import static com.google.common.collect.Lists.newArrayList;

@Configuration
@EnableSwagger2
public class SwaggerConfig {
  @Bean
  public Docket api(@Value("${info.app.name}") String name, @Value("${info.app.description}") String description,
                    @Value("${info.app.version}") String version) {
    return new Docket(DocumentationType.SWAGGER_2)
      .select()
      .apis(RequestHandlerSelectors.basePackage("com.e451"))
      .build()
      .apiInfo(metadata(name, description, version))
      .useDefaultResponseMessages(false)
      .globalResponseMessage(RequestMethod.GET, responseMessagesGET())
      .globalResponseMessage(RequestMethod.POST, responseMessagesPOST());

  }

  private ApiInfo metadata(String name, String description, String version) {
    return new ApiInfoBuilder()
      .title(name)
      .description(description)
      .version(version)
      .build();
  }

  private List<ResponseMessage> responseMessagesGET() {
    return newArrayList(new ResponseMessageBuilder()
        .code(500)
        .message("Unhandled exception")
        .build(),
      new ResponseMessageBuilder()
        .code(503)
        .message("An internal resource was unavailable (e.g. Mongo data store)")
        .build());
  }

  private List<ResponseMessage> responseMessagesPOST() {
    return newArrayList(new ResponseMessageBuilder()
      .code(500)
      .message("Unhandled exception")
      .build());
  }
}
