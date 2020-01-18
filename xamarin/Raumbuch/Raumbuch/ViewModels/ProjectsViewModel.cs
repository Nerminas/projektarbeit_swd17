using System;
using System.Collections.ObjectModel;
using System.Diagnostics;
using System.Threading.Tasks;

using Xamarin.Forms;

using Raumbuch.Models;
using Raumbuch.Views;

namespace Raumbuch.ViewModels
{
    public class ProjectsViewModel : BaseViewModel
    {
        public ObservableCollection<Project> Projects { get; set; }
        public Command LoadProjectsCommand { get; set; }

        public ProjectsViewModel()
        {
            Title = "Projekte";
            Projects = new ObservableCollection<Project>();
            LoadProjectsCommand = new Command(async () => await ExecuteLoadProjectsCommand());

            MessagingCenter.Subscribe<NewProjectPage, Project>(this, "AddProject", async (obj, project) =>
            {
                await DataStore.AddProjectAsync(project as Project);
                await ExecuteLoadProjectsCommand();
            });
            MessagingCenter.Subscribe<EditProjectPage, Project>(this, "SaveProject", async (obj, project) =>
            {
                await DataStore.UpdateProjectAsync(project as Project);
                await ExecuteLoadProjectsCommand();
            });
            MessagingCenter.Subscribe<ProjectDetailPage, Project>(this, "DeleteProject", async (obj, project) =>
            {
                var newProject = project as Project;
                await DataStore.DeleteProjectAsync(newProject.Customernumber);
                await ExecuteLoadProjectsCommand();
            });
        }

        async Task ExecuteLoadProjectsCommand()
        {
            if (IsBusy)
                return;

            IsBusy = true;

            try
            {
                Projects.Clear();
                var projects = await DataStore.GetProjectsAsync();
                foreach (var project in projects)
                {
                    Projects.Add(project);
                }
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
            }
            finally
            {
                IsBusy = false;
            }
        }
    }
}