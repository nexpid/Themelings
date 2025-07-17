// app/modules/game_detection/GameAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: removeExecutablePathPrefix
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.toLowerCase;
            oscard = entity.bind(michal)();
            entity = oscard.endsWith;
            zuuluu = '/';
            entity = entity.bind(oscard)(zuuluu);
            michal = oscard;
            if(!entity) { _fun00002_ip = 53; continue _fun00001 }
 34:
            report = oscard.slice;
            tangon = 0;
            entity = -1;
            michal = report.bind(oscard)(tangon, entity);
 53:
            entity = michal.split;
            tangon = entity.bind(michal)(zuuluu);
            michal = tangon.slice;
            entity = -2;
            michal = michal.bind(tangon)(entity);
            entity = michal.join;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, report);
    entity = 0;
    option = golfie[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(option);
    var _closure1_slot2 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/game_detection/GameAnalyticsUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['removeExecutablePathPrefix'] = tangon;
    tangon = function(argFoo) { // Original name: getRunningGameAnalytics
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            michal = null;
            if(!(michal != report)) { _fun00004_ip = 221; continue _fun00003 }
 12:
            oscard = _closure1_slot2;
            tangon = oscard.getGameByName;
            entity = report.name;
            golfie = tangon.bind(oscard)(entity);
            entity = 'exePath';
            entity = entity in report;
            if(entity) { _fun00004_ip = 54; continue _fun00003 }
 46:
            option = report.exe;
            _fun00004_ip = 60; continue _fun00003;
 54:
            option = report.exePath;
 60:
            entity = {};
            verify = report.name;
            offset = michal != verify;
            oscard = undefined;
            tangon = undefined;
            if(!offset) { _fun00004_ip = 81; continue _fun00003 }
 78:
            tangon = verify;
 81:
            entity['gameName'] = tangon;
            verify = michal == golfie;
            tangon = undefined;
            if(verify) { _fun00004_ip = 100; continue _fun00003 }
 95:
            tangon = golfie.id;
 100:
            entity['gameId'] = tangon;
            golfie = michal != option;
            tangon = undefined;
            if(!golfie) { _fun00004_ip = 123; continue _fun00003 }
 114:
            golfie = _closure1_slot3;
            tangon = golfie.bind(oscard)(option);
 123:
            entity['exe'] = tangon;
            golfie = report.distributor;
            option = michal != golfie;
            tangon = undefined;
            if(!option) { _fun00004_ip = 146; continue _fun00003 }
 143:
            tangon = golfie;
 146:
            entity['distributor'] = tangon;
            golfie = report.sku;
            option = michal != golfie;
            tangon = undefined;
            if(!option) { _fun00004_ip = 169; continue _fun00003 }
 166:
            tangon = golfie;
 169:
            entity['sku'] = tangon;
            tangon = michal != report;
            michal = undefined;
            if(!tangon) { _fun00004_ip = 214; continue _fun00003 }
 183:
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.getSubgameMetadata;
            michal = zuuluu.bind(tangon)(report);
 214:
            entity['gameMetadata'] = michal;
            return entity;
 221:
            entity = {};
            michal = undefined;
            entity['gameName'] = michal;
            entity['gameId'] = michal;
            entity['exe'] = michal;
            entity['distributor'] = michal;
            entity['sku'] = michal;
            entity['gameMetadata'] = michal;
            return entity;
        }
    };
    zuuluu['getRunningGameAnalytics'] = tangon;
    michal = function(argFoo, argBar) { // Original name: isVerifiedGameExecutable
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            zuuluu = argBar;
            michal = null;
            if(!(michal != oscard)) { _fun00006_ip = 88; continue _fun00005 }
 14:
            if(!(michal != zuuluu)) { _fun00006_ip = 88; continue _fun00005 }
 18:
            tangon = _closure1_slot3;
            report = undefined;
            tangon = tangon.bind(report)(oscard);
            var _closure2_slot0 = tangon;
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 2;
            michal = oscard[michal];
            tangon = tangon.bind(report)(michal);
            michal = tangon.getPlatformName;
            michal = michal.bind(tangon)();
            var _closure2_slot1 = michal;
            michal = zuuluu.some;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.os;
                    entity = _closure2_slot1;
                    entity = michal === entity;
                    if(!entity) { _fun00008_ip = 61; continue _fun00007 }
 23:
                    report = _closure2_slot0;
                    michal = null;
                    report = michal == report;
                    michal = undefined;
                    if(report) { _fun00008_ip = 58; continue _fun00007 }
 38:
                    report = _closure2_slot0;
                    tangon = report.endsWith;
                    zuuluu = zuuluu.name;
                    michal = tangon.bind(report)(zuuluu);
 58:
                    entity = michal;
 61:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
 88:
            entity = false;
            return entity;
        }
    };
    zuuluu['isVerifiedGameExecutable'] = michal;
    return entity;
})();