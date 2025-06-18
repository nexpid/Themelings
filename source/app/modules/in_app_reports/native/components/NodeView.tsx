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
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
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
            verify = _closure1_slot23;
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
            golfie = _closure1_slot23;
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
 342:
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
    tangon = 46;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/in_app_reports/native/components/NodeView.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: NodeView
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            echoed = argFoo;
            var _closure2_slot0 = echoed;
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
            yankee = echoed.node;
            var _closure2_slot2 = yankee;
            config = echoed.reportType;
            var _closure2_slot3 = config;
            sequen = echoed.reportSubType;
            vacuum = echoed.history;
            var _closure2_slot4 = vacuum;
            ctrled = echoed.nodeMap;
            var _closure2_slot5 = ctrled;
            update = echoed.closeModal;
            var _closure2_slot6 = update;
            whisks = echoed.addOnCloseCallback;
            foxtra = echoed.onSubmit;
            var _closure2_slot7 = foxtra;
            record = echoed.reportId;
            source = echoed.onNavigate;
            var _closure2_slot8 = source;
            backup = _closure1_slot5;
            offset = backup.useMemo;
            golfie = new Array(1);
            golfie[0] = config;
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
            quebec = offset.bind(backup)(michal, golfie);
            michal = _closure1_slot24;
            golfie = 'checkbox';
            sizing = michal.bind(tangon)(yankee, golfie);
            var _closure2_slot9 = sizing;
            golfie = 'text_line_resource';
            limora = michal.bind(tangon)(yankee, golfie);
            golfie = 'text';
            target = michal.bind(tangon)(yankee, golfie);
            golfie = 21;
            golfie = report[golfie];
            golfie = zuuluu.bind(tangon)(golfie);
            golfie = golfie.ReportMenuTypeSets;
            romeon = golfie.REPORT_TO_MOD;
            offset = romeon.has;
            golfie = config.name;
            result = offset.bind(romeon)(golfie);
            golfie = backup.useState;
            sierra = false;
            golfie = golfie.bind(backup)(sierra);
            status = _closure1_slot4;
            offset = 2;
            golfie = status.bind(tangon)(golfie, offset);
            kiloes = 0;
            romeon = golfie[kiloes];
            cntext = 1;
            golfie = golfie[cntext];
            var _closure2_slot10 = golfie;
            golfie = backup.useState;
            golfie = golfie.bind(backup)(sierra);
            golfie = status.bind(tangon)(golfie, offset);
            papara = golfie[kiloes];
            var _closure2_slot11 = papara;
            golfie = golfie[cntext];
            var _closure2_slot12 = golfie;
            output = backup.useState;
            golfie = function() {
                entity = {};
                return entity;
            };
            golfie = output.bind(backup)(golfie);
            golfie = status.bind(tangon)(golfie, offset);
            output = golfie[kiloes];
            var _closure2_slot13 = output;
            golfie = golfie[cntext];
            var _closure2_slot14 = golfie;
            golfie = backup.useState;
            golfie = golfie.bind(backup)(sierra);
            golfie = status.bind(tangon)(golfie, offset);
            offset = golfie[kiloes];
            golfie = golfie[cntext];
            var _closure2_slot15 = golfie;
            status = backup.useCallback;
            cntext = new Array(3);
            cntext[0] = yankee;
            cntext[1] = sizing;
            cntext[2] = output;
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
            golfie = status.bind(backup)(golfie, cntext);
            var _closure2_slot16 = golfie;
            sierra = backup.useEffect;
            status = new Array(1);
            status[0] = sizing;
            cntext = function() {
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
            cntext = sierra.bind(backup)(cntext, status);
            status = backup.useEffect;
            cntext = new Array(2);
            cntext[0] = entity;
            cntext[1] = echoed;
            echoed = function() {
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
            echoed = status.bind(backup)(echoed, cntext);
            cntext = backup.useEffect;
            status = yankee.is_auto_submit;
            echoed = new Array(4);
            echoed[0] = status;
            echoed[1] = papara;
            echoed[2] = foxtra;
            foxtra = yankee.id;
            echoed[3] = foxtra;
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
            foxtra = cntext.bind(backup)(foxtra, echoed);
            echoed = backup.useCallback;
            foxtra = new Array(8);
            foxtra[0] = yankee;
            foxtra[1] = ctrled;
            foxtra[2] = entity;
            foxtra[3] = vacuum;
            foxtra[4] = source;
            foxtra[5] = update;
            foxtra[6] = config;
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
                    verify = 22;
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
                    oscard = 23;
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
            ctrled = echoed.bind(backup)(golfie, foxtra);
            var _closure2_slot17 = ctrled;
            foxtra = backup.useEffect;
            golfie = new Array(3);
            golfie[0] = yankee;
            golfie[1] = vacuum;
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
            sierra = foxtra.bind(backup)(golfie, entity);
            entity = 24;
            entity = report[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.useIarReportSettingsUpsells;
            cntext = entity.bind(zuuluu)(sequen);
            entity = 'ignore_users';
            entity = michal.bind(tangon)(yankee, entity);
            foxtra = null;
            status = foxtra != entity;
            if(!status) { _fun00014_ip = 745; continue _fun00013 }
 677:
            michal = config.name;
            entity = 'message';
            entity = entity === michal;
            if(entity) { _fun00014_ip = 708; continue _fun00013 }
 693:
            zuuluu = config.name;
            michal = 'first_dm';
            entity = michal === zuuluu;
 708:
            if(entity) { _fun00014_ip = 724; continue _fun00013 }
 711:
            zuuluu = config.name;
            michal = 'user';
            entity = michal === zuuluu;
 724:
            if(entity) { _fun00014_ip = 742; continue _fun00013 }
 727:
            zuuluu = config.name;
            michal = 'report_to_mod_message';
            entity = michal === zuuluu;
 742:
            status = entity;
 745:
            zuuluu = _closure1_slot16;
            michal = _closure1_slot0;
            update = _closure1_slot3;
            entity = 25;
            entity = update[entity];
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
            source = _closure1_slot15;
            echoed = _closure1_slot1;
            option = 26;
            option = update[option];
            echoed = echoed.bind(tangon)(option);
            option = {};
            papara = _closure1_slot24;
            update = 'success';
            update = papara.bind(tangon)(yankee, update);
            option['element'] = update;
            echoed = source.bind(tangon)(echoed, option);
            option = new Array(17);
            option[0] = echoed;
            update = _closure1_slot18;
            echoed = {};
            echoed['node'] = yankee;
            echoed = source.bind(tangon)(update, echoed);
            option[1] = echoed;
            update = _closure1_slot19;
            echoed = {};
            echoed['node'] = yankee;
            echoed = source.bind(tangon)(update, echoed);
            option[2] = echoed;
            update = foxtra != limora;
            echoed = null;
            if(!update) { _fun00014_ip = 961; continue _fun00013 }
 924:
            papara = _closure1_slot15;
            source = _closure1_slot1;
            equals = _closure1_slot3;
            update = 27;
            update = equals[update];
            source = source.bind(tangon)(update);
            update = {};
            update['element'] = limora;
            echoed = papara.bind(tangon)(source, update);
 961:
            option[3] = echoed;
            echoed = foxtra != target;
            if(!echoed) { _fun00014_ip = 1009; continue _fun00013 }
 972:
            papara = _closure1_slot15;
            source = _closure1_slot1;
            limora = _closure1_slot3;
            update = 28;
            update = limora[update];
            source = source.bind(tangon)(update);
            update = {};
            update['element'] = target;
            echoed = papara.bind(tangon)(source, update);
 1009:
            option[4] = echoed;
            update = _closure1_slot24;
            echoed = 'message_preview';
            echoed = update.bind(tangon)(yankee, echoed);
            update = foxtra == echoed;
            echoed = null;
            if(update) { _fun00014_ip = 1123; continue _fun00013 }
 1036:
            source = config.name;
            update = 'message';
            if(!(update !== source)) { _fun00014_ip = 1081; continue _fun00013 }
 1049:
            source = config.name;
            update = 'first_dm';
            if(!(update !== source)) { _fun00014_ip = 1081; continue _fun00013 }
 1064:
            source = config.name;
            update = 'report_to_mod_message';
            echoed = null;
            if(!(update === source)) { _fun00014_ip = 1123; continue _fun00013 }
 1081:
            papara = _closure1_slot15;
            source = _closure1_slot1;
            target = _closure1_slot3;
            update = 29;
            update = target[update];
            source = source.bind(tangon)(update);
            update = {};
            target = config.record;
            update['message'] = target;
            echoed = papara.bind(tangon)(source, update);
 1123:
            option[5] = echoed;
            update = _closure1_slot24;
            echoed = 'user_preview';
            echoed = update.bind(tangon)(yankee, echoed);
            update = foxtra != echoed;
            echoed = null;
            if(!update) { _fun00014_ip = 1209; continue _fun00013 }
 1152:
            source = config.name;
            update = 'user';
            echoed = null;
            if(!(update === source)) { _fun00014_ip = 1209; continue _fun00013 }
 1167:
            papara = _closure1_slot15;
            source = _closure1_slot1;
            target = _closure1_slot3;
            update = 30;
            update = target[update];
            source = source.bind(tangon)(update);
            update = {};
            target = config.record;
            update['user'] = target;
            echoed = papara.bind(tangon)(source, update);
 1209:
            option[6] = echoed;
            update = _closure1_slot24;
            echoed = 'channel_preview';
            echoed = update.bind(tangon)(yankee, echoed);
            update = foxtra != echoed;
            echoed = null;
            if(!update) { _fun00014_ip = 1298; continue _fun00013 }
 1238:
            source = config.name;
            update = 'stage_channel';
            echoed = null;
            if(!(update === source)) { _fun00014_ip = 1298; continue _fun00013 }
 1255:
            papara = _closure1_slot15;
            source = _closure1_slot1;
            target = _closure1_slot3;
            update = 31;
            update = target[update];
            source = source.bind(tangon)(update);
            update = {};
            target = config.record;
            update['stageInstance'] = target;
            echoed = papara.bind(tangon)(source, update);
 1298:
            option[7] = echoed;
            update = _closure1_slot24;
            echoed = 'guild_preview';
            echoed = update.bind(tangon)(yankee, echoed);
            update = foxtra != echoed;
            echoed = null;
            if(!update) { _fun00014_ip = 1384; continue _fun00013 }
 1327:
            source = config.name;
            update = 'guild';
            echoed = null;
            if(!(update === source)) { _fun00014_ip = 1384; continue _fun00013 }
 1342:
            papara = _closure1_slot15;
            source = _closure1_slot1;
            target = _closure1_slot3;
            update = 32;
            update = target[update];
            source = source.bind(tangon)(update);
            update = {};
            target = config.record;
            update['guild'] = target;
            echoed = papara.bind(tangon)(source, update);
 1384:
            option[8] = echoed;
            update = _closure1_slot24;
            echoed = 'guild_scheduled_event_preview';
            echoed = update.bind(tangon)(yankee, echoed);
            update = foxtra != echoed;
            echoed = null;
            if(!update) { _fun00014_ip = 1471; continue _fun00013 }
 1413:
            source = config.name;
            update = 'guild_scheduled_event';
            echoed = null;
            if(!(update === source)) { _fun00014_ip = 1471; continue _fun00013 }
 1428:
            papara = _closure1_slot15;
            source = _closure1_slot1;
            target = _closure1_slot3;
            update = 33;
            update = target[update];
            source = source.bind(tangon)(update);
            update = {};
            target = config.record;
            update['event'] = target;
            echoed = papara.bind(tangon)(source, update);
 1471:
            option[9] = echoed;
            update = _closure1_slot24;
            echoed = 'guild_discovery_preview';
            echoed = update.bind(tangon)(yankee, echoed);
            update = foxtra != echoed;
            echoed = null;
            if(!update) { _fun00014_ip = 1559; continue _fun00013 }
 1500:
            source = config.name;
            update = 'guild_discovery';
            echoed = null;
            if(!(update === source)) { _fun00014_ip = 1559; continue _fun00013 }
 1517:
            papara = _closure1_slot15;
            source = _closure1_slot1;
            target = _closure1_slot3;
            update = 34;
            update = target[update];
            source = source.bind(tangon)(update);
            update = {};
            target = config.record;
            update['guild'] = target;
            echoed = papara.bind(tangon)(source, update);
 1559:
            option[10] = echoed;
            source = _closure1_slot15;
            update = _closure1_slot1;
            papara = _closure1_slot3;
            echoed = 35;
            echoed = papara[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            target = _closure1_slot24;
            papara = 'breadcrumbs';
            papara = target.bind(tangon)(yankee, papara);
            echoed['element'] = papara;
            papara = config.name;
            echoed['menuName'] = papara;
            echoed['history'] = vacuum;
            echoed = source.bind(tangon)(update, echoed);
            option[11] = echoed;
            echoed = _closure1_slot26;
            echoed = echoed.bind(tangon)(yankee);
            if(!echoed) { _fun00014_ip = 2354; continue _fun00013 }
 1648:
            vacuum = _closure1_slot16;
            source = _closure1_slot1;
            papara = _closure1_slot3;
            update = 36;
            update = papara[update];
            source = source.bind(tangon)(update);
            update = {};
            target = status;
            if(!target) { _fun00014_ip = 1758; continue _fun00013 }
 1680:
            equals = _closure1_slot15;
            limora = _closure1_slot1;
            variable36 = _closure1_slot3;
            papara = 37;
            papara = variable36[papara];
            limora = limora.bind(tangon)(papara);
            papara = {};
            variable37 = config.name;
            variable36 = 'user';
            if(!(variable36 !== variable37)) { _fun00014_ip = 1733; continue _fun00013 }
 1719:
            variable36 = config.record;
            variable36 = variable36.author;
            _fun00014_ip = 1739; continue _fun00013;
 1733:
            variable36 = config.record;
 1739:
            papara['user'] = variable36;
            papara['channelId'] = quebec;
            papara['reportId'] = record;
            target = equals.bind(tangon)(limora, papara);
 1758:
            papara = new Array(5);
            papara[0] = target;
            limora = _closure1_slot24;
            target = 'block_users';
            target = limora.bind(tangon)(yankee, target);
            target = foxtra != target;
            if(!target) { _fun00014_ip = 1857; continue _fun00013 }
 1789:
            equals = config.name;
            limora = 'message';
            limora = limora === equals;
            if(limora) { _fun00014_ip = 1820; continue _fun00013 }
 1805:
            variable36 = config.name;
            equals = 'first_dm';
            limora = equals === variable36;
 1820:
            if(limora) { _fun00014_ip = 1836; continue _fun00013 }
 1823:
            variable36 = config.name;
            equals = 'user';
            limora = equals === variable36;
 1836:
            if(limora) { _fun00014_ip = 1854; continue _fun00013 }
 1839:
            variable36 = config.name;
            equals = 'report_to_mod_message';
            limora = equals === variable36;
 1854:
            target = limora;
 1857:
            if(!target) { _fun00014_ip = 1938; continue _fun00013 }
 1860:
            variable36 = _closure1_slot15;
            equals = _closure1_slot1;
            variable37 = _closure1_slot3;
            limora = 38;
            limora = variable37[limora];
            equals = equals.bind(tangon)(limora);
            limora = {};
            variable38 = config.name;
            variable37 = 'user';
            if(!(variable37 !== variable38)) { _fun00014_ip = 1913; continue _fun00013 }
 1899:
            variable37 = config.record;
            variable37 = variable37.author;
            _fun00014_ip = 1919; continue _fun00013;
 1913:
            variable37 = config.record;
 1919:
            limora['user'] = variable37;
            limora['channelId'] = quebec;
            limora['reportId'] = record;
            target = variable36.bind(tangon)(equals, limora);
 1938:
            papara[1] = target;
            target = !status;
            if(status) { _fun00014_ip = 1968; continue _fun00013 }
 1948:
            limora = _closure1_slot24;
            status = 'mute_users';
            status = limora.bind(tangon)(yankee, status);
            target = foxtra != status;
 1968:
            if(!target) { _fun00014_ip = 2039; continue _fun00013 }
 1971:
            limora = config.name;
            status = 'message';
            status = status === limora;
            if(status) { _fun00014_ip = 2002; continue _fun00013 }
 1987:
            equals = config.name;
            limora = 'first_dm';
            status = limora === equals;
 2002:
            if(status) { _fun00014_ip = 2018; continue _fun00013 }
 2005:
            equals = config.name;
            limora = 'user';
            status = limora === equals;
 2018:
            if(status) { _fun00014_ip = 2036; continue _fun00013 }
 2021:
            equals = config.name;
            limora = 'report_to_mod_message';
            status = limora === equals;
 2036:
            target = status;
 2039:
            if(!target) { _fun00014_ip = 2120; continue _fun00013 }
 2042:
            equals = _closure1_slot15;
            limora = _closure1_slot1;
            variable36 = _closure1_slot3;
            status = 39;
            status = variable36[status];
            limora = limora.bind(tangon)(status);
            status = {};
            variable37 = config.name;
            variable36 = 'user';
            if(!(variable36 !== variable37)) { _fun00014_ip = 2095; continue _fun00013 }
 2081:
            variable36 = config.record;
            variable36 = variable36.author;
            _fun00014_ip = 2101; continue _fun00013;
 2095:
            variable36 = config.record;
 2101:
            status['user'] = variable36;
            status['channelId'] = quebec;
            status['reportId'] = record;
            target = equals.bind(tangon)(limora, status);
 2120:
            papara[2] = target;
            status = _closure1_slot24;
            target = 'delete_message';
            target = status.bind(tangon)(yankee, target);
            target = foxtra != target;
            if(!target) { _fun00014_ip = 2181; continue _fun00013 }
 2147:
            limora = config.name;
            status = 'message';
            status = status === limora;
            if(status) { _fun00014_ip = 2178; continue _fun00013 }
 2163:
            equals = config.name;
            limora = 'report_to_mod_message';
            status = limora === equals;
 2178:
            target = status;
 2181:
            if(!target) { _fun00014_ip = 2195; continue _fun00013 }
 2184:
            status = config.record;
            target = sierra.bind(tangon)(status);
 2195:
            if(!target) { _fun00014_ip = 2245; continue _fun00013 }
 2198:
            limora = _closure1_slot15;
            sierra = _closure1_slot1;
            equals = _closure1_slot3;
            status = 40;
            status = equals[status];
            sierra = sierra.bind(tangon)(status);
            status = {};
            equals = config.record;
            status['message'] = equals;
            status['reportId'] = record;
            target = limora.bind(tangon)(sierra, status);
 2245:
            papara[3] = target;
            status = _closure1_slot24;
            target = 'leave_guild';
            target = status.bind(tangon)(yankee, target);
            target = foxtra != target;
            if(!target) { _fun00014_ip = 2285; continue _fun00013 }
 2272:
            sierra = config.name;
            status = 'guild';
            target = status === sierra;
 2285:
            if(!target) { _fun00014_ip = 2340; continue _fun00013 }
 2288:
            limora = _closure1_slot15;
            sierra = _closure1_slot1;
            equals = _closure1_slot3;
            status = 41;
            status = equals[status];
            sierra = sierra.bind(tangon)(status);
            status = {};
            equals = config.record;
            status['guild'] = equals;
            status['reportId'] = record;
            status['addCallback'] = whisks;
            target = limora.bind(tangon)(sierra, status);
 2340:
            papara[4] = target;
            update['children'] = papara;
            echoed = vacuum.bind(tangon)(source, update);
 2354:
            option[12] = echoed;
            update = _closure1_slot24;
            echoed = 'settings_upsells';
            echoed = update.bind(tangon)(yankee, echoed);
            echoed = foxtra != echoed;
            if(!echoed) { _fun00014_ip = 2415; continue _fun00013 }
 2381:
            source = config.name;
            update = 'message';
            update = update === source;
            if(update) { _fun00014_ip = 2412; continue _fun00013 }
 2397:
            vacuum = config.name;
            source = 'report_to_mod_message';
            update = source === vacuum;
 2412:
            echoed = update;
 2415:
            if(!echoed) { _fun00014_ip = 2422; continue _fun00013 }
 2418:
            echoed = foxtra != cntext;
 2422:
            if(!echoed) { _fun00014_ip = 2492; continue _fun00013 }
 2425:
            vacuum = _closure1_slot15;
            source = _closure1_slot1;
            papara = _closure1_slot3;
            update = 42;
            update = papara[update];
            source = source.bind(tangon)(update);
            update = {};
            update['settingsUpsells'] = cntext;
            cntext = config.record;
            cntext = cntext.channel_id;
            update['channelId'] = cntext;
            update['reportId'] = record;
            update['reportType'] = config;
            update['reportSubType'] = sequen;
            echoed = vacuum.bind(tangon)(source, update);
 2492:
            option[13] = echoed;
            source = _closure1_slot15;
            update = _closure1_slot1;
            vacuum = _closure1_slot3;
            echoed = 43;
            echoed = vacuum[echoed];
            update = update.bind(tangon)(echoed);
            echoed = {};
            echoed['element'] = sizing;
            echoed['state'] = output;
            vacuum = function(argFoo, argBar) { // Original name: onPress
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
            echoed['onPress'] = vacuum;
            echoed = source.bind(tangon)(update, echoed);
            option[14] = echoed;
            update = _closure1_slot21;
            echoed = {};
            echoed['node'] = yankee;
            echoed['onSelectChild'] = ctrled;
            echoed = source.bind(tangon)(update, echoed);
            option[15] = echoed;
            echoed = _closure1_slot24;
            sequen = 'external_link';
            echoed = echoed.bind(tangon)(yankee, sequen);
            update = foxtra != echoed;
            echoed = null;
            if(!update) { _fun00014_ip = 2648; continue _fun00013 }
 2601:
            ctrled = _closure1_slot15;
            source = _closure1_slot1;
            vacuum = _closure1_slot3;
            update = 44;
            update = vacuum[update];
            source = source.bind(tangon)(update);
            update = {};
            vacuum = _closure1_slot25;
            vacuum = vacuum.bind(tangon)(yankee, sequen);
            update['elements'] = vacuum;
            echoed = ctrled.bind(tangon)(source, update);
 2648:
            option[16] = echoed;
            report['children'] = option;
            golfie = zuuluu.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot15;
            golfie = _closure1_slot1;
            echoed = _closure1_slot3;
            oscard = 45;
            oscard = echoed[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            oscard['isModeratorReport'] = result;
            if(romeon) { _fun00014_ip = 2756; continue _fun00013 }
 2704:
            result = foxtra == sizing;
            foxtra = undefined;
            if(result) { _fun00014_ip = 2719; continue _fun00013 }
 2713:
            foxtra = sizing.should_submit_data;
 2719:
            foxtra = backup === foxtra;
            if(!foxtra) { _fun00014_ip = 2753; continue _fun00013 }
 2726:
            backup = global;
            sizing = backup.Object;
            backup = sizing.keys;
            backup = backup.bind(sizing)(output);
            backup = backup.length;
            foxtra = kiloes === backup;
 2753:
            romeon = foxtra;
 2756:
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