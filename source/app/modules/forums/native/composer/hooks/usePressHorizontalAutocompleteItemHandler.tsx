// app/modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AutoCompleteResultTypes;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.CHANNEL_SENTINEL;
    var _closure1_slot4 = golf;
    golf = tango.EMOJI_SENTINEL;
    var _closure1_slot5 = golf;
    tango = tango.MENTION_SENTINEL;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/native/composer/hooks/usePressHorizontalAutocompleteItemHandler.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: usePressHorizontalAutocompleteItemHandler
        mike = argFoo;
        golf = mike.draftContent;
        var _closure2_slot0 = golf;
        oscar = mike.handleTextChange;
        var _closure2_slot1 = oscar;
        report = mike.setSelection;
        var _closure2_slot2 = report;
        tango = _closure1_slot2;
        zulu = tango.useCallback;
        mike = new Array(3);
        mike[0] = golf;
        mike[1] = oscar;
        mike[2] = report;
        entity = function(argFoo, argBar, argBaz) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = argFoo;
                golf = argBar;
                report = entity.type;
                zulu = _closure1_slot3;
                zulu = zulu.USER;
                if(!(zulu !== report)) { _fun00002_ip = 292; continue _fun00001 }
 31:
                zulu = _closure1_slot3;
                zulu = zulu.ROLE;
                if(!(zulu !== report)) { _fun00002_ip = 258; continue _fun00001 }
 48:
                zulu = _closure1_slot3;
                zulu = zulu.CHANNEL;
                if(!(zulu !== report)) { _fun00002_ip = 124; continue _fun00001 }
 62:
                zulu = _closure1_slot3;
                zulu = zulu.EMOJI;
                verify = '';
                tango = verify;
                if(!(zulu === report)) { _fun00002_ip = 357; continue _fun00001 }
 86:
                options = _closure1_slot5;
                oscar = entity.name;
                zulu = global;
                zulu = zulu.HermesInternal;
                report = zulu.concat;
                zulu = ':';
                tango = report.bind(verify)(options, oscar, zulu);
                _fun00002_ip = 357; continue _fun00001;
 124:
                report = entity.channel;
                zulu = report.isThread;
                zulu = zulu.bind(report)();
                if(zulu) { _fun00002_ip = 181; continue _fun00001 }
 142:
                options = _closure1_slot4;
                zulu = entity.channel;
                oscar = zulu.name;
                zulu = global;
                zulu = zulu.HermesInternal;
                report = zulu.concat;
                zulu = '';
                zulu = report.bind(zulu)(options, oscar);
                _fun00002_ip = 253; continue _fun00001;
 181:
                options = _closure1_slot0;
                oscar = _closure1_slot1;
                report = 4;
                oscar = oscar[report];
                report = undefined;
                options = options.bind(report)(oscar);
                oscar = options.escapeChannelName;
                report = entity.channel;
                report = report.name;
                verify = oscar.bind(options)(report);
                report = global;
                report = report.HermesInternal;
                options = report.concat;
                oscar = '#"';
                report = '"';
                zulu = options.bind(oscar)(verify, report);
 253:
                tango = zulu;
                _fun00002_ip = 357; continue _fun00001;
 258:
                options = _closure1_slot6;
                oscar = entity.name;
                zulu = global;
                zulu = zulu.HermesInternal;
                report = zulu.concat;
                zulu = '';
                tango = report.bind(zulu)(options, oscar);
                _fun00002_ip = 357; continue _fun00001;
 292:
                report = _closure1_slot6;
                oscar = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 3;
                zulu = zulu[mike];
                mike = undefined;
                zulu = oscar.bind(mike)(zulu);
                mike = zulu.getUserTag;
                entity = entity.user;
                zulu = mike.bind(zulu)(entity);
                entity = global;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = '';
                tango = mike.bind(entity)(report, zulu);
 357:
                oscar = _closure2_slot0;
                entity = oscar.substring;
                options = 0;
                report = entity.bind(oscar)(options, golf);
                zulu = new Array(0);
                romeo = zulu;
                yankee = report;
                offset = 0;
                entity = arraySpread(romeo, yankee, offset);
                entity = zulu.reverse;
                verify = entity.bind(zulu)();
                zulu = verify.join;
                entity = '';
                verify = zulu.bind(verify)(entity);
                zulu = verify.search;
                entity = /\s|\r|\n/;
                zulu = zulu.bind(verify)(entity);
                entity = report.length;
                zulu = entity - zulu;
                entity = report.substring;
                zulu = entity.bind(report)(options, zulu);
                report = oscar.substring;
                entity = argBaz;
                entity = entity.length;
                golf = golf + entity;
                entity = 2;
                entity = golf + entity;
                report = report.bind(oscar)(entity);
                oscar = _closure2_slot1;
                golf = zulu + tango;
                entity = ' ';
                entity = golf + entity;
                report = entity + report;
                entity = undefined;
                report = oscar.bind(entity)(report);
                zulu = zulu + tango;
                tango = zulu.length;
                zulu = _closure2_slot2;
                mike = {};
                mike['start'] = tango;
                mike['end'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['usePressHorizontalAutocompleteItemHandler'] = mike;
    return entity;
})();