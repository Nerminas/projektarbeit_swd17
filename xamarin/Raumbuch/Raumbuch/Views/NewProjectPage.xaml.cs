using System;
using System.Collections.Generic;
using System.ComponentModel;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

using Raumbuch.Models;

namespace Raumbuch.Views
{
    // Learn more about making custom code visible in the Xamarin.Forms previewer
    // by visiting https://aka.ms/xamarinforms-previewer
    [DesignTimeVisible(false)]
    public partial class NewProjectPage : ContentPage
    {
        public Project Project { get; set; }

        public NewProjectPage()
        {
            InitializeComponent();

            Project = new Project
            {
                Name = "",
                Customernumber = "",
                Adress = "",
                Phone = "",
                Email = ""
            };

            BindingContext = this;
        }

        async void Save_Clicked(object sender, EventArgs e)
        {
            MessagingCenter.Send(this, "AddProject", Project);
            await Navigation.PopModalAsync();
        }

        async void Cancel_Clicked(object sender, EventArgs e)
        {
            await Navigation.PopModalAsync();
        }
    }
}