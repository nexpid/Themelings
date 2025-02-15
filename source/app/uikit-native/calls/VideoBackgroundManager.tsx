// app/uikit-native/calls/VideoBackgroundManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot7;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot7 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 6;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: VideoBackgroundManager
            golf = this;
            romeo = 0;
            options = copyRestArgs(romeo);
            entity = _closure1_slot1;
            oscar = _closure2_slot0;
            report = undefined;
            entity = entity.bind(report)(golf, oscar);
            tango = _closure1_slot6;
            entity = new Array(0);
            romeo = entity;
            yankee = options;
            offset = 0;
            options = arraySpread(romeo, yankee, offset);
            entity = tango.bind(report)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            tango = _closure1_slot5;
            zulu = tango.getVoiceChannelId;
            zulu = zulu.bind(tango)();
            entity['previousSelectedVoiceChannelId'] = zulu;
            zulu = {};
            entity['cachedDominantColors'] = zulu;
            mike = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    mike = entity.channelId;
                    zulu = _closure3_slot0;
                    zulu = zulu.previousSelectedVoiceChannelId;
                    if(!(zulu !== mike)) { _fun00006_ip = 37; continue _fun00005 }
 25:
                    tango = _closure3_slot0;
                    zulu = {};
                    tango['cachedDominantColors'] = zulu;
 37:
                    entity = _closure3_slot0;
                    entity['previousSelectedVoiceChannelId'] = mike;
                    entity = undefined;
                    return entity;
                }
            };
            entity['_handleSelectVoiceChannel'] = mike;
            mike = {};
            zulu = entity._handleSelectVoiceChannel;
            mike['VOICE_CHANNEL_SELECT'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot4;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot0;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 7;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/calls/VideoBackgroundManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();