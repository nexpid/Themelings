// app/modules/user_profile/native/UserProfileRolesCard.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: RoleDot
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golf = entity.color;
            entity = _closure1_slot13;
            tango = undefined;
            report = entity.bind(tango)();
            zulu = _closure1_slot9;
            mike = _closure1_slot4;
            entity = {};
            oscar = report.roleDot;
            report = new Array(2);
            report[0] = oscar;
            oscar = {};
            verify = null;
            if(!(verify == golf)) { _fun00002_ip = 88; continue _fun00001 }
 53:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 8;
            verify = yankee[verify];
            offset = offset.bind(tango)(verify);
            verify = offset.int2hex;
            options = _closure1_slot7;
            golf = verify.bind(offset)(options);
 88:
            oscar['backgroundColor'] = golf;
            report[1] = oscar;
            entity['style'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: RoleItem
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zulu = entity.role;
            var _closure2_slot0 = zulu;
            yankee = entity.guildId;
            var _closure2_slot1 = yankee;
            tango = entity.color;
            report = undefined;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            entity = _closure1_slot13;
            golf = entity.bind(report)();
            entity = zulu.name;
            oscar = entity.length;
            entity = _closure1_slot8;
            if(!(!(oscar <= entity))) { _fun00004_ip = 129; continue _fun00003 }
 76:
            offset = zulu.name;
            options = offset.slice;
            oscar = _closure1_slot8;
            entity = 0;
            offset = options.bind(offset)(entity, oscar);
            entity = global;
            entity = entity.HermesInternal;
            options = entity.concat;
            oscar = '';
            entity = '...';
            options = options.bind(oscar)(offset, entity);
            _fun00004_ip = 134; continue _fun00003;
 129:
            options = zulu.name;
 134:
            _closure2_slot2 = options;
            entity = null;
            if(!(entity == tango)) { _fun00004_ip = 150; continue _fun00003 }
 144:
            tango = zulu.colorString;
 150:
            _closure2_slot3 = tango;
            oscar = _closure1_slot0;
            offset = _closure1_slot2;
            tango = 9;
            tango = offset[tango];
            offset = oscar.bind(report)(tango);
            oscar = offset.useRoleIcon;
            tango = {};
            tango['guildId'] = yankee;
            yankee = zulu.id;
            tango['roleId'] = yankee;
            yankee = _closure1_slot12;
            tango['size'] = yankee;
            tango = oscar.bind(offset)(tango);
            _closure2_slot4 = tango;
            zulu = zulu.tags;
            tango = entity == zulu;
            entity = undefined;
            if(tango) { _fun00004_ip = 234; continue _fun00003 }
 228:
            entity = zulu.guild_connections;
 234:
            entity = report !== entity;
            _closure2_slot5 = entity;
            oscar = function() { // Original name: renderContent
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure1_slot11;
                    zulu = _closure1_slot10;
                    mike = {};
                    report = _closure2_slot5;
                    offset = _closure1_slot9;
                    if(report) { _fun00006_ip = 66; continue _fun00005 }
 27:
                    golf = _closure1_slot14;
                    oscar = {};
                    options = _closure2_slot3;
                    report = null;
                    yankee = report != options;
                    report = undefined;
                    options = undefined;
                    if(!yankee) { _fun00006_ip = 54; continue _fun00005 }
 50:
                    options = _closure2_slot3;
 54:
                    oscar['color'] = options;
                    oscar = offset.bind(report)(golf, oscar);
                    _fun00006_ip = 171; continue _fun00005;
 66:
                    golf = _closure1_slot1;
                    options = _closure1_slot2;
                    report = 11;
                    report = options[report];
                    options = undefined;
                    golf = golf.bind(options)(report);
                    report = {};
                    romeo = _closure2_slot0;
                    yankee = romeo.id;
                    report['roleId'] = yankee;
                    yankee = _closure2_slot1;
                    report['guildId'] = yankee;
                    yankee = null;
                    foxtrot = yankee == romeo;
                    romeo = undefined;
                    if(foxtrot) { _fun00006_ip = 133; continue _fun00005 }
 123:
                    foxtrot = _closure2_slot0;
                    romeo = foxtrot.colorString;
 133:
                    foxtrot = yankee != romeo;
                    yankee = undefined;
                    if(!foxtrot) { _fun00006_ip = 145; continue _fun00005 }
 142:
                    yankee = romeo;
 145:
                    report['roleColor'] = yankee;
                    yankee = _closure1_slot12;
                    report['size'] = yankee;
                    yankee = false;
                    report['displayRoleIcon'] = yankee;
                    oscar = offset.bind(options)(golf, report);
 171:
                    report = new Array(3);
                    report[0] = oscar;
                    oscar = _closure2_slot4;
                    report[1] = oscar;
                    options = _closure1_slot9;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 12;
                    oscar = oscar[entity];
                    entity = undefined;
                    oscar = golf.bind(entity)(oscar);
                    golf = oscar.Text;
                    oscar = {};
                    offset = 'text-xs/medium';
                    oscar['variant'] = offset;
                    verify = _closure2_slot2;
                    oscar['children'] = verify;
                    oscar = options.bind(entity)(golf, oscar);
                    report[2] = oscar;
                    mike['children'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 10;
            entity = tango[entity];
            entity = zulu.bind(report)(entity);
            zulu = entity.DeveloperMode;
            entity = zulu.useSetting;
            entity = entity.bind(zulu)();
            tango = _closure1_slot9;
            if(entity) { _fun00004_ip = 325; continue _fun00003 }
 290:
            zulu = _closure1_slot4;
            entity = {};
            offset = golf.role;
            entity['style'] = offset;
            offset = oscar.bind(report)();
            entity['children'] = offset;
            entity = tango.bind(report)(zulu, entity);
            _fun00004_ip = 452; continue _fun00003;
 325:
            yankee = _closure1_slot0;
            romeo = _closure1_slot2;
            mike = 13;
            mike = romeo[mike];
            mike = yankee.bind(report)(mike);
            zulu = mike.PressableHighlight;
            mike = {};
            verify = function() { // Original name: onPress
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 14;
                mike = report[entity];
                entity = undefined;
                golf = tango.bind(entity)(mike);
                oscar = golf.copy;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                zulu = oscar.bind(golf)(zulu);
                zulu = 15;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.roleIdCopied;
                mike = _closure2_slot2;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike['onPress'] = verify;
            verify = 'button';
            mike['accessibilityRole'] = verify;
            mike['accessibilityLabel'] = options;
            options = 16;
            verify = romeo[options];
            verify = yankee.bind(report)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(report)(options);
            options = options.t;
            options = options.sMsaLi;
            options = verify.bind(offset)(options);
            mike['accessibilityHint'] = options;
            golf = golf.role;
            mike['style'] = golf;
            oscar = oscar.bind(report)();
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 452:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: RolesList
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            entity = mike.userRoles;
            var _closure2_slot0 = entity;
            mike = mike.guildId;
            var _closure2_slot1 = mike;
            zulu = _closure1_slot13;
            report = undefined;
            golf = zulu.bind(report)();
            tango = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 17;
            zulu = options[zulu];
            verify = tango.bind(report)(zulu);
            options = verify.useStateFromStores;
            zulu = _closure1_slot6;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot6;
                mike = zulu.getRoles;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = options.bind(verify)(tango, zulu);
            var _closure2_slot2 = verify;
            options = _closure1_slot3;
            tango = options.useMemo;
            zulu = new Array(2);
            zulu[0] = verify;
            zulu[1] = entity;
            entity = function() {
                entity = global;
                zulu = entity.Object;
                mike = zulu.values;
                entity = _closure2_slot2;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.filter;
                entity = function(argFoo) {
                    zulu = _closure2_slot0;
                    mike = zulu.includes;
                    entity = argFoo;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                zulu = mike.bind(zulu)(entity);
                mike = zulu.sort;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 18;
                tango = tango[entity];
                entity = undefined;
                entity = report.bind(entity)(tango);
                entity = entity.sortRolesByVerification;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            options = tango.bind(options)(entity, zulu);
            verify = null;
            zulu = verify == options;
            entity = null;
            if(zulu) { _fun00008_ip = 190; continue _fun00007 }
 132:
            tango = options.length;
            zulu = 0;
            entity = null;
            if(!(zulu !== tango)) { _fun00008_ip = 190; continue _fun00007 }
 145:
            tango = _closure1_slot9;
            zulu = _closure1_slot4;
            mike = {};
            golf = golf.roleContainer;
            mike['style'] = golf;
            golf = options.map;
            oscar = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot9;
                tango = _closure1_slot15;
                zulu = {};
                zulu['role'] = entity;
                mike = _closure2_slot1;
                zulu['guildId'] = mike;
                mike = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tango, zulu, mike);
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 190:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.DEFAULT_ROLE_COLOR;
    var _closure1_slot7 = golf;
    tango = tango.MAX_VISUAL_ROLE_LENGTH;
    var _closure1_slot8 = tango;
    tango = 5;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot10 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = 12;
    var _closure1_slot12 = tango;
    tango = 6;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexDirection': 'row', 'gap': 8, 'flexWrap': 'wrap'};
    tango['roleContainer'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'columnGap': 4, 'padding': 6};
    offset = 7;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_MOD_FAINT;
    verify['backgroundColor'] = romeo;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.sm;
    verify['borderRadius'] = romeo;
    tango['role'] = verify;
    verify = {'borderRadius': null, 'height': 12, 'width': 12};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.radii;
    offset = offset.round;
    verify['borderRadius'] = offset;
    tango['roleDot'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileRolesCard.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: UserProfileRolesCard
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            verify = mike.userId;
            var _closure2_slot0 = verify;
            offset = mike.guildId;
            var _closure2_slot1 = offset;
            golf = mike.style;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 17;
            mike = tango[mike];
            report = undefined;
            options = zulu.bind(report)(mike);
            tango = options.useStateFromStores;
            mike = _closure1_slot5;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = new Array(2);
            mike[0] = verify;
            mike[1] = offset;
            entity = function() {
                tango = _closure1_slot5;
                zulu = tango.getMember;
                mike = _closure2_slot1;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = tango.bind(options)(zulu, entity, mike);
            entity = null;
            zulu = entity == mike;
            verify = undefined;
            if(zulu) { _fun00010_ip = 111; continue _fun00009 }
 105:
            verify = mike.roles;
 111:
            if(!(entity == verify)) { _fun00010_ip = 119; continue _fun00009 }
 115:
            verify = new Array(0);
 119:
            zulu = verify.length;
            mike = 0;
            entity = null;
            if(!(mike !== zulu)) { _fun00010_ip = 252; continue _fun00009 }
 132:
            tango = _closure1_slot9;
            zulu = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 19;
            mike = backup[mike];
            zulu = zulu.bind(report)(mike);
            mike = {};
            foxtrot = _closure1_slot0;
            options = 16;
            yankee = backup[options];
            yankee = foxtrot.bind(report)(yankee);
            romeo = yankee.intl;
            yankee = romeo.string;
            options = backup[options];
            options = foxtrot.bind(report)(options);
            options = options.t;
            options = options.LPJmLy;
            options = yankee.bind(romeo)(options);
            mike['title'] = options;
            mike['style'] = golf;
            options = _closure1_slot9;
            golf = _closure1_slot16;
            oscar = {};
            oscar['guildId'] = offset;
            oscar['userRoles'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 252:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();