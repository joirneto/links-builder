import {Add, Remove, Send} from '@mui/icons-material';
import {FormControlLabel, Radio, RadioGroup, Button, Box, Typography, ButtonGroup, Grid, Select, MenuItem} from '@mui/material';
import {makeStyles} from '@mui/styles';
import React, {useState} from 'react';

import config from '../../config';
import dataLinks from '../../links/dataLinks';
import urlLinks from '../../links/urlLinks';
import blockOrNone from '../../utils/blockOrNone';
import requestLink from '../../utils/requestLink';

const useStyles = makeStyles({
  customColor: {
    color: 'red',
  },
});

const apiKey = config.apiSantaClara.apiKey;

const Form = () => {
  const [errors, setErrors] = useState();
  const [selectedValue, setSelectedValue] = useState({
    linkType: 'padrao',
    typeCustomer: 'none',
    consultor: false,
    options: false,
    upsell: false,
    bump: false,
    sales: false,
    timing: false,
    group: 0,
    url: '',
    linkId: '',
    apiKey: 'd832faadcde34e978d2b29ca8db2d1c0',
    documentCustomer: '',
  });

  console.log('www', errors);
  const classes = useStyles();

  const handleChange = (e) => {
    setSelectedValue((prevSelectedValue) => ({
      ...prevSelectedValue,
      [e.target.name]: e.target.value,
    }));
  };

  const requestLinkCreate = async () => {
    const res = await requestLink(selectedValue.apiKey, urlLinks[selectedValue.linkType], dataLinks(selectedValue));
    if (!res.error) {
      setErrors(null);
      setSelectedValue({
        ...selectedValue,
        url: res.url,
        linkId: res.id,
        documentCustomer: res?.customer?.document?.number ? res?.customer?.document?.number : '',
        urlPartial: null,
        linksPartial: null,
      });
    } else {
      setErrors(JSON.stringify({Status: res.message.status, Message: res.message.title}));
    }
  };

  const requestLinkPartialCreate = async () => {
    const links = dataLinks(selectedValue);
    const ids = [];
    const urls = [];
    let quantidadeLinks = 0;
    for await (const link of links) {
      if (quantidadeLinks < 2) {
        const res = await requestLink(selectedValue.apiKey, urlLinks[selectedValue.linkType], link);
        if (!res.error) {
          setErrors(null);
          ids.push(res.id);
          urls.push(res.url);
          quantidadeLinks++;
        } else {
          setErrors(JSON.stringify({Status: res.message.status, Message: res.message.title}));
        }
      } else {
        link.lastLink.linksPrevious = ids;
        const res = await requestLink(selectedValue.apiKey, urlLinks[selectedValue.linkType], link);
        if (!res.error) {
          setErrors(null);
          ids.push(res.id);
          urls.push(res.url);
          setSelectedValue({
            ...selectedValue,
            url: null,
            linkId: null,
            urlPartial: urls,
            linksPartial: ids,
            documentCustomer: res?.customer?.document?.number ? res?.customer?.document?.number : '',
          });
        } else {
          setErrors(JSON.stringify({Status: res.message.status, Message: res.message.title}));
        }
      }
    }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedValue.linkType !== 'partial') {
      await requestLinkCreate();
    } else {
      await requestLinkPartialCreate();
    }
  };

  const [countGroup, setCountGroup] = useState(0);

  const increment = (key, value, setState) => {
    if (value < 10) {
      setSelectedValue((prevSelectedValue) => ({
        ...prevSelectedValue,
        [`${key}`]: value + 1,
      }));
      setState((prevCount) => prevCount + 1);
    }
  };

  const decrement = (key, value, setState) => {
    if (value > 0) {
      setSelectedValue((prevSelectedValue) => ({
        ...prevSelectedValue,
        [`${key}`]: value - 1,
      }));
      setState((prevCount) => prevCount - 1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
          }}>
            <Typography variant='h5' gutterBottom>
              Cliente Santa-Clara:
            </Typography>
            <Select value={selectedValue.apiKey} onChange={handleChange} name='apiKey'>
              {Object.keys(apiKey).map((option, index) => (
                <MenuItem key={index} value={apiKey[option]}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Box>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
          }}>
            <Typography variant='h5' gutterBottom>
              Tipo de Link:
            </Typography>
            <RadioGroup value={selectedValue.linkType} onChange={handleChange} name='linkType'>
              <FormControlLabel
                value='padrao'
                control={<Radio />}
                label='Link padrão'
              />
              <FormControlLabel
                value='percent'
                control={<Radio />}
                label='Link padrão com split por percent'
              />
              <FormControlLabel
                value='split'
                control={<Radio />}
                label='Link com split por percent e price'
              />
              <FormControlLabel
                value='partial'
                control={<Radio />}
                label='Link partial'
              />
              <FormControlLabel
                value='single'
                control={<Radio />}
                label='Link Único'
              />
              <FormControlLabel
                value='donation'
                control={<Radio />}
                label='Link de doações'
              />
            </RadioGroup>
          </Box>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            display: !blockOrNone(selectedValue, ['padrao', 'donation', 'single']) ? 'block' : 'none',
          }}>
            <Typography variant='h5' gutterBottom>
              Upsell:
            </Typography>
            <RadioGroup value={selectedValue.upsell} onChange={handleChange} name='upsell'>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label='true'
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label='false'
              />
            </RadioGroup>
          </Box>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            display: !blockOrNone(selectedValue, ['padrao', 'donation', 'single']) ? 'block' : 'none',
          }}>
            <Typography variant='h5' gutterBottom>
              Orderbump:
            </Typography>
            <RadioGroup value={selectedValue.bump} onChange={handleChange} name='bump'>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label='true'
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label='false'
              />
            </RadioGroup>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            display: !blockOrNone(selectedValue, ['donation', 'single']) ? 'block' : 'none',
          }}>
            <Typography variant='h5' gutterBottom>
              Opções
            </Typography>
            <RadioGroup value={selectedValue.options} onChange={handleChange} name='options'>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label='true'
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label='false'
              />
            </RadioGroup>
          </Box>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            display: blockOrNone(selectedValue, ['single']) ? 'block' : 'none',
          }}
          >
            <Typography variant='h5' gutterBottom>
              Temporizador:
            </Typography>
            <RadioGroup value={selectedValue.timing} onChange={handleChange} name='timing'>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label='true'
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label='false'
              />
            </RadioGroup>
            <Typography variant='h7' gutterBottom>
              60 segundos
            </Typography>
          </Box>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            display: !blockOrNone(selectedValue, ['donation', 'padrao']) ? 'block' : 'none',
          }}>
            <Typography variant='h5' gutterBottom>
              Juros:
            </Typography>
            <RadioGroup value={selectedValue.sales} onChange={handleChange} name='sales'>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label='true'
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label='false'
              />
            </RadioGroup>
          </Box>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            display: !blockOrNone(selectedValue, ['donation', 'single']) ? 'block' : 'none',
          }}>
            <Typography variant='h5' gutterBottom>
              Vendas em grupo: {countGroup}
            </Typography>
            <ButtonGroup>
              <Button onClick={() => decrement('group', countGroup, setCountGroup)} startIcon={<Remove />} variant='contained' sx={{margin: '4px'}} />
              <Button onClick={() => increment('group', countGroup, setCountGroup)} startIcon={<Add />} variant='contained' sx={{margin: '4px'}} />
            </ButtonGroup>
            <Typography variant='h7' gutterBottom>
              Max: 10 participantes
            </Typography>
          </Box>
        </Grid>
        <Grid>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
            display: !blockOrNone(selectedValue, ['partial', 'donation', 'single']) ? 'block' : 'none',
          }}>
            <Typography variant='h5' gutterBottom>
              Venda com Consultor:
            </Typography>
            <RadioGroup value={selectedValue.consultor} onChange={handleChange} name='consultor'>
              <FormControlLabel
                value={true}
                control={<Radio />}
                label='true'
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label='false'
              />
            </RadioGroup>
          </Box>
          <Box sx={{
            width: 300,
            border: '1px solid blue',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px',
          }}>
            <Typography variant='h5' gutterBottom>
              Tipo de venda (CPF, CNPJ ou Ambos):
            </Typography>
            <RadioGroup value={selectedValue.typeCustomer} onChange={handleChange} name='typeCustomer'>
              {(!['true', true].includes(selectedValue?.consultor)) && !blockOrNone(selectedValue, ['partial']) && (<FormControlLabel
                value={'none'}
                control={<Radio />}
                label='none'
              />)}
              <FormControlLabel
                value={'CPF'}
                control={<Radio />}
                label='CPF'
              />
              <FormControlLabel
                value={'CNPJ'}
                control={<Radio />}
                label='CNPJ'
              />
            </RadioGroup>
          </Box>
        </Grid>
      </Grid>
      <Grid container justify='center' alignItems='center'>
        <Button startIcon={<Send />} variant='contained' color='primary' type='submit' sx={{margin: '16px'}}>
          Enviar
        </Button>
        {selectedValue?.url && (
          <><Typography variant='h6' gutterBottom marginRight={2}>
            LinkID:
          </Typography><Button href={selectedValue?.url} rel='noopener noreferrer' target='_blank' variant='contained' color='primary'>
            {selectedValue?.linkId}
          </Button></>
        )}
        {selectedValue?.urlPartial && selectedValue?.urlPartial.map((item, index) => {
          return (
            <><Typography variant='h6' gutterBottom marginLeft={2}>
              LinkID {index + 1}:
            </Typography><Button href={item} rel='noopener noreferrer' target='_blank' variant='contained' color='primary'>
              {selectedValue?.linksPartial[index]}
            </Button></>
          );
        })}
        <div>
          {selectedValue?.documentCustomer.length > 0 && (<Typography variant='h6' gutterBottom marginLeft={2}>
            DocumentCustomer: {selectedValue?.documentCustomer}
          </Typography>)}
        </div>
        <Typography className={classes.customColor} variant='h5' gutterBottom display ={errors ? 'block' : 'none'}>
          Errors: {errors}
        </Typography>
      </Grid>
    </form>
  );
};

export default Form;
