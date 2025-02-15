// app/modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot2 = tango;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: PurchaseNotificationSystemMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = entity.row;
            entity = oscar.message;
            mike = entity.purchaseNotification;
            entity = null;
            zulu = entity == mike;
            report = undefined;
            tango = undefined;
            if(zulu) { _fun00002_ip = 38; continue _fun00001 }
 33:
            tango = mike.type;
 38:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 2;
            zulu = options[zulu];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.PurchaseNotificationType;
            zulu = zulu.GUILD_PRODUCT;
            entity = null;
            if(!(tango === zulu)) { _fun00002_ip = 122; continue _fun00001 }
 79:
            tango = _closure1_slot2;
            zulu = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.GuildProductPurchaseSystemMessage;
            mike = {};
            mike['row'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 122:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: createPurchaseNotificationSystemMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            entity = tango.message;
            mike = entity.purchaseNotification;
            entity = null;
            zulu = entity == mike;
            report = undefined;
            oscar = undefined;
            if(zulu) { _fun00004_ip = 32; continue _fun00003 }
 27:
            oscar = mike.type;
 32:
            golf = _closure1_slot0;
            options = _closure1_slot1;
            zulu = 2;
            zulu = options[zulu];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.PurchaseNotificationType;
            zulu = zulu.GUILD_PRODUCT;
            entity = null;
            if(!(oscar === zulu)) { _fun00004_ip = 104; continue _fun00003 }
 73:
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            mike = 3;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.createGuildProductPurchaseSystemMessage;
            entity = mike.bind(zulu)(tango);
 104:
            return entity;
        }
    };
    zulu['createPurchaseNotificationSystemMessage'] = mike;
    return entity;
})();