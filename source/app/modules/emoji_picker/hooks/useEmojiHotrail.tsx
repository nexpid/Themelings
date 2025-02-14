// app/modules/emoji_picker/hooks/useEmojiHotrail.tsx
export default (function(argFoo, argBar, _, argCorge, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    mike = function(argFoo) { // Original name: getEmojiHotrail
        _fun77922: for(var _fun77922_ip = 0; ; ) switch(_fun77922_ip) {
 0:
            entity = argFoo;
            report = entity.topEmojis;
            tango = entity.newlyAddedEmojis;
            mike = entity.rowSize;
            entity = undefined;
            if(!(mike === entity)) { _fun77922_ip = 34; continue _fun77922 }
 27:
            mike = _closure1_slot1;
 34:
            zulu = report.slice;
            entity = tango.length;
            mike = mike - entity;
            entity = 0;
            zulu = zulu.bind(report)(entity, mike);
            entity = {};
            entity['visibleTopEmojis'] = zulu;
            entity['visibleNewlyAddedEmojis'] = tango;
            mike = zulu.concat;
            mike = mike.bind(zulu)(tango);
            entity['allEmojis'] = mike;
            return entity;
        }
    };
    var _closure1_slot2 = mike;
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
    var _closure1_slot0 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.EMOJI_ROW_SIZE;
    var _closure1_slot1 = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/emoji_picker/hooks/useEmojiHotrail.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: useEmojiHotrail
        report = argFoo;
        var _closure2_slot0 = report;
        tango = _closure1_slot0;
        zulu = tango.useMemo;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            zulu = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['getEmojiHotrail'] = mike;
    return entity;
})();