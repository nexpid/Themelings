// app/modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx
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
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_role_subscriptions/native/components/listing_elements/GuildRoleSubscriptionSettingsUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getCoverImageURI
        _fun112082: for(var _fun112082_ip = 0; ; ) switch(_fun112082_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot2;
            tango = report.getApplicationIdForGuild;
            mike = entity.guild_id;
            oscar = tango.bind(report)(mike);
            report = null;
            tango = report != oscar;
            if(!tango) { _fun112082_ip = 47; continue _fun112082 }
 37:
            mike = entity.cover_image_asset;
            tango = report != mike;
 47:
            mike = '';
            if(!tango) { _fun112082_ip = 101; continue _fun112082 }
 54:
            report = _closure1_slot0;
            tango = _closure1_slot1;
            zulu = 1;
            tango = tango[zulu];
            zulu = undefined;
            report = report.bind(zulu)(tango);
            tango = report.getAssetURL;
            zulu = entity.cover_image_asset;
            entity = 1024;
            mike = tango.bind(report)(oscar, zulu, entity);
 101:
            entity = {};
            entity['uri'] = mike;
            return entity;
        }
    };
    zulu['getCoverImageURI'] = mike;
    return entity;
})();