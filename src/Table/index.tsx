import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modals } from '../Modals';

const UniversityTable: React.FC = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openModalSukses, setOpenModalSukses] = useState<boolean>(false);
  const [dataDetail, setDataDetail] = useState<any>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://universities.hipolabs.com/search?country=Indonesia'
        );
        setUniversities(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(dataDetail,'ini data detail')
  return (
     <div className="container mx-auto mt-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left bg-gray-200 text-gray-600">Name</th>
              <th className="px-6 py-3 text-left bg-gray-200 text-gray-600">Country</th>
              <th className="px-6 py-3 text-left bg-gray-200 text-gray-600">Web Page</th>
            </tr>
          </thead>
          <tbody>
            {universities.map((university: any, index: number) => {
                const updatedObject = {
                    ...university,
                    id: index + 1
                  };
                return(
              <tr key={index} className={'bg-gray-100 hover:bg-gray-300 text-gray-700 cursor-pointer'} onClick={()=>{
                setOpenModalSukses(true)
                setDataDetail(updatedObject)
              }}>
                <td className="px-6 py-4 whitespace-nowrap">{university.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{university.country}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={university.web_pages[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {university.web_pages[0]}
                  </a>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      )}
      <Modals
        open={openModalSukses}
        setOpen={setOpenModalSukses}
        children={
          <>
           <div className='text-gray-700'>
           <p className='font-bold'>ID </p>
            <p>{dataDetail?.id}</p>
            <p className='font-bold'>Nama Universitas </p>
            <p>{dataDetail?.name}</p>
            <p className='font-bold'>Country </p>
            <p>{dataDetail?.country}</p>
            <p className='font-bold'>Web Page </p>
            <p>{dataDetail?.web_pages[0]}</p>
           </div>
           <button onClick={()=>{
            setOpenModalSukses(false)
           }} className="bg-sky-500 hover:bg-sky-700 w-full mt-5">
                        Close
                    </button>
          </>
        }
      />
    </div>
  );
};

export default UniversityTable;