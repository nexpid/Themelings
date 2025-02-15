// app/modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.USERS_LIST_PADDING_BETWEEN_SECTIONS;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Permissions;
    var _closure1_slot9 = golf;
    tango = tango.AnalyticsSections;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot11 = tango;
    tango = {};
    tango['listActionRenderer'] = entity;
    tango['listActionHeight'] = entity;
    var _closure1_slot12 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {};
    verify['paddingTop'] = offset;
    tango['wrapper'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot13 = tango;
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/user_list/useMemberListAction.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useMemberListAction
        _fun113738: for(var _fun113738_ip = 0; ; ) switch(_fun113738_ip) {
 0:
            mike = argFoo;
            zulu = mike.channel;
            var _closure2_slot0 = zulu;
            verify = mike.disable;
            tango = undefined;
            if(!(verify === tango)) { _fun113738_ip = 28; continue _fun113738 }
 26:
            verify = false;
 28:
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            report = _closure1_slot13;
            report = report.bind(tango)();
            _closure2_slot1 = report;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            oscar = 10;
            oscar = options[oscar];
            offset = golf.bind(tango)(oscar);
            options = offset.useStateFromStores;
            oscar = _closure1_slot8;
            golf = new Array(1);
            golf[0] = oscar;
            oscar = function() {
                _fun113739: for(var _fun113739_ip = 0; ; ) switch(_fun113739_ip) {
 0:
                    entity = _closure2_slot0;
                    mike = null;
                    tango = mike != entity;
                    entity = null;
                    if(!tango) { _fun113739_ip = 86; continue _fun113739 }
 18:
                    report = _closure2_slot0;
                    tango = report.isDM;
                    tango = tango.bind(report)();
                    entity = null;
                    if(!tango) { _fun113739_ip = 86; continue _fun113739 }
 37:
                    report = _closure1_slot8;
                    tango = report.getUser;
                    oscar = _closure2_slot0;
                    zulu = oscar.getRecipientId;
                    zulu = zulu.bind(oscar)();
                    zulu = tango.bind(report)(zulu);
                    tango = mike == zulu;
                    mike = undefined;
                    if(tango) { _fun113739_ip = 83; continue _fun113739 }
 78:
                    mike = zulu.username;
 83:
                    entity = mike;
 86:
                    return entity;
                }
            };
            options = options.bind(offset)(golf, oscar);
            _closure2_slot2 = options;
            offset = _closure1_slot6;
            golf = offset.can;
            oscar = _closure1_slot9;
            oscar = oscar.MANAGE_ROLES;
            foxtrot = golf.bind(offset)(oscar, zulu);
            if(!foxtrot) { _fun113738_ip = 193; continue _fun113738 }
 162:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 11;
            oscar = offset[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = golf.isPrivateGuildChannel;
            foxtrot = oscar.bind(golf)(zulu);
 193:
            _closure2_slot3 = foxtrot;
            golf = null;
            oscar = golf != zulu;
            if(!oscar) { _fun113738_ip = 209; continue _fun113738 }
 206:
            oscar = !verify;
 209:
            if(!oscar) { _fun113738_ip = 309; continue _fun113738 }
 212:
            verify = foxtrot;
            if(verify) { _fun113738_ip = 306; continue _fun113738 }
 218:
            offset = zulu.isDM;
            offset = offset.bind(zulu)();
            if(offset) { _fun113738_ip = 278; continue _fun113738 }
 231:
            offset = zulu.isMultiUserDM;
            offset = offset.bind(zulu)();
            yankee = !offset;
            offset = !yankee;
            if(!yankee) { _fun113738_ip = 276; continue _fun113738 }
 250:
            backup = _closure1_slot6;
            romeo = backup.can;
            yankee = _closure1_slot9;
            yankee = yankee.CREATE_INSTANT_INVITE;
            offset = romeo.bind(backup)(yankee, zulu);
 276:
            _fun113738_ip = 303; continue _fun113738;
 278:
            backup = _closure1_slot7;
            romeo = backup.isFriend;
            yankee = zulu.getRecipientId;
            yankee = yankee.bind(zulu)();
            offset = romeo.bind(backup)(yankee);
 303:
            verify = offset;
 306:
            oscar = verify;
 309:
            _closure2_slot4 = oscar;
            offset = golf == zulu;
            verify = undefined;
            if(offset) { _fun113738_ip = 332; continue _fun113738 }
 322:
            offset = zulu.isDM;
            verify = offset.bind(zulu)();
 332:
            offset = golf != verify;
            if(!offset) { _fun113738_ip = 342; continue _fun113738 }
 339:
            offset = verify;
 342:
            _closure2_slot5 = offset;
            verify = golf == zulu;
            yankee = undefined;
            if(verify) { _fun113738_ip = 365; continue _fun113738 }
 355:
            verify = zulu.isMultiUserDM;
            yankee = verify.bind(zulu)();
 365:
            verify = golf != yankee;
            if(!verify) { _fun113738_ip = 375; continue _fun113738 }
 372:
            verify = yankee;
 375:
            _closure2_slot6 = verify;
            golf = golf == zulu;
            romeo = undefined;
            if(golf) { _fun113738_ip = 393; continue _fun113738 }
 388:
            romeo = zulu.id;
 393:
            _closure2_slot7 = romeo;
            golf = _closure1_slot1;
            yankee = _closure1_slot2;
            zulu = 12;
            zulu = yankee[zulu];
            zulu = golf.bind(tango)(zulu);
            golf = zulu.bind(tango)();
            _closure2_slot8 = golf;
            tango = _closure1_slot3;
            yankee = tango.useCallback;
            zulu = new Array(1);
            zulu[0] = romeo;
            mike = function() {
                _fun113740: for(var _fun113740_ip = 0; ; ) switch(_fun113740_ip) {
 0:
                    zulu = _closure2_slot7;
                    entity = null;
                    if(!(entity != zulu)) { _fun113740_ip = 64; continue _fun113740 }
 13:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 13;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.navigateToNewGroupDM;
                    mike = _closure2_slot7;
                    entity = _closure1_slot10;
                    entity = entity.MEMBER_LIST;
                    entity = zulu.bind(tango)(mike, entity);
 64:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = yankee.bind(tango)(mike, zulu);
            _closure2_slot9 = yankee;
            zulu = tango.useMemo;
            mike = new Array(9);
            mike[0] = foxtrot;
            mike[1] = romeo;
            mike[2] = yankee;
            mike[3] = offset;
            mike[4] = verify;
            mike[5] = options;
            mike[6] = golf;
            mike[7] = oscar;
            mike[8] = report;
            entity = function() {
                _fun113741: for(var _fun113741_ip = 0; ; ) switch(_fun113741_ip) {
 0:
                    entity = _closure2_slot7;
                    golf = null;
                    if(!(golf != entity)) { _fun113741_ip = 857; continue _fun113741 }
 18:
                    entity = _closure2_slot4;
                    if(!entity) { _fun113741_ip = 857; continue _fun113741 }
 28:
                    entity = _closure2_slot5;
                    if(entity) { _fun113741_ip = 421; continue _fun113741 }
 38:
                    entity = _closure2_slot6;
                    tango = {};
                    if(entity) { _fun113741_ip = 296; continue _fun113741 }
 53:
                    entity = _closure2_slot3;
                    options = _closure1_slot1;
                    romeo = _closure1_slot2;
                    if(entity) { _fun113741_ip = 182; continue _fun113741 }
 68:
                    entity = 17;
                    entity = romeo[entity];
                    yankee = undefined;
                    entity = options.bind(yankee)(entity);
                    tango['iconSource'] = entity;
                    offset = _closure1_slot0;
                    entity = 18;
                    entity = romeo[entity];
                    entity = offset.bind(yankee)(entity);
                    entity = entity.GroupPlusIcon;
                    tango['IconComponent'] = entity;
                    entity = 16;
                    oscar = romeo[entity];
                    oscar = offset.bind(yankee)(oscar);
                    verify = oscar.intl;
                    oscar = verify.string;
                    entity = romeo[entity];
                    entity = offset.bind(yankee)(entity);
                    entity = entity.t;
                    entity = entity.Ab/6S0;
                    entity = oscar.bind(verify)(entity);
                    tango['label'] = entity;
                    entity = function() { // Original name: handlePress
                        _fun113744: for(var _fun113744_ip = 0; ; ) switch(_fun113744_ip) {
 0:
                            tango = _closure1_slot5;
                            zulu = tango.getChannel;
                            mike = _closure2_slot7;
                            tango = zulu.bind(tango)(mike);
                            mike = null;
                            if(!(mike != tango)) { _fun113744_ip = 92; continue _fun113744 }
 30:
                            zulu = _closure1_slot0;
                            report = _closure1_slot2;
                            entity = 25;
                            entity = report[entity];
                            mike = undefined;
                            oscar = zulu.bind(mike)(entity);
                            entity = oscar.dismissGlobalKeyboard;
                            entity = entity.bind(oscar)();
                            entity = 26;
                            entity = report[entity];
                            zulu = zulu.bind(mike)(entity);
                            mike = zulu.showInstantInviteActionSheet;
                            entity = 'Chat Sidebar';
                            entity = mike.bind(zulu)(tango, entity);
 92:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango['handlePress'] = entity;
                    entity = tango;
                    _fun113741_ip = 294; continue _fun113741;
 182:
                    oscar = 22;
                    oscar = romeo[oscar];
                    yankee = undefined;
                    oscar = options.bind(yankee)(oscar);
                    tango['iconSource'] = oscar;
                    offset = _closure1_slot0;
                    oscar = 23;
                    oscar = romeo[oscar];
                    oscar = offset.bind(yankee)(oscar);
                    oscar = oscar.SettingsIcon;
                    tango['IconComponent'] = oscar;
                    oscar = 16;
                    options = romeo[oscar];
                    options = offset.bind(yankee)(options);
                    verify = options.intl;
                    options = verify.string;
                    oscar = romeo[oscar];
                    oscar = offset.bind(yankee)(oscar);
                    oscar = oscar.t;
                    oscar = oscar.z9Mqlp;
                    oscar = options.bind(verify)(oscar);
                    tango['label'] = oscar;
                    oscar = function() { // Original name: handlePress
                        _fun113743: for(var _fun113743_ip = 0; ; ) switch(_fun113743_ip) {
 0:
                            tango = _closure1_slot5;
                            zulu = tango.getChannel;
                            entity = _closure2_slot7;
                            entity = zulu.bind(tango)(entity);
                            zulu = null;
                            if(!(zulu != entity)) { _fun113743_ip = 74; continue _fun113743 }
 30:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 24;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = tango.openChannelMembersActionSheet;
                            mike = entity.id;
                            entity = entity.guild_id;
                            entity = zulu.bind(tango)(mike, entity);
 74:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango['handlePress'] = oscar;
                    entity = tango;
 294:
                    _fun113741_ip = 416; continue _fun113741;
 296:
                    options = _closure1_slot1;
                    yankee = _closure1_slot2;
                    oscar = 17;
                    oscar = yankee[oscar];
                    offset = undefined;
                    oscar = options.bind(offset)(oscar);
                    tango['iconSource'] = oscar;
                    verify = _closure1_slot0;
                    report = 18;
                    report = yankee[report];
                    report = verify.bind(offset)(report);
                    report = report.GroupPlusIcon;
                    tango['IconComponent'] = report;
                    report = 16;
                    oscar = yankee[report];
                    oscar = verify.bind(offset)(oscar);
                    options = oscar.intl;
                    oscar = options.string;
                    report = yankee[report];
                    report = verify.bind(offset)(report);
                    report = report.t;
                    report = report.LR+Ptb;
                    report = oscar.bind(options)(report);
                    tango['label'] = report;
                    report = function() { // Original name: handlePress
                        _fun113742: for(var _fun113742_ip = 0; ; ) switch(_fun113742_ip) {
 0:
                            report = _closure1_slot5;
                            tango = report.getChannel;
                            mike = _closure2_slot7;
                            tango = tango.bind(report)(mike);
                            mike = null;
                            if(!(mike != tango)) { _fun113742_ip = 136; continue _fun113742 }
 30:
                            golf = _closure1_slot0;
                            options = _closure1_slot2;
                            mike = 19;
                            tango = options[mike];
                            mike = undefined;
                            oscar = golf.bind(mike)(tango);
                            report = oscar.isDismissibleContentDismissed;
                            tango = 20;
                            tango = options[tango];
                            tango = golf.bind(mike)(tango);
                            tango = tango.DismissibleContent;
                            tango = tango.GDM_INVITE_REMINDER;
                            tango = report.bind(oscar)(tango);
                            if(tango) { _fun113742_ip = 128; continue _fun113742 }
 90:
                            tango = _closure1_slot1;
                            report = _closure1_slot2;
                            zulu = 21;
                            zulu = report[zulu];
                            tango = tango.bind(mike)(zulu);
                            zulu = {};
                            report = _closure2_slot9;
                            zulu['onClick'] = report;
                            zulu = tango.bind(mike)(zulu);
                            _fun113742_ip = 136; continue _fun113742;
 128:
                            entity = _closure2_slot9;
                            entity = entity.bind(mike)();
 136:
                            entity = undefined;
                            return entity;
                        }
                    };
                    tango['handlePress'] = report;
                    entity = tango;
 416:
                    _fun113741_ip = 625; continue _fun113741;
 421:
                    tango = {};
                    verify = _closure1_slot1;
                    report = _closure1_slot2;
                    options = 14;
                    options = report[options];
                    offset = undefined;
                    options = verify.bind(offset)(options);
                    tango['iconSource'] = options;
                    romeo = _closure1_slot0;
                    options = 15;
                    options = report[options];
                    options = romeo.bind(offset)(options);
                    options = options.ChatPlusIcon;
                    tango['IconComponent'] = options;
                    yankee = 16;
                    options = report[yankee];
                    options = romeo.bind(offset)(options);
                    verify = options.intl;
                    options = verify.string;
                    report = report[yankee];
                    report = romeo.bind(offset)(report);
                    report = report.t;
                    report = report.3hF1W1;
                    report = options.bind(verify)(report);
                    tango['label'] = report;
                    report = _closure2_slot2;
                    golf = golf != report;
                    report = undefined;
                    if(!golf) { _fun113741_ip = 608; continue _fun113741 }
 544:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    options = oscar[yankee];
                    options = golf.bind(offset)(options);
                    verify = options.intl;
                    options = verify.formatToPlainString;
                    oscar = oscar[yankee];
                    oscar = golf.bind(offset)(oscar);
                    oscar = oscar.t;
                    golf = oscar.Sh/xND;
                    oscar = {};
                    offset = _closure2_slot2;
                    oscar['recipient'] = offset;
                    report = options.bind(verify)(golf, oscar);
 608:
                    tango['sublabel'] = report;
                    report = _closure2_slot9;
                    tango['handlePress'] = report;
                    entity = tango;
 625:
                    offset = entity.label;
                    kilo = entity.iconSource;
                    backup = entity.IconComponent;
                    yankee = entity.handlePress;
                    verify = entity.sublabel;
                    oscar = _closure1_slot11;
                    report = _closure1_slot4;
                    tango = {};
                    golf = _closure2_slot1;
                    golf = golf.wrapper;
                    tango['style'] = golf;
                    foxtrot = _closure1_slot0;
                    sizing = _closure1_slot2;
                    entity = 27;
                    golf = sizing[entity];
                    entity = undefined;
                    golf = foxtrot.bind(entity)(golf);
                    options = golf.TableRow;
                    golf = {};
                    romeo = 28;
                    romeo = sizing[romeo];
                    romeo = foxtrot.bind(entity)(romeo);
                    romeo = romeo.RowButton;
                    foxtrot = romeo.Icon;
                    romeo = {};
                    romeo['source'] = kilo;
                    kilo = 'blurple';
                    romeo['variant'] = kilo;
                    romeo['IconComponent'] = backup;
                    romeo = oscar.bind(entity)(foxtrot, romeo);
                    golf['icon'] = romeo;
                    golf['onPress'] = yankee;
                    golf['label'] = offset;
                    golf['subLabel'] = verify;
                    verify = true;
                    golf['start'] = verify;
                    golf['end'] = verify;
                    golf['arrow'] = verify;
                    golf = oscar.bind(entity)(options, golf);
                    tango['children'] = golf;
                    entity = oscar.bind(entity)(report, tango);
                    var _closure3_slot0 = entity;
                    entity = {};
                    zulu = function() { // Original name: listActionRenderer
                        entity = _closure3_slot0;
                        return entity;
                    };
                    entity['listActionRenderer'] = zulu;
                    zulu = _closure2_slot8;
                    mike = _closure2_slot1;
                    mike = mike.wrapper;
                    mike = mike.paddingTop;
                    mike = zulu + mike;
                    entity['listActionHeight'] = mike;
                    return entity;
 857:
                    entity = _closure1_slot12;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();