import { GraphQLClient } from "graphql-request";
import { getSdk } from "./generated/generated-stuff";

export class ShoifyApi {
  private readonly sdk;

  constructor(urlWithClient: string) {
    this.sdk = getSdk(
      new GraphQLClient(urlWithClient, {
        headers: { Authorization: "put auth token here" },
      })
    );
  }

  webPixel() {
    return this.sdk.webPixel({
      id: "asd",
    });
  }
}
