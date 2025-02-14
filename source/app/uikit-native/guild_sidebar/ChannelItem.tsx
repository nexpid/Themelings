// app/uikit-native/guild_sidebar/ChannelItem.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    backup = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golf;
    mike = function(argFoo) { // Original name: getChannelMode
        _fun115703: for(var _fun115703_ip = 0; ; ) switch(_fun115703_ip) {
 0:
            mike = argFoo;
            entity = mike.muted;
            golf = mike.selected;
            zulu = mike.unread;
            oscar = mike.locked;
            report = mike.channel;
            if(golf) { _fun115703_ip = 259; continue _fun115703 }
 41:
            if(oscar) { _fun115703_ip = 223; continue _fun115703 }
 47:
            if(entity) { _fun115703_ip = 187; continue _fun115703 }
 53:
            if(zulu) { _fun115703_ip = 92; continue _fun115703 }
 56:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 13;
            oscar = oscar[entity];
            entity = undefined;
            entity = golf.bind(entity)(oscar);
            entity = entity.ChannelModes;
            entity = entity.DEFAULT;
            _fun115703_ip = 185; continue _fun115703;
 92:
            oscar = mike.resolvedUnreadSetting;
            mike = _closure1_slot12;
            mike = mike.ALL_MESSAGES;
            if(!(oscar !== mike)) { _fun115703_ip = 148; continue _fun115703 }
 112:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 13;
            oscar = oscar[mike];
            mike = undefined;
            mike = golf.bind(mike)(oscar);
            mike = mike.ChannelModes;
            mike = mike.UNREAD_LESS_IMPORTANT;
            _fun115703_ip = 182; continue _fun115703;
 148:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            oscar = 13;
            golf = golf[oscar];
            oscar = undefined;
            oscar = options.bind(oscar)(golf);
            oscar = oscar.ChannelModes;
            mike = oscar.UNREAD_IMPORTANT;
 182:
            entity = mike;
 185:
            _fun115703_ip = 221; continue _fun115703;
 187:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 13;
            oscar = oscar[mike];
            mike = undefined;
            mike = golf.bind(mike)(oscar);
            mike = mike.ChannelModes;
            entity = mike.MUTED;
 221:
            _fun115703_ip = 257; continue _fun115703;
 223:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 13;
            oscar = oscar[mike];
            mike = undefined;
            mike = golf.bind(mike)(oscar);
            mike = mike.ChannelModes;
            entity = mike.LOCKED;
 257:
            _fun115703_ip = 331; continue _fun115703;
 259:
            mike = report.isGuildVocal;
            mike = mike.bind(report)();
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            tango = 13;
            report = report[tango];
            tango = undefined;
            tango = oscar.bind(tango)(report);
            tango = tango.ChannelModes;
            if(mike) { _fun115703_ip = 308; continue _fun115703 }
 300:
            mike = tango.SELECTED;
            _fun115703_ip = 328; continue _fun115703;
 308:
            if(zulu) { _fun115703_ip = 319; continue _fun115703 }
 311:
            zulu = tango.RELEVANT;
            _fun115703_ip = 325; continue _fun115703;
 319:
            zulu = tango.UNREAD_IMPORTANT;
 325:
            mike = zulu;
 328:
            entity = mike;
 331:
            return entity;
        }
    };
    var _closure1_slot17 = mike;
    entity = function(argFoo) { // Original name: ChannelIcon
        _fun115704: for(var _fun115704_ip = 0; ; ) switch(_fun115704_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot16;
            tango = undefined;
            verify = mike.bind(tango)();
            golf = zulu.channel;
            romeo = zulu.locked;
            mike = zulu.isRulesChannel;
            yankee = zulu.isChannelLive;
            oscar = zulu.selected;
            foxtrot = zulu.mode;
            report = golf.type;
            zulu = _closure1_slot9;
            zulu = zulu.DM;
            if(!(report !== zulu)) { _fun115704_ip = 447; continue _fun115704 }
 72:
            report = golf.type;
            zulu = _closure1_slot9;
            zulu = zulu.GROUP_DM;
            if(!(report === zulu)) { _fun115704_ip = 172; continue _fun115704 }
 91:
            report = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 14;
            zulu = options[zulu];
            options = report.bind(tango)(zulu);
            report = options.getChannelIconSource;
            zulu = {};
            offset = golf.id;
            zulu['id'] = offset;
            offset = golf.icon;
            zulu['icon'] = offset;
            offset = golf.getApplicationId;
            offset = offset.bind(golf)();
            zulu['applicationId'] = offset;
            offset = 20;
            zulu['size'] = offset;
            options = report.bind(options)(zulu);
            zulu = null;
            if(!(zulu == options)) { _fun115704_ip = 399; continue _fun115704 }
 172:
            if(mike) { _fun115704_ip = 259; continue _fun115704 }
 175:
            report = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 18;
            zulu = offset[mike];
            sizing = report.bind(tango)(zulu);
            kilo = sizing.getChannelIcon;
            zulu = {};
            backup = false;
            zulu['isRulesChannel'] = backup;
            zulu['locked'] = romeo;
            zulu = kilo.bind(sizing)(golf, zulu);
            mike = offset[mike];
            offset = report.bind(tango)(mike);
            report = offset.getChannelIconComponent;
            mike = {};
            mike['isRulesChannel'] = backup;
            mike['locked'] = romeo;
            romeo = report.bind(offset)(golf, mike);
            offset = zulu;
            _fun115704_ip = 301; continue _fun115704;
 259:
            zulu = _closure1_slot1;
            backup = _closure1_slot2;
            mike = 16;
            mike = backup[mike];
            offset = zulu.bind(tango)(mike);
            report = _closure1_slot0;
            mike = 17;
            mike = backup[mike];
            mike = report.bind(tango)(mike);
            romeo = mike.BookCheckIcon;
 301:
            report = _closure1_slot13;
            zulu = _closure1_slot0;
            backup = _closure1_slot2;
            mike = 13;
            mike = backup[mike];
            mike = zulu.bind(tango)(mike);
            zulu = mike.BaseChannelIcon;
            mike = {};
            mike['mode'] = foxtrot;
            mike['source'] = offset;
            mike['isChannelLive'] = yankee;
            offset = undefined;
            if(!yankee) { _fun115704_ip = 357; continue _fun115704 }
 351:
            offset = verify.channelIconLive;
 357:
            mike['style'] = offset;
            offset = null;
            if(!(offset == romeo)) { _fun115704_ip = 371; continue _fun115704 }
 367:
            offset = {};
            _fun115704_ip = 381; continue _fun115704;
 371:
            yankee = {};
            yankee['IconComponent'] = romeo;
            offset = yankee;
 381:
            echo = mike;
            result = offset;
            offset = copyDataProperties(echo, result);
            mike = report.bind(tango)(zulu, mike);
            return mike;
 399:
            report = _closure1_slot13;
            zulu = _closure1_slot1;
            offset = _closure1_slot2;
            mike = 15;
            mike = offset[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            verify = verify.groupDmAvatar;
            mike['style'] = verify;
            mike['source'] = options;
            mike = report.bind(tango)(zulu, mike);
            return mike;
 447:
            zulu = _closure1_slot13;
            mike = _closure1_slot19;
            entity = {};
            report = golf.getRecipientId;
            report = report.bind(golf)();
            entity['userId'] = report;
            report = null;
            report = report != oscar;
            if(!report) { _fun115704_ip = 483; continue _fun115704 }
 480:
            report = oscar;
 483:
            entity['selected'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: DMChannelIcon
        _fun115705: for(var _fun115705_ip = 0; ; ) switch(_fun115705_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.userId;
            var _closure2_slot0 = foxtrot;
            oscar = entity.selected;
            zulu = _closure1_slot16;
            tango = undefined;
            golf = zulu.bind(tango)();
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 19;
            report = yankee[zulu];
            backup = offset.bind(tango)(report);
            romeo = backup.useStateFromStores;
            report = _closure1_slot8;
            verify = new Array(1);
            verify[0] = report;
            options = new Array(1);
            options[0] = foxtrot;
            report = function() {
                zulu = _closure1_slot8;
                mike = zulu.getUser;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            romeo = romeo.bind(backup)(verify, report, options);
            zulu = yankee[zulu];
            verify = offset.bind(tango)(zulu);
            options = verify.useStateFromStoresObject;
            zulu = _closure1_slot6;
            report = new Array(1);
            report[0] = zulu;
            zulu = new Array(1);
            zulu[0] = foxtrot;
            mike = function() {
                entity = {};
                report = _closure1_slot6;
                zulu = report.getStatus;
                tango = _closure2_slot0;
                zulu = zulu.bind(report)(tango);
                entity['status'] = zulu;
                zulu = _closure1_slot6;
                mike = zulu.isMobileOnline;
                mike = mike.bind(zulu)(tango);
                entity['isMobileOnline'] = mike;
                return entity;
            };
            mike = options.bind(verify)(report, mike, zulu);
            options = mike.status;
            report = mike.isMobileOnline;
            zulu = _closure1_slot13;
            mike = _closure1_slot1;
            verify = 20;
            entity = yankee[verify];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['user'] = romeo;
            entity['guildId'] = tango;
            verify = yankee[verify];
            verify = offset.bind(tango)(verify);
            verify = verify.AvatarSizes;
            verify = verify.XSMALL_20;
            entity['size'] = verify;
            verify = golf.dmAvatar;
            entity['style'] = verify;
            entity['status'] = options;
            entity['isMobileOnline'] = report;
            options = golf.avatarStatus;
            report = new Array(2);
            report[0] = options;
            if(!oscar) { _fun115705_ip = 249; continue _fun115705 }
 243:
            oscar = golf.avatarStatusSelected;
 249:
            report[1] = oscar;
            entity['statusStyle'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = ['channel', 'subtitle', 'hideIcon', 'children', 'textStyle', 'channelInfo', 'onPress'];
    var _closure1_slot3 = entity;
    report = global;
    offset = report.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = golf[entity];
    entity = undefined;
    options = backup.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 1;
    verify = golf[options];
    options = argCorge;
    options = options.bind(entity)(verify);
    verify = 2;
    verify = golf[verify];
    verify = oscar.bind(entity)(verify);
    verify = verify.View;
    var _closure1_slot5 = verify;
    verify = 3;
    verify = golf[verify];
    verify = backup.bind(entity)(verify);
    var _closure1_slot6 = verify;
    romeo = 4;
    verify = golf[romeo];
    verify = backup.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 5;
    verify = golf[verify];
    verify = backup.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    verify = golf[verify];
    offset = oscar.bind(entity)(verify);
    verify = offset.ChannelTypes;
    var _closure1_slot9 = verify;
    offset = offset.Routes;
    var _closure1_slot10 = offset;
    offset = 7;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.StaticChannelRoute;
    var _closure1_slot11 = offset;
    kilo = 8;
    offset = golf[kilo];
    offset = oscar.bind(entity)(offset);
    offset = offset.UnreadSetting;
    var _closure1_slot12 = offset;
    offset = 9;
    yankee = golf[offset];
    yankee = oscar.bind(entity)(yankee);
    yankee = yankee.jsx;
    var _closure1_slot13 = yankee;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.jsxs;
    var _closure1_slot14 = offset;
    offset = report.Set;
    yankee = verify.GUILD_VOICE;
    report = new Array(2);
    report[0] = yankee;
    verify = verify.GUILD_STAGE_VOICE;
    report[1] = verify;
    verify = offset.prototype;
    verify = Object.create(verify, {constructor: {value: offset}});
    update = verify;
    echo = report;
    report = new update[offset](echo, result);
    report = report instanceof Object ? report : verify;
    var _closure1_slot15 = report;
    report = 10;
    report = golf[report];
    offset = oscar.bind(entity)(report);
    verify = offset.createStyles;
    report = {};
    yankee = {};
    foxtrot = 11;
    sizing = golf[foxtrot];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.GREEN_360;
    yankee['tintColor'] = sizing;
    report['channelIconLive'] = yankee;
    yankee = {};
    yankee['marginRight'] = kilo;
    report['dmAvatar'] = yankee;
    yankee = {};
    foxtrot = golf[foxtrot];
    foxtrot = backup.bind(entity)(foxtrot);
    foxtrot = foxtrot.colors;
    foxtrot = foxtrot.BACKGROUND_MOBILE_SECONDARY;
    yankee['backgroundColor'] = foxtrot;
    report['avatarStatus'] = yankee;
    yankee = {'width': 20, 'height': 20, 'borderRadius': 10, 'marginRight': 8};
    report['groupDmAvatar'] = yankee;
    yankee = {};
    yankee['paddingStart'] = romeo;
    report['channelInfoContainer'] = yankee;
    yankee = {};
    romeo = 12;
    romeo = golf[romeo];
    romeo = oscar.bind(entity)(romeo);
    romeo = romeo.DARK_393C42_LIGHT_DEE0E4;
    yankee['backgroundColor'] = romeo;
    report['avatarStatusSelected'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot16 = report;
    report = options.memo;
    tango = function(argFoo) {
        _fun115708: for(var _fun115708_ip = 0; ; ) switch(_fun115708_ip) {
 0:
            romeo = argFoo;
            entity = _closure1_slot16;
            tango = undefined;
            offset = entity.bind(tango)();
            source = romeo.channel;
            var _closure2_slot0 = source;
            sizing = romeo.subtitle;
            yankee = romeo.hideIcon;
            oscar = romeo.children;
            kilo = romeo.textStyle;
            result = romeo.channelInfo;
            entity = romeo.onPress;
            var _closure2_slot1 = entity;
            mike = _closure1_slot4;
            entity = _closure1_slot3;
            report = mike.bind(tango)(romeo, entity);
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 21;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = source.id;
            entity = mike.bind(tango)(entity);
            output = entity.isSubscriptionGated;
            update = entity.needSubscriptionToAccess;
            var _closure2_slot2 = update;
            entity = _closure1_slot17;
            foxtrot = entity.bind(tango)(romeo);
            backup = null;
            if(!(backup == result)) { _fun115708_ip = 145; continue _fun115708 }
 140:
            options = null;
            if(!output) { _fun115708_ip = 229; continue _fun115708 }
 145:
            zulu = _closure1_slot14;
            mike = _closure1_slot5;
            entity = {};
            offset = offset.channelInfoContainer;
            entity['style'] = offset;
            offset = new Array(2);
            offset[0] = result;
            backup = null;
            if(!output) { _fun115708_ip = 215; continue _fun115708 }
 178:
            echo = _closure1_slot13;
            result = _closure1_slot1;
            control = _closure1_slot2;
            output = 22;
            output = control[output];
            result = result.bind(tango)(output);
            output = {};
            output['locked'] = update;
            backup = echo.bind(tango)(result, output);
 215:
            offset[1] = backup;
            entity['children'] = offset;
            options = zulu.bind(tango)(mike, entity);
 229:
            zulu = _closure1_slot13;
            mike = _closure1_slot1;
            backup = _closure1_slot2;
            offset = 13;
            entity = backup[offset];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['mode'] = foxtrot;
            output = _closure1_slot0;
            backup = backup[offset];
            backup = output.bind(tango)(backup);
            backup = backup.ChannelModes;
            backup = backup.UNREAD_IMPORTANT;
            backup = foxtrot === backup;
            if(backup) { _fun115708_ip = 324; continue _fun115708 }
 291:
            result = _closure1_slot0;
            output = _closure1_slot2;
            output = output[offset];
            output = result.bind(tango)(output);
            output = output.ChannelModes;
            output = output.UNREAD_LESS_IMPORTANT;
            backup = foxtrot === output;
 324:
            entity['unread'] = backup;
            entity['hideIcon'] = yankee;
            backup = _closure1_slot13;
            result = _closure1_slot0;
            echo = _closure1_slot2;
            offset = echo[offset];
            offset = result.bind(tango)(offset);
            yankee = offset.BaseChannelName;
            offset = {};
            offset['mode'] = foxtrot;
            output = 23;
            output = echo[output];
            update = result.bind(tango)(output);
            echo = update.computeChannelName;
            result = _closure1_slot8;
            output = _closure1_slot7;
            output = echo.bind(update)(source, result, output);
            offset['name'] = output;
            offset['subtitle'] = sizing;
            offset['textStyle'] = kilo;
            offset = backup.bind(tango)(yankee, offset);
            entity['name'] = offset;
            yankee = _closure1_slot13;
            offset = _closure1_slot18;
            verify = {};
            config = verify;
            sequence = romeo;
            romeo = copyDataProperties(config, sequence);
            romeo = 'mode';
            verify[romeo] = foxtrot;
            verify = yankee.bind(tango)(offset, verify);
            entity['icon'] = verify;
            entity['channelInfo'] = options;
            golf = function(argFoo) { // Original name: onPress
                _fun115709: for(var _fun115709_ip = 0; ; ) switch(_fun115709_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun115709_ip = 39; continue _fun115709 }
 10:
                    report = _closure1_slot15;
                    zulu = report.has;
                    mike = _closure2_slot0;
                    mike = mike.type;
                    mike = zulu.bind(report)(mike);
                    if(mike) { _fun115709_ip = 65; continue _fun115709 }
 39:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun115709_ip = 133; continue _fun115709 }
 49:
                    report = _closure2_slot1;
                    zulu = undefined;
                    mike = argFoo;
                    mike = report.bind(zulu)(mike);
                    _fun115709_ip = 133; continue _fun115709;
 65:
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 24;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = report.bind(mike)(zulu);
                    mike = zulu.transitionTo;
                    oscar = _closure1_slot10;
                    report = oscar.CHANNEL;
                    tango = _closure2_slot0;
                    tango = tango.guild_id;
                    entity = _closure1_slot11;
                    entity = entity.ROLE_SUBSCRIPTIONS;
                    entity = report.bind(oscar)(tango, entity);
                    entity = mike.bind(zulu)(entity);
 133:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPress'] = golf;
            config = entity;
            sequence = report;
            report = copyDataProperties(config, sequence);
            report = 'children';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 25;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'uikit-native/guild_sidebar/ChannelItem.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['getChannelMode'] = mike;
    return entity;
})();