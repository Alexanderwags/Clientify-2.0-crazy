"use client"; // This is a client component 👈🏽
import { Box, Button, FormControl, Grid, Link, useTheme } from "@mui/material";
import React, { useState } from "react";
import CustomTypography from "../components/CustomTypography/CustomTypography";
import { useTranslation } from "@clientify/hooks/useTranslation";
import DropdownLabel from "../components/dropdownLabel/DropdownLabel";
import RadioOptionGroup, {
  Option,
} from "@clientify/app/components/radioOption/RadioOptionGroup";
import RadioOptionGroup2 from "../components/radioOption/RadioOptionGroup2";
import { CardImage, CardProperties } from "../components/cardImage/CardImage";
import urlStep1 from "@clientify/assets/onBoarding/libros.png";
import urlStep2 from "@clientify/assets/onBoarding/vista-edificio.png";
import urlStep3 from "@clientify/assets/onBoarding/vista-previa.png";
import FooterOnBoarding from "./FooterOnBoarding";
import FooterSteps from "./FooterSteps";
import UniversityAutocomplete from "../components/autocomplete/UniversityAutocomplete/UniversityAutocomplete";
import CurrencyAutoComplete from "../components/autocomplete/currencyAutoComplete/CurrencyAutoComplete";
import LoadingDashboard from "../components/loading/LoadingDashboard";
import HeaderOnBoarding from "./HeaderOnBoarding";

