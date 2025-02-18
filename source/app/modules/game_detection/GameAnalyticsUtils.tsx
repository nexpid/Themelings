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
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/game_detection/GameAnalyticsUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['removeExecutablePathPrefix'] = tangon;
    tangon = function(argFoo) { // Original name: getRunningGameAnalytics
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            tangon = null;
            if(!(tangon != zuuluu)) { _fun00004_ip = 153; continue _fun00003 }
 12:
            report = _closure1_slot2;
            michal = report.getGameByName;
            entity = zuuluu.name;
            option = michal.bind(report)(entity);
            entity = 'exePath';
            entity = entity in zuuluu;
            if(entity) { _fun00004_ip = 54; continue _fun00003 }
 46:
            golfie = zuuluu.exe;
            _fun00004_ip = 60; continue _fun00003;
 54:
            golfie = zuuluu.exePath;
 60:
            entity = {};
            verify = zuuluu.name;
            offset = tangon != verify;
            michal = undefined;
            report = undefined;
            if(!offset) { _fun00004_ip = 81; continue _fun00003 }
 78:
            report = verify;
 81:
            entity['gameName'] = report;
            verify = tangon == option;
            report = undefined;
            if(verify) { _fun00004_ip = 100; continue _fun00003 }
 95:
            report = option.id;
 100:
            entity['gameId'] = report;
            option = tangon != golfie;
            report = undefined;
            if(!option) { _fun00004_ip = 123; continue _fun00003 }
 114:
            oscard = _closure1_slot3;
            report = oscard.bind(michal)(golfie);
 123:
            entity['exe'] = report;
            zuuluu = zuuluu.distributor;
            tangon = tangon != zuuluu;
            michal = undefined;
            if(!tangon) { _fun00004_ip = 146; continue _fun00003 }
 143:
            michal = zuuluu;
 146:
            entity['distributor'] = michal;
            return entity;
 153:
            entity = {};
            michal = undefined;
            entity['gameName'] = michal;
            entity['gameId'] = michal;
            entity['exe'] = michal;
            entity['distributor'] = michal;
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
            michal = 1;
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