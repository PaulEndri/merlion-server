import Controllers from './controllers';

const routes = [
    {
        route:  'participation/',
        method: 'GET',
        action: Controllers.ParticipationController.search
    },
    {
        route:  'participation/',
        method: 'POST',
        action: Controllers.ClanController.create
    },
    {
        route: 'participation/:id',
        method: 'DELETE',
        action: Controllers.ClanController.delete
    }
];

export default routes;