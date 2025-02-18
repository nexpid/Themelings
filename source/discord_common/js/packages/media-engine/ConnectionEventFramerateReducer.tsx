// discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.SpeakingFlags;
    var _closure1_slot4 = golfie;
    tangon = tangon.VIDEO_QUALITY_FRAMRATE_NOT_SPEAKING_TIMEOUT;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Logger;
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'ConnectionEventFramerateReducer';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot6 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar) { // Original name: ConnectionEventFramerateReducer
            oscard = argFoo;
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            golfie = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = golfie.bind(entity)(zuuluu, report);
            zuuluu['connection'] = oscard;
            report = argBar;
            zuuluu['sinkWants'] = report;
            report = function(argFoo, argBar) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    michal = _closure3_slot0;
                    michal = michal.connection;
                    zuuluu = michal.userId;
                    michal = argFoo;
                    if(!(michal === zuuluu)) { _fun00002_ip = 60; continue _fun00001 }
 25:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.userSpeakingChange;
                    entity = _closure1_slot4;
                    tangon = entity.NONE;
                    entity = argBar;
                    entity = entity === tangon;
                    entity = michal.bind(zuuluu)(entity);
 60:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleSpeaking'] = report;
            tangon = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure3_slot0;
                    zuuluu = michal.connection;
                    michal = zuuluu.hasDesktopSource;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00004_ip = 65; continue _fun00003 }
 26:
                    michal = _closure3_slot0;
                    entity = michal.destroyFramerateScaleFactorTimers;
                    entity = entity.bind(michal)();
                    zuuluu = michal.sinkWants;
                    entity = argFoo;
                    zuuluu['isMuted'] = entity;
                    entity = michal.updateRemoteWantsFramerate;
                    entity = entity.bind(michal)();
 65:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['handleSelfMute'] = tangon;
            golfie = _closure1_slot6;
            report = golfie.enableNativeLogger;
            tangon = true;
            tangon = report.bind(golfie)(tangon);
            verify = oscard.on;
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 4;
            report = golfie[michal];
            report = tangon.bind(entity)(report);
            report = report.BaseConnectionEvent;
            option = report.Speaking;
            report = zuuluu.handleSpeaking;
            report = verify.bind(oscard)(option, report);
            report = oscard.on;
            michal = golfie[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.BaseConnectionEvent;
            tangon = michal.Mute;
            michal = zuuluu.handleSelfMute;
            michal = report.bind(oscard)(tangon, michal);
            michal = zuuluu.initialize;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'initialize';
        entity['key'] = michal;
        michal = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.userSpeakingChange;
            entity = true;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(5);
        michal[0] = entity;
        entity = {};
        oscard = 'userSpeakingChange';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                tangon = michal.connection;
                zuuluu = tangon.hasDesktopSource;
                zuuluu = zuuluu.bind(tangon)();
                if(zuuluu) { _fun00006_ip = 119; continue _fun00005 }
 28:
                zuuluu = michal.destroyFramerateScaleFactorTimers;
                zuuluu = zuuluu.bind(michal)();
                zuuluu = argFoo;
                if(zuuluu) { _fun00006_ip = 85; continue _fun00005 }
 44:
                zuuluu = michal.sinkWants;
                zuuluu = zuuluu.isMuted;
                if(!zuuluu) { _fun00006_ip = 119; continue _fun00005 }
 59:
                tangon = michal.sinkWants;
                zuuluu = false;
                tangon['isMuted'] = zuuluu;
                zuuluu = michal.updateRemoteWantsFramerate;
                zuuluu = zuuluu.bind(michal)();
                _fun00006_ip = 119; continue _fun00005;
 85:
                zuuluu = global;
                report = zuuluu.setTimeout;
                tangon = _closure1_slot5;
                zuuluu = undefined;
                entity = function() {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        michal = _closure3_slot0;
                        michal = michal.connection;
                        michal = michal.destroyed;
                        if(michal) { _fun00008_ip = 111; continue _fun00007 }
 22:
                        tangon = _closure1_slot6;
                        zuuluu = tangon.info;
                        golfie = _closure1_slot5;
                        michal = global;
                        michal = michal.HermesInternal;
                        oscard = michal.concat;
                        report = 'BaseConnection.userSpeakingChange: Reduced framerate after ';
                        michal = ' ms.';
                        michal = oscard.bind(report)(golfie, michal);
                        michal = zuuluu.bind(tangon)(michal);
                        michal = _closure3_slot0;
                        entity = undefined;
                        michal['framerateReductionTimeout'] = entity;
                        zuuluu = michal.sinkWants;
                        entity = true;
                        zuuluu['isMuted'] = entity;
                        entity = michal.updateRemoteWantsFramerate;
                        entity = entity.bind(michal)();
 111:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = report.bind(zuuluu)(entity, tangon);
                michal['framerateReductionTimeout'] = entity;
 119:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'destroyFramerateScaleFactorTimers';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = this;
                entity = michal.framerateReductionTimeout;
                zuuluu = 'number';
                entity = typeof entity;
                if(!(zuuluu === entity)) { _fun00010_ip = 47; continue _fun00009 }
 20:
                entity = global;
                tangon = entity.clearTimeout;
                zuuluu = michal.framerateReductionTimeout;
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                michal['framerateReductionTimeout'] = entity;
 47:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'updateRemoteWantsFramerate';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            zuuluu = entity.connection;
            michal = zuuluu.updateVideoQuality;
            entity = ['remoteSinkWantsMaxFramerate'];
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'destroy';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = this;
            entity = michal.destroyFramerateScaleFactorTimers;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[4] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = '../discord_common/js/packages/media-engine/ConnectionEventFramerateReducer.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();