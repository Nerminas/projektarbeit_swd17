using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Raumbuch.Services
{
    public interface IDataStore<T>
    {
        Task<bool> AddProjectAsync(T project);
        Task<bool> UpdateProjectAsync(T project);
        Task<bool> DeleteProjectAsync(string customernumber);
        Task<T> GetProjectAsync(string customernumber);
        Task<IEnumerable<T>> GetProjectsAsync();
    }
}
