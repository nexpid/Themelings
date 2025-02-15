// app/modules/instant_invite/InviteCodeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function(argFoo) { // Original name: generateInviteKeyFromExtraData
        _fun54499: for(var _fun54499_ip = 0; ; ) switch(_fun54499_ip) {
 0:
            entity = argFoo;
            options = entity.baseCode;
            golf = entity.guildScheduledEventId;
            mike = null;
            entity = options;
            if(!(mike != golf)) { _fun54499_ip = 66; continue _fun54499 }
 24:
            yankee = _closure1_slot4;
            mike = global;
            mike = mike.HermesInternal;
            report = mike.concat;
            backup = '';
            romeo = '?';
            offset = '=';
            foxtrot = options;
            verify = golf;
            entity = backup[report](foxtrot, romeo, yankee, offset, verify, options);
 66:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
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
    report = 'event';
    var _closure1_slot4 = report;
    report = 3;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/instant_invite/InviteCodeUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: generateInviteKeyFromUrlParams
        _fun54500: for(var _fun54500_ip = 0; ; ) switch(_fun54500_ip) {
 0:
            entity = argFoo;
            golf = argBar;
            mike = null;
            if(!(mike != golf)) { _fun54500_ip = 164; continue _fun54500 }
 15:
            tango = undefined;
            zulu = undefined;
            report = golf.charAt;
            mike = 0;
            oscar = report.bind(golf)(mike);
            report = '?';
            mike = golf;
            if(!(report === oscar)) { _fun54500_ip = 57; continue _fun54500 }
 43:
            oscar = golf.substring;
            report = 1;
            mike = oscar.bind(golf)(report);
 57:
            zulu = mike;
 60: // try_start_0
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 1;
            report = golf[report];
            oscar = oscar.bind(tango)(report);
            report = oscar.parse;
            oscar = report.bind(oscar)(zulu);
            report = _closure1_slot0;
            zulu = 2;
            zulu = golf[zulu];
            report = report.bind(tango)(zulu);
            zulu = report.getFirstQueryStringValue;
            mike = _closure1_slot4;
            mike = oscar[mike];
            mike = zulu.bind(report)(mike);
 129: // try_end0
            report = mike;
            _fun54500_ip = 138; continue _fun54500;
 134: // catch_target0
            CatchBlockStart(arg_register=1);
            report = undefined;
 138:
            zulu = _closure1_slot5;
            mike = {};
            mike['baseCode'] = entity;
            mike['guildScheduledEventId'] = report;
            mike = zulu.bind(tango)(mike);
            return mike;
 164:
            return entity;
        }
    };
    zulu['generateInviteKeyFromUrlParams'] = report;
    zulu['generateInviteKeyFromExtraData'] = tango;
    tango = function(argFoo) { // Original name: parseExtraDataFromInviteKey
        _fun54501: for(var _fun54501_ip = 0; ; ) switch(_fun54501_ip) {
 0:
            zulu = argFoo;
            mike = zulu.split;
            entity = '?';
            mike = mike.bind(zulu)(entity);
            entity = _closure1_slot3;
            golf = undefined;
            options = 2;
            tango = entity.bind(golf)(mike, options);
            entity = 0;
            mike = tango[entity];
            entity = 1;
            oscar = tango[entity];
            tango = null;
            if(!(tango != oscar)) { _fun54501_ip = 128; continue _fun54501 }
 54:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = tango[entity];
            report = report.bind(golf)(entity);
            entity = report.parse;
            oscar = entity.bind(report)(oscar);
            entity = {};
            entity['baseCode'] = mike;
            report = _closure1_slot0;
            tango = tango[options];
            report = report.bind(golf)(tango);
            tango = report.getFirstQueryStringValue;
            zulu = _closure1_slot4;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            entity['guildScheduledEventId'] = zulu;
            return entity;
 128:
            entity = {};
            entity['baseCode'] = mike;
            return entity;
        }
    };
    zulu['parseExtraDataFromInviteKey'] = tango;
    mike = function(argFoo) { // Original name: parseInviteCodeFromInviteKey
        zulu = argFoo;
        mike = zulu.split;
        entity = '?';
        tango = mike.bind(zulu)(entity);
        zulu = _closure1_slot3;
        mike = undefined;
        entity = 1;
        mike = zulu.bind(mike)(tango, entity);
        entity = 0;
        entity = mike[entity];
        return entity;
    };
    zulu['parseInviteCodeFromInviteKey'] = mike;
    return entity;
})();