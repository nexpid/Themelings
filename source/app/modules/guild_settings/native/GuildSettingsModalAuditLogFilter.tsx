// app/modules/guild_settings/native/GuildSettingsModalAuditLogFilter.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    offset = 1;
    golfie = oscard[offset];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot5 = golfie;
    option = tangon.StyleSheet;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AuditLogFilterTypes;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot9 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot10 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    golfie = option.create;
    tangon = {};
    verify = {};
    verify['flex'] = offset;
    tangon['container'] = verify;
    verify = {};
    offset = 7;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.spacing;
    romeon = romeon.PX_12;
    verify['paddingHorizontal'] = romeon;
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.spacing;
    offset = offset.PX_16;
    verify['paddingVertical'] = offset;
    tangon['searchBar'] = verify;
    verify = {'height': 30, 'width': 30, 'alignItems': 'center'};
    tangon['allUsersIconContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 26;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_settings/native/GuildSettingsModalAuditLogFilter.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: GuildSettingsModalAuditLogFilter
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.data;
            var _closure2_slot0 = zuuluu;
            result = michal.filterType;
            var _closure2_slot1 = result;
            option = michal.guildId;
            var _closure2_slot2 = option;
            report = _closure1_slot1;
            sizing = _closure1_slot2;
            michal = 11;
            michal = sizing[michal];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            yankee = michal.bottom;
            backup = _closure1_slot0;
            michal = 12;
            michal = sizing[michal];
            report = backup.bind(tangon)(michal);
            michal = report.useNavigation;
            michal = michal.bind(report)();
            var _closure2_slot3 = michal;
            report = _closure1_slot4;
            verify = report.useState;
            golfie = '';
            offset = verify.bind(report)(golfie);
            verify = _closure1_slot3;
            golfie = 2;
            verify = verify.bind(tangon)(offset, golfie);
            output = 0;
            offset = verify[output];
            var _closure2_slot4 = offset;
            golfie = 1;
            kiloes = verify[golfie];
            verify = report.useMemo;
            golfie = new Array(2);
            golfie[0] = offset;
            golfie[1] = zuuluu;
            zuuluu = function() {
                entity = {};
                report = _closure2_slot0;
                tangon = report.filter;
                zuuluu = function(argFoo) {
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 13;
                    entity = zuuluu[entity];
                    tangon = undefined;
                    zuuluu = michal.bind(tangon)(entity);
                    michal = _closure2_slot4;
                    entity = michal.toLowerCase;
                    michal = entity.bind(michal)();
                    entity = argFoo;
                    report = entity.label;
                    entity = report.toLowerCase;
                    entity = entity.bind(report)();
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu = tangon.bind(report)(zuuluu);
                entity['data'] = zuuluu;
                michal = function(argFoo) { // Original name: keyExtractor
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.value;
                        entity = null;
                        if(!(entity == zuuluu)) { _fun00004_ip = 30; continue _fun00003 }
 14:
                        zuuluu = michal.index;
                        entity = zuuluu.toString;
                        entity = entity.bind(zuuluu)();
                        _fun00004_ip = 44; continue _fun00003;
 30:
                        zuuluu = michal.value;
                        michal = zuuluu.toString;
                        entity = michal.bind(zuuluu)();
 44:
                        return entity;
                    }
                };
                entity['keyExtractor'] = michal;
                return entity;
            };
            zuuluu = verify.bind(report)(zuuluu, golfie);
            offset = zuuluu.data;
            var _closure2_slot5 = offset;
            foxtra = zuuluu.keyExtractor;
            verify = report.useEffect;
            golfie = new Array(2);
            golfie[0] = result;
            golfie[1] = michal;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = _closure2_slot3;
                    michal = zuuluu.setOptions;
                    entity = {};
                    oscard = _closure2_slot1;
                    tangon = _closure1_slot8;
                    tangon = tangon.USER;
                    if(!(tangon !== oscard)) { _fun00006_ip = 171; continue _fun00005 }
 39:
                    tangon = _closure1_slot8;
                    tangon = tangon.ACTION;
                    if(!(tangon !== oscard)) { _fun00006_ip = 112; continue _fun00005 }
 53:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    tangon = 8;
                    oscard = offset[tangon];
                    option = undefined;
                    oscard = verify.bind(option)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    tangon = offset[tangon];
                    tangon = verify.bind(option)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.pEasFR;
                    tangon = oscard.bind(golfie)(tangon);
                    _fun00006_ip = 228; continue _fun00005;
 112:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscard = 8;
                    golfie = yankee[oscard];
                    verify = undefined;
                    golfie = offset.bind(verify)(golfie);
                    option = golfie.intl;
                    golfie = option.string;
                    oscard = yankee[oscard];
                    oscard = offset.bind(verify)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.rautdn;
                    tangon = golfie.bind(option)(oscard);
                    _fun00006_ip = 228; continue _fun00005;
 171:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    report = 8;
                    oscard = offset[report];
                    option = undefined;
                    oscard = verify.bind(option)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.string;
                    report = offset[report];
                    report = verify.bind(option)(report);
                    report = report.t;
                    report = report.hxnY/v;
                    tangon = oscard.bind(golfie)(report);
 228:
                    entity['headerTitle'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = verify.bind(report)(zuuluu, golfie);
            golfie = report.useCallback;
            zuuluu = new Array(3);
            zuuluu[0] = result;
            zuuluu[1] = option;
            zuuluu[2] = michal;
            michal = function(argFoo, argBar) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argBar;
                    entity = argFoo;
                    if(!entity) { _fun00008_ip = 160; continue _fun00007 }
 12:
                    report = _closure2_slot1;
                    tangon = _closure1_slot8;
                    tangon = tangon.USER;
                    if(!(report !== tangon)) { _fun00008_ip = 94; continue _fun00007 }
 36:
                    report = _closure2_slot1;
                    tangon = _closure1_slot8;
                    tangon = tangon.ACTION;
                    if(!(report === tangon)) { _fun00008_ip = 146; continue _fun00007 }
 54:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    tangon = 14;
                    report = report[tangon];
                    tangon = undefined;
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.filterByAction;
                    tangon = _closure2_slot2;
                    tangon = report.bind(oscard)(michal, tangon);
                    _fun00008_ip = 146; continue _fun00007;
 94:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 14;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.filterByUserId;
                    zuuluu = null;
                    oscard = zuuluu != michal;
                    if(!oscard) { _fun00008_ip = 136; continue _fun00007 }
 131:
                    zuuluu = michal.id;
 136:
                    michal = _closure2_slot2;
                    michal = tangon.bind(report)(zuuluu, michal);
 146:
                    michal = _closure2_slot3;
                    entity = michal.pop;
                    entity = entity.bind(michal)();
 160:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = golfie.bind(report)(michal, zuuluu);
            var _closure2_slot6 = golfie;
            zuuluu = report.useCallback;
            michal = new Array(4);
            michal[0] = result;
            michal[1] = option;
            michal[2] = golfie;
            golfie = offset.length;
            michal[3] = golfie;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    michal = entity.item;
                    yankee = michal.value;
                    var _closure3_slot0 = yankee;
                    option = michal.selected;
                    var _closure3_slot1 = option;
                    report = michal.label;
                    foxtra = entity.index;
                    michal = _closure2_slot1;
                    entity = _closure1_slot8;
                    entity = entity.USER;
                    if(!(michal === entity)) { _fun00010_ip = 72; continue _fun00009 }
 63:
                    entity = null;
                    if(!(entity === yankee)) { _fun00010_ip = 377; continue _fun00009 }
 72:
                    tangon = _closure1_slot9;
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 17;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    entity = michal.bind(zuuluu)(entity);
                    michal = entity.TableRow;
                    entity = {};
                    verify = 0;
                    verify = verify === foxtra;
                    entity['start'] = verify;
                    verify = _closure2_slot5;
                    romeon = verify.length;
                    verify = 1;
                    verify = romeon - verify;
                    verify = foxtra === verify;
                    entity['end'] = verify;
                    romeon = _closure2_slot1;
                    verify = _closure1_slot8;
                    verify = verify.USER;
                    if(!(romeon !== verify)) { _fun00010_ip = 196; continue _fun00009 }
 158:
                    backup = _closure1_slot9;
                    romeon = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    verify = 20;
                    verify = kiloes[verify];
                    romeon = romeon.bind(zuuluu)(verify);
                    verify = {};
                    verify['action'] = yankee;
                    verify = backup.bind(zuuluu)(romeon, verify);
                    _fun00010_ip = 299; continue _fun00009;
 196:
                    kiloes = _closure1_slot9;
                    backup = _closure1_slot5;
                    romeon = {};
                    sizing = _closure1_slot12;
                    sizing = sizing.allUsersIconContainer;
                    romeon['style'] = sizing;
                    echoed = _closure1_slot1;
                    update = _closure1_slot2;
                    result = 18;
                    sizing = update[result];
                    output = echoed.bind(zuuluu)(sizing);
                    sizing = {};
                    result = update[result];
                    result = echoed.bind(zuuluu)(result);
                    result = result.Sizes;
                    result = result.MEDIUM;
                    sizing['size'] = result;
                    result = 19;
                    result = update[result];
                    result = echoed.bind(zuuluu)(result);
                    sizing['source'] = result;
                    sizing = kiloes.bind(zuuluu)(output, sizing);
                    romeon['children'] = sizing;
                    verify = kiloes.bind(zuuluu)(backup, romeon);
 299:
                    entity['icon'] = verify;
                    entity['label'] = report;
                    report = function() { // Original name: onPress
                        tangon = _closure2_slot6;
                        michal = _closure3_slot1;
                        zuuluu = !michal;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    entity['onPress'] = report;
                    romeon = _closure1_slot9;
                    verify = _closure1_slot0;
                    backup = _closure1_slot2;
                    report = 16;
                    report = backup[report];
                    report = verify.bind(zuuluu)(report);
                    verify = report.FormRadio;
                    report = {};
                    report['selected'] = option;
                    report = romeon.bind(zuuluu)(verify, report);
                    entity['trailing'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    _fun00010_ip = 513; continue _fun00009;
 377:
                    report = _closure1_slot9;
                    zuuluu = _closure1_slot1;
                    verify = _closure1_slot2;
                    michal = 15;
                    michal = verify[michal];
                    tangon = undefined;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = {};
                    romeon = 0;
                    romeon = romeon === foxtra;
                    michal['start'] = romeon;
                    romeon = _closure2_slot5;
                    backup = romeon.length;
                    romeon = 1;
                    romeon = backup - romeon;
                    romeon = foxtra === romeon;
                    michal['end'] = romeon;
                    yankee = yankee.id;
                    michal['userId'] = yankee;
                    offset = _closure2_slot2;
                    michal['guildId'] = offset;
                    golfie = function() { // Original name: onPress
                        tangon = _closure2_slot6;
                        michal = _closure3_slot1;
                        zuuluu = !michal;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    };
                    michal['onPress'] = golfie;
                    golfie = _closure1_slot0;
                    oscard = 16;
                    oscard = verify[oscard];
                    oscard = golfie.bind(tangon)(oscard);
                    golfie = oscard.FormRadio;
                    oscard = {};
                    oscard['selected'] = option;
                    oscard = report.bind(tangon)(golfie, oscard);
                    michal['trailing'] = oscard;
                    entity = report.bind(tangon)(zuuluu, michal);
 513:
                    return entity;
                }
            };
            romeon = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot11;
            michal = _closure1_slot10;
            entity = {};
            option = _closure1_slot9;
            golfie = _closure1_slot5;
            report = {};
            verify = _closure1_slot12;
            verify = verify.searchBar;
            report['style'] = verify;
            verify = 21;
            verify = sizing[verify];
            verify = backup.bind(tangon)(verify);
            backup = verify.SearchField;
            verify = {};
            sizing = 'md';
            verify['size'] = sizing;
            sizing = _closure1_slot8;
            sizing = sizing.USER;
            if(!(result !== sizing)) { _fun00002_ip = 510; continue _fun00001 }
 380:
            sizing = _closure1_slot8;
            sizing = sizing.ACTION;
            if(!(result !== sizing)) { _fun00002_ip = 451; continue _fun00001 }
 394:
            update = _closure1_slot0;
            source = _closure1_slot2;
            sizing = 8;
            result = source[sizing];
            result = update.bind(tangon)(result);
            echoed = result.intl;
            result = echoed.string;
            sizing = source[sizing];
            sizing = update.bind(tangon)(sizing);
            sizing = sizing.t;
            sizing = sizing.5h0QOD;
            sizing = result.bind(echoed)(sizing);
            _fun00002_ip = 508; continue _fun00001;
 451:
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            result = 8;
            echoed = ctrled[result];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = ctrled[result];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.I288Z2;
            sizing = echoed.bind(update)(result);
 508:
            _fun00002_ip = 565; continue _fun00001;
 510:
            source = _closure1_slot0;
            ctrled = _closure1_slot2;
            result = 8;
            echoed = ctrled[result];
            echoed = source.bind(tangon)(echoed);
            update = echoed.intl;
            echoed = update.string;
            result = ctrled[result];
            result = source.bind(tangon)(result);
            result = result.t;
            result = result.pYHobG;
            sizing = echoed.bind(update)(result);
 565:
            verify['placeholder'] = sizing;
            verify['onChange'] = kiloes;
            verify = option.bind(tangon)(backup, verify);
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(3);
            report[0] = golfie;
            golfie = offset.length;
            if(!(output !== golfie)) { _fun00002_ip = 716; continue _fun00001 }
 608:
            verify = _closure1_slot9;
            option = _closure1_slot0;
            backup = _closure1_slot2;
            golfie = 24;
            golfie = backup[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.FlashList;
            golfie = {};
            golfie['keyExtractor'] = foxtra;
            golfie['renderItem'] = romeon;
            romeon = 50;
            golfie['estimatedItemSize'] = romeon;
            golfie['data'] = offset;
            offset = {};
            foxtra = _closure1_slot1;
            romeon = 7;
            romeon = backup[romeon];
            romeon = foxtra.bind(tangon)(romeon);
            romeon = romeon.spacing;
            romeon = romeon.PX_12;
            offset['paddingHorizontal'] = romeon;
            offset['paddingBottom'] = yankee;
            golfie['contentContainerStyle'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            _fun00002_ip = 881; continue _fun00001;
 716:
            offset = _closure1_slot9;
            verify = _closure1_slot1;
            foxtra = _closure1_slot2;
            option = 22;
            option = foxtra[option];
            verify = verify.bind(tangon)(option);
            option = {};
            romeon = _closure1_slot0;
            yankee = 8;
            backup = foxtra[yankee];
            backup = romeon.bind(tangon)(backup);
            sizing = backup.intl;
            kiloes = sizing.string;
            backup = foxtra[yankee];
            backup = romeon.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.V6nAfH;
            backup = kiloes.bind(sizing)(backup);
            option['body'] = backup;
            backup = foxtra[yankee];
            backup = romeon.bind(tangon)(backup);
            sizing = backup.intl;
            kiloes = sizing.formatToPlainString;
            yankee = foxtra[yankee];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.t;
            backup = yankee.ZGVL3t;
            yankee = {};
            yankee['count'] = output;
            yankee = kiloes.bind(sizing)(backup, yankee);
            option['title'] = yankee;
            yankee = 23;
            yankee = foxtra[yankee];
            yankee = romeon.bind(tangon)(yankee);
            yankee = yankee.NoResults;
            option['Illustration'] = yankee;
            golfie = offset.bind(tangon)(verify, option);
 881:
            report[1] = golfie;
            option = _closure1_slot9;
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 25;
            oscard = verify[oscard];
            oscard = golfie.bind(tangon)(oscard);
            golfie = oscard.NavScrim;
            oscard = {};
            oscard = option.bind(tangon)(golfie, oscard);
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: createAuditLogFilterUserData
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        entity = new Array(0);
        var _closure2_slot1 = entity;
        report = entity.push;
        tangon = {};
        yankee = _closure1_slot0;
        romeon = _closure1_slot2;
        oscard = 8;
        option = romeon[oscard];
        offset = undefined;
        option = yankee.bind(offset)(option);
        verify = option.intl;
        option = verify.string;
        oscard = romeon[oscard];
        oscard = yankee.bind(offset)(oscard);
        oscard = oscard.t;
        oscard = oscard.ZRFdsL;
        oscard = option.bind(verify)(oscard);
        tangon['label'] = oscard;
        oscard = null;
        tangon['value'] = oscard;
        oscard = oscard == golfie;
        tangon['selected'] = oscard;
        oscard = 0;
        tangon['index'] = oscard;
        tangon = report.bind(entity)(tangon);
        tangon = global;
        tangon = tangon.Set;
        report = tangon.prototype;
        report = Object.create(report, {constructor: {value: tangon}});
        backup = report;
        tangon = new backup[tangon](foxtra);
        tangon = tangon instanceof Object ? tangon : report;
        var _closure2_slot2 = tangon;
        tangon = function(argFoo) { // Original name: userIdResolver
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                michal = null;
                if(!(michal != zuuluu)) { _fun00012_ip = 155; continue _fun00011 }
 12:
                tangon = _closure1_slot6;
                entity = tangon.getUser;
                report = entity.bind(tangon)(zuuluu);
                golfie = _closure2_slot2;
                entity = golfie.has;
                entity = entity.bind(golfie)(zuuluu);
                if(entity) { _fun00012_ip = 54; continue _fun00011 }
 50:
                entity = michal == report;
 54:
                if(entity) { _fun00012_ip = 155; continue _fun00011 }
 57:
                michal = _closure2_slot2;
                entity = michal.add;
                entity = entity.bind(michal)(zuuluu);
                zuuluu = _closure2_slot1;
                michal = zuuluu.push;
                entity = {};
                option = _closure1_slot1;
                golfie = _closure1_slot2;
                oscard = 9;
                golfie = golfie[oscard];
                oscard = undefined;
                golfie = option.bind(oscard)(golfie);
                oscard = golfie.getUserTag;
                oscard = oscard.bind(golfie)(report);
                entity['label'] = oscard;
                entity['value'] = report;
                report = report.id;
                tangon = _closure2_slot0;
                tangon = report === tangon;
                entity['selected'] = tangon;
                tangon = zuuluu.length;
                entity['index'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 155:
                entity = undefined;
                return entity;
            }
        };
        var _closure2_slot3 = tangon;
        zuuluu = _closure1_slot7;
        oscard = zuuluu.logs;
        report = oscard.forEach;
        tangon = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.userId;
            michal = _closure2_slot3;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        tangon = report.bind(oscard)(tangon);
        report = zuuluu.userIds;
        tangon = report.forEach;
        zuuluu = function(argFoo) {
            zuuluu = _closure2_slot3;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = entity.sort;
        michal = function(argFoo, argBar) {
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                michal = tangon.selected;
                entity = -1;
                if(michal) { _fun00014_ip = 50; continue _fun00013 }
 21:
                report = zuuluu.selected;
                michal = 1;
                if(report) { _fun00014_ip = 47; continue _fun00013 }
 33:
                tangon = tangon.index;
                zuuluu = zuuluu.index;
                michal = tangon - zuuluu;
 47:
                entity = michal;
 50:
                return entity;
            }
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['createAuditLogFilterUserData'] = tangon;
    michal = function(argFoo) { // Original name: createAuditLogFilterActionData
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 10;
        zuuluu = zuuluu[michal];
        michal = undefined;
        zuuluu = tangon.bind(michal)(zuuluu);
        michal = zuuluu.ACTION_FILTER_ITEMS;
        tangon = michal.bind(zuuluu)();
        zuuluu = tangon.map;
        michal = function(argFoo, argBar) {
            michal = argFoo;
            entity = {};
            zuuluu = michal.label;
            entity['label'] = zuuluu;
            zuuluu = michal.value;
            entity['value'] = zuuluu;
            zuuluu = _closure2_slot0;
            michal = michal.value;
            michal = zuuluu === michal;
            entity['selected'] = michal;
            michal = argBar;
            entity['index'] = michal;
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.sort;
        entity = function(argFoo, argBar) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                michal = tangon.selected;
                entity = -1;
                if(michal) { _fun00016_ip = 50; continue _fun00015 }
 21:
                report = zuuluu.selected;
                michal = 1;
                if(report) { _fun00016_ip = 47; continue _fun00015 }
 33:
                tangon = tangon.index;
                zuuluu = zuuluu.index;
                michal = tangon - zuuluu;
 47:
                entity = michal;
 50:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['createAuditLogFilterActionData'] = michal;
    return entity;
})();