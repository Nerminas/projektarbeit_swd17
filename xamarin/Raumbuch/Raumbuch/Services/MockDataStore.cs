/*using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Raumbuch.Models;

namespace Raumbuch.Services
{
    public class MockDataStore : IDataStore<Project>
    {
        readonly List<Project> projects;

        public MockDataStore()
        {
            projects = new List<Project>()
            {
                new Project{ Name = "project1", Customernumber = "123", Adress = "Mdorf 1", Phone = "01101", Email = "asdfq" },
                new Project{ Name = "project2", Customernumber = "345", Adress = "Mdorf 2", Phone = "012201", Email = "a1fq" }

            };
        }

        public async Task<bool> AddProjectAsync(Project project)
        {
            projects.Add(project);

            return await Task.FromResult(true);
        }

        public async Task<bool> UpdateProjectAsync(Project project)
        {
            var oldProject = projects.Where((Project arg) => arg.Customernumber == project.Customernumber).FirstOrDefault();
            projects.Remove(oldProject);
            projects.Add(project);

            return await Task.FromResult(true);
        }

        public async Task<bool> DeleteProjectAsync(string customernumber)
        {
            var oldProject = projects.Where((Project arg) => arg.Customernumber == customernumber).FirstOrDefault();
            projects.Remove(oldProject);

            return await Task.FromResult(true);
        }

        public async Task<Project> GetProjectAsync(string customernumber)
        {
            return await Task.FromResult(projects.FirstOrDefault(s => s.Customernumber == customernumber));
        }

        public async Task<IEnumerable<Project>> GetProjectsAsync()
        {
            return await Task.FromResult(projects);
        }
    }
}*/