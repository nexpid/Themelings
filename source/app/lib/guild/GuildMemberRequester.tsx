// app/lib/guild/GuildMemberRequester.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
    tango = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar) { // Original name: GuildMemberRequestState
            tango = argFoo;
            zulu = this;
            var _closure3_slot0 = tango;
            entity = argBar;
            var _closure3_slot1 = entity;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = global;
            oscar = report.Set;
            golf = oscar.prototype;
            golf = Object.create(golf, {constructor: {value: oscar}});
            offset = golf;
            oscar = new offset[oscar](verify);
            oscar = oscar instanceof Object ? oscar : golf;
            zulu['_pendingRequests'] = oscar;
            oscar = report.Set;
            golf = oscar.prototype;
            golf = Object.create(golf, {constructor: {value: oscar}});
            offset = golf;
            oscar = new offset[oscar](verify);
            oscar = oscar instanceof Object ? oscar : golf;
            zulu['_sentRequests'] = oscar;
            report = report.Set;
            oscar = report.prototype;
            oscar = Object.create(oscar, {constructor: {value: report}});
            offset = oscar;
            report = new offset[report](verify);
            report = report instanceof Object ? report : oscar;
            zulu['_unacknowledgedRequests'] = report;
            zulu['_guildId'] = tango;
            mike = function(argFoo) {
                tango = _closure3_slot1;
                zulu = _closure3_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(zulu, entity);
                return entity;
            };
            zulu['_guildMemberExists'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'acknowledge';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            zulu = argFoo;
            entity = this;
            tango = entity._unacknowledgedRequests;
            mike = tango.delete;
            mike = mike.bind(tango)(zulu);
            mike = entity._pendingRequests;
            entity = mike.delete;
            entity = entity.bind(mike)(zulu);
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'flushRequests';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                zulu = entity._pendingRequests;
                tango = zulu.size;
                zulu = 0;
                if(!(zulu !== tango)) { _fun00002_ip = 97; continue _fun00001 }
 26:
                report = new Array(0);
                var _closure3_slot1 = report;
                oscar = entity._pendingRequests;
                tango = oscar.forEach;
                mike = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zulu = argFoo;
                        tango = _closure3_slot0;
                        mike = tango._guildMemberExists;
                        mike = mike.bind(tango)(zulu);
                        if(mike) { _fun00004_ip = 74; continue _fun00003 }
 24:
                        mike = _closure3_slot0;
                        report = mike._unacknowledgedRequests;
                        tango = report.add;
                        tango = tango.bind(report)(zulu);
                        tango = mike._sentRequests;
                        mike = tango.add;
                        mike = mike.bind(tango)(zulu);
                        mike = _closure3_slot1;
                        entity = mike.push;
                        entity = entity.bind(mike)(zulu);
 74:
                        entity = undefined;
                        return entity;
                    }
                };
                mike = tango.bind(oscar)(mike);
                mike = report.length;
                if(!(mike > zulu)) { _fun00002_ip = 81; continue _fun00001 }
 64:
                tango = entity._guildId;
                zulu = argFoo;
                mike = undefined;
                mike = zulu.bind(mike)(tango, report);
 81:
                mike = entity._pendingRequests;
                entity = mike.clear;
                entity = entity.bind(mike)();
 97:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'requestUnacknowledged';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                var _closure3_slot0 = mike;
                entity = mike._unacknowledgedRequests;
                entity = entity.size;
                zulu = 0;
                entity = zulu !== entity;
                if(!entity) { _fun00006_ip = 73; continue _fun00005 }
 29:
                oscar = mike._unacknowledgedRequests;
                report = oscar.forEach;
                tango = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zulu = argFoo;
                        tango = _closure3_slot0;
                        mike = tango._guildMemberExists;
                        mike = mike.bind(tango)(zulu);
                        entity = _closure3_slot0;
                        if(mike) { _fun00008_ip = 46; continue _fun00007 }
 28:
                        tango = entity._pendingRequests;
                        mike = tango.add;
                        mike = mike.bind(tango)(zulu);
                        _fun00008_ip = 62; continue _fun00007;
 46:
                        mike = entity._unacknowledgedRequests;
                        entity = mike.delete;
                        entity = entity.bind(mike)(zulu);
 62:
                        entity = undefined;
                        return entity;
                    }
                };
                tango = report.bind(oscar)(tango);
                mike = mike._pendingRequests;
                mike = mike.size;
                mike = zulu !== mike;
                if(!mike) { _fun00006_ip = 70; continue _fun00005 }
 68:
                mike = undefined;
 70:
                entity = mike;
 73:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'request';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity._guildMemberExists;
                mike = mike.bind(entity)(zulu);
                if(mike) { _fun00010_ip = 78; continue _fun00009 }
 20:
                tango = entity._sentRequests;
                mike = tango.has;
                mike = mike.bind(tango)(zulu);
                if(mike) { _fun00010_ip = 78; continue _fun00009 }
 39:
                tango = entity._pendingRequests;
                mike = tango.has;
                mike = mike.bind(tango)(zulu);
                if(mike) { _fun00010_ip = 78; continue _fun00009 }
 58:
                mike = entity._pendingRequests;
                entity = mike.add;
                entity = entity.bind(mike)(zulu);
                entity = undefined;
                return entity;
 78:
                entity = false;
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar) { // Original name: GuildMemberRequester
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = {};
            zulu['_guildStates'] = report;
            report = _closure1_slot0;
            oscar = _closure1_slot2;
            tango = 2;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            oscar = tango.DelayedCall;
            tango = oscar.prototype;
            tango = Object.create(tango, {constructor: {value: oscar}});
            options = 0;
            golf = function() {
                mike = _closure3_slot0;
                entity = mike.flushRequests;
                entity = entity.bind(mike)();
                return entity;
            };
            verify = tango;
            mike = new verify[oscar](options, golf, oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['_flush'] = mike;
            mike = argFoo;
            zulu['_guildMemberExists'] = mike;
            mike = argBar;
            zulu['_onChange'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            mike = {};
            entity['_guildStates'] = mike;
            mike = entity._flush;
            entity = mike.cancel;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(6);
        mike[0] = entity;
        entity = {};
        oscar = 'request';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                zulu = entity._getGuildState;
                mike = argFoo;
                tango = zulu.bind(entity)(mike);
                zulu = tango.request;
                mike = argBar;
                mike = zulu.bind(tango)(mike);
                zulu = false;
                if(!(zulu !== mike)) { _fun00012_ip = 54; continue _fun00011 }
 37:
                mike = entity._flush;
                entity = mike.delay;
                entity = entity.bind(mike)(zulu);
 54:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'acknowledge';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            zulu = this;
            mike = zulu._getGuildState;
            entity = argFoo;
            zulu = mike.bind(zulu)(entity);
            mike = zulu.acknowledge;
            entity = argBar;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'flushRequests';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 3;
            tango = tango[entity];
            entity = undefined;
            report = report.bind(entity)(tango);
            tango = report.forEach;
            zulu = zulu._guildStates;
            mike = function(argFoo) {
                zulu = argFoo;
                mike = zulu.flushRequests;
                entity = _closure3_slot0;
                entity = entity._onChange;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'requestUnacknowledged';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = this;
                tango = _closure1_slot1;
                zulu = _closure1_slot2;
                entity = 3;
                zulu = zulu[entity];
                entity = undefined;
                golf = tango.bind(entity)(zulu);
                oscar = golf.reduce;
                report = mike._guildStates;
                tango = function(argFoo, argBar) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        mike = argBar;
                        entity = mike.requestUnacknowledged;
                        zulu = entity.bind(mike)();
                        entity = false;
                        entity = entity !== zulu;
                        if(entity) { _fun00016_ip = 25; continue _fun00015 }
 22:
                        entity = mike;
 25:
                        return entity;
                    }
                };
                zulu = false;
                zulu = oscar.bind(golf)(report, tango, zulu);
                if(!zulu) { _fun00014_ip = 75; continue _fun00013 }
 59:
                zulu = mike._flush;
                mike = zulu.delay;
                mike = mike.bind(zulu)();
 75:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = '_getGuildState';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tango = argFoo;
                mike = this;
                entity = mike._guildStates;
                entity = entity[tango];
                zulu = null;
                if(!(zulu == entity)) { _fun00018_ip = 71; continue _fun00017 }
 22:
                zulu = mike._guildStates;
                oscar = _closure1_slot5;
                golf = mike._guildMemberExists;
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                verify = report;
                options = tango;
                mike = new verify[oscar](options, golf, oscar);
                mike = mike instanceof Object ? mike : report;
                zulu[tango] = mike;
                entity = mike;
 71:
                return entity;
            }
        };
        entity['value'] = report;
        mike[5] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/guild/GuildMemberRequester.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();