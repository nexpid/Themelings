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
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
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
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot7;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot7;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
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
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
    michal = function() { // Original name: getSubscriptionPlansLoaded
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golfie = arguments[0];
            entity = arguments[1];
            oscard = undefined;
            if(!(golfie === oscard)) { _fun00008_ip = 35; continue _fun00007 }
 12:
            romeon = _closure1_slot5;
            michal = new Array(0);
            yankee = 0;
            foxtra = michal;
            zuuluu = arraySpread(foxtra, romeon, yankee);
            golfie = michal;
 35:
            if(!(entity === oscard)) { _fun00008_ip = 73; continue _fun00007 }
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
            tangon = entity;
            michal = tangon[Symbol.iterator];
            tangon = michal().next;
            report = tangon().value;
            entity = michal;
            zuuluu = entity === oscard;
            entity = undefined;
            if(zuuluu) { _fun00008_ip = 98; continue _fun00007 }
 95:
            entity = report;
 98:
            report = undefined;
            if(zuuluu) { _fun00008_ip = 128; continue _fun00007 }
 103:
            verify = tangon().value;
            option = michal;
            option = option === oscard;
            report = undefined;
            zuuluu = option;
            if(option) { _fun00008_ip = 128; continue _fun00007 }
 122:
            report = verify;
            zuuluu = option;
 128:
            option = undefined;
            if(zuuluu) { _fun00008_ip = 158; continue _fun00007 }
 133:
            verify = tangon().value;
            tangon = michal;
            tangon = tangon === oscard;
            option = undefined;
            zuuluu = tangon;
            if(tangon) { _fun00008_ip = 158; continue _fun00007 }
 152:
            option = verify;
            zuuluu = tangon;
 158:
            if(zuuluu) { _fun00008_ip = 164; continue _fun00007 }
 161:
            michal.return();
 164:
            zuuluu = entity.paymentSourceIds;
            tangon = entity.defaultPaymentSourceId;
            entity = report.isLoadedForSKUs;
            entity = entity.bind(report)(golfie);
            michal = option.getPremiumTypeSubscription;
            option = michal.bind(option)();
            michal = null;
            offset = michal == option;
            verify = undefined;
            if(offset) { _fun00008_ip = 218; continue _fun00007 }
 212:
            verify = option.paymentSourceId;
 218:
            if(!(michal != verify)) { _fun00008_ip = 241; continue _fun00007 }
 222:
            option = report.hasPaymentSourceForSKUIds;
            option = option.bind(report)(verify, golfie);
            if(option) { _fun00008_ip = 241; continue _fun00007 }
 237:
            option = false;
            return option;
 241:
            if(!(michal != tangon)) { _fun00008_ip = 264; continue _fun00007 }
 245:
            michal = report.hasPaymentSourceForSKUIds;
            michal = michal.bind(report)(tangon, golfie);
            if(michal) { _fun00008_ip = 264; continue _fun00007 }
 260:
            michal = false;
            return michal;
 264:
            michal = _closure1_slot6;
            tangon = michal.bind(oscard)(zuuluu);
            zuuluu = tangon.bind(oscard)();
            michal = zuuluu.done;
            if(michal) { _fun00008_ip = 327; continue _fun00007 }
 288:
            option = zuuluu.value;
            michal = report.hasPaymentSourceForSKUIds;
            michal = michal.bind(report)(option, golfie);
            if(michal) { _fun00008_ip = 312; continue _fun00007 }
 308:
            michal = false;
            return michal;
 312:
            option = tangon.bind(oscard)();
            michal = option.done;
            zuuluu = option;
            if(!michal) { _fun00008_ip = 288; continue _fun00007 }
 327:
            return entity;
        }
    };
    var _closure1_slot8 = michal;
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
                tangon = _closure1_slot8;
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