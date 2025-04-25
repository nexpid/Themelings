// app/stores/native/IAPStore.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
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
            _closure1_slot16 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: updateProduct
        michal = argFoo;
        zuuluu = michal.currencyCode;
        entity = zuuluu.toLowerCase;
        option = entity.bind(zuuluu)();
        report = _closure1_slot0;
        golfie = _closure1_slot1;
        entity = 7;
        oscard = golfie[entity];
        tangon = undefined;
        offset = report.bind(tangon)(oscard);
        verify = offset.convertToMajorCurrencyUnits;
        oscard = michal.price;
        zuuluu = _closure1_slot8;
        zuuluu = zuuluu.USD;
        oscard = verify.bind(offset)(oscard, zuuluu);
        entity = golfie[entity];
        zuuluu = report.bind(tangon)(entity);
        entity = zuuluu.convertToMinorCurrencyUnits;
        verify = entity.bind(zuuluu)(oscard, option);
        entity = {};
        foxtra = entity;
        romeon = michal;
        zuuluu = copyDataProperties(foxtra, romeon);
        zuuluu = 'price';
        entity[zuuluu] = verify;
        zuuluu = 'currencyCode';
        entity[zuuluu] = option;
        zuuluu = 8;
        zuuluu = golfie[zuuluu];
        report = report.bind(tangon)(zuuluu);
        tangon = report.formatPrice;
        zuuluu = michal.currencyCode;
        michal = {};
        golfie = false;
        michal['convertToMajorUnits'] = golfie;
        zuuluu = tangon.bind(report)(oscard, zuuluu, michal);
        michal = 'priceString';
        entity[michal] = zuuluu;
        return entity;
    };
    var _closure1_slot17 = entity;
    option = global;
    offset = option.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.GPlayConnectionState;
    var _closure1_slot7 = michal;
    verify = 6;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.CurrencyCodes;
    var _closure1_slot8 = verify;
    michal = michal.DISCONNECTED;
    var _closure1_slot9 = michal;
    michal = null;
    var _closure1_slot10 = michal;
    verify = option.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot11 = verify;
    verify = option.Set;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot12 = verify;
    option = option.Set;
    verify = option.prototype;
    verify = Object.create(verify, {constructor: {value: option}});
    backup = verify;
    option = new backup[option](foxtra);
    option = option instanceof Object ? option : verify;
    var _closure1_slot13 = option;
    var _closure1_slot14 = michal;
    michal = false;
    var _closure1_slot15 = michal;
    michal = 10;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: IAPStore
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                entity = _closure1_slot16;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00004_ip = 69; continue _fun00003 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00004_ip = 105; continue _fun00003;
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
        entity = 'getProducts';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = _closure1_slot10;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'getOfferIds';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot12;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getProduct';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot11;
                michal = zuuluu.get;
                entity = argFoo;
                michal = michal.bind(zuuluu)(entity);
                entity = null;
                zuuluu = entity != michal;
                if(!zuuluu) { _fun00006_ip = 32; continue _fun00005 }
 29:
                entity = michal;
 32:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isBusy';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure1_slot13;
                zuuluu = entity.size;
                entity = 0;
                entity = zuuluu > entity;
                if(entity) { _fun00008_ip = 25; continue _fun00007 }
 21:
                entity = _closure1_slot15;
 25:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isPurchasingProduct';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot13;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'isReady';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot9;
            entity = _closure1_slot7;
            entity = entity.CONNECTED;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'hasConnectionError';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot9;
            entity = _closure1_slot7;
            entity = entity.ERROR;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getPendingDowngrade';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot14;
            return entity;
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'IAPStore';
    option['displayName'] = michal;
    michal = 11;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    verify = function(argFoo) { // Original name: updateConnectionState
        entity = argFoo;
        michal = entity.connectionState;
        _closure1_slot9 = michal;
        entity = undefined;
        return entity;
    };
    michal['GPLAY_UPDATE_CONNECTION_STATE'] = verify;
    verify = function(argFoo) { // Original name: skusLoaded
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            oscard = entity.skus;
            entity = undefined;
            zuuluu = undefined;
            golfie = undefined;
            report = oscard.forEach;
            tangon = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure1_slot11;
                michal = zuuluu.set;
                entity = tangon.identifier;
                entity = michal.bind(zuuluu)(entity, tangon);
                entity = undefined;
                return entity;
            };
            tangon = report.bind(oscard)(tangon);
            tangon = global;
            option = tangon.Array;
            oscard = option.from;
            verify = _closure1_slot11;
            report = verify.values;
            report = report.bind(verify)();
            offset = oscard.bind(option)(report);
            report = null;
            oscard = report == offset;
            verify = undefined;
            if(oscard) { _fun00010_ip = 92; continue _fun00009 }
 77:
            option = offset.filter;
            oscard = function(argFoo) {
                michal = null;
                entity = argFoo;
                entity = michal != entity;
                return entity;
            };
            verify = option.bind(offset)(oscard);
 92:
            _closure1_slot10 = verify;
            if(!(report != verify)) { _fun00010_ip = 115; continue _fun00009 }
 100:
            option = verify.forEach;
            oscard = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    michal = null;
                    report = michal == zuuluu;
                    entity = undefined;
                    tangon = undefined;
                    if(report) { _fun00012_ip = 22; continue _fun00011 }
 16:
                    tangon = zuuluu.offerIds;
 22:
                    if(!(michal != tangon)) { _fun00012_ip = 43; continue _fun00011 }
 26:
                    zuuluu = tangon.forEach;
                    michal = function(argFoo) {
                        zuuluu = _closure1_slot12;
                        michal = zuuluu.add;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
 43:
                    return entity;
                }
            };
            oscard = option.bind(verify)(oscard);
 115: // try_start_0
            oscard = _closure1_slot10;
            golfie = oscard;
            option = report == oscard;
            oscard = undefined;
            if(option) { _fun00010_ip = 148; continue _fun00009 }
 131:
            verify = golfie;
            option = verify.map;
            golfie = _closure1_slot17;
            oscard = option.bind(verify)(golfie);
 148:
            _closure1_slot10 = oscard;
 152: // try_end0
            _fun00010_ip = 187; continue _fun00009;
 154: // catch_target0
            CatchBlockStart(arg_register=7);
            golfie = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 9;
            oscard = verify[oscard];
            golfie = golfie.bind(entity)(oscard);
            oscard = golfie.captureBillingException;
            oscard = oscard.bind(golfie)(option);
 187:
            tangon = _closure1_slot10;
            zuuluu = tangon;
            if(!(report != tangon)) { _fun00010_ip = 216; continue _fun00009 }
 198:
            tangon = zuuluu;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                tangon = argFoo;
                zuuluu = _closure1_slot11;
                michal = zuuluu.set;
                entity = tangon.identifier;
                entity = michal.bind(zuuluu)(entity, tangon);
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 216:
            return entity;
        }
    };
    michal['GPLAY_SKUS_LOADED'] = verify;
    verify = function(argFoo) { // Original name: handleVerificationStart
        entity = argFoo;
        zuuluu = entity.productId;
        michal = _closure1_slot13;
        entity = michal.add;
        entity = entity.bind(michal)(zuuluu);
        entity = undefined;
        return entity;
    };
    michal['GPLAY_VERIFICATION_START'] = verify;
    verify = function(argFoo) { // Original name: handleVerificationEnd
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.productId;
            tangon = _closure1_slot13;
            michal = tangon.has;
            michal = michal.bind(tangon)(zuuluu);
            if(michal) { _fun00014_ip = 81; continue _fun00013 }
 29:
            michal = global;
            report = michal.Error;
            michal = michal.HermesInternal;
            tangon = michal.concat;
            michal = 'Tried verifying product without initialization: ';
            oscard = tangon.bind(michal)(zuuluu);
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            golfie = tangon;
            michal = new golfie[report](oscard, report);
            michal = michal instanceof Object ? michal : tangon;
            throw michal;
 81:
            michal = _closure1_slot13;
            entity = michal.delete;
            entity = entity.bind(michal)(zuuluu);
            entity = undefined;
            return entity;
        }
    };
    michal['GPLAY_VERIFICATION_END'] = verify;
    verify = function(argFoo) { // Original name: handleUpdatePendingDowngrade
        entity = argFoo;
        michal = entity.pendingDowngrade;
        _closure1_slot14 = michal;
        entity = undefined;
        return entity;
    };
    michal['GPLAY_UPDATE_PENDING_DOWNGRADE'] = verify;
    tangon = function(argFoo) { // Original name: handleUpdateIsDowngrading
        entity = argFoo;
        michal = entity.isDowngrading;
        _closure1_slot15 = michal;
        entity = undefined;
        return entity;
    };
    michal['GPLAY_UPDATE_IS_DOWNGRADING'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    backup = tangon;
    romeon = michal;
    michal = new backup[option](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/native/IAPStore.android.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();