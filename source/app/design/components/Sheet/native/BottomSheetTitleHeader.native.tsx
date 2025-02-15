// app/design/components/Sheet/native/BottomSheetTitleHeader.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: RedesignBottomSheetTitleHeaderBase
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeo = entity.title;
            foxtrot = entity.subtitle;
            entity = _closure1_slot8;
            tango = undefined;
            options = entity.bind(tango)();
            zulu = _closure1_slot6;
            mike = _closure1_slot5;
            entity = {};
            report = options.container;
            entity['style'] = report;
            golf = _closure1_slot7;
            oscar = _closure1_slot5;
            report = {};
            options = options.titles;
            report['style'] = options;
            yankee = _closure1_slot6;
            verify = _closure1_slot14;
            options = {};
            backup = 2;
            options['lineClamp'] = backup;
            options['children'] = romeo;
            verify = yankee.bind(tango)(verify, options);
            options = new Array(2);
            options[0] = verify;
            verify = null;
            yankee = verify != foxtrot;
            if(!yankee) { _fun00002_ip = 131; continue _fun00001 }
 111:
            romeo = _closure1_slot6;
            yankee = _closure1_slot15;
            offset = {};
            offset['children'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 131:
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: RedesignBottomSheetTitleHeaderStacked
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            foxtrot = entity.title;
            backup = entity.subtitle;
            kilo = entity.leading;
            sizing = entity.trailing;
            entity = _closure1_slot8;
            tango = undefined;
            verify = entity.bind(tango)();
            entity = _closure1_slot9;
            output = entity.bind(tango)();
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            entity = {};
            oscar = verify.container;
            report = new Array(2);
            report[0] = oscar;
            oscar = output.container;
            report[1] = oscar;
            entity['style'] = report;
            golf = _closure1_slot7;
            oscar = _closure1_slot5;
            report = {};
            options = output.accessories;
            report['style'] = options;
            romeo = _closure1_slot6;
            offset = _closure1_slot5;
            options = {};
            result = output.item;
            options['style'] = result;
            options['children'] = kilo;
            offset = romeo.bind(tango)(offset, options);
            options = new Array(2);
            options[0] = offset;
            kilo = _closure1_slot6;
            romeo = _closure1_slot5;
            offset = {};
            output = output.item;
            offset['style'] = output;
            offset['children'] = sizing;
            offset = kilo.bind(tango)(romeo, offset);
            options[1] = offset;
            report['children'] = options;
            oscar = golf.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot7;
            golf = _closure1_slot5;
            oscar = {};
            verify = verify.titles;
            oscar['style'] = verify;
            romeo = _closure1_slot6;
            offset = _closure1_slot14;
            verify = {};
            kilo = 1;
            verify['lineClamp'] = kilo;
            verify['children'] = foxtrot;
            offset = romeo.bind(tango)(offset, verify);
            verify = new Array(2);
            verify[0] = offset;
            offset = null;
            romeo = offset != backup;
            if(!romeo) { _fun00004_ip = 276; continue _fun00003 }
 256:
            foxtrot = _closure1_slot6;
            romeo = _closure1_slot15;
            yankee = {};
            yankee['children'] = backup;
            offset = foxtrot.bind(tango)(romeo, yankee);
 276:
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: RedesignBottomSheetTitleHeaderComplex
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            echo = mike.title;
            source = mike.subtitle;
            backup = mike.leading;
            verify = mike.trailing;
            update = mike.onTitleTextLayout;
            mike = _closure1_slot8;
            tango = undefined;
            kilo = mike.bind(tango)();
            mike = _closure1_slot10;
            yankee = mike.bind(tango)();
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 5;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            mike = mike.bind(tango)();
            zulu = mike.width;
            mike = 32;
            zulu = zulu - mike;
            mike = 4;
            romeo = zulu / mike;
            zulu = _closure1_slot4;
            mike = zulu.useState;
            report = mike.bind(zulu)(tango);
            zulu = _closure1_slot3;
            mike = 2;
            zulu = zulu.bind(tango)(report, mike);
            mike = 0;
            sizing = zulu[mike];
            mike = 1;
            mike = zulu[mike];
            var _closure2_slot0 = mike;
            report = _closure1_slot4;
            zulu = report.useCallback;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.nativeEvent;
                entity = entity.layout;
                entity = entity.width;
                var _closure3_slot0 = entity;
                zulu = _closure2_slot0;
                entity = undefined;
                mike = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        mike = global;
                        tango = mike.Math;
                        zulu = tango.max;
                        mike = null;
                        report = mike != entity;
                        mike = 0;
                        if(!report) { _fun00008_ip = 30; continue _fun00007 }
 27:
                        mike = entity;
 30:
                        entity = _closure3_slot0;
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    }
                };
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            entity = new Array(0);
            offset = zulu.bind(report)(mike, entity);
            zulu = _closure1_slot7;
            mike = _closure1_slot5;
            entity = {};
            report = kilo.container;
            entity['style'] = report;
            options = _closure1_slot6;
            golf = _closure1_slot5;
            report = {};
            foxtrot = {};
            foxtrot['width'] = sizing;
            report['style'] = foxtrot;
            golf = options.bind(tango)(golf, report);
            report = new Array(5);
            report[0] = golf;
            foxtrot = _closure1_slot7;
            options = _closure1_slot5;
            golf = {};
            kilo = kilo.titles;
            golf['style'] = kilo;
            result = _closure1_slot6;
            output = _closure1_slot14;
            kilo = {};
            kilo['onTextLayout'] = update;
            update = 3;
            kilo['lineClamp'] = update;
            kilo['children'] = echo;
            output = result.bind(tango)(output, kilo);
            kilo = new Array(2);
            kilo[0] = output;
            output = null;
            result = output != source;
            if(!result) { _fun00006_ip = 311; continue _fun00005 }
 291:
            update = _closure1_slot6;
            echo = _closure1_slot15;
            result = {};
            result['children'] = source;
            output = update.bind(tango)(echo, result);
 311:
            kilo[1] = output;
            golf['children'] = kilo;
            golf = foxtrot.bind(tango)(options, golf);
            report[1] = golf;
            foxtrot = _closure1_slot6;
            options = _closure1_slot5;
            golf = {};
            kilo = {};
            kilo['width'] = sizing;
            golf['style'] = kilo;
            golf = foxtrot.bind(tango)(options, golf);
            report[2] = golf;
            foxtrot = _closure1_slot6;
            options = _closure1_slot5;
            golf = {};
            golf['onLayout'] = offset;
            sizing = yankee.accessory;
            kilo = new Array(3);
            kilo[0] = sizing;
            sizing = yankee.leading;
            kilo[1] = sizing;
            sizing = {};
            sizing['maxWidth'] = romeo;
            kilo[2] = sizing;
            golf['style'] = kilo;
            golf['children'] = backup;
            golf = foxtrot.bind(tango)(options, golf);
            report[3] = golf;
            options = _closure1_slot6;
            golf = _closure1_slot5;
            oscar = {};
            oscar['onLayout'] = offset;
            foxtrot = yankee.accessory;
            offset = new Array(3);
            offset[0] = foxtrot;
            yankee = yankee.trailing;
            offset[1] = yankee;
            yankee = {};
            yankee['maxWidth'] = romeo;
            offset[2] = yankee;
            oscar['style'] = offset;
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[4] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: Title
        mike = _closure1_slot8;
        tango = undefined;
        report = mike.bind(tango)();
        zulu = _closure1_slot6;
        mike = _closure1_slot0;
        oscar = _closure1_slot2;
        entity = 6;
        entity = oscar[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.Text;
        entity = {'variant': 'redesign/heading-18/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
        report = report.title;
        entity['style'] = report;
        golf = argFoo;
        options = entity;
        report = copyDataProperties(options, golf);
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: Subtitle
        entity = argFoo;
        report = entity.children;
        mike = _closure1_slot8;
        tango = undefined;
        oscar = mike.bind(tango)();
        zulu = _closure1_slot6;
        mike = _closure1_slot0;
        golf = _closure1_slot2;
        entity = 6;
        entity = golf[entity];
        entity = mike.bind(tango)(entity);
        mike = entity.Text;
        entity = {'variant': 'text-xs/medium', 'color': 'header-secondary', 'lineClamp': 1};
        oscar = oscar.subtitle;
        entity['style'] = oscar;
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot5 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 4;
    golf = oscar[tango];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = function() {
        entity = {};
        mike = {'paddingHorizontal': 16, 'flexDirection': 'row', 'gap': 4, 'position': 'relative'};
        entity['container'] = mike;
        mike = {'flexGrow': 1, 'flexShrink': 1};
        entity['titles'] = mike;
        mike = {};
        zulu = 'center';
        mike['textAlign'] = zulu;
        entity['subtitle'] = mike;
        mike = {};
        mike['textAlign'] = zulu;
        entity['title'] = mike;
        return entity;
    };
    golf = options.bind(verify)(golf);
    var _closure1_slot8 = golf;
    golf = oscar[tango];
    verify = report.bind(entity)(golf);
    options = verify.createStyles;
    golf = function() {
        entity = {};
        mike = {};
        zulu = 'column';
        mike['flexDirection'] = zulu;
        entity['container'] = mike;
        mike = {'flexDirection': 'row', 'justifyContent': 'space-between'};
        entity['accessories'] = mike;
        mike = {};
        zulu = 0;
        mike['flexShrink'] = zulu;
        entity['item'] = mike;
        return entity;
    };
    golf = options.bind(verify)(golf);
    var _closure1_slot9 = golf;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = function() {
        entity = {};
        mike = {'position': 'absolute', 'top': 0, 'bottom': 0, 'flexShrink': 0, 'flexDirection': 'row', 'flexGrow': 1};
        entity['accessory'] = mike;
        mike = {'left': 16, 'justifyContent': 'flex-start'};
        entity['leading'] = mike;
        mike = {'right': 16, 'justifyContent': 'flex-end'};
        entity['trailing'] = mike;
        return entity;
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Sheet/native/BottomSheetTitleHeader.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: BottomSheetTitleHeader
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            golf = argFoo;
            offset = golf.leading;
            tango = golf.trailing;
            report = _closure1_slot4;
            mike = report.useState;
            entity = false;
            verify = mike.bind(report)(entity);
            report = _closure1_slot3;
            oscar = undefined;
            mike = 2;
            verify = report.bind(oscar)(verify, mike);
            mike = 0;
            mike = verify[mike];
            report = 1;
            report = verify[report];
            var _closure2_slot0 = report;
            report = null;
            if(!(report != offset)) { _fun00010_ip = 86; continue _fun00009 }
 74:
            if(!(entity !== offset)) { _fun00010_ip = 86; continue _fun00009 }
 78:
            verify = '';
            if(!(verify === offset)) { _fun00010_ip = 130; continue _fun00009 }
 86:
            if(!(report != tango)) { _fun00010_ip = 102; continue _fun00009 }
 90:
            if(!(entity !== tango)) { _fun00010_ip = 102; continue _fun00009 }
 94:
            entity = '';
            if(!(entity === tango)) { _fun00010_ip = 130; continue _fun00009 }
 102:
            report = _closure1_slot6;
            tango = _closure1_slot11;
            entity = {};
            romeo = entity;
            yankee = golf;
            verify = copyDataProperties(romeo, yankee);
            entity = report.bind(oscar)(tango, entity);
            _fun00010_ip = 202; continue _fun00009;
 130:
            report = _closure1_slot6;
            if(mike) { _fun00010_ip = 177; continue _fun00009 }
 137:
            tango = _closure1_slot13;
            mike = {};
            romeo = mike;
            yankee = golf;
            verify = copyDataProperties(romeo, yankee);
            verify = function(argFoo) { // Original name: onTitleTextLayout
                entity = argFoo;
                entity = entity.nativeEvent;
                zulu = _closure2_slot0;
                entity = entity.lines;
                mike = entity.length;
                entity = 2;
                mike = mike > entity;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            options = 'onTitleTextLayout';
            mike[options] = verify;
            mike = report.bind(oscar)(tango, mike);
            _fun00010_ip = 199; continue _fun00009;
 177:
            tango = _closure1_slot12;
            zulu = {};
            romeo = zulu;
            yankee = golf;
            golf = copyDataProperties(romeo, yankee);
            mike = report.bind(oscar)(tango, zulu);
 199:
            entity = mike;
 202:
            return entity;
        }
    };
    zulu['BottomSheetTitleHeader'] = mike;
    return entity;
})();