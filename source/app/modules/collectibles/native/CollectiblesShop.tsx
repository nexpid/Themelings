// app/modules/collectibles/native/CollectiblesShop.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
            verify = _closure1_slot17;
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
            golfie = _closure1_slot17;
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
    var _closure1_slot16 = entity;
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
    var _closure1_slot17 = entity;
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ActivityIndicator;
    var _closure1_slot5 = option;
    option = tangon.StyleSheet;
    var _closure1_slot6 = option;
    tangon = tangon.View;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot10 = golfie;
    tangon = tangon.PaymentGateways;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot12 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'height': '100%', 'width': '100%'};
    tangon['rootContainer'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'zIndex': 5};
    tangon['blur'] = verify;
    verify = {};
    offset = 56;
    verify['height'] = offset;
    tangon['header'] = verify;
    verify = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967288, 'marginLeft': 4294967288};
    tangon['spinner'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot14 = tangon;
    tangon = function() { // Original name: ListHeader
        michal = _closure1_slot14;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot12;
        michal = _closure1_slot7;
        entity = {};
        report = report.header;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot15 = tangon;
    tangon = 41;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShop.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: _default
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            sizing = entity.analyticsSource;
            var _closure2_slot0 = sizing;
            target = entity.onClose;
            oscard = undefined;
            var _closure2_slot1 = oscard;
            var _closure2_slot2 = oscard;
            var _closure2_slot3 = oscard;
            var _closure2_slot4 = oscard;
            var _closure2_slot5 = oscard;
            var _closure2_slot6 = oscard;
            var _closure2_slot7 = oscard;
            var _closure2_slot8 = oscard;
            var _closure2_slot9 = oscard;
            var _closure2_slot10 = oscard;
            report = _closure1_slot0;
            entity = _closure1_slot2;
            michal = 8;
            michal = entity[michal];
            golfie = report.bind(oscard)(michal);
            tangon = golfie.useCommonTriggerPoint;
            michal = 9;
            michal = entity[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.CollectiblesShopOpenTriggerPoint;
            michal = tangon.bind(golfie)(michal);
            michal = 10;
            michal = entity[michal];
            golfie = report.bind(oscard)(michal);
            tangon = golfie.useMobileCanPurchaseNameplates;
            michal = 'CollectiblesShop';
            output = tangon.bind(golfie)(michal);
            michal = 11;
            tangon = entity[michal];
            verify = report.bind(oscard)(tangon);
            option = verify.useStateFromStoresArray;
            tangon = _closure1_slot9;
            golfie = new Array(1);
            golfie[0] = tangon;
            tangon = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure1_slot9;
                    entity = entity.lastSuccessfulFetch;
                    michal = null;
                    zuuluu = michal != entity;
                    michal = 0;
                    if(!zuuluu) { _fun00010_ip = 27; continue _fun00009 }
 24:
                    michal = entity;
 27:
                    entity = new Array(1);
                    entity[0] = michal;
                    return entity;
                }
            };
            option = option.bind(verify)(golfie, tangon);
            golfie = _closure1_slot3;
            tangon = 1;
            tangon = golfie.bind(oscard)(option, tangon);
            verify = 0;
            tangon = tangon[verify];
            golfie = global;
            option = golfie.Date;
            golfie = option.now;
            golfie = golfie.bind(option)();
            option = golfie - tangon;
            golfie = 12;
            golfie = entity[golfie];
            golfie = report.bind(oscard)(golfie);
            golfie = golfie.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            offset = option > golfie;
            cntext = 13;
            entity = entity[cntext];
            report = report.bind(oscard)(entity);
            entity = report.isAndroid;
            option = entity.bind(report)();
            if(option) { _fun00008_ip = 319; continue _fun00007 }
 273:
            report = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[cntext];
            report = report.bind(oscard)(entity);
            entity = report.isIOS;
            entity = entity.bind(report)();
            if(!entity) { _fun00008_ip = 316; continue _fun00007 }
 303:
            report = verify === tangon;
            if(report) { _fun00008_ip = 313; continue _fun00007 }
 310:
            report = offset;
 313:
            entity = report;
 316:
            option = entity;
 319:
            entity = _closure1_slot14;
            golfie = entity.bind(oscard)();
            romeon = _closure1_slot1;
            foxtra = _closure1_slot2;
            entity = 14;
            entity = foxtra[entity];
            report = romeon.bind(oscard)(entity);
            entity = {};
            yankee = _closure1_slot11;
            yankee = yankee.APPLE;
            entity['paymentGateway'] = yankee;
            backup = 'CollectiblesShop.native';
            entity['location'] = backup;
            option = !option;
            entity['noOp'] = option;
            entity = report.bind(oscard)(entity);
            report = entity.categories;
            _closure2_slot1 = report;
            yankee = entity.isFetchingCategories;
            _closure2_slot2 = yankee;
            option = _closure1_slot0;
            entity = 15;
            entity = foxtra[entity];
            option = option.bind(oscard)(entity);
            entity = option.useCollectiblesMobileBundle;
            sequen = entity.bind(option)(backup);
            _closure2_slot3 = sequen;
            entity = 16;
            entity = foxtra[entity];
            option = romeon.bind(oscard)(entity);
            entity = 'shop_include_unpublished';
            backup = option.bind(oscard)(entity);
            _closure2_slot4 = backup;
            result = _closure1_slot4;
            kiloes = result.useMemo;
            option = new Array(2);
            option[0] = report;
            option[1] = yankee;
            entity = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zuuluu)) { _fun00012_ip = 145; continue _fun00011 }
 18:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 13;
                    entity = report[entity];
                    report = undefined;
                    tangon = tangon.bind(report)(entity);
                    entity = tangon.isAndroid;
                    tangon = entity.bind(tangon)();
                    entity = false;
                    if(!(entity !== tangon)) { _fun00012_ip = 145; continue _fun00011 }
 58:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    zuuluu = _closure1_slot16;
                    tangon = _closure2_slot1;
                    michal = tangon.values;
                    michal = michal.bind(tangon)();
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.bind(report)();
                    michal = zuuluu.done;
                    if(michal) { _fun00012_ip = 143; continue _fun00011 }
 100:
                    michal = zuuluu.value;
                    option = michal.products;
                    golfie = option.forEach;
                    michal = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.googleSkuIds;
                            entity = undefined;
                            zuuluu = entity !== zuuluu;
                            if(!zuuluu) { _fun00014_ip = 30; continue _fun00013 }
 18:
                            report = michal.googleSkuIds;
                            tangon = null;
                            zuuluu = tangon !== report;
 30:
                            if(!zuuluu) { _fun00014_ip = 95; continue _fun00013 }
 33:
                            tangon = _closure3_slot0;
                            zuuluu = tangon.push;
                            report = global;
                            oscard = report.Object;
                            report = oscard.values;
                            michal = michal.googleSkuIds;
                            option = report.bind(oscard)(michal);
                            michal = new Array(0);
                            golfie = 0;
                            verify = michal;
                            report = arraySpread(verify, option, golfie);
                            verify = zuuluu;
                            option = michal;
                            golfie = tangon;
                            michal = apply(verify, option, golfie);
 95:
                            return entity;
                        }
                    };
                    michal = golfie.bind(option)(michal);
                    golfie = tangon.bind(report)();
                    michal = golfie.done;
                    zuuluu = golfie;
                    if(!michal) { _fun00012_ip = 100; continue _fun00011 }
 143:
                    return entity;
 145:
                    entity = new Array(0);
                    return entity;
                }
            };
            kiloes = kiloes.bind(result)(entity, option);
            option = 17;
            entity = foxtra[option];
            result = romeon.bind(oscard)(entity);
            entity = result.useNativeIAPPayments;
            entity = entity.bind(result)();
            config = entity.nativePaymentsConnected;
            _closure2_slot5 = config;
            entity = entity.storeFront;
            option = foxtra[option];
            foxtra = romeon.bind(oscard)(option);
            romeon = foxtra.useGoogleSkuIds;
            option = true;
            option = option === yankee;
            option = romeon.bind(foxtra)(kiloes, option);
            foxtra = option.isFetchingGoogleSkus;
            result = null;
            option = result == entity;
            record = undefined;
            if(option) { _fun00008_ip = 587; continue _fun00007 }
 581:
            record = entity.country;
 587:
            _closure2_slot6 = record;
            vacuum = _closure1_slot0;
            romeon = _closure1_slot2;
            entity = 18;
            entity = romeon[entity];
            option = vacuum.bind(oscard)(entity);
            entity = option.useReloadProfileEffectWhenConfigsAreMissing;
            entity = entity.bind(option)();
            entity = 19;
            entity = romeon[entity];
            option = vacuum.bind(oscard)(entity);
            entity = option.useCurrentUserIfAvailable;
            entity = entity.bind(option)();
            _closure2_slot7 = entity;
            option = 20;
            option = romeon[option];
            kiloes = vacuum.bind(oscard)(option);
            option = kiloes.usePurchasedCategoriesSort;
            papara = option.bind(kiloes)(report);
            michal = romeon[michal];
            echoed = vacuum.bind(oscard)(michal);
            kiloes = echoed.useStateFromStores;
            michal = _closure1_slot8;
            option = new Array(1);
            option[0] = michal;
            michal = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 21;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isThemeDark;
                entity = _closure1_slot8;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal = kiloes.bind(echoed)(option, michal);
            _closure2_slot8 = michal;
            michal = 21;
            michal = romeon[michal];
            option = vacuum.bind(oscard)(michal);
            michal = option.useThemeContext;
            michal = michal.bind(option)();
            kiloes = michal.theme;
            update = _closure1_slot1;
            michal = 22;
            option = romeon[michal];
            echoed = update.bind(oscard)(option);
            option = 23;
            option = romeon[option];
            option = update.bind(oscard)(option);
            ctrled = option.COLLECTIBLES_SHOP;
            option = new Array(1);
            option[0] = ctrled;
            option = echoed.bind(oscard)(option);
            option = option.analyticsLocations;
            _closure2_slot9 = option;
            echoed = 24;
            echoed = romeon[echoed];
            ctrled = update.bind(oscard)(echoed);
            echoed = {};
            echoed['onClose'] = target;
            echoed = ctrled.bind(oscard)(echoed);
            echoed = 25;
            echoed = romeon[echoed];
            echoed = update.bind(oscard)(echoed);
            echoed = echoed.bind(oscard)();
            echoed = echoed.top;
            target = 26;
            update = romeon[target];
            ctrled = vacuum.bind(oscard)(update);
            update = ctrled.filterHiddenCategories;
            output = !output;
            romeon = romeon[cntext];
            vacuum = vacuum.bind(oscard)(romeon);
            romeon = vacuum.isAndroid;
            vacuum = romeon.bind(vacuum)();
            romeon = papara;
            if(!vacuum) { _fun00008_ip = 915; continue _fun00007 }
 887:
            cntext = _closure1_slot0;
            vacuum = _closure1_slot2;
            vacuum = vacuum[target];
            cntext = cntext.bind(oscard)(vacuum);
            vacuum = cntext.filterGPlaySyncedCategories;
            romeon = vacuum.bind(cntext)(papara);
 915:
            ctrled = update.bind(ctrled)(output, romeon);
            vacuum = _closure1_slot0;
            cntext = _closure1_slot2;
            romeon = 27;
            romeon = cntext[romeon];
            update = vacuum.bind(oscard)(romeon);
            output = update.useCollectiblesShopDeepLinkProps;
            romeon = {};
            romeon['categories'] = ctrled;
            romeon = output.bind(update)(romeon);
            update = romeon.categoryIndex;
            output = _closure1_slot1;
            romeon = 28;
            romeon = cntext[romeon];
            output = output.bind(oscard)(romeon);
            romeon = 29;
            romeon = cntext[romeon];
            vacuum = vacuum.bind(oscard)(romeon);
            romeon = vacuum.v4;
            romeon = romeon.bind(vacuum)();
            romeon = output.bind(oscard)(romeon);
            _closure2_slot10 = romeon;
            vacuum = _closure1_slot4;
            cntext = vacuum.useEffect;
            output = new Array(3);
            output[0] = option;
            output[1] = sizing;
            output[2] = romeon;
            sizing = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 30;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot10;
                zuuluu = michal.COLLECTIBLES_SHOP_VIEWED;
                michal = {};
                golfie = _closure2_slot9;
                michal['location_stack'] = golfie;
                golfie = _closure2_slot10;
                michal['page_session_id'] = golfie;
                oscard = _closure2_slot0;
                michal['source'] = oscard;
                oscard = 'home';
                michal['page_type'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            sizing = cntext.bind(vacuum)(sizing, output);
            output = vacuum.useEffect;
            sizing = new Array(4);
            sizing[0] = record;
            sizing[1] = config;
            sizing[2] = sequen;
            sizing[3] = backup;
            backup = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00016_ip = 20; continue _fun00015 }
 10:
                    zuuluu = _closure2_slot6;
                    michal = null;
                    entity = michal != zuuluu;
 20:
                    if(!entity) { _fun00016_ip = 110; continue _fun00015 }
 23:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 31;
                    michal = michal[entity];
                    entity = undefined;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.fetchCollectiblesCategories;
                    entity = {};
                    oscard = _closure2_slot6;
                    entity['countryCode'] = oscard;
                    report = _closure1_slot11;
                    report = report.APPLE;
                    entity['paymentGateway'] = report;
                    report = _closure2_slot3;
                    entity['includeBundles'] = report;
                    tangon = _closure2_slot4;
                    entity['includeUnpublished'] = tangon;
                    tangon = true;
                    entity['includeNameplatesOnMobile'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 110:
                    entity = undefined;
                    return entity;
                }
            };
            backup = output.bind(vacuum)(backup, sizing);
            output = vacuum.useEffect;
            sizing = new Array(1);
            sizing[0] = entity;
            backup = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 52; continue _fun00017 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 32;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    entity = _closure2_slot7;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 52:
                    entity = undefined;
                    return entity;
                }
            };
            backup = output.bind(vacuum)(backup, sizing);
            backup = result == entity;
            entity = null;
            if(backup) { _fun00008_ip = 1716; continue _fun00007 }
 1126:
            if(yankee) { _fun00008_ip = 1132; continue _fun00007 }
 1129:
            if(!foxtra) { _fun00008_ip = 1150; continue _fun00007 }
 1132:
            foxtra = report.size;
            if(!(verify !== foxtra)) { _fun00008_ip = 1679; continue _fun00007 }
 1144:
            if(offset) { _fun00008_ip = 1679; continue _fun00007 }
 1150:
            tangon = tangon > verify;
            if(!tangon) { _fun00008_ip = 1163; continue _fun00007 }
 1157:
            offset = false;
            tangon = offset === yankee;
 1163:
            if(!tangon) { _fun00008_ip = 1175; continue _fun00007 }
 1166:
            report = report.size;
            tangon = verify === report;
 1175:
            if(!tangon) { _fun00008_ip = 1215; continue _fun00007 }
 1178:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 33;
            tangon = verify[tangon];
            verify = report.bind(oscard)(tangon);
            report = verify.captureMessage;
            tangon = 'collectibles mobile shop loaded empty categories';
            tangon = report.bind(verify)(tangon);
 1215:
            report = _closure1_slot12;
            vacuum = _closure1_slot0;
            backup = _closure1_slot2;
            michal = backup[michal];
            michal = vacuum.bind(oscard)(michal);
            tangon = michal.AnalyticsLocationProvider;
            michal = {};
            michal['value'] = option;
            offset = _closure1_slot13;
            option = 34;
            option = backup[option];
            option = vacuum.bind(oscard)(option);
            verify = option.CollectiblesAnalyticsProvider;
            option = {};
            yankee = {};
            yankee['sessionId'] = romeon;
            option['newValue'] = yankee;
            foxtra = _closure1_slot1;
            yankee = 35;
            yankee = backup[yankee];
            romeon = foxtra.bind(oscard)(yankee);
            yankee = {};
            sizing = 0.5;
            yankee['blurAmount'] = sizing;
            sizing = _closure1_slot6;
            output = sizing.absoluteFill;
            sizing = new Array(3);
            sizing[0] = output;
            output = golfie.blur;
            sizing[1] = output;
            output = {};
            sequen = 48;
            sequen = sequen + echoed;
            output['height'] = sequen;
            sizing[2] = output;
            yankee['style'] = sizing;
            yankee['blurTheme'] = kiloes;
            romeon = report.bind(oscard)(romeon, yankee);
            yankee = new Array(3);
            yankee[0] = romeon;
            kiloes = _closure1_slot7;
            romeon = {};
            sizing = {};
            status = golfie.rootContainer;
            sierra = sizing;
            output = copyDataProperties(sierra, status);
            output = 'paddingTop';
            sizing[output] = echoed;
            romeon['style'] = sizing;
            sizing = 36;
            sizing = backup[sizing];
            sizing = vacuum.bind(oscard)(sizing);
            output = sizing.NativePaymentContextProvider;
            sizing = {};
            echoed = new Array(0);
            sizing['skuIDs'] = echoed;
            sizing['activeSubscription'] = result;
            result = 37;
            result = backup[result];
            result = vacuum.bind(oscard)(result);
            echoed = result.FlashList;
            result = {};
            sequen = 38;
            config = backup[sequen];
            config = vacuum.bind(oscard)(config);
            record = config.intl;
            config = record.string;
            sequen = backup[sequen];
            sequen = vacuum.bind(oscard)(sequen);
            sequen = sequen.t;
            sequen = sequen.pWG4zc;
            sequen = config.bind(record)(sequen);
            result['accessibilityLabel'] = sequen;
            result['data'] = ctrled;
            source = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscard = entity.item;
                report = entity.index;
                tangon = _closure1_slot12;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 39;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.ShopCategory;
                entity = {};
                entity['item'] = oscard;
                oscard = _closure2_slot8;
                entity['isDarkTheme'] = oscard;
                entity['index'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            result['renderItem'] = source;
            source = false;
            result['showsVerticalScrollIndicator'] = source;
            source = 39;
            ctrled = backup[source];
            ctrled = vacuum.bind(oscard)(ctrled);
            ctrled = ctrled.CATEGORY_CONTAINER_HEIGHT;
            source = backup[source];
            source = vacuum.bind(oscard)(source);
            source = source.CATEGORY_CONTAINER_BOTTOM_MARGIN;
            source = ctrled + source;
            result['estimatedItemSize'] = source;
            source = _closure1_slot15;
            result['ListHeaderComponent'] = source;
            result['initialScrollIndex'] = update;
            result = report.bind(oscard)(echoed, result);
            sizing['children'] = result;
            sizing = report.bind(oscard)(output, sizing);
            romeon['children'] = sizing;
            romeon = report.bind(oscard)(kiloes, romeon);
            yankee[1] = romeon;
            romeon = 40;
            romeon = backup[romeon];
            foxtra = foxtra.bind(oscard)(romeon);
            romeon = {};
            romeon = report.bind(oscard)(foxtra, romeon);
            yankee[2] = romeon;
            option['children'] = yankee;
            option = offset.bind(oscard)(verify, option);
            michal['children'] = option;
            michal = report.bind(oscard)(tangon, michal);
            _fun00008_ip = 1713; continue _fun00007;
 1679:
            report = _closure1_slot12;
            tangon = _closure1_slot5;
            zuuluu = {};
            golfie = golfie.spinner;
            zuuluu['style'] = golfie;
            golfie = 'large';
            zuuluu['size'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 1713:
            entity = michal;
 1716:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();