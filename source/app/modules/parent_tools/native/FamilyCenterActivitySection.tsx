// app/modules/parent_tools/native/FamilyCenterActivitySection.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: FamilyCenterActivitySectionHeader
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.displayType;
            entity = _closure1_slot11;
            tangon = undefined;
            yankee = entity.bind(tangon)();
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 6;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            verify = entity.bind(tangon)();
            michal = _closure1_slot7;
            entity = michal.get;
            option = entity.bind(michal)(zuuluu);
            michal = _closure1_slot0;
            entity = 7;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useActionsForDisplayType;
            entity = entity.bind(michal)(zuuluu);
            oscard = null;
            michal = oscard == option;
            foxtra = undefined;
            if(michal) { _fun00002_ip = 114; continue _fun00001 }
 98:
            michal = option.sectionHeader;
            entity = entity.length;
            foxtra = michal.bind(option)(entity);
 114:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 8;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.useIsEligibleForFamilyCenterVCJoin;
            entity = {};
            report = 'family_center_activity_section_native';
            entity['location'] = report;
            report = michal.bind(zuuluu)(entity);
            michal = oscard == option;
            entity = undefined;
            if(michal) { _fun00002_ip = 172; continue _fun00001 }
 166:
            entity = option.sectionDescription;
 172:
            offset = null;
            if(!(tangon !== entity)) { _fun00002_ip = 212; continue _fun00001 }
 178:
            michal = oscard == option;
            entity = undefined;
            if(michal) { _fun00002_ip = 209; continue _fun00001 }
 187:
            zuuluu = option.sectionDescription;
            michal = oscard != verify;
            if(!michal) { _fun00002_ip = 203; continue _fun00001 }
 200:
            michal = verify;
 203:
            entity = zuuluu.bind(option)(michal, report);
 209:
            offset = entity;
 212:
            zuuluu = _closure1_slot10;
            michal = _closure1_slot6;
            entity = {};
            verify = _closure1_slot9;
            option = _closure1_slot0;
            report = _closure1_slot2;
            romeon = 9;
            report = report[romeon];
            report = option.bind(tangon)(report);
            option = report.Text;
            report = {'variant': 'eyebrow', 'color': 'header-secondary'};
            backup = yankee.header;
            report['style'] = backup;
            report['children'] = foxtra;
            option = verify.bind(tangon)(option, report);
            report = new Array(2);
            report[0] = option;
            oscard = null;
            if(!(oscard !== offset)) { _fun00002_ip = 357; continue _fun00001 }
 298:
            verify = _closure1_slot9;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            golfie = golfie[romeon];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {'variant': 'text-sm/medium', 'color': 'text-muted'};
            yankee = yankee.description;
            golfie['style'] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 357:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ActivityIndicator;
    var _closure1_slot5 = golfie;
    tangon = tangon.View;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ACTION_TO_TEXT;
    var _closure1_slot7 = golfie;
    tangon = tangon.FAMILY_CENTER_ITEMS_SHOWN_INCREMENTS;
    var _closure1_slot8 = tangon;
    offset = 4;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot9 = tangon;
    tangon = oscard[offset];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 5;
    golfie = oscard[tangon];
    verify = report.bind(entity)(golfie);
    option = verify.createStyles;
    golfie = {};
    yankee = {};
    golfie['header'] = yankee;
    yankee = {};
    golfie['description'] = yankee;
    golfie = option.bind(verify)(golfie);
    var _closure1_slot11 = golfie;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'display': 'flex', 'marginBottom': 20};
    tangon['container'] = verify;
    verify = {};
    yankee = 'hidden';
    verify['overflow'] = yankee;
    tangon['actionContainer'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'flex': 1, 'alignItems': 'center', 'justifyContent': 'center', 'width': '100%'};
    tangon['loadMoreContainer'] = verify;
    verify = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    yankee = 10;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    verify['borderBottomRightRadius'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    verify['borderBottomLeftRadius'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_ACCENT;
    verify['backgroundColor'] = yankee;
    yankee = '60%';
    verify['width'] = yankee;
    tangon['loadMore'] = verify;
    verify = {};
    verify['paddingVertical'] = offset;
    tangon['loadMoreButton'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/parent_tools/native/FamilyCenterActivitySection.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: FamilyCenterActivitySection
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            foxtra = entity.displayType;
            var _closure2_slot0 = foxtra;
            entity = _closure1_slot12;
            tangon = undefined;
            output = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 7;
            entity = report[michal];
            oscard = zuuluu.bind(tangon)(entity);
            entity = oscard.useActionsForDisplayType;
            entity = entity.bind(oscard)(foxtra);
            michal = report[michal];
            oscard = zuuluu.bind(tangon)(michal);
            michal = oscard.useActionTotalsForDisplayType;
            golfie = michal.bind(oscard)(foxtra);
            michal = 11;
            michal = report[michal];
            report = zuuluu.bind(tangon)(michal);
            zuuluu = report.useFamilyCenterActions;
            michal = {};
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.loadMore;
            var _closure2_slot1 = zuuluu;
            offset = michal.isMoreLoading;
            yankee = _closure1_slot4;
            report = yankee.useState;
            michal = _closure1_slot8;
            oscard = report.bind(yankee)(michal);
            report = _closure1_slot3;
            michal = 2;
            verify = report.bind(tangon)(oscard, michal);
            michal = 0;
            oscard = verify[michal];
            report = 1;
            report = verify[report];
            var _closure2_slot2 = report;
            report = entity.slice;
            oscard = report.bind(entity)(michal, oscard);
            verify = yankee.useCallback;
            report = new Array(2);
            report[0] = zuuluu;
            report[1] = foxtra;
            zuuluu = function() {
                tangon = _closure2_slot2;
                entity = undefined;
                zuuluu = function(argFoo) {
                    michal = _closure1_slot8;
                    entity = argFoo;
                    entity = entity + michal;
                    return entity;
                };
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot1;
                michal = _closure2_slot0;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            romeon = verify.bind(yankee)(zuuluu, report);
            entity = entity.length;
            if(!(michal !== entity)) { _fun00004_ip = 651; continue _fun00003 }
 221:
            michal = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 12;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            report = entity.intl;
            zuuluu = report.formatToPlainString;
            michal = _closure1_slot1;
            entity = 13;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.7dMmJS;
            entity = {};
            verify = global;
            sizing = verify.Math;
            kiloes = sizing.min;
            verify = oscard.length;
            yankee = golfie - verify;
            verify = _closure1_slot8;
            verify = kiloes.bind(sizing)(yankee, verify);
            entity['pageSize'] = verify;
            result = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot10;
            michal = _closure1_slot6;
            entity = {};
            report = output.container;
            entity['style'] = report;
            yankee = _closure1_slot9;
            verify = _closure1_slot13;
            report = {};
            report['displayType'] = foxtra;
            verify = yankee.bind(tangon)(verify, report);
            report = new Array(3);
            report[0] = verify;
            verify = oscard.map;
            option = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot9;
                zuuluu = _closure1_slot1;
                tangon = _closure1_slot2;
                michal = 14;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = {};
                michal['action'] = entity;
                entity = entity.event_id;
                entity = report.bind(tangon)(zuuluu, michal, entity);
                return entity;
            };
            option = verify.bind(oscard)(option);
            report[1] = option;
            oscard = oscard.length;
            golfie = oscard < golfie;
            oscard = null;
            if(!golfie) { _fun00004_ip = 635; continue _fun00003 }
 406:
            verify = _closure1_slot9;
            option = _closure1_slot6;
            golfie = {};
            yankee = output.loadMoreContainer;
            golfie['style'] = yankee;
            foxtra = _closure1_slot9;
            if(offset) { _fun00004_ip = 559; continue _fun00003 }
 436:
            kiloes = _closure1_slot0;
            echoed = _closure1_slot2;
            offset = 15;
            offset = echoed[offset];
            offset = kiloes.bind(tangon)(offset);
            yankee = offset.PressableOpacity;
            offset = {};
            sizing = output.loadMore;
            offset['style'] = sizing;
            offset['accessibilityLabel'] = result;
            sizing = 'button';
            offset['accessibilityRole'] = sizing;
            offset['onPress'] = romeon;
            sizing = _closure1_slot9;
            romeon = 9;
            romeon = echoed[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            kiloes = romeon.Text;
            romeon = {'style': null, 'variant': 'text-xs/semibold', 'color': 'always-white'};
            echoed = output.loadMoreButton;
            romeon['style'] = echoed;
            romeon['children'] = result;
            romeon = sizing.bind(tangon)(kiloes, romeon);
            offset['children'] = romeon;
            offset = foxtra.bind(tangon)(yankee, offset);
            _fun00004_ip = 625; continue _fun00003;
 559:
            romeon = _closure1_slot6;
            yankee = {};
            kiloes = output.loadMore;
            yankee['style'] = kiloes;
            sizing = _closure1_slot9;
            kiloes = _closure1_slot5;
            backup = {'style': null, 'animating': true, 'color': '#fff', 'size': 'small'};
            output = output.loadMoreButton;
            backup['style'] = output;
            backup = sizing.bind(tangon)(kiloes, backup);
            yankee['children'] = backup;
            offset = foxtra.bind(tangon)(romeon, yankee);
 625:
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 635:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
 651:
            entity = null;
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();