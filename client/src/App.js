import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow
    , Paper, Typography, Toolbar
    , AppBar, Tabs, Tab, Box
    , Dialog, IconButton, Slide
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import axiosapi from "./utils/axiosapi"

// import cadata from './data/cadata.json'
// const customerData = cadata.customers
// const accountData = cadata.accounts


export default function App() {
    const [value, setValue] = React.useState(0)

    const [customerData, setCustomerData] = React.useState([])
    React.useEffect( () => {
        if ( customerData.length === 0 ) {
            axiosapi.get(
                '/customers'
            )
            .then( customers => {
                setCustomerData(customers.data)
            })
        }
    })

    const [accountData, setAccountData] = React.useState([])
    React.useEffect( () => {
        if ( accountData.length === 0 ) {
            axiosapi.get(
                '/accounts'
            )
            .then( accounts => {
                setAccountData(accounts.data)
            })
        }
    })

    const [customerDialogOpen, setCustomerDialogOpen] = React.useState(false)
    const [dialogData, setDialogData] = React.useState({})

    const handleDialogOpen = (id) => {
        setDialogData(customerData[id])
        setCustomerDialogOpen(true)
    }

    const handleDialogClose = (id) => {
        setCustomerDialogOpen(false)
    }


    return ( customerData.length !== 0 && accountData.length !== 0 ) &&
        <div>
            <CustomerDialog dialogData={dialogData} accountData={accountData} open={customerDialogOpen} close={handleDialogClose} />
            <AppBar position="static" style={{width: 1000}}>
            <Tabs value={value}
                onChange={ (event, newValue) => {
                    setValue(newValue)
                }}
            >
                <Tab label="Customers" />
                <Tab label="Accounts" />
            </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Customers customerData={customerData} handleDialogOpen={handleDialogOpen} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Accounts accountData={accountData} />
            </TabPanel>
        </div>
}

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box p={3}>
                <Typography component="div">{children}</Typography>
            </Box>
        )}
        </div>
    )
}


