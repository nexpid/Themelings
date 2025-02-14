// app/modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx
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
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/main_tabs_v2/native/shared_components/guild_channels/useTextChannelPressEvents.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: useTextChannelPressEvents
        oscar = argFoo;
        zulu = argBar;
        var _closure2_slot0 = oscar;
        var _closure2_slot1 = zulu;
        entity = {};
        report = _closure1_slot3;
        golf = report.useCallback;
        options = oscar.id;
        tango = new Array(3);
        tango[0] = options;
        options = oscar.guild_id;
        tango[1] = options;
        tango[2] = zulu;
        zulu = function() {
            tango = _closure1_slot1;
            report = _closure1_slot2;
            entity = 2;
            mike = report[entity];
            entity = undefined;
            verify = tango.bind(entity)(mike);
            options = verify.preload;
            mike = _closure2_slot0;
            golf = mike.guild_id;
            tango = mike.id;
            tango = options.bind(verify)(golf, tango);
            tango = _closure1_slot0;
            zulu = 3;
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.transitionToChannel;
            zulu = mike.id;
            mike = {};
            oscar = _closure2_slot1;
            mike['navigationReplace'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        zulu = golf.bind(report)(zulu, tango);
        entity['onPress'] = zulu;
        tango = report.useCallback;
        zulu = new Array(1);
        zulu[0] = oscar;
        mike = function() {
            _fun121081: for(var _fun121081_ip = 0; ; ) switch(_fun121081_ip) {
 0:
                report = _closure1_slot4;
                tango = report.getChannel;
                zulu = _closure2_slot0;
                zulu = zulu.parent_id;
                tango = tango.bind(report)(zulu);
                zulu = null;
                if(!(zulu != tango)) { _fun121081_ip = 66; continue _fun121081 }
 36:
                zulu = tango.isForumLikeChannel;
                zulu = zulu.bind(tango)();
                if(!zulu) { _fun121081_ip = 66; continue _fun121081 }
 49:
                report = _closure2_slot0;
                zulu = report.isForumPost;
                zulu = zulu.bind(report)();
                if(zulu) { _fun121081_ip = 165; continue _fun121081 }
 66:
                report = _closure2_slot0;
                zulu = report.isThread;
                zulu = zulu.bind(report)();
                if(zulu) { _fun121081_ip = 127; continue _fun121081 }
 83:
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                zulu = 6;
                report = report[zulu];
                zulu = undefined;
                oscar = oscar.bind(zulu)(report);
                report = oscar.openChannelLongPressActionSheet;
                zulu = _closure2_slot0;
                zulu = zulu.id;
                zulu = report.bind(oscar)(zulu);
                _fun121081_ip = 197; continue _fun121081;
 127:
                report = _closure1_slot1;
                oscar = _closure1_slot2;
                zulu = 5;
                zulu = oscar[zulu];
                oscar = undefined;
                report = report.bind(oscar)(zulu);
                zulu = _closure2_slot0;
                zulu = zulu.id;
                zulu = report.bind(oscar)(zulu);
                _fun121081_ip = 197; continue _fun121081;
 165:
                report = _closure1_slot1;
                zulu = _closure1_slot2;
                mike = 4;
                mike = zulu[mike];
                zulu = undefined;
                mike = report.bind(zulu)(mike);
                entity = _closure2_slot0;
                entity = mike.bind(zulu)(entity, tango);
 197:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        entity['onLongPress'] = mike;
        mike = 32;
        entity['unstable_pressDelay'] = mike;
        return entity;
    };
    zulu['useTextChannelPressEvents'] = mike;
    return entity;
})();