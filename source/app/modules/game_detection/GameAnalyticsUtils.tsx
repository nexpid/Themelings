// app/modules/game_detection/GameAnalyticsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    tango = function(argFoo) { // Original name: removeExecutablePathPrefix
        _fun75375: for(var _fun75375_ip = 0; ; ) switch(_fun75375_ip) {
 0:
            mike = argFoo;
            entity = mike.toLowerCase;
            oscar = entity.bind(mike)();
            entity = oscar.endsWith;
            zulu = '/';
            entity = entity.bind(oscar)(zulu);
            mike = oscar;
            if(!entity) { _fun75375_ip = 53; continue _fun75375 }
 34:
            report = oscar.slice;
            tango = 0;
            entity = -1;
            mike = report.bind(oscar)(tango, entity);
 53:
            entity = mike.split;
            tango = entity.bind(mike)(zulu);
            mike = tango.slice;
            entity = -2;
            mike = mike.bind(tango)(entity);
            entity = mike.join;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot3 = tango;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/game_detection/GameAnalyticsUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['removeExecutablePathPrefix'] = tango;
    tango = function(argFoo) { // Original name: getRunningGameAnalytics
        _fun75376: for(var _fun75376_ip = 0; ; ) switch(_fun75376_ip) {
 0:
            zulu = argFoo;
            tango = null;
            if(!(tango != zulu)) { _fun75376_ip = 153; continue _fun75376 }
 12:
            report = _closure1_slot2;
            mike = report.getGameByName;
            entity = zulu.name;
            options = mike.bind(report)(entity);
            entity = 'exePath';
            entity = entity in zulu;
            if(entity) { _fun75376_ip = 54; continue _fun75376 }
 46:
            golf = zulu.exe;
            _fun75376_ip = 60; continue _fun75376;
 54:
            golf = zulu.exePath;
 60:
            entity = {};
            verify = zulu.name;
            offset = tango != verify;
            mike = undefined;
            report = undefined;
            if(!offset) { _fun75376_ip = 81; continue _fun75376 }
 78:
            report = verify;
 81:
            entity['gameName'] = report;
            verify = tango == options;
            report = undefined;
            if(verify) { _fun75376_ip = 100; continue _fun75376 }
 95:
            report = options.id;
 100:
            entity['gameId'] = report;
            options = tango != golf;
            report = undefined;
            if(!options) { _fun75376_ip = 123; continue _fun75376 }
 114:
            oscar = _closure1_slot3;
            report = oscar.bind(mike)(golf);
 123:
            entity['exe'] = report;
            zulu = zulu.distributor;
            tango = tango != zulu;
            mike = undefined;
            if(!tango) { _fun75376_ip = 146; continue _fun75376 }
 143:
            mike = zulu;
 146:
            entity['distributor'] = mike;
            return entity;
 153:
            entity = {};
            mike = undefined;
            entity['gameName'] = mike;
            entity['gameId'] = mike;
            entity['exe'] = mike;
            entity['distributor'] = mike;
            return entity;
        }
    };
    zulu['getRunningGameAnalytics'] = tango;
    mike = function(argFoo, argBar) { // Original name: isVerifiedGameExecutable
        _fun75377: for(var _fun75377_ip = 0; ; ) switch(_fun75377_ip) {
 0:
            oscar = argFoo;
            zulu = argBar;
            mike = null;
            if(!(mike != oscar)) { _fun75377_ip = 90; continue _fun75377 }
 14:
            if(!(mike != zulu)) { _fun75377_ip = 90; continue _fun75377 }
 18:
            tango = _closure1_slot3;
            report = undefined;
            tango = tango.bind(report)(oscar);
            var _closure2_slot0 = tango;
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 1;
            mike = oscar[mike];
            tango = tango.bind(report)(mike);
            mike = tango.getPlatformName;
            mike = mike.bind(tango)();
            var _closure2_slot1 = mike;
            mike = zulu.some;
            entity = function(argFoo) {
                _fun75378: for(var _fun75378_ip = 0; ; ) switch(_fun75378_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.os;
                    entity = _closure2_slot1;
                    entity = mike === entity;
                    if(!entity) { _fun75378_ip = 61; continue _fun75378 }
 23:
                    report = _closure2_slot0;
                    mike = null;
                    report = mike == report;
                    mike = undefined;
                    if(report) { _fun75378_ip = 58; continue _fun75378 }
 38:
                    report = _closure2_slot0;
                    tango = report.endsWith;
                    zulu = zulu.name;
                    mike = tango.bind(report)(zulu);
 58:
                    entity = mike;
 61:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
 90:
            entity = false;
            return entity;
        }
    };
    zulu['isVerifiedGameExecutable'] = mike;
    return entity;
})();