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
            verify = _closure1_slot17;
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
            golfie = _closure1_slot17;
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
    tangon = 40;
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
            papara = entity.onClose;
            report = undefined;
            var _closure2_slot1 = report;
            var _closure2_slot2 = report;
            var _closure2_slot3 = report;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            var _closure2_slot8 = report;
            var _closure2_slot9 = report;
            var _closure2_slot10 = report;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 8;
            entity = tangon[entity];
            golfie = oscard.bind(report)(entity);
            zuuluu = golfie.useCommonTriggerPoint;
            entity = 9;
            entity = tangon[entity];
            entity = oscard.bind(report)(entity);
            entity = entity.CollectiblesShopOpenTriggerPoint;
            entity = zuuluu.bind(golfie)(entity);
            entity = 10;
            zuuluu = tangon[entity];
            verify = oscard.bind(report)(zuuluu);
            option = verify.useStateFromStoresArray;
            zuuluu = _closure1_slot9;
            golfie = new Array(1);
            golfie[0] = zuuluu;
            zuuluu = function() {
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
            option = option.bind(verify)(golfie, zuuluu);
            golfie = _closure1_slot3;
            zuuluu = 1;
            zuuluu = golfie.bind(report)(option, zuuluu);
            option = 0;
            zuuluu = zuuluu[option];
            golfie = global;
            verify = golfie.Date;
            golfie = verify.now;
            golfie = golfie.bind(verify)();
            verify = golfie - zuuluu;
            golfie = 11;
            golfie = tangon[golfie];
            golfie = oscard.bind(report)(golfie);
            golfie = golfie.COLLECTIBLES_STORE_LISTING_CACHE_DURATION;
            verify = verify > golfie;
            ctrled = 12;
            tangon = tangon[ctrled];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.isAndroid;
            offset = tangon.bind(oscard)();
            if(offset) { _fun00008_ip = 290; continue _fun00007 }
 244:
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            tangon = tangon[ctrled];
            oscard = oscard.bind(report)(tangon);
            tangon = oscard.isIOS;
            tangon = tangon.bind(oscard)();
            if(!tangon) { _fun00008_ip = 287; continue _fun00007 }
 274:
            oscard = option === zuuluu;
            if(oscard) { _fun00008_ip = 284; continue _fun00007 }
 281:
            oscard = verify;
 284:
            tangon = oscard;
 287:
            offset = tangon;
 290:
            tangon = _closure1_slot14;
            oscard = tangon.bind(report)();
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            tangon = 13;
            tangon = romeon[tangon];
            golfie = yankee.bind(report)(tangon);
            tangon = {};
            foxtra = _closure1_slot11;
            foxtra = foxtra.APPLE;
            tangon['paymentGateway'] = foxtra;
            backup = 'CollectiblesShop.native';
            tangon['location'] = backup;
            offset = !offset;
            tangon['noOp'] = offset;
            golfie = golfie.bind(report)(tangon);
            tangon = golfie.categories;
            _closure2_slot1 = tangon;
            offset = golfie.isFetchingCategories;
            _closure2_slot2 = offset;
            foxtra = _closure1_slot0;
            golfie = 14;
            golfie = romeon[golfie];
            foxtra = foxtra.bind(report)(golfie);
            golfie = foxtra.useCollectiblesMobileBundle;
            vacuum = golfie.bind(foxtra)(backup);
            _closure2_slot3 = vacuum;
            golfie = 15;
            golfie = romeon[golfie];
            foxtra = yankee.bind(report)(golfie);
            golfie = 'shop_include_unpublished';
            kiloes = foxtra.bind(report)(golfie);
            _closure2_slot4 = kiloes;
            output = _closure1_slot4;
            backup = output.useMemo;
            foxtra = new Array(2);
            foxtra[0] = tangon;
            foxtra[1] = offset;
            golfie = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = true;
                    if(!(entity !== zuuluu)) { _fun00012_ip = 145; continue _fun00011 }
 18:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 12;
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
            foxtra = backup.bind(output)(golfie, foxtra);
            golfie = 16;
            golfie = romeon[golfie];
            romeon = yankee.bind(report)(golfie);
            yankee = romeon.useNativeIAPPayments;
            golfie = {};
            golfie['productIds'] = foxtra;
            foxtra = true;
            foxtra = foxtra === offset;
            golfie['fetchingProductIDs'] = foxtra;
            yankee = yankee.bind(romeon)(golfie);
            config = yankee.nativePaymentsConnected;
            _closure2_slot5 = config;
            golfie = yankee.storeFront;
            romeon = yankee.isFetchingNativeSKUs;
            output = null;
            yankee = output == golfie;
            record = undefined;
            if(yankee) { _fun00008_ip = 550; continue _fun00007 }
 544:
            record = golfie.country;
 550:
            _closure2_slot6 = record;
            echoed = _closure1_slot0;
            yankee = _closure1_slot2;
            golfie = 17;
            golfie = yankee[golfie];
            foxtra = echoed.bind(report)(golfie);
            golfie = foxtra.useReloadProfileEffectWhenConfigsAreMissing;
            golfie = golfie.bind(foxtra)();
            golfie = 18;
            golfie = yankee[golfie];
            foxtra = echoed.bind(report)(golfie);
            golfie = foxtra.useCurrentUser;
            foxtra = golfie.bind(foxtra)();
            _closure2_slot7 = foxtra;
            golfie = 19;
            golfie = yankee[golfie];
            backup = echoed.bind(report)(golfie);
            golfie = backup.usePurchasedCategoriesSort;
            source = golfie.bind(backup)(tangon);
            entity = yankee[entity];
            result = echoed.bind(report)(entity);
            backup = result.useStateFromStores;
            entity = _closure1_slot8;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 20;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.isThemeDark;
                entity = _closure1_slot8;
                entity = entity.theme;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = backup.bind(result)(golfie, entity);
            _closure2_slot8 = entity;
            entity = 20;
            entity = yankee[entity];
            golfie = echoed.bind(report)(entity);
            entity = golfie.useThemeContext;
            entity = entity.bind(golfie)();
            backup = entity.theme;
            sequen = _closure1_slot1;
            entity = 21;
            golfie = yankee[entity];
            result = sequen.bind(report)(golfie);
            golfie = 22;
            golfie = yankee[golfie];
            golfie = sequen.bind(report)(golfie);
            cntext = golfie.COLLECTIBLES_SHOP;
            golfie = new Array(1);
            golfie[0] = cntext;
            golfie = result.bind(report)(golfie);
            golfie = golfie.analyticsLocations;
            _closure2_slot9 = golfie;
            result = 23;
            result = yankee[result];
            cntext = sequen.bind(report)(result);
            result = {};
            result['onClose'] = papara;
            result = cntext.bind(report)(result);
            result = 24;
            result = yankee[result];
            result = sequen.bind(report)(result);
            result = result.bind(report)();
            result = result.top;
            yankee = yankee[ctrled];
            echoed = echoed.bind(report)(yankee);
            yankee = echoed.isAndroid;
            yankee = yankee.bind(echoed)();
            sequen = source;
            if(!yankee) { _fun00008_ip = 861; continue _fun00007 }
 830:
            echoed = _closure1_slot0;
            ctrled = _closure1_slot2;
            yankee = 25;
            yankee = ctrled[yankee];
            echoed = echoed.bind(report)(yankee);
            yankee = echoed.filterGPlaySyncedCategories;
            sequen = yankee.bind(echoed)(source);
 861:
            ctrled = _closure1_slot0;
            cntext = _closure1_slot2;
            yankee = 26;
            yankee = cntext[yankee];
            source = ctrled.bind(report)(yankee);
            echoed = source.useCollectiblesShopDeepLinkProps;
            yankee = {};
            yankee['categories'] = sequen;
            yankee = echoed.bind(source)(yankee);
            echoed = yankee.categoryIndex;
            source = _closure1_slot1;
            yankee = 27;
            yankee = cntext[yankee];
            source = source.bind(report)(yankee);
            yankee = 28;
            yankee = cntext[yankee];
            ctrled = ctrled.bind(report)(yankee);
            yankee = ctrled.v4;
            yankee = yankee.bind(ctrled)();
            yankee = source.bind(report)(yankee);
            _closure2_slot10 = yankee;
            source = _closure1_slot4;
            cntext = source.useEffect;
            ctrled = new Array(3);
            ctrled[0] = golfie;
            ctrled[1] = sizing;
            ctrled[2] = yankee;
            sizing = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                entity = 29;
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
            sizing = cntext.bind(source)(sizing, ctrled);
            ctrled = source.useEffect;
            sizing = new Array(4);
            sizing[0] = record;
            sizing[1] = config;
            sizing[2] = vacuum;
            sizing[3] = kiloes;
            kiloes = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    entity = _closure2_slot5;
                    if(!entity) { _fun00016_ip = 20; continue _fun00015 }
 10:
                    zuuluu = _closure2_slot6;
                    michal = null;
                    entity = michal != zuuluu;
 20:
                    if(!entity) { _fun00016_ip = 103; continue _fun00015 }
 23:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 30;
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
                    entity = michal.bind(zuuluu)(entity);
 103:
                    entity = undefined;
                    return entity;
                }
            };
            kiloes = ctrled.bind(source)(kiloes, sizing);
            sizing = source.useEffect;
            kiloes = new Array(1);
            kiloes[0] = foxtra;
            foxtra = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 31;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = _closure2_slot7;
                michal = michal.id;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            foxtra = sizing.bind(source)(foxtra, kiloes);
            if(offset) { _fun00008_ip = 1060; continue _fun00007 }
 1057:
            if(!romeon) { _fun00008_ip = 1078; continue _fun00007 }
 1060:
            romeon = tangon.size;
            if(!(option !== romeon)) { _fun00008_ip = 1641; continue _fun00007 }
 1072:
            if(verify) { _fun00008_ip = 1641; continue _fun00007 }
 1078:
            zuuluu = zuuluu > option;
            if(!zuuluu) { _fun00008_ip = 1091; continue _fun00007 }
 1085:
            verify = false;
            zuuluu = verify === offset;
 1091:
            if(!zuuluu) { _fun00008_ip = 1103; continue _fun00007 }
 1094:
            tangon = tangon.size;
            zuuluu = option === tangon;
 1103:
            if(!zuuluu) { _fun00008_ip = 1143; continue _fun00007 }
 1106:
            tangon = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 32;
            zuuluu = option[zuuluu];
            option = tangon.bind(report)(zuuluu);
            tangon = option.captureMessage;
            zuuluu = 'collectibles mobile shop loaded empty categories';
            zuuluu = tangon.bind(option)(zuuluu);
 1143:
            tangon = _closure1_slot12;
            ctrled = _closure1_slot0;
            foxtra = _closure1_slot2;
            entity = foxtra[entity];
            entity = ctrled.bind(report)(entity);
            zuuluu = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = golfie;
            verify = _closure1_slot13;
            golfie = 33;
            golfie = foxtra[golfie];
            golfie = ctrled.bind(report)(golfie);
            option = golfie.CollectiblesAnalyticsProvider;
            golfie = {};
            offset = {};
            offset['sessionId'] = yankee;
            golfie['newValue'] = offset;
            romeon = _closure1_slot1;
            offset = 34;
            offset = foxtra[offset];
            yankee = romeon.bind(report)(offset);
            offset = {};
            kiloes = 0.5;
            offset['blurAmount'] = kiloes;
            kiloes = _closure1_slot6;
            sizing = kiloes.absoluteFill;
            kiloes = new Array(3);
            kiloes[0] = sizing;
            sizing = oscard.blur;
            kiloes[1] = sizing;
            sizing = {};
            source = 48;
            source = source + result;
            sizing['height'] = source;
            kiloes[2] = sizing;
            offset['style'] = kiloes;
            offset['blurTheme'] = backup;
            yankee = tangon.bind(report)(yankee, offset);
            offset = new Array(3);
            offset[0] = yankee;
            backup = _closure1_slot7;
            yankee = {};
            kiloes = {};
            target = oscard.rootContainer;
            status = kiloes;
            sizing = copyDataProperties(status, target);
            sizing = 'paddingTop';
            kiloes[sizing] = result;
            yankee['style'] = kiloes;
            kiloes = 35;
            kiloes = foxtra[kiloes];
            kiloes = ctrled.bind(report)(kiloes);
            sizing = kiloes.NativePaymentContextProvider;
            kiloes = {};
            result = new Array(0);
            kiloes['skuIDs'] = result;
            kiloes['activeSubscription'] = output;
            output = 36;
            output = foxtra[output];
            output = ctrled.bind(report)(output);
            result = output.FlashList;
            output = {};
            source = 37;
            vacuum = foxtra[source];
            vacuum = ctrled.bind(report)(vacuum);
            config = vacuum.intl;
            vacuum = config.string;
            source = foxtra[source];
            source = ctrled.bind(report)(source);
            source = source.t;
            source = source.pWG4zc;
            source = vacuum.bind(config)(source);
            output['accessibilityLabel'] = source;
            vacuum = sequen.filter;
            source = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.unpublishedAt;
                    entity = null;
                    entity = entity == zuuluu;
                    if(entity) { _fun00018_ip = 56; continue _fun00017 }
 18:
                    zuuluu = michal.unpublishedAt;
                    michal = global;
                    michal = michal.Date;
                    tangon = michal.prototype;
                    tangon = Object.create(tangon, {constructor: {value: michal}});
                    report = tangon;
                    michal = new report[michal](tangon);
                    michal = michal instanceof Object ? michal : tangon;
                    entity = zuuluu > michal;
 56:
                    return entity;
                }
            };
            sequen = vacuum.bind(sequen)(source);
            vacuum = sequen.filter;
            source = function(argFoo) {
                entity = argFoo;
                entity = entity.products;
                michal = entity.length;
                entity = 0;
                entity = michal > entity;
                return entity;
            };
            source = vacuum.bind(sequen)(source);
            output['data'] = source;
            update = function(argFoo) { // Original name: renderItem
                entity = argFoo;
                oscard = entity.item;
                report = entity.index;
                tangon = _closure1_slot12;
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 38;
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
            output['renderItem'] = update;
            update = false;
            output['showsVerticalScrollIndicator'] = update;
            update = 38;
            source = foxtra[update];
            source = ctrled.bind(report)(source);
            source = source.CATEGORY_CONTAINER_HEIGHT;
            update = foxtra[update];
            update = ctrled.bind(report)(update);
            update = update.CATEGORY_CONTAINER_BOTTOM_MARGIN;
            update = source + update;
            output['estimatedItemSize'] = update;
            update = _closure1_slot15;
            output['ListHeaderComponent'] = update;
            output['initialScrollIndex'] = echoed;
            output = tangon.bind(report)(result, output);
            kiloes['children'] = output;
            kiloes = tangon.bind(report)(sizing, kiloes);
            yankee['children'] = kiloes;
            yankee = tangon.bind(report)(backup, yankee);
            offset[1] = yankee;
            yankee = 39;
            yankee = foxtra[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = {};
            yankee = tangon.bind(report)(romeon, yankee);
            offset[2] = yankee;
            golfie['children'] = offset;
            golfie = verify.bind(report)(option, golfie);
            entity['children'] = golfie;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00008_ip = 1675; continue _fun00007;
 1641:
            tangon = _closure1_slot12;
            zuuluu = _closure1_slot5;
            michal = {};
            oscard = oscard.spinner;
            michal['style'] = oscard;
            oscard = 'large';
            michal['size'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 1675:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();