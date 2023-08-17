import contactsBackground from '../../../public/images/bg-contacts-screen.jpg';
import HeroSection from '@/components/HeroSection';
import FeedbackForm from '@/components/FeedbackForm';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import SectionTitle from '@/components/SectionTitle';
import Description from '@/components/Description';
import Contacts from '@/components/Contacts';
import SmallCotainer from '@/components/SmallContainer';
import LocationMap from '@/components/LocationMap';
import BackgroundImage from '@/components/BackgroundImage';
import bushLeft from '../../../public/images/left-bottom-image@3x.png';

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <HeroSection
        src={contactsBackground}
        alt="Колоски зернової культури на світанку"
      />
      <Section>
        <Container>
          <SectionTitle title="Контакти" />
          <SmallCotainer>
            <Description description="Покровська площа, 13, Суми, Сумська область, 40030" />
          </SmallCotainer>
          <Contacts phone="+380542225196" email="30452338@ukr.net" />
          <LocationMap />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionTitle title="Відгукнутися" />
          <SmallCotainer>
            <Description description="Вкажіть свої контактні дані і ми надамо зворотній зв’язок" />
          </SmallCotainer>
          <FeedbackForm />
        </Container>
      </Section>
      <div
        className="absolute -bottom-[86px] -left-[118px] -z-10 h-[400px] w-[240px] 
                  md:-bottom-[179px] md:-left-[200px] md:h-[712px] md:w-[420px] 
                  xl:-bottom-[189px] xl:-left-[209px] xl:h-[825px] xl:w-[487px]"
      >
        <BackgroundImage src={bushLeft} alt="Цвіт кукурудзи" />
      </div>
      <div
        className="absolute -bottom-[86px] -right-[118px] -z-10 h-[400px] w-[240px] -scale-x-100
                  md:-bottom-[179px] md:-right-[200px] md:h-[712px] md:w-[420px] 
                  xl:-bottom-[189px] xl:-right-[209px] xl:h-[825px] xl:w-[487px]"
      >
        <BackgroundImage src={bushLeft} alt="Цвіт кукурудзи" />
      </div>
    </main>
  );
}
