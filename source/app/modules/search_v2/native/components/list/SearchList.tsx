// app/modules/search_v2/native/components/list/SearchList.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: getItemKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.type;
            report = _closure1_slot7;
            report = report.DM;
            if(!(report !== tangon)) { _fun00002_ip = 747; continue _fun00001 }
 30:
            report = _closure1_slot7;
            report = report.GUILD_CHANNEL_MEMBER;
            if(!(report !== tangon)) { _fun00002_ip = 692; continue _fun00001 }
 47:
            report = _closure1_slot7;
            report = report.SEARCH_HISTORY_ITEM;
            if(!(report !== tangon)) { _fun00002_ip = 665; continue _fun00001 }
 64:
            report = _closure1_slot7;
            report = report.MEDIA_GRID;
            if(!(report !== tangon)) { _fun00002_ip = 621; continue _fun00001 }
 81:
            report = _closure1_slot7;
            report = report.MEDIA;
            if(!(report !== tangon)) { _fun00002_ip = 558; continue _fun00001 }
 98:
            report = _closure1_slot7;
            report = report.MEDIA_PLACEHOLDER;
            if(!(report !== tangon)) { _fun00002_ip = 551; continue _fun00001 }
 115:
            report = _closure1_slot7;
            report = report.FILE_OR_LINK_PLACEHOLDER;
            if(!(report !== tangon)) { _fun00002_ip = 551; continue _fun00001 }
 132:
            report = _closure1_slot7;
            report = report.MESSAGE_PLACEHOLDER;
            if(!(report !== tangon)) { _fun00002_ip = 551; continue _fun00001 }
 149:
            report = _closure1_slot7;
            report = report.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
            if(!(report !== tangon)) { _fun00002_ip = 551; continue _fun00001 }
 166:
            report = _closure1_slot7;
            report = report.GROUP_DM;
            if(!(report !== tangon)) { _fun00002_ip = 501; continue _fun00001 }
 183:
            report = _closure1_slot7;
            report = report.GUILD_TEXT_CHANNEL;
            if(!(report !== tangon)) { _fun00002_ip = 462; continue _fun00001 }
 200:
            report = _closure1_slot7;
            report = report.GUILD_VOICE_CHANNEL;
            if(!(report !== tangon)) { _fun00002_ip = 462; continue _fun00001 }
 217:
            report = _closure1_slot7;
            report = report.MESSAGE;
            if(!(report !== tangon)) { _fun00002_ip = 423; continue _fun00001 }
 234:
            report = _closure1_slot7;
            report = report.LINK;
            if(!(report !== tangon)) { _fun00002_ip = 362; continue _fun00001 }
 248:
            report = _closure1_slot7;
            report = report.FILE;
            if(!(report !== tangon)) { _fun00002_ip = 362; continue _fun00001 }
 262:
            report = _closure1_slot7;
            report = report.GENERIC;
            if(!(report !== tangon)) { _fun00002_ip = 328; continue _fun00001 }
 276:
            zuuluu = _closure1_slot7;
            zuuluu = zuuluu.SECTION;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 294; continue _fun00001 }
 290:
            zuuluu = undefined;
            return zuuluu;
 294:
            zuuluu = entity.props;
            report = zuuluu.title;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = '';
            zuuluu = tangon.bind(zuuluu)(report);
            return zuuluu;
 328:
            zuuluu = entity.props;
            report = zuuluu.text;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = '';
            zuuluu = tangon.bind(zuuluu)(report);
            return zuuluu;
 362:
            zuuluu = entity.props;
            zuuluu = zuuluu.data;
            golfie = zuuluu.messageId;
            zuuluu = entity.props;
            zuuluu = zuuluu.data;
            oscard = zuuluu.mediaIndex;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            tangon = '';
            zuuluu = '-';
            zuuluu = report.bind(tangon)(golfie, zuuluu, oscard);
            return zuuluu;
 423:
            zuuluu = entity.props;
            zuuluu = zuuluu.message;
            report = zuuluu.id;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = '';
            zuuluu = tangon.bind(zuuluu)(report);
            return zuuluu;
 462:
            zuuluu = entity.props;
            zuuluu = zuuluu.channel;
            report = zuuluu.id;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = '';
            zuuluu = tangon.bind(zuuluu)(report);
            return zuuluu;
 501:
            golfie = entity.section;
            zuuluu = entity.props;
            zuuluu = zuuluu.channel;
            oscard = zuuluu.id;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            tangon = '';
            zuuluu = '-';
            zuuluu = report.bind(tangon)(golfie, zuuluu, oscard);
            return zuuluu;
 551:
            zuuluu = entity.key;
            return zuuluu;
 558:
            zuuluu = entity.props;
            zuuluu = zuuluu.media;
            golfie = zuuluu.messageId;
            zuuluu = entity.props;
            zuuluu = zuuluu.media;
            oscard = zuuluu.mediaIndex;
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            report = zuuluu.concat;
            tangon = '';
            zuuluu = '-';
            zuuluu = report.bind(tangon)(golfie, zuuluu, oscard);
            return zuuluu;
 621:
            zuuluu = entity.props;
            report = zuuluu.media;
            tangon = report.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                report = entity.messageId;
                tangon = entity.mediaIndex;
                entity = global;
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                michal = '';
                entity = '-';
                entity = zuuluu.bind(michal)(report, entity, tangon);
                return entity;
            };
            report = tangon.bind(report)(zuuluu);
            tangon = report.join;
            zuuluu = '-';
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 665:
            zuuluu = entity.props;
            tangon = zuuluu.searchHistoryItem;
            zuuluu = function(argFoo) { // Original name: searchHistoryKeyExtractor
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    tangon = _closure1_slot6;
                    tangon = tangon.TEXT;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 143; continue _fun00003 }
 25:
                    tangon = _closure1_slot6;
                    tangon = tangon.GROUP_DM;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 39:
                    tangon = _closure1_slot6;
                    tangon = tangon.GUILD_TEXT_CHANNEL;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 53:
                    tangon = _closure1_slot6;
                    tangon = tangon.GUILD_VOICE_CHANNEL;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 67:
                    michal = _closure1_slot6;
                    michal = michal.DM;
                    if(!(michal !== zuuluu)) { _fun00004_ip = 85; continue _fun00003 }
 81:
                    michal = undefined;
                    return michal;
 85:
                    tangon = entity.userId;
                    michal = global;
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = '';
                    michal = zuuluu.bind(michal)(tangon);
                    return michal;
 114:
                    tangon = entity.channelId;
                    michal = global;
                    michal = michal.HermesInternal;
                    zuuluu = michal.concat;
                    michal = '';
                    michal = zuuluu.bind(michal)(tangon);
                    return michal;
 143:
                    report = entity.text;
                    zuuluu = entity.tags;
                    entity = null;
                    entity = entity == zuuluu;
                    tangon = undefined;
                    if(entity) { _fun00004_ip = 198; continue _fun00003 }
 165:
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        entity = entity.text;
                        return entity;
                    };
                    zuuluu = michal.bind(zuuluu)(entity);
                    michal = zuuluu.join;
                    entity = ' ';
                    tangon = michal.bind(zuuluu)(entity);
 198:
                    entity = global;
                    entity = entity.HermesInternal;
                    zuuluu = entity.concat;
                    michal = '';
                    entity = ' ';
                    entity = zuuluu.bind(michal)(report, entity, tangon);
                    return entity;
                }
            };
            michal = undefined;
            michal = zuuluu.bind(michal)(tangon);
            return michal;
 692:
            michal = entity.props;
            michal = michal.user;
            oscard = michal.id;
            michal = entity.props;
            report = michal.guildId;
            michal = global;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = '-';
            michal = tangon.bind(zuuluu)(oscard, michal, report);
            return michal;
 747:
            romeon = entity.section;
            michal = entity.props;
            michal = michal.user;
            offset = michal.id;
            entity = entity.props;
            option = entity.guildId;
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            foxtra = '';
            entity = '-';
            yankee = entity;
            verify = entity;
            entity = foxtra[zuuluu](romeon, yankee, offset, verify, option, golfie);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: keyExtractor
        zuuluu = argFoo;
        report = zuuluu.type;
        michal = _closure1_slot12;
        entity = undefined;
        tangon = michal.bind(entity)(zuuluu);
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = '-';
        entity = zuuluu.bind(michal)(report, entity, tangon);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: getItemType
        entity = argFoo;
        entity = entity.type;
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: renderItem
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            report = entity.item;
            zuuluu = report.type;
            michal = _closure1_slot7;
            michal = michal.DM;
            if(!(michal !== zuuluu)) { _fun00006_ip = 1047; continue _fun00005 }
 33:
            michal = _closure1_slot7;
            michal = michal.GROUP_DM;
            if(!(michal !== zuuluu)) { _fun00006_ip = 999; continue _fun00005 }
 50:
            michal = _closure1_slot7;
            michal = michal.SEARCH_HISTORY_ITEM;
            if(!(michal !== zuuluu)) { _fun00006_ip = 951; continue _fun00005 }
 67:
            michal = _closure1_slot7;
            michal = michal.MEDIA;
            if(!(michal !== zuuluu)) { _fun00006_ip = 903; continue _fun00005 }
 84:
            michal = _closure1_slot7;
            michal = michal.MEDIA_PLACEHOLDER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 855; continue _fun00005 }
 101:
            michal = _closure1_slot7;
            michal = michal.FILE_OR_LINK_PLACEHOLDER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 807; continue _fun00005 }
 118:
            michal = _closure1_slot7;
            michal = michal.MEDIA_GRID;
            if(!(michal !== zuuluu)) { _fun00006_ip = 759; continue _fun00005 }
 135:
            michal = _closure1_slot7;
            michal = michal.GUILD_TEXT_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00006_ip = 711; continue _fun00005 }
 152:
            michal = _closure1_slot7;
            michal = michal.GUILD_VOICE_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00006_ip = 663; continue _fun00005 }
 169:
            michal = _closure1_slot7;
            michal = michal.MESSAGE;
            if(!(michal !== zuuluu)) { _fun00006_ip = 615; continue _fun00005 }
 186:
            michal = _closure1_slot7;
            michal = michal.MESSAGE_PLACEHOLDER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 579; continue _fun00005 }
 203:
            michal = _closure1_slot7;
            michal = michal.LINK;
            if(!(michal !== zuuluu)) { _fun00006_ip = 531; continue _fun00005 }
 220:
            michal = _closure1_slot7;
            michal = michal.FILE;
            if(!(michal !== zuuluu)) { _fun00006_ip = 483; continue _fun00005 }
 237:
            michal = _closure1_slot7;
            michal = michal.GUILD_CHANNEL_MEMBER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 435; continue _fun00005 }
 254:
            michal = _closure1_slot7;
            michal = michal.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 399; continue _fun00005 }
 271:
            michal = _closure1_slot7;
            michal = michal.GENERIC;
            if(!(michal !== zuuluu)) { _fun00006_ip = 351; continue _fun00005 }
 285:
            michal = _closure1_slot7;
            michal = michal.SECTION;
            if(!(michal !== zuuluu)) { _fun00006_ip = 303; continue _fun00005 }
 299:
            michal = null;
            return michal;
 303:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 21;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 351:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 20;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 399:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 19;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 435:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 18;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 483:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 17;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 531:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 16;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 579:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 15;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 615:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 14;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 663:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 13;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 711:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 12;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 759:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 807:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 10;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 855:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 903:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 8;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 951:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 999:
            oscard = _closure1_slot8;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 1047:
            tangon = _closure1_slot8;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 5;
            entity = zuuluu[entity];
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            entity = {};
            option = report.props;
            verify = entity;
            report = copyDataProperties(verify, option);
            entity = tangon.bind(zuuluu)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    yankee = 1;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot4 = option;
    tangon = tangon.StyleSheet;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SearchHistoryItemTypes;
    var _closure1_slot6 = option;
    tangon = tangon.SearchListItemTypes;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot8 = option;
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    offset['flex'] = yankee;
    tangon['container'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot10 = tangon;
    tangon = {'itemVisiblePercentThreshold': 75, 'minimumViewTime': 1000};
    var _closure1_slot11 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: SearchList
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            sizing = michal.contentContainerStyle;
            echoed = michal.data;
            kiloes = michal.onEndReached;
            romeon = michal.ItemSeparatorComponent;
            backup = michal.ListHeaderComponent;
            foxtra = michal.ListFooterComponent;
            update = michal.estimatedItemSize;
            yankee = michal.numColumns;
            option = michal.onViewableItemsChanged;
            var _closure2_slot0 = option;
            michal = _closure1_slot10;
            tangon = undefined;
            oscard = michal.bind(tangon)();
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 22;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            result = michal.bottom;
            report = null;
            michal = report == yankee;
            zuuluu = 0.5;
            output = zuuluu;
            if(michal) { _fun00008_ip = 175; continue _fun00007 }
 126:
            michal = 1;
            output = zuuluu;
            if(!(michal !== yankee)) { _fun00008_ip = 175; continue _fun00007 }
 136:
            output = 0.8;
            michal = 2;
            if(!(michal !== yankee)) { _fun00008_ip = 175; continue _fun00007 }
 153:
            michal = 3;
            michal = yankee >= michal;
            output = undefined;
            if(!michal) { _fun00008_ip = 175; continue _fun00007 }
 165:
            output = 0.99;
 175:
            golfie = _closure1_slot3;
            zuuluu = golfie.useCallback;
            michal = new Array(1);
            michal[0] = option;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.viewableItems;
                    tangon = _closure2_slot0;
                    michal = null;
                    if(!(michal != tangon)) { _fun00010_ip = 33; continue _fun00009 }
 22:
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 33:
                    entity = undefined;
                    return entity;
                }
            };
            offset = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot4;
            entity = {};
            oscard = oscard.container;
            entity['style'] = oscard;
            golfie = echoed.length;
            oscard = 0;
            oscard = oscard === golfie;
            if(!oscard) { _fun00008_ip = 242; continue _fun00007 }
 238:
            oscard = report == foxtra;
 242:
            if(!oscard) { _fun00008_ip = 249; continue _fun00007 }
 245:
            oscard = report == backup;
 249:
            if(!oscard) { _fun00008_ip = 373; continue _fun00007 }
 252:
            option = _closure1_slot8;
            golfie = _closure1_slot4;
            report = {};
            source = _closure1_slot5;
            source = source.absoluteFill;
            report['style'] = source;
            vacuum = _closure1_slot8;
            ctrled = _closure1_slot1;
            papara = _closure1_slot2;
            source = 23;
            source = papara[source];
            ctrled = ctrled.bind(tangon)(source);
            source = {};
            cntext = _closure1_slot0;
            sequen = 24;
            config = papara[sequen];
            config = cntext.bind(tangon)(config);
            record = config.intl;
            config = record.string;
            sequen = papara[sequen];
            sequen = cntext.bind(tangon)(sequen);
            sequen = sequen.t;
            sequen = sequen.V6nAfH;
            sequen = config.bind(record)(sequen);
            source['text'] = sequen;
            source = vacuum.bind(tangon)(ctrled, source);
            report['children'] = source;
            oscard = option.bind(tangon)(golfie, report);
 373:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot8;
            golfie = _closure1_slot0;
            source = _closure1_slot2;
            oscard = 25;
            oscard = source[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.AnimatedFlashList;
            oscard = {'keyboardDismissMode': 'on-drag', 'keyboardShouldPersistTaps': 'handled'};
            oscard['estimatedItemSize'] = update;
            oscard['data'] = echoed;
            echoed = _closure1_slot15;
            oscard['renderItem'] = echoed;
            oscard['onEndReachedThreshold'] = output;
            oscard['onEndReached'] = kiloes;
            kiloes = true;
            oscard['scrollsToTop'] = kiloes;
            kiloes = {};
            output = 16;
            output = output + result;
            kiloes['paddingBottom'] = output;
            status = kiloes;
            target = sizing;
            sizing = copyDataProperties(status, target);
            oscard['contentContainerStyle'] = kiloes;
            kiloes = _closure1_slot13;
            oscard['keyExtractor'] = kiloes;
            kiloes = _closure1_slot14;
            oscard['getItemType'] = kiloes;
            oscard['ListHeaderComponent'] = backup;
            oscard['ListFooterComponent'] = foxtra;
            oscard['ItemSeparatorComponent'] = romeon;
            oscard['numColumns'] = yankee;
            oscard['onViewableItemsChanged'] = offset;
            verify = _closure1_slot11;
            oscard['viewabilityConfig'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 26;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/SearchList.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();