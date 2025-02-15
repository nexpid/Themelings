// app/modules/search_v2/native/components/list/SearchListRow.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    golf = tango.bind(entity)(golf);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SEARCH_ROW_TAP_STATE_PADDING;
    var _closure1_slot4 = tango;
    tango = 3;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot5 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function(argFoo) {
        entity = {};
        mike = {};
        zulu = 16;
        mike['paddingHorizontal'] = zulu;
        zulu = _closure1_slot4;
        mike['paddingVertical'] = zulu;
        entity['pressable'] = mike;
        mike = {'flexDirection': 'row', 'alignItems': 'center'};
        entity['body'] = mike;
        zulu = 1;
        mike = {'justifyContent': 'center', 'flex': 1};
        entity['labels'] = mike;
        mike = {};
        oscar = _closure1_slot1;
        report = _closure1_slot2;
        tango = 5;
        report = report[tango];
        tango = undefined;
        tango = oscar.bind(tango)(report);
        tango = tango.colors;
        tango = tango.BACKGROUND_MODIFIER_ACTIVE;
        mike['backgroundColor'] = tango;
        entity['underlayColor'] = mike;
        mike = {};
        mike['flexShrink'] = zulu;
        entity['text'] = mike;
        mike = {};
        zulu = 12;
        mike['marginRight'] = zulu;
        entity['iconContainer'] = mike;
        mike = {};
        zulu = argFoo;
        mike['marginLeft'] = zulu;
        entity['extrasContainer'] = mike;
        return entity;
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot7 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeo = entity.containerStyle;
            report = entity.onPress;
            update = entity.label;
            sizing = entity.subLabel;
            kilo = entity.icon;
            result = entity.iconContainerStyle;
            zulu = entity.iconWidth;
            foxtrot = entity.trailing;
            offset = entity.extras;
            options = entity.header;
            control = entity.accessible;
            tango = undefined;
            if(!(control === tango)) { _fun00002_ip = 73; continue _fun00001 }
 71:
            control = true;
 73:
            source = entity.accessibilityRole;
            if(!(source === tango)) { _fun00002_ip = 86; continue _fun00001 }
 82:
            source = 'button';
 86:
            echo = entity.accessibilityLabel;
            output = entity.accessibilityActions;
            verify = entity.onAccessibilityAction;
            backup = entity.bodyStyle;
            mike = _closure1_slot7;
            oscar = null;
            yankee = oscar != zulu;
            entity = 0;
            if(!yankee) { _fun00002_ip = 130; continue _fun00001 }
 127:
            entity = zulu;
 130:
            yankee = mike.bind(tango)(entity);
            zulu = _closure1_slot6;
            mike = _closure1_slot0;
            vacuum = _closure1_slot2;
            entity = 6;
            entity = vacuum[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.PressableHighlight;
            entity = {};
            entity['accessible'] = control;
            entity['accessibilityRole'] = source;
            entity['accessibilityLabel'] = echo;
            entity['accessibilityActions'] = output;
            entity['onAccessibilityAction'] = verify;
            output = yankee.pressable;
            verify = new Array(2);
            verify[0] = output;
            verify[1] = romeo;
            entity['style'] = verify;
            entity['onPress'] = report;
            report = 130;
            entity['unstable_pressDelay'] = report;
            report = yankee.underlayColor;
            report = report.backgroundColor;
            entity['underlayColor'] = report;
            report = new Array(3);
            report[0] = options;
            verify = _closure1_slot3;
            options = {};
            output = yankee.body;
            romeo = new Array(2);
            romeo[0] = output;
            romeo[1] = backup;
            options['style'] = romeo;
            backup = _closure1_slot5;
            romeo = {};
            echo = yankee.iconContainer;
            output = new Array(2);
            output[0] = echo;
            output[1] = result;
            romeo['style'] = output;
            romeo['children'] = kilo;
            backup = backup.bind(tango)(verify, romeo);
            romeo = new Array(3);
            romeo[0] = backup;
            backup = {};
            kilo = yankee.labels;
            backup['style'] = kilo;
            result = 'string';
            kilo = typeof update;
            output = update;
            if(!(result === kilo)) { _fun00002_ip = 409; continue _fun00001 }
 347:
            echo = _closure1_slot5;
            result = _closure1_slot0;
            source = _closure1_slot2;
            kilo = 7;
            kilo = source[kilo];
            kilo = result.bind(tango)(kilo);
            result = kilo.Text;
            kilo = {'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            source = yankee.text;
            kilo['style'] = source;
            kilo['children'] = update;
            output = echo.bind(tango)(result, kilo);
 409:
            kilo = new Array(2);
            kilo[0] = output;
            kilo[1] = sizing;
            backup['children'] = kilo;
            backup = zulu.bind(tango)(verify, backup);
            romeo[1] = backup;
            romeo[2] = foxtrot;
            options['children'] = romeo;
            options = zulu.bind(tango)(verify, options);
            report[1] = options;
            oscar = oscar != offset;
            if(!oscar) { _fun00002_ip = 498; continue _fun00001 }
 460:
            verify = _closure1_slot5;
            options = _closure1_slot3;
            golf = {};
            romeo = yankee.extrasContainer;
            yankee = new Array(1);
            yankee[0] = romeo;
            golf['style'] = yankee;
            golf['children'] = offset;
            oscar = verify.bind(tango)(options, golf);
 498:
            report[2] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/search_v2/native/components/list/SearchListRow.tsx';
    tango = report.bind(oscar)(tango);
    zulu['SearchListRow'] = mike;
    return entity;
})();