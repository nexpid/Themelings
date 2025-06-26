// app/modules/search_v2/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: isAutocompleteEligibleGuildChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argBar;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getGuildIdFromSearchContext;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = null;
            entity = michal != tangon;
            if(!entity) { _fun00002_ip = 73; continue _fun00001 }
 51:
            option = _closure1_slot5;
            golfie = option.has;
            oscard = tangon.type;
            oscard = golfie.bind(option)(oscard);
            entity = !oscard;
 73:
            if(!entity) { _fun00002_ip = 98; continue _fun00001 }
 76:
            golfie = _closure1_slot4;
            oscard = golfie.has;
            report = tangon.type;
            report = oscard.bind(golfie)(report);
            entity = !report;
 98:
            if(!entity) { _fun00002_ip = 105; continue _fun00001 }
 101:
            entity = michal != zuuluu;
 105:
            if(!entity) { _fun00002_ip = 122; continue _fun00001 }
 108:
            michal = tangon.getGuildId;
            michal = michal.bind(tangon)();
            entity = michal === zuuluu;
 122:
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.GUILD_VOCAL_CHANNEL_TYPES;
    var _closure1_slot4 = option;
    tangon = tangon.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot9 = option;
    tangon = tangon.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 10;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot15 = tangon;
    tangon = 11;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.SearchListItemTypes;
    var _closure1_slot16 = tangon;
    tangon = 12;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.ID_REGEX;
    var _closure1_slot17 = report;
    report = tangon.RelationshipTypes;
    var _closure1_slot18 = report;
    report = tangon.SearchTokenTypes;
    var _closure1_slot19 = report;
    tangon = tangon.SearchTypes;
    var _closure1_slot20 = tangon;
    tangon = 19;
    tangon = golfie[tangon];
    option = oscard.bind(entity)(tangon);
    report = option.cachedFunction;
    tangon = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            var _closure2_slot0 = oscard;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 17;
            michal = tangon[michal];
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getGuildIdFromSearchContext;
            oscard = michal.bind(zuuluu)(oscard);
            michal = null;
            if(!(michal != oscard)) { _fun00004_ip = 140; continue _fun00003 }
 51:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 13;
            michal = golfie[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.queryChannels;
            michal = {'query': '', 'guildId': null, 'limit': 15, 'allowEmptyQueries': true};
            michal['guildId'] = oscard;
            report = _closure1_slot9;
            michal['type'] = report;
            report = function(argFoo) { // Original name: filter
                tangon = _closure1_slot22;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            };
            michal['filter'] = report;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.record;
                entity = entity.id;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00004_ip = 144; continue _fun00003;
 140:
            entity = new Array(0);
 144:
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot21 = tangon;
    report = 30;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/search_v2/native/components/layout/autocomplete/AutocompleteScreenUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: isUserFilterPrefixAutocomplete
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot15;
            tangon = report.getState;
            zuuluu = argFoo;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.getPrefixTag;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00006_ip = 76; continue _fun00005 }
 37:
            zuuluu = entity.searchTokenType;
            entity = _closure1_slot19;
            entity = entity.FILTER_FROM;
            entity = zuuluu === entity;
            if(entity) { _fun00006_ip = 74; continue _fun00005 }
 60:
            michal = _closure1_slot19;
            michal = michal.FILTER_MENTIONS;
            entity = zuuluu === michal;
 74:
            return entity;
 76:
            entity = false;
            return entity;
        }
    };
    zuuluu['isUserFilterPrefixAutocomplete'] = report;
    report = function(argFoo) { // Original name: getUserEmptyState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            golfie = new Array(0);
            var _closure2_slot0 = golfie;
            oscard = _closure1_slot15;
            report = oscard.getState;
            tangon = function(argFoo) {
                michal = argFoo;
                entity = michal.getChannelIds;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = report.bind(oscard)(entity, tangon);
            report = oscard.forEach;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.getRecentlyTalked;
                zuuluu = argFoo;
                michal = 15;
                tangon = tangon.bind(report)(zuuluu, michal);
                zuuluu = tangon.forEach;
                michal = function(argFoo) {
                    entity = argFoo;
                    entity = entity.record;
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.push;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            report = entity.type;
            tangon = _closure1_slot20;
            tangon = tangon.GUILD;
            if(!(tangon !== report)) { _fun00008_ip = 276; continue _fun00007 }
 78:
            tangon = _closure1_slot20;
            tangon = tangon.GUILD_CHANNEL;
            if(!(tangon !== report)) { _fun00008_ip = 276; continue _fun00007 }
 95:
            tangon = _closure1_slot20;
            tangon = tangon.DMS;
            if(!(tangon !== report)) { _fun00008_ip = 210; continue _fun00007 }
 109:
            tangon = _closure1_slot20;
            tangon = tangon.CHANNEL;
            if(!(tangon === report)) { _fun00008_ip = 315; continue _fun00007 }
 126:
            oscard = _closure1_slot7;
            report = oscard.getChannel;
            tangon = entity.channelId;
            report = report.bind(oscard)(tangon);
            tangon = null;
            if(!(tangon != report)) { _fun00008_ip = 315; continue _fun00007 }
 154:
            option = golfie.push;
            verify = _closure1_slot6;
            oscard = verify.getId;
            oscard = oscard.bind(verify)();
            oscard = option.bind(golfie)(oscard);
            oscard = report.recipients;
            if(!(tangon != oscard)) { _fun00008_ip = 315; continue _fun00007 }
 191:
            report = oscard.forEach;
            tangon = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.push;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            _fun00008_ip = 315; continue _fun00007;
 210:
            report = _closure1_slot7;
            tangon = report.getSortedPrivateChannels;
            oscard = tangon.bind(report)();
            report = oscard.forEach;
            tangon = function(argFoo) {
                entity = argFoo;
                zuuluu = entity.recipients;
                michal = zuuluu.forEach;
                entity = function(argFoo) {
                    zuuluu = _closure2_slot0;
                    michal = zuuluu.push;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            report = _closure1_slot12;
            tangon = report.getFriendIDs;
            oscard = tangon.bind(report)();
            report = oscard.forEach;
            tangon = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.push;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            _fun00008_ip = 315; continue _fun00007;
 276:
            report = _closure1_slot14;
            tangon = report.getRecentMessageAuthorIds;
            entity = entity.guildId;
            report = tangon.bind(report)(entity);
            tangon = report.forEach;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.push;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = tangon.bind(report)(entity);
 315:
            report = _closure1_slot1;
            entity = _closure1_slot2;
            tangon = 14;
            tangon = entity[tangon];
            oscard = undefined;
            report = report.bind(oscard)(tangon);
            tangon = report.chain;
            report = tangon.bind(report)(golfie);
            tangon = report.uniq;
            report = tangon.bind(report)();
            tangon = report.map;
            michal = function(argFoo) {
                zuuluu = _closure1_slot13;
                michal = zuuluu.getUser;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(report)(michal);
            michal = tangon.filter;
            report = _closure1_slot0;
            zuuluu = 15;
            entity = entity[zuuluu];
            entity = report.bind(oscard)(entity);
            entity = entity.isNotNullish;
            michal = michal.bind(tangon)(entity);
            entity = michal.take;
            michal = entity.bind(michal)(zuuluu);
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['getUserEmptyState'] = report;
    report = function(argFoo, argBar) { // Original name: getUserExactMatch
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = argBar;
            michal = _closure1_slot17;
            entity = michal.test;
            entity = entity.bind(michal)(oscard);
            if(!entity) { _fun00010_ip = 47; continue _fun00009 }
 23:
            michal = _closure1_slot13;
            entity = michal.getUser;
            entity = entity.bind(michal)(oscard);
            michal = null;
            if(!(michal == entity)) { _fun00010_ip = 273; continue _fun00009 }
 47:
            report = _closure1_slot0;
            michal = _closure1_slot2;
            zuuluu = 16;
            michal = michal[zuuluu];
            golfie = undefined;
            report = report.bind(golfie)(michal);
            michal = report.isMeAutcompleteAnswer;
            michal = michal.bind(report)(oscard);
            if(!michal) { _fun00010_ip = 105; continue _fun00009 }
 83:
            report = _closure1_slot13;
            michal = report.getCurrentUser;
            michal = michal.bind(report)();
            report = null;
            if(!(report == michal)) { _fun00010_ip = 271; continue _fun00009 }
 105:
            report = _closure1_slot0;
            offset = _closure1_slot2;
            zuuluu = offset[zuuluu];
            verify = report.bind(golfie)(zuuluu);
            option = verify.searchUsers;
            zuuluu = 17;
            zuuluu = offset[zuuluu];
            offset = report.bind(golfie)(zuuluu);
            report = offset.getBackwardCompatibilitySearchId;
            zuuluu = argFoo;
            report = report.bind(offset)(zuuluu);
            zuuluu = 1;
            report = option.bind(verify)(oscard, report, zuuluu);
            zuuluu = 0;
            report = report[zuuluu];
            zuuluu = null;
            option = zuuluu == report;
            zuuluu = undefined;
            if(option) { _fun00010_ip = 186; continue _fun00009 }
 181:
            zuuluu = report.user;
 186:
            report = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 18;
            tangon = option[tangon];
            report = report.bind(golfie)(tangon);
            tangon = report.getUserTag;
            report = tangon.bind(report)(zuuluu);
            tangon = report.trim;
            option = tangon.bind(report)();
            tangon = oscard.trim;
            report = tangon.bind(oscard)();
            tangon = zuuluu;
            zuuluu = undefined;
            if(!(option === report)) { _fun00010_ip = 269; continue _fun00009 }
 246:
            report = oscard.trim;
            oscard = report.bind(oscard)();
            report = '';
            zuuluu = undefined;
            if(!(report !== oscard)) { _fun00010_ip = 269; continue _fun00009 }
 266:
            zuuluu = tangon;
 269:
            return zuuluu;
 271:
            return michal;
 273:
            return entity;
        }
    };
    zuuluu['getUserExactMatch'] = report;
    zuuluu['getDefaultGuildChannelIds'] = tangon;
    tangon = function(argFoo) { // Original name: getChannelEmptyState
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            option = argFoo;
            var _closure2_slot0 = option;
            zuuluu = _closure1_slot3;
            michal = zuuluu.getChannelHistory;
            yankee = michal.bind(zuuluu)();
            offset = new Array(0);
            var _closure2_slot1 = offset;
            zuuluu = _closure1_slot8;
            michal = zuuluu.getFrequentlyWithoutFetchingLatest;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getChannel;
                    michal = argFoo;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
                    report = _closure1_slot22;
                    tangon = _closure2_slot0;
                    entity = undefined;
                    tangon = report.bind(entity)(tangon, michal);
                    if(!tangon) { _fun00014_ip = 66; continue _fun00013 }
 47:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.push;
                    michal = michal.id;
                    michal = zuuluu.bind(tangon)(michal);
 66:
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 17;
            michal = tangon[michal];
            golfie = undefined;
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.getGuildIdFromSearchContext;
            tangon = michal.bind(zuuluu)(option);
            michal = null;
            if(!(michal == tangon)) { _fun00012_ip = 110; continue _fun00011 }
 104:
            verify = new Array(0);
            _fun00012_ip = 127; continue _fun00011;
 110:
            zuuluu = _closure1_slot14;
            michal = zuuluu.getRecentMessageChannelIds;
            verify = michal.bind(zuuluu)(tangon);
 127:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 14;
            michal = tangon[michal];
            tangon = zuuluu.bind(golfie)(michal);
            zuuluu = tangon.chain;
            michal = new Array(0);
            romeon = 0;
            backup = michal;
            foxtra = yankee;
            romeon = arraySpread(backup, foxtra, romeon);
            backup = michal;
            foxtra = offset;
            romeon = arraySpread(backup, foxtra, romeon);
            backup = michal;
            foxtra = verify;
            romeon = arraySpread(backup, foxtra, romeon);
            report = _closure1_slot21;
            foxtra = report.bind(golfie)(option);
            backup = michal;
            report = arraySpread(backup, foxtra, romeon);
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.uniq;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.map;
            michal = function(argFoo) {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                tangon = _closure1_slot22;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.take;
            entity = 15;
            michal = michal.bind(zuuluu)(entity);
            entity = michal.value;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['getChannelEmptyState'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getChannelExactMatch
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            oscard = argFoo;
            yankee = argBar;
            michal = _closure1_slot17;
            entity = michal.test;
            entity = entity.bind(michal)(yankee);
            if(!entity) { _fun00016_ip = 64; continue _fun00015 }
 26:
            michal = _closure1_slot7;
            entity = michal.getChannel;
            entity = entity.bind(michal)(yankee);
            michal = null;
            if(!(michal != entity)) { _fun00016_ip = 64; continue _fun00015 }
 46:
            zuuluu = _closure1_slot22;
            michal = undefined;
            michal = zuuluu.bind(michal)(oscard, entity);
            if(michal) { _fun00016_ip = 284; continue _fun00015 }
 64:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            zuuluu = 17;
            zuuluu = michal[zuuluu];
            report = undefined;
            golfie = golfie.bind(report)(zuuluu);
            zuuluu = golfie.getGuildIdFromSearchContext;
            offset = zuuluu.bind(golfie)(oscard);
            zuuluu = _closure1_slot1;
            verify = 13;
            michal = michal[verify];
            golfie = zuuluu.bind(report)(michal);
            zuuluu = golfie.queryChannels;
            michal = {};
            michal['query'] = yankee;
            option = _closure1_slot9;
            michal['type'] = option;
            michal['guildId'] = offset;
            option = false;
            michal['fuzzy'] = option;
            option = 1;
            michal['limit'] = option;
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.length;
            if(!(option === michal)) { _fun00016_ip = 191; continue _fun00015 }
 166:
            michal = 0;
            michal = zuuluu[michal];
            michal = michal.record;
            zuuluu = _closure1_slot22;
            zuuluu = zuuluu.bind(report)(oscard, michal);
            if(zuuluu) { _fun00016_ip = 282; continue _fun00015 }
 191:
            golfie = _closure1_slot1;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[verify];
            verify = golfie.bind(report)(zuuluu);
            golfie = verify.queryChannels;
            zuuluu = {};
            zuuluu['query'] = yankee;
            yankee = _closure1_slot10;
            zuuluu['type'] = yankee;
            zuuluu['guildId'] = offset;
            zuuluu['limit'] = option;
            golfie = golfie.bind(verify)(zuuluu);
            zuuluu = golfie.length;
            if(!(option === zuuluu)) { _fun00016_ip = 276; continue _fun00015 }
 251:
            zuuluu = 0;
            zuuluu = golfie[zuuluu];
            zuuluu = zuuluu.record;
            tangon = _closure1_slot22;
            tangon = tangon.bind(report)(oscard, zuuluu);
            if(tangon) { _fun00016_ip = 280; continue _fun00015 }
 276:
            tangon = null;
            return tangon;
 280:
            return zuuluu;
 282:
            return michal;
 284:
            return entity;
        }
    };
    zuuluu['getChannelExactMatch'] = tangon;
    tangon = function(argFoo) { // Original name: isChannelFilterPrefixAutocomplete
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = _closure1_slot15;
            tangon = report.getState;
            zuuluu = argFoo;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.getPrefixTag;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = null;
            tangon = michal == zuuluu;
            michal = undefined;
            if(tangon) { _fun00018_ip = 48; continue _fun00017 }
 42:
            michal = zuuluu.searchTokenType;
 48:
            entity = _closure1_slot19;
            entity = entity.FILTER_IN;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['isChannelFilterPrefixAutocomplete'] = tangon;
    tangon = function(argFoo) { // Original name: isHasFilterPrefixAutocomplete
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = _closure1_slot15;
            tangon = report.getState;
            zuuluu = argFoo;
            michal = function(argFoo) {
                michal = argFoo;
                entity = michal.getPrefixTag;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = null;
            tangon = michal == zuuluu;
            michal = undefined;
            if(tangon) { _fun00020_ip = 48; continue _fun00019 }
 42:
            michal = zuuluu.searchTokenType;
 48:
            entity = _closure1_slot19;
            entity = entity.FILTER_HAS;
            entity = michal === entity;
            return entity;
        }
    };
    zuuluu['isHasFilterPrefixAutocomplete'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchQueryChannelIds
        tangon = _closure1_slot15;
        zuuluu = tangon.getState;
        michal = argFoo;
        entity = function(argFoo) {
            michal = argFoo;
            entity = michal.getChannelIds;
            tangon = entity.bind(michal)();
            entity = global;
            entity = entity.Set;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            report = michal;
            entity = new report[entity](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getSearchQueryChannelIds'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchQueryUserIds
        tangon = _closure1_slot15;
        zuuluu = tangon.getState;
        michal = argFoo;
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                zuuluu = argFoo;
                entity = zuuluu.getPrefixTag;
                entity = entity.bind(zuuluu)();
                michal = null;
                if(!(michal != entity)) { _fun00022_ip = 66; continue _fun00021 }
 19:
                michal = zuuluu.getUserIds;
                entity = entity.searchTokenType;
                tangon = michal.bind(zuuluu)(entity);
                entity = global;
                entity = entity.Set;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                report = michal;
                entity = new report[entity](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                return entity;
 66:
                entity = global;
                entity = entity.Set;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                report = michal;
                entity = new report[entity](tangon);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['getSearchQueryUserIds'] = tangon;
    tangon = function(argFoo) { // Original name: getSearchFilterHasIcon
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = argFoo;
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            option = 20;
            report = michal[option];
            zuuluu = undefined;
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.nrpA5O;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 762; continue _fun00023 }
 70:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            report = michal[option];
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.ZNR2fn;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 734; continue _fun00023 }
 129:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            report = michal[option];
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.20uQR0;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 706; continue _fun00023 }
 188:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            report = michal[option];
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.L4lxyM;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 678; continue _fun00023 }
 247:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            report = michal[option];
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.AV/v6u;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 650; continue _fun00023 }
 306:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            report = michal[option];
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.XM9XGB;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 622; continue _fun00023 }
 365:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            report = michal[option];
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.TNLcp6;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 594; continue _fun00023 }
 424:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            report = michal[option];
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.F8Wf0d;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 566; continue _fun00023 }
 480:
            golfie = _closure1_slot0;
            michal = _closure1_slot2;
            report = michal[option];
            report = golfie.bind(zuuluu)(report);
            oscard = report.intl;
            report = oscard.string;
            michal = michal[option];
            michal = golfie.bind(zuuluu)(michal);
            michal = michal.t;
            michal = michal.PJgX2t;
            michal = report.bind(oscard)(michal);
            if(!(michal !== tangon)) { _fun00024_ip = 538; continue _fun00023 }
 536:
            return zuuluu;
 538:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 29;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.StickerIcon;
            return michal;
 566:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 28;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.SoundboardIcon;
            return michal;
 594:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 27;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.ImageIcon;
            return michal;
 622:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 26;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.VideoIcon;
            return michal;
 650:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 25;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.AttachmentIcon;
            return michal;
 678:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 24;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.PollsIcon;
            return michal;
 706:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 23;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.EmbedIcon;
            return michal;
 734:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 22;
            michal = report[michal];
            michal = tangon.bind(zuuluu)(michal);
            michal = michal.LinkIcon;
            return michal;
 762:
            michal = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 21;
            entity = tangon[entity];
            entity = michal.bind(zuuluu)(entity);
            entity = entity.ChatArrowRightIcon;
            return entity;
        }
    };
    zuuluu['getSearchFilterHasIcon'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: toSearchListUserItem
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argBar;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 17;
            entity = zuuluu[entity];
            golfie = undefined;
            zuuluu = michal.bind(golfie)(entity);
            michal = zuuluu.getGuildIdFromSearchContext;
            entity = argFoo;
            verify = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != report)) { _fun00026_ip = 194; continue _fun00025 }
 51:
            michal = entity == verify;
            tangon = null;
            if(!michal) { _fun00026_ip = 80; continue _fun00025 }
 60:
            option = _closure1_slot12;
            zuuluu = option.getNickname;
            michal = report.id;
            tangon = zuuluu.bind(option)(michal);
 80:
            if(!(entity == tangon)) { _fun00026_ip = 105; continue _fun00025 }
 84:
            option = _closure1_slot11;
            zuuluu = option.getNick;
            michal = report.id;
            tangon = zuuluu.bind(option)(verify, michal);
 105:
            if(!(entity == tangon)) { _fun00026_ip = 140; continue _fun00025 }
 109:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 18;
            michal = option[michal];
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.getName;
            tangon = michal.bind(zuuluu)(report);
 140:
            michal = {};
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.DM;
            michal['type'] = zuuluu;
            zuuluu = {};
            oscard = _closure1_slot18;
            oscard = oscard.NONE;
            zuuluu['type'] = oscard;
            zuuluu['user'] = report;
            zuuluu['nickname'] = tangon;
            tangon = argBaz;
            zuuluu['onPress'] = tangon;
            michal['props'] = zuuluu;
            return michal;
 194:
            return entity;
        }
    };
    zuuluu['toSearchListUserItem'] = tangon;
    michal = function(argFoo, argBar) { // Original name: toSearchListChannelItem
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity == tangon;
            if(michal) { _fun00028_ip = 51; continue _fun00027 }
 12:
            michal = {};
            zuuluu = _closure1_slot16;
            zuuluu = zuuluu.GUILD_TEXT_CHANNEL;
            michal['type'] = zuuluu;
            zuuluu = {};
            zuuluu['channel'] = tangon;
            tangon = argBar;
            zuuluu['onPress'] = tangon;
            michal['props'] = zuuluu;
            entity = michal;
 51:
            return entity;
        }
    };
    zuuluu['toSearchListChannelItem'] = michal;
    return entity;
})();