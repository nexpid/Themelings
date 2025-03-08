// app/modules/user_settings/native/UserSettingsAuthedApp.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
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
            verify = _closure1_slot13;
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
            golfie = _closure1_slot13;
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
    entity = function(argFoo) { // Original name: AuthorizedAppTwoWay
        michal = argFoo;
        backup = michal.application;
        michal = _closure1_slot11;
        tangon = undefined;
        verify = michal.bind(tangon)();
        offset = _closure1_slot0;
        kiloes = _closure1_slot2;
        michal = 8;
        michal = kiloes[michal];
        zuuluu = offset.bind(tangon)(michal);
        michal = zuuluu.useNavigation;
        golfie = michal.bind(zuuluu)();
        var _closure2_slot0 = golfie;
        report = _closure1_slot3;
        zuuluu = report.useCallback;
        michal = new Array(1);
        michal[0] = golfie;
        entity = function() {
            tangon = _closure2_slot0;
            zuuluu = tangon.dispatch;
            report = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            michal = report.bind(entity)(michal);
            oscard = michal.CommonActions;
            report = oscard.navigate;
            michal = {};
            golfie = _closure1_slot8;
            golfie = golfie.CONNECTIONS;
            michal['name'] = golfie;
            michal = report.bind(oscard)(michal);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        foxtra = zuuluu.bind(report)(entity, michal);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot5;
        entity = {};
        report = verify.twoWayWarning;
        entity['style'] = report;
        option = _closure1_slot9;
        report = 10;
        report = kiloes[report];
        report = offset.bind(tangon)(report);
        golfie = report.CircleInformationIcon;
        report = {};
        yankee = 'xs';
        report['size'] = yankee;
        romeon = _closure1_slot1;
        yankee = 7;
        yankee = kiloes[yankee];
        yankee = romeon.bind(tangon)(yankee);
        yankee = yankee.colors;
        yankee = yankee.TEXT_MUTED;
        report['color'] = yankee;
        verify = verify.twoWayWarningIcon;
        report['style'] = verify;
        golfie = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot9;
        oscard = 11;
        oscard = kiloes[oscard];
        oscard = offset.bind(tangon)(oscard);
        golfie = oscard.TextWithIOSLinkWorkaround;
        oscard = {'color': 'text-normal', 'variant': 'text-sm/medium'};
        verify = 12;
        yankee = kiloes[verify];
        yankee = offset.bind(tangon)(yankee);
        romeon = yankee.intl;
        yankee = romeon.format;
        verify = kiloes[verify];
        verify = offset.bind(tangon)(verify);
        verify = verify.t;
        offset = verify.jUhnwc;
        verify = {};
        backup = backup.name;
        verify['applicationName'] = backup;
        verify['onConnectionPress'] = foxtra;
        verify = yankee.bind(romeon)(offset, verify);
        oscard['children'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
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
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    romeon = 1;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ScrollView;
    var _closure1_slot4 = golfie;
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserSettingsSections;
    var _closure1_slot8 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot9 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    offset = 24;
    verify = {'paddingHorizontal': 16, 'paddingVertical': 24};
    tangon['container'] = verify;
    verify = {};
    verify['marginBottom'] = offset;
    tangon['section'] = verify;
    verify = {'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 16};
    tangon['header'] = verify;
    verify = {};
    offset = 8;
    verify['marginTop'] = offset;
    tangon['appAboutDescription'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center', 'marginTop': 8};
    tangon['tosPrivacy'] = verify;
    verify = {'flexDirection': 'row', 'marginTop': 8};
    tangon['permissionContainer'] = verify;
    verify = {};
    verify['marginTop'] = romeon;
    tangon['permissionIcon'] = verify;
    verify = {};
    verify['marginLeft'] = offset;
    tangon['permissionText'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['tos'] = verify;
    verify = {'flexDirection': 'row', 'alignItems': 'center'};
    tangon['privacy'] = verify;
    verify = {'width': 1, 'height': 12, 'backgroundColor': null, 'marginHorizontal': 8};
    offset = 7;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_TERTIARY;
    verify['backgroundColor'] = romeon;
    tangon['divider'] = verify;
    verify = {'marginTop': 8, 'display': 'flex', 'flexDirection': 'row'};
    tangon['twoWayWarning'] = verify;
    verify = {'width': 16, 'height': 16, 'marginRight': 8};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.TEXT_MUTED;
    verify['color'] = offset;
    tangon['twoWayWarningIcon'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 27;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_settings/native/UserSettingsAuthedApp.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserSettingsAuthedApp
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.oauth2Token;
            var _closure2_slot0 = report;
            entity = _closure1_slot11;
            tangon = undefined;
            cntext = entity.bind(tangon)();
            var _closure2_slot1 = cntext;
            update = report.application;
            var _closure2_slot2 = update;
            entity = report.scopes;
            var _closure2_slot3 = entity;
            entity = report.disclosures;
            var _closure2_slot4 = entity;
            output = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = 13;
            michal = foxtra[entity];
            option = output.bind(tangon)(michal);
            golfie = option.useStateFromStores;
            michal = _closure1_slot6;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                michal = _closure1_slot6;
                entity = michal.getApps;
                entity = entity.bind(michal)();
                return entity;
            };
            option = golfie.bind(option)(zuuluu, michal);
            var _closure2_slot5 = option;
            entity = foxtra[entity];
            golfie = output.bind(tangon)(entity);
            zuuluu = golfie.useStateFromStores;
            entity = _closure1_slot7;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = _closure1_slot7;
                entity = entity.locale;
                return entity;
            };
            verify = zuuluu.bind(golfie)(michal, entity);
            entity = 8;
            entity = foxtra[entity];
            michal = output.bind(tangon)(entity);
            entity = michal.useNavigation;
            entity = entity.bind(michal)();
            var _closure2_slot6 = entity;
            michal = 14;
            michal = foxtra[michal];
            golfie = output.bind(tangon)(michal);
            zuuluu = golfie.useShouldWarnAuthorizedAppTwoWay;
            michal = update.id;
            michal = zuuluu.bind(golfie)(michal);
            var _closure2_slot7 = michal;
            backup = _closure1_slot1;
            michal = 15;
            michal = foxtra[michal];
            golfie = backup.bind(tangon)(michal);
            zuuluu = golfie.getApplicationIconSource;
            michal = {};
            offset = update.id;
            michal['id'] = offset;
            offset = update.icon;
            michal['icon'] = offset;
            romeon = zuuluu.bind(golfie)(michal);
            golfie = _closure1_slot3;
            zuuluu = golfie.useEffect;
            michal = new Array(3);
            michal[0] = option;
            michal[1] = report;
            michal[2] = entity;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00010_ip = 40; continue _fun00009 }
 16:
                    report = _closure2_slot5;
                    tangon = report.some;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        michal = entity.id;
                        entity = _closure2_slot0;
                        entity = entity.id;
                        entity = michal === entity;
                        return entity;
                    };
                    michal = tangon.bind(report)(zuuluu);
 40:
                    if(michal) { _fun00010_ip = 57; continue _fun00009 }
 43:
                    michal = _closure2_slot6;
                    entity = michal.goBack;
                    entity = entity.bind(michal)();
 57:
                    entity = undefined;
                    return entity;
                }
            };
            entity = zuuluu.bind(golfie)(entity, michal);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot4;
            entity = {};
            golfie = cntext.container;
            entity['contentContainerStyle'] = golfie;
            golfie = 20;
            golfie = foxtra[golfie];
            option = backup.bind(tangon)(golfie);
            golfie = option.extractTimestamp;
            report = report.id;
            variable37 = golfie.bind(option)(report);
            report = global;
            report = report.Date;
            golfie = report.prototype;
            golfie = Object.create(golfie, {constructor: {value: report}});
            variable38 = golfie;
            report = new variable38[report](variable37, variable36);
            option = report instanceof Object ? report : golfie;
            golfie = option.toLocaleDateString;
            report = {'year': 'numeric', 'month': 'short', 'day': 'numeric'};
            echoed = golfie.bind(option)(verify, report);
            option = _closure1_slot10;
            golfie = _closure1_slot5;
            report = {};
            offset = cntext.header;
            verify = new Array(2);
            verify[0] = offset;
            offset = cntext.section;
            verify[1] = offset;
            report['style'] = verify;
            yankee = _closure1_slot9;
            verify = 21;
            verify = foxtra[verify];
            offset = backup.bind(tangon)(verify);
            verify = {};
            verify['iconSource'] = romeon;
            romeon = 7;
            romeon = foxtra[romeon];
            romeon = backup.bind(tangon)(romeon);
            romeon = romeon.radii;
            romeon = romeon.xl;
            verify['iconBorderRadius'] = romeon;
            romeon = 64;
            verify['iconSize'] = romeon;
            offset = yankee.bind(tangon)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            romeon = _closure1_slot9;
            sequen = 18;
            offset = foxtra[sequen];
            offset = output.bind(tangon)(offset);
            yankee = offset.Text;
            offset = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            status = 12;
            backup = foxtra[status];
            backup = output.bind(tangon)(backup);
            result = backup.intl;
            sizing = result.format;
            backup = foxtra[status];
            backup = output.bind(tangon)(backup);
            backup = backup.t;
            kiloes = backup.yOApCA;
            backup = {};
            backup['date'] = echoed;
            backup = sizing.bind(result)(kiloes, backup);
            offset['children'] = backup;
            offset = romeon.bind(tangon)(yankee, offset);
            verify[1] = offset;
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(3);
            report[0] = golfie;
            kiloes = update.description;
            verify = _closure1_slot10;
            option = _closure1_slot5;
            golfie = {};
            offset = cntext.section;
            golfie['style'] = offset;
            romeon = _closure1_slot9;
            offset = foxtra[sequen];
            offset = output.bind(tangon)(offset);
            yankee = offset.Text;
            offset = {'variant': 'heading-sm/semibold', 'color': 'header-primary'};
            backup = foxtra[status];
            backup = output.bind(tangon)(backup);
            sizing = backup.intl;
            backup = sizing.string;
            foxtra = foxtra[status];
            foxtra = output.bind(tangon)(foxtra);
            foxtra = foxtra.t;
            foxtra = foxtra.GfRGra;
            foxtra = backup.bind(sizing)(foxtra);
            offset['children'] = foxtra;
            yankee = romeon.bind(tangon)(yankee, offset);
            offset = new Array(3);
            offset[0] = yankee;
            source = null;
            yankee = null;
            if(!(tangon !== kiloes)) { _fun00008_ip = 830; continue _fun00007 }
 758:
            romeon = '';
            yankee = null;
            if(!(romeon !== kiloes)) { _fun00008_ip = 830; continue _fun00007 }
 768:
            backup = _closure1_slot9;
            foxtra = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[sequen];
            romeon = foxtra.bind(tangon)(romeon);
            foxtra = romeon.Text;
            romeon = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-normal'};
            sizing = cntext.appAboutDescription;
            romeon['style'] = sizing;
            romeon['children'] = kiloes;
            yankee = backup.bind(tangon)(foxtra, romeon);
 830:
            offset[1] = yankee;
            yankee = update.terms_of_service_url;
            if(!(source == yankee)) { _fun00008_ip = 862; continue _fun00007 }
 844:
            yankee = update.privacy_policy_url;
            romeon = source != yankee;
            yankee = null;
            if(!romeon) { _fun00008_ip = 1449; continue _fun00007 }
 862:
            backup = _closure1_slot10;
            foxtra = _closure1_slot5;
            romeon = {};
            kiloes = cntext.tosPrivacy;
            romeon['style'] = kiloes;
            kiloes = update.terms_of_service_url;
            kiloes = source != kiloes;
            sizing = null;
            if(!kiloes) { _fun00008_ip = 1123; continue _fun00007 }
 900:
            result = _closure1_slot9;
            output = _closure1_slot5;
            kiloes = {};
            vacuum = _closure1_slot10;
            target = _closure1_slot0;
            limora = _closure1_slot2;
            echoed = 17;
            echoed = limora[echoed];
            echoed = target.bind(tangon)(echoed);
            ctrled = echoed.PressableOpacity;
            echoed = {};
            record = function() { // Original name: handleClickToS
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = entity.terms_of_service_url;
                    entity = null;
                    if(!(entity != michal)) { _fun00012_ip = 79; continue _fun00011 }
 19:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 16;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.handleClick;
                    entity = {};
                    tangon = _closure2_slot2;
                    tangon = tangon.terms_of_service_url;
                    entity['href'] = tangon;
                    tangon = true;
                    entity['shouldConfirm'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            echoed['onPress'] = record;
            record = cntext.tos;
            echoed['style'] = record;
            sierra = _closure1_slot9;
            record = limora[sequen];
            record = target.bind(tangon)(record);
            papara = record.Text;
            record = {'variant': 'text-sm/normal', 'color': 'text-link'};
            whisks = limora[status];
            whisks = target.bind(tangon)(whisks);
            quebec = whisks.intl;
            equals = quebec.string;
            whisks = limora[status];
            whisks = target.bind(tangon)(whisks);
            whisks = whisks.t;
            whisks = whisks.lx+GeX;
            whisks = equals.bind(quebec)(whisks);
            record['children'] = whisks;
            papara = sierra.bind(tangon)(papara, record);
            record = new Array(2);
            record[0] = papara;
            sierra = _closure1_slot9;
            papara = 19;
            papara = limora[papara];
            papara = target.bind(tangon)(papara);
            target = papara.LinkExternalSmallIcon;
            papara = {'size': 'xs', 'color': 'text-link'};
            papara = sierra.bind(tangon)(target, papara);
            record[1] = papara;
            echoed['children'] = record;
            echoed = vacuum.bind(tangon)(ctrled, echoed);
            kiloes['children'] = echoed;
            sizing = result.bind(tangon)(output, kiloes);
 1123:
            kiloes = new Array(2);
            kiloes[0] = sizing;
            sizing = update.privacy_policy_url;
            output = source != sizing;
            sizing = null;
            if(!output) { _fun00008_ip = 1435; continue _fun00007 }
 1149:
            echoed = _closure1_slot10;
            result = _closure1_slot5;
            output = {};
            ctrled = cntext.privacy;
            output['style'] = ctrled;
            update = update.terms_of_service_url;
            update = source != update;
            source = null;
            if(!update) { _fun00008_ip = 1210; continue _fun00007 }
 1184:
            vacuum = _closure1_slot9;
            ctrled = _closure1_slot5;
            update = {};
            record = cntext.divider;
            update['style'] = record;
            source = vacuum.bind(tangon)(ctrled, update);
 1210:
            update = new Array(2);
            update[0] = source;
            vacuum = _closure1_slot10;
            record = _closure1_slot0;
            papara = _closure1_slot2;
            source = 17;
            source = papara[source];
            source = record.bind(tangon)(source);
            ctrled = source.PressableOpacity;
            source = {};
            target = function() { // Original name: handleClickPrivacyPolicy
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = entity.privacy_policy_url;
                    entity = null;
                    if(!(entity != michal)) { _fun00014_ip = 79; continue _fun00013 }
 19:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 16;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.handleClick;
                    entity = {};
                    tangon = _closure2_slot2;
                    tangon = tangon.privacy_policy_url;
                    entity['href'] = tangon;
                    tangon = true;
                    entity['shouldConfirm'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 79:
                    entity = undefined;
                    return entity;
                }
            };
            source['onPress'] = target;
            cntext = cntext.privacy;
            source['style'] = cntext;
            target = _closure1_slot9;
            sequen = papara[sequen];
            sequen = record.bind(tangon)(sequen);
            cntext = sequen.Text;
            sequen = {'variant': 'text-sm/normal', 'color': 'text-link'};
            sierra = papara[status];
            sierra = record.bind(tangon)(sierra);
            limora = sierra.intl;
            sierra = limora.string;
            status = papara[status];
            status = record.bind(tangon)(status);
            status = status.t;
            status = status.okSwq6;
            status = sierra.bind(limora)(status);
            sequen['children'] = status;
            cntext = target.bind(tangon)(cntext, sequen);
            sequen = new Array(2);
            sequen[0] = cntext;
            cntext = _closure1_slot9;
            config = 19;
            config = papara[config];
            config = record.bind(tangon)(config);
            record = config.LinkExternalSmallIcon;
            config = {'size': 'xs', 'color': 'text-link'};
            config = cntext.bind(tangon)(record, config);
            sequen[1] = config;
            source['children'] = sequen;
            source = vacuum.bind(tangon)(ctrled, source);
            update[1] = source;
            output['children'] = update;
            sizing = echoed.bind(tangon)(result, output);
 1435:
            kiloes[1] = sizing;
            romeon['children'] = kiloes;
            yankee = backup.bind(tangon)(foxtra, romeon);
 1449:
            offset[2] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report[1] = golfie;
            oscard = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    yankee = new Array(0);
                    var _closure3_slot0 = yankee;
                    michal = _closure1_slot12;
                    entity = _closure2_slot3;
                    tangon = undefined;
                    verify = michal.bind(tangon)(entity);
                    zuuluu = verify.bind(tangon)();
                    entity = zuuluu.done;
                    sizing = 12;
                    oscard = 22;
                    michal = 0;
                    report = 23;
                    if(entity) { _fun00016_ip = 231; continue _fun00015 }
 57:
                    romeon = zuuluu.value;
                    kiloes = yankee.push;
                    foxtra = _closure1_slot0;
                    entity = _closure1_slot2;
                    backup = entity[oscard];
                    result = foxtra.bind(tangon)(backup);
                    output = result.getScopeNames;
                    backup = _closure2_slot3;
                    update = output.bind(result)(romeon, backup);
                    backup = new Array(0);
                    source = backup;
                    echoed = 0;
                    output = arraySpread(source, update, echoed);
                    source = kiloes;
                    update = backup;
                    echoed = yankee;
                    backup = apply(source, update, echoed);
                    entity = entity[report];
                    entity = foxtra.bind(tangon)(entity);
                    entity = entity.OAuth2Scopes;
                    entity = entity.APPLICATIONS_COMMANDS;
                    if(!(romeon === entity)) { _fun00016_ip = 213; continue _fun00015 }
 151:
                    romeon = yankee.push;
                    kiloes = _closure1_slot0;
                    entity = _closure1_slot2;
                    foxtra = entity[sizing];
                    foxtra = kiloes.bind(tangon)(foxtra);
                    backup = foxtra.intl;
                    foxtra = backup.string;
                    entity = entity[sizing];
                    entity = kiloes.bind(tangon)(entity);
                    entity = entity.t;
                    entity = entity.Ls2XRk;
                    entity = foxtra.bind(backup)(entity);
                    entity = romeon.bind(yankee)(entity);
 213:
                    romeon = verify.bind(tangon)();
                    entity = romeon.done;
                    zuuluu = romeon;
                    if(!entity) { _fun00016_ip = 57; continue _fun00015 }
 231:
                    entity = yankee.length;
                    if(!(!(entity > michal))) { _fun00016_ip = 272; continue _fun00015 }
 240:
                    zuuluu = _closure2_slot4;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00016_ip = 263; continue _fun00015 }
 250:
                    entity = _closure2_slot4;
                    entity = entity.length;
                    if(!(!(entity > michal))) { _fun00016_ip = 272; continue _fun00015 }
 263:
                    entity = _closure2_slot7;
                    if(entity) { _fun00016_ip = 272; continue _fun00015 }
 270:
                    return tangon;
 272:
                    zuuluu = _closure1_slot10;
                    michal = _closure1_slot5;
                    entity = {};
                    report = _closure2_slot1;
                    report = report.section;
                    entity['style'] = report;
                    verify = _closure1_slot9;
                    kiloes = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 18;
                    report = romeon[report];
                    report = kiloes.bind(tangon)(report);
                    oscard = report.Text;
                    report = {'variant': 'heading-sm/semibold', 'color': 'header-primary'};
                    foxtra = romeon[sizing];
                    foxtra = kiloes.bind(tangon)(foxtra);
                    backup = foxtra.intl;
                    foxtra = backup.string;
                    romeon = romeon[sizing];
                    romeon = kiloes.bind(tangon)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.xrmhRU;
                    romeon = foxtra.bind(backup)(romeon);
                    report['children'] = romeon;
                    oscard = verify.bind(tangon)(oscard, report);
                    report = new Array(4);
                    report[0] = oscard;
                    verify = yankee.map;
                    oscard = function(argFoo, argBar) {
                        report = _closure1_slot10;
                        tangon = _closure1_slot5;
                        zuuluu = {};
                        verify = _closure2_slot1;
                        entity = verify.permissionContainer;
                        zuuluu['style'] = entity;
                        yankee = _closure1_slot9;
                        golfie = _closure1_slot0;
                        offset = _closure1_slot2;
                        entity = 24;
                        entity = offset[entity];
                        michal = undefined;
                        entity = golfie.bind(michal)(entity);
                        option = entity.CircleCheckIcon;
                        entity = {};
                        romeon = verify.permissionIcon;
                        entity['style'] = romeon;
                        romeon = 'xs';
                        entity['size'] = romeon;
                        foxtra = _closure1_slot1;
                        romeon = 7;
                        romeon = offset[romeon];
                        romeon = foxtra.bind(michal)(romeon);
                        romeon = romeon.colors;
                        romeon = romeon.STATUS_POSITIVE;
                        entity['color'] = romeon;
                        option = yankee.bind(michal)(option, entity);
                        entity = new Array(2);
                        entity[0] = option;
                        option = _closure1_slot9;
                        oscard = 18;
                        oscard = offset[oscard];
                        oscard = golfie.bind(michal)(oscard);
                        golfie = oscard.Text;
                        oscard = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-normal'};
                        verify = verify.permissionText;
                        oscard['style'] = verify;
                        verify = argFoo;
                        oscard['children'] = verify;
                        oscard = option.bind(michal)(golfie, oscard);
                        entity[1] = oscard;
                        zuuluu['children'] = entity;
                        entity = argBar;
                        entity = report.bind(michal)(tangon, zuuluu, entity);
                        return entity;
                    };
                    oscard = verify.bind(yankee)(oscard);
                    report[1] = oscard;
                    verify = _closure2_slot4;
                    oscard = null;
                    verify = oscard == verify;
                    oscard = undefined;
                    if(verify) { _fun00016_ip = 457; continue _fun00015 }
 436:
                    yankee = _closure2_slot4;
                    verify = yankee.map;
                    option = function(argFoo, argBar) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            backup = argFoo;
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 25;
                            entity = zuuluu[entity];
                            oscard = undefined;
                            michal = michal.bind(oscard)(entity);
                            entity = michal.getTextForDisclosure;
                            offset = entity.bind(michal)(backup);
                            entity = null;
                            michal = entity != offset;
                            if(!michal) { _fun00018_ip = 226; continue _fun00017 }
 51:
                            report = _closure1_slot10;
                            tangon = _closure1_slot5;
                            zuuluu = {};
                            yankee = _closure2_slot1;
                            michal = yankee.permissionContainer;
                            zuuluu['style'] = michal;
                            foxtra = _closure1_slot9;
                            option = _closure1_slot0;
                            romeon = _closure1_slot2;
                            michal = 26;
                            michal = romeon[michal];
                            michal = option.bind(oscard)(michal);
                            verify = michal.DisclosureIcon;
                            michal = {};
                            kiloes = yankee.permissionIcon;
                            michal['style'] = kiloes;
                            michal['disclosure'] = backup;
                            verify = foxtra.bind(oscard)(verify, michal);
                            michal = new Array(2);
                            michal[0] = verify;
                            verify = _closure1_slot9;
                            golfie = 18;
                            golfie = romeon[golfie];
                            golfie = option.bind(oscard)(golfie);
                            option = golfie.Text;
                            golfie = {};
                            yankee = yankee.permissionText;
                            golfie['style'] = yankee;
                            yankee = 'text-sm/normal';
                            golfie['variant'] = yankee;
                            golfie['children'] = offset;
                            golfie = verify.bind(oscard)(option, golfie);
                            michal[1] = golfie;
                            zuuluu['children'] = michal;
                            michal = _closure3_slot0;
                            golfie = michal.length;
                            michal = argBar;
                            michal = michal + golfie;
                            entity = report.bind(oscard)(tangon, zuuluu, michal);
 226:
                            return entity;
                        }
                    };
                    oscard = verify.bind(yankee)(option);
 457:
                    report[2] = oscard;
                    oscard = _closure2_slot7;
                    if(!oscard) { _fun00016_ip = 492; continue _fun00015 }
 468:
                    verify = _closure1_slot9;
                    option = _closure1_slot14;
                    golfie = {};
                    offset = _closure2_slot2;
                    golfie['application'] = offset;
                    oscard = verify.bind(tangon)(option, golfie);
 492:
                    report[3] = oscard;
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            oscard = oscard.bind(tangon)();
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();