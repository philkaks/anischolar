import { LoaderCircle } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useAuth } from '../../authProvider';

function PersonalDetail({ enabledNext }) {
    const { user, cvContent, setCvContent, template } = useAuth();
    const params = useParams();

    const [formData, setFormData] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("---", cvContent)
    }, [cvContent])

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
        setCvContent({
            ...cvContent,
            [name]: value
        })
    }

    const onSave = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {
            data: formData
        }
        console.log('formdata', data)
        // ResumeService.UpdateResumeDetail(params?.resumeId, data).then(resp => {
        //     console.log(resp);
        //     enabledNext(true);
        //     setLoading(false);
        //     toast("Details updated")
        // }, (error) => {
        //     setLoading(false);
        // })
    }

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Personal Detail</h2>
            <p>Get Started with the basic information</p>

            <form onSubmit={onSave}>
                <div className='grid grid-cols-2 mt-5 gap-3'>
                    <div>
                        <label className='text-sm'>Full Name</label>
                        <Input name="name" defaultValue={cvContent?.personalDetails.name} required onChange={handleInputChange} />
                    </div>
                    {/* <div>
                        <label className='text-sm'>Last Name</label>
                        <Input name="lastName" required onChange={handleInputChange} 
                        defaultValue={cvContent?.lastName} />
                    </div> */}
                    <div className='col-span-2'>
                        <label className='text-sm'>Job Title</label>
                        <Input name="jobTitle" required 
                        defaultValue={cvContent?.jobTitle}
                        onChange={handleInputChange} />
                    </div>
                    <div className='col-span-2'>
                        <label className='text-sm'>Address</label>
                        <Input name="address" required 
                        defaultValue={cvContent?.address}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className='text-sm'>Phone</label>
                        <Input name="phone" required 
                        defaultValue={cvContent?.phone}
                        onChange={handleInputChange} />
                    </div>
                    <div>
                        <label className='text-sm'>Email</label>
                        <Input name="email" required 
                        defaultValue={cvContent?.email}
                        onChange={handleInputChange} />
                    </div>
                </div>
                <div className='mt-3 flex justify-end'>
                    <Button type="submit" disabled={loading}>
                        {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetail
