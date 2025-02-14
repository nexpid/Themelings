// app/utils/EmojiUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    yankee = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun44408: for(var _fun44408_ip = 0; ; ) switch(_fun44408_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun44408_ip = 46; continue _fun44408 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun44408_ip = 55; continue _fun44408 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun44408_ip = 343; continue _fun44408 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun44408_ip = 323; continue _fun44408 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun44408_ip = 283; continue _fun44408 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun44408_ip = 270; continue _fun44408 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun44408_ip = 163; continue _fun44408 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun44408_ip = 179; continue _fun44408 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun44408_ip = 249; continue _fun44408 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun44408_ip = 249; continue _fun44408 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun44408_ip = 234; continue _fun44408 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun44408_ip = 247; continue _fun44408 }
 234:
            verify = _closure1_slot19;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun44408_ip = 265; continue _fun44408;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun44408_ip = 283; continue _fun44408;
 270:
            golf = _closure1_slot19;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun44408_ip = 323; continue _fun44408 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun44408_ip = 330; continue _fun44408 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun44409: for(var _fun44409_ip = 0; ; ) switch(_fun44409_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun44409_ip = 56; continue _fun44409 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun44409_ip = 67; continue _fun44409;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun44410: for(var _fun44410_ip = 0; ; ) switch(_fun44410_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun44410_ip = 23; continue _fun44410 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun44410_ip = 33; continue _fun44410 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun44410_ip = 70; continue _fun44410 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun44410_ip = 55; continue _fun44410 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    report = function(argFoo) { // Original name: isCustomEmoji
        _fun44411: for(var _fun44411_ip = 0; ; ) switch(_fun44411_ip) {
 0:
            mike = argFoo;
            zulu = mike.type;
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 6;
            tango = tango[entity];
            entity = undefined;
            entity = report.bind(entity)(tango);
            entity = entity.EmojiTypes;
            entity = entity.GUILD;
            entity = zulu === entity;
            if(entity) { _fun44411_ip = 63; continue _fun44411 }
 52:
            zulu = mike.guildId;
            mike = null;
            entity = mike != zulu;
 63:
            return entity;
        }
    };
    var _closure1_slot20 = report;
    verify = function(argFoo, argBar) { // Original name: isInternalEmojiForGuildId
        _fun44412: for(var _fun44412_ip = 0; ; ) switch(_fun44412_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            mike = null;
            entity = mike != zulu;
            if(!entity) { _fun44412_ip = 19; continue _fun44412 }
 15:
            entity = mike != tango;
 19:
            if(!entity) { _fun44412_ip = 54; continue _fun44412 }
 22:
            report = _closure1_slot20;
            mike = undefined;
            report = report.bind(mike)(zulu);
            mike = !report;
            if(!report) { _fun44412_ip = 51; continue _fun44412 }
 42:
            zulu = zulu.guildId;
            mike = tango === zulu;
 51:
            entity = mike;
 54:
            return entity;
        }
    };
    var _closure1_slot21 = verify;
    options = function(argFoo) { // Original name: getEmojiUnavailableReason
        _fun44413: for(var _fun44413_ip = 0; ; ) switch(_fun44413_ip) {
 0:
            entity = argFoo;
            zulu = entity.emoji;
            backup = entity.channel;
            romeo = entity.guildId;
            options = undefined;
            if(!(romeo === options)) { _fun44413_ip = 49; continue _fun44413 }
 25:
            mike = null;
            tango = mike == backup;
            mike = undefined;
            if(tango) { _fun44413_ip = 46; continue _fun44413 }
 36:
            tango = backup.getGuildId;
            mike = tango.bind(backup)();
 46:
            romeo = mike;
 49:
            oscar = entity.intention;
            offset = entity.forceIncludeExternalGuilds;
            entity = _closure1_slot20;
            tango = entity.bind(options)(zulu);
            entity = null;
            if(tango) { _fun44413_ip = 80; continue _fun44413 }
 78:
            return entity;
 80:
            verify = entity != backup;
            if(!verify) { _fun44413_ip = 101; continue _fun44413 }
 87:
            report = _closure1_slot4;
            tango = backup.type;
            verify = report.bind(options)(tango);
 101:
            golf = entity != backup;
            if(!golf) { _fun44413_ip = 122; continue _fun44413 }
 108:
            report = _closure1_slot5;
            tango = backup.type;
            golf = report.bind(options)(tango);
 122:
            tango = _closure1_slot21;
            tango = tango.bind(options)(zulu, romeo);
            foxtrot = _closure1_slot6;
            yankee = foxtrot.can;
            report = _closure1_slot8;
            report = report.USE_EXTERNAL_EMOJIS;
            report = yankee.bind(foxtrot)(report, backup);
            yankee = _closure1_slot13;
            yankee = yankee.COMMUNITY_CONTENT;
            if(!(oscar !== yankee)) { _fun44413_ip = 564; continue _fun44413 }
 175:
            yankee = _closure1_slot14;
            yankee = yankee.bind(options)(oscar);
            if(yankee) { _fun44413_ip = 215; continue _fun44413 }
 187:
            yankee = _closure1_slot21;
            yankee = yankee.bind(options)(zulu, romeo);
            if(yankee) { _fun44413_ip = 215; continue _fun44413 }
 200:
            if(offset) { _fun44413_ip = 215; continue _fun44413 }
 203:
            offset = _closure1_slot12;
            offset = offset.DISALLOW_EXTERNAL;
            return offset;
 215:
            if(verify) { _fun44413_ip = 221; continue _fun44413 }
 218:
            if(!golf) { _fun44413_ip = 239; continue _fun44413 }
 221:
            if(tango) { _fun44413_ip = 239; continue _fun44413 }
 224:
            if(report) { _fun44413_ip = 239; continue _fun44413 }
 227:
            report = _closure1_slot12;
            report = report.DISALLOW_EXTERNAL;
            return report;
 239:
            report = zulu.id;
            if(!(entity != report)) { _fun44413_ip = 269; continue _fun44413 }
 248:
            report = zulu.available;
            if(report) { _fun44413_ip = 269; continue _fun44413 }
 257:
            report = _closure1_slot12;
            report = report.GUILD_SUBSCRIPTION_UNAVAILABLE;
            return report;
 269:
            golf = _closure1_slot7;
            report = golf.getCurrentUser;
            offset = report.bind(golf)();
            golf = _closure1_slot1;
            report = _closure1_slot2;
            yankee = 7;
            report = report[yankee];
            golf = golf.bind(options)(report);
            report = golf.canUseEmojisEverywhere;
            report = report.bind(golf)(offset);
            if(report) { _fun44413_ip = 366; continue _fun44413 }
 316:
            if(tango) { _fun44413_ip = 366; continue _fun44413 }
 319:
            report = _closure1_slot13;
            report = report.STATUS;
            if(!(oscar !== report)) { _fun44413_ip = 354; continue _fun44413 }
 333:
            report = zulu.managed;
            if(report) { _fun44413_ip = 366; continue _fun44413 }
 342:
            report = _closure1_slot12;
            report = report.PREMIUM_LOCKED;
            return report;
 354:
            report = _closure1_slot12;
            report = report.PREMIUM_LOCKED;
            return report;
 366:
            oscar = _closure1_slot0;
            report = _closure1_slot2;
            verify = 8;
            report = report[verify];
            golf = oscar.bind(options)(report);
            oscar = golf.isUnusableRoleSubscriptionEmoji;
            foxtrot = entity != romeo;
            report = undefined;
            if(!foxtrot) { _fun44413_ip = 404; continue _fun44413 }
 401:
            report = romeo;
 404:
            report = oscar.bind(golf)(zulu, report);
            if(report) { _fun44413_ip = 502; continue _fun44413 }
 413:
            oscar = zulu.animated;
            report = null;
            if(!oscar) { _fun44413_ip = 500; continue _fun44413 }
 424:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            oscar = oscar[yankee];
            golf = golf.bind(options)(oscar);
            oscar = golf.canUseAnimatedEmojis;
            oscar = oscar.bind(golf)(offset);
            report = null;
            if(oscar) { _fun44413_ip = 500; continue _fun44413 }
 457:
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            oscar = oscar[verify];
            golf = golf.bind(options)(oscar);
            oscar = golf.isPurchasableRoleSubscriptionEmoji;
            oscar = oscar.bind(golf)(zulu);
            report = null;
            if(oscar) { _fun44413_ip = 500; continue _fun44413 }
 490:
            oscar = _closure1_slot12;
            report = oscar.PREMIUM_LOCKED;
 500:
            _fun44413_ip = 562; continue _fun44413;
 502:
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 9;
            oscar = verify[oscar];
            options = golf.bind(options)(oscar);
            golf = options.shouldHideGuildPurchaseEntryPoints;
            oscar = zulu.guildId;
            oscar = golf.bind(options)(oscar);
            golf = _closure1_slot12;
            if(oscar) { _fun44413_ip = 553; continue _fun44413 }
 545:
            oscar = golf.ROLE_SUBSCRIPTION_LOCKED;
            _fun44413_ip = 559; continue _fun44413;
 553:
            oscar = golf.ROLE_SUBSCRIPTION_UNAVAILABLE;
 559:
            report = oscar;
 562:
            return report;
 564:
            if(!tango) { _fun44413_ip = 587; continue _fun44413 }
 567:
            tango = zulu.guildId;
            if(!(entity != tango)) { _fun44413_ip = 587; continue _fun44413 }
 576:
            zulu = zulu.available;
            entity = null;
            if(zulu) { _fun44413_ip = 597; continue _fun44413 }
 587:
            mike = _closure1_slot12;
            entity = mike.DISALLOW_EXTERNAL;
 597:
            return entity;
        }
    };
    var _closure1_slot22 = options;
    entity = function() { // Original name: _getEmojiColors
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun44416: for(var _fun44416_ip = 0; ; ) switch(_fun44416_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun44416_ip = 62; continue _fun44416 }
 7:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 10;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.getEmojiColors;
                    mike = argFoo;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=50);
 48:
                    return mike;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun44416_ip = 59; continue _fun44416 }
 56:
                    return mike;
 59:
                    return mike;
 62:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    tango = global;
    foxtrot = tango.Object;
    romeo = foxtrot.defineProperty;
    offset = {};
    entity = true;
    offset['value'] = entity;
    entity = '__esModule';
    entity = romeo.bind(foxtrot)(zulu, entity, offset);
    entity = 0;
    offset = golf[entity];
    entity = undefined;
    offset = yankee.bind(entity)(offset);
    var _closure1_slot3 = offset;
    offset = 1;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    romeo = offset.isGuildTextChannelType;
    var _closure1_slot4 = romeo;
    offset = offset.isGuildVocalChannelType;
    var _closure1_slot5 = offset;
    offset = 2;
    offset = golf[offset];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot6 = offset;
    offset = 3;
    offset = golf[offset];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 4;
    offset = golf[offset];
    offset = oscar.bind(entity)(offset);
    offset = offset.Permissions;
    var _closure1_slot8 = offset;
    offset = 5;
    offset = golf[offset];
    romeo = oscar.bind(entity)(offset);
    offset = romeo.EMOJI_MAX_FILESIZE;
    var _closure1_slot9 = offset;
    offset = romeo.EMOJI_MAX_LENGTH;
    var _closure1_slot10 = offset;
    offset = romeo.EMOJI_RE;
    var _closure1_slot11 = offset;
    offset = romeo.EmojiDisabledReasons;
    var _closure1_slot12 = offset;
    foxtrot = romeo.EmojiIntention;
    var _closure1_slot13 = foxtrot;
    romeo = romeo.isExternalEmojiAllowedForIntention;
    var _closure1_slot14 = romeo;
    backup = tango.Set;
    foxtrot = offset.PREMIUM_LOCKED;
    romeo = new Array(2);
    romeo[0] = foxtrot;
    foxtrot = offset.ROLE_SUBSCRIPTION_LOCKED;
    romeo[1] = foxtrot;
    foxtrot = backup.prototype;
    foxtrot = Object.create(foxtrot, {constructor: {value: backup}});
    result = foxtrot;
    output = romeo;
    romeo = new result[backup](output, sizing);
    romeo = romeo instanceof Object ? romeo : foxtrot;
    var _closure1_slot15 = romeo;
    backup = tango.Set;
    foxtrot = offset.PREMIUM_LOCKED;
    romeo = new Array(4);
    romeo[0] = foxtrot;
    foxtrot = offset.GUILD_SUBSCRIPTION_UNAVAILABLE;
    romeo[1] = foxtrot;
    foxtrot = offset.ROLE_SUBSCRIPTION_LOCKED;
    romeo[2] = foxtrot;
    foxtrot = offset.ROLE_SUBSCRIPTION_UNAVAILABLE;
    romeo[3] = foxtrot;
    foxtrot = backup.prototype;
    foxtrot = Object.create(foxtrot, {constructor: {value: backup}});
    result = foxtrot;
    output = romeo;
    romeo = new result[backup](output, sizing);
    romeo = romeo instanceof Object ? romeo : foxtrot;
    var _closure1_slot16 = romeo;
    romeo = tango.Set;
    foxtrot = offset.DISALLOW_EXTERNAL;
    tango = new Array(3);
    tango[0] = foxtrot;
    foxtrot = offset.GUILD_SUBSCRIPTION_UNAVAILABLE;
    tango[1] = foxtrot;
    offset = offset.ONLY_GUILD_EMOJIS_ALLOWED;
    tango[2] = offset;
    offset = romeo.prototype;
    offset = Object.create(offset, {constructor: {value: romeo}});
    result = offset;
    output = tango;
    tango = new result[romeo](output, sizing);
    tango = tango instanceof Object ? tango : offset;
    var _closure1_slot17 = tango;
    tango = {};
    offset = function(argFoo) { // Original name: sanitizeEmojiName
        _fun44417: for(var _fun44417_ip = 0; ; ) switch(_fun44417_ip) {
 0:
            report = argFoo;
            tango = report.replace;
            zulu = _closure1_slot11;
            mike = '';
            tango = tango.bind(report)(zulu, mike);
            zulu = tango.slice;
            mike = _closure1_slot10;
            entity = 0;
            entity = zulu.bind(tango)(entity, mike);
            mike = entity.length;
            report = '_';
            tango = 2;
            zulu = entity;
            entity = zulu;
            if(!(mike < tango)) { _fun44417_ip = 83; continue _fun44417 }
 64:
            oscar = zulu + report;
            mike = oscar.length;
            zulu = oscar;
            entity = zulu;
            if(mike < tango) { _fun44417_ip = 64; continue _fun44417 }
 83:
            return entity;
        }
    };
    tango['sanitizeEmojiName'] = offset;
    offset = 10;
    romeo = golf[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.filterUnsupportedEmojis;
    tango['filterUnsupportedEmojis'] = romeo;
    offset = golf[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.getURL;
    tango['getURL'] = offset;
    tango['isInternalEmojiForGuildId'] = verify;
    tango['getEmojiUnavailableReason'] = options;
    tango['isCustomEmoji'] = report;
    report = function(argFoo) { // Original name: getEmojiUnavailableReasons
        _fun44418: for(var _fun44418_ip = 0; ; ) switch(_fun44418_ip) {
 0:
            entity = argFoo;
            mike = entity.categoryEmojis;
            echo = entity.channel;
            result = entity.guildId;
            output = entity.intention;
            sizing = entity.computeUnfiltered;
            kilo = undefined;
            if(!(sizing === kilo)) { _fun44418_ip = 39; continue _fun44418 }
 37:
            sizing = false;
 39:
            entity = global;
            entity = entity.Set;
            zulu = entity.prototype;
            zulu = Object.create(zulu, {constructor: {value: entity}});
            papa = zulu;
            entity = new papa[entity](context);
            oscar = entity instanceof Object ? entity : zulu;
            report = undefined;
            if(!sizing) { _fun44418_ip = 76; continue _fun44418 }
 72:
            report = new Array(0);
 76:
            entity = _closure1_slot18;
            foxtrot = entity.bind(kilo)(mike);
            tango = foxtrot.bind(kilo)();
            entity = tango.done;
            verify = 0;
            golf = false;
            romeo = null;
            offset = tango;
            options = 0;
            tango = 0;
            zulu = 0;
            mike = false;
            if(entity) { _fun44418_ip = 381; continue _fun44418 }
 120:
            entity = offset.value;
            source = _closure1_slot22;
            update = {};
            update['emoji'] = entity;
            update['channel'] = echo;
            update['guildId'] = result;
            update['intention'] = output;
            record = source.bind(kilo)(update);
            if(!(romeo == record)) { _fun44418_ip = 213; continue _fun44418 }
 158:
            control = verify;
            source = options;
            update = golf;
            if(!sizing) { _fun44418_ip = 345; continue _fun44418 }
 173:
            control = verify;
            source = options;
            update = golf;
            if(!(romeo != report)) { _fun44418_ip = 345; continue _fun44418 }
 189:
            vacuum = report.push;
            vacuum = vacuum.bind(report)(entity);
            control = verify;
            source = options;
            update = golf;
            _fun44418_ip = 345; continue _fun44418;
 213:
            sequence = _closure1_slot17;
            vacuum = sequence.has;
            vacuum = vacuum.bind(sequence)(record);
            if(vacuum) { _fun44418_ip = 258; continue _fun44418 }
 230:
            vacuum = verify;
            if(!sizing) { _fun44418_ip = 261; continue _fun44418 }
 236:
            vacuum = verify;
            if(!(romeo != report)) { _fun44418_ip = 261; continue _fun44418 }
 243:
            sequence = report.push;
            sequence = sequence.bind(report)(entity);
            vacuum = verify;
            _fun44418_ip = 261; continue _fun44418;
 258:
            vacuum = verify + 1;
 261:
            config = _closure1_slot15;
            sequence = config.has;
            sequence = sequence.bind(config)(record);
            control = vacuum;
            source = options;
            update = golf;
            if(!sequence) { _fun44418_ip = 345; continue _fun44418 }
 287:
            sequence = golf;
            if(golf) { _fun44418_ip = 307; continue _fun44418 }
 293:
            config = _closure1_slot12;
            config = config.PREMIUM_LOCKED;
            sequence = record !== config;
 307:
            if(sequence) { _fun44418_ip = 312; continue _fun44418 }
 310:
            golf = true;
 312:
            sequence = entity.id;
            if(!(romeo != sequence)) { _fun44418_ip = 336; continue _fun44418 }
 321:
            sequence = oscar.add;
            entity = entity.id;
            entity = sequence.bind(oscar)(entity);
 336:
            source = options + 1;
            control = vacuum;
            update = golf;
 345:
            vacuum = foxtrot.bind(kilo)();
            entity = vacuum.done;
            verify = control;
            options = source;
            golf = update;
            offset = vacuum;
            tango = verify;
            zulu = options;
            mike = golf;
            if(!entity) { _fun44418_ip = 120; continue _fun44418 }
 381:
            entity = {};
            entity['emojisDisabled'] = oscar;
            entity['emojisUnfiltered'] = report;
            entity['emojisFilteredCount'] = tango;
            entity['emojisPremiumLockedCount'] = zulu;
            entity['emojiNitroLocked'] = mike;
            return entity;
        }
    };
    tango['getEmojiUnavailableReasons'] = report;
    report = function(argFoo) { // Original name: isEmojiFiltered
        tango = _closure1_slot22;
        zulu = undefined;
        mike = argFoo;
        zulu = tango.bind(zulu)(mike);
        mike = _closure1_slot17;
        entity = mike.has;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    tango['isEmojiFiltered'] = report;
    report = function(argFoo) { // Original name: isEmojiPremiumLocked
        tango = _closure1_slot22;
        zulu = undefined;
        mike = argFoo;
        zulu = tango.bind(zulu)(mike);
        mike = _closure1_slot15;
        entity = mike.has;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    tango['isEmojiPremiumLocked'] = report;
    report = function(argFoo) { // Original name: isEmojiCategoryNitroLocked
        _fun44421: for(var _fun44421_ip = 0; ; ) switch(_fun44421_ip) {
 0:
            entity = argFoo;
            mike = entity.categoryEmojis;
            backup = entity.channel;
            foxtrot = entity.guildId;
            romeo = entity.intention;
            entity = _closure1_slot18;
            offset = undefined;
            verify = entity.bind(offset)(mike);
            report = verify.bind(offset)();
            tango = report.done;
            oscar = false;
            golf = report;
            report = 0;
            entity = false;
            zulu = 0;
            if(tango) { _fun44421_ip = 170; continue _fun44421 }
 62:
            kilo = _closure1_slot22;
            tango = {};
            sizing = golf.value;
            tango['emoji'] = sizing;
            tango['channel'] = backup;
            tango['intention'] = romeo;
            tango['guildId'] = foxtrot;
            output = kilo.bind(offset)(tango);
            tango = _closure1_slot12;
            tango = tango.PREMIUM_LOCKED;
            if(!(output !== tango)) { _fun44421_ip = 138; continue _fun44421 }
 110:
            tango = _closure1_slot12;
            tango = tango.GUILD_SUBSCRIPTION_UNAVAILABLE;
            sizing = oscar;
            kilo = report;
            if(!(output === tango)) { _fun44421_ip = 143; continue _fun44421 }
 130:
            kilo = report + 1;
            sizing = oscar;
            _fun44421_ip = 143; continue _fun44421;
 138:
            kilo = report + 1;
            sizing = true;
 143:
            output = verify.bind(offset)();
            tango = output.done;
            oscar = sizing;
            report = kilo;
            golf = output;
            entity = oscar;
            zulu = report;
            if(!tango) { _fun44421_ip = 62; continue _fun44421 }
 170:
            if(!entity) { _fun44421_ip = 182; continue _fun44421 }
 173:
            mike = mike.length;
            entity = zulu === mike;
 182:
            return entity;
        }
    };
    tango['isEmojiCategoryNitroLocked'] = report;
    report = function(argFoo) { // Original name: isEmojiFilteredOrLocked
        _fun44422: for(var _fun44422_ip = 0; ; ) switch(_fun44422_ip) {
 0:
            tango = argFoo;
            zulu = this;
            entity = zulu.isEmojiFiltered;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun44422_ip = 31; continue _fun44422 }
 20:
            mike = zulu.isEmojiPremiumLocked;
            entity = mike.bind(zulu)(tango);
 31:
            return entity;
        }
    };
    tango['isEmojiFilteredOrLocked'] = report;
    report = function(argFoo) { // Original name: isEmojiDisabled
        tango = _closure1_slot22;
        zulu = undefined;
        mike = argFoo;
        zulu = tango.bind(zulu)(mike);
        mike = _closure1_slot16;
        entity = mike.has;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    tango['isEmojiDisabled'] = report;
    report = function(argFoo) { // Original name: isFileTooBig
        entity = argFoo;
        mike = entity.size;
        entity = 2097152;
        entity = mike > entity;
        return entity;
    };
    tango['isFileTooBig'] = report;
    report = function(argFoo) { // Original name: isDataTooBig
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        mike = 11;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.dataUriFileSize;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        entity = _closure1_slot9;
        entity = mike > entity;
        return entity;
    };
    tango['isDataTooBig'] = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/EmojiUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = function(argFoo, argBar) { // Original name: countEmoji
        tango = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = 0;
        var _closure2_slot1 = entity;
        var _closure2_slot2 = entity;
        var _closure2_slot3 = entity;
        var _closure2_slot4 = entity;
        var _closure2_slot5 = entity;
        var _closure2_slot6 = entity;
        zulu = tango.forEach;
        entity = function(argFoo) {
            _fun44427: for(var _fun44427_ip = 0; ; ) switch(_fun44427_ip) {
 0:
                entity = argFoo;
                zulu = entity.id;
                mike = null;
                if(!(mike == zulu)) { _fun44427_ip = 33; continue _fun44427 }
 14:
                mike = _closure2_slot1;
                mike = mike + 1;
                _closure2_slot1 = mike;
                _fun44427_ip = 186; continue _fun44427;
 33:
                zulu = entity.type;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 6;
                tango = tango[mike];
                mike = undefined;
                mike = report.bind(mike)(tango);
                mike = mike.EmojiTypes;
                mike = mike.GUILD;
                if(!(zulu === mike)) { _fun44427_ip = 163; continue _fun44427 }
 79:
                tango = entity.guildId;
                mike = _closure2_slot0;
                if(!(tango !== mike)) { _fun44427_ip = 130; continue _fun44427 }
 95:
                mike = entity.managed;
                if(mike) { _fun44427_ip = 117; continue _fun44427 }
 104:
                mike = _closure2_slot3;
                mike = mike + 1;
                _closure2_slot3 = mike;
                _fun44427_ip = 163; continue _fun44427;
 117:
                mike = _closure2_slot5;
                mike = mike + 1;
                _closure2_slot5 = mike;
                _fun44427_ip = 163; continue _fun44427;
 130:
                mike = entity.managed;
                if(mike) { _fun44427_ip = 152; continue _fun44427 }
 139:
                mike = _closure2_slot2;
                mike = mike + 1;
                _closure2_slot2 = mike;
                _fun44427_ip = 163; continue _fun44427;
 152:
                mike = _closure2_slot4;
                mike = mike + 1;
                _closure2_slot4 = mike;
 163:
                entity = entity.animated;
                if(!entity) { _fun44427_ip = 186; continue _fun44427 }
 172:
                entity = _closure2_slot6;
                entity = entity + 1;
                _closure2_slot6 = entity;
 186:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity);
        entity = {};
        zulu = _closure2_slot1;
        entity['unicode'] = zulu;
        zulu = _closure2_slot2;
        entity['custom'] = zulu;
        zulu = _closure2_slot3;
        entity['customExternal'] = zulu;
        zulu = _closure2_slot4;
        entity['managed'] = zulu;
        zulu = _closure2_slot5;
        entity['managedExternal'] = zulu;
        mike = _closure2_slot6;
        entity['animated'] = mike;
        return entity;
    };
    zulu['countEmoji'] = tango;
    tango = function() { // Original name: getEmojiColors
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getEmojiColors'] = tango;
    mike = function(argFoo) { // Original name: getEmojiUrl
        _fun44429: for(var _fun44429_ip = 0; ; ) switch(_fun44429_ip) {
 0:
            entity = argFoo;
            golf = arguments[1];
            tango = undefined;
            if(!(golf === tango)) { _fun44429_ip = 15; continue _fun44429 }
 12:
            golf = 32;
 15:
            options = entity.id;
            zulu = entity.name;
            oscar = entity.animated;
            report = null;
            if(!(report == options)) { _fun44429_ip = 73; continue _fun44429 }
 37:
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            mike = mike.bind(tango)(entity);
            entity = mike.getURL;
            entity = entity.bind(mike)(zulu);
            _fun44429_ip = 132; continue _fun44429;
 73:
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 12;
            mike = verify[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.getEmojiURL;
            mike = {};
            mike['id'] = options;
            mike['size'] = golf;
            report = report != oscar;
            if(!report) { _fun44429_ip = 122; continue _fun44429 }
 119:
            report = oscar;
 122:
            mike['animated'] = report;
            entity = zulu.bind(tango)(mike);
 132:
            return entity;
        }
    };
    zulu['getEmojiUrl'] = mike;
    return entity;
})();