// app/modules/messages/GuildPinPermissionExperiment.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    yankee = true;
    tangon['value'] = yankee;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.GuildFeatures;
    var _closure1_slot3 = report;
    tangon = tangon.Permissions;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.createExperiment;
    tangon = {'kind': 'guild', 'id': '2025-06_guild_pin_permission', 'label': 'Guild Pin Permission'};
    verify = {};
    offset = false;
    verify['enabled'] = offset;
    tangon['defaultConfig'] = verify;
    offset = {'id': 1, 'label': 'Allows use of the Pin Messages permission'};
    verify = {};
    verify['enabled'] = yankee;
    offset['config'] = verify;
    verify = new Array(1);
    verify[0] = offset;
    tangon['treatments'] = verify;
    tangon = report.bind(option)(tangon);
    var _closure1_slot5 = tangon;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/GuildPinPermissionExperiment.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['GuildPinPermissionExperiment'] = tangon;
    michal = function(argFoo) { // Original name: useIsPinPermissionMigrationAvailableToCurrentUser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            golfie = oscard.bind(michal)(zuuluu);
            oscard = golfie.useStateFromStores;
            option = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = option;
            entity = function() {
                tangon = _closure1_slot2;
                zuuluu = tangon.can;
                entity = _closure1_slot4;
                michal = entity.ADMINISTRATOR;
                entity = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = oscard.bind(golfie)(zuuluu, entity);
            option = _closure1_slot5;
            golfie = option.useExperiment;
            zuuluu = {};
            oscard = null;
            offset = oscard == report;
            verify = undefined;
            if(offset) { _fun00002_ip = 92; continue _fun00001 }
 87:
            verify = report.id;
 92:
            zuuluu['guildId'] = verify;
            verify = 'useIsPinPermissionMigrationAvailableToCurrentUser';
            zuuluu['location'] = verify;
            zuuluu = golfie.bind(option)(zuuluu);
            zuuluu = zuuluu.enabled;
            oscard = oscard == report;
            michal = undefined;
            if(oscard) { _fun00002_ip = 149; continue _fun00001 }
 123:
            oscard = report.features;
            report = oscard.has;
            tangon = _closure1_slot3;
            tangon = tangon.PIN_PERMISSION_MIGRATION_COMPLETE;
            michal = report.bind(oscard)(tangon);
 149:
            if(!entity) { _fun00002_ip = 155; continue _fun00001 }
 152:
            entity = zuuluu;
 155:
            if(!entity) { _fun00002_ip = 161; continue _fun00001 }
 158:
            entity = !michal;
 161:
            return entity;
        }
    };
    zuuluu['useIsPinPermissionMigrationAvailableToCurrentUser'] = michal;
    return entity;
})();