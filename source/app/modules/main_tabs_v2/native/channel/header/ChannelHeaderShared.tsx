// app/modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
        oscar = argBar;
        romeo = argBaz;
        zulu = argFred;
        golf = argPlugh;
        var _closure1_slot0 = oscar;
        var _closure1_slot1 = romeo;
        var _closure1_slot2 = golf;
        entity = function(argFoo) { // Original name: TitleWrapper
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                mike = argFoo;
                oscar = mike.children;
                foxtrot = mike.onPress;
                romeo = mike.pressAccessibilityLabel;
                zulu = _closure1_slot14;
                report = undefined;
                golf = zulu.bind(report)();
                tango = _closure1_slot4;
                zulu = tango.useState;
                options = zulu.bind(tango)(report);
                tango = _closure1_slot3;
                zulu = 2;
                tango = tango.bind(report)(options, zulu);
                zulu = 0;
                yankee = tango[zulu];
                zulu = 1;
                zulu = tango[zulu];
                var _closure2_slot0 = zulu;
                options = _closure1_slot4;
                tango = options.useCallback;
                zulu = function(argFoo) {
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    zulu = _closure2_slot0;
                    mike = {};
                    tango = true;
                    mike['borderless'] = tango;
                    entity = entity.layout;
                    entity = entity.width;
                    mike['radius'] = entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = new Array(0);
                kilo = tango.bind(options)(zulu, entity);
                entity = null;
                if(!(entity != foxtrot)) { _fun00004_ip = 282; continue _fun00003 }
 111:
                tango = _closure1_slot13;
                zulu = _closure1_slot12;
                entity = {};
                offset = _closure1_slot11;
                sizing = _closure1_slot0;
                output = _closure1_slot2;
                options = 11;
                options = output[options];
                options = sizing.bind(report)(options);
                verify = options.PressableOpacity;
                options = {};
                backup = 10;
                backup = output[backup];
                sizing = sizing.bind(report)(backup);
                backup = sizing.isAndroid;
                sizing = backup.bind(sizing)();
                backup = undefined;
                if(!sizing) { _fun00004_ip = 182; continue _fun00003 }
 179:
                backup = kilo;
 182:
                options['onLayout'] = backup;
                options['onPress'] = foxtrot;
                options['androidRippleConfig'] = yankee;
                yankee = 'header';
                options['accessibilityRole'] = yankee;
                yankee = golf.wrapper;
                options['style'] = yankee;
                options['children'] = oscar;
                verify = offset.bind(report)(verify, options);
                options = new Array(2);
                options[0] = verify;
                yankee = _closure1_slot11;
                offset = _closure1_slot5;
                verify = {};
                verify['onPress'] = foxtrot;
                verify['accessibilityLabel'] = romeo;
                romeo = golf.hiddenPressable;
                verify['style'] = romeo;
                verify = yankee.bind(report)(offset, verify);
                options[1] = verify;
                entity['children'] = options;
                entity = tango.bind(report)(zulu, entity);
                _fun00004_ip = 320; continue _fun00003;
 282:
                tango = _closure1_slot11;
                zulu = _closure1_slot6;
                mike = {};
                golf = golf.wrapper;
                mike['style'] = golf;
                golf = 'header';
                mike['accessibilityRole'] = golf;
                mike['children'] = oscar;
                entity = tango.bind(report)(zulu, mike);
 320:
                return entity;
            }
        };
        var _closure1_slot15 = entity;
        entity = function(argFoo) { // Original name: ChannelTitle
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                kilo = entity.title;
                sizing = entity.accessibleTitle;
                offset = entity.subtitle;
                romeo = entity.disableArrow;
                tango = undefined;
                if(!(romeo === tango)) { _fun00006_ip = 34; continue _fun00005 }
 32:
                romeo = false;
 34:
                entity = _closure1_slot14;
                yankee = entity.bind(tango)();
                zulu = _closure1_slot13;
                mike = _closure1_slot6;
                entity = {};
                report = yankee.channelContent;
                entity['style'] = report;
                options = _closure1_slot13;
                oscar = _closure1_slot6;
                report = {};
                verify = yankee.nameWithArrow;
                report['style'] = verify;
                backup = _closure1_slot11;
                foxtrot = _closure1_slot0;
                output = _closure1_slot2;
                verify = 12;
                verify = output[verify];
                verify = foxtrot.bind(tango)(verify);
                foxtrot = verify.Text;
                verify = {'variant': 'heading-lg/bold', 'color': 'header-primary', 'lineClamp': 1, 'style': null, 'accessibilityLabel': null, 'accessibilityRole': 'header', 'maxFontSizeMultiplier': 2};
                output = yankee.channelName;
                verify['style'] = output;
                verify['accessibilityLabel'] = sizing;
                verify['children'] = kilo;
                foxtrot = backup.bind(tango)(foxtrot, verify);
                verify = new Array(2);
                verify[0] = foxtrot;
                romeo = !romeo;
                if(!romeo) { _fun00006_ip = 249; continue _fun00005 }
 166:
                kilo = _closure1_slot11;
                output = _closure1_slot1;
                result = _closure1_slot2;
                sizing = 13;
                foxtrot = result[sizing];
                backup = output.bind(tango)(foxtrot);
                foxtrot = {};
                echo = 14;
                echo = result[echo];
                echo = output.bind(tango)(echo);
                foxtrot['source'] = echo;
                sizing = result[sizing];
                sizing = output.bind(tango)(sizing);
                sizing = sizing.Sizes;
                sizing = sizing.EXTRA_SMALL;
                foxtrot['size'] = sizing;
                sizing = yankee.arrowIcon;
                foxtrot['style'] = sizing;
                romeo = kilo.bind(tango)(backup, foxtrot);
 249:
                verify[1] = romeo;
                report['children'] = verify;
                oscar = options.bind(tango)(oscar, report);
                report = new Array(2);
                report[0] = oscar;
                oscar = null;
                oscar = oscar != offset;
                if(!oscar) { _fun00006_ip = 310; continue _fun00005 }
 280:
                verify = _closure1_slot11;
                options = _closure1_slot6;
                golf = {};
                yankee = yankee.subTitleContainer;
                golf['style'] = yankee;
                golf['children'] = offset;
                oscar = verify.bind(tango)(options, golf);
 310:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        var _closure1_slot16 = entity;
        entity = function(argFoo) { // Original name: GroupDMIcon
            entity = argFoo;
            oscar = entity.channel;
            entity = _closure1_slot14;
            tango = undefined;
            report = entity.bind(tango)();
            zulu = _closure1_slot11;
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 15;
            entity = verify[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            options = _closure1_slot0;
            golf = 16;
            golf = verify[golf];
            golf = options.bind(tango)(golf);
            golf = golf.AvatarSizes;
            golf = golf.REFRESH_MEDIUM_32;
            entity['size'] = golf;
            entity['channel'] = oscar;
            report = report.channelIcon;
            entity['style'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        var _closure1_slot17 = entity;
        entity = function(argFoo) { // Original name: UserAvatar
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                verify = entity.user;
                options = entity.status;
                oscar = entity.isMobileOnline;
                entity = _closure1_slot14;
                tango = undefined;
                report = entity.bind(tango)();
                zulu = _closure1_slot11;
                mike = _closure1_slot1;
                yankee = _closure1_slot2;
                golf = 16;
                entity = yankee[golf];
                mike = mike.bind(tango)(entity);
                entity = {};
                entity['user'] = verify;
                romeo = verify.avatarDecoration;
                entity['avatarDecoration'] = romeo;
                entity['guildId'] = tango;
                offset = _closure1_slot0;
                golf = yankee[golf];
                golf = offset.bind(tango)(golf);
                golf = golf.AvatarSizes;
                golf = golf.REFRESH_MEDIUM_32;
                entity['size'] = golf;
                golf = verify.isSystemUser;
                verify = golf.bind(verify)();
                golf = null;
                if(verify) { _fun00008_ip = 124; continue _fun00007 }
 121:
                golf = options;
 124:
                entity['status'] = golf;
                entity['isMobileOnline'] = oscar;
                report = report.channelIcon;
                entity['style'] = report;
                report = true;
                entity['autoStatusCutout'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        var _closure1_slot18 = entity;
        tango = function(argFoo, argBar) { // Original name: renderChannelIconRaw
            tango = _closure1_slot11;
            zulu = _closure1_slot20;
            mike = {};
            entity = argFoo;
            mike['icon'] = entity;
            entity = argBar;
            mike['IconComponent'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        var _closure1_slot19 = tango;
        entity = function(argFoo) { // Original name: ChannelIconRaw
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                options = entity.icon;
                report = entity.IconComponent;
                entity = _closure1_slot14;
                tango = undefined;
                golf = entity.bind(tango)();
                entity = null;
                if(!(entity == report)) { _fun00010_ip = 112; continue _fun00009 }
 33:
                oscar = _closure1_slot11;
                offset = _closure1_slot1;
                yankee = _closure1_slot2;
                verify = 13;
                entity = yankee[verify];
                zulu = offset.bind(tango)(entity);
                entity = {};
                verify = yankee[verify];
                verify = offset.bind(tango)(verify);
                verify = verify.Sizes;
                verify = verify.SMALL_20;
                entity['size'] = verify;
                entity['source'] = options;
                golf = golf.guildChannelIcon;
                golf = golf.tintColor;
                entity['color'] = golf;
                entity = oscar.bind(tango)(zulu, entity);
                _fun00010_ip = 136; continue _fun00009;
 112:
                zulu = _closure1_slot11;
                mike = {'size': 'sm', 'color': 'text-primary'};
                entity = zulu.bind(tango)(report, mike);
 136:
                return entity;
            }
        };
        var _closure1_slot20 = entity;
        entity = function(argFoo) { // Original name: ParentChannelSubTitle
            entity = argFoo;
            verify = entity.channel;
            entity = _closure1_slot14;
            tango = undefined;
            offset = entity.bind(tango)();
            zulu = _closure1_slot11;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            entity = 12;
            entity = options[entity];
            entity = golf.bind(tango)(entity);
            mike = entity.Text;
            entity = {'lineClamp': 1, 'accessibilityLabel': null, 'maxFontSizeMultiplier': 2, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            oscar = 19;
            yankee = options[oscar];
            yankee = golf.bind(tango)(yankee);
            backup = yankee.intl;
            foxtrot = backup.formatToPlainString;
            oscar = options[oscar];
            oscar = golf.bind(tango)(oscar);
            oscar = oscar.t;
            romeo = oscar.BjYvHB;
            yankee = {};
            oscar = 20;
            kilo = options[oscar];
            result = golf.bind(tango)(kilo);
            output = result.computeChannelName;
            sizing = _closure1_slot9;
            kilo = _closure1_slot8;
            kilo = output.bind(result)(verify, sizing, kilo);
            yankee['channelName'] = kilo;
            yankee = foxtrot.bind(backup)(romeo, yankee);
            entity['accessibilityLabel'] = yankee;
            offset = offset.parentChannelName;
            entity['style'] = offset;
            oscar = options[oscar];
            options = golf.bind(tango)(oscar);
            golf = options.computeChannelName;
            oscar = _closure1_slot9;
            report = _closure1_slot8;
            report = golf.bind(options)(verify, oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        var _closure1_slot21 = entity;
        entity = function() { // Original name: EmptyIcon
            mike = _closure1_slot14;
            tango = undefined;
            report = mike.bind(tango)();
            zulu = _closure1_slot11;
            mike = _closure1_slot6;
            entity = {};
            report = report.channelIconWrapper;
            entity['style'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        var _closure1_slot22 = entity;
        entity = global;
        verify = entity.Object;
        options = verify.defineProperty;
        report = {};
        entity = true;
        report['value'] = entity;
        entity = '__esModule';
        entity = options.bind(verify)(zulu, entity, report);
        entity = 0;
        report = golf[entity];
        entity = undefined;
        report = romeo.bind(entity)(report);
        var _closure1_slot3 = report;
        report = 1;
        options = golf[report];
        report = argCorge;
        report = report.bind(entity)(options);
        var _closure1_slot4 = report;
        report = 2;
        report = golf[report];
        report = oscar.bind(entity)(report);
        options = report.Pressable;
        var _closure1_slot5 = options;
        report = report.View;
        var _closure1_slot6 = report;
        report = 3;
        report = golf[report];
        report = romeo.bind(entity)(report);
        var _closure1_slot7 = report;
        report = 4;
        report = golf[report];
        report = romeo.bind(entity)(report);
        var _closure1_slot8 = report;
        report = 5;
        report = golf[report];
        report = romeo.bind(entity)(report);
        var _closure1_slot9 = report;
        report = 6;
        report = golf[report];
        report = oscar.bind(entity)(report);
        report = report.ReadStateTypes;
        var _closure1_slot10 = report;
        report = 7;
        options = golf[report];
        options = oscar.bind(entity)(options);
        options = options.jsx;
        var _closure1_slot11 = options;
        options = golf[report];
        options = oscar.bind(entity)(options);
        options = options.Fragment;
        var _closure1_slot12 = options;
        report = golf[report];
        report = oscar.bind(entity)(report);
        report = report.jsxs;
        var _closure1_slot13 = report;
        report = 8;
        report = golf[report];
        verify = oscar.bind(entity)(report);
        options = verify.createStyles;
        report = {};
        foxtrot = 'center';
        offset = {'flex': 1, 'alignItems': 'center', 'flexShrink': 1, 'flexDirection': 'row', 'height': '100%', 'paddingEnd': 8};
        report['wrapper'] = offset;
        offset = {'flex': 1, 'flexShrink': 1, 'justifyContent': 'center'};
        report['channelContent'] = offset;
        offset = {'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 1};
        report['nameWithArrow'] = offset;
        offset = {'flexShrink': 1, 'fontSize': 18, 'lineHeight': 24};
        report['channelName'] = offset;
        offset = {'tintColor': null, 'flexShrink': 0, 'flexGrow': 0, 'marginTop': 2, 'marginLeft': 2};
        yankee = 9;
        backup = golf[yankee];
        backup = romeo.bind(entity)(backup);
        backup = backup.colors;
        backup = backup.INTERACTIVE_NORMAL;
        offset['tintColor'] = backup;
        report['arrowIcon'] = offset;
        offset = {'marginRight': 12, 'flexShrink': 0};
        report['channelIcon'] = offset;
        offset = {'width': 0, 'height': 0, 'opacity': 0, 'flexGrow': 0};
        report['hiddenPressable'] = offset;
        offset = {'width': 32, 'height': 32, 'justifyContent': 'center', 'alignItems': 'center'};
        report['channelIconWrapper'] = offset;
        offset = {};
        backup = golf[yankee];
        backup = romeo.bind(entity)(backup);
        backup = backup.colors;
        backup = backup.TEXT_PRIMARY;
        offset['tintColor'] = backup;
        report['guildChannelIcon'] = offset;
        offset = {'flexDirection': 'row', 'alignItems': null, 'gap': 4, 'paddingBottom': 6};
        backup = 10;
        backup = golf[backup];
        kilo = oscar.bind(entity)(backup);
        backup = kilo.isIOS;
        backup = backup.bind(kilo)();
        if(!backup) { _fun00002_ip = 601; continue _fun00001 }
 595:
        foxtrot = 'baseline';
 601:
        offset['alignItems'] = foxtrot;
        report['subTitleContainer'] = offset;
        offset = {'lineHeight': 16, 'flexShrink': 1};
        report['parentChannelName'] = offset;
        offset = {'paddingLeft': 8, 'paddingRight': 8};
        report['eventsActionButtonWithText'] = offset;
        offset = {'width': 8, 'height': 8};
        foxtrot = golf[yankee];
        foxtrot = romeo.bind(entity)(foxtrot);
        foxtrot = foxtrot.radii;
        foxtrot = foxtrot.xs;
        offset['borderRadius'] = foxtrot;
        yankee = golf[yankee];
        yankee = romeo.bind(entity)(yankee);
        yankee = yankee.colors;
        yankee = yankee.STATUS_POSITIVE;
        offset['backgroundColor'] = yankee;
        report['onlineIndicator'] = offset;
        report = options.bind(verify)(report);
        var _closure1_slot14 = report;
        report = 27;
        report = golf[report];
        golf = oscar.bind(entity)(report);
        oscar = golf.fileFinishedImporting;
        report = 'modules/main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx';
        report = oscar.bind(golf)(report);
        report = function(argFoo, argBar, argBaz) { // Original name: renderTitleWrapper
            tango = _closure1_slot11;
            zulu = _closure1_slot15;
            mike = {};
            entity = argBar;
            mike['onPress'] = entity;
            entity = argBaz;
            mike['pressAccessibilityLabel'] = entity;
            entity = argFoo;
            mike['children'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        zulu['renderTitleWrapper'] = report;
        report = function(argFoo, argBar, argBaz) { // Original name: renderChannelTitle
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = arguments[3];
                tango = undefined;
                if(!(report === tango)) { _fun00012_ip = 11; continue _fun00011 }
 9:
                report = false;
 11:
                zulu = _closure1_slot11;
                mike = _closure1_slot16;
                entity = {};
                oscar = argFoo;
                entity['title'] = oscar;
                oscar = argBar;
                entity['accessibleTitle'] = oscar;
                oscar = argBaz;
                entity['subtitle'] = oscar;
                entity['disableArrow'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['renderChannelTitle'] = report;
        report = function(argFoo) { // Original name: renderGroupDMIcon
            tango = _closure1_slot11;
            zulu = _closure1_slot17;
            mike = {};
            entity = argFoo;
            mike['channel'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        zulu['renderGroupDMIcon'] = report;
        report = function(argFoo, argBar, argBaz) { // Original name: renderUserAvatar
            tango = _closure1_slot11;
            zulu = _closure1_slot18;
            mike = {};
            entity = argFoo;
            mike['user'] = entity;
            entity = argBar;
            mike['status'] = entity;
            entity = argBaz;
            mike['isMobileOnline'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        zulu['renderUserAvatar'] = report;
        zulu['renderChannelIconRaw'] = tango;
        tango = function(argFoo, argBar) { // Original name: renderChannelIcon
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                golf = argFoo;
                options = argBar;
                tango = _closure1_slot19;
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                entity = 17;
                mike = oscar[entity];
                zulu = undefined;
                verify = report.bind(zulu)(mike);
                mike = verify.getChannelIconWithGuild;
                mike = mike.bind(verify)(golf, options);
                entity = oscar[entity];
                oscar = report.bind(zulu)(entity);
                report = oscar.getChannelIconComponent;
                entity = {};
                verify = null;
                offset = verify == options;
                verify = undefined;
                if(offset) { _fun00014_ip = 81; continue _fun00013 }
 75:
                verify = options.rulesChannelId;
 81:
                options = golf.id;
                options = verify === options;
                entity['isRulesChannel'] = options;
                entity = report.bind(oscar)(golf, entity);
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            }
        };
        zulu['renderChannelIcon'] = tango;
        tango = function(argFoo, argBar) { // Original name: renderMemberCountText
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscar = argFoo;
                romeo = argBar;
                options = arguments[2];
                tango = undefined;
                if(!(options === tango)) { _fun00016_ip = 17; continue _fun00015 }
 15:
                options = false;
 17:
                foxtrot = 'online';
                entity = 0;
                yankee = foxtrot;
                if(!(entity === oscar)) { _fun00016_ip = 43; continue _fun00015 }
 30:
                entity = null;
                yankee = foxtrot;
                if(!(entity !== romeo)) { _fun00016_ip = 43; continue _fun00015 }
 39:
                yankee = 'total';
 43:
                zulu = _closure1_slot13;
                mike = _closure1_slot12;
                entity = {};
                offset = _closure1_slot11;
                verify = _closure1_slot1;
                backup = _closure1_slot2;
                report = 18;
                report = backup[report];
                verify = verify.bind(tango)(report);
                report = {};
                report['type'] = yankee;
                if(!(foxtrot === yankee)) { _fun00016_ip = 93; continue _fun00015 }
 90:
                romeo = oscar;
 93:
                oscar = null;
                foxtrot = oscar != romeo;
                yankee = undefined;
                if(!foxtrot) { _fun00016_ip = 107; continue _fun00015 }
 104:
                yankee = romeo;
 107:
                report['count'] = yankee;
                yankee = 'text-muted';
                report['color'] = yankee;
                verify = offset.bind(tango)(verify, report);
                report = new Array(2);
                report[0] = verify;
                oscar = null;
                if(!options) { _fun00016_ip = 189; continue _fun00015 }
 140:
                verify = _closure1_slot11;
                options = _closure1_slot0;
                offset = _closure1_slot2;
                golf = 12;
                golf = offset[golf];
                golf = options.bind(tango)(golf);
                options = golf.Text;
                golf = {'variant': 'text-xs/medium', 'color': 'divider-subtle', 'children': '•'};
                oscar = verify.bind(tango)(options, golf);
 189:
                report[1] = oscar;
                entity['children'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['renderMemberCountText'] = tango;
        tango = function(argFoo) { // Original name: renderParentChannelSubTitle
            tango = _closure1_slot11;
            zulu = _closure1_slot21;
            mike = {};
            entity = argFoo;
            mike['channel'] = entity;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        zulu['renderParentChannelSubTitle'] = tango;
        tango = function() { // Original name: renderEmptyIcon
            tango = _closure1_slot11;
            zulu = _closure1_slot22;
            mike = undefined;
            entity = {};
            entity = tango.bind(mike)(zulu, entity);
            return entity;
        };
        zulu['renderEmptyIcon'] = tango;
        mike = function(argFoo) { // Original name: EventsActionButton
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = argFoo;
                offset = mike.guild;
                var _closure2_slot0 = offset;
                mike = _closure1_slot14;
                tango = undefined;
                oscar = mike.bind(tango)();
                yankee = _closure1_slot1;
                romeo = _closure1_slot2;
                mike = 21;
                mike = romeo[mike];
                zulu = yankee.bind(tango)(mike);
                mike = offset.id;
                mike = zulu.bind(tango)(mike);
                golf = mike.length;
                foxtrot = _closure1_slot0;
                mike = 22;
                mike = romeo[mike];
                verify = foxtrot.bind(tango)(mike);
                report = verify.useStateFromStores;
                mike = _closure1_slot7;
                zulu = new Array(1);
                zulu[0] = mike;
                mike = function() {
                    tango = _closure1_slot7;
                    zulu = tango.hasUnread;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = _closure1_slot10;
                    entity = entity.GUILD_EVENT;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                verify = report.bind(verify)(zulu, mike);
                report = _closure1_slot4;
                zulu = report.useCallback;
                mike = new Array(1);
                mike[0] = offset;
                entity = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 23;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.openGuildEventListActionSheet;
                    mike = _closure2_slot0;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                report = zulu.bind(report)(entity, mike);
                zulu = _closure1_slot11;
                entity = 24;
                entity = romeo[entity];
                mike = yankee.bind(tango)(entity);
                entity = {};
                offset = 25;
                offset = romeo[offset];
                offset = foxtrot.bind(tango)(offset);
                offset = offset.CalendarIcon;
                entity['IconComponent'] = offset;
                offset = 26;
                offset = romeo[offset];
                offset = yankee.bind(tango)(offset);
                entity['source'] = offset;
                entity['onPress'] = report;
                report = 0;
                if(!(!(golf > report))) { _fun00018_ip = 258; continue _fun00017 }
 201:
                foxtrot = _closure1_slot0;
                backup = _closure1_slot2;
                offset = 19;
                yankee = backup[offset];
                yankee = foxtrot.bind(tango)(yankee);
                romeo = yankee.intl;
                yankee = romeo.string;
                offset = backup[offset];
                offset = foxtrot.bind(tango)(offset);
                offset = offset.t;
                offset = offset.tlopTE;
                offset = yankee.bind(romeo)(offset);
                _fun00018_ip = 321; continue _fun00017;
 258:
                romeo = _closure1_slot0;
                kilo = _closure1_slot2;
                yankee = 19;
                foxtrot = kilo[yankee];
                foxtrot = romeo.bind(tango)(foxtrot);
                backup = foxtrot.intl;
                foxtrot = backup.formatToPlainString;
                yankee = kilo[yankee];
                yankee = romeo.bind(tango)(yankee);
                yankee = yankee.t;
                romeo = yankee.IBdqSk;
                yankee = {};
                yankee['number'] = golf;
                offset = foxtrot.bind(backup)(romeo, yankee);
 321:
                entity['accessibilityLabel'] = offset;
                entity['badge'] = verify;
                offset = golf > report;
                verify = undefined;
                if(!offset) { _fun00018_ip = 348; continue _fun00017 }
 339:
                offset = golf.toString;
                verify = offset.bind(golf)();
 348:
                entity['buttonText'] = verify;
                verify = _closure1_slot1;
                offset = _closure1_slot2;
                options = 9;
                options = offset[options];
                options = verify.bind(tango)(options);
                options = options.spacing;
                options = options.PX_4;
                entity['hitSlop'] = options;
                golf = golf > report;
                report = null;
                if(!golf) { _fun00018_ip = 404; continue _fun00017 }
 398:
                report = oscar.eventsActionButtonWithText;
 404:
                entity['style'] = report;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            }
        };
        zulu['EventsActionButton'] = mike;
        return entity;
    }
})();