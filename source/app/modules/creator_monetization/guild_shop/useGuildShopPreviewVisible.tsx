// app/modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Permissions;
    var _closure1_slot3 = golfie;
    tangon = tangon.GuildFeatures;
    var _closure1_slot4 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useGuildShopPreviewVisible
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 2;
            entity = oscard[entity];
            offset = undefined;
            tangon = zuuluu.bind(offset)(entity);
            michal = tangon.useIsEligibleForGuildShopPreview;
            entity = argBar;
            tangon = michal.bind(tangon)(entity);
            entity = 3;
            entity = oscard[entity];
            golfie = zuuluu.bind(offset)(entity);
            michal = golfie.UNSAFE_useIsDismissibleContentDismissed;
            entity = 4;
            entity = oscard[entity];
            entity = zuuluu.bind(offset)(entity);
            entity = entity.DismissibleContent;
            entity = entity.SERVER_SHOP_PHANTOM_PREVIEW;
            michal = michal.bind(golfie)(entity);
            entity = 5;
            entity = oscard[entity];
            golfie = zuuluu.bind(offset)(entity);
            oscard = golfie.useStateFromStores;
            entity = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00004_ip = 49; continue _fun00003 }
 16:
                    report = _closure1_slot2;
                    tangon = report.can;
                    zuuluu = _closure1_slot3;
                    zuuluu = zuuluu.ADMINISTRATOR;
                    michal = _closure2_slot0;
                    entity = tangon.bind(report)(zuuluu, michal);
 49:
                    return entity;
                }
            };
            golfie = oscard.bind(golfie)(zuuluu, entity);
            entity = null;
            oscard = entity == option;
            zuuluu = undefined;
            if(oscard) { _fun00002_ip = 172; continue _fun00001 }
 146:
            romeon = option.features;
            yankee = romeon.has;
            oscard = _closure1_slot4;
            oscard = oscard.PRODUCTS_AVAILABLE_FOR_PURCHASE;
            zuuluu = yankee.bind(romeon)(oscard);
 172:
            oscard = entity != zuuluu;
            if(!oscard) { _fun00002_ip = 182; continue _fun00001 }
 179:
            oscard = zuuluu;
 182:
            yankee = _closure1_slot0;
            romeon = _closure1_slot1;
            zuuluu = 6;
            zuuluu = romeon[zuuluu];
            romeon = yankee.bind(offset)(zuuluu);
            yankee = romeon.useGuildEligibleForGuildProducts;
            zuuluu = entity == option;
            offset = undefined;
            if(zuuluu) { _fun00002_ip = 222; continue _fun00001 }
 217:
            offset = option.id;
 222:
            zuuluu = 'useGuildShopPreviewVisible';
            zuuluu = yankee.bind(romeon)(offset, zuuluu);
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
                    zuuluu = _closure2_slot0;
                    entity = null;
                    zuuluu = entity == zuuluu;
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 41; continue _fun00005 }
 18:
                    michal = _closure2_slot0;
                    tangon = michal.features;
                    zuuluu = tangon.has;
                    michal = argFoo;
                    entity = zuuluu.bind(tangon)(michal);
 41:
                    return entity;
                }
            };
            report = verify.bind(offset)(report);
            entity = entity != option;
            if(!entity) { _fun00002_ip = 296; continue _fun00001 }
 293:
            entity = golfie;
 296:
            if(!entity) { _fun00002_ip = 302; continue _fun00001 }
 299:
            entity = !oscard;
 302:
            if(!entity) { _fun00002_ip = 308; continue _fun00001 }
 305:
            entity = report;
 308:
            if(!entity) { _fun00002_ip = 314; continue _fun00001 }
 311:
            entity = tangon;
 314:
            if(!entity) { _fun00002_ip = 320; continue _fun00001 }
 317:
            entity = zuuluu;
 320:
            if(!entity) { _fun00002_ip = 326; continue _fun00001 }
 323:
            entity = !michal;
 326:
            return entity;
        }
    };
    zuuluu['useGuildShopPreviewVisible'] = michal;
    return entity;
})();