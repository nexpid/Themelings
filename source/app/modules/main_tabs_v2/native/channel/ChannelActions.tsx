// app/modules/main_tabs_v2/native/channel/ChannelActions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ChannelActionButtons
        _fun78676: for(var _fun78676_ip = 0; ; ) switch(_fun78676_ip) {
 0:
            entity = argFoo;
            offset = entity.channel;
            var _closure2_slot0 = offset;
            entity = entity.screenIndex;
            var _closure2_slot1 = entity;
            mike = _closure1_slot14;
            tango = undefined;
            oscar = mike.bind(tango)();
            golf = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 10;
            mike = romeo[mike];
            mike = golf.bind(tango)(mike);
            verify = mike.bind(tango)(offset);
            options = _closure1_slot0;
            mike = 11;
            mike = romeo[mike];
            zulu = options.bind(tango)(mike);
            mike = zulu.useCanSearchForumPosts;
            zulu = mike.bind(zulu)(offset);
            mike = 12;
            mike = romeo[mike];
            yankee = options.bind(tango)(mike);
            mike = yankee.useThreadNotificationSetting;
            foxtrot = mike.bind(yankee)(offset);
            mike = _closure1_slot11;
            yankee = mike.NO_MESSAGES;
            mike = 13;
            mike = romeo[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.bind(tango)();
            golf = 14;
            golf = romeo[golf];
            backup = options.bind(tango)(golf);
            romeo = backup.useStateFromStores;
            golf = _closure1_slot4;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                tango = _closure1_slot4;
                zulu = tango.hasThreadsForChannel;
                entity = _closure2_slot0;
                mike = entity.guild_id;
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            options = romeo.bind(backup)(options, golf);
            golf = new Array(0);
            var _closure2_slot2 = golf;
            backup = offset.type;
            romeo = _closure1_slot8;
            romeo = romeo.GUILD_DIRECTORY;
            if(!(romeo !== backup)) { _fun78676_ip = 728; continue _fun78676 }
 210:
            romeo = _closure1_slot8;
            romeo = romeo.GUILD_FORUM;
            if(!(romeo !== backup)) { _fun78676_ip = 592; continue _fun78676 }
 227:
            romeo = _closure1_slot8;
            romeo = romeo.GUILD_MEDIA;
            if(!(romeo !== backup)) { _fun78676_ip = 592; continue _fun78676 }
 244:
            romeo = _closure1_slot8;
            romeo = romeo.PUBLIC_THREAD;
            if(!(romeo !== backup)) { _fun78676_ip = 425; continue _fun78676 }
 261:
            romeo = _closure1_slot8;
            romeo = romeo.PRIVATE_THREAD;
            if(!(romeo !== backup)) { _fun78676_ip = 425; continue _fun78676 }
 278:
            romeo = _closure1_slot8;
            romeo = romeo.ANNOUNCEMENT_THREAD;
            if(!(romeo !== backup)) { _fun78676_ip = 425; continue _fun78676 }
 295:
            backup = golf.push;
            romeo = {};
            sizing = _closure1_slot1;
            echo = _closure1_slot2;
            kilo = 15;
            kilo = echo[kilo];
            kilo = sizing.bind(tango)(kilo);
            romeo['source'] = kilo;
            result = _closure1_slot0;
            kilo = 16;
            kilo = echo[kilo];
            kilo = result.bind(tango)(kilo);
            kilo = kilo.MagnifyingGlassIcon;
            romeo['IconComponent'] = kilo;
            kilo = function() { // Original name: onPress
                _fun78681: for(var _fun78681_ip = 0; ; ) switch(_fun78681_ip) {
 0:
                    report = _closure1_slot7;
                    entity = _closure2_slot0;
                    tango = entity.id;
                    entity = undefined;
                    zulu = true;
                    zulu = report.bind(entity)(tango, zulu);
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 24;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.isIOS;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun78681_ip = 123; continue _fun78681 }
 62:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 25;
                    zulu = report[zulu];
                    golf = tango.bind(entity)(zulu);
                    report = golf.getChatInputRef;
                    zulu = _closure2_slot0;
                    tango = zulu.id;
                    zulu = _closure2_slot1;
                    tango = report.bind(golf)(tango, zulu);
                    zulu = null;
                    if(!(zulu != tango)) { _fun78681_ip = 123; continue _fun78681 }
 113:
                    zulu = tango.blur;
                    zulu = zulu.bind(tango)();
 123:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 26;
                    zulu = report[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.getIsSwipeToMemberListExperimentEnabled;
                    golf = 'channel-header-search';
                    zulu = zulu.bind(tango)(golf);
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    if(zulu) { _fun78681_ip = 263; continue _fun78681 }
 171:
                    zulu = 28;
                    zulu = report[zulu];
                    options = tango.bind(entity)(zulu);
                    zulu = options.getRootNavigationRef;
                    offset = zulu.bind(options)();
                    zulu = null;
                    if(!(zulu != offset)) { _fun78681_ip = 261; continue _fun78681 }
 199:
                    zulu = offset.isReady;
                    zulu = zulu.bind(offset)();
                    if(!zulu) { _fun78681_ip = 261; continue _fun78681 }
 212:
                    verify = offset.navigate;
                    options = {'channelId': null, 'search': true, 'source': 'channel-header-search'};
                    zulu = _closure2_slot0;
                    zulu = zulu.id;
                    options['channelId'] = zulu;
                    zulu = 'sidebar';
                    zulu = verify.bind(offset)(zulu, options);
                    _fun78681_ip = 330; continue _fun78681;
 261:
                    return entity;
 263:
                    zulu = 27;
                    zulu = report[zulu];
                    zulu = tango.bind(entity)(zulu);
                    report = zulu.ComponentDispatch;
                    tango = report.dispatch;
                    mike = _closure1_slot10;
                    zulu = mike.SHOW_CHANNEL_DETAILS;
                    mike = {};
                    mike['source'] = golf;
                    golf = _closure2_slot0;
                    golf = golf.id;
                    mike['channelId'] = golf;
                    oscar = _closure2_slot1;
                    mike['screenIndex'] = oscar;
                    mike = tango.bind(report)(zulu, mike);
 330:
                    return entity;
                }
            };
            romeo['onPress'] = kilo;
            kilo = 18;
            sizing = echo[kilo];
            sizing = result.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kilo = echo[kilo];
            kilo = result.bind(tango)(kilo);
            kilo = kilo.t;
            kilo = kilo.5h0QOD;
            kilo = sizing.bind(output)(kilo);
            romeo['accessibilityLabel'] = kilo;
            romeo = backup.bind(golf)(romeo);
            _fun78676_ip = 853; continue _fun78676;
 425:
            romeo = offset.isForumPost;
            romeo = romeo.bind(offset)();
            if(romeo) { _fun78676_ip = 853; continue _fun78676 }
 441:
            romeo = _closure1_slot1;
            if(!(foxtrot !== yankee)) { _fun78676_ip = 462; continue _fun78676 }
 449:
            foxtrot = _closure1_slot2;
            yankee = 21;
            yankee = foxtrot[yankee];
            _fun78676_ip = 473; continue _fun78676;
 462:
            backup = _closure1_slot2;
            foxtrot = 20;
            yankee = backup[foxtrot];
 473:
            foxtrot = romeo.bind(tango)(yankee);
            romeo = golf.push;
            yankee = {};
            yankee['source'] = foxtrot;
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            foxtrot = 22;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.BellIcon;
            yankee['IconComponent'] = foxtrot;
            foxtrot = function() { // Original name: onPress
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 23;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.showThreadNotificationsBottomSheet;
                mike = _closure2_slot0;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            yankee['onPress'] = foxtrot;
            foxtrot = 18;
            backup = output[foxtrot];
            backup = sizing.bind(tango)(backup);
            kilo = backup.intl;
            backup = kilo.string;
            foxtrot = output[foxtrot];
            foxtrot = sizing.bind(tango)(foxtrot);
            foxtrot = foxtrot.t;
            foxtrot = foxtrot.HcoRu7;
            foxtrot = backup.bind(kilo)(foxtrot);
            yankee['accessibilityLabel'] = foxtrot;
            yankee = romeo.bind(golf)(yankee);
            _fun78676_ip = 853; continue _fun78676;
 592:
            if(!zulu) { _fun78676_ip = 853; continue _fun78676 }
 598:
            yankee = golf.push;
            zulu = {};
            foxtrot = _closure1_slot1;
            sizing = _closure1_slot2;
            romeo = 15;
            romeo = sizing[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            zulu['source'] = romeo;
            kilo = _closure1_slot0;
            romeo = 16;
            romeo = sizing[romeo];
            romeo = kilo.bind(tango)(romeo);
            romeo = romeo.MagnifyingGlassIcon;
            zulu['IconComponent'] = romeo;
            romeo = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 19;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.updateForumSearchQuery;
                mike = _closure2_slot0;
                zulu = mike.id;
                mike = '';
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            zulu['onPress'] = romeo;
            romeo = 18;
            foxtrot = sizing[romeo];
            foxtrot = kilo.bind(tango)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = sizing[romeo];
            romeo = kilo.bind(tango)(romeo);
            romeo = romeo.t;
            romeo = romeo.5h0QOD;
            romeo = foxtrot.bind(backup)(romeo);
            zulu['accessibilityLabel'] = romeo;
            zulu = yankee.bind(golf)(zulu);
            _fun78676_ip = 853; continue _fun78676;
 728:
            yankee = golf.push;
            zulu = {};
            foxtrot = _closure1_slot1;
            sizing = _closure1_slot2;
            romeo = 15;
            romeo = sizing[romeo];
            romeo = foxtrot.bind(tango)(romeo);
            zulu['source'] = romeo;
            kilo = _closure1_slot0;
            romeo = 16;
            romeo = sizing[romeo];
            romeo = kilo.bind(tango)(romeo);
            romeo = romeo.MagnifyingGlassIcon;
            zulu['IconComponent'] = romeo;
            romeo = function() { // Original name: onPress
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.open;
                mike = {};
                report = _closure2_slot0;
                mike['channel'] = report;
                mike = zulu.bind(tango)(mike);
                return entity;
            };
            zulu['onPress'] = romeo;
            romeo = 18;
            foxtrot = sizing[romeo];
            foxtrot = kilo.bind(tango)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = sizing[romeo];
            romeo = kilo.bind(tango)(romeo);
            romeo = romeo.t;
            romeo = romeo.5h0QOD;
            romeo = foxtrot.bind(backup)(romeo);
            zulu['accessibilityLabel'] = romeo;
            zulu = yankee.bind(golf)(zulu);
 853:
            if(!mike) { _fun78676_ip = 867; continue _fun78676 }
 856:
            yankee = golf.length;
            zulu = 0;
            mike = zulu !== yankee;
 867:
            if(mike) { _fun78676_ip = 996; continue _fun78676 }
 873:
            zulu = {};
            zulu['channel'] = offset;
            zulu['isChannelNSFWGated'] = verify;
            zulu['channelHasThreads'] = options;
            offset = zulu.channel;
            verify = zulu.isChannelNSFWGated;
            yankee = zulu.channelHasThreads;
            romeo = _closure1_slot5;
            options = romeo.has;
            zulu = offset.type;
            zulu = options.bind(romeo)(zulu);
            options = !zulu;
            if(!options) { _fun78676_ip = 934; continue _fun78676 }
 931:
            options = yankee;
 934:
            if(!options) { _fun78676_ip = 965; continue _fun78676 }
 937:
            yankee = _closure1_slot9;
            foxtrot = yankee.GUILD_THREADS_ONLY;
            romeo = foxtrot.has;
            yankee = offset.type;
            yankee = romeo.bind(foxtrot)(yankee);
            options = !yankee;
 965:
            if(!zulu) { _fun78676_ip = 971; continue _fun78676 }
 968:
            zulu = !verify;
 971:
            if(!zulu) { _fun78676_ip = 987; continue _fun78676 }
 974:
            verify = offset.isForumLikeChannel;
            verify = verify.bind(offset)();
            zulu = !verify;
 987:
            if(!zulu) { _fun78676_ip = 993; continue _fun78676 }
 990:
            zulu = options;
 993:
            mike = !zulu;
 996:
            if(mike) { _fun78676_ip = 1128; continue _fun78676 }
 1002:
            zulu = golf.unshift;
            mike = {};
            verify = _closure1_slot1;
            romeo = _closure1_slot2;
            options = 29;
            options = romeo[options];
            options = verify.bind(tango)(options);
            mike['source'] = options;
            yankee = _closure1_slot0;
            options = 30;
            options = romeo[options];
            options = yankee.bind(tango)(options);
            options = options.ThreadIcon;
            mike['IconComponent'] = options;
            options = function() { // Original name: onPress
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 31;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike['onPress'] = options;
            options = 18;
            verify = romeo[options];
            verify = yankee.bind(tango)(verify);
            offset = verify.intl;
            verify = offset.string;
            options = romeo[options];
            options = yankee.bind(tango)(options);
            options = options.t;
            options = options.B2panJ;
            options = verify.bind(offset)(options);
            mike['accessibilityLabel'] = options;
            mike = zulu.bind(golf)(mike);
 1128:
            zulu = _closure1_slot13;
            mike = _closure1_slot3;
            entity = {};
            oscar = oscar.actionWrapper;
            entity['style'] = oscar;
            oscar = golf.map;
            report = function(argFoo, argBar) {
                report = argFoo;
                entity = _closure2_slot2;
                mike = entity.length;
                entity = 1;
                golf = mike - entity;
                tango = _closure1_slot12;
                mike = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 32;
                entity = zulu[entity];
                zulu = undefined;
                mike = mike.bind(zulu)(entity);
                entity = {};
                oscar = argBar;
                oscar = oscar === golf;
                entity['noMargin'] = oscar;
                verify = entity;
                options = report;
                oscar = copyDataProperties(verify, options);
                oscar = report.accessibilityLabel;
                report = 'key';
                entity[report] = oscar;
                entity = tango.bind(zulu)(mike, entity);
                return entity;
            };
            report = oscar.bind(golf)(report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: WrappedChannelNavButtons
        _fun78684: for(var _fun78684_ip = 0; ; ) switch(_fun78684_ip) {
 0:
            mike = argFoo;
            zulu = mike.channelId;
            var _closure2_slot0 = zulu;
            oscar = mike.screenIndex;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 14;
            zulu = report[zulu];
            report = undefined;
            golf = tango.bind(report)(zulu);
            tango = golf.useStateFromStores;
            options = _closure1_slot6;
            zulu = new Array(1);
            zulu[0] = options;
            entity = function() {
                zulu = _closure1_slot6;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = tango.bind(golf)(zulu, entity);
            tango = null;
            zulu = tango == golf;
            entity = null;
            if(zulu) { _fun78684_ip = 161; continue _fun78684 }
 86:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 33;
            zulu = verify[zulu];
            verify = options.bind(report)(zulu);
            options = verify.shouldNSFWGateGuild;
            offset = tango == golf;
            zulu = undefined;
            if(offset) { _fun78684_ip = 126; continue _fun78684 }
 121:
            zulu = golf.guild_id;
 126:
            zulu = options.bind(verify)(zulu);
            entity = null;
            if(zulu) { _fun78684_ip = 161; continue _fun78684 }
 136:
            tango = _closure1_slot13;
            zulu = _closure1_slot15;
            mike = {};
            mike['channel'] = golf;
            mike['screenIndex'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 161:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    tango = 0;
    verify = oscar[tango];
    golf = argCorge;
    entity = undefined;
    golf = golf.bind(entity)(verify);
    golf = 1;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.View;
    var _closure1_slot3 = golf;
    golf = 2;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = options.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.setIsChannelDetailsSearchActive;
    var _closure1_slot7 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    options = golf.ChannelTypes;
    var _closure1_slot8 = options;
    options = golf.ChannelTypesSets;
    var _closure1_slot9 = options;
    golf = golf.ComponentActions;
    var _closure1_slot10 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.ThreadMemberFlags;
    var _closure1_slot11 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.createElement;
    var _closure1_slot12 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flexShrink': 0, 'flexDirection': 'row', 'alignItems': 'center'};
    tango['actionWrapper'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot14 = tango;
    tango = 36;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/channel/ChannelActions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ChannelActions
        _fun78686: for(var _fun78686_ip = 0; ; ) switch(_fun78686_ip) {
 0:
            mike = argFoo;
            verify = mike.channelId;
            var _closure2_slot0 = verify;
            offset = mike.screenIndex;
            yankee = mike.containerStyle;
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            tango = 14;
            report = zulu[tango];
            tango = undefined;
            options = mike.bind(tango)(report);
            golf = options.useStateFromStoresObject;
            romeo = _closure1_slot6;
            report = new Array(1);
            report[0] = romeo;
            entity = function() {
                _fun78687: for(var _fun78687_ip = 0; ; ) switch(_fun78687_ip) {
 0:
                    entity = {};
                    oscar = _closure1_slot6;
                    zulu = oscar.getChannel;
                    mike = _closure2_slot0;
                    options = zulu.bind(oscar)(mike);
                    mike = null;
                    oscar = mike == options;
                    golf = undefined;
                    if(oscar) { _fun78687_ip = 47; continue _fun78687 }
 37:
                    oscar = options.isMultiUserDM;
                    golf = oscar.bind(options)();
 47:
                    oscar = mike != golf;
                    if(!oscar) { _fun78687_ip = 57; continue _fun78687 }
 54:
                    oscar = golf;
 57:
                    entity['isMultiUserDM'] = oscar;
                    oscar = _closure1_slot6;
                    report = oscar.getChannel;
                    tango = _closure2_slot0;
                    report = report.bind(oscar)(tango);
                    tango = mike == report;
                    zulu = undefined;
                    if(tango) { _fun78687_ip = 99; continue _fun78687 }
 89:
                    tango = report.isDM;
                    zulu = tango.bind(report)();
 99:
                    mike = mike != zulu;
                    if(!mike) { _fun78687_ip = 109; continue _fun78687 }
 106:
                    mike = zulu;
 109:
                    entity['isDM'] = mike;
                    return entity;
                }
            };
            entity = golf.bind(options)(report, entity);
            report = entity.isMultiUserDM;
            golf = entity.isDM;
            entity = 11;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.useHasForumSearchQuery;
            options = entity.bind(mike)(verify);
            zulu = _closure1_slot13;
            mike = _closure1_slot3;
            entity = {};
            entity['style'] = yankee;
            if(options) { _fun78686_ip = 205; continue _fun78686 }
 134:
            if(golf) { _fun78686_ip = 167; continue _fun78686 }
 137:
            if(report) { _fun78686_ip = 167; continue _fun78686 }
 140:
            options = _closure1_slot13;
            golf = _closure1_slot16;
            report = {};
            report['channelId'] = verify;
            report['screenIndex'] = offset;
            report = options.bind(tango)(golf, report);
            _fun78686_ip = 203; continue _fun78686;
 167:
            offset = _closure1_slot13;
            options = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 35;
            golf = yankee[golf];
            options = options.bind(tango)(golf);
            golf = {};
            golf['channelId'] = verify;
            report = offset.bind(tango)(options, golf);
 203:
            _fun78686_ip = 247; continue _fun78686;
 205:
            options = _closure1_slot13;
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            oscar = 34;
            oscar = offset[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.ForumChannelCloseSearchButton;
            oscar = {};
            oscar['channelId'] = verify;
            report = options.bind(tango)(golf, oscar);
 247:
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();