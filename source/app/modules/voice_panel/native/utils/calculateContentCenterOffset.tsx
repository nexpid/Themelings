// app/modules/voice_panel/native/utils/calculateContentCenterOffset.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    verify = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    option = tangon.EDGE_GUTTER;
    var _closure1_slot2 = option;
    tangon = {};
    golfie = 'function calculateContentCenterOffset_calculateContentCenterOffsetTsx1({contentHeight:contentHeight,windowHeight:windowHeight,safeArea:safeArea}){const{EDGE_GUTTER,roundToNearestPixel}=this.__closure;const safeAreaTop=Math.max(safeArea.top,EDGE_GUTTER);const safeAreaBottom=Math.max(safeArea.bottom,EDGE_GUTTER);if(windowHeight<=contentHeight){return safeAreaTop;}return Math.max(safeAreaTop,safeAreaTop+roundToNearestPixel((windowHeight-safeAreaTop-safeAreaBottom-contentHeight)/2));}';
    tangon['code'] = golfie;
    michal = function(argFoo) { // Original name: t
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            option = entity.contentHeight;
            michal = entity.windowHeight;
            entity = entity.safeArea;
            zuuluu = global;
            golfie = zuuluu.Math;
            report = golfie.max;
            tangon = entity.top;
            verify = _closure1_slot2;
            report = report.bind(golfie)(tangon, verify);
            golfie = zuuluu.Math;
            tangon = golfie.max;
            entity = entity.bottom;
            verify = tangon.bind(golfie)(entity, verify);
            entity = report;
            if(!(!(michal <= option))) { _fun00002_ip = 148; continue _fun00001 }
 81:
            tangon = zuuluu.Math;
            zuuluu = tangon.max;
            offset = _closure1_slot0;
            golfie = _closure1_slot1;
            oscard = 1;
            oscard = golfie[oscard];
            golfie = undefined;
            oscard = offset.bind(golfie)(oscard);
            michal = michal - report;
            michal = michal - verify;
            option = michal - option;
            michal = 2;
            michal = option / michal;
            michal = oscard.bind(golfie)(michal);
            michal = report + michal;
            entity = zuuluu.bind(tangon)(report, michal);
 148:
            return entity;
        }
    };
    golfie = {};
    golfie['EDGE_GUTTER'] = option;
    option = 1;
    option = oscard[option];
    option = verify.bind(entity)(option);
    golfie['roundToNearestPixel'] = option;
    michal['__closure'] = golfie;
    golfie = 9988657249690.0;
    michal['__workletHash'] = golfie;
    michal['__initData'] = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/utils/calculateContentCenterOffset.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();