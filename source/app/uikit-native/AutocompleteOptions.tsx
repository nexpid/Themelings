// app/uikit-native/AutocompleteOptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    tango = report.bind(entity)(tango);
    options = tango.AutoCompleteResultTypes;
    var _closure1_slot9 = options;
    tango = tango.MAX_AUTOCOMPLETE_RESULTS;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    offset = tango.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.MENTION_SENTINEL;
    var _closure1_slot11 = options;
    options = tango.EMOJI_SENTINEL;
    var _closure1_slot12 = options;
    options = tango.CHANNEL_SENTINEL;
    var _closure1_slot13 = options;
    tango = tango.COMMAND_SENTINEL;
    var _closure1_slot14 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AutocompleteTypes;
    var _closure1_slot15 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.EmojiIntention;
    var _closure1_slot16 = options;
    options = tango.EMOJI_MAX_LENGTH;
    var _closure1_slot17 = options;
    tango = tango.EMOJI_URL_BASE_SIZE;
    var _closure1_slot18 = tango;
    tango = false;
    var _closure1_slot19 = tango;
    tango = 11;
    tango = oscar[tango];
    verify = golf.bind(entity)(tango);
    options = verify.debounce;
    tango = 12;
    tango = oscar[tango];
    golf = golf.bind(entity)(tango);
    tango = {'leading': true, 'trailing': true};
    tango = options.bind(verify)(golf, offset, tango);
    var _closure1_slot20 = tango;
    tango = 18;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'uikit-native/AutocompleteOptions.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun87609: for(var _fun87609_ip = 0; ; ) switch(_fun87609_ip) {
 0:
            zulu = arguments[1];
            entity = arguments[2];
            mike = argFoo;
            var _closure2_slot0 = mike;
            mike = undefined;
            if(!(zulu === mike)) { _fun87609_ip = 23; continue _fun87609 }
 21:
            zulu = false;
 23:
            var _closure2_slot1 = zulu;
            if(!(entity === mike)) { _fun87609_ip = 33; continue _fun87609 }
 31:
            entity = true;
 33:
            var _closure2_slot2 = entity;
            entity = {};
            mike = _closure1_slot15;
            report = mike.MENTIONS;
            zulu = {};
            options = _closure1_slot7;
            golf = new Array(1);
            golf[0] = options;
            zulu['stores'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: queryResults
                _fun87610: for(var _fun87610_ip = 0; ; ) switch(_fun87610_ip) {
 0:
                    options = argBar;
                    report = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 13;
                    mike = zulu[mike];
                    zulu = undefined;
                    oscar = report.bind(zulu)(mike);
                    report = oscar.queryMentionResults;
                    mike = {};
                    golf = argFoo;
                    mike['query'] = golf;
                    golf = _closure2_slot0;
                    mike['channel'] = golf;
                    golf = null;
                    offset = golf == options;
                    verify = undefined;
                    if(offset) { _fun87610_ip = 73; continue _fun87610 }
 67:
                    verify = options.canMentionEveryone;
 73:
                    mike['canMentionEveryone'] = verify;
                    offset = golf == options;
                    verify = undefined;
                    if(offset) { _fun87610_ip = 93; continue _fun87610 }
 87:
                    verify = options.canMentionHere;
 93:
                    mike['canMentionHere'] = verify;
                    offset = golf == options;
                    verify = undefined;
                    if(offset) { _fun87610_ip = 113; continue _fun87610 }
 107:
                    verify = options.canMentionUsers;
 113:
                    mike['canMentionUsers'] = verify;
                    offset = golf == options;
                    verify = undefined;
                    if(offset) { _fun87610_ip = 133; continue _fun87610 }
 127:
                    verify = options.canMentionRoles;
 133:
                    mike['canMentionRoles'] = verify;
                    offset = golf == options;
                    verify = undefined;
                    if(offset) { _fun87610_ip = 153; continue _fun87610 }
 147:
                    verify = options.canMentionAnyGuildUser;
 153:
                    mike['includeAllGuildUsers'] = verify;
                    verify = golf == options;
                    golf = undefined;
                    if(verify) { _fun87610_ip = 173; continue _fun87610 }
 167:
                    golf = options.canMentionNonMentionableRoles;
 173:
                    mike['includeNonMentionableRoles'] = golf;
                    golf = argBaz;
                    mike['request'] = golf;
                    mike = report.bind(oscar)(mike);
                    oscar = mike.users;
                    verify = mike.globals;
                    golf = mike.roles;
                    mike = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 11;
                    entity = report[entity];
                    mike = mike.bind(zulu)(entity);
                    report = oscar.map;
                    entity = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot9;
                        mike = mike.USER;
                        entity['type'] = mike;
                        zulu = argFoo;
                        tango = entity;
                        mike = copyDataProperties(tango, zulu);
                        return entity;
                    };
                    romeo = report.bind(oscar)(entity);
                    entity = new Array(0);
                    yankee = 0;
                    foxtrot = entity;
                    yankee = arraySpread(foxtrot, romeo, yankee);
                    options = verify.map;
                    report = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot9;
                        mike = mike.GLOBAL;
                        entity['type'] = mike;
                        zulu = argFoo;
                        tango = entity;
                        mike = copyDataProperties(tango, zulu);
                        return entity;
                    };
                    romeo = options.bind(verify)(report);
                    foxtrot = entity;
                    yankee = arraySpread(foxtrot, romeo, yankee);
                    oscar = golf.map;
                    tango = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot9;
                        mike = mike.ROLE;
                        entity['type'] = mike;
                        zulu = argFoo;
                        tango = entity;
                        mike = copyDataProperties(tango, zulu);
                        return entity;
                    };
                    romeo = oscar.bind(golf)(tango);
                    foxtrot = entity;
                    tango = arraySpread(foxtrot, romeo, yankee);
                    mike = mike.bind(zulu)(entity);
                    entity = mike.value;
                    entity = entity.bind(mike)();
                    return entity;
                }
            };
            zulu['queryResults'] = golf;
            golf = function(argFoo, argBar) { // Original name: matches
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 13;
                zulu = zulu[mike];
                mike = undefined;
                report = tango.bind(mike)(zulu);
                tango = report.matchSentinel;
                zulu = _closure1_slot11;
                mike = argFoo;
                entity = argBar;
                entity = tango.bind(report)(mike, entity, zulu);
                return entity;
            };
            zulu['matches'] = golf;
            entity[report] = zulu;
            report = mike.CHANNELS;
            zulu = {};
            golf = function(argFoo, argBar) { // Original name: queryResults
                _fun87615: for(var _fun87615_ip = 0; ; ) switch(_fun87615_ip) {
 0:
                    oscar = argFoo;
                    entity = argBar;
                    mike = null;
                    zulu = mike == entity;
                    tango = undefined;
                    report = undefined;
                    if(zulu) { _fun87615_ip = 25; continue _fun87615 }
 19:
                    report = entity.channelTypes;
 25:
                    if(!(mike != entity)) { _fun87615_ip = 38; continue _fun87615 }
 29:
                    entity = entity.isActiveApplicationCommand;
                    if(entity) { _fun87615_ip = 91; continue _fun87615 }
 38:
                    mike = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 13;
                    entity = zulu[entity];
                    zulu = mike.bind(tango)(entity);
                    mike = zulu.queryChannelResults;
                    entity = {};
                    entity['query'] = oscar;
                    golf = _closure2_slot0;
                    entity['channel'] = golf;
                    entity = mike.bind(zulu)(entity);
                    _fun87615_ip = 147; continue _fun87615;
 91:
                    zulu = _closure1_slot1;
                    golf = _closure1_slot2;
                    mike = 13;
                    mike = golf[mike];
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.queryApplicationCommandChannelResults;
                    mike = {};
                    mike['query'] = oscar;
                    oscar = _closure2_slot0;
                    mike['channel'] = oscar;
                    mike['channelTypes'] = report;
                    entity = zulu.bind(tango)(mike);
 147:
                    zulu = entity.channels;
                    mike = zulu.map;
                    entity = function(argFoo) {
                        mike = argFoo;
                        entity = {};
                        tango = _closure1_slot9;
                        tango = tango.CHANNEL;
                        entity['type'] = tango;
                        entity['channel'] = mike;
                        tango = _closure1_slot6;
                        zulu = tango.getChannel;
                        mike = mike.parent_id;
                        mike = zulu.bind(tango)(mike);
                        entity['category'] = mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                }
            };
            zulu['queryResults'] = golf;
            golf = function(argFoo, argBar) { // Original name: matches
                _fun87617: for(var _fun87617_ip = 0; ; ) switch(_fun87617_ip) {
 0:
                    mike = _closure2_slot0;
                    entity = mike.isPrivate;
                    entity = entity.bind(mike)();
                    entity = !entity;
                    if(!entity) { _fun87617_ip = 71; continue _fun87617 }
 23:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    zulu = 13;
                    tango = tango[zulu];
                    zulu = undefined;
                    oscar = report.bind(zulu)(tango);
                    report = oscar.matchSentinel;
                    tango = _closure1_slot13;
                    zulu = argFoo;
                    mike = argBar;
                    entity = report.bind(oscar)(zulu, mike, tango);
 71:
                    return entity;
                }
            };
            zulu['matches'] = golf;
            entity[report] = zulu;
            report = mike.EMOJIS_AND_STICKERS;
            zulu = {};
            golf = function(argFoo, argBar) { // Original name: queryResults
                _fun87618: for(var _fun87618_ip = 0; ; ) switch(_fun87618_ip) {
 0:
                    tango = argFoo;
                    zulu = argBar;
                    report = _closure2_slot2;
                    romeo = 40;
                    if(!report) { _fun87618_ip = 23; continue _fun87618 }
 21:
                    romeo = 0;
 23:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    offset = 13;
                    report = report[offset];
                    verify = undefined;
                    options = oscar.bind(verify)(report);
                    oscar = options.queryEmojiResults;
                    report = {};
                    report['query'] = tango;
                    yankee = _closure2_slot0;
                    report['channel'] = yankee;
                    yankee = _closure1_slot16;
                    yankee = yankee.CHAT;
                    report['intention'] = yankee;
                    yankee = _closure1_slot10;
                    yankee = yankee + romeo;
                    report['maxCount'] = yankee;
                    report = oscar.bind(options)(report);
                    oscar = null;
                    if(!(oscar != zulu)) { _fun87618_ip = 163; continue _fun87618 }
 107:
                    zulu = zulu.includeEmojiPremiumUpsell;
                    if(!zulu) { _fun87618_ip = 163; continue _fun87618 }
 116:
                    zulu = report.emojis;
                    zulu = zulu.locked;
                    oscar = zulu.length;
                    zulu = 0;
                    if(!(oscar > zulu)) { _fun87618_ip = 163; continue _fun87618 }
 139:
                    zulu = report.emojis;
                    zulu = zulu.unlocked;
                    oscar = zulu.length;
                    zulu = 4;
                    if(!(!(oscar < zulu))) { _fun87618_ip = 169; continue _fun87618 }
 163:
                    zulu = new Array(0);
                    _fun87618_ip = 213; continue _fun87618;
 169:
                    options = {};
                    oscar = _closure1_slot9;
                    oscar = oscar.EMOJI_PREMIUM_UPSELL;
                    options['type'] = oscar;
                    oscar = report.emojis;
                    oscar = oscar.locked;
                    options['results'] = oscar;
                    oscar = new Array(1);
                    oscar[0] = options;
                    zulu = oscar;
 213:
                    oscar = new Array(0);
                    options = _closure2_slot2;
                    if(!options) { _fun87618_ip = 343; continue _fun87618 }
 224:
                    options = _closure1_slot19;
                    if(options) { _fun87618_ip = 241; continue _fun87618 }
 231:
                    yankee = _closure1_slot5;
                    options = yankee.hasLoadedStickerPacks;
 241:
                    if(options) { _fun87618_ip = 280; continue _fun87618 }
 244:
                    options = true;
                    _closure1_slot19 = options;
                    yankee = _closure1_slot0;
                    romeo = _closure1_slot2;
                    options = 14;
                    options = romeo[options];
                    yankee = yankee.bind(verify)(options);
                    options = yankee.fetchStickerPacks;
                    options = options.bind(yankee)();
 280:
                    options = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[offset];
                    verify = options.bind(verify)(golf);
                    options = verify.queryStickers;
                    golf = new Array(1);
                    golf[0] = tango;
                    entity = _closure2_slot0;
                    tango = new Array(2);
                    tango[0] = entity;
                    entity = function(argFoo, argBar) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 15;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        entity = entity.StickerSendability;
                        mike = entity.SENDABLE;
                        entity = argBar;
                        entity = entity === mike;
                        return entity;
                    };
                    tango[1] = entity;
                    entity = true;
                    oscar = options.bind(verify)(golf, entity, tango);
 343:
                    tango = oscar.map;
                    entity = function(argFoo) {
                        entity = argFoo;
                        mike = entity.sticker;
                        entity = {};
                        zulu = _closure1_slot9;
                        zulu = zulu.STICKER;
                        entity['type'] = zulu;
                        zulu = mike.name;
                        entity['name'] = zulu;
                        entity['sticker'] = mike;
                        return entity;
                    };
                    backup = tango.bind(oscar)(entity);
                    entity = new Array(0);
                    foxtrot = 0;
                    kilo = entity;
                    foxtrot = arraySpread(kilo, backup, foxtrot);
                    report = report.emojis;
                    oscar = report.unlocked;
                    report = oscar.map;
                    mike = function(argFoo) {
                        _fun87621: for(var _fun87621_ip = 0; ; ) switch(_fun87621_ip) {
 0:
                            zulu = argFoo;
                            entity = {};
                            mike = _closure1_slot9;
                            mike = mike.EMOJI;
                            entity['type'] = mike;
                            mike = zulu.name;
                            entity['name'] = mike;
                            mike = zulu.id;
                            tango = null;
                            if(!(tango == mike)) { _fun87621_ip = 49; continue _fun87621 }
 42:
                            mike = zulu.url;
                            _fun87621_ip = 112; continue _fun87621;
 49:
                            golf = _closure1_slot1;
                            oscar = _closure1_slot2;
                            report = 16;
                            oscar = oscar[report];
                            report = undefined;
                            golf = golf.bind(report)(oscar);
                            oscar = golf.getEmojiURL;
                            report = {};
                            verify = zulu.id;
                            report['id'] = verify;
                            verify = zulu.animated;
                            report['animated'] = verify;
                            options = _closure1_slot18;
                            report['size'] = options;
                            mike = oscar.bind(golf)(report);
 112:
                            entity['url'] = mike;
                            mike = zulu.id;
                            tango = tango == mike;
                            mike = undefined;
                            if(!tango) { _fun87621_ip = 135; continue _fun87621 }
 130:
                            mike = zulu.surrogates;
 135:
                            entity['surrogates'] = mike;
                            return entity;
                        }
                    };
                    backup = report.bind(oscar)(mike);
                    kilo = entity;
                    foxtrot = arraySpread(kilo, backup, foxtrot);
                    kilo = entity;
                    backup = zulu;
                    mike = arraySpread(kilo, backup, foxtrot);
                    return entity;
                }
            };
            zulu['queryResults'] = golf;
            golf = function(argFoo, argBar) { // Original name: matches
                _fun87622: for(var _fun87622_ip = 0; ; ) switch(_fun87622_ip) {
 0:
                    report = argBar;
                    mike = _closure1_slot12;
                    entity = argFoo;
                    entity = entity === mike;
                    if(!entity) { _fun87622_ip = 74; continue _fun87622 }
 20:
                    tango = report.length;
                    mike = 2;
                    tango = tango < mike;
                    if(tango) { _fun87622_ip = 48; continue _fun87622 }
 35:
                    oscar = report.length;
                    mike = _closure1_slot17;
                    tango = oscar > mike;
 48:
                    mike = !tango;
                    if(tango) { _fun87622_ip = 71; continue _fun87622 }
 54:
                    tango = report.includes;
                    zulu = _closure1_slot12;
                    zulu = tango.bind(report)(zulu);
                    mike = !zulu;
 71:
                    entity = mike;
 74:
                    return entity;
                }
            };
            zulu['matches'] = golf;
            entity[report] = zulu;
            report = mike.SLASHES;
            zulu = {};
            golf = function() { // Original name: queryResults
                entity = new Array(0);
                return entity;
            };
            zulu['queryResults'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: matches
                _fun87624: for(var _fun87624_ip = 0; ; ) switch(_fun87624_ip) {
 0:
                    tango = 0;
                    entity = argBaz;
                    entity = tango === entity;
                    if(!entity) { _fun87624_ip = 26; continue _fun87624 }
 12:
                    zulu = _closure1_slot14;
                    mike = argFoo;
                    entity = mike === zulu;
 26:
                    if(!entity) { _fun87624_ip = 54; continue _fun87624 }
 29:
                    mike = _closure2_slot1;
                    if(!mike) { _fun87624_ip = 51; continue _fun87624 }
 39:
                    zulu = argBar;
                    zulu = zulu.length;
                    mike = tango === zulu;
 51:
                    entity = !mike;
 54:
                    return entity;
                }
            };
            zulu['matches'] = golf;
            entity[report] = zulu;
            report = mike.SLASHES_DISCOVERY;
            zulu = {};
            golf = function() { // Original name: queryResults
                entity = new Array(0);
                return entity;
            };
            zulu['queryResults'] = golf;
            golf = function(argFoo, argBar, argBaz) { // Original name: matches
                _fun87626: for(var _fun87626_ip = 0; ; ) switch(_fun87626_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun87626_ip = 19; continue _fun87626 }
 10:
                    zulu = 0;
                    mike = argBaz;
                    entity = zulu === mike;
 19:
                    if(!entity) { _fun87626_ip = 36; continue _fun87626 }
 22:
                    zulu = _closure1_slot14;
                    mike = argFoo;
                    entity = mike === zulu;
 36:
                    if(!entity) { _fun87626_ip = 53; continue _fun87626 }
 39:
                    mike = argBar;
                    zulu = mike.length;
                    mike = 0;
                    entity = mike === zulu;
 53:
                    return entity;
                }
            };
            zulu['matches'] = golf;
            entity[report] = zulu;
            zulu = mike.CHOICES;
            mike = {};
            golf = _closure1_slot4;
            report = new Array(2);
            report[0] = golf;
            oscar = _closure1_slot3;
            report[1] = oscar;
            mike['stores'] = report;
            report = function(argFoo, argBar) { // Original name: queryResults
                _fun87627: for(var _fun87627_ip = 0; ; ) switch(_fun87627_ip) {
 0:
                    verify = argFoo;
                    zulu = argBar;
                    mike = null;
                    if(!(mike != zulu)) { _fun87627_ip = 73; continue _fun87627 }
 14:
                    tango = zulu.option;
                    if(!(mike != tango)) { _fun87627_ip = 73; continue _fun87627 }
 24:
                    tango = tango.autocomplete;
                    if(!tango) { _fun87627_ip = 73; continue _fun87627 }
 33:
                    report = mike == zulu;
                    options = undefined;
                    tango = undefined;
                    if(report) { _fun87627_ip = 50; continue _fun87627 }
 44:
                    tango = zulu.activeCommand;
 50:
                    if(!(mike != tango)) { _fun87627_ip = 73; continue _fun87627 }
 54:
                    report = mike == zulu;
                    tango = undefined;
                    if(report) { _fun87627_ip = 69; continue _fun87627 }
 63:
                    tango = zulu.optionValues;
 69:
                    if(!(mike == tango)) { _fun87627_ip = 170; continue _fun87627 }
 73:
                    tango = mike == zulu;
                    oscar = undefined;
                    golf = undefined;
                    if(tango) { _fun87627_ip = 90; continue _fun87627 }
 84:
                    golf = zulu.choices;
 90:
                    if(!(mike != golf)) { _fun87627_ip = 164; continue _fun87627 }
 94:
                    report = _closure1_slot1;
                    offset = _closure1_slot2;
                    tango = 13;
                    tango = offset[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.queryChoiceResults;
                    tango = {};
                    tango['query'] = verify;
                    tango['choices'] = golf;
                    tango = report.bind(oscar)(tango);
                    oscar = tango.choices;
                    report = oscar.map;
                    tango = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot9;
                        mike = mike.CHOICE;
                        entity['type'] = mike;
                        mike = argFoo;
                        entity['choice'] = mike;
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    _fun87627_ip = 168; continue _fun87627;
 164:
                    tango = new Array(0);
 168:
                    return tango;
 170:
                    offset = _closure1_slot8;
                    golf = offset.getGuild;
                    tango = _closure2_slot0;
                    oscar = tango.guild_id;
                    yankee = golf.bind(offset)(oscar);
                    golf = _closure1_slot20;
                    oscar = {};
                    offset = zulu.activeCommand;
                    oscar['command'] = offset;
                    offset = zulu.optionValues;
                    oscar['optionValues'] = offset;
                    offset = {};
                    offset['channel'] = tango;
                    offset['guild'] = yankee;
                    yankee = {};
                    romeo = zulu.option;
                    romeo = romeo.name;
                    yankee['name'] = romeo;
                    yankee['query'] = verify;
                    offset['autocomplete'] = yankee;
                    oscar['context'] = offset;
                    oscar = golf.bind(options)(oscar);
                    golf = _closure1_slot3;
                    oscar = golf.getAutocompleteChoices;
                    tango = tango.id;
                    zulu = zulu.option;
                    zulu = zulu.name;
                    zulu = oscar.bind(golf)(tango, zulu, verify);
                    if(!(mike != zulu)) { _fun87627_ip = 427; continue _fun87627 }
 309:
                    tango = zulu.length;
                    mike = 0;
                    if(!(mike !== tango)) { _fun87627_ip = 339; continue _fun87627 }
 320:
                    mike = zulu.map;
                    entity = function(argFoo) {
                        entity = {};
                        mike = _closure1_slot9;
                        mike = mike.CHOICE;
                        entity['type'] = mike;
                        mike = argFoo;
                        entity['choice'] = mike;
                        return entity;
                    };
                    entity = mike.bind(zulu)(entity);
                    _fun87627_ip = 425; continue _fun87627;
 339:
                    zulu = {};
                    mike = _closure1_slot9;
                    mike = mike.LABEL;
                    zulu['type'] = mike;
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    mike = 17;
                    tango = verify[mike];
                    tango = golf.bind(options)(tango);
                    oscar = tango.intl;
                    tango = oscar.string;
                    mike = verify[mike];
                    mike = golf.bind(options)(mike);
                    mike = mike.t;
                    mike = mike.41014u;
                    mike = tango.bind(oscar)(mike);
                    zulu['label'] = mike;
                    mike = new Array(1);
                    mike[0] = zulu;
                    entity = mike;
 425:
                    _fun87627_ip = 485; continue _fun87627;
 427:
                    mike = global;
                    tango = mike.Array;
                    mike = tango.prototype;
                    zulu = Object.create(mike, {constructor: {value: tango}});
                    kilo = 4;
                    sizing = zulu;
                    mike = new sizing[tango](kilo, backup);
                    tango = mike instanceof Object ? mike : zulu;
                    zulu = tango.fill;
                    mike = {};
                    report = _closure1_slot9;
                    report = report.CHOICE_LOADING;
                    mike['type'] = report;
                    entity = zulu.bind(tango)(mike);
 485:
                    return entity;
                }
            };
            mike['queryResults'] = report;
            tango = function() { // Original name: matches
                entity = false;
                return entity;
            };
            mike['matches'] = tango;
            entity[zulu] = mike;
            return entity;
        }
    };
    zulu['getAutocompleteOptions'] = mike;
    return entity;
})();