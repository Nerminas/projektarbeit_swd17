using System;
using System.ComponentModel;
using Xamarin.Forms;

using Raumbuch.ViewModels;

namespace Raumbuch.Views
{
    [DesignTimeVisible(false)]
    public partial class ProjectDetailPage : ContentPage
    {
        ProjectDetailViewModel viewModel;

        public ProjectDetailPage(ProjectDetailViewModel viewModel)
        {
            InitializeComponent();

            BindingContext = this.viewModel = viewModel;
        }

        async void Edit_Clicked(object sender, EventArgs e)
        {
            await Navigation.PushModalAsync(new NavigationPage(new EditProjectPage(viewModel.Project)));
            await Navigation.PopAsync();
        }

        async void Delete_Clicked(object sender, EventArgs e)
        {
            MessagingCenter.Send(this, "DeleteProject", viewModel.Project);
            await Navigation.PopAsync();
        }
    }
}