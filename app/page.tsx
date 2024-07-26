import {
  Title,
  Container,
  Categories,
  SortPopup,
  TopBar,
  Filters
} from "@/components/shared";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Чизбургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://dostavka-est.ru/wp-content/uploads/2021/01/common-4764.jpeg",
                    items: [{ price: 550 }]
                  }
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
