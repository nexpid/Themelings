// app/modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    golf = tango.useEffect;
    var _closure1_slot2 = golf;
    tango = tango.useRef;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useCommunicationDisabledCountdownCleanup
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscar = argFoo;
            var _closure2_slot0 = oscar;
            yankee = null;
            entity = oscar;
            if(!(yankee == entity)) { _fun00002_ip = 20; continue _fun00001 }
 18:
            entity = {};
 20:
            golf = entity.communicationDisabledUntil;
            verify = entity.userId;
            var _closure2_slot1 = verify;
            offset = entity.guildId;
            var _closure2_slot2 = offset;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            entity = 1;
            entity = report[entity];
            report = undefined;
            tango = tango.bind(report)(entity);
            if(!(yankee == golf)) { _fun00002_ip = 92; continue _fun00001 }
 73:
            entity = global;
            options = entity.Date;
            entity = options.now;
            entity = entity.bind(options)();
            _fun00002_ip = 111; continue _fun00001;
 92:
            options = global;
            romeo = options.Date;
            options = romeo.parse;
            entity = options.bind(romeo)(golf);
 111:
            entity = tango.bind(report)(entity);
            options = entity.seconds;
            var _closure2_slot3 = options;
            tango = _closure1_slot3;
            tango = tango.bind(report)(yankee);
            var _closure2_slot4 = tango;
            tango = _closure1_slot2;
            zulu = new Array(5);
            zulu[0] = offset;
            zulu[1] = verify;
            zulu[2] = options;
            zulu[3] = golf;
            zulu[4] = oscar;
            mike = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = _closure2_slot0;
                    report = null;
                    if(!(report != zulu)) { _fun00004_ip = 31; continue _fun00003 }
 15:
                    zulu = _closure2_slot2;
                    if(!(report != zulu)) { _fun00004_ip = 31; continue _fun00003 }
 23:
                    zulu = _closure2_slot1;
                    if(!(report == zulu)) { _fun00004_ip = 57; continue _fun00003 }
 31:
                    zulu = global;
                    oscar = zulu.clearTimeout;
                    zulu = _closure2_slot4;
                    tango = zulu.current;
                    zulu = undefined;
                    tango = oscar.bind(zulu)(tango);
                    return zulu;
 57:
                    tango = _closure2_slot3;
                    zulu = 0;
                    zulu = tango <= zulu;
                    if(!zulu) { _fun00004_ip = 83; continue _fun00003 }
 70:
                    tango = _closure2_slot4;
                    tango = tango.current;
                    zulu = report == tango;
 83:
                    if(!zulu) { _fun00004_ip = 125; continue _fun00003 }
 86:
                    zulu = _closure2_slot4;
                    mike = global;
                    oscar = mike.setTimeout;
                    report = undefined;
                    tango = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot1;
                        entity = 2;
                        mike = mike[entity];
                        entity = undefined;
                        report = zulu.bind(entity)(mike);
                        tango = report.clearGuildMemberTimeout;
                        zulu = _closure2_slot2;
                        mike = _closure2_slot1;
                        mike = tango.bind(report)(zulu, mike);
                        return entity;
                    };
                    mike = 1000;
                    mike = oscar.bind(report)(tango, mike);
                    zulu['current'] = mike;
 125:
                    entity = function() {
                        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                            mike = _closure2_slot4;
                            zulu = mike.current;
                            mike = null;
                            if(!(mike != zulu)) { _fun00006_ip = 52; continue _fun00005 }
 18:
                            zulu = global;
                            report = zulu.clearTimeout;
                            zulu = _closure2_slot4;
                            tango = zulu.current;
                            zulu = undefined;
                            zulu = report.bind(zulu)(tango);
                            entity = _closure2_slot4;
                            entity['current'] = mike;
 52:
                            entity = undefined;
                            return entity;
                        }
                    };
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['useCommunicationDisabledCountdownCleanup'] = mike;
    return entity;
})();