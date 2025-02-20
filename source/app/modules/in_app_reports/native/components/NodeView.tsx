// app/modules/in_app_reports/native/components/NodeView.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    kiloes = argBaz;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = kiloes;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo, argBar) { // Original name: getElementForType
        michal = argFoo;
        zuuluu = michal.elements;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = zuuluu.find;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.type;
            entity = _closure2_slot0;
            entity = michal === entity;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: getElementsForType
        michal = argFoo;
        zuuluu = michal.elements;
        michal = 'external_link';
        var _closure2_slot0 = michal;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.type;
            entity = _closure2_slot0;
            entity = michal === entity;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: hasAnyRemediationElement
        entity = argFoo;
        zuuluu = entity.elements;
        michal = zuuluu.some;
        entity = function(argFoo) {
            entity = argFoo;
            zuuluu = entity.type;
            michal = _closure1_slot10;
            entity = michal.includes;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: NullComponent
        entity = null;
        return entity;
    };
    var _closure1_slot25 = entity;
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
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.View;
    var _closure1_slot6 = golfie;
    tangon = tangon.ScrollView;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = kiloes.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.REMEDIATION_ELEMENT_TYPES;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.IN_APP_REPORTS_NODE;
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot12 = golfie;
    tangon = tangon.ChannelTypes;
    var _closure1_slot13 = tangon;
    romeon = 8;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    foxtra = tangon.Fonts;
    tangon = tangon.Permissions;
    var _closure1_slot14 = tangon;
    tangon = 9;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot15 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot16 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'flex': 1, 'alignSelf': 'stretch', 'justifyContent': 'flex-start', 'alignItems': 'center', 'backgroundColor': null, 'marginTop': 30};
    offset = 11;
    yankee = oscard[offset];
    yankee = kiloes.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = yankee;
    tangon['container'] = verify;
    verify = {'flex': 1, 'alignSelf': 'stretch', 'marginTop': 24};
    tangon['scrollView'] = verify;
    yankee = 16;
    verify = {'flex': 1, 'alignSelf': 'stretch', 'paddingHorizontal': 16};
    tangon['childrenContainer'] = verify;
    verify = {'alignSelf': 'stretch', 'marginBottom': 24, 'paddingHorizontal': 16};
    tangon['headerContainer'] = verify;
    verify = {'marginBottom': 8, 'textAlign': 'center'};
    tangon['header'] = verify;
    verify = {'lineHeight': 20, 'marginBottom': 8, 'textAlign': 'center'};
    tangon['subheader'] = verify;
    verify = {'lineHeight': 16, 'marginBottom': 8, 'textAlign': 'center'};
    tangon['description'] = verify;
    verify = {'alignSelf': 'stretch', 'backgroundColor': null, 'borderRadius': null, 'borderColor': null, 'borderWidth': 1, 'padding': 8, 'flexDirection': 'row', 'marginBottom': 16, 'marginHorizontal': 16};
    backup = oscard[offset];
    backup = kiloes.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.BLUE_345;
    verify['backgroundColor'] = backup;
    backup = oscard[offset];
    backup = kiloes.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    backup = oscard[offset];
    backup = kiloes.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.BLUE_345;
    verify['borderColor'] = backup;
    tangon['infoBox'] = verify;
    verify = {'flex': 1, 'lineHeight': 18, 'marginStart': 8, 'marginTop': 3};
    tangon['infoBoxText'] = verify;
    verify = {};
    verify['marginBottom'] = romeon;
    backup = oscard[offset];
    backup = kiloes.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tangon['childButton'] = verify;
    verify = {'minHeight': 60, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'backgroundColor': null, 'paddingVertical': 16, 'paddingStart': 16, 'paddingEnd': 8};
    backup = oscard[offset];
    backup = kiloes.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    backup = oscard[offset];
    backup = kiloes.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tangon['childContainer'] = verify;
    verify = {'flex': 1, 'lineHeight': 20};
    tangon['childButtonText'] = verify;
    verify = {};
    backup = 12;
    backup = oscard[backup];
    backup = kiloes.bind(entity)(backup);
    foxtra = foxtra.DISPLAY_EXTRABOLD;
    offset = oscard[offset];
    offset = kiloes.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.HEADER_PRIMARY;
    output = backup.bind(entity)(foxtra, offset, yankee);
    result = verify;
    offset = copyDataProperties(result, output);
    offset = 'marginBottom';
    verify[offset] = romeon;
    offset = 'paddingHorizontal';
    verify[offset] = yankee;
    tangon['remediationHeader'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot17 = tangon;
    tangon = function(argFoo) { // Original name: HeaderView
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.node;
            foxtra = entity.header;
            kiloes = entity.subheader;
            offset = entity.description;
            entity = _closure1_slot17;
            tangon = undefined;
            yankee = entity.bind(tangon)();
            michal = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 13;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = _closure1_slot3;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.getParser;
                entity = entity.bind(michal)();
                return entity;
            };
            backup = michal.bind(tangon)(entity);
            zuuluu = _closure1_slot16;
            michal = _closure1_slot6;
            entity = {};
            report = yankee.headerContainer;
            entity['style'] = report;
            verify = null;
            oscard = verify != foxtra;
            if(!oscard) { _fun00002_ip = 107; continue _fun00001 }
 99:
            report = '';
            oscard = report !== foxtra;
 107:
            if(!oscard) { _fun00002_ip = 174; continue _fun00001 }
 110:
            romeon = _closure1_slot15;
            option = _closure1_slot0;
            sizing = _closure1_slot3;
            report = 15;
            report = sizing[report];
            report = option.bind(tangon)(report);
            option = report.Text;
            report = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            sizing = yankee.header;
            report['style'] = sizing;
            report['children'] = foxtra;
            oscard = romeon.bind(tangon)(option, report);
 174:
            report = new Array(3);
            report[0] = oscard;
            option = verify != kiloes;
            oscard = null;
            if(!option) { _fun00002_ip = 277; continue _fun00001 }
 191:
            romeon = kiloes.length;
            option = 0;
            option = romeon > option;
            oscard = null;
            if(!option) { _fun00002_ip = 277; continue _fun00001 }
 207:
            foxtra = _closure1_slot15;
            romeon = _closure1_slot0;
            sizing = _closure1_slot3;
            option = 15;
            option = sizing[option];
            option = romeon.bind(tangon)(option);
            romeon = option.Text;
            option = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            sizing = yankee.subheader;
            option['style'] = sizing;
            backup = backup.bind(tangon)(kiloes);
            option['children'] = backup;
            oscard = foxtra.bind(tangon)(romeon, option);
 277:
            report[1] = oscard;
            option = verify != offset;
            oscard = null;
            if(!option) { _fun00002_ip = 366; continue _fun00001 }
 290:
            romeon = offset.length;
            option = 0;
            option = romeon > option;
            oscard = null;
            if(!option) { _fun00002_ip = 366; continue _fun00001 }
 306:
            verify = _closure1_slot15;
            option = _closure1_slot0;
            romeon = _closure1_slot3;
            golfie = 15;
            golfie = romeon[golfie];
            golfie = option.bind(tangon)(golfie);
            option = golfie.Text;
            golfie = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            yankee = yankee.description;
            golfie['style'] = yankee;
            golfie['children'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 366:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = tangon;
    tangon = function(argFoo) { // Original name: InfoView
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.node;
            yankee = entity.info;
            entity = _closure1_slot17;
            report = undefined;
            romeon = entity.bind(report)();
            michal = _closure1_slot1;
            zuuluu = _closure1_slot3;
            entity = 13;
            entity = zuuluu[entity];
            michal = michal.bind(report)(entity);
            entity = function() {
                zuuluu = _closure1_slot2;
                michal = _closure1_slot3;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.getParser;
                entity = entity.bind(michal)();
                return entity;
            };
            offset = michal.bind(report)(entity);
            entity = null;
            michal = entity == yankee;
            if(michal) { _fun00004_ip = 292; continue _fun00003 }
 72:
            tangon = _closure1_slot16;
            zuuluu = _closure1_slot6;
            michal = {};
            option = romeon.infoBox;
            golfie = new Array(2);
            golfie[0] = option;
            verify = {};
            option = _closure1_slot0;
            foxtra = _closure1_slot3;
            backup = 16;
            backup = foxtra[backup];
            output = option.bind(report)(backup);
            sizing = output.hexWithOpacity;
            backup = romeon.infoBox;
            kiloes = backup.backgroundColor;
            backup = 0.1;
            backup = sizing.bind(output)(kiloes, backup);
            verify['backgroundColor'] = backup;
            golfie[1] = verify;
            michal['style'] = golfie;
            verify = _closure1_slot15;
            oscard = 17;
            oscard = foxtra[oscard];
            oscard = option.bind(report)(oscard);
            golfie = oscard.CircleInformationIcon;
            oscard = {};
            backup = 'md';
            oscard['size'] = backup;
            backup = romeon.infoBox;
            backup = backup.backgroundColor;
            oscard['color'] = backup;
            golfie = verify.bind(report)(golfie, oscard);
            oscard = new Array(2);
            oscard[0] = golfie;
            golfie = 15;
            golfie = foxtra[golfie];
            golfie = option.bind(report)(golfie);
            option = golfie.Text;
            golfie = {'style': null, 'variant': 'text-sm/normal', 'color': 'interactive-active'};
            romeon = romeon.infoBoxText;
            golfie['style'] = romeon;
            offset = offset.bind(report)(yankee);
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            oscard[1] = golfie;
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 292:
            return entity;
        }
    };
    var _closure1_slot19 = tangon;
    tangon = function(argFoo) { // Original name: ChildItem
        report = argFoo;
        oscard = report.child;
        var _closure2_slot0 = oscard;
        michal = null;
        tangon = Object.create(michal);
        michal = 0;
        tangon['child'] = michal;
        sizing = {};
        kiloes = report;
        backup = tangon;
        zuuluu = copyDataProperties(sizing, kiloes, backup);
        var _closure2_slot1 = zuuluu;
        zuuluu = _closure1_slot17;
        tangon = undefined;
        foxtra = zuuluu.bind(tangon)();
        report = _closure1_slot4;
        zuuluu = 1;
        oscard = report.bind(tangon)(oscard, zuuluu);
        romeon = oscard[michal];
        golfie = _closure1_slot5;
        oscard = golfie.useState;
        entity = function() {
            entity = function() {
                zuuluu = _closure2_slot1;
                michal = zuuluu.onPress;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            return entity;
        };
        entity = oscard.bind(golfie)(entity);
        entity = report.bind(tangon)(entity, zuuluu);
        report = entity[michal];
        zuuluu = _closure1_slot15;
        offset = _closure1_slot0;
        yankee = _closure1_slot3;
        entity = 18;
        entity = yankee[entity];
        entity = offset.bind(tangon)(entity);
        michal = entity.PressableHighlight;
        entity = {};
        oscard = foxtra.childButton;
        entity['style'] = oscard;
        oscard = 'button';
        entity['accessibilityRole'] = oscard;
        entity['onPress'] = report;
        golfie = _closure1_slot16;
        oscard = _closure1_slot6;
        report = {};
        option = foxtra.childContainer;
        report['style'] = option;
        option = 15;
        option = yankee[option];
        option = offset.bind(tangon)(option);
        offset = option.Text;
        option = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
        foxtra = foxtra.childButtonText;
        option['style'] = foxtra;
        option['children'] = romeon;
        offset = zuuluu.bind(tangon)(offset, option);
        option = new Array(2);
        option[0] = offset;
        offset = _closure1_slot1;
        verify = 19;
        verify = yankee[verify];
        offset = offset.bind(tangon)(verify);
        verify = {};
        verify = zuuluu.bind(tangon)(offset, verify);
        option[1] = verify;
        report['children'] = option;
        report = golfie.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot20 = tangon;
    tangon = function(argFoo) { // Original name: ChildrenView
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.node;
            option = michal.children;
            entity = entity.onSelectChild;
            var _closure2_slot0 = entity;
            entity = _closure1_slot17;
            report = undefined;
            golfie = entity.bind(report)();
            verify = null;
            zuuluu = verify == option;
            entity = null;
            if(zuuluu) { _fun00006_ip = 108; continue _fun00005 }
 50:
            tangon = option.length;
            zuuluu = 0;
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00006_ip = 108; continue _fun00005 }
 63:
            tangon = _closure1_slot15;
            zuuluu = _closure1_slot6;
            michal = {};
            golfie = golfie.childrenContainer;
            michal['style'] = golfie;
            golfie = option.map;
            oscard = function(argFoo) {
                entity = argFoo;
                tangon = _closure1_slot4;
                report = undefined;
                zuuluu = 2;
                tangon = tangon.bind(report)(entity, zuuluu);
                zuuluu = 0;
                verify = tangon[zuuluu];
                zuuluu = 1;
                option = tangon[zuuluu];
                tangon = _closure1_slot15;
                zuuluu = _closure1_slot20;
                michal = {};
                michal['child'] = entity;
                entity = _closure2_slot0;
                michal['onPress'] = entity;
                entity = global;
                entity = entity.HermesInternal;
                golfie = entity.concat;
                oscard = '';
                entity = '+';
                entity = golfie.bind(oscard)(verify, entity, option);
                entity = tangon.bind(report)(zuuluu, michal, entity);
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 108:
            return entity;
        }
    };
    var _closure1_slot21 = tangon;
    tangon = 44;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/native/components/NodeView.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: NodeView
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            entity = _closure1_slot17;
            tangon = undefined;
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            entity = 20;
            entity = report[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.useNavigation;
            zuuluu = entity.bind(zuuluu)();
            var _closure2_slot1 = zuuluu;
            yankee = michal.node;
            var _closure2_slot2 = yankee;
            sequen = michal.reportType;
            var _closure2_slot3 = sequen;
            vacuum = michal.reportSubType;
            cntext = michal.history;
            entity = michal.nodeMap;
            var _closure2_slot4 = entity;
            entity = michal.closeModal;
            var _closure2_slot5 = entity;
            limora = michal.addOnCloseCallback;
            entity = michal.onSubmit;
            var _closure2_slot6 = entity;
            config = michal.reportId;
            golfie = _closure1_slot5;
            romeon = golfie.useMemo;
            offset = new Array(1);
            offset[0] = sequen;
            report = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot3;
                    tangon = entity.name;
                    zuuluu = 'message';
                    entity = undefined;
                    if(!(zuuluu === tangon)) { _fun00010_ip = 37; continue _fun00009 }
 22:
                    michal = _closure2_slot3;
                    michal = michal.record;
                    entity = michal.channel_id;
 37:
                    return entity;
                }
            };
            equals = romeon.bind(golfie)(report, offset);
            offset = _closure1_slot22;
            report = 'checkbox';
            sizing = offset.bind(tangon)(yankee, report);
            var _closure2_slot7 = sizing;
            report = 'text_line_resource';
            sierra = offset.bind(tangon)(yankee, report);
            report = 'text';
            papara = offset.bind(tangon)(yankee, report);
            report = golfie.useState;
            echoed = false;
            report = report.bind(golfie)(echoed);
            result = _closure1_slot4;
            offset = 2;
            report = result.bind(tangon)(report, offset);
            kiloes = 0;
            romeon = report[kiloes];
            backup = 1;
            report = report[backup];
            var _closure2_slot8 = report;
            report = golfie.useState;
            report = report.bind(golfie)(echoed);
            report = result.bind(tangon)(report, offset);
            foxtra = report[kiloes];
            var _closure2_slot9 = foxtra;
            report = report[backup];
            var _closure2_slot10 = report;
            output = golfie.useState;
            report = function() {
                entity = {};
                return entity;
            };
            report = output.bind(golfie)(report);
            report = result.bind(tangon)(report, offset);
            output = report[kiloes];
            var _closure2_slot11 = output;
            report = report[backup];
            var _closure2_slot12 = report;
            report = golfie.useState;
            report = report.bind(golfie)(echoed);
            report = result.bind(tangon)(report, offset);
            offset = report[kiloes];
            report = report[backup];
            var _closure2_slot13 = report;
            backup = golfie.useEffect;
            report = new Array(2);
            report[0] = zuuluu;
            report[1] = michal;
            michal = function() {
                tangon = _closure2_slot1;
                zuuluu = tangon.addListener;
                michal = 'beforeRemove';
                entity = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        michal = _closure2_slot0;
                        zuuluu = michal.onNavigate;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00012_ip = 40; continue _fun00011 }
 19:
                        zuuluu = _closure2_slot0;
                        michal = zuuluu.onNavigate;
                        entity = '..';
                        entity = michal.bind(zuuluu)(entity);
 40:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            michal = backup.bind(golfie)(michal, report);
            report = golfie.useEffect;
            backup = yankee.is_auto_submit;
            michal = new Array(4);
            michal[0] = backup;
            michal[1] = foxtra;
            michal[2] = entity;
            entity = yankee.id;
            michal[3] = entity;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot2;
                    entity = entity.is_auto_submit;
                    if(!entity) { _fun00014_ip = 23; continue _fun00013 }
 16:
                    michal = _closure2_slot9;
                    entity = !michal;
 23:
                    if(!entity) { _fun00014_ip = 88; continue _fun00013 }
 26:
                    michal = _closure2_slot10;
                    zuuluu = undefined;
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
                    michal = _closure2_slot6;
                    entity = {};
                    tangon = _closure2_slot2;
                    report = tangon.id;
                    entity['nodeRef'] = report;
                    report = tangon.id;
                    tangon = [''];
                    tangon[1] = report;
                    entity['destination'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 88:
                    entity = undefined;
                    return entity;
                }
            };
            entity = report.bind(golfie)(entity, michal);
            source = function(argFoo) { // Original name: onSelectChild
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = argFoo;
                    report = _closure1_slot4;
                    entity = undefined;
                    zuuluu = 2;
                    zuuluu = report.bind(entity)(michal, zuuluu);
                    romeon = 1;
                    oscard = zuuluu[romeon];
                    foxtra = {};
                    foxtra['destination'] = michal;
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.id;
                    foxtra['nodeRef'] = zuuluu;
                    zuuluu = _closure2_slot7;
                    report = null;
                    golfie = report != zuuluu;
                    zuuluu = undefined;
                    if(!golfie) { _fun00016_ip = 93; continue _fun00015 }
 67:
                    golfie = {};
                    option = _closure2_slot7;
                    option = option.name;
                    golfie['name'] = option;
                    option = _closure2_slot11;
                    golfie['state'] = option;
                    zuuluu = golfie;
 93:
                    foxtra['multiSelect'] = zuuluu;
                    zuuluu = _closure2_slot4;
                    zuuluu = zuuluu[oscard];
                    if(!(report != zuuluu)) { _fun00016_ip = 496; continue _fun00015 }
 113:
                    golfie = _closure1_slot22;
                    oscard = 'skip';
                    oscard = golfie.bind(entity)(zuuluu, oscard);
                    if(!(report != oscard)) { _fun00016_ip = 162; continue _fun00015 }
 131:
                    oscard = zuuluu.button;
                    option = report == oscard;
                    golfie = undefined;
                    if(option) { _fun00016_ip = 151; continue _fun00015 }
 146:
                    golfie = oscard.type;
 151:
                    oscard = 'next';
                    if(!(oscard !== golfie)) { _fun00016_ip = 459; continue _fun00015 }
 162:
                    oscard = _closure2_slot3;
                    golfie = oscard.name;
                    option = _closure1_slot0;
                    oscard = _closure1_slot3;
                    verify = 21;
                    oscard = oscard[verify];
                    oscard = option.bind(entity)(oscard);
                    oscard = oscard.ReportNames;
                    oscard = oscard.MESSAGE;
                    if(!(golfie !== oscard)) { _fun00016_ip = 249; continue _fun00015 }
 207:
                    oscard = _closure2_slot3;
                    golfie = oscard.name;
                    option = _closure1_slot0;
                    oscard = _closure1_slot3;
                    oscard = oscard[verify];
                    oscard = option.bind(entity)(oscard);
                    oscard = oscard.ReportNames;
                    oscard = oscard.FIRST_DM;
                    if(!(golfie === oscard)) { _fun00016_ip = 364; continue _fun00015 }
 249:
                    offset = _closure2_slot3;
                    oscard = offset.record;
                    yankee = oscard.id;
                    golfie = _closure1_slot1;
                    option = _closure1_slot3;
                    oscard = 22;
                    oscard = option[oscard];
                    verify = golfie.bind(entity)(oscard);
                    option = verify.trackWithMetadata;
                    oscard = _closure1_slot12;
                    golfie = oscard.IAR_NAVIGATE;
                    oscard = {};
                    oscard['message_id'] = yankee;
                    offset = offset.name;
                    oscard['content_type'] = offset;
                    offset = zuuluu.report_type;
                    oscard['report_sub_type'] = offset;
                    offset = _closure2_slot2;
                    offset = offset.id;
                    oscard['current_node'] = offset;
                    offset = zuuluu.id;
                    oscard['next_node'] = offset;
                    oscard = option.bind(verify)(golfie, oscard);
 364:
                    verify = _closure2_slot1;
                    option = verify.push;
                    golfie = _closure1_slot11;
                    oscard = {};
                    oscard['node'] = zuuluu;
                    tangon = _closure2_slot0;
                    sizing = tangon.history;
                    offset = new Array(1);
                    kiloes = 0;
                    output = offset;
                    yankee = arraySpread(output, sizing, kiloes);
                    offset[yankee] = foxtra;
                    yankee = yankee + romeon;
                    oscard['history'] = offset;
                    oscard = option.bind(verify)(golfie, oscard);
                    tangon = tangon.onNavigate;
                    if(!(report != tangon)) { _fun00016_ip = 504; continue _fun00015 }
 437:
                    oscard = _closure2_slot0;
                    report = oscard.onNavigate;
                    tangon = zuuluu.key;
                    tangon = report.bind(oscard)(tangon);
                    _fun00016_ip = 504; continue _fun00015;
 459:
                    tangon = _closure2_slot14;
                    zuuluu = zuuluu.button;
                    report = zuuluu.target;
                    zuuluu = [''];
                    zuuluu[1] = report;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    return zuuluu;
 496:
                    michal = _closure2_slot5;
                    michal = michal.bind(entity)();
 504:
                    return entity;
                }
            };
            var _closure2_slot14 = source;
            entity = yankee.button;
            foxtra = null;
            report = foxtra == entity;
            michal = undefined;
            if(report) { _fun00008_ip = 443; continue _fun00007 }
 438:
            michal = entity.type;
 443:
            entity = 'done';
            entity = entity === michal;
            if(entity) { _fun00008_ip = 482; continue _fun00007 }
 454:
            michal = yankee.button;
            golfie = foxtra == michal;
            report = undefined;
            if(golfie) { _fun00008_ip = 474; continue _fun00007 }
 469:
            report = michal.type;
 474:
            michal = 'cancel';
            entity = michal === report;
 482:
            if(entity) { _fun00008_ip = 494; continue _fun00007 }
 485:
            michal = cntext.length;
            entity = kiloes === michal;
 494:
            if(!entity) { _fun00008_ip = 519; continue _fun00007 }
 497:
            michal = zuuluu.setOptions;
            entity = {};
            report = _closure1_slot25;
            entity['headerLeft'] = report;
            entity = michal.bind(zuuluu)(entity);
 519:
            report = _closure1_slot5;
            zuuluu = report.useCallback;
            michal = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = argFoo;
                    tangon = _closure1_slot8;
                    michal = tangon.getChannel;
                    entity = report.getChannelId;
                    entity = entity.bind(report)();
                    golfie = michal.bind(tangon)(entity);
                    entity = null;
                    entity = entity != golfie;
                    if(!entity) { _fun00018_ip = 123; continue _fun00017 }
 39:
                    tangon = golfie.type;
                    michal = _closure1_slot13;
                    michal = michal.DM;
                    michal = tangon !== michal;
                    if(!michal) { _fun00018_ip = 80; continue _fun00017 }
 61:
                    report = golfie.type;
                    tangon = _closure1_slot13;
                    tangon = tangon.GROUP_DM;
                    michal = report !== tangon;
 80:
                    if(!michal) { _fun00018_ip = 120; continue _fun00017 }
 83:
                    oscard = _closure1_slot9;
                    report = oscard.canWithPartialContext;
                    zuuluu = _closure1_slot14;
                    tangon = zuuluu.MANAGE_MESSAGES;
                    zuuluu = {};
                    golfie = golfie.id;
                    zuuluu['channelId'] = golfie;
                    michal = report.bind(oscard)(tangon, zuuluu);
 120:
                    entity = michal;
 123:
                    return entity;
                }
            };
            entity = new Array(0);
            status = zuuluu.bind(report)(michal, entity);
            michal = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 23;
            entity = zuuluu[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useIarReportSettingsUpsells;
            record = entity.bind(michal)(vacuum);
            michal = _closure1_slot22;
            entity = 'ignore_users';
            entity = michal.bind(tangon)(yankee, entity);
            target = foxtra != entity;
            if(!target) { _fun00008_ip = 647; continue _fun00007 }
 597:
            michal = sequen.name;
            entity = 'message';
            entity = entity === michal;
            if(entity) { _fun00008_ip = 628; continue _fun00007 }
 613:
            zuuluu = sequen.name;
            michal = 'first_dm';
            entity = michal === zuuluu;
 628:
            if(entity) { _fun00008_ip = 644; continue _fun00007 }
 631:
            zuuluu = sequen.name;
            michal = 'user';
            entity = michal === zuuluu;
 644:
            target = entity;
 647:
            zuuluu = _closure1_slot16;
            michal = _closure1_slot0;
            echoed = _closure1_slot3;
            entity = 24;
            entity = echoed[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.SafeAreaPaddingView;
            entity = {'style': null, 'bottom': true, 'top': true};
            report = option.container;
            entity['style'] = report;
            backup = true;
            golfie = _closure1_slot7;
            report = {};
            option = option.scrollView;
            report['style'] = option;
            update = _closure1_slot15;
            result = _closure1_slot1;
            option = 25;
            option = echoed[option];
            result = result.bind(tangon)(option);
            option = {};
            ctrled = _closure1_slot22;
            echoed = 'success';
            echoed = ctrled.bind(tangon)(yankee, echoed);
            option['element'] = echoed;
            result = update.bind(tangon)(result, option);
            option = new Array(16);
            option[0] = result;
            echoed = _closure1_slot18;
            result = {};
            result['node'] = yankee;
            result = update.bind(tangon)(echoed, result);
            option[1] = result;
            echoed = _closure1_slot19;
            result = {};
            result['node'] = yankee;
            result = update.bind(tangon)(echoed, result);
            option[2] = result;
            echoed = foxtra != sierra;
            result = null;
            if(!echoed) { _fun00008_ip = 859; continue _fun00007 }
 822:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            whisks = _closure1_slot3;
            echoed = 26;
            echoed = whisks[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            echoed['element'] = sierra;
            result = ctrled.bind(tangon)(update, echoed);
 859:
            option[3] = result;
            result = foxtra != papara;
            if(!result) { _fun00008_ip = 907; continue _fun00007 }
 870:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            sierra = _closure1_slot3;
            echoed = 27;
            echoed = sierra[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            echoed['element'] = papara;
            result = ctrled.bind(tangon)(update, echoed);
 907:
            option[4] = result;
            ctrled = _closure1_slot15;
            echoed = _closure1_slot1;
            update = _closure1_slot3;
            result = 28;
            result = update[result];
            update = echoed.bind(tangon)(result);
            result = {};
            echoed = _closure1_slot22;
            papara = 'breadcrumbs';
            papara = echoed.bind(tangon)(yankee, papara);
            result['element'] = papara;
            result['history'] = cntext;
            result = ctrled.bind(tangon)(update, result);
            option[5] = result;
            result = 'message_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra == result;
            result = null;
            if(echoed) { _fun00008_ip = 1062; continue _fun00007 }
 990:
            update = sequen.name;
            echoed = 'message';
            if(!(echoed !== update)) { _fun00008_ip = 1020; continue _fun00007 }
 1003:
            update = sequen.name;
            echoed = 'first_dm';
            result = null;
            if(!(echoed === update)) { _fun00008_ip = 1062; continue _fun00007 }
 1020:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 29;
            echoed = cntext[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            cntext = sequen.record;
            echoed['message'] = cntext;
            result = ctrled.bind(tangon)(update, echoed);
 1062:
            option[6] = result;
            echoed = _closure1_slot22;
            result = 'user_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00008_ip = 1148; continue _fun00007 }
 1091:
            update = sequen.name;
            echoed = 'user';
            result = null;
            if(!(echoed === update)) { _fun00008_ip = 1148; continue _fun00007 }
 1106:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 30;
            echoed = cntext[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            cntext = sequen.record;
            echoed['user'] = cntext;
            result = ctrled.bind(tangon)(update, echoed);
 1148:
            option[7] = result;
            echoed = _closure1_slot22;
            result = 'channel_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00008_ip = 1237; continue _fun00007 }
 1177:
            update = sequen.name;
            echoed = 'stage_channel';
            result = null;
            if(!(echoed === update)) { _fun00008_ip = 1237; continue _fun00007 }
 1194:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 31;
            echoed = cntext[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            cntext = sequen.record;
            echoed['stageInstance'] = cntext;
            result = ctrled.bind(tangon)(update, echoed);
 1237:
            option[8] = result;
            echoed = _closure1_slot22;
            result = 'guild_scheduled_event_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00008_ip = 1324; continue _fun00007 }
 1266:
            update = sequen.name;
            echoed = 'guild_scheduled_event';
            result = null;
            if(!(echoed === update)) { _fun00008_ip = 1324; continue _fun00007 }
 1281:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 32;
            echoed = cntext[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            cntext = sequen.record;
            echoed['event'] = cntext;
            result = ctrled.bind(tangon)(update, echoed);
 1324:
            option[9] = result;
            echoed = _closure1_slot22;
            result = 'guild_discovery_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00008_ip = 1412; continue _fun00007 }
 1353:
            update = sequen.name;
            echoed = 'guild_discovery';
            result = null;
            if(!(echoed === update)) { _fun00008_ip = 1412; continue _fun00007 }
 1370:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 33;
            echoed = cntext[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            cntext = sequen.record;
            echoed['guild'] = cntext;
            result = ctrled.bind(tangon)(update, echoed);
 1412:
            option[10] = result;
            result = _closure1_slot24;
            result = result.bind(tangon)(yankee);
            if(!result) { _fun00008_ip = 2080; continue _fun00007 }
 1431:
            ctrled = _closure1_slot16;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 34;
            echoed = cntext[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            papara = target;
            if(!papara) { _fun00008_ip = 1541; continue _fun00007 }
 1463:
            whisks = _closure1_slot15;
            sierra = _closure1_slot1;
            quebec = _closure1_slot3;
            cntext = 35;
            cntext = quebec[cntext];
            sierra = sierra.bind(tangon)(cntext);
            cntext = {};
            variable36 = sequen.name;
            quebec = 'user';
            if(!(quebec !== variable36)) { _fun00008_ip = 1516; continue _fun00007 }
 1502:
            quebec = sequen.record;
            quebec = quebec.author;
            _fun00008_ip = 1522; continue _fun00007;
 1516:
            quebec = sequen.record;
 1522:
            cntext['user'] = quebec;
            cntext['channelId'] = equals;
            cntext['reportId'] = config;
            papara = whisks.bind(tangon)(sierra, cntext);
 1541:
            cntext = new Array(5);
            cntext[0] = papara;
            sierra = _closure1_slot22;
            papara = 'block_users';
            papara = sierra.bind(tangon)(yankee, papara);
            papara = foxtra != papara;
            if(!papara) { _fun00008_ip = 1622; continue _fun00007 }
 1572:
            whisks = sequen.name;
            sierra = 'message';
            sierra = sierra === whisks;
            if(sierra) { _fun00008_ip = 1603; continue _fun00007 }
 1588:
            quebec = sequen.name;
            whisks = 'first_dm';
            sierra = whisks === quebec;
 1603:
            if(sierra) { _fun00008_ip = 1619; continue _fun00007 }
 1606:
            quebec = sequen.name;
            whisks = 'user';
            sierra = whisks === quebec;
 1619:
            papara = sierra;
 1622:
            if(!papara) { _fun00008_ip = 1703; continue _fun00007 }
 1625:
            quebec = _closure1_slot15;
            whisks = _closure1_slot1;
            variable36 = _closure1_slot3;
            sierra = 36;
            sierra = variable36[sierra];
            whisks = whisks.bind(tangon)(sierra);
            sierra = {};
            variable37 = sequen.name;
            variable36 = 'user';
            if(!(variable36 !== variable37)) { _fun00008_ip = 1678; continue _fun00007 }
 1664:
            variable36 = sequen.record;
            variable36 = variable36.author;
            _fun00008_ip = 1684; continue _fun00007;
 1678:
            variable36 = sequen.record;
 1684:
            sierra['user'] = variable36;
            sierra['channelId'] = equals;
            sierra['reportId'] = config;
            papara = quebec.bind(tangon)(whisks, sierra);
 1703:
            cntext[1] = papara;
            papara = !target;
            if(target) { _fun00008_ip = 1733; continue _fun00007 }
 1713:
            sierra = _closure1_slot22;
            target = 'mute_users';
            target = sierra.bind(tangon)(yankee, target);
            papara = foxtra != target;
 1733:
            if(!papara) { _fun00008_ip = 1786; continue _fun00007 }
 1736:
            sierra = sequen.name;
            target = 'message';
            target = target === sierra;
            if(target) { _fun00008_ip = 1767; continue _fun00007 }
 1752:
            whisks = sequen.name;
            sierra = 'first_dm';
            target = sierra === whisks;
 1767:
            if(target) { _fun00008_ip = 1783; continue _fun00007 }
 1770:
            whisks = sequen.name;
            sierra = 'user';
            target = sierra === whisks;
 1783:
            papara = target;
 1786:
            if(!papara) { _fun00008_ip = 1867; continue _fun00007 }
 1789:
            whisks = _closure1_slot15;
            sierra = _closure1_slot1;
            quebec = _closure1_slot3;
            target = 37;
            target = quebec[target];
            sierra = sierra.bind(tangon)(target);
            target = {};
            variable36 = sequen.name;
            quebec = 'user';
            if(!(quebec !== variable36)) { _fun00008_ip = 1842; continue _fun00007 }
 1828:
            quebec = sequen.record;
            quebec = quebec.author;
            _fun00008_ip = 1848; continue _fun00007;
 1842:
            quebec = sequen.record;
 1848:
            target['user'] = quebec;
            target['channelId'] = equals;
            target['reportId'] = config;
            papara = whisks.bind(tangon)(sierra, target);
 1867:
            cntext[2] = papara;
            target = _closure1_slot22;
            papara = 'delete_message';
            papara = target.bind(tangon)(yankee, papara);
            papara = foxtra != papara;
            if(!papara) { _fun00008_ip = 1907; continue _fun00007 }
 1894:
            sierra = sequen.name;
            target = 'message';
            papara = target === sierra;
 1907:
            if(!papara) { _fun00008_ip = 1921; continue _fun00007 }
 1910:
            target = sequen.record;
            papara = status.bind(tangon)(target);
 1921:
            if(!papara) { _fun00008_ip = 1971; continue _fun00007 }
 1924:
            sierra = _closure1_slot15;
            status = _closure1_slot1;
            whisks = _closure1_slot3;
            target = 38;
            target = whisks[target];
            status = status.bind(tangon)(target);
            target = {};
            whisks = sequen.record;
            target['message'] = whisks;
            target['reportId'] = config;
            papara = sierra.bind(tangon)(status, target);
 1971:
            cntext[3] = papara;
            target = _closure1_slot22;
            papara = 'leave_guild';
            papara = target.bind(tangon)(yankee, papara);
            papara = foxtra != papara;
            if(!papara) { _fun00008_ip = 2011; continue _fun00007 }
 1998:
            status = sequen.name;
            target = 'guild';
            papara = target === status;
 2011:
            if(!papara) { _fun00008_ip = 2066; continue _fun00007 }
 2014:
            sierra = _closure1_slot15;
            status = _closure1_slot1;
            whisks = _closure1_slot3;
            target = 39;
            target = whisks[target];
            status = status.bind(tangon)(target);
            target = {};
            whisks = sequen.record;
            target['guild'] = whisks;
            target['reportId'] = config;
            target['addCallback'] = limora;
            papara = sierra.bind(tangon)(status, target);
 2066:
            cntext[4] = papara;
            echoed['children'] = cntext;
            result = ctrled.bind(tangon)(update, echoed);
 2080:
            option[11] = result;
            echoed = _closure1_slot22;
            result = 'settings_upsells';
            result = echoed.bind(tangon)(yankee, result);
            result = foxtra != result;
            if(!result) { _fun00008_ip = 2120; continue _fun00007 }
 2107:
            update = sequen.name;
            echoed = 'message';
            result = echoed === update;
 2120:
            if(!result) { _fun00008_ip = 2127; continue _fun00007 }
 2123:
            result = foxtra != record;
 2127:
            if(!result) { _fun00008_ip = 2197; continue _fun00007 }
 2130:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 40;
            echoed = cntext[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            echoed['settingsUpsells'] = record;
            record = sequen.record;
            record = record.channel_id;
            echoed['channelId'] = record;
            echoed['reportId'] = config;
            echoed['reportType'] = sequen;
            echoed['reportSubType'] = vacuum;
            result = ctrled.bind(tangon)(update, echoed);
 2197:
            option[12] = result;
            update = _closure1_slot15;
            echoed = _closure1_slot1;
            ctrled = _closure1_slot3;
            result = 41;
            result = ctrled[result];
            echoed = echoed.bind(tangon)(result);
            result = {};
            result['element'] = sizing;
            result['state'] = output;
            ctrled = function(argFoo, argBar) { // Original name: onPress
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = argFoo;
                    zuuluu = {};
                    tangon = _closure2_slot11;
                    golfie = zuuluu;
                    oscard = tangon;
                    report = copyDataProperties(golfie, oscard);
                    tangon = michal in tangon;
                    if(tangon) { _fun00020_ip = 38; continue _fun00019 }
 29:
                    tangon = argBar;
                    zuuluu[michal] = tangon;
                    _fun00020_ip = 42; continue _fun00019;
 38:
                    michal = delete zuuluu[michal];
 42:
                    michal = _closure2_slot12;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            result['onPress'] = ctrled;
            result = update.bind(tangon)(echoed, result);
            option[13] = result;
            echoed = _closure1_slot21;
            result = {};
            result['node'] = yankee;
            result['onSelectChild'] = source;
            result = update.bind(tangon)(echoed, result);
            option[14] = result;
            result = _closure1_slot22;
            vacuum = 'external_link';
            result = result.bind(tangon)(yankee, vacuum);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00008_ip = 2353; continue _fun00007 }
 2306:
            source = _closure1_slot15;
            update = _closure1_slot1;
            ctrled = _closure1_slot3;
            echoed = 42;
            echoed = ctrled[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            ctrled = _closure1_slot23;
            ctrled = ctrled.bind(tangon)(yankee, vacuum);
            echoed['elements'] = ctrled;
            result = source.bind(tangon)(update, echoed);
 2353:
            option[15] = result;
            report['children'] = option;
            golfie = zuuluu.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot15;
            golfie = _closure1_slot1;
            result = _closure1_slot3;
            oscard = 43;
            oscard = result[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            if(romeon) { _fun00008_ip = 2456; continue _fun00007 }
 2404:
            result = foxtra == sizing;
            foxtra = undefined;
            if(result) { _fun00008_ip = 2419; continue _fun00007 }
 2413:
            foxtra = sizing.should_submit_data;
 2419:
            foxtra = backup === foxtra;
            if(!foxtra) { _fun00008_ip = 2453; continue _fun00007 }
 2426:
            backup = global;
            sizing = backup.Object;
            backup = sizing.keys;
            backup = backup.bind(sizing)(output);
            backup = backup.length;
            foxtra = kiloes === backup;
 2453:
            romeon = foxtra;
 2456:
            oscard['disabled'] = romeon;
            yankee = yankee.button;
            oscard['button'] = yankee;
            oscard['hasError'] = offset;
            verify = function(argFoo) { // Original name: onPress
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.type;
                    zuuluu = 'done';
                    if(!(zuuluu !== tangon)) { _fun00022_ip = 209; continue _fun00021 }
 21:
                    zuuluu = 'cancel';
                    if(!(zuuluu !== tangon)) { _fun00022_ip = 209; continue _fun00021 }
 32:
                    zuuluu = 'next';
                    if(!(zuuluu !== tangon)) { _fun00022_ip = 173; continue _fun00021 }
 43:
                    zuuluu = 'submit';
                    if(!(zuuluu === tangon)) { _fun00022_ip = 243; continue _fun00021 }
 54:
                    tangon = _closure2_slot8;
                    report = undefined;
                    zuuluu = true;
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure2_slot6;
                    zuuluu = {};
                    golfie = _closure2_slot2;
                    golfie = golfie.id;
                    zuuluu['nodeRef'] = golfie;
                    oscard = _closure2_slot0;
                    golfie = oscard.successNodeId;
                    oscard = [''];
                    oscard[1] = golfie;
                    zuuluu['destination'] = oscard;
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.then;
                    zuuluu = function() {
                        tangon = _closure2_slot13;
                        entity = undefined;
                        zuuluu = false;
                        zuuluu = tangon.bind(entity)(zuuluu);
                        zuuluu = _closure2_slot14;
                        michal = _closure2_slot0;
                        tangon = michal.successNodeId;
                        michal = [''];
                        michal[1] = tangon;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.catch;
                    zuuluu = function() {
                        zuuluu = _closure2_slot13;
                        entity = undefined;
                        michal = true;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.finally;
                    michal = function() {
                        zuuluu = _closure2_slot8;
                        entity = undefined;
                        michal = false;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00022_ip = 243; continue _fun00021;
 173:
                    zuuluu = _closure2_slot14;
                    entity = entity.target;
                    michal = [''];
                    michal[1] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    _fun00022_ip = 243; continue _fun00021;
 209:
                    zuuluu = _closure2_slot14;
                    michal = [''];
                    entity = -1;
                    michal[1] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 243:
                    entity = undefined;
                    return entity;
                }
            };
            oscard['onPress'] = verify;
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