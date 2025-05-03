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
            if(michal) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot23;
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
            golfie = _closure1_slot23;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot22 = entity;
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
    var _closure1_slot23 = entity;
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
    var _closure1_slot24 = entity;
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
    var _closure1_slot25 = entity;
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
    var _closure1_slot26 = entity;
    entity = function() { // Original name: NullComponent
        entity = null;
        return entity;
    };
    var _closure1_slot27 = entity;
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
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot15 = golfie;
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
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
            if(!oscard) { _fun00008_ip = 107; continue _fun00007 }
 99:
            report = '';
            oscard = report !== foxtra;
 107:
            if(!oscard) { _fun00008_ip = 174; continue _fun00007 }
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
            if(!option) { _fun00008_ip = 277; continue _fun00007 }
 191:
            romeon = kiloes.length;
            option = 0;
            option = romeon > option;
            oscard = null;
            if(!option) { _fun00008_ip = 277; continue _fun00007 }
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
            if(!option) { _fun00008_ip = 370; continue _fun00007 }
 290:
            romeon = offset.length;
            option = 0;
            option = romeon > option;
            oscard = null;
            if(!option) { _fun00008_ip = 370; continue _fun00007 }
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
 370:
            report[2] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot18 = tangon;
    tangon = function(argFoo) { // Original name: InfoView
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            if(michal) { _fun00010_ip = 296; continue _fun00009 }
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
 296:
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
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
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
            if(zuuluu) { _fun00012_ip = 108; continue _fun00011 }
 50:
            tangon = option.length;
            zuuluu = 0;
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00012_ip = 108; continue _fun00011 }
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
    tangon = 45;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/native/components/NodeView.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: NodeView
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            result = argFoo;
            var _closure2_slot0 = result;
            entity = _closure1_slot17;
            tangon = undefined;
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot0;
            report = _closure1_slot3;
            entity = 20;
            entity = report[entity];
            michal = zuuluu.bind(tangon)(entity);
            entity = michal.useNavigation;
            entity = entity.bind(michal)();
            var _closure2_slot1 = entity;
            yankee = result.node;
            var _closure2_slot2 = yankee;
            sequen = result.reportType;
            var _closure2_slot3 = sequen;
            vacuum = result.reportSubType;
            ctrled = result.history;
            var _closure2_slot4 = ctrled;
            source = result.nodeMap;
            var _closure2_slot5 = source;
            echoed = result.closeModal;
            var _closure2_slot6 = echoed;
            limora = result.addOnCloseCallback;
            foxtra = result.onSubmit;
            var _closure2_slot7 = foxtra;
            config = result.reportId;
            update = result.onNavigate;
            var _closure2_slot8 = update;
            backup = _closure1_slot5;
            offset = backup.useMemo;
            golfie = new Array(1);
            golfie[0] = sequen;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot3;
                    tangon = entity.name;
                    zuuluu = 'message';
                    entity = undefined;
                    if(!(zuuluu === tangon)) { _fun00016_ip = 37; continue _fun00015 }
 22:
                    michal = _closure2_slot3;
                    michal = michal.record;
                    entity = michal.channel_id;
 37:
                    return entity;
                }
            };
            equals = offset.bind(backup)(michal, golfie);
            michal = _closure1_slot24;
            golfie = 'checkbox';
            sizing = michal.bind(tangon)(yankee, golfie);
            var _closure2_slot9 = sizing;
            golfie = 'text_line_resource';
            sierra = michal.bind(tangon)(yankee, golfie);
            golfie = 'text';
            papara = michal.bind(tangon)(yankee, golfie);
            golfie = backup.useState;
            status = false;
            golfie = golfie.bind(backup)(status);
            target = _closure1_slot4;
            offset = 2;
            golfie = target.bind(tangon)(golfie, offset);
            kiloes = 0;
            romeon = golfie[kiloes];
            record = 1;
            golfie = golfie[record];
            var _closure2_slot10 = golfie;
            golfie = backup.useState;
            golfie = golfie.bind(backup)(status);
            golfie = target.bind(tangon)(golfie, offset);
            cntext = golfie[kiloes];
            var _closure2_slot11 = cntext;
            golfie = golfie[record];
            var _closure2_slot12 = golfie;
            output = backup.useState;
            golfie = function() {
                entity = {};
                return entity;
            };
            golfie = output.bind(backup)(golfie);
            golfie = target.bind(tangon)(golfie, offset);
            output = golfie[kiloes];
            var _closure2_slot13 = output;
            golfie = golfie[record];
            var _closure2_slot14 = golfie;
            golfie = backup.useState;
            golfie = golfie.bind(backup)(status);
            golfie = target.bind(tangon)(golfie, offset);
            offset = golfie[kiloes];
            golfie = golfie[record];
            var _closure2_slot15 = golfie;
            target = backup.useCallback;
            record = new Array(3);
            record[0] = yankee;
            record[1] = sizing;
            record[2] = output;
            golfie = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = {};
                    michal = _closure2_slot2;
                    michal = michal.id;
                    entity['nodeRef'] = michal;
                    michal = argFoo;
                    entity['destination'] = michal;
                    zuuluu = _closure2_slot9;
                    michal = null;
                    zuuluu = michal != zuuluu;
                    michal = undefined;
                    if(!zuuluu) { _fun00018_ip = 68; continue _fun00017 }
 42:
                    zuuluu = {};
                    report = _closure2_slot9;
                    report = report.name;
                    zuuluu['name'] = report;
                    tangon = _closure2_slot13;
                    zuuluu['state'] = tangon;
                    michal = zuuluu;
 68:
                    entity['multiSelect'] = michal;
                    return entity;
                }
            };
            golfie = target.bind(backup)(golfie, record);
            var _closure2_slot16 = golfie;
            status = backup.useEffect;
            target = new Array(1);
            target[0] = sizing;
            record = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure2_slot9;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00020_ip = 129; continue _fun00019 }
 15:
                    michal = _closure2_slot9;
                    michal = michal.data;
                    if(!(entity != michal)) { _fun00020_ip = 129; continue _fun00019 }
 28:
                    yankee = function(argFoo, argBar) { // Original name: _loop
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            michal = argFoo;
                            var _closure4_slot0 = michal;
                            michal = argBar;
                            var _closure4_slot1 = michal;
                            zuuluu = _closure3_slot0;
                            michal = true;
                            if(!(michal === zuuluu)) { _fun00022_ip = 48; continue _fun00021 }
 29:
                            zuuluu = _closure2_slot14;
                            michal = undefined;
                            entity = function(argFoo) {
                                entity = {};
                                tangon = argFoo;
                                report = entity;
                                michal = copyDataProperties(report, tangon);
                                zuuluu = _closure4_slot0;
                                michal = _closure4_slot1;
                                entity[zuuluu] = michal;
                                return entity;
                            };
                            entity = zuuluu.bind(michal)(entity);
 48:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = _closure1_slot22;
                    verify = undefined;
                    option = entity.bind(verify)(michal);
                    michal = option.bind(verify)();
                    entity = michal.done;
                    golfie = 4;
                    oscard = 0;
                    report = 1;
                    tangon = 2;
                    zuuluu = 3;
                    if(entity) { _fun00020_ip = 129; continue _fun00019 }
 73:
                    foxtra = michal.value;
                    entity = _closure1_slot4;
                    backup = entity.bind(verify)(foxtra, golfie);
                    foxtra = backup[oscard];
                    entity = backup[report];
                    kiloes = backup[tangon];
                    backup = backup[zuuluu];
                    var _closure3_slot0 = backup;
                    entity = yankee.bind(verify)(foxtra, entity);
                    foxtra = option.bind(verify)();
                    entity = foxtra.done;
                    michal = foxtra;
                    if(!entity) { _fun00020_ip = 73; continue _fun00019 }
 129:
                    entity = undefined;
                    return entity;
                }
            };
            record = status.bind(backup)(record, target);
            target = backup.useEffect;
            record = new Array(2);
            record[0] = entity;
            record[1] = result;
            result = function() {
                tangon = _closure2_slot1;
                zuuluu = tangon.addListener;
                michal = 'beforeRemove';
                entity = function() {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        michal = _closure2_slot0;
                        zuuluu = michal.onNavigate;
                        michal = null;
                        if(!(michal != zuuluu)) { _fun00024_ip = 40; continue _fun00023 }
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
            result = target.bind(backup)(result, record);
            record = backup.useEffect;
            target = yankee.is_auto_submit;
            result = new Array(4);
            result[0] = target;
            result[1] = cntext;
            result[2] = foxtra;
            foxtra = yankee.id;
            result[3] = foxtra;
            foxtra = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot2;
                    entity = entity.is_auto_submit;
                    if(!entity) { _fun00026_ip = 23; continue _fun00025 }
 16:
                    michal = _closure2_slot11;
                    entity = !michal;
 23:
                    if(!entity) { _fun00026_ip = 88; continue _fun00025 }
 26:
                    michal = _closure2_slot12;
                    zuuluu = undefined;
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
                    michal = _closure2_slot7;
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
            foxtra = record.bind(backup)(foxtra, result);
            result = backup.useCallback;
            foxtra = new Array(8);
            foxtra[0] = yankee;
            foxtra[1] = source;
            foxtra[2] = entity;
            foxtra[3] = ctrled;
            foxtra[4] = update;
            foxtra[5] = echoed;
            foxtra[6] = sequen;
            foxtra[7] = golfie;
            golfie = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    oscard = argFoo;
                    zuuluu = _closure1_slot4;
                    entity = undefined;
                    michal = 2;
                    michal = zuuluu.bind(entity)(oscard, michal);
                    yankee = 1;
                    report = michal[yankee];
                    zuuluu = _closure2_slot16;
                    romeon = zuuluu.bind(entity)(oscard);
                    zuuluu = _closure2_slot5;
                    zuuluu = zuuluu[report];
                    report = null;
                    if(!(report != zuuluu)) { _fun00028_ip = 426; continue _fun00027 }
 57:
                    golfie = _closure1_slot24;
                    oscard = 'skip';
                    oscard = golfie.bind(entity)(zuuluu, oscard);
                    if(!(report != oscard)) { _fun00028_ip = 106; continue _fun00027 }
 75:
                    oscard = zuuluu.button;
                    option = report == oscard;
                    golfie = undefined;
                    if(option) { _fun00028_ip = 95; continue _fun00027 }
 90:
                    golfie = oscard.type;
 95:
                    oscard = 'next';
                    if(!(oscard !== golfie)) { _fun00028_ip = 389; continue _fun00027 }
 106:
                    oscard = _closure2_slot3;
                    golfie = oscard.name;
                    option = _closure1_slot0;
                    oscard = _closure1_slot3;
                    verify = 21;
                    oscard = oscard[verify];
                    oscard = option.bind(entity)(oscard);
                    oscard = oscard.ReportNames;
                    oscard = oscard.MESSAGE;
                    if(!(golfie !== oscard)) { _fun00028_ip = 193; continue _fun00027 }
 151:
                    oscard = _closure2_slot3;
                    golfie = oscard.name;
                    option = _closure1_slot0;
                    oscard = _closure1_slot3;
                    oscard = oscard[verify];
                    oscard = option.bind(entity)(oscard);
                    oscard = oscard.ReportNames;
                    oscard = oscard.FIRST_DM;
                    if(!(golfie === oscard)) { _fun00028_ip = 308; continue _fun00027 }
 193:
                    offset = _closure2_slot3;
                    oscard = offset.record;
                    foxtra = oscard.id;
                    golfie = _closure1_slot1;
                    option = _closure1_slot3;
                    oscard = 22;
                    oscard = option[oscard];
                    verify = golfie.bind(entity)(oscard);
                    option = verify.trackWithMetadata;
                    oscard = _closure1_slot12;
                    golfie = oscard.IAR_NAVIGATE;
                    oscard = {};
                    oscard['message_id'] = foxtra;
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
 308:
                    option = _closure2_slot1;
                    golfie = option.push;
                    oscard = _closure1_slot11;
                    tangon = {};
                    tangon['node'] = zuuluu;
                    kiloes = _closure2_slot4;
                    verify = new Array(1);
                    backup = 0;
                    sizing = verify;
                    offset = arraySpread(sizing, kiloes, backup);
                    verify[offset] = romeon;
                    offset = offset + yankee;
                    tangon['history'] = verify;
                    tangon = golfie.bind(option)(oscard, tangon);
                    tangon = _closure2_slot8;
                    if(!(report != tangon)) { _fun00028_ip = 434; continue _fun00027 }
 373:
                    report = _closure2_slot8;
                    tangon = zuuluu.key;
                    tangon = report.bind(entity)(tangon);
                    _fun00028_ip = 434; continue _fun00027;
 389:
                    tangon = _closure2_slot17;
                    zuuluu = zuuluu.button;
                    report = zuuluu.target;
                    zuuluu = [''];
                    zuuluu[1] = report;
                    zuuluu = tangon.bind(entity)(zuuluu);
                    return zuuluu;
 426:
                    michal = _closure2_slot6;
                    michal = michal.bind(entity)();
 434:
                    return entity;
                }
            };
            source = result.bind(backup)(golfie, foxtra);
            var _closure2_slot17 = source;
            foxtra = backup.useEffect;
            golfie = new Array(3);
            golfie[0] = yankee;
            golfie[1] = ctrled;
            golfie[2] = entity;
            entity = function() {
                _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                    entity = _closure2_slot2;
                    zuuluu = entity.button;
                    report = null;
                    oscard = report == zuuluu;
                    entity = undefined;
                    tangon = undefined;
                    if(oscard) { _fun00030_ip = 31; continue _fun00029 }
 26:
                    tangon = zuuluu.type;
 31:
                    zuuluu = 'done';
                    zuuluu = zuuluu === tangon;
                    if(zuuluu) { _fun00030_ip = 74; continue _fun00029 }
 42:
                    tangon = _closure2_slot2;
                    tangon = tangon.button;
                    oscard = report == tangon;
                    report = undefined;
                    if(oscard) { _fun00030_ip = 66; continue _fun00029 }
 61:
                    report = tangon.type;
 66:
                    tangon = 'cancel';
                    zuuluu = tangon === report;
 74:
                    if(zuuluu) { _fun00030_ip = 92; continue _fun00029 }
 77:
                    tangon = _closure2_slot4;
                    report = tangon.length;
                    tangon = 0;
                    zuuluu = tangon === report;
 92:
                    if(!zuuluu) { _fun00030_ip = 124; continue _fun00029 }
 95:
                    tangon = _closure2_slot1;
                    zuuluu = tangon.setOptions;
                    michal = {};
                    report = _closure1_slot27;
                    michal['headerLeft'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 124:
                    return entity;
                }
            };
            entity = foxtra.bind(backup)(entity, golfie);
            foxtra = backup.useCallback;
            golfie = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    report = argFoo;
                    tangon = _closure1_slot8;
                    michal = tangon.getChannel;
                    entity = report.getChannelId;
                    entity = entity.bind(report)();
                    golfie = michal.bind(tangon)(entity);
                    entity = null;
                    entity = entity != golfie;
                    if(!entity) { _fun00032_ip = 123; continue _fun00031 }
 39:
                    tangon = golfie.type;
                    michal = _closure1_slot13;
                    michal = michal.DM;
                    michal = tangon !== michal;
                    if(!michal) { _fun00032_ip = 80; continue _fun00031 }
 61:
                    report = golfie.type;
                    tangon = _closure1_slot13;
                    tangon = tangon.GROUP_DM;
                    michal = report !== tangon;
 80:
                    if(!michal) { _fun00032_ip = 120; continue _fun00031 }
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
            status = foxtra.bind(backup)(golfie, entity);
            entity = 23;
            entity = report[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.useIarReportSettingsUpsells;
            record = entity.bind(zuuluu)(vacuum);
            entity = 'ignore_users';
            entity = michal.bind(tangon)(yankee, entity);
            foxtra = null;
            target = foxtra != entity;
            if(!target) { _fun00014_ip = 706; continue _fun00013 }
 638:
            michal = sequen.name;
            entity = 'message';
            entity = entity === michal;
            if(entity) { _fun00014_ip = 669; continue _fun00013 }
 654:
            zuuluu = sequen.name;
            michal = 'first_dm';
            entity = michal === zuuluu;
 669:
            if(entity) { _fun00014_ip = 685; continue _fun00013 }
 672:
            zuuluu = sequen.name;
            michal = 'user';
            entity = michal === zuuluu;
 685:
            if(entity) { _fun00014_ip = 703; continue _fun00013 }
 688:
            zuuluu = sequen.name;
            michal = 'report_to_mod_message';
            entity = michal === zuuluu;
 703:
            target = entity;
 706:
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
            cntext = _closure1_slot24;
            echoed = 'success';
            echoed = cntext.bind(tangon)(yankee, echoed);
            option['element'] = echoed;
            result = update.bind(tangon)(result, option);
            option = new Array(17);
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
            if(!echoed) { _fun00014_ip = 922; continue _fun00013 }
 885:
            cntext = _closure1_slot15;
            update = _closure1_slot1;
            whisks = _closure1_slot3;
            echoed = 26;
            echoed = whisks[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            echoed['element'] = sierra;
            result = cntext.bind(tangon)(update, echoed);
 922:
            option[3] = result;
            result = foxtra != papara;
            if(!result) { _fun00014_ip = 970; continue _fun00013 }
 933:
            cntext = _closure1_slot15;
            update = _closure1_slot1;
            sierra = _closure1_slot3;
            echoed = 27;
            echoed = sierra[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            echoed['element'] = papara;
            result = cntext.bind(tangon)(update, echoed);
 970:
            option[4] = result;
            echoed = _closure1_slot24;
            result = 'message_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra == result;
            result = null;
            if(echoed) { _fun00014_ip = 1084; continue _fun00013 }
 997:
            update = sequen.name;
            echoed = 'message';
            if(!(echoed !== update)) { _fun00014_ip = 1042; continue _fun00013 }
 1010:
            update = sequen.name;
            echoed = 'first_dm';
            if(!(echoed !== update)) { _fun00014_ip = 1042; continue _fun00013 }
 1025:
            update = sequen.name;
            echoed = 'report_to_mod_message';
            result = null;
            if(!(echoed === update)) { _fun00014_ip = 1084; continue _fun00013 }
 1042:
            cntext = _closure1_slot15;
            update = _closure1_slot1;
            papara = _closure1_slot3;
            echoed = 28;
            echoed = papara[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            papara = sequen.record;
            echoed['message'] = papara;
            result = cntext.bind(tangon)(update, echoed);
 1084:
            option[5] = result;
            echoed = _closure1_slot24;
            result = 'user_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00014_ip = 1170; continue _fun00013 }
 1113:
            update = sequen.name;
            echoed = 'user';
            result = null;
            if(!(echoed === update)) { _fun00014_ip = 1170; continue _fun00013 }
 1128:
            cntext = _closure1_slot15;
            update = _closure1_slot1;
            papara = _closure1_slot3;
            echoed = 29;
            echoed = papara[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            papara = sequen.record;
            echoed['user'] = papara;
            result = cntext.bind(tangon)(update, echoed);
 1170:
            option[6] = result;
            echoed = _closure1_slot24;
            result = 'channel_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00014_ip = 1259; continue _fun00013 }
 1199:
            update = sequen.name;
            echoed = 'stage_channel';
            result = null;
            if(!(echoed === update)) { _fun00014_ip = 1259; continue _fun00013 }
 1216:
            cntext = _closure1_slot15;
            update = _closure1_slot1;
            papara = _closure1_slot3;
            echoed = 30;
            echoed = papara[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            papara = sequen.record;
            echoed['stageInstance'] = papara;
            result = cntext.bind(tangon)(update, echoed);
 1259:
            option[7] = result;
            echoed = _closure1_slot24;
            result = 'guild_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00014_ip = 1345; continue _fun00013 }
 1288:
            update = sequen.name;
            echoed = 'guild';
            result = null;
            if(!(echoed === update)) { _fun00014_ip = 1345; continue _fun00013 }
 1303:
            cntext = _closure1_slot15;
            update = _closure1_slot1;
            papara = _closure1_slot3;
            echoed = 31;
            echoed = papara[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            papara = sequen.record;
            echoed['guild'] = papara;
            result = cntext.bind(tangon)(update, echoed);
 1345:
            option[8] = result;
            echoed = _closure1_slot24;
            result = 'guild_scheduled_event_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00014_ip = 1432; continue _fun00013 }
 1374:
            update = sequen.name;
            echoed = 'guild_scheduled_event';
            result = null;
            if(!(echoed === update)) { _fun00014_ip = 1432; continue _fun00013 }
 1389:
            cntext = _closure1_slot15;
            update = _closure1_slot1;
            papara = _closure1_slot3;
            echoed = 32;
            echoed = papara[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            papara = sequen.record;
            echoed['event'] = papara;
            result = cntext.bind(tangon)(update, echoed);
 1432:
            option[9] = result;
            echoed = _closure1_slot24;
            result = 'guild_discovery_preview';
            result = echoed.bind(tangon)(yankee, result);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00014_ip = 1520; continue _fun00013 }
 1461:
            update = sequen.name;
            echoed = 'guild_discovery';
            result = null;
            if(!(echoed === update)) { _fun00014_ip = 1520; continue _fun00013 }
 1478:
            cntext = _closure1_slot15;
            update = _closure1_slot1;
            papara = _closure1_slot3;
            echoed = 33;
            echoed = papara[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            papara = sequen.record;
            echoed['guild'] = papara;
            result = cntext.bind(tangon)(update, echoed);
 1520:
            option[10] = result;
            update = _closure1_slot15;
            echoed = _closure1_slot1;
            cntext = _closure1_slot3;
            result = 34;
            result = cntext[result];
            echoed = echoed.bind(tangon)(result);
            result = {};
            papara = _closure1_slot24;
            cntext = 'breadcrumbs';
            cntext = papara.bind(tangon)(yankee, cntext);
            result['element'] = cntext;
            result['history'] = ctrled;
            result = update.bind(tangon)(echoed, result);
            option[11] = result;
            result = _closure1_slot26;
            result = result.bind(tangon)(yankee);
            if(!result) { _fun00014_ip = 2305; continue _fun00013 }
 1599:
            ctrled = _closure1_slot16;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 35;
            echoed = cntext[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            papara = target;
            if(!papara) { _fun00014_ip = 1709; continue _fun00013 }
 1631:
            whisks = _closure1_slot15;
            sierra = _closure1_slot1;
            quebec = _closure1_slot3;
            cntext = 36;
            cntext = quebec[cntext];
            sierra = sierra.bind(tangon)(cntext);
            cntext = {};
            variable36 = sequen.name;
            quebec = 'user';
            if(!(quebec !== variable36)) { _fun00014_ip = 1684; continue _fun00013 }
 1670:
            quebec = sequen.record;
            quebec = quebec.author;
            _fun00014_ip = 1690; continue _fun00013;
 1684:
            quebec = sequen.record;
 1690:
            cntext['user'] = quebec;
            cntext['channelId'] = equals;
            cntext['reportId'] = config;
            papara = whisks.bind(tangon)(sierra, cntext);
 1709:
            cntext = new Array(5);
            cntext[0] = papara;
            sierra = _closure1_slot24;
            papara = 'block_users';
            papara = sierra.bind(tangon)(yankee, papara);
            papara = foxtra != papara;
            if(!papara) { _fun00014_ip = 1808; continue _fun00013 }
 1740:
            whisks = sequen.name;
            sierra = 'message';
            sierra = sierra === whisks;
            if(sierra) { _fun00014_ip = 1771; continue _fun00013 }
 1756:
            quebec = sequen.name;
            whisks = 'first_dm';
            sierra = whisks === quebec;
 1771:
            if(sierra) { _fun00014_ip = 1787; continue _fun00013 }
 1774:
            quebec = sequen.name;
            whisks = 'user';
            sierra = whisks === quebec;
 1787:
            if(sierra) { _fun00014_ip = 1805; continue _fun00013 }
 1790:
            quebec = sequen.name;
            whisks = 'report_to_mod_message';
            sierra = whisks === quebec;
 1805:
            papara = sierra;
 1808:
            if(!papara) { _fun00014_ip = 1889; continue _fun00013 }
 1811:
            quebec = _closure1_slot15;
            whisks = _closure1_slot1;
            variable36 = _closure1_slot3;
            sierra = 37;
            sierra = variable36[sierra];
            whisks = whisks.bind(tangon)(sierra);
            sierra = {};
            variable37 = sequen.name;
            variable36 = 'user';
            if(!(variable36 !== variable37)) { _fun00014_ip = 1864; continue _fun00013 }
 1850:
            variable36 = sequen.record;
            variable36 = variable36.author;
            _fun00014_ip = 1870; continue _fun00013;
 1864:
            variable36 = sequen.record;
 1870:
            sierra['user'] = variable36;
            sierra['channelId'] = equals;
            sierra['reportId'] = config;
            papara = quebec.bind(tangon)(whisks, sierra);
 1889:
            cntext[1] = papara;
            papara = !target;
            if(target) { _fun00014_ip = 1919; continue _fun00013 }
 1899:
            sierra = _closure1_slot24;
            target = 'mute_users';
            target = sierra.bind(tangon)(yankee, target);
            papara = foxtra != target;
 1919:
            if(!papara) { _fun00014_ip = 1990; continue _fun00013 }
 1922:
            sierra = sequen.name;
            target = 'message';
            target = target === sierra;
            if(target) { _fun00014_ip = 1953; continue _fun00013 }
 1938:
            whisks = sequen.name;
            sierra = 'first_dm';
            target = sierra === whisks;
 1953:
            if(target) { _fun00014_ip = 1969; continue _fun00013 }
 1956:
            whisks = sequen.name;
            sierra = 'user';
            target = sierra === whisks;
 1969:
            if(target) { _fun00014_ip = 1987; continue _fun00013 }
 1972:
            whisks = sequen.name;
            sierra = 'report_to_mod_message';
            target = sierra === whisks;
 1987:
            papara = target;
 1990:
            if(!papara) { _fun00014_ip = 2071; continue _fun00013 }
 1993:
            whisks = _closure1_slot15;
            sierra = _closure1_slot1;
            quebec = _closure1_slot3;
            target = 38;
            target = quebec[target];
            sierra = sierra.bind(tangon)(target);
            target = {};
            variable36 = sequen.name;
            quebec = 'user';
            if(!(quebec !== variable36)) { _fun00014_ip = 2046; continue _fun00013 }
 2032:
            quebec = sequen.record;
            quebec = quebec.author;
            _fun00014_ip = 2052; continue _fun00013;
 2046:
            quebec = sequen.record;
 2052:
            target['user'] = quebec;
            target['channelId'] = equals;
            target['reportId'] = config;
            papara = whisks.bind(tangon)(sierra, target);
 2071:
            cntext[2] = papara;
            target = _closure1_slot24;
            papara = 'delete_message';
            papara = target.bind(tangon)(yankee, papara);
            papara = foxtra != papara;
            if(!papara) { _fun00014_ip = 2132; continue _fun00013 }
 2098:
            sierra = sequen.name;
            target = 'message';
            target = target === sierra;
            if(target) { _fun00014_ip = 2129; continue _fun00013 }
 2114:
            whisks = sequen.name;
            sierra = 'report_to_mod_message';
            target = sierra === whisks;
 2129:
            papara = target;
 2132:
            if(!papara) { _fun00014_ip = 2146; continue _fun00013 }
 2135:
            target = sequen.record;
            papara = status.bind(tangon)(target);
 2146:
            if(!papara) { _fun00014_ip = 2196; continue _fun00013 }
 2149:
            sierra = _closure1_slot15;
            status = _closure1_slot1;
            whisks = _closure1_slot3;
            target = 39;
            target = whisks[target];
            status = status.bind(tangon)(target);
            target = {};
            whisks = sequen.record;
            target['message'] = whisks;
            target['reportId'] = config;
            papara = sierra.bind(tangon)(status, target);
 2196:
            cntext[3] = papara;
            target = _closure1_slot24;
            papara = 'leave_guild';
            papara = target.bind(tangon)(yankee, papara);
            papara = foxtra != papara;
            if(!papara) { _fun00014_ip = 2236; continue _fun00013 }
 2223:
            status = sequen.name;
            target = 'guild';
            papara = target === status;
 2236:
            if(!papara) { _fun00014_ip = 2291; continue _fun00013 }
 2239:
            sierra = _closure1_slot15;
            status = _closure1_slot1;
            whisks = _closure1_slot3;
            target = 40;
            target = whisks[target];
            status = status.bind(tangon)(target);
            target = {};
            whisks = sequen.record;
            target['guild'] = whisks;
            target['reportId'] = config;
            target['addCallback'] = limora;
            papara = sierra.bind(tangon)(status, target);
 2291:
            cntext[4] = papara;
            echoed['children'] = cntext;
            result = ctrled.bind(tangon)(update, echoed);
 2305:
            option[12] = result;
            echoed = _closure1_slot24;
            result = 'settings_upsells';
            result = echoed.bind(tangon)(yankee, result);
            result = foxtra != result;
            if(!result) { _fun00014_ip = 2366; continue _fun00013 }
 2332:
            update = sequen.name;
            echoed = 'message';
            echoed = echoed === update;
            if(echoed) { _fun00014_ip = 2363; continue _fun00013 }
 2348:
            ctrled = sequen.name;
            update = 'report_to_mod_message';
            echoed = update === ctrled;
 2363:
            result = echoed;
 2366:
            if(!result) { _fun00014_ip = 2373; continue _fun00013 }
 2369:
            result = foxtra != record;
 2373:
            if(!result) { _fun00014_ip = 2443; continue _fun00013 }
 2376:
            ctrled = _closure1_slot15;
            update = _closure1_slot1;
            cntext = _closure1_slot3;
            echoed = 41;
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
 2443:
            option[13] = result;
            update = _closure1_slot15;
            echoed = _closure1_slot1;
            ctrled = _closure1_slot3;
            result = 42;
            result = ctrled[result];
            echoed = echoed.bind(tangon)(result);
            result = {};
            result['element'] = sizing;
            result['state'] = output;
            ctrled = function(argFoo, argBar) { // Original name: onPress
                _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                    michal = argFoo;
                    zuuluu = {};
                    tangon = _closure2_slot13;
                    golfie = zuuluu;
                    oscard = tangon;
                    report = copyDataProperties(golfie, oscard);
                    tangon = michal in tangon;
                    if(tangon) { _fun00034_ip = 38; continue _fun00033 }
 29:
                    tangon = argBar;
                    zuuluu[michal] = tangon;
                    _fun00034_ip = 42; continue _fun00033;
 38:
                    michal = delete zuuluu[michal];
 42:
                    michal = _closure2_slot14;
                    entity = undefined;
                    michal = michal.bind(entity)(zuuluu);
                    return entity;
                }
            };
            result['onPress'] = ctrled;
            result = update.bind(tangon)(echoed, result);
            option[14] = result;
            echoed = _closure1_slot21;
            result = {};
            result['node'] = yankee;
            result['onSelectChild'] = source;
            result = update.bind(tangon)(echoed, result);
            option[15] = result;
            result = _closure1_slot24;
            vacuum = 'external_link';
            result = result.bind(tangon)(yankee, vacuum);
            echoed = foxtra != result;
            result = null;
            if(!echoed) { _fun00014_ip = 2599; continue _fun00013 }
 2552:
            source = _closure1_slot15;
            update = _closure1_slot1;
            ctrled = _closure1_slot3;
            echoed = 43;
            echoed = ctrled[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            ctrled = _closure1_slot25;
            ctrled = ctrled.bind(tangon)(yankee, vacuum);
            echoed['elements'] = ctrled;
            result = source.bind(tangon)(update, echoed);
 2599:
            option[16] = result;
            report['children'] = option;
            golfie = zuuluu.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot15;
            golfie = _closure1_slot1;
            result = _closure1_slot3;
            oscard = 44;
            oscard = result[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            if(romeon) { _fun00014_ip = 2702; continue _fun00013 }
 2650:
            result = foxtra == sizing;
            foxtra = undefined;
            if(result) { _fun00014_ip = 2665; continue _fun00013 }
 2659:
            foxtra = sizing.should_submit_data;
 2665:
            foxtra = backup === foxtra;
            if(!foxtra) { _fun00014_ip = 2699; continue _fun00013 }
 2672:
            backup = global;
            sizing = backup.Object;
            backup = sizing.keys;
            backup = backup.bind(sizing)(output);
            backup = backup.length;
            foxtra = kiloes === backup;
 2699:
            romeon = foxtra;
 2702:
            oscard['disabled'] = romeon;
            yankee = yankee.button;
            oscard['button'] = yankee;
            oscard['hasError'] = offset;
            verify = function(argFoo) { // Original name: onPress
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.type;
                    michal = 'done';
                    if(!(michal !== zuuluu)) { _fun00036_ip = 91; continue _fun00035 }
 16:
                    michal = 'cancel';
                    if(!(michal !== zuuluu)) { _fun00036_ip = 91; continue _fun00035 }
 24:
                    michal = 'next';
                    if(!(michal !== zuuluu)) { _fun00036_ip = 55; continue _fun00035 }
 32:
                    michal = 'submit';
                    if(!(michal === zuuluu)) { _fun00036_ip = 125; continue _fun00035 }
 40:
                    zuuluu = function() {
                        report = _closure2_slot10;
                        entity = undefined;
                        tangon = true;
                        tangon = report.bind(entity)(tangon);
                        tangon = _closure2_slot0;
                        tangon = tangon.successNodeId;
                        report = [''];
                        report[1] = tangon;
                        var _closure4_slot0 = report;
                        tangon = _closure2_slot7;
                        zuuluu = _closure2_slot16;
                        zuuluu = zuuluu.bind(entity)(report);
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.then;
                        zuuluu = function() {
                            tangon = _closure2_slot15;
                            entity = undefined;
                            zuuluu = false;
                            zuuluu = tangon.bind(entity)(zuuluu);
                            zuuluu = _closure2_slot17;
                            michal = _closure4_slot0;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        report = tangon.bind(report)(zuuluu);
                        tangon = report.catch;
                        zuuluu = function() {
                            zuuluu = _closure2_slot15;
                            entity = undefined;
                            michal = true;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        tangon = tangon.bind(report)(zuuluu);
                        zuuluu = tangon.finally;
                        michal = function() {
                            zuuluu = _closure2_slot10;
                            entity = undefined;
                            michal = false;
                            michal = zuuluu.bind(entity)(michal);
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
                    _fun00036_ip = 125; continue _fun00035;
 55:
                    zuuluu = _closure2_slot17;
                    entity = entity.target;
                    michal = [''];
                    michal[1] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
                    _fun00036_ip = 125; continue _fun00035;
 91:
                    zuuluu = _closure2_slot17;
                    michal = [''];
                    entity = -1;
                    michal[1] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 125:
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