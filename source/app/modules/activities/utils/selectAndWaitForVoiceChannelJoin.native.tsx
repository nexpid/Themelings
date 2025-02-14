// app/modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun74950: for(var _fun74950_ip = 0; ; ) switch(_fun74950_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun74950_ip = 51; continue _fun74950 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun74950_ip = 92; continue _fun74950;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun74950_ip = 71; continue _fun74950 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun74951: for(var _fun74951_ip = 0; ; ) switch(_fun74951_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun74951_ip = 76; continue _fun74951;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _selectAndWaitForVoiceChannelJoin
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun74956: for(var _fun74956_ip = 0; ; ) switch(_fun74956_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(golf) { _fun74956_ip = 175; continue _fun74956 }
 15:
                    options = mike.channelId;
                    oscar = options;
                    var _closure4_slot0 = options;
                    mike = mike.timeoutMs;
                    verify = undefined;
                    if(!(mike === verify)) { _fun74956_ip = 46; continue _fun74956 }
 39:
                    mike = _closure1_slot9;
 46:
                    var _closure4_slot1 = mike;
                    report = undefined;
                    SaveGenerator(address=56);
 54:
                    return verify;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golf) { _fun74956_ip = 172; continue _fun74956 }
 62:
                    golf = global;
                    options = golf.Promise;
                    golf = options.prototype;
                    golf = Object.create(golf, {constructor: {value: options}});
                    yankee = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = argBar;
                        var _closure5_slot1 = entity;
                        entity = global;
                        report = entity.setTimeout;
                        tango = _closure4_slot1;
                        entity = undefined;
                        zulu = function() {
                            zulu = _closure5_slot1;
                            tango = _closure1_slot10;
                            entity = tango.prototype;
                            mike = Object.create(entity, {constructor: {value: tango}});
                            report = 'Joining voice channel has timed out.';
                            oscar = mike;
                            entity = new oscar[tango](report, tango);
                            mike = entity instanceof Object ? entity : mike;
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            return entity;
                        };
                        zulu = report.bind(entity)(zulu, tango);
                        var _closure5_slot2 = zulu;
                        tango = _closure1_slot8;
                        zulu = tango.addConditionalChangeListener;
                        mike = function() {
                            _fun74959: for(var _fun74959_ip = 0; ; ) switch(_fun74959_ip) {
 0:
                                mike = _closure1_slot8;
                                entity = mike.getVoiceChannelId;
                                mike = entity.bind(mike)();
                                entity = _closure4_slot0;
                                entity = mike !== entity;
                                if(entity) { _fun74959_ip = 63; continue _fun74959 }
 31:
                                mike = global;
                                report = mike.clearTimeout;
                                tango = _closure5_slot2;
                                zulu = undefined;
                                tango = report.bind(zulu)(tango);
                                mike = _closure5_slot0;
                                mike = mike.bind(zulu)();
                                entity = false;
 63:
                                return entity;
                            }
                        };
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    romeo = golf;
                    tango = new romeo[options](yankee, offset);
                    report = tango instanceof Object ? tango : golf;
                    options = _closure1_slot0;
                    offset = _closure1_slot1;
                    golf = 8;
                    golf = offset[golf];
                    options = options.bind(verify)(golf);
                    golf = options.selectVoiceChannel;
                    oscar = golf.bind(options)(oscar);
 131: // try_start_0
                    SaveGenerator(address=135);
 133:
                    return report;
 135:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun74956_ip = 146; continue _fun74956 }
 141: // try_end0
                    oscar = true;
                    return oscar;
 146:
                    return report;
 149: // catch_target0
                    CatchBlockStart(arg_register=4);
                    zulu = report;
                    tango = _closure1_slot10;
                    tango = report instanceof tango;
                    if(tango) { _fun74956_ip = 167; continue _fun74956 }
 165:
                    throw zulu;
 167:
                    zulu = false;
                    return zulu;
 172:
                    return mike;
 175:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    tango = global;
    verify = tango.Object;
    golf = verify.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, oscar);
    entity = 0;
    oscar = report[entity];
    entity = undefined;
    oscar = options.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = report[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = report[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = report[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 4;
    oscar = report[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 5;
    oscar = report[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 6;
    oscar = report[oscar];
    oscar = options.bind(entity)(oscar);
    golf = 7;
    golf = report[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 10000;
    var _closure1_slot9 = golf;
    tango = tango.Error;
    oscar = oscar.bind(entity)(tango);
    tango = function(argFoo) {
        zulu = function() { // Original name: JoinTimeoutError
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot4;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot3;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    tango = tango.bind(entity)(oscar);
    var _closure1_slot10 = tango;
    tango = 9;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: selectAndWaitForVoiceChannelJoin
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();