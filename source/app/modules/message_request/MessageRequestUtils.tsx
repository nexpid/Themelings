// app/modules/message_request/MessageRequestUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_request/MessageRequestUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: filterOutMessageRequestsAndSpam
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = arguments[1];
            zulu = undefined;
            if(!(tango === zulu)) { _fun00002_ip = 37; continue _fun00001 }
 11:
            oscar = _closure1_slot2;
            mike = new Array(2);
            mike[0] = oscar;
            report = _closure1_slot3;
            mike[1] = report;
            tango = mike;
 37:
            oscar = tango;
            mike = oscar[Symbol.iterator];
            oscar = mike().next;
            golf = oscar().value;
            tango = mike;
            tango = tango === zulu;
            report = undefined;
            if(tango) { _fun00002_ip = 62; continue _fun00001 }
 59:
            report = golf;
 62:
            var _closure2_slot0 = report;
            report = undefined;
            if(tango) { _fun00002_ip = 96; continue _fun00001 }
 71:
            golf = oscar().value;
            oscar = mike;
            oscar = oscar === zulu;
            report = undefined;
            tango = oscar;
            if(oscar) { _fun00002_ip = 96; continue _fun00001 }
 90:
            report = golf;
            tango = oscar;
 96:
            var _closure2_slot1 = report;
            if(tango) { _fun00002_ip = 106; continue _fun00001 }
 103:
            mike.return();
 106:
            tango = function(argFoo) { // Original name: channelRecordToArray
                tango = argFoo;
                var _closure3_slot0 = tango;
                report = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 2;
                zulu = zulu[mike];
                mike = undefined;
                zulu = report.bind(mike)(zulu);
                mike = zulu.keys;
                zulu = mike.bind(zulu)(tango);
                mike = zulu.map;
                entity = function(argFoo) {
                    zulu = argFoo;
                    entity = new Array(2);
                    entity[0] = zulu;
                    mike = _closure3_slot0;
                    mike = mike[zulu];
                    entity[1] = mike;
                    return entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = argFoo;
            report = tango.bind(zulu)(mike);
            tango = report.filter;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    oscar = argFoo;
                    mike = oscar[Symbol.iterator];
                    oscar = mike().next;
                    options = undefined;
                    zulu = undefined;
                    tango = undefined;
                    golf = oscar().value;
                    verify = mike;
                    verify = verify === options;
                    zulu = verify;
                    if(verify) { _fun00004_ip = 32; continue _fun00003 }
 29:
                    tango = golf;
 32:
                    tango = undefined;
                    golf = zulu;
                    if(golf) { _fun00004_ip = 60; continue _fun00003 }
 40:
                    oscar = oscar().value;
                    golf = mike;
                    golf = golf === options;
                    zulu = golf;
                    if(golf) { _fun00004_ip = 60; continue _fun00003 }
 57:
                    tango = oscar;
 60:
                    report = tango;
                    tango = zulu;
                    if(tango) { _fun00004_ip = 72; continue _fun00003 }
 69:
                    mike.return();
 72:
                    verify = _closure2_slot0;
                    options = verify.isMessageRequest;
                    golf = report;
                    golf = golf.id;
                    golf = options.bind(verify)(golf);
                    golf = !golf;
                    tango = golf;
                    if(!golf) { _fun00004_ip = 130; continue _fun00003 }
 107:
                    golf = _closure2_slot1;
                    oscar = golf.isSpam;
                    report = report.id;
                    report = oscar.bind(golf)(report);
                    tango = !report;
 130:
                    return tango;
 132:
                    CatchBlockStart(arg_register=0);
                    if(zulu) { _fun00004_ip = 140; continue _fun00003 }
 137:
                    mike.return();
 140:
                    throw entity;
                }
            };
            mike = tango.bind(report)(mike);
            entity = function(argFoo) { // Original name: channelArrayToObject
                entity = global;
                zulu = entity.Array;
                mike = zulu.from;
                entity = argFoo;
                tango = mike.bind(zulu)(entity);
                zulu = tango.reduce;
                mike = function(argFoo, argBar) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        tango = argBar;
                        mike = tango[Symbol.iterator];
                        tango = mike().next;
                        entity = tango().value;
                        zulu = mike;
                        golf = undefined;
                        zulu = zulu === golf;
                        report = undefined;
                        if(zulu) { _fun00006_ip = 27; continue _fun00005 }
 24:
                        report = entity;
 27:
                        entity = undefined;
                        if(zulu) { _fun00006_ip = 57; continue _fun00005 }
 32:
                        oscar = tango().value;
                        tango = mike;
                        tango = tango === golf;
                        entity = undefined;
                        zulu = tango;
                        if(tango) { _fun00006_ip = 57; continue _fun00005 }
 51:
                        entity = oscar;
                        zulu = tango;
 57:
                        if(zulu) { _fun00006_ip = 63; continue _fun00005 }
 60:
                        mike.return();
 63:
                        mike = global;
                        tango = mike.Object;
                        zulu = tango.assign;
                        mike = {};
                        mike[report] = entity;
                        entity = argFoo;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    }
                };
                entity = {};
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = entity.bind(zulu)(mike);
            return entity;
        }
    };
    zulu['filterOutMessageRequestsAndSpam'] = tango;
    tango = function(argFoo) { // Original name: filterOutMessageRequestsAndSpamById
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            tango = arguments[1];
            options = undefined;
            if(!(tango === options)) { _fun00008_ip = 40; continue _fun00007 }
 14:
            oscar = _closure1_slot2;
            mike = new Array(2);
            mike[0] = oscar;
            report = _closure1_slot3;
            mike[1] = report;
            tango = mike;
 40:
            oscar = tango;
            mike = oscar[Symbol.iterator];
            oscar = mike().next;
            golf = oscar().value;
            tango = mike;
            tango = tango === options;
            report = undefined;
            if(tango) { _fun00008_ip = 65; continue _fun00007 }
 62:
            report = golf;
 65:
            var _closure2_slot0 = report;
            report = undefined;
            if(tango) { _fun00008_ip = 99; continue _fun00007 }
 74:
            golf = oscar().value;
            oscar = mike;
            oscar = oscar === options;
            report = undefined;
            tango = oscar;
            if(oscar) { _fun00008_ip = 99; continue _fun00007 }
 93:
            report = golf;
            tango = oscar;
 99:
            var _closure2_slot1 = report;
            if(tango) { _fun00008_ip = 109; continue _fun00007 }
 106:
            mike.return();
 109:
            mike = zulu.filter;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tango = argFoo;
                    zulu = _closure2_slot0;
                    entity = zulu.isMessageRequest;
                    entity = entity.bind(zulu)(tango);
                    entity = !entity;
                    if(!entity) { _fun00010_ip = 45; continue _fun00009 }
 27:
                    zulu = _closure2_slot1;
                    mike = zulu.isSpam;
                    mike = mike.bind(zulu)(tango);
                    entity = !mike;
 45:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['filterOutMessageRequestsAndSpamById'] = tango;
    tango = function(argFoo) { // Original name: isMessageRequestOrSpamRequest
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tango = argFoo;
            mike = arguments[1];
            options = undefined;
            if(!(mike === options)) { _fun00012_ip = 38; continue _fun00011 }
 12:
            report = _closure1_slot2;
            entity = new Array(2);
            entity[0] = report;
            zulu = _closure1_slot3;
            entity[1] = zulu;
            mike = entity;
 38:
            oscar = mike;
            entity = oscar[Symbol.iterator];
            oscar = entity().next;
            zulu = oscar().value;
            mike = entity;
            report = mike === options;
            mike = undefined;
            if(report) { _fun00012_ip = 63; continue _fun00011 }
 60:
            mike = zulu;
 63:
            zulu = undefined;
            if(report) { _fun00012_ip = 93; continue _fun00011 }
 68:
            golf = oscar().value;
            oscar = entity;
            oscar = oscar === options;
            zulu = undefined;
            report = oscar;
            if(oscar) { _fun00012_ip = 93; continue _fun00011 }
 87:
            zulu = golf;
            report = oscar;
 93:
            if(report) { _fun00012_ip = 99; continue _fun00011 }
 96:
            entity.return();
 99:
            entity = mike.isMessageRequest;
            entity = entity.bind(mike)(tango);
            if(entity) { _fun00012_ip = 124; continue _fun00011 }
 113:
            mike = zulu.isSpam;
            entity = mike.bind(zulu)(tango);
 124:
            return entity;
        }
    };
    zulu['isMessageRequestOrSpamRequest'] = tango;
    mike = function() { // Original name: shouldShowMessageRequests
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            mike = arguments[0];
            golf = undefined;
            if(!(mike === golf)) { _fun00014_ip = 35; continue _fun00013 }
 9:
            tango = _closure1_slot2;
            entity = new Array(2);
            entity[0] = tango;
            zulu = _closure1_slot3;
            entity[1] = zulu;
            mike = entity;
 35:
            report = mike;
            entity = report[Symbol.iterator];
            report = entity().next;
            zulu = report().value;
            mike = entity;
            tango = mike === golf;
            mike = undefined;
            if(tango) { _fun00014_ip = 60; continue _fun00013 }
 57:
            mike = zulu;
 60:
            zulu = undefined;
            if(tango) { _fun00014_ip = 90; continue _fun00013 }
 65:
            oscar = report().value;
            report = entity;
            report = report === golf;
            zulu = undefined;
            tango = report;
            if(report) { _fun00014_ip = 90; continue _fun00013 }
 84:
            zulu = oscar;
            tango = report;
 90:
            if(tango) { _fun00014_ip = 96; continue _fun00013 }
 93:
            entity.return();
 96:
            entity = zulu.getSpamChannelsCount;
            zulu = entity.bind(zulu)();
            entity = mike.getMessageRequestsCount;
            entity = entity.bind(mike)();
            mike = 0;
            entity = entity > mike;
            if(entity) { _fun00014_ip = 129; continue _fun00013 }
 125:
            entity = zulu > mike;
 129:
            return entity;
        }
    };
    zulu['shouldShowMessageRequests'] = mike;
    return entity;
})();