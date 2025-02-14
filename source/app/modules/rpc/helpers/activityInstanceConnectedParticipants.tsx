// app/modules/rpc/helpers/activityInstanceConnectedParticipants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    tango = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = options;
    report = function() { // Original name: activityInstanceConnectedParticipants
        _fun109509: for(var _fun109509_ip = 0; ; ) switch(_fun109509_ip) {
 0:
            tango = _closure1_slot3;
            zulu = tango.getCurrentEmbeddedActivity;
            zulu = zulu.bind(tango)();
            tango = null;
            if(!(tango != zulu)) { _fun109509_ip = 168; continue _fun109509 }
 28:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 3;
            tango = golf[entity];
            report = undefined;
            verify = oscar.bind(report)(tango);
            options = verify.getEmbeddedActivityLocationGuildId;
            tango = zulu.location;
            tango = options.bind(verify)(tango);
            var _closure2_slot0 = tango;
            entity = golf[entity];
            options = oscar.bind(report)(entity);
            tango = options.getEmbeddedActivityLocationChannelId;
            entity = zulu.location;
            entity = tango.bind(options)(entity);
            var _closure2_slot1 = entity;
            entity = {};
            tango = global;
            options = tango.Array;
            tango = options.from;
            zulu = zulu.userIds;
            mike = function(argFoo) {
                _fun109510: for(var _fun109510_ip = 0; ; ) switch(_fun109510_ip) {
 0:
                    zulu = _closure1_slot4;
                    mike = zulu.getUser;
                    entity = argFoo;
                    oscar = mike.bind(zulu)(entity);
                    tango = null;
                    if(!(tango == oscar)) { _fun109510_ip = 31; continue _fun109510 }
 27:
                    entity = undefined;
                    return entity;
 31:
                    mike = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 4;
                    entity = options[entity];
                    zulu = undefined;
                    verify = mike.bind(zulu)(entity);
                    golf = verify.getNickname;
                    mike = _closure2_slot0;
                    entity = _closure2_slot1;
                    mike = golf.bind(verify)(mike, entity, oscar);
                    entity = {};
                    golf = _closure1_slot1;
                    report = 5;
                    report = options[report];
                    report = golf.bind(zulu)(report);
                    yankee = report.bind(zulu)(oscar);
                    romeo = entity;
                    report = copyDataProperties(romeo, yankee);
                    tango = tango != mike;
                    if(!tango) { _fun109510_ip = 117; continue _fun109510 }
 114:
                    zulu = mike;
 117:
                    mike = 'nickname';
                    entity[mike] = zulu;
                    return entity;
                }
            };
            tango = tango.bind(options)(zulu, mike);
            zulu = tango.filter;
            mike = 6;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.isNotNullish;
            mike = zulu.bind(tango)(mike);
            entity['participants'] = mike;
            return entity;
 168:
            entity = {};
            mike = new Array(0);
            entity['participants'] = mike;
            return entity;
        }
    };
    var _closure1_slot5 = report;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = options[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = options[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    offset = mike.RPC_AUTHENTICATED_SCOPE;
    tango = {};
    mike = mike.RPC_SCOPE_CONFIG;
    verify = mike.ANY;
    mike = new Array(1);
    mike[0] = offset;
    tango[verify] = mike;
    mike = {};
    mike['scope'] = tango;
    oscar = function() { // Original name: handler
        entity = function(argFoo) {
            _fun109512: for(var _fun109512_ip = 0; ; ) switch(_fun109512_ip) {
 0:
                entity = argFoo;
                oscar = entity.prevState;
                zulu = entity.dispatch;
                entity = _closure1_slot5;
                mike = undefined;
                entity = entity.bind(mike)();
                report = _closure1_slot1;
                golf = _closure1_slot2;
                tango = 7;
                tango = golf[tango];
                report = report.bind(mike)(tango);
                tango = report.isEqual;
                tango = tango.bind(report)(entity, oscar);
                if(tango) { _fun109512_ip = 67; continue _fun109512 }
 62:
                mike = zulu.bind(mike)(entity);
 67:
                return entity;
            }
        };
        return entity;
    };
    mike['handler'] = oscar;
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/rpc/helpers/activityInstanceConnectedParticipants.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['activityInstanceConnectedParticipants'] = report;
    zulu['activityInstanceConnectedParticipantsScope'] = tango;
    zulu['activityInstanceConnectedParticipantsUpdateEvent'] = mike;
    return entity;
})();