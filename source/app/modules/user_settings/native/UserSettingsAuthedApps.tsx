// app/modules/user_settings/native/UserSettingsAuthedApps.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = yankee;
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
            verify = _closure1_slot20;
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
            golfie = _closure1_slot20;
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
    var _closure1_slot19 = entity;
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
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: AuthorizedAppTwoWay
        michal = argFoo;
        backup = michal.application;
        michal = _closure1_slot16;
        tangon = undefined;
        verify = michal.bind(tangon)();
        offset = _closure1_slot0;
        kiloes = _closure1_slot2;
        michal = 12;
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
            entity = 13;
            michal = michal[entity];
            entity = undefined;
            michal = report.bind(entity)(michal);
            oscard = michal.CommonActions;
            report = oscard.navigate;
            michal = {};
            golfie = _closure1_slot12;
            golfie = golfie.CONNECTIONS;
            michal['name'] = golfie;
            michal = report.bind(oscard)(michal);
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        foxtra = zuuluu.bind(report)(entity, michal);
        zuuluu = _closure1_slot14;
        michal = _closure1_slot4;
        entity = {};
        report = verify.twoWayWarning;
        entity['style'] = report;
        option = _closure1_slot13;
        golfie = _closure1_slot5;
        report = {};
        romeon = _closure1_slot1;
        yankee = 14;
        yankee = kiloes[yankee];
        yankee = romeon.bind(tangon)(yankee);
        report['source'] = yankee;
        verify = verify.twoWayWarningIcon;
        report['style'] = verify;
        golfie = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = golfie;
        option = _closure1_slot13;
        oscard = 15;
        oscard = kiloes[oscard];
        oscard = offset.bind(tangon)(oscard);
        golfie = oscard.TextWithIOSLinkWorkaround;
        oscard = {'color': 'text-normal', 'variant': 'text-xs/medium'};
        verify = 16;
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
    var _closure1_slot21 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, michal);
    entity = 0;
    report = golfie[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(report);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.View;
    var _closure1_slot4 = report;
    report = michal.Image;
    var _closure1_slot5 = report;
    report = michal.ActivityIndicator;
    var _closure1_slot6 = report;
    michal = michal.FlatList;
    var _closure1_slot7 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = yankee.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = yankee.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.AnalyticsPages;
    var _closure1_slot10 = report;
    report = michal.ComponentActions;
    var _closure1_slot11 = report;
    michal = michal.UserSettingsSections;
    var _closure1_slot12 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    report = michal.jsx;
    var _closure1_slot13 = report;
    report = michal.jsxs;
    var _closure1_slot14 = report;
    michal = michal.Fragment;
    var _closure1_slot15 = michal;
    michal = 6;
    michal = golfie[michal];
    option = oscard.bind(entity)(michal);
    report = option.createStyles;
    michal = {};
    verify = {};
    romeon = 16;
    verify['padding'] = romeon;
    michal['spinner'] = verify;
    verify = {};
    offset = 24;
    verify['marginTop'] = offset;
    michal['emptyText'] = verify;
    verify = {};
    verify['padding'] = romeon;
    michal['container'] = verify;
    verify = {'paddingHorizontal': 16, 'paddingVertical': 24};
    michal['containerV2'] = verify;
    verify = {};
    foxtra = 12;
    verify['marginTop'] = foxtra;
    michal['headerDescription'] = verify;
    verify = {};
    verify['marginTop'] = offset;
    michal['appListHeader'] = verify;
    verify = {'padding': 16, 'marginTop': 16, 'borderRadius': null, 'borderWidth': 1};
    offset = 7;
    backup = golfie[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.sm;
    verify['borderRadius'] = backup;
    backup = golfie[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    backup = golfie[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_TERTIARY;
    verify['borderColor'] = backup;
    michal['cardContainer'] = verify;
    verify = {};
    backup = 'row';
    verify['flexDirection'] = backup;
    michal['cardTitleContainer'] = verify;
    verify = {};
    verify['marginEnd'] = foxtra;
    michal['cardImage'] = verify;
    verify = {};
    foxtra = 'left';
    verify['textAlign'] = foxtra;
    michal['cardTitle'] = verify;
    verify = {};
    foxtra = 8;
    verify['marginTop'] = foxtra;
    michal['cardDescriptionTitle'] = verify;
    verify = {};
    verify['marginTop'] = foxtra;
    michal['cardDescriptionSubtitle'] = verify;
    verify = {};
    verify['marginTop'] = foxtra;
    michal['permissionTitle'] = verify;
    verify = {'flex': 1, 'marginTop': 8, 'flexDirection': 'row', 'alignContent': 'center'};
    michal['permissionContainer'] = verify;
    verify = {};
    backup = golfie[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.STATUS_DANGER;
    verify['tintColor'] = backup;
    michal['permissionRemove'] = verify;
    verify = {};
    verify['marginStart'] = foxtra;
    michal['permissionText'] = verify;
    verify = {};
    verify['marginTop'] = romeon;
    michal['alertBodyText'] = verify;
    verify = {'marginTop': 16, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center'};
    michal['twoWayWarning'] = verify;
    verify = {'width': 16, 'height': 16, 'marginRight': 8};
    romeon = golfie[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.TEXT_MUTED;
    verify['color'] = romeon;
    michal['twoWayWarningIcon'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'marginTop': 8};
    michal['tosPrivacy'] = verify;
    verify = {'display': 'flex', 'marginRight': 12, 'flexDirection': 'row'};
    michal['tos'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row'};
    michal['privacy'] = verify;
    verify = {'display': 'flex', 'width': 2, 'height': 18, 'marginRight': 12};
    offset = golfie[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BACKGROUND_MODIFIER_ACTIVE;
    verify['backgroundColor'] = offset;
    michal['divider'] = verify;
    michal = report.bind(option)(michal);
    var _closure1_slot16 = michal;
    michal = function(argFoo) { // Original name: DisclosureIcon
        michal = argFoo;
        oscard = michal.disclosure;
        var _closure2_slot0 = oscard;
        report = michal.style;
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure2_slot0;
                oscard = _closure1_slot0;
                michal = _closure1_slot2;
                golfie = 8;
                michal = michal[golfie];
                tangon = undefined;
                michal = oscard.bind(tangon)(michal);
                michal = michal.ApplicationDisclosureType;
                michal = michal.IP_LOCATION;
                if(!(michal !== zuuluu)) { _fun00008_ip = 196; continue _fun00007 }
 51:
                oscard = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[golfie];
                michal = oscard.bind(tangon)(michal);
                michal = michal.ApplicationDisclosureType;
                michal = michal.DISPLAYS_ADVERTISEMENTS;
                if(!(michal !== zuuluu)) { _fun00008_ip = 140; continue _fun00007 }
 84:
                oscard = _closure1_slot13;
                zuuluu = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 11;
                michal = golfie[michal];
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.CircleInformationIcon;
                michal = {};
                golfie = _closure2_slot1;
                michal['style'] = golfie;
                golfie = 'xs';
                michal['size'] = golfie;
                michal = oscard.bind(tangon)(zuuluu, michal);
                return michal;
 140:
                oscard = _closure1_slot13;
                zuuluu = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 10;
                michal = golfie[michal];
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.EmbedIcon;
                michal = {};
                golfie = _closure2_slot1;
                michal['style'] = golfie;
                golfie = 'xs';
                michal['size'] = golfie;
                michal = oscard.bind(tangon)(zuuluu, michal);
                return michal;
 196:
                zuuluu = _closure1_slot13;
                michal = _closure1_slot0;
                oscard = _closure1_slot2;
                entity = 9;
                entity = oscard[entity];
                entity = michal.bind(tangon)(entity);
                michal = entity.GlobeEarthIcon;
                entity = {};
                report = _closure2_slot1;
                entity['style'] = report;
                report = 'xs';
                entity['size'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = michal;
    report = function(argFoo) { // Original name: UserSettingsAuthedApp
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            sizing = entity.imageUrl;
            offset = entity.application;
            var _closure2_slot0 = offset;
            michal = entity.onDelete;
            var _closure2_slot1 = michal;
            michal = entity.scopes;
            var _closure2_slot2 = michal;
            entity = entity.disclosures;
            var _closure2_slot3 = entity;
            entity = _closure1_slot16;
            tangon = undefined;
            sequen = entity.bind(tangon)();
            var _closure2_slot4 = sequen;
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 20;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.useShouldWarnAuthorizedAppTwoWay;
            entity = offset.id;
            oscard = michal.bind(zuuluu)(entity);
            zuuluu = _closure1_slot14;
            michal = _closure1_slot4;
            entity = {};
            report = sequen.cardContainer;
            entity['style'] = report;
            yankee = _closure1_slot14;
            verify = _closure1_slot4;
            report = {};
            romeon = sequen.tosPrivacy;
            report['style'] = romeon;
            foxtra = tangon !== sizing;
            if(!foxtra) { _fun00010_ip = 196; continue _fun00009 }
 150:
            kiloes = _closure1_slot13;
            backup = _closure1_slot1;
            output = _closure1_slot2;
            romeon = 21;
            romeon = output[romeon];
            backup = backup.bind(tangon)(romeon);
            romeon = {};
            output = sequen.cardImage;
            romeon['style'] = output;
            romeon['source'] = sizing;
            foxtra = kiloes.bind(tangon)(backup, romeon);
 196:
            romeon = new Array(3);
            romeon[0] = foxtra;
            kiloes = _closure1_slot13;
            backup = _closure1_slot4;
            foxtra = {};
            sizing = {'justifyContent': 'center', 'flex': 1};
            foxtra['style'] = sizing;
            result = _closure1_slot13;
            source = _closure1_slot0;
            cntext = _closure1_slot2;
            vacuum = 22;
            sizing = cntext[vacuum];
            sizing = source.bind(tangon)(sizing);
            output = sizing.Text;
            sizing = {'style': null, 'variant': 'heading-md/extrabold', 'color': 'header-secondary'};
            echoed = sequen.cardTitle;
            sizing['style'] = echoed;
            echoed = offset.name;
            sizing['children'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            foxtra['children'] = sizing;
            foxtra = kiloes.bind(tangon)(backup, foxtra);
            romeon[1] = foxtra;
            kiloes = _closure1_slot13;
            backup = _closure1_slot4;
            foxtra = {};
            sizing = false;
            foxtra['collapsable'] = sizing;
            result = _closure1_slot13;
            update = 23;
            sizing = cntext[update];
            sizing = source.bind(tangon)(sizing);
            output = sizing.PressableOpacity;
            sizing = {};
            echoed = function() { // Original name: onDeleteModal
                tangon = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 17;
                zuuluu = golfie[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.openAlert;
                oscard = _closure1_slot13;
                zuuluu = _closure1_slot1;
                michal = 18;
                michal = golfie[michal];
                zuuluu = zuuluu.bind(entity)(michal);
                michal = {};
                option = _closure2_slot0;
                michal['application'] = option;
                golfie = _closure2_slot1;
                michal['onDelete'] = golfie;
                zuuluu = oscard.bind(entity)(zuuluu, michal);
                michal = 'confirm-delete-authed-app';
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            sizing['onPress'] = echoed;
            ctrled = _closure1_slot13;
            echoed = 24;
            echoed = cntext[echoed];
            echoed = source.bind(tangon)(echoed);
            source = echoed.XLargeIcon;
            echoed = {};
            record = _closure1_slot1;
            config = 7;
            config = cntext[config];
            config = record.bind(tangon)(config);
            config = config.colors;
            config = config.STATUS_DANGER;
            echoed['color'] = config;
            echoed = ctrled.bind(tangon)(source, echoed);
            sizing['children'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            foxtra['children'] = sizing;
            foxtra = kiloes.bind(tangon)(backup, foxtra);
            romeon[2] = foxtra;
            report['children'] = romeon;
            verify = yankee.bind(tangon)(verify, report);
            report = new Array(5);
            report[0] = verify;
            result = offset.description;
            source = null;
            verify = null;
            if(!(tangon !== result)) { _fun00010_ip = 693; continue _fun00009 }
 487:
            yankee = '';
            verify = null;
            if(!(yankee !== result)) { _fun00010_ip = 693; continue _fun00009 }
 500:
            foxtra = _closure1_slot14;
            romeon = _closure1_slot15;
            yankee = {};
            echoed = _closure1_slot13;
            sizing = _closure1_slot0;
            kiloes = _closure1_slot2;
            backup = kiloes[vacuum];
            backup = sizing.bind(tangon)(backup);
            output = backup.Text;
            backup = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-secondary'};
            ctrled = sequen.cardDescriptionTitle;
            backup['style'] = ctrled;
            ctrled = 16;
            config = kiloes[ctrled];
            config = sizing.bind(tangon)(config);
            record = config.intl;
            config = record.string;
            ctrled = kiloes[ctrled];
            ctrled = sizing.bind(tangon)(ctrled);
            ctrled = ctrled.t;
            ctrled = ctrled.GfRGra;
            ctrled = config.bind(record)(ctrled);
            backup['children'] = ctrled;
            output = echoed.bind(tangon)(output, backup);
            backup = new Array(2);
            backup[0] = output;
            output = _closure1_slot13;
            kiloes = kiloes[vacuum];
            kiloes = sizing.bind(tangon)(kiloes);
            sizing = kiloes.Text;
            kiloes = {};
            echoed = sequen.cardDescriptionSubtitle;
            kiloes['style'] = echoed;
            echoed = 'text-xs/normal';
            kiloes['variant'] = echoed;
            kiloes['children'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            backup[1] = kiloes;
            yankee['children'] = backup;
            verify = foxtra.bind(tangon)(romeon, yankee);
 693:
            report[1] = verify;
            verify = offset.terms_of_service_url;
            if(!(source == verify)) { _fun00010_ip = 725; continue _fun00009 }
 707:
            verify = offset.privacy_policy_url;
            yankee = source != verify;
            verify = null;
            if(!yankee) { _fun00010_ip = 1312; continue _fun00009 }
 725:
            foxtra = _closure1_slot14;
            romeon = _closure1_slot4;
            yankee = {};
            backup = sequen.tosPrivacy;
            yankee['style'] = backup;
            backup = offset.terms_of_service_url;
            backup = source != backup;
            kiloes = null;
            if(!backup) { _fun00010_ip = 986; continue _fun00009 }
 763:
            output = _closure1_slot13;
            sizing = _closure1_slot4;
            backup = {};
            ctrled = _closure1_slot14;
            cntext = _closure1_slot0;
            target = _closure1_slot2;
            result = target[update];
            result = cntext.bind(tangon)(result);
            echoed = result.PressableOpacity;
            result = {};
            config = function() { // Original name: handleClickToS
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = entity.terms_of_service_url;
                    entity = null;
                    if(!(entity != michal)) { _fun00012_ip = 79; continue _fun00011 }
 19:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 19;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.handleClick;
                    entity = {};
                    tangon = _closure2_slot0;
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
            result['onPress'] = config;
            config = sequen.tos;
            result['style'] = config;
            papara = _closure1_slot13;
            config = target[vacuum];
            config = cntext.bind(tangon)(config);
            record = config.Text;
            config = {'variant': 'text-xs/normal', 'color': 'text-link'};
            status = 16;
            sierra = target[status];
            sierra = cntext.bind(tangon)(sierra);
            limora = sierra.intl;
            sierra = limora.string;
            status = target[status];
            status = cntext.bind(tangon)(status);
            status = status.t;
            status = status.lx+GeX;
            status = sierra.bind(limora)(status);
            config['children'] = status;
            record = papara.bind(tangon)(record, config);
            config = new Array(2);
            config[0] = record;
            papara = _closure1_slot13;
            record = 25;
            record = target[record];
            record = cntext.bind(tangon)(record);
            cntext = record.LinkExternalSmallIcon;
            record = {'size': 'xs', 'color': 'text-link'};
            record = papara.bind(tangon)(cntext, record);
            config[1] = record;
            result['children'] = config;
            result = ctrled.bind(tangon)(echoed, result);
            backup['children'] = result;
            kiloes = output.bind(tangon)(sizing, backup);
 986:
            backup = new Array(2);
            backup[0] = kiloes;
            kiloes = offset.privacy_policy_url;
            sizing = source != kiloes;
            kiloes = null;
            if(!sizing) { _fun00010_ip = 1298; continue _fun00009 }
 1012:
            result = _closure1_slot14;
            output = _closure1_slot4;
            sizing = {};
            echoed = sequen.privacy;
            sizing['style'] = echoed;
            echoed = offset.terms_of_service_url;
            echoed = source != echoed;
            source = null;
            if(!echoed) { _fun00010_ip = 1073; continue _fun00009 }
 1047:
            config = _closure1_slot13;
            ctrled = _closure1_slot4;
            echoed = {};
            record = sequen.divider;
            echoed['style'] = record;
            source = config.bind(tangon)(ctrled, echoed);
 1073:
            echoed = new Array(2);
            echoed[0] = source;
            ctrled = _closure1_slot14;
            config = _closure1_slot0;
            cntext = _closure1_slot2;
            update = cntext[update];
            update = config.bind(tangon)(update);
            source = update.PressableOpacity;
            update = {};
            record = function() { // Original name: handleClickPrivacyPolicy
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot0;
                    michal = entity.privacy_policy_url;
                    entity = null;
                    if(!(entity != michal)) { _fun00014_ip = 79; continue _fun00013 }
 19:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 19;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.handleClick;
                    entity = {};
                    tangon = _closure2_slot0;
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
            update['onPress'] = record;
            sequen = sequen.privacy;
            update['style'] = sequen;
            record = _closure1_slot13;
            vacuum = cntext[vacuum];
            vacuum = config.bind(tangon)(vacuum);
            sequen = vacuum.Text;
            vacuum = {'variant': 'text-xs/normal', 'color': 'text-link'};
            papara = 16;
            target = cntext[papara];
            target = config.bind(tangon)(target);
            status = target.intl;
            target = status.string;
            papara = cntext[papara];
            papara = config.bind(tangon)(papara);
            papara = papara.t;
            papara = papara.okSwq6;
            papara = target.bind(status)(papara);
            vacuum['children'] = papara;
            sequen = record.bind(tangon)(sequen, vacuum);
            vacuum = new Array(2);
            vacuum[0] = sequen;
            record = _closure1_slot13;
            sequen = 25;
            sequen = cntext[sequen];
            sequen = config.bind(tangon)(sequen);
            config = sequen.LinkExternalSmallIcon;
            sequen = {'size': 'xs', 'color': 'text-link'};
            sequen = record.bind(tangon)(config, sequen);
            vacuum[1] = sequen;
            update['children'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            echoed[1] = update;
            sizing['children'] = echoed;
            kiloes = result.bind(tangon)(output, sizing);
 1298:
            backup[1] = kiloes;
            yankee['children'] = backup;
            verify = foxtra.bind(tangon)(romeon, yankee);
 1312:
            report[2] = verify;
            option = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    offset = new Array(0);
                    var _closure3_slot0 = offset;
                    michal = _closure1_slot19;
                    entity = _closure2_slot2;
                    tangon = undefined;
                    yankee = michal.bind(tangon)(entity);
                    zuuluu = yankee.bind(tangon)();
                    entity = zuuluu.done;
                    kiloes = 16;
                    verify = 26;
                    michal = 0;
                    oscard = 27;
                    if(entity) { _fun00016_ip = 231; continue _fun00015 }
 57:
                    romeon = zuuluu.value;
                    sizing = offset.push;
                    foxtra = _closure1_slot0;
                    entity = _closure1_slot2;
                    backup = entity[verify];
                    result = foxtra.bind(tangon)(backup);
                    output = result.getScopeNames;
                    backup = _closure2_slot2;
                    update = output.bind(result)(romeon, backup);
                    backup = new Array(0);
                    source = backup;
                    echoed = 0;
                    output = arraySpread(source, update, echoed);
                    source = sizing;
                    update = backup;
                    echoed = offset;
                    backup = apply(source, update, echoed);
                    entity = entity[oscard];
                    entity = foxtra.bind(tangon)(entity);
                    entity = entity.OAuth2Scopes;
                    entity = entity.APPLICATIONS_COMMANDS;
                    if(!(romeon === entity)) { _fun00016_ip = 213; continue _fun00015 }
 151:
                    romeon = offset.push;
                    sizing = _closure1_slot0;
                    entity = _closure1_slot2;
                    foxtra = entity[kiloes];
                    foxtra = sizing.bind(tangon)(foxtra);
                    backup = foxtra.intl;
                    foxtra = backup.string;
                    entity = entity[kiloes];
                    entity = sizing.bind(tangon)(entity);
                    entity = entity.t;
                    entity = entity.Ls2XRk;
                    entity = foxtra.bind(backup)(entity);
                    entity = romeon.bind(offset)(entity);
 213:
                    romeon = yankee.bind(tangon)();
                    entity = romeon.done;
                    zuuluu = romeon;
                    if(!entity) { _fun00016_ip = 57; continue _fun00015 }
 231:
                    entity = offset.length;
                    if(!(!(entity > michal))) { _fun00016_ip = 265; continue _fun00015 }
 240:
                    zuuluu = _closure2_slot3;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00016_ip = 263; continue _fun00015 }
 250:
                    entity = _closure2_slot3;
                    entity = entity.length;
                    if(!(!(entity > michal))) { _fun00016_ip = 265; continue _fun00015 }
 263:
                    return tangon;
 265:
                    zuuluu = _closure1_slot14;
                    michal = _closure1_slot15;
                    entity = {};
                    verify = _closure1_slot13;
                    backup = _closure1_slot0;
                    yankee = _closure1_slot2;
                    report = 22;
                    report = yankee[report];
                    report = backup.bind(tangon)(report);
                    oscard = report.Text;
                    report = {'style': null, 'variant': 'heading-md/semibold', 'color': 'header-secondary'};
                    romeon = _closure2_slot4;
                    romeon = romeon.permissionTitle;
                    report['style'] = romeon;
                    romeon = yankee[kiloes];
                    romeon = backup.bind(tangon)(romeon);
                    foxtra = romeon.intl;
                    romeon = foxtra.string;
                    yankee = yankee[kiloes];
                    yankee = backup.bind(tangon)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.xrmhRU;
                    yankee = romeon.bind(foxtra)(yankee);
                    report['children'] = yankee;
                    oscard = verify.bind(tangon)(oscard, report);
                    report = new Array(3);
                    report[0] = oscard;
                    verify = offset.map;
                    oscard = function(argFoo, argBar) {
                        report = _closure1_slot14;
                        tangon = _closure1_slot4;
                        zuuluu = {};
                        verify = _closure2_slot4;
                        entity = verify.permissionContainer;
                        zuuluu['style'] = entity;
                        yankee = _closure1_slot13;
                        golfie = _closure1_slot0;
                        offset = _closure1_slot2;
                        entity = 28;
                        entity = offset[entity];
                        michal = undefined;
                        entity = golfie.bind(michal)(entity);
                        option = entity.CircleCheckIcon;
                        entity = {};
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
                        option = _closure1_slot13;
                        oscard = 22;
                        oscard = offset[oscard];
                        oscard = golfie.bind(michal)(oscard);
                        golfie = oscard.Text;
                        oscard = {};
                        verify = verify.permissionText;
                        oscard['style'] = verify;
                        verify = 'text-xs/normal';
                        oscard['variant'] = verify;
                        verify = argFoo;
                        oscard['children'] = verify;
                        oscard = option.bind(michal)(golfie, oscard);
                        entity[1] = oscard;
                        zuuluu['children'] = entity;
                        entity = argBar;
                        entity = report.bind(michal)(tangon, zuuluu, entity);
                        return entity;
                    };
                    oscard = verify.bind(offset)(oscard);
                    report[1] = oscard;
                    verify = _closure2_slot3;
                    oscard = null;
                    verify = oscard == verify;
                    oscard = undefined;
                    if(verify) { _fun00016_ip = 453; continue _fun00015 }
 432:
                    verify = _closure2_slot3;
                    option = verify.map;
                    golfie = function(argFoo, argBar) {
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            romeon = argFoo;
                            michal = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            entity = 29;
                            entity = zuuluu[entity];
                            oscard = undefined;
                            michal = michal.bind(oscard)(entity);
                            entity = michal.getTextForDisclosure;
                            offset = entity.bind(michal)(romeon);
                            entity = null;
                            michal = entity != offset;
                            if(!michal) { _fun00018_ip = 202; continue _fun00017 }
 51:
                            report = _closure1_slot14;
                            tangon = _closure1_slot4;
                            zuuluu = {};
                            yankee = _closure2_slot4;
                            michal = yankee.permissionContainer;
                            zuuluu['style'] = michal;
                            verify = _closure1_slot13;
                            option = _closure1_slot17;
                            michal = {};
                            michal['disclosure'] = romeon;
                            option = verify.bind(oscard)(option, michal);
                            michal = new Array(2);
                            michal[0] = option;
                            verify = _closure1_slot13;
                            option = _closure1_slot0;
                            romeon = _closure1_slot2;
                            golfie = 22;
                            golfie = romeon[golfie];
                            golfie = option.bind(oscard)(golfie);
                            option = golfie.Text;
                            golfie = {};
                            yankee = yankee.permissionText;
                            golfie['style'] = yankee;
                            yankee = 'text-xs/normal';
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
 202:
                            return entity;
                        }
                    };
                    oscard = option.bind(verify)(golfie);
 453:
                    report[2] = oscard;
                    entity['children'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            option = option.bind(tangon)();
            report[3] = option;
            if(!oscard) { _fun00010_ip = 1354; continue _fun00009 }
 1334:
            verify = _closure1_slot13;
            option = _closure1_slot21;
            golfie = {};
            golfie['application'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1354:
            report[4] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = report;
    report = 41;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/user_settings/native/UserSettingsAuthedApps.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: _default
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = _closure1_slot16;
            report = undefined;
            oscard = entity.bind(report)();
            var _closure2_slot0 = oscard;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 30;
            zuuluu = option[entity];
            yankee = golfie.bind(report)(zuuluu);
            offset = yankee.useStateFromStores;
            zuuluu = _closure1_slot9;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot9;
                entity = michal.getApps;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = offset.bind(yankee)(tangon, zuuluu);
            var _closure2_slot1 = yankee;
            entity = option[entity];
            offset = golfie.bind(report)(entity);
            tangon = offset.useStateFromStores;
            entity = _closure1_slot8;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot8;
                entity = michal.getSelfEmbeddedActivities;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = tangon.bind(offset)(zuuluu, entity);
            var _closure2_slot2 = entity;
            entity = 12;
            entity = option[entity];
            zuuluu = golfie.bind(report)(entity);
            entity = zuuluu.useNavigation;
            zuuluu = entity.bind(zuuluu)();
            var _closure2_slot3 = zuuluu;
            entity = 31;
            entity = option[entity];
            entity = golfie.bind(report)(entity);
            romeon = entity.AppSettingsRedesignExperiment;
            offset = romeon.useExperiment;
            tangon = {};
            entity = 'UserSettingsAuthedApps';
            tangon['location'] = entity;
            entity = {};
            foxtra = true;
            entity['autoTrackExposure'] = foxtra;
            entity = offset.bind(romeon)(tangon, entity);
            entity = entity.enabled;
            var _closure2_slot4 = entity;
            tangon = 13;
            tangon = option[tangon];
            option = golfie.bind(report)(tangon);
            golfie = option.useFocusEffect;
            foxtra = _closure1_slot3;
            romeon = foxtra.useCallback;
            offset = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 32;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.fetch;
                entity = entity.bind(michal)();
                return entity;
            };
            tangon = new Array(0);
            tangon = romeon.bind(foxtra)(offset, tangon);
            tangon = golfie.bind(option)(tangon);
            option = function() { // Original name: renderHeader
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    tangon = _closure1_slot14;
                    zuuluu = _closure1_slot15;
                    michal = {};
                    oscard = _closure1_slot4;
                    report = {};
                    backup = _closure1_slot13;
                    option = _closure1_slot0;
                    entity = _closure1_slot2;
                    foxtra = 22;
                    golfie = entity[foxtra];
                    entity = undefined;
                    golfie = option.bind(entity)(golfie);
                    romeon = golfie.Text;
                    golfie = {};
                    option = 'header-primary';
                    golfie['color'] = option;
                    verify = _closure2_slot4;
                    option = 'heading-md/extrabold';
                    if(!verify) { _fun00022_ip = 84; continue _fun00021 }
 78:
                    option = 'heading-md/semibold';
 84:
                    golfie['variant'] = option;
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    output = 16;
                    kiloes = option[output];
                    kiloes = verify.bind(entity)(kiloes);
                    result = kiloes.intl;
                    sizing = result.string;
                    kiloes = option[output];
                    kiloes = verify.bind(entity)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.HU3RFx;
                    kiloes = sizing.bind(result)(kiloes);
                    golfie['children'] = kiloes;
                    romeon = backup.bind(entity)(romeon, golfie);
                    golfie = new Array(2);
                    golfie[0] = romeon;
                    romeon = _closure1_slot13;
                    option = option[foxtra];
                    option = verify.bind(entity)(option);
                    verify = option.Text;
                    option = {};
                    foxtra = _closure2_slot0;
                    foxtra = foxtra.headerDescription;
                    option['style'] = foxtra;
                    backup = _closure2_slot4;
                    foxtra = 'heading-sm/normal';
                    if(!backup) { _fun00022_ip = 216; continue _fun00021 }
 210:
                    foxtra = 'heading-sm/medium';
 216:
                    option['variant'] = foxtra;
                    sizing = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    backup = foxtra[output];
                    backup = sizing.bind(entity)(backup);
                    kiloes = backup.intl;
                    backup = kiloes.string;
                    foxtra = foxtra[output];
                    foxtra = sizing.bind(entity)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.Nu5Yi4;
                    foxtra = backup.bind(kiloes)(foxtra);
                    option['children'] = foxtra;
                    option = romeon.bind(entity)(verify, option);
                    golfie[1] = option;
                    report['children'] = golfie;
                    oscard = tangon.bind(entity)(oscard, report);
                    report = new Array(2);
                    report[0] = oscard;
                    golfie = _closure2_slot4;
                    oscard = null;
                    if(!golfie) { _fun00022_ip = 435; continue _fun00021 }
 315:
                    verify = _closure1_slot13;
                    option = _closure1_slot4;
                    golfie = {};
                    yankee = _closure2_slot0;
                    yankee = yankee.appListHeader;
                    golfie['style'] = yankee;
                    romeon = _closure1_slot13;
                    sizing = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    offset = 35;
                    offset = foxtra[offset];
                    offset = sizing.bind(entity)(offset);
                    yankee = offset.TableRowGroupTitle;
                    offset = {};
                    backup = foxtra[output];
                    backup = sizing.bind(entity)(backup);
                    kiloes = backup.intl;
                    backup = kiloes.string;
                    foxtra = foxtra[output];
                    foxtra = sizing.bind(entity)(foxtra);
                    foxtra = foxtra.t;
                    foxtra = foxtra.PHjkRE;
                    foxtra = backup.bind(kiloes)(foxtra);
                    offset['title'] = foxtra;
                    offset = romeon.bind(entity)(yankee, offset);
                    golfie['children'] = offset;
                    oscard = verify.bind(entity)(option, golfie);
 435:
                    report[1] = oscard;
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            offset = _closure1_slot3;
            golfie = offset.useCallback;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.item;
                var _closure3_slot0 = entity;
                golfie = michal.index;
                option = michal.numItems;
                offset = _closure1_slot1;
                foxtra = _closure1_slot2;
                michal = 36;
                michal = foxtra[michal];
                report = undefined;
                tangon = offset.bind(report)(michal);
                zuuluu = tangon.getApplicationIconSource;
                michal = {};
                yankee = entity.application;
                yankee = yankee.id;
                michal['id'] = yankee;
                yankee = entity.application;
                yankee = yankee.icon;
                michal['icon'] = yankee;
                romeon = zuuluu.bind(tangon)(michal);
                tangon = _closure1_slot13;
                zuuluu = _closure1_slot0;
                michal = 37;
                michal = foxtra[michal];
                michal = zuuluu.bind(report)(michal);
                zuuluu = michal.TableRow;
                michal = {};
                yankee = _closure1_slot13;
                verify = 38;
                verify = foxtra[verify];
                offset = offset.bind(report)(verify);
                verify = {};
                verify['iconSource'] = romeon;
                romeon = 6;
                verify['iconBorderRadius'] = romeon;
                verify = yankee.bind(report)(offset, verify);
                michal['icon'] = verify;
                verify = entity.application;
                verify = verify.name;
                michal['label'] = verify;
                oscard = function() { // Original name: onPress
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    entity = 39;
                    zuuluu = report[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    tangon = oscard.setSection;
                    zuuluu = _closure1_slot12;
                    zuuluu = zuuluu.AUTHORIZED_APP;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    tangon = _closure1_slot0;
                    zuuluu = 40;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(entity)(zuuluu);
                    tangon = report.trackPaneViewed;
                    zuuluu = {};
                    oscard = _closure1_slot12;
                    oscard = oscard.AUTHORIZED_APP;
                    zuuluu['destinationPane'] = oscard;
                    oscard = {};
                    golfie = _closure1_slot10;
                    golfie = golfie.USER_SETTINGS;
                    oscard['page'] = golfie;
                    zuuluu['source'] = oscard;
                    oscard = _closure3_slot0;
                    golfie = oscard.application;
                    golfie = golfie.id;
                    zuuluu['applicationId'] = golfie;
                    zuuluu = tangon.bind(report)(zuuluu);
                    report = _closure2_slot3;
                    tangon = report.push;
                    michal = _closure1_slot12;
                    zuuluu = michal.AUTHORIZED_APP;
                    michal = {};
                    michal['oauth2Token'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    return entity;
                };
                michal['onPress'] = oscard;
                oscard = true;
                michal['arrow'] = oscard;
                oscard = 0;
                oscard = oscard === golfie;
                michal['start'] = oscard;
                oscard = 1;
                oscard = option - oscard;
                oscard = golfie === oscard;
                michal['end'] = oscard;
                entity = entity.id;
                entity = tangon.bind(report)(zuuluu, michal, entity);
                return entity;
            };
            zuuluu = golfie.bind(offset)(zuuluu, tangon);
            var _closure2_slot5 = zuuluu;
            zuuluu = null;
            if(!(zuuluu != yankee)) { _fun00020_ip = 615; continue _fun00019 }
 301:
            tangon = yankee.length;
            zuuluu = 0;
            if(!(zuuluu !== tangon)) { _fun00020_ip = 454; continue _fun00019 }
 315:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot7;
            golfie = {};
            if(entity) { _fun00020_ip = 386; continue _fun00019 }
 328:
            entity = oscard.container;
            golfie['contentContainerStyle'] = entity;
            entity = option.bind(report)();
            golfie['ListHeaderComponent'] = entity;
            offset = yankee.sort;
            entity = function(argFoo, argBar) {
                entity = global;
                zuuluu = entity.Number;
                michal = argBar;
                michal = michal.id;
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = entity.Number;
                entity = argFoo;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(entity);
                entity = michal - entity;
                return entity;
            };
            entity = offset.bind(yankee)(entity);
            golfie['data'] = entity;
            entity = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                entity = entity.item;
                var _closure3_slot0 = entity;
                option = entity.application;
                oscard = entity.scopes;
                report = entity.disclosures;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 36;
                michal = tangon[michal];
                tangon = undefined;
                verify = zuuluu.bind(tangon)(michal);
                zuuluu = verify.getApplicationIconSource;
                michal = {};
                offset = option.id;
                michal['id'] = offset;
                offset = option.icon;
                michal['icon'] = offset;
                verify = zuuluu.bind(verify)(michal);
                zuuluu = _closure1_slot13;
                michal = _closure1_slot18;
                entity = {};
                entity['imageUrl'] = verify;
                entity['application'] = option;
                golfie = function() { // Original name: onDelete
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        entity = _closure3_slot0;
                        option = entity.id;
                        report = entity.application;
                        zuuluu = _closure1_slot1;
                        tangon = _closure1_slot2;
                        entity = 32;
                        oscard = tangon[entity];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(oscard);
                        oscard = golfie.delete;
                        oscard = oscard.bind(golfie)(option);
                        golfie = _closure1_slot0;
                        oscard = 33;
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
                        golfie = _closure2_slot2;
                        oscard = golfie.get;
                        michal = report.id;
                        golfie = oscard.bind(golfie)(michal);
                        michal = 34;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.leaveActivity;
                        michal = {};
                        oscard = null;
                        option = oscard == golfie;
                        oscard = undefined;
                        if(option) { _fun00024_ip = 165; continue _fun00023 }
 160:
                        oscard = golfie.location;
 165:
                        michal['location'] = oscard;
                        report = report.id;
                        michal['applicationId'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    }
                };
                entity['onDelete'] = golfie;
                entity['scopes'] = oscard;
                entity['disclosures'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            golfie['renderItem'] = entity;
            entity = golfie;
            _fun00020_ip = 443; continue _fun00019;
 386:
            offset = oscard.containerV2;
            golfie['contentContainerStyle'] = offset;
            offset = option.bind(report)();
            golfie['ListHeaderComponent'] = offset;
            offset = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                report = entity.item;
                tangon = entity.index;
                zuuluu = _closure2_slot5;
                michal = {};
                michal['item'] = report;
                michal['index'] = tangon;
                entity = _closure2_slot1;
                entity = entity.length;
                michal['numItems'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            golfie['renderItem'] = offset;
            offset = yankee.sort;
            verify = function(argFoo, argBar) {
                entity = global;
                zuuluu = entity.Number;
                michal = argBar;
                michal = michal.id;
                tangon = undefined;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = entity.Number;
                entity = argFoo;
                entity = entity.id;
                entity = zuuluu.bind(tangon)(entity);
                entity = michal - entity;
                return entity;
            };
            verify = offset.bind(yankee)(verify);
            golfie['data'] = verify;
            entity = golfie;
 443:
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00020_ip = 613; continue _fun00019;
 454:
            golfie = _closure1_slot14;
            tangon = _closure1_slot4;
            zuuluu = {};
            verify = oscard.container;
            zuuluu['style'] = verify;
            verify = option.bind(report)();
            option = new Array(2);
            option[0] = verify;
            yankee = _closure1_slot13;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            verify = 22;
            verify = sizing[verify];
            verify = kiloes.bind(report)(verify);
            offset = verify.Text;
            verify = {'color': 'header-primary', 'style': null, 'variant': 'heading-md/extrabold'};
            romeon = oscard.emptyText;
            verify['style'] = romeon;
            romeon = 16;
            foxtra = sizing[romeon];
            foxtra = kiloes.bind(report)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = sizing[romeon];
            romeon = kiloes.bind(report)(romeon);
            romeon = romeon.t;
            romeon = romeon.E+SM6e;
            romeon = foxtra.bind(backup)(romeon);
            verify['children'] = romeon;
            verify = yankee.bind(report)(offset, verify);
            option[1] = verify;
            zuuluu['children'] = option;
            entity = golfie.bind(report)(tangon, zuuluu);
 613:
            _fun00020_ip = 655; continue _fun00019;
 615:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot6;
            michal = {'style': null, 'animating': true, 'size': 'large'};
            oscard = oscard.spinner;
            michal['style'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 655:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['DisclosureIcon'] = michal;
    return entity;
})();