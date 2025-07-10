// app/modules/guild_action_sheet/native/GuildActionSheetUtils.tsx
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
    tangon = tangon.Permissions;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_action_sheet/native/GuildActionSheetUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 2;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        michal = _closure1_slot2;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity != zuuluu)) { _fun00002_ip = 142; continue _fun00001 }
 16:
                entity = {};
                golfie = _closure1_slot2;
                tangon = golfie.canAccessGuildSettings;
                oscard = _closure2_slot0;
                tangon = tangon.bind(golfie)(oscard);
                entity['canAccessSettings'] = tangon;
                report = golfie.can;
                tangon = _closure1_slot3;
                tangon = tangon.CHANGE_NICKNAME;
                tangon = report.bind(golfie)(tangon, oscard);
                if(tangon) { _fun00002_ip = 100; continue _fun00001 }
 70:
                option = _closure1_slot2;
                golfie = option.can;
                report = _closure1_slot3;
                oscard = report.MANAGE_NICKNAMES;
                report = _closure2_slot0;
                tangon = golfie.bind(option)(oscard, report);
 100:
                entity['canEditNickname'] = tangon;
                report = _closure1_slot2;
                tangon = report.can;
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.MANAGE_CHANNELS;
                michal = _closure2_slot0;
                michal = tangon.bind(report)(zuuluu, michal);
                entity['canManageChannels'] = michal;
                _fun00002_ip = 156; continue _fun00001;
 142:
                entity = {'canAccessSettings': false, 'canEditNickname': false, 'canManageChannels': false};
 156:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useGuildActionSheetPermissions'] = michal;
    return entity;
})();