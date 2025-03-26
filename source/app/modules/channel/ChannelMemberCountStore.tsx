// app/modules/channel/ChannelMemberCountStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
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
            entity = _closure1_slot10;
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
    var _closure1_slot9 = entity;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    michal = global;
    verify = michal.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot0 = golfie;
    golfie = 1;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot1 = golfie;
    golfie = 2;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 3;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 4;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 5;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    verify = michal.Object;
    option = verify.freeze;
    michal = null;
    golfie = {'online': null, 'total': null};
    golfie = option.bind(verify)(golfie);
    var _closure1_slot6 = golfie;
    golfie = {};
    var _closure1_slot7 = golfie;
    var _closure1_slot8 = michal;
    michal = 6;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ChannelMemberCountStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot9;
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
        entity = 'getMemberCount';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot7;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00006_ip = 24; continue _fun00005 }
 20:
                entity = _closure1_slot6;
 24:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golfie = 'requestCount';
        report['key'] = golfie;
        oscard = function(argFoo, argBar) { // Original name: value
            tangon = argFoo;
            zuuluu = argBar;
            michal = {};
            michal['guildId'] = tangon;
            michal['channelId'] = zuuluu;
            _closure1_slot8 = michal;
            michal = _closure1_slot5;
            entity = michal.getSocket;
            michal = entity.bind(michal)();
            entity = michal.requestChannelMemberCount;
            entity = entity.bind(michal)(tangon, zuuluu);
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[1] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 7;
    michal = report[michal];
    romeon = oscard.bind(entity)(michal);
    michal = {};
    option = function() { // Original name: handleConnectionOpen
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = {};
            _closure1_slot7 = michal;
            zuuluu = _closure1_slot8;
            michal = null;
            if(!(michal != zuuluu)) { _fun00008_ip = 63; continue _fun00007 }
 19:
            zuuluu = _closure1_slot5;
            michal = zuuluu.getSocket;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.requestChannelMemberCount;
            michal = _closure1_slot8;
            michal = michal.guildId;
            entity = _closure1_slot8;
            entity = entity.channelId;
            entity = zuuluu.bind(tangon)(michal, entity);
 63:
            entity = undefined;
            return entity;
        }
    };
    michal['CONNECTION_OPEN'] = option;
    tangon = function(argFoo) { // Original name: handleMemberCountUpdate
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            report = entity.online;
            tangon = entity.total;
            michal = null;
            entity = michal == report;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 29:
            entity = michal == tangon;
 33:
            if(entity) { _fun00010_ip = 59; continue _fun00009 }
 36:
            michal = _closure1_slot7;
            entity = {};
            entity['online'] = report;
            entity['total'] = tangon;
            michal[zuuluu] = entity;
 59:
            entity = true;
            return entity;
        }
    };
    michal['CHANNEL_MEMBER_COUNT_UPDATE'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[golfie](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/channel/ChannelMemberCountStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();