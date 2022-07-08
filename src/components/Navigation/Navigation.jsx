// Icons
import HomeIcon from '@mui/icons-material/Home'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'

// Components: NavigationButton
import NavigationButton from './NavigationButton'

const Navigation = () => {
	return (
		<nav className='flex fixed left-0 z-10 bottom-0 w-full h-[52px] bg-white items-center justify-around border border-opacity-10 border-black'>
			<NavigationButton>
				<HomeIcon sx={{ width: 26.25, height: 26.25 }} />
			</NavigationButton>
			<NavigationButton>
				<SearchOutlinedIcon sx={{ width: 26.25, height: 26.25 }} />
			</NavigationButton>
			<NavigationButton>
				<EmailOutlinedIcon sx={{ width: 26.25, height: 26.25 }} />
			</NavigationButton>
			<NavigationButton>
				<NotificationsOutlinedIcon sx={{ width: 26.25, height: 26.25 }} />
			</NavigationButton>
		</nav>
	)
}

export default Navigation
