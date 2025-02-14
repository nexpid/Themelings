// app/modules/premium/GuildCapUpsellHooks.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MAX_USER_GUILDS;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/GuildCapUpsellHooks.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useShouldShowInlineGuildCapUpsell
        _fun91556: for(var _fun91556_ip = 0; ; ) switch(_fun91556_ip) {
 0:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            report = 3;
            entity = options[report];
            oscar = undefined;
            offset = golf.bind(oscar)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot3;
            zulu = new Array(1);
            zulu[0] = entity;
            entity = function() {
                mike = _closure1_slot3;
                entity = mike.getGuildCount;
                mike = entity.bind(mike)();
                entity = 95;
                entity = mike >= entity;
                return entity;
            };
            entity = verify.bind(offset)(zulu, entity);
            zulu = options[report];
            yankee = golf.bind(oscar)(zulu);
            offset = yankee.useStateFromStores;
            zulu = 4;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.HotspotStore;
            verify = new Array(1);
            verify[0] = zulu;
            zulu = function() {
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 4;
                mike = oscar[entity];
                tango = undefined;
                mike = report.bind(tango)(mike);
                zulu = mike.HotspotStore;
                mike = zulu.hasHotspot;
                entity = oscar[entity];
                entity = report.bind(tango)(entity);
                entity = entity.HotspotLocations;
                entity = entity.GUILD_CAP_INLINE_UPSELL;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = offset.bind(yankee)(verify, zulu);
            report = options[report];
            oscar = golf.bind(oscar)(report);
            report = oscar.useStateFromStoresObject;
            golf = _closure1_slot4;
            tango = new Array(1);
            tango[0] = golf;
            mike = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 5;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.isPremium;
                tango = _closure1_slot4;
                entity = tango.getCurrentUser;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(entity);
                entity = !entity;
                return entity;
            };
            mike = report.bind(oscar)(tango, mike);
            if(!entity) { _fun91556_ip = 156; continue _fun91556 }
 153:
            entity = zulu;
 156:
            if(!entity) { _fun91556_ip = 162; continue _fun91556 }
 159:
            entity = mike;
 162:
            return entity;
        }
    };
    zulu['useShouldShowInlineGuildCapUpsell'] = tango;
    tango = function() { // Original name: hideInlineGuildCapUpsell
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        mike = 4;
        zulu = oscar[mike];
        entity = undefined;
        tango = report.bind(entity)(zulu);
        zulu = tango.hideHotspot;
        mike = oscar[mike];
        mike = report.bind(entity)(mike);
        mike = mike.HotspotLocations;
        mike = mike.GUILD_CAP_INLINE_UPSELL;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['hideInlineGuildCapUpsell'] = tango;
    mike = function() { // Original name: isAtGuildCapAndNonPremium
        _fun91561: for(var _fun91561_ip = 0; ; ) switch(_fun91561_ip) {
 0:
            zulu = _closure1_slot3;
            entity = zulu.getGuildCount;
            zulu = entity.bind(zulu)();
            entity = _closure1_slot5;
            entity = zulu >= entity;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 5;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.canUseIncreasedGuildCap;
            report = _closure1_slot4;
            mike = report.getCurrentUser;
            mike = mike.bind(report)();
            mike = zulu.bind(tango)(mike);
            if(!entity) { _fun91561_ip = 77; continue _fun91561 }
 74:
            entity = !mike;
 77:
            return entity;
        }
    };
    zulu['isAtGuildCapAndNonPremium'] = mike;
    return entity;
})();