// app/modules/application_commands/ApplicationCommandIndexActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _fetchApplicationCommandIndex
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun71200: for(var _fun71200_ip = 0; ; ) switch(_fun71200_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun71200_ip = 277; continue _fun71200 }
 15:
                    var _closure4_slot0 = mike;
                    zulu = argBar;
                    var _closure4_slot1 = zulu;
                    zulu = undefined;
                    var _closure4_slot2 = zulu;
                    var _closure4_slot3 = zulu;
                    var _closure4_slot4 = zulu;
                    var _closure4_slot5 = zulu;
                    var _closure4_slot6 = zulu;
                    var _closure4_slot7 = zulu;
                    tango = global;
                    oscar = tango.performance;
                    tango = oscar.now;
                    tango = tango.bind(oscar)();
                    _closure4_slot3 = tango;
                    tango = 0;
                    _closure4_slot4 = tango;
                    oscar = mike.type;
                    tango = 'channel';
                    if(!(tango !== oscar)) { _fun71200_ip = 193; continue _fun71200 }
 92:
                    tango = 'guild';
                    if(!(tango !== oscar)) { _fun71200_ip = 164; continue _fun71200 }
 100:
                    tango = 'user';
                    if(!(tango !== oscar)) { _fun71200_ip = 145; continue _fun71200 }
 108:
                    tango = 'application';
                    if(!(tango === oscar)) { _fun71200_ip = 220; continue _fun71200 }
 116:
                    golf = _closure1_slot5;
                    oscar = golf.APPLICATION_COMMAND_INDEX_APPLICATION;
                    tango = mike.applicationId;
                    tango = oscar.bind(golf)(tango);
                    _closure4_slot2 = tango;
                    _fun71200_ip = 220; continue _fun71200;
 145:
                    tango = _closure1_slot5;
                    tango = tango.APPLICATION_COMMAND_INDEX_USER;
                    _closure4_slot2 = tango;
                    _fun71200_ip = 220; continue _fun71200;
 164:
                    golf = _closure1_slot5;
                    oscar = golf.APPLICATION_COMMAND_INDEX_GUILD;
                    tango = mike.guildId;
                    tango = oscar.bind(golf)(tango);
                    _closure4_slot2 = tango;
                    _fun71200_ip = 220; continue _fun71200;
 193:
                    oscar = _closure1_slot5;
                    tango = oscar.APPLICATION_COMMAND_INDEX_CHANNEL;
                    mike = mike.channelId;
                    mike = tango.bind(oscar)(mike);
                    _closure4_slot2 = mike;
 220:
                    mike = function() {
                        tango = _closure1_slot3;
                        zulu = undefined;
                        mike = function* (argFoo) {
                            entity = function* (argFoo) { // Original name: ?anon_0_
                                _fun71203: for(var _fun71203_ip = 0; ; ) switch(_fun71203_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                    if(zulu) { _fun71203_ip = 170; continue _fun71203 }
 12:
                                    zulu = argFoo;
                                    var _closure7_slot0 = zulu;
                                    report = _closure4_slot4;
                                    tango = _closure1_slot7;
                                    if(!(!(report >= tango))) { _fun71203_ip = 97; continue _fun71203 }
 37:
                                    tango = global;
                                    report = tango.Promise;
                                    tango = report.prototype;
                                    tango = Object.create(tango, {constructor: {value: report}});
                                    options = function(argFoo) {
                                        entity = global;
                                        tango = entity.setTimeout;
                                        zulu = _closure7_slot0;
                                        mike = undefined;
                                        entity = argFoo;
                                        entity = tango.bind(mike)(entity, zulu);
                                        return entity;
                                    };
                                    verify = tango;
                                    mike = new verify[report](options, golf);
                                    tango = mike instanceof Object ? mike : tango;
                                    SaveGenerator(address=76);
 74:
                                    return tango;
 76:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=1);
                                    if(mike) { _fun71203_ip = 94; continue _fun71203 }
 82:
                                    report = _closure4_slot6;
                                    mike = undefined;
                                    mike = report.bind(mike)();
                                    _fun71203_ip = 167; continue _fun71203;
 94:
                                    return tango;
 97:
                                    golf = _closure4_slot7;
                                    tango = {};
                                    report = true;
                                    tango['error'] = report;
                                    report = undefined;
                                    tango = golf.bind(report)(tango);
                                    tango = _closure1_slot1;
                                    golf = _closure1_slot2;
                                    zulu = 2;
                                    zulu = golf[zulu];
                                    report = tango.bind(report)(zulu);
                                    tango = report.dispatch;
                                    zulu = {};
                                    golf = 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE';
                                    zulu['type'] = golf;
                                    oscar = _closure4_slot0;
                                    zulu['target'] = oscar;
                                    mike = tango.bind(report)(zulu);
 167:
                                    return mike;
 170:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure5_slot0 = mike;
                        entity = function() {
                            entity = undefined;
                            tango = _closure5_slot0;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        return entity;
                    };
                    mike = mike.bind(zulu)();
                    _closure4_slot5 = mike;
                    mike = function() { // Original name: fetch
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        mike = 3;
                        zulu = zulu[mike];
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
                        tango = mike.HTTP;
                        zulu = tango.get;
                        mike = {};
                        golf = _closure4_slot2;
                        mike['url'] = golf;
                        golf = _closure1_slot7;
                        oscar = _closure4_slot4;
                        golf = golf - oscar;
                        oscar = 1;
                        oscar = golf - oscar;
                        mike['retries'] = oscar;
                        report = _closure4_slot1;
                        report = report.signal;
                        mike['signal'] = report;
                        report = function() { // Original name: onRequestCreated
                            entity = _closure4_slot4;
                            entity = parseFloat(entity);
                            mike = entity + 1;
                            _closure4_slot4 = mike;
                            return entity;
                        };
                        mike['onRequestCreated'] = report;
                        report = false;
                        mike['rejectWithError'] = report;
                        tango = zulu.bind(tango)(mike);
                        zulu = tango.then;
                        mike = function(argFoo) {
                            _fun71208: for(var _fun71208_ip = 0; ; ) switch(_fun71208_ip) {
 0:
                                tango = argFoo;
                                mike = tango.status;
                                entity = 202;
                                if(!(entity !== mike)) { _fun71208_ip = 102; continue _fun71208 }
 15:
                                mike = _closure4_slot7;
                                entity = {};
                                zulu = false;
                                entity['error'] = zulu;
                                zulu = undefined;
                                entity = mike.bind(zulu)(entity);
                                mike = _closure1_slot1;
                                oscar = _closure1_slot2;
                                entity = 2;
                                entity = oscar[entity];
                                zulu = mike.bind(zulu)(entity);
                                mike = zulu.dispatch;
                                entity = {};
                                oscar = 'APPLICATION_COMMAND_INDEX_FETCH_SUCCESS';
                                entity['type'] = oscar;
                                report = _closure4_slot0;
                                entity['target'] = report;
                                tango = tango.body;
                                entity['index'] = tango;
                                entity = mike.bind(zulu)(entity);
                                _fun71208_ip = 123; continue _fun71208;
 102:
                                tango = _closure4_slot5;
                                zulu = _closure1_slot6;
                                mike = undefined;
                                entity = tango.bind(mike)(zulu);
 123:
                                return entity;
                            }
                        };
                        entity = function(argFoo) {
                            _fun71209: for(var _fun71209_ip = 0; ; ) switch(_fun71209_ip) {
 0:
                                zulu = argFoo;
                                mike = _closure4_slot1;
                                mike = mike.signal;
                                mike = mike.aborted;
                                if(mike) { _fun71209_ip = 181; continue _fun71209 }
 28:
                                tango = zulu.status;
                                mike = 429;
                                if(!(mike !== tango)) { _fun71209_ip = 118; continue _fun71209 }
 43:
                                tango = _closure4_slot7;
                                mike = {};
                                report = true;
                                mike['error'] = report;
                                report = undefined;
                                mike = tango.bind(report)(mike);
                                tango = _closure1_slot1;
                                oscar = _closure1_slot2;
                                mike = 2;
                                mike = oscar[mike];
                                report = tango.bind(report)(mike);
                                tango = report.dispatch;
                                mike = {};
                                oscar = 'APPLICATION_COMMAND_INDEX_FETCH_FAILURE';
                                mike['type'] = oscar;
                                oscar = _closure4_slot0;
                                mike['target'] = oscar;
                                mike = tango.bind(report)(mike);
                                _fun71209_ip = 179; continue _fun71209;
 118:
                                report = _closure4_slot5;
                                zulu = zulu.body;
                                oscar = zulu.retry_after;
                                golf = _closure1_slot1;
                                tango = _closure1_slot2;
                                zulu = 4;
                                zulu = tango[zulu];
                                tango = undefined;
                                zulu = golf.bind(tango)(zulu);
                                zulu = zulu.Millis;
                                zulu = zulu.SECOND;
                                zulu = oscar * zulu;
                                mike = report.bind(tango)(zulu);
 179:
                                return mike;
 181:
                                zulu = _closure4_slot7;
                                mike = {};
                                entity = true;
                                mike['error'] = entity;
                                entity = undefined;
                                mike = zulu.bind(entity)(mike);
                                return entity;
                            }
                        };
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    _closure4_slot6 = mike;
                    tango = function(argFoo) { // Original name: end
                        entity = argFoo;
                        verify = entity.error;
                        options = global;
                        mike = options.performance;
                        entity = mike.now;
                        mike = entity.bind(mike)();
                        entity = _closure4_slot3;
                        offset = mike - entity;
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 5;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.track;
                        mike = _closure1_slot4;
                        zulu = mike.APPLICATION_COMMAND_PERFORMANCE;
                        mike = {};
                        mike['duration_ms'] = offset;
                        mike['error'] = verify;
                        verify = _closure4_slot1;
                        verify = verify.signal;
                        verify = verify.aborted;
                        mike['aborted'] = verify;
                        verify = true;
                        mike['include_applications'] = verify;
                        yankee = options.Math;
                        offset = yankee.max;
                        verify = _closure4_slot4;
                        options = 1;
                        verify = verify - options;
                        options = 0;
                        options = offset.bind(yankee)(verify, options);
                        mike['retries'] = options;
                        options = null;
                        mike['kind'] = options;
                        mike['command_type'] = options;
                        options = _closure4_slot2;
                        mike['url'] = options;
                        golf = _closure4_slot0;
                        options = golf.type;
                        mike['target_type'] = options;
                        oscar = _closure1_slot9;
                        oscar = oscar.bind(entity)(golf);
                        mike['target_id'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    _closure4_slot7 = tango;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=265);
 263:
                    return mike;
 265:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun71200_ip = 274; continue _fun71200 }
 271:
                    return zulu;
 274:
                    return mike;
 277:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo) { // Original name: getTargetId
        _fun71211: for(var _fun71211_ip = 0; ; ) switch(_fun71211_ip) {
 0:
            entity = argFoo;
            zulu = entity.type;
            mike = 'channel';
            if(!(mike !== zulu)) { _fun71211_ip = 96; continue _fun71211 }
 16:
            mike = 'guild';
            if(!(mike !== zulu)) { _fun71211_ip = 89; continue _fun71211 }
 24:
            mike = 'user';
            if(!(mike !== zulu)) { _fun71211_ip = 85; continue _fun71211 }
 32:
            mike = 'application';
            if(!(mike !== zulu)) { _fun71211_ip = 78; continue _fun71211 }
 40:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 6;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.assertNever;
            zulu = zulu.bind(tango)(entity);
            return mike;
 78:
            mike = entity.applicationId;
            return mike;
 85:
            mike = null;
            return mike;
 89:
            mike = entity.guildId;
            return mike;
 96:
            entity = entity.channelId;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
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
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot4 = golf;
    tango = tango.Endpoints;
    var _closure1_slot5 = tango;
    tango = 5000;
    var _closure1_slot6 = tango;
    tango = 3;
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/application_commands/ApplicationCommandIndexActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: fetchApplicationCommandIndex
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchApplicationCommandIndex'] = tango;
    mike = function(argFoo) { // Original name: requestApplicationCommandIndex
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'APPLICATION_COMMAND_INDEX_FETCH_REQUEST';
        mike['type'] = report;
        report = argFoo;
        mike['target'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['requestApplicationCommandIndex'] = mike;
    return entity;
})();