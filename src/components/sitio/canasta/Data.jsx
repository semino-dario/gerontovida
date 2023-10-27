import React from 'react';
import { useSelector } from 'react-redux';
import Preloder from '../../Preloder';

export default function Data() {

    const DataCanasta = useSelector((state) => state.canasta.data);

    if (DataCanasta === undefined) {
        return (
            <Preloder />)
    }

    console.log(DataCanasta)
    return (
        <>
        </>)
}