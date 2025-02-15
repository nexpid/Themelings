// app/modules/remixing/native/hooks/useEnterLocalRemix.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.REMIX_VIEW_MODAL_KEY;
    var _closure1_slot5 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/hooks/useEnterLocalRemix.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: _default
        oscar = argFoo;
        golf = argBar;
        report = argBaz;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = golf;
        var _closure2_slot2 = report;
        tango = _closure1_slot3;
        zulu = tango.useCallback;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure2_slot1;
                mike = null;
                if(!(mike != zulu)) { _fun00002_ip = 231; continue _fun00001 }
 18:
                zulu = {};
                mike = _closure2_slot1;
                offset = zulu;
                verify = mike;
                report = copyDataProperties(offset, verify);
                oscar = true;
                report = 'local';
                zulu[report] = oscar;
                report = _closure2_slot0;
                tango = 'channelId';
                zulu[tango] = report;
                var _closure3_slot0 = zulu;
                report = _closure1_slot4;
                tango = report.initializeIfNeeded;
                tango = tango.bind(report)();
                tango = report.startRemixing;
                tango = tango.bind(report)();
                report = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 3;
                golf = oscar[zulu];
                tango = undefined;
                options = report.bind(tango)(golf);
                golf = options.triggerHapticFeedback;
                zulu = oscar[zulu];
                zulu = report.bind(tango)(zulu);
                zulu = zulu.HapticFeedbackTypes;
                zulu = zulu.IMPACT_LIGHT;
                zulu = golf.bind(options)(zulu);
                zulu = 4;
                zulu = oscar[zulu];
                report = report.bind(tango)(zulu);
                tango = report.resolveMediaToLocalFilePath;
                zulu = mike.uri;
                mike = mike.filename;
                tango = tango.bind(report)(zulu, mike);
                zulu = tango.then;
                mike = function(argFoo) {
                    zulu = _closure3_slot0;
                    mike = argFoo;
                    zulu['uri'] = mike;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.enterRemixing;
                    entity = _closure3_slot0;
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                tango = zulu.bind(tango)(mike);
                zulu = tango.then;
                mike = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        report = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 6;
                        tango = zulu[entity];
                        entity = undefined;
                        oscar = report.bind(entity)(tango);
                        report = oscar.pushLazy;
                        options = _closure1_slot0;
                        tango = 8;
                        tango = zulu[tango];
                        options = options.bind(entity)(tango);
                        tango = 7;
                        tango = zulu[tango];
                        zulu = zulu.paths;
                        tango = options.bind(entity)(tango, zulu);
                        zulu = {};
                        options = _closure3_slot0;
                        zulu['source'] = options;
                        options = function() { // Original name: onEnter
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 9;
                            mike = mike[entity];
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            entity = mike.hideActionSheet;
                            entity = entity.bind(mike)();
                            return entity;
                        };
                        zulu['onEnter'] = options;
                        golf = function() { // Original name: onExit
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 6;
                            mike = mike[entity];
                            entity = undefined;
                            mike = zulu.bind(entity)(mike);
                            entity = mike.pop;
                            entity = entity.bind(mike)();
                            return entity;
                        };
                        zulu['onExit'] = golf;
                        mike = _closure1_slot5;
                        mike = report.bind(oscar)(tango, zulu, mike);
                        tango = _closure2_slot2;
                        zulu = null;
                        if(!(zulu != tango)) { _fun00004_ip = 136; continue _fun00003 }
 128:
                        mike = _closure2_slot2;
                        mike = mike.bind(entity)();
 136:
                        return entity;
                    }
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.catch;
                entity = function() {
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 10;
                    mike = options[entity];
                    entity = undefined;
                    tango = golf.bind(entity)(mike);
                    zulu = tango.presentError;
                    mike = 11;
                    report = options[mike];
                    report = golf.bind(entity)(report);
                    oscar = report.intl;
                    report = oscar.string;
                    mike = options[mike];
                    mike = golf.bind(entity)(mike);
                    mike = mike.t;
                    mike = mike.HxKEh4;
                    mike = report.bind(oscar)(mike);
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 231:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();