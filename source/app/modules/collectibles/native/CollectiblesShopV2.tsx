// app/modules/collectibles/native/CollectiblesShopV2.tsx
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
            verify = _closure1_slot24;
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
            golfie = _closure1_slot24;
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
    var _closure1_slot23 = entity;
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
    var _closure1_slot24 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CollectibleShopTab;
    var _closure1_slot12 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot13 = golfie;
    golfie = tangon.PaymentGateways;
    var _closure1_slot14 = golfie;
    tangon = tangon.UserSettingsSections;
    var _closure1_slot15 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot16 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot17 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'height': '100%', 'width': '100%'};
    tangon['rootContainer'] = verify;
    verify = {'position': 'absolute', 'top': 0, 'zIndex': 5};
    tangon['blur'] = verify;
    verify = {};
    offset = 48;
    verify['height'] = offset;
    tangon['header'] = verify;
    verify = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967288, 'marginLeft': 4294967288};
    tangon['spinner'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot18 = tangon;
    tangon = function() { // Original name: ListHeader
        michal = _closure1_slot18;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot16;
        michal = _closure1_slot7;
        entity = {};
        report = report.header;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot19 = tangon;
    tangon = function(argFoo) { // Original name: ShopFlashList
        michal = argFoo;
        option = michal.data;
        golfie = michal.renderItem;
        report = michal.initialScrollIndex;
        tangon = _closure1_slot4;
        zuuluu = tangon.useRef;
        michal = null;
        yankee = zuuluu.bind(tangon)(michal);
        var _closure2_slot0 = yankee;
        zuuluu = tangon.useEffect;
        michal = new Array(1);
        michal[0] = option;
        entity = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = _closure2_slot0;
                zuuluu = michal.current;
                michal = null;
                if(!(michal !== zuuluu)) { _fun00008_ip = 52; continue _fun00007 }
 18:
                entity = _closure2_slot0;
                zuuluu = entity.current;
                michal = zuuluu.scrollToOffset;
                entity = {'offset': 0, 'animated': true};
                entity = michal.bind(zuuluu)(entity);
 52:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        tangon = _closure1_slot16;
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 11;
        entity = offset[entity];
        zuuluu = undefined;
        entity = verify.bind(zuuluu)(entity);
        michal = entity.FlashList;
        entity = {};
        entity['ref'] = yankee;
        yankee = 12;
        romeon = offset[yankee];
        romeon = verify.bind(zuuluu)(romeon);
        foxtra = romeon.intl;
        romeon = foxtra.string;
        yankee = offset[yankee];
        yankee = verify.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee.pWG4zc;
        yankee = romeon.bind(foxtra)(yankee);
        entity['accessibilityLabel'] = yankee;
        entity['data'] = option;
        entity['renderItem'] = golfie;
        golfie = false;
        entity['showsVerticalScrollIndicator'] = golfie;
        golfie = 13;
        option = offset[golfie];
        option = verify.bind(zuuluu)(option);
        option = option.CATEGORY_CONTAINER_HEIGHT;
        golfie = offset[golfie];
        golfie = verify.bind(zuuluu)(golfie);
        golfie = golfie.CATEGORY_CONTAINER_BOTTOM_MARGIN;
        golfie = option + golfie;
        entity['estimatedItemSize'] = golfie;
        golfie = _closure1_slot19;
        entity['ListHeaderComponent'] = golfie;
        oscard = _closure1_slot21;
        entity['ListEmptyComponent'] = oscard;
        entity['initialScrollIndex'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot20 = tangon;
    tangon = function() { // Original name: ShopEmptyState
        tangon = _closure1_slot16;
        michal = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 14;
        entity = verify[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        oscard = {};
        golfie = 42;
        oscard['marginTop'] = golfie;
        entity['style'] = oscard;
        option = _closure1_slot0;
        report = 15;
        report = verify[report];
        report = option.bind(zuuluu)(report);
        report = report.NoResults;
        entity['Illustration'] = report;
        report = 12;
        oscard = verify[report];
        oscard = option.bind(zuuluu)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = verify[report];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.eAn6z8;
        report = oscard.bind(golfie)(report);
        entity['body'] = report;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot21 = tangon;
    tangon = function(argFoo) { // Original name: CollectiblesShopInternal
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            sequen = michal.analyticsSource;
            var _closure2_slot0 = sequen;
            record = michal.onClose;
            entity = michal.storeFront;
            output = michal.screen;
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
            option = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 16;
            michal = offset[michal];
            report = option.bind(oscard)(michal);
            tangon = report.useCommonTriggerPoint;
            michal = 17;
            michal = offset[michal];
            michal = option.bind(oscard)(michal);
            michal = michal.CollectiblesShopOpenTriggerPoint;
            michal = tangon.bind(report)(michal);
            michal = 18;
            michal = offset[michal];
            golfie = option.bind(oscard)(michal);
            report = golfie.useMobileShopFeaturedPageEnabled;
            michal = _closure1_slot15;
            tangon = michal.COLLECTIBLES_SHOP;
            sizing = report.bind(golfie)(tangon);
            tangon = 19;
            tangon = offset[tangon];
            report = option.bind(oscard)(tangon);
            tangon = report.useMobileCanPurchaseNameplates;
            michal = michal.COLLECTIBLES_SHOP;
            romeon = tangon.bind(report)(michal);
            michal = 20;
            tangon = offset[michal];
            verify = option.bind(oscard)(tangon);
            golfie = verify.useStateFromStoresArray;
            tangon = _closure1_slot11;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure1_slot11;
                    entity = entity.lastSuccessfulFetch;
                    michal = null;
                    zuuluu = michal != entity;
                    michal = 0;
                    if(!zuuluu) { _fun00012_ip = 27; continue _fun00011 }
 24:
                    michal = entity;
 27:
                    entity = new Array(1);
                    entity[0] = michal;
                    return entity;
                }
            };
            golfie = golfie.bind(verify)(report, tangon);
            report = _closure1_slot3;
            tangon = 1;
            tangon = report.bind(oscard)(golfie, tangon);
            verify = 0;
            tangon = tangon[verify];
            report = global;
            golfie = report.Date;
            report = golfie.now;
            report = report.bind(golfie)();
            golfie = report - tangon;
            report = 21;
            report = offset[report];
            report = option.bind(oscard)(report);
            report = report.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            kiloes = golfie > report;
            report = _closure1_slot18;
            golfie = report.bind(oscard)();
            result = null;
            report = result == entity;
            yankee = undefined;
            if(report) { _fun00010_ip = 315; continue _fun00009 }
 309:
            yankee = entity.country;
 315:
            report = _closure1_slot1;
            option = _closure1_slot2;
            entity = 22;
            entity = option[entity];
            report = report.bind(oscard)(entity);
            entity = {};
            option = _closure1_slot14;
            option = option.APPLE;
            entity['paymentGateway'] = option;
            if(!(result == yankee)) { _fun00010_ip = 360; continue _fun00009 }
 356:
            option = {};
            _fun00010_ip = 370; continue _fun00009;
 360:
            offset = {};
            offset['countryCode'] = yankee;
            option = offset;
 370:
            equals = entity;
            whisks = option;
            option = copyDataProperties(equals, whisks);
            offset = 'CollectiblesShop.native';
            option = 'location';
            entity[option] = offset;
            entity = report.bind(oscard)(entity);
            report = entity.categories;
            _closure2_slot1 = report;
            backup = entity.isFetchingCategories;
            _closure2_slot2 = backup;
            ctrled = _closure1_slot1;
            limora = _closure1_slot2;
            entity = 23;
            entity = limora[entity];
            option = ctrled.bind(oscard)(entity);
            entity = 'shop_include_unpublished';
            entity = option.bind(oscard)(entity);
            sierra = _closure1_slot0;
            option = 24;
            option = limora[option];
            foxtra = sierra.bind(oscard)(option);
            yankee = foxtra.useMaybeFetchCollectiblesShopHome;
            option = _closure1_slot12;
            offset = option.HOME;
            option = {'includeUnpublished': null, 'includeBundles': true, 'logPerf': true};
            option['includeUnpublished'] = entity;
            entity = true;
            option = yankee.bind(foxtra)(offset, option);
            source = option.shopBlocks;
            offset = option.isFetchingShopHome;
            _closure2_slot3 = offset;
            option = option.fetchShopHomeError;
            _closure2_slot4 = option;
            foxtra = _closure1_slot4;
            yankee = foxtra.useMemo;
            offset = new Array(2);
            offset[0] = report;
            offset[1] = backup;
            option = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zuuluu)) { _fun00014_ip = 145; continue _fun00013 }
 18:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 25;
                    entity = report[entity];
                    report = undefined;
                    tangon = tangon.bind(report)(entity);
                    entity = tangon.isAndroid;
                    tangon = entity.bind(tangon)();
                    entity = false;
                    if(!(entity !== tangon)) { _fun00014_ip = 145; continue _fun00013 }
 58:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    zuuluu = _closure1_slot23;
                    tangon = _closure2_slot1;
                    michal = tangon.values;
                    michal = michal.bind(tangon)();
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.bind(report)();
                    michal = zuuluu.done;
                    if(michal) { _fun00014_ip = 143; continue _fun00013 }
 100:
                    michal = zuuluu.value;
                    option = michal.products;
                    golfie = option.forEach;
                    michal = function(argFoo) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.googleSkuIds;
                            entity = undefined;
                            zuuluu = entity !== zuuluu;
                            if(!zuuluu) { _fun00016_ip = 30; continue _fun00015 }
 18:
                            report = michal.googleSkuIds;
                            tangon = null;
                            zuuluu = tangon !== report;
 30:
                            if(!zuuluu) { _fun00016_ip = 95; continue _fun00015 }
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
                    if(!michal) { _fun00014_ip = 100; continue _fun00013 }
 143:
                    return entity;
 145:
                    entity = new Array(0);
                    return entity;
                }
            };
            yankee = yankee.bind(foxtra)(option, offset);
            option = 26;
            option = limora[option];
            offset = ctrled.bind(oscard)(option);
            option = offset.useGoogleSkuIds;
            entity = entity === backup;
            entity = option.bind(offset)(yankee, entity);
            yankee = entity.isFetchingGoogleSkus;
            offset = entity.fetchError;
            entity = 27;
            entity = limora[entity];
            option = sierra.bind(oscard)(entity);
            entity = option.useReloadProfileEffectWhenConfigsAreMissing;
            entity = entity.bind(option)();
            entity = 28;
            entity = limora[entity];
            option = sierra.bind(oscard)(entity);
            entity = option.useCurrentUserIfAvailable;
            entity = entity.bind(option)();
            _closure2_slot5 = entity;
            option = 29;
            option = limora[option];
            foxtra = sierra.bind(oscard)(option);
            option = foxtra.usePurchasedCategoriesSort;
            target = option.bind(foxtra)(report);
            option = limora[michal];
            vacuum = sierra.bind(oscard)(option);
            echoed = vacuum.useStateFromStores;
            option = _closure1_slot9;
            foxtra = new Array(1);
            foxtra[0] = option;
            option = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 30;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isThemeDark;
                entity = _closure1_slot9;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = echoed.bind(vacuum)(foxtra, option);
            _closure2_slot6 = option;
            michal = limora[michal];
            echoed = sierra.bind(oscard)(michal);
            foxtra = echoed.useStateFromStores;
            michal = _closure1_slot8;
            option = new Array(1);
            option[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot8;
                michal = zuuluu.get;
                entity = 'bypass_google_sku_sync';
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            papara = foxtra.bind(echoed)(option, michal);
            michal = 30;
            michal = limora[michal];
            option = sierra.bind(oscard)(michal);
            michal = option.useThemeContext;
            michal = michal.bind(option)();
            foxtra = michal.theme;
            michal = 31;
            option = limora[michal];
            echoed = ctrled.bind(oscard)(option);
            option = 32;
            option = limora[option];
            option = ctrled.bind(oscard)(option);
            vacuum = option.COLLECTIBLES_SHOP;
            option = new Array(1);
            option[0] = vacuum;
            option = echoed.bind(oscard)(option);
            option = option.analyticsLocations;
            _closure2_slot7 = option;
            vacuum = 33;
            echoed = limora[vacuum];
            config = ctrled.bind(oscard)(echoed);
            echoed = {};
            echoed['onClose'] = record;
            echoed = config.bind(oscard)(echoed);
            echoed = 34;
            echoed = limora[echoed];
            echoed = ctrled.bind(oscard)(echoed);
            echoed = echoed.bind(oscard)();
            record = echoed.top;
            echoed = 35;
            echoed = limora[echoed];
            config = sierra.bind(oscard)(echoed);
            ctrled = config.useAndroidShopLazyLoadPriceEnabled;
            echoed = 'CollectiblesShop';
            cntext = ctrled.bind(config)(echoed);
            status = 36;
            echoed = limora[status];
            config = sierra.bind(oscard)(echoed);
            ctrled = config.filterHiddenCategories;
            echoed = !romeon;
            romeon = 25;
            romeon = limora[romeon];
            sierra = sierra.bind(oscard)(romeon);
            romeon = sierra.isAndroid;
            sierra = romeon.bind(sierra)();
            romeon = target;
            if(!sierra) { _fun00010_ip = 1015; continue _fun00009 }
 966:
            romeon = target;
            if(papara) { _fun00010_ip = 1015; continue _fun00009 }
 972:
            if(!cntext) { _fun00010_ip = 987; continue _fun00009 }
 975:
            romeon = target;
            if(yankee) { _fun00010_ip = 1015; continue _fun00009 }
 981:
            romeon = target;
            if(backup) { _fun00010_ip = 1015; continue _fun00009 }
 987:
            papara = _closure1_slot0;
            cntext = _closure1_slot2;
            cntext = cntext[status];
            papara = papara.bind(oscard)(cntext);
            cntext = papara.filterGPlaySyncedCategories;
            romeon = cntext.bind(papara)(target);
 1015:
            ctrled = ctrled.bind(config)(echoed, romeon);
            _closure2_slot8 = ctrled;
            cntext = _closure1_slot0;
            papara = _closure1_slot2;
            romeon = 37;
            romeon = papara[romeon];
            config = cntext.bind(oscard)(romeon);
            echoed = config.useCollectiblesShopDeepLinkProps;
            romeon = {};
            romeon['categories'] = ctrled;
            romeon = echoed.bind(config)(romeon);
            echoed = romeon.categoryIndex;
            config = _closure1_slot1;
            romeon = 38;
            romeon = papara[romeon];
            config = config.bind(oscard)(romeon);
            romeon = 39;
            romeon = papara[romeon];
            cntext = cntext.bind(oscard)(romeon);
            romeon = cntext.v4;
            romeon = romeon.bind(cntext)();
            romeon = config.bind(oscard)(romeon);
            _closure2_slot9 = romeon;
            papara = _closure1_slot4;
            cntext = papara.useEffect;
            config = new Array(3);
            config[0] = option;
            config[1] = sequen;
            config[2] = romeon;
            sequen = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 40;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot13;
                zuuluu = michal.COLLECTIBLES_SHOP_VIEWED;
                michal = {};
                golfie = _closure2_slot7;
                michal['location_stack'] = golfie;
                golfie = _closure2_slot9;
                michal['page_session_id'] = golfie;
                oscard = _closure2_slot0;
                michal['source'] = oscard;
                oscard = 'home';
                michal['page_type'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            sequen = cntext.bind(papara)(sequen, config);
            cntext = papara.useEffect;
            config = new Array(1);
            config[0] = entity;
            sequen = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00018_ip = 52; continue _fun00017 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 41;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    entity = _closure2_slot5;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 52:
                    entity = undefined;
                    return entity;
                }
            };
            sequen = cntext.bind(papara)(sequen, config);
            sequen = result == entity;
            entity = null;
            if(sequen) { _fun00010_ip = 1790; continue _fun00009 }
 1192:
            sequen = ctrled.length;
            if(!(verify !== sequen)) { _fun00010_ip = 1204; continue _fun00009 }
 1201:
            if(!kiloes) { _fun00010_ip = 1216; continue _fun00009 }
 1204:
            if(backup) { _fun00010_ip = 1753; continue _fun00009 }
 1210:
            if(yankee) { _fun00010_ip = 1753; continue _fun00009 }
 1216:
            tangon = tangon > verify;
            if(!tangon) { _fun00010_ip = 1229; continue _fun00009 }
 1223:
            yankee = false;
            tangon = yankee === backup;
 1229:
            if(!tangon) { _fun00010_ip = 1241; continue _fun00009 }
 1232:
            report = report.size;
            tangon = verify === report;
 1241:
            if(!tangon) { _fun00010_ip = 1281; continue _fun00009 }
 1244:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 42;
            tangon = verify[tangon];
            verify = report.bind(oscard)(tangon);
            report = verify.captureMessage;
            tangon = 'collectibles mobile shop loaded empty categories';
            tangon = report.bind(verify)(tangon);
 1281:
            if(!(result !== offset)) { _fun00010_ip = 1326; continue _fun00009 }
 1285:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 42;
            tangon = verify[tangon];
            verify = report.bind(oscard)(tangon);
            report = verify.captureMessage;
            tangon = 'collectibles mobile shop failed to fetch google sku ids: ';
            tangon = tangon + offset;
            tangon = report.bind(verify)(tangon);
 1326:
            report = _closure1_slot16;
            kiloes = _closure1_slot0;
            sequen = _closure1_slot2;
            michal = sequen[michal];
            michal = kiloes.bind(oscard)(michal);
            tangon = michal.AnalyticsLocationProvider;
            michal = {};
            michal['value'] = option;
            offset = _closure1_slot17;
            option = 43;
            option = sequen[option];
            option = kiloes.bind(oscard)(option);
            verify = option.CollectiblesAnalyticsProvider;
            option = {};
            yankee = {};
            yankee['sessionId'] = romeon;
            option['newValue'] = yankee;
            romeon = _closure1_slot1;
            yankee = 44;
            yankee = sequen[yankee];
            romeon = romeon.bind(oscard)(yankee);
            yankee = {};
            backup = 0.5;
            yankee['blurAmount'] = backup;
            backup = _closure1_slot6;
            config = backup.absoluteFill;
            backup = new Array(3);
            backup[0] = config;
            config = golfie.blur;
            backup[1] = config;
            config = {};
            cntext = 48;
            cntext = cntext + record;
            config['height'] = cntext;
            backup[2] = config;
            yankee['style'] = backup;
            yankee['blurTheme'] = foxtra;
            romeon = report.bind(oscard)(romeon, yankee);
            yankee = new Array(3);
            yankee[0] = romeon;
            foxtra = _closure1_slot7;
            romeon = {};
            backup = {};
            whisks = golfie.rootContainer;
            equals = backup;
            config = copyDataProperties(equals, whisks);
            config = 'paddingTop';
            backup[config] = record;
            romeon['style'] = backup;
            backup = 45;
            backup = sequen[backup];
            backup = kiloes.bind(oscard)(backup);
            kiloes = backup.NativePaymentContextProvider;
            backup = {};
            sequen = new Array(0);
            backup['skuIDs'] = sequen;
            backup['activeSubscription'] = result;
            if(!sizing) { _fun00010_ip = 1600; continue _fun00009 }
 1567:
            result = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[vacuum];
            sizing = result.bind(oscard)(sizing);
            sizing = sizing.CollectiblesShopScreen;
            sizing = sizing.SHOP_ALL;
            if(!(output === sizing)) { _fun00010_ip = 1639; continue _fun00009 }
 1600:
            result = _closure1_slot16;
            output = _closure1_slot20;
            sizing = {};
            sizing['data'] = ctrled;
            ctrled = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscard = entity.item;
                report = entity.index;
                tangon = _closure1_slot16;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 13;
                entity = zuuluu[entity];
                zuuluu = undefined;
                entity = michal.bind(zuuluu)(entity);
                michal = entity.ShopCategory;
                entity = {};
                entity['item'] = oscard;
                oscard = _closure2_slot6;
                entity['isDarkTheme'] = oscard;
                entity['index'] = report;
                entity = tangon.bind(zuuluu)(michal, entity);
                return entity;
            };
            sizing['renderItem'] = ctrled;
            sizing['initialScrollIndex'] = echoed;
            sizing = result.bind(oscard)(output, sizing);
            _fun00010_ip = 1671; continue _fun00009;
 1639:
            echoed = _closure1_slot16;
            result = _closure1_slot20;
            output = {};
            output['data'] = source;
            update = function(argFoo) { // Original name: renderItem
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    entity = argFoo;
                    report = entity.item;
                    tangon = _closure1_slot16;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 46;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    entity['shopBlock'] = report;
                    golfie = _closure2_slot3;
                    oscard = null;
                    golfie = oscard != golfie;
                    if(!golfie) { _fun00020_ip = 64; continue _fun00019 }
 60:
                    golfie = _closure2_slot3;
 64:
                    entity['isFetchingShopHome'] = golfie;
                    golfie = _closure2_slot4;
                    golfie = oscard != golfie;
                    oscard = null;
                    if(!golfie) { _fun00020_ip = 86; continue _fun00019 }
 82:
                    oscard = _closure2_slot4;
 86:
                    entity['fetchShopHomeError'] = oscard;
                    report = _closure2_slot8;
                    entity['categories'] = report;
                    entity = tangon.bind(zuuluu)(michal, entity);
                    return entity;
                }
            };
            output['renderItem'] = update;
            sizing = echoed.bind(oscard)(result, output);
 1671:
            backup['children'] = sizing;
            backup = report.bind(oscard)(kiloes, backup);
            romeon['children'] = backup;
            romeon = report.bind(oscard)(foxtra, romeon);
            yankee[1] = romeon;
            backup = _closure1_slot16;
            foxtra = _closure1_slot1;
            kiloes = _closure1_slot2;
            romeon = 47;
            romeon = kiloes[romeon];
            foxtra = foxtra.bind(oscard)(romeon);
            romeon = {};
            romeon = backup.bind(oscard)(foxtra, romeon);
            yankee[2] = romeon;
            option['children'] = yankee;
            option = offset.bind(oscard)(verify, option);
            michal['children'] = option;
            michal = report.bind(oscard)(tangon, michal);
            _fun00010_ip = 1787; continue _fun00009;
 1753:
            report = _closure1_slot16;
            tangon = _closure1_slot5;
            zuuluu = {};
            golfie = golfie.spinner;
            zuuluu['style'] = golfie;
            golfie = 'large';
            zuuluu['size'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 1787:
            entity = michal;
 1790:
            return entity;
        }
    };
    var _closure1_slot22 = tangon;
    michal = function(argFoo) { // Original name: CollectiblesShopV2
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 26;
            zuuluu = verify[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useNativeIAPPayments;
            zuuluu = zuuluu.bind(tangon)();
            golfie = zuuluu.nativePaymentsConnected;
            var _closure2_slot0 = golfie;
            option = zuuluu.storeFront;
            zuuluu = _closure1_slot18;
            yankee = zuuluu.bind(report)();
            tangon = _closure1_slot0;
            zuuluu = 20;
            zuuluu = verify[zuuluu];
            offset = tangon.bind(report)(zuuluu);
            verify = offset.useStateFromStores;
            zuuluu = _closure1_slot10;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot10;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            offset = verify.bind(offset)(tangon, zuuluu);
            zuuluu = null;
            tangon = zuuluu == offset;
            verify = undefined;
            if(tangon) { _fun00022_ip = 131; continue _fun00021 }
 121:
            tangon = offset.isStaff;
            verify = tangon.bind(offset)();
 131:
            if(verify) { _fun00022_ip = 156; continue _fun00021 }
 134:
            tangon = zuuluu == offset;
            zuuluu = undefined;
            if(tangon) { _fun00022_ip = 153; continue _fun00021 }
 143:
            tangon = offset.isStaffPersonal;
            zuuluu = tangon.bind(offset)();
 153:
            verify = zuuluu;
 156:
            romeon = _closure1_slot4;
            tangon = romeon.useState;
            zuuluu = false;
            offset = tangon.bind(romeon)(zuuluu);
            tangon = _closure1_slot3;
            zuuluu = 2;
            offset = tangon.bind(report)(offset, zuuluu);
            zuuluu = 0;
            tangon = offset[zuuluu];
            zuuluu = 1;
            zuuluu = offset[zuuluu];
            var _closure2_slot1 = zuuluu;
            offset = romeon.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = golfie;
            entity = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    if(zuuluu) { _fun00024_ip = 54; continue _fun00023 }
 14:
                    zuuluu = global;
                    report = zuuluu.setTimeout;
                    tangon = function() {
                        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                            michal = _closure2_slot0;
                            if(michal) { _fun00026_ip = 23; continue _fun00025 }
 10:
                            zuuluu = _closure2_slot1;
                            michal = undefined;
                            entity = true;
                            entity = zuuluu.bind(michal)(entity);
 23:
                            entity = undefined;
                            return entity;
                        }
                    };
                    zuuluu = 10000;
                    zuuluu = report.bind(entity)(tangon, zuuluu);
                    var _closure3_slot0 = zuuluu;
                    michal = function() {
                        entity = global;
                        zuuluu = entity.clearTimeout;
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return michal;
 54:
                    return entity;
                }
            };
            entity = offset.bind(romeon)(entity, zuuluu);
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            zuuluu = 25;
            entity = entity[zuuluu];
            offset = offset.bind(report)(entity);
            entity = offset.isIOS;
            entity = entity.bind(offset)();
            if(!entity) { _fun00022_ip = 290; continue _fun00021 }
 261:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            offset = 48;
            offset = foxtra[offset];
            offset = romeon.bind(report)(offset);
            offset = offset.isStable;
            entity = !offset;
 290:
            if(!entity) { _fun00022_ip = 296; continue _fun00021 }
 293:
            entity = verify;
 296:
            if(golfie) { _fun00022_ip = 344; continue _fun00021 }
 299:
            if(entity) { _fun00022_ip = 344; continue _fun00021 }
 302:
            if(tangon) { _fun00022_ip = 344; continue _fun00021 }
 305:
            offset = _closure1_slot16;
            verify = _closure1_slot5;
            entity = {};
            yankee = yankee.spinner;
            entity['style'] = yankee;
            yankee = 'large';
            entity['size'] = yankee;
            entity = offset.bind(report)(verify, entity);
            _fun00022_ip = 499; continue _fun00021;
 344:
            if(!tangon) { _fun00022_ip = 350; continue _fun00021 }
 347:
            tangon = !golfie;
 350:
            if(!tangon) { _fun00022_ip = 449; continue _fun00021 }
 353:
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            tangon = 42;
            tangon = yankee[tangon];
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.captureMessage;
            verify = _closure1_slot0;
            zuuluu = yankee[zuuluu];
            offset = verify.bind(report)(zuuluu);
            zuuluu = offset.isIOS;
            offset = zuuluu.bind(offset)();
            zuuluu = 'collectibles mobile shop failed to connect to native payments isIOS: ';
            offset = zuuluu + offset;
            zuuluu = 48;
            zuuluu = yankee[zuuluu];
            zuuluu = verify.bind(report)(zuuluu);
            verify = zuuluu.isStable;
            zuuluu = ' isStable: ';
            zuuluu = offset + zuuluu;
            zuuluu = zuuluu + verify;
            zuuluu = tangon.bind(golfie)(zuuluu);
 449:
            tangon = _closure1_slot16;
            zuuluu = _closure1_slot22;
            michal = {};
            kiloes = michal;
            backup = oscard;
            golfie = copyDataProperties(kiloes, backup);
            golfie = 'storeFront';
            michal[golfie] = option;
            golfie = oscard.screen;
            oscard = 'screen';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 499:
            return entity;
        }
    };
    tangon = 49;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['CollectiblesShopV2'] = michal;
    return entity;
})();