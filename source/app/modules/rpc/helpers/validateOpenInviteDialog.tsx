// app/modules/rpc/helpers/validateOpenInviteDialog.tsx
export default (function(_, argBar, argBaz, __, ___, argFred, argPlugh) {
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
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.RPCErrors;
    var _closure1_slot5 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/helpers/validateOpenInviteDialog.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: validateOpenInviteDialog
        _fun109836: for(var _fun109836_ip = 0; ; ) switch(_fun109836_ip) {
 0:
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 3;
            mike = tango[mike];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            zulu = mike.bind(tango)();
            mike = null;
            if(!(mike != zulu)) { _fun109836_ip = 308; continue _fun109836 }
 38:
            golf = _closure1_slot3;
            oscar = golf.getGuild;
            report = zulu.getGuildId;
            report = report.bind(zulu)();
            report = oscar.bind(golf)(report);
            if(!(mike != report)) { _fun109836_ip = 212; continue _fun109836 }
 69:
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            mike = 5;
            mike = golf[mike];
            golf = oscar.bind(tango)(mike);
            oscar = golf.canViewInviteModal;
            mike = _closure1_slot4;
            mike = oscar.bind(golf)(mike, report, zulu);
            if(mike) { _fun109836_ip = 200; continue _fun109836 }
 109:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 4;
            mike = golf[mike];
            options = oscar.bind(tango)(mike);
            golf = {};
            mike = _closure1_slot5;
            mike = mike.INVALID_PERMISSIONS;
            golf['errorCode'] = mike;
            verify = zulu.id;
            mike = global;
            mike = mike.HermesInternal;
            oscar = mike.concat;
            mike = 'No invite permissions for ';
            yankee = oscar.bind(mike)(verify);
            oscar = options.prototype;
            oscar = Object.create(oscar, {constructor: {value: options}});
            foxtrot = oscar;
            romeo = golf;
            mike = new foxtrot[options](romeo, yankee, offset);
            mike = mike instanceof Object ? mike : oscar;
            throw mike;
 200:
            mike = {};
            mike['channel'] = zulu;
            mike['guild'] = report;
            return mike;
 212:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 4;
            mike = oscar[mike];
            oscar = report.bind(tango)(mike);
            report = {};
            mike = _closure1_slot5;
            mike = mike.INVALID_CHANNEL;
            report['errorCode'] = mike;
            mike = zulu.getGuildId;
            golf = mike.bind(zulu)();
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'Invalid guild ';
            yankee = zulu.bind(mike)(golf);
            zulu = oscar.prototype;
            zulu = Object.create(zulu, {constructor: {value: oscar}});
            foxtrot = zulu;
            romeo = report;
            mike = new foxtrot[oscar](romeo, yankee, offset);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 308:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 4;
            mike = report[mike];
            tango = zulu.bind(tango)(mike);
            zulu = {};
            entity = _closure1_slot5;
            entity = entity.INVALID_CHANNEL;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            yankee = 'Invalid channel';
            foxtrot = mike;
            romeo = zulu;
            entity = new foxtrot[tango](romeo, yankee, offset);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    zulu['validateOpenInviteDialog'] = mike;
    return entity;
})();