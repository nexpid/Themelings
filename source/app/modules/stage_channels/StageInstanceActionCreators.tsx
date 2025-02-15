// app/modules/stage_channels/StageInstanceActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: _startStageInstance
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo, argBar, argBaz, argCorge, argGrault) {
            entity = function* (argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: ?anon_0_
                _fun67688: for(var _fun67688_ip = 0; ; ) switch(_fun67688_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67688_ip = 141; continue _fun67688 }
 10:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot3;
                    report = report.STAGE_INSTANCES;
                    mike['url'] = report;
                    report = {};
                    oscar = argFoo;
                    report['channel_id'] = oscar;
                    oscar = argBar;
                    report['topic'] = oscar;
                    oscar = argBaz;
                    report['privacy_level'] = oscar;
                    oscar = argGrault;
                    report['guild_scheduled_event_id'] = oscar;
                    oscar = argCorge;
                    report['send_start_notification'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=124);
 122:
                    return mike;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun67688_ip = 138; continue _fun67688 }
 130:
                    zulu = mike.body;
                    return zulu;
 138:
                    return mike;
 141:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot4 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function() { // Original name: _updateStageInstance
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun67691: for(var _fun67691_ip = 0; ; ) switch(_fun67691_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun67691_ip = 121; continue _fun67691 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 2;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.patch;
                    mike = {};
                    golf = _closure1_slot3;
                    oscar = golf.STAGE_INSTANCE;
                    report = argFoo;
                    report = oscar.bind(golf)(report);
                    mike['url'] = report;
                    report = {};
                    oscar = argBar;
                    report['topic'] = oscar;
                    oscar = argBaz;
                    report['privacy_level'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=104);
 102:
                    return mike;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun67691_ip = 118; continue _fun67691 }
 110:
                    zulu = mike.body;
                    return zulu;
 118:
                    return mike;
 121:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/stage_channels/StageInstanceActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: startStageInstance
        entity = undefined;
        tango = _closure1_slot4;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['startStageInstance'] = tango;
    tango = function() { // Original name: updateStageInstance
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['updateStageInstance'] = tango;
    mike = function(argFoo) { // Original name: endStageInstance
        zulu = _closure1_slot0;
        mike = _closure1_slot1;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.del;
        entity = {};
        oscar = _closure1_slot3;
        report = oscar.STAGE_INSTANCE;
        tango = argFoo;
        tango = report.bind(oscar)(tango);
        entity['url'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['endStageInstance'] = mike;
    return entity;
})();