export const UserOnboarding = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [next, setNext] = useState(0);
  const [digitalAdvertising, setDigitalAdvertising] = useState("");
  const theme = useTheme();

  const [formData, setFormData] = useState({
    nameCompany: "",
    cantInCompany: "",
    roleCompany: "",
  });

  const handleCompanyChange = (event: any, value: any) => {
    // Actualiza el estado con el nuevo valor.
    setFormData({
      ...formData,
      nameCompany: value ? value.label : "",
    });
  };
  const handleCompanyRoleChange = (event: any, value: any) => {
    setFormData({
      ...formData,
      roleCompany: value ? value.label : "",
    });
  };

  const welcome = () => {
    const listStepData: CardProperties[] = [
      {
        title: "Soy una empresa o profesional",
        description:
          "Y me gustaría aumentar mis ventas y mejorar mis procesos internos.",
        image: urlStep3,
      },
      {
        title: "Soy un negocio",
        description:
          "Y me gustaría ser vuestro partner para implementar estrategias de marketing y ventas en otros negocios.",
        image: urlStep2,
      },
      {
        title: "Soy un negocio",
        description:
          "Y deseo poner en práctica mi formación académica en marketing digital y automatizaciones.",
        image: urlStep1,
      },
    ];
    return (
      <>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "flex-start",
            gap: "var(--Spacing-Large, 24px)", // Espaciado con una variable CSS, con un valor de respaldo,
            marginBottom: "56px",
          }}
        >
          <CustomTypography
            fontWeight={600}
            fontSize="2rem"
            fontStyle="normal"
            lineHeight="2.75rem"
            color="#262626"
            maxWidth="100%"
          >
            {t(
              "Porque no es lo mismo una inmobiliaria de Miami, una cadena de restaurantes en Bogotá o una jamonería online de Guijuelo"
            )}
          </CustomTypography>
          <CustomTypography
            fontWeight={500}
            fontSize="1.5rem"
            fontStyle="normal"
            lineHeight="2.063rem"
            color="#525252"
            textAlign="left"
            maxWidth="100%"
          >
            {t("¿Cuál es tu tipo de negocio?")}
          </CustomTypography>
        </Box>

        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            justifyContent: "center",
          }}
        >
          {listStepData.map((l, i) => {
            return (
              <Grid
                key={i}
                item
                xs={12}
                sm={12}
                md={12}
                lg={4}
                xl={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  onClickCapture={() => setStep(i + 1)}
                  sx={{
                    cursor: "pointer",
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <CardImage cardInformation={l} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  };

  const step1 = () => {
    const listCompanies = [
      { label: "Educación" },
      { label: "Inmobiliaria / Real Estate" },
      { label: "Fábricas / Manufactura de industrias" },
    ];

    const listRolesCompanies = [{ label: "Propietario / Fundador / CEO" }];

    const options: Option[] = [
      { title: t("De 1 a 10"), value: "none" },
      {
        title: t("Más de 10"),
        value: "loose_tools",
      },
      {
        title: t("Más de 20"),
        value: "all_in_one_tools",
      },
    ];

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        cantInCompany: event.target.value,
      });
    };

    return (
      <>
        <CustomTypography
          fontWeight={600}
          fontSize="1.5rem"
          fontStyle="normal"
          lineHeight="2.063rem"
          color="#262626"
          maxWidth="519px"
          textAlign="center"
        >
          {t("Sólo necesitamos algunos datos para personalizar tu cuenta.")}
        </CustomTypography>

        <Box
          sx={{
            display: "flex",
            padding: "var(--Spacing-XLarge, 32px)",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            borderRadius: "var(--Radius-Small, 4px)",
            background: "var(--Surface-Modal, #FFF)",
            width: "100%",
          }}
        >
          {step === 3 && <UniversityAutocomplete />}
          {(step === 1 || step === 2) && (
            <DropdownLabel
              label="¿En qué industria te desenvuelves?"
              options={listCompanies}
              selectedValue={formData.nameCompany}
              onChange={handleCompanyChange}
              width="100%"
            />
          )}

          {step === 1 && (
            <FormControl variant="standard" fullWidth>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flexStart",
                  gap: "17px",
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
                  {t("¿Cuántas personas trabajan en tu empresa?")}
                </CustomTypography>
                <RadioOptionGroup2
                  options={options}
                  name="solutions-used"
                  selectedValue={formData.cantInCompany}
                  onChange={handleOptionChange}
                />
              </Box>
            </FormControl>
          )}

          {(step === 1 || step === 2) && (
            <DropdownLabel
              label="¿Cuál es tu rol en la empresa?"
              options={listRolesCompanies}
              selectedValue={formData.roleCompany}
              onChange={handleCompanyRoleChange}
              width="100%"
            />
          )}
        </Box>
      </>
    );
  };

  const step2 = () => {
    const options: Option[] = [
      {
        title: t("Sí"),
        value: "loose_tools",
      },
      {
        title: t("Aún no"),
        value: "all_in_one_tools",
      },
    ];

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDigitalAdvertising(event.target.value);
    };

    return (
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "56px",
        }}
      >
        <CustomTypography
          fontWeight={600}
          fontSize="1.5rem"
          fontStyle="normal"
          lineHeight="2.063rem"
          color="#262626"
          maxWidth="519px"
          textAlign="center"
        >
          {t("¿Inviertes en publicidad digital?")}
        </CustomTypography>

        <Box sx={{ width: "450px" }}>
          <RadioOptionGroup
            options={options}
            name="solutions-used"
            selectedValue={digitalAdvertising}
            onChange={handleOptionChange}
            backgroundColor="white"
          />
        </Box>
      </Box>
    );
  };

  const step3 = () => {
    return (
      <Box
        sx={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "56px",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "16px",
          }}
        >
          <Box
            sx={{
              display: "inline-flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <Box>
              <CustomTypography
                fontWeight={600}
                fontSize="1.5rem"
                fontStyle="normal"
                lineHeight="2.063rem"
                color="#262626"
                maxWidth="459px"
                textAlign="left"
              >
                {t("¿En qué moneda vas a trabajar?")}
              </CustomTypography>
            </Box>

            <Box>
              <CustomTypography
                fontWeight={500}
                fontSize="1.125rem"
                fontStyle="normal"
                lineHeight="1.563rem"
                color="#525252"
                maxWidth="459px"
                textAlign="left"
              >
                {t(
                  "Piénsalo bien, la moneda que elijas será la que aparezca en tus operaciones con Clientify y es un paso que no puede cambiarse más adelante."
                )}
              </CustomTypography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              width: "459px",
              padding: "var(--Spacing-Large, 24px)",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              borderRadius: "var(--Radius-Small, 4px)",
              background: "var(--card-frame-default, #FFF)",
            }}
          >
            <CurrencyAutoComplete />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <>
      {next <= 2 ? (
        <>
          <HeaderOnBoarding step={step} next={next} />
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              padding: "123px 135px",
              width: "100%",
              minHeight:
                step === 0 ? "calc(100% - 121px)" : "calc(100% - 144px)",
              height: "max-content",
              margin: 0,
              background: "var(--Surface-Background, #F4F4F4)",
              justifyContent: "center",
              [theme.breakpoints.between(0, 600)]: {
                padding: "8px 16px",
              },
            }}
          >
            {step > 0 && (
              <>
                <Button
                  sx={{
                    position: "absolute",
                    top: "81px",
                    left: "32px",
                    textDecoration: "none",
                    textTransform: "none",
                    display: "flex",
                    padding: "4px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                  onClickCapture={(event: any) => {
                    event.preventDefault();
                    const newNext = next - 1;

                    if (newNext < 0) {
                      setNext(0);
                      setStep(0);
                    } else {
                      setNext(newNext);
                    }
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
                    {t("Ir atrás")}
                  </CustomTypography>
                </Button>
              </>
            )}
            {step > 0 && next === 0 && (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "var(--Spacing-Large, 24px)",
                }}
              >
                {<>{step1()}</>}
              </Grid>
            )}
            {step === 0 && next === 0 && (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={10}
                xl={10}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {welcome()}
              </Grid>
            )}
            {next === 1 && step === 1 && (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={10}
                xl={10}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {step2()}
              </Grid>
            )}
            {(next === 2 || (next == 1 && step != 1)) && (
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={10}
                xl={10}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {step3()}
              </Grid>
            )}
          </Grid>
          {step === 0 ? (
            <FooterOnBoarding />
          ) : (
            <FooterSteps
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (step != 1 && next === 1) {
                  console.log("hello");
                  setNext(3);
                } else {
                  setNext((value) => (value += 1));
                }
              }}
            />
          )}
        </>
      ) : (
        <LoadingDashboard />
      )}
    </>
  );
};
