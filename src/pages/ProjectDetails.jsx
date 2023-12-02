import { Link, useParams } from 'react-router-dom';

function ProjectDetails({ projectsData }) {
  const { projectId } = useParams();

  // find returns a single thing, an object in this case
  // filter will always return an array even if there is only 1 matching element
  // filter would return an array containing one object in this case
  // filter is not appropriate and would break the application
  const singleProject = projectsData.find(project => project._id === projectId);

  return (
    <div>
      <h1>ProjectDetails</h1>
      {!singleProject && <h3>Project not found</h3>}

      {singleProject && (
        <div>
          <h1>{singleProject.name}</h1>
          <h3>Teach stack: {singleProject.technologies}</h3>
          <p>{singleProject.description}</p>
        </div>
      )}

      <Link to='/projects'>Back to project list</Link>
    </div>
  );
}

export default ProjectDetails;
