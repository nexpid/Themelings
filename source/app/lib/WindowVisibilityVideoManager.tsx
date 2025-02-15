// app/lib/WindowVisibilityVideoManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun52517: for(var _fun52517_ip = 0; ; ) switch(_fun52517_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun52517_ip = 48; continue _fun52517 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, zulu);
            _fun52517_ip = 86; continue _fun52517;
 48:
            oscar = global;
            options = oscar.Reflect;
            golf = options.construct;
            oscar = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 86:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun52518: for(var _fun52518_ip = 0; ; ) switch(_fun52518_ip) {
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
 70: // try_end0
            _fun52518_ip = 74; continue _fun52518;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot10 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = global;
    verify = entity.Object;
    report = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = golf[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = golf[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = {};
    report = 'window-visibility-changed';
    tango['WindowVisibilityChanged'] = report;
    report = 'incoming-video-enabled-changed';
    tango['IncomingVideoEnabledChanged'] = report;
    var _closure1_slot8 = tango;
    report = 11;
    report = golf[report];
    report = options.bind(entity)(report);
    mike = function(argFoo) {
        tango = function() { // Original name: WindowVisibilityVideoManager
            oscar = this;
            entity = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            entity = _closure1_slot9;
            entity = entity.bind(tango)(oscar, report);
            var _closure3_slot0 = entity;
            golf = _closure1_slot0;
            report = _closure1_slot2;
            oscar = 5;
            oscar = report[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.Timeout;
            golf = oscar.prototype;
            golf = Object.create(golf, {constructor: {value: oscar}});
            romeo = golf;
            oscar = new romeo[oscar](yankee);
            oscar = oscar instanceof Object ? oscar : golf;
            entity['disableVideoTimer'] = oscar;
            oscar = true;
            entity['discordVisible'] = oscar;
            entity['incomingVideoEnabled'] = oscar;
            zulu = _closure1_slot1;
            oscar = 6;
            oscar = report[oscar];
            options = zulu.bind(tango)(oscar);
            oscar = options.prototype;
            golf = Object.create(oscar, {constructor: {value: options}});
            yankee = 'WindowVisibilityVideoManager';
            romeo = golf;
            oscar = new romeo[options](yankee, offset);
            oscar = oscar instanceof Object ? oscar : golf;
            entity['logger'] = oscar;
            oscar = 7;
            oscar = report[oscar];
            oscar = zulu.bind(tango)(oscar);
            oscar = oscar.Millis;
            golf = oscar.SECOND;
            oscar = 30;
            oscar = oscar * golf;
            entity['HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS'] = oscar;
            mike = function() {
                _fun52523: for(var _fun52523_ip = 0; ; ) switch(_fun52523_ip) {
 0:
                    entity = _closure3_slot0;
                    report = entity.discordVisible;
                    oscar = _closure1_slot1;
                    entity = _closure1_slot2;
                    golf = 8;
                    mike = entity[golf];
                    entity = undefined;
                    mike = oscar.bind(entity)(mike);
                    mike = mike.bind(entity)();
                    if(!(report !== mike)) { _fun52523_ip = 176; continue _fun52523 }
 49:
                    mike = _closure3_slot0;
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[golf];
                    report = oscar.bind(entity)(report);
                    report = report.bind(entity)();
                    mike['discordVisible'] = report;
                    oscar = mike.emit;
                    tango = _closure1_slot8;
                    report = tango.WindowVisibilityChanged;
                    tango = mike.discordVisible;
                    tango = oscar.bind(mike)(report, tango);
                    mike = mike.discordVisible;
                    tango = _closure3_slot0;
                    zulu = tango.disableVideoTimer;
                    if(mike) { _fun52523_ip = 153; continue _fun52523 }
 127:
                    oscar = zulu.start;
                    report = tango.HIDDEN_WINDOW_DISABLE_VIDEO_DURATION_MS;
                    mike = function() {
                        zulu = _closure3_slot0;
                        mike = zulu.setIncomingVideoEnabled;
                        entity = false;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    mike = oscar.bind(zulu)(report, mike);
                    _fun52523_ip = 176; continue _fun52523;
 153:
                    mike = zulu.stop;
                    mike = mike.bind(zulu)();
                    zulu = tango.setIncomingVideoEnabled;
                    mike = true;
                    mike = zulu.bind(tango)(mike);
 176:
                    return entity;
                }
            };
            entity['update'] = mike;
            mike = 9;
            oscar = report[mike];
            verify = zulu.bind(tango)(oscar);
            options = verify.subscribe;
            golf = entity.update;
            oscar = 'WINDOW_VISIBILITY_CHANGE';
            oscar = options.bind(verify)(oscar, golf);
            mike = report[mike];
            options = zulu.bind(tango)(mike);
            golf = options.subscribe;
            oscar = entity.update;
            mike = 'APP_STATE_UPDATE';
            mike = golf.bind(options)(mike, oscar);
            mike = 10;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.addOnPipModeChangedListener;
            mike = entity.update;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'isIncomingVideoEnabled';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            entity = entity.incomingVideoEnabled;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'setIncomingVideoEnabled';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun52526: for(var _fun52526_ip = 0; ; ) switch(_fun52526_ip) {
 0:
                mike = argFoo;
                tango = this;
                entity = tango.incomingVideoEnabled;
                tango['incomingVideoEnabled'] = mike;
                if(!(entity !== mike)) { _fun52526_ip = 99; continue _fun52526 }
 22:
                zulu = tango.logger;
                mike = zulu.info;
                oscar = tango.incomingVideoEnabled;
                entity = global;
                entity = entity.HermesInternal;
                report = entity.concat;
                entity = 'Incoming video enabled changed, incomingVideoEnabled = ';
                entity = report.bind(entity)(oscar);
                entity = mike.bind(zulu)(entity);
                zulu = tango.emit;
                entity = _closure1_slot8;
                mike = entity.IncomingVideoEnabledChanged;
                entity = tango.incomingVideoEnabled;
                entity = zulu.bind(tango)(mike, entity);
 99:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(report);
    report = mike.prototype;
    report = Object.create(report, {constructor: {value: mike}});
    foxtrot = report;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : report;
    report = 12;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'lib/WindowVisibilityVideoManager.tsx';
    report = oscar.bind(golf)(report);
    zulu['WindowVisibilityEvent'] = tango;
    zulu['WindowVisibilityVideoManager'] = mike;
    return entity;
})();