// app/modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    oscard = report[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot1 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/shared_components/happening_now/useHappeningNowScrollBehavior.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: useHappeningNowScrollBehavior
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot1;
        tangon = report.useState;
        zuuluu = false;
        option = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot0;
        zuuluu = undefined;
        michal = 2;
        tangon = tangon.bind(zuuluu)(option, michal);
        michal = 0;
        michal = tangon[michal];
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot2 = zuuluu;
        tangon = report.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        entity = function(argFoo) {
            michal = argFoo;
            report = _closure2_slot2;
            entity = michal.nativeEvent;
            entity = entity.contentOffset;
            tangon = entity.x;
            entity = _closure2_slot0;
            tangon = tangon < entity;
            entity = undefined;
            tangon = report.bind(entity)(tangon);
            tangon = _closure2_slot1;
            zuuluu = michal.nativeEvent;
            zuuluu = zuuluu.contentOffset;
            zuuluu = zuuluu.x;
            michal = michal.nativeEvent;
            michal = michal.layoutMeasurement;
            michal = michal.width;
            michal = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        zuuluu = tangon.bind(report)(entity, zuuluu);
        entity = new Array(2);
        entity[0] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useHappeningNowScrollSnapping
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            verify = argFoo;
            michal = verify.current;
            option = null;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 52; continue _fun00001 }
 19:
            michal = michal.state;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 52; continue _fun00001 }
 33:
            michal = michal.data;
            zuuluu = option == michal;
            entity = undefined;
            if(zuuluu) { _fun00002_ip = 52; continue _fun00001 }
 47:
            entity = michal.length;
 52:
            michal = option != entity;
            oscard = 0;
            report = 0;
            if(!michal) { _fun00002_ip = 66; continue _fun00001 }
 63:
            report = entity;
 66:
            entity = new Array(0);
            offset = oscard < report;
            tangon = 0;
            zuuluu = 0;
            michal = undefined;
            if(!offset) { _fun00002_ip = 191; continue _fun00001 }
 83:
            offset = option == verify;
            yankee = undefined;
            if(offset) { _fun00002_ip = 158; continue _fun00001 }
 92:
            offset = verify.current;
            romeon = option == offset;
            michal = offset;
            yankee = undefined;
            if(romeon) { _fun00002_ip = 158; continue _fun00001 }
 109:
            romeon = offset.recyclerlistview_unsafe;
            offset = option == romeon;
            michal = romeon;
            yankee = undefined;
            if(offset) { _fun00002_ip = 158; continue _fun00001 }
 127:
            offset = romeon.getLayout;
            romeon = offset.bind(romeon)(zuuluu);
            offset = option == romeon;
            michal = romeon;
            yankee = undefined;
            if(offset) { _fun00002_ip = 158; continue _fun00001 }
 150:
            yankee = romeon.width;
            michal = romeon;
 158:
            romeon = option != yankee;
            offset = 0;
            if(!romeon) { _fun00002_ip = 170; continue _fun00001 }
 167:
            offset = yankee;
 170:
            yankee = entity.push;
            yankee = yankee.bind(entity)(tangon);
            tangon = tangon + offset;
            zuuluu = zuuluu + 1;
            if(zuuluu < report) { _fun00002_ip = 83; continue _fun00001 }
 191:
            return entity;
        }
    };
    zuuluu['useHappeningNowScrollSnapping'] = michal;
    return entity;
})();