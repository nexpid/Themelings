// app/modules/premium/native/referrals/ReferralMessageManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot12;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 48; continue _fun00001 }
 35:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, zuuluu);
            _fun00002_ip = 86; continue _fun00001;
 48:
            oscard = global;
            option = oscard.Reflect;
            golfie = option.construct;
            oscard = new Array(0);
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 86:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: handleReferralMessages
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            report = zuuluu.type;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 8;
            tangon = tangon[entity];
            entity = undefined;
            tangon = oscard.bind(entity)(tangon);
            tangon = tangon.MessageTypes;
            tangon = tangon.PREMIUM_REFERRAL;
            if(!(report === tangon)) { _fun00006_ip = 309; continue _fun00005 }
 52:
            tangon = zuuluu.content;
            report = null;
            if(!(report != tangon)) { _fun00006_ip = 309; continue _fun00005 }
 66:
            oscard = _closure1_slot1;
            tangon = _closure1_slot2;
            option = 9;
            tangon = tangon[option];
            golfie = oscard.bind(entity)(tangon);
            oscard = golfie.isProbablyAValidSnowflake;
            tangon = zuuluu.content;
            tangon = oscard.bind(golfie)(tangon);
            if(!tangon) { _fun00006_ip = 309; continue _fun00005 }
 108:
            oscard = _closure1_slot8;
            tangon = oscard.getPremiumTypeSubscription;
            tangon = tangon.bind(oscard)();
            golfie = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[option];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.extractTimestamp;
            zuuluu = zuuluu.content;
            golfie = oscard.bind(golfie)(zuuluu);
            oscard = _closure1_slot9;
            zuuluu = oscard.shouldFetchReferralOffer;
            zuuluu = zuuluu.bind(oscard)(golfie);
            if(!(report == tangon)) { _fun00006_ip = 309; continue _fun00005 }
 179:
            if(!zuuluu) { _fun00006_ip = 309; continue _fun00005 }
 185:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = 10;
            zuuluu = zuuluu[report];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isAndroid;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00006_ip = 261; continue _fun00005 }
 217:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[report];
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.isIOS;
            zuuluu = zuuluu.bind(tangon)();
            report = undefined;
            if(!zuuluu) { _fun00006_ip = 271; continue _fun00005 }
 249:
            zuuluu = _closure1_slot10;
            report = zuuluu.APPLE;
            _fun00006_ip = 271; continue _fun00005;
 261:
            zuuluu = _closure1_slot10;
            report = zuuluu.GOOGLE;
 271:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.fetchUserOffer;
            michal = 'Referral Message Manager';
            michal = zuuluu.bind(tangon)(michal, report);
 309:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PaymentGateways;
    var _closure1_slot10 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        zuuluu = function() { // Original name: ReferralMessageManager
            report = this;
            entity = _closure1_slot4;
            zuuluu = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(report, zuuluu);
            entity = _closure1_slot11;
            entity = entity.bind(tangon)(report, zuuluu);
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            zuuluu = 12;
            zuuluu = oscard[zuuluu];
            zuuluu = report.bind(tangon)(zuuluu);
            michal = _closure1_slot13;
            michal = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot3;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/referrals/ReferralMessageManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();