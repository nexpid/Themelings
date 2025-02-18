// app/modules/threads/JoinedThreadsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot14;
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
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo) { // Original name: deleteGuildThreads
        entity = argFoo;
        var _closure2_slot0 = entity;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        entity = 8;
        tangon = tangon[entity];
        entity = undefined;
        report = report.bind(entity)(tangon);
        tangon = _closure1_slot9;
        report = report.bind(entity)(tangon);
        tangon = report.reject;
        michal = function(argFoo) {
            entity = argFoo;
            michal = entity.guildId;
            entity = _closure2_slot0;
            entity = michal === entity;
            return entity;
        };
        report = tangon.bind(report)(michal);
        tangon = report.keyBy;
        michal = 'threadId';
        tangon = tangon.bind(report)(michal);
        michal = tangon.value;
        michal = michal.bind(tangon)();
        _closure1_slot9 = michal;
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: storeThreads
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.threads;
            entity = null;
            if(!(entity != zuuluu)) { _fun00006_ip = 32; continue _fun00005 }
 15:
            michal = zuuluu.forEach;
            entity = _closure1_slot17;
            entity = michal.bind(zuuluu)(entity);
 32:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: storeThread
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot7;
            tangon = report.has;
            zuuluu = entity.type;
            zuuluu = tangon.bind(report)(zuuluu);
            if(!zuuluu) { _fun00008_ip = 40; continue _fun00007 }
 28:
            report = entity.member;
            tangon = null;
            zuuluu = tangon != report;
 40:
            if(!zuuluu) { _fun00008_ip = 190; continue _fun00007 }
 46:
            report = _closure1_slot9;
            tangon = entity.id;
            zuuluu = {};
            oscard = entity.id;
            zuuluu['threadId'] = oscard;
            oscard = entity.guild_id;
            zuuluu['guildId'] = oscard;
            oscard = entity.member;
            oscard = oscard.flags;
            zuuluu['flags'] = oscard;
            oscard = entity.member;
            oscard = oscard.muted;
            zuuluu['muted'] = oscard;
            oscard = entity.member;
            oscard = oscard.muteConfig;
            zuuluu['muteConfig'] = oscard;
            oscard = global;
            option = oscard.Date;
            oscard = entity.member;
            verify = oscard.joinTimestamp;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            offset = golfie;
            oscard = new offset[option](verify, option);
            oscard = oscard instanceof Object ? oscard : golfie;
            zuuluu['joinTimestamp'] = oscard;
            report[tangon] = zuuluu;
            zuuluu = _closure1_slot18;
            michal = entity.id;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 190:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: handleMutedChange
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            michal = _closure1_slot9;
            report = michal[zuuluu];
            oscard = _closure1_slot10;
            michal = oscard.clearTimer;
            michal = michal.bind(oscard)(zuuluu);
            oscard = report.muted;
            michal = true;
            if(!(michal !== oscard)) { _fun00010_ip = 98; continue _fun00009 }
 47:
            michal = global;
            golfie = michal.Set;
            yankee = _closure1_slot11;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            romeon = oscard;
            michal = new romeon[golfie](yankee, offset);
            oscard = michal instanceof Object ? michal : oscard;
            _closure1_slot11 = oscard;
            michal = oscard.delete;
            michal = michal.bind(oscard)(zuuluu);
            _fun00010_ip = 235; continue _fun00009;
 98:
            michal = global;
            option = michal.Set;
            yankee = _closure1_slot11;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            romeon = golfie;
            oscard = new romeon[option](yankee, offset);
            golfie = oscard instanceof Object ? oscard : golfie;
            _closure1_slot11 = golfie;
            oscard = golfie.add;
            oscard = oscard.bind(golfie)(zuuluu);
            golfie = _closure1_slot10;
            oscard = golfie.setTimer;
            report = report.muteConfig;
            tangon = function() {
                michal = _closure1_slot9;
                tangon = _closure2_slot0;
                zuuluu = michal[tangon];
                michal = false;
                zuuluu['muted'] = michal;
                michal = global;
                report = michal.Set;
                oscard = _closure1_slot11;
                zuuluu = report.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                golfie = zuuluu;
                michal = new golfie[report](oscard, report);
                zuuluu = michal instanceof Object ? michal : zuuluu;
                _closure1_slot11 = zuuluu;
                michal = zuuluu.delete;
                michal = michal.bind(zuuluu)(tangon);
                michal = _closure1_slot12;
                entity = michal.emitChange;
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
            };
            tangon = oscard.bind(golfie)(zuuluu, report, tangon);
            if(!tangon) { _fun00010_ip = 235; continue _fun00009 }
 175:
            tangon = _closure1_slot9;
            report = tangon[zuuluu];
            tangon = false;
            report['muted'] = tangon;
            report = michal.Set;
            yankee = _closure1_slot11;
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            romeon = tangon;
            michal = new romeon[report](yankee, offset);
            michal = michal instanceof Object ? michal : tangon;
            _closure1_slot11 = michal;
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
 235:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    golfie = function(argFoo) { // Original name: handleThreadListSyncOrSearchFinish
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.guildId;
            var _closure2_slot0 = michal;
            zuuluu = zuuluu.members;
            tangon = null;
            michal = tangon != michal;
            if(!michal) { _fun00012_ip = 33; continue _fun00011 }
 29:
            michal = tangon != zuuluu;
 33:
            if(!michal) { _fun00012_ip = 51; continue _fun00011 }
 36:
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                entity = argFoo;
                report = _closure1_slot9;
                tangon = entity.id;
                zuuluu = {};
                oscard = entity.id;
                zuuluu['threadId'] = oscard;
                oscard = _closure2_slot0;
                zuuluu['guildId'] = oscard;
                oscard = entity.flags;
                zuuluu['flags'] = oscard;
                oscard = entity.muted;
                zuuluu['muted'] = oscard;
                oscard = entity.muteConfig;
                zuuluu['muteConfig'] = oscard;
                oscard = global;
                option = oscard.Date;
                verify = entity.joinTimestamp;
                golfie = option.prototype;
                golfie = Object.create(golfie, {constructor: {value: option}});
                offset = golfie;
                oscard = new offset[option](verify, option);
                oscard = oscard instanceof Object ? oscard : golfie;
                zuuluu['joinTimestamp'] = oscard;
                report[tangon] = zuuluu;
                zuuluu = _closure1_slot18;
                michal = entity.id;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 51:
            entity = undefined;
            return entity;
        }
    };
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, verify);
    entity = 0;
    verify = oscard[entity];
    entity = undefined;
    verify = option.bind(entity)(verify);
    var _closure1_slot2 = verify;
    verify = 1;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot3 = verify;
    verify = 2;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 3;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 4;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 5;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = verify;
    verify = 6;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = {};
    var _closure1_slot9 = verify;
    verify = 7;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    kiloes = offset;
    verify = new kiloes[verify](backup);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot10 = verify;
    michal = michal.Set;
    verify = michal.prototype;
    verify = Object.create(verify, {constructor: {value: michal}});
    kiloes = verify;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : verify;
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    verify = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: JoinedThreadsStoreClass
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot13;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'hasJoined';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            michal = _closure1_slot9;
            entity = argFoo;
            entity = entity in michal;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'joinTimestamp';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure1_slot9;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00014_ip = 31; continue _fun00013 }
 25:
                entity = michal.joinTimestamp;
 31:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'flags';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot9;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00016_ip = 30; continue _fun00015 }
 25:
                entity = michal.flags;
 30:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getInitialOverlayState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            entity = _closure1_slot9;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getMuteConfig';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = _closure1_slot9;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00018_ip = 31; continue _fun00017 }
 25:
                entity = michal.muteConfig;
 31:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getMutedThreads';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot11;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'isMuted';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot11;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(verify);
    michal = 'JoinedThreadsStore';
    verify['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    backup = option.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleConnectionOpen
        zuuluu = _closure1_slot10;
        entity = zuuluu.reset;
        entity = entity.bind(zuuluu)();
        entity = global;
        entity = entity.Set;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        report = zuuluu;
        entity = new report[entity](tangon);
        entity = entity instanceof Object ? entity : zuuluu;
        _closure1_slot11 = entity;
        entity = {};
        _closure1_slot9 = entity;
        entity = argFoo;
        zuuluu = entity.guilds;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot16;
            entity = undefined;
            michal = argFoo;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['CONNECTION_OPEN'] = offset;
    offset = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        tangon = entity.joinedThreads;
        report = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 8;
        michal = michal[entity];
        entity = undefined;
        michal = report.bind(entity)(michal);
        report = michal.bind(entity)(tangon);
        tangon = report.map;
        michal = function(argFoo) {
            michal = argFoo;
            entity = {};
            oscard = entity;
            report = michal;
            zuuluu = copyDataProperties(oscard, report);
            zuuluu = global;
            tangon = zuuluu.Date;
            oscard = michal.joinTimestamp;
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            golfie = zuuluu;
            michal = new golfie[tangon](oscard, report);
            zuuluu = michal instanceof Object ? michal : zuuluu;
            michal = 'joinTimestamp';
            entity[michal] = zuuluu;
            return entity;
        };
        report = tangon.bind(report)(michal);
        tangon = report.keyBy;
        michal = 'threadId';
        tangon = tangon.bind(report)(michal);
        michal = tangon.value;
        michal = michal.bind(tangon)();
        _closure1_slot9 = michal;
        return entity;
    };
    michal['OVERLAY_INITIALIZE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildCreate
        entity = argFoo;
        zuuluu = entity.guild;
        report = _closure1_slot15;
        tangon = zuuluu.id;
        entity = undefined;
        tangon = report.bind(entity)(tangon);
        michal = _closure1_slot16;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['GUILD_CREATE'] = offset;
    offset = function(argFoo) { // Original name: handleGuildDelete
        entity = argFoo;
        entity = entity.guild;
        zuuluu = _closure1_slot15;
        michal = entity.id;
        entity = undefined;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    michal['GUILD_DELETE'] = offset;
    offset = function(argFoo) { // Original name: handleThreadCreate
        entity = argFoo;
        zuuluu = entity.channel;
        michal = _closure1_slot17;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['THREAD_CREATE'] = offset;
    michal['THREAD_LIST_SYNC'] = golfie;
    michal['SEARCH_FINISH'] = golfie;
    michal['MOD_VIEW_SEARCH_FINISH'] = golfie;
    michal['LOAD_THREADS_SUCCESS'] = golfie;
    michal['LOAD_ARCHIVED_THREADS_SUCCESS'] = golfie;
    golfie = function(argFoo) { // Original name: handleThreadDelete
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            entity = entity.channel;
            tangon = entity.id;
            michal = _closure1_slot9;
            michal = tangon in michal;
            if(michal) { _fun00020_ip = 31; continue _fun00019 }
 27:
            michal = false;
            return michal;
 31:
            michal = {};
            report = _closure1_slot9;
            oscard = michal;
            tangon = copyDataProperties(oscard, report);
            _closure1_slot9 = michal;
            entity = entity.id;
            entity = delete michal[entity];
            entity = undefined;
            return entity;
        }
    };
    michal['THREAD_DELETE'] = golfie;
    golfie = function(argFoo) { // Original name: handleThreadMemberUpdate
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot8;
            zuuluu = tangon.getId;
            tangon = zuuluu.bind(tangon)();
            zuuluu = entity.userId;
            if(!(tangon === zuuluu)) { _fun00022_ip = 154; continue _fun00021 }
 32:
            report = _closure1_slot9;
            tangon = entity.id;
            zuuluu = {};
            oscard = entity.id;
            zuuluu['threadId'] = oscard;
            oscard = entity.guildId;
            zuuluu['guildId'] = oscard;
            oscard = entity.flags;
            zuuluu['flags'] = oscard;
            oscard = entity.muted;
            zuuluu['muted'] = oscard;
            oscard = entity.muteConfig;
            zuuluu['muteConfig'] = oscard;
            oscard = global;
            option = oscard.Date;
            verify = entity.joinTimestamp;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            offset = golfie;
            oscard = new offset[option](verify, option);
            oscard = oscard instanceof Object ? oscard : golfie;
            zuuluu['joinTimestamp'] = oscard;
            report[tangon] = zuuluu;
            zuuluu = _closure1_slot18;
            michal = entity.id;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
 154:
            entity = false;
            return entity;
        }
    };
    michal['THREAD_MEMBER_UPDATE'] = golfie;
    golfie = function(argFoo) { // Original name: handleThreadMemberLocalUpdate
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            oscard = entity.id;
            michal = entity.userId;
            golfie = entity.guildId;
            zuuluu = entity.isJoining;
            report = _closure1_slot8;
            entity = report.getId;
            entity = entity.bind(report)();
            entity = entity === michal;
            if(!entity) { _fun00024_ip = 153; continue _fun00023 }
 48:
            michal = null;
            michal = michal !== golfie;
            if(!michal) { _fun00024_ip = 150; continue _fun00023 }
 57:
            report = _closure1_slot9;
            if(zuuluu) { _fun00024_ip = 70; continue _fun00023 }
 64:
            zuuluu = delete report[oscard];
            _fun00024_ip = 148; continue _fun00023;
 70:
            tangon = {};
            tangon['threadId'] = oscard;
            tangon['guildId'] = golfie;
            golfie = 0;
            tangon['flags'] = golfie;
            golfie = true;
            tangon['muted'] = golfie;
            golfie = {};
            option = undefined;
            golfie['end_time'] = option;
            tangon['muteConfig'] = golfie;
            golfie = global;
            golfie = golfie.Date;
            option = golfie.prototype;
            option = Object.create(option, {constructor: {value: golfie}});
            verify = option;
            golfie = new verify[golfie](option);
            golfie = golfie instanceof Object ? golfie : option;
            tangon['joinTimestamp'] = golfie;
            report[oscard] = tangon;
            zuuluu = tangon;
 148:
            michal = undefined;
 150:
            entity = michal;
 153:
            return entity;
        }
    };
    michal['THREAD_MEMBER_LOCAL_UPDATE'] = golfie;
    golfie = function(argFoo) { // Original name: handleThreadMembersUpdate
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            michal = false;
            var _closure2_slot1 = michal;
            golfie = zuuluu.removedMemberIds;
            michal = null;
            tangon = michal != golfie;
            if(!tangon) { _fun00026_ip = 57; continue _fun00025 }
 30:
            oscard = golfie.includes;
            option = _closure1_slot8;
            report = option.getId;
            report = report.bind(option)();
            tangon = oscard.bind(golfie)(report);
 57:
            if(!tangon) { _fun00026_ip = 76; continue _fun00025 }
 60:
            oscard = zuuluu.id;
            report = _closure1_slot9;
            tangon = oscard in report;
 76:
            if(!tangon) { _fun00026_ip = 114; continue _fun00025 }
 79:
            report = {};
            verify = _closure1_slot9;
            offset = report;
            oscard = copyDataProperties(offset, verify);
            _closure1_slot9 = report;
            tangon = zuuluu.id;
            tangon = delete report[tangon];
            tangon = true;
            _closure2_slot1 = tangon;
 114:
            tangon = zuuluu.addedMembers;
            if(!(michal != tangon)) { _fun00026_ip = 139; continue _fun00025 }
 124:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    golfie = argFoo;
                    michal = golfie.userId;
                    tangon = _closure1_slot8;
                    entity = tangon.getId;
                    entity = entity.bind(tangon)();
                    if(!(michal === entity)) { _fun00028_ip = 178; continue _fun00027 }
 32:
                    oscard = {};
                    offset = _closure1_slot9;
                    yankee = oscard;
                    entity = copyDataProperties(yankee, offset);
                    _closure1_slot9 = oscard;
                    entity = _closure2_slot0;
                    report = entity.id;
                    tangon = {};
                    option = entity.id;
                    tangon['threadId'] = option;
                    option = entity.guildId;
                    tangon['guildId'] = option;
                    option = golfie.flags;
                    tangon['flags'] = option;
                    option = golfie.muted;
                    tangon['muted'] = option;
                    option = golfie.muteConfig;
                    tangon['muteConfig'] = option;
                    option = global;
                    verify = option.Date;
                    yankee = golfie.joinTimestamp;
                    option = verify.prototype;
                    option = Object.create(option, {constructor: {value: verify}});
                    romeon = option;
                    golfie = new romeon[verify](yankee, offset);
                    golfie = golfie instanceof Object ? golfie : option;
                    tangon['joinTimestamp'] = golfie;
                    oscard[report] = tangon;
                    tangon = _closure1_slot18;
                    zuuluu = entity.id;
                    entity = undefined;
                    entity = tangon.bind(entity)(zuuluu);
                    entity = true;
                    _closure2_slot1 = entity;
 178:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 139:
            entity = _closure2_slot1;
            return entity;
        }
    };
    michal['THREAD_MEMBERS_UPDATE'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    kiloes = golfie;
    foxtra = michal;
    michal = new kiloes[verify](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot12 = michal;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/threads/JoinedThreadsStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();