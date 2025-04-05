// app/utils/EmojiUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot19;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot19;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    report = function(argFoo) { // Original name: isCustomEmoji
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.type;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 6;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.EmojiTypes;
            entity = entity.GUILD;
            entity = zuuluu === entity;
            if(entity) { _fun00008_ip = 63; continue _fun00007 }
 52:
            zuuluu = michal.guildId;
            michal = null;
            entity = michal != zuuluu;
 63:
            return entity;
        }
    };
    var _closure1_slot20 = report;
    verify = function(argFoo, argBar) { // Original name: isInternalEmojiForGuildId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            michal = null;
            entity = michal != zuuluu;
            if(!entity) { _fun00010_ip = 19; continue _fun00009 }
 15:
            entity = michal != tangon;
 19:
            if(!entity) { _fun00010_ip = 54; continue _fun00009 }
 22:
            report = _closure1_slot20;
            michal = undefined;
            report = report.bind(michal)(zuuluu);
            michal = !report;
            if(!report) { _fun00010_ip = 51; continue _fun00009 }
 42:
            zuuluu = zuuluu.guildId;
            michal = tangon === zuuluu;
 51:
            entity = michal;
 54:
            return entity;
        }
    };
    var _closure1_slot21 = verify;
    option = function(argFoo) { // Original name: getEmojiUnavailableReason
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.emoji;
            backup = entity.channel;
            romeon = entity.guildId;
            option = undefined;
            if(!(romeon === option)) { _fun00012_ip = 49; continue _fun00011 }
 25:
            michal = null;
            tangon = michal == backup;
            michal = undefined;
            if(tangon) { _fun00012_ip = 46; continue _fun00011 }
 36:
            tangon = backup.getGuildId;
            michal = tangon.bind(backup)();
 46:
            romeon = michal;
 49:
            oscard = entity.intention;
            offset = entity.forceIncludeExternalGuilds;
            michal = _closure1_slot20;
            michal = michal.bind(option)(zuuluu);
            if(michal) { _fun00012_ip = 80; continue _fun00011 }
 76:
            michal = null;
            return michal;
 80:
            michal = _closure1_slot13;
            michal = michal.GUILD_PROFILE;
            if(!(oscard !== michal)) { _fun00012_ip = 618; continue _fun00011 }
 97:
            michal = null;
            verify = michal != backup;
            if(!verify) { _fun00012_ip = 120; continue _fun00011 }
 106:
            report = _closure1_slot4;
            tangon = backup.type;
            verify = report.bind(option)(tangon);
 120:
            golfie = michal != backup;
            if(!golfie) { _fun00012_ip = 141; continue _fun00011 }
 127:
            report = _closure1_slot5;
            tangon = backup.type;
            golfie = report.bind(option)(tangon);
 141:
            tangon = _closure1_slot21;
            tangon = tangon.bind(option)(zuuluu, romeon);
            foxtra = _closure1_slot6;
            yankee = foxtra.can;
            report = _closure1_slot8;
            report = report.USE_EXTERNAL_EMOJIS;
            report = yankee.bind(foxtra)(report, backup);
            yankee = _closure1_slot13;
            yankee = yankee.COMMUNITY_CONTENT;
            if(!(oscard !== yankee)) { _fun00012_ip = 583; continue _fun00011 }
 194:
            yankee = _closure1_slot14;
            yankee = yankee.bind(option)(oscard);
            if(yankee) { _fun00012_ip = 234; continue _fun00011 }
 206:
            yankee = _closure1_slot21;
            yankee = yankee.bind(option)(zuuluu, romeon);
            if(yankee) { _fun00012_ip = 234; continue _fun00011 }
 219:
            if(offset) { _fun00012_ip = 234; continue _fun00011 }
 222:
            offset = _closure1_slot12;
            offset = offset.DISALLOW_EXTERNAL;
            return offset;
 234:
            if(verify) { _fun00012_ip = 240; continue _fun00011 }
 237:
            if(!golfie) { _fun00012_ip = 258; continue _fun00011 }
 240:
            if(tangon) { _fun00012_ip = 258; continue _fun00011 }
 243:
            if(report) { _fun00012_ip = 258; continue _fun00011 }
 246:
            report = _closure1_slot12;
            report = report.DISALLOW_EXTERNAL;
            return report;
 258:
            report = zuuluu.id;
            if(!(michal != report)) { _fun00012_ip = 288; continue _fun00011 }
 267:
            report = zuuluu.available;
            if(report) { _fun00012_ip = 288; continue _fun00011 }
 276:
            report = _closure1_slot12;
            report = report.GUILD_SUBSCRIPTION_UNAVAILABLE;
            return report;
 288:
            golfie = _closure1_slot7;
            report = golfie.getCurrentUser;
            offset = report.bind(golfie)();
            golfie = _closure1_slot1;
            report = _closure1_slot2;
            yankee = 7;
            report = report[yankee];
            golfie = golfie.bind(option)(report);
            report = golfie.canUseEmojisEverywhere;
            report = report.bind(golfie)(offset);
            if(report) { _fun00012_ip = 385; continue _fun00011 }
 335:
            if(tangon) { _fun00012_ip = 385; continue _fun00011 }
 338:
            report = _closure1_slot13;
            report = report.STATUS;
            if(!(oscard !== report)) { _fun00012_ip = 373; continue _fun00011 }
 352:
            report = zuuluu.managed;
            if(report) { _fun00012_ip = 385; continue _fun00011 }
 361:
            report = _closure1_slot12;
            report = report.PREMIUM_LOCKED;
            return report;
 373:
            report = _closure1_slot12;
            report = report.PREMIUM_LOCKED;
            return report;
 385:
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            verify = 8;
            report = report[verify];
            golfie = oscard.bind(option)(report);
            oscard = golfie.isUnusableRoleSubscriptionEmoji;
            foxtra = michal != romeon;
            report = undefined;
            if(!foxtra) { _fun00012_ip = 423; continue _fun00011 }
 420:
            report = romeon;
 423:
            report = oscard.bind(golfie)(zuuluu, report);
            if(report) { _fun00012_ip = 521; continue _fun00011 }
 432:
            oscard = zuuluu.animated;
            report = null;
            if(!oscard) { _fun00012_ip = 519; continue _fun00011 }
 443:
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[yankee];
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.canUseAnimatedEmojis;
            oscard = oscard.bind(golfie)(offset);
            report = null;
            if(oscard) { _fun00012_ip = 519; continue _fun00011 }
 476:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[verify];
            golfie = golfie.bind(option)(oscard);
            oscard = golfie.isPurchasableRoleSubscriptionEmoji;
            oscard = oscard.bind(golfie)(zuuluu);
            report = null;
            if(oscard) { _fun00012_ip = 519; continue _fun00011 }
 509:
            oscard = _closure1_slot12;
            report = oscard.PREMIUM_LOCKED;
 519:
            _fun00012_ip = 581; continue _fun00011;
 521:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 9;
            oscard = verify[oscard];
            option = golfie.bind(option)(oscard);
            golfie = option.shouldHideGuildPurchaseEntryPoints;
            oscard = zuuluu.guildId;
            oscard = golfie.bind(option)(oscard);
            golfie = _closure1_slot12;
            if(oscard) { _fun00012_ip = 572; continue _fun00011 }
 564:
            oscard = golfie.ROLE_SUBSCRIPTION_LOCKED;
            _fun00012_ip = 578; continue _fun00011;
 572:
            oscard = golfie.ROLE_SUBSCRIPTION_UNAVAILABLE;
 578:
            report = oscard;
 581:
            return report;
 583:
            if(!tangon) { _fun00012_ip = 606; continue _fun00011 }
 586:
            tangon = zuuluu.guildId;
            if(!(michal != tangon)) { _fun00012_ip = 606; continue _fun00011 }
 595:
            zuuluu = zuuluu.available;
            michal = null;
            if(zuuluu) { _fun00012_ip = 616; continue _fun00011 }
 606:
            zuuluu = _closure1_slot12;
            michal = zuuluu.DISALLOW_EXTERNAL;
 616:
            return michal;
 618:
            entity = _closure1_slot12;
            entity = entity.DISALLOW_CUSTOM;
            return entity;
        }
    };
    var _closure1_slot22 = option;
    entity = function() { // Original name: _getEmojiColors
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 62; continue _fun00013 }
 7:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 10;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.getEmojiColors;
                    michal = argFoo;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=50);
 48:
                    return michal;
 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 59; continue _fun00013 }
 56:
                    return michal;
 59:
                    return michal;
 62:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot23 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    tangon = global;
    foxtra = tangon.Object;
    romeon = foxtra.defineProperty;
    offset = {};
    entity = true;
    offset['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, offset);
    sizing = 0;
    offset = golfie[sizing];
    entity = undefined;
    offset = yankee.bind(entity)(offset);
    var _closure1_slot3 = offset;
    kiloes = 1;
    offset = golfie[kiloes];
    offset = oscard.bind(entity)(offset);
    romeon = offset.isGuildTextChannelType;
    var _closure1_slot4 = romeon;
    offset = offset.isGuildVocalChannelType;
    var _closure1_slot5 = offset;
    offset = 2;
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot6 = offset;
    offset = 3;
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    var _closure1_slot7 = offset;
    offset = 4;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.Permissions;
    var _closure1_slot8 = offset;
    offset = 5;
    offset = golfie[offset];
    romeon = oscard.bind(entity)(offset);
    offset = romeon.EMOJI_MAX_FILESIZE;
    var _closure1_slot9 = offset;
    offset = romeon.EMOJI_MAX_LENGTH;
    var _closure1_slot10 = offset;
    offset = romeon.EMOJI_RE;
    var _closure1_slot11 = offset;
    offset = romeon.EmojiDisabledReasons;
    var _closure1_slot12 = offset;
    foxtra = romeon.EmojiIntention;
    var _closure1_slot13 = foxtra;
    romeon = romeon.isExternalEmojiAllowedForIntention;
    var _closure1_slot14 = romeon;
    backup = tangon.Set;
    foxtra = offset.PREMIUM_LOCKED;
    romeon = new Array(2);
    romeon[0] = foxtra;
    foxtra = offset.ROLE_SUBSCRIPTION_LOCKED;
    romeon[1] = foxtra;
    foxtra = backup.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: backup}});
    update = foxtra;
    echoed = romeon;
    romeon = new update[backup](echoed, result);
    foxtra = romeon instanceof Object ? romeon : foxtra;
    var _closure1_slot15 = foxtra;
    backup = tangon.Set;
    romeon = new Array(2);
    echoed = romeon;
    result = foxtra;
    output = 0;
    foxtra = arraySpread(echoed, result, output);
    sizing = offset.GUILD_SUBSCRIPTION_UNAVAILABLE;
    romeon[foxtra] = sizing;
    kiloes = foxtra + kiloes;
    foxtra = offset.ROLE_SUBSCRIPTION_UNAVAILABLE;
    romeon[kiloes] = foxtra;
    foxtra = backup.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: backup}});
    update = foxtra;
    echoed = romeon;
    romeon = new update[backup](echoed, result);
    romeon = romeon instanceof Object ? romeon : foxtra;
    var _closure1_slot16 = romeon;
    romeon = tangon.Set;
    foxtra = offset.DISALLOW_CUSTOM;
    tangon = new Array(4);
    tangon[0] = foxtra;
    foxtra = offset.DISALLOW_EXTERNAL;
    tangon[1] = foxtra;
    foxtra = offset.GUILD_SUBSCRIPTION_UNAVAILABLE;
    tangon[2] = foxtra;
    offset = offset.ONLY_GUILD_EMOJIS_ALLOWED;
    tangon[3] = offset;
    offset = romeon.prototype;
    offset = Object.create(offset, {constructor: {value: romeon}});
    update = offset;
    echoed = tangon;
    tangon = new update[romeon](echoed, result);
    tangon = tangon instanceof Object ? tangon : offset;
    var _closure1_slot17 = tangon;
    tangon = {};
    offset = function(argFoo) { // Original name: sanitizeEmojiName
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            tangon = report.replace;
            zuuluu = _closure1_slot11;
            michal = '';
            tangon = tangon.bind(report)(zuuluu, michal);
            zuuluu = tangon.slice;
            michal = _closure1_slot10;
            entity = 0;
            entity = zuuluu.bind(tangon)(entity, michal);
            michal = entity.length;
            report = '_';
            tangon = 2;
            zuuluu = entity;
            entity = zuuluu;
            if(!(michal < tangon)) { _fun00016_ip = 83; continue _fun00015 }
 64:
            oscard = zuuluu + report;
            michal = oscard.length;
            zuuluu = oscard;
            entity = zuuluu;
            if(michal < tangon) { _fun00016_ip = 64; continue _fun00015 }
 83:
            return entity;
        }
    };
    tangon['sanitizeEmojiName'] = offset;
    offset = 10;
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.filterUnsupportedEmojis;
    tangon['filterUnsupportedEmojis'] = romeon;
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.getURL;
    tangon['getURL'] = offset;
    tangon['isInternalEmojiForGuildId'] = verify;
    tangon['getEmojiUnavailableReason'] = option;
    tangon['isCustomEmoji'] = report;
    report = function(argFoo) { // Original name: getEmojiUnavailableReasons
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            michal = entity.categoryEmojis;
            sizing = entity.channel;
            kiloes = entity.guildId;
            backup = entity.intention;
            entity = global;
            entity = entity.Set;
            zuuluu = entity.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
            sequen = zuuluu;
            entity = new sequen[entity](vacuum);
            report = entity instanceof Object ? entity : zuuluu;
            tangon = new Array(0);
            entity = _closure1_slot18;
            romeon = undefined;
            yankee = entity.bind(romeon)(michal);
            oscard = yankee.bind(romeon)();
            entity = oscard.done;
            golfie = 0;
            verify = null;
            option = oscard;
            oscard = false;
            zuuluu = 0;
            michal = false;
            if(entity) { _fun00018_ip = 322; continue _fun00017 }
 99:
            entity = option.value;
            result = _closure1_slot22;
            output = {};
            output['emoji'] = entity;
            output['channel'] = sizing;
            output['guildId'] = kiloes;
            output['intention'] = backup;
            ctrled = result.bind(romeon)(output);
            if(!(verify == ctrled)) { _fun00018_ip = 158; continue _fun00017 }
 137:
            output = tangon.push;
            output = output.bind(tangon)(entity);
            result = golfie;
            output = oscard;
            _fun00018_ip = 292; continue _fun00017;
 158:
            update = _closure1_slot17;
            echoed = update.has;
            echoed = echoed.bind(update)(ctrled);
            if(echoed) { _fun00018_ip = 185; continue _fun00017 }
 175:
            echoed = tangon.push;
            echoed = echoed.bind(tangon)(entity);
 185:
            update = _closure1_slot16;
            echoed = update.has;
            echoed = echoed.bind(update)(ctrled);
            result = golfie;
            output = oscard;
            if(!echoed) { _fun00018_ip = 292; continue _fun00017 }
 208:
            echoed = entity.id;
            if(!(verify != echoed)) { _fun00018_ip = 232; continue _fun00017 }
 217:
            echoed = report.add;
            entity = entity.id;
            entity = echoed.bind(report)(entity);
 232:
            echoed = _closure1_slot15;
            entity = echoed.has;
            update = entity.bind(echoed)(ctrled);
            echoed = golfie;
            entity = oscard;
            if(!update) { _fun00018_ip = 286; continue _fun00017 }
 255:
            update = oscard;
            if(oscard) { _fun00018_ip = 275; continue _fun00017 }
 261:
            source = _closure1_slot12;
            source = source.PREMIUM_LOCKED;
            update = ctrled !== source;
 275:
            if(update) { _fun00018_ip = 280; continue _fun00017 }
 278:
            oscard = true;
 280:
            echoed = golfie + 1;
            entity = oscard;
 286:
            result = echoed;
            output = entity;
 292:
            echoed = yankee.bind(romeon)();
            entity = echoed.done;
            golfie = result;
            oscard = output;
            option = echoed;
            zuuluu = golfie;
            michal = oscard;
            if(!entity) { _fun00018_ip = 99; continue _fun00017 }
 322:
            entity = {};
            entity['emojisDisabled'] = report;
            entity['emojisUnfiltered'] = tangon;
            entity['emojisPremiumLockedCount'] = zuuluu;
            entity['emojiNitroLocked'] = michal;
            return entity;
        }
    };
    tangon['getEmojiUnavailableReasons'] = report;
    report = function(argFoo) { // Original name: isEmojiFiltered
        tangon = _closure1_slot22;
        zuuluu = undefined;
        michal = argFoo;
        zuuluu = tangon.bind(zuuluu)(michal);
        michal = _closure1_slot17;
        entity = michal.has;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    tangon['isEmojiFiltered'] = report;
    report = function(argFoo) { // Original name: isEmojiPremiumLocked
        tangon = _closure1_slot22;
        zuuluu = undefined;
        michal = argFoo;
        zuuluu = tangon.bind(zuuluu)(michal);
        michal = _closure1_slot15;
        entity = michal.has;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    tangon['isEmojiPremiumLocked'] = report;
    report = function(argFoo) { // Original name: isEmojiCategoryNitroLocked
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            michal = entity.categoryEmojis;
            backup = entity.channel;
            foxtra = entity.guildId;
            romeon = entity.intention;
            entity = _closure1_slot18;
            offset = undefined;
            verify = entity.bind(offset)(michal);
            report = verify.bind(offset)();
            tangon = report.done;
            oscard = false;
            golfie = report;
            report = 0;
            entity = false;
            zuuluu = 0;
            if(tangon) { _fun00020_ip = 170; continue _fun00019 }
 62:
            kiloes = _closure1_slot22;
            tangon = {};
            sizing = golfie.value;
            tangon['emoji'] = sizing;
            tangon['channel'] = backup;
            tangon['intention'] = romeon;
            tangon['guildId'] = foxtra;
            output = kiloes.bind(offset)(tangon);
            tangon = _closure1_slot12;
            tangon = tangon.PREMIUM_LOCKED;
            if(!(output !== tangon)) { _fun00020_ip = 138; continue _fun00019 }
 110:
            tangon = _closure1_slot12;
            tangon = tangon.GUILD_SUBSCRIPTION_UNAVAILABLE;
            sizing = oscard;
            kiloes = report;
            if(!(output === tangon)) { _fun00020_ip = 143; continue _fun00019 }
 130:
            kiloes = report + 1;
            sizing = oscard;
            _fun00020_ip = 143; continue _fun00019;
 138:
            kiloes = report + 1;
            sizing = true;
 143:
            output = verify.bind(offset)();
            tangon = output.done;
            oscard = sizing;
            report = kiloes;
            golfie = output;
            entity = oscard;
            zuuluu = report;
            if(!tangon) { _fun00020_ip = 62; continue _fun00019 }
 170:
            if(!entity) { _fun00020_ip = 182; continue _fun00019 }
 173:
            michal = michal.length;
            entity = zuuluu === michal;
 182:
            return entity;
        }
    };
    tangon['isEmojiCategoryNitroLocked'] = report;
    report = function(argFoo) { // Original name: isEmojiFilteredOrLocked
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            zuuluu = this;
            entity = zuuluu.isEmojiFiltered;
            entity = entity.bind(zuuluu)(tangon);
            if(entity) { _fun00022_ip = 31; continue _fun00021 }
 20:
            michal = zuuluu.isEmojiPremiumLocked;
            entity = michal.bind(zuuluu)(tangon);
 31:
            return entity;
        }
    };
    tangon['isEmojiFilteredOrLocked'] = report;
    report = function(argFoo) { // Original name: isEmojiDisabled
        tangon = _closure1_slot22;
        zuuluu = undefined;
        michal = argFoo;
        zuuluu = tangon.bind(zuuluu)(michal);
        michal = _closure1_slot16;
        entity = michal.has;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    tangon['isEmojiDisabled'] = report;
    report = function(argFoo) { // Original name: isFileTooBig
        entity = argFoo;
        michal = entity.size;
        entity = 2097152;
        entity = michal > entity;
        return entity;
    };
    tangon['isFileTooBig'] = report;
    report = function(argFoo) { // Original name: isDataTooBig
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 11;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.dataUriFileSize;
        michal = argFoo;
        michal = zuuluu.bind(tangon)(michal);
        entity = _closure1_slot9;
        entity = michal > entity;
        return entity;
    };
    tangon['isDataTooBig'] = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'utils/EmojiUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: countEmoji
        tangon = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = 0;
        var _closure2_slot1 = entity;
        var _closure2_slot2 = entity;
        var _closure2_slot3 = entity;
        var _closure2_slot4 = entity;
        var _closure2_slot5 = entity;
        var _closure2_slot6 = entity;
        zuuluu = tangon.forEach;
        entity = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.id;
                michal = null;
                if(!(michal == zuuluu)) { _fun00024_ip = 33; continue _fun00023 }
 14:
                michal = _closure2_slot1;
                michal = michal + 1;
                _closure2_slot1 = michal;
                _fun00024_ip = 186; continue _fun00023;
 33:
                zuuluu = entity.type;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 6;
                tangon = tangon[michal];
                michal = undefined;
                michal = report.bind(michal)(tangon);
                michal = michal.EmojiTypes;
                michal = michal.GUILD;
                if(!(zuuluu === michal)) { _fun00024_ip = 163; continue _fun00023 }
 79:
                tangon = entity.guildId;
                michal = _closure2_slot0;
                if(!(tangon !== michal)) { _fun00024_ip = 130; continue _fun00023 }
 95:
                michal = entity.managed;
                if(michal) { _fun00024_ip = 117; continue _fun00023 }
 104:
                michal = _closure2_slot3;
                michal = michal + 1;
                _closure2_slot3 = michal;
                _fun00024_ip = 163; continue _fun00023;
 117:
                michal = _closure2_slot5;
                michal = michal + 1;
                _closure2_slot5 = michal;
                _fun00024_ip = 163; continue _fun00023;
 130:
                michal = entity.managed;
                if(michal) { _fun00024_ip = 152; continue _fun00023 }
 139:
                michal = _closure2_slot2;
                michal = michal + 1;
                _closure2_slot2 = michal;
                _fun00024_ip = 163; continue _fun00023;
 152:
                michal = _closure2_slot4;
                michal = michal + 1;
                _closure2_slot4 = michal;
 163:
                entity = entity.animated;
                if(!entity) { _fun00024_ip = 186; continue _fun00023 }
 172:
                entity = _closure2_slot6;
                entity = entity + 1;
                _closure2_slot6 = entity;
 186:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity);
        entity = {};
        zuuluu = _closure2_slot1;
        entity['unicode'] = zuuluu;
        zuuluu = _closure2_slot2;
        entity['custom'] = zuuluu;
        zuuluu = _closure2_slot3;
        entity['customExternal'] = zuuluu;
        zuuluu = _closure2_slot4;
        entity['managed'] = zuuluu;
        zuuluu = _closure2_slot5;
        entity['managedExternal'] = zuuluu;
        michal = _closure2_slot6;
        entity['animated'] = michal;
        return entity;
    };
    zuuluu['countEmoji'] = tangon;
    tangon = function() { // Original name: getEmojiColors
        entity = undefined;
        tangon = _closure1_slot23;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getEmojiColors'] = tangon;
    michal = function(argFoo) { // Original name: getEmojiUrl
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            golfie = arguments[1];
            tangon = undefined;
            if(!(golfie === tangon)) { _fun00026_ip = 15; continue _fun00025 }
 12:
            golfie = 32;
 15:
            option = entity.id;
            zuuluu = entity.name;
            oscard = entity.animated;
            report = null;
            if(!(report == option)) { _fun00026_ip = 73; continue _fun00025 }
 37:
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 10;
            entity = verify[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.getURL;
            entity = entity.bind(michal)(zuuluu);
            _fun00026_ip = 132; continue _fun00025;
 73:
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 12;
            michal = verify[michal];
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.getEmojiURL;
            michal = {};
            michal['id'] = option;
            michal['size'] = golfie;
            report = report != oscard;
            if(!report) { _fun00026_ip = 122; continue _fun00025 }
 119:
            report = oscard;
 122:
            michal['animated'] = report;
            entity = zuuluu.bind(tangon)(michal);
 132:
            return entity;
        }
    };
    zuuluu['getEmojiUrl'] = michal;
    return entity;
})();