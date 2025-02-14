// app/modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    verify = argCorge;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = verify;
    var _closure1_slot3 = options;
    tango = function(argFoo) { // Original name: RoleIcon
        _fun119242: for(var _fun119242_ip = 0; ; ) switch(_fun119242_ip) {
 0:
            entity = argFoo;
            offset = entity.role;
            report = {};
            verify = null;
            if(!(verify != offset)) { _fun119242_ip = 47; continue _fun119242 }
 17:
            entity = {};
            tango = _closure1_slot11;
            zulu = {};
            zulu['role'] = offset;
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            entity['backgroundColor'] = mike;
            report = entity;
 47:
            tango = _closure1_slot9;
            mike = _closure1_slot1;
            yankee = _closure1_slot3;
            entity = 7;
            entity = yankee[entity];
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            entity = {};
            options = _closure1_slot9;
            golf = _closure1_slot0;
            oscar = 8;
            oscar = yankee[oscar];
            oscar = golf.bind(zulu)(oscar);
            golf = oscar.ShieldUserIcon;
            oscar = {};
            yankee = 'sm';
            oscar['size'] = yankee;
            offset = verify != offset;
            verify = 'interactive-normal';
            if(!offset) { _fun119242_ip = 131; continue _fun119242 }
 127:
            verify = 'white';
 131:
            oscar['color'] = verify;
            oscar = options.bind(zulu)(golf, oscar);
            entity['icon'] = oscar;
            entity['wrapperStyle'] = report;
            entity = tango.bind(zulu)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, mike);
    entity = 0;
    mike = options[entity];
    entity = undefined;
    mike = oscar.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    mike = options[mike];
    mike = verify.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 2;
    mike = options[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 3;
    mike = options[mike];
    mike = oscar.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 4;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.DEFAULT_ROLE_COLOR;
    var _closure1_slot8 = mike;
    mike = 5;
    oscar = options[mike];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.jsx;
    var _closure1_slot9 = oscar;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    mike = mike.jsxs;
    var _closure1_slot10 = mike;
    mike = function(argFoo) { // Original name: getRoleColor
        _fun119243: for(var _fun119243_ip = 0; ; ) switch(_fun119243_ip) {
 0:
            entity = argFoo;
            mike = entity.role;
            zulu = mike.colorString;
            entity = null;
            if(!(entity == zulu)) { _fun119243_ip = 63; continue _fun119243 }
 21:
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 6;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.int2hex;
            entity = _closure1_slot8;
            entity = zulu.bind(tango)(entity);
            _fun119243_ip = 69; continue _fun119243;
 63:
            entity = mike.colorString;
 69:
            return entity;
        }
    };
    var _closure1_slot11 = mike;
    mike = function(argFoo) { // Original name: RoleRow
        _fun119244: for(var _fun119244_ip = 0; ; ) switch(_fun119244_ip) {
 0:
            report = argFoo;
            entity = report.guildRole;
            var _closure2_slot0 = entity;
            backup = report.guildId;
            var _closure2_slot1 = backup;
            offset = null;
            tango = Object.create(offset);
            zulu = 0;
            tango['guildRole'] = zulu;
            tango['guildId'] = zulu;
            result = {};
            output = report;
            sizing = tango;
            oscar = copyDataProperties(result, output, sizing);
            foxtrot = _closure1_slot0;
            golf = _closure1_slot3;
            zulu = 9;
            zulu = golf[zulu];
            report = undefined;
            verify = foxtrot.bind(report)(zulu);
            options = verify.useStateFromStores;
            zulu = _closure1_slot6;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                _fun119245: for(var _fun119245_ip = 0; ; ) switch(_fun119245_ip) {
 0:
                    tango = _closure1_slot6;
                    zulu = tango.getRoleMemberCount;
                    entity = _closure2_slot1;
                    zulu = zulu.bind(tango)(entity);
                    entity = null;
                    tango = entity == zulu;
                    entity = undefined;
                    if(tango) { _fun119245_ip = 49; continue _fun119245 }
 36:
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = zulu[mike];
 49:
                    return entity;
                }
            };
            romeo = options.bind(verify)(tango, zulu);
            zulu = 10;
            zulu = golf[zulu];
            options = foxtrot.bind(report)(zulu);
            tango = options.isEveryoneRoleId;
            zulu = entity.id;
            verify = tango.bind(options)(backup, zulu);
            options = _closure1_slot5;
            tango = options.useEffect;
            zulu = new Array(1);
            zulu[0] = backup;
            mike = function() {
                zulu = _closure1_slot2;
                mike = _closure1_slot3;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.fetchMemberCounts;
                mike = _closure2_slot1;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            mike = tango.bind(options)(mike, zulu);
            tango = _closure1_slot9;
            mike = 12;
            mike = golf[mike];
            mike = foxtrot.bind(report)(mike);
            zulu = mike.TableRow;
            mike = {};
            backup = _closure1_slot9;
            options = 13;
            golf = golf[options];
            golf = foxtrot.bind(report)(golf);
            foxtrot = golf.Text;
            golf = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            kilo = entity.name;
            golf['children'] = kilo;
            golf = backup.bind(report)(foxtrot, golf);
            mike['label'] = golf;
            backup = _closure1_slot9;
            foxtrot = _closure1_slot13;
            golf = {};
            golf['role'] = entity;
            golf = backup.bind(report)(foxtrot, golf);
            mike['icon'] = golf;
            golf = null;
            if(verify) { _fun119244_ip = 395; continue _fun119244 }
 274:
            verify = offset == romeo;
            golf = null;
            if(verify) { _fun119244_ip = 395; continue _fun119244 }
 283:
            offset = _closure1_slot10;
            foxtrot = _closure1_slot0;
            kilo = _closure1_slot3;
            options = kilo[options];
            options = foxtrot.bind(report)(options);
            verify = options.Text;
            options = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            backup = _closure1_slot9;
            yankee = 14;
            yankee = kilo[yankee];
            yankee = foxtrot.bind(report)(yankee);
            foxtrot = yankee.GroupIcon;
            yankee = {'size': 'xxs', 'color': 'text-muted'};
            foxtrot = backup.bind(report)(foxtrot, yankee);
            yankee = new Array(3);
            yankee[0] = foxtrot;
            foxtrot = ' ';
            yankee[1] = foxtrot;
            yankee[2] = romeo;
            options['children'] = yankee;
            golf = offset.bind(report)(verify, options);
 395:
            mike['trailing'] = golf;
            result = mike;
            output = oscar;
            oscar = copyDataProperties(result, output);
            entity = entity.id;
            entity = tango.bind(report)(zulu, mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = mike;
    oscar = 19;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/app_launcher/native/options/role/AppLauncherRoleListActionSheet.tsx';
    oscar = golf.bind(options)(oscar);
    report = function(argFoo) { // Original name: AppLauncherRoleListActionSheet
        _fun119247: for(var _fun119247_ip = 0; ; ) switch(_fun119247_ip) {
 0:
            mike = argFoo;
            entity = mike.onRolePress;
            var _closure2_slot0 = entity;
            offset = mike.onActionSheetDismiss;
            var _closure2_slot1 = offset;
            entity = mike.channel;
            backup = mike.option;
            entity = entity.guild_id;
            var _closure2_slot2 = entity;
            oscar = _closure1_slot5;
            mike = oscar.useState;
            entity = '';
            zulu = mike.bind(oscar)(entity);
            mike = _closure1_slot4;
            tango = undefined;
            entity = 2;
            zulu = mike.bind(tango)(zulu, entity);
            options = 0;
            entity = zulu[options];
            var _closure2_slot3 = entity;
            mike = 1;
            mike = zulu[mike];
            var _closure2_slot4 = mike;
            zulu = oscar.useRef;
            mike = null;
            foxtrot = zulu.bind(oscar)(mike);
            var _closure2_slot5 = foxtrot;
            verify = _closure1_slot0;
            report = _closure1_slot3;
            mike = 9;
            mike = report[mike];
            kilo = verify.bind(tango)(mike);
            romeo = kilo.useStateFromStores;
            mike = _closure1_slot7;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                zulu = _closure1_slot7;
                mike = zulu.getRoles;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = romeo.bind(kilo)(zulu, mike);
            var _closure2_slot6 = romeo;
            zulu = oscar.useMemo;
            mike = new Array(2);
            mike[0] = romeo;
            mike[1] = entity;
            entity = function() {
                entity = global;
                zulu = entity.Object;
                mike = zulu.values;
                entity = _closure2_slot6;
                zulu = mike.bind(zulu)(entity);
                mike = zulu.filter;
                entity = function(argFoo) {
                    _fun119250: for(var _fun119250_ip = 0; ; ) switch(_fun119250_ip) {
 0:
                        mike = argFoo;
                        tango = _closure2_slot3;
                        entity = mike.id;
                        entity = tango === entity;
                        if(entity) { _fun119250_ip = 82; continue _fun119250 }
 22:
                        oscar = _closure1_slot1;
                        report = _closure1_slot3;
                        tango = 15;
                        tango = report[tango];
                        report = undefined;
                        tango = oscar.bind(report)(tango);
                        oscar = _closure2_slot3;
                        zulu = oscar.trim;
                        zulu = zulu.bind(oscar)();
                        oscar = mike.name;
                        mike = oscar.toLowerCase;
                        mike = mike.bind(oscar)();
                        entity = tango.bind(report)(zulu, mike);
 82:
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = zulu.bind(oscar)(entity, mike);
            var _closure2_slot7 = romeo;
            oscar = romeo.length;
            entity = function(argFoo) { // Original name: handleRolePress
                entity = argFoo;
                entity = entity.role;
                tango = _closure2_slot0;
                zulu = {};
                zulu['role'] = entity;
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                tango = _closure1_slot1;
                report = _closure1_slot3;
                zulu = 16;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.hideActionSheet;
                zulu = 'AppLauncherRoleListActionSheet';
                zulu = tango.bind(report)(zulu);
                mike = _closure2_slot1;
                mike = mike.bind(entity)();
                return entity;
            };
            var _closure2_slot8 = entity;
            zulu = _closure1_slot10;
            entity = 17;
            entity = report[entity];
            entity = verify.bind(tango)(entity);
            mike = entity.AppLauncherCommandOptionActionSheet;
            entity = {};
            entity['option'] = backup;
            entity['onDismiss'] = offset;
            backup = _closure1_slot9;
            offset = 18;
            report = report[offset];
            report = verify.bind(tango)(report);
            verify = report.AppLauncherListSearchBar;
            report = {};
            kilo = function(argFoo) { // Original name: onChange
                _fun119252: for(var _fun119252_ip = 0; ; ) switch(_fun119252_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure2_slot4;
                    entity = zulu.toLowerCase;
                    zulu = entity.bind(zulu)();
                    entity = undefined;
                    zulu = tango.bind(entity)(zulu);
                    mike = _closure2_slot5;
                    tango = mike.current;
                    mike = null;
                    if(!(mike != tango)) { _fun119252_ip = 63; continue _fun119252 }
 42:
                    zulu = tango.scrollToOffset;
                    mike = {'offset': 0, 'animated': false};
                    mike = zulu.bind(tango)(mike);
 63:
                    return entity;
                }
            };
            report['onChange'] = kilo;
            verify = backup.bind(tango)(verify, report);
            report = new Array(2);
            report[0] = verify;
            if(!(options !== oscar)) { _fun119247_ip = 367; continue _fun119247 }
 310:
            verify = _closure1_slot9;
            options = _closure1_slot0;
            oscar = _closure1_slot3;
            oscar = oscar[offset];
            oscar = options.bind(tango)(oscar);
            options = oscar.AppLauncherList;
            oscar = {};
            oscar['ref'] = foxtrot;
            oscar['data'] = romeo;
            yankee = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                golf = entity.item;
                var _closure3_slot0 = golf;
                report = entity.index;
                tango = _closure1_slot9;
                zulu = _closure1_slot12;
                mike = {};
                options = _closure2_slot2;
                mike['guildId'] = options;
                mike['guildRole'] = golf;
                oscar = function() { // Original name: onPress
                    zulu = _closure2_slot8;
                    mike = {};
                    entity = _closure3_slot0;
                    mike['role'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                mike['onPress'] = oscar;
                oscar = 0;
                oscar = oscar === report;
                mike['start'] = oscar;
                entity = _closure2_slot7;
                oscar = entity.length;
                entity = 1;
                entity = oscar - entity;
                entity = report === entity;
                mike['end'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            oscar['renderItem'] = yankee;
            oscar = verify.bind(tango)(options, oscar);
            _fun119247_ip = 402; continue _fun119247;
 367:
            verify = _closure1_slot9;
            options = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[offset];
            golf = options.bind(tango)(golf);
            options = golf.AppLauncherListEmptyState;
            golf = {};
            oscar = verify.bind(tango)(options, golf);
 402:
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = report;
    report = 'AppLauncherRoleListActionSheet';
    zulu['APP_LAUNCHER_ROLE_LIST_ACTION_SHEET_KEY'] = report;
    zulu['RoleIcon'] = tango;
    zulu['RoleRow'] = mike;
    return entity;
})();