// app/modules/channel_text_area/PlaintextResolvers.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
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
            verify = _closure1_slot13;
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
            golfie = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
    var _closure1_slot13 = entity;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: resolvePlaintextInlineVoid
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = argFoo;
            romeon = argBar;
            oscard = argBaz;
            entity = argCor;
            yankee = null;
            if(!(yankee == entity)) { _fun00008_ip = 20; continue _fun00007 }
 18:
            entity = {};
 20:
            zuuluu = entity.allowUsers;
            offset = undefined;
            michal = offset === zuuluu;
            if(michal) { _fun00008_ip = 38; continue _fun00007 }
 35:
            michal = zuuluu;
 38:
            entity = entity.allowRoles;
            zuuluu = offset === entity;
            if(zuuluu) { _fun00008_ip = 54; continue _fun00007 }
 51:
            zuuluu = entity;
 54:
            report = 0;
            tangon = golfie[report];
            entity = '@';
            if(!(entity !== tangon)) { _fun00008_ip = 1109; continue _fun00007 }
 71:
            sizing = ':';
            if(!(sizing !== tangon)) { _fun00008_ip = 864; continue _fun00007 }
 82:
            entity = '#';
            if(!(entity !== tangon)) { _fun00008_ip = 92; continue _fun00007 }
 90:
            return yankee;
 92:
            tangon = yankee == romeon;
            entity = null;
            if(tangon) { _fun00008_ip = 862; continue _fun00007 }
 104:
            option = golfie.length;
            tangon = 3;
            if(!(option > tangon)) { _fun00008_ip = 148; continue _fun00007 }
 116:
            foxtra = 1;
            tangon = golfie[foxtra];
            option = '"';
            if(!(option === tangon)) { _fun00008_ip = 148; continue _fun00007 }
 131:
            tangon = golfie.length;
            tangon = tangon - foxtra;
            tangon = golfie[tangon];
            if(!(option !== tangon)) { _fun00008_ip = 163; continue _fun00007 }
 148:
            option = golfie.slice;
            tangon = 1;
            result = option.bind(golfie)(tangon);
            _fun00008_ip = 220; continue _fun00007;
 163:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 9;
            tangon = verify[tangon];
            verify = option.bind(offset)(tangon);
            option = verify.unescapeChannelName;
            backup = golfie.slice;
            tangon = golfie.length;
            foxtra = tangon - foxtra;
            tangon = 2;
            tangon = backup.bind(golfie)(tangon, foxtra);
            result = option.bind(verify)(tangon);
 220:
            option = _closure1_slot7;
            tangon = option.getTextChannelNameDisambiguations;
            backup = tangon.bind(option)(romeon);
            option = _closure1_slot12;
            verify = _closure1_slot1;
            tangon = _closure1_slot2;
            kiloes = 10;
            tangon = tangon[kiloes];
            verify = verify.bind(offset)(tangon);
            tangon = verify.keys;
            tangon = tangon.bind(verify)(backup);
            foxtra = option.bind(offset)(tangon);
            option = foxtra.bind(offset)();
            tangon = option.done;
            verify = option;
            if(tangon) { _fun00008_ip = 371; continue _fun00007 }
 292:
            option = verify.value;
            tangon = backup[option];
            tangon = tangon.name;
            if(!(tangon !== result)) { _fun00008_ip = 327; continue _fun00007 }
 310:
            echoed = foxtra.bind(offset)();
            tangon = echoed.done;
            verify = echoed;
            if(tangon) { _fun00008_ip = 371; continue _fun00007 }
 325:
            _fun00008_ip = 292; continue _fun00007;
 327:
            tangon = {};
            verify = 'channelMention';
            tangon['type'] = verify;
            tangon['channelId'] = option;
            verify = {};
            option = '';
            verify['text'] = option;
            option = new Array(1);
            option[0] = verify;
            tangon['children'] = option;
            entity = tangon;
            _fun00008_ip = 862; continue _fun00007;
 371:
            option = _closure1_slot12;
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            tangon = 11;
            tangon = foxtra[tangon];
            tangon = verify.bind(offset)(tangon);
            tangon = tangon.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            echoed = option.bind(offset)(tangon);
            option = echoed.bind(offset)();
            tangon = option.done;
            backup = option;
            foxtra = undefined;
            verify = undefined;
            option = undefined;
            if(tangon) { _fun00008_ip = 616; continue _fun00007 }
 430:
            ctrled = backup.value;
            tangon = _closure1_slot8;
            update = option;
            if(!(ctrled !== tangon)) { _fun00008_ip = 595; continue _fun00007 }
 449:
            source = _closure1_slot12;
            vacuum = _closure1_slot7;
            tangon = vacuum.getChannels;
            tangon = tangon.bind(vacuum)(romeon);
            tangon = tangon[ctrled];
            vacuum = source.bind(offset)(tangon);
            source = vacuum.bind(offset)();
            tangon = source.done;
            ctrled = source;
            foxtra = ctrled;
            verify = vacuum;
            update = option;
            if(tangon) { _fun00008_ip = 595; continue _fun00007 }
 501:
            tangon = ctrled.value;
            source = tangon.channel;
            tangon = source.name;
            if(!(tangon !== result)) { _fun00008_ip = 546; continue _fun00007 }
 520:
            sequen = vacuum.bind(offset)();
            tangon = sequen.done;
            ctrled = sequen;
            foxtra = ctrled;
            verify = vacuum;
            update = source;
            if(tangon) { _fun00008_ip = 595; continue _fun00007 }
 544:
            _fun00008_ip = 501; continue _fun00007;
 546:
            tangon = {};
            ctrled = 'channelMention';
            tangon['type'] = ctrled;
            source = source.id;
            tangon['channelId'] = source;
            ctrled = {};
            source = '';
            ctrled['text'] = source;
            source = new Array(1);
            source[0] = ctrled;
            tangon['children'] = source;
            entity = tangon;
            _fun00008_ip = 862; continue _fun00007;
 595:
            source = echoed.bind(offset)();
            tangon = source.done;
            option = update;
            backup = source;
            if(!tangon) { _fun00008_ip = 430; continue _fun00007 }
 616:
            option = _closure1_slot5;
            tangon = option.getActiveJoinedThreadsForGuild;
            backup = tangon.bind(option)(romeon);
            option = _closure1_slot12;
            verify = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[kiloes];
            verify = verify.bind(offset)(tangon);
            tangon = verify.keys;
            tangon = tangon.bind(verify)(backup);
            foxtra = option.bind(offset)(tangon);
            option = foxtra.bind(offset)();
            tangon = option.done;
            verify = option;
            option = undefined;
            entity = null;
            if(tangon) { _fun00008_ip = 862; continue _fun00007 }
 689:
            ctrled = verify.value;
            echoed = _closure1_slot12;
            update = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[kiloes];
            source = update.bind(offset)(tangon);
            update = source.keys;
            tangon = backup[ctrled];
            tangon = update.bind(source)(tangon);
            source = echoed.bind(offset)(tangon);
            echoed = source.bind(offset)();
            tangon = echoed.done;
            update = echoed;
            if(tangon) { _fun00008_ip = 842; continue _fun00007 }
 749:
            echoed = update.value;
            tangon = backup[ctrled];
            tangon = tangon[echoed];
            echoed = tangon.channel;
            tangon = echoed.name;
            if(!(tangon !== result)) { _fun00008_ip = 796; continue _fun00007 }
 776:
            vacuum = source.bind(offset)();
            tangon = vacuum.done;
            update = vacuum;
            option = echoed;
            if(tangon) { _fun00008_ip = 842; continue _fun00007 }
 794:
            _fun00008_ip = 749; continue _fun00007;
 796:
            tangon = {};
            update = 'channelMention';
            tangon['type'] = update;
            echoed = echoed.id;
            tangon['channelId'] = echoed;
            update = {};
            echoed = '';
            update['text'] = echoed;
            echoed = new Array(1);
            echoed[0] = update;
            tangon['children'] = echoed;
            entity = tangon;
            _fun00008_ip = 862; continue _fun00007;
 842:
            echoed = foxtra.bind(offset)();
            tangon = echoed.done;
            verify = echoed;
            entity = null;
            if(!tangon) { _fun00008_ip = 689; continue _fun00007 }
 862:
            return entity;
 864:
            option = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 12;
            entity = verify[entity];
            entity = option.bind(offset)(entity);
            option = entity.EMOJI_NAME_RE;
            entity = option.exec;
            verify = entity.bind(option)(golfie);
            option = yankee == verify;
            entity = null;
            if(option) { _fun00008_ip = 1107; continue _fun00007 }
 916:
            option = 1;
            option = verify[option];
            verify = _closure1_slot4;
            tangon = verify.getDisambiguatedEmojiContext;
            verify = tangon.bind(verify)(romeon);
            tangon = verify.getCustomEmoji;
            tangon = tangon.bind(verify)();
            verify = yankee != tangon;
            entity = null;
            if(!verify) { _fun00008_ip = 1107; continue _fun00007 }
 960:
            verify = option in tangon;
            entity = null;
            if(!verify) { _fun00008_ip = 1107; continue _fun00007 }
 972:
            verify = tangon[option];
            tangon = {};
            option = 'customEmoji';
            tangon['type'] = option;
            option = {};
            foxtra = verify.id;
            option['emojiId'] = foxtra;
            foxtra = 'require_colons';
            foxtra = foxtra in verify;
            if(!foxtra) { _fun00008_ip = 1018; continue _fun00007 }
 1009:
            foxtra = verify.require_colons;
            if(foxtra) { _fun00008_ip = 1025; continue _fun00007 }
 1018:
            foxtra = verify.name;
            _fun00008_ip = 1049; continue _fun00007;
 1025:
            kiloes = verify.name;
            backup = global;
            backup = backup.HermesInternal;
            backup = backup.concat;
            foxtra = backup.bind(sizing)(kiloes, sizing);
 1049:
            option['name'] = foxtra;
            foxtra = verify.animated;
            verify = true;
            verify = verify === foxtra;
            option['animated'] = verify;
            verify = false;
            option['jumboable'] = verify;
            tangon['emoji'] = option;
            verify = {};
            option = '';
            verify['text'] = option;
            option = new Array(1);
            option[0] = verify;
            tangon['children'] = option;
            entity = tangon;
 1107:
            return entity;
 1109:
            entity = golfie.slice;
            tangon = 1;
            verify = entity.bind(golfie)(tangon);
            golfie = verify.split;
            entity = '#';
            option = 2;
            golfie = golfie.bind(verify)(entity, option);
            entity = _closure1_slot3;
            entity = entity.bind(offset)(golfie, option);
            option = entity[report];
            golfie = entity[tangon];
            tangon = yankee != romeon;
            entity = null;
            if(!tangon) { _fun00008_ip = 1184; continue _fun00007 }
 1170:
            foxtra = _closure1_slot10;
            tangon = foxtra.getGuild;
            entity = tangon.bind(foxtra)(romeon);
 1184:
            if(!zuuluu) { _fun00008_ip = 1275; continue _fun00007 }
 1187:
            if(!(yankee == golfie)) { _fun00008_ip = 1275; continue _fun00007 }
 1191:
            if(!(yankee != entity)) { _fun00008_ip = 1275; continue _fun00007 }
 1195:
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.values;
            backup = _closure1_slot10;
            foxtra = backup.getRoles;
            entity = entity.id;
            entity = foxtra.bind(backup)(entity);
            tangon = zuuluu.bind(tangon)(entity);
            entity = tangon.length;
            entity = report < entity;
            report = 0;
            if(!entity) { _fun00008_ip = 1275; continue _fun00007 }
 1247:
            zuuluu = tangon[report];
            entity = zuuluu.name;
            if(!(option !== entity)) { _fun00008_ip = 1582; continue _fun00007 }
 1263:
            report = report + 1;
            entity = tangon.length;
            if(report < entity) { _fun00008_ip = 1247; continue _fun00007 }
 1275:
            entity = null;
            if(!michal) { _fun00008_ip = 1627; continue _fun00007 }
 1283:
            tangon = yankee != oscard;
            michal = null;
            if(!tangon) { _fun00008_ip = 1306; continue _fun00007 }
 1292:
            report = _closure1_slot6;
            tangon = report.getChannel;
            michal = tangon.bind(report)(oscard);
 1306:
            tangon = yankee != michal;
            entity = null;
            if(!tangon) { _fun00008_ip = 1627; continue _fun00007 }
 1318:
            tangon = michal.isPrivate;
            report = tangon.bind(michal)();
            tangon = _closure1_slot12;
            if(report) { _fun00008_ip = 1470; continue _fun00007 }
 1338:
            oscard = _closure1_slot9;
            report = oscard.getMembers;
            report = report.bind(oscard)(romeon);
            foxtra = tangon.bind(offset)(report);
            oscard = foxtra.bind(offset)();
            report = oscard.done;
            romeon = oscard;
            entity = null;
            if(report) { _fun00008_ip = 1627; continue _fun00007 }
 1378:
            report = romeon.value;
            oscard = report.userId;
            report = _closure1_slot15;
            report = report.bind(offset)(option, golfie, oscard);
            if(report) { _fun00008_ip = 1424; continue _fun00007 }
 1402:
            backup = foxtra.bind(offset)();
            report = backup.done;
            romeon = backup;
            entity = null;
            if(report) { _fun00008_ip = 1627; continue _fun00007 }
 1422:
            _fun00008_ip = 1378; continue _fun00007;
 1424:
            report = {};
            romeon = 'userMention';
            report['type'] = romeon;
            report['userId'] = oscard;
            romeon = {};
            oscard = '';
            romeon['text'] = oscard;
            oscard = new Array(1);
            oscard[0] = romeon;
            report['children'] = oscard;
            entity = report;
            _fun00008_ip = 1627; continue _fun00007;
 1470:
            michal = michal.recipients;
            oscard = tangon.bind(offset)(michal);
            tangon = oscard.bind(offset)();
            michal = tangon.done;
            report = tangon;
            entity = null;
            if(michal) { _fun00008_ip = 1627; continue _fun00007 }
 1501:
            tangon = report.value;
            michal = _closure1_slot15;
            michal = michal.bind(offset)(option, golfie, tangon);
            if(michal) { _fun00008_ip = 1539; continue _fun00007 }
 1520:
            romeon = oscard.bind(offset)();
            michal = romeon.done;
            report = romeon;
            entity = null;
            if(michal) { _fun00008_ip = 1627; continue _fun00007 }
 1537:
            _fun00008_ip = 1501; continue _fun00007;
 1539:
            michal = {};
            report = 'userMention';
            michal['type'] = report;
            michal['userId'] = tangon;
            report = {};
            tangon = '';
            report['text'] = tangon;
            tangon = new Array(1);
            tangon[0] = report;
            michal['children'] = tangon;
            entity = michal;
            _fun00008_ip = 1627; continue _fun00007;
 1582:
            michal = {};
            tangon = 'roleMention';
            michal['type'] = tangon;
            zuuluu = zuuluu.id;
            michal['roleId'] = zuuluu;
            tangon = {};
            zuuluu = '';
            tangon['text'] = zuuluu;
            zuuluu = new Array(1);
            zuuluu[0] = tangon;
            michal['children'] = zuuluu;
            entity = michal;
 1627:
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    entity = function(argFoo, argBar, argBaz) { // Original name: matchesUserId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argBar;
            zuuluu = _closure1_slot11;
            michal = zuuluu.getUser;
            entity = argBaz;
            tangon = michal.bind(zuuluu)(entity);
            zuuluu = null;
            entity = zuuluu != tangon;
            if(!entity) { _fun00010_ip = 77; continue _fun00009 }
 33:
            oscard = tangon.username;
            michal = argFoo;
            michal = oscard === michal;
            if(!michal) { _fun00010_ip = 74; continue _fun00009 }
 48:
            tangon = tangon.discriminator;
            oscard = zuuluu != report;
            zuuluu = '0';
            if(!oscard) { _fun00010_ip = 70; continue _fun00009 }
 67:
            zuuluu = report;
 70:
            michal = tangon === zuuluu;
 74:
            entity = michal;
 77:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    verify = golfie[report];
    verify = option.bind(entity)(verify);
    var _closure1_slot7 = verify;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot8 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot11 = report;
    report = 13;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/channel_text_area/PlaintextResolvers.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['resolvePlaintextInlineVoid'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: resolveApplicationCommandOption
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = _closure1_slot14;
            report = undefined;
            yankee = argFoo;
            offset = argBar;
            verify = argBaz;
            option = argCor;
            romeon = undefined;
            tangon = romeon[golfie](yankee, offset, verify, option, golfie);
            entity = null;
            zuuluu = entity == tangon;
            if(zuuluu) { _fun00012_ip = 67; continue _fun00011 }
 36:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 8;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.voidToOptionValue;
            entity = michal.bind(zuuluu)(tangon);
 67:
            return entity;
        }
    };
    zuuluu['resolveApplicationCommandOption'] = michal;
    return entity;
})();