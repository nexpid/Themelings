// app/modules/activities/utils/confirmActivityLaunchChecks.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: getOrFetchApplicationForLaunch
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _getOrFetchApplicationForLaunch
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun74003: for(var _fun74003_ip = 0; ; ) switch(_fun74003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun74003_ip = 199; continue _fun74003 }
 10:
                    options = argFoo;
                    verify = argBar;
 16: // try_start_0
                    zulu = _closure1_slot1;
                    tango = _closure1_slot2;
                    mike = 4;
                    mike = tango[mike];
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = options;
                    mike = verify;
                    mike = tango.bind(report)(zulu, mike);
                    SaveGenerator(address=57);
 55:
                    return mike;
 57:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun74003_ip = 66; continue _fun74003 }
 63: // try_end0
                    return mike;
 66:
                    return mike;
 69: // catch_target0
                    CatchBlockStart(arg_register=5);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {'type': 'EMBEDDED_ACTIVITY_LAUNCH_FAIL', 'nonce': ''};
                    zulu['applicationId'] = options;
                    offset = verify;
                    options = null;
                    offset = options != offset;
                    if(!offset) { _fun74003_ip = 134; continue _fun74003 }
 131:
                    options = verify;
 134:
                    zulu['channelId'] = options;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 6;
                    golf = verify[golf];
                    golf = options.bind(mike)(golf);
                    options = golf.APIError;
                    romeo = oscar;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    foxtrot = golf;
                    oscar = new foxtrot[options](romeo, yankee);
                    oscar = oscar instanceof Object ? oscar : golf;
                    zulu['error'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 199:
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
    entity = function() { // Original name: _confirmActivityChange
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun74006: for(var _fun74006_ip = 0; ; ) switch(_fun74006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun74006_ip = 104; continue _fun74006 }
 9:
                    mike = argFoo;
                    report = mike.currentEmbeddedApplication;
                    var _closure4_slot0 = report;
                    mike = undefined;
                    SaveGenerator(address=28);
 26:
                    return mike;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun74006_ip = 101; continue _fun74006 }
 34:
                    tango = null;
                    if(!(tango != report)) { _fun74006_ip = 93; continue _fun74006 }
 40:
                    tango = global;
                    report = tango.Promise;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    oscar = function(argFoo) {
                        _fun74007: for(var _fun74007_ip = 0; ; ) switch(_fun74007_ip) {
 0:
                            golf = argFoo;
                            var _closure5_slot0 = golf;
                            zulu = _closure1_slot5;
                            entity = zulu.getSelfEmbeddedActivities;
                            oscar = entity.bind(zulu)();
                            report = oscar.get;
                            entity = _closure4_slot0;
                            entity = entity.id;
                            options = report.bind(oscar)(entity);
                            var _closure5_slot1 = options;
                            oscar = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 7;
                            report = report[entity];
                            entity = undefined;
                            offset = oscar.bind(entity)(report);
                            verify = offset.getEmbeddedActivityLocationChannelId;
                            report = null;
                            yankee = report == options;
                            oscar = undefined;
                            if(yankee) { _fun74007_ip = 96; continue _fun74007 }
 91:
                            oscar = options.location;
 96:
                            offset = verify.bind(offset)(oscar);
                            verify = _closure1_slot4;
                            oscar = verify.getChannel;
                            oscar = oscar.bind(verify)(offset);
                            if(!(report != options)) { _fun74007_ip = 123; continue _fun74007 }
 119:
                            if(!(report == oscar)) { _fun74007_ip = 132; continue _fun74007 }
 123:
                            report = true;
                            report = golf.bind(entity)(report);
                            _fun74007_ip = 179; continue _fun74007;
 132:
                            report = _closure1_slot1;
                            golf = _closure1_slot2;
                            tango = 8;
                            tango = golf[tango];
                            report = report.bind(entity)(tango);
                            kilo = _closure4_slot0;
                            foxtrot = function() {
                                zulu = _closure1_slot1;
                                mike = _closure1_slot2;
                                entity = 9;
                                mike = mike[entity];
                                entity = undefined;
                                mike = zulu.bind(entity)(mike);
                                report = mike.bind(entity)();
                                tango = report.leaveActivity;
                                zulu = {};
                                oscar = _closure5_slot1;
                                oscar = oscar.location;
                                zulu['location'] = oscar;
                                oscar = _closure4_slot0;
                                oscar = oscar.id;
                                zulu['applicationId'] = oscar;
                                zulu = tango.bind(report)(zulu);
                                zulu = _closure5_slot0;
                                mike = true;
                                mike = zulu.bind(entity)(mike);
                                return entity;
                            };
                            romeo = function() {
                                zulu = _closure5_slot0;
                                mike = undefined;
                                entity = false;
                                entity = zulu.bind(mike)(entity);
                                return entity;
                            };
                            sizing = undefined;
                            backup = oscar;
                            mike = sizing[report](kilo, backup, foxtrot, romeo, yankee);
 179:
                            return entity;
                        }
                    };
                    golf = tango;
                    zulu = new golf[report](oscar, report);
                    zulu = zulu instanceof Object ? zulu : tango;
                    SaveGenerator(address=79);
 77:
                    return zulu;
 79:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun74006_ip = 98; continue _fun74006 }
 85:
                    if(zulu) { _fun74006_ip = 93; continue _fun74006 }
 88:
                    tango = false;
                    return tango;
 93:
                    tango = true;
                    return tango;
 98:
                    return zulu;
 101:
                    return mike;
 104:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _confirmActivityAgeGate
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun74012: for(var _fun74012_ip = 0; ; ) switch(_fun74012_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun74012_ip = 225; continue _fun74012 }
 15:
                    oscar = mike.application;
                    verify = mike.applicationId;
                    offset = mike.channel;
                    var _closure4_slot0 = offset;
                    report = mike.user;
                    tango = undefined;
                    var _closure4_slot1 = tango;
                    SaveGenerator(address=49);
 47:
                    return tango;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golf) { _fun74012_ip = 222; continue _fun74012 }
 58:
                    golf = report.nsfwAllowed;
                    report = null;
                    if(!(report == golf)) { _fun74012_ip = 209; continue _fun74012 }
 73:
                    if(!(report == oscar)) { _fun74012_ip = 120; continue _fun74012 }
 77:
                    options = _closure1_slot7;
                    yankee = report == offset;
                    golf = undefined;
                    if(yankee) { _fun74012_ip = 98; continue _fun74012 }
 93:
                    golf = offset.id;
 98:
                    golf = options.bind(tango)(verify, golf);
                    SaveGenerator(address=108);
 106:
                    return golf;
 108:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    oscar = golf;
                    if(!options) { _fun74012_ip = 120; continue _fun74012 }
 117:
                    return golf;
 120:
                    _closure4_slot1 = oscar;
                    if(!(report != oscar)) { _fun74012_ip = 217; continue _fun74012 }
 128:
                    oscar = oscar.embeddedActivityConfig;
                    golf = report == oscar;
                    tango = undefined;
                    if(golf) { _fun74012_ip = 149; continue _fun74012 }
 143:
                    tango = oscar.requires_age_gate;
 149:
                    if(!(report != tango)) { _fun74012_ip = 209; continue _fun74012 }
 153:
                    if(!tango) { _fun74012_ip = 209; continue _fun74012 }
 156:
                    tango = global;
                    report = tango.Promise;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    foxtrot = function(argFoo) {
                        _fun74013: for(var _fun74013_ip = 0; ; ) switch(_fun74013_ip) {
 0:
                            entity = argFoo;
                            var _closure5_slot0 = entity;
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 10;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.confirmActivityAgeGateAlert;
                            mike = {};
                            oscar = _closure4_slot1;
                            mike['application'] = oscar;
                            options = _closure4_slot0;
                            oscar = null;
                            options = oscar == options;
                            oscar = undefined;
                            if(options) { _fun74013_ip = 77; continue _fun74013 }
 68:
                            golf = _closure4_slot0;
                            oscar = golf.id;
 77:
                            mike['channelId'] = oscar;
                            oscar = function() { // Original name: onAgree
                                zulu = _closure5_slot0;
                                mike = undefined;
                                entity = true;
                                entity = zulu.bind(mike)(entity);
                                return entity;
                            };
                            mike['onAgree'] = oscar;
                            report = function() { // Original name: onDisagree
                                zulu = _closure5_slot0;
                                mike = undefined;
                                entity = false;
                                entity = zulu.bind(mike)(entity);
                                return entity;
                            };
                            mike['onDisagree'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    backup = tango;
                    zulu = new backup[report](foxtrot, romeo);
                    zulu = zulu instanceof Object ? zulu : tango;
                    SaveGenerator(address=195);
 193:
                    return zulu;
 195:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun74012_ip = 214; continue _fun74012 }
 201:
                    if(zulu) { _fun74012_ip = 209; continue _fun74012 }
 204:
                    tango = false;
                    return tango;
 209:
                    tango = true;
                    return tango;
 214:
                    return zulu;
 217:
                    zulu = false;
                    return zulu;
 222:
                    return mike;
 225:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _confirmExternalAppLaunch
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun74018: for(var _fun74018_ip = 0; ; ) switch(_fun74018_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun74018_ip = 256; continue _fun74018 }
 15:
                    tango = mike.application;
                    options = mike.applicationId;
                    verify = mike.channel;
                    offset = undefined;
                    var _closure4_slot0 = offset;
                    SaveGenerator(address=40);
 38:
                    return offset;
 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun74018_ip = 253; continue _fun74018 }
 49:
                    zulu = null;
                    if(!(zulu == tango)) { _fun74018_ip = 98; continue _fun74018 }
 55:
                    golf = _closure1_slot7;
                    yankee = zulu == verify;
                    report = undefined;
                    if(yankee) { _fun74018_ip = 76; continue _fun74018 }
 71:
                    report = verify.id;
 76:
                    report = golf.bind(offset)(options, report);
                    SaveGenerator(address=86);
 84:
                    return report;
 86:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    tango = report;
                    if(!golf) { _fun74018_ip = 98; continue _fun74018 }
 95:
                    return report;
 98:
                    _closure4_slot0 = tango;
                    zulu = zulu != tango;
                    if(!zulu) { _fun74018_ip = 250; continue _fun74018 }
 112:
                    verify = _closure1_slot0;
                    yankee = _closure1_slot2;
                    golf = 11;
                    golf = yankee[golf];
                    yankee = verify.bind(offset)(golf);
                    offset = yankee.hasFlag;
                    verify = tango.flags;
                    golf = _closure1_slot6;
                    golf = golf.EMBEDDED_RELEASED;
                    golf = offset.bind(yankee)(verify, golf);
                    golf = !golf;
                    if(!golf) { _fun74018_ip = 177; continue _fun74018 }
 168:
                    tango = tango.isVerified;
                    golf = !tango;
 177:
                    tango = !golf;
                    if(!golf) { _fun74018_ip = 247; continue _fun74018 }
 183:
                    golf = _closure1_slot5;
                    report = golf.hasActivityEverBeenLaunched;
                    report = report.bind(golf)(options);
                    golf = !report;
                    report = !golf;
                    if(!golf) { _fun74018_ip = 244; continue _fun74018 }
 209:
                    golf = global;
                    options = golf.Promise;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    foxtrot = function(argFoo) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.confirmExternalAppLaunchAlert;
                        mike = {};
                        oscar = _closure4_slot0;
                        mike['application'] = oscar;
                        oscar = function() { // Original name: onConfirm
                            zulu = _closure5_slot0;
                            mike = undefined;
                            entity = true;
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        mike['onConfirm'] = oscar;
                        report = function() { // Original name: onCancel
                            zulu = _closure5_slot0;
                            mike = undefined;
                            entity = false;
                            entity = zulu.bind(mike)(entity);
                            return entity;
                        };
                        mike['onCancel'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    backup = golf;
                    oscar = new backup[options](foxtrot, romeo);
                    report = oscar instanceof Object ? oscar : golf;
 244:
                    tango = report;
 247:
                    zulu = tango;
 250:
                    return zulu;
 253:
                    return mike;
 256:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _confirmActivityLaunchChecks
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun74024: for(var _fun74024_ip = 0; ; ) switch(_fun74024_ip) {
 0:
                    StartGenerator();
                    oscar = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun74024_ip = 127; continue _fun74024 }
 12:
                    zulu = {};
                    mike = oscar.currentEmbeddedApplication;
                    zulu['currentEmbeddedApplication'] = mike;
                    mike = function() { // Original name: confirmActivityChange
                        entity = undefined;
                        tango = _closure1_slot9;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    report = undefined;
                    mike = mike.bind(report)(zulu);
                    SaveGenerator(address=43);
 41:
                    return mike;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun74024_ip = 124; continue _fun74024 }
 49:
                    if(mike) { _fun74024_ip = 57; continue _fun74024 }
 52:
                    zulu = false;
                    return zulu;
 57:
                    zulu = function() { // Original name: confirmActivityAgeGate
                        entity = undefined;
                        tango = _closure1_slot10;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    zulu = zulu.bind(report)(oscar);
                    SaveGenerator(address=73);
 71:
                    return zulu;
 73:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun74024_ip = 121; continue _fun74024 }
 79:
                    if(zulu) { _fun74024_ip = 87; continue _fun74024 }
 82:
                    golf = false;
                    return golf;
 87:
                    tango = function() { // Original name: confirmExternalAppLaunch
                        entity = undefined;
                        tango = _closure1_slot11;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    tango = tango.bind(report)(oscar);
                    SaveGenerator(address=103);
 101:
                    return tango;
 103:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun74024_ip = 118; continue _fun74024 }
 109:
                    report = !tango;
                    report = !report;
                    return report;
 118:
                    return tango;
 121:
                    return zulu;
 124:
                    return mike;
 127:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ApplicationFlags;
    var _closure1_slot6 = tango;
    tango = 13;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/confirmActivityLaunchChecks.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: confirmActivityLaunchChecks
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['confirmActivityLaunchChecks'] = mike;
    return entity;
})();