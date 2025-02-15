// app/modules/guild_sidebar/native/ChannelInfo.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: ChannelConnectedUserLimit
        _fun115717: for(var _fun115717_ip = 0; ; ) switch(_fun115717_ip) {
 0:
            entity = argFoo;
            oscar = entity.channel;
            golf = entity.hasVideo;
            options = entity.hasMedia;
            verify = entity.voiceStatesCount;
            offset = entity.isLocked;
            tango = entity.selected;
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 20;
            entity = report[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = {};
            entity['channel'] = oscar;
            entity['locked'] = offset;
            offset = golf;
            if(golf) { _fun115717_ip = 83; continue _fun115717 }
 80:
            offset = options;
 83:
            entity['video'] = offset;
            entity['selected'] = tango;
            zulu = zulu.bind(report)(entity);
            entity = null;
            if(!zulu) { _fun115717_ip = 161; continue _fun115717 }
 103:
            tango = _closure1_slot10;
            zulu = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 21;
            mike = offset[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.ConnectedUserLimit;
            mike = {};
            mike['userCount'] = verify;
            if(golf) { _fun115717_ip = 146; continue _fun115717 }
 143:
            golf = options;
 146:
            mike['video'] = golf;
            mike['channel'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 161:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.GuildFeatures;
    var _closure1_slot8 = golf;
    tango = tango.Permissions;
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot10 = tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_sidebar/native/ChannelInfo.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ChannelInfo
        _fun115718: for(var _fun115718_ip = 0; ; ) switch(_fun115718_ip) {
 0:
            entity = argFoo;
            options = entity.channel;
            var _closure2_slot0 = options;
            sizing = entity.isChannelSelected;
            control = entity.isChannelCollapsed;
            source = entity.voiceStates;
            zulu = entity.enableConnectedUserLimit;
            foxtrot = entity.enableActivities;
            report = entity.muted;
            mike = entity.isSubscriptionGated;
            kilo = entity.needSubscriptionToAccess;
            romeo = _closure1_slot0;
            vacuum = _closure1_slot2;
            tango = 8;
            golf = vacuum[tango];
            tango = undefined;
            offset = romeo.bind(tango)(golf);
            verify = offset.useStateFromStoresObject;
            yankee = _closure1_slot4;
            golf = new Array(5);
            golf[0] = yankee;
            yankee = _closure1_slot6;
            golf[1] = yankee;
            yankee = _closure1_slot7;
            golf[2] = yankee;
            yankee = _closure1_slot3;
            golf[3] = yankee;
            yankee = _closure1_slot5;
            golf[4] = yankee;
            oscar = function() {
                _fun115719: for(var _fun115719_ip = 0; ; ) switch(_fun115719_ip) {
 0:
                    oscar = _closure1_slot7;
                    report = oscar.hasVideo;
                    tango = _closure2_slot0;
                    entity = tango.id;
                    report = report.bind(oscar)(entity);
                    entity = tango.isGuildStageVoice;
                    tango = entity.bind(tango)();
                    if(!tango) { _fun115719_ip = 85; continue _fun115719 }
 43:
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    entity = 9;
                    oscar = oscar[entity];
                    entity = undefined;
                    golf = golf.bind(entity)(oscar);
                    oscar = golf.getStageHasMedia;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    tango = oscar.bind(golf)(entity);
 85:
                    entity = {};
                    options = _closure1_slot4;
                    golf = options.getGuild;
                    mike = _closure2_slot0;
                    oscar = mike.guild_id;
                    oscar = golf.bind(options)(oscar);
                    entity['guild'] = oscar;
                    options = _closure1_slot6;
                    golf = options.getMentionCount;
                    oscar = mike.id;
                    oscar = golf.bind(options)(oscar);
                    entity['mentionsCount'] = oscar;
                    golf = options.getIsMentionLowImportance;
                    oscar = mike.id;
                    oscar = golf.bind(options)(oscar);
                    entity['isMentionLowImportance'] = oscar;
                    options = _closure1_slot5;
                    golf = options.can;
                    oscar = _closure1_slot9;
                    oscar = oscar.CONNECT;
                    oscar = golf.bind(options)(oscar, mike);
                    oscar = !oscar;
                    entity['isLocked'] = oscar;
                    entity['hasVideo'] = report;
                    entity['hasMedia'] = tango;
                    report = _closure1_slot3;
                    tango = report.shouldIndicateNewChannel;
                    zulu = mike.guild_id;
                    mike = mike.id;
                    mike = tango.bind(report)(zulu, mike);
                    entity['isNewChannel'] = mike;
                    return entity;
                }
            };
            oscar = verify.bind(offset)(golf, oscar);
            config = oscar.guild;
            yankee = oscar.mentionsCount;
            offset = oscar.isMentionLowImportance;
            output = oscar.isLocked;
            update = oscar.hasVideo;
            echo = oscar.hasMedia;
            oscar = oscar.isNewChannel;
            result = _closure1_slot1;
            golf = 10;
            golf = vacuum[golf];
            golf = result.bind(tango)(golf);
            backup = golf.bind(tango)(options);
            golf = 11;
            golf = vacuum[golf];
            sequence = romeo.bind(tango)(golf);
            verify = sequence.useOptInEnabledForGuild;
            golf = options.guild_id;
            verify = verify.bind(sequence)(golf);
            golf = 12;
            golf = vacuum[golf];
            record = romeo.bind(tango)(golf);
            sequence = record.useUnreadThreadsCountForParent;
            romeo = options.guild_id;
            golf = options.id;
            golf = sequence.bind(record)(romeo, golf);
            romeo = 13;
            romeo = vacuum[romeo];
            result = result.bind(tango)(romeo);
            romeo = {};
            romeo['mentionsCount'] = yankee;
            romeo['isNewChannel'] = oscar;
            romeo['postsWithUnreadsCount'] = golf;
            romeo['muted'] = report;
            romeo = result.bind(tango)(romeo);
            if(romeo) { _fun115718_ip = 663; continue _fun115718 }
 319:
            romeo = null;
            result = romeo == source;
            vacuum = undefined;
            if(result) { _fun115718_ip = 335; continue _fun115718 }
 330:
            vacuum = source.length;
 335:
            sequence = romeo != vacuum;
            result = 0;
            if(!sequence) { _fun115718_ip = 347; continue _fun115718 }
 344:
            result = vacuum;
 347:
            if(!(romeo != control)) { _fun115718_ip = 428; continue _fun115718 }
 351:
            if(!control) { _fun115718_ip = 428; continue _fun115718 }
 354:
            vacuum = romeo == config;
            control = undefined;
            if(vacuum) { _fun115718_ip = 384; continue _fun115718 }
 363:
            sequence = config.hasFeature;
            vacuum = _closure1_slot8;
            vacuum = vacuum.COMMUNITY;
            control = sequence.bind(config)(vacuum);
 384:
            if(!(romeo != control)) { _fun115718_ip = 428; continue _fun115718 }
 388:
            if(!control) { _fun115718_ip = 428; continue _fun115718 }
 391:
            vacuum = _closure1_slot0;
            sequence = _closure1_slot2;
            control = 15;
            control = sequence[control];
            vacuum = vacuum.bind(tango)(control);
            control = vacuum.hasStream;
            control = control.bind(vacuum)(source);
            if(control) { _fun115718_ip = 629; continue _fun115718 }
 428:
            if(!(romeo != foxtrot)) { _fun115718_ip = 469; continue _fun115718 }
 432:
            if(!foxtrot) { _fun115718_ip = 469; continue _fun115718 }
 435:
            control = _closure1_slot0;
            vacuum = _closure1_slot2;
            foxtrot = 17;
            foxtrot = vacuum[foxtrot];
            control = control.bind(tango)(foxtrot);
            foxtrot = control.showChannelItemEmbeddedActivities;
            foxtrot = foxtrot.bind(control)(backup);
            if(foxtrot) { _fun115718_ip = 585; continue _fun115718 }
 469:
            if(!(romeo != mike)) { _fun115718_ip = 480; continue _fun115718 }
 473:
            if(!(romeo != kilo)) { _fun115718_ip = 480; continue _fun115718 }
 477:
            if(mike) { _fun115718_ip = 546; continue _fun115718 }
 480:
            foxtrot = romeo != zulu;
            mike = null;
            if(!foxtrot) { _fun115718_ip = 544; continue _fun115718 }
 489:
            mike = null;
            if(!zulu) { _fun115718_ip = 544; continue _fun115718 }
 494:
            foxtrot = _closure1_slot10;
            romeo = _closure1_slot11;
            zulu = {};
            zulu['channel'] = options;
            zulu['voiceStates'] = source;
            zulu['hasVideo'] = update;
            zulu['hasMedia'] = echo;
            zulu['voiceStatesCount'] = result;
            zulu['isLocked'] = output;
            zulu['selected'] = sizing;
            mike = foxtrot.bind(tango)(romeo, zulu);
 544:
            _fun115718_ip = 583; continue _fun115718;
 546:
            foxtrot = _closure1_slot10;
            romeo = _closure1_slot1;
            sizing = _closure1_slot2;
            zulu = 19;
            zulu = sizing[zulu];
            romeo = romeo.bind(tango)(zulu);
            zulu = {};
            zulu['locked'] = kilo;
            mike = foxtrot.bind(tango)(romeo, zulu);
 583:
            _fun115718_ip = 627; continue _fun115718;
 585:
            foxtrot = _closure1_slot10;
            romeo = _closure1_slot1;
            kilo = _closure1_slot2;
            zulu = 18;
            zulu = kilo[zulu];
            romeo = romeo.bind(tango)(zulu);
            zulu = {};
            zulu['embeddedApps'] = backup;
            zulu['muted'] = report;
            mike = foxtrot.bind(tango)(romeo, zulu);
 627:
            _fun115718_ip = 661; continue _fun115718;
 629:
            foxtrot = _closure1_slot10;
            romeo = _closure1_slot1;
            backup = _closure1_slot2;
            zulu = 16;
            zulu = backup[zulu];
            romeo = romeo.bind(tango)(zulu);
            zulu = {};
            mike = foxtrot.bind(tango)(romeo, zulu);
 661:
            return mike;
 663:
            zulu = _closure1_slot10;
            mike = _closure1_slot1;
            romeo = _closure1_slot2;
            entity = 14;
            entity = romeo[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['mentionCount'] = yankee;
            entity['isMentionLowImportance'] = offset;
            if(!oscar) { _fun115718_ip = 705; continue _fun115718 }
 702:
            oscar = verify;
 705:
            entity['isNewChannel'] = oscar;
            oscar = options.isForumLikeChannel;
            options = oscar.bind(options)();
            oscar = null;
            if(!options) { _fun115718_ip = 728; continue _fun115718 }
 725:
            oscar = golf;
 728:
            entity['postsWithUnreadsCount'] = oscar;
            entity['muted'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();