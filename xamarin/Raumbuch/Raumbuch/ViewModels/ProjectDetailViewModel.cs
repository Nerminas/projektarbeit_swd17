using Raumbuch.Models;
using Raumbuch.Views;
using Xamarin.Forms;

namespace Raumbuch.ViewModels
{
    public class ProjectDetailViewModel : BaseViewModel
    {
        public Project Project { get; set; }

        public ProjectDetailViewModel(Project project = null)
        {
            Title = project?.Name;
            Project = project;

            MessagingCenter.Subscribe<EditProjectPage, Project>(this, "SaveProject", (obj, prj) =>
            {
                var newProject = prj as Project;
                Title = newProject?.Name;
                Project = newProject;
            });
        }
    }
}
