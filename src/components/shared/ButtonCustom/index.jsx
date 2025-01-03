import { Button, styled } from '@mui/material'
import React from 'react'
import { useStyles } from './buttonCustom.style'
import { useNavigate } from 'react-router-dom';

const ColorButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: '#522df',
    },
  }));

export function ButtonColor({ path, children, className }) { 
    const classes = useStyles()
    const navigate = useNavigate();
    return (
        <ColorButton onClick={() => navigate(path)} variant="contained" className={className}>{children}</ColorButton>
    );
  }


export function DynamicNavigateButton({ path, children, className }) {
    const navigate = useNavigate();
    const classes = useStyles()
  
    return (
      <Button className={classes.buttonBorder + ' ' + className} onClick={() => navigate(path)}>
        {children}
      </Button>
    );
  }

export const ButtonBorder = ({ children, onClick, type, startIcon, sx  }) => {
    const classes = useStyles()
    return (
        <Button className={classes.buttonBorder} onClick={onClick} type={type} startIcon={startIcon} sx={sx}>
            {children}
        </Button>
    )
}

export const ButtonTrans = ({ children, onClick, type, startIcon, sx  }) => {
    const classes = useStyles()
    return (
        <Button onClick={onClick} className={classes.buttonTrans} type={type} startIcon={startIcon} sx={sx}>
            {children}
        </Button>
    )
}

export const ButtonFullBlack = ({ children, onClick, type, startIcon, sx }) => {
    const classes = useStyles()
    return (
        <Button onClick={onClick} className={classes.buttonFullBlack} type={type} startIcon={startIcon} sx={sx}>
            {children}
        </Button>
    )
}

