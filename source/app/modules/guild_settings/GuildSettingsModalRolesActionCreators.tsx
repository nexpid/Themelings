// app/modules/guild_settings/GuildSettingsModalRolesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: updateGuildRole
        entity = undefined;
        tango = _closure1_slot6;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: _updateGuildRole
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun126151: for(var _fun126151_ip = 0; ; ) switch(_fun126151_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun126151_ip = 234; continue _fun126151 }
 13:
                    oscar = mike.guildId;
                    sizing = mike.roleId;
                    backup = mike.name;
                    romeo = mike.permissions;
                    foxtrot = mike.color;
                    yankee = mike.hoist;
                    offset = mike.mentionable;
                    golf = undefined;
                    SaveGenerator(address=58);
 56:
                    return golf;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun126151_ip = 231; continue _fun126151 }
 67:
                    report = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 2;
                    zulu = options[zulu];
                    zulu = report.bind(golf)(zulu);
                    options = zulu.HTTP;
                    report = options.patch;
                    zulu = {};
                    kilo = _closure1_slot4;
                    verify = kilo.GUILD_ROLE;
                    verify = verify.bind(kilo)(oscar, sizing);
                    zulu['url'] = verify;
                    verify = {};
                    verify['name'] = backup;
                    verify['permissions'] = romeo;
                    romeo = null;
                    backup = romeo != foxtrot;
                    romeo = 0;
                    if(!backup) { _fun126151_ip = 148; continue _fun126151 }
 145:
                    romeo = foxtrot;
 148:
                    verify['color'] = romeo;
                    verify['hoist'] = yankee;
                    verify['mentionable'] = offset;
                    zulu['body'] = verify;
                    verify = true;
                    zulu['oldFormErrors'] = verify;
                    verify = false;
                    zulu['rejectWithError'] = verify;
                    zulu = report.bind(options)(zulu);
                    SaveGenerator(address=188);
 186:
                    return zulu;
 188:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun126151_ip = 228; continue _fun126151 }
 194:
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 3;
                    tango = options[tango];
                    report = report.bind(golf)(tango);
                    tango = report.checkGuildTemplateDirty;
                    tango = tango.bind(report)(oscar);
                    return zulu;
 228:
                    return zulu;
 231:
                    return mike;
 234:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot6 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.Endpoints;
    var _closure1_slot4 = mike;
    mike = {};
    golf = function(argFoo) { // Original name: startReordering
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_START_REORDER';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['startReordering'] = golf;
    golf = function() { // Original name: stopReordering
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'GUILD_SETTINGS_MODAL_ROLES_STOP_REORDER';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['stopReordering'] = golf;
    golf = function(argFoo, argBar) { // Original name: updateRoleOrder
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_EDIT_ORDER';
        mike['type'] = report;
        report = argFoo;
        mike['from'] = report;
        report = argBar;
        mike['to'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateRoleOrder'] = golf;
    golf = function(argFoo, argBar, argBaz, argCorge) { // Original name: toggleRoleSetting
        entity = argBar;
        zulu = _closure1_slot5;
        mike = {};
        tango = argFoo;
        mike['guildId'] = tango;
        tango = entity.id;
        mike['roleId'] = tango;
        tango = entity.name;
        mike['name'] = tango;
        tango = entity.permissions;
        mike['permissions'] = tango;
        entity = entity.color;
        mike['color'] = entity;
        entity = argBaz;
        mike['hoist'] = entity;
        entity = argCorge;
        mike['mentionable'] = entity;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    mike['toggleRoleSetting'] = golf;
    golf = function(argFoo, argBar) { // Original name: startEditingPermissions
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_START_EDITING';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['roleId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['startEditingPermissions'] = golf;
    golf = function() { // Original name: stopEditingPermissions
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_STOP_EDITING';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['stopEditingPermissions'] = golf;
    golf = function(argFoo) { // Original name: allowPermission
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSION_ALLOW';
        mike['type'] = report;
        report = argFoo;
        mike['permission'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['allowPermission'] = golf;
    golf = function(argFoo) { // Original name: denyPermission
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSION_DENY';
        mike['type'] = report;
        report = argFoo;
        mike['permission'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['denyPermission'] = golf;
    golf = function() { // Original name: cancelPermissionChanges
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_CANCEL';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['cancelPermissionChanges'] = golf;
    tango = function(argFoo) { // Original name: savePermissionChanges
        entity = argFoo;
        yankee = entity.guildId;
        offset = entity.roleId;
        verify = entity.name;
        options = entity.permissions;
        golf = entity.color;
        oscar = entity.hoist;
        report = entity.mentionable;
        romeo = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 4;
        tango = tango[entity];
        entity = undefined;
        foxtrot = romeo.bind(entity)(tango);
        romeo = foxtrot.dispatch;
        tango = {};
        backup = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING';
        tango['type'] = backup;
        tango = romeo.bind(foxtrot)(tango);
        tango = _closure1_slot5;
        zulu = {};
        zulu['guildId'] = yankee;
        zulu['roleId'] = offset;
        zulu['name'] = verify;
        zulu['permissions'] = options;
        zulu['color'] = golf;
        zulu['hoist'] = oscar;
        zulu['mentionable'] = report;
        report = tango.bind(entity)(zulu);
        tango = report.then;
        zulu = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_SUCCESS';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 4;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.dispatch;
            entity = {};
            tango = 'GUILD_SETTINGS_MODAL_ROLES_PERMISSIONS_SUBMITTING_FAILURE';
            entity['type'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    mike['savePermissionChanges'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_settings/GuildSettingsModalRolesActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();