// app/modules/frames/canLaunchFrame.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
    tangon = tangon.ApplicationFlags;
    var _closure1_slot2 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/frames/canLaunchFrame.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: canLaunchFrame
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 1;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.isRealApplication;
            zuuluu = zuuluu.bind(report)(entity);
            if(zuuluu) { _fun00002_ip = 46; continue _fun00001 }
 42:
            zuuluu = false;
            return zuuluu;
 46:
            entity = entity.flags;
            zuuluu = null;
            zuuluu = zuuluu != entity;
            golfie = 0;
            if(!zuuluu) { _fun00002_ip = 65; continue _fun00001 }
 62:
            golfie = entity;
 65:
            oscard = _closure1_slot0;
            option = _closure1_slot1;
            report = 2;
            entity = option[report];
            offset = oscard.bind(tangon)(entity);
            verify = offset.hasFlag;
            entity = _closure1_slot2;
            zuuluu = entity.EMBEDDED;
            zuuluu = verify.bind(offset)(golfie, zuuluu);
            report = option[report];
            oscard = oscard.bind(tangon)(report);
            report = oscard.hasFlag;
            entity = entity.CONTEXTLESS_ACTIVITY;
            entity = report.bind(oscard)(golfie, entity);
            zuuluu = !zuuluu;
            if(zuuluu) { _fun00002_ip = 143; continue _fun00001 }
 140:
            zuuluu = !entity;
 143:
            entity = !zuuluu;
            if(zuuluu) { _fun00002_ip = 189; continue _fun00001 }
 149:
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 3;
            michal = report[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getContextlessFramesExperiment;
            michal = 'canLaunchFrame';
            michal = zuuluu.bind(tangon)(michal);
            entity = michal.enabled;
 189:
            return entity;
        }
    };
    zuuluu['canLaunchFrame'] = michal;
    return entity;
})();