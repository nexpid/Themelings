// app/lib/guild/GuildSubscriptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    tangon = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = tangon;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = report;
    entity = function(argFoo) { // Original name: validateGuildId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            entity = entity != zuuluu;
            if(!entity) { _fun00002_ip = 20; continue _fun00001 }
 12:
            michal = 'null';
            entity = michal !== zuuluu;
 20:
            if(!entity) { _fun00002_ip = 34; continue _fun00001 }
 23:
            michal = _closure1_slot6;
            entity = zuuluu !== michal;
 34:
            if(!entity) { _fun00002_ip = 45; continue _fun00001 }
 37:
            michal = 'undefined';
            entity = michal !== zuuluu;
 45:
            if(!entity) { _fun00002_ip = 59; continue _fun00001 }
 48:
            michal = _closure1_slot5;
            entity = zuuluu !== michal;
 59:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, oscard);
    entity = 0;
    oscard = report[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = report[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = report[oscard];
    oscard = tangon.bind(entity)(oscard);
    golfie = oscard.FAVORITES;
    var _closure1_slot5 = golfie;
    oscard = oscard.ME;
    var _closure1_slot6 = oscard;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo) { // Original name: GuildSubscriptions
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            report = 3;
            report = oscard[report];
            verify = golfie.bind(entity)(report);
            report = verify.prototype;
            option = Object.create(report, {constructor: {value: verify}});
            yankee = function(argFoo, argBar) {
                tangon = _closure3_slot0;
                zuuluu = tangon._enqueue;
                michal = {};
                entity = argBar;
                michal['members'] = entity;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            romeon = option;
            report = new romeon[verify](yankee, offset);
            report = report instanceof Object ? report : option;
            zuuluu['_members'] = report;
            report = 4;
            report = oscard[report];
            verify = golfie.bind(entity)(report);
            report = verify.prototype;
            option = Object.create(report, {constructor: {value: verify}});
            yankee = function(argFoo, argBar) {
                tangon = _closure3_slot0;
                zuuluu = tangon._enqueue;
                michal = {};
                entity = argBar;
                michal['channels'] = entity;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            romeon = option;
            report = new romeon[verify](yankee, offset);
            report = report instanceof Object ? report : option;
            zuuluu['_channels'] = report;
            report = 5;
            report = oscard[report];
            option = golfie.bind(entity)(report);
            report = option.prototype;
            golfie = Object.create(report, {constructor: {value: option}});
            yankee = function(argFoo, argBar) {
                tangon = _closure3_slot0;
                zuuluu = tangon._enqueue;
                michal = {};
                entity = argBar;
                michal['thread_member_lists'] = entity;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            romeon = golfie;
            report = new romeon[option](yankee, offset);
            report = report instanceof Object ? report : golfie;
            zuuluu['_threadMemberLists'] = report;
            report = global;
            golfie = report.Set;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            romeon = option;
            golfie = new romeon[golfie](yankee);
            golfie = golfie instanceof Object ? golfie : option;
            zuuluu['_typing'] = golfie;
            golfie = report.Set;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            romeon = option;
            golfie = new romeon[golfie](yankee);
            golfie = golfie instanceof Object ? golfie : option;
            zuuluu['_threads'] = golfie;
            golfie = report.Set;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            romeon = option;
            golfie = new romeon[golfie](yankee);
            golfie = golfie instanceof Object ? golfie : option;
            zuuluu['_activities'] = golfie;
            golfie = report.Set;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            romeon = option;
            golfie = new romeon[golfie](yankee);
            golfie = golfie instanceof Object ? golfie : option;
            zuuluu['_memberUpdates'] = golfie;
            report = report.Set;
            golfie = report.prototype;
            golfie = Object.create(golfie, {constructor: {value: report}});
            romeon = golfie;
            report = new romeon[report](yankee);
            report = report instanceof Object ? report : golfie;
            zuuluu['_subscribed'] = report;
            report = {};
            zuuluu['_pending'] = report;
            report = _closure1_slot0;
            tangon = 6;
            tangon = oscard[tangon];
            tangon = report.bind(entity)(tangon);
            oscard = tangon.DelayedCall;
            tangon = oscard.prototype;
            tangon = Object.create(tangon, {constructor: {value: oscard}});
            yankee = 0;
            offset = function() {
                michal = _closure3_slot0;
                entity = michal.flush;
                entity = entity.bind(michal)();
                return entity;
            };
            romeon = tangon;
            michal = new romeon[oscard](yankee, offset, verify);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['_flush'] = michal;
            michal = argFoo;
            zuuluu['_onChange'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = '_enqueue';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            tangon = argFoo;
            entity = this;
            zuuluu = entity._pending;
            michal = {};
            report = entity._pending;
            oscard = report[tangon];
            golfie = michal;
            report = copyDataProperties(golfie, oscard);
            oscard = argBar;
            golfie = michal;
            report = copyDataProperties(golfie, oscard);
            zuuluu[tangon] = michal;
            michal = entity._flush;
            entity = michal.delay;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(19);
        michal[0] = entity;
        entity = {};
        oscard = 'reset';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            zuuluu = entity._subscribed;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
            michal = {};
            entity['_pending'] = michal;
            zuuluu = entity._members;
            michal = zuuluu.reset;
            michal = michal.bind(zuuluu)();
            zuuluu = entity._memberUpdates;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
            zuuluu = entity._channels;
            michal = zuuluu.reset;
            michal = michal.bind(zuuluu)();
            zuuluu = entity._threadMemberLists;
            michal = zuuluu.reset;
            michal = michal.bind(zuuluu)();
            zuuluu = entity._typing;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
            zuuluu = entity._threads;
            michal = zuuluu.clear;
            michal = michal.bind(zuuluu)();
            michal = entity._activities;
            entity = michal.clear;
            entity = entity.bind(michal)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'get';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            tangon = argFoo;
            michal = this;
            entity = {};
            report = michal._typing;
            zuuluu = report.has;
            zuuluu = zuuluu.bind(report)(tangon);
            entity['typing'] = zuuluu;
            report = michal._threads;
            zuuluu = report.has;
            zuuluu = zuuluu.bind(report)(tangon);
            entity['threads'] = zuuluu;
            report = michal._activities;
            zuuluu = report.has;
            zuuluu = zuuluu.bind(report)(tangon);
            entity['activities'] = zuuluu;
            report = michal._members;
            zuuluu = report.get;
            zuuluu = zuuluu.bind(report)(tangon);
            entity['members'] = zuuluu;
            report = michal._memberUpdates;
            zuuluu = report.has;
            zuuluu = zuuluu.bind(report)(tangon);
            entity['member_updates'] = zuuluu;
            report = michal._channels;
            zuuluu = report.get;
            zuuluu = zuuluu.bind(report)(tangon);
            entity['channels'] = zuuluu;
            zuuluu = michal._threadMemberLists;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)(tangon);
            entity['thread_member_lists'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getSubscribedThreadIds';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            michal = entity._threadMemberLists;
            entity = michal.getSubscribedThreadIds;
            entity = entity.bind(michal)();
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'isSubscribedToThreads';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity._threads;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'isSubscribedToAnyMember';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = this;
                zuuluu = entity._members;
                michal = zuuluu.isSubscribedToAnyMember;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00004_ip = 35; continue _fun00003 }
 32:
                entity = michal;
 35:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'isSubscribedToMemberUpdates';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = this;
                michal = zuuluu.get;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.member_updates;
                entity = null;
                entity = entity != michal;
                if(!entity) { _fun00006_ip = 34; continue _fun00005 }
 31:
                entity = michal;
 34:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'forEach';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            zuuluu = entity._subscribed;
            michal = zuuluu.forEach;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'clearWithoutFlushing';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                michal = argBar;
                entity = this;
                tangon = !michal;
                if(!tangon) { _fun00008_ip = 31; continue _fun00007 }
 15:
                oscard = entity._threads;
                report = oscard.has;
                tangon = report.bind(oscard)(zuuluu);
 31:
                if(tangon) { _fun00008_ip = 50; continue _fun00007 }
 34:
                report = entity._subscribed;
                tangon = report.delete;
                tangon = tangon.bind(report)(zuuluu);
 50:
                tangon = entity._pending;
                tangon = delete tangon[zuuluu];
                report = entity._members;
                tangon = report.clear;
                tangon = tangon.bind(report)(zuuluu);
                report = entity._channels;
                tangon = report.clear;
                tangon = tangon.bind(report)(zuuluu);
                report = entity._threadMemberLists;
                tangon = report.clear;
                tangon = tangon.bind(report)(zuuluu);
                report = entity._typing;
                tangon = report.delete;
                tangon = tangon.bind(report)(zuuluu);
                report = entity._memberUpdates;
                tangon = report.delete;
                tangon = tangon.bind(report)(zuuluu);
                if(!michal) { _fun00008_ip = 162; continue _fun00007 }
 146:
                tangon = entity._threads;
                michal = tangon.delete;
                michal = michal.bind(tangon)(zuuluu);
 162:
                michal = entity._activities;
                entity = michal.delete;
                entity = entity.bind(michal)(zuuluu);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'flush';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 7;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.forEach;
            tangon = zuuluu._pending;
            michal = function(argFoo, argBar) {
                entity = _closure3_slot0;
                zuuluu = entity._subscribed;
                michal = zuuluu.add;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            michal = report.bind(oscard)(tangon, michal);
            tangon = zuuluu._onChange;
            michal = zuuluu._pending;
            michal = tangon.bind(zuuluu)(michal);
            michal = {};
            zuuluu['_pending'] = michal;
            return entity;
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'subscribeUser';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                michal = _closure1_slot7;
                entity = undefined;
                michal = michal.bind(entity)(report);
                if(!michal) { _fun00010_ip = 44; continue _fun00009 }
 20:
                michal = this;
                tangon = michal._members;
                zuuluu = tangon.subscribe;
                michal = argBar;
                michal = zuuluu.bind(tangon)(report, michal);
 44:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'unsubscribeUser';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                michal = _closure1_slot7;
                entity = undefined;
                michal = michal.bind(entity)(report);
                if(!michal) { _fun00012_ip = 44; continue _fun00011 }
 20:
                michal = this;
                tangon = michal._members;
                zuuluu = tangon.unsubscribe;
                michal = argBar;
                michal = zuuluu.bind(tangon)(report, michal);
 44:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'subscribeChannel';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                oscard = argFoo;
                michal = _closure1_slot7;
                entity = undefined;
                michal = michal.bind(entity)(oscard);
                entity = !michal;
                entity = !entity;
                if(!michal) { _fun00014_ip = 54; continue _fun00013 }
 26:
                michal = this;
                report = michal._channels;
                tangon = report.subscribe;
                zuuluu = argBar;
                michal = argBaz;
                entity = tangon.bind(report)(oscard, zuuluu, michal);
 54:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'subscribeToMemberUpdates';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = argFoo;
                michal = this;
                zuuluu = _closure1_slot7;
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(tangon);
                if(zuuluu) { _fun00016_ip = 27; continue _fun00015 }
 23:
                zuuluu = false;
                return zuuluu;
 27:
                report = michal._enqueue;
                zuuluu = {};
                oscard = true;
                zuuluu['member_updates'] = oscard;
                zuuluu = report.bind(michal)(tangon, zuuluu);
                zuuluu = michal._memberUpdates;
                michal = zuuluu.add;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'unsubscribeFromMemberUpdates';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                report = argFoo;
                tangon = this;
                michal = _closure1_slot7;
                entity = undefined;
                michal = michal.bind(entity)(report);
                oscard = false;
                if(michal) { _fun00018_ip = 27; continue _fun00017 }
 25:
                return oscard;
 27:
                zuuluu = tangon._enqueue;
                michal = {};
                michal['member_updates'] = oscard;
                michal = zuuluu.bind(tangon)(report, michal);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'subscribeThreadMemberList';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                oscard = argFoo;
                michal = _closure1_slot7;
                entity = undefined;
                michal = michal.bind(entity)(oscard);
                entity = !michal;
                entity = !entity;
                if(!michal) { _fun00020_ip = 54; continue _fun00019 }
 26:
                michal = this;
                report = michal._threadMemberLists;
                tangon = report.subscribe;
                zuuluu = argBar;
                michal = argBaz;
                entity = tangon.bind(report)(oscard, zuuluu, michal);
 54:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[15] = entity;
        entity = {};
        oscard = 'unsubscribeThreadMemberList';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                report = argFoo;
                michal = _closure1_slot7;
                entity = undefined;
                michal = michal.bind(entity)(report);
                entity = !michal;
                entity = !entity;
                if(!michal) { _fun00022_ip = 50; continue _fun00021 }
 26:
                michal = this;
                tangon = michal._threadMemberLists;
                zuuluu = tangon.unsubscribe;
                michal = argBar;
                entity = zuuluu.bind(tangon)(report, michal);
 50:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[16] = entity;
        entity = {};
        oscard = 'subscribeToGuild';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            report = argFoo;
            tangon = this;
            zuuluu = tangon._subscribeToFeature;
            michal = tangon._typing;
            entity = {};
            oscard = true;
            entity['typing'] = oscard;
            entity = zuuluu.bind(tangon)(report, michal, entity);
            zuuluu = tangon._subscribeToFeature;
            michal = tangon._activities;
            entity = {};
            entity['activities'] = oscard;
            entity = zuuluu.bind(tangon)(report, michal, entity);
            zuuluu = tangon._subscribeToFeature;
            michal = tangon._threads;
            entity = {};
            entity['threads'] = oscard;
            entity = zuuluu.bind(tangon)(report, michal, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[17] = entity;
        entity = {};
        oscard = '_subscribeToFeature';
        entity['key'] = oscard;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                report = argFoo;
                zuuluu = argBar;
                tangon = this;
                michal = _closure1_slot7;
                entity = undefined;
                michal = michal.bind(entity)(report);
                if(!michal) { _fun00024_ip = 64; continue _fun00023 }
 26:
                michal = zuuluu.has;
                michal = michal.bind(zuuluu)(report);
                if(michal) { _fun00024_ip = 64; continue _fun00023 }
 39:
                michal = zuuluu.add;
                michal = michal.bind(zuuluu)(report);
                zuuluu = tangon._enqueue;
                michal = argBaz;
                michal = zuuluu.bind(tangon)(report, michal);
 64:
                return entity;
            }
        };
        entity['value'] = report;
        michal[18] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    oscard = 8;
    oscard = report[oscard];
    option = tangon.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'lib/guild/GuildSubscriptions.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = michal;
    michal = 4;
    oscard = report[michal];
    oscard = tangon.bind(entity)(oscard);
    oscard = oscard.MINIMUM_RANGE;
    zuuluu['MINIMUM_RANGE'] = oscard;
    michal = report[michal];
    michal = tangon.bind(entity)(michal);
    michal = michal.DEFAULT_RANGES;
    zuuluu['DEFAULT_RANGES'] = michal;
    return entity;
})();