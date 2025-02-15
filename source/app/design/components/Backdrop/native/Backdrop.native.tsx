// app/design/components/Backdrop/native/Backdrop.native.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: getBlurAmount
        _fun47660: for(var _fun47660_ip = 0; ; ) switch(_fun47660_ip) {
 0:
            mike = argFoo;
            entity = 'none';
            if(!(entity !== mike)) { _fun47660_ip = 57; continue _fun47660 }
 11:
            entity = 'subtle';
            if(!(entity !== mike)) { _fun47660_ip = 45; continue _fun47660 }
 21:
            entity = 'strong';
            if(!(entity !== mike)) { _fun47660_ip = 33; continue _fun47660 }
 29:
            entity = undefined;
            return entity;
 33:
            entity = 0.25;
            return entity;
 45:
            entity = 0.05;
            return entity;
 57:
            entity = 0;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.StyleSheet;
    tango = tango.Pressable;
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot5 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    tango = {};
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = verify.absoluteFillObject;
    tango['fill'] = verify;
    verify = {};
    offset = 4;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.colors;
    romeo = romeo.BG_BACKDROP;
    verify['backgroundColor'] = romeo;
    tango['backdrop'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.BG_BACKDROP_NO_OPACITY;
    verify['backgroundColor'] = offset;
    tango['backdropOpaque'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'height': 16};
    tango['accessibilityDismiss'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'design/components/Backdrop/native/Backdrop.native.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: Backdrop
        _fun47661: for(var _fun47661_ip = 0; ; ) switch(_fun47661_ip) {
 0:
            mike = argFoo;
            golf = mike.style;
            update = mike.accessibleDismissStyle;
            report = mike.animatedProps;
            tango = undefined;
            if(!(report === tango)) { _fun47661_ip = 35; continue _fun47661 }
 28:
            report = _closure1_slot7;
 35:
            verify = mike.opaque;
            if(!(verify === tango)) { _fun47661_ip = 47; continue _fun47661 }
 45:
            verify = false;
 47:
            output = mike.blur;
            if(!(output === tango)) { _fun47661_ip = 61; continue _fun47661 }
 57:
            output = 'none';
 61:
            result = mike.onDismiss;
            romeo = mike.accessibilityLabel;
            if(!(romeo === tango)) { _fun47661_ip = 134; continue _fun47661 }
 76:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            zulu = 5;
            oscar = yankee[zulu];
            oscar = offset.bind(tango)(oscar);
            options = oscar.intl;
            oscar = options.string;
            zulu = yankee[zulu];
            zulu = offset.bind(tango)(zulu);
            zulu = zulu.t;
            zulu = zulu.WAI6xs;
            romeo = oscar.bind(options)(zulu);
 134:
            yankee = mike.aria-hidden;
            var _closure2_slot0 = tango;
            mike = _closure1_slot8;
            foxtrot = mike.bind(tango)();
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useThemeContext;
            mike = mike.bind(zulu)();
            kilo = mike.theme;
            mike = _closure1_slot1;
            zulu = 7;
            zulu = oscar[zulu];
            zulu = mike.bind(tango)(zulu);
            zulu = zulu.bind(tango)();
            control = zulu.top;
            zulu = foxtrot.backdrop;
            backup = zulu.backgroundColor;
            _closure2_slot0 = backup;
            offset = _closure1_slot3;
            options = offset.useMemo;
            zulu = new Array(1);
            zulu[0] = backup;
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.hexToRgbaString;
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            backup = options.bind(offset)(entity, zulu);
            offset = {};
            offset['onPress'] = result;
            entity = true;
            offset['aria-hidden'] = entity;
            zulu = _closure1_slot6;
            entity = 9;
            entity = oscar[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.View;
            entity = {};
            options = foxtrot.fill;
            oscar = new Array(2);
            oscar[0] = options;
            oscar[1] = golf;
            entity['style'] = oscar;
            oscar = 'box-none';
            entity['pointerEvents'] = oscar;
            entity['animatedProps'] = report;
            report = null;
            oscar = report != result;
            if(!oscar) { _fun47661_ip = 411; continue _fun47661 }
 342:
            options = _closure1_slot5;
            golf = _closure1_slot4;
            report = {};
            source = foxtrot.accessibilityDismiss;
            echo = new Array(3);
            echo[0] = source;
            source = {};
            source['top'] = control;
            echo[1] = source;
            echo[2] = update;
            report['style'] = echo;
            report['onPress'] = result;
            result = 'button';
            report['accessibilityRole'] = result;
            report['accessibilityLabel'] = romeo;
            report['aria-hidden'] = yankee;
            oscar = options.bind(tango)(golf, report);
 411:
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot5;
            golf = _closure1_slot4;
            oscar = 'none';
            if(!(oscar === output)) { _fun47661_ip = 493; continue _fun47661 }
 435:
            oscar = {};
            sequence = oscar;
            vacuum = offset;
            yankee = copyDataProperties(sequence, vacuum);
            romeo = foxtrot.fill;
            yankee = new Array(2);
            yankee[0] = romeo;
            if(verify) { _fun47661_ip = 472; continue _fun47661 }
 464:
            verify = foxtrot.backdrop;
            _fun47661_ip = 478; continue _fun47661;
 472:
            verify = foxtrot.backdropOpaque;
 478:
            yankee[1] = verify;
            verify = 'style';
            oscar[verify] = yankee;
            _fun47661_ip = 614; continue _fun47661;
 493:
            verify = {};
            sequence = verify;
            vacuum = offset;
            offset = copyDataProperties(sequence, vacuum);
            yankee = foxtrot.fill;
            offset = 'style';
            verify[offset] = yankee;
            romeo = _closure1_slot5;
            yankee = _closure1_slot1;
            result = _closure1_slot2;
            offset = 10;
            offset = result[offset];
            yankee = yankee.bind(tango)(offset);
            offset = {};
            sizing = _closure1_slot9;
            sizing = sizing.bind(tango)(output);
            offset['blurAmount'] = sizing;
            sizing = foxtrot.fill;
            offset['style'] = sizing;
            offset['blurTheme'] = kilo;
            offset['blurTintRgba'] = backup;
            foxtrot = foxtrot.backdrop;
            foxtrot = foxtrot.backgroundColor;
            offset['android_fallbackColor'] = foxtrot;
            yankee = romeo.bind(tango)(yankee, offset);
            offset = 'children';
            verify[offset] = yankee;
            oscar = verify;
 614:
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['Backdrop'] = mike;
    return entity;
})();