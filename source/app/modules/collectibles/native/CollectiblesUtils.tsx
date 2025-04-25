// app/modules/collectibles/native/CollectiblesUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    report = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = report;
    var _closure1_slot2 = verify;
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
            verify = _closure1_slot10;
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
            golfie = _closure1_slot10;
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
    var _closure1_slot9 = entity;
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
    var _closure1_slot10 = entity;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = verify[tangon];
    tangon = option.bind(entity)(tangon);
    tangon = tangon.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot4 = tangon;
    oscard = function(argFoo, argBar) { // Original name: extractPriceByPurchaseTypes
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            golfie = argBar;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.isAndroid;
            tangon = tangon.bind(report)();
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            if(tangon) { _fun00008_ip = 77; continue _fun00007 }
 51:
            tangon = 6;
            tangon = oscard[tangon];
            option = report.bind(entity)(tangon);
            tangon = option.extractPriceByPurchaseTypes;
            tangon = tangon.bind(option)(michal, golfie);
            return tangon;
 77:
            tangon = 4;
            tangon = oscard[tangon];
            oscard = report.bind(entity)(tangon);
            report = oscard.isInCollectiblesMobileBundleExperiment;
            tangon = 'collectiblesUtils';
            tangon = report.bind(oscard)(tangon);
            if(tangon) { _fun00008_ip = 124; continue _fun00007 }
 109:
            tangon = _closure1_slot6;
            tangon = tangon.bind(entity)(michal);
            if(!tangon) { _fun00008_ip = 256; continue _fun00007 }
 124:
            tangon = _closure1_slot4;
            tangon = tangon.MOBILE;
            if(!(golfie !== tangon)) { _fun00008_ip = 152; continue _fun00007 }
 138:
            tangon = _closure1_slot4;
            tangon = tangon.MOBILE_PREMIUM_TIER_2;
            if(!(golfie === tangon)) { _fun00008_ip = 256; continue _fun00007 }
 152:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.getProduct;
            oscard = michal.googleSkuIds;
            michal = null;
            option = michal == oscard;
            zuuluu = undefined;
            if(option) { _fun00008_ip = 199; continue _fun00007 }
 195:
            zuuluu = oscard[golfie];
 199:
            zuuluu = tangon.bind(report)(zuuluu);
            michal = michal != zuuluu;
            entity = undefined;
            if(!michal) { _fun00008_ip = 254; continue _fun00007 }
 213:
            michal = {};
            tangon = zuuluu.price;
            michal['amount'] = tangon;
            zuuluu = zuuluu.currencyCode;
            michal['currency'] = zuuluu;
            zuuluu = 0;
            michal['tax'] = zuuluu;
            zuuluu = false;
            michal['taxInclusive'] = zuuluu;
            entity = michal;
 254:
            return entity;
 256:
            entity = null;
            return entity;
        }
    };
    var _closure1_slot5 = oscard;
    report = function(argFoo) { // Original name: isNotBundleProduct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            entity = entity == zuuluu;
            oscard = undefined;
            tangon = undefined;
            if(entity) { _fun00010_ip = 21; continue _fun00009 }
 16:
            tangon = zuuluu.type;
 21:
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 7;
            entity = golfie[entity];
            entity = report.bind(oscard)(entity);
            entity = entity.CollectiblesItemType;
            entity = entity.BUNDLE;
            entity = tangon !== entity;
            if(!entity) { _fun00010_ip = 71; continue _fun00009 }
 63:
            michal = _closure1_slot3;
            entity = zuuluu instanceof michal;
 71:
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo) { // Original name: isGPlaySynced
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot1;
            entity = _closure1_slot2;
            option = 5;
            entity = entity[option];
            michal = undefined;
            report = zuuluu.bind(michal)(entity);
            tangon = report.getProduct;
            offset = golfie.googleSkuIds;
            zuuluu = null;
            verify = zuuluu == offset;
            entity = undefined;
            if(verify) { _fun00012_ip = 65; continue _fun00011 }
 51:
            verify = _closure1_slot4;
            verify = verify.MOBILE;
            entity = offset[verify];
 65:
            entity = tangon.bind(report)(entity);
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[option];
            report = report.bind(michal)(tangon);
            tangon = report.getProduct;
            golfie = golfie.googleSkuIds;
            option = zuuluu == golfie;
            michal = undefined;
            if(option) { _fun00012_ip = 122; continue _fun00011 }
 108:
            oscard = _closure1_slot4;
            oscard = oscard.MOBILE_PREMIUM_TIER_2;
            michal = golfie[oscard];
 122:
            michal = tangon.bind(report)(michal);
            entity = zuuluu != entity;
            if(!entity) { _fun00012_ip = 138; continue _fun00011 }
 134:
            entity = zuuluu != michal;
 138:
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
    golfie = function(argFoo) { // Original name: hasAtLeastOneGPlaySynced
        entity = argFoo;
        zuuluu = entity.products;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            zuuluu = _closure1_slot7;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        michal = entity.length;
        entity = 0;
        entity = michal > entity;
        return entity;
    };
    var _closure1_slot8 = golfie;
    golfie = 8;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/collectibles/native/CollectiblesUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo, argBar, argBaz) {
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argBar;
            michal = _closure1_slot4;
            tangon = argBaz;
            if(tangon) { _fun00014_ip = 35; continue _fun00013 }
 16:
            if(entity) { _fun00014_ip = 27; continue _fun00013 }
 19:
            report = michal.DEFAULT;
            _fun00014_ip = 33; continue _fun00013;
 27:
            report = michal.PREMIUM_TIER_2;
 33:
            _fun00014_ip = 55; continue _fun00013;
 35:
            if(entity) { _fun00014_ip = 46; continue _fun00013 }
 38:
            entity = michal.MOBILE;
            _fun00014_ip = 52; continue _fun00013;
 46:
            entity = michal.MOBILE_PREMIUM_TIER_2;
 52:
            report = entity;
 55:
            tangon = _closure1_slot5;
            michal = undefined;
            entity = argFoo;
            oscard = tangon.bind(michal)(entity, report);
            golfie = null;
            tangon = golfie == oscard;
            entity = '';
            if(tangon) { _fun00014_ip = 145; continue _fun00013 }
 83:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            report = tangon.bind(michal)(zuuluu);
            tangon = report.formatPrice;
            option = golfie == oscard;
            zuuluu = undefined;
            if(option) { _fun00014_ip = 124; continue _fun00013 }
 118:
            zuuluu = oscard.amount;
 124:
            golfie = golfie == oscard;
            michal = undefined;
            if(golfie) { _fun00014_ip = 139; continue _fun00013 }
 133:
            michal = oscard.currency;
 139:
            entity = tangon.bind(report)(zuuluu, michal);
 145:
            return entity;
        }
    };
    zuuluu['getFormattedPriceForCollectiblesProduct'] = golfie;
    zuuluu['extractPriceByPurchaseTypes'] = oscard;
    oscard = function(argFoo) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            golfie = argFoo;
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 6;
            entity = tangon[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.getBundleItemsPriceSum;
            oscard = entity.bind(zuuluu)(golfie);
            tangon = 0;
            if(!(tangon !== oscard)) { _fun00016_ip = 132; continue _fun00015 }
 45:
            zuuluu = golfie.bundledProducts;
            entity = null;
            if(!(entity != zuuluu)) { _fun00016_ip = 130; continue _fun00015 }
 57:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot4;
            michal = michal.MOBILE;
            michal = zuuluu.bind(report)(golfie, michal);
            zuuluu = entity == michal;
            report = undefined;
            if(zuuluu) { _fun00016_ip = 92; continue _fun00015 }
 86:
            report = michal.currency;
 92:
            zuuluu = entity == report;
            michal = null;
            if(zuuluu) { _fun00016_ip = 128; continue _fun00015 }
 101:
            zuuluu = {};
            zuuluu['amount'] = oscard;
            zuuluu['currency'] = report;
            zuuluu['tax'] = tangon;
            tangon = false;
            zuuluu['taxInclusive'] = tangon;
            michal = zuuluu;
 128:
            return michal;
 130:
            return entity;
 132:
            entity = null;
            return entity;
        }
    };
    zuuluu['getBundleTotalFormattedPrice'] = oscard;
    oscard = function(argFoo, argBar) {
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 6;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.getProductDiscount;
        michal = argFoo;
        entity = argBar;
        entity = zuuluu.bind(tangon)(michal, entity);
        tangon = entity.discountPercentage;
        entity = global;
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = '';
        entity = '%';
        entity = zuuluu.bind(michal)(tangon, entity);
        return entity;
    };
    zuuluu['getBundleDiscount'] = oscard;
    zuuluu['isNotBundleProduct'] = report;
    zuuluu['isGPlaySynced'] = tangon;
    michal = function(argFoo) {
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00018_ip = 92; continue _fun00017 }
 9:
            entity = new Array(0);
            zuuluu = _closure1_slot9;
            michal = tangon.values;
            michal = michal.bind(tangon)();
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.bind(report)();
            michal = zuuluu.done;
            if(michal) { _fun00018_ip = 90; continue _fun00017 }
 48:
            golfie = zuuluu.value;
            michal = _closure1_slot8;
            michal = michal.bind(report)(golfie);
            if(!michal) { _fun00018_ip = 75; continue _fun00017 }
 65:
            michal = entity.push;
            michal = michal.bind(entity)(golfie);
 75:
            golfie = tangon.bind(report)();
            michal = golfie.done;
            zuuluu = golfie;
            if(!michal) { _fun00018_ip = 48; continue _fun00017 }
 90:
            return entity;
 92:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['filterGPlaySyncedCategories'] = michal;
    return entity;
})();