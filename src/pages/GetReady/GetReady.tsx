import { MusicalNoteIcon, ListBulletIcon } from '@heroicons/react/24/outline';
import { BackwardIcon, ForwardIcon, PlayIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
import { twMerge as tw } from 'tailwind-merge';
import { ContentsWrap } from '../../components/ContentsWrap';
import { Frame } from '../../components/Frame';
import { Icon } from '../../components/Icon';
import { IconButton } from '../../components/IconButton';
import { Logo } from '../../components/Logo';
import { Main } from '../../components/Main';
import { NavItem } from '../../components/NavItem';
import { NavList } from '../../components/NavList';
import { PlayBar } from '../../components/PlayBar';
import { PlayNav } from '../../components/PlayNav';
import { SideNav } from '../../components/SideNav';
import { SongItem } from '../../components/SongItem';
import lalaland from './../../assets/lalaland.svg';

type GetReadyProps<T extends React.ElementType> = Component<T>;

export function GetReady({
  children,
  className,
  ...restProps
}: GetReadyProps<'div'>) {
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
            <h1 className="text-3xl font-bold">
              해당 페이지는 준비 중입니다! :(
            </h1>
            <img
              src={lalaland}
              alt="LaLa Land"
              className={tw('h-auto w-[500px]', className)}
            />
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
