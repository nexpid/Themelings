// app/modules/launchpad/native/LaunchPadPullTabCache.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = verify;
    oscar = function() { // Original name: getLaunchPadPullTabPositionCached
        _fun120826: for(var _fun120826_ip = 0; ; ) switch(_fun120826_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            tango = entity.Storage;
            zulu = tango.get;
            entity = _closure1_slot6;
            entity = zulu.bind(tango)(entity);
            zulu = null;
            if(!(zulu == entity)) { _fun120826_ip = 55; continue _fun120826 }
 51:
            entity = _closure1_slot4;
 55:
            return entity;
        }
    };
    var _closure1_slot9 = oscar;
    report = function(argFoo) { // Original name: setLaunchPadPullTabPositionCached
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 1;
        zulu = zulu[entity];
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        report = zulu.Storage;
        tango = report.set;
        zulu = _closure1_slot6;
        mike = argFoo;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot10 = report;
    mike = function() { // Original name: setLaunchPadPullTabExclusionRect
        _fun120828: for(var _fun120828_ip = 0; ; ) switch(_fun120828_ip) {
 0:
            report = arguments[0];
            entity = undefined;
            if(!(report === entity)) { _fun120828_ip = 20; continue _fun120828 }
 9:
            mike = _closure1_slot9;
            report = mike.bind(entity)();
 20:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 2;
            zulu = oscar[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun120828_ip = 300; continue _fun120828 }
 58:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 4;
            golf = oscar[zulu];
            options = tango.bind(entity)(golf);
            golf = options.getWindowDimensions;
            golf = golf.bind(options)();
            options = golf.width;
            golf = _closure1_slot5;
            golf = options - golf;
            zulu = oscar[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.getWindowDimensions;
            zulu = zulu.bind(tango)();
            oscar = zulu.width;
            zulu = _closure1_slot3;
            tango = report + zulu;
            verify = _closure1_slot8;
            options = null;
            offset = options == verify;
            zulu = undefined;
            if(offset) { _fun120828_ip = 153; continue _fun120828 }
 148:
            zulu = verify.left;
 153:
            zulu = zulu === golf;
            if(!zulu) { _fun120828_ip = 182; continue _fun120828 }
 160:
            offset = _closure1_slot8;
            yankee = options == offset;
            verify = undefined;
            if(yankee) { _fun120828_ip = 178; continue _fun120828 }
 173:
            verify = offset.right;
 178:
            zulu = verify === oscar;
 182:
            if(!zulu) { _fun120828_ip = 207; continue _fun120828 }
 185:
            offset = _closure1_slot8;
            yankee = options == offset;
            verify = undefined;
            if(yankee) { _fun120828_ip = 203; continue _fun120828 }
 198:
            verify = offset.top;
 203:
            zulu = verify === report;
 207:
            if(!zulu) { _fun120828_ip = 232; continue _fun120828 }
 210:
            verify = _closure1_slot8;
            offset = options == verify;
            options = undefined;
            if(offset) { _fun120828_ip = 228; continue _fun120828 }
 223:
            options = verify.bottom;
 228:
            zulu = options === tango;
 232:
            if(zulu) { _fun120828_ip = 300; continue _fun120828 }
 235:
            zulu = {};
            zulu['left'] = golf;
            zulu['right'] = oscar;
            zulu['top'] = report;
            zulu['bottom'] = tango;
            _closure1_slot8 = zulu;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 3;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.setSystemGestureExclusionRects;
            report = _closure1_slot8;
            mike = new Array(1);
            mike[0] = report;
            mike = zulu.bind(tango)(mike);
 300:
            return entity;
        }
    };
    var _closure1_slot11 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, golf);
    golf = 0;
    offset = verify[golf];
    entity = undefined;
    offset = options.bind(entity)(offset);
    yankee = offset.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot3 = yankee;
    yankee = offset.LAUNCH_PAD_PULL_TAB_INITIAL_POSITION;
    var _closure1_slot4 = yankee;
    offset = offset.LAUNCH_PAD_PULL_TAB_WIDTH;
    var _closure1_slot5 = offset;
    offset = 'LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY';
    var _closure1_slot6 = offset;
    var _closure1_slot7 = golf;
    var _closure1_slot8 = entity;
    golf = 5;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/launchpad/native/LaunchPadPullTabCache.tsx';
    golf = options.bind(verify)(golf);
    zulu['getLaunchPadPullTabPositionCached'] = oscar;
    zulu['setLaunchPadPullTabPositionCached'] = report;
    report = function(argFoo) { // Original name: persistLaunchPadPullTabPosition
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = global;
        oscar = tango.clearTimeout;
        report = _closure1_slot7;
        entity = undefined;
        report = oscar.bind(entity)(report);
        report = tango.setTimeout;
        tango = function() {
            tango = _closure1_slot10;
            zulu = _closure2_slot0;
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            mike = _closure1_slot11;
            mike = mike.bind(entity)(zulu);
            return entity;
        };
        mike = 300;
        mike = report.bind(entity)(tango, mike);
        _closure1_slot7 = mike;
        return entity;
    };
    zulu['persistLaunchPadPullTabPosition'] = report;
    tango = function() { // Original name: clearLaunchPadPullTabExclusionRect
        _fun120831: for(var _fun120831_ip = 0; ; ) switch(_fun120831_ip) {
 0:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.isAndroid;
            zulu = zulu.bind(tango)();
            if(!zulu) { _fun120831_ip = 47; continue _fun120831 }
 37:
            report = _closure1_slot8;
            tango = null;
            zulu = tango != report;
 47:
            if(!zulu) { _fun120831_ip = 89; continue _fun120831 }
 50:
            _closure1_slot8 = entity;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.setSystemGestureExclusionRects;
            mike = new Array(0);
            mike = zulu.bind(tango)(mike);
 89:
            return entity;
        }
    };
    zulu['clearLaunchPadPullTabExclusionRect'] = tango;
    zulu['setLaunchPadPullTabExclusionRect'] = mike;
    return entity;
})();