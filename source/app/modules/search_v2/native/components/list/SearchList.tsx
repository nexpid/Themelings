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
            report = _closure1_slot6;
            report = report.DM;
            if(!(report !== tangon)) { _fun00002_ip = 747; continue _fun00001 }
 30:
            report = _closure1_slot6;
            report = report.GUILD_CHANNEL_MEMBER;
            if(!(report !== tangon)) { _fun00002_ip = 692; continue _fun00001 }
 47:
            report = _closure1_slot6;
            report = report.SEARCH_HISTORY_ITEM;
            if(!(report !== tangon)) { _fun00002_ip = 665; continue _fun00001 }
 64:
            report = _closure1_slot6;
            report = report.MEDIA_GRID;
            if(!(report !== tangon)) { _fun00002_ip = 621; continue _fun00001 }
 81:
            report = _closure1_slot6;
            report = report.MEDIA;
            if(!(report !== tangon)) { _fun00002_ip = 558; continue _fun00001 }
 98:
            report = _closure1_slot6;
            report = report.MEDIA_PLACEHOLDER;
            if(!(report !== tangon)) { _fun00002_ip = 551; continue _fun00001 }
 115:
            report = _closure1_slot6;
            report = report.FILE_OR_LINK_PLACEHOLDER;
            if(!(report !== tangon)) { _fun00002_ip = 551; continue _fun00001 }
 132:
            report = _closure1_slot6;
            report = report.MESSAGE_PLACEHOLDER;
            if(!(report !== tangon)) { _fun00002_ip = 551; continue _fun00001 }
 149:
            report = _closure1_slot6;
            report = report.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
            if(!(report !== tangon)) { _fun00002_ip = 551; continue _fun00001 }
 166:
            report = _closure1_slot6;
            report = report.GROUP_DM;
            if(!(report !== tangon)) { _fun00002_ip = 501; continue _fun00001 }
 183:
            report = _closure1_slot6;
            report = report.GUILD_TEXT_CHANNEL;
            if(!(report !== tangon)) { _fun00002_ip = 462; continue _fun00001 }
 200:
            report = _closure1_slot6;
            report = report.GUILD_VOICE_CHANNEL;
            if(!(report !== tangon)) { _fun00002_ip = 462; continue _fun00001 }
 217:
            report = _closure1_slot6;
            report = report.MESSAGE;
            if(!(report !== tangon)) { _fun00002_ip = 423; continue _fun00001 }
 234:
            report = _closure1_slot6;
            report = report.LINK;
            if(!(report !== tangon)) { _fun00002_ip = 362; continue _fun00001 }
 248:
            report = _closure1_slot6;
            report = report.FILE;
            if(!(report !== tangon)) { _fun00002_ip = 362; continue _fun00001 }
 262:
            report = _closure1_slot6;
            report = report.GENERIC;
            if(!(report !== tangon)) { _fun00002_ip = 328; continue _fun00001 }
 276:
            zuuluu = _closure1_slot6;
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
                    tangon = _closure1_slot5;
                    tangon = tangon.TEXT;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 143; continue _fun00003 }
 25:
                    tangon = _closure1_slot5;
                    tangon = tangon.GROUP_DM;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 39:
                    tangon = _closure1_slot5;
                    tangon = tangon.GUILD_TEXT_CHANNEL;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 53:
                    tangon = _closure1_slot5;
                    tangon = tangon.GUILD_VOICE_CHANNEL;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 114; continue _fun00003 }
 67:
                    michal = _closure1_slot5;
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
            michal = _closure1_slot6;
            michal = michal.DM;
            if(!(michal !== zuuluu)) { _fun00006_ip = 1065; continue _fun00005 }
 33:
            michal = _closure1_slot6;
            michal = michal.GROUP_DM;
            if(!(michal !== zuuluu)) { _fun00006_ip = 1017; continue _fun00005 }
 50:
            michal = _closure1_slot6;
            michal = michal.SEARCH_HISTORY_ITEM;
            if(!(michal !== zuuluu)) { _fun00006_ip = 969; continue _fun00005 }
 67:
            michal = _closure1_slot6;
            michal = michal.MEDIA;
            if(!(michal !== zuuluu)) { _fun00006_ip = 921; continue _fun00005 }
 84:
            michal = _closure1_slot6;
            michal = michal.MEDIA_PLACEHOLDER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 867; continue _fun00005 }
 101:
            michal = _closure1_slot6;
            michal = michal.FILE_OR_LINK_PLACEHOLDER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 813; continue _fun00005 }
 118:
            michal = _closure1_slot6;
            michal = michal.MEDIA_GRID;
            if(!(michal !== zuuluu)) { _fun00006_ip = 765; continue _fun00005 }
 135:
            michal = _closure1_slot6;
            michal = michal.GUILD_TEXT_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00006_ip = 717; continue _fun00005 }
 152:
            michal = _closure1_slot6;
            michal = michal.GUILD_VOICE_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00006_ip = 669; continue _fun00005 }
 169:
            michal = _closure1_slot6;
            michal = michal.MESSAGE;
            if(!(michal !== zuuluu)) { _fun00006_ip = 621; continue _fun00005 }
 186:
            michal = _closure1_slot6;
            michal = michal.MESSAGE_PLACEHOLDER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 579; continue _fun00005 }
 203:
            michal = _closure1_slot6;
            michal = michal.LINK;
            if(!(michal !== zuuluu)) { _fun00006_ip = 531; continue _fun00005 }
 220:
            michal = _closure1_slot6;
            michal = michal.FILE;
            if(!(michal !== zuuluu)) { _fun00006_ip = 483; continue _fun00005 }
 237:
            michal = _closure1_slot6;
            michal = michal.GUILD_CHANNEL_MEMBER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 435; continue _fun00005 }
 254:
            michal = _closure1_slot6;
            michal = michal.GUILD_CHANNEL_MEMBER_PLACEHOLDER;
            if(!(michal !== zuuluu)) { _fun00006_ip = 399; continue _fun00005 }
 271:
            michal = _closure1_slot6;
            michal = michal.GENERIC;
            if(!(michal !== zuuluu)) { _fun00006_ip = 351; continue _fun00005 }
 285:
            michal = _closure1_slot6;
            michal = michal.SECTION;
            if(!(michal !== zuuluu)) { _fun00006_ip = 303; continue _fun00005 }
 299:
            michal = null;
            return michal;
 303:
            oscard = _closure1_slot7;
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
            oscard = _closure1_slot7;
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
            oscard = _closure1_slot7;
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
            oscard = _closure1_slot7;
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
            oscard = _closure1_slot7;
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
            oscard = _closure1_slot7;
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
            oscard = _closure1_slot7;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 15;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.MessageRowPlaceholderItem;
            michal = {};
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 621:
            oscard = _closure1_slot7;
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
 669:
            oscard = _closure1_slot7;
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
 717:
            oscard = _closure1_slot7;
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
 765:
            oscard = _closure1_slot7;
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
 813:
            oscard = _closure1_slot7;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 10;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.FileOrLinkGridPlaceholderItem;
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 867:
            oscard = _closure1_slot7;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 9;
            michal = tangon[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.MediaGridPlaceholderItem;
            michal = {};
            option = report.props;
            verify = michal;
            golfie = copyDataProperties(verify, option);
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 921:
            oscard = _closure1_slot7;
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
 969:
            oscard = _closure1_slot7;
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
 1017:
            oscard = _closure1_slot7;
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
 1065:
            tangon = _closure1_slot7;
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
    yankee = 1;
    tangon = oscard[yankee];
    tangon = report.bind(entity)(tangon);
    option = tangon.View;
    var _closure1_slot3 = option;
    tangon = tangon.StyleSheet;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.SearchHistoryItemTypes;
    var _closure1_slot5 = option;
    tangon = tangon.SearchListItemTypes;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot7 = option;
    tangon = tangon.jsxs;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {};
    offset['flex'] = yankee;
    tangon['container'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot9 = tangon;
    tangon = {};
    option = 'function SearchListTsx1(){const{visible}=this.__closure;return visible?1:0;}';
    tangon['code'] = option;
    var _closure1_slot10 = tangon;
    tangon = {};
    option = 'function SearchListTsx2(){const{visible,withSpring,animationState,springStandard}=this.__closure;return{opacity:visible?withSpring(animationState.get(),springStandard):0};}';
    tangon['code'] = option;
    var _closure1_slot11 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            kiloes = michal.contentContainerStyle;
            result = michal.data;
            backup = michal.onEndReached;
            offset = michal.ItemSeparatorComponent;
            romeon = michal.ListHeaderComponent;
            yankee = michal.ListFooterComponent;
            echoed = michal.estimatedItemSize;
            oscard = michal.visible;
            tangon = undefined;
            if(!(oscard === tangon)) { _fun00008_ip = 60; continue _fun00007 }
 58:
            oscard = true;
 60:
            var _closure2_slot0 = oscard;
            verify = michal.numColumns;
            var _closure2_slot1 = tangon;
            michal = _closure1_slot9;
            golfie = michal.bind(tangon)();
            zuuluu = _closure1_slot1;
            source = _closure1_slot2;
            michal = 22;
            michal = source[michal];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            output = michal.bottom;
            sizing = _closure1_slot0;
            update = 23;
            michal = source[update];
            report = sizing.bind(tangon)(michal);
            zuuluu = report.useDerivedValue;
            michal = function() { // Original name: A
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = 0;
                    if(!michal) { _fun00010_ip = 15; continue _fun00009 }
 12:
                    entity = 1;
 15:
                    return entity;
                }
            };
            option = {};
            option['visible'] = oscard;
            michal['__closure'] = option;
            option = 7183199864841.0;
            michal['__workletHash'] = option;
            option = _closure1_slot10;
            michal['__initData'] = option;
            option = zuuluu.bind(report)(michal);
            _closure2_slot1 = option;
            michal = source[update];
            zuuluu = sizing.bind(tangon)(michal);
            michal = zuuluu.useAnimatedStyle;
            entity = function() { // Original name: y
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = {};
                    tangon = _closure2_slot0;
                    michal = 0;
                    if(!tangon) { _fun00012_ip = 81; continue _fun00011 }
 14:
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 24;
                    tangon = verify[tangon];
                    golfie = undefined;
                    oscard = option.bind(golfie)(tangon);
                    report = oscard.withSpring;
                    tangon = _closure2_slot1;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = 25;
                    zuuluu = verify[zuuluu];
                    zuuluu = option.bind(golfie)(zuuluu);
                    zuuluu = zuuluu.springStandard;
                    michal = report.bind(oscard)(tangon, zuuluu);
 81:
                    entity['opacity'] = michal;
                    return entity;
                }
            };
            report = {};
            report['visible'] = oscard;
            ctrled = 24;
            ctrled = source[ctrled];
            ctrled = sizing.bind(tangon)(ctrled);
            ctrled = ctrled.withSpring;
            report['withSpring'] = ctrled;
            report['animationState'] = option;
            option = 25;
            option = source[option];
            option = sizing.bind(tangon)(option);
            option = option.springStandard;
            report['springStandard'] = option;
            entity['__closure'] = report;
            report = 15510780489798.0;
            entity['__workletHash'] = report;
            report = _closure1_slot11;
            entity['__initData'] = report;
            option = michal.bind(zuuluu)(entity);
            report = null;
            entity = report == verify;
            michal = 0.5;
            sizing = michal;
            if(entity) { _fun00008_ip = 377; continue _fun00007 }
 328:
            entity = 1;
            sizing = michal;
            if(!(entity !== verify)) { _fun00008_ip = 377; continue _fun00007 }
 338:
            sizing = 0.8;
            entity = 2;
            if(!(entity !== verify)) { _fun00008_ip = 377; continue _fun00007 }
 355:
            entity = 3;
            entity = verify >= entity;
            sizing = undefined;
            if(!entity) { _fun00008_ip = 377; continue _fun00007 }
 367:
            sizing = 0.99;
 377:
            zuuluu = _closure1_slot8;
            michal = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[update];
            entity = michal.bind(tangon)(entity);
            michal = entity.View;
            entity = {};
            update = golfie.container;
            golfie = new Array(2);
            golfie[0] = update;
            golfie[1] = option;
            entity['style'] = golfie;
            if(!oscard) { _fun00008_ip = 440; continue _fun00007 }
 429:
            option = result.length;
            golfie = 0;
            oscard = golfie === option;
 440:
            if(!oscard) { _fun00008_ip = 447; continue _fun00007 }
 443:
            oscard = report == yankee;
 447:
            if(!oscard) { _fun00008_ip = 454; continue _fun00007 }
 450:
            oscard = report == romeon;
 454:
            if(!oscard) { _fun00008_ip = 578; continue _fun00007 }
 457:
            option = _closure1_slot7;
            golfie = _closure1_slot3;
            report = {};
            update = _closure1_slot4;
            update = update.absoluteFill;
            report['style'] = update;
            ctrled = _closure1_slot7;
            source = _closure1_slot1;
            cntext = _closure1_slot2;
            update = 26;
            update = cntext[update];
            source = source.bind(tangon)(update);
            update = {};
            record = _closure1_slot0;
            vacuum = 27;
            sequen = cntext[vacuum];
            sequen = record.bind(tangon)(sequen);
            config = sequen.intl;
            sequen = config.string;
            vacuum = cntext[vacuum];
            vacuum = record.bind(tangon)(vacuum);
            vacuum = vacuum.t;
            vacuum = vacuum.V6nAfH;
            vacuum = sequen.bind(config)(vacuum);
            update['text'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            report['children'] = update;
            oscard = option.bind(tangon)(golfie, report);
 578:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot7;
            golfie = _closure1_slot0;
            update = _closure1_slot2;
            oscard = 28;
            oscard = update[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.AnimatedFlashList;
            oscard = {'keyboardDismissMode': 'on-drag', 'keyboardShouldPersistTaps': 'handled'};
            oscard['estimatedItemSize'] = echoed;
            oscard['data'] = result;
            result = _closure1_slot15;
            oscard['renderItem'] = result;
            oscard['onEndReachedThreshold'] = sizing;
            oscard['onEndReached'] = backup;
            backup = true;
            oscard['scrollsToTop'] = backup;
            backup = {};
            sizing = 16;
            sizing = sizing + output;
            backup['paddingBottom'] = sizing;
            target = backup;
            papara = kiloes;
            kiloes = copyDataProperties(target, papara);
            oscard['contentContainerStyle'] = backup;
            backup = _closure1_slot13;
            oscard['keyExtractor'] = backup;
            foxtra = _closure1_slot14;
            oscard['getItemType'] = foxtra;
            oscard['ListHeaderComponent'] = romeon;
            oscard['ListFooterComponent'] = yankee;
            oscard['ItemSeparatorComponent'] = offset;
            oscard['numColumns'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
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
    tangon = 'modules/search_v2/native/components/list/SearchList.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();