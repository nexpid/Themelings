// app/lib/guild/GuildMemberSubscriptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    golfie = 1;
    tangon = oscard[golfie];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.Millis;
    tangon = tangon.MINUTE;
    tangon = golfie * tangon;
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: GuildMemberSubscriptions
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = {};
            zuuluu['_subscriptions'] = report;
            report = {};
            zuuluu['_unsubscriptions'] = report;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 3;
            report = golfie[report];
            report = oscard.bind(entity)(report);
            oscard = report.DelayedCall;
            verify = _closure1_slot5;
            tangon = oscard.prototype;
            tangon = Object.create(tangon, {constructor: {value: oscard}});
            option = function() {
                michal = _closure3_slot0;
                entity = michal.flushUnsubscriptions;
                entity = entity.bind(michal)();
                return entity;
            };
            offset = tangon;
            michal = new offset[oscard](verify, option, golfie);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['_unsubscribe'] = michal;
            michal = argFoo;
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
            entity['_subscriptions'] = michal;
            michal = {};
            entity['_unsubscriptions'] = michal;
            michal = entity._unsubscribe;
            entity = michal.cancel;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(9);
        michal[0] = entity;
        entity = {};
        oscard = 'get';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                michal = entity._subscriptions;
                entity = argFoo;
                zuuluu = michal[entity];
                entity = null;
                if(!(entity == zuuluu)) { _fun00002_ip = 24; continue _fun00001 }
 22:
                zuuluu = {};
 24:
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                entity = michal.keys;
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            zuuluu = entity._subscriptions;
            zuuluu = delete zuuluu[michal];
            entity = entity._unsubscriptions;
            entity = delete entity[michal];
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'subscribe';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                michal = this;
                entity = michal._subscriptions;
                entity = entity[tangon];
                oscard = null;
                if(!(oscard == entity)) { _fun00004_ip = 27; continue _fun00003 }
 25:
                entity = {};
 27:
                report = entity[zuuluu];
                golfie = oscard != report;
                oscard = 0;
                if(!golfie) { _fun00004_ip = 43; continue _fun00003 }
 40:
                oscard = report;
 43:
                report = 1;
                oscard = oscard + report;
                entity[zuuluu] = oscard;
                oscard = michal._subscriptions;
                oscard[tangon] = entity;
                entity = entity[zuuluu];
                if(!(report === entity)) { _fun00004_ip = 94; continue _fun00003 }
 72:
                report = michal._onChange;
                entity = michal.get;
                entity = entity.bind(michal)(tangon);
                entity = report.bind(michal)(tangon, entity);
 94:
                entity = michal.checkForLeaks;
                entity = entity.bind(michal)(tangon, zuuluu);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'isSubscribed';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                michal = this;
                entity = michal._subscriptions;
                entity = entity[tangon];
                zuuluu = null;
                entity = zuuluu != entity;
                if(!entity) { _fun00006_ip = 46; continue _fun00005 }
 25:
                michal = michal._subscriptions;
                tangon = michal[tangon];
                michal = argBar;
                michal = tangon[michal];
                entity = zuuluu != michal;
 46:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'isSubscribedToAnyMember';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            zuuluu = this;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            michal = entity.length;
            entity = 0;
            entity = michal > entity;
            return entity;
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'unsubscribe';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscard = argFoo;
                tangon = argBar;
                entity = this;
                michal = entity.isSubscribed;
                michal = michal.bind(entity)(oscard, tangon);
                if(!michal) { _fun00008_ip = 108; continue _fun00007 }
 26:
                michal = entity._unsubscriptions;
                michal = michal[oscard];
                report = null;
                if(!(report == michal)) { _fun00008_ip = 44; continue _fun00007 }
 42:
                michal = {};
 44:
                zuuluu = michal[tangon];
                golfie = report != zuuluu;
                report = 0;
                if(!golfie) { _fun00008_ip = 60; continue _fun00007 }
 57:
                report = zuuluu;
 60:
                zuuluu = 1;
                report = report + zuuluu;
                michal[tangon] = report;
                report = entity._unsubscriptions;
                report[oscard] = michal;
                michal = michal[tangon];
                if(!(zuuluu === michal)) { _fun00008_ip = 108; continue _fun00007 }
 89:
                zuuluu = entity._unsubscribe;
                michal = zuuluu.delay;
                entity = false;
                entity = michal.bind(zuuluu)(entity);
 108:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'checkForLeaks';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                oscard = argFoo;
                golfie = argBar;
                tangon = this;
                entity = tangon._subscriptions;
                michal = entity[oscard];
                report = null;
                zuuluu = report == michal;
                entity = undefined;
                option = undefined;
                if(zuuluu) { _fun00010_ip = 36; continue _fun00009 }
 32:
                option = michal[golfie];
 36:
                verify = report != option;
                michal = 0;
                if(!verify) { _fun00010_ip = 48; continue _fun00009 }
 45:
                michal = option;
 48:
                tangon = tangon._unsubscriptions;
                oscard = tangon[oscard];
                option = report == oscard;
                tangon = undefined;
                if(option) { _fun00010_ip = 71; continue _fun00009 }
 67:
                tangon = oscard[golfie];
 71:
                report = report != tangon;
                zuuluu = 0;
                if(!report) { _fun00010_ip = 83; continue _fun00009 }
 80:
                zuuluu = tangon;
 83:
                golfie = michal - zuuluu;
                tangon = 5;
                if(!(golfie > tangon)) { _fun00010_ip = 181; continue _fun00009 }
 94:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                michal = michal[tangon];
                tangon = zuuluu.bind(entity)(michal);
                michal = tangon.prototype;
                zuuluu = Object.create(michal, {constructor: {value: tangon}});
                yankee = 'GuildMemberSubscriptions';
                romeon = zuuluu;
                michal = new romeon[tangon](yankee, offset);
                tangon = michal instanceof Object ? michal : zuuluu;
                zuuluu = tangon.warn;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = 'GuildMemberSubscriptions.subscribe(...): Potential reference leak! (';
                michal = ' subscriptions)';
                michal = oscard.bind(report)(golfie, michal);
                michal = zuuluu.bind(tangon)(michal);
 181:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'flushUnsubscriptions';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = this;
                var _closure3_slot0 = zuuluu;
                golfie = _closure1_slot1;
                entity = _closure1_slot2;
                oscard = 6;
                report = entity[oscard];
                entity = undefined;
                option = golfie.bind(entity)(report);
                golfie = option.isEmpty;
                report = zuuluu._unsubscriptions;
                report = golfie.bind(option)(report);
                if(report) { _fun00012_ip = 101; continue _fun00011 }
 54:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                tangon = tangon[oscard];
                oscard = report.bind(entity)(tangon);
                report = oscard.forEach;
                tangon = zuuluu._unsubscriptions;
                michal = function(argFoo, argBar) {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        report = argBar;
                        entity = _closure3_slot0;
                        entity = entity._subscriptions;
                        oscard = entity[report];
                        var _closure4_slot0 = oscard;
                        tangon = _closure1_slot1;
                        golfie = _closure1_slot2;
                        zuuluu = 6;
                        verify = golfie[zuuluu];
                        entity = undefined;
                        yankee = tangon.bind(entity)(verify);
                        offset = yankee.forEach;
                        verify = argFoo;
                        option = function(argFoo, argBar) {
                            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                                michal = argBar;
                                report = _closure4_slot0;
                                zuuluu = report[michal];
                                tangon = null;
                                golfie = tangon != zuuluu;
                                tangon = 0;
                                oscard = 0;
                                if(!golfie) { _fun00016_ip = 30; continue _fun00015 }
 27:
                                oscard = zuuluu;
 30:
                                zuuluu = argFoo;
                                zuuluu = oscard - zuuluu;
                                report[michal] = zuuluu;
                                zuuluu = _closure4_slot0;
                                zuuluu = zuuluu[michal];
                                if(!(zuuluu <= tangon)) { _fun00016_ip = 61; continue _fun00015 }
 53:
                                entity = _closure4_slot0;
                                entity = delete entity[michal];
 61:
                                entity = undefined;
                                return entity;
                            }
                        };
                        option = offset.bind(yankee)(verify, option);
                        zuuluu = golfie[zuuluu];
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.isEmpty;
                        zuuluu = zuuluu.bind(tangon)(oscard);
                        if(!zuuluu) { _fun00014_ip = 107; continue _fun00013 }
 93:
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu._subscriptions;
                        zuuluu = delete zuuluu[report];
 107:
                        tangon = _closure3_slot0;
                        zuuluu = tangon._onChange;
                        michal = tangon.get;
                        michal = michal.bind(tangon)(report);
                        michal = zuuluu.bind(tangon)(report, michal);
                        return entity;
                    }
                };
                michal = report.bind(oscard)(tangon, michal);
                michal = {};
                zuuluu['_unsubscriptions'] = michal;
 101:
                return entity;
            }
        };
        entity['value'] = report;
        michal[8] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'lib/guild/GuildMemberSubscriptions.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();