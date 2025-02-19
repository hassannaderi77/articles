import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation senComment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
  ) {
    createComment(
      data: {
        email: $email
        text: $text
        name: $name
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT };
