// app/modules/collectibles/hooks/usePurchasedProductsSort.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            verify = _closure1_slot7;
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
            golfie = _closure1_slot7;
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
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    verify = 0;
    tangon = oscard[verify];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useMemo;
    var _closure1_slot3 = tangon;
    option = 1;
    tangon = oscard[option];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = {};
    tangon['NOT_PURCHASED'] = verify;
    golfie = 'NOT_PURCHASED';
    tangon[verify] = golfie;
    tangon['PARTIAL_OWNED_VARIANTS_GROUP'] = option;
    golfie = 'PARTIAL_OWNED_VARIANTS_GROUP';
    tangon[option] = golfie;
    option = 2;
    tangon['PARTIAL_OWNED_BUNDLE'] = option;
    golfie = 'PARTIAL_OWNED_BUNDLE';
    tangon[option] = golfie;
    option = 3;
    tangon['PURCHASED'] = option;
    golfie = 'PURCHASED';
    tangon[option] = golfie;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/hooks/usePurchasedProductsSort.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        report = argFoo;
        var _closure2_slot0 = report;
        oscard = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 2;
        zuuluu = tangon[zuuluu];
        tangon = undefined;
        option = oscard.bind(tangon)(zuuluu);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot4;
        oscard = new Array(1);
        oscard[0] = zuuluu;
        zuuluu = function() {
            entity = _closure1_slot4;
            entity = entity.purchases;
            return entity;
        };
        oscard = golfie.bind(option)(oscard, zuuluu);
        zuuluu = _closure1_slot3;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = new Array(4);
                entity = new Array(0);
                zuuluu[0] = entity;
                entity = new Array(0);
                zuuluu[1] = entity;
                entity = new Array(0);
                zuuluu[2] = entity;
                entity = new Array(0);
                zuuluu[3] = entity;
                report = _closure1_slot6;
                tangon = _closure2_slot0;
                michal = tangon.values;
                tangon = michal.bind(tangon)();
                michal = undefined;
                golfie = report.bind(michal)(tangon);
                report = golfie.bind(michal)();
                tangon = report.done;
                oscard = 3;
                if(tangon) { _fun00008_ip = 212; continue _fun00007 }
 84:
                verify = report.value;
                option = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[oscard];
                offset = option.bind(michal)(tangon);
                option = offset.getProductPurchaseState;
                tangon = _closure1_slot4;
                option = option.bind(offset)(tangon, verify);
                tangon = option.isPurchased;
                yankee = option.isPartiallyOwnedBundle;
                offset = option.isPartiallyOwnedVariantsGroup;
                option = _closure1_slot5;
                if(yankee) { _fun00008_ip = 177; continue _fun00007 }
 147:
                if(offset) { _fun00008_ip = 169; continue _fun00007 }
 150:
                if(tangon) { _fun00008_ip = 161; continue _fun00007 }
 153:
                tangon = option.NOT_PURCHASED;
                _fun00008_ip = 167; continue _fun00007;
 161:
                tangon = option.PURCHASED;
 167:
                _fun00008_ip = 175; continue _fun00007;
 169:
                tangon = option.PARTIAL_OWNED_VARIANTS_GROUP;
 175:
                _fun00008_ip = 183; continue _fun00007;
 177:
                tangon = option.PARTIAL_OWNED_BUNDLE;
 183:
                option = zuuluu[tangon];
                tangon = option.push;
                tangon = tangon.bind(option)(verify);
                option = golfie.bind(michal)();
                tangon = option.done;
                report = option;
                if(!tangon) { _fun00008_ip = 84; continue _fun00007 }
 212:
                tangon = _closure1_slot1;
                report = _closure1_slot2;
                entity = 4;
                entity = report[entity];
                entity = tangon.bind(michal)(entity);
                entity = entity.bind(michal)(zuuluu);
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['usePurchasedProductsSort'] = michal;
    return entity;
})();