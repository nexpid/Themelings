// app/modules/custom_status/utils/shouldRenderActivityEmoji.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    entity = argCor;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.isGuildTextChannelType;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityTypes;
    var _closure1_slot5 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/custom_status/utils/shouldRenderActivityEmoji.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: shouldRenderActivityEmoji
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.activity;
            oscard = michal.user;
            report = michal.channel;
            michal = null;
            if(!(michal != oscard)) { _fun00002_ip = 251; continue _fun00001 }
 28:
            zuuluu = michal == entity;
            tangon = undefined;
            option = undefined;
            if(zuuluu) { _fun00002_ip = 44; continue _fun00001 }
 39:
            option = entity.type;
 44:
            zuuluu = _closure1_slot5;
            zuuluu = zuuluu.CUSTOM_STATUS;
            if(!(option === zuuluu)) { _fun00002_ip = 251; continue _fun00001 }
 64:
            zuuluu = entity.emoji;
            if(!(michal != zuuluu)) { _fun00002_ip = 251; continue _fun00001 }
 77:
            entity = entity.emoji;
            zuuluu = entity.id;
            if(!(michal != zuuluu)) { _fun00002_ip = 247; continue _fun00001 }
 95:
            if(!(michal != report)) { _fun00002_ip = 247; continue _fun00001 }
 102:
            zuuluu = _closure1_slot4;
            michal = report.type;
            michal = zuuluu.bind(tangon)(michal);
            if(!michal) { _fun00002_ip = 247; continue _fun00001 }
 122:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getUsableCustomEmojiById;
            entity = entity.id;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 3;
            entity = option[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.isInternalEmojiForGuildId;
            entity = report.getGuildId;
            entity = entity.bind(report)();
            entity = michal.bind(zuuluu)(verify, entity);
            zuuluu = _closure1_slot1;
            michal = 4;
            michal = option[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.can;
            michal = {};
            golfie = _closure1_slot6;
            golfie = golfie.USE_EXTERNAL_EMOJIS;
            michal['permission'] = golfie;
            michal['user'] = oscard;
            michal['context'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity = !entity;
            if(entity) { _fun00002_ip = 245; continue _fun00001 }
 242:
            entity = michal;
 245:
            return entity;
 247:
            entity = true;
            return entity;
 251:
            entity = false;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();