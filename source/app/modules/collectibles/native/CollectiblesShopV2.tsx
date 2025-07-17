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
            verify = _closure1_slot25;
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
            golfie = _closure1_slot25;
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
    var _closure1_slot24 = entity;
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
    var _closure1_slot25 = entity;
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
    golfie = tangon.CollectiblesMobileShopScreen;
    var _closure1_slot12 = golfie;
    tangon = tangon.CollectibleShopTab;
    var _closure1_slot13 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticEvents;
    var _closure1_slot14 = golfie;
    golfie = tangon.PaymentGateways;
    var _closure1_slot15 = golfie;
    tangon = tangon.UserSettingsSections;
    var _closure1_slot16 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot17 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot18 = tangon;
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
    var _closure1_slot19 = tangon;
    tangon = function() { // Original name: ListHeader
        michal = _closure1_slot19;
        tangon = undefined;
        report = michal.bind(tangon)();
        zuuluu = _closure1_slot17;
        michal = _closure1_slot7;
        entity = {};
        report = report.header;
        entity['style'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot20 = tangon;
    tangon = function(argFoo) { // Original name: ShopFlashList
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            yankee = michal.data;
            var _closure2_slot0 = yankee;
            offset = michal.renderItem;
            oscard = michal.initialScrollIndex;
            backup = michal.scrollToTop;
            var _closure2_slot1 = backup;
            kiloes = _closure1_slot0;
            sizing = _closure1_slot2;
            michal = 11;
            michal = sizing[michal];
            tangon = undefined;
            report = kiloes.bind(tangon)(michal);
            zuuluu = report.useMobileShopCardV2Enabled;
            michal = _closure1_slot16;
            michal = michal.COLLECTIBLES_SHOP;
            option = zuuluu.bind(report)(michal);
            report = _closure1_slot4;
            zuuluu = report.useRef;
            michal = null;
            romeon = zuuluu.bind(report)(michal);
            var _closure2_slot2 = romeon;
            michal = report.useRef;
            verify = false;
            michal = michal.bind(report)(verify);
            var _closure2_slot3 = michal;
            foxtra = report.useMemo;
            michal = yankee.length;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            zuuluu[1] = backup;
            michal = function() {
                michal = _closure2_slot0;
                report = michal.length;
                tangon = _closure2_slot1;
                entity = global;
                entity = entity.HermesInternal;
                zuuluu = entity.concat;
                michal = '';
                entity = '-';
                entity = zuuluu.bind(michal)(report, entity, tangon);
                return entity;
            };
            michal = foxtra.bind(report)(michal, zuuluu);
            output = report.useEffect;
            foxtra = new Array(1);
            foxtra[0] = michal;
            zuuluu = function() {
                michal = _closure2_slot3;
                entity = false;
                michal['current'] = entity;
                entity = undefined;
                return entity;
            };
            zuuluu = output.bind(report)(zuuluu, foxtra);
            foxtra = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = backup;
            zuuluu[1] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure2_slot1;
                    if(!michal) { _fun00010_ip = 25; continue _fun00009 }
 10:
                    zuuluu = _closure2_slot2;
                    tangon = zuuluu.current;
                    zuuluu = null;
                    michal = zuuluu !== tangon;
 25:
                    if(!michal) { _fun00010_ip = 40; continue _fun00009 }
 28:
                    zuuluu = _closure2_slot3;
                    zuuluu = zuuluu.current;
                    michal = !zuuluu;
 40:
                    if(!michal) { _fun00010_ip = 77; continue _fun00009 }
 43:
                    entity = _closure2_slot2;
                    zuuluu = entity.current;
                    michal = zuuluu.scrollToOffset;
                    entity = {'offset': 0, 'animated': true};
                    entity = michal.bind(zuuluu)(entity);
 77:
                    entity = undefined;
                    return entity;
                }
            };
            michal = foxtra.bind(report)(michal, zuuluu);
            zuuluu = report.useCallback;
            michal = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    entity = entity.contentOffset;
                    michal = entity.y;
                    entity = 0;
                    if(!(michal > entity)) { _fun00012_ip = 40; continue _fun00011 }
 25:
                    michal = _closure2_slot3;
                    entity = true;
                    michal['current'] = entity;
 40:
                    entity = undefined;
                    return entity;
                }
            };
            entity = new Array(0);
            report = zuuluu.bind(report)(michal, entity);
            zuuluu = _closure1_slot17;
            entity = 12;
            entity = sizing[entity];
            entity = kiloes.bind(tangon)(entity);
            michal = entity.FlashList;
            entity = {};
            entity['ref'] = romeon;
            romeon = 13;
            foxtra = sizing[romeon];
            foxtra = kiloes.bind(tangon)(foxtra);
            backup = foxtra.intl;
            foxtra = backup.string;
            romeon = sizing[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.t;
            romeon = romeon.pWG4zc;
            romeon = foxtra.bind(backup)(romeon);
            entity['accessibilityLabel'] = romeon;
            entity['data'] = yankee;
            entity['renderItem'] = offset;
            entity['showsVerticalScrollIndicator'] = verify;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            verify = 14;
            offset = romeon[verify];
            offset = yankee.bind(tangon)(offset);
            if(option) { _fun00008_ip = 374; continue _fun00007 }
 347:
            foxtra = offset.CATEGORY_CONTAINER_HEIGHT;
            option = romeon[verify];
            option = yankee.bind(tangon)(option);
            option = option.CATEGORY_CONTAINER_BOTTOM_MARGIN;
            option = foxtra + option;
            _fun00008_ip = 399; continue _fun00007;
 374:
            offset = offset.CATEGORY_CONTAINER_HEIGHT_V2;
            verify = romeon[verify];
            verify = yankee.bind(tangon)(verify);
            verify = verify.CATEGORY_CONTAINER_BOTTOM_MARGIN;
            option = offset + verify;
 399:
            entity['estimatedItemSize'] = option;
            option = _closure1_slot20;
            entity['ListHeaderComponent'] = option;
            golfie = _closure1_slot22;
            entity['ListEmptyComponent'] = golfie;
            entity['initialScrollIndex'] = oscard;
            entity['onScroll'] = report;
            report = 16;
            entity['scrollEventThrottle'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = tangon;
    tangon = function() { // Original name: ShopEmptyState
        tangon = _closure1_slot17;
        michal = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 15;
        entity = verify[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {};
        oscard = {};
        golfie = 42;
        oscard['marginTop'] = golfie;
        entity['style'] = oscard;
        option = _closure1_slot0;
        report = 16;
        report = verify[report];
        report = option.bind(zuuluu)(report);
        report = report.NoResults;
        entity['Illustration'] = report;
        report = 13;
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
    var _closure1_slot22 = tangon;
    tangon = function(argFoo) { // Original name: CollectiblesShopInternal
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            config = michal.analyticsSource;
            var _closure2_slot0 = config;
            cntext = michal.onClose;
            entity = michal.storeFront;
            result = michal.screen;
            source = michal.scrollToTop;
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
            michal = 17;
            michal = offset[michal];
            report = option.bind(oscard)(michal);
            tangon = report.useCommonTriggerPoint;
            michal = 18;
            michal = offset[michal];
            michal = option.bind(oscard)(michal);
            michal = michal.CollectiblesShopOpenTriggerPoint;
            michal = tangon.bind(report)(michal);
            michal = 19;
            michal = offset[michal];
            golfie = option.bind(oscard)(michal);
            report = golfie.useMobileShopFeaturedPageEnabled;
            michal = _closure1_slot16;
            tangon = michal.COLLECTIBLES_SHOP;
            output = report.bind(golfie)(tangon);
            tangon = 20;
            tangon = offset[tangon];
            report = option.bind(oscard)(tangon);
            tangon = report.useMobileCanPurchaseNameplates;
            michal = michal.COLLECTIBLES_SHOP;
            romeon = tangon.bind(report)(michal);
            michal = 21;
            tangon = offset[michal];
            verify = option.bind(oscard)(tangon);
            golfie = verify.useStateFromStoresArray;
            tangon = _closure1_slot11;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure1_slot11;
                    entity = entity.lastSuccessfulFetch;
                    michal = null;
                    zuuluu = michal != entity;
                    michal = 0;
                    if(!zuuluu) { _fun00016_ip = 27; continue _fun00015 }
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
            report = 22;
            report = offset[report];
            report = option.bind(oscard)(report);
            report = report.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            sizing = golfie > report;
            report = _closure1_slot19;
            golfie = report.bind(oscard)();
            echoed = null;
            report = echoed == entity;
            yankee = undefined;
            if(report) { _fun00014_ip = 321; continue _fun00013 }
 315:
            yankee = entity.country;
 321:
            report = _closure1_slot1;
            option = _closure1_slot2;
            entity = 23;
            entity = option[entity];
            report = report.bind(oscard)(entity);
            entity = {};
            option = _closure1_slot15;
            option = option.APPLE;
            entity['paymentGateway'] = option;
            if(!(echoed == yankee)) { _fun00014_ip = 366; continue _fun00013 }
 362:
            option = {};
            _fun00014_ip = 376; continue _fun00013;
 366:
            offset = {};
            offset['countryCode'] = yankee;
            option = offset;
 376:
            quebec = entity;
            equals = option;
            option = copyDataProperties(quebec, equals);
            offset = 'CollectiblesShop.native';
            option = 'location';
            entity[option] = offset;
            entity = report.bind(oscard)(entity);
            report = entity.categories;
            _closure2_slot1 = report;
            backup = entity.isFetchingCategories;
            _closure2_slot2 = backup;
            sequen = _closure1_slot1;
            whisks = _closure1_slot2;
            entity = 24;
            entity = whisks[entity];
            option = sequen.bind(oscard)(entity);
            entity = 'shop_include_unpublished';
            entity = option.bind(oscard)(entity);
            limora = _closure1_slot0;
            option = 25;
            option = whisks[option];
            foxtra = limora.bind(oscard)(option);
            yankee = foxtra.useMaybeFetchCollectiblesShopHome;
            option = _closure1_slot13;
            offset = option.HOME;
            option = {'includeUnpublished': null, 'includeBundles': true, 'logPerf': true};
            option['includeUnpublished'] = entity;
            entity = true;
            option = yankee.bind(foxtra)(offset, option);
            vacuum = option.shopBlocks;
            yankee = option.isFetchingShopHome;
            _closure2_slot3 = yankee;
            option = option.fetchShopHomeError;
            _closure2_slot4 = option;
            kiloes = _closure1_slot4;
            foxtra = kiloes.useMemo;
            offset = new Array(2);
            offset[0] = report;
            offset[1] = backup;
            option = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zuuluu)) { _fun00018_ip = 145; continue _fun00017 }
 18:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 26;
                    entity = report[entity];
                    report = undefined;
                    tangon = tangon.bind(report)(entity);
                    entity = tangon.isAndroid;
                    tangon = entity.bind(tangon)();
                    entity = false;
                    if(!(entity !== tangon)) { _fun00018_ip = 145; continue _fun00017 }
 58:
                    entity = new Array(0);
                    var _closure3_slot0 = entity;
                    zuuluu = _closure1_slot24;
                    tangon = _closure2_slot1;
                    michal = tangon.values;
                    michal = michal.bind(tangon)();
                    tangon = zuuluu.bind(report)(michal);
                    zuuluu = tangon.bind(report)();
                    michal = zuuluu.done;
                    if(michal) { _fun00018_ip = 143; continue _fun00017 }
 100:
                    michal = zuuluu.value;
                    option = michal.products;
                    golfie = option.forEach;
                    michal = function(argFoo) {
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.googleSkuIds;
                            entity = undefined;
                            zuuluu = entity !== zuuluu;
                            if(!zuuluu) { _fun00020_ip = 30; continue _fun00019 }
 18:
                            report = michal.googleSkuIds;
                            tangon = null;
                            zuuluu = tangon !== report;
 30:
                            if(!zuuluu) { _fun00020_ip = 95; continue _fun00019 }
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
                    if(!michal) { _fun00018_ip = 100; continue _fun00017 }
 143:
                    return entity;
 145:
                    entity = new Array(0);
                    return entity;
                }
            };
            foxtra = foxtra.bind(kiloes)(option, offset);
            option = 27;
            option = whisks[option];
            offset = sequen.bind(oscard)(option);
            option = offset.useGoogleSkuIds;
            entity = entity === backup;
            entity = option.bind(offset)(foxtra, entity);
            kiloes = entity.isFetchingGoogleSkus;
            offset = entity.fetchError;
            entity = 28;
            entity = whisks[entity];
            option = limora.bind(oscard)(entity);
            entity = option.useReloadProfileEffectWhenConfigsAreMissing;
            entity = entity.bind(option)();
            entity = 29;
            entity = whisks[entity];
            option = limora.bind(oscard)(entity);
            entity = option.useCurrentUserIfAvailable;
            entity = entity.bind(option)();
            _closure2_slot5 = entity;
            option = 30;
            option = whisks[option];
            foxtra = limora.bind(oscard)(option);
            option = foxtra.usePurchasedCategoriesSort;
            status = option.bind(foxtra)(report);
            option = whisks[michal];
            record = limora.bind(oscard)(option);
            update = record.useStateFromStores;
            option = _closure1_slot9;
            foxtra = new Array(1);
            foxtra[0] = option;
            option = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 31;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isThemeDark;
                entity = _closure1_slot9;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            option = update.bind(record)(foxtra, option);
            _closure2_slot6 = option;
            michal = whisks[michal];
            update = limora.bind(oscard)(michal);
            foxtra = update.useStateFromStores;
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
            target = foxtra.bind(update)(option, michal);
            michal = 31;
            michal = whisks[michal];
            option = limora.bind(oscard)(michal);
            michal = option.useThemeContext;
            michal = michal.bind(option)();
            foxtra = michal.theme;
            michal = 32;
            option = whisks[michal];
            update = sequen.bind(oscard)(option);
            option = 33;
            option = whisks[option];
            option = sequen.bind(oscard)(option);
            record = option.COLLECTIBLES_SHOP;
            option = new Array(1);
            option[0] = record;
            option = update.bind(oscard)(option);
            option = option.analyticsLocations;
            _closure2_slot7 = option;
            update = 34;
            update = whisks[update];
            record = sequen.bind(oscard)(update);
            update = {};
            update['onClose'] = cntext;
            update = record.bind(oscard)(update);
            update = 35;
            update = whisks[update];
            update = sequen.bind(oscard)(update);
            update = update.bind(oscard)();
            cntext = update.top;
            update = 36;
            update = whisks[update];
            record = limora.bind(oscard)(update);
            sequen = record.useAndroidShopLazyLoadPriceEnabled;
            update = 'CollectiblesShop';
            papara = sequen.bind(record)(update);
            sierra = 37;
            update = whisks[sierra];
            record = limora.bind(oscard)(update);
            sequen = record.filterHiddenCategories;
            update = !romeon;
            romeon = 26;
            romeon = whisks[romeon];
            limora = limora.bind(oscard)(romeon);
            romeon = limora.isAndroid;
            limora = romeon.bind(limora)();
            romeon = status;
            if(!limora) { _fun00014_ip = 1017; continue _fun00013 }
 968:
            romeon = status;
            if(target) { _fun00014_ip = 1017; continue _fun00013 }
 974:
            if(!papara) { _fun00014_ip = 989; continue _fun00013 }
 977:
            romeon = status;
            if(kiloes) { _fun00014_ip = 1017; continue _fun00013 }
 983:
            romeon = status;
            if(backup) { _fun00014_ip = 1017; continue _fun00013 }
 989:
            target = _closure1_slot0;
            papara = _closure1_slot2;
            papara = papara[sierra];
            target = target.bind(oscard)(papara);
            papara = target.filterGPlaySyncedCategories;
            romeon = papara.bind(target)(status);
 1017:
            sequen = sequen.bind(record)(update, romeon);
            _closure2_slot8 = sequen;
            papara = _closure1_slot0;
            target = _closure1_slot2;
            romeon = 38;
            romeon = target[romeon];
            record = papara.bind(oscard)(romeon);
            update = record.useCollectiblesShopDeepLinkProps;
            romeon = {};
            romeon['categories'] = sequen;
            romeon = update.bind(record)(romeon);
            update = romeon.categoryIndex;
            record = _closure1_slot1;
            romeon = 39;
            romeon = target[romeon];
            record = record.bind(oscard)(romeon);
            romeon = 40;
            romeon = target[romeon];
            papara = papara.bind(oscard)(romeon);
            romeon = papara.v4;
            romeon = romeon.bind(papara)();
            romeon = record.bind(oscard)(romeon);
            _closure2_slot9 = romeon;
            target = _closure1_slot4;
            papara = target.useEffect;
            record = new Array(3);
            record[0] = option;
            record[1] = config;
            record[2] = romeon;
            config = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 41;
                zuuluu = zuuluu[entity];
                entity = undefined;
                report = tangon.bind(entity)(zuuluu);
                tangon = report.track;
                michal = _closure1_slot14;
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
            config = papara.bind(target)(config, record);
            papara = target.useEffect;
            record = new Array(1);
            record[0] = entity;
            config = function() {
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00022_ip = 52; continue _fun00021 }
 13:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 42;
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
            config = papara.bind(target)(config, record);
            config = echoed == entity;
            entity = null;
            if(config) { _fun00014_ip = 1799; continue _fun00013 }
 1194:
            config = sequen.length;
            if(!(verify !== config)) { _fun00014_ip = 1219; continue _fun00013 }
 1203:
            if(sizing) { _fun00014_ip = 1219; continue _fun00013 }
 1206:
            if(!(echoed != vacuum)) { _fun00014_ip = 1237; continue _fun00013 }
 1210:
            sizing = vacuum.length;
            if(!(verify === sizing)) { _fun00014_ip = 1237; continue _fun00013 }
 1219:
            if(backup) { _fun00014_ip = 1762; continue _fun00013 }
 1225:
            if(kiloes) { _fun00014_ip = 1762; continue _fun00013 }
 1231:
            if(yankee) { _fun00014_ip = 1762; continue _fun00013 }
 1237:
            tangon = tangon > verify;
            if(!tangon) { _fun00014_ip = 1250; continue _fun00013 }
 1244:
            yankee = false;
            tangon = yankee === backup;
 1250:
            if(!tangon) { _fun00014_ip = 1262; continue _fun00013 }
 1253:
            report = report.size;
            tangon = verify === report;
 1262:
            if(!tangon) { _fun00014_ip = 1302; continue _fun00013 }
 1265:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 43;
            tangon = verify[tangon];
            verify = report.bind(oscard)(tangon);
            report = verify.captureMessage;
            tangon = 'collectibles mobile shop loaded empty categories';
            tangon = report.bind(verify)(tangon);
 1302:
            if(!(echoed !== offset)) { _fun00014_ip = 1347; continue _fun00013 }
 1306:
            report = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 43;
            tangon = verify[tangon];
            verify = report.bind(oscard)(tangon);
            report = verify.captureMessage;
            tangon = 'collectibles mobile shop failed to fetch google sku ids: ';
            tangon = tangon + offset;
            tangon = report.bind(verify)(tangon);
 1347:
            report = _closure1_slot17;
            sizing = _closure1_slot0;
            config = _closure1_slot2;
            michal = config[michal];
            michal = sizing.bind(oscard)(michal);
            tangon = michal.AnalyticsLocationProvider;
            michal = {};
            michal['value'] = option;
            offset = _closure1_slot18;
            option = 44;
            option = config[option];
            option = sizing.bind(oscard)(option);
            verify = option.CollectiblesAnalyticsProvider;
            option = {};
            yankee = {};
            yankee['sessionId'] = romeon;
            option['newValue'] = yankee;
            romeon = _closure1_slot1;
            yankee = 45;
            yankee = config[yankee];
            romeon = romeon.bind(oscard)(yankee);
            yankee = {};
            backup = 0.5;
            yankee['blurAmount'] = backup;
            backup = _closure1_slot6;
            kiloes = backup.absoluteFill;
            backup = new Array(3);
            backup[0] = kiloes;
            kiloes = golfie.blur;
            backup[1] = kiloes;
            record = {};
            kiloes = 48;
            papara = kiloes + cntext;
            record['height'] = papara;
            backup[2] = record;
            yankee['style'] = backup;
            yankee['blurTheme'] = foxtra;
            romeon = report.bind(oscard)(romeon, yankee);
            yankee = new Array(3);
            yankee[0] = romeon;
            foxtra = _closure1_slot7;
            romeon = {};
            backup = {};
            equals = golfie.rootContainer;
            quebec = backup;
            record = copyDataProperties(quebec, equals);
            record = 'paddingTop';
            backup[record] = cntext;
            romeon['style'] = backup;
            backup = 46;
            backup = config[backup];
            backup = sizing.bind(oscard)(backup);
            sizing = backup.NativePaymentContextProvider;
            backup = {};
            config = new Array(0);
            backup['skuIDs'] = config;
            backup['activeSubscription'] = echoed;
            if(!output) { _fun00014_ip = 1602; continue _fun00013 }
 1588:
            output = _closure1_slot12;
            output = output.SHOP_ALL;
            if(!(result === output)) { _fun00014_ip = 1646; continue _fun00013 }
 1602:
            echoed = _closure1_slot17;
            result = _closure1_slot21;
            output = {};
            output['data'] = sequen;
            sequen = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscard = entity.item;
                report = entity.index;
                tangon = _closure1_slot17;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 14;
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
            output['renderItem'] = sequen;
            output['initialScrollIndex'] = update;
            output['scrollToTop'] = source;
            output = echoed.bind(oscard)(result, output);
            _fun00014_ip = 1683; continue _fun00013;
 1646:
            update = _closure1_slot17;
            echoed = _closure1_slot21;
            result = {};
            result['data'] = vacuum;
            ctrled = function(argFoo) { // Original name: renderItem
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    entity = argFoo;
                    report = entity.item;
                    tangon = _closure1_slot17;
                    michal = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    entity = 47;
                    entity = zuuluu[entity];
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(entity);
                    entity = {};
                    entity['shopBlock'] = report;
                    golfie = _closure2_slot3;
                    oscard = null;
                    golfie = oscard != golfie;
                    if(!golfie) { _fun00024_ip = 64; continue _fun00023 }
 60:
                    golfie = _closure2_slot3;
 64:
                    entity['isFetchingShopHome'] = golfie;
                    golfie = _closure2_slot4;
                    golfie = oscard != golfie;
                    oscard = null;
                    if(!golfie) { _fun00024_ip = 86; continue _fun00023 }
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
            result['renderItem'] = ctrled;
            result['scrollToTop'] = source;
            output = update.bind(oscard)(echoed, result);
 1683:
            backup['children'] = output;
            backup = report.bind(oscard)(sizing, backup);
            romeon['children'] = backup;
            romeon = report.bind(oscard)(foxtra, romeon);
            yankee[1] = romeon;
            backup = _closure1_slot17;
            foxtra = _closure1_slot1;
            romeon = _closure1_slot2;
            romeon = romeon[kiloes];
            foxtra = foxtra.bind(oscard)(romeon);
            romeon = {};
            romeon = backup.bind(oscard)(foxtra, romeon);
            yankee[2] = romeon;
            option['children'] = yankee;
            option = offset.bind(oscard)(verify, option);
            michal['children'] = option;
            michal = report.bind(oscard)(tangon, michal);
            _fun00014_ip = 1796; continue _fun00013;
 1762:
            report = _closure1_slot17;
            tangon = _closure1_slot5;
            zuuluu = {};
            golfie = golfie.spinner;
            zuuluu['style'] = golfie;
            golfie = 'large';
            zuuluu['size'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 1796:
            entity = michal;
 1799:
            return entity;
        }
    };
    var _closure1_slot23 = tangon;
    michal = function(argFoo) { // Original name: CollectiblesShopV2
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot1;
            verify = _closure1_slot2;
            zuuluu = 27;
            zuuluu = verify[zuuluu];
            report = undefined;
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.useNativeIAPPayments;
            zuuluu = zuuluu.bind(tangon)();
            golfie = zuuluu.nativePaymentsConnected;
            var _closure2_slot0 = golfie;
            option = zuuluu.storeFront;
            zuuluu = _closure1_slot19;
            yankee = zuuluu.bind(report)();
            tangon = _closure1_slot0;
            zuuluu = 21;
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
            if(tangon) { _fun00026_ip = 131; continue _fun00025 }
 121:
            tangon = offset.isStaff;
            verify = tangon.bind(offset)();
 131:
            if(verify) { _fun00026_ip = 156; continue _fun00025 }
 134:
            tangon = zuuluu == offset;
            zuuluu = undefined;
            if(tangon) { _fun00026_ip = 153; continue _fun00025 }
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
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = undefined;
                    if(zuuluu) { _fun00028_ip = 54; continue _fun00027 }
 14:
                    zuuluu = global;
                    report = zuuluu.setTimeout;
                    tangon = function() {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            michal = _closure2_slot0;
                            if(michal) { _fun00030_ip = 23; continue _fun00029 }
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
            zuuluu = 26;
            entity = entity[zuuluu];
            offset = offset.bind(report)(entity);
            entity = offset.isIOS;
            entity = entity.bind(offset)();
            if(!entity) { _fun00026_ip = 290; continue _fun00025 }
 261:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            offset = 49;
            offset = foxtra[offset];
            offset = romeon.bind(report)(offset);
            offset = offset.isStable;
            entity = !offset;
 290:
            if(!entity) { _fun00026_ip = 296; continue _fun00025 }
 293:
            entity = verify;
 296:
            if(golfie) { _fun00026_ip = 344; continue _fun00025 }
 299:
            if(entity) { _fun00026_ip = 344; continue _fun00025 }
 302:
            if(tangon) { _fun00026_ip = 344; continue _fun00025 }
 305:
            offset = _closure1_slot17;
            verify = _closure1_slot5;
            entity = {};
            yankee = yankee.spinner;
            entity['style'] = yankee;
            yankee = 'large';
            entity['size'] = yankee;
            entity = offset.bind(report)(verify, entity);
            _fun00026_ip = 514; continue _fun00025;
 344:
            if(!tangon) { _fun00026_ip = 350; continue _fun00025 }
 347:
            tangon = !golfie;
 350:
            if(!tangon) { _fun00026_ip = 449; continue _fun00025 }
 353:
            golfie = _closure1_slot1;
            yankee = _closure1_slot2;
            tangon = 43;
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
            zuuluu = 49;
            zuuluu = yankee[zuuluu];
            zuuluu = verify.bind(report)(zuuluu);
            verify = zuuluu.isStable;
            zuuluu = ' isStable: ';
            zuuluu = offset + zuuluu;
            zuuluu = zuuluu + verify;
            zuuluu = tangon.bind(golfie)(zuuluu);
 449:
            tangon = _closure1_slot17;
            zuuluu = _closure1_slot23;
            michal = {};
            kiloes = michal;
            backup = oscard;
            golfie = copyDataProperties(kiloes, backup);
            golfie = 'storeFront';
            michal[golfie] = option;
            option = oscard.screen;
            golfie = 'screen';
            michal[golfie] = option;
            golfie = oscard.scrollToTop;
            oscard = 'scrollToTop';
            michal[oscard] = golfie;
            entity = tangon.bind(report)(zuuluu, michal);
 514:
            return entity;
        }
    };
    tangon = 50;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShopV2.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['CollectiblesShopV2'] = michal;
    return entity;
})();