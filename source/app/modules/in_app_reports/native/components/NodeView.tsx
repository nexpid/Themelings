// app/modules/in_app_reports/native/components/NodeView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    kilo = argBaz;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = kilo;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar) { // Original name: getElementForType
        mike = argFoo;
        zulu = mike.elements;
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = zulu.find;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.type;
            entity = _closure2_slot0;
            entity = mike === entity;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo, argBar) { // Original name: getElementsForType
        mike = argFoo;
        zulu = mike.elements;
        mike = 'external_link';
        var _closure2_slot0 = mike;
        mike = zulu.filter;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.type;
            entity = _closure2_slot0;
            entity = mike === entity;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: hasAnyRemediationElement
        entity = argFoo;
        zulu = entity.elements;
        mike = zulu.some;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.type;
            mike = _closure1_slot10;
            entity = mike.includes;
            entity = entity.bind(mike)(zulu);
            return entity;
        };
        entity = mike.bind(zulu)(entity);
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
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = kilo.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.View;
    var _closure1_slot6 = golf;
    tango = tango.ScrollView;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = kilo.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = kilo.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.REMEDIATION_ELEMENT_TYPES;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.IN_APP_REPORTS_NODE;
    var _closure1_slot11 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot12 = golf;
    tango = tango.ChannelTypes;
    var _closure1_slot13 = tango;
    romeo = 8;
    tango = oscar[romeo];
    tango = report.bind(entity)(tango);
    foxtrot = tango.Fonts;
    tango = tango.Permissions;
    var _closure1_slot14 = tango;
    tango = 9;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot15 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot16 = tango;
    tango = 10;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'flex': 1, 'alignSelf': 'stretch', 'justifyContent': 'flex-start', 'alignItems': 'center', 'backgroundColor': null, 'marginTop': 30};
    offset = 11;
    yankee = oscar[offset];
    yankee = kilo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_MOBILE_PRIMARY;
    verify['backgroundColor'] = yankee;
    tango['container'] = verify;
    verify = {'flex': 1, 'alignSelf': 'stretch', 'marginTop': 24};
    tango['scrollView'] = verify;
    yankee = 16;
    verify = {'flex': 1, 'alignSelf': 'stretch', 'paddingHorizontal': 16};
    tango['childrenContainer'] = verify;
    verify = {'alignSelf': 'stretch', 'marginBottom': 24, 'paddingHorizontal': 16};
    tango['headerContainer'] = verify;
    verify = {'marginBottom': 8, 'textAlign': 'center'};
    tango['header'] = verify;
    verify = {'lineHeight': 20, 'marginBottom': 8, 'textAlign': 'center'};
    tango['subheader'] = verify;
    verify = {'lineHeight': 16, 'marginBottom': 8, 'textAlign': 'center'};
    tango['description'] = verify;
    verify = {'alignSelf': 'stretch', 'backgroundColor': null, 'borderRadius': null, 'borderColor': null, 'borderWidth': 1, 'padding': 8, 'flexDirection': 'row', 'marginBottom': 16, 'marginHorizontal': 16};
    backup = oscar[offset];
    backup = kilo.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.BLUE_345;
    verify['backgroundColor'] = backup;
    backup = oscar[offset];
    backup = kilo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    backup = oscar[offset];
    backup = kilo.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    backup = backup.BLUE_345;
    verify['borderColor'] = backup;
    tango['infoBox'] = verify;
    verify = {'flex': 1, 'lineHeight': 18, 'marginStart': 8, 'marginTop': 3};
    tango['infoBoxText'] = verify;
    verify = {};
    verify['marginBottom'] = romeo;
    backup = oscar[offset];
    backup = kilo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tango['childButton'] = verify;
    verify = {'minHeight': 60, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-start', 'backgroundColor': null, 'paddingVertical': 16, 'paddingStart': 16, 'paddingEnd': 8};
    backup = oscar[offset];
    backup = kilo.bind(entity)(backup);
    backup = backup.colors;
    backup = backup.BACKGROUND_SECONDARY;
    verify['backgroundColor'] = backup;
    backup = oscar[offset];
    backup = kilo.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.xs;
    verify['borderRadius'] = backup;
    tango['childContainer'] = verify;
    verify = {'flex': 1, 'lineHeight': 20};
    tango['childButtonText'] = verify;
    verify = {};
    backup = 12;
    backup = oscar[backup];
    backup = kilo.bind(entity)(backup);
    foxtrot = foxtrot.DISPLAY_EXTRABOLD;
    offset = oscar[offset];
    offset = kilo.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.HEADER_PRIMARY;
    output = backup.bind(entity)(foxtrot, offset, yankee);
    result = verify;
    offset = copyDataProperties(result, output);
    offset = 'marginBottom';
    verify[offset] = romeo;
    offset = 'paddingHorizontal';
    verify[offset] = yankee;
    tango['remediationHeader'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot17 = tango;
    tango = function(argFoo) { // Original name: HeaderView
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            entity = entity.node;
            foxtrot = entity.header;
            kilo = entity.subheader;
            offset = entity.description;
            entity = _closure1_slot17;
            tango = undefined;
            yankee = entity.bind(tango)();
            mike = _closure1_slot1;
            zulu = _closure1_slot3;
            entity = 13;
            entity = zulu[entity];
            mike = mike.bind(tango)(entity);
            entity = function() {
                zulu = _closure1_slot2;
                mike = _closure1_slot3;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.getParser;
                entity = entity.bind(mike)();
                return entity;
            };
            backup = mike.bind(tango)(entity);
            zulu = _closure1_slot16;
            mike = _closure1_slot6;
            entity = {};
            report = yankee.headerContainer;
            entity['style'] = report;
            verify = null;
            oscar = verify != foxtrot;
            if(!oscar) { _fun00002_ip = 107; continue _fun00001 }
 99:
            report = '';
            oscar = report !== foxtrot;
 107:
            if(!oscar) { _fun00002_ip = 174; continue _fun00001 }
 110:
            romeo = _closure1_slot15;
            options = _closure1_slot0;
            sizing = _closure1_slot3;
            report = 15;
            report = sizing[report];
            report = options.bind(tango)(report);
            options = report.Text;
            report = {'style': null, 'variant': 'heading-xl/extrabold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            sizing = yankee.header;
            report['style'] = sizing;
            report['children'] = foxtrot;
            oscar = romeo.bind(tango)(options, report);
 174:
            report = new Array(3);
            report[0] = oscar;
            options = verify != kilo;
            oscar = null;
            if(!options) { _fun00002_ip = 277; continue _fun00001 }
 191:
            romeo = kilo.length;
            options = 0;
            options = romeo > options;
            oscar = null;
            if(!options) { _fun00002_ip = 277; continue _fun00001 }
 207:
            foxtrot = _closure1_slot15;
            romeo = _closure1_slot0;
            sizing = _closure1_slot3;
            options = 15;
            options = sizing[options];
            options = romeo.bind(tango)(options);
            romeo = options.Text;
            options = {'style': null, 'variant': 'text-md/medium', 'color': 'header-secondary'};
            sizing = yankee.subheader;
            options['style'] = sizing;
            backup = backup.bind(tango)(kilo);
            options['children'] = backup;
            oscar = foxtrot.bind(tango)(romeo, options);
 277:
            report[1] = oscar;
            options = verify != offset;
            oscar = null;
            if(!options) { _fun00002_ip = 366; continue _fun00001 }
 290:
            romeo = offset.length;
            options = 0;
            options = romeo > options;
            oscar = null;
            if(!options) { _fun00002_ip = 366; continue _fun00001 }
 306:
            verify = _closure1_slot15;
            options = _closure1_slot0;
            romeo = _closure1_slot3;
            golf = 15;
            golf = romeo[golf];
            golf = options.bind(tango)(golf);
            options = golf.Text;
            golf = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
            yankee = yankee.description;
            golf['style'] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 366:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot18 = tango;
    tango = function(argFoo) { // Original name: InfoView
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            entity = entity.node;
            yankee = entity.info;
            entity = _closure1_slot17;
            report = undefined;
            romeo = entity.bind(report)();
            mike = _closure1_slot1;
            zulu = _closure1_slot3;
            entity = 13;
            entity = zulu[entity];
            mike = mike.bind(report)(entity);
            entity = function() {
                zulu = _closure1_slot2;
                mike = _closure1_slot3;
                entity = 14;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.getParser;
                entity = entity.bind(mike)();
                return entity;
            };
            offset = mike.bind(report)(entity);
            entity = null;
            mike = entity == yankee;
            if(mike) { _fun00004_ip = 296; continue _fun00003 }
 72:
            tango = _closure1_slot16;
            zulu = _closure1_slot6;
            mike = {};
            options = romeo.infoBox;
            golf = new Array(2);
            golf[0] = options;
            verify = {};
            options = _closure1_slot0;
            foxtrot = _closure1_slot3;
            backup = 16;
            backup = foxtrot[backup];
            output = options.bind(report)(backup);
            sizing = output.hexWithOpacity;
            backup = romeo.infoBox;
            kilo = backup.backgroundColor;
            backup = 0.1;
            backup = sizing.bind(output)(kilo, backup);
            verify['backgroundColor'] = backup;
            golf[1] = verify;
            mike['style'] = golf;
            verify = _closure1_slot15;
            oscar = 17;
            oscar = foxtrot[oscar];
            oscar = options.bind(report)(oscar);
            golf = oscar.CircleInformationIcon;
            oscar = {};
            backup = 'md';
            oscar['size'] = backup;
            backup = romeo.infoBox;
            backup = backup.backgroundColor;
            oscar['color'] = backup;
            golf = verify.bind(report)(golf, oscar);
            oscar = new Array(2);
            oscar[0] = golf;
            golf = 15;
            golf = foxtrot[golf];
            golf = options.bind(report)(golf);
            options = golf.Text;
            golf = {'style': null, 'variant': 'text-sm/normal', 'color': 'interactive-active'};
            romeo = romeo.infoBoxText;
            golf['style'] = romeo;
            offset = offset.bind(report)(yankee);
            golf['children'] = offset;
            golf = verify.bind(report)(options, golf);
            oscar[1] = golf;
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 296:
            return entity;
        }
    };
    var _closure1_slot19 = tango;
    tango = function(argFoo) { // Original name: ChildItem
        report = argFoo;
        oscar = report.child;
        var _closure2_slot0 = oscar;
        mike = null;
        tango = Object.create(mike);
        mike = 0;
        tango['child'] = mike;
        sizing = {};
        kilo = report;
        backup = tango;
        zulu = copyDataProperties(sizing, kilo, backup);
        var _closure2_slot1 = zulu;
        zulu = _closure1_slot17;
        tango = undefined;
        foxtrot = zulu.bind(tango)();
        report = _closure1_slot4;
        zulu = 1;
        oscar = report.bind(tango)(oscar, zulu);
        romeo = oscar[mike];
        golf = _closure1_slot5;
        oscar = golf.useState;
        entity = function() {
            entity = function() {
                zulu = _closure2_slot1;
                mike = zulu.onPress;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            return entity;
        };
        entity = oscar.bind(golf)(entity);
        entity = report.bind(tango)(entity, zulu);
        report = entity[mike];
        zulu = _closure1_slot15;
        offset = _closure1_slot0;
        yankee = _closure1_slot3;
        entity = 18;
        entity = yankee[entity];
        entity = offset.bind(tango)(entity);
        mike = entity.PressableHighlight;
        entity = {};
        oscar = foxtrot.childButton;
        entity['style'] = oscar;
        oscar = 'button';
        entity['accessibilityRole'] = oscar;
        entity['onPress'] = report;
        golf = _closure1_slot16;
        oscar = _closure1_slot6;
        report = {};
        options = foxtrot.childContainer;
        report['style'] = options;
        options = 15;
        options = yankee[options];
        options = offset.bind(tango)(options);
        offset = options.Text;
        options = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
        foxtrot = foxtrot.childButtonText;
        options['style'] = foxtrot;
        options['children'] = romeo;
        offset = zulu.bind(tango)(offset, options);
        options = new Array(2);
        options[0] = offset;
        offset = _closure1_slot1;
        verify = 19;
        verify = yankee[verify];
        offset = offset.bind(tango)(verify);
        verify = {};
        verify = zulu.bind(tango)(offset, verify);
        options[1] = verify;
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot20 = tango;
    tango = function(argFoo) { // Original name: ChildrenView
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            mike = entity.node;
            options = mike.children;
            entity = entity.onSelectChild;
            var _closure2_slot0 = entity;
            entity = _closure1_slot17;
            report = undefined;
            golf = entity.bind(report)();
            verify = null;
            zulu = verify == options;
            entity = null;
            if(zulu) { _fun00006_ip = 108; continue _fun00005 }
 50:
            tango = options.length;
            zulu = 0;
            entity = null;
            if(!(zulu !== tango)) { _fun00006_ip = 108; continue _fun00005 }
 63:
            tango = _closure1_slot15;
            zulu = _closure1_slot6;
            mike = {};
            golf = golf.childrenContainer;
            mike['style'] = golf;
            golf = options.map;
            oscar = function(argFoo) {
                entity = argFoo;
                tango = _closure1_slot4;
                report = undefined;
                zulu = 2;
                tango = tango.bind(report)(entity, zulu);
                zulu = 0;
                verify = tango[zulu];
                zulu = 1;
                options = tango[zulu];
                tango = _closure1_slot15;
                zulu = _closure1_slot20;
                mike = {};
                mike['child'] = entity;
                entity = _closure2_slot0;
                mike['onPress'] = entity;
                entity = global;
                entity = entity.HermesInternal;
                golf = entity.concat;
                oscar = '';
                entity = '+';
                entity = golf.bind(oscar)(verify, entity, options);
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            oscar = golf.bind(options)(oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 108:
            return entity;
        }
    };
    var _closure1_slot21 = tango;
    tango = 45;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/in_app_reports/native/components/NodeView.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: NodeView
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            entity = _closure1_slot17;
            tango = undefined;
            options = entity.bind(tango)();
            mike = _closure1_slot0;
            golf = _closure1_slot3;
            entity = 20;
            entity = golf[entity];
            report = mike.bind(tango)(entity);
            entity = report.useNavigation;
            report = entity.bind(report)();
            var _closure2_slot1 = report;
            entity = 21;
            entity = golf[entity];
            golf = mike.bind(tango)(entity);
            mike = golf.useIsStealthRemediationEnabled;
            entity = {};
            offset = 'mobile_iar_node_view';
            entity['location'] = offset;
            entity = mike.bind(golf)(entity);
            yankee = zulu.node;
            var _closure2_slot2 = yankee;
            sequence = zulu.reportType;
            var _closure2_slot3 = sequence;
            vacuum = zulu.reportSubType;
            context = zulu.history;
            mike = zulu.nodeMap;
            var _closure2_slot4 = mike;
            mike = zulu.closeModal;
            var _closure2_slot5 = mike;
            lima = zulu.addOnCloseCallback;
            mike = zulu.onSubmit;
            var _closure2_slot6 = mike;
            config = zulu.reportId;
            foxtrot = _closure1_slot5;
            romeo = foxtrot.useMemo;
            offset = new Array(1);
            offset[0] = sequence;
            golf = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot3;
                    tango = entity.name;
                    zulu = 'message';
                    entity = undefined;
                    if(!(zulu === tango)) { _fun00010_ip = 37; continue _fun00009 }
 22:
                    mike = _closure2_slot3;
                    mike = mike.record;
                    entity = mike.channel_id;
 37:
                    return entity;
                }
            };
            equality = romeo.bind(foxtrot)(golf, offset);
            offset = _closure1_slot22;
            golf = 'checkbox';
            sizing = offset.bind(tango)(yankee, golf);
            var _closure2_slot7 = sizing;
            golf = 'text_line_resource';
            sierra = offset.bind(tango)(yankee, golf);
            golf = 'text';
            target = offset.bind(tango)(yankee, golf);
            golf = foxtrot.useState;
            update = false;
            golf = golf.bind(foxtrot)(update);
            echo = _closure1_slot4;
            offset = 2;
            golf = echo.bind(tango)(golf, offset);
            kilo = 0;
            romeo = golf[kilo];
            result = 1;
            golf = golf[result];
            var _closure2_slot8 = golf;
            golf = foxtrot.useState;
            golf = golf.bind(foxtrot)(update);
            golf = echo.bind(tango)(golf, offset);
            backup = golf[kilo];
            var _closure2_slot9 = backup;
            golf = golf[result];
            var _closure2_slot10 = golf;
            output = foxtrot.useState;
            golf = function() {
                entity = {};
                return entity;
            };
            golf = output.bind(foxtrot)(golf);
            golf = echo.bind(tango)(golf, offset);
            output = golf[kilo];
            var _closure2_slot11 = output;
            golf = golf[result];
            var _closure2_slot12 = golf;
            golf = foxtrot.useState;
            golf = golf.bind(foxtrot)(update);
            golf = echo.bind(tango)(golf, offset);
            offset = golf[kilo];
            golf = golf[result];
            var _closure2_slot13 = golf;
            result = foxtrot.useEffect;
            golf = new Array(2);
            golf[0] = report;
            golf[1] = zulu;
            zulu = function() {
                tango = _closure2_slot1;
                zulu = tango.addListener;
                mike = 'beforeRemove';
                entity = function() {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        mike = _closure2_slot0;
                        zulu = mike.onNavigate;
                        mike = null;
                        if(!(mike != zulu)) { _fun00012_ip = 40; continue _fun00011 }
 19:
                        zulu = _closure2_slot0;
                        mike = zulu.onNavigate;
                        entity = '..';
                        entity = mike.bind(zulu)(entity);
 40:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            zulu = result.bind(foxtrot)(zulu, golf);
            golf = foxtrot.useEffect;
            result = yankee.is_auto_submit;
            zulu = new Array(4);
            zulu[0] = result;
            zulu[1] = backup;
            zulu[2] = mike;
            mike = yankee.id;
            zulu[3] = mike;
            mike = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = _closure2_slot2;
                    entity = entity.is_auto_submit;
                    if(!entity) { _fun00014_ip = 23; continue _fun00013 }
 16:
                    mike = _closure2_slot9;
                    entity = !mike;
 23:
                    if(!entity) { _fun00014_ip = 88; continue _fun00013 }
 26:
                    mike = _closure2_slot10;
                    zulu = undefined;
                    entity = true;
                    entity = mike.bind(zulu)(entity);
                    mike = _closure2_slot6;
                    entity = {};
                    tango = _closure2_slot2;
                    report = tango.id;
                    entity['nodeRef'] = report;
                    report = tango.id;
                    tango = [''];
                    tango[1] = report;
                    entity['destination'] = tango;
                    entity = mike.bind(zulu)(entity);
 88:
                    entity = undefined;
                    return entity;
                }
            };
            mike = golf.bind(foxtrot)(mike, zulu);
            source = function(argFoo) { // Original name: onSelectChild
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    mike = argFoo;
                    report = _closure1_slot4;
                    entity = undefined;
                    zulu = 2;
                    zulu = report.bind(entity)(mike, zulu);
                    romeo = 1;
                    oscar = zulu[romeo];
                    foxtrot = {};
                    foxtrot['destination'] = mike;
                    zulu = _closure2_slot2;
                    zulu = zulu.id;
                    foxtrot['nodeRef'] = zulu;
                    zulu = _closure2_slot7;
                    report = null;
                    golf = report != zulu;
                    zulu = undefined;
                    if(!golf) { _fun00016_ip = 93; continue _fun00015 }
 67:
                    golf = {};
                    options = _closure2_slot7;
                    options = options.name;
                    golf['name'] = options;
                    options = _closure2_slot11;
                    golf['state'] = options;
                    zulu = golf;
 93:
                    foxtrot['multiSelect'] = zulu;
                    zulu = _closure2_slot4;
                    zulu = zulu[oscar];
                    if(!(report != zulu)) { _fun00016_ip = 496; continue _fun00015 }
 113:
                    golf = _closure1_slot22;
                    oscar = 'skip';
                    oscar = golf.bind(entity)(zulu, oscar);
                    if(!(report != oscar)) { _fun00016_ip = 162; continue _fun00015 }
 131:
                    oscar = zulu.button;
                    options = report == oscar;
                    golf = undefined;
                    if(options) { _fun00016_ip = 151; continue _fun00015 }
 146:
                    golf = oscar.type;
 151:
                    oscar = 'next';
                    if(!(oscar !== golf)) { _fun00016_ip = 459; continue _fun00015 }
 162:
                    oscar = _closure2_slot3;
                    golf = oscar.name;
                    options = _closure1_slot0;
                    oscar = _closure1_slot3;
                    verify = 22;
                    oscar = oscar[verify];
                    oscar = options.bind(entity)(oscar);
                    oscar = oscar.ReportNames;
                    oscar = oscar.MESSAGE;
                    if(!(golf !== oscar)) { _fun00016_ip = 249; continue _fun00015 }
 207:
                    oscar = _closure2_slot3;
                    golf = oscar.name;
                    options = _closure1_slot0;
                    oscar = _closure1_slot3;
                    oscar = oscar[verify];
                    oscar = options.bind(entity)(oscar);
                    oscar = oscar.ReportNames;
                    oscar = oscar.FIRST_DM;
                    if(!(golf === oscar)) { _fun00016_ip = 364; continue _fun00015 }
 249:
                    offset = _closure2_slot3;
                    oscar = offset.record;
                    yankee = oscar.id;
                    golf = _closure1_slot1;
                    options = _closure1_slot3;
                    oscar = 23;
                    oscar = options[oscar];
                    verify = golf.bind(entity)(oscar);
                    options = verify.trackWithMetadata;
                    oscar = _closure1_slot12;
                    golf = oscar.IAR_NAVIGATE;
                    oscar = {};
                    oscar['message_id'] = yankee;
                    offset = offset.name;
                    oscar['content_type'] = offset;
                    offset = zulu.report_type;
                    oscar['report_sub_type'] = offset;
                    offset = _closure2_slot2;
                    offset = offset.id;
                    oscar['current_node'] = offset;
                    offset = zulu.id;
                    oscar['next_node'] = offset;
                    oscar = options.bind(verify)(golf, oscar);
 364:
                    verify = _closure2_slot1;
                    options = verify.push;
                    golf = _closure1_slot11;
                    oscar = {};
                    oscar['node'] = zulu;
                    tango = _closure2_slot0;
                    sizing = tango.history;
                    offset = new Array(1);
                    kilo = 0;
                    output = offset;
                    yankee = arraySpread(output, sizing, kilo);
                    offset[yankee] = foxtrot;
                    yankee = yankee + romeo;
                    oscar['history'] = offset;
                    oscar = options.bind(verify)(golf, oscar);
                    tango = tango.onNavigate;
                    if(!(report != tango)) { _fun00016_ip = 504; continue _fun00015 }
 437:
                    oscar = _closure2_slot0;
                    report = oscar.onNavigate;
                    tango = zulu.key;
                    tango = report.bind(oscar)(tango);
                    _fun00016_ip = 504; continue _fun00015;
 459:
                    tango = _closure2_slot14;
                    zulu = zulu.button;
                    report = zulu.target;
                    zulu = [''];
                    zulu[1] = report;
                    zulu = tango.bind(entity)(zulu);
                    return zulu;
 496:
                    mike = _closure2_slot5;
                    mike = mike.bind(entity)();
 504:
                    return entity;
                }
            };
            var _closure2_slot14 = source;
            mike = yankee.button;
            foxtrot = null;
            golf = foxtrot == mike;
            zulu = undefined;
            if(golf) { _fun00008_ip = 478; continue _fun00007 }
 473:
            zulu = mike.type;
 478:
            mike = 'done';
            mike = mike === zulu;
            if(mike) { _fun00008_ip = 517; continue _fun00007 }
 489:
            zulu = yankee.button;
            backup = foxtrot == zulu;
            golf = undefined;
            if(backup) { _fun00008_ip = 509; continue _fun00007 }
 504:
            golf = zulu.type;
 509:
            zulu = 'cancel';
            mike = zulu === golf;
 517:
            if(mike) { _fun00008_ip = 529; continue _fun00007 }
 520:
            zulu = context.length;
            mike = kilo === zulu;
 529:
            if(!mike) { _fun00008_ip = 554; continue _fun00007 }
 532:
            zulu = report.setOptions;
            mike = {};
            golf = _closure1_slot25;
            mike['headerLeft'] = golf;
            mike = zulu.bind(report)(mike);
 554:
            golf = _closure1_slot5;
            report = golf.useCallback;
            zulu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    report = argFoo;
                    tango = _closure1_slot8;
                    mike = tango.getChannel;
                    entity = report.getChannelId;
                    entity = entity.bind(report)();
                    golf = mike.bind(tango)(entity);
                    entity = null;
                    entity = entity != golf;
                    if(!entity) { _fun00018_ip = 123; continue _fun00017 }
 39:
                    tango = golf.type;
                    mike = _closure1_slot13;
                    mike = mike.DM;
                    mike = tango !== mike;
                    if(!mike) { _fun00018_ip = 80; continue _fun00017 }
 61:
                    report = golf.type;
                    tango = _closure1_slot13;
                    tango = tango.GROUP_DM;
                    mike = report !== tango;
 80:
                    if(!mike) { _fun00018_ip = 120; continue _fun00017 }
 83:
                    oscar = _closure1_slot9;
                    report = oscar.canWithPartialContext;
                    zulu = _closure1_slot14;
                    tango = zulu.MANAGE_MESSAGES;
                    zulu = {};
                    golf = golf.id;
                    zulu['channelId'] = golf;
                    mike = report.bind(oscar)(tango, zulu);
 120:
                    entity = mike;
 123:
                    return entity;
                }
            };
            mike = new Array(0);
            status = report.bind(golf)(zulu, mike);
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            mike = 24;
            mike = report[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useIarReportSettingsUpsells;
            record = mike.bind(zulu)(vacuum);
            papa = entity;
            if(!papa) { _fun00008_ip = 635; continue _fun00007 }
 615:
            mike = _closure1_slot22;
            entity = 'ignore_users';
            entity = mike.bind(tango)(yankee, entity);
            papa = foxtrot != entity;
 635:
            if(!papa) { _fun00008_ip = 688; continue _fun00007 }
 638:
            mike = sequence.name;
            entity = 'message';
            entity = entity === mike;
            if(entity) { _fun00008_ip = 669; continue _fun00007 }
 654:
            zulu = sequence.name;
            mike = 'first_dm';
            entity = mike === zulu;
 669:
            if(entity) { _fun00008_ip = 685; continue _fun00007 }
 672:
            zulu = sequence.name;
            mike = 'user';
            entity = mike === zulu;
 685:
            papa = entity;
 688:
            zulu = _closure1_slot16;
            mike = _closure1_slot0;
            echo = _closure1_slot3;
            entity = 25;
            entity = echo[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.SafeAreaPaddingView;
            entity = {'style': null, 'bottom': true, 'top': true};
            report = options.container;
            entity['style'] = report;
            backup = true;
            golf = _closure1_slot7;
            report = {};
            options = options.scrollView;
            report['style'] = options;
            update = _closure1_slot15;
            result = _closure1_slot1;
            options = 26;
            options = echo[options];
            result = result.bind(tango)(options);
            options = {};
            control = _closure1_slot22;
            echo = 'success';
            echo = control.bind(tango)(yankee, echo);
            options['element'] = echo;
            result = update.bind(tango)(result, options);
            options = new Array(16);
            options[0] = result;
            echo = _closure1_slot18;
            result = {};
            result['node'] = yankee;
            result = update.bind(tango)(echo, result);
            options[1] = result;
            echo = _closure1_slot19;
            result = {};
            result['node'] = yankee;
            result = update.bind(tango)(echo, result);
            options[2] = result;
            echo = foxtrot != sierra;
            result = null;
            if(!echo) { _fun00008_ip = 900; continue _fun00007 }
 863:
            control = _closure1_slot15;
            update = _closure1_slot1;
            whiskey = _closure1_slot3;
            echo = 27;
            echo = whiskey[echo];
            update = update.bind(tango)(echo);
            echo = {};
            echo['element'] = sierra;
            result = control.bind(tango)(update, echo);
 900:
            options[3] = result;
            result = foxtrot != target;
            if(!result) { _fun00008_ip = 948; continue _fun00007 }
 911:
            control = _closure1_slot15;
            update = _closure1_slot1;
            sierra = _closure1_slot3;
            echo = 28;
            echo = sierra[echo];
            update = update.bind(tango)(echo);
            echo = {};
            echo['element'] = target;
            result = control.bind(tango)(update, echo);
 948:
            options[4] = result;
            control = _closure1_slot15;
            echo = _closure1_slot1;
            update = _closure1_slot3;
            result = 29;
            result = update[result];
            update = echo.bind(tango)(result);
            result = {};
            echo = _closure1_slot22;
            target = 'breadcrumbs';
            target = echo.bind(tango)(yankee, target);
            result['element'] = target;
            result['history'] = context;
            result = control.bind(tango)(update, result);
            options[5] = result;
            result = 'message_preview';
            result = echo.bind(tango)(yankee, result);
            echo = foxtrot == result;
            result = null;
            if(echo) { _fun00008_ip = 1103; continue _fun00007 }
 1031:
            update = sequence.name;
            echo = 'message';
            if(!(echo !== update)) { _fun00008_ip = 1061; continue _fun00007 }
 1044:
            update = sequence.name;
            echo = 'first_dm';
            result = null;
            if(!(echo === update)) { _fun00008_ip = 1103; continue _fun00007 }
 1061:
            control = _closure1_slot15;
            update = _closure1_slot1;
            context = _closure1_slot3;
            echo = 30;
            echo = context[echo];
            update = update.bind(tango)(echo);
            echo = {};
            context = sequence.record;
            echo['message'] = context;
            result = control.bind(tango)(update, echo);
 1103:
            options[6] = result;
            echo = _closure1_slot22;
            result = 'user_preview';
            result = echo.bind(tango)(yankee, result);
            echo = foxtrot != result;
            result = null;
            if(!echo) { _fun00008_ip = 1189; continue _fun00007 }
 1132:
            update = sequence.name;
            echo = 'user';
            result = null;
            if(!(echo === update)) { _fun00008_ip = 1189; continue _fun00007 }
 1147:
            control = _closure1_slot15;
            update = _closure1_slot1;
            context = _closure1_slot3;
            echo = 31;
            echo = context[echo];
            update = update.bind(tango)(echo);
            echo = {};
            context = sequence.record;
            echo['user'] = context;
            result = control.bind(tango)(update, echo);
 1189:
            options[7] = result;
            echo = _closure1_slot22;
            result = 'channel_preview';
            result = echo.bind(tango)(yankee, result);
            echo = foxtrot != result;
            result = null;
            if(!echo) { _fun00008_ip = 1278; continue _fun00007 }
 1218:
            update = sequence.name;
            echo = 'stage_channel';
            result = null;
            if(!(echo === update)) { _fun00008_ip = 1278; continue _fun00007 }
 1235:
            control = _closure1_slot15;
            update = _closure1_slot1;
            context = _closure1_slot3;
            echo = 32;
            echo = context[echo];
            update = update.bind(tango)(echo);
            echo = {};
            context = sequence.record;
            echo['stageInstance'] = context;
            result = control.bind(tango)(update, echo);
 1278:
            options[8] = result;
            echo = _closure1_slot22;
            result = 'guild_scheduled_event_preview';
            result = echo.bind(tango)(yankee, result);
            echo = foxtrot != result;
            result = null;
            if(!echo) { _fun00008_ip = 1365; continue _fun00007 }
 1307:
            update = sequence.name;
            echo = 'guild_scheduled_event';
            result = null;
            if(!(echo === update)) { _fun00008_ip = 1365; continue _fun00007 }
 1322:
            control = _closure1_slot15;
            update = _closure1_slot1;
            context = _closure1_slot3;
            echo = 33;
            echo = context[echo];
            update = update.bind(tango)(echo);
            echo = {};
            context = sequence.record;
            echo['event'] = context;
            result = control.bind(tango)(update, echo);
 1365:
            options[9] = result;
            echo = _closure1_slot22;
            result = 'guild_discovery_preview';
            result = echo.bind(tango)(yankee, result);
            echo = foxtrot != result;
            result = null;
            if(!echo) { _fun00008_ip = 1453; continue _fun00007 }
 1394:
            update = sequence.name;
            echo = 'guild_discovery';
            result = null;
            if(!(echo === update)) { _fun00008_ip = 1453; continue _fun00007 }
 1411:
            control = _closure1_slot15;
            update = _closure1_slot1;
            context = _closure1_slot3;
            echo = 34;
            echo = context[echo];
            update = update.bind(tango)(echo);
            echo = {};
            context = sequence.record;
            echo['guild'] = context;
            result = control.bind(tango)(update, echo);
 1453:
            options[10] = result;
            result = _closure1_slot24;
            result = result.bind(tango)(yankee);
            if(!result) { _fun00008_ip = 2121; continue _fun00007 }
 1472:
            control = _closure1_slot16;
            update = _closure1_slot1;
            context = _closure1_slot3;
            echo = 35;
            echo = context[echo];
            update = update.bind(tango)(echo);
            echo = {};
            target = papa;
            if(!target) { _fun00008_ip = 1582; continue _fun00007 }
 1504:
            whiskey = _closure1_slot15;
            sierra = _closure1_slot1;
            quebec = _closure1_slot3;
            context = 36;
            context = quebec[context];
            sierra = sierra.bind(tango)(context);
            context = {};
            variable36 = sequence.name;
            quebec = 'user';
            if(!(quebec !== variable36)) { _fun00008_ip = 1557; continue _fun00007 }
 1543:
            quebec = sequence.record;
            quebec = quebec.author;
            _fun00008_ip = 1563; continue _fun00007;
 1557:
            quebec = sequence.record;
 1563:
            context['user'] = quebec;
            context['channelId'] = equality;
            context['reportId'] = config;
            target = whiskey.bind(tango)(sierra, context);
 1582:
            context = new Array(5);
            context[0] = target;
            sierra = _closure1_slot22;
            target = 'block_users';
            target = sierra.bind(tango)(yankee, target);
            target = foxtrot != target;
            if(!target) { _fun00008_ip = 1663; continue _fun00007 }
 1613:
            whiskey = sequence.name;
            sierra = 'message';
            sierra = sierra === whiskey;
            if(sierra) { _fun00008_ip = 1644; continue _fun00007 }
 1629:
            quebec = sequence.name;
            whiskey = 'first_dm';
            sierra = whiskey === quebec;
 1644:
            if(sierra) { _fun00008_ip = 1660; continue _fun00007 }
 1647:
            quebec = sequence.name;
            whiskey = 'user';
            sierra = whiskey === quebec;
 1660:
            target = sierra;
 1663:
            if(!target) { _fun00008_ip = 1744; continue _fun00007 }
 1666:
            quebec = _closure1_slot15;
            whiskey = _closure1_slot1;
            variable36 = _closure1_slot3;
            sierra = 37;
            sierra = variable36[sierra];
            whiskey = whiskey.bind(tango)(sierra);
            sierra = {};
            variable37 = sequence.name;
            variable36 = 'user';
            if(!(variable36 !== variable37)) { _fun00008_ip = 1719; continue _fun00007 }
 1705:
            variable36 = sequence.record;
            variable36 = variable36.author;
            _fun00008_ip = 1725; continue _fun00007;
 1719:
            variable36 = sequence.record;
 1725:
            sierra['user'] = variable36;
            sierra['channelId'] = equality;
            sierra['reportId'] = config;
            target = quebec.bind(tango)(whiskey, sierra);
 1744:
            context[1] = target;
            papa = !papa;
            if(!papa) { _fun00008_ip = 1774; continue _fun00007 }
 1754:
            sierra = _closure1_slot22;
            target = 'mute_users';
            target = sierra.bind(tango)(yankee, target);
            papa = foxtrot != target;
 1774:
            if(!papa) { _fun00008_ip = 1827; continue _fun00007 }
 1777:
            sierra = sequence.name;
            target = 'message';
            target = target === sierra;
            if(target) { _fun00008_ip = 1808; continue _fun00007 }
 1793:
            whiskey = sequence.name;
            sierra = 'first_dm';
            target = sierra === whiskey;
 1808:
            if(target) { _fun00008_ip = 1824; continue _fun00007 }
 1811:
            whiskey = sequence.name;
            sierra = 'user';
            target = sierra === whiskey;
 1824:
            papa = target;
 1827:
            if(!papa) { _fun00008_ip = 1908; continue _fun00007 }
 1830:
            whiskey = _closure1_slot15;
            sierra = _closure1_slot1;
            quebec = _closure1_slot3;
            target = 38;
            target = quebec[target];
            sierra = sierra.bind(tango)(target);
            target = {};
            variable36 = sequence.name;
            quebec = 'user';
            if(!(quebec !== variable36)) { _fun00008_ip = 1883; continue _fun00007 }
 1869:
            quebec = sequence.record;
            quebec = quebec.author;
            _fun00008_ip = 1889; continue _fun00007;
 1883:
            quebec = sequence.record;
 1889:
            target['user'] = quebec;
            target['channelId'] = equality;
            target['reportId'] = config;
            papa = whiskey.bind(tango)(sierra, target);
 1908:
            context[2] = papa;
            target = _closure1_slot22;
            papa = 'delete_message';
            papa = target.bind(tango)(yankee, papa);
            papa = foxtrot != papa;
            if(!papa) { _fun00008_ip = 1948; continue _fun00007 }
 1935:
            sierra = sequence.name;
            target = 'message';
            papa = target === sierra;
 1948:
            if(!papa) { _fun00008_ip = 1962; continue _fun00007 }
 1951:
            target = sequence.record;
            papa = status.bind(tango)(target);
 1962:
            if(!papa) { _fun00008_ip = 2012; continue _fun00007 }
 1965:
            sierra = _closure1_slot15;
            status = _closure1_slot1;
            whiskey = _closure1_slot3;
            target = 39;
            target = whiskey[target];
            status = status.bind(tango)(target);
            target = {};
            whiskey = sequence.record;
            target['message'] = whiskey;
            target['reportId'] = config;
            papa = sierra.bind(tango)(status, target);
 2012:
            context[3] = papa;
            target = _closure1_slot22;
            papa = 'leave_guild';
            papa = target.bind(tango)(yankee, papa);
            papa = foxtrot != papa;
            if(!papa) { _fun00008_ip = 2052; continue _fun00007 }
 2039:
            status = sequence.name;
            target = 'guild';
            papa = target === status;
 2052:
            if(!papa) { _fun00008_ip = 2107; continue _fun00007 }
 2055:
            sierra = _closure1_slot15;
            status = _closure1_slot1;
            whiskey = _closure1_slot3;
            target = 40;
            target = whiskey[target];
            status = status.bind(tango)(target);
            target = {};
            whiskey = sequence.record;
            target['guild'] = whiskey;
            target['reportId'] = config;
            target['addCallback'] = lima;
            papa = sierra.bind(tango)(status, target);
 2107:
            context[4] = papa;
            echo['children'] = context;
            result = control.bind(tango)(update, echo);
 2121:
            options[11] = result;
            echo = _closure1_slot22;
            result = 'settings_upsells';
            result = echo.bind(tango)(yankee, result);
            result = foxtrot != result;
            if(!result) { _fun00008_ip = 2161; continue _fun00007 }
 2148:
            update = sequence.name;
            echo = 'message';
            result = echo === update;
 2161:
            if(!result) { _fun00008_ip = 2168; continue _fun00007 }
 2164:
            result = foxtrot != record;
 2168:
            if(!result) { _fun00008_ip = 2238; continue _fun00007 }
 2171:
            control = _closure1_slot15;
            update = _closure1_slot1;
            context = _closure1_slot3;
            echo = 41;
            echo = context[echo];
            update = update.bind(tango)(echo);
            echo = {};
            echo['settingsUpsells'] = record;
            record = sequence.record;
            record = record.channel_id;
            echo['channelId'] = record;
            echo['reportId'] = config;
            echo['reportType'] = sequence;
            echo['reportSubType'] = vacuum;
            result = control.bind(tango)(update, echo);
 2238:
            options[12] = result;
            update = _closure1_slot15;
            echo = _closure1_slot1;
            control = _closure1_slot3;
            result = 42;
            result = control[result];
            echo = echo.bind(tango)(result);
            result = {};
            result['element'] = sizing;
            result['state'] = output;
            control = function(argFoo, argBar) { // Original name: onPress
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    mike = argFoo;
                    zulu = {};
                    tango = _closure2_slot11;
                    golf = zulu;
                    oscar = tango;
                    report = copyDataProperties(golf, oscar);
                    tango = mike in tango;
                    if(tango) { _fun00020_ip = 38; continue _fun00019 }
 29:
                    tango = argBar;
                    zulu[mike] = tango;
                    _fun00020_ip = 42; continue _fun00019;
 38:
                    mike = delete zulu[mike];
 42:
                    mike = _closure2_slot12;
                    entity = undefined;
                    mike = mike.bind(entity)(zulu);
                    return entity;
                }
            };
            result['onPress'] = control;
            result = update.bind(tango)(echo, result);
            options[13] = result;
            echo = _closure1_slot21;
            result = {};
            result['node'] = yankee;
            result['onSelectChild'] = source;
            result = update.bind(tango)(echo, result);
            options[14] = result;
            result = _closure1_slot22;
            vacuum = 'external_link';
            result = result.bind(tango)(yankee, vacuum);
            echo = foxtrot != result;
            result = null;
            if(!echo) { _fun00008_ip = 2394; continue _fun00007 }
 2347:
            source = _closure1_slot15;
            update = _closure1_slot1;
            control = _closure1_slot3;
            echo = 43;
            echo = control[echo];
            update = update.bind(tango)(echo);
            echo = {};
            control = _closure1_slot23;
            control = control.bind(tango)(yankee, vacuum);
            echo['elements'] = control;
            result = source.bind(tango)(update, echo);
 2394:
            options[15] = result;
            report['children'] = options;
            golf = zulu.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot15;
            golf = _closure1_slot1;
            result = _closure1_slot3;
            oscar = 44;
            oscar = result[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            if(romeo) { _fun00008_ip = 2497; continue _fun00007 }
 2445:
            result = foxtrot == sizing;
            foxtrot = undefined;
            if(result) { _fun00008_ip = 2460; continue _fun00007 }
 2454:
            foxtrot = sizing.should_submit_data;
 2460:
            foxtrot = backup === foxtrot;
            if(!foxtrot) { _fun00008_ip = 2494; continue _fun00007 }
 2467:
            backup = global;
            sizing = backup.Object;
            backup = sizing.keys;
            backup = backup.bind(sizing)(output);
            backup = backup.length;
            foxtrot = kilo === backup;
 2494:
            romeo = foxtrot;
 2497:
            oscar['disabled'] = romeo;
            yankee = yankee.button;
            oscar['button'] = yankee;
            oscar['hasError'] = offset;
            verify = function(argFoo) { // Original name: onPress
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    entity = argFoo;
                    tango = entity.type;
                    zulu = 'done';
                    if(!(zulu !== tango)) { _fun00022_ip = 209; continue _fun00021 }
 21:
                    zulu = 'cancel';
                    if(!(zulu !== tango)) { _fun00022_ip = 209; continue _fun00021 }
 32:
                    zulu = 'next';
                    if(!(zulu !== tango)) { _fun00022_ip = 173; continue _fun00021 }
 43:
                    zulu = 'submit';
                    if(!(zulu === tango)) { _fun00022_ip = 243; continue _fun00021 }
 54:
                    tango = _closure2_slot8;
                    report = undefined;
                    zulu = true;
                    zulu = tango.bind(report)(zulu);
                    tango = _closure2_slot6;
                    zulu = {};
                    golf = _closure2_slot2;
                    golf = golf.id;
                    zulu['nodeRef'] = golf;
                    oscar = _closure2_slot0;
                    golf = oscar.successNodeId;
                    oscar = [''];
                    oscar[1] = golf;
                    zulu['destination'] = oscar;
                    report = tango.bind(report)(zulu);
                    tango = report.then;
                    zulu = function() {
                        tango = _closure2_slot13;
                        entity = undefined;
                        zulu = false;
                        zulu = tango.bind(entity)(zulu);
                        zulu = _closure2_slot14;
                        mike = _closure2_slot0;
                        tango = mike.successNodeId;
                        mike = [''];
                        mike[1] = tango;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    report = tango.bind(report)(zulu);
                    tango = report.catch;
                    zulu = function() {
                        zulu = _closure2_slot13;
                        entity = undefined;
                        mike = true;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    tango = tango.bind(report)(zulu);
                    zulu = tango.finally;
                    mike = function() {
                        zulu = _closure2_slot8;
                        entity = undefined;
                        mike = false;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
                    _fun00022_ip = 243; continue _fun00021;
 173:
                    zulu = _closure2_slot14;
                    entity = entity.target;
                    mike = [''];
                    mike[1] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
                    _fun00022_ip = 243; continue _fun00021;
 209:
                    zulu = _closure2_slot14;
                    mike = [''];
                    entity = -1;
                    mike[1] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 243:
                    entity = undefined;
                    return entity;
                }
            };
            oscar['onPress'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();