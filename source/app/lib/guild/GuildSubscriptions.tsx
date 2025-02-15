// app/lib/guild/GuildSubscriptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    tango = argBar;
    golf = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = tango;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = report;
    entity = function(argFoo) { // Original name: validateGuildId
        _fun68489: for(var _fun68489_ip = 0; ; ) switch(_fun68489_ip) {
 0:
            zulu = argFoo;
            entity = null;
            entity = entity != zulu;
            if(!entity) { _fun68489_ip = 20; continue _fun68489 }
 12:
            mike = 'null';
            entity = mike !== zulu;
 20:
            if(!entity) { _fun68489_ip = 34; continue _fun68489 }
 23:
            mike = _closure1_slot6;
            entity = zulu !== mike;
 34:
            if(!entity) { _fun68489_ip = 45; continue _fun68489 }
 37:
            mike = 'undefined';
            entity = mike !== zulu;
 45:
            if(!entity) { _fun68489_ip = 59; continue _fun68489 }
 48:
            mike = _closure1_slot5;
            entity = zulu !== mike;
 59:
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, oscar);
    entity = 0;
    oscar = report[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = report[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = report[oscar];
    oscar = tango.bind(entity)(oscar);
    golf = oscar.FAVORITES;
    var _closure1_slot5 = golf;
    oscar = oscar.ME;
    var _closure1_slot6 = oscar;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo) { // Original name: GuildSubscriptions
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot3;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            report = 3;
            report = oscar[report];
            verify = golf.bind(entity)(report);
            report = verify.prototype;
            options = Object.create(report, {constructor: {value: verify}});
            yankee = function(argFoo, argBar) {
                tango = _closure3_slot0;
                zulu = tango._enqueue;
                mike = {};
                entity = argBar;
                mike['members'] = entity;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            romeo = options;
            report = new romeo[verify](yankee, offset);
            report = report instanceof Object ? report : options;
            zulu['_members'] = report;
            report = 4;
            report = oscar[report];
            verify = golf.bind(entity)(report);
            report = verify.prototype;
            options = Object.create(report, {constructor: {value: verify}});
            yankee = function(argFoo, argBar) {
                tango = _closure3_slot0;
                zulu = tango._enqueue;
                mike = {};
                entity = argBar;
                mike['channels'] = entity;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            romeo = options;
            report = new romeo[verify](yankee, offset);
            report = report instanceof Object ? report : options;
            zulu['_channels'] = report;
            report = 5;
            report = oscar[report];
            options = golf.bind(entity)(report);
            report = options.prototype;
            golf = Object.create(report, {constructor: {value: options}});
            yankee = function(argFoo, argBar) {
                tango = _closure3_slot0;
                zulu = tango._enqueue;
                mike = {};
                entity = argBar;
                mike['thread_member_lists'] = entity;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            romeo = golf;
            report = new romeo[options](yankee, offset);
            report = report instanceof Object ? report : golf;
            zulu['_threadMemberLists'] = report;
            report = global;
            golf = report.Set;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            romeo = options;
            golf = new romeo[golf](yankee);
            golf = golf instanceof Object ? golf : options;
            zulu['_typing'] = golf;
            golf = report.Set;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            romeo = options;
            golf = new romeo[golf](yankee);
            golf = golf instanceof Object ? golf : options;
            zulu['_threads'] = golf;
            golf = report.Set;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            romeo = options;
            golf = new romeo[golf](yankee);
            golf = golf instanceof Object ? golf : options;
            zulu['_activities'] = golf;
            golf = report.Set;
            options = golf.prototype;
            options = Object.create(options, {constructor: {value: golf}});
            romeo = options;
            golf = new romeo[golf](yankee);
            golf = golf instanceof Object ? golf : options;
            zulu['_memberUpdates'] = golf;
            report = report.Set;
            golf = report.prototype;
            golf = Object.create(golf, {constructor: {value: report}});
            romeo = golf;
            report = new romeo[report](yankee);
            report = report instanceof Object ? report : golf;
            zulu['_subscribed'] = report;
            report = {};
            zulu['_pending'] = report;
            report = _closure1_slot0;
            tango = 6;
            tango = oscar[tango];
            tango = report.bind(entity)(tango);
            oscar = tango.DelayedCall;
            tango = oscar.prototype;
            tango = Object.create(tango, {constructor: {value: oscar}});
            yankee = 0;
            offset = function() {
                mike = _closure3_slot0;
                entity = mike.flush;
                entity = entity.bind(mike)();
                return entity;
            };
            romeo = tango;
            mike = new romeo[oscar](yankee, offset, verify);
            mike = mike instanceof Object ? mike : tango;
            zulu['_flush'] = mike;
            mike = argFoo;
            zulu['_onChange'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = '_enqueue';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            tango = argFoo;
            entity = this;
            zulu = entity._pending;
            mike = {};
            report = entity._pending;
            oscar = report[tango];
            golf = mike;
            report = copyDataProperties(golf, oscar);
            oscar = argBar;
            golf = mike;
            report = copyDataProperties(golf, oscar);
            zulu[tango] = mike;
            mike = entity._flush;
            entity = mike.delay;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(19);
        mike[0] = entity;
        entity = {};
        oscar = 'reset';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity._subscribed;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            mike = {};
            entity['_pending'] = mike;
            zulu = entity._members;
            mike = zulu.reset;
            mike = mike.bind(zulu)();
            zulu = entity._memberUpdates;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            zulu = entity._channels;
            mike = zulu.reset;
            mike = mike.bind(zulu)();
            zulu = entity._threadMemberLists;
            mike = zulu.reset;
            mike = mike.bind(zulu)();
            zulu = entity._typing;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            zulu = entity._threads;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            mike = entity._activities;
            entity = mike.clear;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            tango = argFoo;
            mike = this;
            entity = {};
            report = mike._typing;
            zulu = report.has;
            zulu = zulu.bind(report)(tango);
            entity['typing'] = zulu;
            report = mike._threads;
            zulu = report.has;
            zulu = zulu.bind(report)(tango);
            entity['threads'] = zulu;
            report = mike._activities;
            zulu = report.has;
            zulu = zulu.bind(report)(tango);
            entity['activities'] = zulu;
            report = mike._members;
            zulu = report.get;
            zulu = zulu.bind(report)(tango);
            entity['members'] = zulu;
            report = mike._memberUpdates;
            zulu = report.has;
            zulu = zulu.bind(report)(tango);
            entity['member_updates'] = zulu;
            report = mike._channels;
            zulu = report.get;
            zulu = zulu.bind(report)(tango);
            entity['channels'] = zulu;
            zulu = mike._threadMemberLists;
            mike = zulu.get;
            mike = mike.bind(zulu)(tango);
            entity['thread_member_lists'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getSubscribedThreadIds';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity._threadMemberLists;
            entity = mike.getSubscribedThreadIds;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'isSubscribedToThreads';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity._threads;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'isSubscribedToAnyMember';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun68501: for(var _fun68501_ip = 0; ; ) switch(_fun68501_ip) {
 0:
                entity = this;
                zulu = entity._members;
                mike = zulu.isSubscribedToAnyMember;
                entity = argFoo;
                mike = mike.bind(zulu)(entity);
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun68501_ip = 35; continue _fun68501 }
 32:
                entity = mike;
 35:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'isSubscribedToMemberUpdates';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun68502: for(var _fun68502_ip = 0; ; ) switch(_fun68502_ip) {
 0:
                zulu = this;
                mike = zulu.get;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                mike = entity.member_updates;
                entity = null;
                entity = entity != mike;
                if(!entity) { _fun68502_ip = 34; continue _fun68502 }
 31:
                entity = mike;
 34:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'forEach';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity._subscribed;
            mike = zulu.forEach;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'clearWithoutFlushing';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun68504: for(var _fun68504_ip = 0; ; ) switch(_fun68504_ip) {
 0:
                zulu = argFoo;
                mike = argBar;
                entity = this;
                tango = !mike;
                if(!tango) { _fun68504_ip = 31; continue _fun68504 }
 15:
                oscar = entity._threads;
                report = oscar.has;
                tango = report.bind(oscar)(zulu);
 31:
                if(tango) { _fun68504_ip = 50; continue _fun68504 }
 34:
                report = entity._subscribed;
                tango = report.delete;
                tango = tango.bind(report)(zulu);
 50:
                tango = entity._pending;
                tango = delete tango[zulu];
                report = entity._members;
                tango = report.clear;
                tango = tango.bind(report)(zulu);
                report = entity._channels;
                tango = report.clear;
                tango = tango.bind(report)(zulu);
                report = entity._threadMemberLists;
                tango = report.clear;
                tango = tango.bind(report)(zulu);
                report = entity._typing;
                tango = report.delete;
                tango = tango.bind(report)(zulu);
                report = entity._memberUpdates;
                tango = report.delete;
                tango = tango.bind(report)(zulu);
                if(!mike) { _fun68504_ip = 162; continue _fun68504 }
 146:
                tango = entity._threads;
                mike = tango.delete;
                mike = mike.bind(tango)(zulu);
 162:
                mike = entity._activities;
                entity = mike.delete;
                entity = entity.bind(mike)(zulu);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'flush';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 7;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.forEach;
            tango = zulu._pending;
            mike = function(argFoo, argBar) {
                entity = _closure3_slot0;
                zulu = entity._subscribed;
                mike = zulu.add;
                entity = argBar;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            mike = report.bind(oscar)(tango, mike);
            tango = zulu._onChange;
            mike = zulu._pending;
            mike = tango.bind(zulu)(mike);
            mike = {};
            zulu['_pending'] = mike;
            return entity;
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'subscribeUser';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun68507: for(var _fun68507_ip = 0; ; ) switch(_fun68507_ip) {
 0:
                report = argFoo;
                mike = _closure1_slot7;
                entity = undefined;
                mike = mike.bind(entity)(report);
                if(!mike) { _fun68507_ip = 44; continue _fun68507 }
 20:
                mike = this;
                tango = mike._members;
                zulu = tango.subscribe;
                mike = argBar;
                mike = zulu.bind(tango)(report, mike);
 44:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'unsubscribeUser';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun68508: for(var _fun68508_ip = 0; ; ) switch(_fun68508_ip) {
 0:
                report = argFoo;
                mike = _closure1_slot7;
                entity = undefined;
                mike = mike.bind(entity)(report);
                if(!mike) { _fun68508_ip = 44; continue _fun68508 }
 20:
                mike = this;
                tango = mike._members;
                zulu = tango.unsubscribe;
                mike = argBar;
                mike = zulu.bind(tango)(report, mike);
 44:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'subscribeChannel';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun68509: for(var _fun68509_ip = 0; ; ) switch(_fun68509_ip) {
 0:
                oscar = argFoo;
                mike = _closure1_slot7;
                entity = undefined;
                mike = mike.bind(entity)(oscar);
                entity = !mike;
                entity = !entity;
                if(!mike) { _fun68509_ip = 54; continue _fun68509 }
 26:
                mike = this;
                report = mike._channels;
                tango = report.subscribe;
                zulu = argBar;
                mike = argBaz;
                entity = tango.bind(report)(oscar, zulu, mike);
 54:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'subscribeToMemberUpdates';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun68510: for(var _fun68510_ip = 0; ; ) switch(_fun68510_ip) {
 0:
                tango = argFoo;
                mike = this;
                zulu = _closure1_slot7;
                entity = undefined;
                zulu = zulu.bind(entity)(tango);
                if(zulu) { _fun68510_ip = 27; continue _fun68510 }
 23:
                zulu = false;
                return zulu;
 27:
                report = mike._enqueue;
                zulu = {};
                oscar = true;
                zulu['member_updates'] = oscar;
                zulu = report.bind(mike)(tango, zulu);
                zulu = mike._memberUpdates;
                mike = zulu.add;
                mike = mike.bind(zulu)(tango);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'unsubscribeFromMemberUpdates';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun68511: for(var _fun68511_ip = 0; ; ) switch(_fun68511_ip) {
 0:
                report = argFoo;
                tango = this;
                mike = _closure1_slot7;
                entity = undefined;
                mike = mike.bind(entity)(report);
                oscar = false;
                if(mike) { _fun68511_ip = 27; continue _fun68511 }
 25:
                return oscar;
 27:
                zulu = tango._enqueue;
                mike = {};
                mike['member_updates'] = oscar;
                mike = zulu.bind(tango)(report, mike);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'subscribeThreadMemberList';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun68512: for(var _fun68512_ip = 0; ; ) switch(_fun68512_ip) {
 0:
                oscar = argFoo;
                mike = _closure1_slot7;
                entity = undefined;
                mike = mike.bind(entity)(oscar);
                entity = !mike;
                entity = !entity;
                if(!mike) { _fun68512_ip = 54; continue _fun68512 }
 26:
                mike = this;
                report = mike._threadMemberLists;
                tango = report.subscribe;
                zulu = argBar;
                mike = argBaz;
                entity = tango.bind(report)(oscar, zulu, mike);
 54:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'unsubscribeThreadMemberList';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun68513: for(var _fun68513_ip = 0; ; ) switch(_fun68513_ip) {
 0:
                report = argFoo;
                mike = _closure1_slot7;
                entity = undefined;
                mike = mike.bind(entity)(report);
                entity = !mike;
                entity = !entity;
                if(!mike) { _fun68513_ip = 50; continue _fun68513 }
 26:
                mike = this;
                tango = mike._threadMemberLists;
                zulu = tango.unsubscribe;
                mike = argBar;
                entity = zulu.bind(tango)(report, mike);
 50:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[16] = entity;
        entity = {};
        oscar = 'subscribeToGuild';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            report = argFoo;
            tango = this;
            zulu = tango._subscribeToFeature;
            mike = tango._typing;
            entity = {};
            oscar = true;
            entity['typing'] = oscar;
            entity = zulu.bind(tango)(report, mike, entity);
            zulu = tango._subscribeToFeature;
            mike = tango._activities;
            entity = {};
            entity['activities'] = oscar;
            entity = zulu.bind(tango)(report, mike, entity);
            zulu = tango._subscribeToFeature;
            mike = tango._threads;
            entity = {};
            entity['threads'] = oscar;
            entity = zulu.bind(tango)(report, mike, entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[17] = entity;
        entity = {};
        oscar = '_subscribeToFeature';
        entity['key'] = oscar;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun68515: for(var _fun68515_ip = 0; ; ) switch(_fun68515_ip) {
 0:
                report = argFoo;
                zulu = argBar;
                tango = this;
                mike = _closure1_slot7;
                entity = undefined;
                mike = mike.bind(entity)(report);
                if(!mike) { _fun68515_ip = 64; continue _fun68515 }
 26:
                mike = zulu.has;
                mike = mike.bind(zulu)(report);
                if(mike) { _fun68515_ip = 64; continue _fun68515 }
 39:
                mike = zulu.add;
                mike = mike.bind(zulu)(report);
                zulu = tango._enqueue;
                mike = argBaz;
                mike = zulu.bind(tango)(report, mike);
 64:
                return entity;
            }
        };
        entity['value'] = report;
        mike[18] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    oscar = 8;
    oscar = report[oscar];
    options = tango.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'lib/guild/GuildSubscriptions.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = mike;
    mike = 4;
    oscar = report[mike];
    oscar = tango.bind(entity)(oscar);
    oscar = oscar.MINIMUM_RANGE;
    zulu['MINIMUM_RANGE'] = oscar;
    mike = report[mike];
    mike = tango.bind(entity)(mike);
    mike = mike.DEFAULT_RANGES;
    zulu['DEFAULT_RANGES'] = mike;
    return entity;
})();