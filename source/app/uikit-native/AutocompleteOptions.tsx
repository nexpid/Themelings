// app/uikit-native/AutocompleteOptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
    tangon = report.bind(entity)(tangon);
    option = tangon.AutoCompleteResultTypes;
    var _closure1_slot9 = option;
    tangon = tangon.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    offset = tangon.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.MENTION_SENTINEL;
    var _closure1_slot11 = option;
    option = tangon.EMOJI_SENTINEL;
    var _closure1_slot12 = option;
    option = tangon.CHANNEL_SENTINEL;
    var _closure1_slot13 = option;
    tangon = tangon.COMMAND_SENTINEL;
    var _closure1_slot14 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AutocompleteTypes;
    var _closure1_slot15 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.EmojiIntention;
    var _closure1_slot16 = option;
    option = tangon.EMOJI_MAX_LENGTH;
    var _closure1_slot17 = option;
    tangon = tangon.EMOJI_URL_BASE_SIZE;
    var _closure1_slot18 = tangon;
    tangon = false;
    var _closure1_slot19 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    verify = golfie.bind(entity)(tangon);
    option = verify.debounce;
    tangon = 12;
    tangon = oscard[tangon];
    golfie = golfie.bind(entity)(tangon);
    tangon = {'leading': true, 'trailing': true};
    tangon = option.bind(verify)(golfie, offset, tangon);
    var _closure1_slot20 = tangon;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'uikit-native/AutocompleteOptions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[1];
            entity = arguments[2];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00002_ip = 23; continue _fun00001 }
 21:
            zuuluu = false;
 23:
            var _closure2_slot1 = zuuluu;
            if(!(entity === michal)) { _fun00002_ip = 33; continue _fun00001 }
 31:
            entity = true;
 33:
            var _closure2_slot2 = entity;
            entity = {};
            michal = _closure1_slot15;
            report = michal.MENTIONS;
            zuuluu = {};
            option = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = option;
            zuuluu['stores'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: queryResults
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    option = argBar;
                    report = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 13;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(michal);
                    report = oscard.queryMentionResults;
                    michal = {};
                    golfie = argFoo;
                    michal['query'] = golfie;
                    golfie = _closure2_slot0;
                    michal['channel'] = golfie;
                    golfie = null;
                    offset = golfie == option;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 73; continue _fun00003 }
 67:
                    verify = option.canMentionEveryone;
 73:
                    michal['canMentionEveryone'] = verify;
                    offset = golfie == option;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 93; continue _fun00003 }
 87:
                    verify = option.canMentionHere;
 93:
                    michal['canMentionHere'] = verify;
                    offset = golfie == option;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 113; continue _fun00003 }
 107:
                    verify = option.canMentionUsers;
 113:
                    michal['canMentionUsers'] = verify;
                    offset = golfie == option;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 133; continue _fun00003 }
 127:
                    verify = option.canMentionRoles;
 133:
                    michal['canMentionRoles'] = verify;
                    offset = golfie == option;
                    verify = undefined;
                    if(offset) { _fun00004_ip = 153; continue _fun00003 }
 147:
                    verify = option.canMentionAnyGuildUser;
 153:
                    michal['includeAllGuildUsers'] = verify;
                    verify = golfie == option;
                    golfie = undefined;
                    if(verify) { _fun00004_ip = 173; continue _fun00003 }
 167:
                    golfie = option.canMentionNonMentionableRoles;
 173:
                    michal['includeNonMentionableRoles'] = golfie;
                    golfie = argBaz;
                    michal['request'] = golfie;
                    michal = report.bind(oscard)(michal);
                    oscard = michal.users;
                    verify = michal.globals;
                    golfie = michal.roles;
                    michal = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 11;
                    entity = report[entity];
                    michal = michal.bind(zuuluu)(entity);
                    report = oscard.map;
                    entity = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot9;
                        michal = michal.USER;
                        entity['type'] = michal;
                        zuuluu = argFoo;
                        tangon = entity;
                        michal = copyDataProperties(tangon, zuuluu);
                        return entity;
                    };
                    romeon = report.bind(oscard)(entity);
                    entity = new Array(0);
                    yankee = 0;
                    foxtra = entity;
                    yankee = arraySpread(foxtra, romeon, yankee);
                    option = verify.map;
                    report = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot9;
                        michal = michal.GLOBAL;
                        entity['type'] = michal;
                        zuuluu = argFoo;
                        tangon = entity;
                        michal = copyDataProperties(tangon, zuuluu);
                        return entity;
                    };
                    romeon = option.bind(verify)(report);
                    foxtra = entity;
                    yankee = arraySpread(foxtra, romeon, yankee);
                    oscard = golfie.map;
                    tangon = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot9;
                        michal = michal.ROLE;
                        entity['type'] = michal;
                        zuuluu = argFoo;
                        tangon = entity;
                        michal = copyDataProperties(tangon, zuuluu);
                        return entity;
                    };
                    romeon = oscard.bind(golfie)(tangon);
                    foxtra = entity;
                    tangon = arraySpread(foxtra, romeon, yankee);
                    michal = michal.bind(zuuluu)(entity);
                    entity = michal.value;
                    entity = entity.bind(michal)();
                    return entity;
                }
            };
            zuuluu['queryResults'] = golfie;
            golfie = function(argFoo, argBar) { // Original name: matches
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 13;
                zuuluu = zuuluu[michal];
                michal = undefined;
                report = tangon.bind(michal)(zuuluu);
                tangon = report.matchSentinel;
                zuuluu = _closure1_slot11;
                michal = argFoo;
                entity = argBar;
                entity = tangon.bind(report)(michal, entity, zuuluu);
                return entity;
            };
            zuuluu['matches'] = golfie;
            entity[report] = zuuluu;
            report = michal.CHANNELS;
            zuuluu = {};
            golfie = function(argFoo, argBar) { // Original name: queryResults
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscard = argFoo;
                    entity = argBar;
                    michal = null;
                    zuuluu = michal == entity;
                    tangon = undefined;
                    report = undefined;
                    if(zuuluu) { _fun00006_ip = 25; continue _fun00005 }
 19:
                    report = entity.channelTypes;
 25:
                    if(!(michal != entity)) { _fun00006_ip = 38; continue _fun00005 }
 29:
                    entity = entity.isActiveApplicationCommand;
                    if(entity) { _fun00006_ip = 91; continue _fun00005 }
 38:
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 13;
                    entity = zuuluu[entity];
                    zuuluu = michal.bind(tangon)(entity);
                    michal = zuuluu.queryChannelResults;
                    entity = {};
                    entity['query'] = oscard;
                    golfie = _closure2_slot0;
                    entity['channel'] = golfie;
                    entity = michal.bind(zuuluu)(entity);
                    _fun00006_ip = 147; continue _fun00005;
 91:
                    zuuluu = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 13;
                    michal = golfie[michal];
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.queryApplicationCommandChannelResults;
                    michal = {};
                    michal['query'] = oscard;
                    oscard = _closure2_slot0;
                    michal['channel'] = oscard;
                    michal['channelTypes'] = report;
                    entity = zuuluu.bind(tangon)(michal);
 147:
                    zuuluu = entity.channels;
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        michal = argFoo;
                        entity = {};
                        tangon = _closure1_slot9;
                        tangon = tangon.CHANNEL;
                        entity['type'] = tangon;
                        entity['channel'] = michal;
                        tangon = _closure1_slot6;
                        zuuluu = tangon.getChannel;
                        michal = michal.parent_id;
                        michal = zuuluu.bind(tangon)(michal);
                        entity['category'] = michal;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            zuuluu['queryResults'] = golfie;
            golfie = function(argFoo, argBar) { // Original name: matches
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = michal.isPrivate;
                    entity = entity.bind(michal)();
                    entity = !entity;
                    if(!entity) { _fun00008_ip = 71; continue _fun00007 }
 23:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 13;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.matchSentinel;
                    tangon = _closure1_slot13;
                    zuuluu = argFoo;
                    michal = argBar;
                    entity = report.bind(oscard)(zuuluu, michal, tangon);
 71:
                    return entity;
                }
            };
            zuuluu['matches'] = golfie;
            entity[report] = zuuluu;
            report = michal.EMOJIS_AND_STICKERS;
            zuuluu = {};
            golfie = function(argFoo, argBar) { // Original name: queryResults
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    zuuluu = argBar;
                    report = _closure2_slot2;
                    romeon = 40;
                    if(!report) { _fun00010_ip = 23; continue _fun00009 }
 21:
                    romeon = 0;
 23:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    offset = 13;
                    report = report[offset];
                    verify = undefined;
                    option = oscard.bind(verify)(report);
                    oscard = option.queryEmojiResults;
                    report = {};
                    report['query'] = tangon;
                    yankee = _closure2_slot0;
                    report['channel'] = yankee;
                    yankee = _closure1_slot16;
                    yankee = yankee.CHAT;
                    report['intention'] = yankee;
                    yankee = _closure1_slot10;
                    yankee = yankee + romeon;
                    report['maxCount'] = yankee;
                    report = oscard.bind(option)(report);
                    oscard = null;
                    if(!(oscard != zuuluu)) { _fun00010_ip = 163; continue _fun00009 }
 107:
                    zuuluu = zuuluu.includeEmojiPremiumUpsell;
                    if(!zuuluu) { _fun00010_ip = 163; continue _fun00009 }
 116:
                    zuuluu = report.emojis;
                    zuuluu = zuuluu.locked;
                    oscard = zuuluu.length;
                    zuuluu = 0;
                    if(!(oscard > zuuluu)) { _fun00010_ip = 163; continue _fun00009 }
 139:
                    zuuluu = report.emojis;
                    zuuluu = zuuluu.unlocked;
                    oscard = zuuluu.length;
                    zuuluu = 4;
                    if(!(!(oscard < zuuluu))) { _fun00010_ip = 169; continue _fun00009 }
 163:
                    zuuluu = new Array(0);
                    _fun00010_ip = 213; continue _fun00009;
 169:
                    option = {};
                    oscard = _closure1_slot9;
                    oscard = oscard.EMOJI_PREMIUM_UPSELL;
                    option['type'] = oscard;
                    oscard = report.emojis;
                    oscard = oscard.locked;
                    option['results'] = oscard;
                    oscard = new Array(1);
                    oscard[0] = option;
                    zuuluu = oscard;
 213:
                    oscard = new Array(0);
                    option = _closure2_slot2;
                    if(!option) { _fun00010_ip = 343; continue _fun00009 }
 224:
                    option = _closure1_slot19;
                    if(option) { _fun00010_ip = 241; continue _fun00009 }
 231:
                    yankee = _closure1_slot5;
                    option = yankee.hasLoadedStickerPacks;
 241:
                    if(option) { _fun00010_ip = 280; continue _fun00009 }
 244:
                    option = true;
                    _closure1_slot19 = option;
                    yankee = _closure1_slot0;
                    romeon = _closure1_slot2;
                    option = 14;
                    option = romeon[option];
                    yankee = yankee.bind(verify)(option);
                    option = yankee.fetchStickerPacks;
                    option = option.bind(yankee)();
 280:
                    option = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[offset];
                    verify = option.bind(verify)(golfie);
                    option = verify.queryStickers;
                    golfie = new Array(1);
                    golfie[0] = tangon;
                    entity = _closure2_slot0;
                    tangon = new Array(2);
                    tangon[0] = entity;
                    entity = function(argFoo, argBar) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 15;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        entity = entity.StickerSendability;
                        michal = entity.SENDABLE;
                        entity = argBar;
                        entity = entity === michal;
                        return entity;
                    };
                    tangon[1] = entity;
                    entity = true;
                    oscard = option.bind(verify)(golfie, entity, tangon);
 343:
                    tangon = oscard.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.sticker;
                        entity = {};
                        zuuluu = _closure1_slot9;
                        zuuluu = zuuluu.STICKER;
                        entity['type'] = zuuluu;
                        zuuluu = michal.name;
                        entity['name'] = zuuluu;
                        entity['sticker'] = michal;
                        return entity;
                    };
                    backup = tangon.bind(oscard)(entity);
                    entity = new Array(0);
                    foxtra = 0;
                    kiloes = entity;
                    foxtra = arraySpread(kiloes, backup, foxtra);
                    report = report.emojis;
                    oscard = report.unlocked;
                    report = oscard.map;
                    michal = function(argFoo) {
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            zuuluu = argFoo;
                            entity = {};
                            michal = _closure1_slot9;
                            michal = michal.EMOJI;
                            entity['type'] = michal;
                            michal = zuuluu.name;
                            entity['name'] = michal;
                            michal = zuuluu.id;
                            tangon = null;
                            if(!(tangon == michal)) { _fun00012_ip = 49; continue _fun00011 }
 42:
                            michal = zuuluu.url;
                            _fun00012_ip = 112; continue _fun00011;
 49:
                            golfie = _closure1_slot1;
                            oscard = _closure1_slot2;
                            report = 16;
                            oscard = oscard[report];
                            report = undefined;
                            golfie = golfie.bind(report)(oscard);
                            oscard = golfie.getEmojiURL;
                            report = {};
                            verify = zuuluu.id;
                            report['id'] = verify;
                            verify = zuuluu.animated;
                            report['animated'] = verify;
                            option = _closure1_slot18;
                            report['size'] = option;
                            michal = oscard.bind(golfie)(report);
 112:
                            entity['url'] = michal;
                            michal = zuuluu.id;
                            tangon = tangon == michal;
                            michal = undefined;
                            if(!tangon) { _fun00012_ip = 135; continue _fun00011 }
 130:
                            michal = zuuluu.surrogates;
 135:
                            entity['surrogates'] = michal;
                            return entity;
                        }
                    };
                    backup = report.bind(oscard)(michal);
                    kiloes = entity;
                    foxtra = arraySpread(kiloes, backup, foxtra);
                    kiloes = entity;
                    backup = zuuluu;
                    michal = arraySpread(kiloes, backup, foxtra);
                    return entity;
                }
            };
            zuuluu['queryResults'] = golfie;
            golfie = function(argFoo, argBar) { // Original name: matches
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    report = argBar;
                    michal = _closure1_slot12;
                    entity = argFoo;
                    entity = entity === michal;
                    if(!entity) { _fun00014_ip = 74; continue _fun00013 }
 20:
                    tangon = report.length;
                    michal = 2;
                    tangon = tangon < michal;
                    if(tangon) { _fun00014_ip = 48; continue _fun00013 }
 35:
                    oscard = report.length;
                    michal = _closure1_slot17;
                    tangon = oscard > michal;
 48:
                    michal = !tangon;
                    if(tangon) { _fun00014_ip = 71; continue _fun00013 }
 54:
                    tangon = report.includes;
                    zuuluu = _closure1_slot12;
                    zuuluu = tangon.bind(report)(zuuluu);
                    michal = !zuuluu;
 71:
                    entity = michal;
 74:
                    return entity;
                }
            };
            zuuluu['matches'] = golfie;
            entity[report] = zuuluu;
            report = michal.SLASHES;
            zuuluu = {};
            golfie = function() { // Original name: queryResults
                entity = new Array(0);
                return entity;
            };
            zuuluu['queryResults'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: matches
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = 0;
                    entity = argBaz;
                    entity = tangon === entity;
                    if(!entity) { _fun00016_ip = 26; continue _fun00015 }
 12:
                    zuuluu = _closure1_slot14;
                    michal = argFoo;
                    entity = michal === zuuluu;
 26:
                    if(!entity) { _fun00016_ip = 54; continue _fun00015 }
 29:
                    michal = _closure2_slot1;
                    if(!michal) { _fun00016_ip = 51; continue _fun00015 }
 39:
                    zuuluu = argBar;
                    zuuluu = zuuluu.length;
                    michal = tangon === zuuluu;
 51:
                    entity = !michal;
 54:
                    return entity;
                }
            };
            zuuluu['matches'] = golfie;
            entity[report] = zuuluu;
            report = michal.SLASHES_DISCOVERY;
            zuuluu = {};
            golfie = function() { // Original name: queryResults
                entity = new Array(0);
                return entity;
            };
            zuuluu['queryResults'] = golfie;
            golfie = function(argFoo, argBar, argBaz) { // Original name: matches
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00018_ip = 19; continue _fun00017 }
 10:
                    zuuluu = 0;
                    michal = argBaz;
                    entity = zuuluu === michal;
 19:
                    if(!entity) { _fun00018_ip = 36; continue _fun00017 }
 22:
                    zuuluu = _closure1_slot14;
                    michal = argFoo;
                    entity = michal === zuuluu;
 36:
                    if(!entity) { _fun00018_ip = 53; continue _fun00017 }
 39:
                    michal = argBar;
                    zuuluu = michal.length;
                    michal = 0;
                    entity = michal === zuuluu;
 53:
                    return entity;
                }
            };
            zuuluu['matches'] = golfie;
            entity[report] = zuuluu;
            zuuluu = michal.CHOICES;
            michal = {};
            golfie = _closure1_slot4;
            report = new Array(2);
            report[0] = golfie;
            oscard = _closure1_slot3;
            report[1] = oscard;
            michal['stores'] = report;
            report = function(argFoo, argBar) { // Original name: queryResults
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    verify = argFoo;
                    zuuluu = argBar;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00020_ip = 73; continue _fun00019 }
 14:
                    tangon = zuuluu.option;
                    if(!(michal != tangon)) { _fun00020_ip = 73; continue _fun00019 }
 24:
                    tangon = tangon.autocomplete;
                    if(!tangon) { _fun00020_ip = 73; continue _fun00019 }
 33:
                    report = michal == zuuluu;
                    option = undefined;
                    tangon = undefined;
                    if(report) { _fun00020_ip = 50; continue _fun00019 }
 44:
                    tangon = zuuluu.activeCommand;
 50:
                    if(!(michal != tangon)) { _fun00020_ip = 73; continue _fun00019 }
 54:
                    report = michal == zuuluu;
                    tangon = undefined;
                    if(report) { _fun00020_ip = 69; continue _fun00019 }
 63:
                    tangon = zuuluu.optionValues;
 69:
                    if(!(michal == tangon)) { _fun00020_ip = 170; continue _fun00019 }
 73:
                    tangon = michal == zuuluu;
                    oscard = undefined;
                    golfie = undefined;
                    if(tangon) { _fun00020_ip = 90; continue _fun00019 }
 84:
                    golfie = zuuluu.choices;
 90:
                    if(!(michal != golfie)) { _fun00020_ip = 164; continue _fun00019 }
 94:
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    tangon = 13;
                    tangon = offset[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.queryChoiceResults;
                    tangon = {};
                    tangon['query'] = verify;
                    tangon['choices'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    oscard = tangon.choices;
                    report = oscard.map;
                    tangon = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot9;
                        michal = michal.CHOICE;
                        entity['type'] = michal;
                        michal = argFoo;
                        entity['choice'] = michal;
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
                    _fun00020_ip = 168; continue _fun00019;
 164:
                    tangon = new Array(0);
 168:
                    return tangon;
 170:
                    offset = _closure1_slot8;
                    golfie = offset.getGuild;
                    tangon = _closure2_slot0;
                    oscard = tangon.guild_id;
                    yankee = golfie.bind(offset)(oscard);
                    golfie = _closure1_slot20;
                    oscard = {};
                    offset = zuuluu.activeCommand;
                    oscard['command'] = offset;
                    offset = zuuluu.optionValues;
                    oscard['optionValues'] = offset;
                    offset = {};
                    offset['channel'] = tangon;
                    offset['guild'] = yankee;
                    yankee = {};
                    romeon = zuuluu.option;
                    romeon = romeon.name;
                    yankee['name'] = romeon;
                    yankee['query'] = verify;
                    offset['autocomplete'] = yankee;
                    oscard['context'] = offset;
                    oscard = golfie.bind(option)(oscard);
                    golfie = _closure1_slot3;
                    oscard = golfie.getAutocompleteChoices;
                    tangon = tangon.id;
                    zuuluu = zuuluu.option;
                    zuuluu = zuuluu.name;
                    zuuluu = oscard.bind(golfie)(tangon, zuuluu, verify);
                    if(!(michal != zuuluu)) { _fun00020_ip = 429; continue _fun00019 }
 309:
                    tangon = zuuluu.length;
                    michal = 0;
                    if(!(michal !== tangon)) { _fun00020_ip = 339; continue _fun00019 }
 320:
                    michal = zuuluu.map;
                    entity = function(argFoo) {
                        entity = {};
                        michal = _closure1_slot9;
                        michal = michal.CHOICE;
                        entity['type'] = michal;
                        michal = argFoo;
                        entity['choice'] = michal;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    _fun00020_ip = 427; continue _fun00019;
 339:
                    zuuluu = {};
                    michal = _closure1_slot9;
                    michal = michal.LABEL;
                    zuuluu['type'] = michal;
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    michal = 17;
                    tangon = verify[michal];
                    tangon = golfie.bind(option)(tangon);
                    oscard = tangon.intl;
                    tangon = oscard.string;
                    michal = verify[michal];
                    michal = golfie.bind(option)(michal);
                    michal = michal.t;
                    michal = michal.41014u;
                    michal = tangon.bind(oscard)(michal);
                    zuuluu['label'] = michal;
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    entity = michal;
 427:
                    _fun00020_ip = 487; continue _fun00019;
 429:
                    michal = global;
                    tangon = michal.Array;
                    michal = tangon.prototype;
                    zuuluu = Object.create(michal, {constructor: {value: tangon}});
                    kiloes = 4;
                    sizing = zuuluu;
                    michal = new sizing[tangon](kiloes, backup);
                    tangon = michal instanceof Object ? michal : zuuluu;
                    zuuluu = tangon.fill;
                    michal = {};
                    report = _closure1_slot9;
                    report = report.CHOICE_LOADING;
                    michal['type'] = report;
                    entity = zuuluu.bind(tangon)(michal);
 487:
                    return entity;
                }
            };
            michal['queryResults'] = report;
            tangon = function() { // Original name: matches
                entity = false;
                return entity;
            };
            michal['matches'] = tangon;
            entity[zuuluu] = michal;
            return entity;
        }
    };
    zuuluu['getAutocompleteOptions'] = michal;
    return entity;
})();