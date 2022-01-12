import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../redux/apiCalls";
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/34199253_2172938516064772_2702559947115200512_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_ohc=LtdmS3aLbYcAX-UA8Eb&_nc_ht=scontent.ftun1-2.fna&oh=00_AT9zre0ituc_GqyXtXOSHIaarWewuNDKwk5LPLgwyyyDUw&oe=6203C450")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const { isFetching, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    createUser(dispatch, { username, email, password, isAdmin });
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username"  onChange={(e) => setUsername(e.target.value)}/>
          <Input placeholder="email"  onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="password"  onChange={(e) => setPassword(e.target.value)}/>
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick} disabled={isFetching}>
            CREATE
          </Button>
          {error && <Error>Something went wrong...</Error>}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
