// app/modules/polls/chat/PollInteractivityHelper.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: PollReferenceInflater
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            oscar = entity.message;
            var _closure2_slot0 = oscar;
            report = entity.children;
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 4;
            zulu = tango[zulu];
            tango = undefined;
            offset = golf.bind(tango)(zulu);
            verify = offset.useStateFromStores;
            zulu = _closure1_slot4;
            options = new Array(1);
            options[0] = zulu;
            zulu = oscar.channel_id;
            golf = new Array(2);
            golf[0] = zulu;
            zulu = oscar.id;
            golf[1] = zulu;
            zulu = function() {
                tango = _closure1_slot4;
                zulu = tango.getMessage;
                entity = _closure2_slot0;
                mike = entity.channel_id;
                entity = entity.id;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            golf = verify.bind(offset)(options, zulu, golf);
            options = null;
            yankee = options != golf;
            var _closure2_slot1 = yankee;
            offset = _closure1_slot3;
            verify = offset.useEffect;
            zulu = new Array(3);
            zulu[0] = yankee;
            yankee = oscar.channel_id;
            zulu[1] = yankee;
            yankee = oscar.id;
            zulu[2] = yankee;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    if(entity) { _fun00004_ip = 70; continue _fun00003 }
 10:
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 5;
                    mike = mike[entity];
                    entity = undefined;
                    zulu = zulu.bind(entity)(mike);
                    mike = zulu.focusMessage;
                    entity = {};
                    tango = _closure2_slot0;
                    report = tango.channel_id;
                    entity['channelId'] = report;
                    tango = tango.id;
                    entity['messageId'] = tango;
                    entity = mike.bind(zulu)(entity);
 70:
                    entity = undefined;
                    return entity;
                }
            };
            mike = verify.bind(offset)(mike, zulu);
            zulu = _closure1_slot5;
            entity = _closure1_slot7;
            mike = entity.Provider;
            entity = {};
            if(!(options != golf)) { _fun00002_ip = 178; continue _fun00001 }
 175:
            oscar = golf;
 178:
            entity['value'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot5 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot6 = tango;
    tango = golf.createContext;
    tango = tango.bind(golf)(entity);
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/polls/chat/PollInteractivityHelper.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: PollInteractivityHelper
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golf = entity.message;
            oscar = entity.children;
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 6;
            entity = tango[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.isPollMessageDirectlyInteractive;
            entity = entity.bind(zulu)(golf);
            tango = _closure1_slot5;
            if(entity) { _fun00006_ip = 78; continue _fun00005 }
 56:
            zulu = _closure1_slot8;
            entity = {};
            entity['message'] = golf;
            entity['children'] = oscar;
            entity = tango.bind(report)(zulu, entity);
            _fun00006_ip = 94; continue _fun00005;
 78:
            zulu = _closure1_slot6;
            mike = {};
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 94:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo) { // Original name: useInteractivePollMessage
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot3;
            tango = report.useContext;
            mike = _closure1_slot7;
            tango = tango.bind(report)(mike);
            mike = null;
            if(!(mike != tango)) { _fun00008_ip = 34; continue _fun00007 }
 31:
            entity = tango;
 34:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 3;
            zulu = report[zulu];
            report = undefined;
            tango = tango.bind(report)(zulu);
            zulu = mike != entity;
            mike = 'Using PollReferenceMessageContext without a provider (or a fallback)';
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['useInteractivePollMessage'] = mike;
    return entity;
})();