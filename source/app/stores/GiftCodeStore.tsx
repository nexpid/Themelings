// app/stores/GiftCodeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
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
            _closure1_slot21 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = function(argFoo) { // Original name: updateGiftCode
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot8;
            zuuluu = tangon.createFromServer;
            michal = argFoo;
            oscard = zuuluu.bind(tangon)(michal);
            tangon = oscard.code;
            zuuluu = _closure1_slot12;
            michal = zuuluu.has;
            report = michal.bind(zuuluu)(tangon);
            zuuluu = _closure1_slot12;
            michal = zuuluu.set;
            if(report) { _fun00004_ip = 137; continue _fun00003 }
 52:
            report = michal.bind(zuuluu)(tangon, oscard);
            golfie = oscard.expiresAt;
            report = null;
            if(!(report != golfie)) { _fun00004_ip = 168; continue _fun00003 }
 70:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            report = 7;
            report = golfie[report];
            golfie = undefined;
            report = option.bind(golfie)(report);
            report = report.Timeout;
            option = report.prototype;
            option = Object.create(option, {constructor: {value: report}});
            yankee = option;
            report = new yankee[report](offset);
            option = report instanceof Object ? report : option;
            report = _closure1_slot11;
            report[tangon] = option;
            report = _closure1_slot23;
            report = report.bind(golfie)(tangon);
            _fun00004_ip = 168; continue _fun00003;
 137:
            report = _closure1_slot12;
            entity = report.get;
            report = entity.bind(report)(tangon);
            entity = report.merge;
            entity = entity.bind(report)(oscard);
            entity = michal.bind(zuuluu)(tangon, entity);
 168:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: checkGiftCodeExpiry
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = _closure1_slot12;
            michal = report.get;
            michal = michal.bind(report)(zuuluu);
            report = null;
            if(!(report != michal)) { _fun00006_ip = 201; continue _fun00005 }
 35:
            oscard = michal.expiresAt;
            if(!(report != oscard)) { _fun00006_ip = 201; continue _fun00005 }
 48:
            oscard = michal.expiresAt;
            michal = oscard.valueOf;
            golfie = michal.bind(oscard)();
            option = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 8;
            oscard = oscard[michal];
            michal = undefined;
            oscard = option.bind(michal)(oscard);
            option = oscard.bind(michal)();
            oscard = option.valueOf;
            oscard = oscard.bind(option)();
            offset = golfie - oscard;
            oscard = 0;
            if(!(!(offset <= oscard))) { _fun00006_ip = 165; continue _fun00005 }
 108:
            oscard = _closure1_slot11;
            golfie = oscard[zuuluu];
            if(!(report != golfie)) { _fun00006_ip = 163; continue _fun00005 }
 120:
            oscard = golfie.start;
            report = global;
            verify = report.Math;
            option = verify.min;
            report = 2147483647;
            report = option.bind(verify)(report, offset);
            tangon = function() {
                zuuluu = _closure1_slot23;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            tangon = oscard.bind(golfie)(report, tangon);
            _fun00006_ip = 201; continue _fun00005;
 163:
            return michal;
 165:
            tangon = _closure1_slot12;
            michal = tangon.delete;
            michal = michal.bind(tangon)(zuuluu);
            michal = _closure1_slot11;
            michal = delete michal[zuuluu];
            michal = _closure1_slot20;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
 201:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: resolveMessageGiftCodes
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscard = argFoo;
            entity = arguments[1];
            report = undefined;
            if(!(entity === report)) { _fun00008_ip = 14; continue _fun00007 }
 12:
            entity = false;
 14:
            if(!entity) { _fun00008_ip = 46; continue _fun00007 }
 17:
            zuuluu = _closure1_slot19;
            michal = zuuluu.has;
            entity = oscard.channel_id;
            entity = michal.bind(zuuluu)(entity);
            if(entity) { _fun00008_ip = 46; continue _fun00007 }
 42:
            entity = false;
            return entity;
 46:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = 9;
            entity = entity[tangon];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isGiftCodeEmbed;
            entity = entity.bind(zuuluu)(oscard);
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[tangon];
            tangon = zuuluu.bind(report)(michal);
            michal = tangon.findGiftCodes;
            if(entity) { _fun00008_ip = 118; continue _fun00007 }
 106:
            entity = oscard.content;
            zuuluu = michal.bind(tangon)(entity);
            _fun00008_ip = 178; continue _fun00007;
 118:
            golfie = null;
            option = golfie == oscard;
            entity = undefined;
            if(option) { _fun00008_ip = 135; continue _fun00007 }
 129:
            entity = oscard.embeds;
 135:
            option = golfie != entity;
            entity = undefined;
            if(!option) { _fun00008_ip = 173; continue _fun00007 }
 144:
            golfie = golfie == oscard;
            report = undefined;
            if(golfie) { _fun00008_ip = 170; continue _fun00007 }
 153:
            golfie = oscard.embeds;
            oscard = 0;
            oscard = golfie[oscard];
            report = oscard.url;
 170:
            entity = report;
 173:
            zuuluu = michal.bind(tangon)(entity);
 178:
            michal = zuuluu.length;
            entity = 0;
            if(!(entity !== michal)) { _fun00008_ip = 206; continue _fun00007 }
 189:
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    tangon = argFoo;
                    var _closure3_slot0 = tangon;
                    report = _closure1_slot13;
                    zuuluu = report.includes;
                    zuuluu = zuuluu.bind(report)(tangon);
                    if(zuuluu) { _fun00010_ip = 43; continue _fun00009 }
 29:
                    oscard = _closure1_slot15;
                    report = oscard.includes;
                    zuuluu = report.bind(oscard)(tangon);
 43:
                    if(zuuluu) { _fun00010_ip = 99; continue _fun00009 }
 46:
                    report = _closure1_slot25;
                    zuuluu = {};
                    zuuluu['code'] = tangon;
                    tangon = undefined;
                    zuuluu = report.bind(tangon)(zuuluu);
                    zuuluu = _closure1_slot1;
                    report = _closure1_slot2;
                    michal = 10;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.wait;
                    entity = function() {
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        michal = 11;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        oscard = tangon.bind(michal)(zuuluu);
                        report = oscard.resolveGiftCode;
                        tangon = _closure3_slot0;
                        zuuluu = false;
                        michal = true;
                        zuuluu = report.bind(oscard)(tangon, zuuluu, michal);
                        michal = zuuluu.catch;
                        entity = _closure1_slot10;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
 99:
                    entity = undefined;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
 206:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot24 = entity;
    romeon = function(argFoo) { // Original name: handleGiftCodeResolve
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.code;
            tangon = _closure1_slot13;
            entity = tangon.includes;
            entity = entity.bind(tangon)(zuuluu);
            if(entity) { _fun00012_ip = 61; continue _fun00011 }
 28:
            golfie = _closure1_slot13;
            entity = new Array(1);
            oscard = 0;
            option = entity;
            tangon = arraySpread(option, golfie, oscard);
            entity[tangon] = zuuluu;
            zuuluu = 1;
            zuuluu = tangon + zuuluu;
            _closure1_slot13 = entity;
 61:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = romeon;
    yankee = function(argFoo) { // Original name: handleMessage
        entity = argFoo;
        tangon = entity.message;
        zuuluu = _closure1_slot24;
        michal = undefined;
        entity = true;
        entity = zuuluu.bind(michal)(tangon, entity);
        entity = false;
        return entity;
    };
    offset = function(argFoo) { // Original name: handleLoadMessages
        entity = argFoo;
        tangon = entity.channelId;
        zuuluu = entity.messages;
        michal = _closure1_slot19;
        entity = michal.add;
        entity = entity.bind(michal)(tangon);
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            tangon = _closure1_slot24;
            zuuluu = undefined;
            michal = argFoo;
            entity = true;
            entity = tangon.bind(zuuluu)(michal, entity);
            entity = false;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    golfie = function(argFoo) { // Original name: handleLoadThreadsSuccess
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.firstMessages;
            entity = null;
            if(!(entity != zuuluu)) { _fun00014_ip = 40; continue _fun00013 }
 15:
            if(!(entity != zuuluu)) { _fun00014_ip = 36; continue _fun00013 }
 19:
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = _closure1_slot24;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                entity = false;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
 36:
            entity = undefined;
            return entity;
 40:
            entity = false;
            return entity;
        }
    };
    michal = global;
    backup = michal.Object;
    foxtra = backup.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = foxtra.bind(backup)(zuuluu, entity, verify);
    entity = 0;
    verify = oscard[entity];
    entity = undefined;
    verify = option.bind(entity)(verify);
    var _closure1_slot3 = verify;
    verify = 1;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot4 = verify;
    verify = 2;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot5 = verify;
    verify = 3;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot6 = verify;
    verify = 4;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot7 = verify;
    verify = 5;
    verify = oscard[verify];
    verify = option.bind(entity)(verify);
    var _closure1_slot8 = verify;
    verify = 6;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    foxtra = verify.AbortCodes;
    var _closure1_slot9 = foxtra;
    verify = verify.NOOP_NULL;
    var _closure1_slot10 = verify;
    verify = {};
    var _closure1_slot11 = verify;
    verify = michal.Map;
    foxtra = verify.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: verify}});
    result = foxtra;
    verify = new result[verify](output);
    verify = verify instanceof Object ? verify : foxtra;
    var _closure1_slot12 = verify;
    verify = new Array(0);
    var _closure1_slot13 = verify;
    verify = new Array(0);
    var _closure1_slot14 = verify;
    verify = new Array(0);
    var _closure1_slot15 = verify;
    verify = michal.Set;
    foxtra = verify.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: verify}});
    result = foxtra;
    verify = new result[verify](output);
    verify = verify instanceof Object ? verify : foxtra;
    var _closure1_slot16 = verify;
    verify = {};
    var _closure1_slot17 = verify;
    verify = {};
    var _closure1_slot18 = verify;
    michal = michal.Set;
    verify = michal.prototype;
    verify = Object.create(verify, {constructor: {value: michal}});
    result = verify;
    michal = new result[michal](output);
    michal = michal instanceof Object ? michal : verify;
    var _closure1_slot19 = michal;
    michal = 12;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    verify = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GiftCodeStore
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot21;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00016_ip = 69; continue _fun00015 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00016_ip = 105; continue _fun00015;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
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
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'get';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = _closure1_slot12;
                michal = zuuluu.get;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                tangon = null;
                zuuluu = tangon == michal;
                entity = null;
                if(zuuluu) { _fun00018_ip = 49; continue _fun00017 }
 31:
                zuuluu = michal.isExpired;
                zuuluu = zuuluu.bind(michal)();
                entity = null;
                if(zuuluu) { _fun00018_ip = 49; continue _fun00017 }
 46:
                entity = michal;
 49:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(11);
        entity[0] = report;
        report = {};
        golfie = 'getError';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                zuuluu = argFoo;
                entity = null;
                michal = entity != zuuluu;
                if(!michal) { _fun00020_ip = 23; continue _fun00019 }
 12:
                michal = _closure1_slot18;
                entity = michal[zuuluu];
 23:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getForGifterSKUAndPlan';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = argBaz;
            var _closure3_slot2 = michal;
            michal = global;
            tangon = michal.Array;
            zuuluu = tangon.from;
            report = _closure1_slot12;
            michal = report.values;
            michal = michal.bind(report)();
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.userId;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    if(!entity) { _fun00022_ip = 36; continue _fun00021 }
 22:
                    report = zuuluu.skuId;
                    michal = _closure3_slot1;
                    entity = report === michal;
 36:
                    if(!entity) { _fun00022_ip = 69; continue _fun00021 }
 39:
                    report = _closure3_slot2;
                    michal = null;
                    michal = michal == report;
                    if(michal) { _fun00022_ip = 66; continue _fun00021 }
 52:
                    report = zuuluu.subscriptionPlanId;
                    tangon = _closure3_slot2;
                    michal = report === tangon;
 66:
                    entity = michal;
 69:
                    if(!entity) { _fun00022_ip = 85; continue _fun00021 }
 72:
                    michal = zuuluu.isExpired;
                    michal = michal.bind(zuuluu)();
                    entity = !michal;
 85:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getIsResolving';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot13;
            michal = zuuluu.includes;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getIsResolved';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot15;
            michal = zuuluu.includes;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getIsAccepting';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot14;
            michal = zuuluu.includes;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getUserGiftCodesFetchingForSKUAndPlan';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            zuuluu = _closure1_slot16;
            michal = zuuluu.has;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 9;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.makeComboId;
            tangon = argFoo;
            entity = argBar;
            entity = report.bind(oscard)(tangon, entity);
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getUserGiftCodesLoadedAtForSKUAndPlan';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            michal = _closure1_slot17;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 9;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.makeComboId;
            zuuluu = argFoo;
            entity = argBar;
            entity = tangon.bind(report)(zuuluu, entity);
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getResolvingCodes';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot13;
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getResolvedCodes';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot15;
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getAcceptingCodes';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = oscard;
        entity[10] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(verify);
    michal = 'GiftCodeStore';
    verify['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    output = option.bind(entity)(michal);
    michal = {};
    foxtra = function() { // Original name: handleConnectionOpen
        michal = _closure1_slot19;
        entity = michal.clear;
        entity = entity.bind(michal)();
        entity = false;
        return entity;
    };
    michal['CONNECTION_OPEN'] = foxtra;
    foxtra = function(argFoo) { // Original name: handleChannelSelect
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            entity = null;
            if(!(entity != zuuluu)) { _fun00024_ip = 31; continue _fun00023 }
 14:
            michal = _closure1_slot19;
            entity = michal.add;
            entity = entity.bind(michal)(zuuluu);
 31:
            entity = false;
            return entity;
        }
    };
    michal['CHANNEL_SELECT'] = foxtra;
    michal['GIFT_CODE_RESOLVE'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodeResolveSuccess
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.giftCode;
            var _closure2_slot0 = zuuluu;
            report = _closure1_slot13;
            tangon = report.filter;
            michal = function(argFoo) {
                entity = _closure2_slot0;
                michal = entity.code;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            michal = tangon.bind(report)(michal);
            _closure1_slot13 = michal;
            report = _closure1_slot15;
            tangon = report.includes;
            michal = zuuluu.code;
            michal = tangon.bind(report)(michal);
            if(michal) { _fun00026_ip = 101; continue _fun00025 }
 63:
            golfie = _closure1_slot15;
            michal = new Array(1);
            oscard = 0;
            option = michal;
            report = arraySpread(option, golfie, oscard);
            tangon = zuuluu.code;
            michal[report] = tangon;
            tangon = 1;
            tangon = report + tangon;
            _closure1_slot15 = michal;
 101:
            michal = _closure1_slot22;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        }
    };
    michal['GIFT_CODE_RESOLVE_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodeResolveFailure
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.code;
            var _closure2_slot0 = zuuluu;
            report = _closure1_slot13;
            tangon = report.filter;
            entity = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            entity = tangon.bind(report)(entity);
            _closure1_slot13 = entity;
            tangon = _closure1_slot15;
            entity = tangon.includes;
            entity = entity.bind(tangon)(zuuluu);
            if(entity) { _fun00028_ip = 90; continue _fun00027 }
 57:
            golfie = _closure1_slot15;
            entity = new Array(1);
            oscard = 0;
            option = entity;
            tangon = arraySpread(option, golfie, oscard);
            entity[tangon] = zuuluu;
            zuuluu = 1;
            zuuluu = tangon + zuuluu;
            _closure1_slot15 = entity;
 90:
            entity = undefined;
            return entity;
        }
    };
    michal['GIFT_CODE_RESOLVE_FAILURE'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodeAccept
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.code;
            tangon = _closure1_slot14;
            entity = tangon.includes;
            entity = entity.bind(tangon)(zuuluu);
            if(entity) { _fun00030_ip = 61; continue _fun00029 }
 28:
            golfie = _closure1_slot14;
            entity = new Array(1);
            oscard = 0;
            option = entity;
            tangon = arraySpread(option, golfie, oscard);
            entity[tangon] = zuuluu;
            zuuluu = 1;
            zuuluu = tangon + zuuluu;
            _closure1_slot14 = entity;
 61:
            entity = undefined;
            return entity;
        }
    };
    michal['GIFT_CODE_REDEEM'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodeAcceptSuccess
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = argFoo;
            tangon = entity.code;
            var _closure2_slot0 = tangon;
            report = _closure1_slot14;
            zuuluu = report.filter;
            michal = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            michal = zuuluu.bind(report)(michal);
            _closure1_slot14 = michal;
            zuuluu = _closure1_slot12;
            michal = zuuluu.get;
            oscard = michal.bind(zuuluu)(tangon);
            michal = null;
            if(!(michal != oscard)) { _fun00032_ip = 113; continue _fun00031 }
 60:
            zuuluu = _closure1_slot12;
            michal = zuuluu.set;
            report = oscard.merge;
            entity = {};
            golfie = true;
            entity['redeemed'] = golfie;
            option = oscard.uses;
            golfie = 1;
            golfie = option + golfie;
            entity['uses'] = golfie;
            entity = report.bind(oscard)(entity);
            entity = michal.bind(zuuluu)(tangon, entity);
 113:
            entity = undefined;
            return entity;
        }
    };
    michal['GIFT_CODE_REDEEM_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodeAcceptFailure
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            entity = argFoo;
            tangon = entity.code;
            var _closure2_slot0 = tangon;
            michal = entity.error;
            oscard = _closure1_slot14;
            report = oscard.filter;
            zuuluu = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                entity = entity !== michal;
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu);
            _closure1_slot14 = zuuluu;
            report = _closure1_slot12;
            zuuluu = report.get;
            golfie = zuuluu.bind(report)(tangon);
            zuuluu = _closure1_slot18;
            zuuluu[tangon] = michal;
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00034_ip = 176; continue _fun00033 }
 73:
            zuuluu = michal.code;
            michal = _closure1_slot9;
            michal = michal.UNKNOWN_GIFT_CODE;
            if(!(michal !== zuuluu)) { _fun00034_ip = 144; continue _fun00033 }
 92:
            michal = _closure1_slot9;
            michal = michal.INVALID_GIFT_REDEMPTION_EXHAUSTED;
            if(!(michal === zuuluu)) { _fun00034_ip = 176; continue _fun00033 }
 106:
            report = _closure1_slot12;
            zuuluu = report.set;
            option = golfie.set;
            oscard = golfie.maxUses;
            michal = 'uses';
            michal = option.bind(golfie)(michal, oscard);
            michal = zuuluu.bind(report)(tangon, michal);
            _fun00034_ip = 176; continue _fun00033;
 144:
            zuuluu = _closure1_slot12;
            michal = zuuluu.set;
            oscard = golfie.set;
            report = 'revoked';
            entity = true;
            entity = oscard.bind(golfie)(report, entity);
            entity = michal.bind(zuuluu)(tangon, entity);
 176:
            entity = undefined;
            return entity;
        }
    };
    michal['GIFT_CODE_REDEEM_FAILURE'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodeRevoke
        _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.code;
            tangon = _closure1_slot12;
            entity = tangon.delete;
            entity = entity.bind(tangon)(zuuluu);
            entity = _closure1_slot11;
            tangon = entity[zuuluu];
            entity = null;
            if(!(entity != tangon)) { _fun00036_ip = 57; continue _fun00035 }
 39:
            entity = tangon.stop;
            entity = entity.bind(tangon)();
            entity = _closure1_slot11;
            entity = delete entity[zuuluu];
 57:
            tangon = _closure1_slot15;
            entity = tangon.includes;
            entity = entity.bind(tangon)(zuuluu);
            if(entity) { _fun00036_ip = 107; continue _fun00035 }
 74:
            golfie = _closure1_slot15;
            entity = new Array(1);
            oscard = 0;
            option = entity;
            tangon = arraySpread(option, golfie, oscard);
            entity[tangon] = zuuluu;
            zuuluu = 1;
            zuuluu = tangon + zuuluu;
            _closure1_slot15 = entity;
 107:
            entity = undefined;
            return entity;
        }
    };
    michal['GIFT_CODE_REVOKE_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodeCreate
        entity = argFoo;
        zuuluu = entity.giftCode;
        michal = _closure1_slot22;
        entity = undefined;
        michal = michal.bind(entity)(zuuluu);
        return entity;
    };
    michal['GIFT_CODE_CREATE_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodesFetch
        entity = argFoo;
        golfie = entity.skuId;
        oscard = entity.subscriptionPlanId;
        tangon = _closure1_slot16;
        zuuluu = tangon.add;
        report = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        report = report.bind(entity)(michal);
        michal = report.makeComboId;
        michal = michal.bind(report)(golfie, oscard);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['GIFT_CODES_FETCH'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodesFetchSuccess
        entity = argFoo;
        tangon = entity.giftCodes;
        oscard = entity.skuId;
        report = entity.subscriptionPlanId;
        zuuluu = tangon.forEach;
        entity = _closure1_slot22;
        entity = zuuluu.bind(tangon)(entity);
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.makeComboId;
        tangon = zuuluu.bind(tangon)(oscard, report);
        report = _closure1_slot17;
        zuuluu = global;
        oscard = zuuluu.Date;
        zuuluu = oscard.now;
        zuuluu = zuuluu.bind(oscard)();
        report[tangon] = zuuluu;
        zuuluu = _closure1_slot16;
        michal = zuuluu.delete;
        michal = michal.bind(zuuluu)(tangon);
        return entity;
    };
    michal['GIFT_CODES_FETCH_SUCCESS'] = romeon;
    romeon = function(argFoo) { // Original name: handleGiftCodesFetchFail
        entity = argFoo;
        golfie = entity.skuId;
        oscard = entity.subscriptionPlanId;
        tangon = _closure1_slot16;
        zuuluu = tangon.delete;
        report = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 9;
        michal = michal[entity];
        entity = undefined;
        report = report.bind(entity)(michal);
        michal = report.makeComboId;
        michal = michal.bind(report)(golfie, oscard);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['GIFT_CODES_FETCH_FAILURE'] = romeon;
    michal['MESSAGE_CREATE'] = yankee;
    michal['MESSAGE_UPDATE'] = yankee;
    michal['LOCAL_MESSAGES_LOADED'] = offset;
    michal['LOAD_MESSAGES_SUCCESS'] = offset;
    michal['LOAD_MESSAGES_AROUND_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleLoadRecentMentions
        entity = argFoo;
        zuuluu = entity.messages;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot24;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = false;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['LOAD_RECENT_MENTIONS_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleLoadPinnedMessages
        entity = argFoo;
        zuuluu = entity.messages;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = _closure1_slot24;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = false;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['LOAD_PINNED_MESSAGES_SUCCESS'] = offset;
    offset = function(argFoo) { // Original name: handleSearchFinish
        entity = argFoo;
        zuuluu = entity.messages;
        michal = zuuluu.forEach;
        entity = function(argFoo) {
            zuuluu = argFoo;
            michal = zuuluu.forEach;
            entity = function(argFoo) {
                zuuluu = _closure1_slot24;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                entity = false;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['SEARCH_FINISH'] = offset;
    offset = function(argFoo) { // Original name: handleGiftCodeUpdate
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            entity = argFoo;
            verify = entity.uses;
            tangon = entity.code;
            zuuluu = _closure1_slot12;
            michal = zuuluu.get;
            golfie = michal.bind(zuuluu)(tangon);
            michal = null;
            if(!(michal != golfie)) { _fun00038_ip = 92; continue _fun00037 }
 37:
            zuuluu = _closure1_slot12;
            michal = zuuluu.set;
            oscard = golfie.set;
            entity = global;
            option = entity.Math;
            report = option.max;
            entity = golfie.uses;
            report = report.bind(option)(entity, verify);
            entity = 'uses';
            entity = oscard.bind(golfie)(entity, report);
            entity = michal.bind(zuuluu)(tangon, entity);
 92:
            entity = undefined;
            return entity;
        }
    };
    michal['GIFT_CODE_UPDATE'] = offset;
    michal['LOAD_THREADS_SUCCESS'] = golfie;
    michal['LOAD_ARCHIVED_THREADS_SUCCESS'] = golfie;
    golfie = function(argFoo) { // Original name: handleLoadForumPosts
        entity = argFoo;
        zuuluu = entity.threads;
        entity = global;
        michal = entity.Object;
        entity = michal.values;
        zuuluu = entity.bind(michal)(zuuluu);
        michal = zuuluu.map;
        entity = function(argFoo) {
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                entity = argFoo;
                tangon = entity.first_message;
                entity = null;
                entity = entity != tangon;
                if(!entity) { _fun00040_ip = 34; continue _fun00039 }
 18:
                zuuluu = _closure1_slot24;
                michal = undefined;
                michal = zuuluu.bind(michal)(tangon);
                entity = false;
 34:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    michal['LOAD_FORUM_POSTS'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    result = golfie;
    sizing = michal;
    michal = new result[verify](output, sizing, kiloes);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot20 = michal;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/GiftCodeStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();