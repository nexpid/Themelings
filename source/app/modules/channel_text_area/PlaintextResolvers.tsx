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
            verify = _closure1_slot14;
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
            golfie = _closure1_slot14;
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
    var _closure1_slot13 = entity;
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
    var _closure1_slot14 = entity;
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: resolvePlaintextInlineVoid
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            foxtra = argBar;
            romeon = argBaz;
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
            oscard = 0;
            tangon = report[oscard];
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
            tangon = yankee == foxtra;
            entity = null;
            if(tangon) { _fun00008_ip = 862; continue _fun00007 }
 104:
            golfie = report.length;
            tangon = 3;
            if(!(golfie > tangon)) { _fun00008_ip = 148; continue _fun00007 }
 116:
            verify = 1;
            tangon = report[verify];
            golfie = '"';
            if(!(golfie === tangon)) { _fun00008_ip = 148; continue _fun00007 }
 131:
            tangon = report.length;
            tangon = tangon - verify;
            tangon = report[tangon];
            if(!(golfie !== tangon)) { _fun00008_ip = 163; continue _fun00007 }
 148:
            golfie = report.slice;
            tangon = 1;
            result = golfie.bind(report)(tangon);
            _fun00008_ip = 220; continue _fun00007;
 163:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 11;
            tangon = option[tangon];
            option = golfie.bind(offset)(tangon);
            golfie = option.unescapeChannelName;
            backup = report.slice;
            tangon = report.length;
            verify = tangon - verify;
            tangon = 2;
            tangon = backup.bind(report)(tangon, verify);
            result = golfie.bind(option)(tangon);
 220:
            golfie = _closure1_slot7;
            tangon = golfie.getTextChannelNameDisambiguations;
            backup = tangon.bind(golfie)(foxtra);
            golfie = _closure1_slot13;
            option = _closure1_slot1;
            tangon = _closure1_slot2;
            kiloes = 12;
            tangon = tangon[kiloes];
            option = option.bind(offset)(tangon);
            tangon = option.keys;
            tangon = tangon.bind(option)(backup);
            verify = golfie.bind(offset)(tangon);
            golfie = verify.bind(offset)();
            tangon = golfie.done;
            option = golfie;
            if(tangon) { _fun00008_ip = 371; continue _fun00007 }
 292:
            golfie = option.value;
            tangon = backup[golfie];
            tangon = tangon.name;
            if(!(tangon !== result)) { _fun00008_ip = 327; continue _fun00007 }
 310:
            echoed = verify.bind(offset)();
            tangon = echoed.done;
            option = echoed;
            if(tangon) { _fun00008_ip = 371; continue _fun00007 }
 325:
            _fun00008_ip = 292; continue _fun00007;
 327:
            tangon = {};
            option = 'channelMention';
            tangon['type'] = option;
            tangon['channelId'] = golfie;
            option = {};
            golfie = '';
            option['text'] = golfie;
            golfie = new Array(1);
            golfie[0] = option;
            tangon['children'] = golfie;
            entity = tangon;
            _fun00008_ip = 862; continue _fun00007;
 371:
            golfie = _closure1_slot13;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 13;
            tangon = verify[tangon];
            tangon = option.bind(offset)(tangon);
            tangon = tangon.COMMAND_SUPPORTED_CHANNEL_TYPE_KEYS;
            echoed = golfie.bind(offset)(tangon);
            golfie = echoed.bind(offset)();
            tangon = golfie.done;
            backup = golfie;
            verify = undefined;
            option = undefined;
            golfie = undefined;
            if(tangon) { _fun00008_ip = 616; continue _fun00007 }
 430:
            ctrled = backup.value;
            tangon = _closure1_slot8;
            update = golfie;
            if(!(ctrled !== tangon)) { _fun00008_ip = 595; continue _fun00007 }
 449:
            source = _closure1_slot13;
            vacuum = _closure1_slot7;
            tangon = vacuum.getChannels;
            tangon = tangon.bind(vacuum)(foxtra);
            tangon = tangon[ctrled];
            vacuum = source.bind(offset)(tangon);
            source = vacuum.bind(offset)();
            tangon = source.done;
            ctrled = source;
            verify = ctrled;
            option = vacuum;
            update = golfie;
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
            verify = ctrled;
            option = vacuum;
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
            golfie = update;
            backup = source;
            if(!tangon) { _fun00008_ip = 430; continue _fun00007 }
 616:
            golfie = _closure1_slot5;
            tangon = golfie.getActiveJoinedThreadsForGuild;
            backup = tangon.bind(golfie)(foxtra);
            golfie = _closure1_slot13;
            option = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[kiloes];
            option = option.bind(offset)(tangon);
            tangon = option.keys;
            tangon = tangon.bind(option)(backup);
            verify = golfie.bind(offset)(tangon);
            golfie = verify.bind(offset)();
            tangon = golfie.done;
            option = golfie;
            golfie = undefined;
            entity = null;
            if(tangon) { _fun00008_ip = 862; continue _fun00007 }
 689:
            ctrled = option.value;
            echoed = _closure1_slot13;
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
            golfie = echoed;
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
            echoed = verify.bind(offset)();
            tangon = echoed.done;
            option = echoed;
            entity = null;
            if(!tangon) { _fun00008_ip = 689; continue _fun00007 }
 862:
            return entity;
 864:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            entity = 14;
            entity = option[entity];
            entity = golfie.bind(offset)(entity);
            golfie = entity.EMOJI_NAME_RE;
            entity = golfie.exec;
            option = entity.bind(golfie)(report);
            golfie = yankee == option;
            entity = null;
            if(golfie) { _fun00008_ip = 1107; continue _fun00007 }
 916:
            golfie = 1;
            golfie = option[golfie];
            option = _closure1_slot4;
            tangon = option.getDisambiguatedEmojiContext;
            option = tangon.bind(option)(foxtra);
            tangon = option.getCustomEmoji;
            tangon = tangon.bind(option)();
            option = yankee != tangon;
            entity = null;
            if(!option) { _fun00008_ip = 1107; continue _fun00007 }
 960:
            option = golfie in tangon;
            entity = null;
            if(!option) { _fun00008_ip = 1107; continue _fun00007 }
 972:
            option = tangon[golfie];
            tangon = {};
            golfie = 'customEmoji';
            tangon['type'] = golfie;
            golfie = {};
            verify = option.id;
            golfie['emojiId'] = verify;
            verify = 'require_colons';
            verify = verify in option;
            if(!verify) { _fun00008_ip = 1018; continue _fun00007 }
 1009:
            verify = option.require_colons;
            if(verify) { _fun00008_ip = 1025; continue _fun00007 }
 1018:
            verify = option.name;
            _fun00008_ip = 1049; continue _fun00007;
 1025:
            kiloes = option.name;
            backup = global;
            backup = backup.HermesInternal;
            backup = backup.concat;
            verify = backup.bind(sizing)(kiloes, sizing);
 1049:
            golfie['name'] = verify;
            verify = option.animated;
            option = true;
            option = option === verify;
            golfie['animated'] = option;
            option = false;
            golfie['jumboable'] = option;
            tangon['emoji'] = golfie;
            option = {};
            golfie = '';
            option['text'] = golfie;
            golfie = new Array(1);
            golfie[0] = option;
            tangon['children'] = golfie;
            entity = tangon;
 1107:
            return entity;
 1109:
            entity = report.slice;
            tangon = 1;
            option = entity.bind(report)(tangon);
            report = option.split;
            entity = '#';
            golfie = 2;
            report = report.bind(option)(entity, golfie);
            entity = _closure1_slot3;
            entity = entity.bind(offset)(report, golfie);
            option = entity[oscard];
            golfie = entity[tangon];
            tangon = yankee != foxtra;
            entity = null;
            if(!tangon) { _fun00008_ip = 1184; continue _fun00007 }
 1170:
            report = _closure1_slot10;
            tangon = report.getGuild;
            entity = tangon.bind(report)(foxtra);
 1184:
            report = _closure1_slot0;
            backup = _closure1_slot2;
            tangon = 10;
            tangon = backup[tangon];
            report = report.bind(offset)(tangon);
            tangon = report.getClydeExperimentEnabled;
            report = tangon.bind(report)(entity);
            if(!zuuluu) { _fun00008_ip = 1306; continue _fun00007 }
 1218:
            if(!(yankee == golfie)) { _fun00008_ip = 1306; continue _fun00007 }
 1222:
            if(!(yankee != entity)) { _fun00008_ip = 1306; continue _fun00007 }
 1226:
            zuuluu = global;
            tangon = zuuluu.Object;
            zuuluu = tangon.values;
            kiloes = _closure1_slot10;
            backup = kiloes.getRoles;
            entity = entity.id;
            entity = backup.bind(kiloes)(entity);
            tangon = zuuluu.bind(tangon)(entity);
            entity = tangon.length;
            entity = oscard < entity;
            oscard = 0;
            if(!entity) { _fun00008_ip = 1306; continue _fun00007 }
 1278:
            zuuluu = tangon[oscard];
            entity = zuuluu.name;
            if(!(option !== entity)) { _fun00008_ip = 1684; continue _fun00007 }
 1294:
            oscard = oscard + 1;
            entity = tangon.length;
            if(oscard < entity) { _fun00008_ip = 1278; continue _fun00007 }
 1306:
            entity = null;
            if(!michal) { _fun00008_ip = 1729; continue _fun00007 }
 1314:
            tangon = yankee != romeon;
            michal = null;
            if(!tangon) { _fun00008_ip = 1337; continue _fun00007 }
 1323:
            oscard = _closure1_slot6;
            tangon = oscard.getChannel;
            michal = tangon.bind(oscard)(romeon);
 1337:
            tangon = yankee != michal;
            entity = null;
            if(!tangon) { _fun00008_ip = 1729; continue _fun00007 }
 1349:
            tangon = michal.isPrivate;
            oscard = tangon.bind(michal)();
            tangon = _closure1_slot13;
            if(oscard) { _fun00008_ip = 1572; continue _fun00007 }
 1369:
            romeon = _closure1_slot9;
            oscard = romeon.getMembers;
            oscard = oscard.bind(romeon)(foxtra);
            backup = tangon.bind(offset)(oscard);
            romeon = backup.bind(offset)();
            oscard = romeon.done;
            foxtra = romeon;
            if(oscard) { _fun00008_ip = 1491; continue _fun00007 }
 1404:
            oscard = foxtra.value;
            romeon = oscard.userId;
            oscard = _closure1_slot16;
            oscard = oscard.bind(offset)(option, golfie, romeon);
            if(oscard) { _fun00008_ip = 1445; continue _fun00007 }
 1428:
            kiloes = backup.bind(offset)();
            oscard = kiloes.done;
            foxtra = kiloes;
            if(oscard) { _fun00008_ip = 1491; continue _fun00007 }
 1443:
            _fun00008_ip = 1404; continue _fun00007;
 1445:
            oscard = {};
            foxtra = 'userMention';
            oscard['type'] = foxtra;
            oscard['userId'] = romeon;
            foxtra = {};
            romeon = '';
            foxtra['text'] = romeon;
            romeon = new Array(1);
            romeon[0] = foxtra;
            oscard['children'] = romeon;
            entity = oscard;
            _fun00008_ip = 1729; continue _fun00007;
 1491:
            entity = null;
            if(!report) { _fun00008_ip = 1729; continue _fun00007 }
 1499:
            oscard = _closure1_slot16;
            report = _closure1_slot12;
            report = oscard.bind(offset)(option, golfie, report);
            entity = null;
            if(!report) { _fun00008_ip = 1729; continue _fun00007 }
 1522:
            report = {};
            oscard = 'userMention';
            report['type'] = oscard;
            oscard = _closure1_slot12;
            report['userId'] = oscard;
            romeon = {};
            oscard = '';
            romeon['text'] = oscard;
            oscard = new Array(1);
            oscard[0] = romeon;
            report['children'] = oscard;
            entity = report;
            _fun00008_ip = 1729; continue _fun00007;
 1572:
            michal = michal.recipients;
            oscard = tangon.bind(offset)(michal);
            tangon = oscard.bind(offset)();
            michal = tangon.done;
            report = tangon;
            entity = null;
            if(michal) { _fun00008_ip = 1729; continue _fun00007 }
 1603:
            tangon = report.value;
            michal = _closure1_slot16;
            michal = michal.bind(offset)(option, golfie, tangon);
            if(michal) { _fun00008_ip = 1641; continue _fun00007 }
 1622:
            romeon = oscard.bind(offset)();
            michal = romeon.done;
            report = romeon;
            entity = null;
            if(michal) { _fun00008_ip = 1729; continue _fun00007 }
 1639:
            _fun00008_ip = 1603; continue _fun00007;
 1641:
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
            _fun00008_ip = 1729; continue _fun00007;
 1684:
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
 1729:
            return entity;
        }
    };
    var _closure1_slot15 = tangon;
    entity = function(argFoo, argBar, argBaz) { // Original name: matchesUserId
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golfie = argFoo;
            oscard = argBar;
            zuuluu = argBaz;
            tangon = _closure1_slot11;
            entity = tangon.getUser;
            report = entity.bind(tangon)(zuuluu);
            tangon = null;
            entity = tangon != report;
            if(!entity) { _fun00010_ip = 112; continue _fun00009 }
 36:
            michal = _closure1_slot12;
            michal = zuuluu === michal;
            if(!michal) { _fun00010_ip = 65; continue _fun00009 }
 47:
            zuuluu = golfie.toLowerCase;
            option = zuuluu.bind(golfie)();
            zuuluu = 'clyde';
            michal = zuuluu === option;
 65:
            if(michal) { _fun00010_ip = 109; continue _fun00009 }
 68:
            zuuluu = report.username;
            zuuluu = zuuluu === golfie;
            if(!zuuluu) { _fun00010_ip = 106; continue _fun00009 }
 80:
            report = report.discriminator;
            golfie = tangon != oscard;
            tangon = '0';
            if(!golfie) { _fun00010_ip = 102; continue _fun00009 }
 99:
            tangon = oscard;
 102:
            zuuluu = report === tangon;
 106:
            michal = zuuluu;
 109:
            entity = michal;
 112:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.CLYDE_AI_USER_ID;
    var _closure1_slot12 = report;
    report = 15;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/channel_text_area/PlaintextResolvers.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['resolvePlaintextInlineVoid'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: resolveApplicationCommandOption
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = _closure1_slot15;
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
            michal = 9;
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