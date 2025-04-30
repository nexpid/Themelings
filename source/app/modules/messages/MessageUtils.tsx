// app/modules/messages/MessageUtils.tsx
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
    tangon = 'modules/messages/MessageUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: canViewPotentiallyNSFWChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot2;
            entity = michal.getCurrentUser;
            report = entity.bind(michal)();
            zuuluu = _closure1_slot0;
            michal = zuuluu.getChannel;
            entity = argFoo;
            golfie = michal.bind(zuuluu)(entity);
            oscard = null;
            entity = oscard != report;
            if(!entity) { _fun00002_ip = 46; continue _fun00001 }
 42:
            entity = oscard != golfie;
 46:
            if(!entity) { _fun00002_ip = 118; continue _fun00001 }
 49:
            michal = golfie.isNSFW;
            michal = michal.bind(golfie)();
            michal = !michal;
            if(michal) { _fun00002_ip = 115; continue _fun00001 }
 65:
            zuuluu = report.nsfwAllowed;
            zuuluu = oscard != zuuluu;
            if(!zuuluu) { _fun00002_ip = 84; continue _fun00001 }
 78:
            zuuluu = report.nsfwAllowed;
 84:
            if(!zuuluu) { _fun00002_ip = 112; continue _fun00001 }
 87:
            oscard = _closure1_slot1;
            report = oscard.didAgree;
            tangon = golfie.getGuildId;
            tangon = tangon.bind(golfie)();
            zuuluu = report.bind(oscard)(tangon);
 112:
            michal = zuuluu;
 115:
            entity = michal;
 118:
            return entity;
        }
    };
    zuuluu['canViewPotentiallyNSFWChannel'] = tangon;
    michal = function(argFoo) { // Original name: getGuildIdFromMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = zuuluu.getChannel;
            entity = argFoo;
            entity = entity.channel_id;
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = null;
            report = zuuluu == tangon;
            michal = undefined;
            if(report) { _fun00004_ip = 41; continue _fun00003 }
 36:
            michal = tangon.guild_id;
 41:
            zuuluu = zuuluu != michal;
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 53; continue _fun00003 }
 50:
            entity = michal;
 53:
            return entity;
        }
    };
    zuuluu['getGuildIdFromMessage'] = michal;
    return entity;
})();