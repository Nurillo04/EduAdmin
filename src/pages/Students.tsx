import { useEffect } from 'react';
import useStudent from '../app/useStudent';

const Students = () => {
  const { loading, error, students, getStudents } = useStudent();

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div>
      {loading ? <h2>Loading...</h2> : null}
      {students.length > 0
        ? students.map((student) => <h2 key={student.id}>{student.name}</h2>)
        : null}
      {error ? <h2>{error.message}</h2> : null}
    </div>
  );
};

export default Students;
