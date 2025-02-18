// app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx
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
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getCoverImageURI
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot2;
            tangon = report.getApplicationIdForGuild;
            michal = entity.guild_id;
            oscard = tangon.bind(report)(michal);
            report = null;
            tangon = report != oscard;
            if(!tangon) { _fun00002_ip = 47; continue _fun00001 }
 37:
            michal = entity.cover_image_asset;
            tangon = report != michal;
 47:
            michal = '';
            if(!tangon) { _fun00002_ip = 101; continue _fun00001 }
 54:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 1;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.getAssetURL;
            zuuluu = entity.cover_image_asset;
            entity = 1024;
            michal = tangon.bind(report)(oscard, zuuluu, entity);
 101:
            entity = {};
            entity['uri'] = michal;
            return entity;
        }
    };
    zuuluu['getCoverImageURI'] = michal;
    return entity;
})();