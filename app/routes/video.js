import PageableRoute from './pageable';

export default PageableRoute.extend({

    mergeOptions: function(params) {
        var qo = this.get('queryOptions');
        qo.setBatch( {
            instrumentalOnly: true,
            licenseScheme: 'all',
            genre: '-',
            recent: false
        });
        this._super(params);        
    },
});
