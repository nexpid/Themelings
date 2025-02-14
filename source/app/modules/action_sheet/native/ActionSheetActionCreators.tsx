// app/modules/action_sheet/native/ActionSheetActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    tango = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = golf;
    entity = ['impressionName', 'impressionProperties', 'backdropKind'];
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = golf[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 1;
    tango = golf[mike];
    mike = argCorge;
    mike = mike.bind(entity)(tango);
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.jsx;
    var _closure1_slot5 = mike;
    mike = function(argFoo) { // Original name: showActionSheet
        entity = argFoo;
        zulu = entity.content;
        var _closure2_slot0 = zulu;
        zulu = entity.key;
        var _closure2_slot1 = zulu;
        zulu = entity.impressionName;
        var _closure2_slot2 = zulu;
        zulu = entity.impressionProperties;
        var _closure2_slot3 = zulu;
        zulu = entity.backdropKind;
        var _closure2_slot4 = zulu;
        entity = entity.stackingBehavior;
        var _closure2_slot5 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            report = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 4;
            zulu = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.triggerHapticFeedback;
            zulu = _closure1_slot1;
            mike = 5;
            mike = tango[mike];
            mike = zulu.bind(entity)(mike);
            mike = mike.IMPACT_LIGHT;
            mike = report.bind(oscar)(mike);
            mike = 3;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'SHOW_ACTION_SHEET';
            mike['type'] = report;
            oscar = _closure2_slot0;
            mike['content'] = oscar;
            oscar = _closure2_slot1;
            mike['key'] = oscar;
            oscar = _closure2_slot2;
            mike['impressionName'] = oscar;
            oscar = _closure2_slot3;
            mike['impressionProperties'] = oscar;
            oscar = _closure2_slot4;
            mike['backdropKind'] = oscar;
            report = _closure2_slot5;
            mike['stackingBehavior'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot6 = mike;
    tango = {};
    options = function(argFoo, argBar, argBaz, argCorge) { // Original name: openLazy
        _fun44740: for(var _fun44740_ip = 0; ; ) switch(_fun44740_ip) {
 0:
            report = argFoo;
            mike = argBar;
            var _closure2_slot0 = mike;
            mike = argBaz;
            var _closure2_slot1 = mike;
            mike = argCorge;
            var _closure2_slot2 = mike;
            mike = global;
            mike = mike.Promise;
            mike = report instanceof mike;
            if(mike) { _fun44740_ip = 49; continue _fun44740 }
 41:
            mike = undefined;
            zulu = report.bind(mike)();
            _fun44740_ip = 64; continue _fun44740;
 49:
            tango = report.then;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.default;
                return entity;
            };
            zulu = tango.bind(report)(mike);
 64:
            mike = zulu.then;
            entity = function(argFoo) {
                _fun44742: for(var _fun44742_ip = 0; ; ) switch(_fun44742_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = null;
                    if(!(entity == mike)) { _fun44742_ip = 17; continue _fun44742 }
 13:
                    verify = {};
                    _fun44742_ip = 21; continue _fun44742;
 17:
                    verify = _closure2_slot1;
 21:
                    golf = verify.impressionName;
                    oscar = verify.impressionProperties;
                    report = verify.backdropKind;
                    options = _closure1_slot4;
                    zulu = _closure1_slot3;
                    entity = undefined;
                    offset = options.bind(entity)(verify, zulu);
                    verify = _closure1_slot5;
                    options = {};
                    yankee = options;
                    zulu = copyDataProperties(yankee, offset);
                    zulu = argFoo;
                    options = verify.bind(entity)(zulu, options);
                    zulu = _closure1_slot6;
                    mike = {};
                    mike['content'] = options;
                    options = _closure2_slot0;
                    mike['key'] = options;
                    mike['impressionName'] = golf;
                    mike['impressionProperties'] = oscar;
                    mike['backdropKind'] = report;
                    tango = _closure2_slot2;
                    mike['stackingBehavior'] = tango;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        }
    };
    tango['openLazy'] = options;
    report = function(argFoo) { // Original name: hideActionSheet
        entity = argFoo;
        var _closure2_slot0 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 3;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.wait;
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 3;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'HIDE_ACTION_SHEET';
            mike['type'] = report;
            report = _closure2_slot0;
            mike['key'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    tango['hideActionSheet'] = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/action_sheet/native/ActionSheetActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = 'start';
    zulu['ACTION_SHEET_HEIGHT_HALF'] = tango;
    tango = 'expanded';
    zulu['ACTION_SHEET_HEIGHT_EXPANDED'] = tango;
    zulu['showActionSheet'] = mike;
    return entity;
})();