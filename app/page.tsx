import {
  Title,
  Container,
  Categories,
  SortPopup,
  TopBar
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <div style={{ height: "1000px" }}></div>
    </>
  );
}
