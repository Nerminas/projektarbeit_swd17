using System;
using System.Collections.Generic;
using System.ComponentModel;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

using Raumbuch.Models;

namespace Raumbuch.Views
{
    [DesignTimeVisible(false)]
    public partial class EditProjectPage : ContentPage
    {
        public Project Project { get; set; }
        private Project oldProject;

        public EditProjectPage(Project project)
        {
            InitializeComponent();
            oldProject = project;
            Project = project;

            BindingContext = this;
        }

        async void Save_Clicked(object sender, EventArgs e)
        {
            MessagingCenter.Send(this, "SaveProject", Project);
            await Navigation.PopModalAsync();
        }

        async void Cancel_Clicked(object sender, EventArgs e)
        {
            await Navigation.PopModalAsync();
        }
    }
}