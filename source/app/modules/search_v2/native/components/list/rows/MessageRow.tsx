// app/modules/search_v2/native/components/list/rows/MessageRow.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: GuildChannelMessageRowHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            option = michal.channel;
            var _closure2_slot0 = option;
            verify = michal.muted;
            oscard = michal.isFavorite;
            michal = _closure1_slot12;
            tangon = undefined;
            romeon = michal.bind(tangon)();
            yankee = _closure1_slot0;
            sizing = _closure1_slot2;
            michal = 10;
            michal = sizing[michal];
            report = yankee.bind(tangon)(michal);
            zuuluu = report.useStateFromStores;
            offset = _closure1_slot8;
            michal = new Array(1);
            michal[0] = offset;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.getGuild;
                    entity = _closure2_slot0;
                    entity = entity.guild_id;
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00004_ip = 46; continue _fun00003 }
 40:
                    entity = michal.rulesChannelId;
 46:
                    return entity;
                }
            };
            offset = zuuluu.bind(report)(michal, entity);
            entity = 11;
            entity = sizing[entity];
            zuuluu = yankee.bind(tangon)(entity);
            michal = zuuluu.getChannelIcon;
            entity = {};
            report = option.id;
            report = offset === report;
            entity['isRulesChannel'] = report;
            output = michal.bind(zuuluu)(option, entity);
            result = _closure1_slot1;
            entity = 12;
            entity = sizing[entity];
            entity = result.bind(tangon)(entity);
            backup = entity.bind(tangon)(option);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot4;
            entity = {};
            report = romeon.header;
            entity['style'] = report;
            foxtra = _closure1_slot10;
            kiloes = 13;
            report = sizing[kiloes];
            offset = result.bind(tangon)(report);
            report = {};
            report['source'] = output;
            output = sizing[kiloes];
            output = result.bind(tangon)(output);
            output = output.Sizes;
            output = output.REFRESH_SMALL_16;
            report['size'] = output;
            output = romeon.channelIcon;
            report['style'] = output;
            offset = foxtra.bind(tangon)(offset, report);
            report = new Array(5);
            report[0] = offset;
            foxtra = _closure1_slot10;
            offset = 14;
            offset = sizing[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.Text;
            offset = {'lineClamp': 1, 'variant': 'text-sm/semibold', 'color': 'interactive-normal'};
            sizing = romeon.channelName;
            offset['style'] = sizing;
            offset['children'] = backup;
            offset = foxtra.bind(tangon)(yankee, offset);
            report[1] = offset;
            if(!verify) { _fun00002_ip = 382; continue _fun00001 }
 302:
            foxtra = _closure1_slot10;
            sizing = _closure1_slot1;
            backup = _closure1_slot2;
            offset = backup[kiloes];
            yankee = sizing.bind(tangon)(offset);
            offset = {};
            output = 15;
            output = backup[output];
            output = sizing.bind(tangon)(output);
            offset['source'] = output;
            backup = backup[kiloes];
            backup = sizing.bind(tangon)(backup);
            backup = backup.Sizes;
            backup = backup.EXTRA_SMALL;
            offset['size'] = backup;
            backup = romeon.channelStatus;
            offset['style'] = backup;
            verify = foxtra.bind(tangon)(yankee, offset);
 382:
            report[2] = verify;
            if(!oscard) { _fun00002_ip = 469; continue _fun00001 }
 389:
            yankee = _closure1_slot10;
            backup = _closure1_slot1;
            foxtra = _closure1_slot2;
            verify = foxtra[kiloes];
            offset = backup.bind(tangon)(verify);
            verify = {};
            sizing = 16;
            sizing = foxtra[sizing];
            sizing = backup.bind(tangon)(sizing);
            verify['source'] = sizing;
            foxtra = foxtra[kiloes];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.Sizes;
            foxtra = foxtra.EXTRA_SMALL;
            verify['size'] = foxtra;
            romeon = romeon.channelStatus;
            verify['style'] = romeon;
            oscard = yankee.bind(tangon)(offset, verify);
 469:
            report[3] = oscard;
            oscard = option.isSystemDM;
            oscard = oscard.bind(option)();
            if(!oscard) { _fun00002_ip = 550; continue _fun00001 }
 486:
            verify = _closure1_slot10;
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            offset = 17;
            golfie = romeon[offset];
            option = yankee.bind(tangon)(golfie);
            golfie = {};
            offset = romeon[offset];
            offset = yankee.bind(tangon)(offset);
            offset = offset.Types;
            offset = offset.SYSTEM_DM;
            golfie['type'] = offset;
            offset = true;
            golfie['verified'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 550:
            report[4] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: MessageRowIcon
        entity = argFoo;
        report = entity.message;
        verify = entity.channel;
        tangon = _closure1_slot10;
        michal = _closure1_slot1;
        option = _closure1_slot2;
        oscard = 18;
        entity = option[oscard];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        offset = report.author;
        entity['user'] = offset;
        verify = verify.guild_id;
        entity['guildId'] = verify;
        golfie = _closure1_slot0;
        oscard = option[oscard];
        oscard = golfie.bind(zuuluu)(oscard);
        oscard = oscard.AvatarSizes;
        oscard = oscard.LARGE_48;
        entity['size'] = oscard;
        report = report.author;
        report = report.avatarDecoration;
        entity['avatarDecoration'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: PrivateChannelMessageRowLabel
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            verify = michal.message;
            var _closure2_slot0 = verify;
            result = michal.channel;
            var _closure2_slot1 = result;
            foxtra = michal.muted;
            michal = _closure1_slot12;
            tangon = undefined;
            offset = michal.bind(tangon)();
            oscard = _closure1_slot3;
            report = oscard.useMemo;
            michal = verify.author;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 19;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getName;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            sizing = report.bind(oscard)(michal, zuuluu);
            report = _closure1_slot3;
            zuuluu = report.useEffect;
            michal = new Array(1);
            michal[0] = result;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    michal = zuuluu.isDM;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00008_ip = 34; continue _fun00007 }
 20:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.isGroupDM;
                    michal = zuuluu.bind(tangon)();
 34:
                    if(!michal) { _fun00008_ip = 66; continue _fun00007 }
 37:
                    entity = _closure2_slot1;
                    zuuluu = entity.recipients;
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 20;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.getUser;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
 66:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot4;
            entity = {};
            report = offset.labelContainer;
            entity['style'] = report;
            yankee = _closure1_slot11;
            option = _closure1_slot4;
            report = {};
            oscard = offset.channelName;
            report['style'] = oscard;
            kiloes = _closure1_slot10;
            backup = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 14;
            romeon = romeon[oscard];
            romeon = backup.bind(tangon)(romeon);
            backup = romeon.Text;
            romeon = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'interactive-active'};
            output = offset.channelName;
            romeon['style'] = output;
            romeon['children'] = sizing;
            backup = kiloes.bind(tangon)(backup, romeon);
            romeon = new Array(3);
            romeon[0] = backup;
            if(!foxtra) { _fun00006_ip = 305; continue _fun00005 }
 222:
            sizing = _closure1_slot10;
            echoed = _closure1_slot1;
            update = _closure1_slot2;
            output = 13;
            backup = update[output];
            kiloes = echoed.bind(tangon)(backup);
            backup = {};
            source = 15;
            source = update[source];
            source = echoed.bind(tangon)(source);
            backup['source'] = source;
            output = update[output];
            output = echoed.bind(tangon)(output);
            output = output.Sizes;
            output = output.EXTRA_SMALL;
            backup['size'] = output;
            output = offset.channelStatus;
            backup['style'] = output;
            foxtra = sizing.bind(tangon)(kiloes, backup);
 305:
            romeon[1] = foxtra;
            foxtra = result.isSystemDM;
            foxtra = foxtra.bind(result)();
            if(!foxtra) { _fun00006_ip = 386; continue _fun00005 }
 322:
            sizing = _closure1_slot10;
            echoed = _closure1_slot1;
            update = _closure1_slot2;
            output = 17;
            backup = update[output];
            kiloes = echoed.bind(tangon)(backup);
            backup = {};
            output = update[output];
            output = echoed.bind(tangon)(output);
            output = output.Types;
            output = output.SYSTEM_DM;
            backup['type'] = output;
            output = true;
            backup['verified'] = output;
            foxtra = sizing.bind(tangon)(kiloes, backup);
 386:
            romeon[2] = foxtra;
            report['children'] = romeon;
            option = yankee.bind(tangon)(option, report);
            report = new Array(3);
            report[0] = option;
            romeon = _closure1_slot10;
            foxtra = _closure1_slot0;
            sizing = _closure1_slot2;
            oscard = sizing[oscard];
            oscard = foxtra.bind(tangon)(oscard);
            yankee = oscard.Text;
            option = {'variant': 'text-xs/medium', 'color': 'interactive-active', 'lineClamp': 1};
            oscard = offset.timestamp;
            option['style'] = oscard;
            oscard = 21;
            oscard = sizing[oscard];
            kiloes = foxtra.bind(tangon)(oscard);
            backup = kiloes.getRelativeTimestamp;
            foxtra = _closure1_slot1;
            oscard = 22;
            oscard = sizing[oscard];
            output = foxtra.bind(tangon)(oscard);
            sizing = output.extractTimestamp;
            foxtra = verify.id;
            oscard = null;
            if(!(oscard == foxtra)) { _fun00006_ip = 514; continue _fun00005 }
 509:
            foxtra = result.id;
 514:
            foxtra = sizing.bind(output)(foxtra);
            foxtra = backup.bind(kiloes)(foxtra);
            option['children'] = foxtra;
            option = romeon.bind(tangon)(yankee, option);
            report[1] = option;
            option = verify.isPoll;
            option = option.bind(verify)();
            oscard = null;
            if(!option) { _fun00006_ip = 595; continue _fun00005 }
 553:
            verify = _closure1_slot10;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 23;
            golfie = yankee[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            offset = offset.pollBadge;
            golfie['style'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 595:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: GuildChannelMessageRowLabel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            verify = entity.message;
            result = entity.channel;
            entity = _closure1_slot12;
            tangon = undefined;
            offset = entity.bind(tangon)();
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            oscard = michal.bind(tangon)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot5;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = _closure1_slot5;
                entity = entity.roleStyle;
                return entity;
            };
            romeon = report.bind(oscard)(michal, entity);
            michal = _closure1_slot1;
            entity = 24;
            entity = zuuluu[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.bind(tangon)(verify);
            echoed = entity.nick;
            kiloes = entity.colorString;
            entity = 'username';
            if(!(entity === romeon)) { _fun00010_ip = 125; continue _fun00009 }
 119:
            entity = null;
            if(!(entity == kiloes)) { _fun00010_ip = 129; continue _fun00009 }
 125:
            update = {};
            _fun00010_ip = 138; continue _fun00009;
 129:
            entity = {};
            entity['color'] = kiloes;
            update = entity;
 138:
            zuuluu = _closure1_slot11;
            michal = _closure1_slot4;
            entity = {};
            report = offset.labelContainer;
            entity['style'] = report;
            yankee = _closure1_slot11;
            option = _closure1_slot4;
            report = {};
            oscard = offset.channelName;
            report['style'] = oscard;
            oscard = 'dot';
            oscard = oscard === romeon;
            if(!oscard) { _fun00010_ip = 195; continue _fun00009 }
 189:
            romeon = null;
            oscard = romeon != kiloes;
 195:
            if(!oscard) { _fun00010_ip = 248; continue _fun00009 }
 198:
            backup = _closure1_slot10;
            foxtra = _closure1_slot0;
            sizing = _closure1_slot2;
            romeon = 25;
            romeon = sizing[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.RoleDot;
            romeon = {};
            sizing = 'small';
            romeon['size'] = sizing;
            romeon['color'] = kiloes;
            oscard = backup.bind(tangon)(foxtra, romeon);
 248:
            romeon = new Array(2);
            romeon[0] = oscard;
            output = _closure1_slot10;
            foxtra = _closure1_slot0;
            sizing = _closure1_slot2;
            oscard = 14;
            backup = sizing[oscard];
            backup = foxtra.bind(tangon)(backup);
            kiloes = backup.Text;
            backup = {'variant': 'text-sm/semibold', 'color': 'interactive-active', 'lineClamp': 1};
            backup['style'] = update;
            backup['children'] = echoed;
            backup = output.bind(tangon)(kiloes, backup);
            romeon[1] = backup;
            report['children'] = romeon;
            option = yankee.bind(tangon)(option, report);
            report = new Array(3);
            report[0] = option;
            romeon = _closure1_slot10;
            oscard = sizing[oscard];
            oscard = foxtra.bind(tangon)(oscard);
            yankee = oscard.Text;
            option = {'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': 1};
            oscard = offset.timestamp;
            option['style'] = oscard;
            oscard = 21;
            oscard = sizing[oscard];
            kiloes = foxtra.bind(tangon)(oscard);
            backup = kiloes.getRelativeTimestamp;
            foxtra = _closure1_slot1;
            oscard = 22;
            oscard = sizing[oscard];
            output = foxtra.bind(tangon)(oscard);
            sizing = output.extractTimestamp;
            foxtra = verify.id;
            oscard = null;
            if(!(oscard == foxtra)) { _fun00010_ip = 429; continue _fun00009 }
 424:
            foxtra = result.id;
 429:
            foxtra = sizing.bind(output)(foxtra);
            foxtra = backup.bind(kiloes)(foxtra);
            option['children'] = foxtra;
            option = romeon.bind(tangon)(yankee, option);
            report[1] = option;
            option = verify.isPoll;
            option = option.bind(verify)();
            oscard = null;
            if(!option) { _fun00010_ip = 510; continue _fun00009 }
 468:
            verify = _closure1_slot10;
            option = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 23;
            golfie = yankee[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {};
            offset = offset.pollBadge;
            golfie['style'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 510:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    var _closure1_slot3 = golfie;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.Platform;
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    option = oscard[tangon];
    option = report.bind(entity)(option);
    option = option.jsx;
    var _closure1_slot10 = option;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    yankee = 8;
    tangon = oscard[yankee];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'marginRight': 5, 'alignSelf': 'center'};
    tangon['channelIcon'] = offset;
    offset = {'marginLeft': 5, 'alignSelf': 'center'};
    romeon = 9;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.INTERACTIVE_NORMAL;
    offset['tintColor'] = romeon;
    tangon['channelStatus'] = offset;
    romeon = 'row';
    offset = {'flexDirection': 'row', 'width': '100%', 'marginBottom': 2};
    tangon['labelContainer'] = offset;
    offset = {};
    offset['flexDirection'] = romeon;
    tangon['channelName'] = offset;
    offset = {};
    offset['marginLeft'] = yankee;
    tangon['timestamp'] = offset;
    offset = {'marginLeft': 8, 'opacity': 0.8};
    tangon['timestampMuted'] = offset;
    offset = {'flexDirection': 'row', 'marginRight': 16, 'marginBottom': 12};
    tangon['header'] = offset;
    offset = {};
    romeon = 'flex-start';
    offset['alignItems'] = romeon;
    tangon['body'] = offset;
    offset = {};
    offset['marginLeft'] = yankee;
    tangon['pollBadge'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot12 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: MessageRow
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            sizing = entity.message;
            var _closure2_slot0 = sizing;
            zuuluu = entity.onPress;
            var _closure2_slot1 = zuuluu;
            romeon = entity.lineClamp;
            yankee = entity.messageSizeCacheRef;
            report = undefined;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            entity = _closure1_slot12;
            oscard = entity.bind(report)();
            tangon = _closure1_slot0;
            entity = _closure1_slot2;
            verify = 10;
            entity = entity[verify];
            offset = tangon.bind(report)(entity);
            golfie = offset.useStateFromStores;
            entity = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = entity.channel_id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            foxtra = golfie.bind(offset)(tangon, entity);
            var _closure2_slot2 = foxtra;
            entity = null;
            golfie = entity == foxtra;
            tangon = undefined;
            if(golfie) { _fun00012_ip = 130; continue _fun00011 }
 125:
            tangon = foxtra.guild_id;
 130:
            _closure2_slot3 = tangon;
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            offset = tangon[verify];
            output = golfie.bind(report)(offset);
            kiloes = output.useStateFromStores;
            offset = _closure1_slot6;
            backup = new Array(1);
            backup[0] = offset;
            offset = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    entity = entity != zuuluu;
                    if(!entity) { _fun00014_ip = 43; continue _fun00013 }
 16:
                    tangon = _closure1_slot6;
                    zuuluu = tangon.isFavorite;
                    michal = _closure2_slot0;
                    michal = michal.channel_id;
                    entity = zuuluu.bind(tangon)(michal);
 43:
                    return entity;
                }
            };
            offset = kiloes.bind(output)(backup, offset);
            _closure2_slot4 = offset;
            tangon = tangon[verify];
            backup = golfie.bind(report)(tangon);
            verify = backup.useStateFromStores;
            tangon = _closure1_slot9;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = function() {
                tangon = _closure1_slot9;
                zuuluu = tangon.isChannelMuted;
                michal = _closure2_slot3;
                entity = _closure2_slot0;
                entity = entity.channel_id;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            result = verify.bind(backup)(golfie, tangon);
            _closure2_slot5 = result;
            verify = _closure1_slot3;
            golfie = verify.useCallback;
            backup = sizing.channel_id;
            tangon = new Array(3);
            tangon[0] = backup;
            backup = sizing.id;
            tangon[1] = backup;
            tangon[2] = zuuluu;
            zuuluu = function() {
                tangon = _closure2_slot1;
                entity = _closure2_slot0;
                zuuluu = entity.channel_id;
                michal = entity.id;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            golfie = golfie.bind(verify)(zuuluu, tangon);
            backup = _closure1_slot3;
            verify = backup.useMemo;
            tangon = entity == foxtra;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 299; continue _fun00011 }
 294:
            zuuluu = foxtra.guild_id;
 299:
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = null;
                    tangon = michal == entity;
                    entity = undefined;
                    if(tangon) { _fun00016_ip = 27; continue _fun00015 }
 18:
                    zuuluu = _closure2_slot2;
                    entity = zuuluu.guild_id;
 27:
                    if(!(michal != entity)) { _fun00016_ip = 40; continue _fun00015 }
 31:
                    entity = _closure1_slot16;
                    _fun00016_ip = 47; continue _fun00015;
 40:
                    entity = _closure1_slot15;
 47:
                    return entity;
                }
            };
            output = verify.bind(backup)(zuuluu, tangon);
            verify = _closure1_slot3;
            tangon = verify.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = foxtra;
            zuuluu[1] = offset;
            zuuluu[2] = result;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot2;
                    entity = null;
                    zuuluu = entity == michal;
                    report = undefined;
                    michal = undefined;
                    if(zuuluu) { _fun00018_ip = 29; continue _fun00017 }
 20:
                    zuuluu = _closure2_slot2;
                    michal = zuuluu.guild_id;
 29:
                    michal = entity != michal;
                    entity = null;
                    if(!michal) { _fun00018_ip = 83; continue _fun00017 }
 38:
                    tangon = _closure1_slot10;
                    zuuluu = _closure1_slot13;
                    michal = {};
                    golfie = _closure2_slot2;
                    michal['channel'] = golfie;
                    golfie = _closure2_slot5;
                    michal['muted'] = golfie;
                    oscard = _closure2_slot4;
                    michal['isFavorite'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 83:
                    return entity;
                }
            };
            verify = tangon.bind(verify)(michal, zuuluu);
            michal = entity == foxtra;
            entity = null;
            if(michal) { _fun00012_ip = 582; continue _fun00011 }
 370:
            tangon = _closure1_slot10;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 26;
            michal = kiloes[michal];
            michal = backup.bind(report)(michal);
            zuuluu = michal.SearchListRow;
            michal = {};
            michal['header'] = verify;
            echoed = _closure1_slot10;
            offset = _closure1_slot14;
            verify = {};
            verify['message'] = sizing;
            verify['channel'] = foxtra;
            verify = echoed.bind(report)(offset, verify);
            michal['icon'] = verify;
            offset = _closure1_slot10;
            verify = {};
            verify['message'] = sizing;
            verify['channel'] = foxtra;
            verify['muted'] = result;
            verify = offset.bind(report)(output, verify);
            michal['label'] = verify;
            offset = _closure1_slot10;
            option = 27;
            option = kiloes[option];
            option = backup.bind(report)(option);
            verify = option.SearchChannelRowPreview;
            option = {};
            option['message'] = sizing;
            option['channel'] = foxtra;
            foxtra = false;
            option['muted'] = foxtra;
            foxtra = 28;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(report)(foxtra);
            foxtra = foxtra.ChannelListLayoutTypes;
            foxtra = foxtra.COZY;
            option['layout'] = foxtra;
            foxtra = 'interactive-normal';
            option['color'] = foxtra;
            option['lineClamp'] = romeon;
            option['messageSizeCacheRef'] = yankee;
            option = offset.bind(report)(verify, option);
            michal['subLabel'] = option;
            michal['onPress'] = golfie;
            oscard = oscard.body;
            michal['bodyStyle'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 582:
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 29;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/components/list/rows/MessageRow.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();