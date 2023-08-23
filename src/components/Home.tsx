import { useCookies } from "react-cookie";

export const Home = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["FED22D", "WIE23S"]);

  const handleClick = () => {
    const d = new Date();
    d.setTime(d.getTime() + 10 * 24 * 60 * 60 * 1000);
    // const expires = "expires=" + d.toUTCString();

    setCookie("FED22D", "The best, most awesome class ever", {
      expires: d,
    });
  };

  const deleteCookie = () => {
    removeCookie("FED22D");
  };

  return (
    <>
      <h3>Hem</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        doloremque laudantium nisi minus ab at quis, fugiat voluptate corrupti
        odio eligendi! Ipsa, delectus non excepturi labore qui reprehenderit
        nulla eum.
      </p>
      <button onClick={handleClick}>Spara cookie</button>
      <button onClick={deleteCookie}>Ta bort cookie</button>
    </>
  );
};
