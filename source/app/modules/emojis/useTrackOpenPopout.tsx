// app/modules/emojis/useTrackOpenPopout.tsx
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.EmojiInteractionPoint;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot7 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/emojis/useTrackOpenPopout.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        entity = argFoo;
        tango = entity.emojiId;
        backup = entity.currentGuildId;
        zulu = entity.popoutData;
        var _closure2_slot0 = zulu;
        zulu = entity.nonce;
        var _closure2_slot1 = zulu;
        entity = entity.demoMode;
        var _closure2_slot2 = entity;
        golf = _closure1_slot3;
        report = golf.useRef;
        entity = {};
        entity['guild_id'] = backup;
        entity['emoji_id'] = tango;
        verify = _closure1_slot0;
        oscar = _closure1_slot2;
        tango = 5;
        options = oscar[tango];
        tango = undefined;
        offset = verify.bind(tango)(options);
        verify = offset.collectChannelAnalyticsMetadata;
        romeo = _closure1_slot4;
        yankee = romeo.getChannel;
        foxtrot = _closure1_slot5;
        options = foxtrot.getChannelId;
        options = options.bind(foxtrot)(backup);
        options = yankee.bind(romeo)(options);
        kilo = verify.bind(offset)(options);
        sizing = entity;
        options = copyDataProperties(sizing, kilo);
        entity = report.bind(golf)(entity);
        entity = entity.current;
        var _closure2_slot3 = entity;
        report = _closure1_slot1;
        zulu = 6;
        zulu = oscar[zulu];
        zulu = report.bind(tango)(zulu);
        mike = function() {
            _fun84625: for(var _fun84625_ip = 0; ; ) switch(_fun84625_ip) {
 0:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 7;
                zulu = zulu[entity];
                entity = undefined;
                report = tango.bind(entity)(zulu);
                tango = report.initiateEmojiInteraction;
                zulu = _closure1_slot6;
                zulu = zulu.TrackOpenPopoutUsed;
                zulu = tango.bind(report)(zulu);
                zulu = _closure2_slot2;
                if(zulu) { _fun84625_ip = 164; continue _fun84625 }
 56:
                tango = _closure1_slot1;
                report = _closure1_slot2;
                zulu = 8;
                zulu = report[zulu];
                report = tango.bind(entity)(zulu);
                tango = report.track;
                mike = _closure1_slot7;
                zulu = mike.OPEN_POPOUT;
                mike = {};
                options = _closure2_slot0;
                golf = null;
                verify = golf == options;
                options = undefined;
                if(verify) { _fun84625_ip = 118; continue _fun84625 }
 108:
                verify = _closure2_slot0;
                options = verify.analyticsType;
 118:
                verify = golf != options;
                golf = 'Standard Emoji Popout';
                if(!verify) { _fun84625_ip = 134; continue _fun84625 }
 131:
                golf = options;
 134:
                mike['type'] = golf;
                golf = _closure2_slot1;
                mike['nonce'] = golf;
                offset = _closure2_slot3;
                yankee = mike;
                oscar = copyDataProperties(yankee, offset);
                mike = tango.bind(report)(zulu, mike);
 164:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['useTrackOpenPopout'] = mike;
    return entity;
})();