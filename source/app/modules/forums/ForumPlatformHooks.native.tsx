// app/modules/forums/ForumPlatformHooks.native.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    golfie = oscard[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(golfie);
    var _closure1_slot3 = michal;
    michal = {};
    tangon = function(argFoo) { // Original name: useForumChannelSeenManager
        entity = argFoo;
        golfie = entity.guildId;
        var _closure2_slot0 = golfie;
        option = entity.channelId;
        var _closure2_slot1 = option;
        report = _closure1_slot3;
        zuuluu = report.useRef;
        entity = null;
        entity = zuuluu.bind(report)(entity);
        var _closure2_slot2 = entity;
        oscard = report.useCallback;
        tangon = new Array(1);
        tangon[0] = option;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 1;
                michal = michal[entity];
                entity = undefined;
                tangon = tangon.bind(entity)(michal);
                michal = tangon.getRootNavigationRef;
                report = michal.bind(tangon)();
                michal = null;
                if(!(michal != report)) { _fun00002_ip = 151; continue _fun00001 }
 41:
                tangon = report.isReady;
                tangon = tangon.bind(report)();
                if(!tangon) { _fun00002_ip = 151; continue _fun00001 }
 54:
                tangon = report.getCurrentRoute;
                report = tangon.bind(report)();
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 2;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.coerceChannelRoute;
                zuuluu = zuuluu.bind(tangon)(report);
                tangon = michal != zuuluu;
                if(!tangon) { _fun00002_ip = 124; continue _fun00001 }
 102:
                zuuluu = zuuluu.params;
                report = zuuluu.channelId;
                zuuluu = _closure2_slot1;
                tangon = report === zuuluu;
 124:
                zuuluu = _closure2_slot2;
                zuuluu = zuuluu.current;
                if(!(michal != zuuluu)) { _fun00002_ip = 151; continue _fun00001 }
 140:
                michal = zuuluu.handleReactNavigationFocus;
                michal = michal.bind(zuuluu)(tangon);
 151:
                return entity;
            }
        };
        oscard = oscard.bind(report)(zuuluu, tangon);
        var _closure2_slot3 = oscard;
        tangon = report.useEffect;
        zuuluu = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 1;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.getRootNavigationRef;
                report = zuuluu.bind(tangon)();
                var _closure3_slot0 = report;
                zuuluu = null;
                if(!(zuuluu != report)) { _fun00004_ip = 60; continue _fun00003 }
 47:
                zuuluu = report.isReady;
                zuuluu = zuuluu.bind(report)();
                if(zuuluu) { _fun00004_ip = 62; continue _fun00003 }
 60:
                return michal;
 62:
                tangon = report.addListener;
                zuuluu = _closure2_slot3;
                michal = 'state';
                michal = tangon.bind(report)(michal, zuuluu);
                entity = function() {
                    tangon = _closure3_slot0;
                    zuuluu = tangon.removeListener;
                    michal = _closure2_slot3;
                    entity = 'state';
                    entity = zuuluu.bind(tangon)(entity, michal);
                    entity = undefined;
                    return entity;
                };
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(zuuluu);
        tangon = report.useLayoutEffect;
        zuuluu = new Array(3);
        zuuluu[0] = option;
        zuuluu[1] = golfie;
        zuuluu[2] = oscard;
        michal = function() {
            zuuluu = _closure2_slot2;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            tangon = tangon[michal];
            michal = undefined;
            oscard = report.bind(michal)(tangon);
            tangon = {};
            report = _closure2_slot0;
            tangon['guildId'] = report;
            report = _closure2_slot1;
            tangon['channelId'] = report;
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            option = report;
            golfie = tangon;
            tangon = new option[oscard](golfie, oscard);
            tangon = tangon instanceof Object ? tangon : report;
            zuuluu['current'] = tangon;
            tangon = zuuluu.current;
            zuuluu = tangon.initialize;
            zuuluu = zuuluu.bind(tangon)();
            entity = _closure2_slot3;
            entity = entity.bind(michal)();
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot2;
                    tangon = michal.current;
                    michal = null;
                    if(!(michal != tangon)) { _fun00006_ip = 28; continue _fun00005 }
 18:
                    zuuluu = tangon.terminate;
                    zuuluu = zuuluu.bind(tangon)();
 28:
                    entity = _closure2_slot2;
                    entity['current'] = michal;
                    entity = undefined;
                    return entity;
                }
            };
            return entity;
        };
        michal = tangon.bind(report)(michal, zuuluu);
        entity = entity.current;
        return entity;
    };
    michal['useForumChannelSeenManager'] = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/forums/ForumPlatformHooks.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();