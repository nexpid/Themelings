// app/modules/billing/hooks/useSubscriptionPlansLoaded.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot8;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot8;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    michal = function() { // Original name: getSubscriptionPlansLoaded
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = arguments[0];
            entity = arguments[1];
            golfie = undefined;
            if(!(option === golfie)) { _fun00008_ip = 35; continue _fun00007 }
 12:
            backup = _closure1_slot5;
            michal = new Array(0);
            foxtra = 0;
            kiloes = michal;
            zuuluu = arraySpread(kiloes, backup, foxtra);
            option = michal;
 35:
            if(!(entity === golfie)) { _fun00008_ip = 73; continue _fun00007 }
 39:
            tangon = _closure1_slot2;
            michal = new Array(3);
            michal[0] = tangon;
            tangon = _closure1_slot3;
            michal[1] = tangon;
            zuuluu = _closure1_slot4;
            michal[2] = zuuluu;
            entity = michal;
 73:
            report = entity;
            michal = report[Symbol.iterator];
            report = michal().next;
            tangon = report().value;
            entity = michal;
            zuuluu = entity === golfie;
            entity = undefined;
            if(zuuluu) { _fun00008_ip = 98; continue _fun00007 }
 95:
            entity = tangon;
 98:
            oscard = undefined;
            if(zuuluu) { _fun00008_ip = 128; continue _fun00007 }
 103:
            verify = report().value;
            tangon = michal;
            tangon = tangon === golfie;
            oscard = undefined;
            zuuluu = tangon;
            if(tangon) { _fun00008_ip = 128; continue _fun00007 }
 122:
            oscard = verify;
            zuuluu = tangon;
 128:
            tangon = undefined;
            if(zuuluu) { _fun00008_ip = 158; continue _fun00007 }
 133:
            verify = report().value;
            report = michal;
            report = report === golfie;
            tangon = undefined;
            zuuluu = report;
            if(report) { _fun00008_ip = 158; continue _fun00007 }
 152:
            tangon = verify;
            zuuluu = report;
 158:
            if(zuuluu) { _fun00008_ip = 164; continue _fun00007 }
 161:
            michal.return();
 164:
            zuuluu = entity.paymentSourceIds;
            offset = entity.defaultPaymentSourceId;
            entity = oscard.isLoadedForSKUs;
            entity = entity.bind(oscard)(option);
            michal = tangon.getPremiumTypeSubscription;
            tangon = michal.bind(tangon)();
            michal = null;
            report = michal == tangon;
            romeon = undefined;
            if(report) { _fun00008_ip = 218; continue _fun00007 }
 212:
            romeon = tangon.paymentSourceId;
 218:
            if(!(michal != romeon)) { _fun00008_ip = 285; continue _fun00007 }
 222:
            tangon = oscard.hasPaymentSourceForSKUIds;
            tangon = tangon.bind(oscard)(romeon, option);
            if(tangon) { _fun00008_ip = 285; continue _fun00007 }
 237:
            report = _closure1_slot6;
            tangon = global;
            tangon = tangon.HermesInternal;
            yankee = tangon.concat;
            verify = 'subscription payment source ';
            tangon = ' not loaded for ';
            tangon = yankee.bind(verify)(romeon, tangon, option);
            tangon = report.bind(golfie)(tangon);
            tangon = false;
            return tangon;
 285:
            if(!(michal != offset)) { _fun00008_ip = 352; continue _fun00007 }
 289:
            michal = oscard.hasPaymentSourceForSKUIds;
            michal = michal.bind(oscard)(offset, option);
            if(michal) { _fun00008_ip = 352; continue _fun00007 }
 304:
            tangon = _closure1_slot6;
            michal = global;
            michal = michal.HermesInternal;
            verify = michal.concat;
            report = 'default payment source ';
            michal = ' not loaded for ';
            michal = verify.bind(report)(offset, michal, option);
            michal = tangon.bind(golfie)(michal);
            michal = false;
            return michal;
 352:
            michal = _closure1_slot7;
            tangon = michal.bind(golfie)(zuuluu);
            zuuluu = tangon.bind(golfie)();
            michal = zuuluu.done;
            if(michal) { _fun00008_ip = 456; continue _fun00007 }
 376:
            romeon = zuuluu.value;
            michal = oscard.hasPaymentSourceForSKUIds;
            michal = michal.bind(oscard)(romeon, option);
            if(michal) { _fun00008_ip = 441; continue _fun00007 }
 396:
            verify = _closure1_slot6;
            michal = global;
            michal = michal.HermesInternal;
            yankee = michal.concat;
            offset = 'payment source ';
            michal = ' not loaded for ';
            michal = yankee.bind(offset)(romeon, michal, option);
            michal = verify.bind(golfie)(michal);
            michal = false;
            return michal;
 441:
            verify = tangon.bind(golfie)();
            michal = verify.done;
            zuuluu = verify;
            if(!michal) { _fun00008_ip = 376; continue _fun00007 }
 456:
            return entity;
        }
    };
    var _closure1_slot9 = michal;
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
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    verify = option.bind(entity)(report);
    report = verify.prototype;
    backup = Object.create(report, {constructor: {value: verify}});
    foxtra = 'useSubscriptionPlansLoaded';
    report = new backup[verify](foxtra, romeon);
    report = function() { // Original name: log
        entity = undefined;
        return entity;
    };
    var _closure1_slot6 = report;
    report = 6;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/billing/hooks/useSubscriptionPlansLoaded.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function() { // Original name: useSubscriptionPlansLoaded
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            oscard = arguments[0];
            report = undefined;
            if(!(oscard === report)) { _fun00010_ip = 34; continue _fun00009 }
 11:
            verify = _closure1_slot5;
            michal = new Array(0);
            option = 0;
            offset = michal;
            zuuluu = arraySpread(offset, verify, option);
            oscard = michal;
 34:
            var _closure2_slot0 = oscard;
            tangon = _closure1_slot0;
            golfie = _closure1_slot1;
            zuuluu = 5;
            zuuluu = golfie[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.useStateFromStores;
            golfie = _closure1_slot2;
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            golfie = _closure1_slot3;
            zuuluu[1] = golfie;
            michal = _closure1_slot4;
            zuuluu[2] = michal;
            michal = new Array(1);
            michal[0] = oscard;
            entity = function() {
                tangon = _closure1_slot9;
                zuuluu = _closure2_slot0;
                report = _closure1_slot2;
                michal = new Array(3);
                michal[0] = report;
                report = _closure1_slot3;
                michal[1] = report;
                entity = _closure1_slot4;
                michal[2] = entity;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['useSubscriptionPlansLoaded'] = tangon;
    zuuluu['getSubscriptionPlansLoaded'] = michal;
    return entity;
})();