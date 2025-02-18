// app/modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
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
            entity = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    verify = function() { // Original name: init
        entity = {};
        _closure1_slot9 = entity;
        entity = {};
        _closure1_slot10 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot14 = verify;
    tangon = function(argFoo) { // Original name: handleRelationshipChange
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = entity.relationship;
            report = _closure1_slot8;
            zuuluu = report.getVoiceStateForUser;
            entity = michal.id;
            zuuluu = zuuluu.bind(report)(entity);
            oscard = null;
            entity = oscard != zuuluu;
            if(!entity) { _fun00006_ip = 50; continue _fun00005 }
 41:
            report = zuuluu.channelId;
            entity = oscard != report;
 50:
            if(!entity) { _fun00006_ip = 75; continue _fun00005 }
 53:
            report = _closure1_slot15;
            tangon = zuuluu.channelId;
            zuuluu = michal.id;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu);
 75:
            return entity;
        }
    };
    entity = function(argFoo, argBar) { // Original name: processUserInChannel
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            entity = global;
            golfie = entity.Set;
            zuuluu = _closure1_slot9;
            foxtra = zuuluu[report];
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            backup = oscard;
            zuuluu = new backup[golfie](foxtra, romeon);
            golfie = zuuluu instanceof Object ? zuuluu : oscard;
            oscard = _closure1_slot7;
            zuuluu = oscard.isBlocked;
            option = zuuluu.bind(oscard)(tangon);
            if(!option) { _fun00008_ip = 92; continue _fun00007 }
 63:
            zuuluu = golfie.has;
            zuuluu = zuuluu.bind(golfie)(tangon);
            if(zuuluu) { _fun00008_ip = 92; continue _fun00007 }
 76:
            zuuluu = golfie.add;
            zuuluu = zuuluu.bind(golfie)(tangon);
            offset = true;
            oscard = true;
            _fun00008_ip = 111; continue _fun00007;
 92:
            offset = false;
            oscard = false;
            if(option) { _fun00008_ip = 111; continue _fun00007 }
 99:
            option = golfie.delete;
            offset = option.bind(golfie)(tangon);
            oscard = false;
 111:
            zuuluu = golfie.size;
            option = 0;
            if(!(option === zuuluu)) { _fun00008_ip = 125; continue _fun00007 }
 122:
            if(offset) { _fun00008_ip = 138; continue _fun00007 }
 125:
            if(!offset) { _fun00008_ip = 146; continue _fun00007 }
 128:
            zuuluu = _closure1_slot9;
            zuuluu[report] = golfie;
            _fun00008_ip = 146; continue _fun00007;
 138:
            zuuluu = _closure1_slot9;
            zuuluu = delete zuuluu[report];
 146:
            golfie = entity.Set;
            entity = _closure1_slot10;
            foxtra = entity[report];
            zuuluu = golfie.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: golfie}});
            backup = zuuluu;
            entity = new backup[golfie](foxtra, romeon);
            golfie = entity instanceof Object ? entity : zuuluu;
            zuuluu = _closure1_slot7;
            entity = zuuluu.isIgnored;
            verify = entity.bind(zuuluu)(tangon);
            if(!verify) { _fun00008_ip = 227; continue _fun00007 }
 198:
            entity = golfie.has;
            entity = entity.bind(golfie)(tangon);
            if(entity) { _fun00008_ip = 227; continue _fun00007 }
 211:
            entity = golfie.add;
            entity = entity.bind(golfie)(tangon);
            entity = true;
            zuuluu = true;
            _fun00008_ip = 249; continue _fun00007;
 227:
            entity = offset;
            zuuluu = oscard;
            if(verify) { _fun00008_ip = 249; continue _fun00007 }
 236:
            verify = golfie.delete;
            entity = verify.bind(golfie)(tangon);
            zuuluu = oscard;
 249:
            oscard = golfie.size;
            if(!(option === oscard)) { _fun00008_ip = 261; continue _fun00007 }
 258:
            if(entity) { _fun00008_ip = 274; continue _fun00007 }
 261:
            if(!entity) { _fun00008_ip = 282; continue _fun00007 }
 264:
            oscard = _closure1_slot10;
            oscard[report] = golfie;
            _fun00008_ip = 282; continue _fun00007;
 274:
            oscard = _closure1_slot10;
            oscard = delete oscard[report];
 282:
            if(!zuuluu) { _fun00008_ip = 321; continue _fun00007 }
 285:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 7;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = oscard.bind(michal)(zuuluu);
            michal = zuuluu.handleBlockedOrIgnoredUserVoiceChannelJoin;
            michal = michal.bind(zuuluu)(report, tangon);
 321:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    michal = global;
    yankee = michal.Object;
    offset = yankee.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, golfie);
    entity = 0;
    golfie = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 1;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 3;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 4;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 5;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 6;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = {};
    var _closure1_slot9 = golfie;
    golfie = {};
    var _closure1_slot10 = golfie;
    michal = michal.Set;
    golfie = michal.prototype;
    golfie = Object.create(golfie, {constructor: {value: michal}});
    kiloes = golfie;
    michal = new kiloes[michal](backup);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot11 = michal;
    michal = 8;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: VoiceChannelBlockedUserStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot12;
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            zuuluu = tangon.waitFor;
            michal = _closure1_slot7;
            entity = _closure1_slot8;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getBlockedUsersForVoiceChannel';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure1_slot9;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00010_ip = 24; continue _fun00009 }
 20:
                entity = _closure1_slot11;
 24:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getIgnoredUsersForVoiceChannel';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure1_slot10;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00012_ip = 24; continue _fun00011 }
 20:
                entity = _closure1_slot11;
 24:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 9;
    michal = report[michal];
    backup = oscard.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN'] = verify;
    michal['LOGOUT'] = verify;
    verify = function() { // Original name: handleOverlayInitialize
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = _closure1_slot14;
            offset = undefined;
            entity = entity.bind(offset)();
            michal = _closure1_slot8;
            entity = michal.getAllVoiceStates;
            zuuluu = entity.bind(michal)();
            verify = global;
            michal = verify.Object;
            entity = michal.values;
            option = entity.bind(michal)(zuuluu);
            entity = option.length;
            golfie = 0;
            michal = golfie < entity;
            report = false;
            oscard = null;
            tangon = 0;
            zuuluu = undefined;
            entity = false;
            if(!michal) { _fun00014_ip = 196; continue _fun00013 }
 72:
            foxtra = option[tangon];
            romeon = verify.Object;
            michal = romeon.values;
            kiloes = michal.bind(romeon)(foxtra);
            michal = kiloes.length;
            michal = golfie < michal;
            backup = report;
            foxtra = 0;
            romeon = backup;
            if(!michal) { _fun00014_ip = 178; continue _fun00013 }
 112:
            sizing = kiloes[foxtra];
            michal = sizing.channelId;
            output = backup;
            if(!(oscard != michal)) { _fun00014_ip = 157; continue _fun00013 }
 128:
            echoed = _closure1_slot15;
            result = sizing.channelId;
            michal = sizing.userId;
            michal = echoed.bind(offset)(result, michal);
            if(michal) { _fun00014_ip = 154; continue _fun00013 }
 151:
            michal = backup;
 154:
            output = michal;
 157:
            foxtra = foxtra + 1;
            michal = kiloes.length;
            backup = output;
            romeon = backup;
            zuuluu = sizing;
            if(foxtra < michal) { _fun00014_ip = 112; continue _fun00013 }
 178:
            tangon = tangon + 1;
            michal = option.length;
            report = romeon;
            entity = report;
            if(tangon < michal) { _fun00014_ip = 72; continue _fun00013 }
 196:
            return entity;
        }
    };
    michal['OVERLAY_INITIALIZE'] = verify;
    option = function(argFoo) { // Original name: handleVoiceStateUpdates
        michal = argFoo;
        tangon = michal.voiceStates;
        michal = false;
        var _closure2_slot0 = michal;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                michal = entity.oldChannelId;
                zuuluu = null;
                if(!(zuuluu != michal)) { _fun00016_ip = 141; continue _fun00015 }
 18:
                report = _closure1_slot9;
                tangon = entity.oldChannelId;
                tangon = report[tangon];
                if(!(zuuluu != tangon)) { _fun00016_ip = 81; continue _fun00015 }
 39:
                report = _closure1_slot9;
                tangon = entity.oldChannelId;
                oscard = report[tangon];
                if(!(zuuluu != oscard)) { _fun00016_ip = 72; continue _fun00015 }
 57:
                report = oscard.delete;
                tangon = entity.userId;
                tangon = report.bind(oscard)(tangon);
 72:
                tangon = true;
                _closure2_slot0 = tangon;
 81:
                report = _closure1_slot10;
                tangon = entity.oldChannelId;
                tangon = report[tangon];
                if(!(zuuluu != tangon)) { _fun00016_ip = 141; continue _fun00015 }
 99:
                tangon = _closure1_slot10;
                michal = entity.oldChannelId;
                report = tangon[michal];
                if(!(zuuluu != report)) { _fun00016_ip = 132; continue _fun00015 }
 117:
                tangon = report.delete;
                michal = entity.userId;
                michal = tangon.bind(report)(michal);
 132:
                michal = true;
                _closure2_slot0 = michal;
 141:
                michal = entity.channelId;
                if(!(zuuluu != michal)) { _fun00016_ip = 192; continue _fun00015 }
 150:
                tangon = _closure1_slot15;
                zuuluu = entity.channelId;
                michal = entity.userId;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                if(michal) { _fun00016_ip = 185; continue _fun00015 }
 178:
                michal = _closure2_slot0;
 185:
                _closure2_slot0 = michal;
 192:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        entity = _closure2_slot0;
        return entity;
    };
    michal['VOICE_STATE_UPDATES'] = option;
    michal['RELATIONSHIP_ADD'] = tangon;
    michal['RELATIONSHIP_REMOVE'] = tangon;
    michal['RELATIONSHIP_UPDATE'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    kiloes = tangon;
    foxtra = michal;
    michal = new kiloes[golfie](backup, foxtra, romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 10;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/shared_space_warnings/VoiceChannelBlockedUserStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();