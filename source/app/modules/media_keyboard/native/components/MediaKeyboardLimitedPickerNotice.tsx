// app/modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function() { // Original name: handleLimitedPickerPress
        _fun88278: for(var _fun88278_ip = 0; ; ) switch(_fun88278_ip) {
 0:
            entity = _closure1_slot3;
            mike = entity.NativePermissionManager;
            tango = null;
            entity = tango == mike;
            if(entity) { _fun88278_ip = 32; continue _fun88278 }
 22:
            zulu = mike.presentLimitedLibraryPicker;
            entity = tango == zulu;
 32:
            if(entity) { _fun88278_ip = 45; continue _fun88278 }
 35:
            entity = mike.presentLimitedLibraryPicker;
            entity = entity.bind(mike)();
 45:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    var _closure1_slot2 = tango;
    yankee = 1;
    tango = oscar[yankee];
    tango = report.bind(entity)(tango);
    golf = tango.NativeModules;
    var _closure1_slot3 = golf;
    tango = tango.View;
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
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    offset = 16;
    verify = {'flexDirection': 'row', 'paddingHorizontal': 16, 'paddingVertical': 16, 'alignItems': 'center'};
    tango['container'] = verify;
    verify = {};
    romeo = 'absolute';
    verify['position'] = romeo;
    tango['absoluteContainer'] = verify;
    verify = {};
    verify['flex'] = yankee;
    tango['text'] = verify;
    verify = {};
    verify['marginLeft'] = offset;
    tango['button'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_keyboard/native/components/MediaKeyboardLimitedPickerNotice.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: MediaKeyboardLimitedPickerNotice
        _fun88279: for(var _fun88279_ip = 0; ; ) switch(_fun88279_ip) {
 0:
            mike = argFoo;
            options = mike.onHeightChange;
            var _closure2_slot0 = options;
            mike = _closure1_slot7;
            tango = undefined;
            verify = mike.bind(tango)();
            report = _closure1_slot2;
            zulu = report.useCallback;
            mike = new Array(1);
            mike[0] = options;
            entity = function(argFoo) {
                _fun88280: for(var _fun88280_ip = 0; ; ) switch(_fun88280_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun88280_ip = 43; continue _fun88280 }
 13:
                    zulu = _closure2_slot0;
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    entity = entity.layout;
                    mike = entity.height;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 43:
                    entity = undefined;
                    return entity;
                }
            };
            report = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot6;
            mike = _closure1_slot4;
            entity = {};
            golf = verify.container;
            oscar = new Array(2);
            oscar[0] = golf;
            golf = null;
            options = golf != options;
            golf = undefined;
            if(!options) { _fun88279_ip = 98; continue _fun88279 }
 92:
            golf = verify.absoluteContainer;
 98:
            oscar[1] = golf;
            entity['style'] = oscar;
            entity['onLayout'] = report;
            options = _closure1_slot5;
            kilo = _closure1_slot0;
            sizing = _closure1_slot1;
            report = 4;
            report = sizing[report];
            report = kilo.bind(tango)(report);
            oscar = report.Text;
            report = {};
            golf = verify.text;
            report['style'] = golf;
            golf = 'text-sm/normal';
            report['variant'] = golf;
            romeo = 5;
            golf = sizing[romeo];
            golf = kilo.bind(tango)(golf);
            foxtrot = golf.intl;
            offset = foxtrot.string;
            golf = sizing[romeo];
            golf = kilo.bind(tango)(golf);
            golf = golf.t;
            golf = golf.5g7NcH;
            golf = offset.bind(foxtrot)(golf);
            report['children'] = golf;
            oscar = options.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            golf = _closure1_slot4;
            oscar = {};
            verify = verify.button;
            oscar['style'] = verify;
            verify = 6;
            verify = sizing[verify];
            verify = kilo.bind(tango)(verify);
            offset = verify.Button;
            verify = {'size': 'sm', 'variant': 'tertiary'};
            foxtrot = sizing[romeo];
            foxtrot = kilo.bind(tango)(foxtrot);
            backup = foxtrot.intl;
            foxtrot = backup.string;
            romeo = sizing[romeo];
            romeo = kilo.bind(tango)(romeo);
            romeo = romeo.t;
            romeo = romeo.JuXTi4;
            romeo = foxtrot.bind(backup)(romeo);
            verify['text'] = romeo;
            yankee = _closure1_slot8;
            verify['onPress'] = yankee;
            verify = options.bind(tango)(offset, verify);
            oscar['children'] = verify;
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