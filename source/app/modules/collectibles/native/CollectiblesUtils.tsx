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
            verify = _closure1_slot10;
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
            golfie = _closure1_slot10;
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
            if(!tangon) { _fun00008_ip = 267; continue _fun00007 }
 124:
            tangon = _closure1_slot4;
            tangon = tangon.MOBILE;
            if(!(golfie !== tangon)) { _fun00008_ip = 152; continue _fun00007 }
 138:
            tangon = _closure1_slot4;
            tangon = tangon.MOBILE_PREMIUM_TIER_2;
            if(!(golfie === tangon)) { _fun00008_ip = 267; continue _fun00007 }
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
            if(!michal) { _fun00008_ip = 265; continue _fun00007 }
 213:
            michal = {};
            tangon = zuuluu.price;
            michal['amount'] = tangon;
            tangon = zuuluu.currencyCode;
            michal['currency'] = tangon;
            zuuluu = zuuluu.priceString;
            michal['priceString'] = zuuluu;
            zuuluu = 0;
            michal['tax'] = zuuluu;
            zuuluu = false;
            michal['taxInclusive'] = zuuluu;
            entity = michal;
 265:
            return entity;
 267:
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
            zuuluu = _closure1_slot4;
            tangon = argBaz;
            if(tangon) { _fun00014_ip = 35; continue _fun00013 }
 16:
            if(entity) { _fun00014_ip = 27; continue _fun00013 }
 19:
            tangon = zuuluu.DEFAULT;
            _fun00014_ip = 33; continue _fun00013;
 27:
            tangon = zuuluu.PREMIUM_TIER_2;
 33:
            _fun00014_ip = 55; continue _fun00013;
 35:
            if(entity) { _fun00014_ip = 46; continue _fun00013 }
 38:
            entity = zuuluu.MOBILE;
            _fun00014_ip = 52; continue _fun00013;
 46:
            entity = zuuluu.MOBILE_PREMIUM_TIER_2;
 52:
            tangon = entity;
 55:
            zuuluu = _closure1_slot5;
            report = undefined;
            entity = argFoo;
            zuuluu = zuuluu.bind(report)(entity, tangon);
            oscard = null;
            tangon = oscard == zuuluu;
            entity = '';
            if(tangon) { _fun00014_ip = 148; continue _fun00013 }
 83:
            tangon = zuuluu.priceString;
            if(!(oscard == tangon)) { _fun00014_ip = 139; continue _fun00013 }
 93:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            oscard = tangon.bind(report)(michal);
            report = oscard.formatPrice;
            tangon = zuuluu.amount;
            michal = zuuluu.currency;
            michal = report.bind(oscard)(tangon, michal);
            _fun00014_ip = 145; continue _fun00013;
 139:
            michal = zuuluu.priceString;
 145:
            entity = michal;
 148:
            return entity;
        }
    };
    zuuluu['getFormattedPriceForCollectiblesProduct'] = golfie;
    zuuluu['extractPriceByPurchaseTypes'] = oscard;
    zuuluu['isNotBundleProduct'] = report;
    zuuluu['isGPlaySynced'] = tangon;
    tangon = function(argFoo) {
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00016_ip = 92; continue _fun00015 }
 9:
            entity = new Array(0);
            zuuluu = _closure1_slot9;
            michal = tangon.values;
            michal = michal.bind(tangon)();
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.bind(report)();
            michal = zuuluu.done;
            if(michal) { _fun00016_ip = 90; continue _fun00015 }
 48:
            golfie = zuuluu.value;
            michal = _closure1_slot8;
            michal = michal.bind(report)(golfie);
            if(!michal) { _fun00016_ip = 75; continue _fun00015 }
 65:
            michal = entity.push;
            michal = michal.bind(entity)(golfie);
 75:
            golfie = tangon.bind(report)();
            michal = golfie.done;
            zuuluu = golfie;
            if(!michal) { _fun00016_ip = 48; continue _fun00015 }
 90:
            return entity;
 92:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['filterGPlaySyncedCategories'] = tangon;
    michal = function(argFoo) {
        zuuluu = argFoo;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argFoo;
                zuuluu = michal.unpublishedAt;
                entity = null;
                entity = entity == zuuluu;
                if(entity) { _fun00018_ip = 56; continue _fun00017 }
 18:
                tangon = michal.unpublishedAt;
                zuuluu = global;
                zuuluu = zuuluu.Date;
                report = zuuluu.prototype;
                report = Object.create(report, {constructor: {value: zuuluu}});
                golfie = report;
                zuuluu = new golfie[zuuluu](oscard);
                zuuluu = zuuluu instanceof Object ? zuuluu : report;
                entity = tangon > zuuluu;
 56:
                zuuluu = michal.products;
                tangon = zuuluu.length;
                zuuluu = 0;
                zuuluu = tangon > zuuluu;
                report = michal.products;
                tangon = report.some;
                michal = function(argFoo) {
                    entity = argFoo;
                    zuuluu = entity.items;
                    michal = zuuluu.some;
                    entity = function(argFoo) {
                        entity = argFoo;
                        michal = entity.type;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 7;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        entity = tangon.bind(entity)(zuuluu);
                        entity = entity.CollectiblesItemType;
                        entity = entity.NAMEPLATE;
                        entity = michal === entity;
                        return entity;
                    };
                    entity = michal.bind(zuuluu)(entity);
                    entity = !entity;
                    return entity;
                };
                michal = tangon.bind(report)(michal);
                if(!entity) { _fun00018_ip = 105; continue _fun00017 }
 102:
                entity = zuuluu;
 105:
                if(!entity) { _fun00018_ip = 111; continue _fun00017 }
 108:
                entity = michal;
 111:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['filterHiddenCategories'] = michal;
    return entity;
})();