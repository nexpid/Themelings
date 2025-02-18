// app/modules/game_store/getAnalyticsDataForSKU.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
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
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SKUFeatureTypes;
    var _closure1_slot1 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_store/getAnalyticsDataForSKU.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getAnalyticsDataForSKU
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            entity = arguments[1];
            oscard = arguments[2];
            michal = undefined;
            if(!(entity === michal)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            entity = false;
 17:
            if(!(oscard === michal)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            oscard = true;
 23:
            tangon = _closure1_slot0;
            zuuluu = tangon.getApplication;
            michal = golfie.applicationId;
            option = zuuluu.bind(tangon)(michal);
            michal = golfie.getPrice;
            verify = michal.bind(golfie)();
            tangon = golfie.getPrice;
            michal = null;
            zuuluu = false;
            offset = tangon.bind(golfie)(michal, zuuluu);
            tangon = {};
            zuuluu = golfie.id;
            tangon['sku_id'] = zuuluu;
            zuuluu = golfie.type;
            tangon['sku_type'] = zuuluu;
            zuuluu = golfie.applicationId;
            tangon['application_id'] = zuuluu;
            yankee = michal != option;
            zuuluu = null;
            if(!yankee) { _fun00002_ip = 118; continue _fun00001 }
 113:
            zuuluu = option.name;
 118:
            tangon['application_name'] = zuuluu;
            zuuluu = golfie.name;
            tangon['store_title'] = zuuluu;
            option = golfie.premium;
            zuuluu = 'distribution';
            if(!option) { _fun00002_ip = 150; continue _fun00001 }
 146:
            zuuluu = 'premium';
 150:
            tangon['distribution_type'] = zuuluu;
            zuuluu = null;
            if(!oscard) { _fun00002_ip = 227; continue _fun00001 }
 162:
            oscard = {};
            yankee = michal != verify;
            option = null;
            if(!yankee) { _fun00002_ip = 179; continue _fun00001 }
 173:
            option = verify.amount;
 179:
            oscard['price'] = option;
            yankee = michal != offset;
            option = null;
            if(!yankee) { _fun00002_ip = 199; continue _fun00001 }
 193:
            option = offset.amount;
 199:
            oscard['regular_price'] = option;
            offset = michal != verify;
            option = null;
            if(!offset) { _fun00002_ip = 219; continue _fun00001 }
 213:
            option = verify.currency;
 219:
            oscard['currency'] = option;
            zuuluu = oscard;
 227:
            michal = null;
            if(!entity) { _fun00002_ip = 556; continue _fun00001 }
 235:
            entity = {};
            option = golfie.hasFeature;
            report = _closure1_slot1;
            oscard = report.SINGLE_PLAYER;
            oscard = option.bind(golfie)(oscard);
            entity['has_single_player'] = oscard;
            option = golfie.hasFeature;
            oscard = report.ONLINE_MULTIPLAYER;
            oscard = option.bind(golfie)(oscard);
            entity['has_online_multiplayer'] = oscard;
            option = golfie.hasFeature;
            oscard = report.LOCAL_MULTIPLAYER;
            oscard = option.bind(golfie)(oscard);
            entity['has_local_multiplayer'] = oscard;
            option = golfie.hasFeature;
            oscard = report.PVP;
            oscard = option.bind(golfie)(oscard);
            entity['has_pvp_features'] = oscard;
            option = golfie.hasFeature;
            oscard = report.LOCAL_COOP;
            oscard = option.bind(golfie)(oscard);
            entity['has_local_coop'] = oscard;
            option = golfie.hasFeature;
            oscard = report.ONLINE_COOP;
            oscard = option.bind(golfie)(oscard);
            entity['has_online_coop'] = oscard;
            option = golfie.hasFeature;
            oscard = report.CROSS_PLATFORM;
            oscard = option.bind(golfie)(oscard);
            entity['has_cross_platform'] = oscard;
            option = golfie.hasFeature;
            oscard = report.RICH_PRESENCE;
            oscard = option.bind(golfie)(oscard);
            entity['has_rich_presence'] = oscard;
            option = golfie.hasFeature;
            oscard = report.DISCORD_GAME_INVITES;
            oscard = option.bind(golfie)(oscard);
            entity['has_game_invites'] = oscard;
            option = golfie.hasFeature;
            oscard = report.SPECTATOR_MODE;
            oscard = option.bind(golfie)(oscard);
            entity['has_spectator_mode'] = oscard;
            option = golfie.hasFeature;
            oscard = report.CONTROLLER_SUPPORT;
            oscard = option.bind(golfie)(oscard);
            entity['has_controller_support'] = oscard;
            option = golfie.hasFeature;
            oscard = report.CLOUD_SAVES;
            oscard = option.bind(golfie)(oscard);
            entity['has_cloud_saves'] = oscard;
            oscard = golfie.hasFeature;
            report = report.SECURE_NETWORKING;
            report = oscard.bind(golfie)(report);
            entity['has_secure_networking'] = report;
            michal = entity;
 556:
            entity = {};
            foxtra = entity;
            romeon = tangon;
            tangon = copyDataProperties(foxtra, romeon);
            foxtra = entity;
            romeon = zuuluu;
            zuuluu = copyDataProperties(foxtra, romeon);
            foxtra = entity;
            romeon = michal;
            michal = copyDataProperties(foxtra, romeon);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();