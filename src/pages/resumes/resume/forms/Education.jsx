import { LoaderCircle } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import ResumeService from '../../../../service/ResumeService';
import { useAuth } from '../../../../authProvider';

function Education() {
  const [loading, setLoading] = useState(false);
  const { cvContent, setCvContent } = useAuth();
  const params = useParams();

  // Initialize educationalList from resumeInfo or with a default structure
  const [educationalList, setEducationalList] = useState(
    cvContent?.education || [
      {
        universityName: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ]
  );

  // Populate educationalList with resumeInfo data if it exists
  useEffect(() => {
    if (cvContent?.education) {
      setEducationalList(cvContent.education);
    }
  }, [cvContent]);

  const handleChange = (event, index) => {
    const newEntries = educationalList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setEducationalList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationalList([
      ...educationalList,
      {
        universityName: '',
        degree: '',
        major: '',
        startDate: '',
        endDate: '',
        description: ''
      }
    ]);
  };

  const RemoveEducation = () => {
    if (educationalList.length > 1) {
      setEducationalList(educationalList.slice(0, -1));
    }
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        education: educationalList.map(({ id, ...rest }) => rest)
      }
    };

    // Save the updated educational list and update resumeInfo context
    ResumeService.UpdateResumeDetail(params.resumeId, data.data).then(
      (resp) => {
        setLoading(false);
        toast('Details updated!');

        // Update resumeInfo context only after saving
        setCvContent({
          ...cvContent,
          education: educationalList
        });
      },
      (error) => {
        setLoading(false);
        toast('Server Error, Please try again!');
      }
    );
  };

  return (
    <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
      <h2 className='font-bold text-lg'>Education</h2>
      <p>Add Your educational details</p>

      <div>
        {educationalList.map((item, index) => (
          <div key={index} className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
            <div className='col-span-2'>
              <label>University Name</label>
              <Input
                name="universityName"
                onChange={(e) => handleChange(e, index)}
                value={item.universityName}
              />
            </div>
            <div>
              <label>Degree</label>
              <Input
                name="degree"
                onChange={(e) => handleChange(e, index)}
                value={item.degree}
              />
            </div>
            <div>
              <label>Major</label>
              <Input
                name="major"
                onChange={(e) => handleChange(e, index)}
                value={item.major}
              />
            </div>
            <div>
              <label>Start Date</label>
              <Input
                type="date"
                name="startDate"
                onChange={(e) => handleChange(e, index)}
                value={item.startDate}
              />
            </div>
            <div>
              <label>End Date</label>
              <Input
                type="date"
                name="endDate"
                onChange={(e) => handleChange(e, index)}
                value={item.endDate}
              />
            </div>
            <div className='col-span-2'>
              <label>Description</label>
              <Textarea
                name="description"
                onChange={(e) => handleChange(e, index)}
                value={item.description}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2'>
          <Button variant="outline" onClick={AddNewEducation} className="text-primary">
            + Add More Education
          </Button>
          <Button variant="outline" onClick={RemoveEducation} className="text-primary">
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

export default Education;
