// app/modules/hangouts/native/LiveActivityState.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: fallbackAvatar
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 13;
            michal = report[michal];
            report = undefined;
            golfie = tangon.bind(report)(michal);
            oscard = golfie.parseInteger;
            michal = zuuluu.discriminator;
            tangon = 0;
            michal = oscard.bind(golfie)(michal, tangon);
            if(!(!(michal > tangon))) { _fun00002_ip = 141; continue _fun00001 }
 52:
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 15;
            tangon = option[tangon];
            tangon = oscard.bind(report)(tangon);
            zuuluu = zuuluu.id;
            oscard = tangon.bind(report)(zuuluu);
            tangon = oscard.shiftRight;
            zuuluu = 22;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = oscard.mod;
            golfie = _closure1_slot0;
            zuuluu = 14;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.DEFAULT_AVATAR_COUNT;
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.toJSNumber;
            zuuluu = zuuluu.bind(tangon)();
            _fun00002_ip = 171; continue _fun00001;
 141:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 14;
            entity = oscard[entity];
            entity = tangon.bind(report)(entity);
            entity = entity.LEGACY_DEFAULT_AVATAR_COUNT;
            zuuluu = michal % entity;
 171:
            entity = global;
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = 'default_avatar_';
            entity = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: preloadAssetsForUser
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = null;
            if(!(report != entity)) { _fun00004_ip = 189; continue _fun00003 }
 12:
            tangon = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 14;
            zuuluu = oscard[zuuluu];
            oscard = undefined;
            offset = tangon.bind(oscard)(zuuluu);
            verify = offset.getUserAvatarURL;
            option = {};
            zuuluu = entity.id;
            option['id'] = zuuluu;
            zuuluu = entity.avatar;
            option['avatar'] = zuuluu;
            zuuluu = entity.discriminator;
            option['discriminator'] = zuuluu;
            foxtra = false;
            romeon = 32;
            yankee = 'png';
            kiloes = offset;
            backup = option;
            tangon = kiloes[verify](backup, foxtra, romeon, yankee, offset);
            golfie = 'number';
            zuuluu = typeof tangon;
            if(!(golfie !== zuuluu)) { _fun00004_ip = 189; continue _fun00003 }
 108:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 16;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.preloadAsset;
            entity = entity.avatar;
            report = report != entity;
            golfie = 'missing';
            if(!report) { _fun00004_ip = 154; continue _fun00003 }
 151:
            golfie = entity;
 154:
            entity = global;
            entity = entity.HermesInternal;
            oscard = entity.concat;
            report = '';
            entity = '.png';
            entity = oscard.bind(report)(golfie, entity);
            entity = michal.bind(zuuluu)(tangon, entity);
 189:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: getVoiceStateForUser
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            option = argFoo;
            report = argBar;
            var _closure2_slot0 = report;
            oscard = _closure1_slot12;
            zuuluu = oscard.getVoiceStateForChannel;
            michal = report.id;
            oscard = zuuluu.bind(oscard)(option, michal);
            zuuluu = null;
            if(!(zuuluu != oscard)) { _fun00006_ip = 224; continue _fun00005 }
 45:
            golfie = _closure1_slot3;
            michal = golfie.getEmbeddedActivitiesForChannel;
            option = michal.bind(golfie)(option);
            golfie = option.find;
            michal = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.userIds;
                michal = zuuluu.has;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = golfie.bind(option)(michal);
            option = _closure1_slot9;
            golfie = option.findActivity;
            report = report.id;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot14;
                entity = entity.CUSTOM_STATUS;
                entity = michal !== entity;
                return entity;
            };
            tangon = golfie.bind(option)(report, tangon);
            report = zuuluu == tangon;
            golfie = undefined;
            if(report) { _fun00006_ip = 120; continue _fun00005 }
 115:
            golfie = tangon.type;
 120:
            entity = _closure1_slot14;
            report = entity.LISTENING;
            tangon = oscard.selfStream;
            entity = 'screenshare';
            if(tangon) { _fun00006_ip = 222; continue _fun00005 }
 143:
            zuuluu = zuuluu != michal;
            michal = 'activity';
            if(zuuluu) { _fun00006_ip = 219; continue _fun00005 }
 154:
            tangon = oscard.selfVideo;
            zuuluu = 'video';
            if(tangon) { _fun00006_ip = 216; continue _fun00005 }
 167:
            tangon = 'music';
            if(!(golfie !== report)) { _fun00006_ip = 213; continue _fun00005 }
 177:
            golfie = oscard.selfDeaf;
            report = 'deafened';
            if(golfie) { _fun00006_ip = 210; continue _fun00005 }
 190:
            golfie = oscard.selfMute;
            oscard = 'default';
            if(!golfie) { _fun00006_ip = 207; continue _fun00005 }
 203:
            oscard = 'muted';
 207:
            report = oscard;
 210:
            tangon = report;
 213:
            zuuluu = tangon;
 216:
            michal = zuuluu;
 219:
            entity = michal;
 222:
            return entity;
 224:
            entity = 'default';
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: flattenAndConcatMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            entity = global;
            zuuluu = entity.Array;
            michal = zuuluu.isArray;
            michal = michal.bind(zuuluu)(report);
            if(michal) { _fun00008_ip = 46; continue _fun00007 }
 24:
            entity = entity.HermesInternal;
            michal = entity.concat;
            entity = '';
            entity = michal.bind(entity)(report);
            _fun00008_ip = 71; continue _fun00007;
 46:
            tangon = report.reduce;
            zuuluu = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    report = argBar;
                    entity = global;
                    michal = entity.Array;
                    entity = michal.isArray;
                    entity = entity.bind(michal)(report);
                    if(entity) { _fun00010_ip = 33; continue _fun00009 }
 27:
                    entity = zuuluu + report;
                    _fun00010_ip = 51; continue _fun00009;
 33:
                    tangon = _closure1_slot19;
                    michal = undefined;
                    michal = tangon.bind(michal)(report);
                    entity = zuuluu + michal;
 51:
                    return entity;
                }
            };
            michal = '';
            entity = tangon.bind(report)(zuuluu, michal);
 71:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityTypes;
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StatusTypes;
    var _closure1_slot15 = tangon;
    tangon = 20;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/hangouts/native/LiveActivityState.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = 30;
    zuuluu['MAX_MEMBERS'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: generateLiveActivityState
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            verify = argFoo;
            option = argBar;
            michal = argCor;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = option;
            tangon = _closure1_slot6;
            entity = tangon.getChannel;
            kiloes = entity.bind(tangon)(option);
            tangon = _closure1_slot8;
            entity = tangon.getGuild;
            tangon = entity.bind(tangon)(verify);
            oscard = _closure1_slot11;
            entity = oscard.getCurrentUser;
            romeon = entity.bind(oscard)();
            var _closure2_slot2 = romeon;
            entity = null;
            if(!(entity != kiloes)) { _fun00012_ip = 1035; continue _fun00011 }
 76:
            if(!(entity != tangon)) { _fun00012_ip = 1035; continue _fun00011 }
 83:
            if(!(entity != romeon)) { _fun00012_ip = 1035; continue _fun00011 }
 90:
            golfie = kiloes.type;
            yankee = _closure1_slot0;
            oscard = _closure1_slot2;
            foxtra = 17;
            oscard = oscard[foxtra];
            offset = undefined;
            oscard = yankee.bind(offset)(oscard);
            oscard = oscard.ChannelTypes;
            oscard = oscard.GUILD_VOICE;
            if(!(golfie === oscard)) { _fun00012_ip = 1035; continue _fun00011 }
 136:
            oscard = entity != michal;
            yankee = null;
            if(!oscard) { _fun00012_ip = 164; continue _fun00011 }
 145:
            backup = _closure1_slot6;
            golfie = backup.getChannel;
            oscard = michal.channel_id;
            yankee = golfie.bind(backup)(oscard);
 164:
            oscard = entity != michal;
            golfie = null;
            if(!oscard) { _fun00012_ip = 208; continue _fun00011 }
 173:
            sizing = _closure1_slot11;
            backup = sizing.getUser;
            output = michal.author;
            result = entity == output;
            oscard = undefined;
            if(result) { _fun00012_ip = 203; continue _fun00011 }
 198:
            oscard = output.id;
 203:
            golfie = backup.bind(sizing)(oscard);
 208:
            backup = _closure1_slot1;
            sizing = _closure1_slot2;
            oscard = 14;
            oscard = sizing[oscard];
            sizing = backup.bind(offset)(oscard);
            backup = sizing.getGuildIconURL;
            oscard = {};
            output = tangon.id;
            oscard['id'] = output;
            output = tangon.icon;
            oscard['icon'] = output;
            output = 32;
            oscard['size'] = output;
            result = backup.bind(sizing)(oscard);
            oscard = entity != result;
            if(!oscard) { _fun00012_ip = 281; continue _fun00011 }
 273:
            backup = '';
            oscard = backup !== result;
 281:
            if(!oscard) { _fun00012_ip = 381; continue _fun00011 }
 284:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            oscard = 16;
            oscard = sizing[oscard];
            output = backup.bind(offset)(oscard);
            sizing = output.preloadAsset;
            backup = result.replace;
            oscard = '.webp';
            update = '.png';
            backup = backup.bind(result)(oscard, update);
            oscard = tangon.icon;
            result = entity != oscard;
            echoed = 'missing';
            if(!result) { _fun00012_ip = 352; continue _fun00011 }
 349:
            echoed = oscard;
 352:
            oscard = global;
            oscard = oscard.HermesInternal;
            result = oscard.concat;
            oscard = '';
            oscard = result.bind(oscard)(echoed, update);
            oscard = sizing.bind(output)(backup, oscard);
 381:
            oscard = _closure1_slot17;
            oscard = oscard.bind(offset)(romeon);
            romeon = _closure1_slot7;
            oscard = romeon.getMembers;
            backup = oscard.bind(romeon)(verify);
            romeon = backup.map;
            oscard = function(argFoo) {
                zuuluu = _closure1_slot11;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = entity.userId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = romeon.bind(backup)(oscard);
            romeon = sizing.length;
            oscard = 30;
            if(!(romeon <= oscard)) { _fun00012_ip = 448; continue _fun00011 }
 434:
            romeon = sizing.forEach;
            oscard = _closure1_slot17;
            oscard = romeon.bind(sizing)(oscard);
 448:
            oscard = new Array(0);
            var _closure2_slot3 = oscard;
            backup = _closure1_slot13;
            romeon = backup.getVoiceStatesForChannel;
            output = romeon.bind(backup)(kiloes);
            backup = output.forEach;
            romeon = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    oscard = entity.user;
                    zuuluu = _closure1_slot17;
                    michal = entity.user;
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    tangon = _closure2_slot3;
                    zuuluu = tangon.push;
                    michal = {};
                    option = oscard.id;
                    michal['id'] = option;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 18;
                    option = offset[option];
                    yankee = verify.bind(entity)(option);
                    offset = yankee.getName;
                    verify = _closure2_slot0;
                    option = _closure2_slot1;
                    option = offset.bind(yankee)(verify, option, oscard);
                    michal['name'] = option;
                    option = oscard.avatar;
                    verify = null;
                    verify = verify != option;
                    yankee = 'missing';
                    if(!verify) { _fun00014_ip = 117; continue _fun00013 }
 114:
                    yankee = option;
 117:
                    option = global;
                    option = option.HermesInternal;
                    offset = option.concat;
                    verify = '';
                    option = '.png';
                    option = offset.bind(verify)(yankee, option);
                    michal['avatar'] = option;
                    offset = _closure1_slot10;
                    verify = offset.isSpeaking;
                    option = oscard.id;
                    option = verify.bind(offset)(option);
                    michal['speaking'] = option;
                    option = _closure1_slot18;
                    golfie = _closure2_slot1;
                    golfie = option.bind(entity)(golfie, oscard);
                    michal['voiceStatus'] = golfie;
                    report = _closure1_slot16;
                    report = report.bind(entity)(oscard);
                    michal['fallbackAvatar'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            romeon = backup.bind(output)(romeon);
            backup = sizing.filter;
            romeon = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00016_ip = 21; continue _fun00015 }
 12:
                    michal = zuuluu.bot;
                    entity = !michal;
 21:
                    if(!entity) { _fun00016_ip = 69; continue _fun00015 }
 24:
                    oscard = _closure1_slot9;
                    report = oscard.getStatus;
                    tangon = zuuluu.id;
                    zuuluu = _closure2_slot0;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    michal = _closure1_slot15;
                    michal = michal.ONLINE;
                    entity = zuuluu === michal;
 69:
                    return entity;
                }
            };
            sizing = backup.bind(sizing)(romeon);
            backup = sizing.map;
            romeon = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argFoo;
                    entity = {};
                    michal = tangon.id;
                    entity['id'] = michal;
                    michal = tangon.avatar;
                    zuuluu = null;
                    zuuluu = zuuluu != michal;
                    oscard = 'missing';
                    if(!zuuluu) { _fun00018_ip = 36; continue _fun00017 }
 33:
                    oscard = michal;
 36:
                    michal = global;
                    michal = michal.HermesInternal;
                    report = michal.concat;
                    zuuluu = '';
                    michal = '.png';
                    michal = report.bind(zuuluu)(oscard, michal);
                    entity['avatar'] = michal;
                    zuuluu = _closure1_slot16;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
                    entity['fallbackAvatar'] = michal;
                    return entity;
                }
            };
            sizing = backup.bind(sizing)(romeon);
            backup = sizing.filter;
            romeon = function(argFoo) {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    golfie = entity.id;
                    entity = _closure2_slot2;
                    michal = null;
                    entity = michal == entity;
                    tangon = undefined;
                    if(entity) { _fun00020_ip = 35; continue _fun00019 }
 26:
                    entity = _closure2_slot2;
                    tangon = entity.id;
 35:
                    entity = false;
                    if(!(golfie !== tangon)) { _fun00020_ip = 87; continue _fun00019 }
 41:
                    oscard = _closure1_slot12;
                    report = oscard.getVoiceState;
                    tangon = _closure2_slot0;
                    tangon = report.bind(oscard)(tangon, golfie);
                    michal = michal != tangon;
                    if(!michal) { _fun00020_ip = 84; continue _fun00019 }
 71:
                    tangon = tangon.channelId;
                    zuuluu = _closure2_slot1;
                    michal = tangon === zuuluu;
 84:
                    entity = michal;
 87:
                    entity = !entity;
                    return entity;
                }
            };
            backup = backup.bind(sizing)(romeon);
            romeon = backup.sort;
            zuuluu = function(argFoo, argBar) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure1_slot5;
                    michal = zuuluu.getUserAffinity;
                    entity = argFoo;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
                    tangon = null;
                    michal = tangon == entity;
                    oscard = undefined;
                    if(michal) { _fun00022_ip = 43; continue _fun00021 }
 37:
                    oscard = entity.communicationProbability;
 43:
                    golfie = tangon != oscard;
                    entity = 0;
                    if(!golfie) { _fun00022_ip = 55; continue _fun00021 }
 52:
                    entity = oscard;
 55:
                    golfie = _closure1_slot5;
                    oscard = golfie.getUserAffinity;
                    report = argBar;
                    report = report.id;
                    report = oscard.bind(golfie)(report);
                    oscard = tangon == report;
                    zuuluu = undefined;
                    if(oscard) { _fun00022_ip = 93; continue _fun00021 }
 87:
                    zuuluu = report.communicationProbability;
 93:
                    tangon = tangon != zuuluu;
                    michal = 0;
                    if(!tangon) { _fun00022_ip = 105; continue _fun00021 }
 102:
                    michal = zuuluu;
 105:
                    entity = michal - entity;
                    return entity;
                }
            };
            romeon = romeon.bind(backup)(zuuluu);
            backup = entity != michal;
            if(!backup) { _fun00012_ip = 568; continue _fun00011 }
 564:
            backup = entity != yankee;
 568:
            zuuluu = null;
            if(!backup) { _fun00012_ip = 642; continue _fun00011 }
 573:
            backup = _closure1_slot19;
            output = _closure1_slot0;
            result = _closure1_slot2;
            sizing = 19;
            sizing = result[sizing];
            output = output.bind(offset)(sizing);
            sizing = output.getWidgetMessageRules;
            result = sizing.bind(output)();
            output = michal.content;
            sizing = {};
            michal = true;
            sizing['noStyleAndInteraction'] = michal;
            echoed = yankee.id;
            sizing['channelId'] = echoed;
            michal = result.bind(offset)(output, michal, sizing);
            zuuluu = backup.bind(offset)(michal);
 642:
            michal = {};
            michal['guildId'] = verify;
            michal['channelId'] = option;
            backup = kiloes.name;
            michal['voiceName'] = backup;
            tangon = tangon.icon;
            backup = entity != tangon;
            output = 'missing';
            if(!backup) { _fun00012_ip = 683; continue _fun00011 }
 680:
            output = tangon;
 683:
            tangon = global;
            tangon = tangon.HermesInternal;
            sizing = tangon.concat;
            backup = '';
            tangon = '.png';
            tangon = sizing.bind(backup)(output, tangon);
            michal['guildIcon'] = tangon;
            backup = _closure1_slot4;
            tangon = backup.getChannelStatus;
            backup = tangon.bind(backup)(kiloes);
            kiloes = entity != backup;
            tangon = null;
            if(!kiloes) { _fun00012_ip = 744; continue _fun00011 }
 741:
            tangon = backup;
 744:
            michal['status'] = tangon;
            michal['voiceUsers'] = oscard;
            tangon = argBaz;
            michal['selfInVoice'] = tangon;
            kiloes = romeon.slice;
            tangon = 0;
            backup = 2;
            kiloes = kiloes.bind(romeon)(tangon, backup);
            michal['availableUsers'] = kiloes;
            kiloes = romeon.length;
            kiloes = kiloes > backup;
            if(!kiloes) { _fun00012_ip = 807; continue _fun00011 }
 798:
            romeon = romeon.length;
            tangon = romeon - backup;
 807:
            michal['availableOverflow'] = tangon;
            romeon = oscard.length;
            tangon = 1;
            romeon = romeon > tangon;
            tangon = 'Hangout in';
            if(romeon) { _fun00012_ip = 865; continue _fun00011 }
 835:
            romeon = oscard.length;
            oscard = 4;
            romeon = romeon > oscard;
            oscard = "Solo vibin' in";
            if(!romeon) { _fun00012_ip = 862; continue _fun00011 }
 856:
            oscard = "It's stacked in";
 862:
            tangon = oscard;
 865:
            michal['voiceDescriptor'] = tangon;
            tangon = 'Join hangout';
            michal['joinCTAText'] = tangon;
            tangon = 'Invite friends';
            michal['shareCTAText'] = tangon;
            tangon = entity == yankee;
            romeon = undefined;
            if(tangon) { _fun00012_ip = 912; continue _fun00011 }
 907:
            romeon = yankee.type;
 912:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[foxtra];
            tangon = oscard.bind(offset)(tangon);
            tangon = tangon.ChannelTypes;
            oscard = tangon.GUILD_TEXT;
            tangon = null;
            if(!(romeon === oscard)) { _fun00012_ip = 973; continue _fun00011 }
 947:
            romeon = entity == yankee;
            oscard = undefined;
            if(romeon) { _fun00012_ip = 961; continue _fun00011 }
 956:
            oscard = yankee.name;
 961:
            yankee = entity != oscard;
            tangon = null;
            if(!yankee) { _fun00012_ip = 973; continue _fun00011 }
 970:
            tangon = oscard;
 973:
            michal['messageChannelName'] = tangon;
            oscard = entity != golfie;
            tangon = null;
            if(!oscard) { _fun00012_ip = 1022; continue _fun00011 }
 989:
            oscard = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 18;
            report = yankee[report];
            oscard = oscard.bind(offset)(report);
            report = oscard.getName;
            tangon = report.bind(oscard)(verify, option, golfie);
 1022:
            michal['messageAuthorName'] = tangon;
            michal['message'] = zuuluu;
            return michal;
 1035:
            return entity;
        }
    };
    zuuluu['generateLiveActivityState'] = michal;
    return entity;
})();