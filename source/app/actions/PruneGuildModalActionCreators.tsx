// app/actions/PruneGuildModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    golf = oscar[entity];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(golf);
    var _closure1_slot2 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot3 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: updateEstimate
        _fun126557: for(var _fun126557_ip = 0; ; ) switch(_fun126557_ip) {
 0:
            zulu = arguments[1];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun126557_ip = 21; continue _fun126557 }
 18:
            zulu = 7;
 21:
            var _closure2_slot1 = zulu;
            zulu = arguments[2];
            var _closure2_slot2 = zulu;
            zulu = _closure1_slot2;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun126559: for(var _fun126559_ip = 0; ; ) switch(_fun126559_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun126559_ip = 144; continue _fun126559 }
 10:
                        tango = _closure1_slot0;
                        zulu = _closure1_slot1;
                        mike = 2;
                        zulu = zulu[mike];
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        tango = mike.HTTP;
                        zulu = tango.get;
                        mike = {};
                        options = _closure1_slot3;
                        golf = options.GUILD_PRUNE;
                        report = _closure2_slot0;
                        report = golf.bind(options)(report);
                        mike['url'] = report;
                        report = {};
                        golf = _closure2_slot1;
                        report['days'] = golf;
                        oscar = _closure2_slot2;
                        report['include_roles'] = oscar;
                        mike['query'] = report;
                        report = true;
                        mike['oldFormErrors'] = report;
                        report = false;
                        mike['rejectWithError'] = report;
                        mike = zulu.bind(tango)(mike);
                        SaveGenerator(address=119);
 117:
                        return mike;
 119:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun126559_ip = 141; continue _fun126559 }
 125:
                        zulu = mike.body;
                        zulu = zulu.pruned;
                        return zulu;
 141:
                        return mike;
 144:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zulu.bind(mike)(entity);
            entity = entity.bind(mike)();
            return entity;
        }
    };
    mike['updateEstimate'] = golf;
    tango = function(argFoo, argBar, argBaz) { // Original name: prune
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        oscar = _closure1_slot3;
        report = oscar.GUILD_PRUNE;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        report = {};
        tango = argBar;
        report['days'] = tango;
        tango = false;
        report['compute_prune_count'] = tango;
        oscar = argBaz;
        report['include_roles'] = oscar;
        entity['body'] = report;
        report = true;
        entity['oldFormErrors'] = report;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    mike['prune'] = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/PruneGuildModalActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();