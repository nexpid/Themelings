// app/modules/guild_scheduled_events/LiveChannelNoticesStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun115571: for(var _fun115571_ip = 0; ; ) switch(_fun115571_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun115571_ip = 51; continue _fun115571 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun115571_ip = 92; continue _fun115571;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun115571_ip = 71; continue _fun115571 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun115572: for(var _fun115572_ip = 0; ; ) switch(_fun115572_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 72: // try_end0
            _fun115572_ip = 76; continue _fun115572;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.GuildScheduledEventStatus;
    var _closure1_slot5 = mike;
    mike = {};
    options = new Array(0);
    mike['hiddenEventsAndStages'] = options;
    var _closure1_slot6 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: LiveChannelNoticesStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun115577: for(var _fun115577_ip = 0; ; ) switch(_fun115577_ip) {
 0:
                mike = argFoo;
                tango = null;
                entity = tango != mike;
                if(!entity) { _fun115577_ip = 22; continue _fun115577 }
 12:
                zulu = mike.hiddenEventsAndStages;
                entity = tango != zulu;
 22:
                if(!entity) { _fun115577_ip = 32; continue _fun115577 }
 25:
                _closure1_slot6 = mike;
 32:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'isLiveChannelNoticeHidden';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun115578: for(var _fun115578_ip = 0; ; ) switch(_fun115578_ip) {
 0:
                entity = argFoo;
                golf = entity.eventId;
                options = entity.stageId;
                mike = null;
                zulu = mike == options;
                if(zulu) { _fun115578_ip = 74; continue _fun115578 }
 24:
                entity = _closure1_slot6;
                report = entity.hiddenEventsAndStages;
                tango = report.includes;
                entity = global;
                entity = entity.HermesInternal;
                oscar = entity.concat;
                entity = 'stage-';
                entity = oscar.bind(entity)(options);
                entity = tango.bind(report)(entity);
                zulu = !entity;
 74:
                entity = !zulu;
                if(!zulu) { _fun115578_ip = 137; continue _fun115578 }
 80:
                mike = mike != golf;
                if(!mike) { _fun115578_ip = 134; continue _fun115578 }
 87:
                zulu = _closure1_slot6;
                report = zulu.hiddenEventsAndStages;
                tango = report.includes;
                zulu = global;
                zulu = zulu.HermesInternal;
                oscar = zulu.concat;
                zulu = 'event-';
                zulu = oscar.bind(zulu)(golf);
                mike = tango.bind(report)(zulu);
 134:
                entity = mike;
 137:
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'LiveChannelNoticesStore';
    options['displayName'] = mike;
    mike = 'liveChannelNotices_v2';
    options['persistKey'] = mike;
    mike = 7;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleHideNotice
        _fun115580: for(var _fun115580_ip = 0; ; ) switch(_fun115580_ip) {
 0:
            entity = argFoo;
            report = entity.eventId;
            oscar = entity.stageId;
            entity = null;
            if(!(entity == report)) { _fun115580_ip = 74; continue _fun115580 }
 21:
            if(!(entity != oscar)) { _fun115580_ip = 121; continue _fun115580 }
 25:
            entity = _closure1_slot6;
            zulu = entity.hiddenEventsAndStages;
            mike = zulu.push;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            entity = 'stage-';
            entity = tango.bind(entity)(oscar);
            entity = mike.bind(zulu)(entity);
            _fun115580_ip = 121; continue _fun115580;
 74:
            entity = _closure1_slot6;
            zulu = entity.hiddenEventsAndStages;
            mike = zulu.push;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            entity = 'event-';
            entity = tango.bind(entity)(report);
            entity = mike.bind(zulu)(entity);
 121:
            entity = undefined;
            return entity;
        }
    };
    mike['LIVE_CHANNEL_NOTICE_HIDE'] = verify;
    verify = function(argFoo) { // Original name: handleEventUpdate
        _fun115581: for(var _fun115581_ip = 0; ; ) switch(_fun115581_ip) {
 0:
            mike = argFoo;
            report = mike.guildScheduledEvent;
            tango = report.id;
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'event-';
            oscar = zulu.bind(mike)(tango);
            var _closure2_slot0 = oscar;
            zulu = _closure1_slot6;
            tango = zulu.hiddenEventsAndStages;
            zulu = tango.includes;
            zulu = zulu.bind(tango)(oscar);
            zulu = !zulu;
            if(zulu) { _fun115581_ip = 117; continue _fun115581 }
 73:
            oscar = report.status;
            tango = _closure1_slot5;
            tango = tango.CANCELED;
            tango = oscar !== tango;
            if(!tango) { _fun115581_ip = 114; continue _fun115581 }
 95:
            oscar = report.status;
            report = _closure1_slot5;
            report = report.COMPLETED;
            tango = oscar !== report;
 114:
            zulu = tango;
 117:
            if(zulu) { _fun115581_ip = 153; continue _fun115581 }
 120:
            mike = _closure1_slot6;
            tango = mike.hiddenEventsAndStages;
            zulu = tango.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['hiddenEventsAndStages'] = entity;
 153:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_SCHEDULED_EVENT_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleEventDelete
        _fun115583: for(var _fun115583_ip = 0; ; ) switch(_fun115583_ip) {
 0:
            mike = argFoo;
            mike = mike.guildScheduledEvent;
            tango = mike.id;
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'event-';
            report = zulu.bind(mike)(tango);
            var _closure2_slot0 = report;
            zulu = _closure1_slot6;
            tango = zulu.hiddenEventsAndStages;
            zulu = tango.includes;
            zulu = zulu.bind(tango)(report);
            if(!zulu) { _fun115583_ip = 103; continue _fun115583 }
 70:
            mike = _closure1_slot6;
            tango = mike.hiddenEventsAndStages;
            zulu = tango.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['hiddenEventsAndStages'] = entity;
 103:
            entity = undefined;
            return entity;
        }
    };
    mike['GUILD_SCHEDULED_EVENT_DELETE'] = verify;
    tango = function(argFoo) { // Original name: handleStageUpdate
        _fun115585: for(var _fun115585_ip = 0; ; ) switch(_fun115585_ip) {
 0:
            mike = argFoo;
            mike = mike.instance;
            tango = mike.id;
            mike = global;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'stage-';
            report = zulu.bind(mike)(tango);
            var _closure2_slot0 = report;
            zulu = _closure1_slot6;
            tango = zulu.hiddenEventsAndStages;
            zulu = tango.includes;
            zulu = zulu.bind(tango)(report);
            if(!zulu) { _fun115585_ip = 103; continue _fun115585 }
 70:
            mike = _closure1_slot6;
            tango = mike.hiddenEventsAndStages;
            zulu = tango.filter;
            entity = function(argFoo) {
                mike = _closure2_slot0;
                entity = argFoo;
                entity = entity !== mike;
                return entity;
            };
            entity = zulu.bind(tango)(entity);
            mike['hiddenEventsAndStages'] = entity;
 103:
            entity = undefined;
            return entity;
        }
    };
    mike['STAGE_INSTANCE_DELETE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_scheduled_events/LiveChannelNoticesStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();