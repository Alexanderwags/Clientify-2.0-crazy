"use client"; // This is a client component 👈🏽
import React, { useState } from "react";
import urlDashboard from "@clientify/assets/dashboard/dashboard.png";
import styled from "@emotion/styled";
import { Box, Button, Link, TextField, useTheme } from "@mui/material";
import Image from "next/image";
import { useTranslation } from "@clientify/hooks/useTranslation";
import CustomTypography from "../../components/CustomTypography/CustomTypography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Arrow from "../../components/arrows/Arrow";
import CustomizedProgressBars from "../../components/CustomizedProgressBars/CustomizedProgressBars";
import CountrySelect from "../../components/autocomplete/CountrySelect/CountrySelect";
import RadioOptionGroup, {
  Option,
} from "../../components/radioOption/RadioOptionGroup";
import VerificationInput from "react-verification-input";
import urlWhatsapp from "@clientify/assets/login/whatsapp.png";
import urlGoogle from "@clientify/assets/login/google 1.svg";

const ContainerFreeTrial = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  paddingTop: "139px",
}));

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

export default function FreeTrialForm() {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [importOption, setImportOption] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [codeVerification, setCodeVerification] = useState(false);

  const handlePhone = (event: any) => {
    event.preventDefault();
    setPhone(event.target.value);
  };

  const welcome = () => {
    return (
      <>
        <CheckCircleOutlineIcon
          sx={{ fontSize: "60px", color: theme.palette.primary.main }}
        />
        <CustomTypography
          fontWeight={600}
          fontSize="1.5rem"
          fontStyle="normal"
          lineHeight="2.063rem"
          maxWidth="375px"
          color="#262626"
        >
          {t("¡Enhorabuena Alyssa!")}
        </CustomTypography>
        <CustomTypography
          fontWeight={500}
          fontSize="1rem"
          fontStyle="normal"
          lineHeight="1.375rem"
          maxWidth="519px"
          color="#8D8D8D"
          textAlign="center"
        >
          {t(
            " Vamos a configurar algunos datos para que disfrutes de una experiencia personalizada."
          )}
        </CustomTypography>
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => setStep(1)}
        >
          <Arrow />
          <CustomTypography
            fontWeight={500}
            fontSize="1.125rem"
            fontStyle="normal"
            lineHeight="1.563rem"
            textTransform="none"
          >
            {t("Empezar")}
          </CustomTypography>
        </SubmitButton>
      </>
    );
  };

  const step1 = () => {
    const options: Option[] = [
      { title: t("No, ninguna o sólo hojas de cálculo"), value: "none" },
      {
        title: t("Sí, herramientas sueltas como Mailchimp"),
        value: "loose_tools",
      },
      {
        title: t("Sí, herramientas todo en uno como Hubspot"),
        value: "all_in_one_tools",
      },
    ];
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };

    return (
      <>
        <CustomTypography
          fontWeight={500}
          fontSize="1.125rem"
          fontStyle="normal"
          lineHeight="1.563rem"
          maxWidth="519px"
          color="#262626"
        >
          {t("¿Has utilizado soluciones como Clientify?")}
        </CustomTypography>

        <Box sx={{ width: "519px" }}>
          <RadioOptionGroup
            options={options}
            name="solutions-used"
            selectedValue={selectedOption}
            onChange={handleOptionChange}
          />
        </Box>

        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => setStep(2)}
        >
          <Arrow />
          <CustomTypography
            fontWeight={500}
            fontSize="1.125rem"
            fontStyle="normal"
            lineHeight="1.563rem"
            textTransform="none"
          >
            {t("Siguiente")}
          </CustomTypography>
        </SubmitButton>
      </>
    );
  };

  const step2 = () => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignitems: "center",
            gap: "16px",
            alignSelf: "stretch",
          }}
        ></Box>
        <CustomTypography
          fontWeight={500}
          fontSize="1.125rem"
          fontStyle="normal"
          lineHeight="1.563rem"
          maxWidth="356px"
          color="#262626"
        >
          {t("Verifica tu número")}
        </CustomTypography>
        <CustomTypography
          fontWeight={500}
          fontSize="1rem"
          fontStyle="normal"
          lineHeight="1.375rem"
          maxWidth="356px"
          color="#8D8D8D"
          textAlign="center"
        >
          {t(
            "Es obligatorio para desbloquear todas las opciones que te ofrece Clientify."
          )}
        </CustomTypography>
        {!codeVerification && (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Box
              sx={{
                width: "150px",
              }}
            >
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
                  {t("Codigo")}
                </CustomTypography>
              </Box>
              <CountrySelect />
            </Box>

            <Box width={"100%"}>
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
                  {t("Numero")}
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
                value={phone}
                onChange={handlePhone}
                sx={{ margin: "0px" }}
              />
            </Box>
          </Box>
        )}
        {codeVerification && (
          <VerificationInput
            classNames={{
              container: "container",
              character: "character",
              characterInactive: "character--inactive",
              characterSelected: "character--selected",
              characterFilled: "character--filled",
            }}
            placeholder=""
            length={4}
          />
        )}
        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            if (!codeVerification) {
              setCodeVerification(true);
            } else {
              setStep(3);
            }
          }}
        >
          <CustomTypography
            fontWeight={500}
            fontSize="1.125rem"
            fontStyle="normal"
            lineHeight="1.563rem"
            textTransform="none"
          >
            {t(codeVerification ? "Verificar" : "Enviar SMS")}
          </CustomTypography>
        </SubmitButton>
        {codeVerification && (
          <CustomTypography
            fontWeight={400}
            fontSize="0.875rem"
            fontStyle="normal"
            lineHeight="1.188rem"
            maxWidth="356px"
            color="#8D8D8D"
            textAlign="center"
          >
            {t("El código caduca en 60 segundos.")}
          </CustomTypography>
        )}
      </>
    );
  };

  const step3 = () => {
    const options: Option[] = [
      {
        title: t("Importar desde WhatsApp"),
        urlIcon: urlWhatsapp,
        description: t(
          "Vincula tu número de teléfono en WhatsApp y observa la magia."
        ),
        value: "none",
      },
      {
        title: t("Importar desde Google"),
        urlIcon: urlGoogle,
        description: t(
          "Conecta tu cuenta de Google y tus contactos estarán disponibles de inmediato."
        ),
        value: "all_in_one_tools",
      },
    ];

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSelectedOption(event.target.value);
    };

    const handleImportOptionChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setImportOption(event.target.value);
    };

    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignitems: "center",
            gap: "16px",
            alignSelf: "stretch",
          }}
        ></Box>
        <CustomTypography
          fontWeight={500}
          fontSize="1.125rem"
          fontStyle="normal"
          lineHeight="1.563rem"
          maxWidth="356px"
          color="#262626"
        >
          {t("Importa tus primeros contactos.")}
        </CustomTypography>
        <CustomTypography
          fontWeight={400}
          fontSize="0.75rem"
          fontStyle="normal"
          lineHeight="1.063rem"
          maxWidth="356px"
          color="#8D8D8D"
          textAlign="center"
        >
          {t(
            "Si no tienes contactos subidos a Clientify no podrás hacer prácticamente nada. Importa algunos ahora y comienza tu camino a crecer hasta el infinito."
          )}
        </CustomTypography>

        <Box sx={{ width: "450px" }}>
          <RadioOptionGroup
            options={options}
            name="solutions-used"
            selectedValue={importOption}
            onChange={handleImportOptionChange}
          />
        </Box>

        <SubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => {
            setStep(4);
          }}
        >
          <CustomTypography
            fontWeight={500}
            fontSize="1.125rem"
            fontStyle="normal"
            lineHeight="1.563rem"
            textTransform="none"
          >
            {t("Continuar")}
          </CustomTypography>
        </SubmitButton>
        <Link variant="body2" sx={{ textDecoration: "none" }}>
          <CustomTypography
            fontWeight={500}
            fontSize="0.875rem"
            fontStyle="normal"
            lineHeight="1.188rem"
            color="#0067EE"
            textAlign="center"
          >
            {t("Lo haré más tarde")}
          </CustomTypography>
        </Link>
      </>
    );
  };

  const step4 = () => {
    return (
      <>
        {/* <CheckCircleOutlineIcon
          sx={{ fontSize: "60px", color: theme.palette.primary.main }}
        /> */}
        <CustomTypography
          fontWeight={600}
          fontSize="1.5rem"
          fontStyle="normal"
          lineHeight="2.063rem"
          maxWidth="375px"
          color="#262626"
          textAlign="center"
        >
          {t("¡Está hecho!")}
        </CustomTypography>

        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <CustomizedProgressBars valueProgress={100} width="100%" />
          <CheckCircleIcon
            sx={{ fontSize: "24px", color: "#00B94D", paddingLeft: "8px" }}
          />
        </Box>
      </>
    );
  };

  const loadingWhatsapp = () => {
    return (
      <>
        <CustomTypography
          fontWeight={600}
          fontSize="1.5rem"
          fontStyle="normal"
          lineHeight="2.063rem"
          maxWidth="375px"
          color="#262626"
          textAlign="center"
        >
          {t("Cargando contactos desde WhatsApp")}
        </CustomTypography>

        <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
          <CustomizedProgressBars valueProgress={100} width="100%" />
          <CheckCircleIcon
            sx={{ fontSize: "24px", color: "#00B94D", paddingLeft: "8px" }}
          />
        </Box>
      </>
    );
  };

  const loadingGoogle = () => {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 1C13.0523 1 13.5 1.44772 13.5 2V6C13.5 6.55228 13.0523 7 12.5 7C11.9477 7 11.5 6.55228 11.5 6V2C11.5 1.44772 11.9477 1 12.5 1ZM4.72289 4.22289C5.11342 3.83237 5.74658 3.83237 6.13711 4.22289L8.96711 7.05289C9.35763 7.44342 9.35763 8.07658 8.96711 8.46711C8.57658 8.85763 7.94342 8.85763 7.55289 8.46711L4.72289 5.63711C4.33237 5.24658 4.33237 4.61342 4.72289 4.22289ZM20.2771 4.22289C20.6676 4.61342 20.6676 5.24658 20.2771 5.63711L17.4471 8.46711C17.0566 8.85763 16.4234 8.85763 16.0329 8.46711C15.6424 8.07658 15.6424 7.44342 16.0329 7.05289L18.8629 4.22289C19.2534 3.83237 19.8866 3.83237 20.2771 4.22289ZM1.5 12C1.5 11.4477 1.94772 11 2.5 11H6.5C7.05228 11 7.5 11.4477 7.5 12C7.5 12.5523 7.05228 13 6.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12ZM17.5 12C17.5 11.4477 17.9477 11 18.5 11H22.5C23.0523 11 23.5 11.4477 23.5 12C23.5 12.5523 23.0523 13 22.5 13H18.5C17.9477 13 17.5 12.5523 17.5 12ZM8.96711 15.5329C9.35763 15.9234 9.35763 16.5566 8.96711 16.9471L6.13711 19.7771C5.74658 20.1676 5.11342 20.1676 4.72289 19.7771C4.33237 19.3866 4.33237 18.7534 4.72289 18.3629L7.55289 15.5329C7.94342 15.1424 8.57658 15.1424 8.96711 15.5329ZM16.0329 15.5329C16.4234 15.1424 17.0566 15.1424 17.4471 15.5329L20.2771 18.3629C20.6676 18.7534 20.6676 19.3866 20.2771 19.7771C19.8866 20.1676 19.2534 20.1676 18.8629 19.7771L16.0329 16.9471C15.6424 16.5566 15.6424 15.9234 16.0329 15.5329ZM12.5 17C13.0523 17 13.5 17.4477 13.5 18V22C13.5 22.5523 13.0523 23 12.5 23C11.9477 23 11.5 22.5523 11.5 22V18C11.5 17.4477 11.9477 17 12.5 17Z"
            fill="#525252"
          />
        </svg>
        <CustomTypography
          fontWeight={600}
          fontSize="1.5rem"
          fontStyle="normal"
          lineHeight="2.063rem"
          maxWidth="375px"
          color="#262626"
          textAlign="center"
        >
          {t("Sincronizando contactos desde Google")}
        </CustomTypography>
      </>
    );
  };

  return (
    <ContainerFreeTrial theme={theme}>
      <Image
        src={urlDashboard}
        alt="My Image"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100vh",
          filter: "blur(8px)",
          zIndex: "-1",
        }}
      />
      <Box
        sx={{
          display: "inline-flex",
          padding: "var(--Spacing-XLarge, 32px)",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "var(--Spacing-Large, 24px)",
          borderRadius: "var(--Radius-Regular, 8px)",
          background: "#FFF",
          boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)",
          height: "max-content",
          minWidth: "519px",
        }}
      >
        {step >= 1 && (
          <>
            {step != 4 && (
              <Box
                sx={{
                  width: "146px",
                  display: "flex",
                  gap: "8px",
                  height: "10px",
                }}
              >
                <CustomizedProgressBars valueProgress={100} />
                <CustomizedProgressBars valueProgress={step >= 2 ? 100 : 0} />
                <CustomizedProgressBars valueProgress={step >= 3 ? 100 : 0} />
                <CustomizedProgressBars valueProgress={step >= 4 ? 100 : 0} />
              </Box>
            )}
            {step === 1 && step1()}
            {step === 2 && <>{step2()}</>}
            {step === 3 && <>{step3()}</>}
            {step === 4 && <>{step4()}</>}
          </>
        )}
        {step === 0 && <>{welcome()}</>}
      </Box>
    </ContainerFreeTrial>
  );
}
