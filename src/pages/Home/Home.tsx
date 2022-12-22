import {
  MusicalNoteIcon,
  ListBulletIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { BackwardIcon, ForwardIcon, PlayIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
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
import { SongItem } from '../../components/SongItem';
import actor from './../../assets/actor.svg';

type HomeProps<T extends React.ElementType> = Component<T>;

export function Home({ children, className, ...restProps }: HomeProps<'div'>) {
  return (
    <div className={tw('relative h-screen w-screen', className)} {...restProps}>
      <div className="flex">
        <SideNav className="fixed left-0 top-0 h-full overflow-y-auto pb-[100px]">
          <Logo className="w-[250px]">
            <Logo.Title className="text-base">IAM(In All Musical)</Logo.Title>
            <Logo.SubTitle className="mb-10 text-sm">
              뮤지컬 통합 스트리밍 서비스
            </Logo.SubTitle>
          </Logo>
          <NavList>
            <NavItem>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? 'text-red' : 'text-black'
                }
              >
                로그인
              </NavLink>
            </NavItem>
          </NavList>
          <NavList>
            <NavItem>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-red' : 'text-black'
                }
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/music"
                className={({ isActive }) =>
                  isActive ? 'text-red' : 'text-black'
                }
              >
                음원(넘버)
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/video"
                className={({ isActive }) =>
                  isActive ? 'text-red' : 'text-black'
                }
              >
                영상
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/show"
                className={({ isActive }) =>
                  isActive ? 'text-red' : 'text-black'
                }
              >
                공연정보
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/magazine"
                className={({ isActive }) =>
                  isActive ? 'text-red' : 'text-black'
                }
              >
                매거진
              </NavLink>
            </NavItem>
          </NavList>
          <NavList>
            <NavItem>
              <NavLink
                to="/membership"
                className={({ isActive }) =>
                  isActive ? 'text-red' : 'text-black'
                }
              >
                IAM 멤버쉽
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/inquiry"
                className={({ isActive }) =>
                  isActive ? 'text-red' : 'text-black'
                }
              >
                문의하기
              </NavLink>
            </NavItem>
          </NavList>
        </SideNav>
        <Main className="ml-[450px] flex h-screen flex-col items-center justify-center pb-[100px]">
          <ContentsWrap className="flex-col gap-0">
            <h1 className="mb-[60px] text-3xl font-bold">
              <span className="text-red">IAM</span>에 오신 것을 환영합니다!! :)
            </h1>
            <p className="mb-4 text-lg leading-none">
              IAM은 <strong>뮤지컬 영상 및 음원</strong>을{' '}
              <strong>
                <span>한 곳</span>에서 스트리밍
              </strong>{' '}
              할 수 있는 서비스입니다!
            </p>
            <p className="text-lg leading-none">
              뮤지컬의 감동과 여운을 IAM을 통해 이어가세요!
            </p>
            <img
              src={actor}
              alt="Musical actor"
              className={tw('h-auto w-[260px] py-10', className)}
            />
          </ContentsWrap>
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
