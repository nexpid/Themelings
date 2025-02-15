// app/modules/calls/NativeMuteManager.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = tango.MediaEngineContextTypes;
    var _closure1_slot6 = tango;
    tango = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: NativeMuteManager
            mike = this;
            var _closure3_slot0 = mike;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(mike, report);
            report = false;
            mike['ignoreForNativeUnmute'] = report;
            mike['needToUnmuteNative'] = report;
            mike['ignoreForAudioRouteChange'] = report;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            report = 4;
            report = golf[report];
            report = oscar.bind(entity)(report);
            report = report.Timeout;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            offset = oscar;
            report = new offset[report](verify);
            report = report instanceof Object ? report : oscar;
            mike['audioRouteChangeIgnoreTimer'] = report;
            report = 300;
            mike['AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS'] = report;
            tango = function() {
                _fun52864: for(var _fun52864_ip = 0; ; ) switch(_fun52864_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = mike.audioRouteChangeIgnoreTimer;
                    mike = zulu.isStarted;
                    mike = mike.bind(zulu)();
                    if(!mike) { _fun52864_ip = 46; continue _fun52864 }
 26:
                    mike = _closure3_slot0;
                    zulu = mike.audioRouteChangeIgnoreTimer;
                    mike = zulu.stop;
                    mike = mike.bind(zulu)();
 46:
                    entity = _closure3_slot0;
                    mike = true;
                    entity['ignoreForAudioRouteChange'] = mike;
                    tango = entity.audioRouteChangeIgnoreTimer;
                    zulu = tango.start;
                    mike = entity.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS;
                    entity = function() {
                        mike = _closure3_slot0;
                        entity = false;
                        mike['ignoreForAudioRouteChange'] = entity;
                        entity = undefined;
                        return entity;
                    };
                    entity = zulu.bind(tango)(mike, entity);
                    entity = undefined;
                    return entity;
                }
            };
            mike['handleAudioRouteChange'] = tango;
            tango = _closure1_slot5;
            zulu = tango.addChangeListener;
            mike = mike.handleAudioRouteChange;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'nativeMuteChanged';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun52866: for(var _fun52866_ip = 0; ; ) switch(_fun52866_ip) {
 0:
                tango = this;
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 5;
                zulu = zulu[entity];
                entity = undefined;
                report = report.bind(entity)(zulu);
                zulu = report.hasActiveCall;
                zulu = zulu.bind(report)();
                if(zulu) { _fun52866_ip = 121; continue _fun52866 }
 41:
                zulu = tango.ignoreForNativeUnmute;
                if(zulu) { _fun52866_ip = 111; continue _fun52866 }
 50:
                zulu = tango.ignoreForAudioRouteChange;
                if(zulu) { _fun52866_ip = 109; continue _fun52866 }
 59:
                zulu = true;
                tango['needToUnmuteNative'] = zulu;
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 6;
                zulu = oscar[zulu];
                oscar = report.bind(entity)(zulu);
                report = oscar.toggleSelfMute;
                zulu = {};
                golf = false;
                zulu['playSoundEffect'] = golf;
                zulu = report.bind(oscar)(zulu);
                _fun52866_ip = 166; continue _fun52866;
 109:
                return entity;
 111:
                zulu = false;
                tango['ignoreForNativeUnmute'] = zulu;
                return entity;
 121:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 6;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.setSelfMute;
                mike = _closure1_slot6;
                zulu = mike.DEFAULT;
                mike = argFoo;
                mike = tango.bind(report)(zulu, mike);
 166:
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'updateNativeMute';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun52867: for(var _fun52867_ip = 0; ; ) switch(_fun52867_ip) {
 0:
                report = this;
                entity = report.needToUnmuteNative;
                if(!entity) { _fun52867_ip = 121; continue _fun52867 }
 12:
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 5;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.hasActiveCall;
                mike = mike.bind(tango)();
                if(mike) { _fun52867_ip = 121; continue _fun52867 }
 50:
                tango = false;
                report['needToUnmuteNative'] = tango;
                mike = true;
                report['ignoreForNativeUnmute'] = mike;
                mike = _closure1_slot0;
                report = _closure1_slot2;
                entity = 7;
                entity = report[entity];
                mike = mike.bind(zulu)(entity);
                entity = mike.getVoiceEngine;
                zulu = entity.bind(mike)();
                mike = zulu.setNativeMuteState;
                entity = null;
                if(!(entity != mike)) { _fun52867_ip = 121; continue _fun52867 }
 110:
                entity = mike.call;
                entity = entity.bind(mike)(zulu, tango);
 121:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    foxtrot = golf;
    tango = new foxtrot[tango](romeo);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot7 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: NativeMuteManagerWrapper
            tango = _closure1_slot3;
            zulu = _closure2_slot0;
            entity = undefined;
            mike = this;
            mike = tango.bind(entity)(mike, zulu);
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'nativeMuteChanged';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            zulu = _closure1_slot7;
            mike = zulu.nativeMuteChanged;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'updateNativeMute';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = _closure1_slot7;
            entity = mike.updateNativeMute;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/calls/NativeMuteManager.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();