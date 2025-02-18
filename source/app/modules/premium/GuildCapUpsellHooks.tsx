// app/modules/premium/GuildCapUpsellHooks.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.MAX_USER_GUILDS;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/GuildCapUpsellHooks.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: useShouldShowInlineGuildCapUpsell
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            report = 3;
            entity = option[report];
            oscard = undefined;
            offset = golfie.bind(oscard)(entity);
            verify = offset.useStateFromStores;
            entity = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getGuildCount;
                michal = entity.bind(michal)();
                entity = 95;
                entity = michal >= entity;
                return entity;
            };
            entity = verify.bind(offset)(zuuluu, entity);
            zuuluu = option[report];
            yankee = golfie.bind(oscard)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = 4;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.HotspotStore;
            verify = new Array(1);
            verify[0] = zuuluu;
            zuuluu = function() {
                report = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 4;
                michal = oscard[entity];
                tangon = undefined;
                michal = report.bind(tangon)(michal);
                zuuluu = michal.HotspotStore;
                michal = zuuluu.hasHotspot;
                entity = oscard[entity];
                entity = report.bind(tangon)(entity);
                entity = entity.HotspotLocations;
                entity = entity.GUILD_CAP_INLINE_UPSELL;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = offset.bind(yankee)(verify, zuuluu);
            report = option[report];
            oscard = golfie.bind(oscard)(report);
            report = oscard.useStateFromStoresObject;
            golfie = _closure1_slot4;
            tangon = new Array(1);
            tangon[0] = golfie;
            michal = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 5;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isPremium;
                tangon = _closure1_slot4;
                entity = tangon.getCurrentUser;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            michal = report.bind(oscard)(tangon, michal);
            if(!entity) { _fun00002_ip = 156; continue _fun00001 }
 153:
            entity = zuuluu;
 156:
            if(!entity) { _fun00002_ip = 162; continue _fun00001 }
 159:
            entity = michal;
 162:
            return entity;
        }
    };
    zuuluu['useShouldShowInlineGuildCapUpsell'] = tangon;
    tangon = function() { // Original name: hideInlineGuildCapUpsell
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 4;
        zuuluu = oscard[michal];
        entity = undefined;
        tangon = report.bind(entity)(zuuluu);
        zuuluu = tangon.hideHotspot;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.HotspotLocations;
        michal = michal.GUILD_CAP_INLINE_UPSELL;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['hideInlineGuildCapUpsell'] = tangon;
    michal = function() { // Original name: isAtGuildCapAndNonPremium
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot3;
            entity = zuuluu.getGuildCount;
            zuuluu = entity.bind(zuuluu)();
            entity = _closure1_slot5;
            entity = zuuluu >= entity;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 5;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.canUseIncreasedGuildCap;
            report = _closure1_slot4;
            michal = report.getCurrentUser;
            michal = michal.bind(report)();
            michal = zuuluu.bind(tangon)(michal);
            if(!entity) { _fun00004_ip = 77; continue _fun00003 }
 74:
            entity = !michal;
 77:
            return entity;
        }
    };
    zuuluu['isAtGuildCapAndNonPremium'] = michal;
    return entity;
})();