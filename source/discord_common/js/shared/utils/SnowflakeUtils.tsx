// discord_common/js/shared/utils/SnowflakeUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    oscard = function(argFoo) { // Original name: extractTimestamp
        entity = global;
        zuuluu = entity.Math;
        michal = zuuluu.floor;
        report = entity.Number;
        tangon = undefined;
        entity = argFoo;
        tangon = report.bind(tangon)(entity);
        entity = 4194304;
        entity = tangon / entity;
        michal = michal.bind(zuuluu)(entity);
        entity = _closure1_slot4;
        entity = michal + entity;
        return entity;
    };
    var _closure1_slot6 = oscard;
    report = function(argFoo) { // Original name: fromTimestamp
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot4;
            entity = argFoo;
            report = entity - zuuluu;
            entity = '0';
            zuuluu = 0;
            if(!(!(report <= zuuluu))) { _fun00002_ip = 77; continue _fun00001 }
 26:
            oscard = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 2;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = oscard.bind(tangon)(zuuluu);
            tangon = zuuluu.bind(tangon)(report);
            zuuluu = tangon.shiftLeft;
            michal = _closure1_slot5;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.toString;
            entity = michal.bind(zuuluu)();
 77:
            return entity;
        }
    };
    var _closure1_slot7 = report;
    entity = global;
    offset = entity.Object;
    option = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = verify[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = verify[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    golfie = 1420070400000.0;
    var _closure1_slot4 = golfie;
    michal = 22;
    var _closure1_slot5 = michal;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: SnowflakeSequence
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = 0;
            zuuluu['seq'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'next';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                zuuluu = michal.seq;
                entity = 4095;
                if(!(!(zuuluu > entity))) { _fun00004_ip = 39; continue _fun00003 }
 19:
                entity = michal.seq;
                entity = parseFloat(entity);
                zuuluu = entity + 1;
                michal['seq'] = zuuluu;
                return entity;
 39:
                entity = global;
                zuuluu = entity.Error;
                tangon = michal.seq;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = 'Snowflake sequence number overflow: ';
                report = michal.bind(entity)(tangon);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                oscard = michal;
                entity = new oscard[zuuluu](report, tangon);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(2);
        michal[0] = entity;
        entity = {};
        oscard = 'reset';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = 0;
            entity = this;
            entity['seq'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[1] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    option = 3;
    verify = verify[option];
    option = argBar;
    offset = option.bind(entity)(verify);
    verify = offset.fileFinishedImporting;
    option = '../discord_common/js/shared/utils/SnowflakeUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['DISCORD_EPOCH'] = golfie;
    golfie = 4095;
    zuuluu['MAX_SNOWFLAKE_SEQ'] = golfie;
    zuuluu['extractTimestamp'] = oscard;
    zuuluu['fromTimestamp'] = report;
    report = function(argFoo, argBar) { // Original name: fromTimestampWithSequence
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argBar;
            zuuluu = _closure1_slot4;
            michal = argFoo;
            oscard = michal - zuuluu;
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            michal = report[michal];
            report = undefined;
            zuuluu = zuuluu.bind(report)(michal);
            michal = 0;
            if(!(!(oscard <= michal))) { _fun00006_ip = 48; continue _fun00005 }
 45:
            michal = oscard;
 48:
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.shiftLeft;
            entity = _closure1_slot5;
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.add;
            entity = tangon.next;
            entity = entity.bind(tangon)();
            michal = michal.bind(zuuluu)(entity);
            entity = michal.toString;
            entity = entity.bind(michal)();
            return entity;
        }
    };
    zuuluu['fromTimestampWithSequence'] = report;
    report = function(argFoo) { // Original name: atPreviousMillisecond
        zuuluu = _closure1_slot7;
        tangon = _closure1_slot6;
        michal = undefined;
        entity = argFoo;
        tangon = tangon.bind(michal)(entity);
        entity = 1;
        entity = tangon - entity;
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['atPreviousMillisecond'] = report;
    report = function(argFoo) { // Original name: age
        entity = global;
        michal = entity.Date;
        entity = michal.now;
        michal = entity.bind(michal)();
        tangon = _closure1_slot6;
        zuuluu = undefined;
        entity = argFoo;
        entity = tangon.bind(zuuluu)(entity);
        entity = michal - entity;
        return entity;
    };
    zuuluu['age'] = report;
    report = function(argFoo, argBar) { // Original name: compare
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            verify = argFoo;
            option = argBar;
            entity = 0;
            if(!(verify !== option)) { _fun00008_ip = 108; continue _fun00007 }
 12:
            zuuluu = null;
            tangon = zuuluu == option;
            golfie = 1;
            michal = golfie;
            if(tangon) { _fun00008_ip = 105; continue _fun00007 }
 27:
            tangon = zuuluu == verify;
            oscard = -1;
            zuuluu = oscard;
            if(tangon) { _fun00008_ip = 102; continue _fun00007 }
 43:
            report = verify.length;
            tangon = option.length;
            report = report > tangon;
            tangon = golfie;
            if(report) { _fun00008_ip = 99; continue _fun00007 }
 63:
            offset = verify.length;
            report = option.length;
            offset = offset < report;
            report = oscard;
            if(offset) { _fun00008_ip = 96; continue _fun00007 }
 83:
            option = verify > option;
            if(!option) { _fun00008_ip = 93; continue _fun00007 }
 90:
            oscard = golfie;
 93:
            report = oscard;
 96:
            tangon = report;
 99:
            zuuluu = tangon;
 102:
            michal = zuuluu;
 105:
            entity = michal;
 108:
            return entity;
        }
    };
    zuuluu['compare'] = report;
    tangon = function(argFoo) { // Original name: isProbablyAValidSnowflake
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu;
            entity = null;
            if(!(entity != zuuluu)) { _fun00010_ip = 79; continue _fun00009 }
 12:
            tangon = /^\d{17,19}$/;
            zuuluu = tangon.test;
            entity = michal;
            entity = zuuluu.bind(tangon)(entity);
            if(entity) { _fun00010_ip = 46; continue _fun00009 }
 42:
            entity = false;
            return entity;
 46: // try_start_0
            tangon = _closure1_slot6;
            zuuluu = michal;
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            entity = _closure1_slot4;
            entity = michal >= entity;
 71: // try_end0
            return entity;
 73: // catch_target0
            CatchBlockStart(arg_register=0);
            entity = false;
            return entity;
 79:
            entity = false;
            return entity;
        }
    };
    zuuluu['isProbablyAValidSnowflake'] = tangon;
    zuuluu['SnowflakeSequence'] = michal;
    return entity;
})();