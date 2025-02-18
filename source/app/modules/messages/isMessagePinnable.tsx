// app/modules/messages/isMessagePinnable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    tangon = tangon.ChannelTypes;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/isMessagePinnable.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: isMessagePinnable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argBar;
            zuuluu = argBaz;
            entity = michal.isSystemDM;
            entity = entity.bind(michal)();
            entity = !entity;
            if(!entity) { _fun00002_ip = 58; continue _fun00001 }
 22:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 1;
            tangon = oscard[tangon];
            oscard = undefined;
            report = report.bind(oscard)(tangon);
            tangon = argFoo;
            tangon = report.bind(oscard)(tangon);
            entity = !tangon;
 58:
            if(!entity) { _fun00002_ip = 77; continue _fun00001 }
 61:
            if(zuuluu) { _fun00002_ip = 74; continue _fun00001 }
 64:
            tangon = michal.isPrivate;
            zuuluu = tangon.bind(michal)();
 74:
            entity = zuuluu;
 77:
            if(!entity) { _fun00002_ip = 116; continue _fun00001 }
 80:
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 2;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.getIsActiveChannelOrUnarchivableThread;
            entity = zuuluu.bind(tangon)(michal);
 116:
            if(!entity) { _fun00002_ip = 141; continue _fun00001 }
 119:
            tangon = michal.type;
            zuuluu = _closure1_slot3;
            zuuluu = zuuluu.GUILD_VOICE;
            entity = tangon !== zuuluu;
 141:
            if(!entity) { _fun00002_ip = 166; continue _fun00001 }
 144:
            zuuluu = michal.type;
            michal = _closure1_slot3;
            michal = michal.GUILD_STAGE_VOICE;
            entity = zuuluu !== michal;
 166:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();