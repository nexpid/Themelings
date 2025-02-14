// app/modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    options = argCorge;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    var _closure1_slot3 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun81618: for(var _fun81618_ip = 0; ; ) switch(_fun81618_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot27;
            entity = entity.bind(zulu)();
            if(entity) { _fun81618_ip = 51; continue _fun81618 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun81618_ip = 92; continue _fun81618;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun81618_ip = 71; continue _fun81618 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun81619: for(var _fun81619_ip = 0; ; ) switch(_fun81619_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun81619_ip = 76; continue _fun81619;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot27 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    mike = function(argFoo) { // Original name: GuildSettingsModalMemberEditScene
        _fun81622: for(var _fun81622_ip = 0; ; ) switch(_fun81622_ip) {
 0:
            mike = argFoo;
            offset = mike.guildId;
            var _closure2_slot0 = offset;
            yankee = mike.userId;
            var _closure2_slot1 = yankee;
            update = mike.onClose;
            foxtrot = mike.contentContainerStyle;
            options = mike.navScrim;
            zulu = _closure1_slot0;
            tango = _closure1_slot3;
            mike = 34;
            mike = tango[mike];
            report = undefined;
            golf = zulu.bind(report)(mike);
            mike = golf.useNavigation;
            backup = mike.bind(golf)();
            var _closure2_slot2 = backup;
            mike = 35;
            golf = tango[mike];
            kilo = zulu.bind(report)(golf);
            romeo = kilo.useStateFromStores;
            golf = _closure1_slot12;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                zulu = _closure1_slot12;
                mike = zulu.getGuild;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            result = romeo.bind(kilo)(verify, golf);
            var _closure2_slot3 = result;
            golf = tango[mike];
            kilo = zulu.bind(report)(golf);
            romeo = kilo.useStateFromStores;
            golf = _closure1_slot12;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                zulu = _closure1_slot12;
                mike = zulu.getRoles;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            output = romeo.bind(kilo)(verify, golf);
            golf = tango[mike];
            kilo = zulu.bind(report)(golf);
            romeo = kilo.useStateFromStoresObject;
            golf = _closure1_slot14;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                mike = _closure1_slot14;
                entity = mike.getCurrentUser;
                mike = entity.bind(mike)();
                tango = _closure1_slot1;
                report = _closure1_slot3;
                entity = 36;
                entity = report[entity];
                oscar = undefined;
                report = tango.bind(oscar)(entity);
                entity = null;
                tango = entity != mike;
                entity = 'GuildSettingsModalMemberEditScene: current user cannot be undefined';
                entity = report.bind(oscar)(tango, entity);
                entity = {};
                report = _closure1_slot14;
                tango = report.getUser;
                zulu = _closure2_slot1;
                zulu = tango.bind(report)(zulu);
                entity['user'] = zulu;
                entity['currentUser'] = mike;
                return entity;
            };
            golf = romeo.bind(kilo)(verify, golf);
            kilo = golf.user;
            var _closure2_slot4 = kilo;
            sizing = golf.currentUser;
            echo = _closure1_slot9;
            romeo = echo.useEffect;
            verify = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot3;
                entity = 21;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.startEditingNickname;
                mike = mike.bind(zulu)();
                return entity;
            };
            golf = new Array(0);
            golf = romeo.bind(echo)(verify, golf);
            golf = tango[mike];
            echo = zulu.bind(report)(golf);
            romeo = echo.useStateFromStores;
            golf = _closure1_slot15;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                entity = _closure1_slot15;
                entity = entity.keyboardOpen;
                return entity;
            };
            verify = romeo.bind(echo)(verify, golf);
            mike = tango[mike];
            echo = zulu.bind(report)(mike);
            romeo = echo.useStateFromStoresObject;
            mike = _closure1_slot16;
            golf = new Array(5);
            golf[0] = mike;
            mike = _closure1_slot11;
            golf[1] = mike;
            mike = _closure1_slot13;
            golf[2] = mike;
            mike = _closure1_slot14;
            golf[3] = mike;
            mike = _closure1_slot12;
            golf[4] = mike;
            mike = function() {
                _fun81628: for(var _fun81628_ip = 0; ; ) switch(_fun81628_ip) {
 0:
                    entity = {};
                    oscar = _closure1_slot11;
                    report = oscar.getMember;
                    tango = _closure2_slot0;
                    zulu = _closure2_slot1;
                    zulu = report.bind(oscar)(tango, zulu);
                    entity['member'] = zulu;
                    zulu = _closure1_slot16;
                    zulu = zulu.nicknameError;
                    entity['nicknameError'] = zulu;
                    zulu = _closure1_slot16;
                    zulu = zulu.roles;
                    entity['editRoles'] = zulu;
                    zulu = _closure1_slot16;
                    zulu = zulu.isEditing;
                    entity['isEditing'] = zulu;
                    zulu = _closure1_slot16;
                    zulu = zulu.isSubmitting;
                    entity['submitting'] = zulu;
                    zulu = _closure2_slot3;
                    verify = null;
                    zulu = verify != zulu;
                    if(!zulu) { _fun81628_ip = 118; continue _fun81628 }
 110:
                    tango = _closure2_slot4;
                    zulu = verify != tango;
 118:
                    if(!zulu) { _fun81628_ip = 156; continue _fun81628 }
 121:
                    offset = _closure1_slot13;
                    options = offset.canManageUser;
                    tango = _closure1_slot17;
                    oscar = tango.MANAGE_NICKNAMES;
                    report = _closure2_slot4;
                    tango = _closure2_slot3;
                    zulu = options.bind(offset)(oscar, report, tango);
 156:
                    entity['canChangeNick'] = zulu;
                    oscar = _closure1_slot13;
                    report = oscar.can;
                    zulu = _closure1_slot17;
                    tango = zulu.MANAGE_ROLES;
                    zulu = _closure2_slot3;
                    tango = report.bind(oscar)(tango, zulu);
                    entity['canManageRoles'] = tango;
                    zulu = verify != zulu;
                    if(!zulu) { _fun81628_ip = 211; continue _fun81628 }
 203:
                    tango = _closure2_slot4;
                    zulu = verify != tango;
 211:
                    if(!zulu) { _fun81628_ip = 249; continue _fun81628 }
 214:
                    offset = _closure1_slot13;
                    options = offset.canManageUser;
                    tango = _closure1_slot17;
                    oscar = tango.KICK_MEMBERS;
                    report = _closure2_slot4;
                    tango = _closure2_slot3;
                    zulu = options.bind(offset)(oscar, report, tango);
 249:
                    entity['canKick'] = zulu;
                    zulu = _closure2_slot3;
                    zulu = verify != zulu;
                    if(!zulu) { _fun81628_ip = 273; continue _fun81628 }
 265:
                    tango = _closure2_slot4;
                    zulu = verify != tango;
 273:
                    if(!zulu) { _fun81628_ip = 311; continue _fun81628 }
 276:
                    offset = _closure1_slot13;
                    options = offset.canManageUser;
                    tango = _closure1_slot17;
                    oscar = tango.BAN_MEMBERS;
                    report = _closure2_slot4;
                    tango = _closure2_slot3;
                    zulu = options.bind(offset)(oscar, report, tango);
 311:
                    entity['canBan'] = zulu;
                    report = _closure1_slot0;
                    tango = _closure1_slot3;
                    zulu = 37;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = report.bind(zulu)(tango);
                    report = oscar.canToggleCommunicationDisableOnUser;
                    tango = _closure2_slot3;
                    options = verify == tango;
                    tango = undefined;
                    if(options) { _fun81628_ip = 366; continue _fun81628 }
 357:
                    options = _closure2_slot3;
                    tango = options.id;
 366:
                    options = _closure2_slot4;
                    options = verify == options;
                    zulu = undefined;
                    if(options) { _fun81628_ip = 388; continue _fun81628 }
 379:
                    mike = _closure2_slot4;
                    zulu = mike.id;
 388:
                    options = _closure1_slot14;
                    mike = new Array(3);
                    mike[0] = options;
                    options = _closure1_slot12;
                    mike[1] = options;
                    golf = _closure1_slot13;
                    mike[2] = golf;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    entity['canDisableCommunication'] = mike;
                    return entity;
                }
            };
            romeo = romeo.bind(echo)(golf, mike);
            mike = 38;
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.useSubscribeGuildMembers;
            mike = {};
            golf = new Array(1);
            golf[0] = yankee;
            mike[offset] = golf;
            mike = zulu.bind(tango)(mike);
            tango = _closure1_slot9;
            zulu = tango.useCallback;
            mike = new Array(1);
            mike[0] = backup;
            entity = function() {
                zulu = _closure2_slot2;
                mike = zulu.pop;
                entity = 2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            echo = zulu.bind(tango)(entity, mike);
            golf = null;
            mike = golf != sizing;
            entity = null;
            if(!mike) { _fun81622_ip = 623; continue _fun81622 }
 439:
            mike = golf != result;
            entity = null;
            if(!mike) { _fun81622_ip = 623; continue _fun81622 }
 451:
            mike = golf != kilo;
            entity = null;
            if(!mike) { _fun81622_ip = 623; continue _fun81622 }
 463:
            tango = _closure1_slot21;
            zulu = _closure1_slot0;
            offset = _closure1_slot3;
            mike = 39;
            mike = offset[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.RedesignCompat;
            mike = {};
            yankee = _closure1_slot20;
            offset = _closure1_slot25;
            oscar = {};
            control = oscar;
            source = romeo;
            romeo = copyDataProperties(control, source);
            romeo = 'onClose';
            oscar[romeo] = update;
            romeo = 'handleSuccessfulRemoval';
            oscar[romeo] = echo;
            romeo = 'guild';
            oscar[romeo] = result;
            romeo = 'guildRoles';
            oscar[romeo] = output;
            romeo = 'currentUser';
            oscar[romeo] = sizing;
            romeo = 'user';
            oscar[romeo] = kilo;
            romeo = 'navigation';
            oscar[romeo] = backup;
            romeo = 'contentContainerStyle';
            oscar[romeo] = foxtrot;
            offset = yankee.bind(report)(offset, oscar);
            oscar = new Array(2);
            oscar[0] = offset;
            golf = null;
            if(verify) { _fun81622_ip = 609; continue _fun81622 }
 606:
            golf = options;
 609:
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 623:
            return entity;
        }
    };
    var _closure1_slot28 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 1;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 2;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 3;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 4;
    report = golf[report];
    report = verify.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    options = 6;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.View;
    var _closure1_slot10 = options;
    options = 7;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot11 = options;
    options = 8;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot12 = options;
    options = 9;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot13 = options;
    options = 10;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot14 = options;
    options = 11;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot15 = options;
    options = 12;
    options = golf[options];
    options = verify.bind(entity)(options);
    var _closure1_slot16 = options;
    options = 13;
    options = golf[options];
    options = oscar.bind(entity)(options);
    verify = options.Permissions;
    var _closure1_slot17 = verify;
    verify = options.GuildFeatures;
    var _closure1_slot18 = verify;
    options = options.GuildSettingsSections;
    var _closure1_slot19 = options;
    options = 14;
    verify = golf[options];
    verify = oscar.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot20 = verify;
    verify = golf[options];
    verify = oscar.bind(entity)(verify);
    verify = verify.jsxs;
    var _closure1_slot21 = verify;
    options = golf[options];
    options = oscar.bind(entity)(options);
    options = options.Fragment;
    var _closure1_slot22 = options;
    options = 15;
    options = golf[options];
    offset = oscar.bind(entity)(options);
    verify = offset.createLegacyClassComponentStyles;
    options = {};
    yankee = {};
    romeo = 63;
    yankee['height'] = romeo;
    options['userInfo'] = yankee;
    yankee = {'width': 40, 'height': 40};
    options['avatar'] = yankee;
    yankee = {};
    romeo = 'row';
    yankee['flexDirection'] = romeo;
    options['rowLabel'] = yankee;
    yankee = {'marginTop': 8, 'marginBottom': 8};
    options['ctaButton'] = yankee;
    yankee = {'marginRight': 0, 'marginLeft': 0, 'paddingRight': 0, 'paddingLeft': 16};
    options['actionButtonLeft'] = yankee;
    yankee = {'marginRight': 0, 'marginLeft': 0, 'paddingRight': 16, 'paddingLeft': 0};
    options['actionButtonRight'] = yankee;
    yankee = {};
    romeo = 'auto';
    yankee['flexBasis'] = romeo;
    options['actionButtonContainer'] = yankee;
    options = verify.bind(offset)(options);
    var _closure1_slot23 = options;
    verify = report.PureComponent;
    options = function(argFoo) {
        report = function(argFoo) { // Original name: RolesList
            zulu = argFoo;
            oscar = this;
            mike = _closure1_slot4;
            report = _closure2_slot0;
            tango = undefined;
            mike = mike.bind(tango)(oscar, report);
            mike = _closure1_slot26;
            entity = new Array(1);
            entity[0] = zulu;
            entity = mike.bind(tango)(oscar, report, entity);
            mike = {};
            zulu = zulu.isEditing;
            mike['isEditingProp'] = zulu;
            entity['state'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot8;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot5;
        oscar = {};
        mike = 'render';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            _fun81632: for(var _fun81632_ip = 0; ; ) switch(_fun81632_ip) {
 0:
                entity = this;
                entity = entity.props;
                offset = entity.guild;
                var _closure3_slot0 = offset;
                oscar = entity.guildRoles;
                zulu = entity.roles;
                var _closure3_slot1 = zulu;
                zulu = entity.isEditing;
                verify = entity.currentUserId;
                var _closure3_slot2 = verify;
                tango = entity.onStartEditing;
                entity = entity.onToggleRole;
                var _closure3_slot3 = entity;
                if(zulu) { _fun81632_ip = 260; continue _fun81632 }
 76:
                report = _closure1_slot1;
                output = _closure1_slot3;
                zulu = 17;
                zulu = output[zulu];
                romeo = undefined;
                zulu = report.bind(romeo)(zulu);
                golf = zulu.bind(romeo)(oscar);
                report = golf.filter;
                zulu = function(argFoo) {
                    zulu = _closure3_slot1;
                    mike = zulu.indexOf;
                    entity = argFoo;
                    entity = entity.id;
                    mike = mike.bind(zulu)(entity);
                    entity = -1;
                    entity = entity !== mike;
                    return entity;
                };
                golf = report.bind(golf)(zulu);
                report = golf.map;
                zulu = function(argFoo) {
                    _fun81639: for(var _fun81639_ip = 0; ; ) switch(_fun81639_ip) {
 0:
                        entity = argFoo;
                        report = _closure1_slot21;
                        tango = _closure1_slot10;
                        zulu = {};
                        verify = _closure1_slot20;
                        romeo = _closure1_slot0;
                        yankee = _closure1_slot3;
                        offset = 19;
                        oscar = yankee[offset];
                        mike = undefined;
                        oscar = romeo.bind(mike)(oscar);
                        options = oscar.FormRow;
                        oscar = {};
                        foxtrot = _closure1_slot20;
                        yankee = yankee[offset];
                        yankee = romeo.bind(mike)(yankee);
                        yankee = yankee.FormRow;
                        romeo = yankee.Label;
                        yankee = {};
                        kilo = entity.colorString;
                        backup = null;
                        kilo = backup != kilo;
                        if(!kilo) { _fun81639_ip = 107; continue _fun81639 }
 92:
                        kilo = {};
                        sizing = entity.colorString;
                        kilo['color'] = sizing;
                        backup = kilo;
 107:
                        yankee['style'] = backup;
                        backup = entity.name;
                        yankee['text'] = backup;
                        yankee = foxtrot.bind(mike)(romeo, yankee);
                        oscar['label'] = yankee;
                        options = verify.bind(mike)(options, oscar);
                        oscar = new Array(2);
                        oscar[0] = options;
                        verify = _closure1_slot20;
                        options = _closure1_slot0;
                        golf = _closure1_slot3;
                        golf = golf[offset];
                        golf = options.bind(mike)(golf);
                        options = golf.FormDivider;
                        golf = {};
                        golf = verify.bind(mike)(options, golf);
                        oscar[1] = golf;
                        zulu['children'] = oscar;
                        entity = entity.id;
                        entity = report.bind(mike)(tango, zulu, entity);
                        return entity;
                    }
                };
                report = report.bind(golf)(zulu);
                zulu = report.value;
                zulu = zulu.bind(report)();
                report = zulu.push;
                yankee = _closure1_slot20;
                sizing = _closure1_slot0;
                golf = 19;
                golf = output[golf];
                golf = sizing.bind(romeo)(golf);
                options = golf.FormRow;
                golf = {};
                foxtrot = 20;
                backup = output[foxtrot];
                backup = sizing.bind(romeo)(backup);
                kilo = backup.intl;
                backup = kilo.string;
                foxtrot = output[foxtrot];
                foxtrot = sizing.bind(romeo)(foxtrot);
                foxtrot = foxtrot.t;
                foxtrot = foxtrot.+riKdH;
                foxtrot = backup.bind(kilo)(foxtrot);
                golf['label'] = foxtrot;
                golf['onPress'] = tango;
                tango = 'addition';
                tango = yankee.bind(romeo)(options, golf, tango);
                tango = report.bind(zulu)(tango);
                report = zulu;
                _fun81632_ip = 396; continue _fun81632;
 260:
                golf = _closure1_slot2;
                options = _closure1_slot3;
                zulu = 16;
                zulu = options[zulu];
                tango = undefined;
                golf = golf.bind(tango)(zulu);
                zulu = golf.getHighestRole;
                zulu = zulu.bind(golf)(offset, verify);
                var _closure3_slot4 = zulu;
                golf = _closure1_slot1;
                zulu = 17;
                zulu = options[zulu];
                zulu = golf.bind(tango)(zulu);
                oscar = zulu.bind(tango)(oscar);
                tango = oscar.filter;
                zulu = function(argFoo) {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 18;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.isEveryoneRoleId;
                    entity = _closure3_slot0;
                    mike = entity.id;
                    entity = argFoo;
                    entity = entity.id;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = !entity;
                    return entity;
                };
                oscar = tango.bind(oscar)(zulu);
                tango = oscar.filter;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.managed;
                    entity = !entity;
                    return entity;
                };
                oscar = tango.bind(oscar)(zulu);
                tango = oscar.filter;
                zulu = function(argFoo) {
                    zulu = _closure1_slot2;
                    mike = _closure1_slot3;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = zulu.bind(entity)(mike);
                    report = oscar.isRoleHigher;
                    offset = _closure3_slot0;
                    verify = _closure3_slot2;
                    options = _closure3_slot4;
                    golf = argFoo;
                    yankee = oscar;
                    entity = yankee[report](offset, verify, options, golf, oscar);
                    return entity;
                };
                tango = tango.bind(oscar)(zulu);
                zulu = tango.map;
                mike = function(argFoo) {
                    _fun81636: for(var _fun81636_ip = 0; ; ) switch(_fun81636_ip) {
 0:
                        entity = argFoo;
                        var _closure4_slot0 = entity;
                        tango = _closure3_slot1;
                        zulu = tango.indexOf;
                        mike = entity.id;
                        zulu = zulu.bind(tango)(mike);
                        mike = -1;
                        sizing = mike !== zulu;
                        var _closure4_slot1 = sizing;
                        report = _closure1_slot21;
                        tango = _closure1_slot10;
                        zulu = {};
                        romeo = _closure1_slot20;
                        foxtrot = _closure1_slot0;
                        options = _closure1_slot3;
                        offset = 19;
                        oscar = options[offset];
                        mike = undefined;
                        oscar = foxtrot.bind(mike)(oscar);
                        yankee = oscar.FormRow;
                        oscar = {};
                        backup = _closure1_slot20;
                        options = options[offset];
                        options = foxtrot.bind(mike)(options);
                        options = options.FormRow;
                        foxtrot = options.Label;
                        options = {};
                        output = entity.colorString;
                        kilo = null;
                        output = kilo != output;
                        if(!output) { _fun81636_ip = 149; continue _fun81636 }
 134:
                        output = {};
                        result = entity.colorString;
                        output['color'] = result;
                        kilo = output;
 149:
                        options['style'] = kilo;
                        kilo = entity.name;
                        options['text'] = kilo;
                        options = backup.bind(mike)(foxtrot, options);
                        oscar['label'] = options;
                        golf = function() { // Original name: onPress
                            tango = _closure3_slot3;
                            mike = _closure4_slot0;
                            zulu = mike.id;
                            entity = _closure4_slot1;
                            mike = !entity;
                            entity = undefined;
                            entity = tango.bind(entity)(zulu, mike);
                            return entity;
                        };
                        oscar['onPress'] = golf;
                        kilo = _closure1_slot20;
                        options = _closure1_slot0;
                        golf = _closure1_slot3;
                        foxtrot = golf[offset];
                        foxtrot = options.bind(mike)(foxtrot);
                        foxtrot = foxtrot.FormRow;
                        backup = foxtrot.Radio;
                        foxtrot = {};
                        foxtrot['selected'] = sizing;
                        foxtrot = kilo.bind(mike)(backup, foxtrot);
                        oscar['leading'] = foxtrot;
                        yankee = romeo.bind(mike)(yankee, oscar);
                        oscar = new Array(2);
                        oscar[0] = yankee;
                        verify = _closure1_slot20;
                        golf = golf[offset];
                        golf = options.bind(mike)(golf);
                        options = golf.FormDivider;
                        golf = {};
                        offset = true;
                        golf['iconPush'] = offset;
                        golf = verify.bind(mike)(options, golf);
                        oscar[1] = golf;
                        zulu['children'] = oscar;
                        entity = entity.id;
                        entity = report.bind(mike)(tango, zulu, entity);
                        return entity;
                    }
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.value;
                report = mike.bind(zulu)();
 396:
                tango = _closure1_slot20;
                verify = _closure1_slot0;
                offset = _closure1_slot3;
                entity = 19;
                entity = offset[entity];
                zulu = undefined;
                entity = verify.bind(zulu)(entity);
                mike = entity.FormSection;
                entity = {};
                oscar = 20;
                golf = offset[oscar];
                golf = verify.bind(zulu)(golf);
                options = golf.intl;
                golf = options.string;
                oscar = offset[oscar];
                oscar = verify.bind(zulu)(oscar);
                oscar = oscar.t;
                oscar = oscar.LPJmLy;
                oscar = golf.bind(options)(oscar);
                entity['title'] = oscar;
                entity['children'] = report;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        oscar['value'] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        oscar = {};
        golf = 'getDerivedStateFromProps';
        oscar['key'] = golf;
        entity = function(argFoo, argBar) { // Original name: value
            _fun81640: for(var _fun81640_ip = 0; ; ) switch(_fun81640_ip) {
 0:
                entity = argFoo;
                zulu = entity.isEditing;
                entity = argBar;
                mike = entity.isEditingProp;
                entity = null;
                if(!(mike !== zulu)) { _fun81640_ip = 34; continue _fun81640 }
 24:
                mike = {};
                mike['isEditingProp'] = zulu;
                entity = mike;
 34:
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    verify = options.bind(entity)(verify);
    var _closure1_slot24 = verify;
    options = {};
    offset = new Array(0);
    options['roles'] = offset;
    verify['defaultProps'] = options;
    options = report.PureComponent;
    report = function(argFoo) {
        tango = function(argFoo) { // Original name: GuildSettingsModalMemberEdit
            _fun81642: for(var _fun81642_ip = 0; ; ) switch(_fun81642_ip) {
 0:
                oscar = this;
                yankee = 0;
                golf = copyRestArgs(yankee);
                zulu = _closure1_slot4;
                report = _closure2_slot0;
                tango = undefined;
                zulu = zulu.bind(tango)(oscar, report);
                zulu = _closure1_slot26;
                entity = new Array(0);
                yankee = entity;
                offset = golf;
                verify = 0;
                golf = arraySpread(yankee, offset, verify);
                entity = zulu.bind(tango)(oscar, report, entity);
                var _closure3_slot0 = entity;
                zulu = {};
                report = entity.props;
                report = report.member;
                oscar = null;
                oscar = oscar == report;
                if(oscar) { _fun81642_ip = 92; continue _fun81642 }
 86:
                tango = report.nick;
 92:
                zulu['nick'] = tango;
                entity['state'] = zulu;
                zulu = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = zulu.setState;
                    entity = {};
                    tango = argFoo;
                    entity['nick'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleChangeNickname'] = zulu;
                zulu = function() {
                    _fun81644: for(var _fun81644_ip = 0; ; ) switch(_fun81644_ip) {
 0:
                        mike = _closure3_slot0;
                        mike = mike.state;
                        mike = mike.nick;
                        report = null;
                        if(!(report != mike)) { _fun81644_ip = 155; continue _fun81644 }
 27:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        mike = 21;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = tango.changeNickname;
                        oscar = _closure3_slot0;
                        mike = oscar.props;
                        mike = mike.guild;
                        mike = mike.id;
                        golf = oscar.props;
                        golf = golf.currentUser;
                        golf = golf.id;
                        oscar = oscar.props;
                        oscar = oscar.user;
                        oscar = oscar.id;
                        report = null;
                        if(!(golf !== oscar)) { _fun81644_ip = 133; continue _fun81644 }
 114:
                        oscar = _closure3_slot0;
                        oscar = oscar.props;
                        oscar = oscar.user;
                        report = oscar.id;
 133:
                        entity = _closure3_slot0;
                        entity = entity.state;
                        entity = entity.nick;
                        entity = zulu.bind(tango)(mike, report, entity);
 155:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleSaveNickname'] = zulu;
                zulu = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 21;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.startEditingRoles;
                    mike = _closure3_slot0;
                    zulu = mike.props;
                    zulu = zulu.guild;
                    zulu = zulu.id;
                    mike = mike.props;
                    mike = mike.user;
                    mike = mike.id;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                entity['handleStartEditingRoles'] = zulu;
                zulu = function(argFoo, argBar) {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 21;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.toggleRole;
                    zulu = argFoo;
                    mike = argBar;
                    mike = tango.bind(report)(zulu, mike);
                    return entity;
                };
                entity['handleToggleRole'] = zulu;
                zulu = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscar = entity.guild;
                    report = entity.user;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 22;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.openDisableCommunication;
                    mike = {};
                    oscar = oscar.id;
                    mike['guildId'] = oscar;
                    report = report.id;
                    mike['userId'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity['handleSetCommunicationDisabled'] = zulu;
                zulu = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscar = entity.guild;
                    report = entity.user;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 22;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.openEnableCommunication;
                    mike = {};
                    oscar = oscar.id;
                    mike['guildId'] = oscar;
                    report = report.id;
                    mike['userId'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity['handleClearCommunicationDisabled'] = zulu;
                zulu = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscar = entity.user;
                    report = entity.handleSuccessfulRemoval;
                    tango = entity.navigation;
                    zulu = tango.push;
                    entity = _closure1_slot19;
                    mike = entity.MEMBER_KICK;
                    entity = {};
                    oscar = oscar.id;
                    entity['userId'] = oscar;
                    entity['onKick'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleKick'] = zulu;
                zulu = function() {
                    entity = _closure3_slot0;
                    entity = entity.props;
                    oscar = entity.user;
                    report = entity.handleSuccessfulRemoval;
                    tango = entity.navigation;
                    zulu = tango.push;
                    entity = _closure1_slot19;
                    mike = entity.MEMBER_BAN;
                    entity = {};
                    oscar = oscar.id;
                    entity['userId'] = oscar;
                    entity['onBan'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = undefined;
                    return entity;
                };
                entity['handleBan'] = zulu;
                zulu = function() {
                    _fun81651: for(var _fun81651_ip = 0; ; ) switch(_fun81651_ip) {
 0:
                        entity = _closure3_slot0;
                        entity = entity.props;
                        report = entity.guild;
                        tango = entity.user;
                        zulu = report.hasFeature;
                        mike = _closure1_slot18;
                        mike = mike.VERIFIED;
                        mike = zulu.bind(report)(mike);
                        if(mike) { _fun81651_ip = 109; continue _fun81651 }
 49:
                        zulu = report.hasFeature;
                        mike = _closure1_slot18;
                        mike = mike.PARTNERED;
                        mike = zulu.bind(report)(mike);
                        if(mike) { _fun81651_ip = 109; continue _fun81651 }
 73:
                        oscar = _closure1_slot1;
                        zulu = _closure1_slot3;
                        mike = 24;
                        zulu = zulu[mike];
                        mike = undefined;
                        zulu = oscar.bind(mike)(zulu);
                        mike = zulu.open;
                        mike = mike.bind(zulu)(report, tango);
                        _fun81651_ip = 141; continue _fun81651;
 109:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 23;
                        mike = mike[entity];
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        entity = mike.transferOwnershipProtected;
                        entity = entity.bind(mike)();
 141:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleTransferOwnership'] = zulu;
                zulu = function() {
                    _fun81652: for(var _fun81652_ip = 0; ; ) switch(_fun81652_ip) {
 0:
                        mike = _closure3_slot0;
                        mike = mike.props;
                        zulu = mike.editRoles;
                        mike = null;
                        if(!(mike != zulu)) { _fun81652_ip = 107; continue _fun81652 }
 24:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        mike = 21;
                        zulu = zulu[mike];
                        mike = undefined;
                        report = tango.bind(mike)(zulu);
                        tango = report.updateMemberRoles;
                        entity = _closure3_slot0;
                        mike = entity.props;
                        mike = mike.guild;
                        zulu = mike.id;
                        mike = entity.props;
                        mike = mike.user;
                        mike = mike.id;
                        entity = entity.props;
                        entity = entity.editRoles;
                        entity = tango.bind(report)(zulu, mike, entity);
 107:
                        entity = undefined;
                        return entity;
                    }
                };
                entity['handleSaveMemberRoles'] = zulu;
                mike = function() {
                    zulu = _closure1_slot1;
                    mike = _closure1_slot3;
                    entity = 21;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.stopEditingRoles;
                    mike = mike.bind(zulu)();
                    return entity;
                };
                entity['handleCancelEditMemberRoles'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = 'componentDidMount';
        report['key'] = entity;
        entity = function() { // Original name: value
            mike = this;
            entity = mike.updateNavigator;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'componentDidUpdate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            zulu = this;
            mike = zulu.updateNavigator;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'updateNavigator';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun81656: for(var _fun81656_ip = 0; ; ) switch(_fun81656_ip) {
 0:
                mike = argFoo;
                entity = this;
                var _closure3_slot0 = entity;
                entity = entity.props;
                report = entity.submitting;
                oscar = entity.isEditing;
                zulu = entity.navigation;
                offset = entity.onClose;
                golf = null;
                entity = golf != mike;
                if(!entity) { _fun81656_ip = 60; continue _fun81656 }
 50:
                options = mike.submitting;
                entity = report === options;
 60:
                if(!entity) { _fun81656_ip = 73; continue _fun81656 }
 63:
                options = mike.isEditing;
                entity = oscar === options;
 73:
                if(!entity) { _fun81656_ip = 86; continue _fun81656 }
 76:
                mike = mike.onClose;
                entity = offset === mike;
 86:
                if(entity) { _fun81656_ip = 220; continue _fun81656 }
 92:
                mike = zulu.setOptions;
                entity = {};
                if(report) { _fun81656_ip = 162; continue _fun81656 }
 103:
                if(oscar) { _fun81656_ip = 153; continue _fun81656 }
 106:
                options = golf != offset;
                yankee = undefined;
                golf = undefined;
                if(!options) { _fun81656_ip = 151; continue _fun81656 }
 117:
                verify = _closure1_slot0;
                romeo = _closure1_slot3;
                options = 26;
                options = romeo[options];
                verify = verify.bind(yankee)(options);
                options = verify.getHeaderCloseButton;
                golf = options.bind(verify)(offset);
 151:
                _fun81656_ip = 160; continue _fun81656;
 153:
                golf = function() {
                    tango = _closure1_slot20;
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 25;
                    entity = verify[entity];
                    zulu = undefined;
                    entity = options.bind(zulu)(entity);
                    mike = entity.HeaderActionButton;
                    entity = {};
                    report = 20;
                    oscar = verify[report];
                    oscar = options.bind(zulu)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    report = verify[report];
                    report = options.bind(zulu)(report);
                    report = report.t;
                    report = report.ETE/oK;
                    report = oscar.bind(golf)(report);
                    entity['text'] = report;
                    report = _closure3_slot0;
                    report = report.handleCancelEditMemberRoles;
                    entity['onPress'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
 160:
                _fun81656_ip = 169; continue _fun81656;
 162:
                golf = function() {
                    entity = null;
                    return entity;
                };
 169:
                entity['headerLeft'] = golf;
                if(report) { _fun81656_ip = 191; continue _fun81656 }
 177:
                report = undefined;
                if(!oscar) { _fun81656_ip = 189; continue _fun81656 }
 182:
                report = function() {
                    tango = _closure1_slot20;
                    options = _closure1_slot0;
                    verify = _closure1_slot3;
                    entity = 25;
                    entity = verify[entity];
                    zulu = undefined;
                    entity = options.bind(zulu)(entity);
                    mike = entity.HeaderActionButton;
                    entity = {};
                    report = 20;
                    oscar = verify[report];
                    oscar = options.bind(zulu)(oscar);
                    golf = oscar.intl;
                    oscar = golf.string;
                    report = verify[report];
                    report = options.bind(zulu)(report);
                    report = report.t;
                    report = report.R3BPHx;
                    report = oscar.bind(golf)(report);
                    entity['text'] = report;
                    report = _closure3_slot0;
                    report = report.handleSaveMemberRoles;
                    entity['onPress'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
 189:
                _fun81656_ip = 198; continue _fun81656;
 191:
                report = function() {
                    tango = _closure1_slot20;
                    mike = _closure1_slot0;
                    zulu = _closure1_slot3;
                    entity = 26;
                    entity = zulu[entity];
                    zulu = undefined;
                    entity = mike.bind(zulu)(entity);
                    mike = entity.HeaderSubmittingIndicator;
                    entity = {};
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
 198:
                entity['headerRight'] = report;
                tango = function() { // Original name: headerTitle
                    tango = _closure1_slot20;
                    oscar = _closure1_slot0;
                    yankee = _closure1_slot3;
                    entity = 26;
                    entity = yankee[entity];
                    zulu = undefined;
                    entity = oscar.bind(zulu)(entity);
                    mike = entity.NavigatorHeader;
                    entity = {};
                    report = 20;
                    golf = yankee[report];
                    golf = oscar.bind(zulu)(golf);
                    options = golf.intl;
                    golf = options.formatToPlainString;
                    report = yankee[report];
                    report = oscar.bind(zulu)(report);
                    report = report.t;
                    oscar = report.v7odxs;
                    report = {};
                    offset = _closure1_slot1;
                    verify = 27;
                    verify = yankee[verify];
                    yankee = offset.bind(zulu)(verify);
                    offset = yankee.getName;
                    verify = _closure3_slot0;
                    verify = verify.props;
                    verify = verify.user;
                    verify = offset.bind(yankee)(verify);
                    report['user'] = verify;
                    report = golf.bind(options)(oscar, report);
                    entity['title'] = report;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                entity['headerTitle'] = tango;
                entity = mike.bind(zulu)(entity);
 220:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'render';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun81662: for(var _fun81662_ip = 0; ; ) switch(_fun81662_ip) {
 0:
                kilo = this;
                mike = _closure1_slot23;
                entity = kilo.context;
                report = undefined;
                config = mike.bind(report)(entity);
                entity = kilo.state;
                variable37 = entity.nick;
                entity = kilo.props;
                control = entity.user;
                sierra = entity.guild;
                status = entity.guildRoles;
                target = entity.member;
                papa = entity.editRoles;
                whiskey = entity.nicknameError;
                context = entity.currentUser;
                record = entity.isEditing;
                update = entity.canChangeNick;
                echo = entity.canManageRoles;
                sizing = entity.canKick;
                options = entity.canBan;
                output = entity.canDisableCommunication;
                entity = null;
                if(!(entity != target)) { _fun81662_ip = 1759; continue _fun81662 }
 123:
                tango = _closure1_slot21;
                zulu = _closure1_slot10;
                mike = {};
                oscar = config.rowLabel;
                mike['style'] = oscar;
                verify = _closure1_slot20;
                golf = _closure1_slot0;
                offset = _closure1_slot3;
                oscar = 28;
                oscar = offset[oscar];
                oscar = golf.bind(report)(oscar);
                golf = oscar.Text;
                oscar = {};
                yankee = 'text-sm/medium';
                oscar['variant'] = yankee;
                yankee = _closure1_slot1;
                vacuum = 27;
                offset = offset[vacuum];
                yankee = yankee.bind(report)(offset);
                offset = yankee.getUserTag;
                offset = offset.bind(yankee)(control);
                oscar['children'] = offset;
                golf = verify.bind(report)(golf, oscar);
                oscar = new Array(2);
                oscar[0] = golf;
                verify = control.bot;
                golf = null;
                if(!verify) { _fun81662_ip = 285; continue _fun81662 }
 238:
                yankee = _closure1_slot20;
                offset = _closure1_slot1;
                romeo = _closure1_slot3;
                verify = 29;
                verify = romeo[verify];
                offset = offset.bind(report)(verify);
                verify = {};
                romeo = control.isVerifiedBot;
                romeo = romeo.bind(control)();
                verify['verified'] = romeo;
                golf = yankee.bind(report)(offset, verify);
 285:
                oscar[1] = golf;
                mike['children'] = oscar;
                sequence = tango.bind(report)(zulu, mike);
                mike = entity != target;
                result = null;
                if(!mike) { _fun81662_ip = 594; continue _fun81662 }
 311:
                zulu = _closure1_slot0;
                tango = _closure1_slot3;
                mike = 30;
                mike = tango[mike];
                zulu = zulu.bind(report)(mike);
                mike = zulu.isMemberCommunicationDisabled;
                mike = mike.bind(zulu)(target);
                oscar = _closure1_slot20;
                romeo = _closure1_slot0;
                lima = _closure1_slot3;
                zulu = 19;
                zulu = lima[zulu];
                zulu = romeo.bind(report)(zulu);
                tango = zulu.FormSection;
                zulu = {};
                offset = _closure1_slot20;
                golf = 31;
                golf = lima[golf];
                golf = romeo.bind(report)(golf);
                verify = golf.TableRow;
                golf = {};
                yankee = 'danger';
                golf['variant'] = yankee;
                yankee = 20;
                foxtrot = lima[yankee];
                foxtrot = romeo.bind(report)(foxtrot);
                backup = foxtrot.intl;
                foxtrot = backup.formatToPlainString;
                yankee = lima[yankee];
                yankee = romeo.bind(report)(yankee);
                yankee = yankee.t;
                if(mike) { _fun81662_ip = 519; continue _fun81662 }
 445:
                romeo = yankee.FN7NIS;
                mike = {};
                quebec = _closure1_slot1;
                equality = lima[vacuum];
                quebec = quebec.bind(report)(equality);
                equality = quebec.getName;
                equality = equality.bind(quebec)(control);
                mike['user'] = equality;
                mike = foxtrot.bind(backup)(romeo, mike);
                golf['label'] = mike;
                mike = kilo.handleSetCommunicationDisabled;
                golf['onPress'] = mike;
                mike = offset.bind(report)(verify, golf);
                zulu['children'] = mike;
                mike = oscar.bind(report)(tango, zulu);
                _fun81662_ip = 591; continue _fun81662;
 519:
                romeo = yankee.RuL6o6;
                yankee = {};
                equality = _closure1_slot1;
                lima = lima[vacuum];
                equality = equality.bind(report)(lima);
                lima = equality.getName;
                lima = lima.bind(equality)(control);
                yankee['user'] = lima;
                yankee = foxtrot.bind(backup)(romeo, yankee);
                golf['label'] = yankee;
                yankee = kilo.handleClearCommunicationDisabled;
                golf['onPress'] = yankee;
                golf = offset.bind(report)(verify, golf);
                zulu['children'] = golf;
                mike = oscar.bind(report)(tango, zulu);
 591:
                result = mike;
 594:
                zulu = control.id;
                mike = sierra.ownerId;
                mike = zulu !== mike;
                if(!mike) { _fun81662_ip = 623; continue _fun81662 }
 612:
                zulu = sierra.isOwnerWithRequiredMfaLevel;
                mike = zulu.bind(sierra)(context);
 623:
                if(!mike) { _fun81662_ip = 635; continue _fun81662 }
 626:
                zulu = control.bot;
                mike = !zulu;
 635:
                golf = undefined;
                if(!mike) { _fun81662_ip = 784; continue _fun81662 }
 643:
                tango = _closure1_slot20;
                backup = _closure1_slot0;
                lima = _closure1_slot3;
                mike = 19;
                mike = lima[mike];
                mike = backup.bind(report)(mike);
                zulu = mike.FormSection;
                mike = {};
                offset = _closure1_slot20;
                oscar = 31;
                oscar = lima[oscar];
                oscar = backup.bind(report)(oscar);
                verify = oscar.TableRow;
                oscar = {};
                yankee = 'danger';
                oscar['variant'] = yankee;
                yankee = 20;
                romeo = lima[yankee];
                romeo = backup.bind(report)(romeo);
                foxtrot = romeo.intl;
                romeo = foxtrot.string;
                yankee = lima[yankee];
                yankee = backup.bind(report)(yankee);
                yankee = yankee.t;
                yankee = yankee.Z5s7PD;
                yankee = romeo.bind(foxtrot)(yankee);
                oscar['label'] = yankee;
                yankee = kilo.handleTransferOwnership;
                oscar['onPress'] = yankee;
                oscar = offset.bind(report)(verify, oscar);
                mike['children'] = oscar;
                golf = tango.bind(report)(zulu, mike);
 784:
                tango = _closure1_slot21;
                foxtrot = _closure1_slot0;
                lima = _closure1_slot3;
                verify = 19;
                mike = lima[verify];
                mike = foxtrot.bind(report)(mike);
                zulu = mike.Form;
                mike = {};
                oscar = {};
                offset = 1;
                oscar['flex'] = offset;
                mike['style'] = oscar;
                oscar = kilo.props;
                oscar = oscar.contentContainerStyle;
                mike['contentContainerStyle'] = oscar;
                yankee = _closure1_slot20;
                oscar = lima[verify];
                oscar = foxtrot.bind(report)(oscar);
                offset = oscar.FormSection;
                oscar = {};
                backup = _closure1_slot20;
                romeo = lima[verify];
                romeo = foxtrot.bind(report)(romeo);
                foxtrot = romeo.FormRow;
                romeo = {};
                variable36 = _closure1_slot20;
                equality = _closure1_slot1;
                quebec = 32;
                lima = lima[quebec];
                equality = equality.bind(report)(lima);
                lima = {};
                variable38 = config.avatar;
                lima['style'] = variable38;
                lima['user'] = control;
                variable38 = sierra.id;
                lima['guildId'] = variable38;
                lima = variable36.bind(report)(equality, lima);
                romeo['leading'] = lima;
                config = config.userInfo;
                romeo['DEPRECATED_style'] = config;
                romeo['label'] = sequence;
                romeo = backup.bind(report)(foxtrot, romeo);
                oscar['children'] = romeo;
                offset = yankee.bind(report)(offset, oscar);
                oscar = new Array(4);
                oscar[0] = offset;
                offset = control.isClyde;
                offset = offset.bind(control)();
                offset = !offset;
                if(!offset) { _fun81662_ip = 1560; continue _fun81662 }
 1001:
                foxtrot = _closure1_slot21;
                romeo = _closure1_slot22;
                yankee = {};
                if(update) { _fun81662_ip = 1028; continue _fun81662 }
 1014:
                sequence = context.id;
                backup = control.id;
                update = sequence === backup;
 1028:
                if(!update) { _fun81662_ip = 1262; continue _fun81662 }
 1034:
                config = _closure1_slot20;
                variable38 = _closure1_slot0;
                lima = _closure1_slot3;
                backup = lima[verify];
                backup = variable38.bind(report)(backup);
                sequence = backup.FormSection;
                backup = {};
                variable40 = 20;
                equality = lima[variable40];
                equality = variable38.bind(report)(equality);
                variable36 = equality.intl;
                equality = variable36.string;
                lima = lima[variable40];
                lima = variable38.bind(report)(lima);
                lima = lima.t;
                lima = lima.621LJC;
                lima = equality.bind(variable36)(lima);
                backup['title'] = lima;
                equality = entity != whiskey;
                lima = undefined;
                if(!equality) { _fun81662_ip = 1126; continue _fun81662 }
 1123:
                lima = whiskey;
 1126:
                backup['error'] = lima;
                equality = _closure1_slot20;
                variable39 = _closure1_slot0;
                variable36 = _closure1_slot3;
                lima = variable36[verify];
                lima = variable39.bind(report)(lima);
                whiskey = lima.FormInput;
                lima = {};
                lima['value'] = variable37;
                variable37 = false;
                lima['showTopContainer'] = variable37;
                variable37 = variable36[variable40];
                variable37 = variable39.bind(report)(variable37);
                variable38 = variable37.intl;
                variable37 = variable38.string;
                variable36 = variable36[variable40];
                variable36 = variable39.bind(report)(variable36);
                variable36 = variable36.t;
                variable36 = variable36.h7UKXl;
                variable36 = variable37.bind(variable38)(variable36);
                lima['placeholder'] = variable36;
                variable36 = kilo.handleChangeNickname;
                lima['onChange'] = variable36;
                variable36 = kilo.handleSaveNickname;
                lima['onEndEditing'] = variable36;
                lima['maxLength'] = quebec;
                lima = equality.bind(report)(whiskey, lima);
                backup['children'] = lima;
                update = config.bind(report)(sequence, backup);
 1262:
                backup = new Array(4);
                backup[0] = update;
                if(!echo) { _fun81662_ip = 1357; continue _fun81662 }
 1273:
                config = _closure1_slot20;
                sequence = _closure1_slot24;
                update = {};
                update['guild'] = sierra;
                update['guildRoles'] = status;
                if(record) { _fun81662_ip = 1301; continue _fun81662 }
 1295:
                papa = target.roles;
 1301:
                if(!(entity == papa)) { _fun81662_ip = 1309; continue _fun81662 }
 1305:
                papa = new Array(0);
 1309:
                update['roles'] = papa;
                context = context.id;
                update['currentUserId'] = context;
                update['isEditing'] = record;
                record = kilo.handleToggleRole;
                update['onToggleRole'] = record;
                record = kilo.handleStartEditingRoles;
                update['onStartEditing'] = record;
                echo = config.bind(report)(sequence, update);
 1357:
                backup[1] = echo;
                if(!output) { _fun81662_ip = 1367; continue _fun81662 }
 1364:
                output = result;
 1367:
                backup[2] = output;
                if(!sizing) { _fun81662_ip = 1546; continue _fun81662 }
 1377:
                echo = _closure1_slot20;
                context = _closure1_slot0;
                status = _closure1_slot3;
                output = status[verify];
                output = context.bind(report)(output);
                result = output.FormSection;
                output = {};
                config = _closure1_slot20;
                update = 31;
                update = status[update];
                update = context.bind(report)(update);
                sequence = update.TableRow;
                update = {};
                record = 'danger';
                update['variant'] = record;
                record = 20;
                papa = status[record];
                papa = context.bind(report)(papa);
                target = papa.intl;
                papa = target.formatToPlainString;
                record = status[record];
                record = context.bind(report)(record);
                record = record.t;
                context = record.yOiJHB;
                record = {};
                sierra = _closure1_slot1;
                status = status[vacuum];
                sierra = sierra.bind(report)(status);
                status = sierra.getName;
                status = status.bind(sierra)(control);
                record['user'] = status;
                record = papa.bind(target)(context, record);
                update['label'] = record;
                record = kilo.handleKick;
                update['onPress'] = record;
                update = config.bind(report)(sequence, update);
                output['children'] = update;
                sizing = echo.bind(report)(result, output);
 1546:
                backup[3] = sizing;
                yankee['children'] = backup;
                offset = foxtrot.bind(report)(romeo, yankee);
 1560:
                oscar[1] = offset;
                if(!options) { _fun81662_ip = 1739; continue _fun81662 }
 1570:
                yankee = _closure1_slot20;
                output = _closure1_slot0;
                update = _closure1_slot3;
                verify = update[verify];
                verify = output.bind(report)(verify);
                offset = verify.FormSection;
                verify = {};
                backup = _closure1_slot20;
                romeo = 31;
                romeo = update[romeo];
                romeo = output.bind(report)(romeo);
                foxtrot = romeo.TableRow;
                romeo = {};
                sizing = 'danger';
                romeo['variant'] = sizing;
                sizing = 20;
                result = update[sizing];
                result = output.bind(report)(result);
                echo = result.intl;
                result = echo.formatToPlainString;
                sizing = update[sizing];
                sizing = output.bind(report)(sizing);
                sizing = sizing.t;
                output = sizing.TuAZub;
                sizing = {};
                source = _closure1_slot1;
                update = update[vacuum];
                source = source.bind(report)(update);
                update = source.getName;
                update = update.bind(source)(control);
                sizing['user'] = update;
                sizing = result.bind(echo)(output, sizing);
                romeo['label'] = sizing;
                kilo = kilo.handleBan;
                romeo['onPress'] = kilo;
                romeo = backup.bind(report)(foxtrot, romeo);
                verify['children'] = romeo;
                options = yankee.bind(report)(offset, verify);
 1739:
                oscar[2] = options;
                oscar[3] = golf;
                mike['children'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return mike;
 1759:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = report.bind(entity)(options);
    var _closure1_slot25 = options;
    report = 33;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ThemeContext;
    options['contextType'] = report;
    report = 44;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_settings/native/GuildSettingsModalMemberEdit.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: MemberModalEdit
        mike = argFoo;
        zulu = mike.guildId;
        golf = mike.userId;
        yankee = mike.onClose;
        var _closure2_slot0 = yankee;
        offset = mike.onRemove;
        var _closure2_slot1 = offset;
        oscar = _closure1_slot1;
        options = _closure1_slot3;
        mike = 42;
        mike = options[mike];
        tango = undefined;
        mike = oscar.bind(tango)(mike);
        verify = mike.bind(tango)(zulu);
        var _closure2_slot2 = verify;
        oscar = _closure1_slot9;
        zulu = oscar.useMemo;
        mike = new Array(3);
        mike[0] = yankee;
        mike[1] = offset;
        mike[2] = verify;
        entity = function() {
            report = _closure2_slot2;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            mike = function(argFoo, argBar, argBaz) { // Original name: getScreens
                entity = argFoo;
                var _closure4_slot0 = entity;
                entity = argBar;
                var _closure4_slot1 = entity;
                entity = argBaz;
                var _closure4_slot2 = entity;
                entity = {};
                mike = _closure1_slot19;
                report = mike.MEMBER_EDIT;
                zulu = {};
                oscar = function(argFoo) { // Original name: render
                    tango = _closure1_slot20;
                    zulu = _closure1_slot28;
                    mike = {};
                    golf = argFoo;
                    options = mike;
                    entity = copyDataProperties(options, golf);
                    oscar = _closure4_slot1;
                    report = 'onClose';
                    mike[report] = oscar;
                    report = _closure4_slot0;
                    entity = 'guildId';
                    mike[entity] = report;
                    entity = undefined;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                };
                zulu['render'] = oscar;
                entity[report] = zulu;
                report = mike.MEMBER_KICK;
                zulu = {};
                oscar = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                zulu['headerTitle'] = oscar;
                oscar = function(argFoo) { // Original name: render
                    tango = _closure1_slot20;
                    mike = _closure1_slot1;
                    zulu = _closure1_slot3;
                    entity = 40;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    options = argFoo;
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    golf = _closure4_slot0;
                    oscar = 'guildId';
                    entity[oscar] = golf;
                    oscar = _closure4_slot2;
                    report = 'onKick';
                    entity[report] = oscar;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                zulu['render'] = oscar;
                entity[report] = zulu;
                zulu = mike.MEMBER_BAN;
                mike = {};
                report = function() { // Original name: headerTitle
                    entity = null;
                    return entity;
                };
                mike['headerTitle'] = report;
                tango = function(argFoo) { // Original name: render
                    tango = _closure1_slot20;
                    mike = _closure1_slot1;
                    zulu = _closure1_slot3;
                    entity = 41;
                    entity = zulu[entity];
                    zulu = undefined;
                    mike = mike.bind(zulu)(entity);
                    entity = {};
                    options = argFoo;
                    verify = entity;
                    report = copyDataProperties(verify, options);
                    golf = _closure4_slot0;
                    oscar = 'guildId';
                    entity[oscar] = golf;
                    oscar = _closure4_slot2;
                    report = 'onBan';
                    entity[report] = oscar;
                    entity = tango.bind(zulu)(mike, entity);
                    return entity;
                };
                mike['render'] = tango;
                entity[zulu] = mike;
                return entity;
            };
            entity = undefined;
            entity = mike.bind(entity)(report, tango, zulu);
            return entity;
        };
        oscar = zulu.bind(oscar)(entity, mike);
        zulu = _closure1_slot20;
        mike = _closure1_slot0;
        entity = 43;
        entity = options[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.Navigator;
        entity = {};
        entity['screens'] = oscar;
        report = _closure1_slot19;
        oscar = report.MEMBER_EDIT;
        entity['initialRouteName'] = oscar;
        oscar = {};
        report = report.MEMBER_EDIT;
        oscar['name'] = report;
        report = {};
        report['userId'] = golf;
        oscar['params'] = report;
        report = new Array(1);
        report[0] = oscar;
        entity['initialRouteStack'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = tango;
    zulu['GuildSettingsModalMemberEditScene'] = mike;
    return entity;
})();