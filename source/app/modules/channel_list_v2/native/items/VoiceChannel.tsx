// app/modules/channel_list_v2/native/items/VoiceChannel.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = option;
    entity = function() { // Original name: _handleVoiceChannelPress
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 210; continue _fun00001 }
 13:
                    michal = verify.getGuildId;
                    report = michal.bind(verify)();
                    michal = null;
                    if(!(michal != report)) { _fun00002_ip = 68; continue _fun00001 }
 29:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(zuuluu);
                    zuuluu = oscard.shouldShowMembershipVerificationGate;
                    zuuluu = zuuluu.bind(oscard)(report);
                    if(zuuluu) { _fun00002_ip = 145; continue _fun00001 }
 68:
                    option = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    oscard = 14;
                    golfie = zuuluu[oscard];
                    oscard = undefined;
                    option = option.bind(oscard)(golfie);
                    golfie = 15;
                    golfie = zuuluu[golfie];
                    zuuluu = zuuluu.paths;
                    zuuluu = option.bind(oscard)(golfie, zuuluu);
                    SaveGenerator(address=115);
 113:
                    return zuuluu;
 115:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 142; continue _fun00001 }
 121:
                    option = zuuluu.openGuildVoiceModal;
                    golfie = 'Channel List';
                    golfie = option.bind(oscard)(verify, golfie);
                    return oscard;
 142:
                    return zuuluu;
 145:
                    oscard = _closure1_slot0;
                    michal = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = michal[zuuluu];
                    oscard = oscard.bind(tangon)(zuuluu);
                    zuuluu = 13;
                    zuuluu = michal[zuuluu];
                    michal = michal.paths;
                    michal = oscard.bind(tangon)(zuuluu, michal);
                    SaveGenerator(address=187);
 185:
                    return michal;
 187:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 207; continue _fun00001 }
 193:
                    zuuluu = michal.openMemberVerificationModal;
                    zuuluu = zuuluu.bind(tangon)(report);
                    return zuuluu;
 207:
                    return michal;
 210:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = global;
    oscard = entity.Object;
    tangon = oscard.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(oscard)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = romeon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    tangon = option[michal];
    michal = argCor;
    verify = michal.bind(entity)(tangon);
    var _closure1_slot4 = verify;
    michal = 2;
    tangon = option[michal];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = option[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = option[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = option[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = option[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.NO_VOICE_STATES;
    var _closure1_slot10 = tangon;
    foxtra = 8;
    tangon = option[foxtra];
    tangon = golfie.bind(entity)(tangon);
    backup = tangon.CHANNEL_MARGIN_VERTICAL;
    tangon = 9;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    oscard = tangon.AnalyticEvents;
    var _closure1_slot11 = oscard;
    tangon = tangon.Permissions;
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = option[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot13 = tangon;
    oscard = {};
    tangon = {'flexDirection': 'row', 'alignItems': 'center', 'gap': null, 'maxHeight': 1};
    yankee = 11;
    offset = option[yankee];
    offset = romeon.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_8;
    tangon['gap'] = offset;
    oscard['channelInfo'] = tangon;
    tangon = -4;
    offset = {'marginLeft': 36, 'marginTop': 4294967292, 'marginBottom': 2};
    oscard['voiceStates'] = offset;
    offset = {};
    kiloes = 16;
    offset['marginLeft'] = kiloes;
    oscard['voiceStatesCollapsed'] = offset;
    offset = {};
    offset['marginVertical'] = backup;
    offset['marginHorizontal'] = foxtra;
    yankee = option[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.radii;
    yankee = yankee.md;
    offset['borderRadius'] = yankee;
    oscard['container'] = offset;
    var _closure1_slot14 = oscard;
    offset = verify.memo;
    oscard = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            yankee = entity.channel;
            var _closure2_slot0 = yankee;
            result = entity.selected;
            output = entity.locked;
            foxtra = entity.collapsed;
            oscard = entity.voiceStates;
            zuuluu = entity.subtitle;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            michal = _closure1_slot0;
            report = _closure1_slot2;
            entity = 16;
            entity = report[entity];
            option = michal.bind(tangon)(entity);
            golfie = option.useActiveEvent;
            entity = yankee.id;
            option = golfie.bind(option)(entity);
            entity = 17;
            entity = report[entity];
            report = michal.bind(tangon)(entity);
            michal = report.useEnsureSyncedChannelVoiceStates;
            entity = yankee.id;
            backup = michal.bind(report)(entity, oscard);
            entity = backup.length;
            report = null;
            michal = report != entity;
            golfie = 0;
            echoed = 0;
            if(!michal) { _fun00004_ip = 139; continue _fun00003 }
 136:
            echoed = entity;
 139:
            michal = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 18;
            entity = oscard[entity];
            offset = michal.bind(tangon)(entity);
            entity = offset.useIsConnectedToVoiceChannel;
            sizing = entity.bind(offset)(yankee);
            entity = 19;
            entity = oscard[entity];
            update = michal.bind(tangon)(entity);
            kiloes = update.useStateFromStoresObject;
            entity = _closure1_slot8;
            romeon = new Array(2);
            romeon[0] = entity;
            entity = _closure1_slot9;
            romeon[1] = entity;
            offset = new Array(1);
            offset[0] = yankee;
            entity = function() {
                entity = {};
                oscard = _closure1_slot8;
                report = oscard.hasUnread;
                tangon = _closure2_slot0;
                zuuluu = tangon.id;
                zuuluu = report.bind(oscard)(zuuluu);
                entity['hasUnread'] = zuuluu;
                report = oscard.getMentionCount;
                zuuluu = tangon.id;
                zuuluu = report.bind(oscard)(zuuluu);
                entity['mentionCount'] = zuuluu;
                zuuluu = _closure1_slot9;
                michal = zuuluu.resolveUnreadSetting;
                michal = michal.bind(zuuluu)(tangon);
                entity['resolvedUnreadSetting'] = michal;
                return entity;
            };
            entity = kiloes.bind(update)(romeon, entity, offset);
            kiloes = entity.hasUnread;
            update = entity.mentionCount;
            romeon = entity.resolvedUnreadSetting;
            entity = 20;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.getChannelSubtitleData;
            michal = entity.bind(michal)(zuuluu);
            entity = report == zuuluu;
            offset = undefined;
            if(entity) { _fun00004_ip = 285; continue _fun00003 }
 280:
            offset = zuuluu.type;
 285:
            oscard = 'voice';
            entity = null;
            if(!(oscard === offset)) { _fun00004_ip = 319; continue _fun00003 }
 295:
            oscard = zuuluu.text;
            oscard = oscard.length;
            oscard = oscard > golfie;
            entity = null;
            if(!oscard) { _fun00004_ip = 319; continue _fun00003 }
 314:
            entity = zuuluu.text;
 319:
            _closure2_slot1 = entity;
            zuuluu = report != entity;
            offset = null;
            if(!zuuluu) { _fun00004_ip = 378; continue _fun00003 }
 332:
            oscard = _closure1_slot1;
            ctrled = _closure1_slot2;
            zuuluu = 21;
            zuuluu = ctrled[zuuluu];
            vacuum = oscard.bind(tangon)(zuuluu);
            ctrled = vacuum.parseVoiceChannelStatus;
            oscard = {};
            zuuluu = yankee.id;
            oscard['channelId'] = zuuluu;
            zuuluu = true;
            offset = ctrled.bind(vacuum)(entity, zuuluu, oscard);
 378:
            oscard = _closure1_slot1;
            ctrled = _closure1_slot2;
            zuuluu = 22;
            zuuluu = ctrled[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = {};
            zuuluu['channel'] = yankee;
            zuuluu['unread'] = kiloes;
            zuuluu['mentionCount'] = update;
            zuuluu['userCount'] = echoed;
            echoed = oscard.bind(tangon)(zuuluu);
            update = _closure1_slot4;
            oscard = update.useEffect;
            ctrled = yankee.id;
            zuuluu = new Array(3);
            zuuluu[0] = ctrled;
            ctrled = yankee.guild_id;
            zuuluu[1] = ctrled;
            zuuluu[2] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = null;
                    if(!(entity !== michal)) { _fun00006_ip = 83; continue _fun00005 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 23;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.track;
                    entity = _closure1_slot11;
                    michal = entity.VOICE_CHANNEL_TOPIC_VIEWED;
                    entity = {};
                    report = _closure2_slot0;
                    oscard = report.guild_id;
                    entity['guild_id'] = oscard;
                    report = report.id;
                    entity['channel_id'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 83:
                    entity = undefined;
                    return entity;
                }
            };
            entity = oscard.bind(update)(entity, zuuluu);
            if(!(report == offset)) { _fun00004_ip = 494; continue _fun00003 }
 476:
            zuuluu = report == michal;
            entity = undefined;
            if(zuuluu) { _fun00004_ip = 491; continue _fun00003 }
 485:
            entity = michal.subtitle;
 491:
            offset = entity;
 494:
            zuuluu = _closure1_slot13;
            michal = _closure1_slot1;
            ctrled = _closure1_slot2;
            entity = 24;
            entity = ctrled[entity];
            oscard = michal.bind(tangon)(entity);
            entity = {};
            entity['channel'] = yankee;
            entity['isChannelSelected'] = result;
            entity['isChannelCollapsed'] = foxtra;
            entity['voiceStates'] = backup;
            update = true;
            entity['enableConnectedUserLimit'] = update;
            entity['enableActivities'] = update;
            oscard = zuuluu.bind(tangon)(oscard, entity);
            entity = 25;
            entity = ctrled[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            ctrled = function() { // Original name: onPress
                zuuluu = _closure2_slot0;
                michal = function() { // Original name: handleVoiceChannelPress
                    entity = undefined;
                    tangon = _closure1_slot16;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                entity = undefined;
                entity = michal.bind(entity)(zuuluu);
                return entity;
            };
            entity['onPress'] = ctrled;
            source = function() { // Original name: onLongPress
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 26;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.openChannelLongPressActionSheet;
                michal = _closure2_slot0;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity['onLongPress'] = source;
            source = _closure1_slot14;
            source = source.container;
            entity['style'] = source;
            entity['accessible'] = update;
            update = 'button';
            entity['accessibilityRole'] = update;
            entity['accessibilityLabel'] = echoed;
            entity['channel'] = yankee;
            entity['selected'] = result;
            entity['locked'] = output;
            if(!kiloes) { _fun00004_ip = 644; continue _fun00003 }
 641:
            kiloes = sizing;
 644:
            entity['unread'] = kiloes;
            entity['resolvedUnreadSetting'] = romeon;
            entity['subtitle'] = offset;
            option = report != option;
            entity['isChannelLive'] = option;
            entity['channelInfo'] = oscard;
            oscard = backup.length;
            report = null;
            if(!(golfie !== oscard)) { _fun00004_ip = 933; continue _fun00003 }
 687:
            if(foxtra) { _fun00004_ip = 771; continue _fun00003 }
 690:
            option = _closure1_slot13;
            golfie = _closure1_slot5;
            oscard = {};
            offset = _closure1_slot14;
            offset = offset.voiceStates;
            oscard['style'] = offset;
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            offset = 29;
            offset = kiloes[offset];
            romeon = romeon.bind(tangon)(offset);
            offset = {};
            offset['channel'] = yankee;
            offset['collapsed'] = foxtra;
            offset['voiceStates'] = backup;
            offset = option.bind(tangon)(romeon, offset);
            oscard['children'] = offset;
            report = option.bind(tangon)(golfie, oscard);
            _fun00004_ip = 933; continue _fun00003;
 771:
            golfie = _closure1_slot0;
            foxtra = _closure1_slot2;
            oscard = 27;
            oscard = foxtra[oscard];
            option = golfie.bind(tangon)(oscard);
            golfie = option.computeSummarizedVoiceUsers;
            oscard = {'channels': null, 'selectedChannelId': null, 'selectedVoiceChannelId': null};
            offset = new Array(1);
            offset[0] = yankee;
            oscard['channels'] = offset;
            offset = {};
            romeon = yankee.id;
            offset[romeon] = backup;
            oscard['voiceStates'] = offset;
            romeon = golfie.bind(option)(oscard);
            option = _closure1_slot13;
            golfie = _closure1_slot5;
            oscard = {};
            offset = _closure1_slot14;
            offset = offset.voiceStatesCollapsed;
            oscard['style'] = offset;
            offset = _closure1_slot1;
            verify = 28;
            verify = foxtra[verify];
            offset = offset.bind(tangon)(verify);
            verify = {};
            verify['users'] = romeon;
            romeon = 8;
            verify['max'] = romeon;
            yankee = yankee.guild_id;
            verify['guildId'] = yankee;
            yankee = false;
            verify['renderIcon'] = yankee;
            verify = option.bind(tangon)(offset, verify);
            oscard['children'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 933:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    oscard = offset.bind(verify)(oscard);
    var _closure1_slot15 = oscard;
    oscard = verify.memo;
    report = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            verify = michal.channel;
            var _closure2_slot0 = verify;
            option = michal.selected;
            report = michal.subtitle;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 30;
            michal = oscard[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = verify.guild_id;
            yankee = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot0;
            michal = 19;
            michal = oscard[michal];
            oscard = zuuluu.bind(tangon)(michal);
            zuuluu = oscard.useStateFromStoresObject;
            golfie = _closure1_slot7;
            michal = new Array(2);
            michal[0] = golfie;
            golfie = _closure1_slot6;
            michal[1] = golfie;
            entity = function() {
                entity = {};
                oscard = _closure1_slot7;
                golfie = oscard.can;
                tangon = _closure1_slot12;
                report = tangon.CONNECT;
                michal = _closure2_slot0;
                report = golfie.bind(oscard)(report, michal);
                report = !report;
                entity['locked'] = report;
                report = oscard.can;
                tangon = tangon.MOVE_MEMBERS;
                tangon = report.bind(oscard)(tangon, michal);
                entity['bypassLimit'] = tangon;
                tangon = _closure1_slot6;
                zuuluu = tangon.isCollapsed;
                michal = michal.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['collapsed'] = michal;
                return entity;
            };
            entity = zuuluu.bind(oscard)(michal, entity);
            golfie = entity.locked;
            oscard = entity.bypassLimit;
            romeon = entity.collapsed;
            zuuluu = _closure1_slot13;
            michal = _closure1_slot15;
            entity = {};
            entity['channel'] = verify;
            entity['collapsed'] = romeon;
            verify = verify.id;
            verify = yankee[verify];
            yankee = null;
            if(!(yankee == verify)) { _fun00008_ip = 172; continue _fun00007 }
 168:
            verify = _closure1_slot10;
 172:
            entity['voiceStates'] = verify;
            entity['selected'] = option;
            entity['locked'] = golfie;
            entity['bypassLimit'] = oscard;
            entity['subtitle'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    report = oscard.bind(verify)(report);
    oscard = 31;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/channel_list_v2/native/items/VoiceChannel.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['VOICE_USERS_MARGIN_TOP'] = tangon;
    zuuluu['VOICE_USERS_MARGIN_BOTTOM'] = michal;
    return entity;
})();