// app/modules/teams/TeamActionCreators.tsx
export default (function(_, argBar, __, ___, ____, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot2 = mike;
    mike = {};
    tango = function() { // Original name: fetchTeams
        _fun126937: for(var _fun126937_ip = 0; ; ) switch(_fun126937_ip) {
 0:
            report = arguments[0];
            zulu = undefined;
            if(!(report === zulu)) { _fun126937_ip = 11; continue _fun126937 }
 9:
            report = false;
 11:
            mike = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 1;
            entity = oscar[entity];
            entity = mike.bind(zulu)(entity);
            zulu = entity.HTTP;
            mike = zulu.get;
            entity = {};
            tango = _closure1_slot2;
            tango = tango.TEAMS;
            entity['url'] = tango;
            tango = {};
            tango['include_payout_account_status'] = report;
            entity['query'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    mike['fetchTeams'] = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/teams/TeamActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();