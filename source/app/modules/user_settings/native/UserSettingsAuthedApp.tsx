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
            verify = _closure1_slot18;
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
            golfie = _closure1_slot18;
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
    var _closure1_slot17 = entity;
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
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: AuthorizedAppTwoWay
        michal = argFoo;
        backup = michal.application;
        michal = _closure1_slot16;
        tangon = undefined;
        verify = michal.bind(tangon)();
        offset = _closure1_slot0;
        kiloes = _closure1_slot2;
        michal = 11;
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
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            michal = report.bind(entity)(michal);
            oscard = michal.CommonActions;
            report = oscard.navigate;
            michal = {};
            golfie = _closure1_slot10;
            golfie = golfie.CONNECTIONS;
            michal['name'] = golfie;
            michal = report.bind(oscard)(michal);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        foxtra = zuuluu.bind(report)(entity, michal);
        zuuluu = _closure1_slot15;
        michal = _closure1_slot5;
        entity = {};
        report = verify.twoWayWarning;
        entity['style'] = report;
        option = _closure1_slot14;
        report = 13;
        report = kiloes[report];
        report = offset.bind(tangon)(report);
        golfie = report.CircleInformationIcon;
        report = {};
        yankee = 'xs';
        report['size'] = yankee;
        romeon = _closure1_slot1;
        yankee = 10;
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
        option = _closure1_slot14;
        oscard = 14;
        oscard = kiloes[oscard];
        oscard = offset.bind(tangon)(oscard);
        golfie = oscard.TextWithIOSLinkWorkaround;
        oscard = {'color': 'text-normal', 'variant': 'text-sm/medium'};
        verify = 15;
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
    var _closure1_slot19 = entity;
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
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.UserSettingsSections;
    var _closure1_slot10 = golfie;
    golfie = tangon.ComponentActions;
    var _closure1_slot11 = golfie;
    tangon = tangon.AnalyticsSections;
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
    var _closure1_slot13 = tangon;
    offset = 8;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot14 = tangon;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot15 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    foxtra = 24;
    verify = {'paddingHorizontal': 16, 'paddingVertical': 24};
    tangon['container'] = verify;
    verify = {};
    verify['marginBottom'] = foxtra;
    tangon['section'] = verify;
    verify = {'flexDirection': 'column', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 16};
    tangon['header'] = verify;
    verify = {};
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
    offset = 10;
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
    var _closure1_slot16 = tangon;
    tangon = 43;
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
            entity = _closure1_slot16;
            tangon = undefined;
            offset = entity.bind(tangon)();
            var _closure2_slot1 = offset;
            sequen = report.application;
            var _closure2_slot2 = sequen;
            entity = report.scopes;
            var _closure2_slot3 = entity;
            entity = report.disclosures;
            var _closure2_slot4 = entity;
            update = _closure1_slot0;
            kiloes = _closure1_slot2;
            zuuluu = 16;
            entity = kiloes[zuuluu];
            option = update.bind(tangon)(entity);
            golfie = option.useStateFromStores;
            entity = _closure1_slot7;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot7;
                entity = michal.getApps;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = golfie.bind(option)(michal, entity);
            var _closure2_slot5 = yankee;
            entity = kiloes[zuuluu];
            option = update.bind(tangon)(entity);
            golfie = option.useStateFromStores;
            entity = _closure1_slot9;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = _closure1_slot9;
                entity = entity.locale;
                return entity;
            };
            verify = golfie.bind(option)(michal, entity);
            entity = kiloes[zuuluu];
            option = update.bind(tangon)(entity);
            golfie = option.useStateFromStores;
            entity = _closure1_slot6;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.getSelfEmbeddedActivities;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = golfie.bind(option)(michal, entity);
            var _closure2_slot6 = entity;
            michal = 11;
            michal = kiloes[michal];
            golfie = update.bind(tangon)(michal);
            michal = golfie.useNavigation;
            michal = michal.bind(golfie)();
            var _closure2_slot7 = michal;
            golfie = 17;
            golfie = kiloes[golfie];
            romeon = update.bind(tangon)(golfie);
            option = romeon.useShouldWarnAuthorizedAppTwoWay;
            golfie = sequen.id;
            golfie = option.bind(romeon)(golfie);
            var _closure2_slot8 = golfie;
            zuuluu = kiloes[zuuluu];
            romeon = update.bind(tangon)(zuuluu);
            option = romeon.useStateFromStores;
            zuuluu = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = zuuluu;
            zuuluu = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot8;
                    michal = zuuluu.isBlocked;
                    entity = _closure2_slot2;
                    report = null;
                    golfie = report == entity;
                    entity = undefined;
                    if(golfie) { _fun00010_ip = 55; continue _fun00009 }
 31:
                    tangon = _closure2_slot2;
                    tangon = tangon.bot;
                    report = report == tangon;
                    entity = undefined;
                    if(report) { _fun00010_ip = 55; continue _fun00009 }
 50:
                    entity = tangon.id;
 55:
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                }
            };
            zuuluu = option.bind(romeon)(golfie, zuuluu);
            var _closure2_slot9 = zuuluu;
            output = _closure1_slot1;
            zuuluu = 18;
            zuuluu = kiloes[zuuluu];
            option = output.bind(tangon)(zuuluu);
            golfie = option.getApplicationIconSource;
            zuuluu = {};
            romeon = sequen.id;
            zuuluu['id'] = romeon;
            romeon = sequen.icon;
            zuuluu['icon'] = romeon;
            backup = golfie.bind(option)(zuuluu);
            option = _closure1_slot3;
            golfie = option.useEffect;
            zuuluu = new Array(3);
            zuuluu[0] = yankee;
            zuuluu[1] = report;
            zuuluu[2] = michal;
            michal = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    michal = michal != zuuluu;
                    if(!michal) { _fun00012_ip = 40; continue _fun00011 }
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
                    if(michal) { _fun00012_ip = 57; continue _fun00011 }
 43:
                    michal = _closure2_slot7;
                    entity = michal.goBack;
                    entity = entity.bind(michal)();
 57:
                    entity = undefined;
                    return entity;
                }
            };
            michal = golfie.bind(option)(michal, zuuluu);
            golfie = _closure1_slot3;
            zuuluu = golfie.useCallback;
            michal = new Array(1);
            michal[0] = entity;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    option = entity.id;
                    report = entity.application;
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 19;
                    oscard = tangon[entity];
                    entity = undefined;
                    golfie = zuuluu.bind(entity)(oscard);
                    oscard = golfie.delete;
                    oscard = oscard.bind(golfie)(option);
                    golfie = _closure1_slot0;
                    oscard = 20;
                    oscard = tangon[oscard];
                    oscard = golfie.bind(entity)(oscard);
                    option = oscard.ComponentDispatch;
                    golfie = option.safeDispatch;
                    michal = _closure1_slot11;
                    oscard = michal.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION;
                    michal = {};
                    verify = report.id;
                    michal['applicationId'] = verify;
                    michal = golfie.bind(option)(oscard, michal);
                    golfie = _closure2_slot6;
                    oscard = golfie.get;
                    michal = report.id;
                    golfie = oscard.bind(golfie)(michal);
                    michal = 21;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.leaveActivity;
                    michal = {};
                    oscard = null;
                    option = oscard == golfie;
                    oscard = undefined;
                    if(option) { _fun00014_ip = 161; continue _fun00013 }
 156:
                    oscard = golfie.location;
 161:
                    michal['location'] = oscard;
                    report = report.id;
                    michal['applicationId'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = zuuluu.bind(golfie)(entity, michal);
            var _closure2_slot10 = entity;
            golfie = _closure1_slot3;
            zuuluu = golfie.useCallback;
            michal = new Array(3);
            michal[0] = sequen;
            michal[1] = entity;
            michal[2] = report;
            entity = function() {
                tangon = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 22;
                zuuluu = golfie[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.openAlert;
                oscard = _closure1_slot14;
                zuuluu = _closure1_slot1;
                michal = 23;
                michal = golfie[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                golfie = _closure2_slot2;
                michal['application'] = golfie;
                golfie = function() { // Original name: onDelete
                    zuuluu = _closure2_slot10;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal['onDelete'] = golfie;
                zuuluu = oscard.bind(entity)(zuuluu, michal);
                michal = 'confirm-delete-authed-app';
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            sizing = zuuluu.bind(golfie)(entity, michal);
            golfie = _closure1_slot3;
            zuuluu = golfie.useCallback;
            michal = function(argFoo) {
                tangon = _closure1_slot1;
                verify = _closure1_slot2;
                entity = 24;
                zuuluu = verify[entity];
                entity = undefined;
                golfie = tangon.bind(entity)(zuuluu);
                oscard = golfie.openLazy;
                option = _closure1_slot0;
                zuuluu = 26;
                zuuluu = verify[zuuluu];
                report = option.bind(entity)(zuuluu);
                zuuluu = 25;
                tangon = verify[zuuluu];
                zuuluu = verify.paths;
                report = report.bind(entity)(tangon, zuuluu);
                romeon = _closure1_slot13;
                zuuluu = {};
                michal = argFoo;
                zuuluu['userId'] = michal;
                michal = 27;
                michal = verify[michal];
                michal = option.bind(entity)(michal);
                michal = michal.ImpressionNames;
                michal = michal.BLOCK_USER_CONFIRMATION;
                zuuluu['impressionName'] = michal;
                offset = 'stack';
                backup = golfie;
                foxtra = report;
                yankee = zuuluu;
                michal = backup[oscard](foxtra, romeon, yankee, offset, verify);
                return entity;
            };
            entity = new Array(0);
            entity = zuuluu.bind(golfie)(michal, entity);
            var _closure2_slot11 = entity;
            golfie = _closure1_slot3;
            zuuluu = golfie.useCallback;
            michal = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure1_slot1;
                report = _closure1_slot2;
                entity = 28;
                michal = report[entity];
                entity = undefined;
                golfie = zuuluu.bind(entity)(michal);
                oscard = golfie.unblockUser;
                michal = {};
                option = _closure1_slot12;
                option = option.SETTINGS_AUTHORIZED_APP;
                michal['location'] = option;
                michal = oscard.bind(golfie)(tangon, michal);
                michal = 29;
                michal = report[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.showUnblockSuccessToast;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            };
            entity = new Array(0);
            entity = zuuluu.bind(golfie)(michal, entity);
            var _closure2_slot12 = entity;
            zuuluu = _closure1_slot15;
            michal = _closure1_slot4;
            entity = {};
            golfie = offset.container;
            entity['contentContainerStyle'] = golfie;
            golfie = 34;
            golfie = kiloes[golfie];
            option = output.bind(tangon)(golfie);
            golfie = option.extractTimestamp;
            report = report.id;
            variable38 = golfie.bind(option)(report);
            report = global;
            report = report.Date;
            golfie = report.prototype;
            golfie = Object.create(golfie, {constructor: {value: report}});
            variable39 = golfie;
            report = new variable39[report](variable38, variable37);
            option = report instanceof Object ? report : golfie;
            golfie = option.toLocaleDateString;
            report = {'year': 'numeric', 'month': 'short', 'day': 'numeric'};
            vacuum = golfie.bind(option)(verify, report);
            option = _closure1_slot15;
            golfie = _closure1_slot5;
            report = {};
            yankee = offset.header;
            verify = new Array(2);
            verify[0] = yankee;
            yankee = offset.section;
            verify[1] = yankee;
            report['style'] = verify;
            romeon = _closure1_slot14;
            verify = 35;
            verify = kiloes[verify];
            yankee = output.bind(tangon)(verify);
            verify = {};
            verify['iconSource'] = backup;
            backup = 10;
            backup = kiloes[backup];
            backup = output.bind(tangon)(backup);
            backup = backup.radii;
            backup = backup.xl;
            verify['iconBorderRadius'] = backup;
            backup = 64;
            verify['iconSize'] = backup;
            yankee = romeon.bind(tangon)(yankee, verify);
            verify = new Array(2);
            verify[0] = yankee;
            backup = _closure1_slot14;
            papara = 32;
            yankee = kiloes[papara];
            yankee = update.bind(tangon)(yankee);
            romeon = yankee.Text;
            yankee = {'variant': 'text-sm/normal', 'color': 'text-muted'};
            source = 15;
            output = kiloes[source];
            output = update.bind(tangon)(output);
            ctrled = output.intl;
            echoed = ctrled.format;
            output = kiloes[source];
            output = update.bind(tangon)(output);
            output = output.t;
            result = output.yOApCA;
            output = {};
            output['date'] = vacuum;
            output = echoed.bind(ctrled)(result, output);
            yankee['children'] = output;
            yankee = backup.bind(tangon)(romeon, yankee);
            verify[1] = yankee;
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(5);
            report[0] = golfie;
            result = sequen.description;
            verify = _closure1_slot15;
            option = _closure1_slot5;
            golfie = {};
            yankee = offset.section;
            golfie['style'] = yankee;
            backup = _closure1_slot14;
            yankee = kiloes[papara];
            yankee = update.bind(tangon)(yankee);
            romeon = yankee.Text;
            yankee = {'variant': 'heading-sm/semibold', 'color': 'header-primary'};
            output = kiloes[source];
            output = update.bind(tangon)(output);
            echoed = output.intl;
            output = echoed.string;
            kiloes = kiloes[source];
            kiloes = update.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.GfRGra;
            kiloes = output.bind(echoed)(kiloes);
            yankee['children'] = kiloes;
            romeon = backup.bind(tangon)(romeon, yankee);
            yankee = new Array(3);
            yankee[0] = romeon;
            config = null;
            romeon = null;
            if(!(tangon !== result)) { _fun00008_ip = 1048; continue _fun00007 }
 976:
            backup = '';
            romeon = null;
            if(!(backup !== result)) { _fun00008_ip = 1048; continue _fun00007 }
 986:
            output = _closure1_slot14;
            kiloes = _closure1_slot0;
            backup = _closure1_slot2;
            backup = backup[papara];
            backup = kiloes.bind(tangon)(backup);
            kiloes = backup.Text;
            backup = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-normal'};
            echoed = offset.appAboutDescription;
            backup['style'] = echoed;
            backup['children'] = result;
            romeon = output.bind(tangon)(kiloes, backup);
 1048:
            yankee[1] = romeon;
            romeon = sequen.terms_of_service_url;
            if(!(config == romeon)) { _fun00008_ip = 1080; continue _fun00007 }
 1062:
            romeon = sequen.privacy_policy_url;
            backup = config != romeon;
            romeon = null;
            if(!backup) { _fun00008_ip = 1667; continue _fun00007 }
 1080:
            output = _closure1_slot15;
            kiloes = _closure1_slot5;
            backup = {};
            result = offset.tosPrivacy;
            backup['style'] = result;
            result = sequen.terms_of_service_url;
            result = config != result;
            echoed = null;
            if(!result) { _fun00008_ip = 1341; continue _fun00007 }
 1118:
            ctrled = _closure1_slot14;
            update = _closure1_slot5;
            result = {};
            cntext = _closure1_slot15;
            sierra = _closure1_slot0;
            whisks = _closure1_slot2;
            vacuum = 31;
            vacuum = whisks[vacuum];
            vacuum = sierra.bind(tangon)(vacuum);
            record = vacuum.PressableOpacity;
            vacuum = {};
            target = function() { // Original name: handleClickToS
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = entity.terms_of_service_url;
                    entity = null;
                    if(!(entity != michal)) { _fun00016_ip = 79; continue _fun00015 }
 19:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 30;
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
            vacuum['onPress'] = target;
            target = offset.tos;
            vacuum['style'] = target;
            limora = _closure1_slot14;
            target = whisks[papara];
            target = sierra.bind(tangon)(target);
            status = target.Text;
            target = {'variant': 'text-sm/normal', 'color': 'text-link'};
            equals = whisks[source];
            equals = sierra.bind(tangon)(equals);
            variable36 = equals.intl;
            quebec = variable36.string;
            equals = whisks[source];
            equals = sierra.bind(tangon)(equals);
            equals = equals.t;
            equals = equals.lx+GeX;
            equals = quebec.bind(variable36)(equals);
            target['children'] = equals;
            status = limora.bind(tangon)(status, target);
            target = new Array(2);
            target[0] = status;
            limora = _closure1_slot14;
            status = 33;
            status = whisks[status];
            status = sierra.bind(tangon)(status);
            sierra = status.LinkExternalSmallIcon;
            status = {'size': 'xs', 'color': 'text-link'};
            status = limora.bind(tangon)(sierra, status);
            target[1] = status;
            vacuum['children'] = target;
            vacuum = cntext.bind(tangon)(record, vacuum);
            result['children'] = vacuum;
            echoed = ctrled.bind(tangon)(update, result);
 1341:
            result = new Array(2);
            result[0] = echoed;
            echoed = sequen.privacy_policy_url;
            update = config != echoed;
            echoed = null;
            if(!update) { _fun00008_ip = 1653; continue _fun00007 }
 1367:
            vacuum = _closure1_slot15;
            ctrled = _closure1_slot5;
            update = {};
            record = offset.privacy;
            update['style'] = record;
            sequen = sequen.terms_of_service_url;
            sequen = config != sequen;
            config = null;
            if(!sequen) { _fun00008_ip = 1428; continue _fun00007 }
 1402:
            cntext = _closure1_slot14;
            record = _closure1_slot5;
            sequen = {};
            target = offset.divider;
            sequen['style'] = target;
            config = cntext.bind(tangon)(record, sequen);
 1428:
            sequen = new Array(2);
            sequen[0] = config;
            cntext = _closure1_slot15;
            status = _closure1_slot0;
            limora = _closure1_slot2;
            config = 31;
            config = limora[config];
            config = status.bind(tangon)(config);
            record = config.PressableOpacity;
            config = {};
            target = function() { // Original name: handleClickPrivacyPolicy
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = entity.privacy_policy_url;
                    entity = null;
                    if(!(entity != michal)) { _fun00018_ip = 79; continue _fun00017 }
 19:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 30;
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
            config['onPress'] = target;
            target = offset.privacy;
            config['style'] = target;
            sierra = _closure1_slot14;
            papara = limora[papara];
            papara = status.bind(tangon)(papara);
            target = papara.Text;
            papara = {'variant': 'text-sm/normal', 'color': 'text-link'};
            whisks = limora[source];
            whisks = status.bind(tangon)(whisks);
            quebec = whisks.intl;
            equals = quebec.string;
            whisks = limora[source];
            whisks = status.bind(tangon)(whisks);
            whisks = whisks.t;
            whisks = whisks.okSwq6;
            whisks = equals.bind(quebec)(whisks);
            papara['children'] = whisks;
            target = sierra.bind(tangon)(target, papara);
            papara = new Array(2);
            papara[0] = target;
            sierra = _closure1_slot14;
            target = 33;
            target = limora[target];
            target = status.bind(tangon)(target);
            status = target.LinkExternalSmallIcon;
            target = {'size': 'xs', 'color': 'text-link'};
            target = sierra.bind(tangon)(status, target);
            papara[1] = target;
            config['children'] = papara;
            config = cntext.bind(tangon)(record, config);
            sequen[1] = config;
            update['children'] = sequen;
            echoed = vacuum.bind(tangon)(ctrled, update);
 1653:
            result[1] = echoed;
            backup['children'] = result;
            romeon = output.bind(tangon)(kiloes, backup);
 1667:
            yankee[2] = romeon;
            golfie['children'] = yankee;
            golfie = verify.bind(tangon)(option, golfie);
            report[1] = golfie;
            golfie = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    yankee = new Array(0);
                    var _closure3_slot0 = yankee;
                    michal = _closure1_slot17;
                    entity = _closure2_slot3;
                    tangon = undefined;
                    verify = michal.bind(tangon)(entity);
                    zuuluu = verify.bind(tangon)();
                    entity = zuuluu.done;
                    sizing = 15;
                    oscard = 36;
                    michal = 0;
                    report = 37;
                    if(entity) { _fun00020_ip = 231; continue _fun00019 }
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
                    if(!(romeon === entity)) { _fun00020_ip = 213; continue _fun00019 }
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
                    if(!entity) { _fun00020_ip = 57; continue _fun00019 }
 231:
                    entity = yankee.length;
                    if(!(!(entity > michal))) { _fun00020_ip = 272; continue _fun00019 }
 240:
                    zuuluu = _closure2_slot4;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00020_ip = 263; continue _fun00019 }
 250:
                    entity = _closure2_slot4;
                    entity = entity.length;
                    if(!(!(entity > michal))) { _fun00020_ip = 272; continue _fun00019 }
 263:
                    entity = _closure2_slot8;
                    if(entity) { _fun00020_ip = 272; continue _fun00019 }
 270:
                    return tangon;
 272:
                    zuuluu = _closure1_slot15;
                    michal = _closure1_slot5;
                    entity = {};
                    report = _closure2_slot1;
                    report = report.section;
                    entity['style'] = report;
                    verify = _closure1_slot14;
                    kiloes = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 32;
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
                        report = _closure1_slot15;
                        tangon = _closure1_slot5;
                        zuuluu = {};
                        verify = _closure2_slot1;
                        entity = verify.permissionContainer;
                        zuuluu['style'] = entity;
                        yankee = _closure1_slot14;
                        golfie = _closure1_slot0;
                        offset = _closure1_slot2;
                        entity = 38;
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
                        romeon = 10;
                        romeon = offset[romeon];
                        romeon = foxtra.bind(michal)(romeon);
                        romeon = romeon.colors;
                        romeon = romeon.STATUS_POSITIVE;
                        entity['color'] = romeon;
                        option = yankee.bind(michal)(option, entity);
                        entity = new Array(2);
                        entity[0] = option;
                        option = _closure1_slot14;
                        oscard = 32;
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
                    if(verify) { _fun00020_ip = 457; continue _fun00019 }
 436:
                    yankee = _closure2_slot4;
                    verify = yankee.map;
                    option = function(argFoo, argBar) {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            backup = argFoo;
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 39;
                            entity = zuuluu[entity];
                            oscard = undefined;
                            michal = michal.bind(oscard)(entity);
                            entity = michal.getTextForDisclosure;
                            offset = entity.bind(michal)(backup);
                            entity = null;
                            michal = entity != offset;
                            if(!michal) { _fun00022_ip = 226; continue _fun00021 }
 51:
                            report = _closure1_slot15;
                            tangon = _closure1_slot5;
                            zuuluu = {};
                            yankee = _closure2_slot1;
                            michal = yankee.permissionContainer;
                            zuuluu['style'] = michal;
                            foxtra = _closure1_slot14;
                            option = _closure1_slot0;
                            romeon = _closure1_slot2;
                            michal = 40;
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
                            verify = _closure1_slot14;
                            golfie = 32;
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
                    oscard = _closure2_slot8;
                    if(!oscard) { _fun00020_ip = 492; continue _fun00019 }
 468:
                    verify = _closure1_slot14;
                    option = _closure1_slot19;
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
            golfie = golfie.bind(tangon)();
            report[2] = golfie;
            verify = _closure1_slot14;
            option = _closure1_slot5;
            golfie = {};
            offset = offset.section;
            golfie['style'] = offset;
            romeon = _closure1_slot14;
            update = _closure1_slot0;
            output = _closure1_slot2;
            offset = 41;
            offset = output[offset];
            offset = update.bind(tangon)(offset);
            yankee = offset.TableRowGroup;
            offset = {};
            backup = output[source];
            backup = update.bind(tangon)(backup);
            result = backup.intl;
            kiloes = result.string;
            backup = output[source];
            backup = update.bind(tangon)(backup);
            backup = backup.t;
            backup = backup.gAHBAw;
            backup = kiloes.bind(result)(backup);
            offset['title'] = backup;
            kiloes = _closure1_slot14;
            foxtra = 42;
            foxtra = output[foxtra];
            foxtra = update.bind(tangon)(foxtra);
            backup = foxtra.TableRow;
            foxtra = {};
            result = output[source];
            result = update.bind(tangon)(result);
            echoed = result.intl;
            result = echoed.string;
            output = output[source];
            output = update.bind(tangon)(output);
            output = output.t;
            output = output.xUqheH;
            output = result.bind(echoed)(output);
            foxtra['label'] = output;
            output = 'danger';
            foxtra['variant'] = output;
            foxtra['onPress'] = sizing;
            sizing = true;
            foxtra['arrow'] = sizing;
            foxtra = kiloes.bind(tangon)(backup, foxtra);
            offset['children'] = foxtra;
            offset = romeon.bind(tangon)(yankee, offset);
            golfie['children'] = offset;
            golfie = verify.bind(tangon)(option, golfie);
            report[3] = golfie;
            oscard = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = _closure2_slot2;
                    michal = null;
                    zuuluu = michal == entity;
                    tangon = undefined;
                    entity = undefined;
                    if(zuuluu) { _fun00024_ip = 46; continue _fun00023 }
 22:
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.bot;
                    oscard = michal == zuuluu;
                    entity = undefined;
                    if(oscard) { _fun00024_ip = 46; continue _fun00023 }
 41:
                    entity = zuuluu.id;
 46:
                    var _closure3_slot0 = entity;
                    if(!(michal == entity)) { _fun00024_ip = 56; continue _fun00023 }
 54:
                    return tangon;
 56:
                    zuuluu = _closure1_slot14;
                    option = _closure1_slot0;
                    yankee = _closure1_slot2;
                    entity = 41;
                    entity = yankee[entity];
                    entity = option.bind(tangon)(entity);
                    michal = entity.TableRowGroup;
                    entity = {};
                    backup = 15;
                    oscard = yankee[backup];
                    oscard = option.bind(tangon)(oscard);
                    romeon = oscard.intl;
                    golfie = romeon.string;
                    oscard = yankee[backup];
                    oscard = option.bind(tangon)(oscard);
                    oscard = oscard.t;
                    oscard = oscard.8msQQE;
                    oscard = golfie.bind(romeon)(oscard);
                    entity['title'] = oscard;
                    golfie = _closure1_slot14;
                    oscard = 42;
                    oscard = yankee[oscard];
                    oscard = option.bind(tangon)(oscard);
                    oscard = oscard.TableRow;
                    report = _closure2_slot9;
                    if(report) { _fun00024_ip = 259; continue _fun00023 }
 173:
                    report = {};
                    foxtra = _closure1_slot0;
                    option = _closure1_slot2;
                    yankee = option[backup];
                    yankee = foxtra.bind(tangon)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.string;
                    option = option[backup];
                    option = foxtra.bind(tangon)(option);
                    option = option.t;
                    option = option.l4EmaW;
                    option = yankee.bind(romeon)(option);
                    report['label'] = option;
                    option = 'danger';
                    report['variant'] = option;
                    option = function() { // Original name: onPress
                        zuuluu = _closure2_slot11;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    report['onPress'] = option;
                    option = true;
                    report['arrow'] = option;
                    _fun00024_ip = 338; continue _fun00023;
 259:
                    option = {};
                    foxtra = _closure1_slot0;
                    offset = _closure1_slot2;
                    yankee = offset[backup];
                    yankee = foxtra.bind(tangon)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.string;
                    offset = offset[backup];
                    offset = foxtra.bind(tangon)(offset);
                    offset = offset.t;
                    offset = offset.XyHpKC;
                    offset = yankee.bind(romeon)(offset);
                    option['label'] = offset;
                    verify = function() { // Original name: onPress
                        zuuluu = _closure2_slot12;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    option['onPress'] = verify;
                    verify = true;
                    option['arrow'] = verify;
                    report = option;
 338:
                    report = golfie.bind(tangon)(oscard, report);
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            oscard = oscard.bind(tangon)();
            report[4] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();