// app/modules/polls/useTrackPollEvents.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
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
    tango = tango.AnalyticEvents;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/polls/useTrackPollEvents.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: useTrackPollCreationEvents
        options = argFoo;
        golf = argBar;
        oscar = argBaz;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        var _closure2_slot2 = oscar;
        entity = {};
        report = _closure1_slot2;
        tango = report.useCallback;
        zulu = new Array(3);
        zulu[0] = options;
        zulu[1] = golf;
        zulu[2] = oscar;
        mike = function() {
            entity = 0;
            var _closure3_slot0 = entity;
            var _closure3_slot1 = entity;
            var _closure3_slot2 = entity;
            options = _closure2_slot0;
            mike = options.forEach;
            entity = function(argFoo) {
                _fun119407: for(var _fun119407_ip = 0; ; ) switch(_fun119407_ip) {
 0:
                    entity = argFoo;
                    entity = entity.image;
                    mike = null;
                    if(!(mike != entity)) { _fun119407_ip = 103; continue _fun119407 }
 15:
                    zulu = entity.emoji;
                    if(!(mike == zulu)) { _fun119407_ip = 85; continue _fun119407 }
 25:
                    zulu = entity.stickerId;
                    if(!(mike == zulu)) { _fun119407_ip = 65; continue _fun119407 }
 35:
                    entity = entity.mediaAttachmentState;
                    if(!(mike != entity)) { _fun119407_ip = 103; continue _fun119407 }
 45:
                    zulu = _closure3_slot0;
                    entity = 1;
                    entity = zulu + entity;
                    _closure3_slot0 = entity;
                    _fun119407_ip = 103; continue _fun119407;
 65:
                    zulu = _closure3_slot2;
                    entity = 1;
                    entity = zulu + entity;
                    _closure3_slot2 = entity;
                    _fun119407_ip = 103; continue _fun119407;
 85:
                    zulu = _closure3_slot1;
                    entity = 1;
                    entity = zulu + entity;
                    _closure3_slot1 = entity;
 103:
                    entity = undefined;
                    return entity;
                }
            };
            entity = mike.bind(options)(entity);
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot3;
            zulu = mike.POLL_CREATION_CANCELLED;
            mike = {};
            options = options.length;
            mike['answers_count'] = options;
            options = _closure3_slot0;
            mike['attachments_count'] = options;
            options = _closure3_slot1;
            mike['emojis_count'] = options;
            golf = _closure3_slot2;
            mike['stickers_count'] = golf;
            golf = _closure2_slot1;
            mike['allow_multiselect'] = golf;
            oscar = _closure2_slot2;
            mike['layout_type'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        mike = tango.bind(report)(mike, zulu);
        entity['trackPollCreationCancelled'] = mike;
        return entity;
    };
    zulu['useTrackPollCreationEvents'] = mike;
    return entity;
})();