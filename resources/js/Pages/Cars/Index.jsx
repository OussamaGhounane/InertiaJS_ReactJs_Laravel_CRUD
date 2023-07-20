import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useRef, useState } from 'react';
import { Link, useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import WarningButton from '@/Components/WarningButton';
import { router } from '@inertiajs/react'
export default function Dashboard({ auth, cars }) {








    return (
        <AuthenticatedLayout
            user={auth.user}
            errors={auth.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cars</h2>}
        >
            <Head title="Cars" />

            <div className="bg-white grid v-screen place-items-center">
                <div className='mt-3 mb-3 flex justify-end'>
                    <Link href={route('cars.create')}>
                        <PrimaryButton >
                            <i className='fa-solid fa-plus-circle'>Add</i>
                        </PrimaryButton>
                    </Link>

                </div>

            </div>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Brand
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Model
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Color
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car) => (
                            <tr key={car.id} class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {car.id}
                                </th>
                                <td class="px-6 py-4">
                                    {car.brand}
                                </td>
                                <td class="px-6 py-4">
                                    {car.model}
                                </td>
                                <td className=' px-6 py-4'>
                                    <i className={'fa-solid fa-car text-' + car.color + '-600'}></i>
                                </td>

                                <td className=' px-6 py-4'>
                                    <Link href={route('cars.edit', car.id)}>
                                        <WarningButton>
                                            <i className='fa-solid fa-edit'></i>
                                        </WarningButton>
                                    </Link>

                                    <td></td>
                                    <Link href={route('cars.destroy', car.id)} method='delete'>
                                        <DangerButton>
                                            <i className='fa-solid fa-trash'></i>
                                        </DangerButton>
                                    </Link>












                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </AuthenticatedLayout >
    );
}
