// app/modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Permissions;
    var _closure1_slot3 = golf;
    tango = tango.GuildFeatures;
    var _closure1_slot4 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useGuildShopPreviewVisible
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            var _closure2_slot0 = options;
            zulu = _closure1_slot0;
            oscar = _closure1_slot1;
            entity = 2;
            entity = oscar[entity];
            offset = undefined;
            tango = zulu.bind(offset)(entity);
            mike = tango.useIsEligibleForGuildShopPreview;
            entity = argBar;
            tango = mike.bind(tango)(entity);
            entity = 3;
            entity = oscar[entity];
            golf = zulu.bind(offset)(entity);
            mike = golf.useIsDismissibleContentDismissed;
            entity = 4;
            entity = oscar[entity];
            entity = zulu.bind(offset)(entity);
            entity = entity.DismissibleContent;
            entity = entity.SERVER_SHOP_PHANTOM_PREVIEW;
            mike = mike.bind(golf)(entity);
            entity = 5;
            entity = oscar[entity];
            golf = zulu.bind(offset)(entity);
            oscar = golf.useStateFromStores;
            entity = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00004_ip = 49; continue _fun00003 }
 16:
                    report = _closure1_slot2;
                    tango = report.can;
                    zulu = _closure1_slot3;
                    zulu = zulu.ADMINISTRATOR;
                    mike = _closure2_slot0;
                    entity = tango.bind(report)(zulu, mike);
 49:
                    return entity;
                }
            };
            golf = oscar.bind(golf)(zulu, entity);
            entity = null;
            oscar = entity == options;
            zulu = undefined;
            if(oscar) { _fun00002_ip = 167; continue _fun00001 }
 146:
            yankee = options.hasFeature;
            oscar = _closure1_slot4;
            oscar = oscar.PRODUCTS_AVAILABLE_FOR_PURCHASE;
            zulu = yankee.bind(options)(oscar);
 167:
            oscar = entity != zulu;
            if(!oscar) { _fun00002_ip = 177; continue _fun00001 }
 174:
            oscar = zulu;
 177:
            yankee = _closure1_slot0;
            romeo = _closure1_slot1;
            zulu = 6;
            zulu = romeo[zulu];
            romeo = yankee.bind(offset)(zulu);
            yankee = romeo.useGuildEligibleForGuildProducts;
            zulu = entity == options;
            offset = undefined;
            if(zulu) { _fun00002_ip = 217; continue _fun00001 }
 212:
            offset = options.id;
 217:
            zulu = 'useGuildShopPreviewVisible';
            zulu = yankee.bind(romeo)(offset, zulu);
            verify = _closure1_slot4;
            yankee = verify.CREATOR_MONETIZABLE;
            offset = new Array(3);
            offset[0] = yankee;
            yankee = verify.CREATOR_MONETIZABLE_PROVISIONAL;
            offset[1] = yankee;
            verify = verify.ROLE_SUBSCRIPTIONS_ENABLED;
            offset[2] = verify;
            verify = offset.some;
            report = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    zulu = mike == zulu;
                    mike = undefined;
                    if(zulu) { _fun00006_ip = 36; continue _fun00005 }
 18:
                    tango = _closure2_slot0;
                    zulu = tango.hasFeature;
                    entity = argFoo;
                    mike = zulu.bind(tango)(entity);
 36:
                    entity = true;
                    entity = entity === mike;
                    return entity;
                }
            };
            report = verify.bind(offset)(report);
            entity = entity != options;
            if(!entity) { _fun00002_ip = 291; continue _fun00001 }
 288:
            entity = golf;
 291:
            if(!entity) { _fun00002_ip = 297; continue _fun00001 }
 294:
            entity = !oscar;
 297:
            if(!entity) { _fun00002_ip = 303; continue _fun00001 }
 300:
            entity = report;
 303:
            if(!entity) { _fun00002_ip = 309; continue _fun00001 }
 306:
            entity = tango;
 309:
            if(!entity) { _fun00002_ip = 315; continue _fun00001 }
 312:
            entity = zulu;
 315:
            if(!entity) { _fun00002_ip = 321; continue _fun00001 }
 318:
            entity = !mike;
 321:
            return entity;
        }
    };
    zulu['useGuildShopPreviewVisible'] = mike;
    return entity;
})();