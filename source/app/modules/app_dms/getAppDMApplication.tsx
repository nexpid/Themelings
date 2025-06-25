// app/modules/app_dms/getAppDMApplication.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_dms/getAppDMApplication.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getAppDMApplication
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.isPrivate;
            entity = entity.bind(zuuluu)();
            michal = undefined;
            if(!entity) { _fun00002_ip = 28; continue _fun00001 }
 18:
            entity = zuuluu.getRecipientId;
            michal = entity.bind(zuuluu)();
 28:
            tangon = _closure1_slot2;
            zuuluu = tangon.getUser;
            zuuluu = zuuluu.bind(tangon)(michal);
            tangon = null;
            report = tangon == zuuluu;
            oscard = undefined;
            if(report) { _fun00002_ip = 63; continue _fun00001 }
 57:
            oscard = zuuluu.bot;
 63:
            report = true;
            zuuluu = undefined;
            if(!(report === oscard)) { _fun00002_ip = 74; continue _fun00001 }
 71:
            zuuluu = michal;
 74:
            report = _closure1_slot0;
            michal = report.getAppIdForBotUserId;
            michal = michal.bind(report)(zuuluu);
            report = tangon != zuuluu;
            golfie = zuuluu;
            zuuluu = undefined;
            if(!report) { _fun00002_ip = 147; continue _fun00001 }
 101:
            oscard = _closure1_slot1;
            report = oscard.getUserProfile;
            oscard = report.bind(oscard)(golfie);
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 144; continue _fun00001 }
 125:
            oscard = oscard.application;
            golfie = tangon == oscard;
            report = undefined;
            if(golfie) { _fun00002_ip = 144; continue _fun00001 }
 139:
            report = oscard.id;
 144:
            zuuluu = report;
 147:
            if(!(tangon != michal)) { _fun00002_ip = 154; continue _fun00001 }
 151:
            zuuluu = michal;
 154:
            michal = _closure1_slot0;
            entity = michal.getApplication;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['getAppDMApplication'] = michal;
    return entity;
})();