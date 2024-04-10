import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { AuthRoutes } from "./auth.routes";
import { useStyled, Box } from "@gluestack-ui/themed";

export function Routes() {
  const styled = useStyled();
  const theme = DefaultTheme;
  theme.colors.background = styled.config.tokens.colors.gray700;

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
