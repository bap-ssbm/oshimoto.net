'use client'

import { FC, useState } from 'react'

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { AiOutlineDown } from "react-icons/ai";

import Link from 'next/link';

interface DropDownProps {

}

const DropDown: FC<DropDownProps> = ({ }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className='tracking-[4px] flex items-center'
            >
                Portfolio<span className='inline-block'><AiOutlineDown /></span>
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                className='mt-5'
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Link href="/portfolio/portraits">
                    <MenuItem onClick={handleClose}>
                        Portraits
                    </MenuItem>
                </Link>
                <Link href="/portfolio/na-landscape">
                    <MenuItem onClick={handleClose}>
                        North America
                    </MenuItem>
                </Link>
                <Link href="/portfolio/jp-landscape">
                    <MenuItem onClick={handleClose}>
                        Japan
                    </MenuItem>
                </Link>
            </Menu>
        </div >
    )
}

export default DropDown