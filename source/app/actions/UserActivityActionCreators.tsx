// app/actions/UserActivityActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _getMetadata
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun80359: for(var _fun80359_ip = 0; ; ) switch(_fun80359_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun80359_ip = 267; continue _fun80359 }
 16:
                    mike = offset.metadata;
                    report = null;
                    if(!(report == mike)) { _fun80359_ip = 264; continue _fun80359 }
 31:
                    tango = _closure1_slot4;
                    zulu = tango.getActivityMetadata;
                    zulu = zulu.bind(tango)(verify);
                    if(!(report == zulu)) { _fun80359_ip = 261; continue _fun80359 }
 58:
                    tango = offset.session_id;
                    if(!(report != tango)) { _fun80359_ip = 225; continue _fun80359 }
 71:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 5;
                    tango = golf[tango];
                    options = undefined;
                    tango = report.bind(options)(tango);
                    golf = tango.HTTP;
                    report = golf.get;
                    tango = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    foxtrot = _closure1_slot5;
                    romeo = foxtrot.USER_ACTIVITY_METADATA;
                    yankee = offset.session_id;
                    offset = offset.application_id;
                    offset = romeo.bind(foxtrot)(verify, yankee, offset);
                    tango['url'] = offset;
                    tango = report.bind(golf)(tango);
                    SaveGenerator(address=157);
 155:
                    return tango;
 157:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun80359_ip = 222; continue _fun80359 }
 163:
                    report = tango.body;
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscar = 3;
                    oscar = offset[oscar];
                    options = golf.bind(options)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    offset = 'ACTIVITY_METADATA_UPDATE';
                    oscar['type'] = offset;
                    oscar['metadata'] = report;
                    oscar['userId'] = verify;
                    oscar = golf.bind(options)(oscar);
                    return report;
 222:
                    return tango;
 225:
                    tango = global;
                    oscar = tango.Error;
                    tango = oscar.prototype;
                    report = Object.create(tango, {constructor: {value: oscar}});
                    sizing = 'null/undefined session_id';
                    output = report;
                    tango = new output[oscar](sizing, kilo);
                    tango = tango instanceof Object ? tango : report;
                    throw tango;
 261:
                    return zulu;
 264:
                    return mike;
 267:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'actions/UserActivityActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: sync
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'ACTIVITY_SYNC';
        mike['type'] = report;
        report = argFoo;
        mike['activity'] = report;
        report = argBar;
        mike['userId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['sync'] = tango;
    tango = function(argFoo, argBar) { // Original name: play
        oscar = argFoo;
        report = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = report;
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.getSpotifyMetadataFromActivity;
        report = zulu.bind(tango)(oscar, report);
        tango = report.then;
        zulu = function(argFoo) {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'ACTIVITY_PLAY';
            entity['type'] = tango;
            report = _closure2_slot0;
            entity['activity'] = report;
            tango = _closure2_slot1;
            entity['userId'] = tango;
            tango = argFoo;
            entity['metadata'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        tango = tango.bind(report)(zulu);
        zulu = tango.catch;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'ACTIVITY_PLAY';
            entity['type'] = tango;
            report = _closure2_slot0;
            entity['activity'] = report;
            tango = _closure2_slot1;
            entity['userId'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['play'] = tango;
    mike = function() { // Original name: getMetadata
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getMetadata'] = mike;
    return entity;
})();