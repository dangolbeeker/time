import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import CountdownTimer  from './components/CountdownTimer.tsx';


const Home: React.VFC = () => {
<CountdownTimer />
}