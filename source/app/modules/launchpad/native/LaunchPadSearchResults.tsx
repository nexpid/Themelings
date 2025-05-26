// app/modules/launchpad/native/LaunchPadSearchResults.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: renderItemJSX
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscard = entity.result;
            entity = null;
            if(!(entity != oscard)) { _fun00002_ip = 586; continue _fun00001 }
 18:
            tangon = oscard.type;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            option = 20;
            zuuluu = zuuluu[option];
            report = undefined;
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.GUILD;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 558; continue _fun00001 }
 67:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.TEXT_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 500; continue _fun00001 }
 103:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.GROUP_DM;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 449; continue _fun00001 }
 139:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.VOICE_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 405; continue _fun00001 }
 175:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.USER;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 350; continue _fun00001 }
 211:
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[option];
            zuuluu = golfie.bind(report)(zuuluu);
            zuuluu = zuuluu.AutocompleterResultTypes;
            zuuluu = zuuluu.HEADER;
            if(!(zuuluu !== tangon)) { _fun00002_ip = 300; continue _fun00001 }
 244:
            golfie = _closure1_slot9;
            tangon = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 26;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.Text;
            zuuluu = {};
            option = 'text-sm/semibold';
            zuuluu['variant'] = option;
            option = oscard.type;
            zuuluu['children'] = option;
            zuuluu = golfie.bind(report)(tangon, zuuluu);
            return zuuluu;
 300:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 25;
            zuuluu = golfie[zuuluu];
            golfie = tangon.bind(report)(zuuluu);
            tangon = golfie.renderCategoryItem;
            zuuluu = {};
            option = oscard.record;
            option = option.text;
            zuuluu['name'] = option;
            zuuluu = tangon.bind(golfie)(zuuluu);
            return zuuluu;
 350:
            golfie = _closure1_slot9;
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 24;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            option = oscard.record;
            zuuluu['user'] = option;
            option = oscard.comparator;
            zuuluu['comparator'] = option;
            zuuluu = golfie.bind(report)(tangon, zuuluu);
            return zuuluu;
 405:
            golfie = _closure1_slot9;
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 23;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            option = oscard.record;
            zuuluu['channel'] = option;
            zuuluu = golfie.bind(report)(tangon, zuuluu);
            return zuuluu;
 449:
            golfie = _closure1_slot9;
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 22;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {};
            option = oscard.record;
            zuuluu['channel'] = option;
            option = true;
            zuuluu['navigationReplace'] = option;
            zuuluu = golfie.bind(report)(tangon, zuuluu);
            return zuuluu;
 500:
            golfie = _closure1_slot9;
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 21;
            zuuluu = option[zuuluu];
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = {'channel': null, 'navigationReplace': true, 'showGuildBadgeIcon': true};
            option = oscard.record;
            zuuluu['channel'] = option;
            zuuluu = golfie.bind(report)(tangon, zuuluu);
            return zuuluu;
 558:
            tangon = _closure1_slot9;
            zuuluu = _closure1_slot14;
            michal = {};
            oscard = oscard.record;
            michal['guild'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 586:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: renderSearchResultsSection
        tangon = _closure1_slot9;
        zuuluu = _closure1_slot15;
        michal = {};
        option = _closure1_slot0;
        verify = _closure1_slot2;
        report = 27;
        oscard = verify[report];
        entity = undefined;
        oscard = option.bind(entity)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(entity)(report);
        report = report.t;
        report = report.zkoeq6;
        report = oscard.bind(golfie)(report);
        michal['name'] = report;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argCor;
    entity = undefined;
    option = tangon.bind(entity)(report);
    var _closure1_slot3 = option;
    foxtra = 1;
    tangon = golfie[foxtra];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.UnreadSetting;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    report = tangon.jsx;
    var _closure1_slot9 = report;
    report = tangon.Fragment;
    var _closure1_slot10 = report;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = {};
    report = 24;
    tangon['bottom'] = report;
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = golfie[tangon];
    verify = oscard.bind(entity)(tangon);
    report = verify.createStyles;
    tangon = {};
    offset = {};
    yankee = 16;
    offset['minHeight'] = yankee;
    tangon['listContainer'] = offset;
    yankee = 8;
    offset = {'flex': 4294967295, 'marginTop': 8};
    tangon['list'] = offset;
    offset = {};
    backup = golfie[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    offset['borderRadius'] = backup;
    tangon['guildIcon'] = offset;
    offset = {};
    backup = golfie[yankee];
    backup = romeon.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_PRIMARY;
    offset['backgroundColor'] = backup;
    tangon['categoryWrapper'] = offset;
    offset = {};
    offset['flex'] = foxtra;
    tangon['pressable'] = offset;
    offset = {};
    yankee = golfie[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MODIFIER_ACTIVE;
    offset['backgroundColor'] = yankee;
    tangon['pressableUnderlayColor'] = offset;
    tangon = report.bind(verify)(tangon);
    var _closure1_slot13 = tangon;
    report = option.memo;
    tangon = function(argFoo) {
        michal = argFoo;
        backup = michal.guild;
        var _closure2_slot0 = backup;
        michal = _closure1_slot13;
        zuuluu = undefined;
        source = michal.bind(zuuluu)();
        kiloes = _closure1_slot1;
        echoed = _closure1_slot2;
        michal = 9;
        michal = echoed[michal];
        michal = kiloes.bind(zuuluu)(michal);
        ctrled = michal.bind(zuuluu)();
        oscard = _closure1_slot3;
        report = oscard.useCallback;
        michal = backup.id;
        tangon = new Array(1);
        tangon[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 10;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.transitionToGuild;
            michal = _closure2_slot0;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        oscard = report.bind(oscard)(michal, tangon);
        tangon = _closure1_slot0;
        michal = 11;
        report = echoed[michal];
        verify = tangon.bind(zuuluu)(report);
        option = verify.useStateFromStoresObject;
        report = _closure1_slot6;
        golfie = new Array(1);
        golfie[0] = report;
        report = function() {
            entity = {};
            tangon = _closure1_slot6;
            report = tangon.hasUnread;
            michal = _closure2_slot0;
            zuuluu = michal.id;
            zuuluu = report.bind(tangon)(zuuluu);
            entity['unread'] = zuuluu;
            report = tangon.getMentionCount;
            zuuluu = michal.id;
            zuuluu = report.bind(tangon)(zuuluu);
            entity['mentionCount'] = zuuluu;
            zuuluu = tangon.getIsMentionLowImportance;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal);
            entity['isMentionLowImportance'] = michal;
            return entity;
        };
        report = option.bind(verify)(golfie, report);
        vacuum = report.unread;
        result = report.mentionCount;
        sizing = report.isMentionLowImportance;
        report = 12;
        report = echoed[report];
        golfie = tangon.bind(zuuluu)(report);
        report = golfie.useFontScale;
        verify = report.bind(golfie)();
        michal = echoed[michal];
        golfie = tangon.bind(zuuluu)(michal);
        report = golfie.useStateFromStores;
        option = _closure1_slot5;
        michal = new Array(1);
        michal[0] = option;
        entity = function() {
            entity = _closure1_slot5;
            entity = entity.locale;
            return entity;
        };
        output = report.bind(golfie)(michal, entity);
        entity = 13;
        entity = echoed[entity];
        michal = kiloes.bind(zuuluu)(entity);
        report = _closure1_slot9;
        entity = 14;
        entity = echoed[entity];
        entity = tangon.bind(zuuluu)(entity);
        tangon = entity.PressableHighlight;
        entity = {};
        entity['onPress'] = oscard;
        oscard = source.pressableUnderlayColor;
        oscard = oscard.backgroundColor;
        entity['underlayColor'] = oscard;
        golfie = source.pressable;
        oscard = new Array(2);
        oscard[0] = golfie;
        golfie = {};
        option = ctrled.container;
        option = option.borderRadius;
        golfie['borderRadius'] = option;
        oscard[1] = golfie;
        entity['style'] = oscard;
        oscard = 15;
        oscard = echoed[oscard];
        option = kiloes.bind(zuuluu)(oscard);
        offset = _closure1_slot11;
        golfie = _closure1_slot10;
        oscard = {};
        update = _closure1_slot9;
        yankee = 16;
        yankee = echoed[yankee];
        foxtra = kiloes.bind(zuuluu)(yankee);
        yankee = {};
        yankee['unread'] = vacuum;
        vacuum = _closure1_slot8;
        vacuum = vacuum.ALL_MESSAGES;
        yankee['resolvedUnreadSetting'] = vacuum;
        foxtra = update.bind(zuuluu)(foxtra, yankee);
        yankee = new Array(3);
        yankee[0] = foxtra;
        update = _closure1_slot9;
        romeon = 17;
        romeon = echoed[romeon];
        foxtra = kiloes.bind(zuuluu)(romeon);
        romeon = {};
        vacuum = ctrled.icon;
        vacuum = vacuum.guildIconSize;
        romeon['size'] = vacuum;
        romeon['guild'] = backup;
        vacuum = source.guildIcon;
        source = new Array(2);
        source[0] = vacuum;
        ctrled = ctrled.icon;
        ctrled = ctrled.margin;
        source[1] = ctrled;
        romeon['style'] = source;
        romeon = update.bind(zuuluu)(foxtra, romeon);
        yankee[1] = romeon;
        romeon = 18;
        romeon = echoed[romeon];
        foxtra = kiloes.bind(zuuluu)(romeon);
        romeon = {};
        backup = backup.name;
        romeon['name'] = backup;
        backup = 19;
        backup = echoed[backup];
        kiloes = kiloes.bind(zuuluu)(backup);
        backup = {};
        backup['mentionCount'] = result;
        backup['locale'] = output;
        backup['isMentionLowImportance'] = sizing;
        backup = kiloes.bind(zuuluu)(backup);
        romeon['mentionBadge'] = backup;
        romeon = foxtra.bind(zuuluu)(romeon);
        yankee[2] = romeon;
        oscard['children'] = yankee;
        golfie = offset.bind(zuuluu)(golfie, oscard);
        oscard = {};
        oscard['fontScale'] = verify;
        oscard = option.bind(zuuluu)(golfie, oscard);
        entity['children'] = oscard;
        entity = report.bind(zuuluu)(tangon, entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    report = option.memo;
    tangon = function(argFoo) {
        entity = argFoo;
        verify = entity.name;
        option = entity.onPress;
        golfie = entity.note;
        michal = _closure1_slot13;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        zuuluu = _closure1_slot0;
        report = _closure1_slot2;
        michal = 25;
        michal = report[michal];
        report = zuuluu.bind(tangon)(michal);
        zuuluu = report.renderCategoryItem;
        michal = {};
        michal['name'] = verify;
        michal['onPress'] = option;
        michal['note'] = golfie;
        report = zuuluu.bind(report)(michal);
        zuuluu = _closure1_slot9;
        michal = _closure1_slot4;
        entity = {};
        oscard = oscard.categoryWrapper;
        entity['style'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot15 = tangon;
    report = option.memo;
    tangon = function(argFoo) { // Original name: InitialResultsInner
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = michal.history;
            var _closure2_slot0 = report;
            foxtra = michal.unreads;
            var _closure2_slot1 = foxtra;
            output = michal.toggleExpandedHistory;
            var _closure2_slot2 = output;
            option = michal.expandedHistory;
            var _closure2_slot3 = option;
            offset = michal.selectedGuildId;
            var _closure2_slot4 = offset;
            michal = _closure1_slot13;
            tangon = undefined;
            result = michal.bind(tangon)();
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 11;
            michal = verify[michal];
            romeon = zuuluu.bind(tangon)(michal);
            golfie = romeon.useStateFromStores;
            michal = _closure1_slot7;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    entity = null;
                    if(!(entity == zuuluu)) { _fun00006_ip = 17; continue _fun00005 }
 13:
                    zuuluu = undefined;
                    return zuuluu;
 17:
                    tangon = _closure1_slot7;
                    zuuluu = tangon.getGuild;
                    michal = _closure2_slot4;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00006_ip = 52; continue _fun00005 }
 47:
                    entity = michal.name;
 52:
                    return entity;
                }
            };
            michal = golfie.bind(romeon)(oscard, michal);
            var _closure2_slot5 = michal;
            backup = _closure1_slot1;
            oscard = 28;
            oscard = verify[oscard];
            oscard = backup.bind(tangon)(oscard);
            oscard = oscard.bind(tangon)();
            oscard = oscard.height;
            golfie = _closure1_slot3;
            sizing = golfie.useCallback;
            kiloes = new Array(2);
            kiloes[0] = report;
            kiloes[1] = foxtra;
            romeon = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    report = argBar;
                    zuuluu = _closure1_slot16;
                    michal = {};
                    tangon = 0;
                    entity = argFoo;
                    if(!(tangon !== entity)) { _fun00008_ip = 34; continue _fun00007 }
 21:
                    entity = _closure2_slot1;
                    entity = entity[report];
                    _fun00008_ip = 45; continue _fun00007;
 34:
                    tangon = _closure2_slot0;
                    entity = tangon[report];
 45:
                    michal['result'] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                }
            };
            kiloes = sizing.bind(golfie)(romeon, kiloes);
            sizing = golfie.useCallback;
            romeon = new Array(3);
            romeon[0] = output;
            romeon[1] = option;
            romeon[2] = michal;
            michal = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = _closure1_slot9;
                    zuuluu = _closure1_slot15;
                    michal = 0;
                    entity = argFoo;
                    if(!(michal !== entity)) { _fun00010_ip = 177; continue _fun00009 }
 23:
                    michal = {};
                    report = _closure2_slot5;
                    entity = null;
                    if(!(entity == report)) { _fun00010_ip = 97; continue _fun00009 }
 38:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    entity = 27;
                    report = offset[entity];
                    golfie = undefined;
                    report = option.bind(golfie)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    entity = offset[entity];
                    entity = option.bind(golfie)(entity);
                    entity = entity.t;
                    entity = entity.ieCAhI;
                    entity = report.bind(oscard)(entity);
                    _fun00010_ip = 168; continue _fun00009;
 97:
                    offset = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 27;
                    golfie = romeon[report];
                    oscard = undefined;
                    golfie = offset.bind(oscard)(golfie);
                    option = golfie.intl;
                    golfie = option.formatToPlainString;
                    report = romeon[report];
                    report = offset.bind(oscard)(report);
                    report = report.t;
                    oscard = report.+lFj39;
                    report = {};
                    verify = _closure2_slot5;
                    report['guildName'] = verify;
                    entity = golfie.bind(option)(oscard, report);
 168:
                    michal['name'] = entity;
                    _fun00010_ip = 392; continue _fun00009;
 177:
                    entity = {};
                    offset = _closure1_slot0;
                    romeon = _closure1_slot2;
                    kiloes = 27;
                    report = romeon[kiloes];
                    verify = undefined;
                    report = offset.bind(verify)(report);
                    golfie = report.intl;
                    oscard = golfie.string;
                    report = romeon[kiloes];
                    report = offset.bind(verify)(report);
                    report = report.t;
                    report = report.Xmh+5e;
                    report = oscard.bind(golfie)(report);
                    entity['name'] = report;
                    oscard = _closure2_slot3;
                    option = _closure1_slot9;
                    golfie = 26;
                    golfie = romeon[golfie];
                    golfie = offset.bind(verify)(golfie);
                    golfie = golfie.Text;
                    offset = {'variant': 'text-xs/semibold', 'color': 'text-brand'};
                    backup = _closure1_slot0;
                    yankee = _closure1_slot2;
                    romeon = yankee[kiloes];
                    romeon = backup.bind(verify)(romeon);
                    foxtra = romeon.intl;
                    romeon = foxtra.string;
                    yankee = yankee[kiloes];
                    yankee = backup.bind(verify)(yankee);
                    yankee = yankee.t;
                    if(oscard) { _fun00010_ip = 350; continue _fun00009 }
 328:
                    oscard = yankee./XSoJy;
                    oscard = romeon.bind(foxtra)(oscard);
                    offset['children'] = oscard;
                    oscard = offset;
                    _fun00010_ip = 370; continue _fun00009;
 350:
                    yankee = yankee.3BdvgI;
                    yankee = romeon.bind(foxtra)(yankee);
                    offset['children'] = yankee;
                    oscard = offset;
 370:
                    oscard = option.bind(verify)(golfie, oscard);
                    entity['note'] = oscard;
                    report = _closure2_slot2;
                    entity['onPress'] = report;
                    michal = entity;
 392:
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            romeon = sizing.bind(golfie)(michal, romeon);
            michal = 9;
            michal = verify[michal];
            michal = backup.bind(tangon)(michal);
            output = michal.bind(tangon)();
            var _closure2_slot6 = output;
            michal = 12;
            michal = verify[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useFontScale;
            verify = michal.bind(zuuluu)();
            var _closure2_slot7 = verify;
            zuuluu = golfie.useCallback;
            michal = new Array(4);
            michal[0] = verify;
            michal[1] = report;
            michal[2] = foxtra;
            michal[3] = output;
            entity = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = argBar;
                    entity = null;
                    michal = entity == tangon;
                    zuuluu = 0;
                    entity = 0;
                    if(michal) { _fun00012_ip = 191; continue _fun00011 }
 19:
                    michal = argFoo;
                    if(!(zuuluu !== michal)) { _fun00012_ip = 39; continue _fun00011 }
 26:
                    michal = _closure2_slot1;
                    michal = michal[tangon];
                    _fun00012_ip = 50; continue _fun00011;
 39:
                    zuuluu = _closure2_slot0;
                    michal = zuuluu[tangon];
 50:
                    tangon = michal.type;
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 20;
                    michal = oscard[michal];
                    oscard = undefined;
                    michal = report.bind(oscard)(michal);
                    michal = michal.AutocompleterResultTypes;
                    michal = michal.VOICE_CHANNEL;
                    if(!(tangon !== michal)) { _fun00012_ip = 130; continue _fun00011 }
 96:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 29;
                    michal = report[michal];
                    tangon = tangon.bind(oscard)(michal);
                    michal = _closure2_slot7;
                    michal = tangon.bind(oscard)(michal);
                    _fun00012_ip = 188; continue _fun00011;
 130:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 29;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(oscard)(zuuluu);
                    tangon = _closure2_slot7;
                    tangon = report.bind(oscard)(tangon);
                    zuuluu = _closure2_slot6;
                    zuuluu = zuuluu.voiceUsers;
                    zuuluu = zuuluu.height;
                    tangon = tangon + zuuluu;
                    zuuluu = 2;
                    michal = tangon - zuuluu;
 188:
                    entity = michal;
 191:
                    return entity;
                }
            };
            sizing = zuuluu.bind(golfie)(entity, michal);
            entity = global;
            golfie = entity.Math;
            zuuluu = golfie.min;
            michal = report.length;
            if(option) { _fun00004_ip = 354; continue _fun00003 }
 320:
            backup = entity.Math;
            verify = backup.max;
            option = foxtra.length;
            entity = 5;
            option = entity - option;
            entity = 2;
            entity = verify.bind(backup)(option, entity);
            _fun00004_ip = 359; continue _fun00003;
 354:
            entity = report.length;
 359:
            backup = zuuluu.bind(golfie)(michal, entity);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot4;
            entity = {};
            golfie = result.listContainer;
            entity['style'] = golfie;
            report = report.length;
            golfie = 0;
            if(!(!(report > golfie))) { _fun00004_ip = 413; continue _fun00003 }
 396:
            report = foxtra.length;
            golfie = report > golfie;
            report = null;
            if(!golfie) { _fun00004_ip = 574; continue _fun00003 }
 413:
            verify = _closure1_slot9;
            option = _closure1_slot1;
            echoed = _closure1_slot2;
            golfie = 30;
            golfie = echoed[golfie];
            option = option.bind(tangon)(golfie);
            golfie = {'optimizeListItemRender': true, 'batchesToRender': 6};
            result = result.list;
            golfie['style'] = result;
            output = output.category;
            output = output.height;
            golfie['sectionSize'] = output;
            golfie['itemSize'] = sizing;
            golfie['renderItem'] = kiloes;
            golfie['renderSection'] = romeon;
            romeon = new Array(2);
            romeon[0] = backup;
            foxtra = foxtra.length;
            romeon[1] = foxtra;
            golfie['sections'] = romeon;
            romeon = 8;
            golfie['sectionFooterSize'] = romeon;
            golfie['footerSize'] = romeon;
            yankee = _closure1_slot12;
            golfie['scrollIndicatorInsets'] = yankee;
            golfie['chunkBase'] = oscard;
            oscard = 'always';
            golfie['keyboardShouldPersistTaps'] = oscard;
            oscard = null;
            yankee = oscard != offset;
            oscard = 'default';
            if(!yankee) { _fun00004_ip = 567; continue _fun00003 }
 564:
            oscard = offset;
 567:
            report = verify.bind(tangon)(option, golfie, oscard);
 574:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    tangon = report.bind(option)(tangon);
    report = option.memo;
    michal = function(argFoo) { // Original name: SearchResultsInner
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            yankee = michal.results;
            var _closure2_slot0 = yankee;
            michal = michal.query;
            zuuluu = _closure1_slot13;
            tangon = undefined;
            kiloes = zuuluu.bind(tangon)();
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            report = 28;
            report = golfie[report];
            report = zuuluu.bind(tangon)(report);
            report = report.bind(tangon)();
            verify = report.height;
            oscard = _closure1_slot3;
            romeon = oscard.useCallback;
            option = new Array(1);
            option[0] = yankee;
            report = function(argFoo, argBar) {
                zuuluu = _closure1_slot16;
                michal = {};
                tangon = _closure2_slot0;
                entity = argBar;
                entity = tangon[entity];
                michal['result'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            romeon = romeon.bind(oscard)(report, option);
            option = oscard.useRef;
            report = null;
            sizing = option.bind(oscard)(report);
            var _closure2_slot1 = sizing;
            foxtra = oscard.useEffect;
            option = new Array(1);
            option[0] = michal;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot1;
                    zuuluu = entity.current;
                    tangon = null;
                    entity = tangon == zuuluu;
                    if(entity) { _fun00016_ip = 31; continue _fun00015 }
 21:
                    michal = zuuluu.scrollToTop;
                    entity = tangon == michal;
 31:
                    if(entity) { _fun00016_ip = 47; continue _fun00015 }
 34:
                    michal = zuuluu.scrollToTop;
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
 47:
                    entity = undefined;
                    return entity;
                }
            };
            michal = foxtra.bind(oscard)(michal, option);
            michal = 9;
            michal = golfie[michal];
            michal = zuuluu.bind(tangon)(michal);
            backup = michal.bind(tangon)();
            var _closure2_slot2 = backup;
            zuuluu = _closure1_slot0;
            michal = 12;
            michal = golfie[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.useFontScale;
            golfie = michal.bind(zuuluu)();
            var _closure2_slot3 = golfie;
            zuuluu = oscard.useCallback;
            michal = new Array(3);
            michal[0] = golfie;
            michal[1] = yankee;
            michal[2] = backup;
            entity = function(argFoo, argBar) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = argBar;
                    entity = null;
                    michal = entity == tangon;
                    entity = 0;
                    if(michal) { _fun00018_ip = 163; continue _fun00017 }
 17:
                    michal = _closure2_slot0;
                    michal = michal[tangon];
                    report = michal.type;
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 20;
                    michal = oscard[michal];
                    oscard = undefined;
                    michal = golfie.bind(oscard)(michal);
                    michal = michal.AutocompleterResultTypes;
                    michal = michal.VOICE_CHANNEL;
                    if(!(report !== michal)) { _fun00018_ip = 105; continue _fun00017 }
 74:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    michal = 29;
                    michal = golfie[michal];
                    report = report.bind(oscard)(michal);
                    michal = _closure2_slot3;
                    michal = report.bind(oscard)(michal);
                    _fun00018_ip = 160; continue _fun00017;
 105:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 29;
                    tangon = golfie[tangon];
                    report = report.bind(oscard)(tangon);
                    tangon = _closure2_slot3;
                    tangon = report.bind(oscard)(tangon);
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.voiceUsers;
                    zuuluu = zuuluu.height;
                    tangon = tangon + zuuluu;
                    zuuluu = 2;
                    michal = tangon - zuuluu;
 160:
                    entity = michal;
 163:
                    return entity;
                }
            };
            foxtra = zuuluu.bind(oscard)(entity, michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot4;
            entity = {};
            oscard = kiloes.listContainer;
            entity['style'] = oscard;
            golfie = yankee.length;
            oscard = 0;
            oscard = golfie > oscard;
            if(!oscard) { _fun00014_ip = 400; continue _fun00013 }
 255:
            option = _closure1_slot9;
            golfie = _closure1_slot1;
            output = _closure1_slot2;
            oscard = 30;
            oscard = output[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {'ref': null, 'optimizeListItemRender': true, 'batchesToRender': 6};
            oscard['ref'] = sizing;
            kiloes = kiloes.list;
            oscard['style'] = kiloes;
            backup = backup.category;
            backup = backup.height;
            oscard['sectionSize'] = backup;
            oscard['itemSize'] = foxtra;
            foxtra = _closure1_slot17;
            oscard['renderSection'] = foxtra;
            oscard['renderItem'] = romeon;
            romeon = yankee.length;
            yankee = new Array(1);
            yankee[0] = romeon;
            oscard['sections'] = yankee;
            yankee = 16;
            oscard['footerSize'] = yankee;
            offset = _closure1_slot12;
            oscard['scrollIndicatorInsets'] = offset;
            oscard['chunkBase'] = verify;
            verify = 'always';
            oscard['keyboardShouldPersistTaps'] = verify;
            report = option.bind(tangon)(golfie, oscard);
 400:
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = report.bind(option)(michal);
    report = 31;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/launchpad/native/LaunchPadSearchResults.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['InitialResults'] = tangon;
    zuuluu['SearchResults'] = michal;
    return entity;
})();