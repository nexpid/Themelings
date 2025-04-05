// app/stores/LocalActivityStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot20 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    tangon = function() { // Original name: updateActivities
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = new Array(0);
            var _closure2_slot0 = zuuluu;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 15;
            tangon = tangon[entity];
            entity = undefined;
            tangon = oscard.bind(entity)(tangon);
            oscard = tangon.CustomStatusSetting;
            tangon = oscard.getSetting;
            verify = tangon.bind(oscard)();
            tangon = null;
            oscard = tangon != verify;
            if(!oscard) { _fun00004_ip = 186; continue _fun00003 }
 63:
            option = verify.expiresAtMs;
            golfie = '0';
            golfie = golfie === option;
            if(golfie) { _fun00004_ip = 183; continue _fun00003 }
 82:
            option = global;
            romeon = option.Date;
            yankee = option.Number;
            offset = verify.expiresAtMs;
            kiloes = yankee.bind(entity)(offset);
            yankee = romeon.prototype;
            yankee = Object.create(yankee, {constructor: {value: romeon}});
            sizing = yankee;
            offset = new sizing[romeon](kiloes, backup);
            yankee = offset instanceof Object ? offset : yankee;
            offset = yankee.getTime;
            offset = offset.bind(yankee)();
            option = option.Date;
            yankee = option.prototype;
            yankee = Object.create(yankee, {constructor: {value: option}});
            sizing = yankee;
            option = new sizing[option](kiloes);
            yankee = option instanceof Object ? option : yankee;
            option = yankee.getTime;
            option = option.bind(yankee)();
            offset = offset - option;
            option = 0;
            golfie = offset > option;
 183:
            oscard = golfie;
 186:
            if(!oscard) { _fun00004_ip = 230; continue _fun00003 }
 189:
            golfie = zuuluu.push;
            option = _closure1_slot0;
            offset = _closure1_slot2;
            oscard = 16;
            oscard = offset[oscard];
            option = option.bind(entity)(oscard);
            oscard = option.getActivityFromCustomStatus;
            oscard = oscard.bind(option)(verify);
            oscard = golfie.bind(zuuluu)(oscard);
 230:
            golfie = _closure1_slot11;
            oscard = golfie.getActivities;
            backup = oscard.bind(golfie)();
            golfie = zuuluu.push;
            oscard = new Array(0);
            foxtra = 0;
            kiloes = oscard;
            option = arraySpread(kiloes, backup, foxtra);
            kiloes = golfie;
            backup = oscard;
            foxtra = zuuluu;
            oscard = apply(kiloes, backup, foxtra);
            golfie = _closure1_slot15;
            oscard = golfie.getStream;
            option = oscard.bind(golfie)();
            if(!(tangon != option)) { _fun00004_ip = 331; continue _fun00003 }
 295:
            golfie = zuuluu.push;
            oscard = {};
            verify = _closure1_slot17;
            verify = verify.STREAMING;
            oscard['type'] = verify;
            kiloes = oscard;
            backup = option;
            option = copyDataProperties(kiloes, backup);
            oscard = golfie.bind(zuuluu)(oscard);
 331:
            oscard = global;
            oscard = oscard.Set;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            sizing = golfie;
            oscard = new sizing[oscard](kiloes);
            verify = oscard instanceof Object ? oscard : golfie;
            var _closure2_slot1 = verify;
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            oscard = 17;
            oscard = option[oscard];
            option = golfie.bind(entity)(oscard);
            golfie = option.forEach;
            oscard = _closure1_slot19;
            report = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    golfie = argFoo;
                    michal = golfie[Symbol.iterator];
                    golfie = michal().next;
                    tangon = undefined;
                    zuuluu = undefined;
                    report = undefined;
                    option = golfie().value;
                    verify = michal;
                    verify = verify === tangon;
                    zuuluu = verify;
                    if(verify) { _fun00006_ip = 32; continue _fun00005 }
 29:
                    report = option;
 32:
                    report = undefined;
                    option = zuuluu;
                    if(option) { _fun00006_ip = 60; continue _fun00005 }
 40:
                    golfie = golfie().value;
                    option = michal;
                    option = option === tangon;
                    zuuluu = option;
                    if(option) { _fun00006_ip = 60; continue _fun00005 }
 57:
                    report = golfie;
 60:
                    oscard = report;
                    report = zuuluu;
                    if(report) { _fun00006_ip = 72; continue _fun00005 }
 69:
                    michal.return();
 72:
                    report = oscard;
                    golfie = report.application_id;
                    report = null;
                    if(!(report != golfie)) { _fun00006_ip = 126; continue _fun00005 }
 87:
                    verify = _closure2_slot1;
                    option = verify.add;
                    golfie = oscard;
                    oscard = golfie.name;
                    oscard = option.bind(verify)(oscard);
                    oscard = _closure2_slot0;
                    report = oscard.push;
                    report = report.bind(oscard)(golfie);
 126:
                    return tangon;
 128:
                    CatchBlockStart(arg_register=0);
                    if(zuuluu) { _fun00006_ip = 136; continue _fun00005 }
 133:
                    michal.return();
 136:
                    throw entity;
                }
            };
            report = golfie.bind(option)(oscard, report);
            oscard = _closure1_slot10;
            report = oscard.getVisibleGame;
            option = report.bind(oscard)();
            oscard = tangon != option;
            if(!oscard) { _fun00004_ip = 433; continue _fun00003 }
 424:
            report = option.name;
            oscard = tangon != report;
 433:
            if(!oscard) { _fun00004_ip = 451; continue _fun00003 }
 436:
            golfie = verify.has;
            report = option.name;
            oscard = golfie.bind(verify)(report);
 451:
            golfie = tangon != option;
            if(!golfie) { _fun00004_ip = 464; continue _fun00003 }
 458:
            golfie = option.isLauncher;
 464:
            verify = _closure1_slot14;
            report = verify.getCurrentUserActiveStream;
            verify = report.bind(verify)();
            report = tangon == option;
            if(report) { _fun00004_ip = 494; continue _fun00003 }
 485:
            offset = option.name;
            report = tangon == offset;
 494:
            if(report) { _fun00004_ip = 513; continue _fun00003 }
 497:
            if(oscard) { _fun00004_ip = 510; continue _fun00003 }
 500:
            if(!golfie) { _fun00004_ip = 507; continue _fun00003 }
 503:
            golfie = tangon == verify;
 507:
            oscard = golfie;
 510:
            report = oscard;
 513:
            if(report) { _fun00004_ip = 618; continue _fun00003 }
 516:
            oscard = zuuluu.push;
            report = {};
            golfie = _closure1_slot17;
            golfie = golfie.PLAYING;
            report['type'] = golfie;
            golfie = option.name;
            report['name'] = golfie;
            golfie = option.id;
            if(!(tangon == golfie)) { _fun00004_ip = 592; continue _fun00003 }
 555:
            yankee = _closure1_slot16;
            offset = yankee.getGameByName;
            verify = option.name;
            offset = offset.bind(yankee)(verify);
            yankee = tangon == offset;
            verify = undefined;
            if(yankee) { _fun00004_ip = 589; continue _fun00003 }
 584:
            verify = offset.id;
 589:
            golfie = verify;
 592:
            report['application_id'] = golfie;
            golfie = {};
            option = option.start;
            golfie['start'] = option;
            report['timestamps'] = golfie;
            report = oscard.bind(zuuluu)(report);
 618:
            oscard = _closure1_slot12;
            report = oscard.getActivity;
            oscard = report.bind(oscard)();
            if(!(tangon != oscard)) { _fun00004_ip = 672; continue _fun00003 }
 636:
            report = zuuluu.push;
            tangon = {};
            golfie = _closure1_slot17;
            golfie = golfie.LISTENING;
            tangon['type'] = golfie;
            kiloes = tangon;
            backup = oscard;
            oscard = copyDataProperties(kiloes, backup);
            tangon = report.bind(zuuluu)(tangon);
 672:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 18;
            tangon = oscard[tangon];
            report = report.bind(entity)(tangon);
            tangon = _closure1_slot18;
            tangon = report.bind(entity)(tangon, zuuluu);
            if(tangon) { _fun00004_ip = 709; continue _fun00003 }
 705:
            _closure1_slot18 = zuuluu;
 709:
            return entity;
        }
    };
    var _closure1_slot21 = tangon;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot11 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot12 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot13 = michal;
    michal = 11;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot14 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot15 = michal;
    michal = 13;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot16 = michal;
    michal = 14;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.ActivityTypes;
    var _closure1_slot17 = michal;
    michal = new Array(0);
    var _closure1_slot18 = michal;
    michal = {};
    var _closure1_slot19 = michal;
    michal = 19;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: LocalActivityStore
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot4;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot7;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot6;
                entity = _closure1_slot20;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00008_ip = 69; continue _fun00007 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00008_ip = 105; continue _fun00007;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            offset = tangon.waitFor;
            output = _closure1_slot10;
            sizing = _closure1_slot9;
            kiloes = _closure1_slot15;
            backup = _closure1_slot14;
            foxtra = _closure1_slot12;
            romeon = _closure1_slot13;
            yankee = _closure1_slot16;
            result = tangon;
            michal = result[offset](output, sizing, kiloes, backup, foxtra, romeon, yankee, offset);
            zuuluu = tangon.syncWith;
            entity = _closure1_slot11;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot21;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'getActivities';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot18;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getPrimaryActivity';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot18;
            entity = 0;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getApplicationActivity';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = zuuluu.findActivity;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.application_id;
                entity = _closure3_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getCustomStatusActivity';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.findActivity;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.type;
                entity = _closure1_slot17;
                entity = entity.CUSTOM_STATUS;
                entity = michal === entity;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'findActivity';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot18;
            michal = zuuluu.find;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getApplicationActivities';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot19;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getActivityForPID';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                offset = argFoo;
                entity = global;
                zuuluu = entity.Object;
                michal = zuuluu.values;
                entity = _closure1_slot19;
                option = michal.bind(zuuluu)(entity);
                entity = option.length;
                golfie = 0;
                entity = golfie < entity;
                oscard = undefined;
                report = 2;
                tangon = 1;
                zuuluu = 0;
                if(!entity) { _fun00010_ip = 90; continue _fun00009 }
 52:
                michal = option[zuuluu];
                entity = _closure1_slot3;
                entity = entity.bind(oscard)(michal, report);
                michal = entity[golfie];
                entity = entity[tangon];
                if(!(michal !== offset)) { _fun00010_ip = 94; continue _fun00009 }
 78:
                zuuluu = zuuluu + 1;
                michal = option.length;
                if(zuuluu < michal) { _fun00010_ip = 52; continue _fun00009 }
 90:
                michal = null;
                return michal;
 94:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'LocalActivityStore';
    option['displayName'] = michal;
    michal = 20;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    offset = function(argFoo) { // Original name: handleOverlayInitialize
        entity = argFoo;
        zuuluu = entity.localActivities;
        michal = {};
        tangon = michal;
        entity = copyDataProperties(tangon, zuuluu);
        _closure1_slot19 = michal;
        michal = _closure1_slot21;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['OVERLAY_INITIALIZE'] = offset;
    offset = function() { // Original name: handleStartSession
        michal = {};
        _closure1_slot19 = michal;
        michal = _closure1_slot21;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['START_SESSION'] = offset;
    offset = function(argFoo) { // Original name: handleLocalActivityUpdate
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            report = entity.socketId;
            golfie = entity.pid;
            oscard = entity.activity;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 18;
            zuuluu = zuuluu[entity];
            entity = undefined;
            option = tangon.bind(entity)(zuuluu);
            zuuluu = _closure1_slot19;
            tangon = zuuluu[report];
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            zuuluu = option.bind(entity)(tangon, zuuluu);
            if(zuuluu) { _fun00012_ip = 121; continue _fun00011 }
 75:
            zuuluu = null;
            if(!(zuuluu == oscard)) { _fun00012_ip = 91; continue _fun00011 }
 81:
            zuuluu = _closure1_slot19;
            zuuluu = delete zuuluu[report];
            _fun00012_ip = 111; continue _fun00011;
 91:
            tangon = _closure1_slot19;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            tangon[report] = zuuluu;
 111:
            michal = _closure1_slot21;
            michal = michal.bind(entity)();
            return entity;
 121:
            entity = false;
            return entity;
        }
    };
    michal['LOCAL_ACTIVITY_UPDATE'] = offset;
    verify = function(argFoo) { // Original name: handleRPCAppDisconnected
        entity = argFoo;
        zuuluu = entity.socketId;
        michal = _closure1_slot19;
        michal = delete michal[zuuluu];
        michal = _closure1_slot21;
        entity = undefined;
        michal = michal.bind(entity)();
        return entity;
    };
    michal['RPC_APP_DISCONNECTED'] = verify;
    michal['RUNNING_GAMES_CHANGE'] = tangon;
    michal['LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS'] = tangon;
    michal['SPOTIFY_PLAYER_STATE'] = tangon;
    michal['SPOTIFY_PLAYER_PLAY'] = tangon;
    michal['STREAMING_UPDATE'] = tangon;
    michal['USER_CONNECTIONS_UPDATE'] = tangon;
    michal['STREAM_START'] = tangon;
    michal['STREAM_STOP'] = tangon;
    michal['USER_SETTINGS_PROTO_UPDATE'] = tangon;
    michal['EMBEDDED_ACTIVITY_CLOSE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 21;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/LocalActivityStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();