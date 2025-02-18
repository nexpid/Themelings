// app/modules/guild_settings/GuildSettingsModalRolesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: updateGuildRole
        entity = undefined;
        tangon = _closure1_slot6;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _updateGuildRole
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 234; continue _fun00001 }
 13:
                    oscard = michal.guildId;
                    sizing = michal.roleId;
                    backup = michal.name;
                    romeon = michal.permissions;
                    foxtra = michal.color;
                    yankee = michal.hoist;
                    offset = michal.mentionable;
                    golfie = undefined;
                    SaveGenerator(address=58);
 56:
                    return golfie;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 231; continue _fun00001 }
 67:
                    report = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 2;
                    zuuluu = option[zuuluu];
                    zuuluu = report.bind(golfie)(zuuluu);
                    option = zuuluu.HTTP;
                    report = option.patch;
                    zuuluu = {};
                    kiloes = _closure1_slot4;
                    verify = kiloes.GUILD_ROLE;
                    verify = verify.bind(kiloes)(oscard, sizing);
                    zuuluu['url'] = verify;
                    verify = {};
                    verify['name'] = backup;
                    verify['permissions'] = romeon;
                    romeon = null;
                    backup = romeon != foxtra;
                    romeon = 0;
                    if(!backup) { _fun00002_ip = 148; continue _fun00001 }
 145:
                    romeon = foxtra;
 148:
                    verify['color'] = romeon;
                    verify['hoist'] = yankee;
                    verify['mentionable'] = offset;
                    zuuluu['body'] = verify;
                    verify = true;
                    zuuluu['oldFormErrors'] = verify;
                    verify = false;
                    zuuluu['rejectWithError'] = verify;
                    zuuluu = report.bind(option)(zuuluu);
                    SaveGenerator(address=188);
 186:
                    return zuuluu;
 188:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 228; continue _fun00001 }
 194:
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 3;
                    tangon = option[tangon];
                    report = report.bind(golfie)(tangon);
                    tangon = report.checkGuildTemplateDirty;
                    tangon = tangon.bind(report)(oscard);
                    return zuuluu;
 228:
                    return zuuluu;
 231:
                    return michal;
 234:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: startReordering
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_START_REORDER';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['startReordering'] = golfie;
    golfie = function() { // Original name: stopReordering
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.wait;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER';
            entity['type'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['stopReordering'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: updateRoleOrder
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER';
        michal['type'] = report;
        report = argFoo;
        michal['from'] = report;
        report = argBar;
        michal['to'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateRoleOrder'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: toggleRoleSetting
        entity = argBar;
        zuuluu = _closure1_slot5;
        michal = {};
        tangon = argFoo;
        michal['guildId'] = tangon;
        tangon = entity.id;
        michal['roleId'] = tangon;
        tangon = entity.name;
        michal['name'] = tangon;
        tangon = entity.permissions;
        michal['permissions'] = tangon;
        entity = entity.color;
        michal['color'] = entity;
        entity = argBaz;
        michal['hoist'] = entity;
        entity = argCor;
        michal['mentionable'] = entity;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    michal['toggleRoleSetting'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: startEditingPermissions
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['roleId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['startEditingPermissions'] = golfie;
    golfie = function() { // Original name: stopEditingPermissions
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['stopEditingPermissions'] = golfie;
    golfie = function(argFoo) { // Original name: allowPermission
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW';
        michal['type'] = report;
        report = argFoo;
        michal['permission'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['allowPermission'] = golfie;
    golfie = function(argFoo) { // Original name: denyPermission
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY';
        michal['type'] = report;
        report = argFoo;
        michal['permission'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['denyPermission'] = golfie;
    golfie = function() { // Original name: cancelPermissionChanges
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['cancelPermissionChanges'] = golfie;
    tangon = function(argFoo) { // Original name: savePermissionChanges
        entity = argFoo;
        yankee = entity.guildId;
        offset = entity.roleId;
        verify = entity.name;
        option = entity.permissions;
        golfie = entity.color;
        oscard = entity.hoist;
        report = entity.mentionable;
        romeon = _closure1_slot1;
        tangon = _closure1_slot2;
        entity = 4;
        tangon = tangon[entity];
        entity = undefined;
        foxtra = romeon.bind(entity)(tangon);
        romeon = foxtra.dispatch;
        tangon = {};
        backup = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING';
        tangon['type'] = backup;
        tangon = romeon.bind(foxtra)(tangon);
        tangon = _closure1_slot5;
        zuuluu = {};
        zuuluu['guildId'] = yankee;
        zuuluu['roleId'] = offset;
        zuuluu['name'] = verify;
        zuuluu['permissions'] = option;
        zuuluu['color'] = golfie;
        zuuluu['hoist'] = oscard;
        zuuluu['mentionable'] = report;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.then;
        zuuluu = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS';
            entity['type'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {};
            tangon = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE';
            entity['type'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['savePermissionChanges'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/GuildSettingsModalRolesActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();