// app/modules/directory_channels/useCanManageGuildDirectoryEntry.tsx
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/directory_channels/useCanManageGuildDirectoryEntry.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useCanManageGuildDirectoryEntry
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            report = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 4;
            oscard = golfie[zuuluu];
            tangon = undefined;
            offset = report.bind(tangon)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot3;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot3;
                michal = zuuluu.getGuild;
                entity = _closure2_slot0;
                entity = entity.guildId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = verify.bind(offset)(option, oscard);
            var _closure2_slot1 = oscard;
            oscard = golfie[zuuluu];
            offset = report.bind(tangon)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot2;
            option = new Array(1);
            option[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channelId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = verify.bind(offset)(option, oscard);
            var _closure2_slot2 = oscard;
            oscard = golfie[zuuluu];
            offset = report.bind(tangon)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot4;
            option = new Array(1);
            option[0] = oscard;
            michal = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.can;
                entity = _closure1_slot5;
                michal = entity.ADMINISTRATOR;
                entity = _closure2_slot1;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = verify.bind(offset)(option, michal);
            zuuluu = golfie[zuuluu];
            report = report.bind(tangon)(zuuluu);
            tangon = report.useStateFromStores;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            entity = function() {
                tangon = _closure1_slot4;
                zuuluu = tangon.can;
                entity = _closure1_slot5;
                michal = entity.MANAGE_MESSAGES;
                entity = _closure2_slot2;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu, entity);
            entity = {};
            entity['isEntryAdmin'] = michal;
            tangon = michal;
            if(michal) { _fun00002_ip = 193; continue _fun00001 }
 190:
            tangon = zuuluu;
 193:
            entity['canEdit'] = tangon;
            if(michal) { _fun00002_ip = 204; continue _fun00001 }
 201:
            michal = zuuluu;
 204:
            entity['canRemove'] = michal;
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: useCanCreateOrAddGuildInDirectory
        michal = argFoo;
        var _closure2_slot0 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot4;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            tangon = _closure1_slot4;
            zuuluu = tangon.can;
            entity = _closure1_slot5;
            michal = entity.SEND_MESSAGES;
            entity = _closure2_slot0;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCanCreateOrAddGuildInDirectory'] = michal;
    return entity;
})();