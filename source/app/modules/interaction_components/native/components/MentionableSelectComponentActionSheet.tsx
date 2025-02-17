// app/modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    backup = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = oscar;
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
    tango = backup.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = backup.bind(entity)(tango);
    var _closure1_slot6 = tango;
    offset = 4;
    tango = oscar[offset];
    tango = backup.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    romeo = tango.Fonts;
    tango = tango.DEFAULT_ROLE_COLOR;
    var _closure1_slot8 = tango;
    tango = 6;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    foxtrot = 8;
    yankee = oscar[foxtrot];
    yankee = backup.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.INTERACTIVE_NORMAL;
    verify['color'] = yankee;
    yankee = romeo.PRIMARY_MEDIUM;
    verify['fontFamily'] = yankee;
    yankee = 12;
    verify['fontSize'] = yankee;
    kilo = 16;
    verify['lineHeight'] = kilo;
    tango['name'] = verify;
    verify = {};
    foxtrot = oscar[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.INTERACTIVE_MUTED;
    verify['color'] = foxtrot;
    romeo = romeo.PRIMARY_MEDIUM;
    verify['fontFamily'] = romeo;
    verify['fontSize'] = yankee;
    tango['discriminator'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'flexGrow': 1, 'alignItems': 'center', 'justifyContent': 'flex-end', 'marginRight': 12};
    tango['roleCountContainer'] = verify;
    verify = {};
    verify['paddingRight'] = offset;
    tango['roleCountText'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot11 = tango;
    tango = 24;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.messageId;
            yankee = entity.messageFlags;
            offset = entity.applicationId;
            report = entity.channelId;
            var _closure2_slot0 = report;
            zulu = entity.guildId;
            var _closure2_slot1 = zulu;
            romeo = entity.selectionActionComponent;
            var _closure2_slot2 = romeo;
            tango = undefined;
            var _closure2_slot5 = tango;
            mike = _closure1_slot11;
            mike = mike.bind(tango)();
            var _closure2_slot3 = mike;
            golf = _closure1_slot5;
            mike = golf.getGuild;
            result = mike.bind(golf)(zulu);
            var _closure2_slot4 = result;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            mike = 9;
            mike = options[mike];
            options = golf.bind(tango)(mike);
            mike = null;
            mike = mike == result;
            golf = undefined;
            if(mike) { _fun00002_ip = 124; continue _fun00001 }
 119:
            golf = result.id;
 124:
            verify = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 10;
            mike = kilo[mike];
            mike = verify.bind(tango)(mike);
            mike = mike.MIN_REREQUEST_TIME;
            mike = options.bind(tango)(golf, mike);
            _closure2_slot5 = mike;
            output = _closure1_slot3;
            options = output.useCallback;
            golf = new Array(2);
            golf[0] = romeo;
            golf[1] = report;
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.queryMentionables;
                mike = _closure2_slot2;
                zulu = mike.type;
                mike = _closure2_slot0;
                entity = argFoo;
                entity = tango.bind(report)(zulu, entity, mike);
                return entity;
            };
            verify = options.bind(output)(mike, golf);
            mike = _closure1_slot1;
            golf = 11;
            golf = kilo[golf];
            options = mike.bind(tango)(golf);
            golf = {};
            golf['selectActionComponent'] = romeo;
            golf['messageId'] = foxtrot;
            golf['messageFlags'] = yankee;
            golf['applicationId'] = offset;
            golf['channelId'] = report;
            golf['guildId'] = zulu;
            golf['queryOptions'] = verify;
            golf = options.bind(tango)(golf);
            yankee = golf.options;
            offset = golf.selectedOptions;
            verify = golf.isSelected;
            backup = golf.onPressOptionItem;
            options = golf.submitSelection;
            golf = golf.setQuery;
            sizing = output.useCallback;
            foxtrot = new Array(2);
            foxtrot[0] = result;
            foxtrot[1] = zulu;
            zulu = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.type;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    golf = 12;
                    mike = mike[golf];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    mike = mike.SelectOptionType;
                    mike = mike.USER;
                    if(!(zulu !== mike)) { _fun00004_ip = 468; continue _fun00003 }
 52:
                    zulu = entity.type;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[golf];
                    mike = tango.bind(report)(mike);
                    mike = mike.SelectOptionType;
                    mike = mike.ROLE;
                    if(!(zulu !== mike)) { _fun00004_ip = 92; continue _fun00003 }
 90:
                    return report;
 92:
                    tango = _closure2_slot4;
                    mike = null;
                    tango = mike != tango;
                    options = undefined;
                    if(!tango) { _fun00004_ip = 140; continue _fun00003 }
 110:
                    offset = _closure1_slot5;
                    verify = offset.getRole;
                    tango = _closure2_slot4;
                    golf = tango.id;
                    tango = entity.value;
                    options = verify.bind(offset)(golf, tango);
 140:
                    tango = _closure2_slot4;
                    if(!(mike != tango)) { _fun00004_ip = 466; continue _fun00003 }
 151:
                    if(!(mike != options)) { _fun00004_ip = 466; continue _fun00003 }
 158:
                    verify = _closure1_slot0;
                    tango = _closure1_slot2;
                    golf = 14;
                    tango = tango[golf];
                    verify = verify.bind(report)(tango);
                    tango = verify.canGuildUseRoleIcons;
                    zulu = _closure2_slot4;
                    zulu = tango.bind(verify)(zulu, options);
                    if(!zulu) { _fun00004_ip = 276; continue _fun00003 }
 197:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    zulu = zulu[golf];
                    tango = tango.bind(report)(zulu);
                    zulu = tango.getRoleIconData;
                    zulu = zulu.bind(tango)(options);
                    if(!(mike == zulu)) { _fun00004_ip = 231; continue _fun00003 }
 229:
                    zulu = {};
 231:
                    tango = zulu.customIconSrc;
                    verify = zulu.unicodeEmoji;
                    zulu = mike != tango;
                    offset = undefined;
                    if(!zulu) { _fun00004_ip = 262; continue _fun00003 }
 252:
                    zulu = {};
                    zulu['uri'] = tango;
                    offset = zulu;
 262:
                    if(!(mike == offset)) { _fun00004_ip = 407; continue _fun00003 }
 269:
                    if(!(mike == verify)) { _fun00004_ip = 407; continue _fun00003 }
 276:
                    backup = {};
                    zulu = options.colorString;
                    if(!(mike == zulu)) { _fun00004_ip = 323; continue _fun00003 }
 288:
                    golf = _closure1_slot0;
                    yankee = _closure1_slot2;
                    tango = 16;
                    tango = yankee[tango];
                    yankee = golf.bind(report)(tango);
                    golf = yankee.int2hex;
                    tango = _closure1_slot8;
                    zulu = golf.bind(yankee)(tango);
 323:
                    backup['tintColor'] = zulu;
                    golf = _closure1_slot9;
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    yankee = 17;
                    zulu = foxtrot[yankee];
                    tango = romeo.bind(report)(zulu);
                    zulu = {};
                    zulu['style'] = backup;
                    yankee = foxtrot[yankee];
                    yankee = romeo.bind(report)(yankee);
                    yankee = yankee.Sizes;
                    yankee = yankee.MEDIUM;
                    zulu['size'] = yankee;
                    yankee = 18;
                    yankee = foxtrot[yankee];
                    yankee = romeo.bind(report)(yankee);
                    zulu['source'] = yankee;
                    zulu = golf.bind(report)(tango, zulu);
                    return zulu;
 407:
                    golf = _closure1_slot9;
                    tango = _closure1_slot1;
                    yankee = _closure1_slot2;
                    zulu = 15;
                    zulu = yankee[zulu];
                    tango = tango.bind(report)(zulu);
                    zulu = {};
                    zulu['source'] = offset;
                    zulu['unicodeEmoji'] = verify;
                    verify = 24;
                    zulu['size'] = verify;
                    options = options.name;
                    zulu['name'] = options;
                    zulu = golf.bind(report)(tango, zulu);
                    return zulu;
 466:
                    return mike;
 468:
                    zulu = _closure1_slot7;
                    mike = zulu.getUser;
                    entity = entity.value;
                    offset = mike.bind(zulu)(entity);
                    entity = null;
                    if(!(entity != offset)) { _fun00004_ip = 637; continue _fun00003 }
 497:
                    tango = _closure1_slot6;
                    zulu = tango.isMobileOnline;
                    mike = offset.id;
                    verify = zulu.bind(tango)(mike);
                    zulu = tango.getStatus;
                    mike = offset.id;
                    golf = zulu.bind(tango)(mike);
                    tango = _closure1_slot9;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    options = 13;
                    mike = mike[options];
                    zulu = zulu.bind(report)(mike);
                    mike = {};
                    mike['user'] = offset;
                    mike['isMobileOnline'] = verify;
                    mike['status'] = golf;
                    golf = _closure2_slot1;
                    offset = entity != golf;
                    golf = undefined;
                    if(!offset) { _fun00004_ip = 592; continue _fun00003 }
 588:
                    golf = _closure2_slot1;
 592:
                    mike['guildId'] = golf;
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    oscar = oscar[options];
                    oscar = golf.bind(report)(oscar);
                    oscar = oscar.AvatarSizes;
                    oscar = oscar.XSMALL;
                    mike['size'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
                    return mike;
 637:
                    return entity;
                }
            };
            foxtrot = sizing.bind(output)(zulu, foxtrot);
            zulu = _closure1_slot9;
            entity = 19;
            entity = kilo[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['onPressOptionItem'] = backup;
            entity['renderIcon'] = foxtrot;
            foxtrot = function(argFoo) { // Original name: renderDescription
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = argFoo;
                    report = mike.type;
                    oscar = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 12;
                    zulu = tango[zulu];
                    tango = undefined;
                    zulu = oscar.bind(tango)(zulu);
                    zulu = zulu.SelectOptionType;
                    zulu = zulu.USER;
                    if(!(report !== zulu)) { _fun00006_ip = 51; continue _fun00005 }
 49:
                    return tango;
 51:
                    report = _closure1_slot7;
                    zulu = report.getUser;
                    mike = mike.value;
                    report = zulu.bind(report)(mike);
                    zulu = _closure1_slot9;
                    mike = _closure1_slot1;
                    oscar = _closure1_slot2;
                    entity = 20;
                    entity = oscar[entity];
                    mike = mike.bind(tango)(entity);
                    entity = {};
                    entity['user'] = report;
                    report = _closure2_slot3;
                    oscar = report.name;
                    entity['usernameStyle'] = oscar;
                    oscar = report.discriminator;
                    entity['discriminatorStyle'] = oscar;
                    report = report.name;
                    entity['nicknameStyle'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            entity['renderDescription'] = foxtrot;
            foxtrot = function(argFoo) { // Original name: renderOptionSuffix
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.type;
                    oscar = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 12;
                    mike = mike[entity];
                    entity = undefined;
                    mike = oscar.bind(entity)(mike);
                    mike = mike.SelectOptionType;
                    mike = mike.ROLE;
                    if(!(tango !== mike)) { _fun00008_ip = 51; continue _fun00007 }
 49:
                    return entity;
 51:
                    tango = _closure2_slot4;
                    mike = null;
                    golf = mike != tango;
                    tango = undefined;
                    if(!golf) { _fun00008_ip = 99; continue _fun00007 }
 69:
                    verify = _closure1_slot5;
                    options = verify.getRole;
                    golf = _closure2_slot4;
                    golf = golf.id;
                    zulu = zulu.value;
                    tango = options.bind(verify)(golf, zulu);
 99:
                    zulu = mike == tango;
                    offset = null;
                    if(zulu) { _fun00008_ip = 137; continue _fun00007 }
 108:
                    zulu = _closure2_slot5;
                    golf = mike == zulu;
                    zulu = undefined;
                    if(golf) { _fun00008_ip = 134; continue _fun00007 }
 121:
                    golf = _closure2_slot5;
                    tango = tango.id;
                    zulu = golf[tango];
 134:
                    offset = zulu;
 137:
                    if(!(mike != offset)) { _fun00008_ip = 291; continue _fun00007 }
 144:
                    tango = _closure1_slot10;
                    zulu = _closure1_slot4;
                    mike = {};
                    yankee = _closure2_slot3;
                    oscar = yankee.roleCountContainer;
                    mike['style'] = oscar;
                    options = _closure1_slot9;
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 21;
                    report = verify[report];
                    report = golf.bind(entity)(report);
                    oscar = report.Text;
                    report = {'style': null, 'variant': 'text-sm/medium', 'color': 'interactive-normal'};
                    yankee = yankee.roleCountText;
                    report['style'] = yankee;
                    report['children'] = offset;
                    oscar = options.bind(entity)(oscar, report);
                    report = new Array(2);
                    report[0] = oscar;
                    oscar = 22;
                    oscar = verify[oscar];
                    oscar = golf.bind(entity)(oscar);
                    golf = oscar.UserIcon;
                    oscar = {};
                    verify = 'xs';
                    oscar['size'] = verify;
                    oscar = options.bind(entity)(golf, oscar);
                    report[1] = oscar;
                    mike['children'] = report;
                    mike = tango.bind(entity)(zulu, mike);
                    return mike;
 291:
                    return entity;
                }
            };
            entity['renderOptionSuffix'] = foxtrot;
            entity['selectionActionComponent'] = romeo;
            entity['options'] = yankee;
            yankee = offset.length;
            entity['selectedCount'] = yankee;
            entity['selectedOptions'] = offset;
            entity['isSelected'] = verify;
            entity['submitSelection'] = options;
            entity['onQueryChange'] = golf;
            oscar = function(argFoo) { // Original name: itemAccessibilityLabel
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    verify = argFoo;
                    zulu = verify.type;
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    report = 12;
                    entity = entity[report];
                    oscar = undefined;
                    entity = tango.bind(oscar)(entity);
                    entity = entity.SelectOptionType;
                    entity = entity.USER;
                    if(!(zulu !== entity)) { _fun00010_ip = 161; continue _fun00009 }
 49:
                    zulu = verify.type;
                    tango = _closure1_slot0;
                    entity = _closure1_slot2;
                    entity = entity[report];
                    entity = tango.bind(oscar)(entity);
                    entity = entity.SelectOptionType;
                    entity = entity.ROLE;
                    if(!(zulu !== entity)) { _fun00010_ip = 89; continue _fun00009 }
 87:
                    return oscar;
 89:
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    entity = 23;
                    tango = golf[entity];
                    tango = zulu.bind(oscar)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    entity = golf[entity];
                    entity = zulu.bind(oscar)(entity);
                    entity = entity.t;
                    zulu = entity.F6ejkp;
                    entity = {};
                    golf = verify.label;
                    entity['roleName'] = golf;
                    entity = tango.bind(report)(zulu, entity);
                    return entity;
 161:
                    tango = _closure1_slot7;
                    zulu = tango.getUser;
                    entity = verify.value;
                    golf = zulu.bind(tango)(entity);
                    options = null;
                    if(!(options != golf)) { _fun00010_ip = 196; continue _fun00009 }
 187:
                    entity = golf.bot;
                    if(entity) { _fun00010_ip = 287; continue _fun00009 }
 196:
                    zulu = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 23;
                    tango = offset[entity];
                    tango = zulu.bind(oscar)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    entity = offset[entity];
                    entity = zulu.bind(oscar)(entity);
                    entity = entity.t;
                    zulu = entity.AydQ7e;
                    entity = {};
                    offset = verify.label;
                    entity['username'] = offset;
                    yankee = options == golf;
                    offset = undefined;
                    if(yankee) { _fun00010_ip = 274; continue _fun00009 }
 268:
                    offset = golf.discriminator;
 274:
                    entity['discriminator'] = offset;
                    entity = tango.bind(report)(zulu, entity);
                    _fun00010_ip = 376; continue _fun00009;
 287:
                    zulu = _closure1_slot0;
                    offset = _closure1_slot2;
                    mike = 23;
                    tango = offset[mike];
                    tango = zulu.bind(oscar)(tango);
                    report = tango.intl;
                    tango = report.formatToPlainString;
                    mike = offset[mike];
                    mike = zulu.bind(oscar)(mike);
                    mike = mike.t;
                    zulu = mike.zogo//;
                    mike = {};
                    verify = verify.label;
                    mike['username'] = verify;
                    options = options == golf;
                    oscar = undefined;
                    if(options) { _fun00010_ip = 365; continue _fun00009 }
 359:
                    oscar = golf.discriminator;
 365:
                    mike['discriminator'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 376:
                    return entity;
                }
            };
            entity['itemAccessibilityLabel'] = oscar;
            entity['channelId'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();