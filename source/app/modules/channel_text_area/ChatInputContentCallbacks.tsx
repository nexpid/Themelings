// app/modules/channel_text_area/ChatInputContentCallbacks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: areMemberGroupsHydrated
        _fun100407: for(var _fun100407_ip = 0; ; ) switch(_fun100407_ip) {
 0:
            tango = argFoo;
            entity = tango.length;
            zulu = 1;
            entity = entity > zulu;
            if(entity) { _fun100407_ip = 74; continue _fun100407 }
 18:
            mike = tango.length;
            mike = zulu === mike;
            if(!mike) { _fun100407_ip = 49; continue _fun100407 }
 30:
            zulu = 0;
            zulu = tango[zulu];
            report = zulu.type;
            zulu = 'GROUP';
            mike = zulu === report;
 49:
            if(!mike) { _fun100407_ip = 71; continue _fun100407 }
 52:
            zulu = 0;
            zulu = tango[zulu];
            tango = zulu.id;
            zulu = 'unknown';
            mike = zulu === tango;
 71:
            entity = !mike;
 74:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    tango = function(argFoo, argBar, argBaz, argCorge) { // Original name: tryUpdateSubscriptionForHereMention
        _fun100408: for(var _fun100408_ip = 0; ; ) switch(_fun100408_ip) {
 0:
            oscar = argFoo;
            options = argBaz;
            golf = argCorge;
            mike = _closure1_slot7;
            zulu = _closure1_slot5;
            entity = zulu.getProps;
            entity = entity.bind(zulu)(options, golf);
            entity = entity.groups;
            offset = undefined;
            mike = mike.bind(offset)(entity);
            entity = !mike;
            entity = !entity;
            if(mike) { _fun100408_ip = 182; continue _fun100408 }
 57:
            zulu = oscar.length;
            mike = _closure1_slot6;
            mike = mike.length;
            zulu = zulu < mike;
            if(zulu) { _fun100408_ip = 90; continue _fun100408 }
 78:
            report = oscar.length;
            mike = argBar;
            zulu = report > mike;
 90:
            mike = !zulu;
            if(zulu) { _fun100408_ip = 179; continue _fun100408 }
 96:
            report = oscar.indexOf;
            zulu = _closure1_slot6;
            report = report.bind(oscar)(zulu);
            zulu = -1;
            zulu = zulu !== report;
            if(!zulu) { _fun100408_ip = 176; continue _fun100408 }
 123:
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            tango = 3;
            tango = yankee[tango];
            oscar = verify.bind(offset)(tango);
            report = oscar.subscribeChannel;
            tango = 4;
            tango = yankee[tango];
            tango = verify.bind(offset)(tango);
            tango = tango.DEFAULT_RANGES;
            tango = report.bind(oscar)(options, golf, tango);
            zulu = true;
 176:
            mike = zulu;
 179:
            entity = mike;
 182:
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golf[report];
    report = argCorge;
    report = report.bind(entity)(verify);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = '@here';
    var _closure1_slot6 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/channel_text_area/ChatInputContentCallbacks.tsx';
    report = oscar.bind(golf)(report);
    zulu['tryUpdateSubscriptionForHereMention'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: useHereMentionCallback
        options = argFoo;
        golf = argBar;
        oscar = argBaz;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        var _closure2_slot2 = oscar;
        report = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        zulu = report.bind(entity)(zulu);
        zulu = zulu.bind(entity)();
        var _closure2_slot3 = zulu;
        report = _closure1_slot4;
        offset = report.useState;
        verify = false;
        offset = offset.bind(report)(verify);
        verify = _closure1_slot3;
        tango = 2;
        verify = verify.bind(entity)(offset, tango);
        tango = 0;
        offset = verify[tango];
        var _closure2_slot4 = offset;
        tango = 1;
        tango = verify[tango];
        var _closure2_slot5 = tango;
        verify = report.useMemo;
        tango = new Array(3);
        tango[0] = zulu;
        tango[1] = golf;
        tango[2] = oscar;
        zulu = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.debounce;
            zulu = {};
            entity = 500;
            zulu['maxWait'] = entity;
            mike = function(argFoo) {
                _fun100411: for(var _fun100411_ip = 0; ; ) switch(_fun100411_ip) {
 0:
                    golf = _closure1_slot8;
                    offset = _closure2_slot3;
                    verify = _closure2_slot1;
                    options = _closure2_slot2;
                    entity = undefined;
                    yankee = argFoo;
                    romeo = undefined;
                    zulu = romeo[golf](yankee, offset, verify, options, golf);
                    if(!zulu) { _fun100411_ip = 47; continue _fun100411 }
 36:
                    zulu = _closure2_slot5;
                    mike = true;
                    mike = zulu.bind(entity)(mike);
 47:
                    return entity;
                }
            };
            entity = 200;
            entity = tango.bind(report)(mike, entity, zulu);
            return entity;
        };
        verify = verify.bind(report)(zulu, tango);
        var _closure2_slot6 = verify;
        tango = report.useEffect;
        zulu = new Array(5);
        zulu[0] = offset;
        zulu[1] = verify;
        zulu[2] = options;
        zulu[3] = golf;
        zulu[4] = oscar;
        mike = function() {
            _fun100412: for(var _fun100412_ip = 0; ; ) switch(_fun100412_ip) {
 0:
                oscar = _closure1_slot5;
                tango = oscar.getProps;
                report = _closure2_slot1;
                zulu = _closure2_slot2;
                zulu = tango.bind(oscar)(report, zulu);
                tango = zulu.groups;
                zulu = null;
                if(!(zulu != report)) { _fun100412_ip = 100; continue _fun100412 }
 42:
                zulu = _closure1_slot7;
                mike = undefined;
                mike = zulu.bind(mike)(tango);
                if(mike) { _fun100412_ip = 100; continue _fun100412 }
 56:
                mike = _closure2_slot4;
                if(mike) { _fun100412_ip = 100; continue _fun100412 }
 63:
                tango = _closure2_slot0;
                zulu = tango.addListener;
                mike = _closure2_slot6;
                entity = 'text-changed';
                entity = zulu.bind(tango)(entity, mike);
                entity = function() {
                    tango = _closure2_slot0;
                    zulu = tango.removeListener;
                    mike = _closure2_slot6;
                    entity = 'text-changed';
                    entity = zulu.bind(tango)(entity, mike);
                    entity = mike.cancel;
                    entity = entity.bind(mike)();
                    entity = undefined;
                    return entity;
                };
                return entity;
 100:
                entity = undefined;
                return entity;
            }
        };
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    zulu['useHereMentionCallback'] = mike;
    return entity;
})();