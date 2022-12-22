import {
  MusicalNoteIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { BackwardIcon, ForwardIcon, PlayIcon } from '@heroicons/react/24/solid';
import { twMerge as tw } from 'tailwind-merge';
import { ContentsWrap } from '../../components/ContentsWrap';
import { Frame } from '../../components/Frame';
import { Icon } from '../../components/Icon';
import { IconButton } from '../../components/IconButton';
import { Input } from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Main } from '../../components/Main';
import { NavItem } from '../../components/NavItem';
import { NavList } from '../../components/NavList';
import { PlayBar } from '../../components/PlayBar';
import { PlayNav } from '../../components/PlayNav';
import { SearchForm } from '../../components/SearchForm';
import { SideNav } from '../../components/SideNav';
import { SongCard } from '../../components/SongCard';
import { SongItem } from '../../components/SongItem';

type MusicProps<T extends React.ElementType> = Component<T>;

export function Music({
  children,
  className,
  ...restProps
}: MusicProps<'div'>) {
  return (
    <div className={tw('relative h-screen w-screen', className)} {...restProps}>
      <div className="flex pb-[100px]">
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
          <SearchForm className="relative mx-auto mb-20 w-[calc(100%-204px)]">
            <SearchForm.Label>
              <Input type="search" />
              <IconButton className="absolute right-5 top-1/2 -translate-y-1/2">
                <IconButton.Icon
                  icon={MagnifyingGlassIcon}
                  className="h-8 w-8"
                />
              </IconButton>
            </SearchForm.Label>
          </SearchForm>
          <p className="mb-5 font-line-seed-sans-kr text-2xl font-bold leading-normal">
            관극하러 가기 전 이건 꼭 듣고 가야지!
          </p>
          <p className="mb-5 text-2xl font-bold leading-normal">#물랑루즈</p>
          <ContentsWrap className="mb-20 gap-y-0">
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
          </ContentsWrap>
          <p className="mb-5 text-2xl font-bold leading-normal">#스위니토드</p>
          <ContentsWrap className="mb-20 gap-y-0">
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
            <SongCard className="w-[calc((100%-20px)/2)] border-0">
              <SongItem className="flex items-center">
                <Frame className="mr-5 h-[72px] w-[72px] border border-dark-gray bg-white">
                  <Icon icon={MusicalNoteIcon} className="h-10 w-10" />
                </Frame>
                <SongItem.Info>
                  <SongItem.Title>title</SongItem.Title>
                  <SongItem.Singer>singer</SongItem.Singer>
                </SongItem.Info>
              </SongItem>
              <IconButton className="h-10 w-10">
                <Icon icon={EllipsisHorizontalIcon} className="h-10 w-10" />
              </IconButton>
            </SongCard>
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
