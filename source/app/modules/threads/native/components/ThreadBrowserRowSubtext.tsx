// app/modules/threads/native/components/ThreadBrowserRowSubtext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: MessageContent
        michal = argFoo;
        entity = michal.thread;
        michal = michal.message;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot13;
        tangon = undefined;
        option = zuuluu.bind(tangon)();
        verify = _closure1_slot0;
        foxtra = _closure1_slot2;
        zuuluu = 18;
        zuuluu = foxtra[zuuluu];
        golfie = verify.bind(tangon)(zuuluu);
        oscard = golfie.useSubscribeGuildMembers;
        zuuluu = {};
        yankee = entity.guild_id;
        offset = michal.author;
        backup = offset.id;
        offset = new Array(1);
        offset[0] = backup;
        zuuluu[yankee] = offset;
        zuuluu = oscard.bind(golfie)(zuuluu);
        zuuluu = 11;
        oscard = foxtra[zuuluu];
        yankee = verify.bind(tangon)(oscard);
        offset = yankee.useStateFromStores;
        oscard = _closure1_slot7;
        golfie = new Array(1);
        golfie[0] = oscard;
        oscard = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot7;
                zuuluu = tangon.getUser;
                entity = _closure2_slot0;
                entity = entity.author;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00002_ip = 52; continue _fun00001 }
 42:
                michal = _closure2_slot0;
                entity = michal.author;
 52:
                return entity;
            }
        };
        offset = offset.bind(yankee)(golfie, oscard);
        zuuluu = foxtra[zuuluu];
        yankee = verify.bind(tangon)(zuuluu);
        golfie = yankee.useStateFromStores;
        zuuluu = _closure1_slot5;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot5;
            entity = entity.roleStyle;
            return entity;
        };
        zuuluu = golfie.bind(yankee)(oscard, zuuluu);
        var _closure2_slot1 = zuuluu;
        zuuluu = _closure1_slot1;
        oscard = 19;
        oscard = foxtra[oscard];
        oscard = zuuluu.bind(tangon)(oscard);
        oscard = oscard.bind(tangon)(michal);
        golfie = oscard.nick;
        var _closure2_slot2 = golfie;
        golfie = oscard.colorString;
        var _closure2_slot3 = golfie;
        oscard = oscard.colorStrings;
        var _closure2_slot4 = oscard;
        oscard = 20;
        oscard = foxtra[oscard];
        golfie = zuuluu.bind(tangon)(oscard);
        oscard = golfie.extractTimestamp;
        michal = michal.id;
        yankee = oscard.bind(golfie)(michal);
        michal = 12;
        oscard = foxtra[michal];
        golfie = verify.bind(tangon)(oscard);
        oscard = golfie.getTimestampString;
        golfie = oscard.bind(golfie)(yankee);
        michal = foxtra[michal];
        oscard = verify.bind(tangon)(michal);
        michal = oscard.getTimestampAccessibilityLabel;
        oscard = michal.bind(oscard)(yankee);
        michal = 21;
        michal = foxtra[michal];
        yankee = verify.bind(tangon)(michal);
        michal = yankee.useShouldFilterKeywords;
        michal = michal.bind(yankee)();
        var _closure2_slot5 = michal;
        michal = 13;
        michal = foxtra[michal];
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = entity.guild_id;
        entity = offset.id;
        entity = zuuluu.bind(tangon)(michal, entity);
        var _closure2_slot6 = entity;
        zuuluu = _closure1_slot9;
        michal = _closure1_slot16;
        entity = {};
        entity['user'] = offset;
        entity['timestamp'] = golfie;
        entity['accessibilityLabel'] = oscard;
        golfie = _closure1_slot9;
        report = 15;
        report = foxtra[report];
        report = verify.bind(tangon)(report);
        oscard = report.Text;
        report = {'lineClamp': 1, 'ellipsizeMode': 'tail', 'lineBreakMode': 'tail', 'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
        option = option.subtextContent;
        report['style'] = option;
        option = 16;
        offset = foxtra[option];
        offset = verify.bind(tangon)(offset);
        yankee = offset.intl;
        offset = yankee.format;
        option = foxtra[option];
        option = verify.bind(tangon)(option);
        option = option.t;
        verify = option.M79KAA;
        option = {};
        foxtra = function(argFoo, argBar) { // Original name: usernameHook
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = _closure1_slot9;
                tangon = _closure1_slot17;
                zuuluu = {};
                entity = _closure2_slot2;
                golfie = null;
                michal = golfie != entity;
                entity = '';
                if(!michal) { _fun00004_ip = 37; continue _fun00003 }
 33:
                entity = _closure2_slot2;
 37:
                zuuluu['nickname'] = entity;
                verify = _closure2_slot1;
                michal = undefined;
                option = 'username';
                entity = undefined;
                if(!(option === verify)) { _fun00004_ip = 62; continue _fun00003 }
 58:
                entity = _closure2_slot3;
 62:
                zuuluu['usernameColor'] = entity;
                entity = _closure2_slot3;
                zuuluu['roleColor'] = entity;
                option = _closure2_slot6;
                entity = undefined;
                if(!option) { _fun00004_ip = 89; continue _fun00003 }
 85:
                entity = _closure2_slot4;
 89:
                zuuluu['roleColors'] = entity;
                option = _closure2_slot1;
                entity = 'dot';
                entity = entity === option;
                if(!entity) { _fun00004_ip = 117; continue _fun00003 }
 109:
                oscard = _closure2_slot3;
                entity = golfie != oscard;
 117:
                zuuluu['shouldShowRoleDot'] = entity;
                entity = argBar;
                entity = report.bind(michal)(tangon, zuuluu, entity);
                return entity;
            }
        };
        option['usernameHook'] = foxtra;
        romeon = function(argFoo, argBar) { // Original name: messageTextHook
            report = _closure1_slot9;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 22;
            michal = golfie[michal];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = michal.LegacyText;
            michal = {};
            oscard = _closure1_slot1;
            entity = 23;
            entity = golfie[entity];
            golfie = oscard.bind(tangon)(entity);
            oscard = _closure2_slot0;
            entity = {};
            verify = true;
            entity['formatInline'] = verify;
            option = _closure2_slot5;
            entity['shouldFilterKeywords'] = option;
            entity = golfie.bind(tangon)(oscard, entity);
            entity = entity.content;
            michal['children'] = entity;
            entity = argBar;
            entity = report.bind(tangon)(zuuluu, michal, entity);
            return entity;
        };
        option['messageTextHook'] = romeon;
        option = offset.bind(yankee)(verify, option);
        report['children'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: SubstringRow
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.user;
            golfie = entity.children;
            offset = entity.timestamp;
            verify = entity.accessibilityLabel;
            entity = _closure1_slot13;
            report = undefined;
            yankee = entity.bind(report)();
            entity = null;
            if(!(entity != michal)) { _fun00006_ip = 215; continue _fun00005 }
 46:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot4;
            entity = {};
            tangon = yankee.row;
            entity['style'] = tangon;
            tangon = new Array(3);
            tangon[0] = golfie;
            romeon = _closure1_slot9;
            option = _closure1_slot4;
            golfie = {};
            foxtra = yankee.dividerDot;
            golfie['style'] = foxtra;
            golfie = romeon.bind(report)(option, golfie);
            tangon[1] = golfie;
            romeon = _closure1_slot9;
            option = _closure1_slot0;
            foxtra = _closure1_slot2;
            golfie = 15;
            golfie = foxtra[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.Text;
            golfie = {};
            foxtra = yankee.timestamp;
            golfie['style'] = foxtra;
            golfie['accessibilityLabel'] = verify;
            foxtra = 'text-sm/medium';
            golfie['variant'] = foxtra;
            foxtra = 'text-muted';
            golfie['color'] = foxtra;
            foxtra = global;
            foxtra = foxtra.HermesInternal;
            backup = foxtra.concat;
            foxtra = '';
            foxtra = backup.bind(foxtra)(offset);
            golfie['children'] = foxtra;
            golfie = romeon.bind(report)(option, golfie);
            tangon[2] = golfie;
            entity['children'] = tangon;
            entity = zuuluu.bind(report)(michal, entity);
            _fun00006_ip = 326; continue _fun00005;
 215:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot4;
            michal = {};
            golfie = yankee.row;
            michal['style'] = golfie;
            option = _closure1_slot9;
            golfie = _closure1_slot0;
            romeon = _closure1_slot2;
            oscard = 15;
            oscard = romeon[oscard];
            oscard = golfie.bind(report)(oscard);
            golfie = oscard.Text;
            oscard = {};
            yankee = yankee.timestamp;
            oscard['style'] = yankee;
            oscard['accessibilityLabel'] = verify;
            verify = 'text-sm/medium';
            oscard['variant'] = verify;
            verify = 'text-muted';
            oscard['color'] = verify;
            verify = ' ';
            verify = verify + offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 326:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: Username
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            verify = michal.nickname;
            offset = michal.usernameColor;
            var _closure2_slot0 = offset;
            kiloes = michal.roleColor;
            backup = michal.roleColors;
            golfie = michal.shouldShowRoleDot;
            michal = _closure1_slot13;
            tangon = undefined;
            option = michal.bind(tangon)();
            var _closure2_slot1 = option;
            report = _closure1_slot3;
            zuuluu = report.useMemo;
            michal = new Array(2);
            michal[0] = offset;
            michal[1] = option;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot0;
                    entity = null;
                    if(!(entity == michal)) { _fun00010_ip = 24; continue _fun00009 }
 13:
                    entity = _closure2_slot1;
                    entity = entity.username;
                    _fun00010_ip = 58; continue _fun00009;
 24:
                    michal = _closure2_slot1;
                    zuuluu = michal.username;
                    michal = new Array(2);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    tangon = _closure2_slot0;
                    zuuluu['color'] = tangon;
                    michal[1] = zuuluu;
                    entity = michal;
 58:
                    return entity;
                }
            };
            offset = zuuluu.bind(report)(entity, michal);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 24;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useProcessColorStringsArray;
            romeon = entity.bind(michal)(backup);
            foxtra = !golfie;
            if(!foxtra) { _fun00008_ip = 139; continue _fun00007 }
 127:
            michal = romeon.length;
            entity = 1;
            foxtra = michal > entity;
 139:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot11;
            entity = {};
            if(!golfie) { _fun00008_ip = 206; continue _fun00007 }
 152:
            yankee = _closure1_slot9;
            option = _closure1_slot0;
            sizing = _closure1_slot2;
            report = 25;
            report = sizing[report];
            report = option.bind(tangon)(report);
            option = report.RoleDot;
            report = {};
            report['color'] = kiloes;
            report['colors'] = backup;
            backup = 'small';
            report['size'] = backup;
            golfie = yankee.bind(tangon)(option, report);
 206:
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot9;
            backup = _closure1_slot0;
            kiloes = _closure1_slot2;
            oscard = 15;
            oscard = kiloes[oscard];
            oscard = backup.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'variant': 'text-sm/semibold', 'color': 'header-primary'};
            yankee = 26;
            yankee = kiloes[yankee];
            backup = backup.bind(tangon)(yankee);
            yankee = backup.isFabric;
            yankee = yankee.bind(backup)();
            yankee = !yankee;
            oscard['experimental_useNativeText'] = yankee;
            yankee = undefined;
            if(!foxtra) { _fun00008_ip = 295; continue _fun00007 }
 292:
            yankee = romeon;
 295:
            oscard['gradientColors'] = yankee;
            oscard['style'] = offset;
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.MessageTypes;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.Fonts;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.jsx;
    var _closure1_slot9 = verify;
    verify = tangon.jsxs;
    var _closure1_slot10 = verify;
    tangon = tangon.Fragment;
    var _closure1_slot11 = tangon;
    verify = golfie.CHANNEL_NAME_CHANGE;
    tangon = new Array(2);
    tangon[0] = verify;
    golfie = golfie.THREAD_STARTER_MESSAGE;
    tangon[1] = golfie;
    var _closure1_slot12 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    golfie = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 'row';
    offset['flexDirection'] = yankee;
    tangon['row'] = offset;
    offset = {'fontSize': 14, 'lineHeight': 18};
    backup = 18;
    yankee = foxtra.PRIMARY_MEDIUM;
    offset['fontFamily'] = yankee;
    yankee = 10;
    kiloes = oscard[yankee];
    kiloes = romeon.bind(entity)(kiloes);
    kiloes = kiloes.colors;
    kiloes = kiloes.HEADER_SECONDARY;
    offset['color'] = kiloes;
    tangon['subText'] = offset;
    offset = {'lineHeight': 18, 'flexShrink': 1};
    tangon['subtextContent'] = offset;
    offset = {};
    offset['lineHeight'] = backup;
    tangon['timestamp'] = offset;
    offset = {'fontSize': 14, 'lineHeight': 18};
    foxtra = foxtra.PRIMARY_SEMIBOLD;
    offset['fontFamily'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.HEADER_SECONDARY;
    offset['color'] = foxtra;
    tangon['username'] = offset;
    offset = {'width': 4, 'height': 4, 'marginHorizontal': 4, 'borderRadius': 2, 'backgroundColor': null, 'alignSelf': 'center'};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BG_MOD_STRONG;
    offset['backgroundColor'] = foxtra;
    tangon['dividerDot'] = offset;
    offset = {'position': 'absolute', 'height': 1, 'left': 16, 'right': 0, 'bottom': 0};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACCENT;
    offset['backgroundColor'] = yankee;
    tangon['divider'] = offset;
    tangon = golfie.bind(verify)(tangon);
    var _closure1_slot13 = tangon;
    golfie = option.memo;
    tangon = function(argFoo) {
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            verify = entity.thread;
            var _closure2_slot0 = verify;
            oscard = entity.timestamp;
            option = entity.accessibilityLabel;
            tangon = undefined;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            entity = _closure1_slot13;
            offset = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            yankee = _closure1_slot2;
            michal = 11;
            entity = yankee[michal];
            backup = zuuluu.bind(tangon)(entity);
            foxtra = backup.useStateFromStores;
            entity = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getUser;
                entity = _closure2_slot0;
                entity = entity.ownerId;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = foxtra.bind(backup)(golfie, entity);
            var _closure2_slot1 = golfie;
            entity = yankee[michal];
            kiloes = zuuluu.bind(tangon)(entity);
            backup = kiloes.useStateFromStores;
            entity = _closure1_slot6;
            foxtra = new Array(1);
            foxtra[0] = entity;
            entity = function() {
                tangon = _closure1_slot6;
                zuuluu = tangon.getMember;
                entity = _closure2_slot0;
                michal = entity.guild_id;
                entity = entity.ownerId;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = backup.bind(kiloes)(foxtra, entity);
            var _closure2_slot2 = entity;
            michal = yankee[michal];
            foxtra = zuuluu.bind(tangon)(michal);
            yankee = foxtra.useStateFromStores;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                entity = _closure1_slot5;
                entity = entity.roleStyle;
                return entity;
            };
            michal = yankee.bind(foxtra)(zuuluu, michal);
            var _closure2_slot3 = michal;
            michal = null;
            zuuluu = michal == entity;
            yankee = undefined;
            if(zuuluu) { _fun00012_ip = 212; continue _fun00011 }
 206:
            yankee = entity.colorString;
 212:
            foxtra = michal != yankee;
            zuuluu = undefined;
            if(!foxtra) { _fun00012_ip = 224; continue _fun00011 }
 221:
            zuuluu = yankee;
 224:
            _closure2_slot4 = zuuluu;
            yankee = michal == entity;
            zuuluu = undefined;
            if(yankee) { _fun00012_ip = 243; continue _fun00011 }
 237:
            zuuluu = entity.colorStrings;
 243:
            _closure2_slot5 = zuuluu;
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            zuuluu = 13;
            zuuluu = foxtra[zuuluu];
            yankee = yankee.bind(tangon)(zuuluu);
            zuuluu = verify.guild_id;
            foxtra = michal == golfie;
            michal = undefined;
            if(foxtra) { _fun00012_ip = 286; continue _fun00011 }
 281:
            michal = golfie.id;
 286:
            michal = yankee.bind(tangon)(zuuluu, michal);
            _closure2_slot6 = michal;
            zuuluu = _closure1_slot3;
            michal = zuuluu.useRef;
            michal = michal.bind(zuuluu)(verify);
            _closure2_slot7 = michal;
            verify = _closure1_slot3;
            zuuluu = verify.useEffect;
            michal = function() {
                michal = _closure2_slot7;
                entity = _closure2_slot0;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(verify)(michal);
            verify = _closure1_slot3;
            zuuluu = verify.useEffect;
            michal = new Array(2);
            michal[0] = entity;
            michal[1] = golfie;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00014_ip = 21; continue _fun00013 }
 13:
                    michal = _closure2_slot2;
                    if(!(zuuluu == michal)) { _fun00014_ip = 86; continue _fun00013 }
 21:
                    entity = _closure2_slot7;
                    entity = entity.current;
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 14;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.requestMembersById;
                    michal = entity.guild_id;
                    report = entity.ownerId;
                    entity = new Array(1);
                    entity[0] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
 86:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(verify)(entity, michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot16;
            entity = {};
            entity['user'] = golfie;
            entity['timestamp'] = oscard;
            entity['accessibilityLabel'] = option;
            golfie = _closure1_slot9;
            verify = _closure1_slot0;
            foxtra = _closure1_slot2;
            report = 15;
            report = foxtra[report];
            report = verify.bind(tangon)(report);
            oscard = report.Text;
            report = {'lineClamp': 1, 'ellipsizeMode': 'tail', 'lineBreakMode': 'tail', 'style': null, 'accessibilityLabel': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            offset = offset.subtextContent;
            report['style'] = offset;
            report['accessibilityLabel'] = option;
            option = 16;
            offset = foxtra[option];
            offset = verify.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.format;
            option = foxtra[option];
            option = verify.bind(tangon)(option);
            option = option.t;
            verify = option.imPXd3;
            option = {};
            romeon = function(argFoo, argBar) { // Original name: usernameHook
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    report = _closure1_slot9;
                    tangon = _closure1_slot17;
                    zuuluu = {};
                    michal = _closure2_slot2;
                    golfie = null;
                    verify = golfie == michal;
                    michal = undefined;
                    option = undefined;
                    if(verify) { _fun00016_ip = 43; continue _fun00015 }
 33:
                    verify = _closure2_slot2;
                    option = verify.nick;
 43:
                    if(!(golfie == option)) { _fun00016_ip = 82; continue _fun00015 }
 47:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    entity = 17;
                    entity = offset[entity];
                    offset = verify.bind(michal)(entity);
                    verify = offset.getName;
                    entity = _closure2_slot1;
                    option = verify.bind(offset)(entity);
 82:
                    verify = golfie != option;
                    entity = '';
                    if(!verify) { _fun00016_ip = 96; continue _fun00015 }
 93:
                    entity = option;
 96:
                    zuuluu['nickname'] = entity;
                    verify = _closure2_slot3;
                    option = 'username';
                    entity = undefined;
                    if(!(option === verify)) { _fun00016_ip = 119; continue _fun00015 }
 115:
                    entity = _closure2_slot4;
 119:
                    zuuluu['usernameColor'] = entity;
                    entity = _closure2_slot4;
                    zuuluu['roleColor'] = entity;
                    option = _closure2_slot6;
                    entity = undefined;
                    if(!option) { _fun00016_ip = 146; continue _fun00015 }
 142:
                    entity = _closure2_slot5;
 146:
                    zuuluu['roleColors'] = entity;
                    option = _closure2_slot3;
                    entity = 'dot';
                    entity = entity === option;
                    if(!entity) { _fun00016_ip = 174; continue _fun00015 }
 166:
                    oscard = _closure2_slot4;
                    entity = golfie != oscard;
 174:
                    zuuluu['shouldShowRoleDot'] = entity;
                    entity = argBar;
                    entity = report.bind(michal)(tangon, zuuluu, entity);
                    return entity;
                }
            };
            option['usernameHook'] = romeon;
            option = offset.bind(yankee)(verify, option);
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/threads/native/components/ThreadBrowserRowSubtext.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ThreadSubtext
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            golfie = entity.thread;
            yankee = golfie.id;
            var _closure2_slot0 = yankee;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            tangon = 11;
            oscard = michal[tangon];
            tangon = undefined;
            offset = zuuluu.bind(tangon)(oscard);
            verify = offset.useStateFromStores;
            oscard = _closure1_slot8;
            option = new Array(1);
            option[0] = oscard;
            oscard = new Array(1);
            oscard[0] = yankee;
            report = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.getMostRecentMessage;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = verify.bind(offset)(option, report, oscard);
            option = 12;
            michal = michal[option];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useLastMessageTimestamp;
            report = michal.bind(zuuluu)(golfie);
            michal = null;
            if(!(michal != verify)) { _fun00018_ip = 175; continue _fun00017 }
 113:
            oscard = _closure1_slot12;
            zuuluu = oscard.includes;
            michal = verify.type;
            michal = zuuluu.bind(oscard)(michal);
            if(michal) { _fun00018_ip = 175; continue _fun00017 }
 135:
            michal = golfie.isArchivedThread;
            michal = michal.bind(golfie)();
            if(michal) { _fun00018_ip = 175; continue _fun00017 }
 148:
            oscard = _closure1_slot9;
            zuuluu = _closure1_slot15;
            michal = {};
            michal['thread'] = golfie;
            michal['message'] = verify;
            michal = oscard.bind(tangon)(zuuluu, michal);
            return michal;
 175:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            oscard = michal[option];
            verify = zuuluu.bind(tangon)(oscard);
            oscard = verify.getTimestampString;
            oscard = oscard.bind(verify)(report);
            michal = michal[option];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.getTimestampAccessibilityLabel;
            report = michal.bind(zuuluu)(report);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot14;
            entity = {};
            entity['thread'] = golfie;
            entity['timestamp'] = oscard;
            entity['accessibilityLabel'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['ThreadSubtext'] = michal;
    return entity;
})();