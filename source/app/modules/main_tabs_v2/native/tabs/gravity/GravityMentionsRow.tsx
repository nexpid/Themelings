// app/modules/main_tabs_v2/native/tabs/gravity/GravityMentionsRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
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
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot22;
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
            golfie = _closure1_slot22;
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
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: MoreUnreadsRow
        michal = argFoo;
        echoed = michal.messages;
        var _closure2_slot0 = echoed;
        michal = _closure1_slot20;
        tangon = undefined;
        yankee = michal.bind(tangon)();
        oscard = _closure1_slot4;
        report = oscard.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = echoed;
        michal = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                option = new Array(0);
                entity = global;
                entity = entity.Set;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                kiloes = michal;
                entity = new kiloes[entity](backup);
                oscard = entity instanceof Object ? entity : michal;
                michal = _closure1_slot21;
                entity = _closure2_slot0;
                verify = undefined;
                report = michal.bind(verify)(entity);
                michal = report.bind(verify)();
                entity = michal.done;
                tangon = null;
                if(entity) { _fun00008_ip = 205; continue _fun00007 }
 70:
                yankee = michal.value;
                offset = _closure1_slot6;
                golfie = offset.getChannel;
                entity = yankee.getChannelId;
                entity = entity.bind(yankee)();
                romeon = golfie.bind(offset)(entity);
                golfie = tangon != romeon;
                entity = null;
                if(!golfie) { _fun00008_ip = 132; continue _fun00007 }
 108:
                yankee = _closure1_slot9;
                offset = yankee.getGuild;
                golfie = romeon.getGuildId;
                golfie = golfie.bind(romeon)();
                entity = offset.bind(yankee)(golfie);
 132:
                golfie = tangon == entity;
                if(golfie) { _fun00008_ip = 154; continue _fun00007 }
 139:
                yankee = oscard.has;
                offset = entity.id;
                golfie = yankee.bind(oscard)(offset);
 154:
                if(golfie) { _fun00008_ip = 187; continue _fun00007 }
 157:
                offset = option.push;
                golfie = entity.name;
                golfie = offset.bind(option)(golfie);
                golfie = oscard.add;
                entity = entity.id;
                entity = golfie.bind(oscard)(entity);
 187:
                golfie = report.bind(verify)();
                entity = golfie.done;
                michal = golfie;
                if(!entity) { _fun00008_ip = 70; continue _fun00007 }
 205:
                michal = option.length;
                entity = '';
                golfie = 0;
                if(!(golfie !== michal)) { _fun00008_ip = 498; continue _fun00007 }
 223:
                michal = option.length;
                yankee = 1;
                if(!(yankee !== michal)) { _fun00008_ip = 426; continue _fun00007 }
 238:
                michal = option.length;
                romeon = 2;
                if(!(romeon !== michal)) { _fun00008_ip = 346; continue _fun00007 }
 250:
                tangon = _closure1_slot0;
                offset = _closure1_slot3;
                michal = 14;
                report = offset[michal];
                report = tangon.bind(verify)(report);
                oscard = report.intl;
                report = oscard.formatToPlainString;
                michal = offset[michal];
                michal = tangon.bind(verify)(michal);
                michal = michal.t;
                tangon = michal.1P7pvb;
                michal = {};
                offset = option[golfie];
                michal['guildName1'] = offset;
                offset = option[yankee];
                michal['guildName2'] = offset;
                offset = option.length;
                offset = offset - romeon;
                michal['numGuildsRemaining'] = offset;
                michal = report.bind(oscard)(tangon, michal);
                _fun00008_ip = 424; continue _fun00007;
 346:
                report = _closure1_slot0;
                romeon = _closure1_slot3;
                tangon = 14;
                oscard = romeon[tangon];
                oscard = report.bind(verify)(oscard);
                offset = oscard.intl;
                oscard = offset.formatToPlainString;
                tangon = romeon[tangon];
                tangon = report.bind(verify)(tangon);
                tangon = tangon.t;
                report = tangon.QiuZ+P;
                tangon = {};
                romeon = option[golfie];
                tangon['guildName1'] = romeon;
                yankee = option[yankee];
                tangon['guildName2'] = yankee;
                michal = oscard.bind(offset)(report, tangon);
 424:
                _fun00008_ip = 495; continue _fun00007;
 426:
                tangon = _closure1_slot0;
                offset = _closure1_slot3;
                zuuluu = 14;
                report = offset[zuuluu];
                report = tangon.bind(verify)(report);
                oscard = report.intl;
                report = oscard.formatToPlainString;
                zuuluu = offset[zuuluu];
                zuuluu = tangon.bind(verify)(zuuluu);
                zuuluu = zuuluu.t;
                tangon = zuuluu.90AwBw;
                zuuluu = {};
                golfie = option[golfie];
                zuuluu['guildName'] = golfie;
                michal = report.bind(oscard)(tangon, zuuluu);
 495:
                entity = michal;
 498:
                return entity;
            }
        };
        option = report.bind(oscard)(michal, zuuluu);
        oscard = _closure1_slot0;
        romeon = _closure1_slot3;
        michal = 15;
        michal = romeon[michal];
        zuuluu = oscard.bind(tangon)(michal);
        michal = zuuluu.useNavigation;
        golfie = michal.bind(zuuluu)();
        var _closure2_slot1 = golfie;
        report = _closure1_slot4;
        zuuluu = report.useCallback;
        michal = new Array(1);
        michal[0] = golfie;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.trackItemInteraction;
            zuuluu = 'more_unreads_button';
            michal = 'press_more_unreads_button';
            michal = tangon.bind(report)(zuuluu, zuuluu, michal);
            tangon = _closure2_slot1;
            zuuluu = tangon.push;
            michal = 'notifications-screen';
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report = zuuluu.bind(report)(entity, michal);
        zuuluu = _closure1_slot12;
        entity = 17;
        entity = romeon[entity];
        entity = oscard.bind(tangon)(entity);
        michal = entity.TableRow;
        entity = {};
        foxtra = _closure1_slot12;
        golfie = 18;
        golfie = romeon[golfie];
        golfie = oscard.bind(tangon)(golfie);
        offset = golfie.ArrowSmallRightIcon;
        golfie = {};
        backup = yankee.rightArrow;
        golfie['style'] = backup;
        backup = 'custom';
        golfie['size'] = backup;
        golfie = foxtra.bind(tangon)(offset, golfie);
        entity['icon'] = golfie;
        entity['onPress'] = report;
        backup = _closure1_slot12;
        report = 11;
        golfie = romeon[report];
        golfie = oscard.bind(tangon)(golfie);
        foxtra = golfie.Text;
        golfie = {};
        offset = yankee.noTouchContainer;
        golfie['style'] = offset;
        offset = 1;
        golfie['lineClamp'] = offset;
        kiloes = _closure1_slot16;
        golfie['variant'] = kiloes;
        kiloes = 'text-brand';
        golfie['color'] = kiloes;
        kiloes = 14;
        sizing = romeon[kiloes];
        sizing = oscard.bind(tangon)(sizing);
        result = sizing.intl;
        output = result.formatToPlainString;
        kiloes = romeon[kiloes];
        kiloes = oscard.bind(tangon)(kiloes);
        kiloes = kiloes.t;
        sizing = kiloes.66UdFh;
        kiloes = {};
        echoed = echoed.length;
        kiloes['unreadsCount'] = echoed;
        kiloes = output.bind(result)(sizing, kiloes);
        golfie['children'] = kiloes;
        golfie = backup.bind(tangon)(foxtra, golfie);
        entity['label'] = golfie;
        golfie = _closure1_slot12;
        report = romeon[report];
        report = oscard.bind(tangon)(report);
        oscard = report.Text;
        report = {};
        yankee = yankee.noTouchContainer;
        report['style'] = yankee;
        report['lineClamp'] = offset;
        verify = _closure1_slot17;
        report['variant'] = verify;
        verify = 'text-muted';
        report['color'] = verify;
        report['children'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['subLabel'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: MentionRow
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            yankee = michal.message;
            var _closure2_slot0 = yankee;
            michal = _closure1_slot20;
            tangon = undefined;
            kiloes = michal.bind(tangon)();
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            report = 19;
            michal = zuuluu[report];
            verify = oscard.bind(tangon)(michal);
            option = verify.useStateFromStores;
            michal = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                tangon = _closure2_slot0;
                entity = tangon.getChannelId;
                entity = entity.bind(tangon)();
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = option.bind(verify)(golfie, michal);
            var _closure2_slot1 = michal;
            zuuluu = zuuluu[report];
            option = oscard.bind(tangon)(zuuluu);
            golfie = option.useStateFromStores;
            zuuluu = _closure1_slot9;
            oscard = new Array(1);
            oscard[0] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00012_ip = 47; continue _fun00011 }
 16:
                    tangon = _closure1_slot9;
                    zuuluu = tangon.getGuild;
                    report = _closure2_slot1;
                    michal = report.getGuildId;
                    michal = michal.bind(report)();
                    entity = zuuluu.bind(tangon)(michal);
 47:
                    return entity;
                }
            };
            config = golfie.bind(option)(oscard, zuuluu);
            var _closure2_slot2 = config;
            option = _closure1_slot4;
            golfie = option.useMemo;
            oscard = new Array(2);
            oscard[0] = config;
            zuuluu = yankee.author;
            zuuluu = zuuluu.id;
            oscard[1] = zuuluu;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00014_ip = 54; continue _fun00013 }
 13:
                    entity = {};
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = michal.author;
                    tangon = michal.id;
                    michal = new Array(1);
                    michal[0] = tangon;
                    entity[zuuluu] = michal;
                    _fun00014_ip = 56; continue _fun00013;
 54:
                    entity = {};
 56:
                    return entity;
                }
            };
            verify = golfie.bind(option)(zuuluu, oscard);
            option = _closure1_slot4;
            golfie = option.useEffect;
            vacuum = null;
            oscard = vacuum == config;
            zuuluu = undefined;
            if(oscard) { _fun00010_ip = 194; continue _fun00009 }
 189:
            zuuluu = config.id;
 194:
            oscard = new Array(2);
            oscard[0] = zuuluu;
            zuuluu = yankee.author;
            zuuluu = zuuluu.id;
            oscard[1] = zuuluu;
            zuuluu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot2;
                    oscard = null;
                    tangon = oscard == entity;
                    entity = undefined;
                    zuuluu = undefined;
                    if(tangon) { _fun00016_ip = 29; continue _fun00015 }
 20:
                    tangon = _closure2_slot2;
                    zuuluu = tangon.id;
 29:
                    if(!(oscard != zuuluu)) { _fun00016_ip = 123; continue _fun00015 }
 33:
                    golfie = _closure1_slot10;
                    report = golfie.getUser;
                    tangon = _closure2_slot0;
                    tangon = tangon.author;
                    tangon = tangon.id;
                    tangon = report.bind(golfie)(tangon);
                    if(!(oscard == tangon)) { _fun00016_ip = 123; continue _fun00015 }
 70:
                    report = _closure1_slot7;
                    tangon = report.requestMember;
                    zuuluu = _closure2_slot2;
                    oscard = oscard == zuuluu;
                    zuuluu = undefined;
                    if(oscard) { _fun00016_ip = 102; continue _fun00015 }
 93:
                    oscard = _closure2_slot2;
                    zuuluu = oscard.id;
 102:
                    michal = _closure2_slot0;
                    michal = michal.author;
                    michal = michal.id;
                    michal = tangon.bind(report)(zuuluu, michal);
 123:
                    return entity;
                }
            };
            zuuluu = golfie.bind(option)(zuuluu, oscard);
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            zuuluu = 20;
            zuuluu = golfie[zuuluu];
            option = oscard.bind(tangon)(zuuluu);
            zuuluu = option.useSubscribeGuildMembers;
            zuuluu = zuuluu.bind(option)(verify);
            zuuluu = _closure1_slot19;
            backup = zuuluu.bind(tangon)();
            zuuluu = 21;
            zuuluu = golfie[zuuluu];
            option = oscard.bind(tangon)(zuuluu);
            golfie = option.useName;
            zuuluu = vacuum == config;
            oscard = undefined;
            if(zuuluu) { _fun00010_ip = 301; continue _fun00009 }
 296:
            oscard = config.id;
 301:
            verify = vacuum == michal;
            zuuluu = undefined;
            if(verify) { _fun00010_ip = 315; continue _fun00009 }
 310:
            zuuluu = michal.id;
 315:
            michal = yankee.author;
            record = golfie.bind(option)(oscard, zuuluu, michal);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[report];
            oscard = zuuluu.bind(tangon)(michal);
            report = oscard.useStateFromStores;
            michal = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00018_ip = 59; continue _fun00017 }
 16:
                    report = _closure1_slot8;
                    tangon = report.getMember;
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = michal.author;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 59:
                    return entity;
                }
            };
            michal = report.bind(oscard)(zuuluu, michal);
            zuuluu = vacuum == michal;
            ctrled = undefined;
            if(zuuluu) { _fun00010_ip = 390; continue _fun00009 }
 384:
            ctrled = michal.colorString;
 390:
            if(!(vacuum == ctrled)) { _fun00010_ip = 429; continue _fun00009 }
 394:
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            michal = 22;
            michal = report[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.int2hex;
            michal = _closure1_slot11;
            ctrled = zuuluu.bind(report)(michal);
 429:
            report = _closure1_slot4;
            zuuluu = report.useCallback;
            michal = vacuum == config;
            oscard = undefined;
            if(michal) { _fun00010_ip = 452; continue _fun00009 }
 447:
            oscard = config.id;
 452:
            michal = new Array(2);
            michal[0] = oscard;
            michal[1] = yankee;
            entity = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    report = _closure1_slot0;
                    oscard = _closure1_slot3;
                    zuuluu = 16;
                    michal = oscard[zuuluu];
                    entity = undefined;
                    yankee = report.bind(entity)(michal);
                    offset = yankee.trackItemInteraction;
                    tangon = _closure2_slot0;
                    verify = tangon.id;
                    option = 'unread_mention';
                    golfie = 'press_unread_mention';
                    golfie = offset.bind(yankee)(verify, option, golfie);
                    zuuluu = oscard[zuuluu];
                    oscard = report.bind(entity)(zuuluu);
                    report = oscard.navigateToPost;
                    zuuluu = tangon.getChannelId;
                    tangon = zuuluu.bind(tangon)();
                    golfie = _closure2_slot2;
                    zuuluu = null;
                    golfie = zuuluu == golfie;
                    zuuluu = undefined;
                    if(golfie) { _fun00020_ip = 111; continue _fun00019 }
 102:
                    golfie = _closure2_slot2;
                    zuuluu = golfie.id;
 111:
                    michal = _closure2_slot0;
                    michal = michal.id;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    return entity;
                }
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot12;
            michal = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 17;
            entity = oscard[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.TableRow;
            entity = {};
            option = _closure1_slot12;
            golfie = _closure1_slot1;
            verify = 23;
            oscard = oscard[verify];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            offset = true;
            oscard['animate'] = offset;
            foxtra = vacuum == config;
            offset = undefined;
            if(foxtra) { _fun00010_ip = 552; continue _fun00009 }
 547:
            offset = config.id;
 552:
            oscard['guildId'] = offset;
            offset = yankee.author;
            oscard['user'] = offset;
            update = _closure1_slot0;
            sequen = _closure1_slot3;
            verify = sequen[verify];
            verify = update.bind(tangon)(verify);
            verify = verify.AvatarSizes;
            verify = verify.REFRESH_MEDIUM_32;
            oscard['size'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            entity['icon'] = oscard;
            entity['onPress'] = report;
            golfie = _closure1_slot13;
            oscard = _closure1_slot5;
            report = {};
            verify = kiloes.textContainer;
            option = new Array(3);
            option[0] = verify;
            verify = kiloes.labelContainer;
            option[1] = verify;
            verify = kiloes.noTouchContainer;
            option[2] = verify;
            report['style'] = option;
            foxtra = _closure1_slot13;
            option = 11;
            verify = sequen[option];
            verify = update.bind(tangon)(verify);
            offset = verify.Text;
            verify = {};
            sizing = kiloes.label;
            verify['style'] = sizing;
            result = 1;
            verify['lineClamp'] = result;
            sizing = _closure1_slot14;
            verify['variant'] = sizing;
            sizing = 'header-primary';
            verify['color'] = sizing;
            source = _closure1_slot12;
            sizing = sequen[option];
            sizing = update.bind(tangon)(sizing);
            output = sizing.Text;
            sizing = {};
            echoed = {};
            echoed['color'] = ctrled;
            sizing['style'] = echoed;
            echoed = 'text-md/semibold';
            sizing['variant'] = echoed;
            echoed = 16;
            echoed = sequen[echoed];
            ctrled = update.bind(tangon)(echoed);
            echoed = ctrled.truncateUsername;
            ctrled = echoed.bind(ctrled)(record);
            echoed = ' ';
            ctrled = ctrled + echoed;
            sizing['children'] = ctrled;
            output = source.bind(tangon)(output, sizing);
            sizing = new Array(2);
            sizing[0] = output;
            output = 14;
            source = sequen[output];
            source = update.bind(tangon)(source);
            ctrled = source.intl;
            source = ctrled.formatToPlainString;
            output = sequen[output];
            output = update.bind(tangon)(output);
            output = output.t;
            update = output.jM1jAA;
            output = {};
            record = vacuum == config;
            sequen = undefined;
            if(record) { _fun00010_ip = 866; continue _fun00009 }
 861:
            sequen = config.name;
 866:
            config = vacuum != sequen;
            vacuum = '';
            if(!config) { _fun00010_ip = 880; continue _fun00009 }
 877:
            vacuum = sequen;
 880:
            output['guildName'] = vacuum;
            output = source.bind(ctrled)(update, output);
            sizing[1] = output;
            verify['children'] = sizing;
            verify = foxtra.bind(tangon)(offset, verify);
            offset = new Array(2);
            offset[0] = verify;
            ctrled = _closure1_slot12;
            verify = _closure1_slot0;
            sizing = _closure1_slot3;
            foxtra = sizing[option];
            foxtra = verify.bind(tangon)(foxtra);
            source = foxtra.Text;
            update = {'style': null, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            foxtra = kiloes.timestamp;
            update['style'] = foxtra;
            output = 'header-muted';
            foxtra = 24;
            foxtra = sizing[foxtra];
            config = verify.bind(tangon)(foxtra);
            sequen = config.getRelativeTimestamp;
            foxtra = _closure1_slot1;
            vacuum = 25;
            vacuum = sizing[vacuum];
            cntext = foxtra.bind(tangon)(vacuum);
            record = cntext.extractTimestamp;
            vacuum = yankee.id;
            vacuum = record.bind(cntext)(vacuum);
            vacuum = sequen.bind(config)(vacuum);
            update['children'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            offset[1] = update;
            report['children'] = offset;
            report = golfie.bind(tangon)(oscard, report);
            entity['label'] = report;
            golfie = _closure1_slot13;
            oscard = _closure1_slot5;
            report = {};
            update = kiloes.textContainer;
            offset = new Array(3);
            offset[0] = update;
            update = kiloes.noTouchContainer;
            offset[2] = update;
            report['style'] = offset;
            offset = _closure1_slot12;
            option = sizing[option];
            option = verify.bind(tangon)(option);
            verify = option.Text;
            option = {};
            update = kiloes.label;
            option['style'] = update;
            option['lineClamp'] = result;
            result = _closure1_slot15;
            option['variant'] = result;
            option['color'] = output;
            result = yankee.content;
            output = result.replace;
            yankee = /\n+/g;
            yankee = output.bind(result)(yankee, echoed);
            yankee = backup.bind(tangon)(yankee);
            option['children'] = yankee;
            verify = offset.bind(tangon)(verify, option);
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot12;
            offset = _closure1_slot5;
            verify = {};
            backup = kiloes.badgeContainer;
            verify['style'] = backup;
            backup = _closure1_slot12;
            romeon = 26;
            romeon = sizing[romeon];
            foxtra = foxtra.bind(tangon)(romeon);
            romeon = {};
            kiloes = kiloes.badge;
            romeon['badgeStyle'] = kiloes;
            kiloes = 8;
            romeon['size'] = kiloes;
            romeon = backup.bind(tangon)(foxtra, romeon);
            verify['children'] = romeon;
            verify = yankee.bind(tangon)(offset, verify);
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['subLabel'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot24 = entity;
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
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    foxtra = 2;
    tangon = oscard[foxtra];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    romeon = tangon.ICYMI_MARGIN;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DEFAULT_ROLE_COLOR;
    var _closure1_slot11 = tangon;
    tangon = 9;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot12 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 'text-md/medium';
    var _closure1_slot14 = tangon;
    tangon = 'text-sm/normal';
    var _closure1_slot15 = tangon;
    tangon = 'text-sm/semibold';
    var _closure1_slot16 = tangon;
    tangon = 'text-xs/normal';
    var _closure1_slot17 = tangon;
    tangon = 10;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = {};
    backup = {};
    kiloes = 11;
    offset = oscard[kiloes];
    offset = report.bind(entity)(offset);
    offset = offset.TextStyleSheet;
    echoed = offset.text-sm/normal;
    update = backup;
    offset = copyDataProperties(update, echoed);
    offset = 12;
    sizing = oscard[offset];
    sizing = yankee.bind(entity)(sizing);
    sizing = sizing.colors;
    output = sizing.TEXT_MUTED;
    sizing = 'color';
    backup[sizing] = output;
    golfie['strong'] = backup;
    backup = {};
    kiloes = oscard[kiloes];
    kiloes = report.bind(entity)(kiloes);
    kiloes = kiloes.TextStyleSheet;
    echoed = kiloes.text-sm/semibold;
    update = backup;
    kiloes = copyDataProperties(update, echoed);
    kiloes = oscard[offset];
    kiloes = yankee.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.TEXT_BRAND;
    backup[sizing] = kiloes;
    sizing = 'transparent';
    kiloes = 'backgroundColor';
    backup[kiloes] = sizing;
    golfie['mention'] = backup;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot18 = golfie;
    golfie = function() { // Original name: useMarkup
        zuuluu = _closure1_slot2;
        tangon = _closure1_slot3;
        michal = 13;
        michal = tangon[michal];
        tangon = undefined;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.getParser;
        entity = _closure1_slot18;
        entity = entity.bind(tangon)();
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot19 = golfie;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    verify['height'] = romeon;
    tangon['arrowContainer'] = verify;
    verify = {'width': 0, 'height': 0, 'borderStyle': 'solid', 'borderLeftColor': 'transparent', 'borderRightColor': 'transparent', 'borderTopColor': null, 'borderBottomColor': null, 'position': 'absolute'};
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_PRIMARY_BG;
    verify['borderTopColor'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.CARD_PRIMARY_BG;
    verify['borderBottomColor'] = backup;
    backup = 32;
    kiloes = romeon + backup;
    backup = romeon / foxtra;
    backup = kiloes + backup;
    verify['right'] = backup;
    tangon['arrow'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    tangon['textContainer'] = verify;
    verify = {};
    verify['marginBottom'] = foxtra;
    tangon['labelContainer'] = verify;
    verify = {};
    verify['flexShrink'] = foxtra;
    tangon['label'] = verify;
    verify = {};
    verify['marginHorizontal'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_8;
    verify['paddingTop'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_16;
    verify['paddingBottom'] = romeon;
    tangon['container'] = verify;
    verify = {};
    romeon = 18;
    verify['width'] = romeon;
    tangon['badgeContainer'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_8;
    verify['marginLeft'] = romeon;
    tangon['timestamp'] = verify;
    verify = {};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BUTTON_OUTLINE_DANGER_BORDER;
    verify['backgroundColor'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_8;
    verify['marginLeft'] = romeon;
    tangon['badge'] = verify;
    verify = {'tintColor': null, 'height': 20, 'width': 20, 'marginHorizontal': 6};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_BRAND;
    verify['tintColor'] = offset;
    tangon['rightArrow'] = verify;
    verify = {};
    offset = 'none';
    verify['pointerEvents'] = offset;
    tangon['noTouchContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot20 = tangon;
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/tabs/gravity/GravityMentionsRow.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GravityMentionsRow
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            entity = entity.messages;
            var _closure2_slot0 = entity;
            michal = _closure1_slot20;
            tangon = undefined;
            kiloes = michal.bind(tangon)();
            report = _closure1_slot4;
            zuuluu = report.useMemo;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                tangon = _closure2_slot0;
                verify = tangon.slice;
                oscard = _closure1_slot0;
                golfie = _closure1_slot3;
                michal = 27;
                zuuluu = golfie[michal];
                report = undefined;
                zuuluu = oscard.bind(report)(zuuluu);
                option = zuuluu.MAX_NUM_MENTIONS_SHOWN;
                zuuluu = 0;
                zuuluu = verify.bind(tangon)(zuuluu, option);
                entity['displayMessages'] = zuuluu;
                zuuluu = tangon.slice;
                michal = golfie[michal];
                michal = oscard.bind(report)(michal);
                michal = michal.MAX_NUM_MENTIONS_SHOWN;
                michal = zuuluu.bind(tangon)(michal);
                entity['remainingMessages'] = michal;
                return entity;
            };
            entity = zuuluu.bind(report)(entity, michal);
            romeon = entity.displayMessages;
            backup = entity.remainingMessages;
            zuuluu = _closure1_slot13;
            michal = _closure1_slot5;
            entity = {};
            report = kiloes.container;
            entity['style'] = report;
            golfie = _closure1_slot12;
            oscard = _closure1_slot5;
            report = {};
            option = kiloes.arrowContainer;
            report['style'] = option;
            foxtra = _closure1_slot12;
            offset = _closure1_slot5;
            option = {};
            sizing = kiloes.arrow;
            kiloes = new Array(2);
            kiloes[0] = sizing;
            sizing = {'borderLeftWidth': 12, 'borderRightWidth': 12, 'borderBottomWidth': 12};
            kiloes[1] = sizing;
            option['style'] = kiloes;
            option = foxtra.bind(tangon)(offset, option);
            report['children'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            golfie = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 28;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.TableRowGroup;
            oscard = {};
            offset = romeon.map;
            verify = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot12;
                tangon = _closure1_slot24;
                zuuluu = {};
                zuuluu['message'] = entity;
                michal = entity.id;
                entity = undefined;
                entity = report.bind(entity)(tangon, zuuluu, michal);
                return entity;
            };
            offset = offset.bind(romeon)(verify);
            verify = new Array(2);
            verify[0] = offset;
            romeon = backup.length;
            offset = 0;
            offset = romeon > offset;
            if(!offset) { _fun00022_ip = 271; continue _fun00021 }
 250:
            foxtra = _closure1_slot12;
            romeon = _closure1_slot23;
            yankee = {};
            yankee['messages'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 271:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();