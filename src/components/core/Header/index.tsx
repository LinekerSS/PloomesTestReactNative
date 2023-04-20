import { Container, PrimaryHeader, SecondHeader, Logo, Text, InfoContainer, Avatar, SearchIcons } from "./styles";

interface HeaderProps {
  backgroundAnimatedStyle: Partial<{
    backgroundColor: string;
  }>;
  subHeaderAnimatedStyle: Partial<{
    marginTop: number;
  }>;
}

export function Header({backgroundAnimatedStyle, subHeaderAnimatedStyle}: HeaderProps) {

  return (
    <Container style={backgroundAnimatedStyle}>
      <PrimaryHeader style={subHeaderAnimatedStyle}>
        <Logo source={require("../../../../assets/images/movie.png")} resizeMode={"contain"}/>

        <InfoContainer>
          <SearchIcons />

          <Avatar source={{ uri: "https://github.com/LinekerSS.png" }} resizeMode={"contain"} />
        </InfoContainer>

      </PrimaryHeader>

      <SecondHeader>
        <Text>Séries</Text>
        <Text>Filmes</Text>
        <Text>Categorias</Text>
      </SecondHeader>
    </Container>
  );
}
