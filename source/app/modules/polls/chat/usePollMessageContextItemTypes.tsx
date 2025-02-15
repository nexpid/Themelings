// app/modules/polls/chat/usePollMessageContextItemTypes.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    options = 0;
    report = golf[options];
    mike = argBaz;
    entity = undefined;
    mike = mike.bind(entity)(report);
    var _closure1_slot2 = mike;
    mike = {};
    mike['END_EARLY'] = options;
    report = 'END_EARLY';
    mike[options] = report;
    var _closure1_slot3 = mike;
    report = new Array(0);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/polls/chat/usePollMessageContextItemTypes.tsx';
    report = oscar.bind(golf)(report);
    tango = function(argFoo) { // Original name: usePollMessageContextItemTypes
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            zulu = _closure1_slot1;
            mike = 1;
            zulu = zulu[mike];
            mike = undefined;
            oscar = report.bind(mike)(zulu);
            report = oscar.useStateFromStores;
            mike = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = mike;
            mike = function() {
                mike = _closure1_slot2;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            report = report.bind(oscar)(zulu, mike);
            zulu = tango.poll;
            mike = tango.isPoll;
            mike = mike.bind(tango)();
            if(!mike) { _fun00002_ip = 169; continue _fun00001 }
 79:
            mike = null;
            if(!(mike != zulu)) { _fun00002_ip = 169; continue _fun00001 }
 85:
            mike = new Array(0);
            golf = zulu.expiry;
            oscar = golf.isSameOrBefore;
            zulu = global;
            options = zulu.Date;
            zulu = options.now;
            zulu = zulu.bind(options)();
            zulu = oscar.bind(golf)(zulu);
            zulu = !zulu;
            if(!zulu) { _fun00002_ip = 144; continue _fun00001 }
 129:
            tango = tango.author;
            tango = tango.id;
            zulu = tango === report;
 144:
            if(!zulu) { _fun00002_ip = 167; continue _fun00001 }
 147:
            tango = mike.push;
            zulu = _closure1_slot3;
            zulu = zulu.END_EARLY;
            zulu = tango.bind(mike)(zulu);
 167:
            return mike;
 169:
            entity = _closure1_slot4;
            return entity;
        }
    };
    zulu['default'] = tango;
    zulu['PollMessageContextItemTypes'] = mike;
    return entity;
})();