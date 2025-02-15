// app/modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    mike = function(argFoo) { // Original name: getTopAndNewlyAddedEmojis
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.emojiStoreInstance;
            mike = undefined;
            if(!(report === mike)) { _fun00002_ip = 22; continue _fun00001 }
 15:
            report = _closure1_slot2;
 22:
            tango = entity.guildId;
            oscar = entity.pickerIntention;
            entity = {};
            zulu = _closure1_slot3;
            zulu = zulu.REACTION;
            if(!(oscar === zulu)) { _fun00002_ip = 58; continue _fun00001 }
 52:
            zulu = _closure1_slot4;
            _fun00002_ip = 71; continue _fun00001;
 58:
            golf = report.getTopEmoji;
            zulu = golf.bind(report)(tango);
 71:
            entity['topEmojis'] = zulu;
            zulu = _closure1_slot3;
            zulu = zulu.REACTION;
            if(!(oscar === zulu)) { _fun00002_ip = 96; continue _fun00001 }
 90:
            mike = _closure1_slot4;
            _fun00002_ip = 109; continue _fun00001;
 96:
            zulu = report.getNewlyAddedEmoji;
            mike = zulu.bind(report)(tango);
 109:
            entity['newlyAddedEmojis'] = mike;
            return entity;
        }
    };
    var _closure1_slot5 = mike;
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
    report = argBaz;
    entity = undefined;
    report = report.bind(entity)(options);
    var _closure1_slot2 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.EmojiIntention;
    var _closure1_slot3 = report;
    report = new Array(0);
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/emoji_picker/hooks/useTopAndNewlyAddedEmojis.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo, argBar) { // Original name: useTopAndNewlyAddedEmojis
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 2;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        mike = _closure1_slot2;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            zulu = _closure1_slot5;
            mike = {};
            entity = _closure1_slot2;
            mike['emojiStoreInstance'] = entity;
            tango = _closure2_slot0;
            mike['guildId'] = tango;
            entity = _closure2_slot1;
            mike['pickerIntention'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['default'] = tango;
    zulu['getTopAndNewlyAddedEmojis'] = mike;
    return entity;
})();