import { cn } from "@/lib/utils";
import { FC } from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

const Filters: FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки " value="2" />
      </div>

      {/* Фильтр цен*/}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            // value={String(filters.prices.priceFrom)}
            // onChange={(e) =>
            //   filters.setPrices("priceFrom", Number(e.target.value))
            // }
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            // value={String(filters.prices.priceTo)}
            // onChange={(e) =>
            //   filters.setPrices("priceTo", Number(e.target.value))
            // }
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          //   value={[
          //     filters.prices.priceFrom || 0,
          //     filters.prices.priceTo || 1000
          //   ]}
          //   onValueChange={updatePrices}
        />
      </div>

      {/* Фильтр ингредиентов*/}
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Красный лук", value: "4" },
          { text: "Томаты", value: "5" }
        ]}
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Красный лук", value: "4" },
          { text: "Томаты", value: "5" }
        ]}
      />
    </div>
  );
};

export { Filters };
