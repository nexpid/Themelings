// app/modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/emoji_picker/native/components/useEmojiPickerSearchState.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: useEmojiPickerSearchState
        verify = argFoo;
        offset = argBar;
        options = argBaz;
        var _closure2_slot0 = verify;
        var _closure2_slot1 = offset;
        var _closure2_slot2 = options;
        golf = _closure1_slot3;
        zulu = golf.useRef;
        mike = '';
        zulu = zulu.bind(golf)(mike);
        var _closure2_slot3 = zulu;
        report = golf.useState;
        mike = null;
        oscar = report.bind(golf)(mike);
        report = _closure1_slot2;
        mike = undefined;
        entity = 2;
        report = report.bind(mike)(oscar, entity);
        entity = 0;
        mike = report[entity];
        entity = 1;
        entity = report[entity];
        var _closure2_slot4 = entity;
        entity = {};
        oscar = golf.useCallback;
        report = new Array(3);
        report[0] = offset;
        report[1] = verify;
        report[2] = options;
        tango = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tango = argFoo;
                var _closure3_slot0 = tango;
                mike = '';
                if(!(mike === tango)) { _fun00002_ip = 63; continue _fun00001 }
 17:
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                report = report.bind(mike)(zulu);
                zulu = report.batchUpdates;
                mike = function() {
                    zulu = _closure2_slot3;
                    entity = '';
                    zulu['current'] = entity;
                    tango = _closure2_slot4;
                    entity = undefined;
                    zulu = null;
                    zulu = tango.bind(entity)(zulu);
                    tango = _closure2_slot1;
                    zulu = tango.set;
                    mike = 0;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = zulu.bind(report)(mike);
                _fun00002_ip = 211; continue _fun00001;
 63:
                verify = 0;
                zulu = tango[verify];
                mike = ':';
                offset = tango;
                if(!(mike === zulu)) { _fun00002_ip = 93; continue _fun00001 }
 80:
                zulu = tango.slice;
                mike = 1;
                offset = zulu.bind(tango)(mike);
 93:
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 4;
                oscar = report[zulu];
                zulu = undefined;
                oscar = tango.bind(zulu)(oscar);
                golf = oscar.FrecencyUserSettingsActionCreators;
                oscar = golf.loadIfNecessary;
                oscar = oscar.bind(golf)();
                golf = _closure1_slot4;
                oscar = golf.searchWithoutFetchingLatest;
                mike = {};
                yankee = _closure2_slot0;
                mike['channel'] = yankee;
                mike['query'] = offset;
                mike['count'] = verify;
                options = _closure2_slot2;
                mike['intention'] = options;
                mike = oscar.bind(golf)(mike);
                var _closure3_slot1 = mike;
                mike = 3;
                mike = report[mike];
                zulu = tango.bind(zulu)(mike);
                mike = zulu.batchUpdates;
                entity = function() {
                    tango = _closure2_slot3;
                    zulu = _closure3_slot0;
                    tango['current'] = zulu;
                    zulu = _closure2_slot4;
                    mike = _closure3_slot1;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
 211:
                entity = undefined;
                return entity;
            }
        };
        tango = oscar.bind(golf)(tango, report);
        entity['handleTextChange'] = tango;
        entity['searchQueryRef'] = zulu;
        entity['searchResults'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();