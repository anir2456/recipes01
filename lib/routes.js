import { FlowRouter } from 'meteor/kadira:flow-router';

FlowRouter.route('/home', {
    name:"home",
    action: function(){
    	GAnalytics.pageview();
    	BlazeLayout.render("HomeLayout");
    }
});

FlowRouter.route('/recipe-book',{
	name:'recipe-book',
	action: function(){
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'Recipes'})
	}
	});
