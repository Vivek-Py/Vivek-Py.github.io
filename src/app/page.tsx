import Image from "next/image";
import { Box, Grid } from "@radix-ui/themes";
import Intro from "./widgets/intro";
import Details from "./widgets/details";

export default function Home() {
  return (
    <main className="container max-w-5xl">
      <Grid
        className="my-20 mx-5 lg:mx-10 xl:mx-0 md:mx-10 sm:mx-5"
        columns={{
          initial: "1",
          xs: "1",
          sm: "1",
          md: "2",
        }}
        gap="5"
        width="auto"
      >
        <Box>
          <Intro />
        </Box>
        <Box>
          <Details />
        </Box>
      </Grid>
    </main>
  );
}
