// discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = report.bind(entity)(tango);
    golf = tango.SpeakingFlags;
    var _closure1_slot4 = golf;
    tango = tango.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.Logger;
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'ConnectionEventFramerateReducer';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot6 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo, argBar) { // Original name: ConnectionEventFramerateReducer
            oscar = argFoo;
            zulu = this;
            var _closure3_slot0 = zulu;
            golf = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = golf.bind(entity)(zulu, report);
            zulu['connection'] = oscar;
            report = argBar;
            zulu['sinkWants'] = report;
            report = function(argFoo, argBar) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    mike = _closure3_slot0;
                    mike = mike.connection;
                    zulu = mike.userId;
                    mike = argFoo;
                    if(!(mike === zulu)) { _fun00002_ip = 60; continue _fun00001 }
 25:
                    zulu = _closure3_slot0;
                    mike = zulu.userSpeakingChange;
                    entity = _closure1_slot4;
                    tango = entity.NONE;
                    entity = argBar;
                    entity = entity === tango;
                    entity = mike.bind(zulu)(entity);
 60:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleSpeaking'] = report;
            tango = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure3_slot0;
                    zulu = mike.connection;
                    mike = zulu.hasDesktopSource;
                    mike = mike.bind(zulu)();
                    if(mike) { _fun00004_ip = 65; continue _fun00003 }
 26:
                    mike = _closure3_slot0;
                    entity = mike.destroyFramerateScaleFactorTimers;
                    entity = entity.bind(mike)();
                    zulu = mike.sinkWants;
                    entity = argFoo;
                    zulu['isMuted'] = entity;
                    entity = mike.updateRemoteWantsFramerate;
                    entity = entity.bind(mike)();
 65:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['handleSelfMute'] = tango;
            golf = _closure1_slot6;
            report = golf.enableNativeLogger;
            tango = true;
            tango = report.bind(golf)(tango);
            verify = oscar.on;
            tango = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 4;
            report = golf[mike];
            report = tango.bind(entity)(report);
            report = report.BaseConnectionEvent;
            options = report.Speaking;
            report = zulu.handleSpeaking;
            report = verify.bind(oscar)(options, report);
            report = oscar.on;
            mike = golf[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.BaseConnectionEvent;
            tango = mike.Mute;
            mike = zulu.handleSelfMute;
            mike = report.bind(oscar)(tango, mike);
            mike = zulu.initialize;
            mike = mike.bind(zulu)();
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'initialize';
        entity['key'] = mike;
        mike = function() { // Original name: value
            zulu = this;
            mike = zulu.userSpeakingChange;
            entity = true;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(5);
        mike[0] = entity;
        entity = {};
        oscar = 'userSpeakingChange';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                tango = mike.connection;
                zulu = tango.hasDesktopSource;
                zulu = zulu.bind(tango)();
                if(zulu) { _fun00006_ip = 119; continue _fun00005 }
 28:
                zulu = mike.destroyFramerateScaleFactorTimers;
                zulu = zulu.bind(mike)();
                zulu = argFoo;
                if(zulu) { _fun00006_ip = 85; continue _fun00005 }
 44:
                zulu = mike.sinkWants;
                zulu = zulu.isMuted;
                if(!zulu) { _fun00006_ip = 119; continue _fun00005 }
 59:
                tango = mike.sinkWants;
                zulu = false;
                tango['isMuted'] = zulu;
                zulu = mike.updateRemoteWantsFramerate;
                zulu = zulu.bind(mike)();
                _fun00006_ip = 119; continue _fun00005;
 85:
                zulu = global;
                report = zulu.setTimeout;
                tango = _closure1_slot5;
                zulu = undefined;
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        mike = _closure3_slot0;
                        mike = mike.connection;
                        mike = mike.destroyed;
                        if(mike) { _fun00008_ip = 111; continue _fun00007 }
 22:
                        tango = _closure1_slot6;
                        zulu = tango.info;
                        golf = _closure1_slot5;
                        mike = global;
                        mike = mike.HermesInternal;
                        oscar = mike.concat;
                        report = 'BaseConnection.userSpeakingChange: Reduced framerate after ';
                        mike = ' ms.';
                        mike = oscar.bind(report)(golf, mike);
                        mike = zulu.bind(tango)(mike);
                        mike = _closure3_slot0;
                        entity = undefined;
                        mike['framerateReductionTimeout'] = entity;
                        zulu = mike.sinkWants;
                        entity = true;
                        zulu['isMuted'] = entity;
                        entity = mike.updateRemoteWantsFramerate;
                        entity = entity.bind(mike)();
 111:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = report.bind(zulu)(entity, tango);
                mike['framerateReductionTimeout'] = entity;
 119:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'destroyFramerateScaleFactorTimers';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                entity = mike.framerateReductionTimeout;
                zulu = 'number';
                entity = typeof entity;
                if(!(zulu === entity)) { _fun00010_ip = 47; continue _fun00009 }
 20:
                entity = global;
                tango = entity.clearTimeout;
                zulu = mike.framerateReductionTimeout;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                mike['framerateReductionTimeout'] = entity;
 47:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'updateRemoteWantsFramerate';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.connection;
            mike = zulu.updateVideoQuality;
            entity = ['remoteSinkWantsMaxFramerate'];
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'destroy';
        entity['key'] = oscar;
        report = function() { // Original name: value
            mike = this;
            entity = mike.destroyFramerateScaleFactorTimers;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[4] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();