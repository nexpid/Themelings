// app/modules/search_v2/native/components/tabs/pages/MembersScreen.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo) { // Original name: SearchableMembersScreen
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            kiloes = michal.searchContext;
            var _closure2_slot0 = kiloes;
            option = michal.guildId;
            var _closure2_slot1 = option;
            golfie = michal.onViewableItemsChanged;
            zuuluu = _closure1_slot19;
            report = undefined;
            verify = zuuluu.bind(report)();
            tangon = _closure1_slot1;
            oscard = _closure1_slot3;
            zuuluu = 13;
            zuuluu = oscard[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)();
            zuuluu = zuuluu.analyticsLocations;
            var _closure2_slot2 = zuuluu;
            tangon = _closure1_slot0;
            foxtra = 14;
            offset = oscard[foxtra];
            yankee = tangon.bind(report)(offset);
            offset = yankee.useMemberSearchTabResults;
            source = offset.bind(yankee)();
            var _closure2_slot3 = source;
            offset = function(argFoo) { // Original name: useMemberScreenChannelId
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    report = _closure1_slot11;
                    tangon = report.useState;
                    zuuluu = argFoo;
                    entity = function(argFoo) {
                        michal = argFoo;
                        entity = michal.getChannelIds;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    oscard = tangon.bind(report)(zuuluu, entity);
                    entity = oscard.size;
                    tangon = 0;
                    if(!(tangon !== entity)) { _fun00004_ip = 79; continue _fun00003 }
 41:
                    report = oscard.size;
                    zuuluu = 1;
                    entity = null;
                    if(!(zuuluu === report)) { _fun00004_ip = 77; continue _fun00003 }
 55:
                    zuuluu = global;
                    report = zuuluu.Array;
                    zuuluu = report.from;
                    zuuluu = zuuluu.bind(report)(oscard);
                    entity = zuuluu[tangon];
 77:
                    _fun00004_ip = 83; continue _fun00003;
 79:
                    entity = _closure1_slot6;
 83:
                    return entity;
                }
            };
            result = offset.bind(report)(kiloes);
            var _closure2_slot4 = result;
            offset = 15;
            yankee = oscard[offset];
            sizing = tangon.bind(report)(yankee);
            backup = sizing.useStateFromStores;
            yankee = _closure1_slot10;
            romeon = new Array(1);
            romeon[0] = yankee;
            yankee = function() {
                michal = _closure1_slot10;
                entity = michal.getChannelId;
                entity = entity.bind(michal)();
                return entity;
            };
            sizing = backup.bind(sizing)(romeon, yankee);
            var _closure2_slot5 = sizing;
            yankee = 16;
            yankee = oscard[yankee];
            backup = tangon.bind(report)(yankee);
            romeon = backup.useFullscreenPlaceholderCount;
            yankee = {};
            output = _closure1_slot13;
            yankee['placeholderHeight'] = output;
            output = 1;
            yankee['numColumns'] = output;
            output = romeon.bind(backup)(yankee);
            var _closure2_slot6 = output;
            yankee = oscard[offset];
            echoed = tangon.bind(report)(yankee);
            backup = echoed.useStateFromStores;
            yankee = _closure1_slot9;
            romeon = new Array(1);
            romeon[0] = yankee;
            yankee = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.getGuild;
                    entity = _closure2_slot1;
                    tangon = zuuluu.bind(tangon)(entity);
                    entity = null;
                    zuuluu = entity != tangon;
                    report = undefined;
                    entity = undefined;
                    if(!zuuluu) { _fun00006_ip = 68; continue _fun00005 }
 37:
                    zuuluu = _closure1_slot2;
                    oscard = _closure1_slot3;
                    michal = 17;
                    michal = oscard[michal];
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = zuuluu.getGuildVisualOwnerId;
                    entity = michal.bind(zuuluu)(tangon);
 68:
                    return entity;
                }
            };
            echoed = backup.bind(echoed)(romeon, yankee);
            var _closure2_slot7 = echoed;
            offset = oscard[offset];
            backup = tangon.bind(report)(offset);
            romeon = backup.useStateFromStores;
            offset = _closure1_slot7;
            yankee = new Array(1);
            yankee[0] = offset;
            offset = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = _closure2_slot4;
                    zuuluu = _closure1_slot6;
                    if(!(tangon !== zuuluu)) { _fun00008_ip = 85; continue _fun00007 }
 18:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getChannel;
                    michal = _closure2_slot4;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    tangon = null;
                    if(!(tangon != zuuluu)) { _fun00008_ip = 79; continue _fun00007 }
 42:
                    michal = zuuluu.isAnnouncementThread;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00008_ip = 65; continue _fun00007 }
 55:
                    michal = zuuluu.parent_id;
                    if(!(tangon == michal)) { _fun00008_ip = 71; continue _fun00007 }
 65:
                    michal = _closure2_slot4;
                    _fun00008_ip = 77; continue _fun00007;
 71:
                    michal = zuuluu.parent_id;
 77:
                    _fun00008_ip = 83; continue _fun00007;
 79:
                    michal = _closure2_slot4;
 83:
                    return michal;
 85:
                    entity = _closure2_slot4;
                    return entity;
                }
            };
            offset = romeon.bind(backup)(yankee, offset);
            backup = _closure1_slot4;
            romeon = backup.useCallback;
            yankee = new Array(5);
            yankee[0] = kiloes;
            update = source.length;
            yankee[1] = update;
            yankee[2] = result;
            yankee[3] = sizing;
            yankee[4] = zuuluu;
            zuuluu = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot3;
                    entity = 18;
                    michal = golfie[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    michal = tangon.dismissGlobalKeyboard;
                    michal = michal.bind(tangon)();
                    michal = 19;
                    michal = golfie[michal];
                    option = zuuluu.bind(entity)(michal);
                    zuuluu = option.trackSearchResultClicked;
                    michal = {};
                    verify = _closure2_slot0;
                    michal['searchContext'] = verify;
                    verify = _closure1_slot15;
                    verify = verify.USER;
                    michal['entityType'] = verify;
                    verify = oscard.id;
                    michal['entityId'] = verify;
                    verify = argBar;
                    michal['index'] = verify;
                    verify = _closure2_slot3;
                    verify = verify.length;
                    michal['totalSearchResults'] = verify;
                    michal = zuuluu.bind(option)(michal);
                    zuuluu = _closure1_slot1;
                    michal = 20;
                    michal = golfie[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = {};
                    oscard = oscard.id;
                    michal['userId'] = oscard;
                    oscard = _closure2_slot4;
                    report = _closure1_slot6;
                    if(!(oscard === report)) { _fun00010_ip = 166; continue _fun00009 }
 160:
                    report = _closure2_slot5;
                    _fun00010_ip = 170; continue _fun00009;
 166:
                    report = _closure2_slot4;
 170:
                    michal['channelId'] = report;
                    tangon = _closure2_slot2;
                    michal['sourceAnalyticsLocations'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            result = romeon.bind(backup)(zuuluu, yankee);
            var _closure2_slot8 = result;
            backup = _closure1_slot4;
            romeon = backup.useCallback;
            yankee = new Array(1);
            yankee[0] = kiloes;
            zuuluu = function(argFoo) {
                entity = argFoo;
                option = entity.user;
                golfie = entity.index;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot3;
                entity = 19;
                michal = tangon[entity];
                entity = undefined;
                oscard = zuuluu.bind(entity)(michal);
                report = oscard.trackSearchResultClicked;
                michal = {};
                offset = _closure2_slot0;
                michal['searchContext'] = offset;
                verify = _closure1_slot15;
                verify = verify.USER;
                michal['entityType'] = verify;
                option = option.id;
                michal['entityId'] = option;
                michal['index'] = golfie;
                michal = report.bind(oscard)(michal);
                michal = 18;
                michal = tangon[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.dismissGlobalKeyboard;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            romeon = romeon.bind(backup)(zuuluu, yankee);
            sizing = _closure1_slot4;
            backup = sizing.useCallback;
            yankee = new Array(1);
            yankee[0] = result;
            zuuluu = function(argFoo) {
                entity = argFoo;
                tangon = entity.user;
                zuuluu = entity.index;
                michal = _closure2_slot8;
                entity = undefined;
                michal = michal.bind(entity)(tangon, zuuluu);
                return entity;
            };
            yankee = backup.bind(sizing)(zuuluu, yankee);
            sizing = _closure1_slot11;
            backup = sizing.useState;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.isInitialSearchQuery;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = backup.bind(sizing)(kiloes, zuuluu);
            var _closure2_slot9 = zuuluu;
            foxtra = oscard[foxtra];
            backup = tangon.bind(report)(foxtra);
            foxtra = backup.useIsMemberSearchTabFetching;
            update = foxtra.bind(backup)();
            var _closure2_slot10 = update;
            sizing = _closure1_slot4;
            backup = sizing.useMemo;
            foxtra = new Array(7);
            foxtra[0] = source;
            foxtra[1] = update;
            foxtra[2] = zuuluu;
            foxtra[3] = option;
            foxtra[4] = echoed;
            foxtra[5] = result;
            foxtra[6] = output;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    tangon = _closure2_slot3;
                    zuuluu = tangon.forEach;
                    michal = function(argFoo, argBar) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            verify = argFoo;
                            golfie = argBar;
                            var _closure4_slot0 = golfie;
                            report = _closure1_slot8;
                            tangon = report.getMember;
                            zuuluu = _closure2_slot1;
                            michal = verify.record;
                            michal = michal.id;
                            romeon = tangon.bind(report)(zuuluu, michal);
                            tangon = _closure3_slot0;
                            zuuluu = tangon.push;
                            michal = {};
                            report = _closure1_slot14;
                            report = report.GUILD_CHANNEL_MEMBER;
                            michal['type'] = report;
                            report = {};
                            entity = _closure1_slot16;
                            entity = entity.NONE;
                            report['type'] = entity;
                            entity = verify.record;
                            report['user'] = entity;
                            offset = null;
                            foxtra = offset == romeon;
                            entity = undefined;
                            yankee = undefined;
                            if(foxtra) { _fun00014_ip = 122; continue _fun00013 }
 116:
                            yankee = romeon.nick;
 122:
                            report['nickname'] = yankee;
                            yankee = offset == romeon;
                            foxtra = undefined;
                            if(yankee) { _fun00014_ip = 142; continue _fun00013 }
 136:
                            foxtra = romeon.colorString;
 142:
                            backup = offset != foxtra;
                            yankee = undefined;
                            if(!backup) { _fun00014_ip = 154; continue _fun00013 }
 151:
                            yankee = foxtra;
 154:
                            report['usernameColor'] = yankee;
                            yankee = offset == romeon;
                            foxtra = undefined;
                            if(yankee) { _fun00014_ip = 174; continue _fun00013 }
 168:
                            foxtra = romeon.colorStrings;
 174:
                            backup = offset != foxtra;
                            yankee = undefined;
                            if(!backup) { _fun00014_ip = 186; continue _fun00013 }
 183:
                            yankee = foxtra;
 186:
                            report['roleColors'] = yankee;
                            yankee = true;
                            report['isNameplatedRow'] = yankee;
                            foxtra = offset == romeon;
                            yankee = undefined;
                            if(foxtra) { _fun00014_ip = 213; continue _fun00013 }
 207:
                            yankee = romeon.premiumSince;
 213:
                            romeon = offset != yankee;
                            offset = undefined;
                            if(!romeon) { _fun00014_ip = 225; continue _fun00013 }
 222:
                            offset = yankee;
 225:
                            report['premiumSince'] = offset;
                            offset = _closure2_slot7;
                            verify = verify.record;
                            verify = verify.id;
                            verify = offset === verify;
                            report['isOwner'] = verify;
                            verify = _closure2_slot1;
                            report['guildId'] = verify;
                            verify = function(argFoo) { // Original name: onLongPress
                                tangon = _closure2_slot8;
                                zuuluu = _closure4_slot0;
                                michal = undefined;
                                entity = argFoo;
                                entity = tangon.bind(michal)(entity, zuuluu);
                                return entity;
                            };
                            report['onLongPress'] = verify;
                            option = function(argFoo) { // Original name: onPress
                                tangon = _closure2_slot8;
                                zuuluu = _closure4_slot0;
                                michal = undefined;
                                entity = argFoo;
                                entity = tangon.bind(michal)(entity, zuuluu);
                                return entity;
                            };
                            report['onPress'] = option;
                            option = 0;
                            option = option === golfie;
                            report['start'] = option;
                            oscard = _closure2_slot3;
                            option = oscard.length;
                            oscard = 1;
                            oscard = option - oscard;
                            oscard = golfie === oscard;
                            report['end'] = oscard;
                            michal['props'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure2_slot10;
                    if(michal) { _fun00012_ip = 59; continue _fun00011 }
 41:
                    michal = _closure2_slot9;
                    if(michal) { _fun00012_ip = 140; continue _fun00011 }
 48:
                    zuuluu = entity.length;
                    michal = 0;
                    if(!(michal === zuuluu)) { _fun00012_ip = 140; continue _fun00011 }
 59:
                    michal = _closure2_slot6;
                    oscard = 0;
                    michal = oscard < michal;
                    tangon = global;
                    zuuluu = 'guild-channel-member-placeholder-';
                    if(!michal) { _fun00012_ip = 140; continue _fun00011 }
 83:
                    option = entity.push;
                    michal = {};
                    verify = _closure1_slot14;
                    verify = verify.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
                    michal['type'] = verify;
                    verify = tangon.HermesInternal;
                    verify = verify.concat;
                    verify = verify.bind(zuuluu)(oscard);
                    michal['key'] = verify;
                    michal = option.bind(entity)(michal);
                    oscard = oscard + 1;
                    michal = _closure2_slot6;
                    if(oscard < michal) { _fun00012_ip = 83; continue _fun00011 }
 140:
                    return entity;
                }
            };
            foxtra = backup.bind(sizing)(entity, foxtra);
            entity = 21;
            entity = oscard[entity];
            backup = tangon.bind(report)(entity);
            entity = backup.useContentContainerStyles;
            backup = entity.bind(backup)();
            entity = 22;
            entity = oscard[entity];
            oscard = tangon.bind(report)(entity);
            tangon = oscard.useMessageTabCountsErrorText;
            entity = {};
            entity['searchContext'] = kiloes;
            oscard = tangon.bind(oscard)(entity);
            entity = null;
            if(!(entity == oscard)) { _fun00002_ip = 721; continue _fun00001 }
 576:
            if(!zuuluu) { _fun00002_ip = 583; continue _fun00001 }
 579:
            if(!(entity == offset)) { _fun00002_ip = 646; continue _fun00001 }
 583:
            tangon = _closure1_slot18;
            zuuluu = _closure1_slot1;
            kiloes = _closure1_slot3;
            entity = 25;
            entity = kiloes[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            backup = backup.membersContentContainer;
            entity['contentContainerStyle'] = backup;
            backup = _closure1_slot12;
            entity['estimatedItemSize'] = backup;
            entity['data'] = foxtra;
            entity['onViewableItemsChanged'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 719; continue _fun00001;
 646:
            golfie = _closure1_slot18;
            tangon = _closure1_slot1;
            foxtra = _closure1_slot3;
            zuuluu = 24;
            zuuluu = foxtra[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            zuuluu['onUserPress'] = romeon;
            zuuluu['onUserLongPress'] = yankee;
            zuuluu['channelId'] = offset;
            zuuluu['guildId'] = option;
            option = true;
            zuuluu['disableStickySections'] = option;
            verify = verify.userList;
            zuuluu['listStyleOverride'] = verify;
            zuuluu['isNameplatedList'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 719:
            _fun00002_ip = 757; continue _fun00001;
 721:
            tangon = _closure1_slot18;
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot3;
            michal = 23;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            michal['text'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 757:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: ThreadMembersScreen
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            option = michal.searchContext;
            verify = michal.channelId;
            var _closure2_slot0 = verify;
            golfie = michal.guildId;
            oscard = michal.onViewableItemsChanged;
            tangon = _closure1_slot0;
            report = _closure1_slot3;
            zuuluu = 15;
            zuuluu = report[zuuluu];
            report = undefined;
            offset = tangon.bind(report)(zuuluu);
            tangon = offset.useStateFromStores;
            yankee = _closure1_slot7;
            zuuluu = new Array(1);
            zuuluu[0] = yankee;
            entity = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getChannel;
                    entity = _closure2_slot0;
                    tangon = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == tangon;
                    michal = undefined;
                    if(zuuluu) { _fun00018_ip = 45; continue _fun00017 }
 35:
                    zuuluu = tangon.isAnnouncementThread;
                    michal = zuuluu.bind(tangon)();
 45:
                    entity = entity != michal;
                    if(!entity) { _fun00018_ip = 55; continue _fun00017 }
 52:
                    entity = michal;
 55:
                    return entity;
                }
            };
            entity = tangon.bind(offset)(zuuluu, entity);
            tangon = _closure1_slot18;
            if(entity) { _fun00016_ip = 138; continue _fun00015 }
 93:
            zuuluu = _closure1_slot1;
            offset = _closure1_slot3;
            entity = 26;
            entity = offset[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = {};
            entity['channelId'] = verify;
            entity['guildId'] = golfie;
            verify = true;
            entity['disableStickySections'] = verify;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00016_ip = 164; continue _fun00015;
 138:
            zuuluu = _closure1_slot20;
            michal = {};
            michal['searchContext'] = option;
            michal['guildId'] = golfie;
            michal['onViewableItemsChanged'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 164:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    golfie = golfie.bind(entity)(tangon);
    var _closure1_slot4 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EVERYONE_CHANNEL_ID;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.CHANNELS_ESTIMATED_ITEM_SIZE;
    var _closure1_slot12 = option;
    option = tangon.MESSAGE_PLACEHOLDER_ITEM_SIZE;
    var _closure1_slot13 = option;
    tangon = tangon.SearchListItemTypes;
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchResultAnalyticsEntityTypes;
    var _closure1_slot15 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.RelationshipTypes;
    var _closure1_slot16 = option;
    tangon = tangon.SearchTypes;
    var _closure1_slot17 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot18 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'flex': 1, 'flexGrow': 1};
    tangon['container'] = offset;
    offset = {'flex': 1, 'flexGrow': 1};
    tangon['searchContainer'] = offset;
    offset = {};
    yankee = 'transparent';
    offset['backgroundColor'] = yankee;
    tangon['userList'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot19 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: MembersScreen
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            romeon = entity.searchContext;
            golfie = entity.onViewableItemsChanged;
            entity = _closure1_slot19;
            tangon = undefined;
            yankee = entity.bind(tangon)();
            report = _closure1_slot1;
            oscard = _closure1_slot3;
            entity = 13;
            michal = oscard[entity];
            zuuluu = report.bind(tangon)(michal);
            michal = 27;
            michal = oscard[michal];
            michal = report.bind(tangon)(michal);
            michal = michal.SEARCH_MEMBERS;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.analyticsLocations;
            zuuluu = romeon.type;
            michal = _closure1_slot17;
            michal = michal.CHANNEL;
            if(!(michal !== zuuluu)) { _fun00020_ip = 327; continue _fun00019 }
 99:
            michal = _closure1_slot17;
            michal = michal.THREAD;
            if(!(michal !== zuuluu)) { _fun00020_ip = 281; continue _fun00019 }
 116:
            michal = _closure1_slot17;
            michal = michal.GUILD_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00020_ip = 201; continue _fun00019 }
 130:
            michal = _closure1_slot17;
            michal = michal.GUILD;
            if(!(michal !== zuuluu)) { _fun00020_ip = 201; continue _fun00019 }
 144:
            michal = global;
            oscard = michal.Error;
            verify = romeon.type;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = '[MembersScreen] Unsupported search context type: ';
            sizing = zuuluu.bind(michal)(verify);
            zuuluu = oscard.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: oscard}});
            output = zuuluu;
            michal = new output[oscard](sizing, kiloes);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 201:
            oscard = _closure1_slot18;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[entity];
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.AnalyticsLocationProvider;
            michal = {};
            michal['value'] = report;
            foxtra = _closure1_slot18;
            offset = _closure1_slot20;
            verify = {};
            verify['searchContext'] = romeon;
            backup = romeon.guildId;
            verify['guildId'] = backup;
            verify['onViewableItemsChanged'] = golfie;
            verify = foxtra.bind(tangon)(offset, verify);
            michal['children'] = verify;
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 281:
            oscard = _closure1_slot18;
            zuuluu = _closure1_slot21;
            michal = {};
            michal['searchContext'] = romeon;
            verify = romeon.channelId;
            michal['channelId'] = verify;
            verify = romeon.guildId;
            michal['guildId'] = verify;
            michal['onViewableItemsChanged'] = golfie;
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 327:
            zuuluu = _closure1_slot18;
            michal = _closure1_slot0;
            foxtra = _closure1_slot3;
            entity = foxtra[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot18;
            oscard = _closure1_slot5;
            report = {};
            verify = yankee.container;
            report['style'] = verify;
            offset = _closure1_slot18;
            verify = _closure1_slot1;
            option = 28;
            option = foxtra[option];
            verify = verify.bind(tangon)(option);
            option = {};
            romeon = romeon.channelId;
            option['channelId'] = romeon;
            romeon = true;
            option['disableStickySections'] = romeon;
            yankee = yankee.userList;
            option['listStyleOverride'] = yankee;
            option = offset.bind(tangon)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/tabs/pages/MembersScreen.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();