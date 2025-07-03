// app/modules/guild_automod/PermissionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot4 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot5 = tangon;
    tangon = function(argFoo) { // Original name: getHasAutomodAccess
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[1];
            report = arguments[2];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            zuuluu = _closure1_slot2;
 19:
            if(!(report === entity)) { _fun00002_ip = 30; continue _fun00001 }
 23:
            report = _closure1_slot3;
 30:
            michal = zuuluu.getGuild;
            entity = argFoo;
            tangon = michal.bind(zuuluu)(entity);
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00002_ip = 77; continue _fun00001 }
 52:
            zuuluu = report.can;
            michal = _closure1_slot5;
            michal = michal.MANAGE_GUILD;
            entity = zuuluu.bind(report)(michal, tangon);
 77:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_automod/PermissionUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: canCurrentUserManageMessageFilters
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00004_ip = 26; continue _fun00003 }
 12:
            zuuluu = _closure1_slot6;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 26:
            return entity;
        }
    };
    zuuluu['canCurrentUserManageMessageFilters'] = tangon;
    tangon = function(argFoo) { // Original name: canCurrentUserManageAutomod
        zuuluu = _closure1_slot6;
        michal = undefined;
        entity = argFoo;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['canCurrentUserManageAutomod'] = tangon;
    tangon = function(argFoo) { // Original name: useCanCurrentUserManageAutomod
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot2;
        zuuluu = new Array(2);
        zuuluu[0] = golfie;
        michal = _closure1_slot3;
        zuuluu[1] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            report = _closure1_slot6;
            tangon = _closure2_slot0;
            zuuluu = _closure1_slot2;
            michal = _closure1_slot3;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useCanCurrentUserManageAutomod'] = tangon;
    michal = function(argFoo) { // Original name: useIsUserProfileRuleEnabled
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = _closure1_slot2;
                zuuluu = tangon.getGuild;
                entity = _closure2_slot0;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = null;
                tangon = entity == zuuluu;
                entity = undefined;
                if(tangon) { _fun00006_ip = 61; continue _fun00005 }
 35:
                tangon = zuuluu.features;
                zuuluu = tangon.has;
                michal = _closure1_slot4;
                michal = michal.COMMUNITY;
                entity = zuuluu.bind(tangon)(michal);
 61:
                if(entity) { _fun00006_ip = 66; continue _fun00005 }
 64:
                entity = false;
 66:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useIsUserProfileRuleEnabled'] = michal;
    return entity;
})();