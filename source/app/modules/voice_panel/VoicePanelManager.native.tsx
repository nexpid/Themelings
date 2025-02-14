// app/modules/voice_panel/VoicePanelManager.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun127530: for(var _fun127530_ip = 0; ; ) switch(_fun127530_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot10;
            entity = entity.bind(zulu)();
            if(entity) { _fun127530_ip = 51; continue _fun127530 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun127530_ip = 92; continue _fun127530;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun127530_ip = 71; continue _fun127530 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun127531: for(var _fun127531_ip = 0; ; ) switch(_fun127531_ip) {
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
            _fun127531_ip = 76; continue _fun127531;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
    entity = function() { // Original name: checkChannelOpened
        _fun127534: for(var _fun127534_ip = 0; ; ) switch(_fun127534_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 7;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isVoicePanelEnabled;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun127534_ip = 102; continue _fun127534 }
 38:
            tango = _closure1_slot7;
            zulu = tango.getChannelId;
            tango = zulu.bind(tango)();
            zulu = null;
            if(!(zulu != tango)) { _fun127534_ip = 102; continue _fun127534 }
 58:
            zulu = _closure1_slot8;
            mike = zulu.getState;
            zulu = mike.bind(zulu)();
            report = zulu.channels;
            mike = report.has;
            mike = mike.bind(report)(tango);
            if(mike) { _fun127534_ip = 102; continue _fun127534 }
 91:
            mike = zulu.openChannel;
            mike = mike.bind(zulu)(tango);
 102:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: VoicePanelManager
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            mike = _closure1_slot3;
            report = _closure2_slot0;
            tango = undefined;
            mike = mike.bind(tango)(oscar, report);
            mike = _closure1_slot9;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            tango = function() { // Original name: VOICE_CHANNEL_SELECT
                mike = _closure1_slot11;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            mike['VOICE_CHANNEL_SELECT'] = tango;
            zulu = function() { // Original name: RTC_CONNECTION_STATE
                mike = _closure1_slot11;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            mike['RTC_CONNECTION_STATE'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot6;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot2;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/VoicePanelManager.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();