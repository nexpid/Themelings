// app/modules/hangouts/native/LiveActivityState.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: fallbackAvatar
        _fun124155: for(var _fun124155_ip = 0; ; ) switch(_fun124155_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 13;
            mike = report[mike];
            report = undefined;
            golf = tango.bind(report)(mike);
            oscar = golf.parseInteger;
            mike = zulu.discriminator;
            tango = 0;
            mike = oscar.bind(golf)(mike, tango);
            if(!(!(mike > tango))) { _fun124155_ip = 141; continue _fun124155 }
 52:
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            tango = 15;
            tango = options[tango];
            tango = oscar.bind(report)(tango);
            zulu = zulu.id;
            oscar = tango.bind(report)(zulu);
            tango = oscar.shiftRight;
            zulu = 22;
            oscar = tango.bind(oscar)(zulu);
            tango = oscar.mod;
            golf = _closure1_slot0;
            zulu = 14;
            zulu = options[zulu];
            zulu = golf.bind(report)(zulu);
            zulu = zulu.DEFAULT_AVATAR_COUNT;
            tango = tango.bind(oscar)(zulu);
            zulu = tango.toJSNumber;
            zulu = zulu.bind(tango)();
            _fun124155_ip = 171; continue _fun124155;
 141:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 14;
            entity = oscar[entity];
            entity = tango.bind(report)(entity);
            entity = entity.LEGACY_DEFAULT_AVATAR_COUNT;
            zulu = mike % entity;
 171:
            entity = global;
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = 'default_avatar_';
            entity = mike.bind(entity)(zulu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: preloadAssetsForUser
        _fun124156: for(var _fun124156_ip = 0; ; ) switch(_fun124156_ip) {
 0:
            entity = argFoo;
            report = null;
            if(!(report != entity)) { _fun124156_ip = 189; continue _fun124156 }
 12:
            tango = _closure1_slot1;
            oscar = _closure1_slot2;
            zulu = 14;
            zulu = oscar[zulu];
            oscar = undefined;
            offset = tango.bind(oscar)(zulu);
            verify = offset.getUserAvatarURL;
            options = {};
            zulu = entity.id;
            options['id'] = zulu;
            zulu = entity.avatar;
            options['avatar'] = zulu;
            zulu = entity.discriminator;
            options['discriminator'] = zulu;
            foxtrot = false;
            romeo = 32;
            yankee = 'png';
            kilo = offset;
            backup = options;
            tango = kilo[verify](backup, foxtrot, romeo, yankee, offset);
            golf = 'number';
            zulu = typeof tango;
            if(!(golf !== zulu)) { _fun124156_ip = 189; continue _fun124156 }
 108:
            zulu = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 16;
            mike = golf[mike];
            zulu = zulu.bind(oscar)(mike);
            mike = zulu.preloadAsset;
            entity = entity.avatar;
            report = report != entity;
            golf = 'missing';
            if(!report) { _fun124156_ip = 154; continue _fun124156 }
 151:
            golf = entity;
 154:
            entity = global;
            entity = entity.HermesInternal;
            oscar = entity.concat;
            report = '';
            entity = '.png';
            entity = oscar.bind(report)(golf, entity);
            entity = mike.bind(zulu)(tango, entity);
 189:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: getVoiceStateForUser
        _fun124157: for(var _fun124157_ip = 0; ; ) switch(_fun124157_ip) {
 0:
            options = argFoo;
            report = argBar;
            var _closure2_slot0 = report;
            oscar = _closure1_slot12;
            zulu = oscar.getVoiceStateForChannel;
            mike = report.id;
            oscar = zulu.bind(oscar)(options, mike);
            zulu = null;
            if(!(zulu != oscar)) { _fun124157_ip = 223; continue _fun124157 }
 45:
            golf = _closure1_slot3;
            mike = golf.getEmbeddedActivitiesForChannel;
            options = mike.bind(golf)(options);
            golf = options.find;
            mike = function(argFoo) {
                entity = argFoo;
                zulu = entity.userIds;
                mike = zulu.has;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = golf.bind(options)(mike);
            options = _closure1_slot9;
            golf = options.findActivity;
            report = report.id;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                entity = _closure1_slot14;
                entity = entity.CUSTOM_STATUS;
                entity = mike !== entity;
                return entity;
            };
            tango = golf.bind(options)(report, tango);
            report = zulu == tango;
            golf = undefined;
            if(report) { _fun124157_ip = 119; continue _fun124157 }
 114:
            golf = tango.type;
 119:
            entity = _closure1_slot14;
            report = entity.LISTENING;
            tango = oscar.selfStream;
            entity = 'screenshare';
            if(tango) { _fun124157_ip = 221; continue _fun124157 }
 142:
            zulu = zulu != mike;
            mike = 'activity';
            if(zulu) { _fun124157_ip = 218; continue _fun124157 }
 153:
            tango = oscar.selfVideo;
            zulu = 'video';
            if(tango) { _fun124157_ip = 215; continue _fun124157 }
 166:
            tango = 'music';
            if(!(golf !== report)) { _fun124157_ip = 212; continue _fun124157 }
 176:
            golf = oscar.selfDeaf;
            report = 'deafened';
            if(golf) { _fun124157_ip = 209; continue _fun124157 }
 189:
            golf = oscar.selfMute;
            oscar = 'default';
            if(!golf) { _fun124157_ip = 206; continue _fun124157 }
 202:
            oscar = 'muted';
 206:
            report = oscar;
 209:
            tango = report;
 212:
            zulu = tango;
 215:
            mike = zulu;
 218:
            entity = mike;
 221:
            return entity;
 223:
            entity = 'default';
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: flattenAndConcatMessage
        _fun124160: for(var _fun124160_ip = 0; ; ) switch(_fun124160_ip) {
 0:
            report = argFoo;
            entity = global;
            zulu = entity.Array;
            mike = zulu.isArray;
            mike = mike.bind(zulu)(report);
            if(mike) { _fun124160_ip = 46; continue _fun124160 }
 24:
            entity = entity.HermesInternal;
            mike = entity.concat;
            entity = '';
            entity = mike.bind(entity)(report);
            _fun124160_ip = 71; continue _fun124160;
 46:
            tango = report.reduce;
            zulu = function(argFoo, argBar) {
                _fun124161: for(var _fun124161_ip = 0; ; ) switch(_fun124161_ip) {
 0:
                    zulu = argFoo;
                    report = argBar;
                    entity = global;
                    mike = entity.Array;
                    entity = mike.isArray;
                    entity = entity.bind(mike)(report);
                    if(entity) { _fun124161_ip = 33; continue _fun124161 }
 27:
                    entity = zulu + report;
                    _fun124161_ip = 51; continue _fun124161;
 33:
                    tango = _closure1_slot19;
                    mike = undefined;
                    mike = tango.bind(mike)(report);
                    entity = zulu + mike;
 51:
                    return entity;
                }
            };
            mike = '';
            entity = tango.bind(report)(zulu, mike);
 71:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityTypes;
    var _closure1_slot14 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StatusTypes;
    var _closure1_slot15 = tango;
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/hangouts/native/LiveActivityState.tsx';
    tango = report.bind(oscar)(tango);
    tango = 30;
    zulu['MAX_MEMBERS'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: generateLiveActivityState
        _fun124162: for(var _fun124162_ip = 0; ; ) switch(_fun124162_ip) {
 0:
            verify = argFoo;
            options = argBar;
            mike = argCorge;
            var _closure2_slot0 = verify;
            var _closure2_slot1 = options;
            tango = _closure1_slot6;
            entity = tango.getChannel;
            kilo = entity.bind(tango)(options);
            tango = _closure1_slot8;
            entity = tango.getGuild;
            tango = entity.bind(tango)(verify);
            oscar = _closure1_slot11;
            entity = oscar.getCurrentUser;
            romeo = entity.bind(oscar)();
            var _closure2_slot2 = romeo;
            entity = null;
            if(!(entity != kilo)) { _fun124162_ip = 1035; continue _fun124162 }
 76:
            if(!(entity != tango)) { _fun124162_ip = 1035; continue _fun124162 }
 83:
            if(!(entity != romeo)) { _fun124162_ip = 1035; continue _fun124162 }
 90:
            golf = kilo.type;
            yankee = _closure1_slot0;
            oscar = _closure1_slot2;
            foxtrot = 17;
            oscar = oscar[foxtrot];
            offset = undefined;
            oscar = yankee.bind(offset)(oscar);
            oscar = oscar.ChannelTypes;
            oscar = oscar.GUILD_VOICE;
            if(!(golf === oscar)) { _fun124162_ip = 1035; continue _fun124162 }
 136:
            oscar = entity != mike;
            yankee = null;
            if(!oscar) { _fun124162_ip = 164; continue _fun124162 }
 145:
            backup = _closure1_slot6;
            golf = backup.getChannel;
            oscar = mike.channel_id;
            yankee = golf.bind(backup)(oscar);
 164:
            oscar = entity != mike;
            golf = null;
            if(!oscar) { _fun124162_ip = 208; continue _fun124162 }
 173:
            sizing = _closure1_slot11;
            backup = sizing.getUser;
            output = mike.author;
            result = entity == output;
            oscar = undefined;
            if(result) { _fun124162_ip = 203; continue _fun124162 }
 198:
            oscar = output.id;
 203:
            golf = backup.bind(sizing)(oscar);
 208:
            backup = _closure1_slot1;
            sizing = _closure1_slot2;
            oscar = 14;
            oscar = sizing[oscar];
            sizing = backup.bind(offset)(oscar);
            backup = sizing.getGuildIconURL;
            oscar = {};
            output = tango.id;
            oscar['id'] = output;
            output = tango.icon;
            oscar['icon'] = output;
            output = 32;
            oscar['size'] = output;
            result = backup.bind(sizing)(oscar);
            oscar = entity != result;
            if(!oscar) { _fun124162_ip = 281; continue _fun124162 }
 273:
            backup = '';
            oscar = backup !== result;
 281:
            if(!oscar) { _fun124162_ip = 381; continue _fun124162 }
 284:
            backup = _closure1_slot0;
            sizing = _closure1_slot2;
            oscar = 16;
            oscar = sizing[oscar];
            output = backup.bind(offset)(oscar);
            sizing = output.preloadAsset;
            backup = result.replace;
            oscar = '.webp';
            update = '.png';
            backup = backup.bind(result)(oscar, update);
            oscar = tango.icon;
            result = entity != oscar;
            echo = 'missing';
            if(!result) { _fun124162_ip = 352; continue _fun124162 }
 349:
            echo = oscar;
 352:
            oscar = global;
            oscar = oscar.HermesInternal;
            result = oscar.concat;
            oscar = '';
            oscar = result.bind(oscar)(echo, update);
            oscar = sizing.bind(output)(backup, oscar);
 381:
            oscar = _closure1_slot17;
            oscar = oscar.bind(offset)(romeo);
            romeo = _closure1_slot7;
            oscar = romeo.getMembers;
            backup = oscar.bind(romeo)(verify);
            romeo = backup.map;
            oscar = function(argFoo) {
                zulu = _closure1_slot11;
                mike = zulu.getUser;
                entity = argFoo;
                entity = entity.userId;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            sizing = romeo.bind(backup)(oscar);
            romeo = sizing.length;
            oscar = 30;
            if(!(romeo <= oscar)) { _fun124162_ip = 448; continue _fun124162 }
 434:
            romeo = sizing.forEach;
            oscar = _closure1_slot17;
            oscar = romeo.bind(sizing)(oscar);
 448:
            oscar = new Array(0);
            var _closure2_slot3 = oscar;
            backup = _closure1_slot13;
            romeo = backup.getVoiceStatesForChannel;
            output = romeo.bind(backup)(kilo);
            backup = output.forEach;
            romeo = function(argFoo) {
                _fun124164: for(var _fun124164_ip = 0; ; ) switch(_fun124164_ip) {
 0:
                    entity = argFoo;
                    oscar = entity.user;
                    zulu = _closure1_slot17;
                    mike = entity.user;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    tango = _closure2_slot3;
                    zulu = tango.push;
                    mike = {};
                    options = oscar.id;
                    mike['id'] = options;
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 18;
                    options = offset[options];
                    yankee = verify.bind(entity)(options);
                    offset = yankee.getName;
                    verify = _closure2_slot0;
                    options = _closure2_slot1;
                    options = offset.bind(yankee)(verify, options, oscar);
                    mike['name'] = options;
                    options = oscar.avatar;
                    verify = null;
                    verify = verify != options;
                    yankee = 'missing';
                    if(!verify) { _fun124164_ip = 117; continue _fun124164 }
 114:
                    yankee = options;
 117:
                    options = global;
                    options = options.HermesInternal;
                    offset = options.concat;
                    verify = '';
                    options = '.png';
                    options = offset.bind(verify)(yankee, options);
                    mike['avatar'] = options;
                    offset = _closure1_slot10;
                    verify = offset.isSpeaking;
                    options = oscar.id;
                    options = verify.bind(offset)(options);
                    mike['speaking'] = options;
                    options = _closure1_slot18;
                    golf = _closure2_slot1;
                    golf = options.bind(entity)(golf, oscar);
                    mike['voiceStatus'] = golf;
                    report = _closure1_slot16;
                    report = report.bind(entity)(oscar);
                    mike['fallbackAvatar'] = report;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                }
            };
            romeo = backup.bind(output)(romeo);
            backup = sizing.filter;
            romeo = function(argFoo) {
                _fun124165: for(var _fun124165_ip = 0; ; ) switch(_fun124165_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun124165_ip = 21; continue _fun124165 }
 12:
                    mike = zulu.bot;
                    entity = !mike;
 21:
                    if(!entity) { _fun124165_ip = 69; continue _fun124165 }
 24:
                    oscar = _closure1_slot9;
                    report = oscar.getStatus;
                    tango = zulu.id;
                    zulu = _closure2_slot0;
                    zulu = report.bind(oscar)(tango, zulu);
                    mike = _closure1_slot15;
                    mike = mike.ONLINE;
                    entity = zulu === mike;
 69:
                    return entity;
                }
            };
            sizing = backup.bind(sizing)(romeo);
            backup = sizing.map;
            romeo = function(argFoo) {
                _fun124166: for(var _fun124166_ip = 0; ; ) switch(_fun124166_ip) {
 0:
                    tango = argFoo;
                    entity = {};
                    mike = tango.id;
                    entity['id'] = mike;
                    mike = tango.avatar;
                    zulu = null;
                    zulu = zulu != mike;
                    oscar = 'missing';
                    if(!zulu) { _fun124166_ip = 36; continue _fun124166 }
 33:
                    oscar = mike;
 36:
                    mike = global;
                    mike = mike.HermesInternal;
                    report = mike.concat;
                    zulu = '';
                    mike = '.png';
                    mike = report.bind(zulu)(oscar, mike);
                    entity['avatar'] = mike;
                    zulu = _closure1_slot16;
                    mike = undefined;
                    mike = zulu.bind(mike)(tango);
                    entity['fallbackAvatar'] = mike;
                    return entity;
                }
            };
            sizing = backup.bind(sizing)(romeo);
            backup = sizing.filter;
            romeo = function(argFoo) {
                _fun124167: for(var _fun124167_ip = 0; ; ) switch(_fun124167_ip) {
 0:
                    entity = argFoo;
                    golf = entity.id;
                    entity = _closure2_slot2;
                    mike = null;
                    entity = mike == entity;
                    tango = undefined;
                    if(entity) { _fun124167_ip = 35; continue _fun124167 }
 26:
                    entity = _closure2_slot2;
                    tango = entity.id;
 35:
                    entity = false;
                    if(!(golf !== tango)) { _fun124167_ip = 87; continue _fun124167 }
 41:
                    oscar = _closure1_slot12;
                    report = oscar.getVoiceState;
                    tango = _closure2_slot0;
                    tango = report.bind(oscar)(tango, golf);
                    mike = mike != tango;
                    if(!mike) { _fun124167_ip = 84; continue _fun124167 }
 71:
                    tango = tango.channelId;
                    zulu = _closure2_slot1;
                    mike = tango === zulu;
 84:
                    entity = mike;
 87:
                    entity = !entity;
                    return entity;
                }
            };
            backup = backup.bind(sizing)(romeo);
            romeo = backup.sort;
            zulu = function(argFoo, argBar) {
                _fun124168: for(var _fun124168_ip = 0; ; ) switch(_fun124168_ip) {
 0:
                    zulu = _closure1_slot5;
                    mike = zulu.getUserAffinity;
                    entity = argFoo;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
                    tango = null;
                    mike = tango == entity;
                    oscar = undefined;
                    if(mike) { _fun124168_ip = 43; continue _fun124168 }
 37:
                    oscar = entity.affinity;
 43:
                    golf = tango != oscar;
                    entity = 0;
                    if(!golf) { _fun124168_ip = 55; continue _fun124168 }
 52:
                    entity = oscar;
 55:
                    golf = _closure1_slot5;
                    oscar = golf.getUserAffinity;
                    report = argBar;
                    report = report.id;
                    report = oscar.bind(golf)(report);
                    oscar = tango == report;
                    zulu = undefined;
                    if(oscar) { _fun124168_ip = 93; continue _fun124168 }
 87:
                    zulu = report.affinity;
 93:
                    tango = tango != zulu;
                    mike = 0;
                    if(!tango) { _fun124168_ip = 105; continue _fun124168 }
 102:
                    mike = zulu;
 105:
                    entity = mike - entity;
                    return entity;
                }
            };
            romeo = romeo.bind(backup)(zulu);
            backup = entity != mike;
            if(!backup) { _fun124162_ip = 568; continue _fun124162 }
 564:
            backup = entity != yankee;
 568:
            zulu = null;
            if(!backup) { _fun124162_ip = 642; continue _fun124162 }
 573:
            backup = _closure1_slot19;
            output = _closure1_slot0;
            result = _closure1_slot2;
            sizing = 19;
            sizing = result[sizing];
            output = output.bind(offset)(sizing);
            sizing = output.getWidgetMessageRules;
            result = sizing.bind(output)();
            output = mike.content;
            sizing = {};
            mike = true;
            sizing['noStyleAndInteraction'] = mike;
            echo = yankee.id;
            sizing['channelId'] = echo;
            mike = result.bind(offset)(output, mike, sizing);
            zulu = backup.bind(offset)(mike);
 642:
            mike = {};
            mike['guildId'] = verify;
            mike['channelId'] = options;
            backup = kilo.name;
            mike['voiceName'] = backup;
            tango = tango.icon;
            backup = entity != tango;
            output = 'missing';
            if(!backup) { _fun124162_ip = 683; continue _fun124162 }
 680:
            output = tango;
 683:
            tango = global;
            tango = tango.HermesInternal;
            sizing = tango.concat;
            backup = '';
            tango = '.png';
            tango = sizing.bind(backup)(output, tango);
            mike['guildIcon'] = tango;
            backup = _closure1_slot4;
            tango = backup.getChannelStatus;
            backup = tango.bind(backup)(kilo);
            kilo = entity != backup;
            tango = null;
            if(!kilo) { _fun124162_ip = 744; continue _fun124162 }
 741:
            tango = backup;
 744:
            mike['status'] = tango;
            mike['voiceUsers'] = oscar;
            tango = argBaz;
            mike['selfInVoice'] = tango;
            kilo = romeo.slice;
            tango = 0;
            backup = 2;
            kilo = kilo.bind(romeo)(tango, backup);
            mike['availableUsers'] = kilo;
            kilo = romeo.length;
            kilo = kilo > backup;
            if(!kilo) { _fun124162_ip = 807; continue _fun124162 }
 798:
            romeo = romeo.length;
            tango = romeo - backup;
 807:
            mike['availableOverflow'] = tango;
            romeo = oscar.length;
            tango = 1;
            romeo = romeo > tango;
            tango = 'Hangout in';
            if(romeo) { _fun124162_ip = 865; continue _fun124162 }
 835:
            romeo = oscar.length;
            oscar = 4;
            romeo = romeo > oscar;
            oscar = "Solo vibin' in";
            if(!romeo) { _fun124162_ip = 862; continue _fun124162 }
 856:
            oscar = "It's stacked in";
 862:
            tango = oscar;
 865:
            mike['voiceDescriptor'] = tango;
            tango = 'Join hangout';
            mike['joinCTAText'] = tango;
            tango = 'Invite friends';
            mike['shareCTAText'] = tango;
            tango = entity == yankee;
            romeo = undefined;
            if(tango) { _fun124162_ip = 912; continue _fun124162 }
 907:
            romeo = yankee.type;
 912:
            oscar = _closure1_slot0;
            tango = _closure1_slot2;
            tango = tango[foxtrot];
            tango = oscar.bind(offset)(tango);
            tango = tango.ChannelTypes;
            oscar = tango.GUILD_TEXT;
            tango = null;
            if(!(romeo === oscar)) { _fun124162_ip = 973; continue _fun124162 }
 947:
            romeo = entity == yankee;
            oscar = undefined;
            if(romeo) { _fun124162_ip = 961; continue _fun124162 }
 956:
            oscar = yankee.name;
 961:
            yankee = entity != oscar;
            tango = null;
            if(!yankee) { _fun124162_ip = 973; continue _fun124162 }
 970:
            tango = oscar;
 973:
            mike['messageChannelName'] = tango;
            oscar = entity != golf;
            tango = null;
            if(!oscar) { _fun124162_ip = 1022; continue _fun124162 }
 989:
            oscar = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 18;
            report = yankee[report];
            oscar = oscar.bind(offset)(report);
            report = oscar.getName;
            tango = report.bind(oscar)(verify, options, golf);
 1022:
            mike['messageAuthorName'] = tango;
            mike['message'] = zulu;
            return mike;
 1035:
            return entity;
        }
    };
    zulu['generateLiveActivityState'] = mike;
    return entity;
})();