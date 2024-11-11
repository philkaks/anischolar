
import React, { useContext, useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { LoaderCircle } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function Skills() {
    const { resumeId } = useParams();
    const [loading, setLoading] = useState(false);
    const { resumeInfo, setResumeInfo } = useState(null);

    // Initialize skillsList from resumeInfo or with a default structure
    const [skillsList, setSkillsList] = useState(
        resumeInfo?.skills || [
            {
                name: '',
                rating: 0
            }
        ]
    );

    // Populate skillsList with resumeInfo data if it exists
    useEffect(() => {
        if (resumeInfo?.skills) {
            setSkillsList(resumeInfo.skills);
        }
    }, [resumeInfo]);

    const handleChange = (index, name, value) => {
        const newEntries = skillsList.slice();
        newEntries[index][name] = value;
        setSkillsList(newEntries);
    };

    const AddNewSkills = () => {
        setSkillsList([
            ...skillsList,
            {
                name: '',
                rating: 0
            }
        ]);
    };

    const RemoveSkills = () => {
        if (skillsList.length > 1) {
            setSkillsList(skillsList.slice(0, -1));
        }
    };

    const onSave = () => {
        setLoading(true);
        const data = {
            data: {
                skills: skillsList.map(({ id, ...rest }) => rest)
            }
        };

        ResumeService.UpdateResumeDetail(resumeId, data.data)
            .then(
                (resp) => {
                    setLoading(false);
                    toast('Details updated!');
                    setResumeInfo({
                        ...resumeInfo,
                        skills: skillsList
                    });
                },
                (error) => {
                    setLoading(false);
                    toast('Server Error, Try again!');
                }
            );
    };

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Skills</h2>
            <p>Add Your top professional key skills</p>

            <div>
                {skillsList.map((item, index) => (
                    <div key={index} className='flex justify-between mb-2 border rounded-lg p-3'>
                        <div>
                            <label className='text-xs'>Name</label>
                            <Input
                                className="w-full"
                                value={item.name}
                                onChange={(e) => handleChange(index, 'name', e.target.value)}
                            />
                        </div>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={item.rating}
                            onChange={(v) => handleChange(index, 'rating', v)}
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <Button variant="outline" onClick={AddNewSkills} className="text-primary">
                        + Add More Skill
                    </Button>
                    <Button variant="outline" onClick={RemoveSkills} className="text-primary">
                        - Remove
                    </Button>
                </div>
                <Button disabled={loading} onClick={onSave}>
                    {loading ? <LoaderCircle className='animate-spin' /> : 'Save'}
                </Button>
            </div>
        </div>
    );
}

export default Skills;
