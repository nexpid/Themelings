// app/modules/launchpad/native/LaunchPadPullTabCache.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = verify;
    oscard = function() { // Original name: getLaunchPadPullTabPositionCached
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 1;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            tangon = entity.Storage;
            zuuluu = tangon.get;
            entity = _closure1_slot6;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00002_ip = 55; continue _fun00001 }
 51:
            entity = _closure1_slot4;
 55:
            return entity;
        }
    };
    var _closure1_slot9 = oscard;
    report = function(argFoo) { // Original name: setLaunchPadPullTabPositionCached
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.Storage;
        tangon = report.set;
        zuuluu = _closure1_slot6;
        michal = argFoo;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot10 = report;
    michal = function() { // Original name: setLaunchPadPullTabExclusionRect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = arguments[0];
            entity = undefined;
            if(!(report === entity)) { _fun00004_ip = 20; continue _fun00003 }
 9:
            michal = _closure1_slot9;
            report = michal.bind(entity)();
 20:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00004_ip = 300; continue _fun00003 }
 58:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 4;
            golfie = oscard[zuuluu];
            option = tangon.bind(entity)(golfie);
            golfie = option.getWindowDimensions;
            golfie = golfie.bind(option)();
            option = golfie.width;
            golfie = _closure1_slot5;
            golfie = option - golfie;
            zuuluu = oscard[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.getWindowDimensions;
            zuuluu = zuuluu.bind(tangon)();
            oscard = zuuluu.width;
            zuuluu = _closure1_slot3;
            tangon = report + zuuluu;
            verify = _closure1_slot8;
            option = null;
            offset = option == verify;
            zuuluu = undefined;
            if(offset) { _fun00004_ip = 153; continue _fun00003 }
 148:
            zuuluu = verify.left;
 153:
            zuuluu = zuuluu === golfie;
            if(!zuuluu) { _fun00004_ip = 182; continue _fun00003 }
 160:
            offset = _closure1_slot8;
            yankee = option == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 178; continue _fun00003 }
 173:
            verify = offset.right;
 178:
            zuuluu = verify === oscard;
 182:
            if(!zuuluu) { _fun00004_ip = 207; continue _fun00003 }
 185:
            offset = _closure1_slot8;
            yankee = option == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 203; continue _fun00003 }
 198:
            verify = offset.top;
 203:
            zuuluu = verify === report;
 207:
            if(!zuuluu) { _fun00004_ip = 232; continue _fun00003 }
 210:
            verify = _closure1_slot8;
            offset = option == verify;
            option = undefined;
            if(offset) { _fun00004_ip = 228; continue _fun00003 }
 223:
            option = verify.bottom;
 228:
            zuuluu = option === tangon;
 232:
            if(zuuluu) { _fun00004_ip = 300; continue _fun00003 }
 235:
            zuuluu = {};
            zuuluu['left'] = golfie;
            zuuluu['right'] = oscard;
            zuuluu['top'] = report;
            zuuluu['bottom'] = tangon;
            _closure1_slot8 = zuuluu;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.setSystemGestureExclusionRects;
            report = _closure1_slot8;
            michal = new Array(1);
            michal[0] = report;
            michal = zuuluu.bind(tangon)(michal);
 300:
            return entity;
        }
    };
    var _closure1_slot11 = michal;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, golfie);
    golfie = 0;
    offset = verify[golfie];
    entity = undefined;
    offset = option.bind(entity)(offset);
    yankee = offset.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot3 = yankee;
    yankee = offset.LAUNCH_PAD_PULL_TAB_INITIAL_POSITION;
    var _closure1_slot4 = yankee;
    offset = offset.LAUNCH_PAD_PULL_TAB_WIDTH;
    var _closure1_slot5 = offset;
    offset = 'LAUNCH_PAD_PULL_TAB_POSITION_CACHE_KEY';
    var _closure1_slot6 = offset;
    var _closure1_slot7 = golfie;
    var _closure1_slot8 = entity;
    golfie = 5;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/launchpad/native/LaunchPadPullTabCache.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['getLaunchPadPullTabPositionCached'] = oscard;
    zuuluu['setLaunchPadPullTabPositionCached'] = report;
    report = function(argFoo) { // Original name: persistLaunchPadPullTabPosition
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = global;
        oscard = tangon.clearTimeout;
        report = _closure1_slot7;
        entity = undefined;
        report = oscard.bind(entity)(report);
        report = tangon.setTimeout;
        tangon = function() {
            tangon = _closure1_slot10;
            zuuluu = _closure2_slot0;
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            michal = _closure1_slot11;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        michal = 300;
        michal = report.bind(entity)(tangon, michal);
        _closure1_slot7 = michal;
        return entity;
    };
    zuuluu['persistLaunchPadPullTabPosition'] = report;
    tangon = function() { // Original name: clearLaunchPadPullTabExclusionRect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(!zuuluu) { _fun00006_ip = 47; continue _fun00005 }
 37:
            report = _closure1_slot8;
            tangon = null;
            zuuluu = tangon != report;
 47:
            if(!zuuluu) { _fun00006_ip = 89; continue _fun00005 }
 50:
            _closure1_slot8 = entity;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 3;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.setSystemGestureExclusionRects;
            michal = new Array(0);
            michal = zuuluu.bind(tangon)(michal);
 89:
            return entity;
        }
    };
    zuuluu['clearLaunchPadPullTabExclusionRect'] = tangon;
    zuuluu['setLaunchPadPullTabExclusionRect'] = michal;
    return entity;
})();