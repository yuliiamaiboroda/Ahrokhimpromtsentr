'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import SmallCotainer from '../SmallContainer';

enum VacancyCategories {
  actual = 'actual-vacancies',
  irrelevant = 'irrelevant-vacancies',
}

interface IVacancy {
  _id: string;
  category: string;
  title: string;
  description: string;
  sallary: string;
  education: string;
  contactMail: string;
  contactPhone: string;
  workExperienceRequired: string;
  location: string;
}

interface IProps {
  vacancies: IVacancy[];
}

export default function VacanciesCatalogue({ vacancies }: IProps) {
  const [filterParams, setFilterParams] =
    useState<VacancyCategories.actual | null>(VacancyCategories.actual);

  const visibleVacancies = useMemo(() => {
    return filterParams
      ? vacancies.filter(({ category }) => category === filterParams)
      : vacancies;
  }, [vacancies, filterParams]);

  return (
    <div className="mx-auto w-10/12">
      <div className="flex justify-between">
        <Button
          type="button"
          variant={filterParams ? 'secondary' : 'primary'}
          title="Всі вакансії"
          onClick={() => {
            setFilterParams(null);
          }}
        />
        <Button
          type="button"
          variant={filterParams ? 'primary' : 'secondary'}
          title="Актуальні вакансії"
          onClick={() => {
            setFilterParams(VacancyCategories.actual);
          }}
        />
      </div>
      <ul className="mt-9 md:mt-16">
        {visibleVacancies.length ? (
          visibleVacancies.map(({ _id, title }) => (
            <li
              key={_id}
              className="flex justify-between gap-1 font-body text-base md:text-xl
                        xl:text-2xl [&:not(:first-child)]:mt-6 [&:not(:first-child)]:md:mt-8"
            >
              <p
                className="relative max-w-[60%] truncate font-semibold before:absolute
                        before:bottom-0 before:left-0 before:h-0.5 before:w-full
                        before:bg-underline-gradient"
              >
                {title}
              </p>
              <Link
                href="/vacancies"
                className="relative font-bold before:absolute
                        before:bottom-0 before:left-0 before:h-0.5 before:w-full
                        before:bg-underline-gradient"
              >
                Детальніше
              </Link>
            </li>
          ))
        ) : (
          <SmallCotainer>
            <p className="mt-9 text-center font-body font-bold md:mt-12 md:text-2xl xl:mt-16 xl:text-3xl">
              На даний момент відкритих вакансій нема
            </p>
          </SmallCotainer>
        )}
      </ul>
    </div>
  );
}