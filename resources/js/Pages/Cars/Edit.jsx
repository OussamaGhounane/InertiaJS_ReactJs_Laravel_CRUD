import React from 'react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import WarningButton from '@/Components/WarningButton';

const Edit = ({ auth, cars }) => {
    const { data, setData, put, processing, errors, reset } = useForm({
        brand: cars.brand,
        model: cars.model,
        color: cars.color
    })

    const submit = (e) => {
        e.preventDefault();
        put(route('cars.update', { car: cars.id }));
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            errors={auth.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Cars</h2>}
        >
            <Head title="Edit_Cars" />
            <br />
            <br />



            <div>
                <form onSubmit={submit} className='grid justify-center'>
                    <div className="mb-6">
                        <InputLabel value="Brand"></InputLabel>
                        <TextInput value={data.brand} onChange={e => setData('brand', e.target.value)}></TextInput>
                        {errors.brand && <span className='text-sm text-red-600'>{errors.brand}</span>}
                    </div>
                    <div class="mb-6">
                        <InputLabel value="Model"></InputLabel>
                        <TextInput value={data.model} onChange={e => setData('model', e.target.value)}></TextInput>
                        {errors.model && <span className='text-sm text-red-600'>{errors.model}</span>}
                    </div>
                    <div class="mb-6">
                        <InputLabel value="Color"></InputLabel>
                        <TextInput value={data.color} onChange={e => setData('color', e.target.value)}></TextInput>
                        {errors.color && <span className='text-sm text-red-600'>{errors.color}</span>}
                    </div>
                    <button type='submit' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                </form>
            </div>



        </AuthenticatedLayout>
    )
}

export default Edit