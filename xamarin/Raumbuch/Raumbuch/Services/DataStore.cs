using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Raumbuch.Models;

namespace Raumbuch.Services
{
    public class DataStore : IDataStore<Project>
    {
        List<Project> projects;
        private string folderName = "raumbuch";
        private string projectFile = "projects.json";
        private string folderPath = System.Environment.GetFolderPath(System.Environment.SpecialFolder.Personal);

        public DataStore()
        {
            projects = new List<Project>();
        }

        public async Task<bool> AddProjectAsync(Project project)
        {
            string json = JsonConvert.SerializeObject(project);
            projects.Add(project);
            saveProjectInternal();
            return await Task.FromResult(true);
        }

        public async Task<bool> UpdateProjectAsync(Project project)
        {
            var oldProject = projects.Where((Project arg) => arg.Customernumber == project.Customernumber).FirstOrDefault();
            projects.Remove(oldProject);
            projects.Add(project);
            saveProjectInternal();
            return await Task.FromResult(true);
        }

        public async Task<bool> DeleteProjectAsync(string customernumber)
        {
            var oldProject = projects.Where((Project arg) => arg.Customernumber == customernumber).FirstOrDefault();
            projects.Remove(oldProject);
            saveProjectInternal();
            return await Task.FromResult(true);
        }

        public async Task<Project> GetProjectAsync(string customernumber)
        {
            loadProjectsInternal();
            return await Task.FromResult(projects.FirstOrDefault(s => s.Customernumber == customernumber));
        }

        public async Task<IEnumerable<Project>> GetProjectsAsync()
        {
            loadProjectsInternal();
            return await Task.FromResult(projects);
        }

        private void saveProjectInternal()
        {
            string json = JsonConvert.SerializeObject(projects);
            File.WriteAllText(Path.Combine(folderPath, projectFile), json);
        }

        private void loadProjectsInternal()
        {
            try
            {
                string json =  File.ReadAllText(Path.Combine(folderPath, projectFile));
                projects = JsonConvert.DeserializeObject<List<Project>>(json);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                if (projects == null)
                {
                    projects = new List<Project>();
                }
            }
        }
    }
}