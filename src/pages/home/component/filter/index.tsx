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
  //   const { authors, loading, error } = useAppSelector((state) => state.authors);
  const mockAuthors = [
    { id: '1', name: 'Emily Davis' },
    { id: '2', name: 'John Smith' },
    { id: '3', name: 'Alice Johnson' },
    { id: '4', name: 'Michael Brown' },
    { id: '5', name: 'Sophia Martinez' },
    { id: '6', name: 'William Garcia' },
    { id: '7', name: 'Olivia Wilson' },
    { id: '8', name: 'James Anderson' },
    { id: '9', name: 'Isabella Thomas' },
    { id: '10', name: 'Liam Robinson' },
  ];
  //   const { categories } = useAppSelector((state) => state.categories);
  const mockCategories = [
    { id: '1', name: 'Technology' },
    { id: '2', name: 'Science' },
    { id: '3', name: 'Health' },
    { id: '4', name: 'Travel' },
    { id: '5', name: 'Food' },
    { id: '6', name: 'Lifestyle' },
    { id: '7', name: 'Education' },
    { id: '8', name: 'Business' },
    { id: '9', name: 'Entertainment' },
    { id: '10', name: 'Sports' },
  ];

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

  const filters = ['Category 1', 'Category 2', 'Category 3', 'Category 4'];

  //   if (loading) {
  //     return <p>Loading authors...</p>;
  //   }

  //   if (error) {
  //     return <p>Error: {error}</p>;
  //   }
  return (
    <FilterContainer>
      <FilterHeader>
        <IconAdjustmentsHorizontal stroke={1} />
        <h2>Filters</h2>
      </FilterHeader>

      <FilterSection>
        <FilterTitle>Category</FilterTitle>
        <FilterList>
          {mockCategories.map((filter) => (
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
          {mockAuthors.map((filter) => (
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
