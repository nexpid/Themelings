// app/design/components/Input/native/useInputClearButton.native.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo, argBar) { // Original name: useInputClearButtonConfig
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argBar;
            entity = argFoo;
            entity = entity.isClearable;
            if(!entity) { _fun00002_ip = 24; continue _fun00001 }
 15:
            entity = zulu.hasValue;
            if(entity) { _fun00002_ip = 28; continue _fun00001 }
 24:
            entity = undefined;
            return entity;
 28:
            entity = {};
            oscar = _closure1_slot3;
            options = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 3;
            mike = tango[mike];
            golf = undefined;
            mike = options.bind(golf)(mike);
            report = mike.CircleXIcon;
            mike = {};
            verify = 'xs';
            mike['size'] = verify;
            mike = oscar.bind(golf)(report, mike);
            entity['content'] = mike;
            mike = {};
            zulu = zulu.clear;
            mike['onPress'] = zulu;
            zulu = 4;
            report = tango[zulu];
            report = options.bind(golf)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = tango[zulu];
            tango = options.bind(golf)(tango);
            tango = tango.t;
            tango = tango.VkKicX;
            tango = report.bind(oscar)(tango);
            mike['accessibilityLabel'] = tango;
            tango = 'button';
            mike['accessibilityRole'] = tango;
            mike['hitSlop'] = zulu;
            entity['pressableProps'] = mike;
            return entity;
        }
    };
    var _closure1_slot4 = mike;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, report);
    entity = 0;
    options = golf[entity];
    report = argCorge;
    entity = undefined;
    report = report.bind(entity)(options);
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.Pressable;
    var _closure1_slot2 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot3 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'design/components/Input/native/useInputClearButton.native.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: useInputClearButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = _closure1_slot4;
            report = undefined;
            zulu = argFoo;
            entity = argBar;
            oscar = tango.bind(report)(zulu, entity);
            entity = null;
            zulu = entity != oscar;
            if(!zulu) { _fun00004_ip = 73; continue _fun00003 }
 30:
            tango = _closure1_slot3;
            zulu = _closure1_slot2;
            mike = {};
            options = oscar.pressableProps;
            verify = mike;
            golf = copyDataProperties(verify, options);
            golf = oscar.content;
            oscar = 'children';
            mike[oscar] = golf;
            entity = tango.bind(report)(zulu, mike);
 73:
            return entity;
        }
    };
    zulu['useInputClearButton'] = tango;
    zulu['useInputClearButtonConfig'] = mike;
    return entity;
})();