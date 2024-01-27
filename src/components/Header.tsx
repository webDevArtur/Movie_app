import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import NTYnLQfeNN4 from "../assets/NTYnLQfeNN4.jpg";

function Header() {
  const menuList = ["Главная", "О нас", "Сохраненные фильмы"];
  return (
    <Box
      style={{
        background: "хз",
        display:'grid',
        gridTemplateColumns:'repeat(2, 1fr)'

      }}
    >
      <Box
        style={{
          backgroundImage: `url(${NTYnLQfeNN4})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          height: "100px",
          borderRadius: "40px",
        }}
      ></Box>
      <Box
        style={{
          display: "grid",
          gap: "10px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {menuList.map((el, index) => (
          <Button
            key={index}
            style={{
              color: "black",
              fontSize: "16px",
            }}
            variant="text"
          >
            {el}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default Header;
