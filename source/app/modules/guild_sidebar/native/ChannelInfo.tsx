// app/modules/guild_sidebar/native/ChannelInfo.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ChannelConnectedUserLimit
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.channel;
            golfie = entity.hasVideo;
            option = entity.hasMedia;
            verify = entity.voiceStatesCount;
            offset = entity.isLocked;
            tangon = entity.selected;
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            entity = 20;
            entity = report[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['channel'] = oscard;
            entity['locked'] = offset;
            offset = golfie;
            if(golfie) { _fun00002_ip = 83; continue _fun00001 }
 80:
            offset = option;
 83:
            entity['video'] = offset;
            entity['selected'] = tangon;
            zuuluu = zuuluu.bind(report)(entity);
            entity = null;
            if(!zuuluu) { _fun00002_ip = 161; continue _fun00001 }
 103:
            tangon = _closure1_slot10;
            zuuluu = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 21;
            michal = offset[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.ConnectedUserLimit;
            michal = {};
            michal['userCount'] = verify;
            if(golfie) { _fun00002_ip = 146; continue _fun00001 }
 143:
            golfie = option;
 146:
            michal['video'] = golfie;
            michal['channel'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 161:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.GuildFeatures;
    var _closure1_slot8 = golfie;
    tangon = tangon.Permissions;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot10 = tangon;
    tangon = 22;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_sidebar/native/ChannelInfo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ChannelInfo
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.channel;
            var _closure2_slot0 = option;
            sizing = entity.isChannelSelected;
            ctrled = entity.isChannelCollapsed;
            source = entity.voiceStates;
            zuuluu = entity.enableConnectedUserLimit;
            foxtra = entity.enableActivities;
            report = entity.muted;
            michal = entity.isSubscriptionGated;
            kiloes = entity.needSubscriptionToAccess;
            romeon = _closure1_slot0;
            sequen = _closure1_slot2;
            tangon = 8;
            golfie = sequen[tangon];
            tangon = undefined;
            offset = romeon.bind(tangon)(golfie);
            verify = offset.useStateFromStoresObject;
            yankee = _closure1_slot4;
            golfie = new Array(5);
            golfie[0] = yankee;
            yankee = _closure1_slot6;
            golfie[1] = yankee;
            yankee = _closure1_slot7;
            golfie[2] = yankee;
            yankee = _closure1_slot3;
            golfie[3] = yankee;
            yankee = _closure1_slot5;
            golfie[4] = yankee;
            oscard = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscard = _closure1_slot7;
                    report = oscard.hasVideo;
                    tangon = _closure2_slot0;
                    entity = tangon.id;
                    report = report.bind(oscard)(entity);
                    entity = tangon.isGuildStageVoice;
                    tangon = entity.bind(tangon)();
                    if(!tangon) { _fun00006_ip = 85; continue _fun00005 }
 43:
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 9;
                    oscard = oscard[entity];
                    entity = undefined;
                    golfie = golfie.bind(entity)(oscard);
                    oscard = golfie.getStageHasMedia;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    tangon = oscard.bind(golfie)(entity);
 85:
                    entity = {};
                    option = _closure1_slot4;
                    golfie = option.getGuild;
                    michal = _closure2_slot0;
                    oscard = michal.guild_id;
                    oscard = golfie.bind(option)(oscard);
                    entity['guild'] = oscard;
                    option = _closure1_slot6;
                    golfie = option.getMentionCount;
                    oscard = michal.id;
                    oscard = golfie.bind(option)(oscard);
                    entity['mentionsCount'] = oscard;
                    golfie = option.getIsMentionLowImportance;
                    oscard = michal.id;
                    oscard = golfie.bind(option)(oscard);
                    entity['isMentionLowImportance'] = oscard;
                    option = _closure1_slot5;
                    golfie = option.can;
                    oscard = _closure1_slot9;
                    oscard = oscard.CONNECT;
                    oscard = golfie.bind(option)(oscard, michal);
                    oscard = !oscard;
                    entity['isLocked'] = oscard;
                    entity['hasVideo'] = report;
                    entity['hasMedia'] = tangon;
                    report = _closure1_slot3;
                    tangon = report.shouldIndicateNewChannel;
                    zuuluu = michal.guild_id;
                    michal = michal.id;
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity['isNewChannel'] = michal;
                    return entity;
                }
            };
            oscard = verify.bind(offset)(golfie, oscard);
            vacuum = oscard.guild;
            yankee = oscard.mentionsCount;
            offset = oscard.isMentionLowImportance;
            output = oscard.isLocked;
            update = oscard.hasVideo;
            echoed = oscard.hasMedia;
            oscard = oscard.isNewChannel;
            result = _closure1_slot1;
            golfie = 10;
            golfie = sequen[golfie];
            golfie = result.bind(tangon)(golfie);
            backup = golfie.bind(tangon)(option);
            golfie = 11;
            golfie = sequen[golfie];
            config = romeon.bind(tangon)(golfie);
            verify = config.useOptInEnabledForGuild;
            golfie = option.guild_id;
            verify = verify.bind(config)(golfie);
            golfie = 12;
            golfie = sequen[golfie];
            record = romeon.bind(tangon)(golfie);
            config = record.useUnreadThreadsCountForParent;
            romeon = option.guild_id;
            golfie = option.id;
            golfie = config.bind(record)(romeon, golfie);
            romeon = 13;
            romeon = sequen[romeon];
            result = result.bind(tangon)(romeon);
            romeon = {};
            romeon['mentionsCount'] = yankee;
            romeon['isNewChannel'] = oscard;
            romeon['postsWithUnreadsCount'] = golfie;
            romeon['muted'] = report;
            romeon = result.bind(tangon)(romeon);
            if(romeon) { _fun00004_ip = 668; continue _fun00003 }
 319:
            romeon = null;
            result = romeon == source;
            sequen = undefined;
            if(result) { _fun00004_ip = 335; continue _fun00003 }
 330:
            sequen = source.length;
 335:
            config = romeon != sequen;
            result = 0;
            if(!config) { _fun00004_ip = 347; continue _fun00003 }
 344:
            result = sequen;
 347:
            if(!(romeon != ctrled)) { _fun00004_ip = 433; continue _fun00003 }
 351:
            if(!ctrled) { _fun00004_ip = 433; continue _fun00003 }
 354:
            sequen = romeon == vacuum;
            ctrled = undefined;
            if(sequen) { _fun00004_ip = 389; continue _fun00003 }
 363:
            config = vacuum.features;
            sequen = config.has;
            vacuum = _closure1_slot8;
            vacuum = vacuum.COMMUNITY;
            ctrled = sequen.bind(config)(vacuum);
 389:
            if(!(romeon != ctrled)) { _fun00004_ip = 433; continue _fun00003 }
 393:
            if(!ctrled) { _fun00004_ip = 433; continue _fun00003 }
 396:
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            ctrled = 15;
            ctrled = sequen[ctrled];
            vacuum = vacuum.bind(tangon)(ctrled);
            ctrled = vacuum.hasStream;
            ctrled = ctrled.bind(vacuum)(source);
            if(ctrled) { _fun00004_ip = 634; continue _fun00003 }
 433:
            if(!(romeon != foxtra)) { _fun00004_ip = 474; continue _fun00003 }
 437:
            if(!foxtra) { _fun00004_ip = 474; continue _fun00003 }
 440:
            ctrled = _closure1_slot0;
            vacuum = _closure1_slot2;
            foxtra = 17;
            foxtra = vacuum[foxtra];
            ctrled = ctrled.bind(tangon)(foxtra);
            foxtra = ctrled.showChannelItemEmbeddedActivities;
            foxtra = foxtra.bind(ctrled)(backup);
            if(foxtra) { _fun00004_ip = 590; continue _fun00003 }
 474:
            if(!(romeon != michal)) { _fun00004_ip = 485; continue _fun00003 }
 478:
            if(!(romeon != kiloes)) { _fun00004_ip = 485; continue _fun00003 }
 482:
            if(michal) { _fun00004_ip = 551; continue _fun00003 }
 485:
            foxtra = romeon != zuuluu;
            michal = null;
            if(!foxtra) { _fun00004_ip = 549; continue _fun00003 }
 494:
            michal = null;
            if(!zuuluu) { _fun00004_ip = 549; continue _fun00003 }
 499:
            foxtra = _closure1_slot10;
            romeon = _closure1_slot11;
            zuuluu = {};
            zuuluu['channel'] = option;
            zuuluu['voiceStates'] = source;
            zuuluu['hasVideo'] = update;
            zuuluu['hasMedia'] = echoed;
            zuuluu['voiceStatesCount'] = result;
            zuuluu['isLocked'] = output;
            zuuluu['selected'] = sizing;
            michal = foxtra.bind(tangon)(romeon, zuuluu);
 549:
            _fun00004_ip = 588; continue _fun00003;
 551:
            foxtra = _closure1_slot10;
            romeon = _closure1_slot1;
            sizing = _closure1_slot2;
            zuuluu = 19;
            zuuluu = sizing[zuuluu];
            romeon = romeon.bind(tangon)(zuuluu);
            zuuluu = {};
            zuuluu['locked'] = kiloes;
            michal = foxtra.bind(tangon)(romeon, zuuluu);
 588:
            _fun00004_ip = 632; continue _fun00003;
 590:
            foxtra = _closure1_slot10;
            romeon = _closure1_slot1;
            kiloes = _closure1_slot2;
            zuuluu = 18;
            zuuluu = kiloes[zuuluu];
            romeon = romeon.bind(tangon)(zuuluu);
            zuuluu = {};
            zuuluu['embeddedApps'] = backup;
            zuuluu['muted'] = report;
            michal = foxtra.bind(tangon)(romeon, zuuluu);
 632:
            _fun00004_ip = 666; continue _fun00003;
 634:
            foxtra = _closure1_slot10;
            romeon = _closure1_slot1;
            backup = _closure1_slot2;
            zuuluu = 16;
            zuuluu = backup[zuuluu];
            romeon = romeon.bind(tangon)(zuuluu);
            zuuluu = {};
            michal = foxtra.bind(tangon)(romeon, zuuluu);
 666:
            return michal;
 668:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot1;
            romeon = _closure1_slot2;
            entity = 14;
            entity = romeon[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['mentionCount'] = yankee;
            entity['isMentionLowImportance'] = offset;
            if(!oscard) { _fun00004_ip = 710; continue _fun00003 }
 707:
            oscard = verify;
 710:
            entity['isNewChannel'] = oscard;
            oscard = option.isForumLikeChannel;
            option = oscard.bind(option)();
            oscard = null;
            if(!option) { _fun00004_ip = 733; continue _fun00003 }
 730:
            oscard = golfie;
 733:
            entity['postsWithUnreadsCount'] = oscard;
            entity['muted'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();