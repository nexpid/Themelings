// app/modules/channel/native/ChannelLongPressActionSheet.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: handleVoiceOrStageChannelConnectPress
        entity = undefined;
        tango = _closure1_slot29;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _handleVoiceOrStageChannelConnectPress
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun86187: for(var _fun86187_ip = 0; ; ) switch(_fun86187_ip) {
 0:
                    StartGenerator();
                    report = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun86187_ip = 147; continue _fun86187 }
 13:
                    mike = report.isGuildStageVoice;
                    tango = mike.bind(report)();
                    golf = _closure1_slot0;
                    mike = _closure1_slot2;
                    zulu = 18;
                    oscar = mike[zulu];
                    zulu = undefined;
                    oscar = golf.bind(zulu)(oscar);
                    if(tango) { _fun86187_ip = 102; continue _fun86187 }
 51:
                    tango = 19;
                    golf = mike[tango];
                    tango = mike.paths;
                    tango = oscar.bind(zulu)(golf, tango);
                    SaveGenerator(address=73);
 71:
                    return tango;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(golf) { _fun86187_ip = 99; continue _fun86187 }
 79:
                    options = tango.openGuildVoiceModal;
                    golf = 'Channel List';
                    golf = options.bind(zulu)(report, golf);
                    _fun86187_ip = 141; continue _fun86187;
 99:
                    return tango;
 102:
                    tango = 17;
                    tango = mike[tango];
                    mike = mike.paths;
                    mike = oscar.bind(zulu)(tango, mike);
                    SaveGenerator(address=124);
 122:
                    return mike;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun86187_ip = 144; continue _fun86187 }
 130:
                    tango = mike.connectAndOpen;
                    tango = tango.bind(zulu)(report);
 141:
                    return zulu;
 144:
                    return mike;
 147:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot29 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: ChannelLongPressActionSheetConnected
        _fun86188: for(var _fun86188_ip = 0; ; ) switch(_fun86188_ip) {
 0:
            entity = argFoo;
            romeo = entity.channel;
            var _closure2_slot0 = romeo;
            mike = entity.onClose;
            var _closure2_slot1 = mike;
            tango = undefined;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            oscar = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 60;
            zulu = verify[entity];
            report = oscar.bind(tango)(zulu);
            zulu = 61;
            zulu = verify[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.CHANNEL_LONG_PRESS_MENU;
            zulu = report.bind(tango)(zulu);
            report = zulu.analyticsLocations;
            zulu = romeo.getGuildId;
            golf = zulu.bind(romeo)();
            var _closure2_slot2 = golf;
            options = _closure1_slot0;
            zulu = 62;
            oscar = verify[zulu];
            foxtrot = options.bind(tango)(oscar);
            yankee = foxtrot.useStateFromStores;
            oscar = _closure1_slot15;
            offset = new Array(1);
            offset[0] = oscar;
            oscar = function() {
                zulu = _closure1_slot15;
                mike = zulu.getGuild;
                entity = _closure2_slot2;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            output = yankee.bind(foxtrot)(offset, oscar);
            oscar = verify[zulu];
            foxtrot = options.bind(tango)(oscar);
            yankee = foxtrot.useStateFromStoresObject;
            oscar = _closure1_slot16;
            offset = new Array(1);
            offset[0] = oscar;
            oscar = function() {
                entity = {};
                oscar = _closure1_slot16;
                tango = oscar.can;
                zulu = _closure1_slot23;
                zulu = zulu.MANAGE_CHANNELS;
                report = _closure2_slot0;
                zulu = tango.bind(oscar)(zulu, report);
                entity['canManageChannel'] = zulu;
                oscar = _closure1_slot16;
                tango = oscar.can;
                zulu = _closure1_slot23;
                zulu = zulu.CREATE_INSTANT_INVITE;
                zulu = tango.bind(oscar)(zulu, report);
                entity['canCreateInstantInvite'] = zulu;
                tango = _closure1_slot16;
                zulu = tango.can;
                mike = _closure1_slot23;
                mike = mike.CONNECT;
                mike = zulu.bind(tango)(mike, report);
                entity['canConnect'] = mike;
                return entity;
            };
            oscar = yankee.bind(foxtrot)(offset, oscar);
            sierra = oscar.canManageChannel;
            status = oscar.canCreateInstantInvite;
            target = oscar.canConnect;
            oscar = 63;
            oscar = verify[oscar];
            verify = options.bind(tango)(oscar);
            options = verify.useOptInEnabledForGuild;
            oscar = null;
            if(!(oscar == golf)) { _fun86188_ip = 232; continue _fun86188 }
 228:
            golf = _closure1_slot22;
 232:
            control = options.bind(verify)(golf);
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            golf = offset[zulu];
            foxtrot = verify.bind(tango)(golf);
            yankee = foxtrot.useStateFromStoresObject;
            golf = _closure1_slot18;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                _fun86191: for(var _fun86191_ip = 0; ; ) switch(_fun86191_ip) {
 0:
                    entity = {};
                    options = _closure1_slot18;
                    golf = options.isChannelOptedIn;
                    oscar = _closure2_slot2;
                    tango = _closure2_slot0;
                    report = tango.id;
                    report = golf.bind(options)(oscar, report);
                    entity['isOptedIn'] = report;
                    tango = tango.parent_id;
                    golf = null;
                    tango = golf != tango;
                    if(!tango) { _fun86191_ip = 87; continue _fun86191 }
 57:
                    verify = _closure1_slot18;
                    options = verify.isChannelOptedIn;
                    oscar = _closure2_slot2;
                    report = _closure2_slot0;
                    report = report.parent_id;
                    tango = options.bind(verify)(oscar, report);
 87:
                    entity['isParentOptedIn'] = tango;
                    report = _closure1_slot18;
                    tango = report.isFavorite;
                    oscar = _closure2_slot2;
                    if(!(golf == oscar)) { _fun86191_ip = 116; continue _fun86191 }
 110:
                    zulu = _closure1_slot24;
                    _fun86191_ip = 120; continue _fun86191;
 116:
                    zulu = _closure2_slot2;
 120:
                    mike = _closure2_slot0;
                    mike = mike.id;
                    mike = tango.bind(report)(zulu, mike);
                    entity['isFavorited'] = mike;
                    return entity;
                }
            };
            golf = yankee.bind(foxtrot)(options, golf);
            source = golf.isOptedIn;
            update = golf.isParentOptedIn;
            echo = golf.isFavorited;
            golf = offset[zulu];
            foxtrot = verify.bind(tango)(golf);
            yankee = foxtrot.useStateFromStores;
            golf = _closure1_slot18;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                tango = _closure1_slot18;
                zulu = tango.isChannelMuted;
                mike = _closure2_slot2;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            papa = yankee.bind(foxtrot)(options, golf);
            golf = offset[zulu];
            foxtrot = verify.bind(tango)(golf);
            yankee = foxtrot.useStateFromStores;
            golf = _closure1_slot7;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                _fun86193: for(var _fun86193_ip = 0; ; ) switch(_fun86193_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun86193_ip = 48; continue _fun86193 }
 16:
                    report = _closure1_slot7;
                    tango = report.hasThreadsForChannel;
                    zulu = _closure2_slot2;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 48:
                    return entity;
                }
            };
            context = yankee.bind(foxtrot)(options, golf);
            golf = offset[zulu];
            foxtrot = verify.bind(tango)(golf);
            yankee = foxtrot.useStateFromStores;
            golf = _closure1_slot12;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                zulu = _closure1_slot12;
                mike = zulu.isCollapsed;
                entity = _closure2_slot0;
                entity = entity.parent_id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            config = yankee.bind(foxtrot)(options, golf);
            golf = offset[zulu];
            foxtrot = verify.bind(tango)(golf);
            yankee = foxtrot.useStateFromStores;
            golf = _closure1_slot14;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                zulu = _closure1_slot14;
                mike = zulu.isCollapsed;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sequence = yankee.bind(foxtrot)(options, golf);
            golf = offset[zulu];
            foxtrot = verify.bind(tango)(golf);
            yankee = foxtrot.useStateFromStores;
            golf = _closure1_slot6;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                zulu = _closure1_slot6;
                mike = zulu.isLive;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            vacuum = yankee.bind(foxtrot)(options, golf);
            yankee = _closure1_slot1;
            golf = 25;
            golf = offset[golf];
            golf = yankee.bind(tango)(golf);
            options = true;
            backup = golf.bind(tango)(romeo, options);
            golf = 64;
            golf = offset[golf];
            golf = yankee.bind(tango)(golf);
            record = golf.bind(tango)(romeo);
            golf = 65;
            golf = offset[golf];
            golf = verify.bind(tango)(golf);
            verify = golf.DeveloperMode;
            golf = verify.useSetting;
            verify = golf.bind(verify)();
            _closure2_slot3 = verify;
            if(!(oscar == output)) { _fun86188_ip = 642; continue _fun86188 }
 575:
            yankee = _closure1_slot26;
            offset = _closure1_slot1;
            lima = _closure1_slot2;
            foxtrot = 67;
            golf = lima[foxtrot];
            offset = offset.bind(tango)(golf);
            golf = {};
            kilo = _closure1_slot0;
            foxtrot = lima[foxtrot];
            foxtrot = kilo.bind(tango)(foxtrot);
            foxtrot = foxtrot.AvatarSizes;
            foxtrot = foxtrot.LARGE;
            golf['size'] = foxtrot;
            golf['channel'] = romeo;
            kilo = yankee.bind(tango)(offset, golf);
            _fun86188_ip = 707; continue _fun86188;
 642:
            yankee = _closure1_slot26;
            offset = _closure1_slot1;
            lima = _closure1_slot2;
            foxtrot = 66;
            golf = lima[foxtrot];
            offset = offset.bind(tango)(golf);
            golf = {};
            golf['guild'] = output;
            output = _closure1_slot0;
            foxtrot = lima[foxtrot];
            foxtrot = output.bind(tango)(foxtrot);
            foxtrot = foxtrot.GuildIconSizes;
            foxtrot = foxtrot.LARGE;
            golf['size'] = foxtrot;
            kilo = yankee.bind(tango)(offset, golf);
 707:
            golf = _closure1_slot0;
            offset = _closure1_slot2;
            yankee = offset[zulu];
            lima = golf.bind(tango)(yankee);
            output = lima.useStateFromStores;
            yankee = _closure1_slot19;
            foxtrot = new Array(1);
            foxtrot[0] = yankee;
            yankee = function() {
                mike = _closure1_slot19;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            lima = output.bind(lima)(foxtrot, yankee);
            zulu = offset[zulu];
            output = golf.bind(tango)(zulu);
            foxtrot = output.useStateFromStoresObject;
            zulu = _closure1_slot18;
            yankee = new Array(1);
            yankee[0] = zulu;
            zulu = function() {
                entity = {};
                oscar = _closure1_slot18;
                report = oscar.isMessagesFavorite;
                mike = _closure2_slot0;
                tango = mike.id;
                tango = report.bind(oscar)(tango);
                entity['isMessagesFavorited'] = tango;
                tango = _closure1_slot18;
                zulu = tango.isAddedToMessages;
                mike = mike.id;
                mike = zulu.bind(tango)(mike);
                entity['isAddedToMessages'] = mike;
                return entity;
            };
            zulu = foxtrot.bind(output)(yankee, zulu);
            output = zulu.isMessagesFavorited;
            yankee = zulu.isAddedToMessages;
            zulu = 68;
            zulu = offset[zulu];
            golf = golf.bind(tango)(zulu);
            zulu = golf.useVoiceActivityNotificationSettingsExperiment;
            foxtrot = zulu.bind(golf)(romeo);
            offset = oscar != lima;
            if(!offset) { _fun86188_ip = 862; continue _fun86188 }
 836:
            zulu = lima.isStaff;
            zulu = zulu.bind(lima)();
            if(zulu) { _fun86188_ip = 859; continue _fun86188 }
 849:
            golf = lima.isStaffPersonal;
            zulu = golf.bind(lima)();
 859:
            offset = zulu;
 862:
            golf = _closure1_slot0;
            lima = _closure1_slot2;
            zulu = 69;
            zulu = lima[zulu];
            golf = golf.bind(tango)(zulu);
            zulu = golf.useInappropriateConversationsTiers;
            lima = zulu.bind(golf)(romeo);
            golf = oscar == lima;
            zulu = undefined;
            if(golf) { _fun86188_ip = 908; continue _fun86188 }
 902:
            zulu = lima.isTier1;
 908:
            golf = oscar != zulu;
            if(!golf) { _fun86188_ip = 931; continue _fun86188 }
 915:
            zulu = oscar != lima;
            if(!zulu) { _fun86188_ip = 928; continue _fun86188 }
 922:
            zulu = lima.isTier1;
 928:
            golf = !zulu;
 931:
            whiskey = oscar == lima;
            zulu = undefined;
            if(whiskey) { _fun86188_ip = 946; continue _fun86188 }
 940:
            zulu = lima.isTier2;
 946:
            zulu = oscar != zulu;
            if(!zulu) { _fun86188_ip = 969; continue _fun86188 }
 953:
            oscar = oscar != lima;
            if(!oscar) { _fun86188_ip = 966; continue _fun86188 }
 960:
            oscar = lima.isTier2;
 966:
            zulu = !oscar;
 969:
            oscar = {};
            oscar['channel'] = romeo;
            oscar['canManageChannel'] = sierra;
            oscar['canCreateInstantInvite'] = status;
            oscar['canConnect'] = target;
            oscar['isMuted'] = papa;
            oscar['hasThreads'] = context;
            oscar['isNsfwGated'] = record;
            oscar['isInCollapsedCategory'] = config;
            oscar['isCollapsedVoiceChannel'] = sequence;
            oscar['isLiveStageChannel'] = vacuum;
            oscar['isOptInEnabled'] = control;
            oscar['isOptedIn'] = source;
            oscar['isParentOptedIn'] = update;
            oscar['isFavorited'] = echo;
            oscar['isMessagesFavorited'] = output;
            oscar['isInVoiceActivityNotificationExperiment'] = foxtrot;
            oscar['isAddedToMessages'] = yankee;
            oscar['isAddToMessagesEnabled'] = offset;
            oscar['canMarkAsTier1InappropriateConversation'] = golf;
            oscar['canMarkAsTier2InappropriateConversation'] = zulu;
            oscar['analyticsLocations'] = report;
            zulu = function(argFoo) { // Original name: getActionSheetButtons
                _fun86199: for(var _fun86199_ip = 0; ; ) switch(_fun86199_ip) {
 0:
                    entity = argFoo;
                    offset = entity.channel;
                    var _closure3_slot0 = offset;
                    mike = entity.canManageChannel;
                    control = entity.canCreateInstantInvite;
                    oscar = entity.canConnect;
                    echo = entity.isMuted;
                    var _closure3_slot1 = echo;
                    kilo = entity.hasThreads;
                    foxtrot = entity.isNsfwGated;
                    romeo = entity.isInCollapsedCategory;
                    backup = entity.isCollapsedVoiceChannel;
                    options = entity.isLiveStageChannel;
                    result = entity.isOptInEnabled;
                    status = entity.isOptedIn;
                    var _closure3_slot2 = status;
                    sierra = entity.isParentOptedIn;
                    record = entity.isFavorited;
                    var _closure3_slot3 = record;
                    sequence = entity.isMessagesFavorited;
                    var _closure3_slot4 = sequence;
                    sizing = entity.isInVoiceActivityNotificationExperiment;
                    update = entity.isAddedToMessages;
                    var _closure3_slot5 = update;
                    zulu = entity.isAddToMessagesEnabled;
                    source = entity.canMarkAsTier1InappropriateConversation;
                    output = entity.canMarkAsTier2InappropriateConversation;
                    entity = entity.analyticsLocations;
                    var _closure3_slot6 = entity;
                    yankee = undefined;
                    var _closure3_slot7 = yankee;
                    entity = new Array(0);
                    verify = {};
                    tango = 'dm';
                    verify['sectionKey'] = tango;
                    tango = new Array(0);
                    verify['buttons'] = tango;
                    tango = offset.isDM;
                    tango = tango.bind(offset)();
                    if(!tango) { _fun86199_ip = 418; continue _fun86199 }
 204:
                    vacuum = verify.buttons;
                    report = vacuum.push;
                    tango = {};
                    context = _closure1_slot0;
                    papa = _closure1_slot2;
                    config = 20;
                    target = papa[config];
                    target = context.bind(yankee)(target);
                    whiskey = target.intl;
                    lima = whiskey.string;
                    target = papa[config];
                    target = context.bind(yankee)(target);
                    target = target.t;
                    target = target.LYju5O;
                    target = lima.bind(whiskey)(target);
                    tango['label'] = target;
                    target = 21;
                    target = papa[target];
                    target = context.bind(yankee)(target);
                    target = target.UserCircleIcon;
                    tango['IconComponent'] = target;
                    target = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 22;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = {};
                        report = _closure3_slot0;
                        oscar = report.getRecipientId;
                        oscar = oscar.bind(report)();
                        mike['userId'] = oscar;
                        report = report.id;
                        mike['channelId'] = report;
                        tango = _closure3_slot6;
                        mike['sourceAnalyticsLocations'] = tango;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango['onPress'] = target;
                    tango = report.bind(vacuum)(tango);
                    vacuum = verify.buttons;
                    report = vacuum.push;
                    tango = {};
                    target = papa[config];
                    target = context.bind(yankee)(target);
                    lima = target.intl;
                    target = lima.string;
                    config = papa[config];
                    config = context.bind(yankee)(config);
                    config = config.t;
                    config = config.jsvgc3;
                    config = target.bind(lima)(config);
                    tango['label'] = config;
                    config = 23;
                    config = papa[config];
                    config = context.bind(yankee)(config);
                    config = config.UserMinusIcon;
                    tango['IconComponent'] = config;
                    config = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 24;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.closePrivateChannel;
                        mike = _closure3_slot0;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango['onPress'] = config;
                    tango = report.bind(vacuum)(tango);
 418:
                    tango = offset.isGroupDM;
                    tango = tango.bind(offset)();
                    if(!tango) { _fun86199_ip = 552; continue _fun86199 }
 431:
                    vacuum = verify.buttons;
                    report = vacuum.push;
                    tango = {};
                    context = _closure1_slot0;
                    papa = _closure1_slot2;
                    config = 20;
                    target = papa[config];
                    target = context.bind(yankee)(target);
                    lima = target.intl;
                    target = lima.string;
                    config = papa[config];
                    config = context.bind(yankee)(config);
                    config = config.t;
                    config = config.26C4oq;
                    config = target.bind(lima)(config);
                    tango['label'] = config;
                    config = 23;
                    config = papa[config];
                    config = context.bind(yankee)(config);
                    config = config.UserMinusIcon;
                    tango['IconComponent'] = config;
                    config = true;
                    tango['isDestructive'] = config;
                    config = function() { // Original name: onPress
                        _fun86202: for(var _fun86202_ip = 0; ; ) switch(_fun86202_ip) {
 0:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 25;
                            tango = mike[entity];
                            entity = undefined;
                            verify = zulu.bind(entity)(tango);
                            options = verify.computeChannelName;
                            report = _closure3_slot0;
                            golf = _closure1_slot19;
                            tango = _closure1_slot17;
                            yankee = options.bind(verify)(report, golf, tango);
                            verify = 20;
                            tango = mike[verify];
                            tango = zulu.bind(entity)(tango);
                            offset = tango.intl;
                            options = offset.formatToPlainString;
                            tango = mike[verify];
                            tango = zulu.bind(entity)(tango);
                            tango = tango.t;
                            golf = tango.hJ5Ap6;
                            tango = {};
                            tango['name'] = yankee;
                            tango = options.bind(offset)(golf, tango);
                            golf = mike[verify];
                            golf = zulu.bind(entity)(golf);
                            options = golf.intl;
                            golf = options.format;
                            mike = mike[verify];
                            mike = zulu.bind(entity)(mike);
                            mike = mike.t;
                            zulu = mike.SSIVOj;
                            mike = {};
                            mike['name'] = yankee;
                            golf = golf.bind(options)(zulu, mike);
                            mike = report.isManaged;
                            mike = mike.bind(report)();
                            options = tango;
                            if(!mike) { _fun86202_ip = 284; continue _fun86202 }
 174:
                            tango = _closure1_slot0;
                            mike = _closure1_slot2;
                            zulu = mike[verify];
                            zulu = tango.bind(entity)(zulu);
                            romeo = zulu.intl;
                            offset = romeo.formatToPlainString;
                            zulu = mike[verify];
                            zulu = tango.bind(entity)(zulu);
                            zulu = zulu.t;
                            report = zulu.hVGjER;
                            zulu = {};
                            zulu['name'] = yankee;
                            options = offset.bind(romeo)(report, zulu);
                            report = mike[verify];
                            report = tango.bind(entity)(report);
                            offset = report.intl;
                            report = offset.format;
                            mike = mike[verify];
                            mike = tango.bind(entity)(mike);
                            mike = mike.t;
                            tango = mike.IK1Qvr;
                            mike = {};
                            mike['name'] = yankee;
                            golf = report.bind(offset)(tango, mike);
 284:
                            zulu = _closure1_slot1;
                            report = _closure1_slot2;
                            mike = 26;
                            mike = report[mike];
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.show;
                            mike = {};
                            mike['title'] = options;
                            mike['body'] = golf;
                            options = _closure1_slot0;
                            oscar = report[verify];
                            oscar = options.bind(entity)(oscar);
                            offset = oscar.intl;
                            golf = offset.string;
                            oscar = report[verify];
                            oscar = options.bind(entity)(oscar);
                            oscar = oscar.t;
                            oscar = oscar.p89ACg;
                            oscar = golf.bind(offset)(oscar);
                            mike['confirmText'] = oscar;
                            oscar = report[verify];
                            oscar = options.bind(entity)(oscar);
                            golf = oscar.intl;
                            oscar = golf.string;
                            report = report[verify];
                            report = options.bind(entity)(report);
                            report = report.t;
                            report = report.gm1Ven;
                            report = oscar.bind(golf)(report);
                            mike['cancelText'] = report;
                            report = function() { // Original name: onConfirm
                                zulu = _closure1_slot1;
                                mike = _closure1_slot2;
                                entity = 24;
                                mike = mike[entity];
                                entity = undefined;
                                tango = zulu.bind(entity)(mike);
                                zulu = tango.closePrivateChannel;
                                mike = _closure3_slot0;
                                mike = mike.id;
                                mike = zulu.bind(tango)(mike);
                                return entity;
                            };
                            mike['onConfirm'] = report;
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    tango['onPress'] = config;
                    tango = report.bind(vacuum)(tango);
 552:
                    tango = verify.buttons;
                    report = tango.length;
                    tango = 0;
                    if(!(report > tango)) { _fun86199_ip = 579; continue _fun86199 }
 569:
                    report = entity.push;
                    report = report.bind(entity)(verify);
 579:
                    report = offset.getGuildId;
                    vacuum = report.bind(offset)();
                    _closure3_slot7 = vacuum;
                    config = _closure1_slot10;
                    report = offset.type;
                    report = config.bind(yankee)(report);
                    if(report) { _fun86199_ip = 623; continue _fun86199 }
 613:
                    config = offset.isCategory;
                    report = config.bind(offset)();
 623:
                    if(report) { _fun86199_ip = 636; continue _fun86199 }
 626:
                    config = offset.isForumLikeChannel;
                    report = config.bind(offset)();
 636:
                    if(!report) { _fun86199_ip = 773; continue _fun86199 }
 642:
                    config = entity.push;
                    report = {};
                    context = 'mark-as-read';
                    report['sectionKey'] = context;
                    papa = {};
                    target = _closure1_slot0;
                    lima = _closure1_slot2;
                    context = 20;
                    whiskey = lima[context];
                    whiskey = target.bind(yankee)(whiskey);
                    equality = whiskey.intl;
                    whiskey = equality.string;
                    context = lima[context];
                    context = target.bind(yankee)(context);
                    context = context.t;
                    context = context.e6RscX;
                    context = whiskey.bind(equality)(context);
                    papa['label'] = context;
                    context = 27;
                    context = lima[context];
                    context = target.bind(yankee)(context);
                    context = context.EyeIcon;
                    papa['IconComponent'] = context;
                    context = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 28;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.ackChannel;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    papa['onPress'] = context;
                    context = new Array(1);
                    context[0] = papa;
                    report['buttons'] = context;
                    report = config.bind(entity)(report);
 773:
                    report = {};
                    config = 'channel-actions';
                    report['sectionKey'] = config;
                    config = new Array(0);
                    report['buttons'] = config;
                    if(!control) { _fun86199_ip = 909; continue _fun86199 }
 798:
                    context = report.buttons;
                    config = context.push;
                    control = {};
                    target = _closure1_slot0;
                    lima = _closure1_slot2;
                    papa = 20;
                    whiskey = lima[papa];
                    whiskey = target.bind(yankee)(whiskey);
                    equality = whiskey.intl;
                    whiskey = equality.string;
                    papa = lima[papa];
                    papa = target.bind(yankee)(papa);
                    papa = papa.t;
                    papa = papa.VINpSE;
                    papa = whiskey.bind(equality)(papa);
                    control['label'] = papa;
                    papa = 29;
                    papa = lima[papa];
                    papa = target.bind(yankee)(papa);
                    papa = papa.GroupPlusIcon;
                    control['IconComponent'] = papa;
                    papa = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 30;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.showInstantInviteActionSheet;
                        zulu = _closure3_slot0;
                        mike = 'Context Menu';
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    control['onPress'] = papa;
                    control = config.bind(context)(control);
 909:
                    control = null;
                    control = control == vacuum;
                    if(control) { _fun86199_ip = 928; continue _fun86199 }
 918:
                    vacuum = offset.isThread;
                    control = vacuum.bind(offset)();
 928:
                    if(control) { _fun86199_ip = 1317; continue _fun86199 }
 934:
                    control = result;
                    if(!control) { _fun86199_ip = 953; continue _fun86199 }
 940:
                    vacuum = offset.isCategory;
                    vacuum = vacuum.bind(offset)();
                    control = !vacuum;
 953:
                    if(!control) { _fun86199_ip = 1094; continue _fun86199 }
 959:
                    config = report.buttons;
                    vacuum = config.push;
                    control = {};
                    lima = _closure1_slot0;
                    whiskey = _closure1_slot2;
                    context = 20;
                    papa = whiskey[context];
                    papa = lima.bind(yankee)(papa);
                    target = papa.intl;
                    papa = target.string;
                    context = whiskey[context];
                    context = lima.bind(yankee)(context);
                    context = context.t;
                    if(record) { _fun86199_ip = 1032; continue _fun86199 }
 1019:
                    record = context.N2c/Ul;
                    record = papa.bind(target)(record);
                    _fun86199_ip = 1043; continue _fun86199;
 1032:
                    context = context.z7I3gY;
                    record = papa.bind(target)(context);
 1043:
                    control['label'] = record;
                    context = _closure1_slot0;
                    papa = _closure1_slot2;
                    record = 31;
                    record = papa[record];
                    record = context.bind(yankee)(record);
                    record = record.StarIcon;
                    control['IconComponent'] = record;
                    record = function() { // Original name: onPress
                        _fun86206: for(var _fun86206_ip = 0; ; ) switch(_fun86206_ip) {
 0:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 32;
                            zulu = zulu[entity];
                            entity = undefined;
                            offset = tango.bind(entity)(zulu);
                            verify = offset.setIsFavorite;
                            kilo = _closure3_slot7;
                            zulu = _closure3_slot0;
                            backup = zulu.id;
                            zulu = _closure3_slot3;
                            foxtrot = !zulu;
                            tango = {};
                            yankee = _closure1_slot20;
                            yankee = yankee.CHANNEL_ACTION_SHEET;
                            tango['section'] = yankee;
                            sizing = offset;
                            romeo = tango;
                            tango = sizing[verify](kilo, backup, foxtrot, romeo, yankee);
                            if(zulu) { _fun86206_ip = 234; continue _fun86206 }
 86:
                            zulu = _closure1_slot0;
                            tango = _closure1_slot2;
                            mike = 33;
                            mike = tango[mike];
                            zulu = zulu.bind(entity)(mike);
                            mike = zulu.getRootNavigationRef;
                            tango = mike.bind(zulu)();
                            oscar = null;
                            if(!(oscar != tango)) { _fun86206_ip = 234; continue _fun86206 }
 122:
                            mike = tango.getCurrentRoute;
                            mike = mike.bind(tango)();
                            zulu = oscar == mike;
                            golf = undefined;
                            if(zulu) { _fun86206_ip = 146; continue _fun86206 }
 141:
                            golf = mike.name;
 146:
                            mike = tango.getCurrentRoute;
                            mike = mike.bind(tango)();
                            options = oscar == mike;
                            zulu = undefined;
                            if(options) { _fun86206_ip = 171; continue _fun86206 }
 165:
                            zulu = mike.params;
 171:
                            mike = 'guilds';
                            mike = mike === golf;
                            if(!mike) { _fun86206_ip = 204; continue _fun86206 }
 182:
                            golf = oscar == zulu;
                            oscar = undefined;
                            if(golf) { _fun86206_ip = 196; continue _fun86206 }
 191:
                            oscar = zulu.guildId;
 196:
                            zulu = _closure3_slot7;
                            mike = oscar === zulu;
 204:
                            if(!mike) { _fun86206_ip = 234; continue _fun86206 }
 207:
                            zulu = tango.setParams;
                            mike = {};
                            report = _closure3_slot0;
                            report = report.id;
                            mike['jumpToChannelId'] = report;
                            mike = zulu.bind(tango)(mike);
 234:
                            return entity;
                        }
                    };
                    control['onPress'] = record;
                    control = vacuum.bind(config)(control);
 1094:
                    if(!result) { _fun86199_ip = 1317; continue _fun86199 }
 1100:
                    vacuum = report.buttons;
                    control = vacuum.push;
                    result = {};
                    record = _closure1_slot0;
                    context = _closure1_slot2;
                    config = 20;
                    papa = context[config];
                    papa = record.bind(yankee)(papa);
                    target = papa.intl;
                    papa = target.string;
                    config = context[config];
                    config = record.bind(yankee)(config);
                    config = config.t;
                    if(sierra) { _fun86199_ip = 1263; continue _fun86199 }
 1160:
                    if(status) { _fun86199_ip = 1176; continue _fun86199 }
 1163:
                    sierra = config.9mysCg;
                    sierra = papa.bind(target)(sierra);
                    _fun86199_ip = 1187; continue _fun86199;
 1176:
                    lima = config.3zySTE;
                    sierra = papa.bind(target)(lima);
 1187:
                    result['label'] = sierra;
                    lima = _closure1_slot0;
                    whiskey = _closure1_slot2;
                    if(status) { _fun86199_ip = 1222; continue _fun86199 }
 1202:
                    status = 35;
                    status = whiskey[status];
                    status = lima.bind(yankee)(status);
                    status = status.PlusLargeIcon;
                    _fun86199_ip = 1240; continue _fun86199;
 1222:
                    sierra = 34;
                    sierra = whiskey[sierra];
                    sierra = lima.bind(yankee)(sierra);
                    status = sierra.XSmallIcon;
 1240:
                    result['IconComponent'] = status;
                    status = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 32;
                        mike = mike[entity];
                        entity = undefined;
                        golf = zulu.bind(entity)(mike);
                        oscar = golf.setOptInChannel;
                        romeo = _closure3_slot7;
                        zulu = _closure3_slot0;
                        yankee = zulu.id;
                        mike = _closure3_slot2;
                        offset = !mike;
                        mike = {};
                        options = _closure1_slot20;
                        options = options.CHANNEL_ACTION_SHEET;
                        mike['section'] = options;
                        foxtrot = golf;
                        verify = mike;
                        mike = foxtrot[oscar](romeo, yankee, offset, verify, options);
                        return entity;
                    };
                    result['onPress'] = status;
                    status = control.bind(vacuum)(result);
                    _fun86199_ip = 1317; continue _fun86199;
 1263:
                    config = config.jNphKS;
                    config = papa.bind(target)(config);
                    result['label'] = config;
                    config = 34;
                    config = context[config];
                    config = record.bind(yankee)(config);
                    config = config.XSmallIcon;
                    result['IconComponent'] = config;
                    config = function() { // Original name: onPress
                        _fun86207: for(var _fun86207_ip = 0; ; ) switch(_fun86207_ip) {
 0:
                            entity = _closure3_slot0;
                            zulu = entity.parent_id;
                            entity = null;
                            if(!(entity != zulu)) { _fun86207_ip = 92; continue _fun86207 }
 19:
                            report = _closure1_slot0;
                            tango = _closure1_slot2;
                            zulu = 32;
                            tango = tango[zulu];
                            zulu = undefined;
                            oscar = report.bind(zulu)(tango);
                            report = oscar.setOptInChannel;
                            offset = _closure3_slot7;
                            mike = _closure3_slot0;
                            verify = mike.parent_id;
                            mike = {};
                            entity = _closure1_slot20;
                            entity = entity.CHANNEL_ACTION_SHEET;
                            mike['section'] = entity;
                            options = false;
                            yankee = oscar;
                            golf = mike;
                            entity = yankee[report](offset, verify, options, golf, oscar);
 92:
                            entity = undefined;
                            return entity;
                        }
                    };
                    result['onPress'] = config;
                    result = control.bind(vacuum)(result);
 1317:
                    control = _closure1_slot8;
                    result = offset.type;
                    result = control.bind(yankee)(result);
                    if(result) { _fun86199_ip = 1348; continue _fun86199 }
 1334:
                    vacuum = _closure1_slot9;
                    control = offset.type;
                    result = vacuum.bind(yankee)(control);
 1348:
                    if(result) { _fun86199_ip = 1361; continue _fun86199 }
 1351:
                    control = offset.isForumLikeChannel;
                    result = control.bind(offset)();
 1361:
                    if(!result) { _fun86199_ip = 1482; continue _fun86199 }
 1364:
                    vacuum = report.buttons;
                    control = vacuum.push;
                    result = {};
                    record = _closure1_slot0;
                    context = _closure1_slot2;
                    config = 20;
                    papa = context[config];
                    papa = record.bind(yankee)(papa);
                    target = papa.intl;
                    papa = target.string;
                    config = context[config];
                    config = record.bind(yankee)(config);
                    config = config.t;
                    config = config.WqhZsr;
                    config = papa.bind(target)(config);
                    result['label'] = config;
                    config = 36;
                    config = context[config];
                    config = record.bind(yankee)(config);
                    config = config.LinkIcon;
                    result['IconComponent'] = config;
                    config = false;
                    result['isDestructive'] = config;
                    config = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 37;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.copyGuildChannelOrThreadLink;
                        mike = _closure3_slot0;
                        zulu = mike.guild_id;
                        mike = mike.id;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    result['onPress'] = config;
                    result = control.bind(vacuum)(result);
 1482:
                    result = offset.isPrivate;
                    result = result.bind(offset)();
                    if(!result) { _fun86199_ip = 1633; continue _fun86199 }
 1498:
                    vacuum = report.buttons;
                    control = vacuum.push;
                    result = {};
                    papa = _closure1_slot0;
                    target = _closure1_slot2;
                    config = 20;
                    record = target[config];
                    record = papa.bind(yankee)(record);
                    context = record.intl;
                    record = context.string;
                    config = target[config];
                    config = papa.bind(yankee)(config);
                    config = config.t;
                    if(sequence) { _fun86199_ip = 1571; continue _fun86199 }
 1558:
                    sequence = config.N2c/Ul;
                    sequence = record.bind(context)(sequence);
                    _fun86199_ip = 1582; continue _fun86199;
 1571:
                    config = config.z7I3gY;
                    sequence = record.bind(context)(config);
 1582:
                    result['label'] = sequence;
                    config = _closure1_slot0;
                    record = _closure1_slot2;
                    sequence = 31;
                    sequence = record[sequence];
                    sequence = config.bind(yankee)(sequence);
                    sequence = sequence.StarIcon;
                    result['IconComponent'] = sequence;
                    sequence = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 32;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.setMessagesFavorite;
                        zulu = _closure3_slot0;
                        zulu = zulu.id;
                        mike = _closure3_slot4;
                        mike = !mike;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    result['onPress'] = sequence;
                    result = control.bind(vacuum)(result);
 1633:
                    result = {};
                    control = 'safety-warning-tooling';
                    result['sectionKey'] = control;
                    control = new Array(0);
                    result['buttons'] = control;
                    if(!source) { _fun86199_ip = 1769; continue _fun86199 }
 1658:
                    vacuum = result.buttons;
                    control = vacuum.push;
                    source = {};
                    config = _closure1_slot0;
                    record = _closure1_slot2;
                    sequence = 20;
                    context = record[sequence];
                    context = config.bind(yankee)(context);
                    papa = context.intl;
                    context = papa.string;
                    sequence = record[sequence];
                    sequence = config.bind(yankee)(sequence);
                    sequence = sequence.t;
                    sequence = sequence.EuzCER;
                    sequence = context.bind(papa)(sequence);
                    source['label'] = sequence;
                    sequence = 38;
                    sequence = record[sequence];
                    sequence = config.bind(yankee)(sequence);
                    sequence = sequence.WarningIcon;
                    source['IconComponent'] = sequence;
                    sequence = function() { // Original name: onPress
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 39;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.markAsInappropriateConversation;
                        zulu = _closure3_slot0;
                        zulu = zulu.id;
                        mike = _closure1_slot5;
                        mike = mike.INAPPROPRIATE_CONVERSATION_TIER_1;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    source['onPress'] = sequence;
                    source = control.bind(vacuum)(source);
 1769:
                    if(!output) { _fun86199_ip = 1883; continue _fun86199 }
 1772:
                    control = result.buttons;
                    source = control.push;
                    output = {};
                    sequence = _closure1_slot0;
                    config = _closure1_slot2;
                    vacuum = 20;
                    record = config[vacuum];
                    record = sequence.bind(yankee)(record);
                    context = record.intl;
                    record = context.string;
                    vacuum = config[vacuum];
                    vacuum = sequence.bind(yankee)(vacuum);
                    vacuum = vacuum.t;
                    vacuum = vacuum.tBw/1t;
                    vacuum = record.bind(context)(vacuum);
                    output['label'] = vacuum;
                    vacuum = 38;
                    vacuum = config[vacuum];
                    vacuum = sequence.bind(yankee)(vacuum);
                    vacuum = vacuum.WarningIcon;
                    output['IconComponent'] = vacuum;
                    vacuum = function() { // Original name: onPress
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 39;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.markAsInappropriateConversation;
                        zulu = _closure3_slot0;
                        zulu = zulu.id;
                        mike = _closure1_slot5;
                        mike = mike.INAPPROPRIATE_CONVERSATION_TIER_2;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    output['onPress'] = vacuum;
                    output = source.bind(control)(output);
 1883:
                    output = result.buttons;
                    output = output.length;
                    if(!(output > tango)) { _fun86199_ip = 1908; continue _fun86199 }
 1898:
                    output = entity.push;
                    output = output.bind(entity)(result);
 1908:
                    if(!zulu) { _fun86199_ip = 1925; continue _fun86199 }
 1911:
                    result = _closure1_slot8;
                    output = offset.type;
                    zulu = result.bind(yankee)(output);
 1925:
                    if(!zulu) { _fun86199_ip = 2066; continue _fun86199 }
 1931:
                    result = report.buttons;
                    output = result.push;
                    zulu = {};
                    sequence = _closure1_slot0;
                    config = _closure1_slot2;
                    source = 20;
                    control = config[source];
                    control = sequence.bind(yankee)(control);
                    vacuum = control.intl;
                    control = vacuum.string;
                    source = config[source];
                    source = sequence.bind(yankee)(source);
                    source = source.t;
                    if(update) { _fun86199_ip = 2004; continue _fun86199 }
 1991:
                    update = source.LOp2MT;
                    update = control.bind(vacuum)(update);
                    _fun86199_ip = 2015; continue _fun86199;
 2004:
                    source = source.n7rKhY;
                    update = control.bind(vacuum)(source);
 2015:
                    zulu['label'] = update;
                    source = _closure1_slot0;
                    control = _closure1_slot2;
                    update = 40;
                    update = control[update];
                    update = source.bind(yankee)(update);
                    update = update.ChatIcon;
                    zulu['IconComponent'] = update;
                    update = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 32;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.setAddToMessages;
                        zulu = _closure3_slot0;
                        zulu = zulu.id;
                        mike = _closure3_slot5;
                        mike = !mike;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    zulu['onPress'] = update;
                    zulu = output.bind(result)(zulu);
 2066:
                    zulu = report.buttons;
                    zulu = zulu.length;
                    if(!(zulu > tango)) { _fun86199_ip = 2091; continue _fun86199 }
 2081:
                    zulu = entity.push;
                    zulu = zulu.bind(entity)(report);
 2091:
                    report = {};
                    zulu = 'notifications';
                    report['sectionKey'] = zulu;
                    zulu = new Array(0);
                    report['buttons'] = zulu;
                    output = _closure1_slot11;
                    zulu = offset.type;
                    zulu = output.bind(yankee)(zulu);
                    if(zulu) { _fun86199_ip = 2173; continue _fun86199 }
 2128:
                    zulu = offset.isCategory;
                    zulu = zulu.bind(offset)();
                    if(zulu) { _fun86199_ip = 2173; continue _fun86199 }
 2141:
                    if(!sizing) { _fun86199_ip = 2157; continue _fun86199 }
 2144:
                    zulu = offset.isGuildVoice;
                    zulu = zulu.bind(offset)();
                    if(zulu) { _fun86199_ip = 2173; continue _fun86199 }
 2157:
                    zulu = offset.isForumLikeChannel;
                    zulu = zulu.bind(offset)();
                    if(!zulu) { _fun86199_ip = 2820; continue _fun86199 }
 2173:
                    update = _closure1_slot0;
                    zulu = _closure1_slot2;
                    source = 20;
                    output = zulu[source];
                    output = update.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    zulu = zulu[source];
                    zulu = update.bind(yankee)(zulu);
                    zulu = zulu.t;
                    if(echo) { _fun86199_ip = 2524; continue _fun86199 }
 2223:
                    echo = zulu.tbeRRE;
                    update = output.bind(result)(echo);
                    echo = offset.isCategory;
                    echo = echo.bind(offset)();
                    if(echo) { _fun86199_ip = 2403; continue _fun86199 }
 2250:
                    echo = offset.isDM;
                    echo = echo.bind(offset)();
                    if(echo) { _fun86199_ip = 2349; continue _fun86199 }
 2263:
                    echo = offset.isGroupDM;
                    echo = echo.bind(offset)();
                    if(echo) { _fun86199_ip = 2349; continue _fun86199 }
 2276:
                    echo = offset.isThread;
                    echo = echo.bind(offset)();
                    vacuum = update;
                    if(!echo) { _fun86199_ip = 2455; continue _fun86199 }
 2295:
                    sequence = _closure1_slot0;
                    echo = _closure1_slot2;
                    update = echo[source];
                    update = sequence.bind(yankee)(update);
                    control = update.intl;
                    update = control.string;
                    echo = echo[source];
                    echo = sequence.bind(yankee)(echo);
                    echo = echo.t;
                    echo = echo.bUUd8v;
                    vacuum = update.bind(control)(echo);
                    _fun86199_ip = 2455; continue _fun86199;
 2349:
                    sequence = _closure1_slot0;
                    echo = _closure1_slot2;
                    update = echo[source];
                    update = sequence.bind(yankee)(update);
                    control = update.intl;
                    update = control.string;
                    echo = echo[source];
                    echo = sequence.bind(yankee)(echo);
                    echo = echo.t;
                    echo = echo.LO3kaG;
                    vacuum = update.bind(control)(echo);
                    _fun86199_ip = 2455; continue _fun86199;
 2403:
                    sequence = _closure1_slot0;
                    echo = _closure1_slot2;
                    update = echo[source];
                    update = sequence.bind(yankee)(update);
                    control = update.intl;
                    update = control.string;
                    echo = echo[source];
                    echo = sequence.bind(yankee)(echo);
                    echo = echo.t;
                    echo = echo.pNMCg4;
                    vacuum = update.bind(control)(echo);
 2455:
                    control = report.buttons;
                    update = control.push;
                    echo = {};
                    echo['label'] = vacuum;
                    sequence = _closure1_slot0;
                    config = _closure1_slot2;
                    vacuum = 41;
                    vacuum = config[vacuum];
                    vacuum = sequence.bind(yankee)(vacuum);
                    vacuum = vacuum.BellSlashIcon;
                    echo['IconComponent'] = vacuum;
                    vacuum = function() { // Original name: onPress
                        _fun86215: for(var _fun86215_ip = 0; ; ) switch(_fun86215_ip) {
 0:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            entity = 33;
                            zulu = zulu[entity];
                            entity = undefined;
                            tango = tango.bind(entity)(zulu);
                            zulu = tango.getRootNavigationRef;
                            report = zulu.bind(tango)();
                            zulu = null;
                            zulu = zulu != report;
                            if(!zulu) { _fun86215_ip = 54; continue _fun86215 }
 44:
                            tango = report.isReady;
                            zulu = tango.bind(report)();
 54:
                            if(!zulu) { _fun86215_ip = 118; continue _fun86215 }
 57:
                            tango = report.navigate;
                            zulu = {};
                            oscar = _closure3_slot0;
                            oscar = oscar.id;
                            zulu['channelId'] = oscar;
                            mike = _closure1_slot25;
                            mike = mike.MUTE;
                            zulu['initialRouteName'] = mike;
                            mike = 'channel-long-press-sheet';
                            zulu['source'] = mike;
                            mike = 'sidebar';
                            mike = tango.bind(report)(mike, zulu);
 118:
                            return entity;
                        }
                    };
                    echo['onPress'] = vacuum;
                    echo = update.bind(control)(echo);
                    _fun86199_ip = 2820; continue _fun86199;
 2524:
                    zulu = zulu.OYefmZ;
                    output = output.bind(result)(zulu);
                    zulu = offset.isCategory;
                    zulu = zulu.bind(offset)();
                    if(zulu) { _fun86199_ip = 2704; continue _fun86199 }
 2551:
                    zulu = offset.isDM;
                    zulu = zulu.bind(offset)();
                    if(zulu) { _fun86199_ip = 2650; continue _fun86199 }
 2564:
                    zulu = offset.isGroupDM;
                    zulu = zulu.bind(offset)();
                    if(zulu) { _fun86199_ip = 2650; continue _fun86199 }
 2577:
                    zulu = offset.isThread;
                    zulu = zulu.bind(offset)();
                    echo = output;
                    if(!zulu) { _fun86199_ip = 2756; continue _fun86199 }
 2596:
                    update = _closure1_slot0;
                    zulu = _closure1_slot2;
                    output = zulu[source];
                    output = update.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    zulu = zulu[source];
                    zulu = update.bind(yankee)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.Cq/TzM;
                    echo = output.bind(result)(zulu);
                    _fun86199_ip = 2756; continue _fun86199;
 2650:
                    update = _closure1_slot0;
                    zulu = _closure1_slot2;
                    output = zulu[source];
                    output = update.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    zulu = zulu[source];
                    zulu = update.bind(yankee)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.s5/5fn;
                    echo = output.bind(result)(zulu);
                    _fun86199_ip = 2756; continue _fun86199;
 2704:
                    update = _closure1_slot0;
                    zulu = _closure1_slot2;
                    output = zulu[source];
                    output = update.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    zulu = zulu[source];
                    zulu = update.bind(yankee)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.olaBeH;
                    echo = output.bind(result)(zulu);
 2756:
                    result = report.buttons;
                    output = result.push;
                    zulu = {};
                    zulu['label'] = echo;
                    update = _closure1_slot0;
                    source = _closure1_slot2;
                    echo = 42;
                    echo = source[echo];
                    echo = update.bind(yankee)(echo);
                    echo = echo.BellIcon;
                    zulu['IconComponent'] = echo;
                    echo = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        offset = _closure1_slot2;
                        entity = 43;
                        mike = offset[entity];
                        entity = undefined;
                        golf = zulu.bind(entity)(mike);
                        oscar = golf.updateChannelOverrideSettings;
                        zulu = _closure3_slot0;
                        tango = zulu.getGuildId;
                        report = tango.bind(zulu)();
                        foxtrot = zulu.id;
                        zulu = {};
                        mike = _closure3_slot1;
                        verify = !mike;
                        zulu['muted'] = verify;
                        verify = _closure1_slot0;
                        options = 44;
                        options = offset[options];
                        options = verify.bind(entity)(options);
                        verify = options.NotificationLabel;
                        options = verify.muted;
                        mike = !mike;
                        yankee = options.bind(verify)(mike);
                        kilo = golf;
                        backup = report;
                        romeo = zulu;
                        mike = kilo[oscar](backup, foxtrot, romeo, yankee, offset);
                        return entity;
                    };
                    zulu['onPress'] = echo;
                    zulu = output.bind(result)(zulu);
 2820:
                    output = _closure1_slot8;
                    zulu = offset.type;
                    zulu = output.bind(yankee)(zulu);
                    if(zulu) { _fun86199_ip = 2847; continue _fun86199 }
 2837:
                    output = offset.isCategory;
                    zulu = output.bind(offset)();
 2847:
                    if(zulu) { _fun86199_ip = 2860; continue _fun86199 }
 2850:
                    output = offset.isGuildStageVoice;
                    zulu = output.bind(offset)();
 2860:
                    if(zulu) { _fun86199_ip = 2879; continue _fun86199 }
 2863:
                    if(!sizing) { _fun86199_ip = 2876; continue _fun86199 }
 2866:
                    output = offset.isGuildVoice;
                    sizing = output.bind(offset)();
 2876:
                    zulu = sizing;
 2879:
                    if(zulu) { _fun86199_ip = 2892; continue _fun86199 }
 2882:
                    sizing = offset.isForumLikeChannel;
                    zulu = sizing.bind(offset)();
 2892:
                    if(!zulu) { _fun86199_ip = 3013; continue _fun86199 }
 2895:
                    output = report.buttons;
                    sizing = output.push;
                    zulu = {};
                    echo = _closure1_slot0;
                    update = _closure1_slot2;
                    result = 20;
                    source = update[result];
                    source = echo.bind(yankee)(source);
                    control = source.intl;
                    source = control.string;
                    result = update[result];
                    result = echo.bind(yankee)(result);
                    result = result.t;
                    result = result.h850Sk;
                    result = source.bind(control)(result);
                    zulu['label'] = result;
                    result = 45;
                    result = update[result];
                    result = echo.bind(yankee)(result);
                    result = result.ChannelNotificationIcon;
                    zulu['IconComponent'] = result;
                    result = true;
                    zulu['disableColor'] = result;
                    result = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 46;
                        oscar = tango[mike];
                        entity = undefined;
                        golf = zulu.bind(entity)(oscar);
                        oscar = golf.setSection;
                        report = _closure1_slot21;
                        report = report.NOTIFICATIONS;
                        report = oscar.bind(golf)(report);
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.open;
                        mike = _closure3_slot0;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    zulu['onPress'] = result;
                    zulu = sizing.bind(output)(zulu);
 3013:
                    zulu = report.buttons;
                    zulu = zulu.length;
                    if(!(zulu > tango)) { _fun86199_ip = 3038; continue _fun86199 }
 3028:
                    zulu = entity.push;
                    zulu = zulu.bind(entity)(report);
 3038:
                    report = {};
                    zulu = 'threads';
                    report['sectionKey'] = zulu;
                    zulu = new Array(0);
                    report['buttons'] = zulu;
                    zulu = offset.isThread;
                    zulu = zulu.bind(offset)();
                    if(zulu) { _fun86199_ip = 3081; continue _fun86199 }
 3071:
                    sizing = offset.isForumLikeChannel;
                    zulu = sizing.bind(offset)();
 3081:
                    if(zulu) { _fun86199_ip = 3087; continue _fun86199 }
 3084:
                    zulu = !kilo;
 3087:
                    if(zulu) { _fun86199_ip = 3093; continue _fun86199 }
 3090:
                    zulu = foxtrot;
 3093:
                    if(zulu) { _fun86199_ip = 3207; continue _fun86199 }
 3096:
                    kilo = report.buttons;
                    foxtrot = kilo.push;
                    zulu = {};
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    sizing = 20;
                    echo = result[sizing];
                    echo = output.bind(yankee)(echo);
                    update = echo.intl;
                    echo = update.string;
                    sizing = result[sizing];
                    sizing = output.bind(yankee)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.B2panJ;
                    sizing = echo.bind(update)(sizing);
                    zulu['label'] = sizing;
                    sizing = 47;
                    sizing = result[sizing];
                    sizing = output.bind(yankee)(sizing);
                    sizing = sizing.ThreadIcon;
                    zulu['IconComponent'] = sizing;
                    sizing = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 48;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = _closure3_slot0;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    zulu['onPress'] = sizing;
                    zulu = foxtrot.bind(kilo)(zulu);
 3207:
                    zulu = report.buttons;
                    zulu = zulu.length;
                    if(!(zulu > tango)) { _fun86199_ip = 3232; continue _fun86199 }
 3222:
                    zulu = entity.push;
                    zulu = zulu.bind(entity)(report);
 3232:
                    report = {};
                    zulu = 'voice';
                    report['sectionKey'] = zulu;
                    zulu = new Array(0);
                    report['buttons'] = zulu;
                    foxtrot = _closure1_slot9;
                    zulu = offset.type;
                    zulu = foxtrot.bind(yankee)(zulu);
                    if(!zulu) { _fun86199_ip = 3272; continue _fun86199 }
 3269:
                    zulu = !romeo;
 3272:
                    if(!zulu) { _fun86199_ip = 3413; continue _fun86199 }
 3278:
                    foxtrot = report.buttons;
                    romeo = foxtrot.push;
                    zulu = {};
                    result = _closure1_slot0;
                    echo = _closure1_slot2;
                    kilo = 20;
                    sizing = echo[kilo];
                    sizing = result.bind(yankee)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kilo = echo[kilo];
                    kilo = result.bind(yankee)(kilo);
                    kilo = kilo.t;
                    if(backup) { _fun86199_ip = 3351; continue _fun86199 }
 3338:
                    backup = kilo.LxzNio;
                    backup = sizing.bind(output)(backup);
                    _fun86199_ip = 3362; continue _fun86199;
 3351:
                    kilo = kilo.JYF2OT;
                    backup = sizing.bind(output)(kilo);
 3362:
                    zulu['label'] = backup;
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 21;
                    backup = sizing[backup];
                    backup = kilo.bind(yankee)(backup);
                    backup = backup.UserCircleIcon;
                    zulu['IconComponent'] = backup;
                    backup = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 49;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.update;
                        mike = _closure3_slot0;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    zulu['onPress'] = backup;
                    zulu = romeo.bind(foxtrot)(zulu);
 3413:
                    zulu = offset.isGuildVocal;
                    zulu = zulu.bind(offset)();
                    if(!zulu) { _fun86199_ip = 3712; continue _fun86199 }
 3429:
                    zulu = offset.isGuildStageVoice;
                    update = zulu.bind(offset)();
                    foxtrot = report.buttons;
                    romeo = foxtrot.push;
                    zulu = {};
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 20;
                    output = sizing[backup];
                    output = kilo.bind(yankee)(output);
                    echo = output.intl;
                    result = echo.string;
                    output = sizing[backup];
                    output = kilo.bind(yankee)(output);
                    output = output.t;
                    if(update) { _fun86199_ip = 3558; continue _fun86199 }
 3499:
                    update = output.ZXxLQk;
                    update = result.bind(echo)(update);
                    zulu['label'] = update;
                    update = 40;
                    update = sizing[update];
                    update = kilo.bind(yankee)(update);
                    update = update.ChatIcon;
                    zulu['IconComponent'] = update;
                    update = function() { // Original name: onPress
                        tango = _closure1_slot28;
                        mike = _closure3_slot0;
                        entity = undefined;
                        tango = tango.bind(entity)(mike);
                        tango = _closure1_slot1;
                        report = _closure1_slot2;
                        zulu = 54;
                        zulu = report[zulu];
                        report = tango.bind(entity)(zulu);
                        tango = report.updateChatOpen;
                        zulu = mike.id;
                        mike = true;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    zulu['onPress'] = update;
                    update = romeo.bind(foxtrot)(zulu);
                    _fun86199_ip = 3712; continue _fun86199;
 3558:
                    output = output.7vb2cX;
                    output = result.bind(echo)(output);
                    zulu['label'] = output;
                    output = 50;
                    output = sizing[output];
                    output = kilo.bind(yankee)(output);
                    output = output.StageIcon;
                    zulu['IconComponent'] = output;
                    output = function() { // Original name: onPress
                        zulu = _closure1_slot28;
                        mike = _closure3_slot0;
                        entity = undefined;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    zulu['onPress'] = output;
                    zulu = romeo.bind(foxtrot)(zulu);
                    foxtrot = report.buttons;
                    romeo = foxtrot.push;
                    zulu = {};
                    output = sizing[backup];
                    output = kilo.bind(yankee)(output);
                    result = output.intl;
                    output = result.string;
                    backup = sizing[backup];
                    backup = kilo.bind(yankee)(backup);
                    backup = backup.t;
                    backup = backup.ZXxLQk;
                    backup = output.bind(result)(backup);
                    zulu['label'] = backup;
                    backup = 40;
                    backup = sizing[backup];
                    backup = kilo.bind(yankee)(backup);
                    backup = backup.ChatIcon;
                    zulu['IconComponent'] = backup;
                    backup = function() { // Original name: onPress
                        report = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 51;
                        tango = mike[entity];
                        entity = undefined;
                        oscar = report.bind(entity)(tango);
                        tango = oscar.hideActionSheet;
                        tango = tango.bind(oscar)();
                        tango = 52;
                        tango = mike[tango];
                        report = report.bind(entity)(tango);
                        tango = report.pushLazy;
                        oscar = _closure1_slot0;
                        zulu = 18;
                        zulu = mike[zulu];
                        oscar = oscar.bind(entity)(zulu);
                        zulu = 53;
                        zulu = mike[zulu];
                        mike = mike.paths;
                        zulu = oscar.bind(entity)(zulu, mike);
                        mike = {};
                        oscar = _closure3_slot0;
                        mike['channel'] = oscar;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    zulu['onPress'] = backup;
                    zulu = romeo.bind(foxtrot)(zulu);
 3712:
                    zulu = offset.isGuildStageVoice;
                    zulu = zulu.bind(offset)();
                    if(!zulu) { _fun86199_ip = 3728; continue _fun86199 }
 3725:
                    zulu = options;
 3728:
                    if(!zulu) { _fun86199_ip = 3734; continue _fun86199 }
 3731:
                    zulu = oscar;
 3734:
                    if(!zulu) { _fun86199_ip = 3855; continue _fun86199 }
 3737:
                    options = report.buttons;
                    oscar = options.push;
                    zulu = {};
                    foxtrot = _closure1_slot0;
                    backup = _closure1_slot2;
                    romeo = 20;
                    kilo = backup[romeo];
                    kilo = foxtrot.bind(yankee)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    romeo = backup[romeo];
                    romeo = foxtrot.bind(yankee)(romeo);
                    romeo = romeo.t;
                    romeo = romeo.+78Pfn;
                    romeo = kilo.bind(sizing)(romeo);
                    zulu['label'] = romeo;
                    romeo = 55;
                    romeo = backup[romeo];
                    romeo = foxtrot.bind(yankee)(romeo);
                    romeo = romeo.FlagIcon;
                    zulu['IconComponent'] = romeo;
                    romeo = true;
                    zulu['isDestructive'] = romeo;
                    romeo = function() { // Original name: onPress
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 56;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.showReportModalForStageChannel;
                        mike = _closure3_slot0;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    zulu['onPress'] = romeo;
                    zulu = oscar.bind(options)(zulu);
 3855:
                    zulu = report.buttons;
                    zulu = zulu.length;
                    if(!(zulu > tango)) { _fun86199_ip = 3880; continue _fun86199 }
 3870:
                    zulu = entity.push;
                    zulu = zulu.bind(entity)(report);
 3880:
                    zulu = {};
                    report = 'admin-actions';
                    zulu['sectionKey'] = report;
                    report = new Array(0);
                    zulu['buttons'] = report;
                    if(!mike) { _fun86199_ip = 4287; continue _fun86199 }
 3908:
                    oscar = zulu.buttons;
                    report = oscar.push;
                    mike = {};
                    options = offset.isCategory;
                    options = options.bind(offset)();
                    kilo = _closure1_slot0;
                    romeo = _closure1_slot2;
                    sizing = 20;
                    foxtrot = romeo[sizing];
                    foxtrot = kilo.bind(yankee)(foxtrot);
                    backup = foxtrot.intl;
                    foxtrot = backup.string;
                    romeo = romeo[sizing];
                    romeo = kilo.bind(yankee)(romeo);
                    romeo = romeo.t;
                    if(options) { _fun86199_ip = 3991; continue _fun86199 }
 3978:
                    options = romeo.3gUsJS;
                    options = foxtrot.bind(backup)(options);
                    _fun86199_ip = 4002; continue _fun86199;
 3991:
                    romeo = romeo.zdPFs7;
                    options = foxtrot.bind(backup)(romeo);
 4002:
                    mike['label'] = options;
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    options = 57;
                    options = foxtrot[options];
                    options = romeo.bind(yankee)(options);
                    options = options.SettingsIcon;
                    mike['IconComponent'] = options;
                    options = function() { // Original name: onPress
                        zulu = _closure1_slot1;
                        tango = _closure1_slot2;
                        mike = 46;
                        oscar = tango[mike];
                        entity = undefined;
                        golf = zulu.bind(entity)(oscar);
                        oscar = golf.setSection;
                        report = _closure1_slot21;
                        report = report.OVERVIEW;
                        report = oscar.bind(golf)(report);
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.open;
                        mike = _closure3_slot0;
                        mike = mike.id;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    mike['onPress'] = options;
                    mike = report.bind(oscar)(mike);
                    report = _closure1_slot8;
                    mike = offset.type;
                    mike = report.bind(yankee)(mike);
                    if(mike) { _fun86199_ip = 4080; continue _fun86199 }
 4070:
                    report = offset.isForumLikeChannel;
                    mike = report.bind(offset)();
 4080:
                    if(mike) { _fun86199_ip = 4093; continue _fun86199 }
 4083:
                    report = offset.isGuildVoice;
                    mike = report.bind(offset)();
 4093:
                    if(mike) { _fun86199_ip = 4106; continue _fun86199 }
 4096:
                    report = offset.isCategory;
                    mike = report.bind(offset)();
 4106:
                    if(!mike) { _fun86199_ip = 4287; continue _fun86199 }
 4112:
                    oscar = zulu.buttons;
                    report = oscar.push;
                    mike = {};
                    options = offset.isCategory;
                    options = options.bind(offset)();
                    kilo = _closure1_slot0;
                    romeo = _closure1_slot2;
                    foxtrot = romeo[sizing];
                    foxtrot = kilo.bind(yankee)(foxtrot);
                    backup = foxtrot.intl;
                    foxtrot = backup.string;
                    romeo = romeo[sizing];
                    romeo = kilo.bind(yankee)(romeo);
                    romeo = romeo.t;
                    if(options) { _fun86199_ip = 4192; continue _fun86199 }
 4179:
                    options = romeo.dEaPc3;
                    options = foxtrot.bind(backup)(options);
                    _fun86199_ip = 4203; continue _fun86199;
 4192:
                    romeo = romeo.fUYU+v;
                    options = foxtrot.bind(backup)(romeo);
 4203:
                    mike['label'] = options;
                    options = offset.isCategory;
                    options = options.bind(offset)();
                    offset = _closure1_slot0;
                    romeo = _closure1_slot2;
                    if(options) { _fun86199_ip = 4248; continue _fun86199 }
 4228:
                    options = 58;
                    options = romeo[options];
                    options = offset.bind(yankee)(options);
                    options = options.CopyIcon;
                    _fun86199_ip = 4266; continue _fun86199;
 4248:
                    verify = 35;
                    verify = romeo[verify];
                    verify = offset.bind(yankee)(verify);
                    options = verify.PlusLargeIcon;
 4266:
                    mike['IconComponent'] = options;
                    golf = function() { // Original name: onPress
                        _fun86224: for(var _fun86224_ip = 0; ; ) switch(_fun86224_ip) {
 0:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 59;
                            mike = mike[entity];
                            entity = undefined;
                            golf = zulu.bind(entity)(mike);
                            oscar = golf.open;
                            zulu = _closure3_slot0;
                            mike = zulu.isCategory;
                            mike = mike.bind(zulu)();
                            report = undefined;
                            if(mike) { _fun86224_ip = 62; continue _fun86224 }
 53:
                            mike = _closure3_slot0;
                            report = mike.type;
 62:
                            zulu = _closure3_slot0;
                            mike = zulu.getGuildId;
                            tango = mike.bind(zulu)();
                            mike = zulu.isCategory;
                            zulu = mike.bind(zulu)();
                            mike = _closure3_slot0;
                            if(zulu) { _fun86224_ip = 101; continue _fun86224 }
 93:
                            zulu = mike.parent_id;
                            _fun86224_ip = 106; continue _fun86224;
 101:
                            zulu = mike.id;
 106:
                            verify = _closure3_slot0;
                            mike = verify.isCategory;
                            verify = mike.bind(verify)();
                            mike = undefined;
                            if(verify) { _fun86224_ip = 134; continue _fun86224 }
 125:
                            options = _closure3_slot0;
                            mike = options.id;
 134:
                            backup = golf;
                            foxtrot = report;
                            romeo = tango;
                            yankee = zulu;
                            offset = mike;
                            mike = backup[oscar](foxtrot, romeo, yankee, offset, verify);
                            return entity;
                        }
                    };
                    mike['onPress'] = golf;
                    mike = report.bind(oscar)(mike);
 4287:
                    mike = zulu.buttons;
                    mike = mike.length;
                    if(!(mike > tango)) { _fun86199_ip = 4312; continue _fun86199 }
 4302:
                    mike = entity.push;
                    mike = mike.bind(entity)(zulu);
 4312:
                    return entity;
                }
            };
            yankee = zulu.bind(tango)(oscar);
            _closure2_slot4 = yankee;
            zulu = romeo.isGroupDM;
            zulu = zulu.bind(romeo)();
            foxtrot = undefined;
            if(!zulu) { _fun86188_ip = 1187; continue _fun86188 }
 1106:
            oscar = _closure1_slot0;
            output = _closure1_slot2;
            zulu = 20;
            golf = output[zulu];
            golf = oscar.bind(tango)(golf);
            offset = golf.intl;
            golf = offset.formatToPlainString;
            zulu = output[zulu];
            zulu = oscar.bind(tango)(zulu);
            zulu = zulu.t;
            oscar = zulu.ABMKx8;
            zulu = {};
            romeo = romeo.recipients;
            output = romeo.length;
            romeo = 1;
            romeo = output + romeo;
            zulu['members'] = romeo;
            foxtrot = golf.bind(offset)(oscar, zulu);
 1187:
            golf = _closure1_slot4;
            oscar = golf.useEffect;
            offset = yankee.length;
            zulu = new Array(3);
            zulu[0] = offset;
            zulu[1] = verify;
            zulu[2] = mike;
            mike = function() {
                _fun86225: for(var _fun86225_ip = 0; ; ) switch(_fun86225_ip) {
 0:
                    mike = _closure2_slot4;
                    zulu = mike.length;
                    mike = 0;
                    mike = mike !== zulu;
                    if(mike) { _fun86225_ip = 25; continue _fun86225 }
 21:
                    mike = _closure2_slot3;
 25:
                    if(mike) { _fun86225_ip = 38; continue _fun86225 }
 28:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 38:
                    entity = undefined;
                    return entity;
                }
            };
            mike = oscar.bind(golf)(mike, zulu);
            zulu = _closure1_slot26;
            offset = _closure1_slot0;
            output = _closure1_slot2;
            entity = output[entity];
            entity = offset.bind(tango)(entity);
            mike = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golf = _closure1_slot27;
            report = 70;
            report = output[report];
            report = offset.bind(tango)(report);
            oscar = report.ActionSheet;
            report = {};
            report['showGradient'] = options;
            romeo = _closure1_slot26;
            options = 71;
            options = output[options];
            options = offset.bind(tango)(options);
            offset = options.ActionSheetIconHeader;
            options = {};
            options['icon'] = kilo;
            options['title'] = backup;
            options['subtitle'] = foxtrot;
            options = romeo.bind(tango)(offset, options);
            report['header'] = options;
            offset = yankee.map;
            options = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot26;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 72;
                mike = tango[mike];
                tango = undefined;
                mike = zulu.bind(tango)(mike);
                mike = mike.ActionSheetRow;
                zulu = mike.Group;
                mike = {};
                options = entity.buttons;
                golf = options.map;
                oscar = function(argFoo, argBar) {
                    _fun86227: for(var _fun86227_ip = 0; ; ) switch(_fun86227_ip) {
 0:
                        zulu = argFoo;
                        backup = zulu.label;
                        romeo = zulu.IconComponent;
                        yankee = zulu.iconStyle;
                        oscar = zulu.trailing;
                        mike = zulu.isDestructive;
                        tango = zulu.onPress;
                        var _closure4_slot0 = tango;
                        offset = zulu.disableColor;
                        kilo = 'default';
                        if(!mike) { _fun86227_ip = 60; continue _fun86227 }
 56:
                        kilo = 'danger';
 60:
                        report = _closure1_slot26;
                        options = _closure1_slot0;
                        foxtrot = _closure1_slot2;
                        golf = 72;
                        mike = foxtrot[golf];
                        tango = undefined;
                        mike = options.bind(tango)(mike);
                        zulu = mike.ActionSheetRow;
                        mike = {};
                        mike['variant'] = kilo;
                        mike['label'] = backup;
                        verify = _closure1_slot26;
                        golf = foxtrot[golf];
                        golf = options.bind(tango)(golf);
                        golf = golf.ActionSheetRow;
                        options = golf.Icon;
                        golf = {};
                        golf['IconComponent'] = romeo;
                        golf['style'] = yankee;
                        golf['disableColor'] = offset;
                        golf = verify.bind(tango)(options, golf);
                        mike['icon'] = golf;
                        mike['trailing'] = oscar;
                        entity = function() { // Original name: onPress
                            _fun86228: for(var _fun86228_ip = 0; ; ) switch(_fun86228_ip) {
 0:
                                zulu = _closure4_slot0;
                                mike = null;
                                if(!(mike != zulu)) { _fun86228_ip = 23; continue _fun86228 }
 13:
                                mike = _closure4_slot0;
                                entity = undefined;
                                entity = mike.bind(entity)();
 23:
                                mike = _closure2_slot1;
                                entity = undefined;
                                mike = mike.bind(entity)();
                                return entity;
                            }
                        };
                        mike['onPress'] = entity;
                        entity = argBar;
                        entity = report.bind(tango)(zulu, mike, entity);
                        return entity;
                    }
                };
                oscar = golf.bind(options)(oscar);
                mike['children'] = oscar;
                entity = entity.sectionKey;
                entity = report.bind(tango)(zulu, mike, entity);
                return entity;
            };
            offset = offset.bind(yankee)(options);
            options = new Array(2);
            options[0] = offset;
            if(!verify) { _fun86188_ip = 1567; continue _fun86188 }
 1370:
            romeo = _closure1_slot26;
            update = _closure1_slot0;
            source = _closure1_slot2;
            output = 72;
            offset = source[output];
            offset = update.bind(tango)(offset);
            offset = offset.ActionSheetRow;
            yankee = offset.Group;
            offset = {};
            kilo = _closure1_slot26;
            foxtrot = source[output];
            foxtrot = update.bind(tango)(foxtrot);
            backup = foxtrot.ActionSheetRow;
            foxtrot = {};
            echo = _closure1_slot26;
            output = source[output];
            output = update.bind(tango)(output);
            output = output.ActionSheetRow;
            result = output.Icon;
            output = {};
            control = 73;
            control = source[control];
            control = update.bind(tango)(control);
            control = control.IdIcon;
            output['IconComponent'] = control;
            output = echo.bind(tango)(result, output);
            foxtrot['icon'] = output;
            output = 20;
            result = source[output];
            result = update.bind(tango)(result);
            echo = result.intl;
            result = echo.string;
            output = source[output];
            output = update.bind(tango)(output);
            output = output.t;
            output = output.gFHI3t;
            output = result.bind(echo)(output);
            foxtrot['label'] = output;
            sizing = function() { // Original name: onPress
                zulu = _closure2_slot1;
                entity = undefined;
                zulu = zulu.bind(entity)();
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                report = 74;
                report = tango[report];
                oscar = zulu.bind(entity)(report);
                report = oscar.copy;
                mike = _closure2_slot0;
                mike = mike.id;
                mike = report.bind(oscar)(mike);
                mike = 75;
                mike = tango[mike];
                zulu = zulu.bind(entity)(mike);
                mike = zulu.presentIdCopied;
                mike = mike.bind(zulu)();
                return entity;
            };
            foxtrot['onPress'] = sizing;
            foxtrot = kilo.bind(tango)(backup, foxtrot);
            offset['children'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 1567:
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SafetyWarningTypes;
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
    tango = report.bind(entity)(tango);
    options = tango.isGuildTextChannelType;
    var _closure1_slot8 = options;
    options = tango.isGuildVocalChannelType;
    var _closure1_slot9 = options;
    options = tango.isReadableType;
    var _closure1_slot10 = options;
    tango = tango.isTextChannel;
    var _closure1_slot11 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot16 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot17 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot18 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot19 = tango;
    tango = 14;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsSections;
    var _closure1_slot20 = golf;
    golf = tango.ChannelSettingsSections;
    var _closure1_slot21 = golf;
    golf = tango.NULL_STRING_GUILD_ID;
    var _closure1_slot22 = golf;
    golf = tango.Permissions;
    var _closure1_slot23 = golf;
    tango = tango.ZERO_STRING_GUILD_ID;
    var _closure1_slot24 = tango;
    tango = 15;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ChannelDetailsNavigatorScreens;
    var _closure1_slot25 = tango;
    tango = 16;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot26 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot27 = tango;
    tango = 76;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel/native/ChannelLongPressActionSheet.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ChannelLongPressActionSheet
        _fun86230: for(var _fun86230_ip = 0; ; ) switch(_fun86230_ip) {
 0:
            mike = argFoo;
            zulu = mike.channelId;
            var _closure2_slot0 = zulu;
            oscar = mike.onClose;
            var _closure2_slot1 = oscar;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 62;
            zulu = report[zulu];
            report = undefined;
            options = tango.bind(report)(zulu);
            golf = options.useStateFromStores;
            zulu = _closure1_slot13;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot13;
                mike = zulu.getChannel;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = golf.bind(options)(tango, zulu);
            var _closure2_slot2 = golf;
            options = _closure1_slot4;
            tango = options.useEffect;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = oscar;
            entity = function() {
                _fun86232: for(var _fun86232_ip = 0; ; ) switch(_fun86232_ip) {
 0:
                    zulu = _closure2_slot2;
                    mike = null;
                    if(!(mike == zulu)) { _fun86232_ip = 23; continue _fun86232 }
 13:
                    mike = _closure2_slot1;
                    entity = undefined;
                    entity = mike.bind(entity)();
 23:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tango.bind(options)(entity, zulu);
            entity = null;
            zulu = entity != golf;
            if(!zulu) { _fun86230_ip = 151; continue _fun86230 }
 126:
            tango = _closure1_slot26;
            zulu = _closure1_slot30;
            mike = {};
            mike['channel'] = golf;
            mike['onClose'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 151:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();