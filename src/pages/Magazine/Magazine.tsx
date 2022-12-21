import { MusicalNoteIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { BackwardIcon, ForwardIcon, PlayIcon } from '@heroicons/react/24/solid';
import { twMerge as tw } from 'tailwind-merge';
import { ContentsWrap } from '../../components/ContentsWrap';
import { Frame } from '../../components/Frame';
import { Icon } from '../../components/Icon';
import { IconButton } from '../../components/IconButton';
import { InfoCard } from '../../components/InfoCard';
import { Logo } from '../../components/Logo';
import { Main } from '../../components/Main';
import { NavItem } from '../../components/NavItem';
import { NavList } from '../../components/NavList';
import { PlayBar } from '../../components/PlayBar';
import { PlayNav } from '../../components/PlayNav';
import { SideNav } from '../../components/SideNav';
import { SongItem } from '../../components/SongItem';

type MagazineProps<T extends React.ElementType> = Component<T>;

export function Magazine({
  children,
  className,
  ...restProps
}: MagazineProps<'div'>) {
  return (
    <div className={tw('relative h-screen w-screen', className)} {...restProps}>
      <div className="flex pb-[180px]">
        <SideNav className="fixed left-0 top-0 h-full overflow-y-auto pb-[100px]">
          <Logo className="w-[250px]">
            <Logo.Title className="text-base">IAM(In All Musical)</Logo.Title>
            <Logo.SubTitle className="mb-10 text-sm">
              뮤지컬 통합 스트리밍 서비스
            </Logo.SubTitle>
          </Logo>
          <NavList>
            <NavItem>로그인</NavItem>
          </NavList>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>음원(넘버)</NavItem>
            <NavItem>영상</NavItem>
            <NavItem>공연정보</NavItem>
            <NavItem>매거진</NavItem>
          </NavList>
          <NavList>
            <NavItem>IAM 멤버쉽</NavItem>
            <NavItem>문의하기</NavItem>
          </NavList>
        </SideNav>
        <Main className="ml-[450px]">
          <ContentsWrap>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
            <InfoCard className="w-[calc((100%-40px)/3)]">
              <Frame className="h-[380px]" />
              <InfoCard.Title>title</InfoCard.Title>
              <InfoCard.SubTitle>subtitle</InfoCard.SubTitle>
            </InfoCard>
          </ContentsWrap>
        </Main>
      </div>
      {children}
      <PlayBar className="fixed bottom-0 left-0">
        <SongItem>
          <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
            <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
          </Frame>
          <SongItem.Info>
            <SongItem.Title className="text-white">title</SongItem.Title>
            <SongItem.Singer>singer</SongItem.Singer>
          </SongItem.Info>
        </SongItem>
        <PlayNav className="absolute left-1/2 -translate-x-1/2">
          <IconButton className="h-20 w-20">
            <IconButton.Icon
              icon={BackwardIcon}
              className="h-10 w-10 text-white"
            />
          </IconButton>
          <IconButton className="h-20 w-20">
            <IconButton.Icon icon={PlayIcon} className="h-10 w-10 text-red" />
          </IconButton>
          <IconButton className="h-20 w-20">
            <IconButton.Icon
              icon={ForwardIcon}
              className="h-10 w-10 text-white"
            />
          </IconButton>
        </PlayNav>
        <IconButton>
          <IconButton.Icon
            icon={ListBulletIcon}
            className="h-10 w-10 text-white"
          />
        </IconButton>
      </PlayBar>
    </div>
  );
}