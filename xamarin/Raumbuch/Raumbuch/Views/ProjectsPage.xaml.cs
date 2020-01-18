using System;
using System.ComponentModel;
using Xamarin.Forms;
using Raumbuch.Models;
using Raumbuch.ViewModels;

namespace Raumbuch.Views
{
    [DesignTimeVisible(false)]
    public partial class ProjectsPage : ContentPage
    {
        ProjectsViewModel viewModel;

        public ProjectsPage()
        {
            InitializeComponent();

            BindingContext = viewModel = new ProjectsViewModel();
        }

        async void OnProjectSelected(object sender, SelectedItemChangedEventArgs args)
        {
            var project = args.SelectedItem as Project;
            if (project == null)
                return;

            await Navigation.PushAsync(new ProjectDetailPage(new ProjectDetailViewModel(project)));

            // Manually deselect project.
            ProjectsListView.SelectedItem = null;
        }

        async void AddProject_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushModalAsync(new NavigationPage(new NewProjectPage()));
        }

        protected override void OnAppearing()
        {
            base.OnAppearing();

            if (viewModel.Projects.Count == 0)
                viewModel.LoadProjectsCommand.Execute(null);
        }
    }
}