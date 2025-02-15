// app/modules/game_store/getAnalyticsDataForSKU.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SKUFeatureTypes;
    var _closure1_slot1 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/game_store/getAnalyticsDataForSKU.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getAnalyticsDataForSKU
        _fun56047: for(var _fun56047_ip = 0; ; ) switch(_fun56047_ip) {
 0:
            golf = argFoo;
            entity = arguments[1];
            oscar = arguments[2];
            mike = undefined;
            if(!(entity === mike)) { _fun56047_ip = 17; continue _fun56047 }
 15:
            entity = false;
 17:
            if(!(oscar === mike)) { _fun56047_ip = 23; continue _fun56047 }
 21:
            oscar = true;
 23:
            tango = _closure1_slot0;
            zulu = tango.getApplication;
            mike = golf.applicationId;
            options = zulu.bind(tango)(mike);
            mike = golf.getPrice;
            verify = mike.bind(golf)();
            tango = golf.getPrice;
            mike = null;
            zulu = false;
            offset = tango.bind(golf)(mike, zulu);
            tango = {};
            zulu = golf.id;
            tango['sku_id'] = zulu;
            zulu = golf.type;
            tango['sku_type'] = zulu;
            zulu = golf.applicationId;
            tango['application_id'] = zulu;
            yankee = mike != options;
            zulu = null;
            if(!yankee) { _fun56047_ip = 118; continue _fun56047 }
 113:
            zulu = options.name;
 118:
            tango['application_name'] = zulu;
            zulu = golf.name;
            tango['store_title'] = zulu;
            options = golf.premium;
            zulu = 'distribution';
            if(!options) { _fun56047_ip = 150; continue _fun56047 }
 146:
            zulu = 'premium';
 150:
            tango['distribution_type'] = zulu;
            zulu = null;
            if(!oscar) { _fun56047_ip = 227; continue _fun56047 }
 162:
            oscar = {};
            yankee = mike != verify;
            options = null;
            if(!yankee) { _fun56047_ip = 179; continue _fun56047 }
 173:
            options = verify.amount;
 179:
            oscar['price'] = options;
            yankee = mike != offset;
            options = null;
            if(!yankee) { _fun56047_ip = 199; continue _fun56047 }
 193:
            options = offset.amount;
 199:
            oscar['regular_price'] = options;
            offset = mike != verify;
            options = null;
            if(!offset) { _fun56047_ip = 219; continue _fun56047 }
 213:
            options = verify.currency;
 219:
            oscar['currency'] = options;
            zulu = oscar;
 227:
            mike = null;
            if(!entity) { _fun56047_ip = 556; continue _fun56047 }
 235:
            entity = {};
            options = golf.hasFeature;
            report = _closure1_slot1;
            oscar = report.SINGLE_PLAYER;
            oscar = options.bind(golf)(oscar);
            entity['has_single_player'] = oscar;
            options = golf.hasFeature;
            oscar = report.ONLINE_MULTIPLAYER;
            oscar = options.bind(golf)(oscar);
            entity['has_online_multiplayer'] = oscar;
            options = golf.hasFeature;
            oscar = report.LOCAL_MULTIPLAYER;
            oscar = options.bind(golf)(oscar);
            entity['has_local_multiplayer'] = oscar;
            options = golf.hasFeature;
            oscar = report.PVP;
            oscar = options.bind(golf)(oscar);
            entity['has_pvp_features'] = oscar;
            options = golf.hasFeature;
            oscar = report.LOCAL_COOP;
            oscar = options.bind(golf)(oscar);
            entity['has_local_coop'] = oscar;
            options = golf.hasFeature;
            oscar = report.ONLINE_COOP;
            oscar = options.bind(golf)(oscar);
            entity['has_online_coop'] = oscar;
            options = golf.hasFeature;
            oscar = report.CROSS_PLATFORM;
            oscar = options.bind(golf)(oscar);
            entity['has_cross_platform'] = oscar;
            options = golf.hasFeature;
            oscar = report.RICH_PRESENCE;
            oscar = options.bind(golf)(oscar);
            entity['has_rich_presence'] = oscar;
            options = golf.hasFeature;
            oscar = report.DISCORD_GAME_INVITES;
            oscar = options.bind(golf)(oscar);
            entity['has_game_invites'] = oscar;
            options = golf.hasFeature;
            oscar = report.SPECTATOR_MODE;
            oscar = options.bind(golf)(oscar);
            entity['has_spectator_mode'] = oscar;
            options = golf.hasFeature;
            oscar = report.CONTROLLER_SUPPORT;
            oscar = options.bind(golf)(oscar);
            entity['has_controller_support'] = oscar;
            options = golf.hasFeature;
            oscar = report.CLOUD_SAVES;
            oscar = options.bind(golf)(oscar);
            entity['has_cloud_saves'] = oscar;
            oscar = golf.hasFeature;
            report = report.SECURE_NETWORKING;
            report = oscar.bind(golf)(report);
            entity['has_secure_networking'] = report;
            mike = entity;
 556:
            entity = {};
            foxtrot = entity;
            romeo = tango;
            tango = copyDataProperties(foxtrot, romeo);
            foxtrot = entity;
            romeo = zulu;
            zulu = copyDataProperties(foxtrot, romeo);
            foxtrot = entity;
            romeo = mike;
            mike = copyDataProperties(foxtrot, romeo);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();