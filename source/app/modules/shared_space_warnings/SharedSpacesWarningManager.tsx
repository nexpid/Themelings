// app/modules/shared_space_warnings/SharedSpacesWarningManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
            entity = _closure1_slot17;
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
    var _closure1_slot16 = entity;
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
            _closure1_slot17 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            oscard = entity.channelId;
            tangon = null;
            if(!(tangon != oscard)) { _fun00006_ip = 232; continue _fun00005 }
 19:
            report = _closure1_slot7;
            michal = report.getChannel;
            michal = michal.bind(report)(oscard);
            if(!(tangon != michal)) { _fun00006_ip = 232; continue _fun00005 }
 43:
            tangon = michal.isGroupDM;
            tangon = tangon.bind(michal)();
            if(!tangon) { _fun00006_ip = 232; continue _fun00005 }
 59:
            golfie = michal.recipients;
            report = golfie.filter;
            tangon = function(argFoo) {
                zuuluu = _closure1_slot9;
                michal = zuuluu.isBlocked;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            report = report.bind(golfie)(tangon);
            golfie = michal.recipients;
            tangon = golfie.filter;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot9;
                michal = zuuluu.isIgnored;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(golfie)(zuuluu);
            zuuluu = report.length;
            option = 0;
            zuuluu = zuuluu > option;
            if(zuuluu) { _fun00006_ip = 128; continue _fun00005 }
 119:
            golfie = tangon.length;
            zuuluu = golfie > option;
 128:
            if(!zuuluu) { _fun00006_ip = 232; continue _fun00005 }
 131:
            michal = michal.blockedUserWarningDismissed;
            if(michal) { _fun00006_ip = 180; continue _fun00005 }
 140:
            golfie = _closure1_slot10;
            zuuluu = undefined;
            golfie = golfie.bind(zuuluu)(oscard);
            zuuluu = global;
            option = zuuluu.Date;
            zuuluu = option.now;
            option = zuuluu.bind(option)();
            zuuluu = _closure1_slot15;
            zuuluu = option - zuuluu;
            michal = golfie > zuuluu;
 180:
            if(michal) { _fun00006_ip = 232; continue _fun00005 }
 183:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.showGdmBlockedUserModal;
            entity = {};
            entity['channelId'] = oscard;
            entity['blockedUserIds'] = report;
            entity['ignoredUserIds'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 232:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: handleAppStateChanged
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            tangon = entity.state;
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            zuuluu = zuuluu.AppStates;
            zuuluu = zuuluu.ACTIVE;
            if(!(tangon === zuuluu)) { _fun00008_ip = 230; continue _fun00007 }
 52:
            tangon = _closure1_slot8;
            zuuluu = tangon.getChannelId;
            oscard = zuuluu.bind(tangon)();
            zuuluu = null;
            if(!(zuuluu == oscard)) { _fun00008_ip = 85; continue _fun00007 }
 72:
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.bind(entity)();
            _fun00008_ip = 230; continue _fun00007;
 85:
            tangon = _closure1_slot13;
            zuuluu = tangon.getBlockedUsersForVoiceChannel;
            option = zuuluu.bind(tangon)(oscard);
            tangon = _closure1_slot13;
            zuuluu = tangon.getIgnoredUsersForVoiceChannel;
            verify = zuuluu.bind(tangon)(oscard);
            zuuluu = option.size;
            golfie = 0;
            if(!(!(zuuluu > golfie))) { _fun00008_ip = 135; continue _fun00007 }
 126:
            zuuluu = verify.size;
            if(!(zuuluu > golfie)) { _fun00008_ip = 222; continue _fun00007 }
 135:
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.bind(entity)();
            if(!zuuluu) { _fun00008_ip = 222; continue _fun00007 }
 146:
            zuuluu = _closure1_slot20;
            zuuluu = zuuluu.bind(entity)(oscard);
            if(zuuluu) { _fun00008_ip = 222; continue _fun00007 }
 158:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 13;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.showVoiceChannelBlockedUserWarning;
            zuuluu = new Array(0);
            romeon = zuuluu;
            yankee = option;
            offset = 0;
            offset = arraySpread(romeon, yankee, offset);
            romeon = zuuluu;
            yankee = verify;
            option = arraySpread(romeon, yankee, offset);
            zuuluu = zuuluu[golfie];
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            _fun00008_ip = 230; continue _fun00007;
 222:
            michal = _closure1_slot12;
            michal = michal.bind(entity)();
 230:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    michal = function(argFoo) { // Original name: voiceBlockedWarningInCooldown
        tangon = _closure1_slot10;
        zuuluu = undefined;
        michal = argFoo;
        michal = tangon.bind(zuuluu)(michal);
        zuuluu = global;
        tangon = zuuluu.Date;
        zuuluu = tangon.now;
        zuuluu = zuuluu.bind(tangon)();
        entity = _closure1_slot14;
        entity = zuuluu - entity;
        entity = michal > entity;
        return entity;
    };
    var _closure1_slot20 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    yankee = 1;
    report = golfie[yankee];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    verify = 3;
    report = golfie[verify];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 7;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    offset = report.getDismissTimestamp;
    var _closure1_slot10 = offset;
    offset = report.isBlockedWarningQueued;
    var _closure1_slot11 = offset;
    report = report.dequeueBlockWarning;
    var _closure1_slot12 = report;
    report = 9;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot13 = report;
    report = 10;
    offset = golfie[report];
    offset = option.bind(entity)(offset);
    offset = offset.Millis;
    offset = offset.HOUR;
    offset = yankee * offset;
    var _closure1_slot14 = offset;
    report = golfie[report];
    report = option.bind(entity)(report);
    report = report.Millis;
    report = report.DAY;
    report = verify * report;
    var _closure1_slot15 = report;
    report = 14;
    report = golfie[report];
    report = option.bind(entity)(report);
    tangon = function(argFoo) {
        tangon = function(argFoo) { // Original name: SharedSpacesWarningManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            entity = _closure1_slot2;
            report = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(oscard, report);
            michal = _closure1_slot16;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = michal.bind(tangon)(oscard, report, entity);
            michal = {};
            tangon = _closure1_slot18;
            michal['CHANNEL_SELECT'] = tangon;
            zuuluu = _closure1_slot19;
            michal['APP_STATE_UPDATE'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot6;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot3;
        report = {};
        oscard = 'handleBlockedOrIgnoredUserVoiceChannelJoin';
        report['key'] = oscard;
        entity = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                report = argFoo;
                zuuluu = _closure1_slot8;
                michal = zuuluu.getChannelId;
                tangon = michal.bind(zuuluu)();
                if(!(report === tangon)) { _fun00010_ip = 93; continue _fun00009 }
 24:
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                zuuluu = michal.bind(zuuluu)(report);
                michal = null;
                if(!(michal != zuuluu)) { _fun00010_ip = 93; continue _fun00009 }
 44:
                michal = _closure1_slot20;
                zuuluu = undefined;
                michal = michal.bind(zuuluu)(report);
                if(michal) { _fun00010_ip = 93; continue _fun00009 }
 58:
                michal = _closure1_slot0;
                report = _closure1_slot1;
                entity = 13;
                entity = report[entity];
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.showVoiceChannelBlockedUserWarning;
                entity = argBar;
                entity = michal.bind(zuuluu)(tangon, entity);
 93:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(report);
    report = tangon.prototype;
    report = Object.create(report, {constructor: {value: tangon}});
    kiloes = report;
    tangon = new kiloes[tangon](backup);
    tangon = tangon instanceof Object ? tangon : report;
    report = 15;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/shared_space_warnings/SharedSpacesWarningManager.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['voiceBlockedWarningInCooldown'] = michal;
    return entity;
})();