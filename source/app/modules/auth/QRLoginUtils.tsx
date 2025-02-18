// app/modules/auth/QRLoginUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    tangon = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = tangon;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, report);
    entity = /^\\/ra\\/([\w-]+)$/;
    var _closure1_slot2 = entity;
    entity = 1;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/QRLoginUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: findRemoteAuthFingerprint
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            tangon = argBar;
            entity = null;
            if(!(entity != oscard)) { _fun00002_ip = 87; continue _fun00001 }
 12:
            if(!(entity != tangon)) { _fun00002_ip = 87; continue _fun00001 }
 16:
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 0;
            report = report[zuuluu];
            zuuluu = undefined;
            report = golfie.bind(zuuluu)(report);
            zuuluu = report.isDiscordHostname;
            zuuluu = zuuluu.bind(report)(oscard);
            if(!zuuluu) { _fun00002_ip = 87; continue _fun00001 }
 54:
            zuuluu = tangon.match;
            michal = _closure1_slot2;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = entity != tangon;
            michal = null;
            if(!zuuluu) { _fun00002_ip = 85; continue _fun00001 }
 78:
            zuuluu = 1;
            michal = tangon[zuuluu];
 85:
            return michal;
 87:
            return entity;
        }
    };
    zuuluu['findRemoteAuthFingerprint'] = michal;
    return entity;
})();