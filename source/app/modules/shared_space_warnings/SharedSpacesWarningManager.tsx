// app/modules/shared_space_warnings/SharedSpacesWarningManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: handleChannelSelect
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscard = entity.channelId;
            option = null;
            if(!(option != oscard)) { _fun00004_ip = 244; continue _fun00003 }
 19:
            tangon = _closure1_slot7;
            michal = tangon.getChannel;
            michal = michal.bind(tangon)(oscard);
            if(!(option != michal)) { _fun00004_ip = 244; continue _fun00003 }
 43:
            tangon = michal.isGroupDM;
            tangon = tangon.bind(michal)();
            if(!tangon) { _fun00004_ip = 244; continue _fun00003 }
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
            golfie = 0;
            zuuluu = zuuluu > golfie;
            if(zuuluu) { _fun00004_ip = 128; continue _fun00003 }
 119:
            verify = tangon.length;
            zuuluu = verify > golfie;
 128:
            if(!zuuluu) { _fun00004_ip = 244; continue _fun00003 }
 131:
            michal = michal.blockedUserWarningDismissed;
            if(michal) { _fun00004_ip = 192; continue _fun00003 }
 140:
            verify = _closure1_slot10;
            zuuluu = undefined;
            zuuluu = verify.bind(zuuluu)(oscard);
            option = option != zuuluu;
            golfie = 0;
            if(!option) { _fun00004_ip = 163; continue _fun00003 }
 160:
            golfie = zuuluu;
 163:
            zuuluu = global;
            option = zuuluu.Date;
            zuuluu = option.now;
            option = zuuluu.bind(option)();
            zuuluu = _closure1_slot16;
            zuuluu = option - zuuluu;
            michal = golfie > zuuluu;
 192:
            if(michal) { _fun00004_ip = 244; continue _fun00003 }
 195:
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
 244:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: handleAppStateChanged
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
            if(!(tangon === zuuluu)) { _fun00006_ip = 293; continue _fun00005 }
 52:
            tangon = _closure1_slot8;
            zuuluu = tangon.getChannelId;
            oscard = zuuluu.bind(tangon)();
            zuuluu = null;
            if(!(zuuluu == oscard)) { _fun00006_ip = 85; continue _fun00005 }
 72:
            zuuluu = _closure1_slot14;
            zuuluu = zuuluu.bind(entity)();
            _fun00006_ip = 293; continue _fun00005;
 85:
            tangon = _closure1_slot15;
            zuuluu = tangon.getBlockedUsersForVoiceChannel;
            option = zuuluu.bind(tangon)(oscard);
            tangon = _closure1_slot15;
            zuuluu = tangon.getIgnoredUsersForVoiceChannel;
            verify = zuuluu.bind(tangon)(oscard);
            zuuluu = option.size;
            golfie = 0;
            if(!(!(zuuluu > golfie))) { _fun00006_ip = 138; continue _fun00005 }
 126:
            zuuluu = verify.size;
            if(!(zuuluu > golfie)) { _fun00006_ip = 285; continue _fun00005 }
 138:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.bind(entity)();
            if(!zuuluu) { _fun00006_ip = 285; continue _fun00005 }
 152:
            tangon = _closure1_slot23;
            zuuluu = global;
            offset = zuuluu.Set;
            zuuluu = new Array(0);
            foxtra = zuuluu;
            romeon = option;
            yankee = 0;
            yankee = arraySpread(foxtra, romeon, yankee);
            foxtra = zuuluu;
            romeon = verify;
            report = arraySpread(foxtra, romeon, yankee);
            report = offset.prototype;
            report = Object.create(report, {constructor: {value: offset}});
            backup = report;
            foxtra = zuuluu;
            zuuluu = new backup[offset](foxtra, romeon);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            zuuluu = tangon.bind(entity)(zuuluu);
            if(zuuluu) { _fun00006_ip = 285; continue _fun00005 }
 221:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 13;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.showVoiceChannelBlockedUserWarning;
            zuuluu = new Array(0);
            foxtra = zuuluu;
            romeon = option;
            yankee = 0;
            yankee = arraySpread(foxtra, romeon, yankee);
            foxtra = zuuluu;
            romeon = verify;
            option = arraySpread(foxtra, romeon, yankee);
            zuuluu = zuuluu[golfie];
            zuuluu = tangon.bind(report)(oscard, zuuluu);
            _fun00006_ip = 293; continue _fun00005;
 285:
            michal = _closure1_slot14;
            michal = michal.bind(entity)();
 293:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function() { // Original name: isGlobalDismissTimestampInCooldown
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot12;
            michal = undefined;
            zuuluu = zuuluu.bind(michal)();
            michal = null;
            tangon = michal != zuuluu;
            michal = 0;
            if(!tangon) { _fun00008_ip = 27; continue _fun00007 }
 24:
            michal = zuuluu;
 27:
            zuuluu = global;
            tangon = zuuluu.Date;
            zuuluu = tangon.now;
            zuuluu = zuuluu.bind(tangon)();
            entity = _closure1_slot18;
            entity = zuuluu - entity;
            entity = michal > entity;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    tangon = function(argFoo) { // Original name: voiceBlockedWarningInCooldownForUsers
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = _closure1_slot22;
            entity = undefined;
            entity = michal.bind(entity)();
            if(entity) { _fun00010_ip = 57; continue _fun00009 }
 16:
            michal = global;
            tangon = michal.Array;
            zuuluu = tangon.from;
            michal = argFoo;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.every;
            michal = function(argFoo) {
                tangon = _closure1_slot24;
                zuuluu = undefined;
                michal = argFoo;
                entity = true;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 57:
            return entity;
        }
    };
    var _closure1_slot23 = tangon;
    michal = function(argFoo) { // Original name: userBlockedWarningInCooldown
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = arguments[1];
            report = undefined;
            if(!(entity === report)) { _fun00012_ip = 11; continue _fun00011 }
 9:
            entity = false;
 11:
            if(entity) { _fun00012_ip = 28; continue _fun00011 }
 14:
            michal = _closure1_slot22;
            michal = michal.bind(report)();
            entity = !michal;
 28:
            entity = !entity;
            if(entity) { _fun00012_ip = 92; continue _fun00011 }
 34:
            tangon = _closure1_slot11;
            zuuluu = argFoo;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = null;
            report = zuuluu != tangon;
            zuuluu = 0;
            if(!report) { _fun00012_ip = 63; continue _fun00011 }
 60:
            zuuluu = tangon;
 63:
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            tangon = tangon.bind(report)();
            michal = _closure1_slot17;
            michal = tangon - michal;
            entity = zuuluu > michal;
 92:
            return entity;
        }
    };
    var _closure1_slot24 = michal;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot2 = oscard;
    offset = 1;
    oscard = option[offset];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    romeon = 2;
    oscard = option[romeon];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    foxtra = 3;
    oscard = option[foxtra];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot9 = oscard;
    oscard = 8;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    yankee = oscard.getChannelDismissTimestamp;
    var _closure1_slot10 = yankee;
    yankee = oscard.getUserDismissTimestamp;
    var _closure1_slot11 = yankee;
    yankee = oscard.getGlobalDismissTimestamp;
    var _closure1_slot12 = yankee;
    yankee = oscard.isBlockedWarningQueued;
    var _closure1_slot13 = yankee;
    oscard = oscard.dequeueBlockWarning;
    var _closure1_slot14 = oscard;
    oscard = 9;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot15 = oscard;
    oscard = 10;
    yankee = option[oscard];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.DAY;
    yankee = foxtra * yankee;
    var _closure1_slot16 = yankee;
    yankee = option[oscard];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.Millis;
    yankee = yankee.DAY;
    yankee = romeon * yankee;
    var _closure1_slot17 = yankee;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.Millis;
    oscard = oscard.HOUR;
    oscard = offset * oscard;
    var _closure1_slot18 = oscard;
    oscard = 14;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    report = function(argFoo) {
        tangon = function(argFoo) { // Original name: SharedSpacesWarningManager
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                golfie = _closure1_slot2;
                michal = _closure2_slot0;
                tangon = undefined;
                golfie = golfie.bind(tangon)(report, michal);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot5;
                verify = entity.bind(tangon)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot19;
                entity = entity.bind(tangon)();
                if(entity) { _fun00014_ip = 84; continue _fun00013 }
 71:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00014_ip = 118; continue _fun00013;
 84:
                oscard = global;
                option = oscard.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 118:
                entity = michal.bind(tangon)(report, entity);
                michal = {};
                tangon = _closure1_slot20;
                michal['CHANNEL_SELECT'] = tangon;
                zuuluu = _closure1_slot21;
                michal['APP_STATE_UPDATE'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
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
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                tangon = argBar;
                zuuluu = _closure1_slot8;
                michal = zuuluu.getChannelId;
                zuuluu = michal.bind(zuuluu)();
                if(!(oscard === zuuluu)) { _fun00016_ip = 93; continue _fun00015 }
 27:
                report = _closure1_slot7;
                michal = report.getChannel;
                report = michal.bind(report)(oscard);
                michal = null;
                if(!(michal != report)) { _fun00016_ip = 93; continue _fun00015 }
 47:
                michal = _closure1_slot24;
                report = undefined;
                michal = michal.bind(report)(tangon);
                if(michal) { _fun00016_ip = 93; continue _fun00015 }
 61:
                michal = _closure1_slot0;
                oscard = _closure1_slot1;
                entity = 13;
                entity = oscard[entity];
                michal = michal.bind(report)(entity);
                entity = michal.showVoiceChannelBlockedUserWarning;
                entity = entity.bind(michal)(zuuluu, tangon);
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
    report = report.bind(entity)(oscard);
    oscard = report.prototype;
    oscard = Object.create(oscard, {constructor: {value: report}});
    output = oscard;
    report = new output[report](sizing);
    report = report instanceof Object ? report : oscard;
    oscard = 15;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/shared_space_warnings/SharedSpacesWarningManager.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['voiceBlockedWarningInCooldownForUsers'] = tangon;
    zuuluu['userBlockedWarningInCooldown'] = michal;
    return entity;
})();