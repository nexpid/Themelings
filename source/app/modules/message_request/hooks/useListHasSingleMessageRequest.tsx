// app/modules/message_request/hooks/useListHasSingleMessageRequest.tsx
export default (function(_, argBar, argBaz, argCorge, __, argFred, argPlugh) {
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
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/hooks/useListHasSingleMessageRequest.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useListHasSingleMessageRequest
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            tango = undefined;
            zulu = options.bind(tango)(mike);
            mike = zulu.useMessageRequestsCount;
            zulu = mike.bind(zulu)();
            var _closure2_slot0 = zulu;
            verify = _closure1_slot3;
            mike = verify.useRef;
            mike = mike.bind(verify)(zulu);
            var _closure2_slot1 = mike;
            golf = 4;
            golf = oscar[golf];
            yankee = options.bind(tango)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot4;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                mike = _closure1_slot4;
                entity = mike.isReady;
                entity = entity.bind(mike)();
                return entity;
            };
            offset = offset.bind(yankee)(options, golf);
            var _closure2_slot2 = offset;
            golf = verify.useRef;
            golf = golf.bind(verify)(offset);
            var _closure2_slot3 = golf;
            options = verify.useEffect;
            golf = new Array(2);
            golf[0] = offset;
            golf[1] = zulu;
            report = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot2;
                    if(!mike) { _fun00004_ip = 22; continue _fun00003 }
 10:
                    zulu = _closure2_slot3;
                    zulu = zulu.current;
                    mike = !zulu;
 22:
                    if(!mike) { _fun00004_ip = 51; continue _fun00003 }
 25:
                    zulu = _closure2_slot3;
                    mike = true;
                    zulu['current'] = mike;
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    mike['current'] = entity;
 51:
                    entity = undefined;
                    return entity;
                }
            };
            report = options.bind(verify)(report, golf);
            report = _closure1_slot1;
            entity = 5;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.bind(tango)(mike);
            mike = 1;
            entity = entity <= mike;
            if(!entity) { _fun00002_ip = 184; continue _fun00001 }
 180:
            entity = mike === zulu;
 184:
            return entity;
        }
    };
    zulu['useListHasSingleMessageRequest'] = tango;
    mike = function() { // Original name: useListHasSingleSpamMessageRequest
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            options = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 6;
            mike = oscar[mike];
            tango = undefined;
            zulu = options.bind(tango)(mike);
            mike = zulu.useSpamMessageRequestCount;
            zulu = mike.bind(zulu)();
            var _closure2_slot0 = zulu;
            verify = _closure1_slot3;
            mike = verify.useRef;
            mike = mike.bind(verify)(zulu);
            var _closure2_slot1 = mike;
            golf = 4;
            golf = oscar[golf];
            yankee = options.bind(tango)(golf);
            offset = yankee.useStateFromStores;
            golf = _closure1_slot5;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                mike = _closure1_slot5;
                entity = mike.isReady;
                entity = entity.bind(mike)();
                return entity;
            };
            offset = offset.bind(yankee)(options, golf);
            var _closure2_slot2 = offset;
            golf = verify.useRef;
            golf = golf.bind(verify)(offset);
            var _closure2_slot3 = golf;
            options = verify.useEffect;
            golf = new Array(2);
            golf[0] = offset;
            golf[1] = zulu;
            report = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    mike = _closure2_slot2;
                    if(!mike) { _fun00008_ip = 22; continue _fun00007 }
 10:
                    zulu = _closure2_slot3;
                    zulu = zulu.current;
                    mike = !zulu;
 22:
                    if(!mike) { _fun00008_ip = 51; continue _fun00007 }
 25:
                    zulu = _closure2_slot3;
                    mike = true;
                    zulu['current'] = mike;
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    mike['current'] = entity;
 51:
                    entity = undefined;
                    return entity;
                }
            };
            report = options.bind(verify)(report, golf);
            report = _closure1_slot1;
            entity = 5;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.bind(tango)(mike);
            mike = 1;
            entity = entity <= mike;
            if(!entity) { _fun00006_ip = 184; continue _fun00005 }
 180:
            entity = mike === zulu;
 184:
            return entity;
        }
    };
    zulu['useListHasSingleSpamMessageRequest'] = mike;
    return entity;
})();