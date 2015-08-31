import PageableRoute from './pageable';


export default PageableRoute.extend({

    routeQueryOptions: {
            instrumentalOnly: true
        },

    routeQueryParams: {
            tags: 'loops'
        },
    
});