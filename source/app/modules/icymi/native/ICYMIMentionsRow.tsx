// app/modules/icymi/native/ICYMIMentionsRow.tsx
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot17;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot17;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: MoreUnreadsRow
        michal = argFoo;
        result = michal.messages;
        var _closure2_slot0 = result;
        michal = _closure1_slot15;
        tangon = undefined;
        verify = michal.bind(tangon)();
        oscard = _closure1_slot4;
        report = oscard.useMemo;
        zuuluu = new Array(1);
        zuuluu[0] = result;
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
                michal = _closure1_slot16;
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
        offset = _closure1_slot3;
        michal = 15;
        michal = offset[michal];
        zuuluu = oscard.bind(tangon)(michal);
        michal = zuuluu.useNavigation;
        yankee = michal.bind(zuuluu)();
        var _closure2_slot1 = yankee;
        report = _closure1_slot4;
        zuuluu = report.useCallback;
        michal = new Array(1);
        michal[0] = yankee;
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
        entity = offset[entity];
        entity = oscard.bind(tangon)(entity);
        michal = entity.TableRow;
        entity = {};
        foxtra = _closure1_slot12;
        yankee = 18;
        yankee = offset[yankee];
        yankee = oscard.bind(tangon)(yankee);
        romeon = yankee.ArrowSmallRightIcon;
        yankee = {};
        backup = verify.rightArrow;
        yankee['style'] = backup;
        backup = 'custom';
        yankee['size'] = backup;
        yankee = foxtra.bind(tangon)(romeon, yankee);
        entity['icon'] = yankee;
        entity['onPress'] = report;
        foxtra = _closure1_slot12;
        report = 11;
        yankee = offset[report];
        yankee = oscard.bind(tangon)(yankee);
        romeon = yankee.Text;
        yankee = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'text-brand'};
        backup = verify.noTouchContainer;
        yankee['style'] = backup;
        backup = 14;
        kiloes = offset[backup];
        kiloes = oscard.bind(tangon)(kiloes);
        output = kiloes.intl;
        sizing = output.formatToPlainString;
        backup = offset[backup];
        backup = oscard.bind(tangon)(backup);
        backup = backup.t;
        kiloes = backup.66UdFh;
        backup = {};
        result = result.length;
        backup['unreadsCount'] = result;
        backup = sizing.bind(output)(kiloes, backup);
        yankee['children'] = backup;
        yankee = foxtra.bind(tangon)(romeon, yankee);
        entity['label'] = yankee;
        golfie = _closure1_slot12;
        report = offset[report];
        report = oscard.bind(tangon)(report);
        oscard = report.Text;
        report = {'style': null, 'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'text-muted'};
        verify = verify.noTouchContainer;
        report['style'] = verify;
        report['children'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['subLabel'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: MentionRow
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            yankee = michal.message;
            var _closure2_slot0 = yankee;
            michal = _closure1_slot15;
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
            sequen = golfie.bind(option)(oscard, zuuluu);
            var _closure2_slot2 = sequen;
            option = _closure1_slot4;
            golfie = option.useMemo;
            oscard = new Array(2);
            oscard[0] = sequen;
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
            ctrled = null;
            oscard = ctrled == sequen;
            zuuluu = undefined;
            if(oscard) { _fun00010_ip = 194; continue _fun00009 }
 189:
            zuuluu = sequen.id;
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
            option = _closure1_slot2;
            zuuluu = 13;
            zuuluu = golfie[zuuluu];
            verify = option.bind(tangon)(zuuluu);
            option = verify.getParser;
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.bind(tangon)();
            backup = option.bind(verify)(zuuluu);
            zuuluu = 21;
            zuuluu = golfie[zuuluu];
            option = oscard.bind(tangon)(zuuluu);
            golfie = option.useName;
            zuuluu = ctrled == sequen;
            oscard = undefined;
            if(zuuluu) { _fun00010_ip = 328; continue _fun00009 }
 323:
            oscard = sequen.id;
 328:
            verify = ctrled == michal;
            zuuluu = undefined;
            if(verify) { _fun00010_ip = 342; continue _fun00009 }
 337:
            zuuluu = michal.id;
 342:
            michal = yankee.author;
            config = golfie.bind(option)(oscard, zuuluu, michal);
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
            zuuluu = ctrled == michal;
            source = undefined;
            if(zuuluu) { _fun00010_ip = 417; continue _fun00009 }
 411:
            source = michal.colorString;
 417:
            if(!(ctrled == source)) { _fun00010_ip = 456; continue _fun00009 }
 421:
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            michal = 22;
            michal = report[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.int2hex;
            michal = _closure1_slot11;
            source = zuuluu.bind(report)(michal);
 456:
            report = _closure1_slot4;
            zuuluu = report.useCallback;
            michal = ctrled == sequen;
            oscard = undefined;
            if(michal) { _fun00010_ip = 479; continue _fun00009 }
 474:
            oscard = sequen.id;
 479:
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
            foxtra = ctrled == sequen;
            offset = undefined;
            if(foxtra) { _fun00010_ip = 579; continue _fun00009 }
 574:
            offset = sequen.id;
 579:
            oscard['guildId'] = offset;
            offset = yankee.author;
            oscard['user'] = offset;
            result = _closure1_slot0;
            vacuum = _closure1_slot3;
            verify = vacuum[verify];
            verify = result.bind(tangon)(verify);
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
            verify = vacuum[option];
            verify = result.bind(tangon)(verify);
            offset = verify.Text;
            verify = {'style': null, 'lineClamp': 1, 'variant': 'text-md/medium', 'color': 'header-primary'};
            sizing = kiloes.label;
            verify['style'] = sizing;
            update = _closure1_slot12;
            sizing = vacuum[option];
            sizing = result.bind(tangon)(sizing);
            output = sizing.Text;
            sizing = {};
            echoed = {};
            echoed['color'] = source;
            sizing['style'] = echoed;
            echoed = 'text-md/semibold';
            sizing['variant'] = echoed;
            echoed = 16;
            echoed = vacuum[echoed];
            source = result.bind(tangon)(echoed);
            echoed = source.truncateUsername;
            source = echoed.bind(source)(config);
            echoed = ' ';
            source = source + echoed;
            sizing['children'] = source;
            output = update.bind(tangon)(output, sizing);
            sizing = new Array(2);
            sizing[0] = output;
            output = 14;
            update = vacuum[output];
            update = result.bind(tangon)(update);
            source = update.intl;
            update = source.formatToPlainString;
            output = vacuum[output];
            output = result.bind(tangon)(output);
            output = output.t;
            result = output.jM1jAA;
            output = {};
            config = ctrled == sequen;
            vacuum = undefined;
            if(config) { _fun00010_ip = 881; continue _fun00009 }
 876:
            vacuum = sequen.name;
 881:
            sequen = ctrled != vacuum;
            ctrled = '';
            if(!sequen) { _fun00010_ip = 895; continue _fun00009 }
 892:
            ctrled = vacuum;
 895:
            output['guildName'] = ctrled;
            output = update.bind(source)(result, output);
            sizing[1] = output;
            verify['children'] = sizing;
            verify = foxtra.bind(tangon)(offset, verify);
            offset = new Array(2);
            offset[0] = verify;
            update = _closure1_slot12;
            verify = _closure1_slot0;
            sizing = _closure1_slot3;
            foxtra = sizing[option];
            foxtra = verify.bind(tangon)(foxtra);
            result = foxtra.Text;
            output = {'style': null, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            foxtra = kiloes.timestamp;
            output['style'] = foxtra;
            foxtra = 24;
            foxtra = sizing[foxtra];
            vacuum = verify.bind(tangon)(foxtra);
            ctrled = vacuum.getRelativeTimestamp;
            foxtra = _closure1_slot1;
            source = 25;
            source = sizing[source];
            config = foxtra.bind(tangon)(source);
            sequen = config.extractTimestamp;
            source = yankee.id;
            source = sequen.bind(config)(source);
            source = ctrled.bind(vacuum)(source);
            output['children'] = source;
            output = update.bind(tangon)(result, output);
            offset[1] = output;
            report['children'] = offset;
            report = golfie.bind(tangon)(oscard, report);
            entity['label'] = report;
            golfie = _closure1_slot13;
            oscard = _closure1_slot5;
            report = {};
            output = kiloes.textContainer;
            offset = new Array(3);
            offset[0] = output;
            output = kiloes.noTouchContainer;
            offset[2] = output;
            report['style'] = offset;
            offset = _closure1_slot12;
            option = sizing[option];
            option = verify.bind(tangon)(option);
            verify = option.Text;
            option = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/normal', 'color': 'header-muted'};
            output = kiloes.label;
            option['style'] = output;
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
    var _closure1_slot19 = entity;
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
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot12 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
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
    var _closure1_slot14 = golfie;
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
    romeon = romeon.STATUS_DANGER;
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
    var _closure1_slot15 = tangon;
    tangon = 30;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/icymi/native/ICYMIMentionsRow.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ICYMIMentionsRow
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            entity = entity.messages;
            var _closure2_slot0 = entity;
            michal = _closure1_slot15;
            tangon = undefined;
            sizing = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            michal = 27;
            michal = report[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.useICYMISearchExperienceExperiment;
            michal = 'ICYMIMentionsRow';
            michal = zuuluu.bind(report)(michal);
            report = michal.searchEnabled;
            oscard = _closure1_slot4;
            zuuluu = oscard.useMemo;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                tangon = _closure2_slot0;
                verify = tangon.slice;
                oscard = _closure1_slot0;
                golfie = _closure1_slot3;
                michal = 28;
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
            entity = zuuluu.bind(oscard)(entity, michal);
            romeon = entity.displayMessages;
            backup = entity.remainingMessages;
            zuuluu = _closure1_slot13;
            michal = _closure1_slot5;
            entity = {};
            oscard = sizing.container;
            entity['style'] = oscard;
            oscard = null;
            if(report) { _fun00022_ip = 219; continue _fun00021 }
 137:
            option = _closure1_slot12;
            golfie = _closure1_slot5;
            report = {};
            offset = sizing.arrowContainer;
            report['style'] = offset;
            kiloes = _closure1_slot12;
            foxtra = _closure1_slot5;
            offset = {};
            output = sizing.arrow;
            sizing = new Array(2);
            sizing[0] = output;
            output = {'borderLeftWidth': 12, 'borderRightWidth': 12, 'borderBottomWidth': 12};
            sizing[1] = output;
            offset['style'] = sizing;
            offset = kiloes.bind(tangon)(foxtra, offset);
            report['children'] = offset;
            oscard = option.bind(tangon)(golfie, report);
 219:
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot13;
            golfie = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 29;
            oscard = offset[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.TableRowGroup;
            oscard = {};
            offset = romeon.map;
            verify = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot12;
                tangon = _closure1_slot19;
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
            if(!offset) { _fun00022_ip = 319; continue _fun00021 }
 298:
            foxtra = _closure1_slot12;
            romeon = _closure1_slot18;
            yankee = {};
            yankee['messages'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 319:
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