function Customers(props) {
    const {customerData, handleDialogOpen, width=600, showAll=false} = props

    const useStyles = makeStyles({
        appbar: {
            maxWidth: 1050
        },
        container: {
            // maxWidth: 352,
            padding: 24,
            backgroundColor: '#f5f5f5'
        },
        root: {
            // width: 350
        },
        tcontainer: {
            maxHeight: 450
        },
        tbar: {
            paddingLeft: 15
        },
        throw: {
            padding: 0,
            height: 40
        },
        thcell: {
            padding: 0,
            paddingLeft: 15,
            paddingRight: 15,
            fontWeight: 700,
            whiteSpace: 'nowrap'
        },
        tbrow: {
            padding: 0,
            height: 30,
            '&:hover': {
                cursor: showAll === false ? 'pointer' : 'unset',
                backgroundColor: showAll === false ? 'lightgray' : 'unset'
            }
        },
        tbcell: {
            padding: 0,
            paddingLeft: 15,
            paddingRight: 15,
            whiteSpace: 'nowrap'
        },
        tbcellwrap: {
            padding: 0,
            paddingLeft: 15,
            paddingRight: 15
        }
    })
    const classes = useStyles()

    return ( customerData !== undefined &&
        <div className={classes.container} style={{width: width+2}}>
            <Paper className={classes.root} style={{width: width}}>
                <Toolbar className={classes.tbar}>
                    <Typography variant="h6" id="tableTitle" component="p">
                        Customers
                    </Typography>
                </Toolbar>
                <TableContainer className={classes.tcontainer}>
                    <Table stickyHeader aria-label="simple table">
                        <TableHead>
                            <TableRow className={classes.throw}>
                                <TableCell align="center" className={classes.thcell}>ID</TableCell>
                                <TableCell align="left" className={classes.thcell}>Name</TableCell>
                                <TableCell align="left" className={classes.thcell}>E-mail</TableCell>
                            { showAll === true && <>
                                <TableCell align="left" className={classes.thcell}>reason</TableCell>
                                <TableCell align="left" className={classes.thcell}>Created</TableCell>
                                <TableCell align="center" className={classes.thcell}>Acct Mgr</TableCell>
                                <TableCell align="center" className={classes.thcell}>Active</TableCell>
                            </>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {customerData.map( row  => (
                            <TableRow key={row.id} className={classes.tbrow}
                                onClick={ e => {
                                    return showAll === false && handleDialogOpen(row.id-1)
                                }}
                            >
                                <TableCell component="th" scope="row" align="center" className={classes.tbcell}>{row.id}</TableCell>
                                <TableCell component="th" scope="row" className={classes.tbcell}>{row.first_name} {row.last_name}</TableCell>
                                <TableCell align="left" className={classes.tbcell}>{row.email}</TableCell>
                            { showAll === true && <>
                                <TableCell align="left" className={classes.tbcellwrap}>{row.reason_for_joining}</TableCell>
                                <TableCell align="left" className={classes.tbcell}>{row.created_date}</TableCell>
                                <TableCell align="center" className={classes.tbcell}>{row.account_manager_id}</TableCell>
                                <TableCell align="center" className={classes.tbcell}>{row.active}</TableCell>
                            </>}
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

const accountStyles = makeStyles({
    container: {
        maxWidth: 952,
        padding: 24,
        backgroundColor: '#f5f5f5'
    },
    root: {
        width: 950
    },
    tcontainer: {
        maxHeight: 450
    },
    tbar: {
        paddingLeft: 25
    },
    throw: {
        padding: 0,
        height: 40
    },
    thcell: {
        padding: 0,
        paddingLeft: 5,
        paddingRight: 5,
        fontWeight: 700,
        whiteSpace: 'nowrap'
    },
    tbrow: {
        padding: 0,
        height: 30
    },
    tbcell: {
        padding: 0,
        paddingLeft: 5,
        paddingRight: 5,
        whiteSpace: 'nowrap'
    }
})

function Accounts(props) {
    const classes = accountStyles()
    const {accountData} = props

    return ( accountData !== undefined &&
        <div className={classes.container}>
            <Paper className={classes.root}>
                <Toolbar className={classes.tbar}>
                    <Typography variant="h6" id="tableTitle" component="p">
                        Accounts
                    </Typography>
                </Toolbar>
                <TableContainer className={classes.tcontainer}>
                    <Table stickyHeader aria-label="simple table">
                        <TableHead>
                            <TableRow className={classes.throw}>
                                <TableCell align="center" className={classes.thcell}>ID</TableCell>
                                <TableCell align="center" className={classes.thcell}>Customer</TableCell>
                                <TableCell align="center" className={classes.thcell}>Solar Farm</TableCell>
                                <TableCell align="left" className={classes.thcell}>Address1</TableCell>
                                <TableCell align="left" className={classes.thcell}>Address2</TableCell>
                                <TableCell align="left" className={classes.thcell}>Capacity Share</TableCell>
                                <TableCell align="left" className={classes.thcell}>Created</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {accountData.map( row  => (
                            <TableRow key={row.id} className={classes.tbrow}>
                                <TableCell component="th" scope="row" align="center" className={classes.tbcell}>{row.id}</TableCell>
                                <TableCell component="th" scope="row" align="center" className={classes.tbcell}>{row.customer_id}</TableCell>
                                <TableCell component="th" scope="row" align="center" className={classes.tbcell}>{row.solar_farm_id}</TableCell>
                                <TableCell className={classes.tbcell}>{row.address}</TableCell>
                                <TableCell className={classes.tbcell}>{row.city}, {row.state} {row.zip}</TableCell>
                                <TableCell component="th" scope="row" align="center" className={classes.tbcell}>{row.capacity_share}</TableCell>
                                <TableCell component="th" scope="row" className={classes.tbcell}>{row.created_date}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    )
}

const dialogStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
        width: 1000,
        height: 48
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function CustomerDialog(props) {
    const classes = dialogStyles()
    const {dialogData, accountData, open, close} = props

    const customerAccountData = getCustomerAccounts(dialogData.id, accountData)

    return ( Object.keys(dialogData).length !== 0 &&
        <Dialog fullScreen open={open} onClose={close} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={close} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <CustomerAccounts customerAccountData={customerAccountData} dialogData={dialogData} />
        </Dialog>
    )
}

function getCustomerAccounts(customerID, accountData) {
    return accountData.filter( e => e.customer_id === customerID)
}

const customerAccountStyles = makeStyles({
    container: {
        maxWidth: 1000,
        backgroundColor: '#f5f5f5'
    }
})

function CustomerAccounts(props) {
    const classes = customerAccountStyles()

    const {dialogData, customerAccountData} = props

    return (
        <div className={classes.container}>
            <Customers customerData={[dialogData]} width={850} showAll={true} />
            <Accounts accountData={customerAccountData} />
        </div>
    )
}
