import React, { useEffect, useState } from 'react';
import {
  FilterContainer,
  FilterHeader,
  FilterSection,
  FilterTitle,
  FilterList,
} from './index.styled';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';
import { Button } from '../../../../components/button';
import FilterItem from '../../../../components/filter-item';
import { useAppDispatch, useAppSelector } from '../../../../redux/store/store';
import { fetchAuthors } from '../../../../redux/reducer/modules/list-authors/list-authors.reducer';
import { fetchCategories } from '../../../../redux/reducer/modules/list-categories/list-authors.reducer';

const FilterComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { authors } = useAppSelector((state) => state.authors);
  const { categories } = useAppSelector((state) => state.categories);

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <FilterContainer>
      <FilterHeader>
        <IconAdjustmentsHorizontal stroke={1} />
        <h2>Filters</h2>
      </FilterHeader>

      <FilterSection>
        <FilterTitle>Category</FilterTitle>
        <FilterList>
          {categories.map((filter) => (
            <FilterItem
              key={filter.id}
              text={filter.name}
              isSelected={selectedFilters.includes(filter.name)}
              onClick={() => toggleFilter(filter.name)}
            />
          ))}
        </FilterList>
      </FilterSection>

      <FilterSection>
        <FilterTitle>Author</FilterTitle>
        <FilterList>
          {authors.map((filter) => (
            <FilterItem
              key={filter.id}
              text={filter.name}
              isSelected={selectedFilters.includes(filter.name)}
              onClick={() => toggleFilter(filter.name)}
            />
          ))}
        </FilterList>
      </FilterSection>

      <Button variant="primary">Apply Filters</Button>
    </FilterContainer>
  );
};

export default FilterComponent;
