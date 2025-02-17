// app/design/components/TableRow/native/RowButton.native.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    mike = function(argFoo) { // Original name: RowButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            offset = report.arrow;
            tango = undefined;
            if(!(offset === tango)) { _fun00002_ip = 17; continue _fun00001 }
 15:
            offset = true;
 17:
            verify = report.disabled;
            if(!(verify === tango)) { _fun00002_ip = 28; continue _fun00001 }
 26:
            verify = false;
 28:
            foxtrot = report.variant;
            if(!(foxtrot === tango)) { _fun00002_ip = 41; continue _fun00001 }
 37:
            foxtrot = 'secondary';
 41:
            romeo = report.icon;
            oscar = report.onPress;
            golf = report.experimental_withBlurBackground;
            zulu = {'arrow': 0, 'disabled': 0, 'variant': 0, 'icon': 0, 'onPress': 0, 'experimental_withBlurBackground': 0};
            entity = null;
            sizing = zulu;
            kilo = null;
            mike = silentSetPrototypeOf(sizing, kilo);
            sizing = {};
            kilo = report;
            backup = zulu;
            options = copyDataProperties(sizing, kilo, backup);
            yankee = romeo;
            if(!(entity != romeo)) { _fun00002_ip = 197; continue _fun00001 }
 101:
            zulu = _closure1_slot2;
            mike = zulu.isValidElement;
            mike = mike.bind(zulu)(romeo);
            yankee = romeo;
            if(mike) { _fun00002_ip = 197; continue _fun00001 }
 125:
            report = 'translucent';
            if(golf) { _fun00002_ip = 151; continue _fun00001 }
 132:
            mike = 'secondary';
            zulu = 'primary';
            if(!(zulu === foxtrot)) { _fun00002_ip = 148; continue _fun00001 }
 144:
            mike = 'blurple';
 148:
            report = mike;
 151:
            zulu = _closure1_slot3;
            mike = _closure1_slot0;
            foxtrot = _closure1_slot1;
            entity = 3;
            entity = foxtrot[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.TableRowIcon;
            entity = {};
            entity['source'] = romeo;
            entity['variant'] = report;
            yankee = zulu.bind(tango)(mike, entity);
 197:
            zulu = _closure1_slot3;
            mike = _closure1_slot5;
            entity = {};
            entity['experimental_withBlurBackground'] = golf;
            entity['onPress'] = oscar;
            entity['disabled'] = verify;
            sizing = entity;
            kilo = options;
            oscar = copyDataProperties(sizing, kilo);
            golf = _closure1_slot3;
            oscar = _closure1_slot0;
            romeo = _closure1_slot1;
            report = 4;
            report = romeo[report];
            report = oscar.bind(tango)(report);
            oscar = report.TableRowInner;
            report = {};
            report['icon'] = yankee;
            report['arrow'] = offset;
            report['disabled'] = verify;
            sizing = report;
            kilo = options;
            options = copyDataProperties(sizing, kilo);
            oscar = golf.bind(tango)(oscar, report);
            report = 'children';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    entity = function(argFoo) { // Original name: RowButtonWrapper
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argFoo;
            entity = tango.experimental_withBlurBackground;
            foxtrot = tango.onPress;
            options = tango.disabled;
            verify = tango.children;
            zulu = {'experimental_withBlurBackground': 0, 'onPress': 0, 'disabled': 0, 'children': 0};
            result = null;
            echo = zulu;
            mike = silentSetPrototypeOf(echo, result);
            offset = 0;
            echo = {};
            result = tango;
            output = zulu;
            golf = copyDataProperties(echo, result, output);
            var _closure2_slot0 = golf;
            mike = _closure1_slot4;
            tango = undefined;
            romeo = mike.bind(tango)();
            report = _closure1_slot0;
            backup = _closure1_slot1;
            mike = 5;
            mike = backup[mike];
            zulu = report.bind(tango)(mike);
            mike = zulu.useSharedValue;
            offset = mike.bind(zulu)(offset);
            var _closure2_slot1 = offset;
            sizing = _closure1_slot2;
            kilo = sizing.useCallback;
            zulu = new Array(1);
            zulu[0] = offset;
            mike = function() {
                zulu = _closure2_slot1;
                mike = zulu.set;
                entity = 1;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = kilo.bind(sizing)(mike, zulu);
            var _closure2_slot2 = mike;
            sizing = _closure1_slot2;
            kilo = sizing.useCallback;
            zulu = new Array(1);
            zulu[0] = offset;
            mike = function() {
                zulu = _closure2_slot1;
                mike = zulu.set;
                entity = 0;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = kilo.bind(sizing)(mike, zulu);
            var _closure2_slot3 = mike;
            zulu = _closure1_slot3;
            mike = 6;
            mike = backup[mike];
            mike = report.bind(tango)(mike);
            mike = mike.InternalCard;
            if(entity) { _fun00004_ip = 255; continue _fun00003 }
 199:
            entity = {'shadow': 'low', 'border': 'subtle', 'start': true, 'end': true};
            entity['onPress'] = foxtrot;
            report = romeo.card;
            entity['style'] = report;
            entity['disabled'] = options;
            echo = entity;
            result = golf;
            report = copyDataProperties(echo, result);
            report = 'children';
            entity[report] = verify;
            _fun00004_ip = 403; continue _fun00003;
 255:
            report = {'shadow': 'none', 'border': 'none', 'start': true, 'end': true};
            report['onPress'] = foxtrot;
            foxtrot = function(argFoo) { // Original name: onPressIn
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    mike = _closure2_slot0;
                    zulu = mike.onPressIn;
                    mike = null;
                    if(!(mike != zulu)) { _fun00006_ip = 37; continue _fun00005 }
 19:
                    tango = _closure2_slot0;
                    zulu = tango.onPressIn;
                    mike = argFoo;
                    mike = zulu.bind(tango)(mike);
 37:
                    mike = _closure2_slot2;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            report['onPressIn'] = foxtrot;
            yankee = function(argFoo) { // Original name: onPressOut
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot0;
                    zulu = mike.onPressOut;
                    mike = null;
                    if(!(mike != zulu)) { _fun00008_ip = 37; continue _fun00007 }
 19:
                    tango = _closure2_slot0;
                    zulu = tango.onPressOut;
                    mike = argFoo;
                    mike = zulu.bind(tango)(mike);
 37:
                    mike = _closure2_slot3;
                    entity = undefined;
                    mike = mike.bind(entity)();
                    return entity;
                }
            };
            report['onPressOut'] = yankee;
            foxtrot = romeo.card;
            yankee = new Array(2);
            yankee[0] = foxtrot;
            romeo = romeo.cardWithBlur;
            yankee[1] = romeo;
            report['style'] = yankee;
            report['disabled'] = options;
            echo = report;
            result = golf;
            golf = copyDataProperties(echo, result);
            options = 'transparent';
            golf = 'variant';
            report[golf] = options;
            options = _closure1_slot3;
            golf = _closure1_slot0;
            yankee = _closure1_slot1;
            oscar = 7;
            oscar = yankee[oscar];
            oscar = golf.bind(tango)(oscar);
            golf = oscar.BackgroundBlurView;
            oscar = {};
            oscar['pressed'] = offset;
            oscar['children'] = verify;
            golf = options.bind(tango)(golf, oscar);
            oscar = 'children';
            report[oscar] = golf;
            entity = report;
 403:
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = function() {
        entity = {};
        mike = {};
        zulu = 0;
        mike['padding'] = zulu;
        entity['card'] = mike;
        mike = {};
        zulu = 'hidden';
        mike['overflow'] = zulu;
        entity['cardWithBlur'] = mike;
        return entity;
    };
    tango = options.bind(verify)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.TableRowIcon;
    mike['Icon'] = golf;
    golf = 8;
    golf = oscar[golf];
    verify = report.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'design/components/TableRow/native/RowButton.native.tsx';
    golf = options.bind(verify)(golf);
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.TableRowIconProps;
    zulu['RowButtonIconProps'] = tango;
    zulu['RowButton'] = mike;
    return entity;
})();