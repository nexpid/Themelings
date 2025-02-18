// app/uikit-native/guild_sidebar/ChannelItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    backup = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = backup;
    var _closure1_slot2 = golfie;
    michal = function(argFoo) { // Original name: getChannelMode
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = michal.muted;
            golfie = michal.selected;
            zuuluu = michal.unread;
            oscard = michal.locked;
            report = michal.channel;
            if(golfie) { _fun00002_ip = 259; continue _fun00001 }
 41:
            if(oscard) { _fun00002_ip = 223; continue _fun00001 }
 47:
            if(entity) { _fun00002_ip = 187; continue _fun00001 }
 53:
            if(zuuluu) { _fun00002_ip = 92; continue _fun00001 }
 56:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 13;
            oscard = oscard[entity];
            entity = undefined;
            entity = golfie.bind(entity)(oscard);
            entity = entity.ChannelModes;
            entity = entity.DEFAULT;
            _fun00002_ip = 185; continue _fun00001;
 92:
            oscard = michal.resolvedUnreadSetting;
            michal = _closure1_slot12;
            michal = michal.ALL_MESSAGES;
            if(!(oscard !== michal)) { _fun00002_ip = 148; continue _fun00001 }
 112:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 13;
            oscard = oscard[michal];
            michal = undefined;
            michal = golfie.bind(michal)(oscard);
            michal = michal.ChannelModes;
            michal = michal.UNREAD_LESS_IMPORTANT;
            _fun00002_ip = 182; continue _fun00001;
 148:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            oscard = 13;
            golfie = golfie[oscard];
            oscard = undefined;
            oscard = option.bind(oscard)(golfie);
            oscard = oscard.ChannelModes;
            michal = oscard.UNREAD_IMPORTANT;
 182:
            entity = michal;
 185:
            _fun00002_ip = 221; continue _fun00001;
 187:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 13;
            oscard = oscard[michal];
            michal = undefined;
            michal = golfie.bind(michal)(oscard);
            michal = michal.ChannelModes;
            entity = michal.MUTED;
 221:
            _fun00002_ip = 257; continue _fun00001;
 223:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 13;
            oscard = oscard[michal];
            michal = undefined;
            michal = golfie.bind(michal)(oscard);
            michal = michal.ChannelModes;
            entity = michal.LOCKED;
 257:
            _fun00002_ip = 331; continue _fun00001;
 259:
            michal = report.isGuildVocal;
            michal = michal.bind(report)();
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            tangon = 13;
            report = report[tangon];
            tangon = undefined;
            tangon = oscard.bind(tangon)(report);
            tangon = tangon.ChannelModes;
            if(michal) { _fun00002_ip = 308; continue _fun00001 }
 300:
            michal = tangon.SELECTED;
            _fun00002_ip = 328; continue _fun00001;
 308:
            if(zuuluu) { _fun00002_ip = 319; continue _fun00001 }
 311:
            zuuluu = tangon.RELEVANT;
            _fun00002_ip = 325; continue _fun00001;
 319:
            zuuluu = tangon.UNREAD_IMPORTANT;
 325:
            michal = zuuluu;
 328:
            entity = michal;
 331:
            return entity;
        }
    };
    var _closure1_slot17 = michal;
    entity = function(argFoo) { // Original name: ChannelIcon
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot16;
            tangon = undefined;
            verify = michal.bind(tangon)();
            golfie = zuuluu.channel;
            romeon = zuuluu.locked;
            michal = zuuluu.isRulesChannel;
            yankee = zuuluu.isChannelLive;
            oscard = zuuluu.selected;
            foxtra = zuuluu.mode;
            report = golfie.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.DM;
            if(!(report !== zuuluu)) { _fun00004_ip = 447; continue _fun00003 }
 72:
            report = golfie.type;
            zuuluu = _closure1_slot9;
            zuuluu = zuuluu.GROUP_DM;
            if(!(report === zuuluu)) { _fun00004_ip = 172; continue _fun00003 }
 91:
            report = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 14;
            zuuluu = option[zuuluu];
            option = report.bind(tangon)(zuuluu);
            report = option.getChannelIconSource;
            zuuluu = {};
            offset = golfie.id;
            zuuluu['id'] = offset;
            offset = golfie.icon;
            zuuluu['icon'] = offset;
            offset = golfie.getApplicationId;
            offset = offset.bind(golfie)();
            zuuluu['applicationId'] = offset;
            offset = 20;
            zuuluu['size'] = offset;
            option = report.bind(option)(zuuluu);
            zuuluu = null;
            if(!(zuuluu == option)) { _fun00004_ip = 399; continue _fun00003 }
 172:
            if(michal) { _fun00004_ip = 259; continue _fun00003 }
 175:
            report = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 18;
            zuuluu = offset[michal];
            sizing = report.bind(tangon)(zuuluu);
            kiloes = sizing.getChannelIcon;
            zuuluu = {};
            backup = false;
            zuuluu['isRulesChannel'] = backup;
            zuuluu['locked'] = romeon;
            zuuluu = kiloes.bind(sizing)(golfie, zuuluu);
            michal = offset[michal];
            offset = report.bind(tangon)(michal);
            report = offset.getChannelIconComponent;
            michal = {};
            michal['isRulesChannel'] = backup;
            michal['locked'] = romeon;
            romeon = report.bind(offset)(golfie, michal);
            offset = zuuluu;
            _fun00004_ip = 301; continue _fun00003;
 259:
            zuuluu = _closure1_slot1;
            backup = _closure1_slot2;
            michal = 16;
            michal = backup[michal];
            offset = zuuluu.bind(tangon)(michal);
            report = _closure1_slot0;
            michal = 17;
            michal = backup[michal];
            michal = report.bind(tangon)(michal);
            romeon = michal.BookCheckIcon;
 301:
            report = _closure1_slot13;
            zuuluu = _closure1_slot0;
            backup = _closure1_slot2;
            michal = 13;
            michal = backup[michal];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.BaseChannelIcon;
            michal = {};
            michal['mode'] = foxtra;
            michal['source'] = offset;
            michal['isChannelLive'] = yankee;
            offset = undefined;
            if(!yankee) { _fun00004_ip = 357; continue _fun00003 }
 351:
            offset = verify.channelIconLive;
 357:
            michal['style'] = offset;
            offset = null;
            if(!(offset == romeon)) { _fun00004_ip = 371; continue _fun00003 }
 367:
            offset = {};
            _fun00004_ip = 381; continue _fun00003;
 371:
            yankee = {};
            yankee['IconComponent'] = romeon;
            offset = yankee;
 381:
            echoed = michal;
            result = offset;
            offset = copyDataProperties(echoed, result);
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 399:
            report = _closure1_slot13;
            zuuluu = _closure1_slot1;
            offset = _closure1_slot2;
            michal = 15;
            michal = offset[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            verify = verify.groupDmAvatar;
            michal['style'] = verify;
            michal['source'] = option;
            michal = report.bind(tangon)(zuuluu, michal);
            return michal;
 447:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot19;
            entity = {};
            report = golfie.getRecipientId;
            report = report.bind(golfie)();
            entity['userId'] = report;
            report = null;
            report = report != oscard;
            if(!report) { _fun00004_ip = 483; continue _fun00003 }
 480:
            report = oscard;
 483:
            entity['selected'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: DMChannelIcon
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            foxtra = entity.userId;
            var _closure2_slot0 = foxtra;
            oscard = entity.selected;
            zuuluu = _closure1_slot16;
            tangon = undefined;
            golfie = zuuluu.bind(tangon)();
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zuuluu = 19;
            report = yankee[zuuluu];
            backup = offset.bind(tangon)(report);
            romeon = backup.useStateFromStores;
            report = _closure1_slot8;
            verify = new Array(1);
            verify[0] = report;
            option = new Array(1);
            option[0] = foxtra;
            report = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = romeon.bind(backup)(verify, report, option);
            zuuluu = yankee[zuuluu];
            verify = offset.bind(tangon)(zuuluu);
            option = verify.useStateFromStoresObject;
            zuuluu = _closure1_slot6;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = foxtra;
            michal = function() {
                entity = {};
                report = _closure1_slot6;
                zuuluu = report.getStatus;
                tangon = _closure2_slot0;
                zuuluu = zuuluu.bind(report)(tangon);
                entity['status'] = zuuluu;
                zuuluu = _closure1_slot6;
                michal = zuuluu.isMobileOnline;
                michal = michal.bind(zuuluu)(tangon);
                entity['isMobileOnline'] = michal;
                return entity;
            };
            michal = option.bind(verify)(report, michal, zuuluu);
            option = michal.status;
            report = michal.isMobileOnline;
            zuuluu = _closure1_slot13;
            michal = _closure1_slot1;
            verify = 20;
            entity = yankee[verify];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['user'] = romeon;
            entity['guildId'] = tangon;
            verify = yankee[verify];
            verify = offset.bind(tangon)(verify);
            verify = verify.AvatarSizes;
            verify = verify.XSMALL_20;
            entity['size'] = verify;
            verify = golfie.dmAvatar;
            entity['style'] = verify;
            entity['status'] = option;
            entity['isMobileOnline'] = report;
            option = golfie.avatarStatus;
            report = new Array(2);
            report[0] = option;
            if(!oscard) { _fun00006_ip = 249; continue _fun00005 }
 243:
            oscard = golfie.avatarStatusSelected;
 249:
            report[1] = oscard;
            entity['statusStyle'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = ['channel', 'subtitle', 'hideIcon', 'children', 'textStyle', 'channelInfo', 'onPress'];
    var _closure1_slot3 = entity;
    report = global;
    offset = report.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 0;
    option = golfie[entity];
    entity = undefined;
    option = backup.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 1;
    verify = golfie[option];
    option = argCor;
    option = option.bind(entity)(verify);
    verify = 2;
    verify = golfie[verify];
    verify = oscard.bind(entity)(verify);
    verify = verify.View;
    var _closure1_slot5 = verify;
    verify = 3;
    verify = golfie[verify];
    verify = backup.bind(entity)(verify);
    var _closure1_slot6 = verify;
    romeon = 4;
    verify = golfie[romeon];
    verify = backup.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 5;
    verify = golfie[verify];
    verify = backup.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    verify = golfie[verify];
    offset = oscard.bind(entity)(verify);
    verify = offset.ChannelTypes;
    var _closure1_slot9 = verify;
    offset = offset.Routes;
    var _closure1_slot10 = offset;
    offset = 7;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.StaticChannelRoute;
    var _closure1_slot11 = offset;
    kiloes = 8;
    offset = golfie[kiloes];
    offset = oscard.bind(entity)(offset);
    offset = offset.UnreadSetting;
    var _closure1_slot12 = offset;
    offset = 9;
    yankee = golfie[offset];
    yankee = oscard.bind(entity)(yankee);
    yankee = yankee.jsx;
    var _closure1_slot13 = yankee;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
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
    echoed = report;
    report = new update[offset](echoed, result);
    report = report instanceof Object ? report : verify;
    var _closure1_slot15 = report;
    report = 10;
    report = golfie[report];
    offset = oscard.bind(entity)(report);
    verify = offset.createStyles;
    report = {};
    yankee = {};
    foxtra = 11;
    sizing = golfie[foxtra];
    sizing = backup.bind(entity)(sizing);
    sizing = sizing.unsafe_rawColors;
    sizing = sizing.GREEN_360;
    yankee['tintColor'] = sizing;
    report['channelIconLive'] = yankee;
    yankee = {};
    yankee['marginRight'] = kiloes;
    report['dmAvatar'] = yankee;
    yankee = {};
    foxtra = golfie[foxtra];
    foxtra = backup.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_MOBILE_SECONDARY;
    yankee['backgroundColor'] = foxtra;
    report['avatarStatus'] = yankee;
    yankee = {'width': 20, 'height': 20, 'borderRadius': 10, 'marginRight': 8};
    report['groupDmAvatar'] = yankee;
    yankee = {};
    yankee['paddingStart'] = romeon;
    report['channelInfoContainer'] = yankee;
    yankee = {};
    romeon = 12;
    romeon = golfie[romeon];
    romeon = oscard.bind(entity)(romeon);
    romeon = romeon.DARK_393C42_LIGHT_DEE0E4;
    yankee['backgroundColor'] = romeon;
    report['avatarStatusSelected'] = yankee;
    report = verify.bind(offset)(report);
    var _closure1_slot16 = report;
    report = option.memo;
    tangon = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            romeon = argFoo;
            entity = _closure1_slot16;
            tangon = undefined;
            offset = entity.bind(tangon)();
            source = romeon.channel;
            var _closure2_slot0 = source;
            sizing = romeon.subtitle;
            yankee = romeon.hideIcon;
            oscard = romeon.children;
            kiloes = romeon.textStyle;
            result = romeon.channelInfo;
            entity = romeon.onPress;
            var _closure2_slot1 = entity;
            michal = _closure1_slot4;
            entity = _closure1_slot3;
            report = michal.bind(tangon)(romeon, entity);
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 21;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = source.id;
            entity = michal.bind(tangon)(entity);
            output = entity.isSubscriptionGated;
            update = entity.needSubscriptionToAccess;
            var _closure2_slot2 = update;
            entity = _closure1_slot17;
            foxtra = entity.bind(tangon)(romeon);
            backup = null;
            if(!(backup == result)) { _fun00008_ip = 145; continue _fun00007 }
 140:
            option = null;
            if(!output) { _fun00008_ip = 229; continue _fun00007 }
 145:
            zuuluu = _closure1_slot14;
            michal = _closure1_slot5;
            entity = {};
            offset = offset.channelInfoContainer;
            entity['style'] = offset;
            offset = new Array(2);
            offset[0] = result;
            backup = null;
            if(!output) { _fun00008_ip = 215; continue _fun00007 }
 178:
            echoed = _closure1_slot13;
            result = _closure1_slot1;
            ctrled = _closure1_slot2;
            output = 22;
            output = ctrled[output];
            result = result.bind(tangon)(output);
            output = {};
            output['locked'] = update;
            backup = echoed.bind(tangon)(result, output);
 215:
            offset[1] = backup;
            entity['children'] = offset;
            option = zuuluu.bind(tangon)(michal, entity);
 229:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot1;
            backup = _closure1_slot2;
            offset = 13;
            entity = backup[offset];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['mode'] = foxtra;
            output = _closure1_slot0;
            backup = backup[offset];
            backup = output.bind(tangon)(backup);
            backup = backup.ChannelModes;
            backup = backup.UNREAD_IMPORTANT;
            backup = foxtra === backup;
            if(backup) { _fun00008_ip = 324; continue _fun00007 }
 291:
            result = _closure1_slot0;
            output = _closure1_slot2;
            output = output[offset];
            output = result.bind(tangon)(output);
            output = output.ChannelModes;
            output = output.UNREAD_LESS_IMPORTANT;
            backup = foxtra === output;
 324:
            entity['unread'] = backup;
            entity['hideIcon'] = yankee;
            backup = _closure1_slot13;
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            offset = echoed[offset];
            offset = result.bind(tangon)(offset);
            yankee = offset.BaseChannelName;
            offset = {};
            offset['mode'] = foxtra;
            output = 23;
            output = echoed[output];
            update = result.bind(tangon)(output);
            echoed = update.computeChannelName;
            result = _closure1_slot8;
            output = _closure1_slot7;
            output = echoed.bind(update)(source, result, output);
            offset['name'] = output;
            offset['subtitle'] = sizing;
            offset['textStyle'] = kiloes;
            offset = backup.bind(tangon)(yankee, offset);
            entity['name'] = offset;
            yankee = _closure1_slot13;
            offset = _closure1_slot18;
            verify = {};
            config = verify;
            sequen = romeon;
            romeon = copyDataProperties(config, sequen);
            romeon = 'mode';
            verify[romeon] = foxtra;
            verify = yankee.bind(tangon)(offset, verify);
            entity['icon'] = verify;
            entity['channelInfo'] = option;
            golfie = function(argFoo) { // Original name: onPress
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot2;
                    if(!entity) { _fun00010_ip = 39; continue _fun00009 }
 10:
                    report = _closure1_slot15;
                    zuuluu = report.has;
                    michal = _closure2_slot0;
                    michal = michal.type;
                    michal = zuuluu.bind(report)(michal);
                    if(michal) { _fun00010_ip = 65; continue _fun00009 }
 39:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 133; continue _fun00009 }
 49:
                    report = _closure2_slot1;
                    zuuluu = undefined;
                    michal = argFoo;
                    michal = report.bind(zuuluu)(michal);
                    _fun00010_ip = 133; continue _fun00009;
 65:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 24;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = report.bind(michal)(zuuluu);
                    michal = zuuluu.transitionTo;
                    oscard = _closure1_slot10;
                    report = oscard.CHANNEL;
                    tangon = _closure2_slot0;
                    tangon = tangon.guild_id;
                    entity = _closure1_slot11;
                    entity = entity.ROLE_SUBSCRIPTIONS;
                    entity = report.bind(oscard)(tangon, entity);
                    entity = michal.bind(zuuluu)(entity);
 133:
                    entity = undefined;
                    return entity;
                }
            };
            entity['onPress'] = golfie;
            config = entity;
            sequen = report;
            report = copyDataProperties(config, sequen);
            report = 'children';
            entity[report] = oscard;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = 25;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'uikit-native/guild_sidebar/ChannelItem.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['getChannelMode'] = michal;
    return entity;
})();