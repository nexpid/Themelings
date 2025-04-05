// app/modules/launchpad/native/LaunchPadUnreadServers.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    foxtra = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = foxtra;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: HistorySeparator
        entity = _closure1_slot12;
        tangon = undefined;
        option = entity.bind(tangon)();
        zuuluu = _closure1_slot10;
        michal = _closure1_slot5;
        entity = {};
        oscard = option.guildHistorySeparatorWrapper;
        entity['style'] = oscard;
        golfie = _closure1_slot10;
        oscard = _closure1_slot5;
        report = {};
        option = option.guildHistorySeparator;
        report['style'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: renderHistorySection
        tangon = _closure1_slot10;
        zuuluu = _closure1_slot15;
        michal = undefined;
        entity = {};
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
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
    option = tangon.bind(entity)(golfie);
    var _closure1_slot3 = option;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Pressable;
    var _closure1_slot4 = golfie;
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = foxtra.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ChannelTypes;
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot10 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    offset = report.bind(entity)(tangon);
    verify = offset.createStyles;
    golfie = {};
    tangon = {};
    romeon = 8;
    tangon['marginTop'] = romeon;
    golfie['listWrapper'] = tangon;
    tangon = {'marginBottom': 4, 'flexShrink': 0};
    golfie['list'] = tangon;
    tangon = {};
    yankee = oscard[romeon];
    yankee = foxtra.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_PRIMARY;
    tangon['backgroundColor'] = yankee;
    golfie['maskStrokeStyle'] = tangon;
    tangon = {'position': 'relative', 'paddingVertical': 2, 'justifyContent': 'center', 'alignItems': 'center'};
    golfie['privateChannelWrapper'] = tangon;
    tangon = 24;
    yankee = {'width': 48, 'height': 48, 'borderRadius': 24, 'overflow': 'hidden'};
    golfie['privateChannelIcon'] = yankee;
    yankee = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginLeft': 6, 'marginTop': 6};
    golfie['badgeWrapper'] = yankee;
    yankee = {'paddingVertical': 2, 'justifyContent': 'center', 'alignItems': 'center'};
    golfie['guildWrapper'] = yankee;
    yankee = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center'};
    golfie['guildHistorySeparatorWrapper'] = yankee;
    yankee = {'width': 2, 'height': 32};
    backup = oscard[romeon];
    backup = foxtra.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.round;
    yankee['borderRadius'] = backup;
    romeon = oscard[romeon];
    romeon = foxtra.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BG_MOD_STRONG;
    yankee['backgroundColor'] = romeon;
    golfie['guildHistorySeparator'] = yankee;
    golfie = verify.bind(offset)(golfie);
    var _closure1_slot12 = golfie;
    verify = option.memo;
    golfie = function(argFoo) { // Original name: GuildItemInner
        michal = argFoo;
        romeon = michal.guildId;
        var _closure2_slot0 = romeon;
        yankee = michal.selected;
        michal = michal.onGuildSelect;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot12;
        tangon = undefined;
        option = zuuluu.bind(tangon)();
        oscard = _closure1_slot3;
        golfie = oscard.useCallback;
        zuuluu = new Array(2);
        zuuluu[0] = romeon;
        zuuluu[1] = michal;
        michal = function() {
            zuuluu = _closure2_slot1;
            michal = _closure2_slot0;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        offset = golfie.bind(oscard)(michal, zuuluu);
        zuuluu = oscard.useCallback;
        michal = new Array(1);
        michal[0] = romeon;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.transitionToGuild;
            michal = _closure2_slot0;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        verify = zuuluu.bind(oscard)(entity, michal);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot5;
        entity = {};
        oscard = option.guildWrapper;
        entity['style'] = oscard;
        golfie = _closure1_slot10;
        oscard = _closure1_slot1;
        foxtra = _closure1_slot2;
        report = 10;
        report = foxtra[report];
        oscard = oscard.bind(tangon)(report);
        report = {'size': 48, 'borderRadius': 16};
        report['guildId'] = romeon;
        report['selected'] = yankee;
        report['onPress'] = offset;
        report['onLongPress'] = verify;
        option = option.maskStrokeStyle;
        option = option.backgroundColor;
        report['backgroundColor'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    golfie = verify.bind(option)(golfie);
    var _closure1_slot13 = golfie;
    verify = option.memo;
    golfie = function(argFoo) { // Original name: PrivateChannelItemInner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.channelId;
            var _closure2_slot0 = entity;
            entity = _closure1_slot12;
            report = undefined;
            backup = entity.bind(report)();
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 11;
            michal = oscard[entity];
            verify = tangon.bind(report)(michal);
            option = verify.useStateFromStores;
            michal = _closure1_slot6;
            golfie = new Array(1);
            golfie[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = option.bind(verify)(golfie, michal);
            var _closure2_slot1 = michal;
            golfie = oscard[entity];
            offset = tangon.bind(report)(golfie);
            verify = offset.useStateFromStores;
            golfie = _closure1_slot8;
            option = new Array(1);
            option[0] = golfie;
            golfie = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    entity = undefined;
                    if(!zuuluu) { _fun00004_ip = 69; continue _fun00003 }
 18:
                    report = _closure2_slot1;
                    zuuluu = report.isPrivate;
                    zuuluu = zuuluu.bind(report)();
                    entity = undefined;
                    if(!zuuluu) { _fun00004_ip = 69; continue _fun00003 }
 37:
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getUser;
                    report = _closure2_slot1;
                    michal = report.getRecipientId;
                    michal = michal.bind(report)();
                    entity = zuuluu.bind(tangon)(michal);
 69:
                    return entity;
                }
            };
            verify = verify.bind(offset)(option, golfie);
            var _closure2_slot2 = verify;
            entity = oscard[entity];
            golfie = tangon.bind(report)(entity);
            oscard = golfie.useStateFromStores;
            entity = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = entity;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    entity = 0;
                    if(!zuuluu) { _fun00006_ip = 45; continue _fun00005 }
 18:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getMentionCount;
                    michal = _closure2_slot1;
                    michal = michal.id;
                    entity = zuuluu.bind(tangon)(michal);
 45:
                    return entity;
                }
            };
            sizing = oscard.bind(golfie)(tangon, entity);
            entity = null;
            tangon = entity == michal;
            oscard = undefined;
            if(tangon) { _fun00002_ip = 179; continue _fun00001 }
 174:
            oscard = michal.type;
 179:
            tangon = _closure1_slot9;
            tangon = tangon.DM;
            if(!(oscard === tangon)) { _fun00002_ip = 200; continue _fun00001 }
 193:
            if(!(entity == verify)) { _fun00002_ip = 385; continue _fun00001 }
 200:
            if(!(entity != michal)) { _fun00002_ip = 217; continue _fun00001 }
 204:
            tangon = michal.isGroupDM;
            tangon = tangon.bind(michal)();
            if(tangon) { _fun00002_ip = 315; continue _fun00001 }
 217:
            tangon = entity != michal;
            golfie = undefined;
            if(!tangon) { _fun00002_ip = 464; continue _fun00001 }
 229:
            option = _closure1_slot10;
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            tangon = 14;
            tangon = foxtra[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            romeon = backup.privateChannelIcon;
            offset = new Array(1);
            offset[0] = romeon;
            tangon['style'] = offset;
            romeon = _closure1_slot0;
            offset = 15;
            offset = foxtra[offset];
            romeon = romeon.bind(report)(offset);
            offset = romeon.getChannelIconSource;
            offset = offset.bind(romeon)(michal);
            tangon['source'] = offset;
            golfie = option.bind(report)(oscard, tangon);
            _fun00002_ip = 464; continue _fun00001;
 315:
            option = _closure1_slot10;
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            tangon = 13;
            tangon = foxtra[tangon];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            tangon['channel'] = michal;
            romeon = _closure1_slot0;
            offset = 12;
            offset = foxtra[offset];
            offset = romeon.bind(report)(offset);
            offset = offset.AvatarSizes;
            offset = offset.LARGE_48;
            tangon['size'] = offset;
            golfie = option.bind(report)(oscard, tangon);
            _fun00002_ip = 464; continue _fun00001;
 385:
            option = _closure1_slot10;
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 12;
            tangon = foxtra[offset];
            oscard = oscard.bind(report)(tangon);
            tangon = {};
            romeon = backup.privateChannelIcon;
            tangon['style'] = romeon;
            tangon['user'] = verify;
            tangon['guildId'] = report;
            romeon = _closure1_slot0;
            offset = foxtra[offset];
            offset = romeon.bind(report)(offset);
            offset = offset.AvatarSizes;
            offset = offset.LARGE_48;
            tangon['size'] = offset;
            golfie = option.bind(report)(oscard, tangon);
 464:
            option = _closure1_slot3;
            oscard = option.useCallback;
            tangon = new Array(2);
            tangon[0] = verify;
            tangon[1] = michal;
            zuuluu = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    tangon = null;
                    if(!(tangon != michal)) { _fun00008_ip = 154; continue _fun00007 }
 16:
                    michal = _closure2_slot1;
                    report = michal.type;
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.DM;
                    if(!(report === zuuluu)) { _fun00008_ip = 50; continue _fun00007 }
 42:
                    zuuluu = _closure2_slot2;
                    if(!(tangon == zuuluu)) { _fun00008_ip = 104; continue _fun00007 }
 50:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 17;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.transitionToChannel;
                    zuuluu = _closure2_slot1;
                    tangon = zuuluu.id;
                    zuuluu = {};
                    golfie = true;
                    zuuluu['navigationReplace'] = golfie;
                    zuuluu = report.bind(oscard)(tangon, zuuluu);
                    _fun00008_ip = 154; continue _fun00007;
 104:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 16;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.openPrivateChannel;
                    entity = _closure2_slot2;
                    tangon = entity.id;
                    entity = new Array(1);
                    entity[0] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 154:
                    entity = undefined;
                    return entity;
                }
            };
            oscard = oscard.bind(option)(zuuluu, tangon);
            michal = entity != michal;
            entity = null;
            if(!michal) { _fun00002_ip = 666; continue _fun00001 }
 510:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot4;
            michal = {};
            michal['onPress'] = oscard;
            oscard = backup.privateChannelWrapper;
            michal['style'] = oscard;
            oscard = 'button';
            michal['accessibilityRole'] = oscard;
            kiloes = true;
            michal['accessible'] = kiloes;
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = 0;
            golfie = sizing > golfie;
            if(!golfie) { _fun00002_ip = 652; continue _fun00001 }
 566:
            offset = _closure1_slot10;
            verify = _closure1_slot5;
            option = {};
            romeon = backup.badgeWrapper;
            option['style'] = romeon;
            foxtra = _closure1_slot10;
            romeon = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 18;
            yankee = output[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = {};
            yankee['value'] = sizing;
            yankee['unread'] = kiloes;
            backup = backup.maskStrokeStyle;
            backup = backup.backgroundColor;
            yankee['backgroundColor'] = backup;
            yankee = foxtra.bind(report)(romeon, yankee);
            option['children'] = yankee;
            golfie = offset.bind(report)(verify, option);
 652:
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 666:
            return entity;
        }
    };
    golfie = verify.bind(option)(golfie);
    var _closure1_slot14 = golfie;
    golfie = option.memo;
    michal = function(argFoo) { // Original name: LaunchPadUnreadServers
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            option = zuuluu.selectedGuildId;
            var _closure2_slot0 = option;
            entity = zuuluu.setSelectedGuild;
            var _closure2_slot1 = entity;
            romeon = zuuluu.unreadPrivateChannelIds;
            var _closure2_slot2 = romeon;
            backup = zuuluu.unreadGuilds;
            var _closure2_slot3 = backup;
            foxtra = zuuluu.guildHistory;
            var _closure2_slot4 = foxtra;
            tangon = zuuluu.visible;
            var _closure2_slot5 = tangon;
            zuuluu = _closure1_slot12;
            report = undefined;
            result = zuuluu.bind(report)();
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            yankee = 19;
            zuuluu = zuuluu[yankee];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.bind(report)();
            offset = zuuluu.width;
            oscard = _closure1_slot3;
            golfie = oscard.useRef;
            zuuluu = -1;
            zuuluu = golfie.bind(oscard)(zuuluu);
            var _closure2_slot6 = zuuluu;
            golfie = oscard.useCallback;
            zuuluu = new Array(2);
            zuuluu[0] = entity;
            zuuluu[1] = option;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure2_slot6;
                    tangon = michal.current;
                    michal = 0;
                    if(!(!(tangon >= michal))) { _fun00012_ip = 117; continue _fun00011 }
 21:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 20;
                    tangon = tangon[michal];
                    michal = undefined;
                    tangon = report.bind(michal)(tangon);
                    tangon = tangon.bind(michal)(zuuluu);
                    if(!tangon) { _fun00012_ip = 117; continue _fun00011 }
 54:
                    report = _closure2_slot1;
                    oscard = _closure2_slot0;
                    tangon = undefined;
                    if(!(zuuluu !== oscard)) { _fun00012_ip = 71; continue _fun00011 }
 68:
                    tangon = zuuluu;
 71:
                    tangon = report.bind(michal)(tangon);
                    report = _closure2_slot6;
                    tangon = global;
                    golfie = tangon.setTimeout;
                    oscard = function() {
                        entity = global;
                        tangon = entity.clearTimeout;
                        zuuluu = _closure2_slot6;
                        michal = zuuluu.current;
                        entity = undefined;
                        michal = tangon.bind(entity)(michal);
                        michal = -1;
                        zuuluu['current'] = michal;
                        return entity;
                    };
                    tangon = 400;
                    tangon = golfie.bind(michal)(oscard, tangon);
                    report['current'] = tangon;
                    return michal;
 117:
                    michal = global;
                    report = michal.clearTimeout;
                    michal = _closure2_slot6;
                    entity = michal.current;
                    tangon = undefined;
                    entity = report.bind(tangon)(entity);
                    entity = -1;
                    michal['current'] = entity;
                    michal = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 9;
                    entity = report[entity];
                    michal = michal.bind(tangon)(entity);
                    entity = michal.transitionToGuild;
                    entity = entity.bind(michal)(zuuluu);
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = golfie.bind(oscard)(entity, zuuluu);
            var _closure2_slot7 = zuuluu;
            verify = oscard.useEffect;
            golfie = function() {
                entity = function() {
                    entity = global;
                    zuuluu = entity.clearTimeout;
                    entity = _closure2_slot6;
                    michal = entity.current;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                return entity;
            };
            entity = new Array(0);
            entity = verify.bind(oscard)(golfie, entity);
            golfie = oscard.useRef;
            entity = null;
            echoed = golfie.bind(oscard)(entity);
            var _closure2_slot8 = echoed;
            verify = oscard.useEffect;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot5;
                    if(!michal) { _fun00014_ip = 38; continue _fun00013 }
 10:
                    entity = _closure2_slot8;
                    zuuluu = entity.current;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00014_ip = 38; continue _fun00013 }
 25:
                    michal = zuuluu.scrollToTop;
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
 38:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = verify.bind(oscard)(tangon, golfie);
            golfie = oscard.useCallback;
            tangon = new Array(5);
            tangon[0] = backup;
            tangon[1] = romeon;
            tangon[2] = option;
            tangon[3] = zuuluu;
            tangon[4] = foxtra;
            zuuluu = function(argFoo, argBar) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = argFoo;
                    michal = argBar;
                    entity = 0;
                    if(!(entity !== zuuluu)) { _fun00016_ip = 112; continue _fun00015 }
 12:
                    entity = 1;
                    if(!(!(zuuluu >= entity))) { _fun00016_ip = 23; continue _fun00015 }
 19:
                    tangon = null;
                    return tangon;
 23:
                    if(!(entity !== zuuluu)) { _fun00016_ip = 40; continue _fun00015 }
 27:
                    entity = _closure2_slot4;
                    option = entity[michal];
                    _fun00016_ip = 51; continue _fun00015;
 40:
                    entity = _closure2_slot3;
                    option = entity[michal];
 51:
                    entity = null;
                    entity = entity != option;
                    if(!entity) { _fun00016_ip = 110; continue _fun00015 }
 60:
                    oscard = _closure1_slot10;
                    report = _closure1_slot13;
                    tangon = {};
                    tangon['guildId'] = option;
                    golfie = _closure2_slot0;
                    golfie = golfie === option;
                    tangon['selected'] = golfie;
                    zuuluu = _closure2_slot7;
                    tangon['onGuildSelect'] = zuuluu;
                    zuuluu = undefined;
                    entity = oscard.bind(zuuluu)(report, tangon);
 110:
                    return entity;
 112:
                    entity = _closure2_slot2;
                    michal = entity[michal];
                    entity = null;
                    entity = entity != michal;
                    if(!entity) { _fun00016_ip = 157; continue _fun00015 }
 132:
                    report = _closure1_slot10;
                    tangon = _closure1_slot14;
                    zuuluu = {};
                    zuuluu['channelId'] = michal;
                    michal = undefined;
                    entity = report.bind(michal)(tangon, zuuluu);
 157:
                    return entity;
                }
            };
            output = golfie.bind(oscard)(zuuluu, tangon);
            tangon = oscard.useCallback;
            golfie = backup.length;
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            golfie = romeon.length;
            zuuluu[1] = golfie;
            golfie = foxtra.length;
            zuuluu[2] = golfie;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = 0;
                    tangon = 2;
                    michal = argFoo;
                    entity = 0;
                    if(!(tangon === michal)) { _fun00018_ip = 69; continue _fun00017 }
 14:
                    tangon = _closure2_slot4;
                    tangon = tangon.length;
                    tangon = tangon > zuuluu;
                    entity = 0;
                    if(!tangon) { _fun00018_ip = 69; continue _fun00017 }
 35:
                    tangon = _closure2_slot2;
                    tangon = tangon.length;
                    if(!(!(tangon > zuuluu))) { _fun00018_ip = 66; continue _fun00017 }
 48:
                    michal = _closure2_slot3;
                    michal = michal.length;
                    michal = michal > zuuluu;
                    entity = 0;
                    if(!michal) { _fun00018_ip = 69; continue _fun00017 }
 66:
                    entity = 10;
 69:
                    return entity;
                }
            };
            kiloes = tangon.bind(oscard)(michal, zuuluu);
            michal = backup.length;
            zuuluu = 0;
            verify = michal > zuuluu;
            if(verify) { _fun00010_ip = 343; continue _fun00009 }
 334:
            michal = romeon.length;
            verify = michal > zuuluu;
 343:
            if(verify) { _fun00010_ip = 363; continue _fun00009 }
 346:
            michal = foxtra.length;
            michal = michal > zuuluu;
            entity = null;
            if(!michal) { _fun00010_ip = 686; continue _fun00009 }
 363:
            tangon = _closure1_slot11;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = result.listWrapper;
            michal['style'] = oscard;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 21;
            oscard = option[oscard];
            option = golfie.bind(report)(oscard);
            golfie = option.renderCategoryItem;
            oscard = {};
            vacuum = _closure1_slot0;
            sequen = _closure1_slot2;
            update = 22;
            source = sequen[update];
            source = vacuum.bind(report)(source);
            ctrled = source.intl;
            source = ctrled.string;
            update = sequen[update];
            update = vacuum.bind(report)(update);
            update = update.t;
            if(verify) { _fun00010_ip = 473; continue _fun00009 }
 458:
            verify = update.kCt2zM;
            verify = source.bind(ctrled)(verify);
            _fun00010_ip = 486; continue _fun00009;
 473:
            update = update.xSY9BA;
            verify = source.bind(ctrled)(update);
 486:
            oscard['name'] = verify;
            golfie = golfie.bind(option)(oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            verify = _closure1_slot10;
            option = _closure1_slot0;
            update = _closure1_slot2;
            golfie = 23;
            golfie = update[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.AnimatedFastList;
            golfie = {};
            golfie['ref'] = echoed;
            result = result.list;
            golfie['style'] = result;
            result = true;
            golfie['horizontal'] = result;
            golfie['renderItem'] = output;
            sizing = _closure1_slot16;
            golfie['renderSection'] = sizing;
            golfie['sectionSize'] = kiloes;
            kiloes = romeon.length;
            romeon = new Array(3);
            romeon[0] = kiloes;
            backup = backup.length;
            romeon[1] = backup;
            foxtra = foxtra.length;
            romeon[2] = foxtra;
            golfie['sections'] = romeon;
            romeon = 58;
            golfie['itemSize'] = romeon;
            golfie['headerSize'] = yankee;
            golfie['footerSize'] = yankee;
            golfie['chunkBase'] = offset;
            offset = false;
            golfie['showsHorizontalScrollIndicator'] = offset;
            golfie['showsVerticalScrollIndicator'] = offset;
            offset = 'disabled';
            golfie['stickySectionsVariant'] = offset;
            offset = 'always';
            golfie['keyboardShouldPersistTaps'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 686:
            return entity;
        }
    };
    michal = golfie.bind(option)(michal);
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/LaunchPadUnreadServers.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();