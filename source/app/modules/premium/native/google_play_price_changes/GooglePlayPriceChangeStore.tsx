// app/modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
            _closure1_slot12 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    golfie = global;
    offset = golfie.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
    entity = undefined;
    option = tangon.bind(entity)(option);
    var _closure1_slot2 = option;
    option = 1;
    option = oscard[option];
    option = tangon.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 2;
    option = oscard[option];
    option = tangon.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 3;
    option = oscard[option];
    option = tangon.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 4;
    option = oscard[option];
    option = tangon.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 5;
    option = oscard[option];
    option = tangon.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 6;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.SubscriptionStatusTypes;
    verify = golfie.Set;
    offset = option.ACTIVE;
    golfie = new Array(3);
    golfie[0] = offset;
    offset = option.PAST_DUE;
    golfie[1] = offset;
    option = option.UNPAID;
    golfie[2] = option;
    option = verify.prototype;
    option = Object.create(option, {constructor: {value: verify}});
    backup = option;
    foxtra = golfie;
    golfie = new backup[verify](foxtra, romeon);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot8 = golfie;
    golfie = false;
    var _closure1_slot9 = golfie;
    golfie = null;
    var _closure1_slot10 = golfie;
    golfie = function() { // Original name: onInitializeSync
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = null;
            _closure1_slot10 = report;
            entity = false;
            _closure1_slot9 = entity;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = tangon.isAndroid;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00004_ip = 206; continue _fun00003 }
 52:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 8;
            michal = oscard[michal];
            michal = tangon.bind(entity)(michal);
            oscard = michal.GooglePlayPriceChangeNoticeKSExperiment;
            tangon = oscard.getCurrentConfig;
            michal = {};
            golfie = 'GooglePlayPriceChangeStore.onInitializeSync';
            michal['location'] = golfie;
            michal = tangon.bind(oscard)(michal);
            michal = michal.enabled;
            if(michal) { _fun00004_ip = 206; continue _fun00003 }
 109:
            tangon = _closure1_slot7;
            michal = tangon.getPremiumSubscription;
            oscard = michal.bind(tangon)();
            tangon = report == oscard;
            michal = undefined;
            if(tangon) { _fun00004_ip = 138; continue _fun00003 }
 132:
            michal = oscard.priceChange;
 138:
            tangon = report != oscard;
            if(!tangon) { _fun00004_ip = 164; continue _fun00003 }
 145:
            option = _closure1_slot8;
            golfie = option.has;
            oscard = oscard.status;
            tangon = golfie.bind(option)(oscard);
 164:
            if(!tangon) { _fun00004_ip = 171; continue _fun00003 }
 167:
            tangon = report != michal;
 171:
            if(!tangon) { _fun00004_ip = 182; continue _fun00003 }
 174:
            tangon = michal.isInFuture;
 182:
            if(!tangon) { _fun00004_ip = 193; continue _fun00003 }
 185:
            tangon = michal.isPriceIncrease;
 193:
            if(!tangon) { _fun00004_ip = 206; continue _fun00003 }
 196:
            _closure1_slot10 = michal;
            michal = true;
            _closure1_slot9 = michal;
 206:
            return entity;
        }
    };
    var _closure1_slot11 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = tangon.bind(entity)(golfie);
    golfie = golfie.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: GooglePlayPriceChangeStore
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot12;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 69; continue _fun00005 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00006_ip = 105; continue _fun00005;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
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
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            report = zuuluu.syncWith;
            michal = _closure1_slot7;
            tangon = new Array(1);
            tangon[0] = michal;
            entity = _closure1_slot11;
            entity = report.bind(zuuluu)(tangon, entity);
            entity = zuuluu.waitFor;
            entity = entity.bind(zuuluu)(michal);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'shouldShowGooglePlayPriceChange';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 8;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                tangon = entity.GooglePlayPriceChangeNoticeKSExperiment;
                zuuluu = tangon.getCurrentConfig;
                entity = {};
                report = 'GooglePlayPriceChangeStore.shouldShowGooglePlayPriceChange';
                entity['location'] = report;
                entity = zuuluu.bind(tangon)(entity);
                entity = entity.enabled;
                entity = !entity;
                if(!entity) { _fun00008_ip = 69; continue _fun00007 }
 65:
                entity = _closure1_slot9;
 69:
                return entity;
            }
        };
        report['get'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'priceChangeRecord';
        report['key'] = golfie;
        oscard = function() { // Original name: get
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                entity = 8;
                zuuluu = zuuluu[entity];
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                tangon = entity.GooglePlayPriceChangeNoticeKSExperiment;
                zuuluu = tangon.getCurrentConfig;
                entity = {};
                report = 'GooglePlayPriceChangeStore.priceChangeRecord';
                entity['location'] = report;
                entity = zuuluu.bind(tangon)(entity);
                zuuluu = entity.enabled;
                entity = null;
                if(zuuluu) { _fun00010_ip = 68; continue _fun00009 }
 64:
                entity = _closure1_slot10;
 68:
                return entity;
            }
        };
        report['get'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(golfie);
    michal = 'GooglePlayPriceChangeStore';
    option['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    foxtra = tangon.bind(entity)(michal);
    michal = option.prototype;
    tangon = Object.create(michal, {constructor: {value: option}});
    romeon = {};
    backup = tangon;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/native/google_play_price_changes/GooglePlayPriceChangeStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();