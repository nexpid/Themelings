// app/modules/activities/utils/isInviteActive.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
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
    tangon = tangon.Millis;
    oscard = tangon.HOUR;
    tangon = 2;
    oscard = tangon * oscard;
    var _closure1_slot2 = oscard;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/isInviteActive.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: isInviteActive
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            report = null;
            if(!(report != entity)) { _fun00002_ip = 193; continue _fun00001 }
 15:
            michal = zuuluu.activity;
            michal = report != michal;
            golfie = null;
            if(!michal) { _fun00002_ip = 42; continue _fun00001 }
 30:
            michal = zuuluu.activity;
            golfie = michal.party_id;
 42:
            tangon = report != golfie;
            if(!tangon) { _fun00002_ip = 80; continue _fun00001 }
 49:
            michal = entity.party;
            michal = report == michal;
            if(michal) { _fun00002_ip = 77; continue _fun00001 }
 62:
            oscard = entity.party;
            oscard = oscard.id;
            michal = oscard !== golfie;
 77:
            tangon = michal;
 80:
            option = _closure1_slot0;
            golfie = _closure1_slot1;
            oscard = 1;
            golfie = golfie[oscard];
            oscard = undefined;
            golfie = option.bind(oscard)(golfie);
            oscard = golfie.extractTimestamp;
            zuuluu = zuuluu.id;
            zuuluu = oscard.bind(golfie)(zuuluu);
            michal = _closure1_slot2;
            zuuluu = zuuluu + michal;
            michal = global;
            oscard = michal.Date;
            michal = oscard.now;
            michal = michal.bind(oscard)();
            zuuluu = zuuluu < michal;
            michal = entity.application_id;
            michal = report != michal;
            if(!michal) { _fun00002_ip = 176; continue _fun00001 }
 163:
            report = entity.application_id;
            entity = argBaz;
            michal = report !== entity;
 176:
            entity = !tangon;
            if(tangon) { _fun00002_ip = 185; continue _fun00001 }
 182:
            entity = !zuuluu;
 185:
            if(!entity) { _fun00002_ip = 191; continue _fun00001 }
 188:
            entity = !michal;
 191:
            return entity;
 193:
            entity = false;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();