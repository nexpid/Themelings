// app/modules/go_live/utils/StreamerApplicationSelectors.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    entity = function(argFoo) { // Original name: _findPlayingActivity
        entity = argFoo;
        mike = entity.type;
        entity = _closure1_slot4;
        entity = entity.PLAYING;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot5 = entity;
    oscar = function(argFoo, argBar) { // Original name: getStreamerActivityByUserId
        tango = argBar;
        zulu = tango.findActivity;
        mike = _closure1_slot5;
        entity = argFoo;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot6 = oscar;
    report = function(argFoo, argBar) { // Original name: getStreamerActivity
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = null;
            zulu = entity != mike;
            if(!zulu) { _fun00002_ip = 36; continue _fun00001 }
 12:
            report = _closure1_slot6;
            tango = mike.ownerId;
            zulu = undefined;
            mike = argBar;
            entity = report.bind(zulu)(tango, mike);
 36:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tango = function(argFoo, argBar) { // Original name: getStreamerApplication
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            entity = null;
            if(!(entity != report)) { _fun00004_ip = 62; continue _fun00003 }
 9:
            tango = _closure1_slot7;
            zulu = undefined;
            mike = argBar;
            tango = tango.bind(zulu)(report, mike);
            zulu = entity == tango;
            mike = null;
            if(zulu) { _fun00004_ip = 60; continue _fun00003 }
 36:
            zulu = {};
            report = tango.application_id;
            zulu['id'] = report;
            tango = tango.name;
            zulu['name'] = tango;
            mike = zulu;
 60:
            return mike;
 62:
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    entity = function(argFoo, argBar) { // Original name: streamApplicationEqualityCheck
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            entity = oscar === report;
            if(entity) { _fun00006_ip = 63; continue _fun00005 }
 13:
            zulu = null;
            mike = zulu != oscar;
            if(!mike) { _fun00006_ip = 26; continue _fun00005 }
 22:
            mike = zulu != report;
 26:
            if(!mike) { _fun00006_ip = 60; continue _fun00005 }
 29:
            golf = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 2;
            zulu = tango[zulu];
            tango = undefined;
            zulu = golf.bind(tango)(zulu);
            mike = zulu.bind(tango)(oscar, report);
 60:
            entity = mike;
 63:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.ActivityTypes;
    var _closure1_slot4 = golf;
    golf = 4;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/go_live/utils/StreamerApplicationSelectors.tsx';
    golf = options.bind(verify)(golf);
    zulu['getStreamerActivityByUserId'] = oscar;
    zulu['getStreamerActivity'] = report;
    zulu['getStreamerApplication'] = tango;
    mike = function(argFoo) { // Original name: useGetStreamApplication
        golf = argFoo;
        var _closure2_slot0 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 3;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot3;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = new Array(1);
        zulu[0] = golf;
        options = _closure1_slot9;
        offset = function() {
            tango = _closure1_slot8;
            zulu = _closure2_slot0;
            mike = _closure1_slot3;
            entity = undefined;
            entity = tango.bind(entity)(zulu, mike);
            return entity;
        };
        romeo = oscar;
        yankee = tango;
        verify = zulu;
        entity = romeo[report](yankee, offset, verify, options, golf);
        return entity;
    };
    zulu['useGetStreamApplication'] = mike;
    return entity;
})();