"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useGoogleLogin } from "@react-oauth/google";
import styled from "@emotion/styled";
import {
  Checkbox,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Link,
  TextField,
} from "@mui/material";
import CustomTypography from "../CustomTypography/CustomTypography";
import { useTranslation } from "@clientify/hooks/useTranslation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";
import urlImageWorld from "@clientify/assets/login/world.png";
import urlImageSpace from "@clientify/assets/login/ovni.png";
import urlGoogleIcon from "@clientify/assets/login/google 1.svg";
import ErrorIcon from "@mui/icons-material/Error";
import { Bounce, toast } from "react-toastify";
import Loading from "../loading/Loading";
import { signIn } from "next-auth/react";

const ContainerLogin = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  backgroundColor: "#fff",
}));

const ContainerInfo = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  backgroundColor: "#91D4EC",
  display: "flex",
  padding:
    "56px var(--Spacing-XLarge, 32px) var(--Spacing-XLarge, 32px) var(--Spacing-XLarge, 32px)",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-end",
  flexShrink: 0,
}));

const ContainerForm = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--Spacing-Large, 24px)",
  position: "relative",
}));

const FormContainer = styled(Container)({
  marginTop: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const SubmitButton = styled(Button)(({ theme }: any) => ({
  margin: 0,
  display: "flex",
  padding: "16px",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  flex: "1 0 0",
  textTransform: "none",
}));

const GoogleButton = styled(Button)(({ theme }: any) => ({
  display: "flex",
  padding: "var(--Spacing-Medium, 16px)",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "var(--Radius-Small, 4px)",
  background: "var(--Surface-Modal, #FFF)",
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
  textTransform: "none", // Evita que el texto se convierta en mayúsculas
  border: "none",
}));

const SignUp = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    accountName: "",
    email: "",
    termsAccepted: false,
  });
  const [emailError, setEmailError] = React.useState(false);
  const [loading, setLoading] = useState(false);
  

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   const result = await signIn("credentials", {
  //     email,
  //     password,
  //     redirect: false, // Cambiar a true si deseas redirigir después del inicio de sesión
  //   });
  //   // Manejar el resultado del inicio de sesión
  //   console.log(result);
  // };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      const response = tokenResponse;
      console.log("tokenResponse ", tokenResponse);
      const accessToken = response.access_token;

      fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Hubo un error al realizar la solicitud");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Información del usuario:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  });

  const handleChange = (event: any) => {
    const { name, value, type, checked } = event.target;

    if (name === "email" && value === "william@gmail.com") {
      setEmailError(true);
      toast.error("Ya este correo existe.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
      setEmailError(false);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    //setLoading(true);
    // Realizar validaciones aquí
 //   if (formData.name && formData.email && formData.termsAccepted) {
      // Continuar con la acción deseada, por ejemplo, enviar el formulario
      console.log("Formulario enviado correctamente");
      const result = await signIn("credentials", {
        email:"",
        password:"",
        redirect: false, // Cambiar a true si deseas redirigir después del inicio de sesión
      });
      // Manejar el resultado del inicio de sesión
      console.log(result);
    // } else {
    //   console.log("Por favor complete todos los campos obligatorios.");
    // }
  };

  return (
    <>
      {!loading && (
        <ContainerLogin>
          <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <ContainerInfo>
                <Box
                  sx={{
                    display: "flex",
                    padding: "0px var(--Spacing-Large, 24px)",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "var(--Spacing-Large, 24px)",
                    alignSelf: "stretch",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "8px",
                    }}
                  >
                    <CustomTypography
                      fontWeight={600}
                      fontSize="2rem"
                      fontStyle="normal"
                      lineHeight="2.75rem"
                      maxWidth="375px"
                    >
                      {t("Start your 14-day free trial")}
                    </CustomTypography>

                    <Box
                      sx={{ display: "flex", gap: "4px", alignItems: "center" }}
                    >
                      <CustomTypography
                        fontWeight={600}
                        fontSize="1rem"
                        fontStyle="normal"
                        lineHeight="0.125rem"
                        maxWidth="375px"
                      >
                        {t("¡Sin tarjeta de crédito!")}
                      </CustomTypography>
                      <Box
                        sx={{
                          fontFamily:
                            "'Noto Color Emoji', sans-serif!important;",
                          marginLeft: "4px",
                        }}
                      >
                        😎
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        width: "375px",
                        padding: "var(--Spacing-Medium, 16px)",
                        alignItems: "flex-start",
                        gap: "8px",
                        borderRadius: "var(--Radius-Small, 4px)",
                        background: "#91D4EC",
                        boxShadow: "0px 0px 10px 0px rgba(0, 103, 238, 0.10)",
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: "20px" }} />
                      <CustomTypography
                        fontWeight={500}
                        fontSize="0.875rem"
                        fontStyle="normal"
                        lineHeight="1.188rem"
                        maxWidth="375px"
                      >
                        {t("Access to most features")}
                      </CustomTypography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        width: "447px",
                        padding: "var(--Spacing-Medium, 16px)",
                        alignItems: "flex-start",
                        gap: "8px",
                        borderRadius: "var(--Radius-Small, 4px)",
                        background: "#91D4EC",
                        boxShadow: "0px 0px 10px 0px rgba(0, 103, 238, 0.10)",
                      }}
                    >
                      <CheckCircleIcon sx={{ fontSize: "24px" }} />
                      <CustomTypography
                        fontWeight={500}
                        fontSize="0.875rem"
                        fontStyle="normal"
                        lineHeight="1.188rem"
                        maxWidth="375px"
                      >
                        {t("Accompaniment at all times by a team of experts")}
                      </CustomTypography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    width: "547px",
                    height: "352.83px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Image
                    src={urlImageSpace}
                    alt="My Image"
                    width={89}
                    height={63}
                  />{" "}
                  <Image
                    src={urlImageWorld}
                    alt="My Image"
                    width={340}
                    height={340}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    alignSelf: "stretch",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: "16px",
                    }}
                  >
                    <CustomTypography
                      fontWeight={500}
                      fontSize="0.875rem"
                      fontStyle="normal"
                      lineHeight="1.188rem"
                      maxWidth="351px"
                    >
                      {t(
                        "Discover why Clientify is the 100% Spanish CRM, leader in Spain and LATAM."
                      )}
                    </CustomTypography>
                    <CustomTypography
                      fontWeight={400}
                      fontSize="0.75rem"
                      fontStyle="normal"
                      lineHeight="1.063rem"
                      maxWidth="351px"
                    >
                      {t("Freepik Images")}
                    </CustomTypography>
                  </Box>
                  <CustomTypography
                    fontWeight={600}
                    fontSize="1rem"
                    fontStyle="normal"
                    lineHeight="1.375rem"
                    maxWidth="351px"
                  >
                    Clientify
                  </CustomTypography>
                </Box>
              </ContainerInfo>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <ContainerForm>
                <Button
                  sx={{
                    position: "absolute",
                    top: "25px",
                    left: "25px",
                    textDecoration: "none",
                    textTransform: "none",
                    display: "flex",
                    padding: "4px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    style={{ marginRight: "4px" }}
                  >
                    <path
                      d="M2.42378 8.02875C2.16343 8.28908 2.16343 8.71121 2.42378 8.97155L6.19502 12.7428C6.45536 13.0031 6.87749 13.0031 7.13782 12.7428C7.39816 12.4825 7.39816 12.0603 7.13782 11.8L4.50466 9.16681H13.3331C13.7013 9.16681 13.9998 8.86835 13.9998 8.50015C13.9998 8.13195 13.7013 7.83348 13.3331 7.83348H4.50466L7.13782 5.20033C7.39816 4.93997 7.39816 4.51787 7.13782 4.25752C6.87749 3.99717 6.45536 3.99717 6.19502 4.25752L2.42378 8.02875Z"
                      fill="#0067EE"
                    />
                  </svg>
                  <CustomTypography
                    fontWeight={500}
                    fontSize="0.875rem"
                    fontStyle="normal"
                    lineHeight="1.188rem"
                    color="#0067EE"
                  >
                    {t("Ir a inicio")}
                  </CustomTypography>
                </Button>
                <FormContainer sx={{ width: "60%" }}>
                  <Box
                    sx={{
                      display: "inline-flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "var(--Spacing-Large, 24px)",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <CustomTypography
                        fontWeight={600}
                        fontSize="2rem"
                        fontStyle="normal"
                        lineHeight="2.75rem"
                        maxWidth="375px"
                        color="black"
                      >
                        {t("Create account")}
                      </CustomTypography>
                      <CustomTypography
                        fontWeight={400}
                        fontSize="1rem"
                        fontStyle="normal"
                        lineHeight="1.375rem"
                        color="#525252"
                        textAlign="center"
                      >
                        {t("Just give us your name and email to get started.")}
                      </CustomTypography>
                    </Box>
                    <Box>
                      <FormControl variant="standard" fullWidth>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            alignSelf: "stretch",
                          }}
                        >
                          <CustomTypography
                            fontWeight={600}
                            fontSize="0.625rem"
                            fontStyle="normal"
                            lineHeight="0.875rem"
                            color="#525252"
                            textTransform="uppercase"
                          >
                            {t("Name")}
                          </CustomTypography>
                          <CustomTypography
                            fontWeight={600}
                            fontSize="0.625rem"
                            fontStyle="normal"
                            lineHeight="0.875rem"
                            textTransform="uppercase"
                            color="#DA1E28"
                          >
                            {t("*")}
                          </CustomTypography>
                        </Box>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="name"
                          name="name"
                          autoComplete="name"
                          autoFocus
                          value={formData.name}
                          onChange={handleChange}
                          sx={{ marginTop: "4px" }}
                        />
                      </FormControl>

                      <FormControl variant="standard" fullWidth>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            alignSelf: "stretch",
                          }}
                        >
                          <CustomTypography
                            fontWeight={600}
                            fontSize="0.625rem"
                            fontStyle="normal"
                            lineHeight="0.875rem"
                            color="#525252"
                            textTransform="uppercase"
                          >
                            {t("Account name (optional)")}
                          </CustomTypography>
                        </Box>
                        <TextField
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          id="accountName"
                          name="accountName"
                          autoComplete="name"
                          autoFocus
                          value={formData.accountName}
                          onChange={handleChange}
                          sx={{ marginTop: "4px" }}
                        />
                      </FormControl>

                      <FormControl variant="standard" fullWidth>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            alignSelf: "stretch",
                          }}
                        >
                          <CustomTypography
                            fontWeight={600}
                            fontSize="0.625rem"
                            fontStyle="normal"
                            lineHeight="0.875rem"
                            color="#525252"
                            textTransform="uppercase"
                          >
                            {t("Email")}
                          </CustomTypography>
                          <CustomTypography
                            fontWeight={600}
                            fontSize="0.625rem"
                            fontStyle="normal"
                            lineHeight="0.875rem"
                            textTransform="uppercase"
                            color="#DA1E28"
                          >
                            {t("*")}
                          </CustomTypography>
                        </Box>
                        <TextField
                          error={!!emailError} // El error se muestra solo si hay un mensaje de error no vacío
                          helperText={emailError}
                          variant="outlined"
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          value={formData.email}
                          onChange={handleChange}
                          sx={{ marginTop: "4px" }}
                          InputProps={{
                            endAdornment: emailError ? (
                              <IconButton
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toast.error("Ya este correo existe.", {
                                    position: "top-right",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                    transition: Bounce,
                                  });
                                }}
                                aria-label="error"
                              >
                                <ErrorIcon sx={{ color: "#F83D44" }} />
                              </IconButton>
                            ) : null,
                          }}
                        />
                        {emailError && (
                          <>
                            <CustomTypography
                              fontWeight={500}
                              fontSize="0.625rem"
                              fontStyle="normal"
                              lineHeight="0.875rem"
                              maxWidth="300px"
                              color="#8D8D8D"
                              textAlign="left"
                            >
                              {t("Ya este correo existe")}
                            </CustomTypography>
                          </>
                        )}
                      </FormControl>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        color: "black",
                      }}
                    >
                      <label
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          width: "100%",
                        }}
                      >
                        <Checkbox
                          value="acceptTerms"
                          color="primary"
                          sx={{ padding: "0", marginRight: "8px" }}
                        />
                        <CustomTypography
                          fontWeight={400}
                          fontSize="0.875rem"
                          fontStyle="normal"
                          lineHeight="1.188rem"
                          color="#525252"
                        >
                          Acepto los
                        </CustomTypography>
                        <CustomTypography
                          fontWeight={400}
                          fontSize="0.875rem"
                          fontStyle="normal"
                          lineHeight="1.188rem"
                          color="#2B8EF9"
                        >
                          &nbsp;términos y condiciones
                        </CustomTypography>
                      </label>
                    </Box>
                    <SubmitButton
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      <CustomTypography
                        fontWeight={500}
                        fontSize="1.125rem"
                        fontStyle="normal"
                        lineHeight="1.563rem"
                        textTransform="none"
                      >
                        {t("I want the free trial")}
                      </CustomTypography>
                    </SubmitButton>

                    <Box
                      display="flex"
                      alignItems="center"
                      width="100%"
                      gap="4px"
                    >
                      <Box flex={1}>
                        <Divider />
                      </Box>
                      <CustomTypography
                        fontWeight={400}
                        fontSize="14px"
                        fontStyle="normal"
                        lineHeight="19px"
                        color="#525252"
                      >
                        o
                      </CustomTypography>
                      <Box flex={1}>
                        <Divider />
                      </Box>
                    </Box>

                    <GoogleButton
                      fullWidth
                      variant="outlined"
                      onClick={() => login()}
                    >
                      <Image
                        src={urlGoogleIcon}
                        alt="My Image"
                        width={24}
                        height={24}
                        style={{ position: "absolute", left: 25 }}
                      />
                      <CustomTypography
                        fontWeight={400}
                        fontSize="1rem"
                        fontStyle="normal"
                        lineHeight="1.375rem"
                        color="#525252"
                        textAlign="center"
                      >
                        {t("Sign up using Google")}
                      </CustomTypography>
                    </GoogleButton>
                    <Link href="/login" sx={{ textDecoration: "none" }}>
                      <CustomTypography
                        fontWeight={500}
                        fontSize="0.875rem"
                        fontStyle="normal"
                        lineHeight="1.188rem"
                        color="#0067EE"
                        textAlign="center"
                      >
                        {t("I already have an account")}
                      </CustomTypography>
                    </Link>
                  </Box>
                </FormContainer>
                <Button
                  sx={{
                    position: "absolute",
                    bottom: "25px",
                    right: "25px",
                    textDecoration: "none",
                    textTransform: "none",
                    display: "flex", // Aplica display flex
                    padding: "4px", // Asume que var(--Spacing-XSmall) es 4px
                    alignItems: "center", // Alinea los ítems al centro verticalmente
                    justifyContent: "center", // Centra el contenido horizontalmente
                    gap: "4px", // Asume que var(--Spacing-XSmall) es 4px
                  }}
                >
                  <svg
                    width="74"
                    height="74"
                    viewBox="0 0 74 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_3631_54494)">
                      <path
                        d="M10 22C10 15.3726 15.3726 10 22 10H52C58.6274 10 64 15.3726 64 22V62C64 63.1046 63.1046 64 62 64H22C15.3726 64 10 58.6274 10 52V22Z"
                        fill="#0067EE"
                      />
                      <path
                        d="M35.2461 19.0371C36.7894 19.1844 39.2534 19.7262 41.8665 20.3872V28.3596C40.1584 28.0791 38.7203 27.8687 38.0082 27.8091C35.3303 27.5864 29.4516 29.7377 29.6761 37.0001C29.9006 44.2625 36.0721 45.7282 36.9981 45.7282C37.3225 45.7282 39.3534 45.4793 41.8753 45.1514V53.2413C40.4601 53.6517 39.0693 54.0794 37.7803 54.5038C31.5368 56.5885 21.4948 52.3454 20.9143 37.1789C20.3338 22.0125 30.5635 18.5917 35.2461 19.0371Z"
                        fill="white"
                      />
                      <path
                        d="M53.0961 23.5713V30.3375C53.0961 30.3375 48.6222 29.5081 44.4658 28.7963V21.0815C48.9414 22.2773 53.0961 23.5713 53.0961 23.5713Z"
                        fill="white"
                      />
                      <path
                        d="M44.4658 44.8112C48.6836 44.252 53.0961 43.6488 53.0961 43.6488V50.3413C53.0961 50.3413 49.0273 51.2706 44.4658 52.5172V44.8112Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter x="0" y="0" width="74" height="74">
                        <feFlood result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0.403922 0 0 0 0 0.933333 0 0 0 0.5 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_3631_54494"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_3631_54494"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </Button>
              </ContainerForm>
            </Grid>
          </Grid>
        </ContainerLogin>
      )}
      {loading && (
        <>
          <Loading />
        </>
      )}
    </>
  );
};

export default SignUp;
