// app/lib/guild/GuildMemberRequester.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar) { // Original name: GuildMemberRequestState
            tangon = argFoo;
            zuuluu = this;
            var _closure3_slot0 = tangon;
            entity = argBar;
            var _closure3_slot1 = entity;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = global;
            oscard = report.Set;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            offset = golfie;
            oscard = new offset[oscard](verify);
            oscard = oscard instanceof Object ? oscard : golfie;
            zuuluu['_pendingRequests'] = oscard;
            oscard = report.Set;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            offset = golfie;
            oscard = new offset[oscard](verify);
            oscard = oscard instanceof Object ? oscard : golfie;
            zuuluu['_sentRequests'] = oscard;
            report = report.Set;
            oscard = report.prototype;
            oscard = Object.create(oscard, {constructor: {value: report}});
            offset = oscard;
            report = new offset[report](verify);
            report = report instanceof Object ? report : oscard;
            zuuluu['_unacknowledgedRequests'] = report;
            zuuluu['_guildId'] = tangon;
            michal = function(argFoo) {
                tangon = _closure3_slot1;
                zuuluu = _closure3_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(zuuluu, entity);
                return entity;
            };
            zuuluu['_guildMemberExists'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'acknowledge';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            entity = this;
            tangon = entity._unacknowledgedRequests;
            michal = tangon.delete;
            michal = michal.bind(tangon)(zuuluu);
            michal = entity._pendingRequests;
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'flushRequests';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                var _closure3_slot0 = entity;
                zuuluu = entity._pendingRequests;
                tangon = zuuluu.size;
                zuuluu = 0;
                if(!(zuuluu !== tangon)) { _fun00002_ip = 97; continue _fun00001 }
 26:
                report = new Array(0);
                var _closure3_slot1 = report;
                oscard = entity._pendingRequests;
                tangon = oscard.forEach;
                michal = function(argFoo) {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = argFoo;
                        tangon = _closure3_slot0;
                        michal = tangon._guildMemberExists;
                        michal = michal.bind(tangon)(zuuluu);
                        if(michal) { _fun00004_ip = 74; continue _fun00003 }
 24:
                        michal = _closure3_slot0;
                        report = michal._unacknowledgedRequests;
                        tangon = report.add;
                        tangon = tangon.bind(report)(zuuluu);
                        tangon = michal._sentRequests;
                        michal = tangon.add;
                        michal = michal.bind(tangon)(zuuluu);
                        michal = _closure3_slot1;
                        entity = michal.push;
                        entity = entity.bind(michal)(zuuluu);
 74:
                        entity = undefined;
                        return entity;
                    }
                };
                michal = tangon.bind(oscard)(michal);
                michal = report.length;
                if(!(michal > zuuluu)) { _fun00002_ip = 81; continue _fun00001 }
 64:
                tangon = entity._guildId;
                zuuluu = argFoo;
                michal = undefined;
                michal = zuuluu.bind(michal)(tangon, report);
 81:
                michal = entity._pendingRequests;
                entity = michal.clear;
                entity = entity.bind(michal)();
 97:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'requestUnacknowledged';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                var _closure3_slot0 = michal;
                entity = michal._unacknowledgedRequests;
                entity = entity.size;
                zuuluu = 0;
                entity = zuuluu !== entity;
                if(!entity) { _fun00006_ip = 73; continue _fun00005 }
 29:
                oscard = michal._unacknowledgedRequests;
                report = oscard.forEach;
                tangon = function(argFoo) {
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        zuuluu = argFoo;
                        tangon = _closure3_slot0;
                        michal = tangon._guildMemberExists;
                        michal = michal.bind(tangon)(zuuluu);
                        entity = _closure3_slot0;
                        if(michal) { _fun00008_ip = 46; continue _fun00007 }
 28:
                        tangon = entity._pendingRequests;
                        michal = tangon.add;
                        michal = michal.bind(tangon)(zuuluu);
                        _fun00008_ip = 62; continue _fun00007;
 46:
                        michal = entity._unacknowledgedRequests;
                        entity = michal.delete;
                        entity = entity.bind(michal)(zuuluu);
 62:
                        entity = undefined;
                        return entity;
                    }
                };
                tangon = report.bind(oscard)(tangon);
                michal = michal._pendingRequests;
                michal = michal.size;
                michal = zuuluu !== michal;
                if(!michal) { _fun00006_ip = 70; continue _fun00005 }
 68:
                michal = undefined;
 70:
                entity = michal;
 73:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'request';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                michal = entity._guildMemberExists;
                michal = michal.bind(entity)(zuuluu);
                if(michal) { _fun00010_ip = 78; continue _fun00009 }
 20:
                tangon = entity._sentRequests;
                michal = tangon.has;
                michal = michal.bind(tangon)(zuuluu);
                if(michal) { _fun00010_ip = 78; continue _fun00009 }
 39:
                tangon = entity._pendingRequests;
                michal = tangon.has;
                michal = michal.bind(tangon)(zuuluu);
                if(michal) { _fun00010_ip = 78; continue _fun00009 }
 58:
                michal = entity._pendingRequests;
                entity = michal.add;
                entity = entity.bind(michal)(zuuluu);
                entity = undefined;
                return entity;
 78:
                entity = false;
                return entity;
            }
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar) { // Original name: GuildMemberRequester
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = {};
            zuuluu['_guildStates'] = report;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 2;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            oscard = tangon.DelayedCall;
            tangon = oscard.prototype;
            tangon = Object.create(tangon, {constructor: {value: oscard}});
            option = 0;
            golfie = function() {
                michal = _closure3_slot0;
                entity = michal.flushRequests;
                entity = entity.bind(michal)();
                return entity;
            };
            verify = tangon;
            michal = new verify[oscard](option, golfie, oscard);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['_flush'] = michal;
            michal = argFoo;
            zuuluu['_guildMemberExists'] = michal;
            michal = argBar;
            zuuluu['_onChange'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'reset';
        entity['key'] = michal;
        michal = function() { // Original name: value
            entity = this;
            michal = {};
            entity['_guildStates'] = michal;
            michal = entity._flush;
            entity = michal.cancel;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(6);
        michal[0] = entity;
        entity = {};
        oscard = 'request';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                zuuluu = entity._getGuildState;
                michal = argFoo;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.request;
                michal = argBar;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = false;
                if(!(zuuluu !== michal)) { _fun00012_ip = 54; continue _fun00011 }
 37:
                michal = entity._flush;
                entity = michal.delay;
                entity = entity.bind(michal)(zuuluu);
 54:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'acknowledge';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            zuuluu = this;
            michal = zuuluu._getGuildState;
            entity = argFoo;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.acknowledge;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'flushRequests';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.forEach;
            zuuluu = zuuluu._guildStates;
            michal = function(argFoo) {
                zuuluu = argFoo;
                michal = zuuluu.flushRequests;
                entity = _closure3_slot0;
                entity = entity._onChange;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'requestUnacknowledged';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 3;
                zuuluu = zuuluu[entity];
                entity = undefined;
                golfie = tangon.bind(entity)(zuuluu);
                oscard = golfie.reduce;
                report = michal._guildStates;
                tangon = function(argFoo, argBar) {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        michal = argBar;
                        entity = michal.requestUnacknowledged;
                        zuuluu = entity.bind(michal)();
                        entity = false;
                        entity = entity !== zuuluu;
                        if(entity) { _fun00016_ip = 25; continue _fun00015 }
 22:
                        entity = michal;
 25:
                        return entity;
                    }
                };
                zuuluu = false;
                zuuluu = oscard.bind(golfie)(report, tangon, zuuluu);
                if(!zuuluu) { _fun00014_ip = 75; continue _fun00013 }
 59:
                zuuluu = michal._flush;
                michal = zuuluu.delay;
                michal = michal.bind(zuuluu)();
 75:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = '_getGuildState';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal._guildStates;
                entity = entity[tangon];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00018_ip = 71; continue _fun00017 }
 22:
                zuuluu = michal._guildStates;
                oscard = _closure1_slot5;
                golfie = michal._guildMemberExists;
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                verify = report;
                option = tangon;
                michal = new verify[oscard](option, golfie, oscard);
                michal = michal instanceof Object ? michal : report;
                zuuluu[tangon] = michal;
                entity = michal;
 71:
                return entity;
            }
        };
        entity['value'] = report;
        michal[5] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/guild/GuildMemberRequester.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();