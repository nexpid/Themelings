// app/modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot2 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: PurchaseNotificationSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.row;
            entity = oscard.message;
            michal = entity.purchaseNotification;
            entity = null;
            zuuluu = entity == michal;
            report = undefined;
            tangon = undefined;
            if(zuuluu) { _fun00002_ip = 38; continue _fun00001 }
 33:
            tangon = michal.type;
 38:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 2;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.PurchaseNotificationType;
            zuuluu = zuuluu.GUILD_PRODUCT;
            entity = null;
            if(!(tangon === zuuluu)) { _fun00002_ip = 122; continue _fun00001 }
 79:
            tangon = _closure1_slot2;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.GuildProductPurchaseSystemMessage;
            michal = {};
            michal['row'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 122:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: createPurchaseNotificationSystemMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = tangon.message;
            michal = entity.purchaseNotification;
            entity = null;
            zuuluu = entity == michal;
            report = undefined;
            oscard = undefined;
            if(zuuluu) { _fun00004_ip = 32; continue _fun00003 }
 27:
            oscard = michal.type;
 32:
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            zuuluu = 2;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.PurchaseNotificationType;
            zuuluu = zuuluu.GUILD_PRODUCT;
            entity = null;
            if(!(oscard === zuuluu)) { _fun00004_ip = 104; continue _fun00003 }
 73:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 3;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.createGuildProductPurchaseSystemMessage;
            entity = michal.bind(zuuluu)(tangon);
 104:
            return entity;
        }
    };
    zuuluu['createPurchaseNotificationSystemMessage'] = michal;
    return entity;
})();