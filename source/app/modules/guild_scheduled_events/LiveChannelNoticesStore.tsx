// app/modules/guild_scheduled_events/LiveChannelNoticesStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.GuildScheduledEventStatus;
    var _closure1_slot5 = michal;
    michal = {};
    option = new Array(0);
    michal['hiddenEventsAndStages'] = option;
    var _closure1_slot6 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: LiveChannelNoticesStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot7;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = argFoo;
                tangon = null;
                entity = tangon != michal;
                if(!entity) { _fun00006_ip = 22; continue _fun00005 }
 12:
                zuuluu = michal.hiddenEventsAndStages;
                entity = tangon != zuuluu;
 22:
                if(!entity) { _fun00006_ip = 32; continue _fun00005 }
 25:
                _closure1_slot6 = michal;
 32:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'isLiveChannelNoticeHidden';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                golfie = entity.eventId;
                option = entity.stageId;
                michal = null;
                zuuluu = michal == option;
                if(zuuluu) { _fun00008_ip = 74; continue _fun00007 }
 24:
                entity = _closure1_slot6;
                report = entity.hiddenEventsAndStages;
                tangon = report.includes;
                entity = global;
                entity = entity.HermesInternal;
                oscard = entity.concat;
                entity = 'stage-';
                entity = oscard.bind(entity)(option);
                entity = tangon.bind(report)(entity);
                zuuluu = !entity;
 74:
                entity = !zuuluu;
                if(!zuuluu) { _fun00008_ip = 137; continue _fun00007 }
 80:
                michal = michal != golfie;
                if(!michal) { _fun00008_ip = 134; continue _fun00007 }
 87:
                zuuluu = _closure1_slot6;
                report = zuuluu.hiddenEventsAndStages;
                tangon = report.includes;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                oscard = zuuluu.concat;
                zuuluu = 'event-';
                zuuluu = oscard.bind(zuuluu)(golfie);
                michal = tangon.bind(report)(zuuluu);
 134:
                entity = michal;
 137:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'LiveChannelNoticesStore';
    option['displayName'] = michal;
    michal = 'liveChannelNotices_v2';
    option['persistKey'] = michal;
    michal = 7;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: handleHideNotice
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            report = entity.eventId;
            oscard = entity.stageId;
            entity = null;
            if(!(entity == report)) { _fun00010_ip = 74; continue _fun00009 }
 21:
            if(!(entity != oscard)) { _fun00010_ip = 121; continue _fun00009 }
 25:
            entity = _closure1_slot6;
            zuuluu = entity.hiddenEventsAndStages;
            michal = zuuluu.push;
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            entity = 'stage-';
            entity = tangon.bind(entity)(oscard);
            entity = michal.bind(zuuluu)(entity);
            _fun00010_ip = 121; continue _fun00009;
 74:
            entity = _closure1_slot6;
            zuuluu = entity.hiddenEventsAndStages;
            michal = zuuluu.push;
            entity = global;
            entity = entity.HermesInternal;
            tangon = entity.concat;
            entity = 'event-';
            entity = tangon.bind(entity)(report);
            entity = michal.bind(zuuluu)(entity);
 121:
            entity = undefined;
            return entity;
        }
    };
    michal['LIVE_CHANNEL_NOTICE_HIDE'] = verify;
    verify = function(argFoo) { // Original name: handleEventUpdate
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            report = michal.guildScheduledEvent;
            tangon = report.id;
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'event-';
            oscard = zuuluu.bind(michal)(tangon);
            var _closure2_slot0 = oscard;
            zuuluu = _closure1_slot6;
            tangon = zuuluu.hiddenEventsAndStages;
            zuuluu = tangon.includes;
            zuuluu = zuuluu.bind(tangon)(oscard);
            zuuluu = !zuuluu;
            if(zuuluu) { _fun00012_ip = 117; continue _fun00011 }
 73:
            oscard = report.status;
            tangon = _closure1_slot5;
            tangon = tangon.CANCELED;
            tangon = oscard !== tangon;
            if(!tangon) { _fun00012_ip = 114; continue _fun00011 }
 95:
            oscard = report.status;
            report = _closure1_slot5;
            report = report.COMPLETED;
            tangon = oscard !== report;
 114:
            zuuluu = tangon;
 117:
            if(zuuluu) { _fun00012_ip = 153; continue _fun00011 }
 120:
            michal = _closure1_slot6;
            tangon = michal.hiddenEventsAndStages;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['hiddenEventsAndStages'] = entity;
 153:
            entity = undefined;
            return entity;
        }
    };
    michal['GUILD_SCHEDULED_EVENT_UPDATE'] = verify;
    verify = function(argFoo) { // Original name: handleEventDelete
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            michal = michal.guildScheduledEvent;
            tangon = michal.id;
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'event-';
            report = zuuluu.bind(michal)(tangon);
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot6;
            tangon = zuuluu.hiddenEventsAndStages;
            zuuluu = tangon.includes;
            zuuluu = zuuluu.bind(tangon)(report);
            if(!zuuluu) { _fun00014_ip = 103; continue _fun00013 }
 70:
            michal = _closure1_slot6;
            tangon = michal.hiddenEventsAndStages;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['hiddenEventsAndStages'] = entity;
 103:
            entity = undefined;
            return entity;
        }
    };
    michal['GUILD_SCHEDULED_EVENT_DELETE'] = verify;
    tangon = function(argFoo) { // Original name: handleStageUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            michal = michal.instance;
            tangon = michal.id;
            michal = global;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'stage-';
            report = zuuluu.bind(michal)(tangon);
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot6;
            tangon = zuuluu.hiddenEventsAndStages;
            zuuluu = tangon.includes;
            zuuluu = zuuluu.bind(tangon)(report);
            if(!zuuluu) { _fun00016_ip = 103; continue _fun00015 }
 70:
            michal = _closure1_slot6;
            tangon = michal.hiddenEventsAndStages;
            zuuluu = tangon.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(entity);
            michal['hiddenEventsAndStages'] = entity;
 103:
            entity = undefined;
            return entity;
        }
    };
    michal['STAGE_INSTANCE_DELETE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/LiveChannelNoticesStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();